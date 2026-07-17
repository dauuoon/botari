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
    promptTemplate: '기타 캐릭터의 자유로운 특징을 반영합니다.',
  },
];

export const botariStyles: StyleOption[] = [
  {
    id: 'traditional',
    label: '전통 민화',
    tone: 'burnt',
    thumbnail: asset('assets/styles/traditional.svg'),
    promptTemplate: 'Render the character in a traditional Korean minhwa style. Preserve flat colors, decorative brush lines, hand-painted textures, and Korean folk painting aesthetics. Keep the original exaggerated facial expression and simple body proportions. Do not modernize the design.',
  },
  {
    id: 'ink',
    label: '수묵 담채화',
    tone: 'ink',
    thumbnail: asset('assets/styles/ink.svg'),
    promptTemplate: 'Render the character in a Korean ink-and-light-color painting style. Soft ink wash. Minimal watercolor coloring. Visible brush strokes. Traditional paper texture. Keep the design simple and elegant.',
  },
  {
    id: 'modern',
    label: '모던화',
    tone: 'sepia',
    thumbnail: asset('assets/styles/modern.svg'),
    promptTemplate: 'Render the character as a modern illustration. Clean shapes. Soft gradients. Simple geometric forms. Stylized proportions. Friendly design. Create an original interpretation inspired by the reference style rather than copying it.',
  },
  {
    id: 'realistic',
    label: '실사화',
    tone: 'gold',
    thumbnail: asset('assets/styles/realistic.svg'),
    promptTemplate: 'Render the character as a believable stylized bird. Detailed feathers. Natural lighting. Realistic beak and legs. Preserve the recognizable face and proportions of the original minhwa bird. Avoid photorealistic wildlife photography.',
  },
  {
    id: 'sketch',
    label: '스케치',
    tone: 'stone',
    thumbnail: asset('assets/styles/sketch.svg'),
    promptTemplate: 'Render the character as a concept sketch. Clean pencil drawing. Construction lines. Hand-drawn feeling. Focus on the silhouette and facial expression. No color rendering.',
  },
  {
    id: 'character3d',
    label: '캐릭터(3D)',
    tone: 'pearl',
    thumbnail: asset('assets/styles/character3d.svg'),
    promptTemplate: 'Render the original minhwa magpie as an original stylized 3D animation character. Large expressive eyes. Rounded forms. Clean topology. Smooth surfaces. Game-ready proportions. Inspired by modern stylized animation characters. Do not imitate any existing copyrighted character. Unique facial design. Full body. Neutral standing pose.',
  },
];
