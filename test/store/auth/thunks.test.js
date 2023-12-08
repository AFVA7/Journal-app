import { loginWithEmailAndPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAutentication, startGooleSingIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearsNoteLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";
jest.mock('../../../src/firebase/providers');

describe('Pruebas en authThunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());


    test('debe de invocar el checkingCredentials', async () => {

        await checkingAutentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('StartGoogleSingIn debe de invocar el checkingCredentials y login -Exito', async () => {
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGooleSingIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('StartGoogleSignIn debe de invocar el checkingCredentials y logout -Error', async () => {
        const loginData = { ok: false, errorMessage: 'Un error en google' };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGooleSingIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });
    test('startLoginWithEmailPassword debe de invocar el checkingCredentials y login -Exito', async () => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailAndPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startLogout debe de invocar a logoutFirebase, clearsNoteLogout y logout', async () => {

        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith((clearsNoteLogout()));
        expect(dispatch).toHaveBeenCalledWith(logout());

    });
})