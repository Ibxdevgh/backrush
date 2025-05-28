import{t as l,b as o,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as le,s as t,f as c,n,r as pe}from"../chunks/NgVQVlRK.js";import{n as de}from"../chunks/B4IyMRKX.js";import{S as J}from"../chunks/B6JyFckC.js";import{M as Z}from"../chunks/hMT8fFzP.js";import{T as ee,a as F}from"../chunks/BHbEtIoO.js";import{I as ne}from"../chunks/Dka2wNls.js";import{O as te,a as oe}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as H}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";/* empty css                */import{F as O}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as D}from"../chunks/D8YsId2T.js";import{S as E}from"../chunks/yHjwcyUH.js";import{L as V}from"../chunks/yh4_9ChP.js";import{T as ce}from"../chunks/D8BqvLkQ.js";import{T as ue,a as L,b as re,c as ge,d as G}from"../chunks/BpU_IltG.js";import{A as me}from"../chunks/CqOphJLh.js";const _e={layout:"article",title:"Twilio",description:"Send SMS messages to your Backrush users using Twilio and Backrush Messaging.",back:"/docs/"};var $e=l("To add Twilio as a provider, navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!>.",1),ve=l("Give your provider a name &gt; choose <!> &gt; click <!>. The provider will be saved to your project, but not enabled until you complete its configuration.",1),Ie=l("<!><!><!><!>",1),fe=l("In the <!> step, you will need to provide details from your Twilio dashboard to connect your Backrush project.",1),Pe=l("You will need to provide the following information from your <!>.",1),Ee=l("<!><!>",1),we=l("Head to Twilio console &gt; <!> &gt; <!>.",1),he=l("<!><!>",1),Ae=l("Head to Twilio console &gt; <!> &gt; <!>.",1),Te=l("<!><!>",1),Ce=l("You can access numbers by navigating to your Twilio console &gt; <!> &gt; <!> &gt; <!> &gt; <!>.",1),Oe=l("<!><!>",1),De=l("<!><!><!>",1),Se=l("<!><!>",1),ke=l("After adding the following details, click <!> to enable the provider.",1),Me=l("<!><!><!><!>",1),Ne=l("Before sending your first message, make sure you&#39;ve configured <!> and <!> to send messages to.",1),Re=l("To send a test message, navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!>.",1),ye=l("Add your message and in the targets step, select one of your test targets. Set the schedule to <!> and click <!>.",1),Ye=l("<!><!><!><!><!>",1),be=l("To send a message programmatically, use an <!>.",1),je=l("<!><!><!><!><!><!><!><!><!><!>",1),Ke=l("<!><!>",1),xe=l("<!><!>",1),Ge=l("<!><!>",1),Ue=l("Navigate to <!> &gt; <!> &gt; click your provider. In the settings, you can update a provider&#39;s configuration or delete the provider.",1),Je=l("<!><!>",1),Fe=l("To update or delete providers programmatically, use an <!>.",1),He=l("<!><!><!><!><!><!><!><!><!><!>",1),Ve=l("<!><!>",1),Le=l("<!><!>",1),qe=l("<article><!><!><!><!><!></article>");function En(se){me(se,de(_e,{children:(ae,ze)=>{var q=qe(),B=le(q);D(B,{children:(b,U)=>{n();var R=o("Twilio lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows.");e(b,R)},$$slots:{default:!0}});var Q=t(B);J(Q,{id:"add-provider",step:1,title:"Add provider",children:(b,U)=>{var R=Ie(),j=c(R);D(j,{children:(P,k)=>{n();var p=$e(),u=t(c(p));E(u,{marker:"**",children:(I,A)=>{n();var _=o("Messaging");e(I,_)},$$slots:{default:!0}});var C=t(u,2);E(C,{marker:"**",children:(I,A)=>{n();var _=o("Providers");e(I,_)},$$slots:{default:!0}});var d=t(C,2);ne(d,{icon:"plus",size:"m"});var h=t(d,2);E(h,{marker:"**",children:(I,A)=>{n();var _=o("Add provider");e(I,_)},$$slots:{default:!0}});var v=t(h,2);E(v,{marker:"**",children:(I,A)=>{n();var _=o("SMS");e(I,_)},$$slots:{default:!0}}),n(),e(P,p)},$$slots:{default:!0}});var Y=t(j);te(Y,{children:(P,k)=>{D(P,{children:(p,u)=>{H(p,{src:"/images/docs/messaging/providers/twilio/dark/provider.png",alt:"Add a Twilio provider"})},$$slots:{default:!0}})}});var y=t(Y);oe(y,{children:(P,k)=>{D(P,{children:(p,u)=>{H(p,{src:"/images/docs/messaging/providers/twilio/provider.png",alt:"Add a Twilio provider"})},$$slots:{default:!0}})}});var K=t(y);D(K,{children:(P,k)=>{n();var p=ve(),u=t(c(p));E(u,{marker:"**",children:(d,h)=>{n();var v=o("Twilio");e(d,v)},$$slots:{default:!0}});var C=t(u,2);E(C,{marker:"**",children:(d,h)=>{n();var v=o("Save and continue");e(d,v)},$$slots:{default:!0}}),n(),e(P,p)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}});var W=t(Q);J(W,{id:"configure-provider",step:2,title:"Configure provider",children:(b,U)=>{var R=Me(),j=c(R);D(j,{children:(P,k)=>{n();var p=fe(),u=t(c(p));E(u,{marker:"**",children:(C,d)=>{n();var h=o("Configure");e(C,h)},$$slots:{default:!0}}),n(),e(P,p)},$$slots:{default:!0}});var Y=t(j);D(Y,{children:(P,k)=>{n();var p=Pe(),u=t(c(p));E(u,{marker:"**",children:(C,d)=>{n();var h=o("Twilio dashboard");e(C,h)},$$slots:{default:!0}}),n(),e(P,p)},$$slots:{default:!0}});var y=t(Y);ce(y,{children:(P,k)=>{var p=Se(),u=c(p);ue(u,{children:(d,h)=>{L(d,{children:(v,I)=>{var A=Ee(),_=c(A);re(_,{children:(T,$)=>{n();var f=o("Field name");e(T,f)},$$slots:{default:!0}});var g=t(_);re(g,{}),e(v,A)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=t(u);ge(C,{children:(d,h)=>{var v=De(),I=c(v);L(I,{children:(g,T)=>{var $=he(),f=c($);G(f,{children:(w,M)=>{n();var r=o("Account SID");e(w,r)},$$slots:{default:!0}});var S=t(f);G(S,{children:(w,M)=>{n();var r=we(),m=t(c(r));E(m,{marker:"**",children:(s,N)=>{n();var a=o("Account info");e(s,a)},$$slots:{default:!0}});var i=t(m,2);E(i,{marker:"**",children:(s,N)=>{n();var a=o("Account SID");e(s,a)},$$slots:{default:!0}}),n(),e(w,r)},$$slots:{default:!0}}),e(g,$)},$$slots:{default:!0}});var A=t(I);L(A,{children:(g,T)=>{var $=Te(),f=c($);G(f,{children:(w,M)=>{n();var r=o("Auth token");e(w,r)},$$slots:{default:!0}});var S=t(f);G(S,{children:(w,M)=>{n();var r=Ae(),m=t(c(r));E(m,{marker:"**",children:(s,N)=>{n();var a=o("Account info");e(s,a)},$$slots:{default:!0}});var i=t(m,2);E(i,{marker:"**",children:(s,N)=>{n();var a=o("Auth Token");e(s,a)},$$slots:{default:!0}}),n(),e(w,r)},$$slots:{default:!0}}),e(g,$)},$$slots:{default:!0}});var _=t(A);L(_,{children:(g,T)=>{var $=Oe(),f=c($);G(f,{children:(w,M)=>{n();var r=o("Sender number");e(w,r)},$$slots:{default:!0}});var S=t(f);G(S,{children:(w,M)=>{n();var r=Ce(),m=t(c(r));E(m,{marker:"**",children:(a,z)=>{n();var x=o("Develop");e(a,x)},$$slots:{default:!0}});var i=t(m,2);E(i,{marker:"**",children:(a,z)=>{n();var x=o("Phone Numbers");e(a,x)},$$slots:{default:!0}});var s=t(i,2);E(s,{marker:"**",children:(a,z)=>{n();var x=o("Manage");e(a,x)},$$slots:{default:!0}});var N=t(s,2);E(N,{marker:"**",children:(a,z)=>{n();var x=o("Active Numbers");e(a,x)},$$slots:{default:!0}}),n(),e(w,r)},$$slots:{default:!0}}),e(g,$)},$$slots:{default:!0}}),e(d,v)},$$slots:{default:!0}}),e(P,p)},$$slots:{default:!0}});var K=t(y);D(K,{children:(P,k)=>{n();var p=ke(),u=t(c(p));E(u,{marker:"**",children:(C,d)=>{n();var h=o("Save and continue");e(C,h)},$$slots:{default:!0}}),n(),e(P,p)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}});var X=t(W);J(X,{id:"test-provider",step:3,title:"Test provider",children:(b,U)=>{var R=Ge(),j=c(R);D(j,{children:(y,K)=>{n();var P=Ne(),k=t(c(P));V(k,{href:"/docs/products/messaging/topics",children:(u,C)=>{n();var d=o("a topic");e(u,d)},$$slots:{default:!0}});var p=t(k,2);V(p,{href:"/docs/products/messaging/targets",children:(u,C)=>{n();var d=o("a target");e(u,d)},$$slots:{default:!0}}),n(),e(y,P)},$$slots:{default:!0}});var Y=t(j);ee(Y,{children:(y,K)=>{var P=xe(),k=c(P);F(k,{id:"console",title:"Console",children:(u,C)=>{var d=Ye(),h=c(d);D(h,{children:(g,T)=>{n();var $=Re(),f=t(c($));E(f,{marker:"**",children:(m,i)=>{n();var s=o("Messaging");e(m,s)},$$slots:{default:!0}});var S=t(f,2);E(S,{marker:"**",children:(m,i)=>{n();var s=o("Messages");e(m,s)},$$slots:{default:!0}});var w=t(S,2);ne(w,{icon:"plus",size:"m"});var M=t(w,2);E(M,{marker:"**",children:(m,i)=>{n();var s=o("Create message");e(m,s)},$$slots:{default:!0}});var r=t(M,2);E(r,{marker:"**",children:(m,i)=>{n();var s=o("SMS");e(m,s)},$$slots:{default:!0}}),n(),e(g,$)},$$slots:{default:!0}});var v=t(h);te(v,{children:(g,T)=>{D(g,{children:($,f)=>{H($,{src:"/images/docs/messaging/messages/dark/create-sms-message.png",alt:"Create an SMS message"})},$$slots:{default:!0}})}});var I=t(v);oe(I,{children:(g,T)=>{D(g,{children:($,f)=>{H($,{src:"/images/docs/messaging/messages/create-sms-message.png",alt:"Create an SMS message"})},$$slots:{default:!0}})}});var A=t(I);D(A,{children:(g,T)=>{n();var $=ye(),f=t(c($));E(f,{marker:"**",children:(w,M)=>{n();var r=o("Now");e(w,r)},$$slots:{default:!0}});var S=t(f,2);E(S,{marker:"**",children:(w,M)=>{n();var r=o("Send");e(w,r)},$$slots:{default:!0}}),n(),e(g,$)},$$slots:{default:!0}});var _=t(A);D(_,{children:(g,T)=>{n();var $=o("Verify that you can receive the message in your inbox. If not, check for logs in the Backrush Console or in your provider's logs.");e(g,$)},$$slots:{default:!0}}),e(u,d)},$$slots:{default:!0}});var p=t(k);F(p,{id:"server-sdk",title:"Server SDK",children:(u,C)=>{var d=Ke(),h=c(d);D(h,{children:(I,A)=>{n();var _=be(),g=t(c(_));V(g,{href:"/docs/sdks#server",children:(T,$)=>{n();var f=o("Backrush Server SDK");e(T,f)},$$slots:{default:!0}}),n(),e(I,_)},$$slots:{default:!0}});var v=t(h);Z(v,{children:(I,A)=>{var _=je(),g=c(_);O(g,{content:`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(s,N)=>{n();var a=o(`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);e(s,a)},$$slots:{default:!0}});var T=t(g);O(T,{content:`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(s,N)=>{n();var a=o(`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);e(s,a)},$$slots:{default:!0}});var $=t(T);O($,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);
`,language:"php",process:!0,children:(s,N)=>{n();var a=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);`);e(s,a)},$$slots:{default:!0}});var f=t($);O(f,{content:`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)
`,language:"python",process:!0,children:(s,N)=>{n();var a=o(`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)`);e(s,a)},$$slots:{default:!0}});var S=t(f);O(S,{content:`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(s,N)=>{n();var a=o(`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect`);e(s,a)},$$slots:{default:!0}});var w=t(S);O(w,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"    
    topics: new List<string> {}                   // optional    
    users: new List<string> {}                    // optional    
    targets: new List<string> {}                  // optional    
    draft: true                                   // optional    
    scheduledAt: "");                             // optional
`,language:"csharp",process:!0,children:(s,N)=>{n();var a=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"    
    topics: new List<string> {}                   // optional    
    users: new List<string> {}                    // optional    
    targets: new List<string> {}                  // optional    
    draft: true                                   // optional    
    scheduledAt: "");                             // optional`);e(s,a)},$$slots:{default:!0}});var M=t(w);O(M,{content:`import 'package:dart_backrush/dart_backrush.dart';
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

  Future result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(s,N)=>{n();var a=o(`import 'package:dart_backrush/dart_backrush.dart';
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

  Future result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);e(s,a)},$$slots:{default:!0}});var r=t(M);O(r,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(s,N)=>{n();var a=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(s,a)},$$slots:{default:!0}});var m=t(r);O(m,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(s,N)=>{n();var a=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(s,a)},$$slots:{default:!0}});var i=t(m);O(i,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
  messageId: "[MESSAGE_ID]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)
`,language:"swift",process:!0,children:(s,N)=>{n();var a=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
  messageId: "[MESSAGE_ID]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)`);e(s,a)},$$slots:{default:!0}}),e(I,_)},$$slots:{default:!0}}),e(u,d)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}});var ie=t(X);J(ie,{id:"manage-provider",step:4,title:"Manage provider",children:(b,U)=>{ee(b,{children:(R,j)=>{var Y=Le(),y=c(Y);F(y,{id:"console",title:"Console",children:(P,k)=>{var p=Je(),u=c(p);D(u,{children:(d,h)=>{n();var v=o("You can update or delete a provider in the Backrush Console.");e(d,v)},$$slots:{default:!0}});var C=t(u);D(C,{children:(d,h)=>{n();var v=Ue(),I=t(c(v));E(I,{marker:"**",children:(_,g)=>{n();var T=o("Messaging");e(_,T)},$$slots:{default:!0}});var A=t(I,2);E(A,{marker:"**",children:(_,g)=>{n();var T=o("Providers");e(_,T)},$$slots:{default:!0}}),n(),e(d,v)},$$slots:{default:!0}}),e(P,p)},$$slots:{default:!0}});var K=t(y);F(K,{id:"server-sdk",title:"Server SDK",children:(P,k)=>{var p=Ve(),u=c(p);D(u,{children:(d,h)=>{n();var v=Fe(),I=t(c(v));V(I,{href:"/docs/sdks#server",children:(A,_)=>{n();var g=o("Backrush Server SDK");e(A,g)},$$slots:{default:!0}}),n(),e(d,v)},$$slots:{default:!0}});var C=t(u);Z(C,{children:(d,h)=>{var v=He(),I=c(v);O(I,{content:`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateTwilioProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[ACCOUNT_SID]',                         // accountSid (optional)
        '[AUTH_TOKEN]',                          // authToken (optional)
        '[FROM]'                                 // from (optional)
    );
`,language:"server-nodejs",process:!0,children:(r,m)=>{n();var i=o(`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateTwilioProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[ACCOUNT_SID]',                         // accountSid (optional)
        '[AUTH_TOKEN]',                          // authToken (optional)
        '[FROM]'                                 // from (optional)
    );`);e(r,i)},$$slots:{default:!0}});var A=t(I);O(A,{content:`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateTwilioProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[ACCOUNT_SID]',                         // accountSid (optional)
        '[AUTH_TOKEN]',                          // authToken (optional)
        '[FROM]'                                 // from (optional)
    );
`,language:"deno",process:!0,children:(r,m)=>{n();var i=o(`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateTwilioProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[ACCOUNT_SID]',                         // accountSid (optional)
        '[AUTH_TOKEN]',                          // authToken (optional)
        '[FROM]'                                 // from (optional)
    );`);e(r,i)},$$slots:{default:!0}});var _=t(A);O(_,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateTwilioProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    accountSid: '[ACCOUNT_SID]',                  // optional
    authToken: '[AUTH_TOKEN]',                    // optional
    from: '[FROM]'                                // optional
);
`,language:"php",process:!0,children:(r,m)=>{n();var i=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->updateTwilioProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                               // optional
    enabled: false,                               // optional
    accountSid: '[ACCOUNT_SID]',                  // optional
    authToken: '[AUTH_TOKEN]',                    // optional
    from: '[FROM]'                                // optional
);`);e(r,i)},$$slots:{default:!0}});var g=t(_);O(g,{content:`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_twilio_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    account_sid = '[ACCOUNT_SID]',              # optional
    auth_token = '[AUTH_TOKEN]',                # optional
    from = '[FROM]'                             # optional
)
`,language:"python",process:!0,children:(r,m)=>{n();var i=o(`from backrush.client import Client
from backrush.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.update_twilio_provider(
    provider_id = '[PROVIDER_ID]',
    name = '[NAME]',                            # optional
    enabled = False,                            # optional
    account_sid = '[ACCOUNT_SID]',              # optional
    auth_token = '[AUTH_TOKEN]',                # optional
    from = '[FROM]'                             # optional
)`);e(r,i)},$$slots:{default:!0}});var T=t(g);O(T,{content:`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_twilio_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    account_sid: '[ACCOUNT_SID]',                 # optional
    auth_token: '[AUTH_TOKEN]',                   # optional
    from: '[FROM]'                                # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(r,m)=>{n();var i=o(`require 'backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.backrush.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.update_twilio_provider(
    provider_id: '[PROVIDER_ID]',
    name: '[NAME]',                               # optional
    enabled: false,                               # optional
    account_sid: '[ACCOUNT_SID]',                 # optional
    auth_token: '[AUTH_TOKEN]',                   # optional
    from: '[FROM]'                                # optional
)

