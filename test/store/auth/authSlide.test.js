import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlide', () => {
    test('debe de regresar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);

        expect(authSlice.name).toBe('auth');

    });

    //el reducer genera un nuevo estado, por eso se le pasa el estado inicial
    test('debe de realizar la autenticación', () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    });

    test('debe de realizar el logout sir argumentos', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status: 'unauthenticated', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
    });

    test('debe de realizar el logout y mostrar un msj de error', () => {
        const errorMessage = 'crededenciales no son correctas';
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
        expect(state).toEqual({
            status: 'unauthenticated', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    });

    test('debe de cambiar el status a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking'); 
    });
})
