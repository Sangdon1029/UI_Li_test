import { CacheProvider, withCacheProvider } from 'cache'
import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

const PRIMARY_STYLE = tw`
  active:scale-95
  inline-flex
  items-center
  justify-center
  rounded-md
  text-sm
  font-medium
  transition-colors
  focus:outline-none
  focus:ring-2
  focus:ring-slate-400
  focus:ring-offset-2
  dark:hover:bg-slate-800
  dark:hover:text-slate-100
  disabled:opacity-50
  dark:focus:ring-slate-400
  disabled:pointer-events-none
  dark:focus:ring-offset-slate-900
  data-[state=open]:bg-slate-100
  dark:data-[state=open]:bg-slate-800
  border-0
`

type VariantType =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'link'

const VARIANT_MAP = {
  default: tw`bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900`,
  destructive: tw`bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600`,
  outline: tw`bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100`,
  subtle: tw`bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100`,
  ghost: tw`
    bg-transparent
    hover:bg-slate-100
    dark:hover:bg-slate-800
    dark:text-slate-100
    dark:hover:text-slate-100
    data-[state=open]:bg-transparent
    dark:data-[state=open]:bg-transparent
  `,
  link: tw`
    bg-transparent
    dark:bg-transparent
    underline-offset-4
    hover:underline
    text-slate-900
    dark:text-slate-100
    hover:bg-transparent
    dark:hover:bg-transparent
  `,
} satisfies Record<VariantType, TwStyle>

type SizeType = 'clear' | 'default' | 'sm' | 'lg'

const SIZE_MAP = {
  clear: tw``,
  default: tw`h-10 py-2 px-4`,
  sm: tw`h-9 px-2 rounded-md`,
  lg: tw`h-11 px-8 rounded-md`,
} satisfies Record<SizeType, TwStyle>

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  size?: SizeType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => (
    <CacheProvider>
      <button
        type="button"
        css={[PRIMARY_STYLE, VARIANT_MAP[variant], SIZE_MAP[size]]}
        ref={ref}
        {...props}
      />
    </CacheProvider>
  )
)
Button.displayName = 'Button'

// 🔺 위는 복붙해도 동작가능한 코드
// 🔻 여기서부터 라이브러리의 종속 코드가 들어갈수있음
const _Button = withCacheProvider()(Button)

export {
  _Button as Button,
  VARIANT_MAP as BUTTON_VARIANT_MAP,
  SIZE_MAP as BUTTON_SIZE_MAP,
}

export type {
  VariantType as ButtonVariantType,
  SizeType as ButtonSizeType,
  ButtonProps,
}
