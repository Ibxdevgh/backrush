import{t as f,b as a,a as o}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as r,f as v,c as T,n,r as J}from"../chunks/NgVQVlRK.js";import{n as N}from"../chunks/B4IyMRKX.js";import{H as O}from"../chunks/CXsRaEhZ.js";import{M}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import{A as _}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as m}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as p}from"../chunks/D8YsId2T.js";import{S as j}from"../chunks/yHjwcyUH.js";import{L as F}from"../chunks/yh4_9ChP.js";import{A as L}from"../chunks/CqOphJLh.js";const H={layout:"article",title:"Anonymous login",description:"Manage user identities and profiles effectively with Backrush. Dive into user management features, account settings, and user data customization."};var q=f("Anonymous sessions allow you to implement <!> users. Guest users let you store user information like items in their cart or theme preferences before they create an account. This reduces the friction for your users to get started with your app.",1),z=f("<!>, their information will be inherited by the newly created account.",1),U=f("Create an anonymous session with <!> method.",1),B=f("<!><!><!><!><!>",1),K=f("<article><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ht(Y){L(Y,N(H,{children:(b,Q)=>{var P=K(),A=T(P);p(A,{children:(e,c)=>{n();var t=q(),i=r(v(t));j(i,{marker:"**",children:(s,$)=>{n();var d=a("guest");o(s,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var w=r(A);p(w,{children:(e,c)=>{var t=z(),i=v(t);j(i,{marker:"**",children:(s,$)=>{n();var d=a("If a user later creates an account");o(s,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var g=r(w);O(g,{id:"createSession",level:1,children:(e,c)=>{n();var t=a("Create anonymous session");o(e,t)},$$slots:{default:!0}});var I=r(g);p(I,{children:(e,c)=>{n();var t=U(),i=r(v(t));F(i,{href:"/docs/references/cloud/client-web/account#createAnonymousSession",children:(s,$)=>{n();var d=a("Create Anonymous Session");o(s,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var y=r(I);M(y,{children:(e,c)=>{var t=B(),i=v(t);m(i,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.createAnonymousSession();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(l,h)=>{n();var u=a(`import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.createAnonymousSession();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);o(l,u)},$$slots:{default:!0}});var s=r(i);m(s,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.createAnonymousSession();
`,language:"client-flutter",process:!0,children:(l,h)=>{n();var u=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.createAnonymousSession();`);o(l,u)},$$slots:{default:!0}});var $=r(s);m($,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.createAnonymousSession()
`,language:"client-apple",process:!0,children:(l,h)=>{n();var u=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.createAnonymousSession()`);o(l,u)},$$slots:{default:!0}});var d=r($);m(d,{content:`import io.backrush.Client
import io.backrush.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.createAnonymousSession()
`,language:"client-android-kotlin",process:!0,children:(l,h)=>{n();var u=a(`import io.backrush.Client
import io.backrush.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.createAnonymousSession()`);o(l,u)},$$slots:{default:!0}});var G=r(d);m(G,{content:`mutation {
    accountCreateAnonymousSession {
        _id
        userId
        provider
        expire
    }
}
`,language:"graphql",process:!0,children:(l,h)=>{n();var u=a(`mutation {
    accountCreateAnonymousSession {
        _id
        userId
        provider
        expire
    }
}`);o(l,u)},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}});var E=r(y);O(E,{id:"attach-account",level:1,children:(e,c)=>{n();var t=a("Attaching an account");o(e,t)},$$slots:{default:!0}});var C=r(E);p(C,{children:(e,c)=>{n();var t=a("Anonymous users cannot sign back in. If the session expires, they move to another computer, or they clear their browser data, they won't be able to log in again. Remember to prompt the user to create an account to not lose their data.");o(e,t)},$$slots:{default:!0}});var x=r(C);p(x,{children:(e,c)=>{n();var t=a("Create an account with any of these methods to transition from an anonymous session to a user account session.");o(e,t)},$$slots:{default:!0}});var S=r(x);_(S,{href:"/docs/products/auth/email-password",children:(e,c)=>{p(e,{children:(t,i)=>{n();var s=a("Email and password");o(t,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var R=r(S);_(R,{href:"/docs/products/auth/phone-sms",children:(e,c)=>{p(e,{children:(t,i)=>{n();var s=a("Phone (SMS)");o(t,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var D=r(R);_(D,{href:"/docs/products/auth/magic-url",children:(e,c)=>{p(e,{children:(t,i)=>{n();var s=a("Magic URL");o(t,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=r(D);_(k,{href:"/docs/products/auth/oauth2",children:(e,c)=>{p(e,{children:(t,i)=>{n();var s=a("OAuth2");o(t,s)},$$slots:{default:!0}})},$$slots:{default:!0}}),J(P),o(b,P)},$$slots:{default:!0}}))}export{ht as component};
