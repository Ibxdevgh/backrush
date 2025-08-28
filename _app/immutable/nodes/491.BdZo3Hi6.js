import{t as p,b as r,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as oe,s as t,f as u,n,r as ae}from"../chunks/NgVQVlRK.js";import{n as se}from"../chunks/B4IyMRKX.js";import{S as G}from"../chunks/B6JyFckC.js";import{M as ie}from"../chunks/hMT8fFzP.js";import{T as le,a as W}from"../chunks/BHbEtIoO.js";import{I as Z}from"../chunks/Dka2wNls.js";import{O as H,a as B}from"../chunks/uti8MWrk.js";import{A as de,a as J}from"../chunks/ftq6Xrtz.js";import"../chunks/BZUG4Puk.js";import{I as U}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";/* empty css                */import{F as j}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as c}from"../chunks/D8YsId2T.js";import{S as s}from"../chunks/yHjwcyUH.js";import{L as ee}from"../chunks/yh4_9ChP.js";import{A as pe}from"../chunks/CqOphJLh.js";const ue={layout:"article",title:"Apple Push Notification service",description:"Send push notifications to apps on Apple devices through Apple Push Notification service (APNs) using Backrush Messaging.",back:"/docs/"};var ce=p("To add APNs as a provider, navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!>.",1),_e=p("Give your provider a name &gt; choose <!> &gt; click <!>. The provider will be saved to your project, but not enabled until you complete its configuration.",1),$e=p("<!><!><!><!>",1),ve=p("In the <!> step, you will need to provide details from your Apple developer account to connect your Backrush project with your Apple developer account.",1),ge=p("You will need to provide the following information from the <!>.",1),me=p("Head to <!> &gt; <!> &gt; <!>",1),Ie=p("<!> <!>",1),Pe=p("<!><!>",1),fe=p("Head to <!> &gt; <!> &gt; <!> &gt; <!>",1),he=p("<!><!><!>",1),Ee=p("Head to <!> &gt; <!> &gt; <!> &gt; <!>. Click on your key to view details. The key needs <!> enabled.",1),Ae=p("<!><!><!>",1),De=p("Head to <!> &gt; <!> &gt; <!> &gt; <!>. Create a key and give it a name. Enable the Apple Push Notifications service (APNS), and register your key. The key needs <!> enabled.",1),ye=p("<!><!><!>",1),we=p("Enable sandbox mode for testing on apps signed with development provisioning profiles. APNs offers two environments, <!> (sandbox) and <!>. Development builds on XCode signed with a development provisioning profile will use the development environment. Production builds signed with a production provisioning profile will use the production environment.",1),ke=p("<!><!><!><!><!>",1),be=p("After adding the following details, click <!> to enable the provider.",1),Ke=p("<!><!><!><!>",1),Ye=p("Some additional configuration is required to enable push notifications in your iOS app. Add push notification capability to your app by clicking your root-level app in XCode &gt; <!> &gt; <!> Capabilities &gt; Search for <!>.",1),Te=p("<!><!><!>",1),Ce=p("Push notification requires special handling on the client side. Follow the <!> flow to test your provider.",1),Me=p("Navigate to <!> &gt; <!> &gt; click your provider. In the settings, you can update a provider&#39;s configuration or delete the provider.",1),Re=p("<!><!>",1),Ne=p("To update or delete providers programmatically, use an <!>.",1),Oe=p("<!><!><!><!><!><!><!><!><!><!>",1),Ue=p("<!><!>",1),xe=p("<!><!>",1),Se=p("<article><!><!><!><!><!><!></article>");function pt(te){pe(te,se(ue,{children:(ne,je)=>{var V=Se(),F=oe(V);c(F,{children:(x,L)=>{n();var M=r("Apple Push Notification service (APNs) lets you send push notifications to Apple devices like macOS, iOS, tvOS, iPadOS, and watchOS devices. APNs is a best-effort service, and will attempt to deliver you messages to your device when it's online and available again. APNs will save the last message for 30 days or less and attempt delivery as soon as it's online.");e(x,M)},$$slots:{default:!0}});var q=t(F);G(q,{id:"add-provider",step:1,title:"Add provider",children:(x,L)=>{var M=$e(),S=u(M);c(S,{children:(P,b)=>{n();var a=ce(),$=t(u(a));s($,{marker:"**",children:(v,T)=>{n();var d=r("Messaging");e(v,d)},$$slots:{default:!0}});var D=t($,2);s(D,{marker:"**",children:(v,T)=>{n();var d=r("Providers");e(v,d)},$$slots:{default:!0}});var m=t(D,2);Z(m,{icon:"plus",size:"m"});var y=t(m,2);s(y,{marker:"**",children:(v,T)=>{n();var d=r("Create provider");e(v,d)},$$slots:{default:!0}});var h=t(y,2);s(h,{marker:"**",children:(v,T)=>{n();var d=r("Push notification");e(v,d)},$$slots:{default:!0}}),n(),e(P,a)},$$slots:{default:!0}});var R=t(S);H(R,{children:(P,b)=>{c(P,{children:(a,$)=>{U(a,{src:"/images/docs/messaging/providers/apns/dark/provider.png",alt:"Add a FCM provider"})},$$slots:{default:!0}})}});var O=t(R);B(O,{children:(P,b)=>{c(P,{children:(a,$)=>{U(a,{src:"/images/docs/messaging/providers/apns/provider.png",alt:"Add a FCM provider"})},$$slots:{default:!0}})}});var N=t(O);c(N,{children:(P,b)=>{n();var a=_e(),$=t(u(a));s($,{marker:"**",children:(m,y)=>{n();var h=r("APNS");e(m,h)},$$slots:{default:!0}});var D=t($,2);s(D,{marker:"**",children:(m,y)=>{n();var h=r("Save and continue");e(m,h)},$$slots:{default:!0}}),n(),e(P,a)},$$slots:{default:!0}}),e(x,M)},$$slots:{default:!0}});var X=t(q);G(X,{id:"configure-provider",step:2,title:"Configure provider",children:(x,L)=>{var M=Ke(),S=u(M);c(S,{children:(P,b)=>{n();var a=ve(),$=t(u(a));s($,{marker:"**",children:(D,m)=>{n();var y=r("Configure");e(D,y)},$$slots:{default:!0}}),n(),e(P,a)},$$slots:{default:!0}});var R=t(S);c(R,{children:(P,b)=>{n();var a=ge(),$=t(u(a));s($,{marker:"**",children:(D,m)=>{n();var y=r("Apple Developer Member Center");e(D,y)},$$slots:{default:!0}}),n(),e(P,a)},$$slots:{default:!0}});var O=t(R);de(O,{children:(P,b)=>{var a=ke(),$=u(a);J($,{title:"Team ID",children:(v,T)=>{var d=Pe(),w=u(d);c(w,{children:(C,I)=>{n();var E=me(),i=t(u(E));s(i,{marker:"**",children:(_,l)=>{n();var K=r("Apple Developer Member Center");e(_,K)},$$slots:{default:!0}});var g=t(i,2);s(g,{marker:"**",children:(_,l)=>{n();var K=r("Membership details");e(_,K)},$$slots:{default:!0}});var o=t(g,2);s(o,{marker:"**",children:(_,l)=>{n();var K=r("Team ID");e(_,K)},$$slots:{default:!0}}),e(C,E)},$$slots:{default:!0}});var A=t(w);c(A,{children:(C,I)=>{var E=Ie(),i=u(E);H(i,{children:(o,_)=>{U(o,{src:"/images/docs/messaging/providers/apns/dark/team-id.png",alt:"Team ID"})}});var g=t(i,2);B(g,{children:(o,_)=>{U(o,{src:"/images/docs/messaging/providers/apns/team-id.png",alt:"Team ID"})}}),e(C,E)},$$slots:{default:!0}}),e(v,d)}});var D=t($);J(D,{title:"Bundle ID",children:(v,T)=>{var d=he(),w=u(d);c(w,{children:(I,E)=>{n();var i=fe(),g=t(u(i));s(g,{marker:"**",children:(K,f)=>{n();var Y=r("Apple Developer Member Center");e(K,Y)},$$slots:{default:!0}});var o=t(g,2);s(o,{marker:"**",children:(K,f)=>{n();var Y=r("Program resources");e(K,Y)},$$slots:{default:!0}});var _=t(o,2);s(_,{marker:"**",children:(K,f)=>{n();var Y=r("Certificates, Identifiers & Profiles");e(K,Y)},$$slots:{default:!0}});var l=t(_,2);s(l,{marker:"**",children:(K,f)=>{n();var Y=r("Identifiers");e(K,Y)},$$slots:{default:!0}}),e(I,i)},$$slots:{default:!0}});var A=t(w);H(A,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/dark/bundle-id.png",alt:"Bundle ID"})},$$slots:{default:!0}})}});var C=t(A);B(C,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/bundle-id.png",alt:"Bundle ID"})},$$slots:{default:!0}})}}),e(v,d)}});var m=t(D);J(m,{title:"Authentication key ID",children:(v,T)=>{var d=Ae(),w=u(d);c(w,{children:(I,E)=>{n();var i=Ee(),g=t(u(i));s(g,{marker:"**",children:(f,Y)=>{n();var k=r("Apple Developer Member Center");e(f,k)},$$slots:{default:!0}});var o=t(g,2);s(o,{marker:"**",children:(f,Y)=>{n();var k=r("Program resources");e(f,k)},$$slots:{default:!0}});var _=t(o,2);s(_,{marker:"**",children:(f,Y)=>{n();var k=r("Certificates, Identifiers & Profiles");e(f,k)},$$slots:{default:!0}});var l=t(_,2);s(l,{marker:"**",children:(f,Y)=>{n();var k=r("Keys");e(f,k)},$$slots:{default:!0}});var K=t(l,2);s(K,{marker:"**",children:(f,Y)=>{n();var k=r("Apple Push Notification Service");e(f,k)},$$slots:{default:!0}}),n(),e(I,i)},$$slots:{default:!0}});var A=t(w);H(A,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/dark/key-id.png",alt:"Authentication Key ID"})},$$slots:{default:!0}})}});var C=t(A);B(C,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/key-id.png",alt:"Authentication Key ID"})},$$slots:{default:!0}})}}),e(v,d)}});var y=t(m);J(y,{title:"Authentication key (.p8 file)",children:(v,T)=>{var d=ye(),w=u(d);c(w,{children:(I,E)=>{n();var i=De(),g=t(u(i));s(g,{marker:"**",children:(f,Y)=>{n();var k=r("Apple Developer Member Center");e(f,k)},$$slots:{default:!0}});var o=t(g,2);s(o,{marker:"**",children:(f,Y)=>{n();var k=r("Program resources");e(f,k)},$$slots:{default:!0}});var _=t(o,2);s(_,{marker:"**",children:(f,Y)=>{n();var k=r("Certificates, Identifiers & Profiles");e(f,k)},$$slots:{default:!0}});var l=t(_,2);s(l,{marker:"**",children:(f,Y)=>{n();var k=r("Keys");e(f,k)},$$slots:{default:!0}});var K=t(l,2);s(K,{marker:"**",children:(f,Y)=>{n();var k=r("Apple Push Notification Service");e(f,k)},$$slots:{default:!0}}),n(),e(I,i)},$$slots:{default:!0}});var A=t(w);H(A,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/dark/authentication-key.png",alt:"Authentication Key"})},$$slots:{default:!0}})}});var C=t(A);B(C,{children:(I,E)=>{c(I,{children:(i,g)=>{U(i,{src:"/images/docs/messaging/providers/apns/authentication-key.png",alt:"Authentication Key"})},$$slots:{default:!0}})}}),e(v,d)}});var h=t(y);J(h,{title:"Sandbox",children:(v,T)=>{c(v,{children:(d,w)=>{n();var A=we(),C=t(u(A));s(C,{marker:"**",children:(E,i)=>{n();var g=r("Development");e(E,g)},$$slots:{default:!0}});var I=t(C,2);s(I,{marker:"**",children:(E,i)=>{n();var g=r("Production");e(E,g)},$$slots:{default:!0}}),n(),e(d,A)},$$slots:{default:!0}})}}),e(P,a)}});var N=t(O);c(N,{children:(P,b)=>{n();var a=be(),$=t(u(a));s($,{marker:"**",children:(D,m)=>{n();var y=r("Save and continue");e(D,y)},$$slots:{default:!0}}),n(),e(P,a)},$$slots:{default:!0}}),e(x,M)},$$slots:{default:!0}});var z=t(X);G(z,{id:"configure-app",step:3,title:"Configure app",children:(x,L)=>{var M=Te(),S=u(M);c(S,{children:(N,P)=>{n();var b=Ye(),a=t(u(b));s(a,{marker:"**",children:(m,y)=>{n();var h=r("Signing & Capabilities");e(m,h)},$$slots:{default:!0}});var $=t(a,2);Z($,{icon:"plus",size:"m"});var D=t($,2);s(D,{marker:"**",children:(m,y)=>{n();var h=r("Push Notifications");e(m,h)},$$slots:{default:!0}}),n(),e(N,b)},$$slots:{default:!0}});var R=t(S);H(R,{children:(N,P)=>{c(N,{children:(b,a)=>{U(b,{src:"/images/docs/messaging/providers/apns/dark/xcode-enable-pn.png",alt:"Enable PN on Xcode"})},$$slots:{default:!0}})}});var O=t(R);B(O,{children:(N,P)=>{c(N,{children:(b,a)=>{U(b,{src:"/images/docs/messaging/providers/apns/xcode-enable-pn.png",alt:"Enable PN on Xcode"})},$$slots:{default:!0}})}}),e(x,M)},$$slots:{default:!0}});var Q=t(z);G(Q,{id:"test-provider",step:4,title:"Test provider",children:(x,L)=>{c(x,{children:(M,S)=>{n();var R=Ce(),O=t(u(R));ee(O,{href:"/docs/products/messaging/send-push-notifications",children:(N,P)=>{n();var b=r("Send push notification");e(N,b)},$$slots:{default:!0}}),n(),e(M,R)},$$slots:{default:!0}})},$$slots:{default:!0}});var re=t(Q);G(re,{id:"manage-provider",step:5,title:"Manage provider",children:(x,L)=>{le(x,{children:(M,S)=>{var R=xe(),O=u(R);W(O,{id:"console",title:"Console",children:(P,b)=>{var a=Re(),$=u(a);c($,{children:(m,y)=>{n();var h=r("You can update or delete a provider in the Backrush Console.");e(m,h)},$$slots:{default:!0}});var D=t($);c(D,{children:(m,y)=>{n();var h=Me(),v=t(u(h));s(v,{marker:"**",children:(d,w)=>{n();var A=r("Messaging");e(d,A)},$$slots:{default:!0}});var T=t(v,2);s(T,{marker:"**",children:(d,w)=>{n();var A=r("Providers");e(d,A)},$$slots:{default:!0}}),n(),e(m,h)},$$slots:{default:!0}}),e(P,a)},$$slots:{default:!0}});var N=t(O);W(N,{id:"server-sdk",title:"Server SDK",children:(P,b)=>{var a=Ue(),$=u(a);c($,{children:(m,y)=>{n();var h=Ne(),v=t(u(h));ee(v,{href:"/docs/sdks#server",children:(T,d)=>{n();var w=r("Backrush Server SDK");e(T,w)},$$slots:{default:!0}}),n(),e(m,h)},$$slots:{default:!0}});var D=t($);ie(D,{children:(m,y)=>{var h=Oe(),v=u(h);j(v,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateApnsProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[AUTH_KEY]',                            // authKey (optional)
        '[AUTH_KEY_ID]',                         // authKeyId (optional)
        '[TEAM_ID]',                             // teamId (optional)
        '[BUNDLE_ID]'                            // bundleId (optional)
    );
