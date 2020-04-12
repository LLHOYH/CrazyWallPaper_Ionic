import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wall-paper-details',
  templateUrl: './wall-paper-details.page.html',
  styleUrls: ['./wall-paper-details.page.scss'],
})
export class WallPaperDetailsPage implements OnInit {

  photoUrl:string;
  constructor(private route: ActivatedRoute) { 


  }

  ngOnInit() {
    if(this.route.snapshot.data["photoUrl"]){
      this.photoUrl=this.route.snapshot.data["photoUrl"];
    }
  }

}
