import{t as T,b as i,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ce,s as e,f as C,n,r as de}from"../chunks/NgVQVlRK.js";import{n as ue}from"../chunks/B4IyMRKX.js";import{H as O}from"../chunks/CXsRaEhZ.js";import{M as R}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{I as ie}from"../chunks/Dka2wNls.js";import{O as y,a as Y}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as A}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as h}from"../chunks/DXp9_3zM.js";import{F as l}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as v}from"../chunks/D8YsId2T.js";import{S as $}from"../chunks/yHjwcyUH.js";import{L as D}from"../chunks/yh4_9ChP.js";import{A as ge}from"../chunks/CqOphJLh.js";const Ie={layout:"article",title:"Send email messages",description:"Send email messages to your users using Backrush Messaging."};var Ee=T("Backrush supports <!> and <!> as SMTP providers. You must configure one of them as a provider.",1),me=T("To add a new provider navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!> and follow the wizard. You can find more details about configuring in the provider guides for <!> and <!>.",1),_e=T("In Backrush Messaging, each user has <!> like their email, phone number, and devices with your app installed. You can deliver messages to users through their <!>.",1),Pe=T("If the user signed up with email and password, their account would already have email as a target. During development, you can add targets to existing accounts by navigating to <!> &gt; <!> &gt; <!> &gt; <!> &gt; <!>.",1),we=T("You can also implement forms in your app to collect contact information and add it as a target with the <!> endpoint.",1),ve=T("<!><!><!><!><!><!><!><!><!><!>",1),fe=T("To create a topic in the Backrush Console, navigate to <!> &gt; <!> &gt; <!> <!>.",1),$e=T("You can also create topics programmatically using an <!>.",1),Te=T("<!><!><!><!><!><!><!><!><!><!>",1),Ce=T("You can send emails using a Server SDK. To send an email immediately, you can call the <!> endpoint with <!> left empty.",1),Ae=T("<!><!><!><!><!><!><!><!><!><!>",1),he=T("To send a scheduled email, you can call the <!> endpoint with <!> set to <!> and <!> as a ISO 8601 date time string for the scheduled time.",1),De=T("<!><!><!><!><!><!><!><!><!><!>",1),Oe=T("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ze(ae){ge(ae,ue(Ie,{children:(pe,Re)=>{var S=Oe(),k=ce(S);v(k,{children:(a,m)=>{n();var s=i("You can send custom email messages to your app's users using Backrush Messaging and a connected SMTP service. This guide takes you through the implementation path of adding email messaging to your app.");t(a,s)},$$slots:{default:!0}});var M=e(k);O(M,{id:"add-a-provider",level:1,children:(a,m)=>{n();var s=i("Add a provider");t(a,s)},$$slots:{default:!0}});var N=e(M);v(N,{children:(a,m)=>{n();var s=Ee(),p=e(C(s));D(p,{href:"/docs/products/messaging/mailgun/",children:(u,E)=>{n();var I=i("Mailgun");t(u,I)},$$slots:{default:!0}});var d=e(p,2);D(d,{href:"/docs/products/messaging/sendgrid/",children:(u,E)=>{n();var I=i("Sendgrid");t(u,I)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var j=e(N);y(j,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/providers/mailgun/dark/add-mailgun.png",alt:"Add a SMTP provider"})},$$slots:{default:!0}})}});var b=e(j);Y(b,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/providers/mailgun/add-mailgun.png",alt:"Add a SMTP provider"})},$$slots:{default:!0}})}});var G=e(b);v(G,{children:(a,m)=>{n();var s=me(),p=e(C(s));$(p,{marker:"**",children:(g,f)=>{n();var w=i("Messaging");t(g,w)},$$slots:{default:!0}});var d=e(p,2);$(d,{marker:"**",children:(g,f)=>{n();var w=i("Providers");t(g,w)},$$slots:{default:!0}});var u=e(d,2);ie(u,{icon:"plus",size:"m"});var E=e(u,2);$(E,{marker:"**",children:(g,f)=>{n();var w=i("Add provider");t(g,w)},$$slots:{default:!0}});var I=e(E,2);$(I,{marker:"**",children:(g,f)=>{n();var w=i("Email");t(g,w)},$$slots:{default:!0}});var _=e(I,2);D(_,{href:"/docs/products/messaging/mailgun#configure-provider",children:(g,f)=>{n();var w=i("Mailgun");t(g,w)},$$slots:{default:!0}});var P=e(_,2);D(P,{href:"/docs/products/messaging/sendgrid#configure-provider",children:(g,f)=>{n();var w=i("Sendgrid");t(g,w)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var J=e(G);O(J,{id:"add-targets",level:1,children:(a,m)=>{n();var s=i("Add targets");t(a,s)},$$slots:{default:!0}});var U=e(J);v(U,{children:(a,m)=>{n();var s=_e(),p=e(C(s));$(p,{marker:"**",children:(u,E)=>{n();var I=i("targets");t(u,I)},$$slots:{default:!0}});var d=e(p,2);$(d,{marker:"**",children:(u,E)=>{n();var I=i("targets");t(u,I)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var x=e(U);y(x,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/targets/dark/target-overview.png",alt:"Target overview"})},$$slots:{default:!0}})}});var K=e(x);Y(K,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/targets/target-overview.png",alt:"Target overview"})},$$slots:{default:!0}})}});var B=e(K);v(B,{children:(a,m)=>{n();var s=Pe(),p=e(C(s));$(p,{marker:"**",children:(_,P)=>{n();var g=i("Authentication");t(_,g)},$$slots:{default:!0}});var d=e(p,2);$(d,{marker:"**",children:(_,P)=>{n();var g=i("Users");t(_,g)},$$slots:{default:!0}});var u=e(d,2);$(u,{marker:"**",children:(_,P)=>{n();var g=i("Select a user");t(_,g)},$$slots:{default:!0}});var E=e(u,2);$(E,{marker:"**",children:(_,P)=>{n();var g=i("Targets");t(_,g)},$$slots:{default:!0}});var I=e(E,2);$(I,{marker:"**",children:(_,P)=>{n();var g=i("Add a subscriber");t(_,g)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var F=e(B);y(F,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/targets/dark/add-targets.png",alt:"Add a target"})},$$slots:{default:!0}})}});var L=e(F);Y(L,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/targets/add-targets.png",alt:"Add a target"})},$$slots:{default:!0}})}});var V=e(L);v(V,{children:(a,m)=>{n();var s=we(),p=e(C(s));D(p,{href:"/docs/references/cloud/server-nodejs/users#createTarget",children:(d,u)=>{n();var E=i("createTarget");t(d,E)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var q=e(V);R(q,{children:(a,m)=>{var s=ve(),p=C(s);l(p,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2');                  // Your secret API key

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Email, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);
`,language:"server-nodejs",process:!0,children:(r,c)=>{n();var o=i(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2');                  // Your secret API key

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Email, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);`);t(r,o)},$$slots:{default:!0}});var d=e(p);l(d,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setJWT('eyJhbVCJ9.eyJ...');                    // Your secret JSON Web Token

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Email, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);
`,language:"deno",process:!0,children:(r,c)=>{n();var o=i(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setJWT('eyJhbVCJ9.eyJ...');                    // Your secret JSON Web Token

const users = new sdk.Users(client);

const target = await users.createTarget(
    '<USER_ID>',                     // userId
    '<TARGET_ID>',                   // targetId
    sdk.MessagingProviderType.Email, // providerType
    '<IDENTIFIER>',                  // identifier
    '<PROVIDER_ID>',                 // providerId (optional)
    '<NAME>'                         // name (optional)
);`);t(r,o)},$$slots:{default:!0}});var u=e(d);l(u,{content:`<?php

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
`,language:"php",process:!0,children:(r,c)=>{n();var o=i(`<?php

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
);`);t(r,o)},$$slots:{default:!0}});var E=e(u);l(E,{content:`from appwrite.client import Client
from appwrite.enums import MessagingProviderType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

users = Users(client)

target = users.create_target(
    user_id = '<USER_ID>',
    target_id = '<TARGET_ID>',
    provider_type = MessagingProviderType.EMAIL,
    identifier = '<IDENTIFIER>',
    provider_id = '<PROVIDER_ID>', # optional
    name = '<NAME>' # optional
)
`,language:"python",process:!0,children:(r,c)=>{n();var o=i(`from appwrite.client import Client
from appwrite.enums import MessagingProviderType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<PROJECT_ID>')                 # Your project ID
client.set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

users = Users(client)

target = users.create_target(
    user_id = '<USER_ID>',
    target_id = '<TARGET_ID>',
    provider_type = MessagingProviderType.EMAIL,
    identifier = '<IDENTIFIER>',
    provider_id = '<PROVIDER_ID>', # optional
    name = '<NAME>' # optional
)`);t(r,o)},$$slots:{default:!0}});var I=e(E);l(I,{content:`require 'appwrite'

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
`,language:"ruby",process:!0,children:(r,c)=>{n();var o=i(`require 'appwrite'

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

puts target.inspect`);t(r,o)},$$slots:{default:!0}});var _=e(I);l(_,{content:`using Backrush;
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
    providerType: MessagingProviderType.Email,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>",  // optional
    name: "<NAME>"                // optional
);
`,language:"csharp",process:!0,children:(r,c)=>{n();var o=i(`using Backrush;
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
    providerType: MessagingProviderType.Email,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>",  // optional
    name: "<NAME>"                // optional
);`);t(r,o)},$$slots:{default:!0}});var P=e(_);l(P,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
  .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
  .setProject('<PROJECT_ID>')                  // Your project ID
  .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Users users = Users(client);

final target = await users.createTarget(
  userId: '<USER_ID>',
  targetId: '<TARGET_ID>',
  providerType:  MessagingProviderType.email,
  identifier: '<IDENTIFIER>',
  providerId: '<PROVIDER_ID>',  // (optional)
  name: '<NAME>',               // (optional)
);

`,language:"dart",process:!0,children:(r,c)=>{n();var o=i(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

Client client = Client()
  .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
  .setProject('<PROJECT_ID>')                  // Your project ID
  .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

Users users = Users(client);

final target = await users.createTarget(
  userId: '<USER_ID>',
  targetId: '<TARGET_ID>',
  providerType:  MessagingProviderType.email,
  identifier: '<IDENTIFIER>',
  providerId: '<PROVIDER_ID>',  // (optional)
  name: '<NAME>',               // (optional)
);`);t(r,o)},$$slots:{default:!0}});var g=e(P);l(g,{content:`import io.appwrite.Client
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
    providerType =  MessagingProviderType.EMAIL,
    identifier = "<IDENTIFIER>",
    providerId = "<PROVIDER_ID>",   // optional
    name = "<NAME>"                 // optional
)

`,language:"kotlin",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client
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
    providerType =  MessagingProviderType.EMAIL,
    identifier = "<IDENTIFIER>",
    providerId = "<PROVIDER_ID>",   // optional
    name = "<NAME>"                 // optional
)`);t(r,o)},$$slots:{default:!0}});var f=e(g);l(f,{content:`import io.appwrite.Client;
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
    MessagingProviderType.EMAIL,    // providerType
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
`,language:"java",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
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
    MessagingProviderType.EMAIL,    // providerType
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
);`);t(r,o)},$$slots:{default:!0}});var w=e(f);l(w,{content:`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let users = Users(client)

let target = try await users.createTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: .email,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>", // optional
    name: "<NAME>"               // optional
)
`,language:"swift",process:!0,children:(r,c)=>{n();var o=i(`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let users = Users(client)

let target = try await users.createTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>",
    providerType: .email,
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>", // optional
    name: "<NAME>"               // optional
)`);t(r,o)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var z=e(q);O(z,{id:"create-topics",level:1,children:(a,m)=>{n();var s=i("Create topics (optional)");t(a,s)},$$slots:{default:!0}});var W=e(z);v(W,{children:(a,m)=>{n();var s=i("You can use topics to organize targets that should receive the same messages, so you can send emails to groups of targets instead of one at time. This step is optional if you plan to only send emails to individual targets.");t(a,s)},$$slots:{default:!0}});var H=e(W);v(H,{children:(a,m)=>{n();var s=fe(),p=e(C(s));$(p,{marker:"**",children:(I,_)=>{n();var P=i("Messaging");t(I,P)},$$slots:{default:!0}});var d=e(p,2);$(d,{marker:"**",children:(I,_)=>{n();var P=i("Topics");t(I,P)},$$slots:{default:!0}});var u=e(d,2);ie(u,{icon:"plus",size:"m"});var E=e(u,2);$(E,{marker:"**",children:(I,_)=>{n();var P=i("Create topic");t(I,P)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var Q=e(H);y(Q,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/topics/dark/create-topics.png",alt:"Add a target"})},$$slots:{default:!0}})}});var X=e(Q);Y(X,{children:(a,m)=>{v(a,{children:(s,p)=>{A(s,{src:"/images/docs/messaging/topics/create-topics.png",alt:"Add a target"})},$$slots:{default:!0}})}});var Z=e(X);v(Z,{children:(a,m)=>{n();var s=$e(),p=e(C(s));D(p,{href:"/docs/references/cloud/server-nodejs/messaging#createTopic",children:(d,u)=>{n();var E=i("Backrush Server SDK");t(d,E)},$$slots:{default:!0}}),n(),t(a,s)},$$slots:{default:!0}});var ee=e(Z);R(ee,{children:(a,m)=>{var s=Te(),p=C(s);l(p,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const topic = await messaging.createTopic(
        '[TOPIC_ID]',                            // topicId
        '[NAME]'                                 // name
    );
`,language:"server-nodejs",process:!0,children:(r,c)=>{n();var o=i(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const topic = await messaging.createTopic(
        '[TOPIC_ID]',                            // topicId
        '[NAME]'                                 // name
    );`);t(r,o)},$$slots:{default:!0}});var d=e(p);l(d,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const topic = await messaging.createTopic(
        '[TOPIC_ID]',                            // topicId
        '[NAME]'                                 // name
    );
`,language:"deno",process:!0,children:(r,c)=>{n();var o=i(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const topic = await messaging.createTopic(
        '[TOPIC_ID]',                            // topicId
        '[NAME]'                                 // name
    );`);t(r,o)},$$slots:{default:!0}});var u=e(d);l(u,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]'
);
`,language:"php",process:!0,children:(r,c)=>{n();var o=i(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]'
);`);t(r,o)},$$slots:{default:!0}});var E=e(u);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_topic(
    topic_id = '[TOPIC_ID]',
    name = '[NAME]'
)
`,language:"python",process:!0,children:(r,c)=>{n();var o=i(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_topic(
    topic_id = '[TOPIC_ID]',
    name = '[NAME]'
)`);t(r,o)},$$slots:{default:!0}});var I=e(E);l(I,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_topic(
    topic_id: '[TOPIC_ID]',
    name: '[NAME]'
)

puts response.inspect
`,language:"ruby",process:!0,children:(r,c)=>{n();var o=i(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_topic(
    topic_id: '[TOPIC_ID]',
    name: '[NAME]'
)

puts response.inspect`);t(r,o)},$$slots:{default:!0}});var _=e(I);l(_,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Topic result = await messaging.CreateTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]");
`,language:"csharp",process:!0,children:(r,c)=>{n();var o=i(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Topic result = await messaging.CreateTopic(
    topicId: "[TOPIC_ID]",
    name: "[NAME]");`);t(r,o)},$$slots:{default:!0}});var P=e(_);l(P,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                                 // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(r,c)=>{n();var o=i(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                                 // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.createTopic(
    topicId: '[TOPIC_ID]',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(r,o)},$$slots:{default:!0}});var g=e(P);l(g,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",                                 // topicId
    "[NAME]"                                      // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",                                 // topicId
    "[NAME]"                                      // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var f=e(g);l(f,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",                                 // topicId
    "[NAME]"                                      // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createTopic(
    "[TOPIC_ID]",                                 // topicId
    "[NAME]"                                      // name
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var w=e(f);l(w,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let topic = try await messaging.createTopic(
  topicId: "[TOPIC_ID]",
  name: "[NAME]"
)
`,language:"swift",process:!0,children:(r,c)=>{n();var o=i(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let topic = try await messaging.createTopic(
  topicId: "[TOPIC_ID]",
  name: "[NAME]"
)`);t(r,o)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var ne=e(ee);O(ne,{id:"send-emails",level:1,children:(a,m)=>{n();var s=i("Send emails");t(a,s)},$$slots:{default:!0}});var te=e(ne);v(te,{children:(a,m)=>{n();var s=Ce(),p=e(C(s));h(p,{content:"createEmail"});var d=e(p,2);h(d,{content:"schedule"}),n(),t(a,s)},$$slots:{default:!0}});var re=e(te);R(re,{children:(a,m)=>{var s=Ae(),p=C(s);l(p,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        [],                                      // attachments (optional)
        false,                                   // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(r,c)=>{n();var o=i(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        [],                                      // attachments (optional)
        false,                                   // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );`);t(r,o)},$$slots:{default:!0}});var d=e(p);l(d,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        [],                                      // attachments (optional)
        false,                                   // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(r,c)=>{n();var o=i(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        [],                                      // attachments (optional)
        false,                                   // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );`);t(r,o)},$$slots:{default:!0}});var u=e(d);l(u,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    cc: [],                                       // optional
    bcc: [],                                      // optional
    draft: false,                                 // optional
    html: false,                                  // optional
    scheduledAt: ''                               // optional
);
`,language:"php",process:!0,children:(r,c)=>{n();var o=i(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    cc: [],                                       // optional
    bcc: [],                                      // optional
    draft: false,                                 // optional
    html: false,                                  // optional
    scheduledAt: ''                               // optional
);`);t(r,o)},$$slots:{default:!0}});var E=e(u);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email(
    message_id = '[MESSAGE_ID]',
    subject = '[SUBJECT]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    cc = [],                                    # optional
    bcc = [],                                   # optional
    draft = False,                              # optional
    html = False,                               # optional
    scheduled_at = ''                           # optional
)
`,language:"python",process:!0,children:(r,c)=>{n();var o=i(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email(
    message_id = '[MESSAGE_ID]',
    subject = '[SUBJECT]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    cc = [],                                    # optional
    bcc = [],                                   # optional
    draft = False,                              # optional
    html = False,                               # optional
    scheduled_at = ''                           # optional
)`);t(r,o)},$$slots:{default:!0}});var I=e(E);l(I,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    cc: [],                                       # optional
    bcc: [],                                      # optional
    draft: false,                                 # optional
    html: false,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(r,c)=>{n();var o=i(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    cc: [],                                       # optional
    bcc: [],                                      # optional
    draft: false,                                 # optional
    html: false,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect`);t(r,o)},$$slots:{default:!0}});var _=e(I);l(_,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"    
    topics: new List<string> {}                   // optional    
    users: new List<string> {}                    // optional    
    targets: new List<string> {}                  // optional    
    cc: new List<string> {}                       // optional    
    bcc: new List<string> {}                      // optional    
    draft: false                                  // optional    
    html: false                                   // optional    
    scheduledAt: "");                             // optional
`,language:"csharp",process:!0,children:(r,c)=>{n();var o=i(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"    
    topics: new List<string> {}                   // optional    
    users: new List<string> {}                    // optional    
    targets: new List<string> {}                  // optional    
    cc: new List<string> {}                       // optional    
    bcc: new List<string> {}                      // optional    
    draft: false                                  // optional    
    html: false                                   // optional    
    scheduledAt: "");                             // optional`);t(r,o)},$$slots:{default:!0}});var P=e(_);l(P,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    cc: [],                                      // optional
    bcc: [],                                     // optional
    draft: false,                                // optional
    html: false,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(r,c)=>{n();var o=i(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    cc: [],                                      // optional
    bcc: [],                                     // optional
    draft: false,                                // optional
    html: false,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(r,o)},$$slots:{default:!0}});var g=e(P);l(g,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    false,                                        // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    false,                                        // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var f=e(g);l(f,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",   // messageId
    "[SUBJECT]",      // subject
    "[CONTENT]",      // content
    listOf(),         // topics (optional)
    listOf(),         // users (optional)
    listOf(),         // targets (optional)
    listOf(),         // cc (optional)
    listOf(),         // bcc (optional)
    false,            // draft (optional)
    false,            // html (optional)
    ""                // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",   // messageId
    "[SUBJECT]",      // subject
    "[CONTENT]",      // content
    listOf(),         // topics (optional)
    listOf(),         // users (optional)
    listOf(),         // targets (optional)
    listOf(),         // cc (optional)
    listOf(),         // bcc (optional)
    false,            // draft (optional)
    false,            // html (optional)
    ""                // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var w=e(f);l(w,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  cc: [],                                        // optional
  bcc: [],                                       // optional
  draft: false,                                  // optional
  html: xfalse,                                  // optional
  scheduledAt: ""                                // optional
)
`,language:"swift",process:!0,children:(r,c)=>{n();var o=i(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  cc: [],                                        // optional
  bcc: [],                                       // optional
  draft: false,                                  // optional
  html: xfalse,                                  // optional
  scheduledAt: ""                                // optional
)`);t(r,o)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var oe=e(re);O(oe,{id:"schedule-emails",level:1,children:(a,m)=>{n();var s=i("Schedule emails");t(a,s)},$$slots:{default:!0}});var se=e(oe);v(se,{children:(a,m)=>{n();var s=he(),p=e(C(s));h(p,{content:"createEmail"});var d=e(p,2);h(d,{content:"status"});var u=e(d,2);h(u,{content:"'scheduled'"});var E=e(u,2);h(E,{content:"schedule"}),n(),t(a,s)},$$slots:{default:!0}});var le=e(se);R(le,{children:(a,m)=>{var s=De(),p=C(s);l(p,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',            // messageId
        '[SUBJECT]',               // subject
        '[CONTENT]',               // content
        [],                        // topics (optional)
        [],                        // users (optional)
        [],                        // targets (optional)
        [],                        // cc (optional)
        [],                        // bcc (optional)
        false,                     // draft (optional)
        false,                     // html (optional)
        '2025-02-13T22:01:00+0000' // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(r,c)=>{n();var o=i(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createEmail(
        '[MESSAGE_ID]',            // messageId
        '[SUBJECT]',               // subject
        '[CONTENT]',               // content
        [],                        // topics (optional)
        [],                        // users (optional)
        [],                        // targets (optional)
        [],                        // cc (optional)
        [],                        // bcc (optional)
        false,                     // draft (optional)
        false,                     // html (optional)
        '2025-02-13T22:01:00+0000' // scheduledAt (optional)
    );`);t(r,o)},$$slots:{default:!0}});var d=e(p);l(d,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',            // messageId
        '[SUBJECT]',               // subject
        '[CONTENT]',               // content
        [],                        // topics (optional)
        [],                        // users (optional)
        [],                        // targets (optional)
        [],                        // cc (optional)
        [],                        // bcc (optional)
        false,                     // draft (optional)
        false,                     // html (optional)
        '2025-02-13T22:01:00+0000' // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(r,c)=>{n();var o=i(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',            // messageId
        '[SUBJECT]',               // subject
        '[CONTENT]',               // content
        [],                        // topics (optional)
        [],                        // users (optional)
        [],                        // targets (optional)
        [],                        // cc (optional)
        [],                        // bcc (optional)
        false,                     // draft (optional)
        false,                     // html (optional)
        '2025-02-13T22:01:00+0000' // scheduledAt (optional)
    );`);t(r,o)},$$slots:{default:!0}});var u=e(d);l(u,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2')  // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail( 
    messageId: '[MESSAGE_ID]', 
    subject: '[SUBJECT]', 
    content: '[CONTENT]', 
    topics: [],       // optional
    users: [],        // optional
    targets: [],      // optional
    cc: [],           // optional
    bcc: [],          // optional
    draft: false,     // optional
    html: false,      // optional
    scheduledAt: '2025-02-13T22:01:00+0000'
);
`,language:"php",process:!0,children:(r,c)=>{n();var o=i(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2')  // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail( 
    messageId: '[MESSAGE_ID]', 
    subject: '[SUBJECT]', 
    content: '[CONTENT]', 
    topics: [],       // optional
    users: [],        // optional
    targets: [],      // optional
    cc: [],           // optional
    bcc: [],          // optional
    draft: false,     // optional
    html: false,      // optional
    scheduledAt: '2025-02-13T22:01:00+0000'
);`);t(r,o)},$$slots:{default:!0}});var E=e(u);l(E,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email( 
    message_id = '[MESSAGE_ID]', 
    subject = '[SUBJECT]', 
    content = '[CONTENT]', 
    topics = [],                # optional
    users = [],                 # optional
    targets = [],               # optional
    cc = [],                    # optional
    bcc = [],                   # optional
    draft = False,              # optional
    html = False,               # optional
    scheduled_at = '2025-02-13T22:01:00+0000'
)
`,language:"python",process:!0,children:(r,c)=>{n();var o=i(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email( 
    message_id = '[MESSAGE_ID]', 
    subject = '[SUBJECT]', 
    content = '[CONTENT]', 
    topics = [],                # optional
    users = [],                 # optional
    targets = [],               # optional
    cc = [],                    # optional
    bcc = [],                   # optional
    draft = False,              # optional
    html = False,               # optional
    scheduled_at = '2025-02-13T22:01:00+0000'
)`);t(r,o)},$$slots:{default:!0}});var I=e(E);l(I,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]', 
    subject: '[SUBJECT]', 
    content: '[CONTENT]', 
    topics: [],        # optional
    users: [],         # optional
    targets: [],       # optional
    cc: [],            # optional
    bcc: [],           # optional
    draft: false,      # optional
    html: false,       # optional
    scheduled_at: '2025-02-13T22:01:00+0000'    
)

