import {Link} from "react-router-dom"
import { scrollToTop } from "../utils/helper";
const SimilarProduct = ({name,id,image}) => {
    const width = window.innerWidth;
    const {mobile,tablet,desktop} = image
    return(
        <div className="others-item">
            <img src={width>=1200 ? desktop :width>=768?tablet:mobile} alt="img"></img>
            <h5>{name}</h5>
            <Link className="seeproductBtn" to={`/product/${id}`} onClick={scrollToTop}>see product</Link>
        </div>
    )
}

export default SimilarProduct