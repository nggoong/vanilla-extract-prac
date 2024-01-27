import { style, globalStyle } from "@vanilla-extract/css";
import { myStyle, parent, child } from "./style.css";
import Temp from "./temp";
const TempPage = () => {
  return(
    <>
    <div className={myStyle}>ldfsdf</div>
    <p className="temp">레드</p>
    {/* <div className={parent}>
      <div className="child">
        <p>child paragragh</p>
      </div>

    </div> */}
    <Temp/>
    </>
    
  )
}

export default TempPage;