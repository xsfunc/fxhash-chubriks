import { waves } from './patterns/pattern-waves'
import { cross } from './patterns/pattern-cross'
import { herringbone } from './patterns/pattern-herringbone'
import { PATTERN } from './patterns/pattern'
import { EFFECT } from './effects/effect'
import { svgBlur } from './effects/svg-blur'
import { cssDropShadow } from './effects/css-drop-shadow'
import { cssGrayscale } from './effects/css-grayscale'
import { cssInvert } from './effects/css-invert'
import { cssSepia } from './effects/css-sepia'
import { cssOpacity } from './effects/css-opacity'

export * from './layers/head'

export { drawManager } from './model/draw-manager'
export { eyeVariants, noseVariants, mouthVariants } from './layers/face'
export { createPoline, polinePalette } from './palette/poline'

export const drawApi = {
  patternMap: PATTERN,
  patterns: {
    waves,
    cross,
    herringbone,
  },

  effectMap: EFFECT,
  effects: {
    svgBlur,
    cssDropShadow,
    cssGrayscale,
    cssInvert,
    cssSepia,
    cssOpacity,
  },
}
