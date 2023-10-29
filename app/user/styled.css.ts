import { style, globalStyle } from "@vanilla-extract/css";

export const UserWrapper = style({
  fontSize:20,
  display:'flex',

})



globalStyle('.tempclass', {
  color:'yellow',
})

export const myStyle = style({
  vars: {
    '--my-global-variable':'purple'
  }
})