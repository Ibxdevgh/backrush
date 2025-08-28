import{t as d,b as n,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ie,s as t,f as h,n as r,r as ue}from"../chunks/NgVQVlRK.js";import{n as pe}from"../chunks/B4IyMRKX.js";import{S as N}from"../chunks/B6JyFckC.js";import{M as j}from"../chunks/hMT8fFzP.js";import{I as de}from"../chunks/BypEz2Fd.js";import{T as oe,a as Q}from"../chunks/BHbEtIoO.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as O}from"../chunks/DXp9_3zM.js";import{F as o}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as M}from"../chunks/D8YsId2T.js";import{S as he}from"../chunks/yHjwcyUH.js";import{L as ae}from"../chunks/yh4_9ChP.js";import{A as $e}from"../chunks/CqOphJLh.js";const ve={layout:"article",title:"Multi-factor authentication",description:"Add multiple layers of authentication to your applications powered by Backrush Authentication."};var fe=d("This page covers MFA for your app&#39;s end-users. If you are looking for MFA on your Backrush Console account, please refer to the <!>.",1),ge=d("Initialize your Backrush SDK&#39;s <!>, <!>, and <!>. You&#39;ll use Avatars API to generate a QR code for the TOTP authenticator app, you can skip this import if you&#39;re not using TOTP.",1),_e=d("<!><!><!><!>",1),me=d("Before enabling MFA, you should display recovery codes to the user. The codes are single use passwords the user can use to access their account if they lose access to their MFA email, phone, or authenticator app. These codes can <!>, warn the users to save them.",1),we=d("These codes can be used to complete the <!> step if the user loses access to their MFA factors. Generate the recovery codes by calling <!>.",1),Pe=d("<!><!><!><!><!>",1),ye=d("<!><!><!><!><!><!><!>",1),Ee=d("<!><!><!><!><!>",1),Ce=d("Then, initiate verification for the email by calling <!>. Calling <!> will send a verification email to the user&#39;s email address with a link with the query parameter <!> and <!>.",1),Ie=d("<!><!><!><!><!>",1),xe=d("After the user clicks the link in the email, they will be redirected to your site with the query parameters <!> and <!>. If you&#39;re on a mobile platform, you will need to create the appropriate deep link to handle the verification.",1),Ae=d("Finally, verify the email by calling <!> with <!> and <!>.",1),Me=d("<!><!><!><!><!>",1),Se=d("<!><!><!><!><!><!><!>",1),be=d("<!><!><!><!><!>",1),Re=d("Then, initiate verification for the phone number by calling <!>.",1),De=d("<!><!><!><!><!>",1),Fe=d("After the user receives the verification code, they can verify their phone number by calling <!>.",1),Te=d("<!><!><!><!><!>",1),ke=d("<!><!><!><!><!><!>",1),Oe=d("First, add a TOTP authenticator to the user&#39;s account by calling <!>.",1),Le=d("<!><!><!><!><!>",1),Ve=d("You can generate a QR code for the user to scan by calling <!>.",1),Ue=d("<!><!><!><!><!>",1),Ye=d("If the user is unable to scan QR codes, you can display the <!> to the user.",1),je=d("Finally prompt the user to enter a TOTP from their authenticator app, then verify the authenticator by calling <!>.",1),Ge=d("<!><!><!><!><!>",1),Ne=d("<!><!><!><!><!><!><!><!>",1),Qe=d("<!><!><!>",1),ze=d("<!><!>",1),He=d("You can enable MFA on your account by calling <!>. You will need to have added more than 1 factors of authentication to an account before the MFA is enforced.",1),qe=d("<!><!><!><!>",1),Be=d("<!><!>",1),Je=d("<!><!><!><!>",1),Ke=d("<!><!>",1),We=d("Upon successful login in the first authentication step, check the status of the login by calling <!>. If more than one factors are required, you will receive the error <!>. Redirect the user in your app to perform the MFA challenge.",1),Xe=d("<!><!><!><!><!>",1),Ze=d("<!><!>",1),et=d("You can check which factors are enabled for an account using <!>. The returned object will be formatted like this.",1),tt=d("<!><!><!><!>",1),rt=d("<!><!><!>",1),nt=d("<!><!><!><!>",1),ot=d("<!><!>",1),at=d("<!><!><!><!>",1),st=d("<!><!>",1),lt=d("<!><!><!><!>",1),ct=d("<!><!>",1),it=d("<!><!><!>",1),ut=d("<!><!>",1),pt=d("<!><!><!><!>",1),dt=d("After completing the challenge, the user is now authenticated and all requests will be authorized. You can confirm this by running <!>",1),ht=d("<!><!><!>",1),$t=d("In case your user needs to recover their account, they can use the recovery codes generated in the first step with the recovery code factor. Initialize the challenge by calling <!> with the factor <!>.",1),vt=d("<!><!><!><!>",1),ft=d("Then complete the challenge by calling <!> with the challenge ID and the recovery code.",1),gt=d("<!><!><!><!>",1),_t=d("<!><!><!><!>",1),mt=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Nt(se){$e(se,pe(ve,{children:(le,wt)=>{var z=mt(),H=ie(z);M(H,{children:(V,G)=>{r();var A=n("Multi-factor authentication (MFA) greatly increases the security of your apps by adding additional layers of protection. When MFA is enabled, a malicious actor needs to compromise multiple authentication factors to gain unauthorized access. Backrush Authentication lets you easily implement MFA in your apps, letting you build more securely and quickly.");e(V,A)},$$slots:{default:!0}});var q=t(H);de(q,{title:"Looking for MFA on your Console account?",children:(V,G)=>{M(V,{children:(A,k)=>{r();var Y=fe(),S=t(h(Y));ae(S,{href:"/docs/advanced/security/mfa",children:(T,g)=>{r();var _=n("Console MFA page");e(T,_)},$$slots:{default:!0}}),r(),e(A,Y)},$$slots:{default:!0}})}});var B=t(q);M(B,{children:(V,G)=>{r();var A=n("Backrush currently allows two factors of authentication. More factors of authentication will be available soon.");e(V,A)},$$slots:{default:!0}});var J=t(B);M(J,{children:(V,G)=>{r();var A=n("Here are the steps to implement MFA in your application.");e(V,A)},$$slots:{default:!0}});var K=t(J);N(K,{id:"display-recover-code",step:1,title:"Display recovery codes",children:(V,G)=>{var A=ye(),k=h(A);M(k,{children:(y,C)=>{r();var $=ge(),l=t(h($));O(l,{content:"Client"});var a=t(l,2);O(a,{content:"Account"});var p=t(a,2);O(p,{content:"Avatars"}),r(),e(y,$)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(y,C)=>{var $=_e(),l=h($);o(l,{content:`import { Client, Account, Avatars } from "appwrite";

