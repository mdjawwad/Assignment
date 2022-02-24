import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  gifs: any[]=[]
  subcribtion !: Subscription
  constructor(private apiData: ApiDataService) {}

  ngOnInit(): void {
    this.apiData.getData()
   this.subcribtion= this.apiData.getGifs().subscribe((reponse:any)=>{
      this.gifs =reponse;
      console.log(reponse);
      
    })
  }



  ngOnDestroy(){
this.subcribtion.unsubscribe()
  }


  // saerch method
  search(searchTerm : string){
    if(searchTerm !== ''){
      this.apiData.searchGif(searchTerm)
 
        
    
    }
  }


}