puts response.inspect
`,language:"ruby",process:!0,children:(r,c)=>{n();var o=i(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]', 
    subject: '[SUBJECT]', 
    content: '[CONTENT]', 
    topics: [],        # optional
    users: [],         # optional
    targets: [],       # optional
    cc: [],            # optional
    bcc: [],           # optional
    draft: false,      # optional
    html: false,       # optional
    scheduled_at: '2025-02-13T22:01:00+0000'    
)

puts response.inspect`);t(r,o)},$$slots:{default:!0}});var _=e(I);l(_,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                 // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");// Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"    
    topics: new List<string> {}    // optional    
    users: new List<string> {}     // optional    
    targets: new List<string> {}   // optional    
    cc: new List<string> {}        // optional    
    bcc: new List<string> {}       // optional    
    draft: false                   // optional    
    html: false                    // optional    
    scheduledAt: "2025-02-13T22:01:00+0000");     // optional
`,language:"csharp",process:!0,children:(r,c)=>{n();var o=i(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                 // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");// Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"    
    topics: new List<string> {}    // optional    
    users: new List<string> {}     // optional    
    targets: new List<string> {}   // optional    
    cc: new List<string> {}        // optional    
    bcc: new List<string> {}       // optional    
    draft: false                   // optional    
    html: false                    // optional    
    scheduledAt: "2025-02-13T22:01:00+0000");     // optional`);t(r,o)},$$slots:{default:!0}});var P=e(_);l(P,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                          // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    cc: [],             // optional
    bcc: [],            // optional
    draft: false,       // optional
    html: false,        // optional
    scheduledAt: '2025-02-13T22:01:00+0000',     
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(r,c)=>{n();var o=i(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                          // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    cc: [],             // optional
    bcc: [],            // optional
    draft: false,       // optional
    html: false,        // optional
    scheduledAt: '2025-02-13T22:01:00+0000',     
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(r,o)},$$slots:{default:!0}});var g=e(P);l(g,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");      // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",  // messageId
    "[SUBJECT]",     // subject
    "[CONTENT]",     // content
    listOf(),        // topics (optional)
    listOf(),        // users (optional)
    listOf(),        // targets (optional)
    listOf(),        // cc (optional)
    listOf(),        // bcc (optional)
    false,           // draft (optional)
    false,           // html (optional)
    "2025-02-13T22:01:00+0000"      // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                       // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");      // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",  // messageId
    "[SUBJECT]",     // subject
    "[CONTENT]",     // content
    listOf(),        // topics (optional)
    listOf(),        // users (optional)
    listOf(),        // targets (optional)
    listOf(),        // cc (optional)
    listOf(),        // bcc (optional)
    false,           // draft (optional)
    false,           // html (optional)
    "2025-02-13T22:01:00+0000"      // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var f=e(g);l(f,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");// Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",    // messageId
    "[SUBJECT]",       // subject
    "[CONTENT]",       // content
    listOf(),          // topics (optional)
    listOf(),          // users (optional)
    listOf(),          // targets (optional)
    listOf(),          // cc (optional)
    listOf(),          // bcc (optional)
    false,             // draft (optional)
    false,             // html (optional)
    "2025-02-13T22:01:00+0000"                         
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(r,c)=>{n();var o=i(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");// Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",    // messageId
    "[SUBJECT]",       // subject
    "[CONTENT]",       // content
    listOf(),          // topics (optional)
    listOf(),          // users (optional)
    listOf(),          // targets (optional)
    listOf(),          // cc (optional)
    listOf(),          // bcc (optional)
    false,             // draft (optional)
    false,             // html (optional)
    "2025-02-13T22:01:00+0000"                         
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(r,o)},$$slots:{default:!0}});var w=e(f);l(w,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],           // optional
  users: [],            // optional
  targets: [],          // optional
  cc: [],               // optional
  bcc: [],              // optional
  draft: false,         // optional
  html: xfalse,         // optional
  scheduledAt: "2025-02-13T22:01:00+0000"   
)
`,language:"swift",process:!0,children:(r,c)=>{n();var o=i(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],           // optional
  users: [],            // optional
  targets: [],          // optional
  cc: [],               // optional
  bcc: [],              // optional
  draft: false,         // optional
  html: xfalse,         // optional
  scheduledAt: "2025-02-13T22:01:00+0000"   
)`);t(r,o)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}}),de(S),t(pe,S)},$$slots:{default:!0}}))}export{Ze as component};
