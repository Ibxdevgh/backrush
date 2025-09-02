import{t as m,b as a,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as i,f as I,c as G,n,r as J}from"../chunks/NgVQVlRK.js";import{n as q}from"../chunks/B4IyMRKX.js";import{H as D}from"../chunks/CXsRaEhZ.js";import{M as O}from"../chunks/hMT8fFzP.js";import{I as y}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as d}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as v}from"../chunks/D8YsId2T.js";import{S as M}from"../chunks/yHjwcyUH.js";import{L as x}from"../chunks/yh4_9ChP.js";import{A as L}from"../chunks/CqOphJLh.js";const F={layout:"article",title:"Phone (SMS) login",description:"Enhance security with SMS and phone authentication in Backrush. Add multi-factor authentication via SMS, verify phone numbers, and protect user accounts."};var H=m("The first 10 SMS messages each month are free. Thereafter OTPs are billed per message, with rates varying by country. See the <!> for more information.",1),U=m("Create and use <!> to initiate a phone authentication process without an actual phone number.",1),W=m("Send an SMS message to initiate the authentication process. A <!> will be created for this phone number if it has never been used before.",1),z=m("<!><!><!><!><!>",1),B=m("<!><!><!><!><!>",1),K=m("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function mt(b){L(b,q(F,{children:(N,Q)=>{var _=K(),w=G(_);y(w,{title:"Note",children:(o,u)=>{v(o,{children:(t,p)=>{n();var c=H(),h=i(I(c));x(h,{href:"/docs/advanced/platform/phone-otp#rates",children:(l,f)=>{n();var r=a("phone OTP rates");e(l,r)},$$slots:{default:!0}}),n(),e(t,c)},$$slots:{default:!0}})}});var P=i(w);v(P,{children:(o,u)=>{n();var t=a("Phone authentication lets users create accounts using their phone numbers and log in through SMS messages.");e(o,t)},$$slots:{default:!0}});var E=i(P);v(E,{children:(o,u)=>{n();var t=U(),p=i(I(t));x(p,{href:"/docs/products/auth/security#mock-phone-numbers",children:(c,h)=>{n();var l=a("mock phone numbers");e(c,l)},$$slots:{default:!0}}),n(),e(o,t)},$$slots:{default:!0}});var g=i(E);D(g,{id:"init",level:1,children:(o,u)=>{n();var t=a("Send SMS message");e(o,t)},$$slots:{default:!0}});var C=i(g);v(C,{children:(o,u)=>{n();var t=a("Phone authentication is done using a two-step authentication process. When using phone authentication, the authentication request is initiated from the client application and an SMS message is sent to the user's phone. The SMS message will contain a secret the user can use to log in.");e(o,t)},$$slots:{default:!0}});var S=i(C);v(S,{children:(o,u)=>{n();var t=W(),p=i(I(t));M(p,{marker:"**",children:(c,h)=>{n();var l=a("new account");e(c,l)},$$slots:{default:!0}}),n(),e(o,t)},$$slots:{default:!0}});var R=i(S);O(R,{children:(o,u)=>{var t=z(),p=I(t);d(p,{content:`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const token = await account.createPhoneToken(
    ID.unique(),
    '+14255550123'
);

const userId = token.userId;
`,language:"client-web",process:!0,children:(r,$)=>{n();var s=a(`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const token = await account.createPhoneToken(
    ID.unique(),
    '+14255550123'
);

const userId = token.userId;`);e(r,s)},$$slots:{default:!0}});var c=i(p);d(c,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final token = await account.createPhoneToken(
    userId: ID.unique(),
    phone: '+14255550123'
);

final userId = token.userId;
`,language:"client-flutter",process:!0,children:(r,$)=>{n();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final token = await account.createPhoneToken(
    userId: ID.unique(),
    phone: '+14255550123'
);

final userId = token.userId;`);e(r,s)},$$slots:{default:!0}});var h=i(c);d(h,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let token = try await account.createPhoneToken(
    userId: ID.unique(),
    phone: "+14255550123"
);

let userId = token.userId;
`,language:"client-apple",process:!0,children:(r,$)=>{n();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let token = try await account.createPhoneToken(
    userId: ID.unique(),
    phone: "+14255550123"
);

let userId = token.userId;`);e(r,s)},$$slots:{default:!0}});var l=i(h);d(l,{content:`import io.backrush.Client
import io.backrush.services.Account
import io.backrush.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val token = account.createPhoneToken(
    userId = ID.unique(),
    phone = "+14255550123"
);

val userId = token.userId;
`,language:"client-android-kotlin",process:!0,children:(r,$)=>{n();var s=a(`import io.backrush.Client
import io.backrush.services.Account
import io.backrush.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val token = account.createPhoneToken(
    userId = ID.unique(),
    phone = "+14255550123"
);

val userId = token.userId;`);e(r,s)},$$slots:{default:!0}});var f=i(l);d(f,{content:`mutation {
    accountCreatePhoneToken(userId: "unique()", phone: "+14255550123") {
        _id
        userId
        secret
        expire
    }
}
`,language:"graphql",process:!0,children:(r,$)=>{n();var s=a(`mutation {
    accountCreatePhoneToken(userId: "unique()", phone: "+14255550123") {
        _id
        userId
        secret
        expire
    }
}`);e(r,s)},$$slots:{default:!0}}),e(o,t)},$$slots:{default:!0}});var T=i(R);D(T,{id:"login",level:1,children:(o,u)=>{n();var t=a("Login");e(o,t)},$$slots:{default:!0}});var k=i(T);v(k,{children:(o,u)=>{n();var t=a("After initiating the phone authentication process, the returned user ID and secret are used to confirm the user. The secret will usually be a 6-digit number in the SMS message sent to the user.");e(o,t)},$$slots:{default:!0}});var A=i(k);O(A,{children:(o,u)=>{var t=B(),p=I(t);d(p,{content:`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    userId,
    '[SECRET]'
);
`,language:"client-web",process:!0,children:(r,$)=>{n();var s=a(`import { Client, Account, ID } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    userId,
    '[SECRET]'
);`);e(r,s)},$$slots:{default:!0}});var c=i(p);d(c,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: userId,
    secret: '[SECRET]'
);
`,language:"client-flutter",process:!0,children:(r,$)=>{n();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: userId,
    secret: '[SECRET]'
);`);e(r,s)},$$slots:{default:!0}});var h=i(c);d(h,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: userId,
    secret: "[SECRET]"
);
`,language:"client-apple",process:!0,children:(r,$)=>{n();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: userId,
    secret: "[SECRET]"
);`);e(r,s)},$$slots:{default:!0}});var l=i(h);d(l,{content:`import io.backrush.Client
import io.backrush.services.Account
import io.backrush.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = userId,
    secret = "[SECRET]"
);
`,language:"client-android-kotlin",process:!0,children:(r,$)=>{n();var s=a(`import io.backrush.Client
import io.backrush.services.Account
import io.backrush.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = userId,
    secret = "[SECRET]"
);`);e(r,s)},$$slots:{default:!0}});var f=i(l);d(f,{content:`mutation {
    accountCreateSession(userId: "[USER_ID]", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}
`,language:"graphql",process:!0,children:(r,$)=>{n();var s=a(`mutation {
    accountCreateSession(userId: "[USER_ID]", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}`);e(r,s)},$$slots:{default:!0}}),e(o,t)},$$slots:{default:!0}});var j=i(A);v(j,{children:(o,u)=>{n();var t=a("After the secret is verified, a session will be created.");e(o,t)},$$slots:{default:!0}}),J(_),e(N,_)},$$slots:{default:!0}}))}export{mt as component};
