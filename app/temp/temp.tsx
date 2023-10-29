import { TempWrapper, TempWrapperPTag } from "./stylet.css";
const Temp = () => {
  return(
    <div className={TempWrapper}>
      <p className={`${TempWrapperPTag} test`}>안녕하세요</p>
    </div>
  )
}

export default Temp;