const client = new Client();

const account = new Account(client);
const avatars = new Avatars(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;
`,language:"client-web",process:!0,children:(L,I)=>{r();var D=n(`import { Client, Account, Avatars } from "appwrite";

const client = new Client();

const account = new Account(client);
const avatars = new Avatars(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;`);e(L,D)},$$slots:{default:!0}});var a=t(l);o(a,{content:`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);
  Avatars avatars = Avatars(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
  ;
}
`,language:"client-flutter",process:!0,children:(L,I)=>{r();var D=n(`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);
  Avatars avatars = Avatars(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
  ;
}`);e(L,D)},$$slots:{default:!0}});var p=t(a);o(p,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)
let avatars = Avatars(client)
`,language:"client-apple",process:!0,children:(L,I)=>{r();var D=n(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)
let avatars = Avatars(client)`);e(L,D)},$$slots:{default:!0}});var m=t(p);o(m,{content:`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val account = Account(client)
val avatars = Avatars(client)
`,language:"client-android-kotlin",process:!0,children:(L,I)=>{r();var D=n(`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val account = Account(client)
val avatars = Avatars(client)`);e(L,D)},$$slots:{default:!0}}),e(y,$)},$$slots:{default:!0}});var S=t(Y);M(S,{children:(y,C)=>{r();var $=me(),l=t(h($));he(l,{marker:"**",children:(a,p)=>{r();var m=n("only be generated once");e(a,m)},$$slots:{default:!0}}),r(),e(y,$)},$$slots:{default:!0}});var T=t(S);M(T,{children:(y,C)=>{r();var $=n("The code will look like this, display them to the user and remind them to save the codes in a secure place.");e(y,$)},$$slots:{default:!0}});var g=t(T);o(g,{content:`{
    "recoveryCodes": [
        "b654562828",
        "a97c13d8c0",
        "311580b5f3",
        "c4262b3f88",
        "7f6761afb4",
        "55a09989be",
    ]
}
`,language:"json",process:!0,children:(y,C)=>{r();var $=n(`{
    "recoveryCodes": [
        "b654562828",
        "a97c13d8c0",
        "311580b5f3",
        "c4262b3f88",
        "7f6761afb4",
        "55a09989be",
    ]
}`);e(y,$)},$$slots:{default:!0}});var _=t(g);M(_,{children:(y,C)=>{r();var $=we(),l=t(h($));ae(l,{href:"#complete-challenge",children:(p,m)=>{r();var L=n("Complete challenge");e(p,L)},$$slots:{default:!0}});var a=t(l,2);O(a,{content:"account.createMfaRecoveryCodes()"}),r(),e(y,$)},$$slots:{default:!0}});var E=t(_);j(E,{children:(y,C)=>{var $=Pe(),l=h($);o(l,{content:`const response = await account.createMfaRecoveryCodes();
console.log(response.recoveryCodes);
`,language:"client-web",process:!0,children:(I,D)=>{r();var x=n(`const response = await account.createMfaRecoveryCodes();
console.log(response.recoveryCodes);`);e(I,x)},$$slots:{default:!0}});var a=t(l);o(a,{content:`Future result = account.createMfaRecoveryCodes();

result.then((response) {
    print(response.recoveryCodes);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(I,D)=>{r();var x=n(`Future result = account.createMfaRecoveryCodes();

result.then((response) {
    print(response.recoveryCodes);
}).catchError((error) {
    print(error.response);
});`);e(I,x)},$$slots:{default:!0}});var p=t(a);o(p,{content:`let response = try await account.createMfaRecoveryCodes()
print(response.recoveryCodes)
`,language:"client-apple",process:!0,children:(I,D)=>{r();var x=n(`let response = try await account.createMfaRecoveryCodes()
print(response.recoveryCodes)`);e(I,x)},$$slots:{default:!0}});var m=t(p);o(m,{content:`val response = account.createMfaRecoveryCodes()
println(response.recoveryCodes)
`,language:"client-android-kotlin",process:!0,children:(I,D)=>{r();var x=n(`val response = account.createMfaRecoveryCodes()
println(response.recoveryCodes)`);e(I,x)},$$slots:{default:!0}});var L=t(m);o(L,{content:`account.createMfaRecoveryCodes(new CoroutineCallback<>((result, error) -> {
   if (error != null) {
        error.printStackTrace();
        return;
    }

    Log.d("Backrush", result.recoveryCodes.toString());
}));
`,language:"client-android-java",process:!0,children:(I,D)=>{r();var x=n(`account.createMfaRecoveryCodes(new CoroutineCallback<>((result, error) -> {
   if (error != null) {
        error.printStackTrace();
        return;
    }

    Log.d("Backrush", result.recoveryCodes.toString());
}));`);e(I,x)},$$slots:{default:!0}}),e(y,$)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var W=t(K);N(W,{id:"verify-factors",step:2,title:"Verify MFA factors",children:(V,G)=>{var A=ze(),k=h(A);M(k,{children:(S,T)=>{r();var g=n("Any verified email, phone number, or TOTP authenticator app can be used as a factor for MFA. Before they can be used as a factor, they need to be verified.");e(S,g)},$$slots:{default:!0}});var Y=t(k);oe(Y,{children:(S,T)=>{var g=Qe(),_=h(g);Q(_,{id:"email",title:"Email",children:(C,$)=>{var l=Se(),a=h(l);M(a,{children:(R,f)=>{r();var i=n("First, set your user's email if they haven't already.");e(R,i)},$$slots:{default:!0}});var p=t(a);j(p,{children:(R,f)=>{var i=Ee(),u=h(i);o(u,{content:`const response = await account.updateEmail(
    'email@example.com',  // email
    'password' // password
);
`,language:"client-web",process:!0,children:(v,s)=>{r();var P=n(`const response = await account.updateEmail(
    'email@example.com',  // email
    'password' // password
);`);e(v,P)},$$slots:{default:!0}});var c=t(u);o(c,{content:`Future result = account.updateEmail(
    email: 'email@example.com',
    password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(v,s)=>{r();var P=n(`Future result = account.updateEmail(
    email: 'email@example.com',
    password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(v,P)},$$slots:{default:!0}});var b=t(c);o(b,{content:`let response = try await account.updateEmail(
  email: "email@example.com",
  password: "password"
)
`,language:"client-apple",process:!0,children:(v,s)=>{r();var P=n(`let response = try await account.updateEmail(
  email: "email@example.com",
  password: "password"
)`);e(v,P)},$$slots:{default:!0}});var U=t(b);o(U,{content:`val response = account.updateEmail(
    email = "email@example.com",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:(v,s)=>{r();var P=n(`val response = account.updateEmail(
    email = "email@example.com",
    password = "password"
)`);e(v,P)},$$slots:{default:!0}});var w=t(U);o(w,{content:`account.updateEmail(
    "email@example.com", // email
    "password", // password
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(v,s)=>{r();var P=n(`account.updateEmail(
    "email@example.com", // email
    "password", // password
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(v,P)},$$slots:{default:!0}}),e(R,i)},$$slots:{default:!0}});var m=t(p);M(m,{children:(R,f)=>{r();var i=Ce(),u=t(h(i));O(u,{content:"account.createEmailVerification()"});var c=t(u,2);O(c,{content:"createEmailVerification"});var b=t(c,2);O(b,{content:"userId"});var U=t(b,2);O(U,{content:"secret"}),r(),e(R,i)},$$slots:{default:!0}});var L=t(m);j(L,{children:(R,f)=>{var i=Ie(),u=h(i);o(u,{content:`const res = await account.createVerification(
    'https://example.com/verify-email' // url
);
`,language:"client-web",process:!0,children:(v,s)=>{r();var P=n(`const res = await account.createVerification(
    'https://example.com/verify-email' // url
);`);e(v,P)},$$slots:{default:!0}});var c=t(u);o(c,{content:`Future result = account.createVerification(
    url: 'https://example.com/verify-email',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});

`,language:"client-flutter",process:!0,children:(v,s)=>{r();var P=n(`Future result = account.createVerification(
    url: 'https://example.com/verify-email',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(v,P)},$$slots:{default:!0}});var b=t(c);o(b,{content:`let response = try await account.createVerification(
  url: "https://example.com/verify-email"
)
`,language:"client-apple",process:!0,children:(v,s)=>{r();var P=n(`let response = try await account.createVerification(
  url: "https://example.com/verify-email"
)`);e(v,P)},$$slots:{default:!0}});var U=t(b);o(U,{content:`val response = account.createVerification(
    url = "https://example.com/verify-email"
)
`,language:"client-android-kotlin",process:!0,children:(v,s)=>{r();var P=n(`val response = account.createVerification(
    url = "https://example.com/verify-email"
)`);e(v,P)},$$slots:{default:!0}});var w=t(U);o(w,{content:`account.createVerification(
    "https://example.com/verify-email", // url
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(v,s)=>{r();var P=n(`account.createVerification(
    "https://example.com/verify-email", // url
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(v,P)},$$slots:{default:!0}}),e(R,i)},$$slots:{default:!0}});var I=t(L);M(I,{children:(R,f)=>{r();var i=xe(),u=t(h(i));O(u,{content:"userId"});var c=t(u,2);O(c,{content:"secret"}),r(),e(R,i)},$$slots:{default:!0}});var D=t(I);M(D,{children:(R,f)=>{r();var i=Ae(),u=t(h(i));O(u,{content:"account.updateVerification()"});var c=t(u,2);O(c,{content:"userId"});var b=t(c,2);O(b,{content:"secret"}),r(),e(R,i)},$$slots:{default:!0}});var x=t(D);j(x,{children:(R,f)=>{var i=Me(),u=h(i);o(u,{content:`const response = await account.updateVerification(
    '<USER_ID>',  // userId
    '<SECRET>', // secret
);
`,language:"client-web",process:!0,children:(v,s)=>{r();var P=n(`const response = await account.updateVerification(
    '<USER_ID>',  // userId
    '<SECRET>', // secret
);`);e(v,P)},$$slots:{default:!0}});var c=t(u);o(c,{content:`Future result = account.updateVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(v,s)=>{r();var P=n(`Future result = account.updateVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(v,P)},$$slots:{default:!0}});var b=t(c);o(b,{content:`let response = try await account.updateVerification(
  userId: "<USER_ID>",
  secret: "<SECRET>"
)
`,language:"client-apple",process:!0,children:(v,s)=>{r();var P=n(`let response = try await account.updateVerification(
  userId: "<USER_ID>",
  secret: "<SECRET>"
)`);e(v,P)},$$slots:{default:!0}});var U=t(b);o(U,{content:`val response = account.updateVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)
`,language:"client-android-kotlin",process:!0,children:(v,s)=>{r();var P=n(`val response = account.updateVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)`);e(v,P)},$$slots:{default:!0}});var w=t(U);o(w,{content:`account.updateVerification(
    "<USER_ID>", // userId
    "<SECRET>", // secret
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(v,s)=>{r();var P=n(`account.updateVerification(
    "<USER_ID>", // userId
    "<SECRET>", // secret
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(v,P)},$$slots:{default:!0}}),e(R,i)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}});var E=t(_);Q(E,{id:"phone",title:"Phone",children:(C,$)=>{var l=ke(),a=h(l);M(a,{children:(x,R)=>{r();var f=n("First, set your user's phone number if they haven't already.");e(x,f)},$$slots:{default:!0}});var p=t(a);j(p,{children:(x,R)=>{var f=be(),i=h(f);o(i,{content:`const response = await account.updatePhone(
    '+12065550100',  // phone
    'password' // password
);
`,language:"client-web",process:!0,children:(w,v)=>{r();var s=n(`const response = await account.updatePhone(
    '+12065550100',  // phone
    'password' // password
);`);e(w,s)},$$slots:{default:!0}});var u=t(i);o(u,{content:`Future result = account.updatePhone(
    phone: '+12065550100',
    password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(w,v)=>{r();var s=n(`Future result = account.updatePhone(
    phone: '+12065550100',
    password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(w,s)},$$slots:{default:!0}});var c=t(u);o(c,{content:`let response = try await account.updatePhone(
  phone: "+12065550100",
  password: "password"
)
`,language:"client-apple",process:!0,children:(w,v)=>{r();var s=n(`let response = try await account.updatePhone(
  phone: "+12065550100",
  password: "password"
)`);e(w,s)},$$slots:{default:!0}});var b=t(c);o(b,{content:`val response = account.updatePhone(
    phone = "+12065550100",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:(w,v)=>{r();var s=n(`val response = account.updatePhone(
    phone = "+12065550100",
    password = "password"
)`);e(w,s)},$$slots:{default:!0}});var U=t(b);o(U,{content:`account.updatePhone(
    "+12065550100", // phone
    "password", // password
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(w,v)=>{r();var s=n(`account.updatePhone(
    "+12065550100", // phone
    "password", // password
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(w,s)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var m=t(p);M(m,{children:(x,R)=>{r();var f=Re(),i=t(h(f));O(i,{content:"account.createPhoneVerification()"}),r(),e(x,f)},$$slots:{default:!0}});var L=t(m);j(L,{children:(x,R)=>{var f=De(),i=h(f);o(i,{content:`const response = await account.createPhoneVerification();
`,language:"client-web",process:!0,children:(w,v)=>{r();var s=n("const response = await account.createPhoneVerification();");e(w,s)},$$slots:{default:!0}});var u=t(i);o(u,{content:`Future result = account.createPhoneVerification();

result
    .then((response) {
        print(response);
    }).catchError((error) {
        print(error.response);
});
`,language:"client-flutter",process:!0,children:(w,v)=>{r();var s=n(`Future result = account.createPhoneVerification();

result
    .then((response) {
        print(response);
    }).catchError((error) {
        print(error.response);
});`);e(w,s)},$$slots:{default:!0}});var c=t(u);o(c,{content:`let response = try await account.createPhoneVerification()
`,language:"client-apple",process:!0,children:(w,v)=>{r();var s=n("let response = try await account.createPhoneVerification()");e(w,s)},$$slots:{default:!0}});var b=t(c);o(b,{content:`val response = account.createPhoneVerification()
`,language:"client-android-kotlin",process:!0,children:(w,v)=>{r();var s=n("val response = account.createPhoneVerification()");e(w,s)},$$slots:{default:!0}});var U=t(b);o(U,{content:`account.createPhoneVerification(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Backrush", result.toString());
}));
`,language:"client-android-java",process:!0,children:(w,v)=>{r();var s=n(`account.createPhoneVerification(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Backrush", result.toString());
}));`);e(w,s)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var I=t(L);M(I,{children:(x,R)=>{r();var f=Fe(),i=t(h(f));O(i,{content:"account.updatePhoneVerification()"}),r(),e(x,f)},$$slots:{default:!0}});var D=t(I);j(D,{children:(x,R)=>{var f=Te(),i=h(f);o(i,{content:`const response = await account.updatePhoneVerification(
    '<USER_ID>',  // userId
    '<SECRET>' // secret
);
`,language:"client-web",process:!0,children:(w,v)=>{r();var s=n(`const response = await account.updatePhoneVerification(
    '<USER_ID>',  // userId
    '<SECRET>' // secret
);`);e(w,s)},$$slots:{default:!0}});var u=t(i);o(u,{content:`Future result = account.updatePhoneVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>',
);

result.then((response) {
        print(response);
    }).catchError((error) {
        print(error.response);
    });
`,language:"client-flutter",process:!0,children:(w,v)=>{r();var s=n(`Future result = account.updatePhoneVerification(
    userId: '<USER_ID>',
    secret: '<SECRET>',
);

result.then((response) {
        print(response);
    }).catchError((error) {
        print(error.response);
    });`);e(w,s)},$$slots:{default:!0}});var c=t(u);o(c,{content:`let response = try await account.updatePhoneVerification(
  userId: "<USER_ID>",
  secret: "<SECRET>"
)
`,language:"client-apple",process:!0,children:(w,v)=>{r();var s=n(`let response = try await account.updatePhoneVerification(
  userId: "<USER_ID>",
  secret: "<SECRET>"
)`);e(w,s)},$$slots:{default:!0}});var b=t(c);o(b,{content:`val response = account.updatePhoneVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)
`,language:"client-android-kotlin",process:!0,children:(w,v)=>{r();var s=n(`val response = account.updatePhoneVerification(
    userId = "<USER_ID>",
    secret = "<SECRET>"
)`);e(w,s)},$$slots:{default:!0}});var U=t(b);o(U,{content:`account.updatePhoneVerification(
    "<USER_ID>", // userId
    "<SECRET>", // secret
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(w,v)=>{r();var s=n(`account.updatePhoneVerification(
    "<USER_ID>", // userId
    "<SECRET>", // secret
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(w,s)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}});var y=t(E);Q(y,{id:"authenticator",title:"Authenticator",children:(C,$)=>{var l=Ne(),a=h(l);M(a,{children:(f,i)=>{r();var u=Oe(),c=t(h(u));O(c,{content:"account.addAuthenticator()"}),r(),e(f,u)},$$slots:{default:!0}});var p=t(a);j(p,{children:(f,i)=>{var u=Le(),c=h(u);o(c,{content:`const { secret, uri } = await account.createMfaAuthenticator(
    'totp' // type
);
`,language:"client-web",process:!0,children:(s,P)=>{r();var F=n(`const { secret, uri } = await account.createMfaAuthenticator(
    'totp' // type
);`);e(s,F)},$$slots:{default:!0}});var b=t(c);o(b,{content:`Future result = account.createMfaAuthenticator(
    type: 'totp',
);

result.then((response) {
    print(response.secret);
    print(response.uri);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(s,P)=>{r();var F=n(`Future result = account.createMfaAuthenticator(
    type: 'totp',
);

result.then((response) {
    print(response.secret);
    print(response.uri);
}).catchError((error) {
    print(error.response);
});`);e(s,F)},$$slots:{default:!0}});var U=t(b);o(U,{content:`let response = try await account.createMfaAuthenticator(
  type: "totp"
)
print(response.secret)
print(response.uri)
`,language:"client-apple",process:!0,children:(s,P)=>{r();var F=n(`let response = try await account.createMfaAuthenticator(
  type: "totp"
)
print(response.secret)
print(response.uri)`);e(s,F)},$$slots:{default:!0}});var w=t(U);o(w,{content:`val response = account.createMfaAuthenticator(
    type = "totp"
)
println(response.secret)
println(response.uri)
`,language:"client-android-kotlin",process:!0,children:(s,P)=>{r();var F=n(`val response = account.createMfaAuthenticator(
    type = "totp"
)
println(response.secret)
println(response.uri)`);e(s,F)},$$slots:{default:!0}});var v=t(w);o(v,{content:`account.createMfaAuthenticator(
    "totp", // type
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(s,P)=>{r();var F=n(`account.createMfaAuthenticator(
    "totp", // type
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(s,F)},$$slots:{default:!0}}),e(f,u)},$$slots:{default:!0}});var m=t(p);M(m,{children:(f,i)=>{r();var u=n("This will create a secret and a URI. The URI is a URL that can be used to generate a QR code for the user to scan with their TOTP authenticator app.");e(f,u)},$$slots:{default:!0}});var L=t(m);M(L,{children:(f,i)=>{r();var u=Ve(),c=t(h(u));O(c,{content:"avatars.getQR()"}),r(),e(f,u)},$$slots:{default:!0}});var I=t(L);j(I,{children:(f,i)=>{var u=Ue(),c=h(u);o(c,{content:`const result = await avatars.getQR(
    authenticatorUrl,  // text
    800,  // size (optional)
    0,  // margin (optional)
    false // download (optional)
);

console.log(result); // Resource URL
`,language:"client-web",process:!0,children:(s,P)=>{r();var F=n(`const result = await avatars.getQR(
    authenticatorUrl,  // text
    800,  // size (optional)
    0,  // margin (optional)
    false // download (optional)
);

console.log(result); // Resource URL`);e(s,F)},$$slots:{default:!0}});var b=t(c);o(b,{content:`// download QR code image
Future result = avatars.getQR(
    text: authenticatorUrl,
    size: 800, // optional
    margin: 0, // optional
    download: false, // optional
).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes);
}).catchError((error) {
    print(error.response);
});

// display QR code image
FutureBuilder(
    future: avatars.getQR(
        text: authenticatorUrl,
        size: 800, // optional
        margin: 0, // optional
        download: false, // optional
    ), // works for both public file and private file, for private files you need to be logged in
    builder: (context, snapshot) {
        return snapshot.hasData && snapshot.data != null
            ? Image.memory(
                snapshot.data,
            )
            : CircularProgressIndicator();
    },
);
`,language:"client-flutter",process:!0,children:(s,P)=>{r();var F=n(`// download QR code image
Future result = avatars.getQR(
    text: authenticatorUrl,
    size: 800, // optional
    margin: 0, // optional
    download: false, // optional
).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes);
}).catchError((error) {
    print(error.response);
});

// display QR code image
FutureBuilder(
    future: avatars.getQR(
        text: authenticatorUrl,
        size: 800, // optional
        margin: 0, // optional
        download: false, // optional
    ), // works for both public file and private file, for private files you need to be logged in
    builder: (context, snapshot) {
        return snapshot.hasData && snapshot.data != null
            ? Image.memory(
                snapshot.data,
            )
            : CircularProgressIndicator();
    },
);`);e(s,F)},$$slots:{default:!0}});var U=t(b);o(U,{content:`let byteBuffer = try await avatars.getQR(
  text: authenticatorUrl,
  size: 800, // optional
  margin: 0, // optional
  download: xfalse // optional
)
`,language:"client-apple",process:!0,children:(s,P)=>{r();var F=n(`let byteBuffer = try await avatars.getQR(
  text: authenticatorUrl,
  size: 800, // optional
  margin: 0, // optional
  download: xfalse // optional
)`);e(s,F)},$$slots:{default:!0}});var w=t(U);o(w,{content:`val result = avatars.getQR(
    text = authenticatorUrl,
    size = 800, // optional
    margin = 0, // optional
    download = false // optional
)
`,language:"client-android-kotlin",process:!0,children:(s,P)=>{r();var F=n(`val result = avatars.getQR(
    text = authenticatorUrl,
    size = 800, // optional
    margin = 0, // optional
    download = false // optional
)`);e(s,F)},$$slots:{default:!0}});var v=t(w);o(v,{content:`avatars.getQR(
    authenticatorUrl, // text
    800, // size (optional)
    0, // margin (optional)
    false, // download (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(s,P)=>{r();var F=n(`avatars.getQR(
    authenticatorUrl, // text
    800, // size (optional)
    0, // margin (optional)
    false, // download (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(s,F)},$$slots:{default:!0}}),e(f,u)},$$slots:{default:!0}});var D=t(I);M(D,{children:(f,i)=>{r();var u=Ye(),c=t(h(u));O(c,{content:"secret"}),r(),e(f,u)},$$slots:{default:!0}});var x=t(D);M(x,{children:(f,i)=>{r();var u=je(),c=t(h(u));O(c,{content:"account.verifyMfaAuthenticator()"}),r(),e(f,u)},$$slots:{default:!0}});var R=t(x);j(R,{children:(f,i)=>{var u=Ge(),c=h(u);o(c,{content:`const promise = account.updateMfaAuthenticator(
    'totp',  // type
    '<OTP>' // otp
);
`,language:"client-web",process:!0,children:(s,P)=>{r();var F=n(`const promise = account.updateMfaAuthenticator(
    'totp',  // type
    '<OTP>' // otp
);`);e(s,F)},$$slots:{default:!0}});var b=t(c);o(b,{content:`  Future result = account.updateMfaAuthenticator(
    type: 'totp',
    otp: '<OTP>',
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });
`,language:"client-flutter",process:!0,children:(s,P)=>{r();var F=n(`Future result = account.updateMfaAuthenticator(
    type: 'totp',
    otp: '<OTP>',
  );

  result.then((response) {
    print(response);
  }).catchError((error) {
    print(error.response);
  });`);e(s,F)},$$slots:{default:!0}});var U=t(b);o(U,{content:`let response = try await account.updateMfaAuthenticator(
  type: "totp",
  otp: "<OTP>"
)
`,language:"client-apple",process:!0,children:(s,P)=>{r();var F=n(`let response = try await account.updateMfaAuthenticator(
  type: "totp",
  otp: "<OTP>"
)`);e(s,F)},$$slots:{default:!0}});var w=t(U);o(w,{content:`val response = account.updateMfaAuthenticator(
    type = "totp",
    otp = "<OTP>"
)
`,language:"client-android-kotlin",process:!0,children:(s,P)=>{r();var F=n(`val response = account.updateMfaAuthenticator(
    type = "totp",
    otp = "<OTP>"
)`);e(s,F)},$$slots:{default:!0}});var v=t(w);o(v,{content:`account.updateMfaAuthenticator(
    "totp", // type
    "<OTP>", // otp
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"client-android-java",process:!0,children:(s,P)=>{r();var F=n(`account.updateMfaAuthenticator(
    "totp", // type
    "<OTP>", // otp
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(s,F)},$$slots:{default:!0}}),e(f,u)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}}),e(S,g)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var X=t(W);N(X,{id:"enable-mfa",step:3,title:"Enable MFA on an account",children:(V,G)=>{var A=Be(),k=h(A);M(k,{children:(S,T)=>{r();var g=He(),_=t(h(g));O(_,{content:"account.updateMFA()"}),r(),e(S,g)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(S,T)=>{var g=qe(),_=h(g);o(_,{content:`const result = await account.updateMFA(true);
`,language:"client-web",process:!0,children:($,l)=>{r();var a=n("const result = await account.updateMFA(true);");e($,a)},$$slots:{default:!0}});var E=t(_);o(E,{content:`Future result = account.updateMFA(
    mfa: true,
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:($,l)=>{r();var a=n(`Future result = account.updateMFA(
    mfa: true,
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e($,a)},$$slots:{default:!0}});var y=t(E);o(y,{content:`let response = try await account.updateMFA(
  mfa: xtrue
)
`,language:"client-apple",process:!0,children:($,l)=>{r();var a=n(`let response = try await account.updateMFA(
  mfa: xtrue
)`);e($,a)},$$slots:{default:!0}});var C=t(y);o(C,{content:`val response = account.updateMFA(
    mfa = true
)
`,language:"client-android-kotlin",process:!0,children:($,l)=>{r();var a=n(`val response = account.updateMFA(
    mfa = true
)`);e($,a)},$$slots:{default:!0}}),e(S,g)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var Z=t(X);N(Z,{id:"init-login",step:4,title:"Initialize login",children:(V,G)=>{var A=Ke(),k=h(A);M(k,{children:(S,T)=>{r();var g=n("Begin your login flow with the default authentication method used by your app, for example, email password.");e(S,g)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(S,T)=>{var g=Je(),_=h(g);o(_,{content:`const session = await account.createEmailPasswordSession(
    'email@example.com', // email
    'password' // password
);
`,language:"client-web",process:!0,children:($,l)=>{r();var a=n(`const session = await account.createEmailPasswordSession(
    'email@example.com', // email
    'password' // password
);`);e($,a)},$$slots:{default:!0}});var E=t(_);o(E,{content:`Future session = account.createEmailPasswordSession(
email: 'email@example.com',
password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:($,l)=>{r();var a=n(`Future session = account.createEmailPasswordSession(
email: 'email@example.com',
password: 'password',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e($,a)},$$slots:{default:!0}});var y=t(E);o(y,{content:`let response = try await account.createEmailPasswordSession(
  email: "email@example.com",
  password: "password"
)
`,language:"client-apple",process:!0,children:($,l)=>{r();var a=n(`let response = try await account.createEmailPasswordSession(
  email: "email@example.com",
  password: "password"
)`);e($,a)},$$slots:{default:!0}});var C=t(y);o(C,{content:`val session = account.createEmailPasswordSession(
    email = "email@example.com",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:($,l)=>{r();var a=n(`val session = account.createEmailPasswordSession(
    email = "email@example.com",
    password = "password"
)`);e($,a)},$$slots:{default:!0}}),e(S,g)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var ee=t(Z);N(ee,{id:"check-for-mfa",step:5,title:"Check for multi-factor",children:(V,G)=>{var A=Ze(),k=h(A);M(k,{children:(S,T)=>{r();var g=We(),_=t(h(g));O(_,{content:"account.get()"});var E=t(_,2);O(E,{content:"user_more_factors_required"}),r(),e(S,g)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(S,T)=>{var g=Xe(),_=h(g);o(_,{content:`try {
    const response = await account.get();
    console.log(response);
} catch (error) {
    console.log(error);
    if (error.type === \`user_more_factors_required\`){
        // redirect to perform MFA
    }
    else {
        // handle other errors
    }
}
`,language:"client-web",process:!0,children:(l,a)=>{r();var p=n(`try {
    const response = await account.get();
    console.log(response);
} catch (error) {
    console.log(error);
    if (error.type === \`user_more_factors_required\`){
        // redirect to perform MFA
    }
    else {
        // handle other errors
    }
}`);e(l,p)},$$slots:{default:!0}});var E=t(_);o(E,{content:`const promise = account.get();

promise.then(function (response) {
    console.log(response);           // Success
}, function (error) {
    console.log(error);              // Failure
    if (error.type === "user_more_factors_required"){
        // redirect to perform MFA
    }
    else {
        // handle other errors
    }
});
`,language:"client-flutter",process:!0,children:(l,a)=>{r();var p=n(`const promise = account.get();

promise.then(function (response) {
    console.log(response);           // Success
}, function (error) {
    console.log(error);              // Failure
    if (error.type === "user_more_factors_required"){
        // redirect to perform MFA
    }
    else {
        // handle other errors
    }
});`);e(l,p)},$$slots:{default:!0}});var y=t(E);o(y,{content:`Future result = account.get();

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
    if (error.type == 'user_more_factors_required') {
    // redirect to perform MFA
    } else {
    // handle other errors
    }
});
`,language:"client-flutter",process:!0,children:(l,a)=>{r();var p=n(`Future result = account.get();

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
    if (error.type == 'user_more_factors_required') {
    // redirect to perform MFA
    } else {
    // handle other errors
    }
});`);e(l,p)},$$slots:{default:!0}});var C=t(y);o(C,{content:`do {
    let response = try await account.get()
} catch let error as BackrushException {
    print(error.message)
    if error.type == "user_more_factors_required" {
        // redirect to perform MFA
    } else {
        // handle other errors
    }
}
`,language:"client-apple",process:!0,children:(l,a)=>{r();var p=n(`do {
    let response = try await account.get()
} catch let error as BackrushException {
    print(error.message)
    if error.type == "user_more_factors_required" {
        // redirect to perform MFA
    } else {
        // handle other errors
    }
}`);e(l,p)},$$slots:{default:!0}});var $=t(C);o($,{content:`try {
    val response = account.get()
    println(response)
} catch (error: BackrushException) {
    println(error.message)
    if (error.type == "user_more_factors_required") {
        // redirect to perform MFA
    } else {
        // handle other errors
    }
}
`,language:"client-android-kotlin",process:!0,children:(l,a)=>{r();var p=n(`try {
    val response = account.get()
    println(response)
} catch (error: BackrushException) {
    println(error.message)
    if (error.type == "user_more_factors_required") {
        // redirect to perform MFA
    } else {
        // handle other errors
    }
}`);e(l,p)},$$slots:{default:!0}}),e(S,g)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var te=t(ee);N(te,{id:"list-provider",step:6,title:"List factors",children:(V,G)=>{var A=rt(),k=h(A);M(k,{children:(T,g)=>{r();var _=et(),E=t(h(_));O(E,{content:"account.listMfaFactors()"}),r(),e(T,_)},$$slots:{default:!0}});var Y=t(k);o(Y,{content:`{
    totp: true, // time-based one-time password
    email: false, // email
    phone: true // phone
}
`,language:"client-web",process:!0,children:(T,g)=>{r();var _=n(`{
    totp: true, // time-based one-time password
    email: false, // email
    phone: true // phone
}`);e(T,_)},$$slots:{default:!0}});var S=t(Y);j(S,{children:(T,g)=>{var _=tt(),E=h(_);o(E,{content:`const factors = await account.listMfaFactors();
// redirect based on factors returned.
`,language:"client-web",process:!0,children:(l,a)=>{r();var p=n(`const factors = await account.listMfaFactors();
// redirect based on factors returned.`);e(l,p)},$$slots:{default:!0}});var y=t(E);o(y,{content:`Future result = account.listMfaFactors();

result.then((response) {
    print(response);
    // redirect based on factors returned.
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(l,a)=>{r();var p=n(`Future result = account.listMfaFactors();

result.then((response) {
    print(response);
    // redirect based on factors returned.
}).catchError((error) {
    print(error.response);
});`);e(l,p)},$$slots:{default:!0}});var C=t(y);o(C,{content:`let response = try await account.listMfaFactors()
// redirect based on factors returned.
`,language:"client-apple",process:!0,children:(l,a)=>{r();var p=n(`let response = try await account.listMfaFactors()
// redirect based on factors returned.`);e(l,p)},$$slots:{default:!0}});var $=t(C);o($,{content:`val response = account.listMfaFactors()
// redirect based on factors returned.
`,language:"client-android-kotlin",process:!0,children:(l,a)=>{r();var p=n(`val response = account.listMfaFactors()
// redirect based on factors returned.`);e(l,p)},$$slots:{default:!0}}),e(T,_)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var re=t(te);N(re,{id:"create-challenge",step:7,title:"Create challenge",children:(V,G)=>{var A=ut(),k=h(A);M(k,{children:(S,T)=>{r();var g=n("Based on the factors available, initialize an additional auth step. Calling these methods will send a challenge to the user. You will need to save the challenge ID to complete the challenge in a later step.");e(S,g)},$$slots:{default:!0}});var Y=t(k);oe(Y,{children:(S,T)=>{var g=it(),_=h(g);Q(_,{id:"email",title:"Email",children:(C,$)=>{var l=ot(),a=h(l);M(a,{children:(m,L)=>{r();var I=n("Backrush will use a verified email on the user's account to send the challenge code via email. Note that this is only valid as a second factor if the user did not initialize their login with email OTP.");e(m,I)},$$slots:{default:!0}});var p=t(a);j(p,{children:(m,L)=>{var I=nt(),D=h(I);o(D,{content:`const challenge = await account.createMfaChallenge(
    'email'  // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;
`,language:"client-web",process:!0,children:(i,u)=>{r();var c=n(`const challenge = await account.createMfaChallenge(
    'email'  // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;`);e(i,c)},$$slots:{default:!0}});var x=t(D);o(x,{content:`Future result = account.createMfaChallenge(
factor: 'email',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(i,u)=>{r();var c=n(`Future result = account.createMfaChallenge(
factor: 'email',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});`);e(i,c)},$$slots:{default:!0}});var R=t(x);o(R,{content:`let response = try await account.createMfaChallenge(
  factor: "email"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id
`,language:"client-apple",process:!0,children:(i,u)=>{r();var c=n(`let response = try await account.createMfaChallenge(
  factor: "email"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id`);e(i,c)},$$slots:{default:!0}});var f=t(R);o(f,{content:`val response = account.createMfaChallenge(
    factor = "email"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id
`,language:"client-android-kotlin",process:!0,children:(i,u)=>{r();var c=n(`val response = account.createMfaChallenge(
    factor = "email"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id`);e(i,c)},$$slots:{default:!0}}),e(m,I)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}});var E=t(_);Q(E,{id:"phone",title:"Phone",children:(C,$)=>{var l=st(),a=h(l);M(a,{children:(m,L)=>{r();var I=n("Backrush will use a verified phone number on the user's account to send the challenge code via SMS. You cannot use this method if the user initialized their login with phone OTP.");e(m,I)},$$slots:{default:!0}});var p=t(a);j(p,{children:(m,L)=>{var I=at(),D=h(I);o(D,{content:`const challenge = await account.createMfaChallenge(
    'phone' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;
`,language:"client-web",process:!0,children:(i,u)=>{r();var c=n(`const challenge = await account.createMfaChallenge(
    'phone' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;`);e(i,c)},$$slots:{default:!0}});var x=t(D);o(x,{content:`Future result = account.createMfaChallenge(
factor: 'phone',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(i,u)=>{r();var c=n(`Future result = account.createMfaChallenge(
factor: 'phone',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});`);e(i,c)},$$slots:{default:!0}});var R=t(x);o(R,{content:`let response = try await account.createMfaChallenge(
  factor: "phone"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id
`,language:"client-apple",process:!0,children:(i,u)=>{r();var c=n(`let response = try await account.createMfaChallenge(
  factor: "phone"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id`);e(i,c)},$$slots:{default:!0}});var f=t(R);o(f,{content:`val response = account.createMfaChallenge(
    factor = "phone"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id
`,language:"client-android-kotlin",process:!0,children:(i,u)=>{r();var c=n(`val response = account.createMfaChallenge(
    factor = "phone"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id`);e(i,c)},$$slots:{default:!0}}),e(m,I)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}});var y=t(E);Q(y,{id:"totp",title:"TOTP",children:(C,$)=>{var l=ct(),a=h(l);M(a,{children:(m,L)=>{r();var I=n("Initiate a challenge for users to complete using an authenticator app.");e(m,I)},$$slots:{default:!0}});var p=t(a);j(p,{children:(m,L)=>{var I=lt(),D=h(I);o(D,{content:`const challenge = await account.createMfaChallenge(
    'totp' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;
`,language:"client-web",process:!0,children:(i,u)=>{r();var c=n(`const challenge = await account.createMfaChallenge(
    'totp' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;`);e(i,c)},$$slots:{default:!0}});var x=t(D);o(x,{content:`Future result = account.createMfaChallenge(
factor: 'totp',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(i,u)=>{r();var c=n(`Future result = account.createMfaChallenge(
factor: 'totp',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});`);e(i,c)},$$slots:{default:!0}});var R=t(x);o(R,{content:`let response = try await account.createMfaChallenge(
  factor: "totp"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id
`,language:"client-apple",process:!0,children:(i,u)=>{r();var c=n(`let response = try await account.createMfaChallenge(
  factor: "totp"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id`);e(i,c)},$$slots:{default:!0}});var f=t(R);o(f,{content:`val response = account.createMfaChallenge(
    factor = "totp"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id
`,language:"client-android-kotlin",process:!0,children:(i,u)=>{r();var c=n(`val response = account.createMfaChallenge(
    factor = "totp"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id`);e(i,c)},$$slots:{default:!0}}),e(m,I)},$$slots:{default:!0}}),e(C,l)},$$slots:{default:!0}}),e(S,g)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var ne=t(re);N(ne,{id:"complete-challenge",step:8,title:"Complete challenge",children:(V,G)=>{var A=ht(),k=h(A);M(k,{children:(T,g)=>{r();var _=n("Once the user receives the challenge code, you can pass the code back to Backrush to complete the challenge.");e(T,_)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(T,g)=>{var _=pt(),E=h(_);o(E,{content:`const response = await account.updateMfaChallenge(
    '<CHALLENGE_ID>', // challengeId
    '<OTP>' // otp
);
`,language:"client-web",process:!0,children:(l,a)=>{r();var p=n(`const response = await account.updateMfaChallenge(
    '<CHALLENGE_ID>', // challengeId
    '<OTP>' // otp
);`);e(l,p)},$$slots:{default:!0}});var y=t(E);o(y,{content:`Future result = account.updateMfaChallenge(
    challengeId: '<CHALLENGE_ID>',
    otp: '<OTP>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(l,a)=>{r();var p=n(`Future result = account.updateMfaChallenge(
    challengeId: '<CHALLENGE_ID>',
    otp: '<OTP>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(l,p)},$$slots:{default:!0}});var C=t(y);o(C,{content:`val response = account.updateMfaChallenge(
    challengeId = "<CHALLENGE_ID>",
    otp = "<OTP>"
)
`,language:"client-apple",process:!0,children:(l,a)=>{r();var p=n(`val response = account.updateMfaChallenge(
    challengeId = "<CHALLENGE_ID>",
    otp = "<OTP>"
)`);e(l,p)},$$slots:{default:!0}});var $=t(C);o($,{content:`let result = try await account.updateMfaChallenge(
  challengeId: "<CHALLENGE_ID>",
  otp: "<OTP>"
)
`,language:"client-android-kotlin",process:!0,children:(l,a)=>{r();var p=n(`let result = try await account.updateMfaChallenge(
  challengeId: "<CHALLENGE_ID>",
  otp: "<OTP>"
)`);e(l,p)},$$slots:{default:!0}}),e(T,_)},$$slots:{default:!0}});var S=t(Y);M(S,{children:(T,g)=>{r();var _=dt(),E=t(h(_));O(E,{content:"account.get()"}),e(T,_)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}});var ce=t(ne);N(ce,{id:"recovery",step:9,title:"Recovery",children:(V,G)=>{var A=_t(),k=h(A);M(k,{children:(g,_)=>{r();var E=$t(),y=t(h(E));O(y,{content:"account.createMfaChallenge()"});var C=t(y,2);O(C,{content:"recoverycode"}),r(),e(g,E)},$$slots:{default:!0}});var Y=t(k);j(Y,{children:(g,_)=>{var E=vt(),y=h(E);o(y,{content:`const challenge = await account.createMfaChallenge(
    'recoverycode' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;
`,language:"client-web",process:!0,children:(a,p)=>{r();var m=n(`const challenge = await account.createMfaChallenge(
    'recoverycode' // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;`);e(a,m)},$$slots:{default:!0}});var C=t(y);o(C,{content:`Future result = account.createMfaChallenge(
factor: 'recoverycode',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(a,p)=>{r();var m=n(`Future result = account.createMfaChallenge(
factor: 'recoverycode',
);

result.then((response) {
    print(response);
    // Save the challenge ID to complete the challenge later
    var challengeId = response.$id;
}).catchError((error) {
    print(error.response);
});`);e(a,m)},$$slots:{default:!0}});var $=t(C);o($,{content:`let response = try await account.createMfaChallenge(
  factor: "recoverycode"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id
`,language:"client-apple",process:!0,children:(a,p)=>{r();var m=n(`let response = try await account.createMfaChallenge(
  factor: "recoverycode"
)
// Save the challenge ID to complete the challenge later
let challengeId = response.id`);e(a,m)},$$slots:{default:!0}});var l=t($);o(l,{content:`val response = account.createMfaChallenge(
    factor = "recoverycode"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id
`,language:"client-android-kotlin",process:!0,children:(a,p)=>{r();var m=n(`val response = account.createMfaChallenge(
    factor = "recoverycode"
)
// Save the challenge ID to complete the challenge later
val challengeId = response.id`);e(a,m)},$$slots:{default:!0}}),e(g,E)},$$slots:{default:!0}});var S=t(Y);M(S,{children:(g,_)=>{r();var E=ft(),y=t(h(E));O(y,{content:"account.updateMfaChallenge()"}),r(),e(g,E)},$$slots:{default:!0}});var T=t(S);j(T,{children:(g,_)=>{var E=gt(),y=h(E);o(y,{content:`const response = await account.updateMfaChallenge(
    '<CHALLENGE_ID>', // challengeId
    '<RECOVERY_CODE>' // otp
);
`,language:"client-web",process:!0,children:(a,p)=>{r();var m=n(`const response = await account.updateMfaChallenge(
    '<CHALLENGE_ID>', // challengeId
    '<RECOVERY_CODE>' // otp
);`);e(a,m)},$$slots:{default:!0}});var C=t(y);o(C,{content:`Future result = account.updateMfaChallenge(
    challengeId: '<CHALLENGE_ID>',
    otp: '<RECOVERY_CODE>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});
`,language:"client-flutter",process:!0,children:(a,p)=>{r();var m=n(`Future result = account.updateMfaChallenge(
    challengeId: '<CHALLENGE_ID>',
    otp: '<RECOVERY_CODE>',
);

result.then((response) {
    print(response);
}).catchError((error) {
    print(error.response);
});`);e(a,m)},$$slots:{default:!0}});var $=t(C);o($,{content:`val response = account.updateMfaChallenge(
    challengeId = "<CHALLENGE_ID>",
    otp = "<RECOVERY_CODE>"
)
`,language:"client-apple",process:!0,children:(a,p)=>{r();var m=n(`val response = account.updateMfaChallenge(
    challengeId = "<CHALLENGE_ID>",
    otp = "<RECOVERY_CODE>"
)`);e(a,m)},$$slots:{default:!0}});var l=t($);o(l,{content:`let result = try await account.updateMfaChallenge(
  challengeId: "<CHALLENGE_ID>",
  otp: "<RECOVERY_CODE>"
)
`,language:"client-android-kotlin",process:!0,children:(a,p)=>{r();var m=n(`let result = try await account.updateMfaChallenge(
  challengeId: "<CHALLENGE_ID>",
  otp: "<RECOVERY_CODE>"
)`);e(a,m)},$$slots:{default:!0}}),e(g,E)},$$slots:{default:!0}}),e(V,A)},$$slots:{default:!0}}),ue(z),e(le,z)},$$slots:{default:!0}}))}export{Nt as component};
