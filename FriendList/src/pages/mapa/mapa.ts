import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import {NavController, Platform, AlertController } from 'ionic-angular';
// import { NavController, NavParams } from 'ionic-angular';
// import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';
// import { GoogleMap, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';

// declare var google;

/*
  http://ionicframework.com/docs/v2/native/google-maps/
*/
@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  // @ViewChild('mapaView') mapView;
  //https://forum.ionicframework.com/t/native-google-maps-black-screen/75598/6
  //https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=ionic+2+Google+Map+set+shows+blank+screen
  @ViewChild('mapaView') mapView: ElementRef;
  public map: any;
  @Input() public latitude: any;
  @Input() public longitude: any;
  @Input() public mensagemErro: string;
  @Input() public estabelecimentos: any[];

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }

  // ngOnInit() {
  // // ngAfterViewInit() {
  // 		let latLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

	 //    let mapOptions = {
	 //      center: latLng,
	 //      zoom: 15,
	 //      mapTypeId: 'MAP_TYPE_NORMAL',//google.maps.MapTypeId.ROADMAP,
	 //      position: latLng
	 //    }

	
	 //    if (!this.map) {
	 //    	console.log('this.mapView.nativeElement = ', this.mapView.nativeElement);
	 //      	// this.map = new GoogleMap(this.mapView.nativeElement);
	 //      	this.map = new GoogleMap(this.mapView.nativeElement, mapOptions);
	 //      	this.map.setDebuggable(true);
	 //    }

	 //    GoogleMap.isAvailable().then(() => {
	 //      this.map.setZoom(12);
	 //      this.map.setMyLocationEnabled(true);
	 //      // this.map.clear();
	 //      alert('Map is ready!');
	 //      // this.montarMarkers();
	 //    });

	 //    let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

		// // create new marker
		// let markerOptions: GoogleMapsMarkerOptions = {
		// 	   position: ionic,
		// 	   title: 'Ionic'
		// };

		// this.map.addMarker(markerOptions)
		// 	   .then((marker: GoogleMapsMarker) => {
		// 	      marker.showInfoWindow();
		// });
	 //    // });
  //  }


//***********************
 //  	// Load map only after view is initialize
	// ngAfterViewInit() {
	//  	this.loadMap();
	// }

	ngOnInit() {
	    this.loadMap();
    }

	// make sure to create following structure in your view.html file
	// <ion-content>
	//  <div #map id="map"></div>
	// </ion-content>

	loadMap() {
		 // create a new map by passing HTMLElement
		 // let element: HTMLElement = document.getElementById('map');

		 let location = new GoogleMapsLatLng(43.0741904,-89.3809802);

		 let map = new GoogleMap(this.mapView.nativeElement, {
	          'backgroundColor': 'white',
	          'controls': {
	            'compass': true,
	            'myLocationButton': true,
	            'indoorPicker': true,
	            'zoom': true
	          },
	          'gestures': {
	            'scroll': true,
	            'tilt': true,
	            'rotate': true,
	            'zoom': true
	          },
	          'camera': {
	            'latLng': location,
	            'tilt': 30,
	            'zoom': 15,
	            'bearing': 50
	          }
        });

		 console.log('passou 1!');
		 // listen to MAP_READY event
		 // map.one(GoogleMapsEvent.MAP_READY).then(() => alert('Map is ready!'));
		 map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
         });

         GoogleMap.isAvailable().then(() => {
	      map.setZoom(12);
	      map.setMyLocationEnabled(true);
	      map.clear();
	      console.log('passou 2!');

	      // // create LatLng object
		  let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

		  // create new marker
		  let markerOptions: GoogleMapsMarkerOptions = {
			   position: ionic,
			   title: 'Ionic'
		  };

		  map.addMarker(markerOptions)
			   .then((marker: GoogleMapsMarker) => {
			      marker.showInfoWindow();
		  });
	    });

		 

		 // // create CameraPosition
		 // let position: CameraPosition = {
		 //   target: ionic,
		 //   zoom: 18,
		 //   tilt: 30
		 // };

		 // // // move the map's camera to position
		 // map.moveCamera(position);
	}

}
