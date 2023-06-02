import { useNavigate } from 'react-router-dom';
import './styles.css'

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleAddToCart = (event)=> {
    event.stopPropagation()

    // return navigate(`/products/${product._id}`)
  }


    return (
      <div onclick = {(event) => handleToCurrentProduct(event)} className='card' href=''>
        <img src="" alt ='Картинка' className='card_img'/>
        <span className='card_price'>Цена {product.price}</span>
        <span className='card_name'>Название {product.name}</span>
        <span>Количество {product.stock}</span>
        <button type="button" onclick = {(event)=> handleAddToCart(event)}className='card_btn'>В корзину</button>
        {/* <button type="button" onClick={()=> navigate(`/products/${product._id}`)}>Подробнее</button> */}
      </div>
    );
  };
  