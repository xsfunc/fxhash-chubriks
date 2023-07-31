import { FeBlur, FeComponentTransfer, FeConvolveMatrix, FeDisplacementMap, FeTurbulence } from '@/entities/effects'
import { FeBlend } from '@/entities/effects/ui/fe-blend'
import { FeColorMatrix } from '@/entities/effects/ui/fe-color-matrix'
import type { FeType } from '@/shared/lib'
import { drawApi } from '@/shared/lib'
import type { CustomNode } from '@/shared/lib/flow/types'

export const effectsNodeDefault: CustomNode & { data: { effects: object[] } } = {
  id: 'effects-node',
  type: 'effectsNode',
  position: { x: 444, y: 900 },
  data: {
    sourceHandles: {
      effects: { type: 'effects' },
    },
    effects: [],
  },
}

export const effectsComponentsMap: Record<FeType, any> = {
  [drawApi.effectMap.BLEND]: FeBlend,
  [drawApi.effectMap.BLUR]: FeBlur,
  [drawApi.effectMap.TURBULENCE]: FeTurbulence,
  [drawApi.effectMap.DISPLACEMENT]: FeDisplacementMap,
  [drawApi.effectMap.COLOR_MATRIX]: FeColorMatrix,
  [drawApi.effectMap.COMPONENT_TRANSFER]: FeComponentTransfer,
  [drawApi.effectMap.COMPOSITE]: FeDisplacementMap,
  [drawApi.effectMap.CONVOLVE_MATRIX]: FeConvolveMatrix,
  [drawApi.effectMap.MERGE]: FeDisplacementMap,
  [drawApi.effectMap.FLOOD]: FeDisplacementMap,
  [drawApi.effectMap.MORPHOLOGY]: FeDisplacementMap,
  [drawApi.effectMap.OFFSET]: FeDisplacementMap,
}
