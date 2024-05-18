import { useMemo } from "react"

export const useSortedPosts = (postsData,sortQuery) => {
   const sortedPosts = useMemo(() => {
    if(sortQuery) {
        return postsData.sort((a,b) => a[sortQuery].localeCompare(b[sortQuery]))
    } 
    return postsData
   },[sortQuery,postsData])
   return sortedPosts
}
export const useFilter = (postsData,sortQuery,searchQuery) => {
    const sortedPosts = useSortedPosts(postsData,sortQuery)
    const searchedPosts = useMemo(() => {
        if(searchQuery) {
            return sortedPosts.filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
        } 
        return sortedPosts
    },[searchQuery,postsData])
    return searchedPosts
}