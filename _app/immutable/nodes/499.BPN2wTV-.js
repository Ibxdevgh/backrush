import{t as f,b as o,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as le,s as t,f as A,n as s,r as ce}from"../chunks/NgVQVlRK.js";import{n as ge}from"../chunks/B4IyMRKX.js";import{H as h}from"../chunks/CXsRaEhZ.js";import{M as R}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{I as ae}from"../chunks/Dka2wNls.js";import{O as M,a as y}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as D}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as O}from"../chunks/DXp9_3zM.js";import{F as l}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as v}from"../chunks/D8YsId2T.js";import{S as $}from"../chunks/yHjwcyUH.js";import{L as T}from"../chunks/yh4_9ChP.js";import{A as ue}from"../chunks/CqOphJLh.js";const Ie={layout:"article",title:"Send SMS messages",description:"Send SMS messages to your users using Backrush Messaging."};var me=f("Backrush supports <!>, <!>, <!>, <!>, and <!> as SMS providers. You must configure one of them as a provider.",1),Ee=f("To add a new provider navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!> and follow the wizard. You can find more details about configuring in the provider guides for <!>, <!>, <!>, <!>, and <!>.",1),_e=f("In Backrush Messaging, each user has <!> like their email, phone number, and devices with your app installed. You can deliver messages to users through their <!>.",1),Pe=f("If the user signed up with phone (SMS) authentication, their account would already have a phone number as a target. During development, you can add targets to existing accounts by navigating to <!> &gt; <!> &gt; <!> &gt; <!> &gt; <!>.",1),ve=f("You can also implement forms in your app to collect contact information and add it as a target with the <!> endpoint.",1),we=f("<!><!><!><!><!><!><!><!><!><!>",1),$e=f("To create a topic in the Backrush Console, navigate to <!> &gt; <!> &gt; <!> <!>.",1),fe=f("You can also create topics programmatically using an <!>.",1),Ae=f("<!><!><!><!><!><!><!><!><!><!>",1),Te=f("You can send SMS messages using a Server SDK. To send an SMS messages immediately, you can call the <!> endpoint without passing either the <!> or <!> parameters.",1),Ce=f("<!><!><!><!><!><!><!><!><!><!>",1),De=f("To send an scheduled SMS message, you can call the <!> endpoint with <!> as a ISO 8601 date time string for the scheduled time.",1),he=f("<!><!><!><!><!><!><!><!><!><!>",1),Oe=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ze(ie){ue(ie,ge(Ie,{children:(pe,Re)=>{var Y=Oe(),S=le(Y);v(S,{children:(i,P)=>{s();var a=o("You can send custom SMS messages to your app's users using Backrush Messaging and a connected SMTP service. This guide takes you through the implementation path of adding SMS messaging to your app.");r(i,a)},$$slots:{default:!0}});var k=t(S);h(k,{id:"add-a-provider",level:1,children:(i,P)=>{s();var a=o("Add a provider");r(i,a)},$$slots:{default:!0}});var N=t(k);v(N,{children:(i,P)=>{s();var a=me(),d=t(A(a));T(d,{href:"/docs/products/messaging/twilio/",children:(c,m)=>{s();var u=o("Twilio");r(c,u)},$$slots:{default:!0}});var g=t(d,2);T(g,{href:"/docs/products/messaging/msg91/",children:(c,m)=>{s();var u=o("MSG91");r(c,u)},$$slots:{default:!0}});var I=t(g,2);T(I,{href:"/docs/products/messaging/telesign/",children:(c,m)=>{s();var u=o("Telesign");r(c,u)},$$slots:{default:!0}});var E=t(I,2);T(E,{href:"/docs/products/messaging/textmagic/",children:(c,m)=>{s();var u=o("Textmagic");r(c,u)},$$slots:{default:!0}});var _=t(E,2);T(_,{href:"/docs/products/messaging/vonage/",children:(c,m)=>{s();var u=o("Vonage");r(c,u)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var j=t(N);M(j,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/providers/twilio/dark/provider.png",alt:"Add a SMTP provider"})},$$slots:{default:!0}})}});var G=t(j);y(G,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/providers/twilio/provider.png",alt:"Add a SMTP provider"})},$$slots:{default:!0}})}});var b=t(G);v(b,{children:(i,P)=>{s();var a=Ee(),d=t(A(a));$(d,{marker:"**",children:(e,p)=>{s();var n=o("Messaging");r(e,n)},$$slots:{default:!0}});var g=t(d,2);$(g,{marker:"**",children:(e,p)=>{s();var n=o("Providers");r(e,n)},$$slots:{default:!0}});var I=t(g,2);ae(I,{icon:"plus",size:"m"});var E=t(I,2);$(E,{marker:"**",children:(e,p)=>{s();var n=o("Add provider");r(e,n)},$$slots:{default:!0}});var _=t(E,2);$(_,{marker:"**",children:(e,p)=>{s();var n=o("SMS");r(e,n)},$$slots:{default:!0}});var c=t(_,2);T(c,{href:"/docs/products/messaging/twilio/",children:(e,p)=>{s();var n=o("Twilio");r(e,n)},$$slots:{default:!0}});var m=t(c,2);T(m,{href:"/docs/products/messaging/msg91/",children:(e,p)=>{s();var n=o("MSG91");r(e,n)},$$slots:{default:!0}});var u=t(m,2);T(u,{href:"/docs/products/messaging/telesign/",children:(e,p)=>{s();var n=o("Telesign");r(e,n)},$$slots:{default:!0}});var w=t(u,2);T(w,{href:"/docs/products/messaging/textmagic/",children:(e,p)=>{s();var n=o("Textmagic");r(e,n)},$$slots:{default:!0}});var C=t(w,2);T(C,{href:"/docs/products/messaging/vonage/",children:(e,p)=>{s();var n=o("Vonage");r(e,n)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var J=t(b);h(J,{id:"add-targets",level:1,children:(i,P)=>{s();var a=o("Add targets");r(i,a)},$$slots:{default:!0}});var x=t(J);v(x,{children:(i,P)=>{s();var a=_e(),d=t(A(a));$(d,{marker:"**",children:(I,E)=>{s();var _=o("targets");r(I,_)},$$slots:{default:!0}});var g=t(d,2);$(g,{marker:"**",children:(I,E)=>{s();var _=o("targets");r(I,_)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var K=t(x);M(K,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/targets/dark/target-overview.png",alt:"Target overview"})},$$slots:{default:!0}})}});var U=t(K);y(U,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/targets/target-overview.png",alt:"Target overview"})},$$slots:{default:!0}})}});var V=t(U);v(V,{children:(i,P)=>{s();var a=Pe(),d=t(A(a));$(d,{marker:"**",children:(c,m)=>{s();var u=o("Authentication");r(c,u)},$$slots:{default:!0}});var g=t(d,2);$(g,{marker:"**",children:(c,m)=>{s();var u=o("Users");r(c,u)},$$slots:{default:!0}});var I=t(g,2);$(I,{marker:"**",children:(c,m)=>{s();var u=o("Select a user");r(c,u)},$$slots:{default:!0}});var E=t(I,2);$(E,{marker:"**",children:(c,m)=>{s();var u=o("Targets");r(c,u)},$$slots:{default:!0}});var _=t(E,2);$(_,{marker:"**",children:(c,m)=>{s();var u=o("Add a subscriber");r(c,u)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var F=t(V);M(F,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/targets/dark/add-targets.png",alt:"Add a target"})},$$slots:{default:!0}})}});var L=t(F);y(L,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/targets/add-targets.png",alt:"Add a target"})},$$slots:{default:!0}})}});var q=t(L);v(q,{children:(i,P)=>{s();var a=ve(),d=t(A(a));T(d,{href:"/docs/references/cloud/server-nodejs/messaging#createSubscriber",children:(g,I)=>{s();var E=o("createSubscriber");r(g,E)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var H=t(q);R(H,{children:(i,P)=>{var a=we(),d=A(a);l(d,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2');                  // Your secret API key

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Phone, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);
`,language:"server-nodejs",process:!0,children:(e,p)=>{s();var n=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2');                  // Your secret API key

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Phone, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);`);r(e,n)},$$slots:{default:!0}});var g=t(d);l(g,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setJWT('eyJhbVCJ9.eyJ...');                    // Your secret JSON Web Token

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Phone, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);
`,language:"deno",process:!0,children:(e,p)=>{s();var n=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setJWT('eyJhbVCJ9.eyJ...');                    // Your secret JSON Web Token

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Phone, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);`);r(e,n)},$$slots:{default:!0}});var I=t(g);l(I,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Users;
use Backrush\\Enums\\MessagingProviderType;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$users = new Users($client);

$target = $users->createTarget(
    userId: '<USER_ID>',
    targetId: '<TARGET_ID>',
    providerType: MessagingProviderType::EMAIL(),
    identifier: '<IDENTIFIER>',
    providerId: '<PROVIDER_ID>',    // optional
    name: '<NAME>'                  // optional
);
`,language:"php",process:!0,children:(e,p)=>{s();var n=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Users;
use Backrush\\Enums\\MessagingProviderType;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$users = new Users($client);

$target = $users->createTarget(
    userId: '<USER_ID>',
    targetId: '<TARGET_ID>',
    providerType: MessagingProviderType::EMAIL(),
    identifier: '<IDENTIFIER>',
    providerId: '<PROVIDER_ID>',    // optional
    name: '<NAME>'                  // optional
);`);r(e,n)},$$slots:{default:!0}});var E=t(I);l(E,{content:`from appwrite.client import Client
from appwrite.enums import MessagingProviderType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

users = Users(client)

target = users.create_target(
    user_id = '<USER_ID>',
    target_id = '<TARGET_ID>',
    provider_type = MessagingProviderType.PHONE,
    identifier = '<IDENTIFIER>',
    provider_id = '<PROVIDER_ID>', # optional
    name = '<NAME>' # optional
)
`,language:"python",process:!0,children:(e,p)=>{s();var n=o(`from appwrite.client import Client
from appwrite.enums import MessagingProviderType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

users = Users(client)

target = users.create_target(
    user_id = '<USER_ID>',
    target_id = '<TARGET_ID>',
    provider_type = MessagingProviderType.PHONE,
    identifier = '<IDENTIFIER>',
    provider_id = '<PROVIDER_ID>', # optional
    name = '<NAME>' # optional
)`);r(e,n)},$$slots:{default:!0}});var _=t(E);l(_,{content:`require 'appwrite'

include Backrush
include Backrush::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                   # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')   # Your secret API key

users = Users.new(client)

target = users.create_target(
    user_id: '<USER_ID>',
    target_id: '<TARGET_ID>',
    provider_type: MessagingProviderType::EMAIL,
    identifier: '<IDENTIFIER>',
    provider_id: '<PROVIDER_ID>',   # optional
    name: '<NAME>'                  # optional
)

puts target.inspect
`,language:"ruby",process:!0,children:(e,p)=>{s();var n=o(`require 'appwrite'

include Backrush
include Backrush::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                   # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')   # Your secret API key

users = Users.new(client)

target = users.create_target(
    user_id: '<USER_ID>',
    target_id: '<TARGET_ID>',
    provider_type: MessagingProviderType::EMAIL,
    identifier: '<IDENTIFIER>',
    provider_id: '<PROVIDER_ID>',   # optional
    name: '<NAME>'                  # optional
)

puts target.inspect`);r(e,n)},$$slots:{default:!0}});var c=t(_);l(c,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;
using Backrush.Enums;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Users users = new Users(client);

Target target = await users.CreateTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: MessagingProviderType.Phone,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>",  // optional
    name: "<NAME>"                // optional
);
`,language:"csharp",process:!0,children:(e,p)=>{s();var n=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;
using Backrush.Enums;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Users users = new Users(client);

Target target = await users.CreateTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: MessagingProviderType.Phone,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>",  // optional
    name: "<NAME>"                // optional
);`);r(e,n)},$$slots:{default:!0}});var m=t(c);l(m,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
  .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
  .setProject('<PROJECT_ID>')                  // Your project ID
  .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Users users = Users(client);

Target target = await users.createTarget(
  userId: '<USER_ID>',
  targetId: '<TARGET_ID>',
  providerType:  MessagingProviderType.phone,
  identifier: '<IDENTIFIER>',
  providerId: '<PROVIDER_ID>',  // (optional)
  name: '<NAME>',               // (optional)
);

`,language:"dart",process:!0,children:(e,p)=>{s();var n=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
  .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
  .setProject('<PROJECT_ID>')                  // Your project ID
  .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Users users = Users(client);

Target target = await users.createTarget(
  userId: '<USER_ID>',
  targetId: '<TARGET_ID>',
  providerType:  MessagingProviderType.phone,
  identifier: '<IDENTIFIER>',
  providerId: '<PROVIDER_ID>',  // (optional)
  name: '<NAME>',               // (optional)
);`);r(e,n)},$$slots:{default:!0}});var u=t(m);l(u,{content:`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Users
import io.appwrite.enums.MessagingProviderType

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val users = Users(client)

val target = users.createTarget(
    userId = "<USER_ID>",
    targetId = "<TARGET_ID>",
    providerType =  MessagingProviderType.PHONE,
    identifier = "<IDENTIFIER>",
    providerId = "<PROVIDER_ID>",   // optional
    name = "<NAME>"                 // optional
)

`,language:"kotlin",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Users
import io.appwrite.enums.MessagingProviderType

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val users = Users(client)

val target = users.createTarget(
    userId = "<USER_ID>",
    targetId = "<TARGET_ID>",
    providerType =  MessagingProviderType.PHONE,
    identifier = "<IDENTIFIER>",
    providerId = "<PROVIDER_ID>",   // optional
    name = "<NAME>"                 // optional
)`);r(e,n)},$$slots:{default:!0}});var w=t(u);l(w,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Users;
import io.appwrite.enums.MessagingProviderType;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Users users = new Users(client);

users.createTarget(
    "<USER_ID>",                    // userId
    "<TARGET_ID>",                  // targetId
    MessagingProviderType.PHONE,    // providerType
    "<IDENTIFIER>",                 // identifier
    "<PROVIDER_ID>",                // providerId (optional)
    "<NAME>",                       // name (optional)
    new CoroutineCallback<>((target, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(target);
    })
);
`,language:"java",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Users;
import io.appwrite.enums.MessagingProviderType;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Users users = new Users(client);

users.createTarget(
    "<USER_ID>",                    // userId
    "<TARGET_ID>",                  // targetId
    MessagingProviderType.PHONE,    // providerType
    "<IDENTIFIER>",                 // identifier
    "<PROVIDER_ID>",                // providerId (optional)
    "<NAME>",                       // name (optional)
    new CoroutineCallback<>((target, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(target);
    })
);`);r(e,n)},$$slots:{default:!0}});var C=t(w);l(C,{content:`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let users = Users(client)

let target = try await users.createTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: .phone,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>", // optional
    name: "<NAME>"               // optional
)
`,language:"swift",process:!0,children:(e,p)=>{s();var n=o(`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let users = Users(client)

let target = try await users.createTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: .phone,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>", // optional
    name: "<NAME>"               // optional
)`);r(e,n)},$$slots:{default:!0}}),r(i,a)},$$slots:{default:!0}});var z=t(H);h(z,{id:"create-topics",level:1,children:(i,P)=>{s();var a=o("Create topics (optional)");r(i,a)},$$slots:{default:!0}});var W=t(z);v(W,{children:(i,P)=>{s();var a=o("You can use topics to organize targets that should receive the same messages, so you can send SMS messages to groups of targets instead of one at time. This step is optional if you plan to only send SMS messages to individual targets.");r(i,a)},$$slots:{default:!0}});var B=t(W);v(B,{children:(i,P)=>{s();var a=$e(),d=t(A(a));$(d,{marker:"**",children:(_,c)=>{s();var m=o("Messaging");r(_,m)},$$slots:{default:!0}});var g=t(d,2);$(g,{marker:"**",children:(_,c)=>{s();var m=o("Topics");r(_,m)},$$slots:{default:!0}});var I=t(g,2);ae(I,{icon:"plus",size:"m"});var E=t(I,2);$(E,{marker:"**",children:(_,c)=>{s();var m=o("Create topic");r(_,m)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var Q=t(B);M(Q,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/topics/dark/create-topics.png",alt:"Add a target"})},$$slots:{default:!0}})}});var X=t(Q);y(X,{children:(i,P)=>{v(i,{children:(a,d)=>{D(a,{src:"/images/docs/messaging/topics/create-topics.png",alt:"Add a target"})},$$slots:{default:!0}})}});var Z=t(X);v(Z,{children:(i,P)=>{s();var a=fe(),d=t(A(a));T(d,{href:"/docs/references/cloud/server-nodejs/messaging#createTopic",children:(g,I)=>{s();var E=o("Backrush Server SDK");r(g,E)},$$slots:{default:!0}}),s(),r(i,a)},$$slots:{default:!0}});var ee=t(Z);R(ee,{children:(i,P)=>{var a=Ae(),d=A(a);l(d,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const topic = await messaging.createTopic(
    '[TOPIC_ID]',     // topicId
    '[NAME]'          // name
);
`,language:"server-nodejs",process:!0,children:(e,p)=>{s();var n=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const topic = await messaging.createTopic(
    '[TOPIC_ID]',     // topicId
    '[NAME]'          // name
);`);r(e,n)},$$slots:{default:!0}});var g=t(d);l(g,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const topic = await messaging.createTopic(
    '[TOPIC_ID]',     // topicId
    '[NAME]'          // name
);
`,language:"deno",process:!0,children:(e,p)=>{s();var n=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const topic = await messaging.createTopic(
    '[TOPIC_ID]',     // topicId
    '[NAME]'          // name
);`);r(e,n)},$$slots:{default:!0}});var I=t(g);l(I,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]'
);
`,language:"php",process:!0,children:(e,p)=>{s();var n=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]'
);`);r(e,n)},$$slots:{default:!0}});var E=t(I);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging(client)

topic = messaging.create_topic(
    topic_id = '[TOPIC_ID]',
    name = '[NAME]'
)
`,language:"python",process:!0,children:(e,p)=>{s();var n=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging(client)

topic = messaging.create_topic(
    topic_id = '[TOPIC_ID]',
    name = '[NAME]'
)`);r(e,n)},$$slots:{default:!0}});var _=t(E);l(_,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

topic = messaging.create_topic(
    topic_id: '[TOPIC_ID]',
    name: '[NAME]'
)
`,language:"ruby",process:!0,children:(e,p)=>{s();var n=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

topic = messaging.create_topic(
    topic_id: '[TOPIC_ID]',
    name: '[NAME]'
)`);r(e,n)},$$slots:{default:!0}});var c=t(_);l(c,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

Topic topic = await messaging.CreateTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]");
`,language:"csharp",process:!0,children:(e,p)=>{s();var n=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

Topic topic = await messaging.CreateTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]");`);r(e,n)},$$slots:{default:!0}});var m=t(c);l(m,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Topic topic = await messaging.createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]',
);
`,language:"dart",process:!0,children:(e,p)=>{s();var n=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Topic topic = await messaging.createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]',
);`);r(e,n)},$$slots:{default:!0}});var u=t(m);l(u,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val messaging = new Messaging(client)

val topic = messaging.createTopic(
    topicId = "[TOPIC_ID]",
    name = "[NAME]"
)
`,language:"kotlin",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val messaging = new Messaging(client)

val topic = messaging.createTopic(
    topicId = "[TOPIC_ID]",
    name = "[NAME]"
)`);r(e,n)},$$slots:{default:!0}});var w=t(u);l(w,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",     // topicId
    "[NAME]",         // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",     // topicId
    "[NAME]",         // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);r(e,n)},$$slots:{default:!0}});var C=t(w);l(C,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let topic = try await messaging.createTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]"
)
`,language:"swift",process:!0,children:(e,p)=>{s();var n=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let topic = try await messaging.createTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]"
)`);r(e,n)},$$slots:{default:!0}}),r(i,a)},$$slots:{default:!0}});var ne=t(ee);h(ne,{id:"send-sms",level:1,children:(i,P)=>{s();var a=o("Send SMS messages");r(i,a)},$$slots:{default:!0}});var te=t(ne);v(te,{children:(i,P)=>{s();var a=Te(),d=t(A(a));O(d,{content:"createSms"});var g=t(d,2);O(g,{content:"draft"});var I=t(g,2);O(I,{content:"scheduledAt"}),s(),r(i,a)},$$slots:{default:!0}});var se=t(te);R(se,{children:(i,P)=>{var a=Ce(),d=A(a);l(d,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',    // messageId
    '[CONTENT]',       // content
    [],                // topics (optional)
    [],                // users (optional)
    [],                // targets (optional)
    false,             // draft (optional)
    ''                 // scheduledAt (optional)
);
`,language:"server-nodejs",process:!0,children:(e,p)=>{s();var n=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',    // messageId
    '[CONTENT]',       // content
    [],                // topics (optional)
    [],                // users (optional)
    [],                // targets (optional)
    false,             // draft (optional)
    ''                 // scheduledAt (optional)
);`);r(e,n)},$$slots:{default:!0}});var g=t(d);l(g,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',    // messageId
    '[CONTENT]',       // content
    [],                // topics (optional)
    [],                // users (optional)
    [],                // targets (optional)
    false,             // draft (optional)
    ''                 // scheduledAt (optional)
);
`,language:"deno",process:!0,children:(e,p)=>{s();var n=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',    // messageId
    '[CONTENT]',       // content
    [],                // topics (optional)
    [],                // users (optional)
    [],                // targets (optional)
    false,             // draft (optional)
    ''                 // scheduledAt (optional)
);`);r(e,n)},$$slots:{default:!0}});var I=t(g);l(I,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ''              // optional
);
`,language:"php",process:!0,children:(e,p)=>{s();var n=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ''              // optional
);`);r(e,n)},$$slots:{default:!0}});var E=t(I);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
client.set_project('<PROJECT_ID>')                  # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                   # optional
    users = [],                    # optional
    targets = [],                  # optional
    draft = false,                 # optional
    scheduled_at = ''              # optional
)
`,language:"python",process:!0,children:(e,p)=>{s();var n=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
client.set_project('<PROJECT_ID>')                  # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                   # optional
    users = [],                    # optional
    targets = [],                  # optional
    draft = false,                 # optional
    scheduled_at = ''              # optional
)`);r(e,n)},$$slots:{default:!0}});var _=t(E);l(_,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                   # optional
    users: [],                    # optional
    targets: [],                  # optional
    draft: false,                 # optional
    scheduled_at: ''              # optional
)
`,language:"ruby",process:!0,children:(e,p)=>{s();var n=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                   # optional
    users: [],                    # optional
    targets: [],                  # optional
    draft: false,                 # optional
    scheduled_at: ''              # optional
)`);r(e,n)},$$slots:{default:!0}});var c=t(_);l(c,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")   // Your API Endpoint
    .SetProject("<PROJECT_ID>")                   // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");  // Your secret API key

Messaging messaging = new Messaging(client);

Message message = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}       // optional
    users: new List<string> {}        // optional
    targets: new List<string> {}      // optional
    draft: false,                     // optional
    scheduledAt: "");                 // optional
