import type { Layouts as RGLayoutsByBreakpoint } from 'react-grid-layout'

export type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

export interface LayoutComponentsPositions {
  id: string
  layoutsByBreakpoint: RGLayoutsByBreakpoint
  focusedId?: string
  maximizedId?: string
}

export type LayoutComponentsPositionsUpdateRequest = LayoutComponentsPositions