`,language:"server-nodejs",process:!0,children:(o,_)=>{n();var l=r(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateApnsProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[AUTH_KEY]',                            // authKey (optional)
        '[AUTH_KEY_ID]',                         // authKeyId (optional)
        '[TEAM_ID]',                             // teamId (optional)
        '[BUNDLE_ID]'                            // bundleId (optional)
    );`);e(o,l)},$$slots:{default:!0}});var T=t(v);j(T,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateApnsProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[AUTH_KEY]',                            // authKey (optional)
        '[AUTH_KEY_ID]',                         // authKeyId (optional)
        '[TEAM_ID]',                             // teamId (optional)
        '[BUNDLE_ID]'                            // bundleId (optional)
    );
`,language:"deno",process:!0,children:(o,_)=>{n();var l=r(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateApnsProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[AUTH_KEY]',                            // authKey (optional)
        '[AUTH_KEY_ID]',                         // authKeyId (optional)
        '[TEAM_ID]',                             // teamId (optional)
        '[BUNDLE_ID]'                            // bundleId (optional)
    );`);e(o,l)},$$slots:{default:!0}});var d=t(T);j(d,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateApnsProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    authKey: '[AUTH_KEY]',                        // optional
    authKeyId: '[AUTH_KEY_ID]',                   // optional
    teamId: '[TEAM_ID]',                          // optional
    bundleId: '[BUNDLE_ID]'                       // optional
);
`,language:"php",process:!0,children:(o,_)=>{n();var l=r(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateApnsProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    authKey: '[AUTH_KEY]',                        // optional
    authKeyId: '[AUTH_KEY_ID]',                   // optional
    teamId: '[TEAM_ID]',                          // optional
    bundleId: '[BUNDLE_ID]'                       // optional
);`);e(o,l)},$$slots:{default:!0}});var w=t(d);j(w,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_apns_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    auth_key = '[AUTH_KEY]',                    # optional
    auth_key_id = '[AUTH_KEY_ID]',              # optional
    team_id = '[TEAM_ID]',                      # optional
    bundle_id = '[BUNDLE_ID]'                   # optional
)
`,language:"python",process:!0,children:(o,_)=>{n();var l=r(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_apns_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    auth_key = '[AUTH_KEY]',                    # optional
    auth_key_id = '[AUTH_KEY_ID]',              # optional
    team_id = '[TEAM_ID]',                      # optional
    bundle_id = '[BUNDLE_ID]'                   # optional
)`);e(o,l)},$$slots:{default:!0}});var A=t(w);j(A,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_apns_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    auth_key: '[AUTH_KEY]',                       # optional
    auth_key_id: '[AUTH_KEY_ID]',                 # optional
    team_id: '[TEAM_ID]',                         # optional
    bundle_id: '[BUNDLE_ID]'                      # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(o,_)=>{n();var l=r(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_apns_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    auth_key: '[AUTH_KEY]',                       # optional
    auth_key_id: '[AUTH_KEY_ID]',                 # optional
    team_id: '[TEAM_ID]',                         # optional
    bundle_id: '[BUNDLE_ID]'                      # optional
)

