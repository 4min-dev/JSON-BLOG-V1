import { createBrowserRouter } from "react-router-dom"
import { AssignExam } from "./exams/AssignExam"
import { LoginPage } from "../pages/LoginPage"
import { SignUpPage } from "../pages/SignUpPage"
// AssignExam - exam component which created for exam hasAssign = true (return children component) or false (return Navigate to '/login')

export const publicRoutes = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<AssignExam>
                <h1>Login page</h1>
                </AssignExam>,
            errorElement:<AssignExam>
                <h1>Login page</h1>
            </AssignExam>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
        {
            path:'/signup',
            element:<SignUpPage/>
        }
    ])
    return routes
}

