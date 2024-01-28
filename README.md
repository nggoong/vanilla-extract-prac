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

> 바닐라 익스트랙트에서는 createTheme()을 통해 반환된 vars를 theme contract라고 칭한다.

# theme을 type or interface 처럼 사용해보기

```tsx
// style.css.ts
export const [typeThemeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    red:'red'
  },
  space: {
    small:'4px',
    medium:'8px'
  }
})
```

위의 바닐라 익스트랙트 테마 객체가 있다고 가정하면,

```tsx
// 타입 에러 상황 🚫
export const themeClass = createTheme(vars, {
  color: {
    newColor: 'blue', // error
    red:'red',
    systemColor:'skyblue' // error
  },
  space: {
    small:'4px',
    medium:'8px'
  }
})

// 에러 없이 정상적으로 컴파일 ⭕️
export const themeClass = createTheme(vars, {
  color: {
    brand: 'skyblue',
    red:'orange'
  },
  space: {
    small:'16px',
    medium:'20px'
  }
})
```

위 코드의 주석처럼 결과가 발생한다.

createTheme()을 통해 반환된 vars를 인터페이스 및 타입 처럼 사용할 수 있는 것이다.

따라서 vars가 가지고 있는 테마 객체의 키 값이 변경 및 추가/삭제가 되면 컴파일 에러가 난다.

> 꼭 포함되어야 할 테마 데이터를 잊지 않고 정의하게 할 수 있고, 오타 또한 검증이 가능하여 편리한 기능이라고 생각된다.

### 하지만 단점은 존재한다.

css도 코드 스플리팅이 필요하다. 위의 예시에서 실제로 사용되는 테마 클래스는 themeClass 밖에 없다고 가정하자.

하지만 themeClass가 오버라이딩(?)하는 typeThemeClass 또한 번들링된 css에 포함되게 된다.

### 코드 스플리팅에 대한 단점을 극복하자.

> createThemeContract()를 통해 정적 타이핑을 위한 theme contract를 만들 수 있다.

createTheme을 통해 선언된 코드로 인해 css가 생성됨과는 다르게 createThemeContract는 css를 생성하지 않는다. 따라서 단순히 정적 타이핑을 위한 contract를 만든다고 생각하면 된다.

```tsx
export const vars = createThemeContract({
  color: {
    brand:''
  },
  font: {
    body:''
  }
})
```

이제 정말 typescript의 interface 및 type과 같은 역할을 하는 것 같이 보인다.