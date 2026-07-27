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
    promptTemplate: `Keywords: minhwa, tiger.
Humorous tiger. Reddish-brown body. Black stripes. Large yellow eyes. Large red nose. Small teeth. Curled tail.
Curved pine tree. Tiger and magpie facing each other. Rock. Simplified traditional minhwa background.

Avoid (negative prompt): photorealistic, photography, realistic photo, 3d render, CGI, anime, manga, modern cartoon, western comic,
lion, leopard, cheetah, jaguar, domestic cat, dog, wolf, fox,
human body, humanoid tiger, anthropomorphic tiger,
standing upright, standing on two legs, wearing clothes,
fish, carp, whale, dolphin, otter, seal,
dragon, horse, bear,
extra legs, missing legs, extra paws, malformed paws,
extra tail, multiple tails, missing tail,
two heads, duplicate animal, multiple tigers,
cropped body, cropped head, out of frame,
text, letters, watermark, logo, signature,
blurry, low quality, distorted, deformed,
white tiger, albino tiger, entirely white body,
wings, feathered wings, bird wings, angel wings, multiple wings, flying tiger.`,
  },
  {
    value: 'haetae',
    label: '해태',
    thumbnail: asset('assets/characters/haetae.svg'),
    promptTemplate: `Keywords: minhwa, haetae.
One traditional Korean haetae. Playful face. Thick mane. Red horns. Sitting on a rock. Traditional minhwa background.

Avoid (negative prompt): dense spots, small spots, clustered dots, trypophobia, honeycomb, porous texture,
fish scales, snake scales, dense scales, repeating pattern, repeating circular pattern, high frequency texture,
photorealistic, photography, realistic photo, 3d render, CGI, anime, manga, modern cartoon, western comic,
tiger, lion, leopard, cheetah, jaguar, domestic cat, dog, wolf, fox, bear, horse, dragon, griffin, qilin,
fish, carp, whale, dolphin, otter, seal,
human body, humanoid creature, anthropomorphic character,
standing upright, standing on two legs, wearing clothes,
multiple haetae, two haetae, three haetae, four haetae, group of animals, herd, pack, duplicate animal, duplicated creature,
extra legs, missing legs, extra paws, malformed paws,
extra tail, multiple tails, missing tail,
extra horns, multiple horns, malformed horns,
two heads, multiple heads,
cropped body, cropped head, out of frame, pine tree, pine forest, magpie,
text, letters, watermark, logo, signature,
blurry, low quality, distorted, deformed.`,
  },
  {
    value: 'dragon',
    label: '용',
    thumbnail: asset('assets/characters/dragon.svg'),
    promptTemplate: `Keywords: minhwa, dragon.
A simplified dragon in traditional Korean minhwa style.
A thin, long, serpentine body.
A small head relative to the body.
Round eyes.
A small, slightly open mouth.
Two long whiskers extending from both sides of the head.
Four short legs attached close to the body.
Small, simplified claws.
Short pointed spines running along the back.
Simple repeated scale patterns.
No wings.
Small and simplified horns.
A playful, modest appearance rather than an ornate or intimidating dragon.`,
  },
  {
    value: 'magpie',
    label: '까치',
    thumbnail: asset('assets/characters/magpie.svg'),
    promptTemplate: `Convert the original Korean minhwa magpie into an original character while preserving the distinctive facial features, silhouette, proportions, and personality of the original bird.

Keep the character clearly recognizable as the original minhwa magpie.

Create an original design instead of copying any existing commercial character.

Use the reference image only as inspiration for rendering style, proportions, materials, and visual language.

Do not copy facial details, accessories, colors, poses, or copyrighted design elements.

Design a unique character suitable for games and animation.

Full body.
Standing naturally.
Transparent background.

Render the character in a traditional Korean minhwa style.

Preserve flat colors, decorative brush lines, hand-painted textures, and Korean folk painting aesthetics.

Keep the original exaggerated facial expression and simple body proportions.

Do not modernize the design.`,
  },
  {
    value: 'carp',
    label: '잉어',
    thumbnail: asset('assets/characters/carp.svg'),
    promptTemplate: `STYLE: TRADITIONAL KOREAN MINHWA PAINTING

Transform the animal into a fully rendered traditional Korean minhwa painting.

The entire character must be painted in one visually unified traditional minhwa style.

Use authentic characteristics of Korean folk painting:

- hand-painted brushwork
- natural ink outlines
- mineral pigment appearance
- opaque layered colors
- subtle brush texture
- soft handmade imperfections
- decorative folk-art simplification
- slightly uneven symmetry
- expressive traditional line work
- flat yet lively painted forms
- rhythmic ornamental patterns
- warm handmade aesthetic

Preserve the exact species anatomy,
pose,
silhouette,
facial expression,
marking arrangement,
and dominant colors.

For a carp,
preserve the traditional flowing body,
graceful fins,
long barbels,
decorative scale rhythm,
and elegant swimming posture.

Maintain the intentionally charming,
slightly awkward,
folk-art anatomy typical of Korean minhwa.

The painting should resemble an authentic Joseon-era Korean minhwa artwork,
not a modern illustration,
anime,
mascot,
vector graphic,
or realistic wildlife painting.

Do not use:

- realistic fur
- realistic feathers
- photorealistic rendering
- plastic
- clay
- ceramic
- paper craft
- origami
- cardboard
- 3D sculpting
- CGI
- glossy rendering
- game character rendering`,
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
    promptTemplate: `STYLE: KOREAN HANJI PAPER CRAFT CHARACTER

Transform the character into a three-dimensional Korean hanji paper craft figure.

The character should look physically constructed from layered, cut, folded, molded, and pasted traditional Korean paper.

Use:

- visible hanji paper fibers
- softly wrinkled paper surfaces
- layered paper edges
- overlapping cut-paper pieces
- handmade pasted construction
- slightly uneven handcrafted contours
- matte paper texture
- restrained three-dimensional volume
- traditional Korean craft sensibility
- subtle natural paper irregularities
- hand-painted ink lines on top of the paper
- hand-painted decorative markings

The face, eyes, mouth/teeth (where applicable), and key markings should remain recognizable for the original character identity.

The result should look like a carefully handmade Korean hanji character sculpture, not a flat paper illustration.

Do not make it look like:

- origami
- cardboard
- plastic
- clay
- fabric
- realistic fur
- glossy resin`,
  },
  {
    id: 'ceramic',
    label: '도자기',
    tone: 'gold',
    thumbnail: asset('assets/styles/03.png'),
    promptTemplate: `STYLE: EAST ASIAN CERAMIC CHARACTER FIGURE

Transform the character into a handcrafted East Asian ceramic figurine inspired by Korean ceramic craft traditions.

Use:

- glazed ceramic material
- softly sculpted ceramic volume
- subtly uneven handmade pottery form
- visible painted underglaze decoration
- hand-painted decorative patterns and markings
- hand-painted facial lines
- restrained glossy glaze
- natural ceramic imperfections
- subtle glaze pooling
- slightly irregular handmade edges
- elegant but playful folk-art character
- clean museum-quality studio presentation

The result should look like a real ceramic character object, not a flat illustration and not a realistic animal statue.

Avoid:

- highly reflective metallic surfaces
- translucent glass
- plastic
- resin
- plush fabric
- realistic fur
- generic Western porcelain animal design
- overly luxurious decorative patterns

The ceramic treatment must support, not erase, the Korean minhwa personality of the original character.`,
  },
  {
    id: 'clay',
    label: '클레이',
    tone: 'stone',
    thumbnail: asset('assets/styles/04.png'),
    promptTemplate: `STYLE: HANDMADE CLAY CHARACTER FIGURE

Transform the character into a handmade clay character figure.

Use:

- hand-sculpted clay forms
- softly rounded volumes
- visible finger-shaped irregularities
- slightly uneven handmade surfaces
- matte clay material
- painted clay colors
- hand-painted black outlines
- hand-painted decorative markings
- simplified but substantial three-dimensional anatomy
- soft studio lighting
- handcrafted stop-motion character quality

Keep the original character's face, eye direction, mouth and teeth, overall body proportion, key decorative marking identity, and curved tail when applicable.

The character should look like a physical clay model created by an artist.

Do not make it look like:

- polished plastic
- vinyl
- porcelain
- plush fabric
- realistic fur
- a generic cute animal toy
- photorealistic taxidermy

Preserve small imperfections in the sculpted form so the result feels handmade rather than factory-produced.`,
  },
  {
    id: 'felt',
    label: '양모펠트',
    tone: 'sepia',
    thumbnail: asset('assets/styles/05.png'),
    promptTemplate: `MATERIAL STYLE: NEEDLE FELT

Transform the character into a premium handmade needle-felt sculpture.

Use:

- compacted wool fibers
- soft fuzzy felt texture
- visible but subtle needle-punched fibers
- carefully sculpted wool volumes
- soft matte surfaces
- gently blended colored wool
- rounded handmade construction
- controlled handcrafted irregularity
- colored wool embedded into the surface for every stripe or marking

Reconstruct facial features and key anatomy using needle-felted wool. Keep the original positions, angles, sizes, and shapes recognizable for the character identity.

Markings must be formed from colored wool fibers embedded into the felt surface. Do not paint or print the markings.

Do not use:

- knitted stitches
- crochet loops
- woven fabric
- plush fabric
- plastic
- resin
- clay
- rubber
- glossy surfaces
- realistic animal fur
- long hair
- large sewing seams
- buttons
- artificial eyes that change the original expression

Background: clean, uniform, solid white studio presentation (no scene clutter).`,
  },
  {
    id: 'plush',
    label: '봉제인형',
    tone: 'ink',
    thumbnail: asset('assets/styles/06.png'),
    promptTemplate: `MATERIAL STYLE: PLUSH STUFFED TOY CHARACTER

Recreate the character as a premium handmade plush stuffed toy.

Use:

- soft plush fabric
- short velvety fibers
- gently stuffed volume
- soft rounded textile surfaces
- subtle structural sewing seams
- embroidered facial details
- embroidered or sewn markings/stripes
- softly stuffed paws/ears/tail where applicable

Preserve the original face and expression. Keep eyes, muzzle, nose, mouth, teeth (if applicable), ears, markings/stripes, paws, and tail in the same positions and shapes that define the character's identity.

Markings must be integrated into the plush construction via embroidery, appliqué, or sewn fabric sections. Do not print or paint the markings.

Do not use:

- knitted yarn
- crochet stitches
- needle-felt fibers
- plastic
- resin
- clay
- rubber
- glossy surfaces
- realistic animal fur
- long hair
- oversized button eyes
- ribbons, clothing, or accessories

Do not transform the character into a generic teddy bear or mascot.

Background: clean, uniform, solid white studio presentation (no scene clutter).`,
  },
  {
    id: 'knit',
    label: '니트',
    tone: 'pearl',
    thumbnail: asset('assets/styles/07.png'),
    promptTemplate: `MATERIAL STYLE: KNITTED YARN CHARACTER

Recreate the character as a premium handmade knitted yarn doll. The entire character must appear physically constructed from knitted wool yarn.

Use:

- clearly visible knitted stitches
- soft wool yarn fibers
- thick knitted fabric
- carefully formed knit loops
- softly stuffed knitted volumes
- handcrafted knitted construction
- neatly joined knitted sections
- subtle handmade irregularity
- embroidered facial details
- knitted or embroidered stripe/marking patterns (when applicable)

Preserve the original identity of the character:
keep the original pose, body proportions, silhouette, facial structure, expression, eye placement and gaze, muzzle and mouth, visible teeth (if applicable), ear placement, marking/stripe arrangement, paw/hand shapes, and tail shape.

Create facial elements and small markings using embroidery and carefully shaped yarn. Construct markings/stripes using contrasting knitted yarn or integrated embroidered yarn. Do not paint, print, project, or digitally overlay the markings.

Do not use:

- plush fabric
- needle-felt fibers
- smooth plastic
- resin
- clay
- rubber
- glossy surfaces
- realistic animal fur
- loose damaged yarn
- torn fabric
- excessive dangling threads
- oversized crochet holes
- buttons that change the eye shape
- clothing or accessories

Do not transform the character into a generic crochet mascot. Do not enlarge the head, shorten the body, or change the original anatomy or expression.

Background: clean, uniform, solid white studio presentation (no scene clutter).`,
  },
  {
    id: 'neon',
    label: '네온',
    tone: 'gold',
    thumbnail: asset('assets/styles/08.png'),
    promptTemplate: `STYLE: NEON KOREAN URBAN-FANTASY CHARACTER (3D)

Reimagine the input subject as one complete, newly designed, full-body character in a coherent modern 3D stylized look. Use the input only to preserve identity (silhouette, key proportions, facial structure, expression, and key markings), but do not paste the original image.

UNIFIED CHARACTER STYLE
- Keep head, face, eyes, muzzle/snout, ears, torso, limbs, paws/hands/feet, markings, tail, and any small accessories in one consistent visual language (shape, material, rendering, detail level, lighting, proportions).
- Favor clean rounded forms, strong readable silhouette, simplified anatomy, clean graphic markings, soft sculpted volumes, and animation-friendly construction.

FACIAL TRANSLATION
- Translate the reference face into large graphic eyes, expressive brows, short broad muzzle, rounded cheeks, simplified nose, small visible stylized teeth (if applicable), and clean graphic forehead/face markings.
- The face must belong to the same visual language as the body (no pasted 2D textures).

3D RENDERING
- Premium stylized 3D animation rendering.
- Smooth sculpted surfaces, simplified fur/skin masses, clean graphic markings.
- Soft matte materials with subtle cel-shaded shadow shapes and controlled highlights.
- Rounded polished geometry, cinematic yet readable lighting.
- Do not preserve paper/brush textures or flat painted surfaces.

NEON DIRECTION
- Use neon as lighting, energy, and small accents (not overall recolor).
- Primary accent colors: electric magenta, vivid cyan, violet, deep indigo, with small warm gold highlights.
- Apply: soft magenta and cyan rim lights, violet ambient fill, subtle neon reflections on cheeks/ears, faint glowing tail/edge accents, one–two small spirit-light effects, restrained luminous particles.
- Keep base colors of the subject visible; neon must not obscure eyes, face, teeth, or key markings.

KOREAN FANTASY ACCENTS (MINIMAL)
- Add only a few simplified Korean-inspired elements that match the clean modern shape language:
  - one small modernized knot ornament
  - one short sash with a simple cloud motif
  - one small glowing charm
  - one subtle dancheong-inspired graphic accent
- Do not create an elaborate historical costume.

BACKGROUND
- Clean, minimal, dark indigo or deep violet gradient background.
- Add only subtle neon haze, a few small glowing particles, one simple curved spirit-light trail, and a faint abstract Korean cloud motif.
- Do not add buildings, streets, crowds, vehicles, weapons, text, or signage.

DO NOT USE
- Photorealistic fur simulation, heavy costume detail, mascot-suit proportions.
- Upright humanoid posture if it contradicts the subject's original body plan.
- Human anatomy replacements (human shoulders/arms/hands/legs/feet), or bipedal stance for inherently quadrupedal subjects.
- Overly glossy plastic look or realistic product-photo aesthetics.

FINAL TARGET
- A polished, cute, neon Korean-fantasy character whose face and body are consistently redesigned in one coherent style. Preserve recognizable identity cues (eye relationship, muzzle/snout, expression, key marking rhythm) from the input while embracing the neon 3D direction.`,
  },
  {
    id: 'gameart',
    label: '게임아트',
    tone: 'stone',
    thumbnail: asset('assets/styles/09.png'),
    promptTemplate: `STYLE: PREMIUM STYLIZED 3D GAME-ART CHARACTER

Reimagine the input subject as one complete, newly designed, full-body character suitable for a high-quality fantasy adventure game, a cinematic selection screen, and an animation-friendly real-time asset. Use the input image only to preserve identity (silhouette, key proportions, facial structure, expression, and key markings). Do not paste the original image.

QUADRUPED REQUIREMENT (IF APPLICABLE)
- If the subject is inherently quadrupedal, preserve four-legged anatomy, original body orientation, the relationship between head, torso, legs, and tail, natural weight distribution across four paws, animal shoulders and hips, a species-appropriate spine and body length, and original standing/walking/crouching/resting logic.
- Do not make the character humanoid or bipedal. Do not replace front legs with arms or introduce human-like hands, fingers, shoulders, chest, waist, hips, or feet.

REFERENCE IDENTITY
- Study and preserve the most distinctive characteristics: facial width/roundness, eye size/angle/spacing/gaze, humorous or slightly awkward expression, imperfect asymmetry, broad animal muzzle, nose placement, mouth curvature, visible teeth/fangs, cheek volume, ear size/position, forehead markings, major marking/stripe arrangement, tail character, and mischievous personality.
- Do not replace the subject with a generic cute version. Keep the memorable folk-art charm from the reference.

FACIAL REDESIGN
- Redesign the face to match the selected game-art style (do not copy pixel-for-pixel; no flat pasted face).
- Use clean stylized eye shapes, clear eyelids/brows, broad rounded muzzle, simplified nose, redesigned but recognizable mouth, small visible stylized teeth, rounded cheek volumes, and graphic forehead markings.
- The eyes, muzzle, nose, mouth, teeth, ears, and markings must belong to the same visual language as the body.

UNIFIED CHARACTER STYLE
- Keep head, face, eyes, muzzle/snout, ears, teeth, torso, limbs, paws/hands/feet, markings/stripes, tail, and any small accessories consistent in shape language, material, rendering, detail level, lighting, and proportions. The character must feel designed as one coherent asset.

PROPORTIONS (CUTE, READABLE)
- Favor a compact body plan with a large expressive head (relative to species), short neck, compact torso, soft rounded belly, clear separation of limb groups, grounded stance, and a long expressive tail when applicable.
- Keep the silhouette compact, playful, and easy to read. Maintain the original species body plan (e.g., stay on all fours for quadrupeds).

DO NOT USE
- Upright humanoid posture (for quadrupeds), bipedal stance, human shoulders/torso/waist/hips/arms/hands/fingers/legs/feet.
- Fashion-model proportions, muscular human anatomy, or a realistic animal head on a humanoid body.
- Photorealistic fur simulation, excessive costume detail, or mascot-suit proportions.

SIMPLIFICATION
- Use clear rounded forms, strong readable silhouette, simplified anatomy, clean graphic markings/stripes, soft sculpted volumes, limited small details, animation-friendly construction, and game-ready visual clarity.

COSTUME (MINIMAL)
- Only small decorative accents that do not alter the silhouette: a short cropped vest, simple sash, small collar, simple wrist ornament, one Korean-inspired charm, or one small decorative knot. Do not cover most of the body; avoid elaborate historical costumes and fitted human fashion.

COMPOSITION
- Create one complete full-body character in a natural front/side/three-quarter standing pose.
- Show completely: head, both ears (if any), full face, torso, all limbs and paws/feet, and the entire tail.
- Only one character; no duplicates, no multiple views, no character sheets, no turnaround sheets, no text/logos/watermarks.

SURFACE AND MATERIAL
- Stylized hand-painted game textures with softly sculpted fur/skin masses, broad color zones, restrained brush-like variation, clean graphic markings, subtle surface breakup.
- Soft matte look for fur/skin; slightly firmer materials for nose/claws/teeth; controlled roughness variation; readable PBR-inspired response.
- Do not use hyperrealistic individual fur strands, photorealistic skin/anatomy, or a flat unshaded illustration look. Do not make the character look like glossy plastic.

LIGHTING
- Polished cinematic game lighting: warm key, cool soft fill, subtle rim, clear face illumination, readable shadow shapes, moderate contrast, controlled highlights. Do not hide the eyes or expression in darkness.

COLOR DIRECTION
- Preserve the subject's main base palette. Strengthen with a controlled, cohesive scheme (e.g., warm ochre/orange-brown/cream, charcoal-black for markings, limited deep teal/jade accents, restrained warm red, small antique-gold detail). Avoid oversaturation and rainbow recolors.

KOREAN-INSPIRED DETAILS (OPTIONAL, SPARING)
- One or two small Korean-inspired fantasy details: a short decorative sash, a simplified knot ornament, a small jade charm, a subtle cloud or dancheong-inspired graphic, or a small protective talisman shape without readable text. Do not add armor, heavy clothing, or weapons.

BACKGROUND
- Simple game-character presentation background: soft neutral-to-dark gradient, faint atmospheric depth, subtle ground contact shadow, minimal abstract fantasy shapes. No UI panels, stats, text, logos, or names.

FINAL TARGET
- An original, polished, expressive, game-ready, animation-friendly, visually unified character clearly derived from the specific input subject. Preserve the strange charm and key identity cues (eye relationship, muzzle/snout, teeth, marking rhythm, and playful asymmetry) while translating them into a premium stylized 3D game-art design.`,
  },
];

