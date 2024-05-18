import axios from 'axios';

class GetApis {
    static async getPosts(limit) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit:limit,
            }
        })
        return response
    }
    static async getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response
    }
    static async getRevealdUser(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response
    }
    static async getRevealedPost(postId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        return response
    }
    static async getRevealedPostComments(postId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return response
    }

    static async getAlbums(limit,page) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`, {
            params: {
                _limit:limit,
                _page:page
            }
        })
        return response
    }
    static async getAlbumPhotos(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        return response
    }
}
export default GetApis
