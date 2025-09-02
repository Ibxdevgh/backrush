import{t as f,b as c,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as B,s as o,f as h,n as s,r as G}from"../chunks/NgVQVlRK.js";import{n as K}from"../chunks/B4IyMRKX.js";import{H as g}from"../chunks/CXsRaEhZ.js";import{M as P}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as m}from"../chunks/DXp9_3zM.js";import{F as v}from"../chunks/OFUKRh55.js";import{L as H,I as w}from"../chunks/BhmTgGWB.js";import{P as _}from"../chunks/D8YsId2T.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{A as Q}from"../chunks/CqOphJLh.js";const W={layout:"article",title:"Verify user",description:"Learn about Backrush's email and phone verification system, including verification flows and role-based access control."};var X=f("<!><!><!><!>",1),Z=f("After the user clicks the link in the email, they will be redirected to your site with the query parameters <!> and <!>. If you&#39;re on a mobile platform, you will need to create the appropriate deep link to handle the verification.",1),ee=f("<!><!><!><!>",1),te=f("<!><!><!><!>",1),ne=f("Then initiate verification by calling <!>.",1),re=f("<!><!><!><!>",1),oe=f("After the user receives the verification code, complete verification by calling <!>.",1),se=f("<!><!><!><!>",1),ae=f("Use <!> to restrict access to a specific verified user",1),ie=f("Use <!> to restrict access to any verified user",1),ce=f("<!><!>",1),le=f("<!> - Triggers on any user&#39;s verification token event",1),pe=f("<!> - Triggers when a verification token for a user is created",1),ue=f("<!> - Triggers when a verification token for a user is validated",1),de=f("<!><!><!>",1),ve=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function be(M){Q(M,K(W,{children:(N,$e)=>{var E=ve(),C=B(E);_(C,{children:(a,u)=>{s();var e=c("User verification in Backrush allows you to verify user email addresses and phone numbers. Users don't need to be verified to log in, but you can restrict resource access to verified users only using permissions.");n(a,e)},$$slots:{default:!0}});var I=o(C);g(I,{id:"verify-email",level:1,children:(a,u)=>{s();var e=c("Verify email");n(a,e)},$$slots:{default:!0}});var R=o(I);_(R,{children:(a,u)=>{s();var e=c("To verify a user's email, first ensure the user is logged in so that the verification email can be sent to the user who created the account. Then, send the verification email specifying a redirect URL. The verification secrets will be appended as query parameters to the redirect URL.");n(a,e)},$$slots:{default:!0}});var x=o(R);P(x,{children:(a,u)=>{var e=X(),l=h(e);v(l,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>') // Your project ID

const account = new Account(client);

