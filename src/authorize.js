function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

let state = generateRandomString(16);
export const authURL = 'https://accounts.spotify.com/authorize'
+ '?response_type=token'
+ '&client_id=' + encodeURIComponent('36c8349b1f514b8a8c296ba935d44df6')
+ '&scope=' + encodeURIComponent('user-top-read')
+ '&redirect_uri=' + encodeURIComponent('http://localhost:3000')
+ '&state=' + encodeURIComponent(state);

export const preservedState = state;