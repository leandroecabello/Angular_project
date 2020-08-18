import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
    public url: string;

    constructor() {
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise( (resolve, reject) => {
            const formData: any = new FormData();
            const xhr = new XMLHttpRequest();

            // adjunta archivos
            for (const data of files) {
                formData.append(name, data, data.name);
            }

            // petición AJAX
            xhr.onreadystatechange = ( () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            });

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}
