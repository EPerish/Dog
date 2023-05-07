import './styles.css'

export const ProductCard = ({ product }) => {
  
    return (
      <div className='card' href=''>
        <img src="" alt ='Картинка' className='card_img'/>
        <span className='card_price'>Цена {product.price}</span>
        <span className='card_name'>Название {product.name}</span>
        <span>Количество {product.stock}</span>
        <button type="button" className='card_btn'>В корзину</button>
      </div>
    );
  };
  