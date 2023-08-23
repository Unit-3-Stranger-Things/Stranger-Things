let authToken = 'your_auth_token_here'; // Replace with your actual authentication token

export function getAuth() {
    return authToken;
}

export function setAuth(value) {
    authToken = value;
}
