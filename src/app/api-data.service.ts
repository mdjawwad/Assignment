import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  gife = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=U9h8Bk073Q6H4TnExq1CkXjivZh75zdr&limit=50`).subscribe((resp: any) => {
      this.gife.next(resp.data)
    })
  }


  searchGif(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=U9h8Bk073Q6H4TnExq1CkXjivZh75zdr&limit=50`)
      .subscribe((resp: any) => {
        this.gife.next(resp.data)
      })
  }


  getGifs() {
    return this.gife.asObservable();
  }
}
