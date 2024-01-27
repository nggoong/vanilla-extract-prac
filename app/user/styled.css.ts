import { style, globalStyle, createVar } from "@vanilla-extract/css";

export const UserWrapper = style({
  fontSize:20,
  display:'flex',

})



globalStyle('.tempclass', {
  color:'yellow',
})


export const divStyle = style({
  width:100,
  height:100
})

const var1 = createVar();

export const varStyle = style({
  [var1]:'blue'
})
export const varStyle2 = style({
  [var1]:'red'
})

export const temp = style({
    color: varStyle
})

export const temp2 = style({
  color: varStyle2
})