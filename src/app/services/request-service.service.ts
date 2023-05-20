import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor() { }

  get(options: any) {
    return new Promise((resolve, reject) => {
      Http.get(options)
      .then(resp => {
        
        if(resp.status < 400){
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    })
  }

  post(options: any) {
    return new Promise((resolve, reject) => {
      Http.post(options)
      .then(resp => resolve(resp))
      .catch(err => reject(err))
    })
  }

  put(options: any) {
    return new Promise((resolve, reject) => {
      Http.put(options)
      .then(resp => resolve(resp))
      .catch(err => reject(err))
    })
  }

  delete(options: any) {
    return new Promise((resolve, reject) => {
      Http.del(options)
      .then(resp => resolve(resp))
      .catch(err => reject(err))
    })
  }
}
