import { fileUpload } from "../../src/helpers/fileUpload";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'andres-valencia',
    api_key: '657353111774894',
    api_secret: 'iPDC5j1-WInT9BnGAkg8Phl-Nj8',
    secure: true
});

describe('pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a clouddinary', async() => {
        const imageUrl = 'https://media.istockphoto.com/id/1485169762/es/foto/puente-nuevo-en-ronda.jpg?s=2048x2048&w=is&k=20&c=l5q4Lwdoe4v0q7lyV2qGSEAeiPSAm_X3nn698xlSlww=';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'//opcional
        });
        // console.log({cloudResp});
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
})