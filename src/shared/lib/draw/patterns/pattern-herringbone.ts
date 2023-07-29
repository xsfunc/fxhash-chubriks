import { SVG } from '@svgdotjs/svg.js'
import { nanoid } from 'nanoid'
import { fillingApi } from '../filling'
import { defaultColorsIds, fillingTypes } from '../filling/constants'
import type { HerringbonePatternOptions, HerringbonePatternSerialized, PatternProcessor } from './types'
import { PATTERN } from './constants'

export const herringbone: PatternProcessor<HerringbonePatternOptions, HerringbonePatternSerialized> = {
  initial: {
    patternType: PATTERN.HERRINGBONE,
    scale: 1,
    rotate: 0,
    strokeWidth: 1,
    color1: {
      type: fillingTypes.DEFAULT,
      id: defaultColorsIds.BLACK,
    },
    color2: {
      type: fillingTypes.DEFAULT,
      id: defaultColorsIds.WHITE,
    },
  },

  svg: (options, fillingFactory) => {
    const size = [40, 20]
    const { scale, rotate, strokeWidth } = options
    const backPaint = fillingFactory.fillingByOptions(options.color1)
    const paint2 = fillingFactory.fillingByOptions(options.color2)

    const pattern = SVG()
      .pattern(...size)
      .transform({ scale, rotate })
      .attr({
        patternUnits: 'userSpaceOnUse',
        id: nanoid(4),
      })
    pattern.rect(...size).fill(backPaint)
    pattern.path('M40 0L20-10V0l20 10zm0 10L20 0v10l20 10zm0 10L20 10v10l20 10zM0 20l20-10v10L0 30zm0-10L20 0v10L0 20zM0 0l20-10V0L0 10z')
      .stroke(paint2)
      .stroke({ width: strokeWidth })
      .fill('none')

    return pattern
  },

  serialize: options => [
    options.patternType,
    options.id,
    options.rotate,
    options.scale,
    options.strokeWidth,
    fillingApi.serialize(options.color1),
    fillingApi.serialize(options.color2),
  ],

  deserialize: data => ({
    patternType: data[0],
    id: data[1],
    rotate: data[2],
    scale: data[3],
    strokeWidth: data[4],
    color1: fillingApi.deserialize(data[5]),
    color2: fillingApi.deserialize(data[6]),
  }),
}
