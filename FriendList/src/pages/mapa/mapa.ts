import { Component, ViewChild, Input } from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
// import { NavController, NavParams } from 'ionic-angular';
// import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';

/*
  http://ionicframework.com/docs/v2/native/google-maps/
*/
@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  @ViewChild('mapaView') mapView;
  public map: any;
  @Input() public latitude: any;
  @Input() public longitude: any;
  @Input() public mensagemErro: string;
  // @Input() public estabelecimentos: any[];

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }

  ngOnInit() {
	    if (!this.map) {
	      this.map = new GoogleMap(this.mapView.nativeElement);
	      this.map.setDebuggable(true);
	    }

	    GoogleMap.isAvailable().then(() => {
	      this.map.setZoom(12);
	      this.map.setMyLocationEnabled(true);
	      this.map.clear();
	      // this.montarMarkers();
	    });
   }


 //  	// Load map only after view is initialize
	// ngAfterViewInit() {
	//  	this.loadMap();
	// }

	// // ngOnInit() {
	// //     this.loadMap();
 // //    }

	// // make sure to create following structure in your view.html file
	// // <ion-content>
	// //  <div #map id="map"></div>
	// // </ion-content>

	// loadMap() {
	// 	 // create a new map by passing HTMLElement
	// 	 let element: HTMLElement = document.getElementById('map');

	// 	 let map = new GoogleMap(element, {
	//           'backgroundColor': 'white',
	//           'controls': {
	//             'compass': true,
	//             'myLocationButton': true,
	//             'indoorPicker': true,
	//             'zoom': true
	//           },
	//           'gestures': {
	//             'scroll': true,
	//             'tilt': true,
	//             'rotate': true,
	//             'zoom': true
	//           },
	//           'camera': {
	//             'latLng': location,
	//             'tilt': 30,
	//             'zoom': 15,
	//             'bearing': 50
	//           }
 //        });

	// 	 // listen to MAP_READY event
	// 	 map.one(GoogleMapsEvent.MAP_READY).then(() => alert('Map is ready!'));
	// 	 // map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
 //   //          console.log('Map is ready!');
 //   //       });

 //         GoogleMap.isAvailable().then(() => {
	//       map.setZoom(12);
	//       map.setMyLocationEnabled(true);
	//       map.clear();
	//       // this.montarMarkers();

	//       // // create LatLng object
	// 	  let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

	// 	  // create new marker
	// 	  let markerOptions: GoogleMapsMarkerOptions = {
	// 		   position: ionic,
	// 		   title: 'Ionic'
	// 	  };

	// 	  map.addMarker(markerOptions)
	// 		   .then((marker: GoogleMapsMarker) => {
	// 		      marker.showInfoWindow();
	// 	  });
	//     });

		 

	// 	 // // create CameraPosition
	// 	 // let position: CameraPosition = {
	// 	 //   target: ionic,
	// 	 //   zoom: 18,
	// 	 //   tilt: 30
	// 	 // };

	// 	 // // move the map's camera to position
	// 	 // map.moveCamera(position);


	// }

}
