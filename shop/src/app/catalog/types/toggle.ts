
export interface Toggle {
  isActive: boolean
  toggleParams: ToggleParams
}

export interface ToggleParams {
  isAvailable: boolean
  label?: string
}
