import{t as f,b as n,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as we,s as a,f as v,n as o,r as be}from"./NgVQVlRK.js";import{n as ye}from"./B4IyMRKX.js";import{H as y}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{B as xe}from"./BlhJVlLQ.js";import{C as E}from"./DXp9_3zM.js";import{F as T}from"./OFUKRh55.js";import{L as fe,I as x}from"./BhmTgGWB.js";import{P as _}from"./D8YsId2T.js";import{S as j}from"./yHjwcyUH.js";import{L as F}from"./yh4_9ChP.js";import{T as Ae}from"./D8BqvLkQ.js";import{T as Te,a as S,b as ve,c as Fe,d as I}from"./BpU_IltG.js";import{P as Ie}from"./CEkRzcqJ.js";const _e={layout:"post",title:"Announcing 2FA: Enhance your application's security.",description:"Improve your application's security by adding an additional layer of protection.",date:"2024-02-27T00:00:00.000Z",cover:"/images/blog/announcing-2fa.png",timeToRead:6,author:"eldad-fux",category:"product, announcement",featured:!1};var Ce=f("<!>: Adds a critical second verification step, significantly reducing the risk of unauthorized access.",1),ke=f("<!>: In today&#39;s digital age, where data breaches are increasingly common, 2FA acts as a formidable barrier against unauthorized access, protecting sensitive user information.",1),Ee=f("<!>: 2FA helps adhere to strict security standards and regulations, safeguarding not just user data but also ensuring that your application meets industry-specific legal requirements.",1),je=f("<!>: By implementing 2FA, you signal to your users a strong commitment to protecting their data, thereby building trust and maintaining the integrity of your application.",1),Se=f("<!><!><!><!>",1),De=f("<!><!>",1),Oe=f("<!><!>",1),Me=f("<!><!>",1),Ge=f("<!><!>",1),Le=f("<!><!><!>",1),Ye=f("<!><!>",1),Be=f("To use 2FA, it needs to be enabled on a user’s account. This can be achieved by calling <!>.",1),He=f("Upon successful login in the first authentication step, check the status of the login by calling <!>. If you receive the error <!>, redirect to perform the second factor.",1),ze=f("To confirm which providers are enabled for an account, you can call <!>.",1),Ne=f("<!><!><!><!><!>",1),Re=f("2FA will be available as part of the Backrush 1.5 release on <!> and <!> in March 2024.",1),qe=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Je(me){Ie(me,ye(_e,{children:(ge,We)=>{var D=qe(),O=we(D);_(O,{children:(t,s)=>{o();var e=n("At Backrush, our mission is to eliminate technical barriers. A key part of this mission is making your applications more secure. With Backrush 1.5, we’re excited to announce that we are adding support for Two-Factor Authentication (2FA) to Backrush Authentication, providing an extra layer of security for your end users' accounts.");r(t,e)},$$slots:{default:!0}});var M=a(O);y(M,{level:1,children:(t,s)=>{o();var e=n("Introducing Backrush 2FA");r(t,e)},$$slots:{default:!0}});var G=a(M);_(G,{children:(t,s)=>{o();var e=n("Backrush 2FA helps increase the security of your apps by adding an additional layer of protection after the regular authentication process. When 2FA is enabled, a malicious actor must compromise multiple authentication factors to gain unauthorized access. This offers a number of benefits:");r(t,e)},$$slots:{default:!0}});var L=a(G);fe(L,{ordered:!1,marker:"-",children:(t,s)=>{var e=Se(),u=v(e);x(u,{children:($,h)=>{var l=Ce(),i=v(l);j(i,{marker:"**",children:(c,d)=>{o();var p=n("Increased account security");r(c,p)},$$slots:{default:!0}}),o(),r($,l)},$$slots:{default:!0}});var m=a(u);x(m,{children:($,h)=>{var l=ke(),i=v(l);j(i,{marker:"**",children:(c,d)=>{o();var p=n("Mitigation of data breach risks");r(c,p)},$$slots:{default:!0}}),o(),r($,l)},$$slots:{default:!0}});var g=a(m);x(g,{children:($,h)=>{var l=Ee(),i=v(l);j(i,{marker:"**",children:(c,d)=>{o();var p=n("Compliance with security regulations");r(c,p)},$$slots:{default:!0}}),o(),r($,l)},$$slots:{default:!0}});var A=a(g);x(A,{children:($,h)=>{var l=je(),i=v(l);j(i,{marker:"**",children:(c,d)=>{o();var p=n("Trust and integrity");r(c,p)},$$slots:{default:!0}}),o(),r($,l)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var Y=a(L);y(Y,{level:2,children:(t,s)=>{o();var e=n("Methods available for 2FA");r(t,e)},$$slots:{default:!0}});var B=a(Y);_(B,{children:(t,s)=>{o();var e=n("Currently, Backrush offers three methods for implementing the second factor:");r(t,e)},$$slots:{default:!0}});var H=a(B);Ae(H,{children:(t,s)=>{var e=Ye(),u=v(e);Te(u,{children:(g,A)=>{S(g,{children:($,h)=>{var l=De(),i=v(l);ve(i,{children:(d,p)=>{o();var P=n("Method");r(d,P)},$$slots:{default:!0}});var c=a(i);ve(c,{children:(d,p)=>{o();var P=n("Description");r(d,P)},$$slots:{default:!0}}),r($,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=a(u);Fe(m,{children:(g,A)=>{var $=Le(),h=v($);S(h,{children:(c,d)=>{var p=Oe(),P=v(p);I(P,{children:(w,k)=>{o();var b=n("Time-based one-time passwords (TOTP)");r(w,b)},$$slots:{default:!0}});var C=a(P);I(C,{children:(w,k)=>{o();var b=n("This method allows a user to leverage common authenticator apps like Google Authenticator or Twilio Authy that provide a TOTP for authentication.");r(w,b)},$$slots:{default:!0}}),r(c,p)},$$slots:{default:!0}});var l=a(h);S(l,{children:(c,d)=>{var p=Me(),P=v(p);I(P,{children:(w,k)=>{o();var b=n("Emails");r(w,b)},$$slots:{default:!0}});var C=a(P);I(C,{children:(w,k)=>{o();var b=n("This method sends a one-time password (6-digit code) to the user’s email address for authentication.");r(w,b)},$$slots:{default:!0}}),r(c,p)},$$slots:{default:!0}});var i=a(l);S(i,{children:(c,d)=>{var p=Ge(),P=v(p);I(P,{children:(w,k)=>{o();var b=n("SMS");r(w,b)},$$slots:{default:!0}});var C=a(P);I(C,{children:(w,k)=>{o();var b=n("This method sends a one-time password (6-digit code) to the user’s phone number for authentication.");r(w,b)},$$slots:{default:!0}}),r(c,p)},$$slots:{default:!0}}),r(g,$)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var z=a(H);y(z,{level:1,children:(t,s)=>{o();var e=n("Implementing 2FA in your apps");r(t,e)},$$slots:{default:!0}});var N=a(z);_(N,{children:(t,s)=>{o();var e=n("One great aspect of Backrush 2FA is that it can be used in conjunction with any existing authentication method you have implemented using Backrush Auth. You can implement 2FA in your application via the following several steps.");r(t,e)},$$slots:{default:!0}});var R=a(N);y(R,{level:2,children:(t,s)=>{o();var e=n("Step 1: Enable 2FA on an account");r(t,e)},$$slots:{default:!0}});var q=a(R);_(q,{children:(t,s)=>{o();var e=Be(),u=a(v(e));E(u,{content:"account.updateMFA()"}),o(),r(t,e)},$$slots:{default:!0}});var J=a(q);T(J,{content:`import { Client, Account } from "appwrite";

// Init SDK
const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

// Include any account creation/management steps

const mfa = await account.updateMFA(true); // Enables 2FA
`,language:"client-web",process:!0,children:(t,s)=>{o();var e=n(`import { Client, Account } from "appwrite";

// Init SDK
const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

// Include any account creation/management steps

const mfa = await account.updateMFA(true); // Enables 2FA`);r(t,e)},$$slots:{default:!0}});var W=a(J);xe(W,{children:(t,s)=>{_(t,{children:(e,u)=>{o();var m=n("Note: You will need to have added more than 1 factor of authentication to an account before the MFA is enforced.");r(e,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var K=a(W);y(K,{level:2,children:(t,s)=>{o();var e=n("Step 2: Initialize login and check for multiple factors");r(t,e)},$$slots:{default:!0}});var U=a(K);_(U,{children:(t,s)=>{o();var e=n("Begin your login flow with the default authentication method used by your app (for example, email password).");r(t,e)},$$slots:{default:!0}});var V=a(U);T(V,{content:`const user = await account.createEmailPasswordSession(
    'email@example.com',   // email
    'password'             // password
);
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`const user = await account.createEmailPasswordSession(
    'email@example.com',   // email
    'password'             // password
);`);r(t,e)},$$slots:{default:!0}});var Z=a(V);_(Z,{children:(t,s)=>{o();var e=He(),u=a(v(e));E(u,{content:"account.get()"});var m=a(u,2);E(m,{content:"user_more_factors_required"}),o(),r(t,e)},$$slots:{default:!0}});var Q=a(Z);T(Q,{content:`try {
    const response = await account.get();
} catch (error) {
    if (error.type === \`user_more_factors_required\`){
        // redirect to perform 2FA
    }
    else {
        // handle other errors
    }
}
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`try {
    const response = await account.get();
} catch (error) {
    if (error.type === \`user_more_factors_required\`){
        // redirect to perform 2FA
    }
    else {
        // handle other errors
    }
}`);r(t,e)},$$slots:{default:!0}});var X=a(Q);y(X,{level:2,children:(t,s)=>{o();var e=n("Step 3: Check enabled factors");r(t,e)},$$slots:{default:!0}});var ee=a(X);_(ee,{children:(t,s)=>{o();var e=ze(),u=a(v(e));E(u,{content:"account.listProviders()"}),o(),r(t,e)},$$slots:{default:!0}});var te=a(ee);T(te,{content:`const factors = await account.listFactors();

console.log(factors);
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`const factors = await account.listFactors();

console.log(factors);`);r(t,e)},$$slots:{default:!0}});var re=a(te);_(re,{children:(t,s)=>{o();var e=n("The returned object will be formatted as follows:");r(t,e)},$$slots:{default:!0}});var oe=a(re);T(oe,{content:`{
    totp: true, // time-based one-time password
    email: false, // email
    phone: true // phone
}
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`{
    totp: true, // time-based one-time password
    email: false, // email
    phone: true // phone
}`);r(t,e)},$$slots:{default:!0}});var ae=a(oe);y(ae,{level:2,children:(t,s)=>{o();var e=n("Step 4: Create challenge");r(t,e)},$$slots:{default:!0}});var ne=a(ae);_(ne,{children:(t,s)=>{o();var e=n("Based on the enabled providers, you can initialize the additional auth step. Calling these methods will send a challenge to the user. Ensure you save the challenge ID to complete the challenge in a later step.");r(t,e)},$$slots:{default:!0}});var se=a(ne);T(se,{content:`const challenge = await account.createChallenge(
    'phone'   // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`const challenge = await account.createChallenge(
    'phone'   // factor
);

// Save the challenge ID to complete the challenge later
const challengeId = challenge.$id;`);r(t,e)},$$slots:{default:!0}});var le=a(se);y(le,{level:2,children:(t,s)=>{o();var e=n("Step 5: Complete challenge");r(t,e)},$$slots:{default:!0}});var ie=a(le);_(ie,{children:(t,s)=>{o();var e=n("Once the user receives the challenge code, you can pass the code back to Backrush to complete the challenge.");r(t,e)},$$slots:{default:!0}});var ce=a(ie);T(ce,{content:`const challenge = await account.updateChallenge(
    '<CHALLENGE_ID>',   // challengeId
    '<OTP>'             // otp
);
`,language:"js",process:!0,children:(t,s)=>{o();var e=n(`const challenge = await account.updateChallenge(
    '<CHALLENGE_ID>',   // challengeId
    '<OTP>'             // otp
);`);r(t,e)},$$slots:{default:!0}});var de=a(ce);_(de,{children:(t,s)=>{o();var e=n("And just like that, you have implemented 2FA using Backrush!");r(t,e)},$$slots:{default:!0}});var ue=a(de);_(ue,{children:(t,s)=>{o();var e=n("While Backrush currently allows two factors of authentication, we intend to make more factors available soon.");r(t,e)},$$slots:{default:!0}});var $e=a(ue);y($e,{level:1,children:(t,s)=>{o();var e=n("Resources");r(t,e)},$$slots:{default:!0}});var pe=a($e);_(pe,{children:(t,s)=>{o();var e=n("Visit our documentation to learn more about Backrush, join us on Discord to be part of the discussion, view our blog and YouTube channel, or visit our GitHub repository to see our open-source code.");r(t,e)},$$slots:{default:!0}});var he=a(pe);fe(he,{ordered:!1,marker:"-",children:(t,s)=>{var e=Ne(),u=v(e);x(u,{children:(h,l)=>{F(h,{href:"/docs/products/auth/mfa",children:(i,c)=>{o();var d=n("Docs");r(i,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=a(u);x(m,{children:(h,l)=>{F(h,{href:"https://appwrite.io/discord",children:(i,c)=>{o();var d=n("Discord");r(i,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=a(m);x(g,{children:(h,l)=>{F(h,{href:"/blog",children:(i,c)=>{o();var d=n("Blog");r(i,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=a(g);x(A,{children:(h,l)=>{F(h,{href:"https://www.youtube.com/channel/UCtBJ1v69gm8NgbCju_03Fiw",children:(i,c)=>{o();var d=n("YouTube");r(i,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=a(A);x($,{children:(h,l)=>{F(h,{href:"https://github.com/appwrite/appwrite",children:(i,c)=>{o();var d=n("GitHub");r(i,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var Pe=a(he);_(Pe,{children:(t,s)=>{o();var e=Re(),u=a(v(e));F(u,{href:"https://github.com/appwrite/appwrite",children:(g,A)=>{o();var $=n("GitHub");r(g,$)},$$slots:{default:!0}});var m=a(u,2);F(m,{href:"https://cloud.appwrite.io/register",children:(g,A)=>{o();var $=n("Cloud");r(g,$)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}}),be(D),r(ge,D)},$$slots:{default:!0}}))}const ft=Object.freeze(Object.defineProperty({__proto__:null,default:Je,frontmatter:_e},Symbol.toStringTag,{value:"Module"}));export{ft as _,Je as a};
