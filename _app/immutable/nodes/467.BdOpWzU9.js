import{t as E,b as s,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f as _,c as R,n as e,r as x}from"../chunks/NgVQVlRK.js";import{n as K}from"../chunks/B4IyMRKX.js";import{H as k}from"../chunks/CXsRaEhZ.js";import{M}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as c}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P}from"../chunks/D8YsId2T.js";import{S}from"../chunks/yHjwcyUH.js";import{L as v}from"../chunks/yh4_9ChP.js";import{A as B}from"../chunks/CqOphJLh.js";const G={layout:"article",title:"Databases",description:"Dive deeper into Backrush Databases and their configuration. Learn how to create, manage, and optimize multiple databases for your application."};var J=E("Databases are the largest organizational unit in Backrush. Each database contains a group of <!>. In future versions, different databases may be backed by a different database technology of your choosing.",1),q=E("The easiest way to create a database using the Backrush Console. You can create a database by navigating to the <!> page and clicking <!>.",1),F=E("You can programmatically create databases using a <!>. Backrush <!> require an <!>.",1),L=E("<!><!><!><!><!><!><!><!><!><!>",1),z=E("<article><!><!><!><!><!><!></article>");function Ae(T){B(T,K(G,{children:(j,H)=>{var $=z(),m=R($);P(m,{children:(p,D)=>{e();var o=J(),d=n(_(o));v(d,{href:"/docs/products/databases/collections",children:(l,u)=>{e();var i=s("collections");t(l,i)},$$slots:{default:!0}}),e(),t(p,o)},$$slots:{default:!0}});var w=n(m);k(w,{id:"create-in-console",level:1,children:(p,D)=>{e();var o=s("Create in Console");t(p,o)},$$slots:{default:!0}});var f=n(w);P(f,{children:(p,D)=>{e();var o=q(),d=n(_(o));S(d,{marker:"**",children:(u,i)=>{e();var A=s("Databases");t(u,A)},$$slots:{default:!0}});var l=n(d,2);S(l,{marker:"**",children:(u,i)=>{e();var A=s("Create database");t(u,A)},$$slots:{default:!0}}),e(),t(p,o)},$$slots:{default:!0}});var h=n(f);k(h,{id:"create-using-server-sdks",level:1,children:(p,D)=>{e();var o=s("Create using Server SDKs");t(p,o)},$$slots:{default:!0}});var C=n(h);P(C,{children:(p,D)=>{e();var o=F(),d=n(_(o));v(d,{href:"/docs/sdks#server",children:(i,A)=>{e();var b=s("Server SDK");t(i,b)},$$slots:{default:!0}});var l=n(d,2);v(l,{href:"/docs/sdks#server",children:(i,A)=>{e();var b=s("Server SDKs");t(i,b)},$$slots:{default:!0}});var u=n(l,2);v(u,{href:"/docs/advanced/platform/api-keys",children:(i,A)=>{e();var b=s("API key");t(i,b)},$$slots:{default:!0}}),e(),t(p,o)},$$slots:{default:!0}});var N=n(C);M(N,{children:(p,D)=>{var o=L(),d=_(o);c(d,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = databases.create('<DATABASE_ID>', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"server-nodejs",process:!0,children:(a,I)=>{e();var r=s(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = databases.create('<DATABASE_ID>', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);t(a,r)},$$slots:{default:!0}});var l=n(d);c(l,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.create('<DATABASE_ID>', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"deno",process:!0,children:(a,I)=>{e();var r=s(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.create('<DATABASE_ID>', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);t(a,r)},$$slots:{default:!0}});var u=n(l);c(u,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Databases;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$databases = new Databases($client);

$result = $databases->create('<DATABASE_ID>', '[NAME]');
`,language:"php",process:!0,children:(a,I)=>{e();var r=s(`<?php

use Backrush\\Client;
use Backrush\\Services\\Databases;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$databases = new Databases($client);

$result = $databases->create('<DATABASE_ID>', '[NAME]');`);t(a,r)},$$slots:{default:!0}});var i=n(u);c(i,{content:`from appwrite.client import Client
from appwrite.services.databases import Databases

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>') # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

databases = Databases(client)

result = databases.create('<DATABASE_ID>', '[NAME]')
`,language:"python",process:!0,children:(a,I)=>{e();var r=s(`from appwrite.client import Client
from appwrite.services.databases import Databases

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>') # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

databases = Databases(client)

result = databases.create('<DATABASE_ID>', '[NAME]')`);t(a,r)},$$slots:{default:!0}});var A=n(i);c(A,{content:`require 'Backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

databases = Databases.new(client)

response = databases.create(database_id: '<DATABASE_ID>', name: '[NAME]')

puts response.inspect
`,language:"ruby",process:!0,children:(a,I)=>{e();var r=s(`require 'Backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

databases = Databases.new(client)

response = databases.create(database_id: '<DATABASE_ID>', name: '[NAME]')

puts response.inspect`);t(a,r)},$$slots:{default:!0}});var b=n(A);c(b,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var databases = new Databases(client);

Database result = await databases.Create(
    databaseId: "<DATABASE_ID>",
    name: "[NAME]");
`,language:"csharp",process:!0,children:(a,I)=>{e();var r=s(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var databases = new Databases(client);

Database result = await databases.Create(
    databaseId: "<DATABASE_ID>",
    name: "[NAME]");`);t(a,r)},$$slots:{default:!0}});var Y=n(b);c(Y,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Databases databases = Databases(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = databases.create(
    databaseId: '<DATABASE_ID>',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(a,I)=>{e();var r=s(`import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Databases databases = Databases(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = databases.create(
    databaseId: '<DATABASE_ID>',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(a,r)},$$slots:{default:!0}});var g=n(Y);c(g,{content:`import io.appwrite.Client
import io.appwrite.services.Databases

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val databases = Databases(client)

val response = databases.create(
    databaseId = "<DATABASE_ID>",
    name = "[NAME]",
)
`,language:"kotlin",process:!0,children:(a,I)=>{e();var r=s(`import io.appwrite.Client
import io.appwrite.services.Databases

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val databases = Databases(client)

val response = databases.create(
    databaseId = "<DATABASE_ID>",
    name = "[NAME]",
)`);t(a,r)},$$slots:{default:!0}});var y=n(g);c(y,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Databases;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Databases databases = new Databases(client);

databases.create(
    "<DATABASE_ID>",
    "[NAME]",
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(a,I)=>{e();var r=s(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Databases;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Databases databases = new Databases(client);

databases.create(
    "<DATABASE_ID>",
    "[NAME]",
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var O=n(y);c(O,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let databases = Databases(client)

let database = try await databases.create(
    databaseId: "<DATABASE_ID>",
    name: "[NAME]"
)
`,language:"swift",process:!0,children:(a,I)=>{e();var r=s(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let databases = Databases(client)

let database = try await databases.create(
    databaseId: "<DATABASE_ID>",
    name: "[NAME]"
)`);t(a,r)},$$slots:{default:!0}}),t(p,o)},$$slots:{default:!0}}),x($),t(j,$)},$$slots:{default:!0}}))}export{Ae as component};
