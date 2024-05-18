import { Navigate, createBrowserRouter } from "react-router-dom"
import { AssignExam } from "./exams/AssignExam"
import { PostsPage } from "../pages/PostsPage"
import { RevealedPost } from "../pages/RevealedPost"
import { AlbumsPage } from "../pages/AlbumsPage"
import { UserProfilePage } from "../pages/UserProfilePage"

export const privateRoutes = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<AssignExam>
                <Navigate to={'/posts'}></Navigate>
            </AssignExam>,
            errorElement:<AssignExam>
                <Navigate to={'/posts'}></Navigate>
            </AssignExam>
        },
        {
            path:'/login',
            element:<AssignExam>
               <Navigate to={'/posts'}></Navigate>
            </AssignExam>,
        },
        {
            path:'/posts',
            element:<PostsPage/>
        },
        {
            path:`/posts/post/:id`,
            element:<RevealedPost/>
        },
        {
            path:'/albums',
            element:<AlbumsPage/>
        },
        {
            path:`/profile/user/:id`,
            element:<UserProfilePage/>
        }
    ])
    return routes
}