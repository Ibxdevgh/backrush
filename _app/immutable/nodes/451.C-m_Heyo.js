import{t as m,b as a,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as D,s as o,f as h,n as r,r as T}from"../chunks/NgVQVlRK.js";import{n as U}from"../chunks/B4IyMRKX.js";import{H as C}from"../chunks/CXsRaEhZ.js";import{M as k}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as b}from"../chunks/DXp9_3zM.js";import{F as $}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as v}from"../chunks/D8YsId2T.js";import{S as A}from"../chunks/yHjwcyUH.js";import{L as S}from"../chunks/yh4_9ChP.js";import{A as q}from"../chunks/CqOphJLh.js";const M={layout:"article",title:"Magic URL login",description:"Add magic URL to your authentication in Backrush. Explore the convenience of passwordless login and email-based authentication using magic links."};var j=m("Initialize the log in process with the <!> route. If the email has never been used, a <!>, then the user will receive an email. If the email is already attached to an account, the <!> and the user will receive a link in their email.",1),O=m("<!><!>",1),Y=m("The <!> parameter specifies where users will be redirected after clicking the magic link. The secret and userId will be automatically appended as query parameters to this URL.",1),G=m("<!><!>",1),J=m("<article><!><!><!><!><!><!><!><!></article>");function ue(E){q(E,U(M,{children:(y,N)=>{var f=J(),g=D(f);v(g,{children:(n,u)=>{r();var e=a('Magic URL is a password-less way to authenticate users. When a user logs in by providing their email, they will receive an email with a "magic" link that contains a secret used to log in the user. The user can simply click the link to be logged in.');t(n,e)},$$slots:{default:!0}});var _=o(g);C(_,{id:"init",level:1,children:(n,u)=>{r();var e=a("Send email");t(n,e)},$$slots:{default:!0}});var w=o(_);v(w,{children:(n,u)=>{r();var e=j(),s=o(h(e));S(s,{href:"/docs/references/cloud/client-web/account#createMagicURLToken",children:(l,i)=>{r();var p=a("Create Magic URL Token");t(l,p)},$$slots:{default:!0}});var d=o(s,2);A(d,{marker:"**",children:(l,i)=>{r();var p=a("new account is generated");t(l,p)},$$slots:{default:!0}});var c=o(d,2);A(c,{marker:"**",children:(l,i)=>{r();var p=a("user ID is ignored");t(l,p)},$$slots:{default:!0}}),r(),t(n,e)},$$slots:{default:!0}});var I=o(w);k(I,{children:(n,u)=>{var e=O(),s=h(e);$(s,{content:`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const token = await account.createMagicURLToken(
    ID.unique(),
    'email@example.com',
    'https://example.com/verify'
);
`,language:"client-web",process:!0,children:(c,l)=>{r();var i=a(`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const token = await account.createMagicURLToken(
    ID.unique(),
    'email@example.com',
    'https://example.com/verify'
);`);t(c,i)},$$slots:{default:!0}});var d=o(s);$(d,{content:`mutation {
    accountCreateMagicURLToken(
        userId: "ID.unique()",
        email: "email@example.com",
        url: "https://example.com/verify"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
    }
}
`,language:"graphql",process:!0,children:(c,l)=>{r();var i=a(`mutation {
    accountCreateMagicURLToken(
        userId: "ID.unique()",
        email: "email@example.com",
        url: "https://example.com/verify"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
    }
}`);t(c,i)},$$slots:{default:!0}}),t(n,e)},$$slots:{default:!0}});var P=o(I);v(P,{children:(n,u)=>{r();var e=Y(),s=o(h(e));b(s,{content:"url"}),r(),t(n,e)},$$slots:{default:!0}});var x=o(P);C(x,{id:"login",level:1,children:(n,u)=>{r();var e=a("Login");t(n,e)},$$slots:{default:!0}});var R=o(x);v(R,{children:(n,u)=>{r();var e=a("After the user clicks the magic link in their email, they will be redirected to your specified URL with the secret and userId as query parameters. Use these parameters to create a session.");t(n,e)},$$slots:{default:!0}});var L=o(R);k(L,{children:(n,u)=>{var e=G(),s=h(e);$(s,{content:`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const user = await account.createSession(userId, secret);
`,language:"client-web",process:!0,children:(c,l)=>{r();var i=a(`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const user = await account.createSession(userId, secret);`);t(c,i)},$$slots:{default:!0}});var d=o(s);$(d,{content:`mutation {
    accountCreateSession(
        userId: "unique()",
        secret: "[SECRET]"
    ) {
        _id
        _createdAt
        userId
        expire
        provider
    }
}
`,language:"graphql",process:!0,children:(c,l)=>{r();var i=a(`mutation {
    accountCreateSession(
        userId: "unique()",
        secret: "[SECRET]"
    ) {
        _id
        _createdAt
        userId
        expire
        provider
    }
}`);t(c,i)},$$slots:{default:!0}}),t(n,e)},$$slots:{default:!0}}),T(f),t(y,f)},$$slots:{default:!0}}))}export{ue as component};
