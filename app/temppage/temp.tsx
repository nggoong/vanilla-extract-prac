// import { myStyle } from "./style.css";
import { parent, child, backgroundY } from "./style.css";
const Temp = () => {
  return(
    <div className="wrap">
      <div className={`${child} ${backgroundY}`}>안녕하세요</div>
      <p>whitezzzz</p>
      <div className={parent}>
        <div className={`${child} ${backgroundY}`}>
          <div className="test">dlfsdf</div>
        </div>
      </div>
    </div>
  )
}

export default Temp;