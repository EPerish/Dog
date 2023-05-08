import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_DOG_TOKEN } from "../../components/utils/constants"
import { fetchInfoAboutMe } from "../../api/user"


export const User = ()=> {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const token = localStorage.getItem(AUTH_DOG_TOKEN)

    useEffect(() => {
        if(!token) return navigate('/signin')
      }, [navigate,token])

      

      useEffect(()=> {
        const fetchData = async ()=>{
            const res = await fetchInfoAboutMe(token)
            const responce = await res.json()

            console.log(responce)

            return setUser(responce)
        }
        fetchData()
      }, [token])


    return (
        <>
        <h1>User me</h1>
        {user && <div>
            <p>Имя: {user.name}</p>
            <p>Описание: {user.about}</p>
            <p>Группа: {user.group}</p>
            <p>Имя</p>
        </div>}
        </>
    )

}