import { ptag, pink, blue, hero, themeClass, tempThemeClass, temphero} from "./style.css"
const DantePage = () => {
  return(
    <>
    <p className={`${ptag} ${blue}`}>sss</p>
    <div className={`${themeClass} ${hero}`}>sdfsdf</div>
    <div className={`${tempThemeClass} ${temphero}`}>헬로</div>
    </>
  )
}

export default DantePage