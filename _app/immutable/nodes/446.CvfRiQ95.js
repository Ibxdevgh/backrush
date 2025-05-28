import{t as p,b as r,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as o,f as $,c as te,n,r as ne}from"../chunks/NgVQVlRK.js";import{n as oe}from"../chunks/B4IyMRKX.js";import{H as q}from"../chunks/CXsRaEhZ.js";import{M as y}from"../chunks/hMT8fFzP.js";import{I as re}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as se}from"../chunks/DXp9_3zM.js";import{F as _}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P}from"../chunks/D8YsId2T.js";import{S as ie}from"../chunks/yHjwcyUH.js";import{L as ae}from"../chunks/yh4_9ChP.js";import{T as le}from"../chunks/D8BqvLkQ.js";import{T as ce,a as A,b as Q,c as ue,d as C}from"../chunks/BpU_IltG.js";import{A as pe}from"../chunks/CqOphJLh.js";const de={layout:"article",title:"Email OTP",description:"Seamless sign in with Email OTP authentication in Backrush. Learn how to provide simple and secure passwordless user accounts."};var me=p("Email OTP (one-time password) authentication lets users create accounts using their email address and log in using a 6 digit code delivered to their email inbox. This method is similar to <!>, but can provide better user experience in some scenarios.",1),$e=p("<!><!>",1),ve=p("<!><!>",1),he=p("<!><!>",1),_e=p("<!><!>",1),fe=p("<!><!><!>",1),Ie=p("<!><!>",1),we=p("<!><!>",1),Ee=p("Send an an email to initiate the authentication process. A <!> will be created for this email if it has never been used before.",1),Pe=p("<!><!><!><!><!>",1),ge=p("<!><!><!><!><!>",1),Te=p("<!><!>",1),Ce=p("By enabling security phrase feature, you will recieve <!> in the response. You need to display this phrase to the user, and we recommend informing user what this phrase is and how to check it. When security phrase is enabled, email will also include a new section providing user with the security phrase.",1),xe=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ve(V){pe(V,oe(de,{children:(X,Re)=>{var S=xe(),j=te(S);P(j,{children:(s,u)=>{n();var t=me(),l=o($(t));ae(l,{href:"/docs/products/auth/magic-url",children:(d,c)=>{n();var m=r("Magic URL login");e(d,m)},$$slots:{default:!0}}),n(),e(s,t)},$$slots:{default:!0}});var G=o(j);re(G,{title:"Email OTP vs Magic URL",children:(s,u)=>{var t=we(),l=$(t);P(l,{children:(c,m)=>{n();var v=r("Email OTP sends an email with a 6 digit code that user needs to enter into the app, while Magic URL delivers a clickable button or a link to user's inbox. Both allow passwordless login flows with different advantages.");e(c,v)},$$slots:{default:!0}});var d=o(l);le(d,{children:(c,m)=>{var v=Ie(),a=$(v);ce(a,{children:(i,ee)=>{A(i,{children:(D,b)=>{var x=$e(),O=$(x);Q(O,{children:(T,I)=>{n();var h=r("Benefits of Email OTP");e(T,h)},$$slots:{default:!0}});var g=o(O);Q(g,{children:(T,I)=>{n();var h=r("Downsides of Email OTP");e(T,h)},$$slots:{default:!0}}),e(D,x)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(a);ue(f,{children:(i,ee)=>{var D=fe(),b=$(D);A(b,{children:(g,T)=>{var I=ve(),h=$(I);C(h,{children:(w,k)=>{n();var E=r("Doesn't require user to be signed into email inbox on the device");e(w,E)},$$slots:{default:!0}});var R=o(h);C(R,{children:(w,k)=>{n();var E=r("Expires quicker");e(w,E)},$$slots:{default:!0}}),e(g,I)},$$slots:{default:!0}});var x=o(b);A(x,{children:(g,T)=>{var I=he(),h=$(I);C(h,{children:(w,k)=>{n();var E=r("Doesn't disturb application flow with a redirect");e(w,E)},$$slots:{default:!0}});var R=o(h);C(R,{children:(w,k)=>{n();var E=r("Requires more inputs from user");e(w,E)},$$slots:{default:!0}}),e(g,I)},$$slots:{default:!0}});var O=o(x);A(O,{children:(g,T)=>{var I=_e(),h=$(I);C(h,{children:(w,k)=>{n();var E=r("Doesn't require deep linking on mobile apps");e(w,E)},$$slots:{default:!0}});var R=o(h);C(R,{}),e(g,I)},$$slots:{default:!0}}),e(i,D)},$$slots:{default:!0}}),e(c,v)},$$slots:{default:!0}}),e(s,t)}});var J=o(G);q(J,{id:"send-email",level:1,children:(s,u)=>{n();var t=r("Send email");e(s,t)},$$slots:{default:!0}});var N=o(J);P(N,{children:(s,u)=>{n();var t=r("Email OTP authentication is done using a two-step authentication process. The authentication request is initiated from the client application and an email message is sent to the user's email inbox. The email will contain a 6-digit number the user can use to log in.");e(s,t)},$$slots:{default:!0}});var L=o(N);P(L,{children:(s,u)=>{n();var t=Ee(),l=o($(t));ie(l,{marker:"**",children:(d,c)=>{n();var m=r("new account");e(d,m)},$$slots:{default:!0}}),n(),e(s,t)},$$slots:{default:!0}});var U=o(L);y(U,{children:(s,u)=>{var t=Pe(),l=$(t);_(l,{content:`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const sessionToken = await account.createEmailToken(
    ID.unique(),
    'email@example.com'
);

const userId = sessionToken.userId;
`,language:"client-web",process:!0,children:(a,f)=>{n();var i=r(`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const sessionToken = await account.createEmailToken(
    ID.unique(),
    'email@example.com'
);

const userId = sessionToken.userId;`);e(a,i)},$$slots:{default:!0}});var d=o(l);_(d,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final sessionToken = await account.createEmailToken(
    userId: ID.unique(),
    email: 'email@example.com'
);

final userId = sessionToken.userId;
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var i=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final sessionToken = await account.createEmailToken(
    userId: ID.unique(),
    email: 'email@example.com'
);

final userId = sessionToken.userId;`);e(a,i)},$$slots:{default:!0}});var c=o(d);_(c,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let sessionToken = try await account.createEmailToken(
    userId: ID.unique(),
    email: "email@example.com"
);

let userId = sessionToken.userId;
`,language:"client-apple",process:!0,children:(a,f)=>{n();var i=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let sessionToken = try await account.createEmailToken(
    userId: ID.unique(),
    email: "email@example.com"
);

let userId = sessionToken.userId;`);e(a,i)},$$slots:{default:!0}});var m=o(c);_(m,{content:`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val sessionToken = account.createEmailToken(
    userId = ID.unique(),
    email = "email@example.com"
);

val userId = sessionToken.userId;
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var i=r(`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val sessionToken = account.createEmailToken(
    userId = ID.unique(),
    email = "email@example.com"
);

val userId = sessionToken.userId;`);e(a,i)},$$slots:{default:!0}});var v=o(m);_(v,{content:`mutation {
    accountCreateEmailToken(userId: "unique()", email: "email@example.com") {
        _id
        userId
        secret
        expire
    }
}
`,language:"graphql",process:!0,children:(a,f)=>{n();var i=r(`mutation {
    accountCreateEmailToken(userId: "unique()", email: "email@example.com") {
        _id
        userId
        secret
        expire
    }
}`);e(a,i)},$$slots:{default:!0}}),e(s,t)},$$slots:{default:!0}});var M=o(U);q(M,{id:"login",level:1,children:(s,u)=>{n();var t=r("Login");e(s,t)},$$slots:{default:!0}});var Y=o(M);P(Y,{children:(s,u)=>{n();var t=r("After initiating the email OTP authentication process, the returned user ID and secret are used to authenticate the user. The user will use their 6-digit one-time password to log in to your app.");e(s,t)},$$slots:{default:!0}});var B=o(Y);y(B,{children:(s,u)=>{var t=ge(),l=$(t);_(l,{content:`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    userId,
    '[SECRET]'
);
`,language:"client-web",process:!0,children:(a,f)=>{n();var i=r(`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    userId,
    '[SECRET]'
);`);e(a,i)},$$slots:{default:!0}});var d=o(l);_(d,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: userId,
    secret: '[SECRET]'
);
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var i=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: userId,
    secret: '[SECRET]'
);`);e(a,i)},$$slots:{default:!0}});var c=o(d);_(c,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: userId,
    secret: "[SECRET]"
);
`,language:"client-apple",process:!0,children:(a,f)=>{n();var i=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: userId,
    secret: "[SECRET]"
);`);e(a,i)},$$slots:{default:!0}});var m=o(c);_(m,{content:`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = userId,
    secret = "[SECRET]"
);
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var i=r(`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = userId,
    secret = "[SECRET]"
);`);e(a,i)},$$slots:{default:!0}});var v=o(m);_(v,{content:`mutation {
    accountcreateSession(userId: "<USER_ID>", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}
`,language:"graphql",process:!0,children:(a,f)=>{n();var i=r(`mutation {
    accountcreateSession(userId: "<USER_ID>", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}`);e(a,i)},$$slots:{default:!0}}),e(s,t)},$$slots:{default:!0}});var F=o(B);P(F,{children:(s,u)=>{n();var t=r("After the secret is verified, a session will be created.");e(s,t)},$$slots:{default:!0}});var H=o(F);q(H,{id:"security-phrase",level:1,children:(s,u)=>{n();var t=r("Security phrase");e(s,t)},$$slots:{default:!0}});var W=o(H);P(W,{children:(s,u)=>{n();var t=r("A security phrase is a randomly generated phrase provided on the login page, as well as inside Email OTP login email. Users must match the phrase on the login page with the phrase provided inside the email. Security phrases offer protection for various types of phishing and man-in-the-middle attacks.");e(s,t)},$$slots:{default:!0}});var z=o(W);P(z,{children:(s,u)=>{n();var t=r("By default, security phrases are disabled. To enable a security phrase in Email OTP, enable it in first step of the authentication flow.");e(s,t)},$$slots:{default:!0}});var K=o(z);y(K,{children:(s,u)=>{var t=Te(),l=$(t);_(l,{content:`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.createEmailToken(
        ID.unique(),
        'email@example.com',
        true
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(c,m)=>{n();var v=r(`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const promise = account.createEmailToken(
        ID.unique(),
        'email@example.com',
        true
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(c,v)},$$slots:{default:!0}});var d=o(l);_(d,{content:`mutation {
    accountCreateEmailToken(
        userId: "ID.unique()",
        email: "email@example.com",
        phrase: true
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}
`,language:"graphql",process:!0,children:(c,m)=>{n();var v=r(`mutation {
    accountCreateEmailToken(
        userId: "ID.unique()",
        email: "email@example.com",
        phrase: true
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}`);e(c,v)},$$slots:{default:!0}}),e(s,t)},$$slots:{default:!0}});var Z=o(K);P(Z,{children:(s,u)=>{n();var t=Ce(),l=o($(t));se(l,{content:"phrase"}),n(),e(s,t)},$$slots:{default:!0}}),ne(S),e(X,S)},$$slots:{default:!0}}))}export{Ve as component};
