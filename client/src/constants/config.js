// API notification message

export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: "Loading....",
        message: "Please wait, your data is loading..."
    },
    sucess: {
        title: "Success",
        message: "Your data has been successfully loaded"
    },
    responseFaliure: {
        title: "Error",
        message: "An error occurred"
    },
    requestFaliure: {
        title: "Error",
        message: "An error occurred while parsing the data"
    },
    networkError: {
        title: "Error",
        message: "Unable to connect to the server , please try again"
    }
}


// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }

export const SERVICE_URL = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
}