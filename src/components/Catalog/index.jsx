import { useEffect , useState } from "react";
import { TOKEN } from "../utils/constants";
import { ProductCard } from "../ProductCard";

export const Catalog = () => {
  const [data, setData] = useState({ total: 0, products: [] });

  useEffect(() => {
    const fetchDatas = async () => {
      const responce = await fetch("https://api.react-learning.ru/products", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const res = await responce.json();
      setData(res);
    };
    fetchDatas();
  }, []);

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
