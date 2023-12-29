import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from '../constants/config';

const API_URL = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        // stop loader here
        return processResponse(response)
    },
    function (error) {
        // stop loader here
        return Promise.reject(processError(response))
    }
)

//////////////////
// if sucess - > return { isSuccess: true , data : object}
// if failure -> return { isFailure: false , status:string, msg:string  ,code: int}
/////////////////


const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: object }
    } else {
        return {
            isFaliure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


//////////////////
// if sucess - > return { isSuccess: true , data : object}
// if failure -> return { isFailure: false , status:string, msg:string  ,code: int}
/////////////////

const processError = (error) => {
    if (error.response) {
        // request made server responded with error code other than 200  
        console.log("Error in response: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.responseFaliure,
            code: error.response.status
        }
    }
    else if (error.request) {
        // request made , no response received
        console.log("Error in request: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.requestFaliure,
            code: ""
        }
    }
    else {
        // something happend , i dont know how to handle
        console.log("Error in network: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.networkError,
            code: ""
        }
    }
}

const API = {}

for (const [key, value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) => {
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }

        })
    }
}

export { API };
