1) Minha informação de :

	Cordova CLI: 6.4.0
	Ionic Framework Version: 2.0.0-rc.5
	Ionic CLI Version: 2.1.4
	Ionic App Lib Version: 2.1.2
	Ionic App Scripts Version: 1.0.0
	ios-deploy version: Not installed
	ios-sim version: 5.0.6 
	OS: Mac OS X El Capitan
	Node Version: v6.7.0
	Xcode version: Xcode 8.0 Build version 8A218a

1) Esse projeto para funcionar o onesignal:
	<plugin name="onesignal-cordova-plugin" spec="~2.0.10" />

1.1) Para configurar o app no onesignal:
	https://onesignal.com/apps/4717112b-e5bd-4251-8351-d0131a70b4d1
	- Por fim so enviar uma msg de teste

2) FIREBASE:
	https://console.firebase.google.com/project/friendslist-713dd/settings/cloudmessaging	

- Para definir o google map, precisei fazer algumas coisas:
	- Instalando via linha de comando: 
		ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyDynv6W1UNR8oq_2uagVhLhyGWNe2v1WEg" --variable API_KEY_FOR_IOS="AIzaSyDynv6W1UNR8oq_2uagVhLhyGWNe2v1WEg" --save

	- Via config.xml:
		<engine name="ios" version="4.3.0" />
		<engine name="android" spec="https://github.com/apache/cordova-android.git#6.1.1" />

	- Erro no build ao usar a versão master do google maps:
		http://stackoverflow.com/questions/41030573/ionic-v2-google-maps-api-android-build-error-cannot-access-abstractsafeparcelab
		- a outra solução foi criar a pasta android e usado como hooks no config.xml dentro da plataforma android:
			<hook type="after_prepare" src="android/copy.js" />

- Assinar o app
	- create a folder .cordova on root path:
	
	- put a file build.json in this folder
	
	- CREATE A KEYSTORE:
		$ sudo keytool -genkey -v -keystore mystore.keystore -alias XXXXX -keyalg RSA -keysize 2048 -validity 10000
	 	** the command will ask a password(passphrase), that info is very important, you will need on file build.json
	 	
	 	$ sudo keytool -list -v -keystore mystore.keystore
	
	- put the keystore in folder .cordova
	
	- you need do inform the keystore with the package (config.xml) of your app on 
		https://console.developers.google.com (in your specific project)

		url desse meu projeto: https://console.developers.google.com/apis/credentials/key/200?project=friendslist-713dd
	
	- the content of build.json:
		{
		  "android": {
		    "debug": {
		      "keystore": "./mystore.keystore",
		      "alias": "<CREATED ON COMMAND ON ITEM 4>",
		      "password": "<PWD DEFINED ON COMMAND ON ITEM 4>",
		      "storePassword": "<THE SAME PWD>"
		    }
		},
		  "ios": {
		    "debug": {
		      "codeSignIdentity": "iPhone Distribution: XXXXXXXXXXXX",
		      "provisioningProfile": ""
		    }        
		  }
		}
	
	- Buildar o app: ionic build android --buildConfig .cordova/build.json 