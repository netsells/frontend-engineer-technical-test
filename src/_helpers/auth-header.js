export function authHeader(method = '') {
    // return authorization header with jwt token
    let user_token = JSON.parse(localStorage.getItem('user_token'));

    var contentType = "multipart/form-data";

    if (method == 'put' || method == 'post') {
        contentType = "text/json";
    }

    if (user_token) {
        return {
            'Authorization': 'Bearer ' + user_token,
            'Content-Type': contentType
        };
    } else {
        return {};
    }
}
