import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private endpoint: String = "categories";

  constructor() { }

  allCategories() {
    const options = {
      url: `${environment.apiURL}/${this.endpoint}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };

    return new Promise((resolve, reject) => {
      Http.get(options)
      .then(resp => {

        if(resp.status < 400) {
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    });
  }

  getCategory(id:string) {
    const options = {
      url: `${environment.apiURL}/${this.endpoint}/${id}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };

    return new Promise((resolve, reject) => {
      Http.get(options)
      .then(resp => {

        if(resp.status < 400) {
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    });
  }

  saveCategory(data: any) {
    const options = {
      url: `${environment.apiURL}/${this.endpoint}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    return new Promise((resolve, reject) => {
      Http.post(options)
      .then(resp => {

        if(resp.status < 400) {
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    });
  }

  updateCategory(id: string, data: any) {
    const options = {
      url: `${environment.apiURL}/${this.endpoint}/${id}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    return new Promise((resolve, reject) => {
      Http.put(options)
      .then(resp => {

        if(resp.status < 400) {
          resolve(resp)
        }else{
          reject(resp)
        }
      })
    });
  }
}