export const posePromptTemplates: Record<string, string> = {
  t: `This is a pose-conversion task only. Repose the exact same character into a strict front-view, neutral T-pose for 3D reconstruction and rigging. Do not redesign, reinterpret, restyle, beautify, or replace the character.

PRIMARY REQUIREMENT
Preserve the input character as faithfully as possible. The output must look like the same exact character simply repositioned into a T-pose.

Preserve exactly:
- species identity
- facial identity
- face shape, eye shape, eye size, eye spacing, eye direction, eyebrows, expression
- horn number/shape/placement (if present)
- ears, muzzle, nose, fangs/teeth, cheeks, mane shape (if present)
- head-to-body ratio, torso shape, belly shape
- arm/leg thickness, paws/feet, tail shape
- body colors, color placement, markings
- material, texture, rendering style, level of detail, overall personality

STYLE PRESERVATION
Keep the original image style unchanged. If the input is flat 2D, painterly, graphic, stylized 3D, clay, plush, toy-like, or cel-shaded, keep it the same. Do not mix styles; do not convert materials or rendering language.

STANDARD T-POSE
- Character standing upright, body and head facing directly forward, head level (not tilted), spine vertical, shoulders level.
- Both arms extended horizontally in a straight line, ~90° from torso; elbows and wrists straight; left and right arms symmetrical.
- Paws relaxed and clearly visible; inner paw surfaces facing downward or slightly forward.
- Legs straight, knees facing forward; feet parallel or slightly outward; feet ~shoulder-width apart; weight evenly distributed; pelvis centered.
- Tail fully visible and separated clearly from legs and torso.

RIGGING-FRIENDLY SILHOUETTE
Make every body part easy to identify and separate. Ensure clear visible gaps between each arm and the torso, between the two legs, between the tail and the body, between the ears and mane. Avoid overlapping limbs. Avoid the tail crossing the arms/torso/legs/feet. Avoid mane shapes that hide shoulders/upper arms/neck connection. Keep a clean readable silhouette.

ANATOMY CONSISTENCY
Keep existing proportions. Do not enlarge/shrink the head; do not lengthen/shorten torso, arms, or legs; do not change body weight, paw size, or tail length; do not add/remove fingers or body parts; do not change horn count. Do not turn animal paws/feet into realistic human hands/feet.

NO DESIGN ADDITIONS
Do not add clothing, accessories, charms, ribbons, ornaments, props, weapons, neon effects, particles, glow, new markings/colors/textures. If the input has no clothing, keep it unclothed. Do not censor or cover the natural animal body.

FACIAL EXPRESSION
Keep the same facial expression as the input; do not create a new smile/anger/surprise, closed eyes, exaggerated emotion, or different gaze. The face must remain recognizably identical.

CAMERA AND COMPOSITION
Create exactly one character. Use strict front view, eye-level camera, centered composition, orthographic-like presentation with minimal perspective distortion. Ensure complete full-body visibility with comfortable empty margin around the silhouette. Do not crop horns/ears/mane/hands or paws/elbows/feet/tail. Do not create three-quarter/side/back view, dynamic angle, fisheye, multiple views, turnaround, or character sheets.

BACKGROUND AND LIGHTING
Use a plain, solid, neutral light-gray background. Use simple, soft, even studio lighting. Avoid scenery, architecture, floor objects, decorative elements, dramatic shadows, colored lighting, rim lighting, strong directional light, busy gradients, textured backgrounds. A faint ground shadow directly below the feet is acceptable but must not obscure the silhouette.

FINAL PRODUCTION TARGET
This is a production-ready front-view T-pose reference for 3D reconstruction and rigging.
Priority order:
1) exact character identity
2) correct symmetrical T-pose
3) complete body visibility
4) clean separated silhouette
5) unchanged style and proportions`,
};

