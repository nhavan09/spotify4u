function getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q) ) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}
let params = getHashParams();
export const access_token = params.access_token;
export const checkState = params.state;