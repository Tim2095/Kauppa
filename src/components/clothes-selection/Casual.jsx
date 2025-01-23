import { useSelector } from "react-redux"
import {useNavigate } from 'react-router-dom'

const Casual = () => {

  const products = useSelector(state => state.product)



  return (
    <div>
      {products.map(product => <p key={product.id}>{product.name}</p>)}
    </div>
  )
}

export default Casual