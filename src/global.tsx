import { GlobalStyle as BaseStyle } from 'global-style'
import { GlobalCacheProvider } from './cache'

// ZynkReactComponentsGlobal option하다.
// `@imwebme/zynk-react-components` 라이브러리는 peer 디펜던시로 가지고있어야한다.
// 하지만 개발 편의를 위해서 디펜던시로 가지고있는다.

export function ZynkReactComponentsGlobal() {
  return (
    <GlobalCacheProvider>
      <BaseStyle />
    </GlobalCacheProvider>
  )
}