`,language:"csharp",process:!0,children:(e,p)=>{s();var n=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")   // Your API Endpoint
    .SetProject("<PROJECT_ID>")                   // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");  // Your secret API key

Messaging messaging = new Messaging(client);

Message message = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}       // optional
    users: new List<string> {}        // optional
    targets: new List<string> {}      // optional
    draft: false,                     // optional
    scheduledAt: "");                 // optional`);r(e,n)},$$slots:{default:!0}});var m=t(c);l(m,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client();
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Message message result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ''              // optional
);
`,language:"dart",process:!0,children:(e,p)=>{s();var n=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client();
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Message message result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ''              // optional
);`);r(e,n)},$$slots:{default:!0}});var u=t(m);l(u,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")       // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")       // Your secret API key

val messaging = Messaging(client)

val message - await messaging.createSms(
    messageId = "[MESSAGE_ID]",
    content = "[CONTENT]",
    topics = listOf(),
    users = listOf(),
    targets = listOf(),
    draft = false,
    scheduledAt = ""
)
`,language:"kotlin",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")       // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")       // Your secret API key

val messaging = Messaging(client)

val message - await messaging.createSms(
    messageId = "[MESSAGE_ID]",
    content = "[CONTENT]",
    topics = listOf(),
    users = listOf(),
    targets = listOf(),
    draft = false,
    scheduledAt = ""
)`);r(e,n)},$$slots:{default:!0}});var w=t(u);l(w,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",      // messageId
    "[CONTENT]",         // content
    listOf(),            // topics (optional)
    listOf(),            // users (optional)
    listOf(),            // targets (optional)
    false,               // draft (optional)
    "",                  // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",      // messageId
    "[CONTENT]",         // content
    listOf(),            // topics (optional)
    listOf(),            // users (optional)
    listOf(),            // targets (optional)
    false,               // draft (optional)
    "",                  // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);r(e,n)},$$slots:{default:!0}});var C=t(w);l(C,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]",
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ""              // optional
)
`,language:"swift",process:!0,children:(e,p)=>{s();var n=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]",
    topics: [],                  // optional
    users: [],                   // optional
    targets: [],                 // optional
    draft: false,                // optional
    scheduledAt: ""              // optional
)`);r(e,n)},$$slots:{default:!0}}),r(i,a)},$$slots:{default:!0}});var re=t(se);h(re,{id:"schedule-sms",level:1,children:(i,P)=>{s();var a=o("Schedule SMS message");r(i,a)},$$slots:{default:!0}});var oe=t(re);v(oe,{children:(i,P)=>{s();var a=De(),d=t(A(a));O(d,{content:"createSms"});var g=t(d,2);O(g,{content:"scheduledAt"}),s(),r(i,a)},$$slots:{default:!0}});var de=t(oe);R(de,{children:(i,P)=>{var a=he(),d=A(a);l(d,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',             // messageId
    '[CONTENT]',                // content
    [],                         // topics (optional)
    [],                         // users (optional)
    [],                         // targets (optional)
    false,                      // draft (optional)
    '2025-02-13T22:01:00+0000'  // scheduledAt (optional)
);
`,language:"server-nodejs",process:!0,children:(e,p)=>{s();var n=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',             // messageId
    '[CONTENT]',                // content
    [],                         // topics (optional)
    [],                         // users (optional)
    [],                         // targets (optional)
    false,                      // draft (optional)
    '2025-02-13T22:01:00+0000'  // scheduledAt (optional)
);`);r(e,n)},$$slots:{default:!0}});var g=t(d);l(g,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',             // messageId
    '[CONTENT]',                // content
    [],                         // topics (optional)
    [],                         // users (optional)
    [],                         // targets (optional)
    false,                      // draft (optional)
    '2025-02-13T22:01:00+0000'  // scheduledAt (optional)
);
`,language:"deno",process:!0,children:(e,p)=>{s();var n=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const messaging = new sdk.Messaging(client);

const message = await messaging.createSms(
    '[MESSAGE_ID]',             // messageId
    '[CONTENT]',                // content
    [],                         // topics (optional)
    [],                         // users (optional)
    [],                         // targets (optional)
    false,                      // draft (optional)
    '2025-02-13T22:01:00+0000'  // scheduledAt (optional)
);`);r(e,n)},$$slots:{default:!0}});var I=t(g);l(I,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                             // optional
    users: [],                              // optional
    targets: [],                            // optional
    draft: false,                           // optional
    scheduledAt: '2025-02-13T22:01:00+0000' // optional
);
`,language:"php",process:!0,children:(e,p)=>{s();var n=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                             // optional
    users: [],                              // optional
    targets: [],                            // optional
    draft: false,                           // optional
    scheduledAt: '2025-02-13T22:01:00+0000' // optional
);`);r(e,n)},$$slots:{default:!0}});var E=t(I);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
client.set_project('<PROJECT_ID>')                  # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                              # optional
    users = [],                               # optional
    targets = [],                             # optional
    draft = false,                            # optional
    scheduled_at = '2025-02-13T22:01:00+0000' # optional
)
`,language:"python",process:!0,children:(e,p)=>{s();var n=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
client.set_project('<PROJECT_ID>')                  # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                              # optional
    users = [],                               # optional
    targets = [],                             # optional
    draft = false,                            # optional
    scheduled_at = '2025-02-13T22:01:00+0000' # optional
)`);r(e,n)},$$slots:{default:!0}});var _=t(E);l(_,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                              # optional
    users: [],                               # optional
    targets: [],                             # optional
    draft: false,                            # optional
    scheduled_at: '2025-02-13T22:01:00+0000' # optional
)
`,language:"ruby",process:!0,children:(e,p)=>{s();var n=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')  # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')  # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                              # optional
    users: [],                               # optional
    targets: [],                             # optional
    draft: false,                            # optional
    scheduled_at: '2025-02-13T22:01:00+0000' # optional
)`);r(e,n)},$$slots:{default:!0}});var c=t(_);l(c,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")   // Your API Endpoint
    .SetProject("<PROJECT_ID>")                   // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");  // Your secret API key

Messaging messaging = new Messaging(client);

Message message = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}                // optional
    users: new List<string> {}                 // optional
    targets: new List<string> {}               // optional
    draft: false,                              // optional
    scheduledAt: "2025-02-13T22:01:00+0000");  // optional
