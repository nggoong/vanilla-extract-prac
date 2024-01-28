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