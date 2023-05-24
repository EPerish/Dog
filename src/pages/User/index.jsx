import { useSelector } from "react-redux"
import { useAuth, userAuth } from "../../hooks/useAuth"


export const User = ()=> {
    useAuth()
    const user= useSelector(state=>state.user)

      


    return (
        <>
        <h1>User me</h1>
        <div>
            <p>Имя: {user.name}</p>
            <p>Описание: {user.about}</p>
            <p>Группа: {user.group}</p>
            <p>Имя</p>
        </div>
        </>
    )

}