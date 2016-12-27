import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {

  url:string;
  headers:Headers;
  friends:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPagePage');

    this.getFriends().then((data:any) => {
    	// console.log('friends = ', data);
    	this.friends = data.data;
    }).catch( (error) => {
    	console.log('error = ', error);
    });
  }

  showAddDialog() {
  	let alert= this.alertController.create({
  		title:"Add Friend",
  		message:"Adicione novos amigos",
  		inputs:[
  			{name:'name', placeholder:'Informe o nome:'},
  			{name:'email', placeholder:'Informe o email:'},
  			{name:'number', placeholder:'Informe o numero:'}
  		],
  		buttons:[
  			{text:"Cancel"},
  			{
  				text: "Save",
  				handler: data => {
  					//post the info to server
  					this.saveData(data);
  				}
  			}
  		]
  	});

  	alert.present();
  }

  private montarHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  saveData(data) {
  	this.url = "http://localhost:8000/rest/saveData";


  	let obj = {
  		name: data.name,
  		email:data.email,
  		number:data.number
  	};
  
    this.http.post(this.url, JSON.stringify(obj), this.montarHeaders())
    // .map ( res => res.json())
    .subscribe(res => {
      console.log('retorno = ', res);
      let alert = this.alertController.create({
        title: 'Success',
        message: 'Data has been created.',
        buttons: [{
          text: 'Login',
          // role: 'cancel',
          handler: () => {
            // this.navCtrl.pop();

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

  getFriends() {
  	 this.url = "http://localhost:8000/rest/friends";

  	 return new Promise ((resolve, reject) => {
  	 		this.http.get(this.url, this.montarHeaders())
		    .subscribe((data) => {
		    	// console.log(data);
		    	resolve(data.json());
		    }, (error) => {
		      console.log('erro = ', error);
		      reject(error);
		    });
  	 });
  }

}
