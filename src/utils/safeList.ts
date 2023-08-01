import { SafelistConfig } from 'tailwindcss/types/config'

export const safeList: Partial<SafelistConfig> = [
  {
    pattern:
      /^(bg|to|via|from|text|fill|stroke|border|outline)-((primary|secondary|warning|error|success|content1|content2|content3|backgroundPrimary|backgroundSecondary|border|black|white|whiteInverted|blackInverted)|((blue|red|green|purple|pink|gray|orange|yellow)-(base|hover|pressed|border|background)\D))/,
    variants: [
      // "first",
      // "last",
      // "odd",
      // "even",
      // "visited",
      // "checked",
      // "empty",
      // "read-only",
      // "group-hover",
      // "group-focus",
      // "focus-within",
      'hover',
      'focus'
      // "focus-visible",
      // "active",
      // "disabled",
    ]
  }
]
