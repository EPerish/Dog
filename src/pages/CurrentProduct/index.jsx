import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AUTH_DOG_TOKEN } from "../../components/utils/constants"
import { fetchCurruntProduct } from "../../api/products"
import { toast } from 'react-toastify';
import { isError, useQuery } from "@tanstack/react-query";

export const CurrentProduct = ()=> {
    const navigate = useNavigate()
    const { idOfProduct } = useParams()
    const token = localStorage.getItem(AUTH_DOG_TOKEN)

    useEffect(() => {
        if(!token) return navigate('/signin')
      }, [navigate, token])

const ( data, isError, isLoading, error ) = useQuery({
    queryKey: ['getCurrentProduct', idOfProduct, token]
    queryFn: async () => {
        const res = await fetchCurruntProduct( idOfProduct, token);
        const responce = await res.json();

        if (res.ok) {
            toast.success(res.statusText);
            return responce
            }

            toast.error(responce.message)
            return navigate('/signin')

        
    }
})

if (isLoading) return <p>Загрузка...</p>
if (isError) return <p>Ошибка: {error}</p>

    return (
  <>
    <h1>Детальная страница товара</h1>
        {data &&
        <div>
         {data.name}
         {data.price}
         {data.stock}
         {data.discount}
    </div>
    }
  </>
 )
}