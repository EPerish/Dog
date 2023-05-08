import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_DOG_TOKEN } from "../../components/utils/constants"



export const SignUp = ()=> {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem(AUTH_DOG_TOKEN)

        if(token) return navigate('/products')
      }, [navigate])

    return (
        <>
        <h1>Регистрация</h1>
        </>
    )
}