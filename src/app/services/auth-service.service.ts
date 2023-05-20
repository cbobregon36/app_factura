import { Injectable } from '@angular/core';
import { Http} from '@capacitor-community/http';
import { HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login = (credentials: any) => {
    const options = {
      url: `${environment.apiURL}/login`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: credentials,
    };
    
    return new Promise((resolve, reject) => {
      Http.post(options)
      .then(resp => {

        if(resp.status < 400){
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    });
    // const response: HttpResponse = await Http.post(options);

    // return response;
  }
}
