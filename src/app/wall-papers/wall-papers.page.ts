import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../Services/data.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AlertController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-wall-papers',
  templateUrl: './wall-papers.page.html',
  styleUrls: ['./wall-papers.page.scss'],
})
export class WallPapersPage implements OnInit {
  @ViewChild(IonContent, null) ionContent: IonContent;

  wallPapers: any;
  apiKey: string = "untxjeopIOEWhcjrYaxJHUPw5cXVusW6sWJ2kW8w3l8";
  apiPath: string = "https://api.unsplash.com/";
  apiPathWithSearch: string = "https://api.unsplash.com/search/";
  imgOritention: string = "squarish";
  fullUri: string;
  wallPaperPageNum: number = 1;
  dataUrl: any;
  resolveWallPapers: any;
  searchQuery: string;
  searchQueryPassOn: string;

  constructor(private http: HttpClient, private photoViewer: PhotoViewer, private router: Router,
    private dataSvc: DataService, private base64: Base64, private base64ToGallery: Base64ToGallery,
    private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.wallPapers = await this.GetWallPapers();
  }

  async GetWallPapers() {
    this.fullUri = this.apiPath + "photos?client_id=" + this.apiKey + "&page=" + this.wallPaperPageNum + "&per_page=30";
    if (this.searchQueryPassOn != "" && this.searchQueryPassOn != null) 
      this.fullUri = this.apiPathWithSearch + "photos?client_id=" + this.apiKey + "&query=" + this.searchQueryPassOn + "&page=" + this.wallPaperPageNum + "&per_page=30";

      return new Promise(resolve => {
      this.http.get(this.fullUri)
        .subscribe((data: any) => {
          if (this.searchQuery != "" && this.searchQueryPassOn != null)
            this.resolveWallPapers = data.results;
          else
            this.resolveWallPapers = data;
          resolve(this.resolveWallPapers);
        });
    });
  }

  async OpenPhotoViewer(photoUrl: string) {

    var options = {
      share: true, // default is false
      closeButton: true, // default is true
      copyToReference: false, // default is false
      headers: '',  // If this is not provided, an exception will be triggered
      piccasoOptions: {} // If this is not provided, an exception will be triggered,

    };
    this.photoViewer.show(photoUrl, '', options);

  }

  async SaveImageToGallery(photoUrl) {
    this.dataUrl = await this.convertToDataURLviaCanvas(photoUrl);

    this.base64ToGallery.base64ToGallery(this.dataUrl,
      {
        prefix: '_img',
        mediaScanner: true
      }).then(
        res => this.ShowTimeOutAlert("Image Saved Successfully!"),
        err => this.ShowTimeOutAlert('Fail To Save Image')
      );

  }

  async LoadAddOnWallPapers(event?) {
    this.wallPaperPageNum++;
    this.resolveWallPapers = await this.GetWallPapers();

    if (this.resolveWallPapers.length == 0) {
      event.target.disabled = true;
    }
    else {
      await this.resolveWallPapers.forEach(element => {
        this.wallPapers.push(element);
      });
      event.target.complete();
    }

  }

  async SearchWithQuery(event?) {
    this.searchQueryPassOn = this.searchQuery;
    this.resolveWallPapers = await this.GetWallPapers();

    if (this.resolveWallPapers.length != 0) {
      this.wallPapers = this.resolveWallPapers;
      this.ionContent.scrollToTop(1000);
    }
    else{
      this.ShowTimeOutAlert("No Results Found");
    }
  }

  convertToDataURLviaCanvas(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = url;

      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
    });
  }

  async ShowAlert(data: any) {
    let alert = await this.alertCtrl.create({
      header: data,
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  async ShowTimeOutAlert(data: any) {
    let alert = await this.alertCtrl.create({
      message: data,
      cssClass: "alertCssClass"
    });
    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 1500);
  }
}
