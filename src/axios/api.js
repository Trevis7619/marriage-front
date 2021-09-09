import axios from 'axios'


// baseURL.baseHost
// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://127.0.0.1:1236';
axios.defaults.headers.get['Content-Type'] = 'application/json'

// 封装get方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(
                response => {
                    resolve(response.data)
                },
                err => {
                    reject(err)
                }
            )
            .catch(error => {
                reject(error)
            })
    })
}

export default ({
    getList(){
        return get("/marriage/list")
    },
})
