import {redirect} from "next/navigation";

const STATUS_SUCCESS = '0000' // 成功
const STATUS_SESSION_EXPIRED = '1002' // 会话过期
const ERROR_DEFAULT_MSG = '请求失败'

let baseURL;
if (process.env.NODE_ENV === 'development') {
    console.log(777);
    baseURL = 'https://apifoxmock.com/m1/5142863-4806799-default'
} else {
    baseURL = 'https://apifoxmock.com/m1/5142863-4806799-default'
    console.log(888);
}

const request = (config) => {
    let url = `${baseURL}${config.url}`;
    let headers = config.header || {
        'Content-Type': 'application/json'
    }

    let fetchInit = {
        method: config.method,
        headers,
    }

    if (fetchInit.method === 'POST') {
        fetchInit.body = JSON.stringify(config.data);
    }
    else if (fetchInit.method === 'GET') {
        url = new URL(url);
        url.search = new URLSearchParams(config.params);
    }

    return new Promise((resolve, reject) => {
        fetch(url, fetchInit)
            .then(response => response.json())
            .then(data => {
                try {
                    const ret = transformRequestData(data)
                    resolve(ret)
                } catch (err) {
                    reject(err)
                }


            })
            .catch(error => {
                reject(error)
            });
    })

}

function transformRequestData(data) {
    console.log(data);

    // 请求的是数据流
    if (data instanceof Blob) {
        return data
    }

    const { result, message, code } = data

    // 请求成功
    if (code === STATUS_SUCCESS) {
        return result
    }
    // 会话过期
    else if (code === STATUS_SESSION_EXPIRED) {
        redirect('/login')
        throw new Error(message)
    } else {
        throw new Error(message || ERROR_DEFAULT_MSG)
    }
}


export default request;