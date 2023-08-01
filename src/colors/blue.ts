import { ColorsTheme } from '../types/theme.types'
import { hexToRGB } from '../utils/hexToRGB'

export const blue: ColorsTheme<'blue'> = {
  'blue-base': '28 133 255',
  'blue-hover': '51 157 255',
  'blue-pressed': '22 114 204',
  'blue-border': '191 219 254',
  'blue-background': '229 243 255'
}

export const blueDark: ColorsTheme<'blue'> = {
  'blue-base': '31 143 255',
  'blue-hover': '69 165 255',
  'blue-pressed': '22 114 204',
  'blue-border': '25 48 72',
  'blue-background': '26, 38, 49'
}
