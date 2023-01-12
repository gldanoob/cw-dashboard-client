import { URLSearchParams } from "url";

const AUTH_URL = 'https://projects.cs.nott.ac.uk/oauth/authorize'
const CLIENT_ID = 'af4b383a1680e13f18320deadda4838b0a2cc60978b1b1526fcfef110e4d9cc1';
const REDIRECT_URI = 'https://cw-dashboard-4b5b2.web.app/callback';
const SCOPE = 'read_repository';
const STATE_KEY = 'oauth2-state';

const CALLBACK_URL = 'https://cw-dashboard-4b5b2.web.app/mod/CS101';

const genState = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let array = new Uint8Array(40);
    window.crypto.getRandomValues(array);
    let state = "";
    array.forEach(x => state += chars.charAt(x % chars.length));
    return state;
}

const saveState = (state: string) => {
    sessionStorage.setItem(STATE_KEY, state);
};

const removeState = () => {
    sessionStorage.removeItem(STATE_KEY);
};

const getAuthUrl = (state: string) =>
    AUTH_URL +
    `?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${state}`

const getCallbackUrl = (authCode: string, state: string) =>
    `${CALLBACK_URL}?code=${authCode}&state=${state}`

export default function useAuth() {
    const auth = () => {
        const state = genState();
        saveState(state);

        const url = getAuthUrl(state);

        window.location.replace(url);
    }

    const callback = (searchParams: URLSearchParams) => {
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        console.log(code, state);

        if (!code || !state) return

        const callbackUrl = getCallbackUrl(code, state);

        return callbackUrl
        // window.location.replace(callbackUrl)
    }

    return { auth, callback }
}