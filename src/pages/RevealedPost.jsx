import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GetApis from '../post/GetApis'
import { RevealedPostList } from '../components/ui/RevealedPostList'
import { Header } from '../components/ui/Header'
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan'
import { PostCommentList } from '../components/ui/PostCommentList'
import { CustomButton } from '../components/ui'
import { NewCommentToPost } from '../components/ui/NewCommentToPost'
import { ContentPreloader } from '../components/ui/ContentPreloader'
import { PostsContext } from '../context/PostsContext'
import { CommentsIsNotDefined } from '../components/ui/CommentsIsNotDefined'

export const RevealedPost = () => {
const { postsData } = useContext(PostsContext)
    const location = useParams()
    const currLocate = useNavigate()
    let [revealedPostData,setRevealedPost] = useState({postData:{},isPostDataLoading:true})
    let [revealedPostCommentsData,setPostComments] = useState({postCommentsData:[],isPostCommentsLoading:true})

    const fetchPostStatApi = async() => {
        setRevealedPost({...revealedPostData,isPostDataLoading:true})
        setPostComments({...revealedPostCommentsData,isPostCommentsLoading:true})
        
        try {
            const postDataResponse = await GetApis.getRevealedPost(location.id)
            const postCommentsResponse = await GetApis.getRevealedPostComments(location.id)
            setPostComments({postCommentsData:postCommentsResponse.data,isPostCommentsLoading:false})
            setRevealedPost({postData:postDataResponse.data,isPostDataLoading:false})
        } catch (error) {
            console.error(error);
            setPostComments({postCommentsData:[],isPostCommentsLoading:false})
            const selectedPost = postsData.find((el) => el.id == location.id)
            setRevealedPost({postData:selectedPost,isPostDataLoading:false})
        }
    }

const addNewComment = (commentInfo) => {
    setPostComments({...revealedPostCommentsData,postCommentsData:[...revealedPostCommentsData.postCommentsData,{...commentInfo}]})
}
const deleteComment = (commentId) => {
    setPostComments({...revealedPostCommentsData,postCommentsData:[...revealedPostCommentsData.postCommentsData].filter((el) => el.id !== commentId)})
}
const editComment = (newComment) => {
    const allComments = revealedPostCommentsData.postCommentsData
    const selectedComment = allComments.find((el) => el.id === newComment.id)
    selectedComment.body = newComment.body
    setPostComments({...revealedPostCommentsData,postCommentsData:[...allComments]})
}
    useEffect(() => {
        fetchPostStatApi()
    },[])
    
  return (
   <>
   <Header/>
        <CustomAsidePan>
            <CustomButton classname={'customButton'} id={'asideCustomBackButtonRevealdPostPage'} buttonText={'Back'} handleClick={() => currLocate(-1)}/>
        </CustomAsidePan>
    
    <div className='containerMainRevealedPostPage'>
     <div className='contentMainRevealedPostPage'>
        {revealedPostData.postData
         && <div className='containerMainPostList'>
                {revealedPostData.isPostDataLoading 
                ? <ContentPreloader/> 
                : <RevealedPostList postInfo={revealedPostData.postData}/>}
            </div>}
     </div>
    </div>

        {revealedPostCommentsData.postCommentsData
        && <div className="containerMainPostListComments">
            <hr></hr>
                <div className="contentMainPostListComments">
                 {revealedPostCommentsData.isPostCommentsLoading 
                 ? <ContentPreloader/> 
                 :  
                 <>
                 <h1>{`Comments (${revealedPostCommentsData.postCommentsData.length})`}</h1>
                {revealedPostCommentsData.postCommentsData.length > 0 
                 ? revealedPostCommentsData.postCommentsData.map((el) => <PostCommentList key={el.id} commentData={el} deleteComment={deleteComment} editComment={editComment}/>)
                 : <CommentsIsNotDefined/>
                }  
                 </>
    
                 
}
                </div>
               <NewCommentToPost addNewComment={addNewComment}/>
            </div> }
   </>
  )
}