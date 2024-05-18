import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/index.js";
import { useEffect, useState } from "react";
import './style/main.css';
import { UsersDataContext } from "./context/UsersDataContext.js";
import { PostsContext } from "./context/PostsContext.js";
import GetApis from "./post/GetApis.js";
import { useFilter } from "./components/hooks/useFilter.js";

export const App = () => {
    let [users,setUsers] = useState([])
    let [authUser,setAuthUser] = useState({username:null,password:null,email:null,isAuth:null,id:null})
    let [contentFilter,setContentFilter] = useState({sortQuery:'',searchQuery:''})
    let [paginateContent,setPaginateContent] = useState({limitContent:10,xTotalCount:null})
    let [preloaders,setPreloadersStatus] = useState({isPostLoading:true,additLoading:false})
    let [postsData,setPostsData] = useState([])

    const router = !authUser.isAuth ? publicRoutes() : privateRoutes()

const fetchPostsApi = async() => {
    
    setPreloadersStatus({...preloaders,additLoading:true})
    const responsePosts = await GetApis.getPosts(paginateContent.limitContent)
    setPaginateContent({...paginateContent,xTotalCount:responsePosts.headers[`x-total-count`]})
    setPostsData(responsePosts.data)

    const responseUsers = await GetApis.getUsers()
    setUsers([...users,...responseUsers.data])
    
    if(!postsData.length) {
        setPreloadersStatus({...preloaders,isPostLoading:true})
        setPreloadersStatus({...preloaders,isPostLoading:false})
        return
    }
        setPreloadersStatus({...preloaders,additLoading:false})
}

const editPostContent = (newInfo) => {
    const allData = postsData
    const selectedPost = allData.find((el) => el.id === newInfo.id)
    selectedPost.title = newInfo.title
    selectedPost.body = newInfo.body
    setPostsData([...allData])
}

const deletePost = (postId) => {
    setPostsData([...postsData].filter((el) => el.id !== postId))
}

const createNewPost = (newPostInfo) => {
    const id = new Date().getTime()
    setPostsData([...postsData,{...newPostInfo,id}])
}

const filteredPosts = useFilter(postsData,contentFilter.sortQuery,contentFilter.searchQuery)


useEffect(() => {
    fetchPostsApi()
},[paginateContent.limitContent])

    return (
        <PostsContext.Provider value={{
            postsData:filteredPosts,
            setPostsData,
            users,
            limitContent:paginateContent.limitContent,
            setPaginateContent:setPaginateContent,
            paginateContent,
            xTotalCount:paginateContent.xTotalCount,
            isLoading:preloaders.isPostLoading,
            additLoading:preloaders.additLoading,
            contentFilter,
            setContentFilter,
            editPostContent,
            deletePost,
            createNewPost
        }}>
        <UsersDataContext.Provider value={{
            users,
            authUser,
            setAuthUser,
            setUsers,
        }}>

{router && <RouterProvider router={router}/>}

        </UsersDataContext.Provider>
        </PostsContext.Provider>
           
    )
}