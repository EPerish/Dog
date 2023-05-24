import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const useNoAuth = () => {
        const navigate = useNavigate()
        const { token } = useSelector(state => state.user)


        useEffect(() => {
           
            if(token) return navigate('/products')
          }, [navigate])
}