puts response.inspect`);e(o,l)},$$slots:{default:!0}});var C=t(A);j(C,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.updateApnsProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    authKey: "[AUTH_KEY]"                         // optional
    authKeyId: "[AUTH_KEY_ID]"                    // optional
    teamId: "[TEAM_ID]"                           // optional
    bundleId: "[BUNDLE_ID]");                     // optional
`,language:"csharp",process:!0,children:(o,_)=>{n();var l=r(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.updateApnsProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    authKey: "[AUTH_KEY]"                         // optional
    authKeyId: "[AUTH_KEY_ID]"                    // optional
    teamId: "[TEAM_ID]"                           // optional
    bundleId: "[BUNDLE_ID]");                     // optional`);e(o,l)},$$slots:{default:!0}});var I=t(C);j(I,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.updateApnsProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    authKey: '[AUTH_KEY]',                       // optional
    authKeyId: '[AUTH_KEY_ID]',                  // optional
    teamId: '[TEAM_ID]',                         // optional
    bundleId: '[BUNDLE_ID]',                     // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(o,_)=>{n();var l=r(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.updateApnsProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    authKey: '[AUTH_KEY]',                       // optional
    authKeyId: '[AUTH_KEY_ID]',                  // optional
    teamId: '[TEAM_ID]',                         // optional
    bundleId: '[BUNDLE_ID]',                     // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);e(o,l)},$$slots:{default:!0}});var E=t(I);j(E,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateApnsProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[AUTH_KEY]",                                 // authKey (optional)
    "[AUTH_KEY_ID]",                              // authKeyId (optional)
    "[TEAM_ID]",                                  // teamId (optional)
    "[BUNDLE_ID]"                                 // bundleId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(o,_)=>{n();var l=r(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateApnsProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[AUTH_KEY]",                                 // authKey (optional)
    "[AUTH_KEY_ID]",                              // authKeyId (optional)
    "[TEAM_ID]",                                  // teamId (optional)
    "[BUNDLE_ID]"                                 // bundleId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(o,l)},$$slots:{default:!0}});var i=t(E);j(i,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateApnsProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[AUTH_KEY]",                                 // authKey (optional)
    "[AUTH_KEY_ID]",                              // authKeyId (optional)
    "[TEAM_ID]",                                  // teamId (optional)
    "[BUNDLE_ID]"                                 // bundleId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(o,_)=>{n();var l=r(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateApnsProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[AUTH_KEY]",                                 // authKey (optional)
    "[AUTH_KEY_ID]",                              // authKeyId (optional)
    "[TEAM_ID]",                                  // teamId (optional)
    "[BUNDLE_ID]"                                 // bundleId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(o,l)},$$slots:{default:!0}});var g=t(i);j(g,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateApnsProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  authKey: "[AUTH_KEY]",                         // optional
  authKeyId: "[AUTH_KEY_ID]",                    // optional
  teamId: "[TEAM_ID]",                           // optional
  bundleId: "[BUNDLE_ID]"                        // optional
)
`,language:"swift",process:!0,children:(o,_)=>{n();var l=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateApnsProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  authKey: "[AUTH_KEY]",                         // optional
  authKeyId: "[AUTH_KEY_ID]",                    // optional
  teamId: "[TEAM_ID]",                           // optional
  bundleId: "[BUNDLE_ID]"                        // optional
)`);e(o,l)},$$slots:{default:!0}}),e(m,h)},$$slots:{default:!0}}),e(P,a)},$$slots:{default:!0}}),e(M,R)},$$slots:{default:!0}})},$$slots:{default:!0}}),ae(V),e(ne,V)},$$slots:{default:!0}}))}export{pt as component};
