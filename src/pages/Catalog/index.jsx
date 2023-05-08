import { useEffect , useState } from "react";
import { AUTH_DOG_TOKEN} from "../../components/utils/constants";
import { ProductCard } from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../api/products";

export const Catalog = () => {
  const [data, setData] = useState({ total: 0, products: [] });
  const navigate = useNavigate()
  const token = localStorage.getItem(AUTH_DOG_TOKEN)

  useEffect(() => {
    if(!token) return navigate('/signin')
  }, [navigate, token])

  // получаем все данные
  useEffect(() => {
    const fetchDatas = async () => {
      const responce = await fetchProducts(token)
      const res = await responce.json();
      setData(res);
    };
    fetchDatas();
  }, [token]);

  return (
    <main>
      <h1>Каталог</h1>
      <div className="products_wrapper">
        {data.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </main>
  );
};
