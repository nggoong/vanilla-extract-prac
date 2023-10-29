import { style, createVar } from "@vanilla-extract/css";

const myVar = createVar();

const myStyle = style({
  vars: {
    [myVar]: 'purple'
  }
})

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