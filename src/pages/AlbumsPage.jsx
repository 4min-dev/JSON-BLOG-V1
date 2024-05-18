import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../components/ui/Header'
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan'
import { CustomButton } from '../components/ui'
import { ContentPreloader } from '../components/ui/ContentPreloader'
import mathTotalContent from '../utils/pagination/mathTotalContent'
import GetApis from '../post/GetApis'
import { AlbumList } from '../components/ui/AlbumList'
import { CustomPaginateButtons } from '../components/ui/custom/CustomPaginateButtons'
import { UsersDataContext } from '../context/UsersDataContext'
import { NewAlbumPopup } from '../components/ui/NewAlbumPopup'
import { AlbumGalleryPopup } from '../components/ui/AlbumGalleryPopup'

const limit = 5

export const AlbumsPage = () => {
    const { authUser } = useContext(UsersDataContext)

    let [isLoading,setLoading] = useState(false)
    let [hasNewAlbumPopup,setNewAlbumPopup] = useState(false)
    let [hasAlbumOpen,setAlbumOpenStatus] = useState({popupStatus:false,popupContent:null})
    let [albumData,setData] = useState([])
    let [paginateContent,setPaginateContent] = useState({totalCardsValue:null,currPage:1})

    let [newAlbumTitle,setNewTitle] = useState('')
    let [newAlbumLogo, setNewAlbumLogo] = useState({imgUrl:null,imgStatus:null})

    let [newImgToPopup, setNewImgToPopup] = useState({imgUrl:null,imgStatus:null})

const sendNewAlbumToPopup = (newImgData) => {
    if(!newImgData) {
        return
    }
    setAlbumOpenStatus({...hasAlbumOpen,popupContent:[...hasAlbumOpen.popupContent,{...newImgData}]})
    setNewImgToPopup({imgUrl:null,imgStatus:null})
}

{newImgToPopup.imgUrl && sendNewAlbumToPopup({
    userId:authUser.id,
    id:new Date().getTime(),
    url:newImgToPopup.imgUrl,
    thumbnailUrl:newImgToPopup.imgUrl
})}

const fetchAlbumsApi = async() => {
   if(!newImgToPopup.imgUrl) {
    setLoading(true)
    const responseAlbumData = await GetApis.getAlbums(limit,paginateContent.currPage)
    const xTotalCount = responseAlbumData.headers[`x-total-count`]
    setPaginateContent({...paginateContent,totalCardsValue:mathTotalContent(xTotalCount,limit)})
    setData(responseAlbumData.data)
    setLoading(false)
    return
   }

}
const addNewAlbum = (albumInfo) => {
    if(!albumInfo) {
        return
    }
    setData([...albumData,{...albumInfo}])
    setNewTitle('')
    setNewAlbumLogo({imgUrl:null,imgStatus:null})
    setNewAlbumPopup(false)
}
useEffect(() => {
    fetchAlbumsApi()
},[paginateContent.currPage])

  return (
    <>
    {hasNewAlbumPopup 
    && <NewAlbumPopup setNewAlbumPopup={setNewAlbumPopup} setNewTitle={setNewTitle} newAlbumTitle={newAlbumTitle} setNewAlbumLogo={setNewAlbumLogo} newAlbumLogo={newAlbumLogo} addNewAlbum={addNewAlbum} authUser={authUser}/>}

    {hasAlbumOpen.popupStatus 
    && <AlbumGalleryPopup setAlbumOpenStatus={setAlbumOpenStatus} hasAlbumOpen={hasAlbumOpen} setNewImgToPopup={setNewImgToPopup} newImgToPopup={newImgToPopup}/>}

     <Header/>
     <CustomAsidePan>
        <CustomButton buttonText={'New Album'} classname={'customButton'} id={'buttonAddNewAlbum'} handleClick={() => setNewAlbumPopup(true)}/>
     </CustomAsidePan>

        {isLoading 
        ? <ContentPreloader/> 
        : <div className='containerMainPagesContent'>
            <div className='contentMainPagesContent'>
            {albumData.length > 0 
            ? <>
            <div className="containerAlbumlist">
                {albumData.map((el,i) => <AlbumList albumInfo={el} key={el.id} albumIndex={i} setAlbumPopup={setAlbumOpenStatus} sendPhotos={sendNewAlbumToPopup}/>) }
            </div>
            <CustomPaginateButtons totalPages={paginateContent.totalCardsValue} setPaginateContent={setPaginateContent} paginateContent={paginateContent}/>
            </>
            : <h1>Albums is not defined</h1>}

            </div>
          </div>}

    </>
  )
}