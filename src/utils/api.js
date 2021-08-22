class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    _handleResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

    getPlaysInfo() {
        return fetch(`${this.baseUrl}`, {
            //mode: 'no-cors',
            headers: this.headers,
        })
        .then(this._handleResponse)
    }
}

export const api = new Api ({
    baseUrl: '../constants/data.json',
    headers: {
        'Content-Type': 'application/json'
    }
})