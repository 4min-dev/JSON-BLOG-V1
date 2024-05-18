import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UsersDataContext } from "../../context/UsersDataContext"

export const AssignExam = ({children}) => {
    const { authUser } = useContext(UsersDataContext)
    if(authUser.isAuth !== true) {
        console.log(authUser)
       return <Navigate to={'/login'}></Navigate>
    }
    return children
}