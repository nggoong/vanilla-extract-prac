'use client'
import { invalid } from "./style.css";
const SelectorPage = () => {
  const name = 'hong' as const
  const Colors = {
    red:'red',
    blue:'blue',
    green:'green'
  } as const
  console.log(typeof(Colors.red));
  console.log(typeof(name));
  return(
    <div className={invalid}>
      <a href="#">s안녕하세요</a>
    </div>
  )
}

export default SelectorPage;