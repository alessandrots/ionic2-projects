import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html',
  providers: [Storage]
})
export class ListPage {

  url:string;
  headers:Headers;
  friends:any[];
  userId:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public http: Http,
    public localStorage:Storage) {

      this.localStorage.get('user').then( (value) => {
        console.log(' user id = ', value);
         this.userId = value;
      });

       

  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ListPagePage');
      this.recuperarFriends(null);
  }

  recuperarFriends(refresher) {
    this.getFriendsFromService().then((data:any) => {
        // console.log('friends = ', data);
        this.friends = data.data;
        if (refresher){
          refresher.complete();
        }
      }).catch( (error) => {
        console.log('error = ', error);
        if (refresher){
          refresher.complete();
        }
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

  getFriendsFromService() {
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

  editFriend(friend) {
    // console.log('friend = ', friend);

    let alert = this.alertController.create({
        title: 'Update',
        message: 'Data to be modified.',
        inputs:[
          {name:'name', placeholder:'Informe o nome:', value:friend.name},
          {name:'email', placeholder:'Informe o email:', value:friend.email},
          {name:'number', placeholder:'Informe o numero:', value:friend.numero}
        ],
        buttons:[
          {text:"Cancel"},
          {
            text: "Save",
            handler: data => {
              //post the info to server
              data.id = friend.id;
              console.log('data antes do edit = ', data);
              this.editData(data);
            }
          }
        ]
      });
      alert.present();
  }

  editData(data) {
    this.url = "http://localhost:8000/rest/editFriend";


    let obj = {
      id: data.id,
      name: data.name,
      email:data.email,
      number:data.number
    };
  
    this.http.put(this.url, JSON.stringify(obj), this.montarHeaders())
    // .map ( res => res.json())
    .subscribe(res => {
      console.log('retorno = ', res);
      // let alert = this.alertController.create({
      //   title: 'Success',
      //   message: 'Data has been created.',
      //   buttons: [{
      //     text: 'Login',
      //     // role: 'cancel',
      //     handler: () => {
      //       // this.navCtrl.pop();

      //     }}]
      // });
      // alert.present();
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

  deleteFriend(friend) {
    // console.log('friend = ', friend);

    let alert = this.alertController.create({
        title: 'Delete',
        message: 'Are ou sure? ',
        inputs:[
          {name:'name', placeholder:'Informe o nome:', value:friend.name},
          {name:'email', placeholder:'Informe o email:', value:friend.email},
          {name:'number', placeholder:'Informe o numero:', value:friend.numero}
        ],
        buttons:[
          {text:"Cancel"},
          {
            text: "Delete",
            handler: data => {
              //post the info to server
              data.id = friend.id;
              console.log('data antes do delete = ', data);
              this.deleteData(data);
            }
          }
        ]
      });
      alert.present();
  }

  deleteData(data) {
    this.url = "http://localhost:8000/rest/deleteFriend";


    let obj = {
      id: data.id,
      name: data.name,
      email:data.email,
      number:data.number
    };
  
    this.http.put(this.url, JSON.stringify(obj), this.montarHeaders())
    // .map ( res => res.json())
    .subscribe(res => {
      console.log('retorno = ', res);
      // let alert = this.alertController.create({
      //   title: 'Success',
      //   message: 'Data has been created.',
      //   buttons: [{
      //     text: 'Login',
      //     // role: 'cancel',
      //     handler: () => {
      //       // this.navCtrl.pop();

      //     }}]
      // });
      // alert.present();
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

  logout() {
    this.localStorage.remove('user').then( () => {
      this.navCtrl.setRoot(LoginPage);
    })
  }

}
