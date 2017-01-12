import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the ListUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class UserListPage {
  users: any[];
  url:string;
  headers:Headers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController, private http:Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  	this.recuperarUsers(null);
  }

  recuperarUsers(refresher) {
    this.getUsersFromService().then((data:any) => {
        // console.log('users = ', data);
        this.users = data.data;
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
  		title:"Add User",
  		message:"Adicione novos amigos",
  		inputs:[
  			{name:'name', placeholder:'Informe o nome:'},
  			{name:'email', placeholder:'Informe o email:'}
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

  getUsersFromService() {
  	 this.url = "https://parsewithionic-alessandrots.c9users.io/app1/users";

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

  editUser(user) {
    // console.log('user = ', user);

    let alert = this.alertController.create({
        title: 'Update',
        message: 'Data to be modified.',
        inputs:[
          {name:'name', placeholder:'Informe o nome:', value:user.username},
          {name:'email', placeholder:'Informe o password:', value:user.password}
        ],
        buttons:[
          {text:"Cancel"},
          {
            text: "Save",
            handler: data => {
              //post the info to server
              data.id = user.id;
              console.log('data antes do edit = ', data);
              this.editData(data);
            }
          }
        ]
      });
      alert.present();
  }

  editData(data) {
    // this.url = "http://localhost:8000/rest/editUser";
    this.url = "https://parsewithionic-alessandrots.c9users.io/app1/users";

    let obj = {
      id: data.id,
      name: data.username,
      email:data.password
    };
  
    // this.http.put(this.url, JSON.stringify(obj), this.montarHeaders())
    this.http.put(this.url, obj, this.montarHeaders())
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

  deleteUser(user) {
    // console.log('user = ', user);

    let alert = this.alertController.create({
        title: 'Delete',
        message: 'Are ou sure? ',
        inputs:[
          {name:'name', placeholder:'Informe o nome:', value:user.username}
        ],
        buttons:[
          {text:"Cancel"},
          {
            text: "Delete",
            handler: data => {
              //post the info to server
              data.id = user.id;
              console.log('data antes do delete = ', data);
              this.deleteData(data);
            }
          }
        ]
      });
      alert.present();
  }

  deleteData(data) {
    this.url = "http://localhost:8000/rest/deleteUser";


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

}
