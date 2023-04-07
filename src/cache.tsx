import { CacheProvider as SCacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
import { customZynkCreateEmotionCache } from '@imwebme/zynk-react-core'
import { ForwardRefExoticComponent, forwardRef } from 'react'

// ========================================
// zynk-react-components use
// ========================================

export const withCacheProvider =
  () =>
  // eslint-disable-next-line @typescript-eslint/ban-types
  <P extends {}>(
    WrappedComponent: React.ComponentType<P> | ForwardRefExoticComponent<P>
  ) =>
    // eslint-disable-next-line func-names, react/display-name
    forwardRef((props: P, ref: React.Ref<any>) => {
      return (
        <SCacheProvider
          value={customZynkCreateEmotionCache({
            key: 'imwebme-zynk-react-components',
            stylisPlugins: [prefixer],
          })}
        >
          <WrappedComponent {...props} ref={ref} />
        </SCacheProvider>
      )
    })

// ========================================
// zynk-react-components use
// ========================================

export const zynkReactComponentsCache = customZynkCreateEmotionCache({
  key: 'imwebme-zynk-react-components',
  stylisPlugins: [prefixer],
})

type ZynkReactComponentsCacheProviderProps = {
  children?: React.ReactNode
}
export function CacheProvider({
  children,
}: ZynkReactComponentsCacheProviderProps) {
  return (
    <SCacheProvider value={zynkReactComponentsCache}>{children}</SCacheProvider>
  )
}

// ========================================
// zynk-react-components Global
// ========================================

export const zynkReactComponentsGlobalCache = customZynkCreateEmotionCache({
  key: 'imwebme-zynk-react-components-global',
  prepend: true,
  stylisPlugins: [prefixer],
})

type ZynkReactComponentsGlobalCacheProviderProps = {
  children?: React.ReactNode
}
export function GlobalCacheProvider({
  children,
}: ZynkReactComponentsGlobalCacheProviderProps) {
  return (
    <SCacheProvider value={zynkReactComponentsGlobalCache}>
      {children}
    </SCacheProvider>
  )
}
