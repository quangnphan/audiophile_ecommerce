import { useGlobalContext } from "../context/context"
const CartAmountToggle = ({value,id}) => {
    const {toggleAmount} = useGlobalContext()
    return(
        <div className="counter">
        <button onClick={()=>toggleAmount(id,'dec')}>-</button>
        <span>{value}</span>
        <button onClick={()=>toggleAmount(id,'inc')}>+</button>
      </div>
    )
}

export default CartAmountToggle