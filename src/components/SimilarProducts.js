import SimilarProduct from "./SimilarProduct"

const SimilarProducts = ({others = []}) => {
    return(
        <section className="others">
            <h4>you may also like</h4>
            <div className="others-flex">
                {others.map((item,index)=>{
                    return(
                        <SimilarProduct key={index} {...item}/>
                    )
                })}
            </div>
        </section>
    )
}

export default SimilarProducts