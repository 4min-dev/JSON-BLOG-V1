import React, { useContext, useState } from 'react'
import { Header } from '../components/ui/Header'
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan'
import { CustomButton, CustomInput } from '../components/ui'
import { CustomSortPan } from '../components/ui/custom/CustomSortPan'
import { PostsContext } from '../context/PostsContext'
import { PostsList } from '../components/ui/PostsList'
import preloader from '../style/img/preloader.gif'
import { ContentPreloader } from '../components/ui/ContentPreloader'
import { PopupWindow } from '../components/ui/PopupWindow'
import { optionsData } from '../post/StaticData'
import { NewPostPan } from '../components/ui/NewPostPan'
import { NotFoundResult } from '../components/ui/NotFoundResult'

export const PostsPage = () => {
  let { 
    postsData,
    limitContent,
    setPaginateContent,
    paginateContent,
    xTotalCount,
    isLoading,
    additLoading,
    contentFilter,
    setContentFilter } = useContext(PostsContext)

    let [hasPopupActive,setPopupActive] = useState(false)
    let [newPostContent,setNewPostContent] = useState({title:'',body:''})

  return (
    <>

    {hasPopupActive
    && <PopupWindow popupTitle={'New Post'} setPopup={setPopupActive}>
           <NewPostPan setNewPostContent={setNewPostContent} newPostContent={newPostContent} setPopupActive={setPopupActive}/>
        </PopupWindow>}

        <Header/>
        <CustomAsidePan>
            <CustomButton buttonText={'Add New'} classname={'customButton'} id={'buttonAddNewPost'} handleClick={() => setPopupActive(true)}/>
            <CustomSortPan defaultValue={'Sort..'} options={optionsData} onChange={(e) => setContentFilter({...contentFilter,sortQuery:e})}/>
        </CustomAsidePan>

        <div className='containerMainPagesContent'>
            <div className="contentMainPagesContent">
         {isLoading 
         ? <ContentPreloader/> 
         : <>
            <CustomInput placeholder={'Search..'} id={'searchInput'} type={'text'} onChange={(e) => setContentFilter({...contentFilter,searchQuery:e.target.value})}/>

         {postsData.length > 0
    ?
    <div className='containerMainPostList'>
             {postsData.map((postInfo) => <PostsList key={postInfo.id} postInfo={postInfo}/>)}
              {limitContent != xTotalCount 
                && <CustomButton classname={'customButton'} buttonText={additLoading 
                  ? <img src={preloader}/> 
                  : 'More..'} id={'morePreloaderContentButton'} handleClick={() => {
                    setPaginateContent({...paginateContent,limitContent:limitContent+10})
            }}/>}
            </div>
    : <NotFoundResult/>}
            </>}
            </div>
       </div>
    </>
  )
}