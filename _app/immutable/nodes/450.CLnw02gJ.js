import{t as u,a as t,b as o}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f as c,c as L,n as s,r as N}from"../chunks/NgVQVlRK.js";import{n as K}from"../chunks/B4IyMRKX.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{M as F}from"../chunks/hMT8fFzP.js";/* empty css                */import{A as q}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as Y}from"../chunks/DXp9_3zM.js";import{F as $}from"../chunks/OFUKRh55.js";import{P as U}from"../chunks/D8YsId2T.js";import{T as z}from"../chunks/D8BqvLkQ.js";import{T as M,a as A,b as T,c as V,d as v}from"../chunks/BpU_IltG.js";import{A as B}from"../chunks/CqOphJLh.js";const H={layout:"article",title:"Labels",description:"Organize your users and grant custom permissions for subscriptions or VIP users with labels."};var Q=u("Labels are a good way to categorize a user to grant them access to resources. For example, a <!> label can be added to a user once they&#39;ve purchased a subscription.",1),W=u("<!><!><!><!><!><!><!><!><!>",1),X=u("<!><!>",1),Z=u("<!><!>",1),ee=u("<!><!>",1),re=u("<!><!>",1),te=u("<!><!>",1),ne=u("<!><!><!><!>",1),se=u("<!><!>",1),oe=u("<article><!><!><!><!><!></article>");function Ae(x){B(x,K(H,{children:(G,ae)=>{var y=oe(),k=L(y);U(k,{children:(d,g)=>{s();var l=Q(),_=n(c(l));Y(_,{content:"subscriber"}),s(),t(d,l)},$$slots:{default:!0}});var j=n(k);F(j,{children:(d,g)=>{var l=W(),_=c(l);$(_,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

const users = new sdk.Users(client);

