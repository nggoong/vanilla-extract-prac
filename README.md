# 바닐라 익스트랙트 

> 바닐라 익스트랙트는 컴포넌트 스타일링 형식이 아니라, 클래스명으로 스타일을 먹이는 방식

따라서 하나의 엘리먼트에 여러 클래스를 먹이려면 조금 번거로움..
아래와 같이 활용하면 됨.

```tsx
import {TempWrapper} from './styled.css.ts'
const Temp = () => {
  return(
    <div className={TempWrapper}>
      <p className={`${TempWrapperPTag} test`}>안녕하세요</p>
    </div>
  )
}



// styled.css.ts
import {style} from '@vanilla-extract/css'
export const TempWrapper = style({
  display:'flex',
  fontSize:20,
  color:'white',
})

export const TempWrapperPTag = style({
  selectors: {
    [`${TempWrapper} &.test`]: {
        color:'purple'
    }
  }
})
```

## 📌 위와 같이 적용하는 이유는 바닐라 익스트랙트는 네스팅이 굉장히 까다로움

보통 네스팅은 부모 - 자식으로 흐르는데 바닐라 익스트랙트는 자식 - 부모로 역방향으로 흐름.. 따라서 이 부분 주의해야함