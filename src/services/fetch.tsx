interface Option {
    //Fetch类的option参数
    token: string
    method?: string
    body?: body
}

type body = Record<string, unknown>

function encodeUrlParams(data) {
    return Object.keys(data)
        .map((key) => [key, data[key]].map(encodeURIComponent).join('='))
        .join('&')
}

function Fetch<T>(url: string, option: Option): Promise<T> {
    const headersInit: HeadersInit = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
    })
    headersInit.set('token', option.token)

    const requestInit: RequestInit = {
        headers: headersInit,
        method: option.method || 'GET'
    }

    if (option.body) {
        if (option.method == 'GET') {
            url = `${url}/?${encodeUrlParams(option.body)}`
        } else {
            requestInit.body = JSON.stringify(option.body)
        }
    }
    //将option参数规范到requestInit里，根据body规范url，下一步调用fetch

    return fetch(url, requestInit).then((response) => {
        switch (response.status) {
            case 200:
                // if (opt.responseHeaders && opt.responseHeaders.length) {
                //     const headers = opt.responseHeaders.map(key =>
                //         response.headers.get(key)
                //     );
                //     return {
                //         json: response.json(),
                //         headers,
                //         status: response.status
                //     };
                // }
                return response.json()

            case 201:
                // if (opt.responseHeaders && opt.responseHeaders.length) {
                //     const headers = opt.responseHeaders.map(key =>
                //         response.headers.get(key)
                //     );
                //     return {
                //         json: response.json(),
                //         headers,
                //         status: response.status
                //     };
                // }
                return response.json()

            case 304:
                return response.json()

            case 401:
                throw new Error('未授权')

            case 402:
                return response.json()
            //     .then((msg) => {
            //     if (msg && msg.msg && translateWrongInfo.get(msg.msg)) {
            //         throw new Error(translateWrongInfo.get(msg.msg))
            //     } else {
            //         throw new Error('修改失败')
            //     }
            // })

            case 403:
                throw new Error('没有权限访问')

            case 404:
                throw new Error('页面地址错误')

            case 409:
                throw new Error('用户名称重复')

            case 413:
                throw new Error('文件体积过大')

            case 500:
                throw new Error('服务器错误')

            case 502:
                throw new Error('网关错误')

            default:
                throw new Error('Wrong')
        }
    })
}

export default Fetch
