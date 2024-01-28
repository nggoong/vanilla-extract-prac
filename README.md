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



# 클래스 두 개 먹이기
아래와 같이 템플릿 리터럴로 이어줘야함.
```tsx
const TempPage = () => {
  return(
    <div className={`${wrap} ${parent}`}>
      <div className={`${child} ${subContainer}`}></div>
    </div>
  )
}

export default TempPage
```

# globalStyle 사용하기
```tsx
const TempPage = () => {
  return(
    <div className={`${wrap} container`}>
      <p>안녕하세요</p>
    </div>
  )
}

// style.css.ts

export const wrap = style({
  background:'black'
})

globalStyle(`${wrap} .container`, {
  color:'red'
})
```

# 변수 사용하는 방법 2가지
1. createTheme을 통해 반환받는 클래스와 변수를 사용하는 방법
2. createVars()를 사용하여 변수를 만들어 사용하는 방법

```tsx
import { ptag, pink, blue, hero, themeClass, tempThemeClass, temphero} from "./style.css"
const DantePage = () => {
  return(
    <>
    <p className={`${ptag} ${blue}`}>sss</p>
    <div className={`${themeClass} ${hero}`}>sdfsdf</div>
    <div className={`${tempThemeClass} ${temphero}`}>헬로</div>
    </>
  )
}

export default DantePage

// style.css.ts

import { createTheme, style, createVar } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    red:'red'
  },
  space: {
    small:'4px',
    medium:'8px'
  }
})

export const [tempThemeClass, tempVars] = createTheme({
  color: {
    brand:'yellow',
    black:'black'
  },
  size: {
    small:'50px',
    large:"100px"
  },
  displayFlex: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})

export const temphero = style({
  background:tempVars.color.brand,
  color:tempVars.color.black,
  width:tempVars.size.large,
  height:tempVars.size.small,
  display:tempVars.displayFlex.display,
  justifyContent:tempVars.displayFlex.justifyContent,
  alignItems:tempVars.displayFlex.alignItems
})

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.red,
  padding: vars.space.small,
  width:'100px',
  height:'100px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})

export const accentVar = createVar();

export const blue = style({
  vars:{
    [accentVar]:'blue'
  }
})

export const pink = style({
  vars: {
    [accentVar]:'pink'
  }
})

export const ptag = style({
  color:accentVar
})
```