export const modePromptTemplates: Record<'character', string> = {
  character: `Transform the subject in the FIRST image into an original character while preserving its identity.

IMAGE ROLES
- First image: main reference.
- Second image: STYLE REFERENCE ONLY (do not copy subject or colors).

CORE DESIGN GOAL
Analyze the reference subject and identify the visual features that make it recognizable. Rather than copying every detail, reinterpret its identity into a unique character.

Choose one or two signature features that best represent the subject, such as:
- distinctive silhouette
- unique facial characteristics
- characteristic mane, tail, horns, ears, or other defining features
- a memorable body marking or pattern
- other visually recognizable elements

Build the character around these signature features instead of reproducing every decorative detail.

CHARACTERIZATION
- Preserve the essence and identity of the original subject.
- Emphasize personality, recognizability, and originality.
- Create a character that feels expressive, memorable, and visually iconic.
- Reinterpret the defining features in a modern, appealing way rather than replicating them literally.

STYLE APPLICATION
Apply only the visual language of the SECOND image, including overall design style, proportions, silhouette, eye treatment, surface treatment, color blocking, shading style, and overall mood.
Do NOT copy the subject, pose, colors, symbols, text, or composition from the second image.

OUTPUT
Generate one complete original character on a clean background with no additional objects, text, logos, or watermarks.`,
};

