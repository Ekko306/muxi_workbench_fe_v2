const Request = (url, options) => {
    if (options === void 0) {
        options = {}
    }
    url = `/api/v1${url}`

    options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    options.headers.Authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE1LCJyb2xlIjoxLCJ0ZWFtX2lkIjoxLCJleHBpcmVzX2F0IjoxNjE2NzI3NzAyfQ.ebxQOPGkCWNoBvh6YqUZIZdDjbfs48xbelpnv6oirco'

    if (options.body) {
        options.body = JSON.stringify(options.body)
    }

    return fetch(url, options).then(function (res) {
        return res.json()
    })
}

export default Request
