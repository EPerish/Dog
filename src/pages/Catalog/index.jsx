import { useEffect  } from "react";
import { AUTH_DOG_TOKEN} from "../../components/utils/constants";
import { ProductCard } from "../../components/ProductCard";
import { useNavigate} from "react-router-dom";
import { fetchProducts } from "../../api/products";
import { toast } from 'react-toastify';
import { useQuery } from "@tanstack/react-query";

export const Catalog = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem(AUTH_DOG_TOKEN)

  useEffect(() => {
    if(!token) return navigate('/signin')
  }, [navigate, token])


  const {data, isError, isLoading, error} = useQuery({
    queryKey:['getProducts', token],
    queryFn: async () => {
      const res = await fetchProducts(token)
      const  responce = await res.json();

      if (res.ok) {
        setData(responce)
        return toast.success(res.statusText);
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
