import { ProductCard } from "../../components/ProductCard";
import { useNavigate} from "react-router-dom";
import { fetchProducts } from "../../api/products";
import { toast } from 'react-toastify';
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";

export const Catalog = () => {
  const { token } = useAuth()
  const navigate = useNavigate()


  const {data, isError, isLoading, error} = useQuery({
    queryKey:['getProducts', token],
    queryFn: async () => {
      const res = await fetchProducts(token)
      const  responce = await res.json();

      if (res.ok) {
        toast.success('Результаты получены');
        return responce
        }

        toast.error(responce.message)
        return navigate('/signin')
},
       initialData: {total: 0, products: []}
    })

    if (isLoading) return <p>Загрузка...</p>
    if (isError) return <p>Ошибка: {error}</p>

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
