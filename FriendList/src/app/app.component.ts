import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
// import { ParsePushPlugin } from '../native';

declare var window:any;
// declare var ParsePushPlugin:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.ativarPush();
    });
  }

  ativarPush() {
     //  if(ParsePushPlugin){
     //    ParsePushPlugin.register().then (
     //     (data)  => alert('Sucesso register = ' + data),
     //     (error) => alert('Erro register = ' + error)
     //    );

     //    ParsePushPlugin.subscribe('SampleChannelNew').then (
     //     (data) => alert('subscribe msg = '+ data),
     //     (error) => alert('Erro subscribe = ' + error)
     //    );

     //    ParsePushPlugin.getInstallationId().then (
     //     (data) => alert('Sucesso getInstallationId = ' + data),
     //     (error) => alert('Erro getInstallationId = ' + error)
     //    );

     //    ParsePushPlugin.getSubscriptions().then (
     //     (data) => alert('Sucesso getSubscriptions = ' + data),
     //     (error) => alert('Erro getSubscriptions = ' + error)
     //    );

     //    //you can also listen to your own custom events
     //    // Note: to push custom event, include 'event' key in your push payload,
     //      // e.g. {alert: "sup", event:'chat'}
     //    // ParsePushPlugin.on('receivePN:chat', chatEventHandler);
     //    // ParsePushPlugin.on('receivePN:serverMaintenance', serverMaintenanceHandler);

         
     // }

    //  if(window.ParsePushPlugin){
    //     ParsePushPlugin.getInstallationId(function(id) {
    //        // note that the javascript client has its own installation id,
    //        // which is different from the device installation id.
    //         alert("device installationId: " + id);
    //     }, function(e) {
    //         alert('error');
    //     });

    //     ParsePushPlugin.subscribe('SampleChannel', function(msg) {
    //         alert('OK');
    //     }, function(e) {
    //         alert('error');
    //     });
    // }

    //4717112b-e5bd-4251-8351-d0131a70b4d1

    //https://documentation.onesignal.com/docs/ionic-sdk-setup

    //cordova plugin update onesignal-cordova-plugin

      // Enable to debug issues.
      window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window.plugins.OneSignal
        .startInit("4717112b-e5bd-4251-8351-d0131a70b4d1")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
        
      // Call syncHashedEmail anywhere in your app if you have the user's email.
      // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
      // window.plugins.OneSignal.syncHashedEmail(userEmail);

  }//
}
