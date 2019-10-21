import axios from "axios"


/**
 * axios请求封装
 */
const service = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
})

export default service

