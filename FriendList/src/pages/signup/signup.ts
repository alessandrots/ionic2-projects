import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular'; 
import { LoginPage } from '../login/login';
import { User }  from '../../user-model';
import { Http, Headers } from '@angular/http'; 

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user: User =	{
  	name:"",
  	email:"",
  	username:"",
  	password:"",
  }

  confirmPassword:"";
  url:"";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }message: 'Do you want to buy this book?'

  goToLogin() {
  	this.navCtrl.pop();//push(LoginPage, {});
  }

  signup() {
  	if (this.user.password != this.confirmPassword) {
  		let alert = this.alertController.create({
		    title: 'Error',
		    message: '"Passwords do not match.  Please retry.',
		    buttons: ['Dismiss']
		});
		alert.present();
		return;
  	}
  }

}
