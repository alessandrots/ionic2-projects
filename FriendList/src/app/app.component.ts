import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { ParsePushPlugin } from '../native';

// declare var ParsePushPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;
  // let push= ParsePushPlugin;

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
      if(ParsePushPlugin){
        // ParsePushPlugin.on('receivePN', function(pn){
        //     console.log('yo i got this push notification:' + JSON.stringify(pn));
        // });

        // // When the app is off or in background, push notifications get added
        // // to the notification tray. When a user open a notification, you
        // // can catch it via openPN
        // ParsePushPlugin.on('openPN', function(pn){
        //   console.log('a notification was opened:' + JSON.stringify(pn));
        // });

        // ParsePushPlugin.getInstallationId(function(id) {
        //    // note that the javascript client has its own installation id,
        //    // which is different from the device installation id.
        //     console.log("device installationId: " + id);
        // }, function(e) {
        //     console.log('error');
        // });

        // ParsePushPlugin.getSubscriptions(function(subscriptions) {
        //     console.log(subscriptions);
        // }, function(e) {
        //     console.log('error');
        // });

        ParsePushPlugin.register().then (
         (data)  => alert('Sucesso register'),
         (error) => alert('Erro register: ' + error)
        );

        ParsePushPlugin.getInstallationId().then (
         (data) => alert('Sucesso getInstallationId'),
         (error) => alert('Erro getInstallationId: ' + error)
        );

        // ParsePushPlugin.subscribe('SampleChannel', function(msg) {
        //     console.log('OK');
        // }, function(e) {
        //     console.log('error');
        // });

        // ParsePushPlugin.unsubscribe('SampleChannel', function(msg) {
        //     console.log('OK');
        // }, function(e) {
        //     console.log('error');
        // });

        //you can also listen to your own custom events
        // Note: to push custom event, include 'event' key in your push payload,
          // e.g. {alert: "sup", event:'chat'}
        // ParsePushPlugin.on('receivePN:chat', chatEventHandler);
        // ParsePushPlugin.on('receivePN:serverMaintenance', serverMaintenanceHandler);

         
     }
  }//
}
