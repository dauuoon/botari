import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type ThreeDAssetViewerProps = {
  wireframe: boolean;
  skeleton?: boolean;
  onSkeletonSupportChange?: (available: boolean) => void;
  modelUrl?: string;
};

export function ThreeDAssetViewer({ wireframe, skeleton = false, onSkeletonSupportChange, modelUrl = '/assets/generated/rigged-example.glb' }: ThreeDAssetViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRootRef = useRef<THREE.Group | null>(null);
  const skeletonGroupRef = useRef<THREE.Group | null>(null);
  const jointMarkerGroupRef = useRef<THREE.Group | null>(null);
  const jointMarkerStoreRef = useRef<Array<{ bone: THREE.Bone; marker: THREE.Object3D }>>([]);
  const jointLineGroupRef = useRef<THREE.Group | null>(null);
  const jointLineStoreRef = useRef<Array<{ bone: THREE.Bone; parent: THREE.Bone; geometry: THREE.BufferGeometry; line: THREE.Line; positions: Float32Array }>>([]);
  const materialStoreRef = useRef<THREE.Material[]>([]);
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111418);
    scene.fog = new THREE.Fog(0x0b0d0f, 12, 30);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(7.2, 4.8, 8.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x0b0d0f, 1);
    renderer.domElement.className = 'three-d-asset-viewer__canvas';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = true;
    controls.minDistance = 4.6;
    controls.maxDistance = 16;
    controls.target.set(0, 1.7, 0);
    controls.update();

    const ambient = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff3e2, 3.6);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8ec9eb, 1.8);
    rimLight.position.set(-4, 3, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xea9989, 1.1);
    fillLight.position.set(-2, -1, 4);
    scene.add(fillLight);

    const gridHelper = new THREE.GridHelper(12, 12, 0x384049, 0x232a31);
    gridHelper.position.y = -1.14;
    scene.add(gridHelper);

    // axes helper removed per request

    const shadowPlane = new THREE.Mesh(
      new THREE.CircleGeometry(3.8, 40),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22 }),
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.08;
    scene.add(shadowPlane);

    const modelRoot = new THREE.Group();
    scene.add(modelRoot);
    modelRootRef.current = modelRoot;

    const skeletonGroup = new THREE.Group();
    modelRoot.add(skeletonGroup);
    skeletonGroupRef.current = skeletonGroup;

    const jointMarkerGroup = new THREE.Group();
    jointMarkerGroup.renderOrder = 1000;
    modelRoot.add(jointMarkerGroup);
    jointMarkerGroupRef.current = jointMarkerGroup;
    jointMarkerStoreRef.current = [];

    const jointLineGroup = new THREE.Group();
    jointLineGroup.renderOrder = 1000;
    modelRoot.add(jointLineGroup);
    jointLineGroupRef.current = jointLineGroup;
    jointLineStoreRef.current = [];

    const materials = materialStoreRef.current;
    materials.length = 0;

    const loader = new GLTFLoader();
    let isUnmounted = false;

    loader.load(
      modelUrl,
      (gltf) => {
        if (isUnmounted) {
          gltf.scene.traverse((object) => {
            if ((object as THREE.Mesh).isMesh) {
              const mesh = object as THREE.Mesh;
              mesh.geometry.dispose();
              const meshMaterial = mesh.material;
              if (Array.isArray(meshMaterial)) {
                meshMaterial.forEach((material) => material.dispose());
              } else {
                meshMaterial.dispose();
              }
            }
          });
          return;
        }

        while (modelRoot.children.length > 0) {
          modelRoot.remove(modelRoot.children[0]);
        }

        if (skeletonGroupRef.current) {
          modelRoot.add(skeletonGroupRef.current);
        }
        if (jointMarkerGroupRef.current) {
          modelRoot.add(jointMarkerGroupRef.current);
        }
        if (jointLineGroupRef.current) {
          modelRoot.add(jointLineGroupRef.current);
        }

        materialStoreRef.current = [];

        const model = gltf.scene;

        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        const sphere = bounds.getBoundingSphere(new THREE.Sphere());
        const radius = Math.max(sphere.radius, 1);
        const scale = 2.75 / radius;

        model.position.sub(center);
        model.scale.setScalar(scale);

        const fittedBounds = new THREE.Box3().setFromObject(model);
        const fittedCenter = fittedBounds.getCenter(new THREE.Vector3());
        model.position.sub(fittedCenter);
        model.position.y -= 0.15;
        model.rotation.y = -0.9;

        model.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            const mesh = object as THREE.Mesh;
            const meshMaterial = mesh.material;

            if (Array.isArray(meshMaterial)) {
              meshMaterial.forEach((material) => {
                materialStoreRef.current.push(material);
              });
            } else {
              materialStoreRef.current.push(meshMaterial);
            }
          }
        });

        modelRoot.add(model);

        // Build skeleton helpers if needed
        let hasSkeleton = false;
        let skinnedMeshCount = 0;
        let boneCount = 0;

        if (skeletonGroupRef.current) {
          // clear existing helpers
          while (skeletonGroupRef.current.children.length > 0) {
            const child = skeletonGroupRef.current.children[0];
            skeletonGroupRef.current.remove(child);
          }
        }

        const jointMarkers = jointMarkerStoreRef.current;
        jointMarkers.forEach(({ marker }) => {
          if (marker instanceof THREE.Mesh || marker instanceof THREE.LineSegments) {
            marker.geometry.dispose();
            const material = marker.material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else if (material) {
              material.dispose();
            }
          }
        });
        jointMarkerStoreRef.current = [];

        if (jointMarkerGroupRef.current) {
          while (jointMarkerGroupRef.current.children.length > 0) {
            const child = jointMarkerGroupRef.current.children[0];
            jointMarkerGroupRef.current.remove(child);
          }
        }

        const jointLines = jointLineStoreRef.current;
        jointLines.forEach(({ geometry, line }) => {
          geometry.dispose();
          const material = line.material;
          if (Array.isArray(material)) {
            material.forEach((mat) => mat.dispose());
          } else if (material) {
            material.dispose();
          }
        });
        jointLineStoreRef.current = [];

        if (jointLineGroupRef.current) {
          while (jointLineGroupRef.current.children.length > 0) {
            const child = jointLineGroupRef.current.children[0];
            jointLineGroupRef.current.remove(child);
          }
        }

        model.traverse((obj) => {
          const skinned = obj as unknown as THREE.SkinnedMesh;
          // @ts-ignore check for skeleton property at runtime
          if ((skinned as any).isSkinnedMesh && skinned.skeleton) {
            skinnedMeshCount++;
            const bones = skinned.skeleton.bones || [];
            boneCount += bones.length;

            const helper = new THREE.SkeletonHelper(skinned);
            helper.visible = skeleton;
            helper.frustumCulled = false;
            helper.renderOrder = 999;
            const mat = helper.material as THREE.LineBasicMaterial;
            mat.depthTest = false;
            mat.transparent = true;
            mat.opacity = 1;
            mat.color = new THREE.Color(0x00ffff);
            skeletonGroupRef.current?.add(helper);

            const markerGeometry = new THREE.SphereGeometry(0.035, 10, 10);
            bones.forEach((bone) => {
              const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff6f00, depthTest: false, transparent: true, opacity: 0.9 });
              const marker = new THREE.Mesh(markerGeometry.clone(), markerMaterial);
              marker.visible = skeleton;
              marker.renderOrder = 1000;
              jointMarkerGroupRef.current?.add(marker);
              jointMarkerStoreRef.current.push({ bone, marker });

              const parent = bone.parent as THREE.Bone | null;
              if (parent && (parent as any).isBone) {
                const positions = new Float32Array(6);
                const geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, depthTest: false, transparent: true, opacity: 0.65, linewidth: 2 });
                const line = new THREE.Line(geometry, lineMaterial);
                line.renderOrder = 1000;
                line.visible = skeleton;
                jointLineGroupRef.current?.add(line);
                jointLineStoreRef.current.push({ bone, parent, geometry, line, positions });
              }
            });
            markerGeometry.dispose();

            hasSkeleton = true;
          }
        });

        console.info('[3D Viewer] SkinnedMesh count:', skinnedMeshCount, 'Bone count:', boneCount);
        if (!hasSkeleton) {
          console.warn('[3D Viewer] No skeleton data detected in model:', modelUrl);
        }
        onSkeletonSupportChange?.(hasSkeleton);

        controls.target.set(0, 0, 0);
        camera.position.set(4.8, 3.8, 5.8);
        controls.update();
        setLoadState('ready');
      },
      undefined,
      () => {
        if (isUnmounted) {
          return;
        }

        onSkeletonSupportChange?.(false);

        const fallbackMaterial = new THREE.MeshStandardMaterial({
          color: 0xe8c08c,
          roughness: 0.82,
          metalness: 0.04,
          flatShading: true,
          wireframe,
        });

        materialStoreRef.current = [fallbackMaterial];

        const fallbackMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), fallbackMaterial);
        fallbackMesh.position.set(0, 0.2, 0);
        modelRoot.add(fallbackMesh);
        controls.target.set(0, 0, 0);
        camera.position.set(4.8, 3.8, 5.8);
        controls.update();
        setLoadState('error');
      },
    );

    const resize = () => {
      const { clientWidth, clientHeight } = container;

      if (clientWidth === 0 || clientHeight === 0) {
        return;
      }

      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };

    const tempVector = new THREE.Vector3();
    const tempVector2 = new THREE.Vector3();
    const tempVector3 = new THREE.Vector3();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      if (modelRoot.children.length > 0) {
        modelRoot.rotation.y += 0.0022;
      }
      controls.update();

      // ensure skeleton helpers update each frame
      if (skeletonGroupRef.current) {
        skeletonGroupRef.current.children.forEach((child) => {
          // @ts-ignore SkeletonHelper has update()
          child.update && child.update();
        });
      }

      const modelRootCurrent = modelRootRef.current;
      if (modelRootCurrent) {
        if (jointMarkerStoreRef.current.length > 0) {
          jointMarkerStoreRef.current.forEach(({ bone, marker }) => {
            bone.getWorldPosition(tempVector3);
            modelRootCurrent.worldToLocal(tempVector3);
            marker.position.copy(tempVector3);
          });
        }

        if (jointLineStoreRef.current.length > 0) {
          jointLineStoreRef.current.forEach(({ bone, parent, geometry, positions }) => {
            bone.getWorldPosition(tempVector);
            parent.getWorldPosition(tempVector2);
            modelRootCurrent.worldToLocal(tempVector);
            modelRootCurrent.worldToLocal(tempVector2);
            positions[0] = tempVector2.x;
            positions[1] = tempVector2.y;
            positions[2] = tempVector2.z;
            positions[3] = tempVector.x;
            positions[4] = tempVector.y;
            positions[5] = tempVector.z;
            const attribute = geometry.getAttribute('position') as THREE.BufferAttribute;
            attribute.needsUpdate = true;
          });
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isUnmounted = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();

      materials.forEach((material) => {
        material.dispose();
      });

      if (skeletonGroupRef.current) {
        skeletonGroupRef.current.traverse((obj) => {
          // dispose helpers geometry/material if any
          // SkeletonHelper uses LineSegments with geometry/material
          // @ts-ignore
          if (obj.geometry) obj.geometry.dispose?.();
          // @ts-ignore
          if (obj.material) obj.material.dispose?.();
        });
      }

      if (jointMarkerGroupRef.current) {
        jointMarkerGroupRef.current.traverse((obj) => {
          if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
            obj.geometry.dispose();
            const material = obj.material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else if (material) {
              material.dispose();
            }
          }
        });
      }

      jointMarkerStoreRef.current = [];

      if (jointLineGroupRef.current) {
        jointLineGroupRef.current.traverse((obj) => {
          if (obj instanceof THREE.Line) {
            obj.geometry.dispose();
            const material = obj.material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else if (material) {
              material.dispose();
            }
          }
        });
      }

      jointLineStoreRef.current = [];

      scene.traverse((object: THREE.Object3D) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
        }
      });

      materialStoreRef.current = [];
      modelRootRef.current = null;

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    materialStoreRef.current.forEach((material) => {
      if (material instanceof THREE.MeshStandardMaterial || material instanceof THREE.MeshPhysicalMaterial || material instanceof THREE.MeshBasicMaterial) {
        material.wireframe = wireframe;
        material.needsUpdate = true;
      }
    });
  }, [wireframe]);

  useEffect(() => {
    const group = skeletonGroupRef.current;
    const markerGroup = jointMarkerGroupRef.current;
    const lineGroup = jointLineGroupRef.current;
    if (group) {
      group.visible = skeleton;
      group.children.forEach((child) => {
        child.visible = skeleton;
      });
    }
    if (markerGroup) {
      markerGroup.visible = skeleton;
      markerGroup.children.forEach((child) => {
        child.visible = skeleton;
      });
    }
    if (lineGroup) {
      lineGroup.visible = skeleton;
      lineGroup.children.forEach((child) => {
        child.visible = skeleton;
      });
    }
  }, [skeleton]);

  return (
    <div ref={containerRef} className="three-d-asset-viewer" aria-label="3D 캔버스">
      {loadState !== 'ready' ? (
        <div className={`three-d-asset-viewer__status${loadState === 'error' ? ' is-error' : ''}`}>
          <p className="three-d-asset-viewer__status-title">
            {loadState === 'error' ? '3D 예제를 불러오지 못했습니다' : '3D 예제 로딩 중'}
          </p>
          <p className="three-d-asset-viewer__status-text">
            {loadState === 'error' ? '대체 프리뷰를 표시 중입니다.' : '모델을 준비하는 중입니다.'}
          </p>
        </div>
      ) : null}
    </div>
  );
}