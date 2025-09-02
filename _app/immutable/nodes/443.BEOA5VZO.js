import{t as f,b as a,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as X,s as n,f as m,n as t,r as Z}from"../chunks/NgVQVlRK.js";import{n as ee}from"../chunks/B4IyMRKX.js";import{H as k}from"../chunks/CXsRaEhZ.js";import{M as K}from"../chunks/hMT8fFzP.js";import{I as te}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import{A as ne}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as O}from"../chunks/DXp9_3zM.js";import{F as w}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as E}from"../chunks/D8YsId2T.js";import{S as re}from"../chunks/yHjwcyUH.js";import{L as I}from"../chunks/yh4_9ChP.js";import{T as oe}from"../chunks/D8BqvLkQ.js";import{T as se,a as Y,b as V,c as ae,d as C}from"../chunks/BpU_IltG.js";import{A as ce}from"../chunks/CqOphJLh.js";const ie={layout:"article",title:"Accounts",description:"Unlock advanced user management - Backrush's Account API for seamless signups, store user preferences, and dynamic permissions."};var le=f("The Account API is the API you should use in your <!> with <!> like web, Flutter, mobile, and native apps. Account API creates sessions, which represent an authenticated user and is attached to a user&#39;s <!>. Sessions respect <!>, which means users can only access resources if they have been granted the correct permissions.",1),ue=f("The Users API is a dedicated API for managing users from an admin&#39;s perspective. It should be used with backend or server-side applications with <!>. Users API uses API keys instead of sessions. This means they&#39;re not restricted by permissions, but by the scopes granted to the API key used.",1),pe=f("<!><!>",1),de=f("You can signup and login a user with an account create through <!>, <!>, <!>, <!>, and <!> authentication.",1),$e=f("You can store user preferences on a user&#39;s account using Backrush&#39;s <!> endpoint. You can store preferences such as theme, notification settings, or preferred language so they can be synced across multiple devices.",1),fe=f("<!><!><!><!><!>",1),ve=f("After a user&#39;s preferences are updated, they can be retrieved using the <!> endpoint.",1),he=f("<!><!><!><!><!>",1),me=f("You can grant permissions to all users using the <!> role or individual users using the <!> role.",1),_e=f("<!><!>",1),Pe=f("<!><!>",1),ge=f("<!><!>",1),Ie=f("<!><!>",1),we=f("<!><!>",1),Ae=f("<!><!><!><!>",1),Ee=f("<!><!>",1),Ce=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function We(B){ce(B,ee(ie,{children:(Q,Re)=>{var j=Ce(),b=X(j);E(b,{children:(c,P)=>{t();var s=a("Backrush Account API is used for user signup and login in client applications. Users can be organized into teams and be given labels, so they can be given different permissions and access different resources. Each user's account can also have their own preference object, which you can use to save preferences such as theme, language, and notification settings.");e(c,s)},$$slots:{default:!0}});var y=n(b);te(y,{title:"Account vs Users API",children:(c,P)=>{var s=pe(),u=m(s);E(u,{children:($,v)=>{t();var h=le(),o=n(m(h));re(o,{marker:"**",children:(d,A)=>{t();var l=a("client applications");e(d,l)},$$slots:{default:!0}});var i=n(o,2);I(i,{href:"/docs/sdks#client",children:(d,A)=>{t();var l=a("Client SDKs");e(d,l)},$$slots:{default:!0}});var r=n(i,2);I(r,{href:"/docs/products/auth/accounts",children:(d,A)=>{t();var l=a("account");e(d,l)},$$slots:{default:!0}});var R=n(r,2);I(R,{href:"/docs/advanced/platform/permissions",children:(d,A)=>{t();var l=a("permissions");e(d,l)},$$slots:{default:!0}}),t(),e($,h)},$$slots:{default:!0}});var p=n(u);E(p,{children:($,v)=>{t();var h=ue(),o=n(m(h));I(o,{href:"/docs/sdks#server",children:(i,r)=>{t();var R=a("Server SDKs");e(i,R)},$$slots:{default:!0}}),t(),e($,h)},$$slots:{default:!0}}),e(c,s)}});var S=n(y);k(S,{id:"signup-login",level:1,children:(c,P)=>{t();var s=a("Signup and login");e(c,s)},$$slots:{default:!0}});var G=n(S);E(G,{children:(c,P)=>{t();var s=de(),u=n(m(s));I(u,{href:"/docs/products/auth/email-password",children:(o,i)=>{t();var r=a("email password");e(o,r)},$$slots:{default:!0}});var p=n(u,2);I(p,{href:"/docs/products/auth/phone-sms",children:(o,i)=>{t();var r=a("phone (SMS)");e(o,r)},$$slots:{default:!0}});var $=n(p,2);I($,{href:"/docs/products/auth/anonymous",children:(o,i)=>{t();var r=a("Anonymous");e(o,r)},$$slots:{default:!0}});var v=n($,2);I(v,{href:"/docs/products/auth/magic-url",children:(o,i)=>{t();var r=a("magic URL");e(o,r)},$$slots:{default:!0}});var h=n(v,2);I(h,{href:"/docs/products/auth/oauth2",children:(o,i)=>{t();var r=a("OAuth 2");e(o,r)},$$slots:{default:!0}}),t(),e(c,s)},$$slots:{default:!0}});var J=n(G);k(J,{id:"preferences",level:1,children:(c,P)=>{t();var s=a("Preferences");e(c,s)},$$slots:{default:!0}});var N=n(J);E(N,{children:(c,P)=>{t();var s=$e(),u=n(m(s));I(u,{href:"/docs/references/cloud/client-web/account#updatePrefs",children:(p,$)=>{t();var v=a("Update Preferences");e(p,v)},$$slots:{default:!0}}),t(),e(c,s)},$$slots:{default:!0}});var U=n(N);E(U,{children:(c,P)=>{t();var s=a("Preferences are stored as a key-value JSON object. The maximum allowed size for preferences is 64kB, and an error will be thrown if this limit is exceeded.");e(c,s)},$$slots:{default:!0}});var F=n(U);K(F,{children:(c,P)=>{var s=fe(),u=m(s);w(u,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.updatePrefs({darkTheme: true, language: 'en'});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(o,i)=>{t();var r=a(`import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.updatePrefs({darkTheme: true, language: 'en'});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(o,r)},$$slots:{default:!0}});var p=n(u);w(p,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.updatePrefs(
    prefs: {
        "darkTheme": true,
        "language": "en",
    }
);
`,language:"client-flutter",process:!0,children:(o,i)=>{t();var r=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.updatePrefs(
    prefs: {
        "darkTheme": true,
        "language": "en",
    }
);`);e(o,r)},$$slots:{default:!0}});var $=n(p);w($,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.updatePrefs(
    prefs: [
        "darkTheme": true,
        "language": "en"
    ]
)
`,language:"client-apple",process:!0,children:(o,i)=>{t();var r=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.updatePrefs(
    prefs: [
        "darkTheme": true,
        "language": "en"
    ]
)`);e(o,r)},$$slots:{default:!0}});var v=n($);w(v,{content:`import io.backrush.Client
import io.backrush.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.updatePrefs(
    prefs = mapOf(
        "darkTheme" to true,
        "language" to "en"
    )
)
`,language:"client-android-kotlin",process:!0,children:(o,i)=>{t();var r=a(`import io.backrush.Client
import io.backrush.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.updatePrefs(
    prefs = mapOf(
        "darkTheme" to true,
        "language" to "en"
    )
)`);e(o,r)},$$slots:{default:!0}});var h=n(v);w(h,{content:`mutation {
    accountUpdatePrefs(
        prefs: "{\\"darkTheme\\": true, \\"language\\": \\"en\\"}"
    ) {
        _id
        name
        prefs {
            data
        }
    }
}
`,language:"graphql",process:!0,children:(o,i)=>{t();var r=a(`mutation {
    accountUpdatePrefs(
        prefs: "{\\"darkTheme\\": true, \\"language\\": \\"en\\"}"
    ) {
        _id
        name
        prefs {
            data
        }
    }
}`);e(o,r)},$$slots:{default:!0}}),e(c,s)},$$slots:{default:!0}});var L=n(F);E(L,{children:(c,P)=>{t();var s=ve(),u=n(m(s));I(u,{href:"/docs/references/cloud/client-web/account#getPrefs",children:(p,$)=>{t();var v=a("get account preferences");e(p,v)},$$slots:{default:!0}}),t(),e(c,s)},$$slots:{default:!0}});var q=n(L);K(q,{children:(c,P)=>{var s=he(),u=m(s);w(u,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.getPrefs();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(o,i)=>{t();var r=a(`import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.getPrefs();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(o,r)},$$slots:{default:!0}});var p=n(u);w(p,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final prefs = await account.getPrefs();
`,language:"client-flutter",process:!0,children:(o,i)=>{t();var r=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final prefs = await account.getPrefs();`);e(o,r)},$$slots:{default:!0}});var $=n(p);w($,{content:`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val prefs = account.getPrefs()
`,language:"client-android-kotlin",process:!0,children:(o,i)=>{t();var r=a(`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val prefs = account.getPrefs()`);e(o,r)},$$slots:{default:!0}});var v=n($);w(v,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let prefs = try await account.getPrefs()
`,language:"client-apple",process:!0,children:(o,i)=>{t();var r=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let prefs = try await account.getPrefs()`);e(o,r)},$$slots:{default:!0}});var h=n(v);w(h,{content:`query {
    accountGetPrefs {
        data
    }
}
`,language:"graphql",process:!0,children:(o,i)=>{t();var r=a(`query {
    accountGetPrefs {
        data
    }
}`);e(o,r)},$$slots:{default:!0}}),e(c,s)},$$slots:{default:!0}});var M=n(q);k(M,{id:"permissions",level:1,children:(c,P)=>{t();var s=a("Permissions");e(c,s)},$$slots:{default:!0}});var z=n(M);E(z,{children:(c,P)=>{t();var s=me(),u=n(m(s));O(u,{content:"Role.users(<STATUS>)"});var p=n(u,2);O(p,{content:"Role.user(<USER_ID>, <STATUS>)"}),t(),e(c,s)},$$slots:{default:!0}});var H=n(z);oe(H,{children:(c,P)=>{var s=Ee(),u=m(s);se(u,{children:($,v)=>{Y($,{children:(h,o)=>{var i=_e(),r=m(i);V(r,{children:(d,A)=>{t();var l=a("Description");e(d,l)},$$slots:{default:!0}});var R=n(r);V(R,{children:(d,A)=>{t();var l=a("Role");e(d,l)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=n(u);ae(p,{children:($,v)=>{var h=Ae(),o=m(h);Y(o,{children:(d,A)=>{var l=Pe(),g=m(l);C(g,{children:(_,x)=>{t();var D=a("Verified users");e(_,D)},$$slots:{default:!0}});var T=n(g);C(T,{children:(_,x)=>{O(_,{content:"Role.users('verified')"})},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var i=n(o);Y(i,{children:(d,A)=>{var l=ge(),g=m(l);C(g,{children:(_,x)=>{t();var D=a("Unverified users");e(_,D)},$$slots:{default:!0}});var T=n(g);C(T,{children:(_,x)=>{O(_,{content:"Role.users('unverified')"})},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var r=n(i);Y(r,{children:(d,A)=>{var l=Ie(),g=m(l);C(g,{children:(_,x)=>{t();var D=a("Verified user");e(_,D)},$$slots:{default:!0}});var T=n(g);C(T,{children:(_,x)=>{O(_,{content:"Role.user(<USER_ID>, 'verified')"})},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var R=n(r);Y(R,{children:(d,A)=>{var l=we(),g=m(l);C(g,{children:(_,x)=>{t();var D=a("Unverified user");e(_,D)},$$slots:{default:!0}});var T=n(g);C(T,{children:(_,x)=>{O(_,{content:"Role.user(<USER_ID>, 'unverified')"})},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e($,h)},$$slots:{default:!0}}),e(c,s)},$$slots:{default:!0}});var W=n(H);ne(W,{href:"/docs/advanced/platform/permissions",children:(c,P)=>{E(c,{children:(s,u)=>{t();var p=a("Learn more about permissions");e(s,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),Z(j),e(Q,j)},$$slots:{default:!0}}))}export{We as component};
