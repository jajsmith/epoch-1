import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestDurationPage } from '../request-duration/request-duration';

@IonicPage()
@Component({
  selector: 'page-request-options',
  templateUrl: 'request-options.html',
})
export class RequestOptionsPage {
  selectedOption;
	requestOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.requestOptions = [
      {title: 'Language Exchange'},
      {title: 'Medical Interpretation'},
      {title: 'Medical Transportation'},
      {title: 'Child Minding'}
    ];
  }

  nextPage(){
    
    if(this.selectedOption == null) {
      document.getElementById("option-error").style.display = 'block';
    }
    else {
      document.getElementById("option-error").style.display = 'none';
      this.navCtrl.push(RequestDurationPage, {'title': this.selectedOption});
    }
  }

}