export const characterTypePromptTemplates: Record<string, string> = {
  '4': `QUADRUPED REQUIREMENTS

Must remain a four-legged creature. Do NOT convert it into a biped, humanoid, or upright-standing character.

BODY
- compact torso
- four short, sturdy legs
- simple rounded paws
- one complete tail
- balanced quadruped proportions
- avoid realistic anatomy and complex joints

OUTPUT
- one complete full-body character
- full head and body
- all four legs and paws visible
- complete tail visible`,
  '2-short': `BIPED (SHORT) REQUIREMENTS

Convert the subject into a naturally standing biped. Change only the body structure required for upright locomotion.

Create:
- two arms
- two standing legs
- a compact upright torso
- a naturally connected neck and head
- a complete visible tail (if applicable)
- a balanced upright posture

The subject must stand naturally on two legs. Both arms should rest naturally beside the body or bend slightly in a relaxed pose.

Do not create:
- a quadruped pose
- front limbs touching the ground
- crawling posture
- crouching quadruped stance

ANATOMY
Maintain an animal-like body structure.
Do not create:
- realistic human anatomy
- human shoulders
- human chest
- narrow human waist
- human hips
- human hands
- human fingers
- human feet
- long human limbs
- muscular human proportions

Keep the silhouette clearly creature-like.

COMPOSITION
- one complete full-body subject
- front view or slight three-quarter view
- both arms visible
- both legs visible
- complete body visible
- clean neutral background

Approximately three heads tall.

Use:
- large head
- short neck
- compact torso
- rounded belly
- short arms
- short sturdy legs
- broad stable feet
- low center of gravity
- compact readable silhouette

  The head should occupy roughly one-third of the total height. The overall appearance should feel compact, stable, and cute.`,
  '2-tall': `BIPED (TALL) REQUIREMENTS

Convert the subject into a naturally standing biped. Change only the body structure required for upright locomotion.

Create:
- two arms
- two standing legs
- a compact upright torso
- a naturally connected neck and head
- a complete visible tail (if applicable)
- a balanced upright posture

The subject must stand naturally on two legs. Both arms should rest naturally beside the body or bend slightly in a relaxed pose.

Do not create:
- a quadruped pose
- front limbs touching the ground
- crawling posture
- crouching quadruped stance

ANATOMY
Maintain an animal-like body structure.
Do not create:
- realistic human anatomy
- human shoulders
- human chest
- narrow human waist
- human hips
- human hands
- human fingers
- human feet
- long human limbs
- muscular human proportions

Keep the silhouette clearly creature-like.

COMPOSITION
- one complete full-body subject
- front view or slight three-quarter view
- both arms visible
- both legs visible
- complete body visible
- clean neutral background

Approximately four-and-a-half to five heads tall.

Use:
- moderately sized head
- slightly longer neck
- longer torso
- longer arms
- longer but sturdy legs
- visible elbows and knees
- balanced upright stance

The silhouette should appear taller and more agile, while remaining clearly creature-like.

Avoid:
- fashion-model proportions
- extremely long legs
- exaggerated human anatomy`,
};

export const backgroundPromptTemplates: Record<'off' | 'on', string> = {
  off: `BACKGROUND CLEANUP

Keep the original background color, paper texture, brush texture, and aged surface exactly as they are.

Remove all decorative background elements, including but not limited to:
- traditional clouds, trees, mountains, rocks, waves
- flowers, plants, grass, bamboo
- sun or moon, birds, animals
- buildings, fences, ornaments
- seals, stamps, calligraphy, text, symbols
- floating motifs, decorative patterns

Do not replace them with new background elements.

The result should contain only the subject placed on the original textured background, preserving the original background color and material while removing all decorative objects.`,
  on: `BACKGROUND ENHANCEMENT

Generate traditional Korean Minhwa-inspired background elements around the subject while preserving visual balance.

Background elements may include:
- stylized traditional clouds
- pine trees
- rocks
- mountains
- waves
- flowers
- bamboo
- traditional foliage
- decorative Korean patterns
- lucky symbols
- seals or stamps
- subtle ornamental motifs

Keep all background elements secondary to the main subject. Maintain generous negative space around the character. The background should enhance the traditional Korean painting atmosphere without distracting from the subject.`,
};
