import { style } from "@vanilla-extract/css";

export const parent = style({
  
})

export const invalid = style({
  selectors: {
    [`${parent} & a[href]`]: {
      color:'skyblue'
    }
  }
})