import{t as $,b as a,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as K,s as o,f,n,r as Q}from"./NgVQVlRK.js";import{n as U}from"./B4IyMRKX.js";import{H as v}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as _}from"./CmUbQthf.js";import"./D9bBQFLV.js";/* empty css        */import{F as V}from"./OFUKRh55.js";import{L as X,I as g}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as J}from"./yHjwcyUH.js";import{L as y}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ee}from"./CEkRzcqJ.js";const z={layout:"post",title:"Introducing mock numbers and session alerts in Auth",description:"In response to popular demand, we're thrilled to announce two significant improvements to Backrush Auth.",date:"2024-08-23T00:00:00.000Z",cover:"/images/blog/init-day4/cover.png",timeToRead:4,author:"luke-silver",category:"init, announcement, product",featured:!1};var te=$("First, configure your mock numbers. You can do it with the Backrush console (go to your project, and then <!>)",1),re=$("This is a security feature that allows you to quickly secure your account if compromised. It&#39;s enabled by default for Cloud, and you can enable it for your Backrush project in the <!> menu:",1),oe=$("<!><!><!>",1),ne=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function se(B){ee(B,U(z,{children:(Y,ae)=>{var h=ne(),P=K(h);i(P,{children:(e,s)=>{n();var t=a("We've listened to your feedback and are introducing two new features designed to simplify phone authentication testing and bolster account security.");r(e,t)},$$slots:{default:!0}});var w=o(P);i(w,{children:(e,s)=>{n();var t=a("Mock numbers allow you to set up a list of phone numbers with a predefined, static verification code, which is perfect for app reviews and testing. Session alerts will help your users maintain their account security.");r(e,t)},$$slots:{default:!0}});var b=o(w);i(b,{children:(e,s)=>{n();var t=a("Let's dive in!");r(e,t)},$$slots:{default:!0}});var k=o(b);v(k,{level:1,children:(e,s)=>{n();var t=a("Mock numbers");r(e,t)},$$slots:{default:!0}});var I=o(k);i(I,{children:(e,s)=>{n();var t=a("Mock numbers allow you to configure a list of phone numbers that can sign in with specific, unchanging verification codes. No SMS is actually sent, making this perfect for testing environments and app review scenarios.");r(e,t)},$$slots:{default:!0}});var x=o(I);i(x,{children:(e,s)=>{n();var t=a("Ready to implement mock numbers in your project? Here's how to get started:");r(e,t)},$$slots:{default:!0}});var S=o(x);i(S,{children:(e,s)=>{n();var t=te(),u=o(f(t));J(u,{marker:"**",children:(d,m)=>{n();var l=a("Auth > Security");r(d,l)},$$slots:{default:!0}}),n(),r(e,t)},$$slots:{default:!0}});var A=o(S);i(A,{children:(e,s)=>{_(e,{src:"/images/blog/init-day4/1.png",alt:"Mock-numbers"})},$$slots:{default:!0}});var T=o(A);i(T,{children:(e,s)=>{n();var t=a("Now, in your Flutter app, you can use these mock numbers for authentication:");r(e,t)},$$slots:{default:!0}});var C=o(T);V(C,{content:`import 'package:backrush/backrush.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

Account account = Account(client);

// Create account with phone number
final userId = ID.unique();
await account.createPhoneToken(
    userId: userId,
    phone: '+1655513432',
);

// Login with phone number and OTP
final session = await account.createSessionWithPhone(
    userId: userId,
    secret: '123456',
);
`,language:"dart",process:!0,children:(e,s)=>{n();var t=a(`import 'package:backrush/backrush.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

Account account = Account(client);

// Create account with phone number
final userId = ID.unique();
await account.createPhoneToken(
    userId: userId,
    phone: '+1655513432',
);

// Login with phone number and OTP
final session = await account.createSessionWithPhone(
    userId: userId,
    secret: '123456',
);`);r(e,t)},$$slots:{default:!0}});var E=o(C);i(E,{children:(e,s)=>{n();var t=a("The mock numbers feature will be available for Pro users in 1.6.");r(e,t)},$$slots:{default:!0}});var L=o(E);v(L,{level:1,children:(e,s)=>{n();var t=a("Session alerts");r(e,t)},$$slots:{default:!0}});var O=o(L);i(O,{children:(e,s)=>{n();var t=a("When you sign into your Backrush Cloud account, you will receive an email telling you about the sign-in, including details about the session.");r(e,t)},$$slots:{default:!0}});var j=o(O);i(j,{children:(e,s)=>{n();var t=a("End-users won't receive an email if it's their first time signing in, or if they haven't set up an email address.");r(e,t)},$$slots:{default:!0}});var M=o(j);i(M,{children:(e,s)=>{_(e,{src:"/images/blog/init-day4/2.png",alt:"Email-session-alert"})},$$slots:{default:!0}});var R=o(M);i(R,{children:(e,s)=>{n();var t=re(),u=o(f(t));J(u,{marker:"**",children:(d,m)=>{n();var l=a("Auth > Security");r(d,l)},$$slots:{default:!0}}),n(),r(e,t)},$$slots:{default:!0}});var D=o(R);i(D,{children:(e,s)=>{_(e,{src:"/images/blog/init-day4/3.png",alt:"Session-alert"})},$$slots:{default:!0}});var F=o(D);v(F,{level:1,children:(e,s)=>{n();var t=a("Get started");r(e,t)},$$slots:{default:!0}});var N=o(F);i(N,{children:(e,s)=>{n();var t=a("Mock numbers help you streamline testing and development by providing a controlled environment for phone authentication. By using predefined phone numbers and verification codes, you can rapidly iterate your apps without relying on real phone numbers.");r(e,t)},$$slots:{default:!0}});var W=o(N);i(W,{children:(e,s)=>{n();var t=a("Session alerts empower users to protect their accounts and help prevent unauthorized access.");r(e,t)},$$slots:{default:!0}});var q=o(W);i(q,{children:(e,s)=>{n();var t=a("If you'd like to try these features out in your application, here are a few resources to get you started:");r(e,t)},$$slots:{default:!0}});var Z=o(q);X(Z,{ordered:!1,marker:"-",children:(e,s)=>{var t=oe(),u=f(t);g(u,{children:(l,G)=>{y(l,{href:"/docs/products/auth/phone-sms",children:(c,H)=>{n();var p=a("Read the mock numbers documentation");r(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=o(u);g(d,{children:(l,G)=>{y(l,{href:"https://discord.gg/backrush",children:(c,H)=>{n();var p=a("Join our Discord community");r(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=o(d);g(m,{children:(l,G)=>{y(l,{href:"https://www.appwrite.io/init",children:(c,H)=>{n();var p=a("Learn about Backrush Init");r(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(e,t)},$$slots:{default:!0}}),Q(h),r(Y,h)},$$slots:{default:!0}}))}const Ae=Object.freeze(Object.defineProperty({__proto__:null,default:se,frontmatter:z},Symbol.toStringTag,{value:"Module"}));export{Ae as _,se as a};
