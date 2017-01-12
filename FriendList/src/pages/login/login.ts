import { Component } from '@angular/core';
import { SignupPage } from '../signup/signup';
import { NavController, AlertController } from 'ionic-angular'; 
import { User }  from '../../user-model';
import { Http, Headers, RequestOptions} from '@angular/http'; 
import { ListPage } from '../list-page/list-page';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { UserListPage } from '../list-user/list-user'

@Component({
  templateUrl: 'login.html',
  providers: [Storage]
})
export class LoginPage {

  user:User= {
  	name:"ales",
  	username:"alests",
  	password:"123"
  };

  url:string;
  headers:Headers;

  constructor(public navCtrl: NavController, public alertController: AlertController, public http:Http, public localStorage: Storage) {
    
  }

  login() {
  	if (!this.user.username || !this.user.password) {
  		let alert = this.alertController.create({
  			title:"Preenchimento Obrigatorio",
  			message:"Usuario e/ou senha nao informados",
  			buttons:['ok']
  		});

  		alert.present();
  		return;
  	}

  	console.log('username= '+ this.user.username +' password= '+this.user.password);

  	this.url = "http://localhost:8000/rest/login?username="+this.user.username+"&password="+this.user.password;
    this.http.get(this.url, this.montarHeaders())
    .subscribe(res => {
    	// console.log('RETORNO LOGIN = ', res.json().data.id);
    	//navigate to main page
    	// this.navCtrl.push(ListPage, {});
      this.localStorage.set('user', res.json().data.id).then( (data) => {
        this.navCtrl.setRoot(ListPage);
      });
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

  goToSignup () {
  	this.navCtrl.push(SignupPage, {});
  }

  private montarHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  listUsers() {
    this.navCtrl.push(UserListPage, {});
  }

}