puts response.inspect`);e(r,i)},$$slots:{default:!0}});var $=t(T);O($,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.UpdateTwilioProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    accountSid: "[ACCOUNT_SID]"                   // optional
    authToken: "[AUTH_TOKEN]"                     // optional
    from: "[FROM]");                              // optional
`,language:"csharp",process:!0,children:(r,m)=>{n();var i=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Provider result = await messaging.UpdateTwilioProvider(
    providerId: "[PROVIDER_ID]"
    name: "[NAME]"                                // optional
    enabled: false                                // optional
    accountSid: "[ACCOUNT_SID]"                   // optional
    authToken: "[AUTH_TOKEN]"                     // optional
    from: "[FROM]");                              // optional`);e(r,i)},$$slots:{default:!0}});var f=t($);O(f,{content:`import 'package:dart_backrush/dart_backrush.dart';
import 'package:dart_backrush/enums.dart';
import 'package:dart_backrush/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.updateTwilioProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    accountSid: '[ACCOUNT_SID]',                 // optional
    authToken: '[AUTH_TOKEN]',                   // optional
    from: '[FROM]',                              // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(r,m)=>{n();var i=o(`import 'package:dart_backrush/dart_backrush.dart';
import 'package:dart_backrush/enums.dart';
import 'package:dart_backrush/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.updateTwilioProvider(
    providerId: '[PROVIDER_ID]',
    name: '[NAME]',                              // optional
    enabled: false,                              // optional
    accountSid: '[ACCOUNT_SID]',                 // optional
    authToken: '[AUTH_TOKEN]',                   // optional
    from: '[FROM]',                              // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);e(r,i)},$$slots:{default:!0}});var S=t(f);O(S,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateTwilioProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[ACCOUNT_SID]",                              // accountSid (optional)
    "[AUTH_TOKEN]",                               // authToken (optional)
    "[FROM]"                                      // from (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(r,m)=>{n();var i=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateTwilioProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[ACCOUNT_SID]",                              // accountSid (optional)
    "[AUTH_TOKEN]",                               // authToken (optional)
    "[FROM]"                                      // from (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(r,i)},$$slots:{default:!0}});var w=t(S);O(w,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateTwilioProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[ACCOUNT_SID]",                              // accountSid (optional)
    "[AUTH_TOKEN]",                               // authToken (optional)
    "[FROM]"                                      // from (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(r,m)=>{n();var i=o(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.updateTwilioProvider(
    "[PROVIDER_ID]",                              // providerId
    "[NAME]",                                     // name (optional)
    false,                                        // enabled (optional)
    "[ACCOUNT_SID]",                              // accountSid (optional)
    "[AUTH_TOKEN]",                               // authToken (optional)
    "[FROM]"                                      // from (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(r,i)},$$slots:{default:!0}});var M=t(w);O(M,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateTwilioProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  accountSid: "[ACCOUNT_SID]",                   // optional
  authToken: "[AUTH_TOKEN]",                     // optional
  from: "[FROM]"                                 // optional
)
`,language:"swift",process:!0,children:(r,m)=>{n();var i=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let provider = try await messaging.updateTwilioProvider(
  providerId: "[PROVIDER_ID]",
  name: "[NAME]",                                // optional
  enabled: xfalse,                               // optional
  accountSid: "[ACCOUNT_SID]",                   // optional
  authToken: "[AUTH_TOKEN]",                     // optional
  from: "[FROM]"                                 // optional
)`);e(r,i)},$$slots:{default:!0}}),e(d,v)},$$slots:{default:!0}}),e(P,p)},$$slots:{default:!0}}),e(R,Y)},$$slots:{default:!0}})},$$slots:{default:!0}}),pe(q),e(ae,q)},$$slots:{default:!0}}))}export{En as component};
