import React, { useEffect, useState } from 'react'
import preloader from '../../style/img/preloader.gif'
import GetApis from '../../post/GetApis'
export const AlbumList = ({albumInfo,albumIndex,setAlbumPopup}) => {
  let [albumData,setAlbumData] = useState([])
const fetchAlbumsApi = async() => {
  if(!albumInfo.url) {
    const response = await GetApis.getAlbumPhotos(albumInfo.id)
    setAlbumData(response.data)
    return
  }
  setAlbumData([{url:albumInfo.url,thumbnailUrl:albumInfo.url}])
}
  useEffect(() => {
    fetchAlbumsApi()
  },[])
  return (
    <div className='albumCard' id={`album_${albumIndex+1}`} onClick={() => {
      setAlbumPopup({popupStatus:true,popupContent:albumData})
    }}>
      <h1>{albumInfo.title}</h1>
      <img alt={'albumLogo'} src={albumData.length > 0 ? albumData[0].url : preloader }/>
    </div>
  )
}