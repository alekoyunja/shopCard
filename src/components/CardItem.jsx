import { FiShoppingCart } from "react-icons/fi";
import { MyContext } from "../main";
import { useContext } from "react";

const CardItem = ({cart}) => {
const {myState,setMyState}=useContext(MyContext)
  return (
    
<div className="relative">
        <FiShoppingCart className="text-2xl" onClick={()=>setMyState("Alleko")}/>
        {myState}
        {cart.length>0 && <span className="bg-red-500 text-white flex w-5 h-5 justify-center 
        items-center rounded-full absolute -top-2 -right-4 text-xs">{cart.length}</span>
      }
      </div>
  )
}

export default CardItem