const promise = account.createVerification('https://example.com/verify');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(t,i)=>{s();var r=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>') // Your project ID

const account = new Account(client);

const promise = account.createVerification('https://example.com/verify');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);n(t,r)},$$slots:{default:!0}});var p=o(l);v(p,{content:`import 'package:backrush/backrush.dart';

void main() {
  Client client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  Account account = Account(client);

  Future result = account.createVerification(
    url: 'https://example.com/verify'
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });
}
`,language:"client-flutter",process:!0,children:(t,i)=>{s();var r=c(`import 'package:backrush/backrush.dart';

void main() {
  Client client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  Account account = Account(client);

  Future result = account.createVerification(
    url: 'https://example.com/verify'
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });
}`);n(t,r)},$$slots:{default:!0}});var d=o(p);v(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let account = Account(client)

let token = try await account.createVerification(
    url: "https://example.com/verify"
)
`,language:"client-apple",process:!0,children:(t,i)=>{s();var r=c(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let account = Account(client)

let token = try await account.createVerification(
    url: "https://example.com/verify"
)`);n(t,r)},$$slots:{default:!0}});var $=o(d);v($,{content:`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val account = Account(client)

val response = account.createVerification(
    url = "https://example.com/verify"
)
`,language:"client-android-kotlin",process:!0,children:(t,i)=>{s();var r=c(`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val account = Account(client)

val response = account.createVerification(
    url = "https://example.com/verify"
)`);n(t,r)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var y=o(x);_(y,{children:(a,u)=>{s();var e=Z(),l=o(h(e));m(l,{content:"userId"});var p=o(l,2);m(p,{content:"secret"}),s(),n(a,e)},$$slots:{default:!0}});var T=o(y);_(T,{children:(a,u)=>{s();var e=c("Next, implement the verification page that handles the redirect.");n(a,e)},$$slots:{default:!0}});var A=o(T);P(A,{children:(a,u)=>{var e=ee(),l=h(e);v(l,{content:`import { Client, Account } from "backrush";

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

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
`,language:"client-web",process:!0,children:(t,i)=>{s();var r=c(`import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

const promise = account.updateVerification(userId, secret);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);n(t,r)},$$slots:{default:!0}});var p=o(l);v(p,{content:`import 'package:backrush/backrush.dart';

void main() {
  Client client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  Account account = Account(client);

  Future result = account.updateVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>'
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });
}
`,language:"client-flutter",process:!0,children:(t,i)=>{s();var r=c(`import 'package:backrush/backrush.dart';

void main() {
  Client client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  Account account = Account(client);

  Future result = account.updateVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>'
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });
}`);n(t,r)},$$slots:{default:!0}});var d=o(p);v(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let account = Account(client)

let response = try await account.updateVerification(
    userId: "<USER_ID>",
    secret: "<SECRET>"
)
`,language:"client-apple",process:!0,children:(t,i)=>{s();var r=c(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let account = Account(client)

let response = try await account.updateVerification(
    userId: "<USER_ID>",
    secret: "<SECRET>"
)`);n(t,r)},$$slots:{default:!0}});var $=o(d);v($,{content:`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val account = Account(client)

val response = account.updateVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)
`,language:"client-android-kotlin",process:!0,children:(t,i)=>{s();var r=c(`import io.backrush.Client
import io.backrush.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val account = Account(client)

val response = account.updateVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)`);n(t,r)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var V=o(A);g(V,{id:"verify-phone",level:1,children:(a,u)=>{s();var e=c("Verify phone");n(a,e)},$$slots:{default:!0}});var S=o(V);_(S,{children:(a,u)=>{s();var e=c("To verify a phone number, first ensure the user is logged in and has a phone number set on their account.");n(a,e)},$$slots:{default:!0}});var D=o(S);P(D,{children:(a,u)=>{var e=te(),l=h(e);v(l,{content:`const response = await account.updatePhone(
    '+12065550100',  // phone
    'password' // password
);
`,language:"client-web",process:!0,children:(t,i)=>{s();var r=c(`const response = await account.updatePhone(
    '+12065550100',  // phone
    'password' // password
);`);n(t,r)},$$slots:{default:!0}});var p=o(l);v(p,{content:`Future result = account.updatePhone(
    phone: '+12065550100',
    password: 'password'
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(t,i)=>{s();var r=c(`Future result = account.updatePhone(
    phone: '+12065550100',
    password: 'password'
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);n(t,r)},$$slots:{default:!0}});var d=o(p);v(d,{content:`let response = try await account.updatePhone(
    phone: "+12065550100",
    password: "password"
)
`,language:"client-apple",process:!0,children:(t,i)=>{s();var r=c(`let response = try await account.updatePhone(
    phone: "+12065550100",
    password: "password"
)`);n(t,r)},$$slots:{default:!0}});var $=o(d);v($,{content:`val response = account.updatePhone(
    phone = "+12065550100",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:(t,i)=>{s();var r=c(`val response = account.updatePhone(
    phone = "+12065550100",
    password = "password"
)`);n(t,r)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var U=o(D);_(U,{children:(a,u)=>{s();var e=ne(),l=o(h(e));m(l,{content:"createPhoneVerification"}),s(),n(a,e)},$$slots:{default:!0}});var b=o(U);P(b,{children:(a,u)=>{var e=re(),l=h(e);v(l,{content:`const response = await account.createPhoneVerification();
`,language:"client-web",process:!0,children:(t,i)=>{s();var r=c("const response = await account.createPhoneVerification();");n(t,r)},$$slots:{default:!0}});var p=o(l);v(p,{content:`Future result = account.createPhoneVerification();

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(t,i)=>{s();var r=c(`Future result = account.createPhoneVerification();

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);n(t,r)},$$slots:{default:!0}});var d=o(p);v(d,{content:`let response = try await account.createPhoneVerification()
`,language:"client-apple",process:!0,children:(t,i)=>{s();var r=c("let response = try await account.createPhoneVerification()");n(t,r)},$$slots:{default:!0}});var $=o(d);v($,{content:`val response = account.createPhoneVerification()
`,language:"client-android-kotlin",process:!0,children:(t,i)=>{s();var r=c("val response = account.createPhoneVerification()");n(t,r)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var k=o(b);_(k,{children:(a,u)=>{s();var e=oe(),l=o(h(e));m(l,{content:"updatePhoneVerification"}),s(),n(a,e)},$$slots:{default:!0}});var j=o(k);P(j,{children:(a,u)=>{var e=se(),l=h(e);v(l,{content:`const response = await account.updatePhoneVerification(
    '[USER_ID]',  // userId
    '[SECRET]' // secret
);
`,language:"client-web",process:!0,children:(t,i)=>{s();var r=c(`const response = await account.updatePhoneVerification(
    '[USER_ID]',  // userId
    '[SECRET]' // secret
);`);n(t,r)},$$slots:{default:!0}});var p=o(l);v(p,{content:`Future result = account.updatePhoneVerification(
    userId: '[USER_ID]',
    secret: '[SECRET]'
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(t,i)=>{s();var r=c(`Future result = account.updatePhoneVerification(
    userId: '[USER_ID]',
    secret: '[SECRET]'
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);n(t,r)},$$slots:{default:!0}});var d=o(p);v(d,{content:`let response = try await account.updatePhoneVerification(
    userId: "[USER_ID]",
    secret: "[SECRET]"
)
`,language:"client-apple",process:!0,children:(t,i)=>{s();var r=c(`let response = try await account.updatePhoneVerification(
    userId: "[USER_ID]",
    secret: "[SECRET]"
)`);n(t,r)},$$slots:{default:!0}});var $=o(d);v($,{content:`val response = account.updatePhoneVerification(
    userId = "[USER_ID]",
    secret = "[SECRET]"
)
`,language:"client-android-kotlin",process:!0,children:(t,i)=>{s();var r=c(`val response = account.updatePhoneVerification(
    userId = "[USER_ID]",
    secret = "[SECRET]"
)`);n(t,r)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var O=o(j);g(O,{id:"restrict-access",level:1,children:(a,u)=>{s();var e=c("Restrict access");n(a,e)},$$slots:{default:!0}});var F=o(O);_(F,{children:(a,u)=>{s();var e=c("You can restrict resource access to verified users in two ways:");n(a,e)},$$slots:{default:!0}});var J=o(F);H(J,{ordered:!1,marker:"-",children:(a,u)=>{var e=ce(),l=h(e);w(l,{children:(d,$)=>{s();var t=ae(),i=o(h(t));m(i,{content:'user([USER_ID], "verified")'}),s(),n(d,t)},$$slots:{default:!0}});var p=o(l);w(p,{children:(d,$)=>{s();var t=ie(),i=o(h(t));m(i,{content:'users("verified")'}),s(),n(d,t)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var L=o(J);g(L,{id:"verification-events",level:1,children:(a,u)=>{s();var e=c("Verification events");n(a,e)},$$slots:{default:!0}});var Y=o(L);_(Y,{children:(a,u)=>{s();var e=c("The following events are triggered during the verification process:");n(a,e)},$$slots:{default:!0}});var q=o(Y);H(q,{ordered:!1,marker:"-",children:(a,u)=>{var e=de(),l=h(e);w(l,{children:($,t)=>{var i=le(),r=h(i);m(r,{content:"users.*.verification.*"}),s(),n($,i)},$$slots:{default:!0}});var p=o(l);w(p,{children:($,t)=>{var i=pe(),r=h(i);m(r,{content:"users.*.verification.*.create"}),s(),n($,i)},$$slots:{default:!0}});var d=o(p);w(d,{children:($,t)=>{var i=ue(),r=h(i);m(r,{content:"users.*.verification.*.update"}),s(),n($,i)},$$slots:{default:!0}}),n(a,e)},$$slots:{default:!0}});var z=o(q);_(z,{children:(a,u)=>{s();var e=c("Each event returns a Token Object.");n(a,e)},$$slots:{default:!0}}),G(E),n(N,E)},$$slots:{default:!0}}))}export{be as component};
