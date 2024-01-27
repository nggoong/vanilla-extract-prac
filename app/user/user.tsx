import { UserWrapper } from "./styled.css";
import { varStyle, varStyle2, divStyle } from "./styled.css"
const User = () => {
  return(
    <div className={UserWrapper}>
      <p className="tempclass">test content</p>
      <p>test content</p>
      <p className='hello'>test content</p>
      <div className={varStyle}> var style 1</div>
      <div className={varStyle2}> var style 2</div>
    </div>
  )
}

export default User;