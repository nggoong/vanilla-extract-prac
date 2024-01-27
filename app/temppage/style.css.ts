import { globalStyle, style, createVar} from "@vanilla-extract/css";

export const myStyle = style({
  display:'flex',
  paddingTop:'111px'
})

globalStyle('.temp', {
  color:'red'
})

const myVar = createVar();
export const myStyle2 = style({
  vars: {
    [myVar]: 'purple'
  }
})

export const myStyle3 = style({
  '@media': {
    'screen and (min-width: 768px)': {
      padding: 10
    },
    '(prefers-reduce-motion)': {
      transitionProperty:'color'
    }
  }
})

export const parent = style({
  background:'blue',
  width:'300px',
  height:'300px',
  
});
export const grandchild = style({
  
})

export const backgroundY = style({
  background:'yellow'
})

export const child = style({
  
  width:150,
  height:150,
  selectors: {
    [`${parent}:hover &`]: {
      background: 'red',
      color:'blue'
    },
    // [`${grandchild}`]: {
    //   color:'red'
    // }
  }
})



globalStyle(`${child} .test`,{
  width:100,
  height:100,
  background:'white',
  color:'red'

})