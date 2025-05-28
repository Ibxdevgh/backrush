import{t as d,b as c,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as H,s as n,f as h,n as o,r as B}from"../chunks/NgVQVlRK.js";import{n as K}from"../chunks/B4IyMRKX.js";import{H as p}from"../chunks/CXsRaEhZ.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as u}from"../chunks/DXp9_3zM.js";import{F as l}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as a}from"../chunks/D8YsId2T.js";import{L as N}from"../chunks/yh4_9ChP.js";import{A as W}from"../chunks/CqOphJLh.js";const z={layout:"article",title:"Email and password login",description:"Implement email and password authentication with Backrush. Securely register and authenticate users in your applications using Backrush's robust email-based authentication system."};var G=d("Passwords are hashed with <!>, a resilient and secure password hashing algorithm.",1),M=d("After logging in, the email can be verified through the account create verification route. The user doesn&#39;t need to be verified to log in, but you can restrict resource access to verified users only using permissions through the <!> role.",1),Q=d("First, send a verification email. Specify a redirect URL which users will be redirected to. The verification secrets will be appended as query parameters to the redirect URL. In this example, the redirect URL is <!>.",1),X=d("Next, implement the verification page in your app. This page will parse the secrets passed in through the <!> and <!> query parameters. In this example, the code below will be found in the page served at <!>.",1),Z=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function _e(J){W(J,K(z,{children:(L,ee)=>{var f=Z(),w=H(f);a(w,{children:(t,s)=>{o();var e=c("Email and password login is the most commonly used authentication method. Backrush Authentication promotes a safer internet by providing secure APIs and promoting better password choices to end users. Backrush supports added security features like blocking personal info in passwords, password dictionary, and password history to help users choose good passwords.");r(t,e)},$$slots:{default:!0}});var $=n(w);p($,{id:"sign-up",level:1,children:(t,s)=>{o();var e=c("Signup");r(t,e)},$$slots:{default:!0}});var v=n($);a(v,{children:(t,s)=>{o();var e=c("You can use the Backrush Client SDKs to create an account using email and password.");r(t,e)},$$slots:{default:!0}});var g=n(v);l(g,{content:`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var _=n(g);a(_,{children:(t,s)=>{o();var e=G(),i=n(h(e));N(i,{href:"https://github.com/P-H-C/phc-winner-argon2",children:(m,O)=>{o();var q=c("Argon2");r(m,q)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var P=n(_);p(P,{id:"login",level:1,children:(t,s)=>{o();var e=c("Login");r(t,e)},$$slots:{default:!0}});var y=n(P);a(y,{children:(t,s)=>{o();var e=c("After an account is created, users can be logged in using the Create Email Session route.");r(t,e)},$$slots:{default:!0}});var C=n(y);l(C,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.createEmailPasswordSession('email@example.com', 'password');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.createEmailPasswordSession('email@example.com', 'password');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var I=n(C);p(I,{id:"verification",level:1,children:(t,s)=>{o();var e=c("Verification");r(t,e)},$$slots:{default:!0}});var x=n(I);a(x,{children:(t,s)=>{o();var e=M(),i=n(h(e));u(i,{content:'user([USER_ID], "verified")'}),o(),r(t,e)},$$slots:{default:!0}});var A=n(x);a(A,{children:(t,s)=>{o();var e=Q(),i=n(h(e));u(i,{content:"https://example.com/verify"}),o(),r(t,e)},$$slots:{default:!0}});var R=n(A);l(R,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setProject('<PROJECT_ID>') // Your project ID

const account = new Account(client);

const promise = account.createVerification('https://example.com/verify');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>') // Your project ID

const account = new Account(client);

const promise = account.createVerification('https://example.com/verify');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var b=n(R);a(b,{children:(t,s)=>{o();var e=X(),i=n(h(e));u(i,{content:"userId"});var m=n(i,2);u(m,{content:"secret"});var O=n(m,2);u(O,{content:"https://example.com/verify"}),o(),r(t,e)},$$slots:{default:!0}});var D=n(b);a(D,{children:(t,s)=>{o();var e=c("Since the secrets are passed in through url params, it will be easiest to perform this step in the browser.");r(t,e)},$$slots:{default:!0}});var S=n(D);l(S,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const promise = account.updateVerification(userId, secret);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const promise = account.updateVerification(userId, secret);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var E=n(S);p(E,{id:"password-recovery",level:1,children:(t,s)=>{o();var e=c("Password Recovery");r(t,e)},$$slots:{default:!0}});var j=n(E);a(j,{children:(t,s)=>{o();var e=c("If a user forgets their password, they can initiate a password recovery flow to recover their password. The Create Password Recovery endpoint sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link, they are redirected back to the password reset URL with the secret key and email address values attached to the URL as query strings.");r(t,e)},$$slots:{default:!0}});var T=n(j);a(T,{children:(t,s)=>{o();var e=c("Only redirect URLs to domains added as a platform on your Backrush Console will be accepted. URLs not added as a platform are rejected to protect against redirect attacks.");r(t,e)},$$slots:{default:!0}});var k=n(T);l(k,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const promise = account.createRecovery('email@example.com', 'https://example.com/recovery');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const promise = account.createRecovery('email@example.com', 'https://example.com/recovery');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var F=n(k);a(F,{children:(t,s)=>{o();var e=c("After receiving an email with the secret attached to the redirect link, submit a request to the Create Password Recovery (confirmation) endpoint to complete the recovery flow. The verification link sent to the user's email address is valid for 1 hour.");r(t,e)},$$slots:{default:!0}});var U=n(F);l(U,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const promise = account.updateRecovery(
    '[USER_ID]',
    '[SECRET]',
    'password'
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const promise = account.updateRecovery(
    '[USER_ID]',
    '[SECRET]',
    'password'
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(t,e)},$$slots:{default:!0}});var Y=n(U);p(Y,{id:"security",level:1,children:(t,s)=>{o();var e=c("Security");r(t,e)},$$slots:{default:!0}});var V=n(Y);a(V,{children:(t,s)=>{o();var e=c("Backrush's security first mindset goes beyond a securely implemented authentication API. You can enable features like password dictionary, password history, and disallow personal data in passwords to encourage users to pick better passwords. By enabling these features, you protect user data and teach better password choices, which helps make the internet a safer place.");r(t,e)},$$slots:{default:!0}}),B(f),r(L,f)},$$slots:{default:!0}}))}export{_e as component};
