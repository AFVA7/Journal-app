export const initialState = {
    status: 'checking', // 'checking' | 'authenticated' | 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticated', // 'checking' | 'authenticated' | 'unauthenticated'
    uid: '123ABC',
    email: 'demo@Google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
};

export const unauthenticatedState = {
    status: 'unauthenticated', // 'checking' | 'authenticated' | 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: '123ABC',
    email: 'demo@Google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
}