import {
  BackgroundVariables,
  BaseColorsVariable,
  ColorsVariables,
  PalleteVariables,
  TextVariables,
  ThemeVariables
} from '../types/variables.types'
import { applyOpacityValue } from '../utils/applyOpacityValue'

const blue: ColorsVariables<'blue'> = {
  'blue-base': applyOpacityValue('--blue-base'),
  'blue-hover': applyOpacityValue('--blue-hover'),
  'blue-pressed': applyOpacityValue('--blue-pressed'),
  'blue-border': applyOpacityValue('--blue-border'),
  'blue-background': applyOpacityValue('--blue-background')
}

const green: ColorsVariables<'green'> = {
  'green-base': applyOpacityValue('--green-base'),
  'green-hover': applyOpacityValue('--green-hover'),
  'green-pressed': applyOpacityValue('--green-pressed'),
  'green-border': applyOpacityValue('--green-border'),
  'green-background': applyOpacityValue('--green-background')
}

const orange: ColorsVariables<'orange'> = {
  'orange-base': applyOpacityValue('--orange-base'),
  'orange-hover': applyOpacityValue('--orange-hover'),
  'orange-pressed': applyOpacityValue('--orange-pressed'),
  'orange-border': applyOpacityValue('--orange-border'),
  'orange-background': applyOpacityValue('--orange-background')
}

const gray: ColorsVariables<'gray'> = {
  'gray-base': applyOpacityValue('--gray-base'),
  'gray-hover': applyOpacityValue('--gray-hover'),
  'gray-pressed': applyOpacityValue('--gray-pressed'),
  'gray-border': applyOpacityValue('--gray-border'),
  'gray-background': applyOpacityValue('--gray-background')
}

const pink: ColorsVariables<'pink'> = {
  'pink-base': applyOpacityValue('--pink-base'),
  'pink-hover': applyOpacityValue('--pink-hover'),
  'pink-pressed': applyOpacityValue('--pink-pressed'),
  'pink-border': applyOpacityValue('--pink-border'),
  'pink-background': applyOpacityValue('--pink-background')
}

const purple: ColorsVariables<'purple'> = {
  'purple-base': applyOpacityValue('--purple-base'),
  'purple-hover': applyOpacityValue('--purple-hover'),
  'purple-pressed': applyOpacityValue('--purple-pressed'),
  'purple-border': applyOpacityValue('--purple-border'),
  'purple-background': applyOpacityValue('--purple-background')
}

const yellow: ColorsVariables<'yellow'> = {
  'yellow-base': applyOpacityValue('--yellow-base'),
  'yellow-hover': applyOpacityValue('--yellow-hover'),
  'yellow-pressed': applyOpacityValue('--yellow-pressed'),
  'yellow-border': applyOpacityValue('--yellow-border'),
  'yellow-background': applyOpacityValue('--yellow-background')
}

const red: ColorsVariables<'red'> = {
  'red-base': applyOpacityValue('--red-base'),
  'red-hover': applyOpacityValue('--red-hover'),
  'red-pressed': applyOpacityValue('--red-pressed'),
  'red-border': applyOpacityValue('--red-border'),
  'red-background': applyOpacityValue('--red-background')
}
const background: BackgroundVariables = {
  backgroundPrimary: applyOpacityValue('--backgroundPrimary'),
  backgroundSecondary: applyOpacityValue('--backgroundSecondary'),
  border: applyOpacityValue('--border')
}

const text: TextVariables = {
  content1: applyOpacityValue('--content1'),
  content2: applyOpacityValue('--content2'),
  content3: applyOpacityValue('--content3'),
  whiteInverted: applyOpacityValue('--whiteInverted'),
  blackInverted: applyOpacityValue('--blackInverted')
}

const baseColors: BaseColorsVariable = {
  neutral: applyOpacityValue('--neutral'),
  primary: applyOpacityValue('--primary'),
  secondary: applyOpacityValue('--secondary'),
  success: applyOpacityValue('--success'),
  error: applyOpacityValue('--error'),
  warning: applyOpacityValue('--warning')
}

const pallete: PalleteVariables = {
  ...blue,
  ...purple,
  ...green,
  ...yellow,
  ...red,
  ...orange,
  ...pink,
  ...gray
}

export const varTheme: ThemeVariables = {
  colors: {
    ...background,
    ...text,
    ...baseColors,
    ...pallete
  }
}
