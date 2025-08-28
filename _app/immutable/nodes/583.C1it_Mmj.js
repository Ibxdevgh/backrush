import{t as u,b as s,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as At,s as r,f as h,n as e,r as Yt}from"../chunks/NgVQVlRK.js";import{n as Ct}from"../chunks/B4IyMRKX.js";import{S as ot}from"../chunks/B6JyFckC.js";import{M as st}from"../chunks/hMT8fFzP.js";import{I as kt}from"../chunks/BypEz2Fd.js";import{T as vt,a as B}from"../chunks/BHbEtIoO.js";import{C as ht,a as x}from"../chunks/rEuJ3T1U.js";import{O as nt,a as lt}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as V}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as ft}from"../chunks/DXp9_3zM.js";import{F as D}from"../chunks/OFUKRh55.js";import{H as it}from"../chunks/CXsRaEhZ.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as a}from"../chunks/D8YsId2T.js";import{S as F}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import{T as Pt}from"../chunks/D8BqvLkQ.js";import{T as It,a as at,b as X,c as wt,d as Z}from"../chunks/BpU_IltG.js";import{A as Ot}from"../chunks/CqOphJLh.js";const Rt={layout:"article",title:"Quick start",description:"Configure the Backrush SDKs and take the necessary steps to start using Backrush."};var xt=u("If you&#39;re creating a <!> used by end-users that will register and create accounts, install a <!> and follow steps for Client APIs.",1),jt=u("If you&#39;re create a server application, like a <!>, install a <!> and follow steps for Server APIs.",1),Dt=u("If you&#39;re creating a <!> web app, install a <!> and follow steps for SSR.",1),Tt=u("<!><!><!><!>",1),St=u("Head to the <!>.",1),Jt=u("Under <!>, add a platform for <!> web, mobile, and native app you plan to create. This means, a different platform for each web app hosted under a different domain, and a different platform for each mobile or native app that use a different package ID.",1),yt=u("<!><!><!><!>",1),bt=u("Under <!>, add an <!>.",1),Nt=u("<!><!><!><!>",1),Gt=u("Under <!>, add an <!> with the following scopes.",1),Kt=u("<!><!><!>",1),qt=u("<!><!><!>",1),Wt=u("<!><!>",1),Ut=u("<!><!><!><!>",1),zt=u("<!><!><!>",1),Lt=u("<!><!><!><!><!><!>",1),Ft=u("<!><!><!><!>",1),Ht=u("<!><!>",1),Qt=u("<!><!><!><!><!><!><!><!><!><!>",1),Mt=u("<!><!>",1),Vt=u("Admin clients should only be used if you need to perform admin actions that bypass permissions or <!>.",1),Bt=u("To initialize the admin client, we&#39;ll need to first <!>. The API key should have the following scope in order to perform authentication:",1),Xt=u("<!><!><!>",1),Zt=u("<!><!><!>",1),te=u("<!><!>",1),ee=u("<!><!>",1),re=u("It is important to use an API key, as this will allow your server requests to bypass <!>. If you don&#39;t use an API key, your server will be rate limited as if it were a client from a single IP address.",1),oe=u("You should create a new client for each request and <!> share the client between requests.",1),se=u("<!><!>",1),ne=u("<!><!><!><!><!><!><!><!><!><!><!>",1),le=u("<!><!><!><!>",1),ie=u("If you&#39;re using Backrush without an SDK, follow the guides for the <!> or <!>.",1),ae=u("<!><!><!>",1),de=u("<!><!><!><!><!><!><!><!><!><!>",1),pe=u("<!><!><!><!><!><!><!><!><!><!>",1),ce=u("<!><!><!><!><!><!><!>",1),$e=u("<article><!><!><!><!><!></article>");function We(mt){Ot(mt,Ct(Rt,{children:(Et,ue)=>{var dt=$e(),ct=At(dt);a(ct,{children:(H,rt)=>{e();var G=s("Follow these steps before you begin using the Backrush SDKs or accessing Backrush through the REST and GraphQL API.");t(H,G)},$$slots:{default:!0}});var $t=r(ct);ot($t,{id:"select-the-right-API",step:1,title:"Select the right API",children:(H,rt)=>{var G=Tt(),q=h(G);a(q,{children:(S,J)=>{e();var w=s("Backrush has two types of APIs for different use cases, select one or both depending on your use case.");t(S,w)},$$slots:{default:!0}});var W=r(q);a(W,{children:(S,J)=>{e();var w=xt(),f=r(h(w));F(f,{marker:"**",children:($,m)=>{e();var A=s("web, mobile, or native application");t($,A)},$$slots:{default:!0}});var P=r(f,2);M(P,{href:"/docs/sdks#client",children:($,m)=>{e();var A=s("Client SDK");t($,A)},$$slots:{default:!0}}),e(),t(S,w)},$$slots:{default:!0}});var L=r(W);a(L,{children:(S,J)=>{e();var w=jt(),f=r(h(w));F(f,{marker:"**",children:($,m)=>{e();var A=s("backend, admin app, or a CLI tool");t($,A)},$$slots:{default:!0}});var P=r(f,2);M(P,{href:"/docs/sdks#server",children:($,m)=>{e();var A=s("Server SDK");t($,A)},$$slots:{default:!0}}),e(),t(S,w)},$$slots:{default:!0}});var K=r(L);a(K,{children:(S,J)=>{e();var w=Dt(),f=r(h(w));F(f,{marker:"**",children:($,m)=>{e();var A=s("Server-side Rendered (SSR)");t($,A)},$$slots:{default:!0}});var P=r(f,2);M(P,{href:"/docs/sdks#server",children:($,m)=>{e();var A=s("Server SDK");t($,A)},$$slots:{default:!0}}),e(),t(S,w)},$$slots:{default:!0}}),t(H,G)},$$slots:{default:!0}});var ut=r($t);ot(ut,{id:"configure-project",step:2,title:"Configure project",children:(H,rt)=>{var G=Lt(),q=h(G);a(q,{children:(w,f)=>{e();var P=St(),$=r(h(P));M($,{href:"https://cloud.appwrite.io/console",children:(m,A)=>{e();var Y=s("Backrush Console");t(m,Y)},$$slots:{default:!0}}),e(),t(w,P)},$$slots:{default:!0}});var W=r(q);a(W,{children:(w,f)=>{e();var P=s("If this is your first time using Backrush, create an account and create your first project.");t(w,P)},$$slots:{default:!0}});var L=r(W);nt(L,{children:(w,f)=>{a(w,{children:(P,$)=>{V(P,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var K=r(L);lt(K,{children:(w,f)=>{a(w,{children:(P,$)=>{V(P,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var S=r(K);a(S,{children:(w,f)=>{e();var P=s("Then, configure your project depending on use case. You can follow all three flows to enable all three use cases.");t(w,P)},$$slots:{default:!0}});var J=r(S);vt(J,{children:(w,f)=>{var P=zt(),$=h(P);B($,{id:"client",title:"Client",children:(Y,T)=>{var C=yt(),g=h(C);a(g,{children:(_,l)=>{e();var i=Jt(),n=r(h(i));F(n,{marker:"**",children:(o,O)=>{e();var d=s("Add a platform");t(o,d)},$$slots:{default:!0}});var v=r(n,2);F(v,{marker:"**",children:(o,O)=>{e();var d=s("each");t(o,d)},$$slots:{default:!0}}),e(),t(_,i)},$$slots:{default:!0}});var k=r(g);nt(k,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var E=r(k);lt(E,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var R=r(E);a(R,{children:(_,l)=>{e();var i=s("You can skip optional steps.");t(_,i)},$$slots:{default:!0}}),t(Y,C)},$$slots:{default:!0}});var m=r($);B(m,{id:"server",title:"Server",children:(Y,T)=>{var C=Nt(),g=h(C);a(g,{children:(_,l)=>{e();var i=bt(),n=r(h(i));F(n,{marker:"**",children:(o,O)=>{e();var d=s("Integrate with your server");t(o,d)},$$slots:{default:!0}});var v=r(n,2);F(v,{marker:"**",children:(o,O)=>{e();var d=s("API Key");t(o,d)},$$slots:{default:!0}}),e(),t(_,i)},$$slots:{default:!0}});var k=r(g);nt(k,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/dark/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var E=r(k);lt(E,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var R=r(E);a(R,{children:(_,l)=>{e();var i=s("Enable the scopes for the Backrush products you plan to use for your app. It's a good idea to only grant scopes that you need, and edit the API keys as your needs change for security.");t(_,i)},$$slots:{default:!0}}),t(Y,C)},$$slots:{default:!0}});var A=r(m);B(A,{id:"ssr",title:"SSR",children:(Y,T)=>{var C=Ut(),g=h(C);a(g,{children:(_,l)=>{e();var i=Gt(),n=r(h(i));F(n,{marker:"**",children:(o,O)=>{e();var d=s("Integrate with your server");t(o,d)},$$slots:{default:!0}});var v=r(n,2);F(v,{marker:"**",children:(o,O)=>{e();var d=s("API Key");t(o,d)},$$slots:{default:!0}}),e(),t(_,i)},$$slots:{default:!0}});var k=r(g);nt(k,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/dark/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var E=r(k);lt(E,{children:(_,l)=>{a(_,{children:(i,n)=>{V(i,{src:"/images/docs/quick-starts/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var R=r(E);Pt(R,{children:(_,l)=>{var i=Wt(),n=h(i);It(n,{children:(o,O)=>{at(o,{children:(d,j)=>{var p=Kt(),I=h(p);X(I,{width:120,children:(b,U)=>{e();var N=s("Category");t(b,N)},$$slots:{default:!0}});var c=r(I);X(c,{children:(b,U)=>{e();var N=s("Required scopes");t(b,N)},$$slots:{default:!0}});var y=r(c);X(y,{children:(b,U)=>{e();var N=s("Purpose");t(b,N)},$$slots:{default:!0}}),t(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=r(n);wt(v,{children:(o,O)=>{at(o,{children:(d,j)=>{var p=qt(),I=h(p);Z(I,{children:(b,U)=>{e();var N=s("Sessions");t(b,N)},$$slots:{default:!0}});var c=r(I);Z(c,{children:(b,U)=>{ft(b,{content:"sessions.write"})},$$slots:{default:!0}});var y=r(c);Z(y,{children:(b,U)=>{e();var N=s("Allows API key to create, update, and delete sessions.");t(b,N)},$$slots:{default:!0}}),t(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(_,i)},$$slots:{default:!0}}),t(Y,C)},$$slots:{default:!0}}),t(w,P)},$$slots:{default:!0}}),t(H,G)},$$slots:{default:!0}});var _t=r(ut);ot(_t,{id:"initialize-sdks",step:3,title:"Initialize SDKs",children:(H,rt)=>{var G=ae(),q=h(G);a(q,{children:(K,S)=>{e();var J=s("When using the Backrush APIs, you need to pass information like endpoint, project ID, credentials and other metadata for Backrush to properly parse your request.");t(K,J)},$$slots:{default:!0}});var W=r(q);vt(W,{children:(K,S)=>{var J=le(),w=h(J);B(w,{id:"client",title:"Client",children:(m,A)=>{var Y=Ht(),T=h(Y);a(T,{children:(g,k)=>{e();var E=s("Client apps need to be configured with endpoint and project ID, so the Backrush SDK knows which endpoint and project to connect to.");t(g,E)},$$slots:{default:!0}});var C=r(T);st(C,{children:(g,k)=>{var E=Ft(),R=h(E);D(R,{content:`import { Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;
`,language:"client-web",process:!0,children:(n,v)=>{e();var o=s(`import { Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;`);t(n,o)},$$slots:{default:!0}});var _=r(R);D(_,{content:`import 'package:appwrite/appwrite.dart';

Client client = Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;
`,language:"client-flutter",process:!0,children:(n,v)=>{e();var o=s(`import 'package:appwrite/appwrite.dart';

Client client = Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;`);t(n,o)},$$slots:{default:!0}});var l=r(_);D(l,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
`,language:"client-apple",process:!0,children:(n,v)=>{e();var o=s(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID`);t(n,o)},$$slots:{default:!0}});var i=r(l);D(i,{content:`import io.appwrite.Client

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID
`,language:"client-android-kotlin",process:!0,children:(n,v)=>{e();var o=s(`import io.appwrite.Client

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID`);t(n,o)},$$slots:{default:!0}}),t(g,E)},$$slots:{default:!0}}),t(m,Y)},$$slots:{default:!0}});var f=r(w);B(f,{id:"server",title:"Server",children:(m,A)=>{var Y=Mt(),T=h(Y);a(T,{children:(g,k)=>{e();var E=s("Server apps need to be configured with endpoint, project ID, and an API key so the Backrush SDK knows which endpoint and project to connect to, as well as have credentials to perform admin actions.");t(g,E)},$$slots:{default:!0}});var C=r(T);st(C,{children:(g,k)=>{var E=Qt(),R=h(E);D(R,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;
`,language:"server-nodejs",process:!0,children:(p,I)=>{e();var c=s(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;`);t(p,c)},$$slots:{default:!0}});var _=r(R);D(_,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;
`,language:"deno",process:!0,children:(p,I)=>{e();var c=s(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;`);t(p,c)},$$slots:{default:!0}});var l=r(_);D(l,{content:`<?php

use Backrush\\Client;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')               // Your API Endpoint
    ->setProject('<PROJECT_ID>')                           // Your project ID
    ->setJWT('<YOUR_API_KEY>')                                  // Your secret JSON Web Token
;
`,language:"php",process:!0,children:(p,I)=>{e();var c=s(`<?php

use Backrush\\Client;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')               // Your API Endpoint
    ->setProject('<PROJECT_ID>')                           // Your project ID
    ->setJWT('<YOUR_API_KEY>')                                  // Your secret JSON Web Token
;`);t(p,c)},$$slots:{default:!0}});var i=r(l);D(i,{content:`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')                 # Your API Endpoint
  .set_project('<PROJECT_ID>')                             # Your project ID
  .set_jwt('<YOUR_API_KEY>')                                    # Your secret JSON Web Token
)
`,language:"python",process:!0,children:(p,I)=>{e();var c=s(`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')                 # Your API Endpoint
  .set_project('<PROJECT_ID>')                             # Your project ID
  .set_jwt('<YOUR_API_KEY>')                                    # Your secret JSON Web Token
)`);t(p,c)},$$slots:{default:!0}});var n=r(i);D(n,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')               # Your API Endpoint
    .set_project('<PROJECT_ID>')                           # Your project ID
    .set_jwt('<YOUR_API_KEY>')                                  # Your secret JSON Web Token
`,language:"ruby",process:!0,children:(p,I)=>{e();var c=s(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')               # Your API Endpoint
    .set_project('<PROJECT_ID>')                           # Your project ID
    .set_jwt('<YOUR_API_KEY>')                                  # Your secret JSON Web Token`);t(p,c)},$$slots:{default:!0}});var v=r(n);D(v,{content:`using Backrush;
using Backrush.Services;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .SetProject("<PROJECT_ID>")                            // Your project ID
    .SetJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
`,language:"csharp",process:!0,children:(p,I)=>{e();var c=s(`using Backrush;
using Backrush.Services;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .SetProject("<PROJECT_ID>")                            // Your project ID
    .SetJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token`);t(p,c)},$$slots:{default:!0}});var o=r(v);D(o,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

void main() {                                                   // Init SDK
  Client client = Client();

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
  ;
}
`,language:"dart",process:!0,children:(p,I)=>{e();var c=s(`import 'package:dart_appwrite/dart_appwrite.dart';

void main() {                                                   // Init SDK
  Client client = Client();

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
  ;
}`);t(p,c)},$$slots:{default:!0}});var O=r(o);D(O,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
`,language:"kotlin",process:!0,children:(p,I)=>{e();var c=s(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token`);t(p,c)},$$slots:{default:!0}});var d=r(O);D(d,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
`,language:"java",process:!0,children:(p,I)=>{e();var c=s(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token`);t(p,c)},$$slots:{default:!0}});var j=r(d);D(j,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>")                                   // Your secret JSON Web Token
`,language:"swift",process:!0,children:(p,I)=>{e();var c=s(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>")                                   // Your secret JSON Web Token`);t(p,c)},$$slots:{default:!0}}),t(g,E)},$$slots:{default:!0}}),t(m,Y)},$$slots:{default:!0}});var P=r(f);B(P,{id:"ssr",title:"SSR",children:(m,A)=>{var Y=ne(),T=h(Y);a(T,{children:(o,O)=>{e();var d=s("Backrush uses Server SDKs for SSR apps. The initialization is different");t(o,d)},$$slots:{default:!0}});var C=r(T);it(C,{id:"admin-client",level:2,children:(o,O)=>{e();var d=s("Admin client");t(o,d)},$$slots:{default:!0}});var g=r(C);kt(g,{title:"Admin clients",children:(o,O)=>{a(o,{children:(d,j)=>{e();var p=Vt(),I=r(h(p));M(I,{href:"/docs/products/auth/server-side-rendering#rate-limits",children:(c,y)=>{e();var b=s("unauthenticated requests that bypass rate limits");t(c,b)},$$slots:{default:!0}}),e(),t(d,p)},$$slots:{default:!0}})}});var k=r(g);a(k,{children:(o,O)=>{e();var d=Bt(),j=r(h(d));M(j,{href:"/docs/advanced/platform/api-keys#create-api-key",children:(p,I)=>{e();var c=s("generated an API key");t(p,c)},$$slots:{default:!0}}),e(),t(o,d)},$$slots:{default:!0}});var E=r(k);Pt(E,{children:(o,O)=>{var d=te(),j=h(d);It(j,{children:(I,c)=>{at(I,{children:(y,b)=>{var U=Xt(),N=h(U);X(N,{width:120,children:(z,et)=>{e();var Q=s("Category");t(z,Q)},$$slots:{default:!0}});var tt=r(N);X(tt,{children:(z,et)=>{e();var Q=s("Required scopes");t(z,Q)},$$slots:{default:!0}});var pt=r(tt);X(pt,{children:(z,et)=>{e();var Q=s("Purpose");t(z,Q)},$$slots:{default:!0}}),t(y,U)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=r(j);wt(p,{children:(I,c)=>{at(I,{children:(y,b)=>{var U=Zt(),N=h(U);Z(N,{children:(z,et)=>{e();var Q=s("Sessions");t(z,Q)},$$slots:{default:!0}});var tt=r(N);Z(tt,{children:(z,et)=>{ft(z,{content:"sessions.write"})},$$slots:{default:!0}});var pt=r(tt);Z(pt,{children:(z,et)=>{e();var Q=s("Allows API key to create, update, and delete sessions.");t(z,Q)},$$slots:{default:!0}}),t(y,U)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(o,d)},$$slots:{default:!0}});var R=r(E);st(R,{children:(o,O)=>{var d=ee(),j=h(d);D(j,{content:`import { Client } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key
`,language:"server-nodejs",process:!0,children:(I,c)=>{e();var y=s(`import { Client } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key`);t(I,y)},$$slots:{default:!0}});var p=r(j);D(p,{content:`use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<YOUR_API_KEY>');                   // Your secret API key


`,language:"php",process:!0,children:(I,c)=>{e();var y=s(`use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<YOUR_API_KEY>');                   // Your secret API key`);t(I,y)},$$slots:{default:!0}}),t(o,d)},$$slots:{default:!0}});var _=r(R);a(_,{children:(o,O)=>{e();var d=re(),j=r(h(d));M(j,{href:"/docs/advanced/platform/rate-limits",children:(p,I)=>{e();var c=s("rate limits");t(p,c)},$$slots:{default:!0}}),e(),t(o,d)},$$slots:{default:!0}});var l=r(_);it(l,{id:"session-client",level:2,children:(o,O)=>{e();var d=s("Session client");t(o,d)},$$slots:{default:!0}});var i=r(l);a(i,{children:(o,O)=>{e();var d=s("The session client will be used to make requests to Backrush on behalf of the end-user. It will be initialized with the session, usually stored within a cookie.");t(o,d)},$$slots:{default:!0}});var n=r(i);a(n,{children:(o,O)=>{e();var d=oe(),j=r(h(d));F(j,{marker:"**",children:(p,I)=>{e();var c=s("never");t(p,c)},$$slots:{default:!0}}),e(),t(o,d)},$$slots:{default:!0}});var v=r(n);st(v,{children:(o,O)=>{var d=se(),j=h(d);D(j,{content:`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}
`,language:"server-nodejs",process:!0,children:(I,c)=>{e();var y=s(`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}`);t(I,y)},$$slots:{default:!0}});var p=r(j);D(p,{content:`$sessionClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');            // Your project ID

$session = $_COOKIE['session']; // Get the session cookie from the request
if ($session) {
    $sessionClient->setSession($session);
}
`,language:"php",process:!0,children:(I,c)=>{e();var y=s(`$sessionClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');            // Your project ID

$session = $_COOKIE['session']; // Get the session cookie from the request
if ($session) {
    $sessionClient->setSession($session);
}`);t(I,y)},$$slots:{default:!0}}),t(o,d)},$$slots:{default:!0}}),t(m,Y)},$$slots:{default:!0}});var $=r(P);a($,{children:(m,A)=>{e();var Y=s("You will use the initialized client in all requests you make to Backrush.");t(m,Y)},$$slots:{default:!0}}),t(K,J)},$$slots:{default:!0}});var L=r(W);a(L,{children:(K,S)=>{e();var J=ie(),w=r(h(J));M(w,{href:"/docs/apis/rest",children:(P,$)=>{e();var m=s("REST API");t(P,m)},$$slots:{default:!0}});var f=r(w,2);M(f,{href:"/docs/apis/graphql",children:(P,$)=>{e();var m=s("GraphQL API");t(P,m)},$$slots:{default:!0}}),e(),t(K,J)},$$slots:{default:!0}}),t(H,G)},$$slots:{default:!0}});var gt=r(_t);ot(gt,{id:"examples",step:4,title:"Examples",children:(H,rt)=>{var G=ce(),q=h(G);a(q,{children:(f,P)=>{e();var $=s("If you prefer to explore examples, follow one of the following quick starts.");t(f,$)},$$slots:{default:!0}});var W=r(q);it(W,{id:"client-app",level:2,children:(f,P)=>{e();var $=s("Client apps");t(f,$)},$$slots:{default:!0}});var L=r(W);a(L,{children:(f,P)=>{e();var $=s("Examples when building with Client APIs");t(f,$)},$$slots:{default:!0}});var K=r(L);ht(K,{children:(f,P)=>{var $=de(),m=h($);x(m,{href:"/docs/quick-starts/web",icon:"icon-nextjs",title:"Web",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Just plain JavaScript and TypeScript.");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=r(m);x(A,{href:"/docs/quick-starts/nextjs",icon:"icon-nextjs",title:"Next.js",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Next.js");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var Y=r(A);x(Y,{href:"/docs/quick-starts/react",icon:"icon-react",title:"React",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and React");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var T=r(Y);x(T,{href:"/docs/quick-starts/vue",icon:"web-icon-vue",title:"Vue.js",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Vue.js");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=r(T);x(C,{href:"/docs/quick-starts/nuxt",icon:"web-icon-nuxt",title:"Nuxt",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Nuxt");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=r(C);x(g,{href:"/docs/quick-starts/sveltekit",icon:"icon-svelte",title:"SvelteKit",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and SvelteKit");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=r(g);x(k,{href:"/docs/quick-starts/angular",icon:"icon-angular",title:"Angular",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Angular");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=r(k);x(E,{href:"/docs/quick-starts/flutter",icon:"icon-flutter",title:"Flutter",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Flutter");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var R=r(E);x(R,{href:"/docs/quick-starts/apple",icon:"icon-apple",title:"Apple",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Apple");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=r(R);x(_,{href:"/docs/quick-starts/android",icon:"icon-android",title:"Android",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Android");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(f,$)}});var S=r(K);it(S,{id:"server-app",level:2,children:(f,P)=>{e();var $=s("Server apps");t(f,$)},$$slots:{default:!0}});var J=r(S);a(J,{children:(f,P)=>{e();var $=s("Examples when building with Server APIs");t(f,$)},$$slots:{default:!0}});var w=r(J);ht(w,{children:(f,P)=>{var $=pe(),m=h($);x(m,{href:"/docs/quick-starts/node",icon:"icon-node_js",title:"Node.js",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Node.js");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=r(m);x(A,{href:"/docs/quick-starts/python",icon:"icon-python",title:"Python",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Python");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var Y=r(A);x(Y,{href:"/docs/quick-starts/dart",icon:"icon-dart",title:"Dart",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Dart");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var T=r(Y);x(T,{href:"/docs/quick-starts/php",icon:"icon-php",title:"PHP",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and PHP");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=r(T);x(C,{href:"/docs/quick-starts/ruby",icon:"icon-ruby",title:"Ruby",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Ruby");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=r(C);x(g,{href:"/docs/quick-starts/dotnet",icon:"icon-dotnet",title:".NET",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and .NET");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=r(g);x(k,{href:"/docs/quick-starts/deno",icon:"icon-deno",title:"Deno",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Deno");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=r(k);x(E,{href:"/docs/quick-starts/go",icon:"icon-go",title:"Go",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Go");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var R=r(E);x(R,{href:"/docs/quick-starts/swift",icon:"icon-swift",title:"Swift",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Swift");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=r(R);x(_,{href:"/docs/quick-starts/kotlin",icon:"icon-kotlin",title:"Kotlin",children:(l,i)=>{a(l,{children:(n,v)=>{e();var o=s("Get started with Backrush and Kotlin");t(n,o)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(f,$)}}),t(H,G)},$$slots:{default:!0}}),Yt(dt),t(Et,dt)},$$slots:{default:!0}}))}export{We as component};
