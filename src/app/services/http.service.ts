import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private rootAPI = "http://127.0.0.1/arm/public/";

  constructor(private http: HttpClient) {}

  public post = (path: string, data: any) => {
    return new Promise(resolve => {
      this.http
        .post(`${this.rootAPI}${path}`, data)
        .toPromise()
        .then(value => {
          resolve({ connect: true, value: value });
        })
        .catch(reason => {
          resolve({ connect: false, value: reason });
        });
    });
  };
}
