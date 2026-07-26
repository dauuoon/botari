import { asset } from '../lib/asset';
export type CharacterOption = {
  value: string;
  label: string;
  thumbnail: string;
  promptTemplate: string;
};

export type StyleOption = {
  id: string;
  label: string;
  tone: string;
  thumbnail: string;
  promptTemplate: string;
};

export const characterOptions: CharacterOption[] = [
  {
    value: 'tiger',
    label: '호랑이',
    thumbnail: asset('assets/characters/tiger.svg'),
    promptTemplate: '호랑이의 강인하고 용맹한 분위기를 강조합니다.',
  },
  {
    value: 'haetae',
    label: '해태',
    thumbnail: asset('assets/characters/haetae.svg'),
    promptTemplate: '해태의 수호적이고 위엄 있는 분위기를 담습니다.',
  },
  {
    value: 'dragon',
    label: '용',
    thumbnail: asset('assets/characters/dragon.svg'),
    promptTemplate: '용의 역동적이고 신비로운 기운을 표현합니다.',
  },
  {
    value: 'magpie',
    label: '까치',
    thumbnail: asset('assets/characters/magpie.svg'),
    promptTemplate: 'Convert the original Korean minhwa magpie into an original character while preserving the distinctive facial features, silhouette, proportions, and personality of the original bird. Keep the character clearly recognizable as the original minhwa magpie. Create an original design instead of copying any existing commercial character. Use the reference image only as inspiration for rendering style, proportions, materials, and visual language. Do not copy facial details, accessories, colors, poses, or copyrighted design elements. Design a unique character suitable for games and animation. Full body. Standing naturally. Transparent background.',
  },
  {
    value: 'carp',
    label: '잉어',
    thumbnail: asset('assets/characters/carp.svg'),
    promptTemplate: '잉어의 힘찬 도약과 풍요로운 상징성을 강조합니다.',
  },
  {
    value: 'other',
    label: '기타',
    thumbnail: asset('assets/characters/landscape.svg'),
    promptTemplate: '기타 생성 개체의 자유로운 특징을 반영합니다.',
  },
];

export const botariStyles: StyleOption[] = [
  {
    id: 'traditional',
    label: '전통민화',
    tone: 'burnt',
    thumbnail: asset('assets/styles/01.png'),
    promptTemplate: 'Render the character in a traditional Korean minhwa style. Flat colors, decorative brush lines, hand-painted textures, Korean folk painting aesthetics. Keep proportions simple and expressive. Do not modernize the design.',
  },
  {
    id: 'hanji',
    label: '한지',
    tone: 'pearl',
    thumbnail: asset('assets/styles/02.png'),
    promptTemplate: 'Render with traditional Korean hanji paper feel. Visible paper fibers, soft diffuse lighting, gentle color bleeding. Subtle ink edges. Avoid glossy digital gradients.',
  },
  {
    id: 'ceramic',
    label: '도자기',
    tone: 'gold',
    thumbnail: asset('assets/styles/03.png'),
    promptTemplate: 'Render as painted ceramic. Glazed surface highlights, gentle curvature, hand-painted ornament patterns. Balanced reflections. Avoid photorealistic studio product shots.',
  },
  {
    id: 'clay',
    label: '클레이',
    tone: 'stone',
    thumbnail: asset('assets/styles/04.png'),
    promptTemplate: 'Render as clay model. Soft clay texture, finger-pressed details, matte look. Slight imperfections. Simple shapes with clear silhouette.',
  },
  {
    id: 'felt',
    label: '양모펠트',
    tone: 'sepia',
    thumbnail: asset('assets/styles/05.png'),
    promptTemplate: 'Render as felt craft. Soft felt fibers, stitched seams, plush edges. Gentle lighting. Cute, handcrafted appearance.',
  },
  {
    id: 'plush',
    label: '봉제인형',
    tone: 'ink',
    thumbnail: asset('assets/styles/06.png'),
    promptTemplate: 'Render as a sewn plush toy. Fabric texture, visible stitches, stuffed volume, soft shadows. Friendly stylization. Avoid realistic animal photography.',
  },
  {
    id: 'knit',
    label: '니트',
    tone: 'pearl',
    thumbnail: asset('assets/styles/07.png'),
    promptTemplate: 'Render in knitted yarn style. Clear knit loops, wool fuzz, warm lighting. Keep forms simple and readable.',
  },
  {
    id: 'neon',
    label: '네온',
    tone: 'gold',
    thumbnail: asset('assets/styles/08.png'),
    promptTemplate: 'Render with neon glow aesthetic. Bold shapes, high-contrast lighting, bright neon rim lights, dark background for readability. Avoid realistic signage photography.',
  },
  {
    id: 'gameart',
    label: '게임아트',
    tone: 'stone',
    thumbnail: asset('assets/styles/09.png'),
    promptTemplate: 'Render in stylized game art. Clean PBR-inspired materials, simplified forms, readable shapes. Hand-painted feeling with controlled highlights. Original interpretation; do not copy existing game IP.',
  },
];
