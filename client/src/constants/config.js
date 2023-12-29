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
    userSignup: { url: '/signup', method: "POST" }
}