`,language:"csharp",process:!0,children:(e,p)=>{s();var n=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")   // Your API Endpoint
    .SetProject("<PROJECT_ID>")                   // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");  // Your secret API key

Messaging messaging = new Messaging(client);

Message message = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}                // optional
    users: new List<string> {}                 // optional
    targets: new List<string> {}               // optional
    draft: false,                              // optional
    scheduledAt: "2025-02-13T22:01:00+0000");  // optional`);r(e,n)},$$slots:{default:!0}});var m=t(c);l(m,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client();
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Message message result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                             // optional
    users: [],                              // optional
    targets: [],                            // optional
    draft: false,                           // optional
    scheduledAt: '2025-02-13T22:01:00+0000' // optional
);
`,language:"dart",process:!0,children:(e,p)=>{s();var n=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client();
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Messaging messaging = Messaging(client);

Message message result = await messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                             // optional
    users: [],                              // optional
    targets: [],                            // optional
    draft: false,                           // optional
    scheduledAt: '2025-02-13T22:01:00+0000' // optional
);`);r(e,n)},$$slots:{default:!0}});var u=t(m);l(u,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")       // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")       // Your secret API key

val messaging = Messaging(client)

val message - await messaging.createSms(
    messageId = "[MESSAGE_ID]",
    content = "[CONTENT]",
    topics = listOf(),
    users = listOf(),
    targets = listOf(),
    draft = false,
    scheduledAt = "2025-02-13T22:01:00+0000"
)
`,language:"kotlin",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")       // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")       // Your secret API key

val messaging = Messaging(client)

val message - await messaging.createSms(
    messageId = "[MESSAGE_ID]",
    content = "[CONTENT]",
    topics = listOf(),
    users = listOf(),
    targets = listOf(),
    draft = false,
    scheduledAt = "2025-02-13T22:01:00+0000"
)`);r(e,n)},$$slots:{default:!0}});var w=t(u);l(w,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",              // messageId
    "[CONTENT]",                 // content
    listOf(),                    // topics (optional)
    listOf(),                    // users (optional)
    listOf(),                    // targets (optional)
    false,                       // draft (optional)
    "2025-02-13T22:01:00+0000",  // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(e,p)=>{s();var n=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",              // messageId
    "[CONTENT]",                 // content
    listOf(),                    // topics (optional)
    listOf(),                    // users (optional)
    listOf(),                    // targets (optional)
    false,                       // draft (optional)
    "2025-02-13T22:01:00+0000",  // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);r(e,n)},$$slots:{default:!0}});var C=t(w);l(C,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]",
    topics: [],                              // optional
    users: [],                               // optional
    targets: [],                             // optional
    draft: false,                            // optional
    scheduledAt: "2025-02-13T22:01:00+0000"  // optional
)
`,language:"swift",process:!0,children:(e,p)=>{s();var n=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]",
    topics: [],                              // optional
    users: [],                               // optional
    targets: [],                             // optional
    draft: false,                            // optional
    scheduledAt: "2025-02-13T22:01:00+0000"  // optional
)`);r(e,n)},$$slots:{default:!0}}),r(i,a)},$$slots:{default:!0}}),ce(Y),r(pe,Y)},$$slots:{default:!0}}))}export{Ze as component};
