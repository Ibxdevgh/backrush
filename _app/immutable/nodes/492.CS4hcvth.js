import{t as i,b as o,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as pe,s as t,f as l,n as e,r as ce}from"../chunks/NgVQVlRK.js";import{n as ue}from"../chunks/B4IyMRKX.js";import{S as U}from"../chunks/B6JyFckC.js";import{M as ve}from"../chunks/hMT8fFzP.js";import{I as $e}from"../chunks/BypEz2Fd.js";import{T as re,a as q}from"../chunks/BHbEtIoO.js";import{I as ne}from"../chunks/Dka2wNls.js";import{O as oe,a as ae}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as H}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as J}from"../chunks/DXp9_3zM.js";import{F as j}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{L as se,I as R}from"../chunks/BhmTgGWB.js";import{P as k}from"../chunks/D8YsId2T.js";import{S as d}from"../chunks/yHjwcyUH.js";import{L as W}from"../chunks/yh4_9ChP.js";/* empty css                */import{A as ge}from"../chunks/CqOphJLh.js";const _e={layout:"article",title:"Firebase Cloud Messaging",description:"Send push notifications to Android, Apple, or Web app with Firebase Cloud Messaging (FCM).",back:"/docs/"};var me=i("To add FCM as a provider, navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!>.",1),fe=i("Give your provider a name &gt; choose <!> &gt; click <!>. The provider will be saved to your project, but not enabled until you complete its configuration.",1),Pe=i("<!><!><!><!>",1),Ie=i("In the <!> step, you will need to provide details from your Firebase console to connect your Backrush project.",1),he=i("You will need to provide the following information from the <!>.",1),Ee=i("Head to Firebase console -&gt; Settings -&gt; Project settings -&gt; Cloud Messaging. If FCM is disabled, click the three-dots menu and open the link. On the following page, click <!> (it might take a few minutes for the action to complete).",1),we=i("<!><!>",1),Ae=i("Head to <!> &gt; <!> &gt; <!>.",1),Ce=i("<!><!><!><!><!><!><!>",1),ke=i("Install the <!> Firebase SDK.",1),be=i("In your Firebase console, navigate to <!> &gt; <!> &gt; <!> &gt; add an <!> app.",1),ye=i("Register and download your <!> config file.",1),Me=i("Add <!> at the root of your project.",1),De=i("Add Google Services class path to your app-level Gradle dependencies block <!>.",1),Oe=i("Add Google Services plugin to your app-level Gradle in the plugins block as <!>.",1),Re=i("Add notification handler service to <!> inside the application tag, alongside other activities. Find an example of this service in the <!> journey.",1),Se=i("<!><!><!><!><!><!><!>",1),Ne=i("<!><!>",1),Ye=i("In your Firebase console, navigate to <!> &gt; <!> &gt; <!> &gt; add an <!> app.",1),xe=i("Register and download your <!> and add it to the root of your project.",1),je=i("Head to <!> &gt; <!> &gt; <!> &gt; <!>. The key needs <!> enabled.",1),Fe=i("In Firebase console, go to <em>Settings</em>* &gt; <!> &gt; <!> &gt; click <!>. Upload your key here.",1),Te=i("Add push notification capability to your app by clicking your root-level app in XCode &gt; <!> &gt; <!> Capabilities &gt; Search for <!>.",1),Je=i("If using SwiftUI, disable swizzling by setting <!> to <!> in your <!>.",1),Ge=i("<!><!><!><!><!><!><!>",1),Ke=i("<!><!>",1),Ve=i("<!><!>",1),Le=i("Push notification requires special handling on the client side. Follow the <!> flow to test your provider.",1),Ue=i("Navigate to <!> &gt; <!> &gt; click your provider. In the settings, you can update a provider&#39;s configuration or delete the provider.",1),qe=i("<!><!>",1),He=i("To update or delete providers programmatically, use an <!>.",1),ze=i("<!><!><!><!><!><!><!><!><!><!>",1),Be=i("<!><!>",1),We=i("<!><!>",1),Xe=i("<article><!><!><!><!><!><!></article>");function Ct(ie){ge(ie,ue(_e,{children:(le,Qe)=>{var z=Xe(),X=pe(z);k(X,{children:(x,L)=>{e();var M=o("Firebase Cloud Messaging (FCM) lets you send push notifications to your iOS, Android, and web apps through Backrush Messaging. Before you can deliver messages, you must connect to a messaging provider.");r(x,M)},$$slots:{default:!0}});var Q=t(X);U(Q,{id:"add-provider",step:1,title:"Add provider",children:(x,L)=>{var M=Pe(),F=l(M);k(F,{children:(I,N)=>{e();var E=me(),p=t(l(E));d(p,{marker:"**",children:($,m)=>{e();var c=o("Messaging");r($,c)},$$slots:{default:!0}});var b=t(p,2);d(b,{marker:"**",children:($,m)=>{e();var c=o("Providers");r($,c)},$$slots:{default:!0}});var s=t(b,2);ne(s,{icon:"plus",size:"m"});var f=t(s,2);d(f,{marker:"**",children:($,m)=>{e();var c=o("Add provider");r($,c)},$$slots:{default:!0}});var v=t(f,2);d(v,{marker:"**",children:($,m)=>{e();var c=o("Push notification");r($,c)},$$slots:{default:!0}}),e(),r(I,E)},$$slots:{default:!0}});var S=t(F);oe(S,{children:(I,N)=>{k(I,{children:(E,p)=>{H(E,{src:"/images/docs/messaging/providers/fcm/dark/provider.png",alt:"Add a FCM provider"})},$$slots:{default:!0}})}});var D=t(S);ae(D,{children:(I,N)=>{k(I,{children:(E,p)=>{H(E,{src:"/images/docs/messaging/providers/fcm/provider.png",alt:"Add a FCM provider"})},$$slots:{default:!0}})}});var T=t(D);k(T,{children:(I,N)=>{e();var E=fe(),p=t(l(E));d(p,{marker:"**",children:(s,f)=>{e();var v=o("FCM");r(s,v)},$$slots:{default:!0}});var b=t(p,2);d(b,{marker:"**",children:(s,f)=>{e();var v=o("Save and continue");r(s,v)},$$slots:{default:!0}}),e(),r(I,E)},$$slots:{default:!0}}),r(x,M)},$$slots:{default:!0}});var Z=t(Q);U(Z,{id:"configure-provider",step:2,title:"Configure provider",children:(x,L)=>{var M=Ce(),F=l(M);k(F,{children:(p,b)=>{e();var s=Ie(),f=t(l(s));d(f,{marker:"**",children:(v,$)=>{e();var m=o("Configure");r(v,m)},$$slots:{default:!0}}),e(),r(p,s)},$$slots:{default:!0}});var S=t(F);k(S,{children:(p,b)=>{e();var s=he(),f=t(l(s));d(f,{marker:"**",children:(v,$)=>{e();var m=o("Firebase console");r(v,m)},$$slots:{default:!0}}),e(),r(p,s)},$$slots:{default:!0}});var D=t(S);$e(D,{title:"Enable FCM",children:(p,b)=>{var s=we(),f=l(s);k(f,{children:($,m)=>{e();var c=o("FCM must be enabled on your Firebase project.");r($,c)},$$slots:{default:!0}});var v=t(f);k(v,{children:($,m)=>{e();var c=Ee(),h=t(l(c));d(h,{marker:"**",children:(O,G)=>{e();var K=o("Enable");r(O,K)},$$slots:{default:!0}}),e(),r($,c)},$$slots:{default:!0}}),r(p,s)}});var T=t(D);k(T,{children:(p,b)=>{e();var s=Ae(),f=t(l(s));d(f,{marker:"**",children:(m,c)=>{e();var h=o("Project settings");r(m,h)},$$slots:{default:!0}});var v=t(f,2);d(v,{marker:"**",children:(m,c)=>{e();var h=o("Service accounts");r(m,h)},$$slots:{default:!0}});var $=t(v,2);d($,{marker:"**",children:(m,c)=>{e();var h=o("Generate new private key");r(m,h)},$$slots:{default:!0}}),e(),r(p,s)},$$slots:{default:!0}});var I=t(T);oe(I,{children:(p,b)=>{k(p,{children:(s,f)=>{H(s,{src:"/images/docs/messaging/providers/fcm/dark/admin-key.png",alt:"FCM admin key"})},$$slots:{default:!0}})}});var N=t(I);ae(N,{children:(p,b)=>{k(p,{children:(s,f)=>{H(s,{src:"/images/docs/messaging/providers/fcm/admin-key.png",alt:"FCM admin key"})},$$slots:{default:!0}})}});var E=t(N);k(E,{children:(p,b)=>{e();var s=o("After all the relevant details are provided, you can enable the provider.");r(p,s)},$$slots:{default:!0}}),r(x,M)},$$slots:{default:!0}});var ee=t(Z);U(ee,{id:"configure-app",step:3,title:"Configure app",children:(x,L)=>{var M=Ve(),F=l(M);k(F,{children:(D,T)=>{e();var I=o("Some additional configuration is required to enable push notifications in your mobile app.");r(D,I)},$$slots:{default:!0}});var S=t(F);re(S,{children:(D,T)=>{var I=Ke(),N=l(I);q(N,{id:"fcm-android",title:"Android with FCM",children:(p,b)=>{var s=Ne(),f=l(s);se(f,{ordered:!0,marker:".",children:($,m)=>{var c=Se(),h=l(c);R(h,{children:(a,u)=>{e();var n=ke(),g=t(l(n));J(g,{content:"com.google.firebase:firebase-messaging"}),e(),r(a,n)},$$slots:{default:!0}});var O=t(h);R(O,{children:(a,u)=>{e();var n=be(),g=t(l(n));d(g,{marker:"**",children:(C,B)=>{e();var V=o("Settings");r(C,V)},$$slots:{default:!0}});var A=t(g,2);d(A,{marker:"**",children:(C,B)=>{e();var V=o("General");r(C,V)},$$slots:{default:!0}});var _=t(A,2);d(_,{marker:"**",children:(C,B)=>{e();var V=o("Your apps");r(C,V)},$$slots:{default:!0}});var y=t(_,2);d(y,{marker:"**",children:(C,B)=>{e();var V=o("Android");r(C,V)},$$slots:{default:!0}}),e(),r(a,n)},$$slots:{default:!0}});var G=t(O);R(G,{children:(a,u)=>{e();var n=ye(),g=t(l(n));J(g,{content:"google-services.json"}),e(),r(a,n)},$$slots:{default:!0}});var K=t(G);R(K,{children:(a,u)=>{e();var n=Me(),g=t(l(n));J(g,{content:"google-services.json"}),e(),r(a,n)},$$slots:{default:!0}});var w=t(K);R(w,{children:(a,u)=>{e();var n=De(),g=t(l(n));J(g,{content:'"com.google.gms:google-services:4.4.0"'}),e(),r(a,n)},$$slots:{default:!0}});var Y=t(w);R(Y,{children:(a,u)=>{e();var n=Oe(),g=t(l(n));J(g,{content:'"com.google.gms.google-services"'}),e(),r(a,n)},$$slots:{default:!0}});var P=t(Y);R(P,{children:(a,u)=>{e();var n=Re(),g=t(l(n));J(g,{content:"AndroidManifest.xml"});var A=t(g,2);W(A,{href:"/docs/products/messaging/send-push-notifications#add-targets",children:(_,y)=>{e();var C=o("Send push notification");r(_,C)},$$slots:{default:!0}}),e(),r(a,n)},$$slots:{default:!0}}),r($,c)},$$slots:{default:!0}});var v=t(f);j(v,{content:`<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
`,language:"xml",process:!0,children:($,m)=>{e();var c=o(`<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>`);r($,c)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}});var E=t(N);q(E,{id:"fcm-ios",title:"iOS with FCM",children:(p,b)=>{se(p,{ordered:!0,marker:".",children:(s,f)=>{var v=Ge(),$=l(v);R($,{children:(w,Y)=>{e();var P=Ye(),a=t(l(P));d(a,{marker:"**",children:(A,_)=>{e();var y=o("Settings");r(A,y)},$$slots:{default:!0}});var u=t(a,2);d(u,{marker:"**",children:(A,_)=>{e();var y=o("General");r(A,y)},$$slots:{default:!0}});var n=t(u,2);d(n,{marker:"**",children:(A,_)=>{e();var y=o("Your apps");r(A,y)},$$slots:{default:!0}});var g=t(n,2);d(g,{marker:"**",children:(A,_)=>{e();var y=o("iOS");r(A,y)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var m=t($);R(m,{children:(w,Y)=>{e();var P=xe(),a=t(l(P));J(a,{content:"GoogleService-Info.plist"}),e(),r(w,P)},$$slots:{default:!0}});var c=t(m);R(c,{children:(w,Y)=>{e();var P=je(),a=t(l(P));d(a,{marker:"**",children:(_,y)=>{e();var C=o("Apple Developer Member Center");r(_,C)},$$slots:{default:!0}});var u=t(a,2);d(u,{marker:"**",children:(_,y)=>{e();var C=o("Program resources");r(_,C)},$$slots:{default:!0}});var n=t(u,2);d(n,{marker:"**",children:(_,y)=>{e();var C=o("Certificates, Identifiers & Profiles");r(_,C)},$$slots:{default:!0}});var g=t(n,2);d(g,{marker:"**",children:(_,y)=>{e();var C=o("Keys");r(_,C)},$$slots:{default:!0}});var A=t(g,2);d(A,{marker:"**",children:(_,y)=>{e();var C=o("Apple Push Notification Service");r(_,C)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var h=t(c);R(h,{children:(w,Y)=>{e();var P=o("Create a new key, note down the key ID and download your key.");r(w,P)},$$slots:{default:!0}});var O=t(h);R(O,{children:(w,Y)=>{e();var P=Fe(),a=t(l(P),3);d(a,{marker:"**",children:(g,A)=>{e();var _=o("Cloud Messaging");r(g,_)},$$slots:{default:!0}});var u=t(a,2);d(u,{marker:"**",children:(g,A)=>{e();var _=o("APNs authentication key");r(g,_)},$$slots:{default:!0}});var n=t(u,2);d(n,{marker:"**",children:(g,A)=>{e();var _=o("Upload");r(g,_)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var G=t(O);R(G,{children:(w,Y)=>{e();var P=Te(),a=t(l(P));d(a,{marker:"**",children:(g,A)=>{e();var _=o("Signing & Capabilities");r(g,_)},$$slots:{default:!0}});var u=t(a,2);ne(u,{icon:"plus",size:"m"});var n=t(u,2);d(n,{marker:"**",children:(g,A)=>{e();var _=o("Push Notifications");r(g,_)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var K=t(G);R(K,{children:(w,Y)=>{e();var P=Je(),a=t(l(P));J(a,{content:"FirebaseAppDelegateProxyEnabled"});var u=t(a,2);J(u,{content:"NO"});var n=t(u,2);J(n,{content:"Info.plist"}),e(),r(w,P)},$$slots:{default:!0}}),r(s,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(D,I)},$$slots:{default:!0}}),r(x,M)},$$slots:{default:!0}});var te=t(ee);U(te,{id:"test-provider",step:4,title:"Test provider",children:(x,L)=>{k(x,{children:(M,F)=>{e();var S=Le(),D=t(l(S));W(D,{href:"/docs/products/messaging/send-push-notifications",children:(T,I)=>{e();var N=o("Send push notification");r(T,N)},$$slots:{default:!0}}),e(),r(M,S)},$$slots:{default:!0}})},$$slots:{default:!0}});var de=t(te);U(de,{id:"manage-provider",step:5,title:"Manage provider",children:(x,L)=>{re(x,{children:(M,F)=>{var S=We(),D=l(S);q(D,{id:"console",title:"Console",children:(I,N)=>{var E=qe(),p=l(E);k(p,{children:(s,f)=>{e();var v=o("You can update or delete a provider in the Backrush Console.");r(s,v)},$$slots:{default:!0}});var b=t(p);k(b,{children:(s,f)=>{e();var v=Ue(),$=t(l(v));d($,{marker:"**",children:(c,h)=>{e();var O=o("Messaging");r(c,O)},$$slots:{default:!0}});var m=t($,2);d(m,{marker:"**",children:(c,h)=>{e();var O=o("Providers");r(c,O)},$$slots:{default:!0}}),e(),r(s,v)},$$slots:{default:!0}}),r(I,E)},$$slots:{default:!0}});var T=t(D);q(T,{id:"server-sdk",title:"Server SDK",children:(I,N)=>{var E=Be(),p=l(E);k(p,{children:(s,f)=>{e();var v=He(),$=t(l(v));W($,{href:"/docs/sdks#server",children:(m,c)=>{e();var h=o("Backrush Server SDK");r(m,h)},$$slots:{default:!0}}),e(),r(s,v)},$$slots:{default:!0}});var b=t(p);ve(b,{children:(s,f)=>{var v=ze(),$=l(v);j($,{content:`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateFCMProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        {}                                       // serviceAccountJSON (optional)
    );
`,language:"server-nodejs",process:!0,children:(a,u)=>{e();var n=o(`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateFCMProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        {}                                       // serviceAccountJSON (optional)
    );`);r(a,n)},$$slots:{default:!0}});var m=t($);j(m,{content:`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateFCMProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        {}                                       // serviceAccountJSON (optional)
    );
`,language:"deno",process:!0,children:(a,u)=>{e();var n=o(`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateFCMProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        {}                                       // serviceAccountJSON (optional)
    );`);r(a,n)},$$slots:{default:!0}});var c=t(m);j(c,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateFCMProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    serviceAccountJSON: []                        // optional
);
`,language:"php",process:!0,children:(a,u)=>{e();var n=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateFCMProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    serviceAccountJSON: []                        // optional
);`);r(a,n)},$$slots:{default:!0}});var h=t(c);j(h,{content:`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_fcm_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    service_account_json = {}                   # optional
)
`,language:"python",process:!0,children:(a,u)=>{e();var n=o(`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_fcm_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    service_account_json = {}                   # optional
)`);r(a,n)},$$slots:{default:!0}});var O=t(h);j(O,{content:`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_fcm_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    service_account_json: {}                      # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(a,u)=>{e();var n=o(`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_fcm_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    service_account_json: {}                      # optional
)

puts response.inspect`);r(a,n)},$$slots:{default:!0}});var G=t(O);j(G,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.UpdateFCMProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    serviceAccountJSON: [object]);                // optional
`,language:"csharp",process:!0,children:(a,u)=>{e();var n=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.UpdateFCMProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    serviceAccountJSON: [object]);                // optional`);r(a,n)},$$slots:{default:!0}});var K=t(G);j(K,{content:`import 'package:dart_backrush/dart_backrush.dart';
import 'package:dart_backrush/enums.dart';
import 'package:dart_backrush/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.updateFCMProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    serviceAccountJSON: {},                      // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(a,u)=>{e();var n=o(`import 'package:dart_backrush/dart_backrush.dart';
import 'package:dart_backrush/enums.dart';
import 'package:dart_backrush/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.updateFCMProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    serviceAccountJSON: {},                      // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);r(a,n)},$$slots:{default:!0}});var w=t(K);j(w,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateFCMProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    mapOf( "a" to "b" )                           // serviceAccountJSON (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(a,u)=>{e();var n=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateFCMProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    mapOf( "a" to "b" )                           // serviceAccountJSON (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);r(a,n)},$$slots:{default:!0}});var Y=t(w);j(Y,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateFCMProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    mapOf( "a" to "b" )                           // serviceAccountJSON (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(a,u)=>{e();var n=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateFCMProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    mapOf( "a" to "b" )                           // serviceAccountJSON (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);r(a,n)},$$slots:{default:!0}});var P=t(Y);j(P,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateFCMProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  serviceAccountJSON: [:]                        // optional
)
`,language:"swift",process:!0,children:(a,u)=>{e();var n=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateFCMProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  serviceAccountJSON: [:]                        // optional
)`);r(a,n)},$$slots:{default:!0}}),r(s,v)},$$slots:{default:!0}}),r(I,E)},$$slots:{default:!0}}),r(M,S)},$$slots:{default:!0}})},$$slots:{default:!0}}),ce(z),r(le,z)},$$slots:{default:!0}}))}export{Ct as component};
