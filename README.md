
`zynk-react-components`에서 global style을 수정해서 만들지 않는다. 아직 `zynk-react-core`의 피쳐가 완료되지 않았다.

GlobalStyles option하다.
`@imwebme/zynk-react-components` 라이브러리는 peer 디펜던시로 가지고있어야한다.
하지만 개발 편의를 위해서 디펜던시로 가지고있는다.

```jsx
// optional
import { GlobalStyles } from '@imwebme/zynk-react-core'

const App = () => {
  return <>
    <GlobalStyles />
    {/* Application */}
  </>
}
```

## TODO

현재 Cache Provider를 각 컴포넌트에서 감싸서 내보내는 방식이다. 이 방식을 좀더 효율적으로 바꿔야한다.