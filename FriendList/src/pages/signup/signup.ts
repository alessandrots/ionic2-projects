import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular'; 
//import { LoginPage } from '../login/login';
import { User }  from '../../user-model';
import { Http, Headers, RequestOptions} from '@angular/http'; 
import 'rxjs/add/operator/map';

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

  confirmPassword:string;
  url:string;
  headers: Headers;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
    public http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToLogin() {
  	this.navCtrl.pop();//push(LoginPage, {});
  }

  // signup2() {
  // 	if (this.user.password != this.confirmPassword) {
  // 		let alert = this.alertController.create({
  // 		    title: 'Error',
  // 		    message: '"Passwords do not match.  Please retry.',
  // 		    buttons: ['Ok']
  // 		});
  // 		alert.present();
  // 		return;
  // 	}

  //   this.url = "http://localhost:8000/rest/users2";
  //   let params = '';
  //   params += '?name='+this.user.name;
  //   params += '&username='+this.user.username;
  //   params += '&email='+this.user.email;
  //   params += '&password='+this.user.password;
  //   console.log('user = ', this.user);

  //   this.http.post(this.url + params, { headers: this.montarHeaders() })
  //   // .map ( res => res.json())
  //   .subscribe(res => {
  //     console.log('res = ', res);
  //   }, err => {
  //     console.log('err = ', err);
  //   });
  // }

  signup() {
    if (this.user.password != this.confirmPassword) {
      let alert = this.alertController.create({
          title: 'Error',
          message: 'Passwords do not match.  Please retry.',
          buttons: ['Ok']
      });
      alert.present();
      return;
    }

    this.url = "http://localhost:8000/rest/users";
    // this.url = "https://parsewithionic-alessandrots.c9users.io/app1/users";


   
    this.http.post(this.url, JSON.stringify(this.user), this.montarHeaders())
    // .map ( res => res.json())
    .subscribe(res => {
      console.log('retorno = ', res);
      let alert = this.alertController.create({
        title: 'Success',
        message: 'Account has been created.',
        buttons: [{
          text: 'Login',
          // role: 'cancel',
          handler: () => {
            this.navCtrl.pop();
          }}]
      });
      alert.present();
    }, err => {
      console.log('erro = ', err);
      let alert = this.alertController.create({
          title: 'Error',
          message: err.text(),
          buttons: ['Ok']
      });
      alert.present();
    });
  }

  private montarHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
       
        // let headers = new Headers();
        // headers.append('Accept', 'application/json');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        // let options = new RequestOptions({ headers: headers });

        return options;
        // return headers;
  }

  signupToParse() {
    if (this.user.password != this.confirmPassword) {
      let alert = this.alertController.create({
          title: 'Error',
          message: 'Passwords do not match.  Please retry.',
          buttons: ['Ok']
      });
      alert.present();
      return;
    }

    // this.url = "http://localhost:8000/rest/users";
    // this.url = "https://parsewithionic-alessandrots.c9users.io/app1/users";
                // https://parsewithionic-alessandrots.c9users.io/app1/classes/_User
    this.url = "https://parsewithionic-alessandrots.c9users.io/app1/classes/_User";
   
   // let headers = new Headers({ 'Content-Type': 'application/json'});
   // let options = new RequestOptions({ headers: headers });

    console.log('this.user = ', this.user.username);

    this.http.post(this.url, this.user, this.montarHeadersParse())
    // .map ( res => res.json())
    .subscribe(res => {
      console.log('retorno = ', res);
      let alert = this.alertController.create({
        title: 'Success',
        message: 'Account has been created.',
        buttons: [{
          text: 'Login',
          // role: 'cancel',
          handler: () => {
            this.navCtrl.pop();
          }}]
      });
      alert.present();
    }, err => {
      console.log('erro = ', err.text());
      let alert = this.alertController.create({
          title: 'Error',
          message: err.text(),
          buttons: ['Ok']
      });
      alert.present();
    });
  }

  private montarHeadersParse() {
        let headers = new Headers(
          { 'X-Parse-Application-Id': 'AppId1',
            'X-Parse-Master-Key': 'masterKey',
            'Content-Type': 'application/json'
          });
        let options = new RequestOptions({ headers: headers });
       
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('X-Parse-Application-Id', 'AppId1');
        // headers.append('X-Parse-Master-Key', 'masterKey');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        // let options = new RequestOptions({ headers: headers });

        return options;
        // return headers;
  }

//   curl -X GET \
// -H "X-Parse-Application-Id: AppId1" \
// -H "X-Parse-Master-Key: masterKey" \
// https://parsewithionic-alessandrots.c9users.io/app1/classes/_User

}