const promise = users.updateLabels(
    '[USER_ID]',
    [ 'subscriber' ]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"server-nodejs",process:!0,children:(r,i)=>{s();var e=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

const users = new sdk.Users(client);

const promise = users.updateLabels(
    '[USER_ID]',
    [ 'subscriber' ]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);t(r,e)},$$slots:{default:!0}});var w=n(_);$(w,{content:`use Backrush\\Client;
use Backrush\\Services\\Users;
use Backrush\\Role;

$client = new Client();

$client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

$users = new Users($client);

$result = $users->updateLabels(
    '[USER_ID]', 
    [ 'subscriber' ]
);
`,language:"php",process:!0,children:(r,i)=>{s();var e=o(`use Backrush\\Client;
use Backrush\\Services\\Users;
use Backrush\\Role;

$client = new Client();

$client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

$users = new Users($client);

$result = $users->updateLabels(
    '[USER_ID]', 
    [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}});var h=n(w);$(h,{content:`from appwrite.client import Client
from appwrite.services.users import Users
from appwrite.role import Role

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('98fd4...a2ad2')                     # Your secret API key
)
 
users = Users(client)

result = users.update_labels(
    '[USER_ID]',
    [ 'subscriber' ]
);
`,language:"python",process:!0,children:(r,i)=>{s();var e=o(`from appwrite.client import Client
from appwrite.services.users import Users
from appwrite.role import Role

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('98fd4...a2ad2')                     # Your secret API key
)
 
users = Users(client)

result = users.update_labels(
    '[USER_ID]',
    [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}});var C=n(h);$(C,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('98fd4...a2ad2')                     # Your secret API key

users = Users.new(client)

response = users.update_labels(
    user_id: '[USER_ID]',
    labels: [ 'subscriber' ]
);
`,language:"ruby",process:!0,children:(r,i)=>{s();var e=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('98fd4...a2ad2')                     # Your secret API key

users = Users.new(client)

response = users.update_labels(
    user_id: '[USER_ID]',
    labels: [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}});var f=n(C);$(f,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

let client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let users = new sdk.Users(client);

const promise = users.updateLabels(
    '[USER_ID]',
    [ 'subscriber' ]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"deno",process:!0,children:(r,i)=>{s();var e=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

let client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let users = new sdk.Users(client);

const promise = users.updateLabels(
    '[USER_ID]',
    [ 'subscriber' ]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);t(r,e)},$$slots:{default:!0}});var R=n(f);$(R,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

final users = Users(client);

final result = await users.updateLabels(
    userId: '[USER_ID]',
    labels: [ 'subscriber' ],
);
`,language:"dart",process:!0,children:(r,i)=>{s();var e=o(`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

final users = Users(client);

final result = await users.updateLabels(
    userId: '[USER_ID]',
    labels: [ 'subscriber' ],
);`);t(r,e)},$$slots:{default:!0}});var I=n(R);$(I,{content:`import io.appwrite.Client
import io.appwrite.Role
import io.appwrite.services.Users

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("98fd4...a2ad2")                     // Your secret API key

val users = Users(client)

val response = users.updateLabels(
    userId = "[USER_ID]",
    labels = [ 'subscriber' ]
);
`,language:"kotlin",process:!0,children:(r,i)=>{s();var e=o(`import io.appwrite.Client
import io.appwrite.Role
import io.appwrite.services.Users

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("98fd4...a2ad2")                     // Your secret API key

val users = Users(client)

val response = users.updateLabels(
    userId = "[USER_ID]",
    labels = [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}});var P=n(I);$(P,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("98fd4...a2ad2")                     // Your secret API key

let users = Users(client)

let response = try await users.updateLabels(
    userId: "[USER_ID]",
    labels: [ 'subscriber' ]
);
`,language:"swift",process:!0,children:(r,i)=>{s();var e=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("98fd4...a2ad2")                     // Your secret API key

let users = Users(client)

let response = try await users.updateLabels(
    userId: "[USER_ID]",
    labels: [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}});var D=n(P);$(D,{content:`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                 // Your project ID
    .SetKey("98fd4...a2ad2");                    // Your secret API key

var users = new Users(client);

var response = await users.UpdateLabels(
    userId: "[USER_ID]",
    labels: [ 'subscriber' ]
);
`,language:"csharp",process:!0,children:(r,i)=>{s();var e=o(`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                 // Your project ID
    .SetKey("98fd4...a2ad2");                    // Your secret API key

var users = new Users(client);

var response = await users.UpdateLabels(
    userId: "[USER_ID]",
    labels: [ 'subscriber' ]
);`);t(r,e)},$$slots:{default:!0}}),t(d,l)},$$slots:{default:!0}});var O=n(j);U(O,{children:(d,g)=>{s();var l=o("This would correspond with the permissions below.");t(d,l)},$$slots:{default:!0}});var S=n(O);z(S,{children:(d,g)=>{var l=se(),_=c(l);M(_,{children:(h,C)=>{A(h,{children:(f,R)=>{var I=X(),P=c(I);T(P,{children:(r,i)=>{s();var e=o("Description");t(r,e)},$$slots:{default:!0}});var D=n(P);T(D,{children:(r,i)=>{s();var e=o("Code Snippet");t(r,e)},$$slots:{default:!0}}),t(f,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=n(_);V(w,{children:(h,C)=>{var f=ne(),R=c(f);A(R,{children:(r,i)=>{var e=Z(),p=c(e);v(p,{children:(a,m)=>{s();var E=o("Read");t(a,E)},$$slots:{default:!0}});var b=n(p);v(b,{children:(a,m)=>{Y(a,{content:"Permissions.read(Role.label('subscriber'))"})},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var I=n(R);A(I,{children:(r,i)=>{var e=ee(),p=c(e);v(p,{children:(a,m)=>{s();var E=o("Update");t(a,E)},$$slots:{default:!0}});var b=n(p);v(b,{children:(a,m)=>{Y(a,{content:"Permissions.update(Role.label('subscriber'))"})},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var P=n(I);A(P,{children:(r,i)=>{var e=re(),p=c(e);v(p,{children:(a,m)=>{s();var E=o("Delete");t(a,E)},$$slots:{default:!0}});var b=n(p);v(b,{children:(a,m)=>{Y(a,{content:"Permissions.delete(Role.label('subscriber'))"})},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var D=n(P);A(D,{children:(r,i)=>{var e=te(),p=c(e);v(p,{children:(a,m)=>{s();var E=o("Create");t(a,E)},$$slots:{default:!0}});var b=n(p);v(b,{children:(a,m)=>{Y(a,{content:"Permissions.create(Role.label('subscriber'))"})},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}}),t(h,f)},$$slots:{default:!0}}),t(d,l)},$$slots:{default:!0}});var J=n(S);q(J,{href:"/docs/advanced/platform/permissions",children:(d,g)=>{U(d,{children:(l,_)=>{s();var w=o("Learn more about permissions");t(l,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),N(y),t(G,y)},$$slots:{default:!0}}))}export{Ae as component};
