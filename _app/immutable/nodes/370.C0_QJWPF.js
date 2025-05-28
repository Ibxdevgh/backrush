import{t as h,b as i,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f,c as J,n as r,r as V}from"../chunks/NgVQVlRK.js";import{n as A}from"../chunks/B4IyMRKX.js";import{H as G}from"../chunks/CXsRaEhZ.js";import{M as N}from"../chunks/hMT8fFzP.js";import{I as L}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";import{O as S,a as F}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as K}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";/* empty css                */import{F as _}from"../chunks/OFUKRh55.js";import{L as H,I as U}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S as E}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{A as q}from"../chunks/CqOphJLh.js";const z={layout:"article",title:"Dev keys",description:"Bypass Backrush rate limits and CORS errors in your development environment with Backrush Dev keys."};var B=h("Dev keys are secrets used by Backrush <!> to avoid abuse limits in testing. They are meant to be used specifically in development environments, where they hold several developer experience-related benefits:",1),Q=h("<!><!>",1),W=h("To create a new dev key, navigate to <!> &gt; <!> &gt; <!> and click <!>.",1),X=h("<!><!><!><!><!><!>",1),Z=h("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function we(T){q(T,A(z,{children:(b,ee)=>{var P=Z(),O=J(P);$(O,{children:(o,c)=>{r();var e=B(),l=n(f(e));M(l,{href:"/docs/sdks#client",children:(p,v)=>{r();var u=i("Client SDKs");t(p,u)},$$slots:{default:!0}}),r(),t(o,e)},$$slots:{default:!0}});var Y=n(O);H(Y,{ordered:!1,marker:"-",children:(o,c)=>{var e=Q(),l=f(e);U(l,{children:(v,u)=>{r();var a=i("Backrush rate limits and CORS errors are bypassed");t(v,a)},$$slots:{default:!0}});var p=n(l);U(p,{children:(v,u)=>{r();var a=i("Configurable expiration date with 1 day, 7 days, and 30 day options");t(v,a)},$$slots:{default:!0}}),t(o,e)},$$slots:{default:!0}});var w=n(Y);$(w,{children:(o,c)=>{r();var e=i("This is highly beneficial in scenarios where you are repeatedly sending the same requests to Backrush in a short period of time, such as manual or E2E testing and checks in your CI/CD pipeline.");t(o,e)},$$slots:{default:!0}});var C=n(w);L(C,{title:"Important note",children:(o,c)=>{$(o,{children:(e,l)=>{r();var p=i("Dev keys should never be used in production environments, only in development environments, as they can make your app more susceptible to abuse and security breaches.");t(e,p)},$$slots:{default:!0}})}});var R=n(C);G(R,{id:"create-dev-key",level:1,children:(o,c)=>{r();var e=i("Create dev key");t(o,e)},$$slots:{default:!0}});var k=n(R);$(k,{children:(o,c)=>{r();var e=W(),l=n(f(e));E(l,{marker:"**",children:(a,m)=>{r();var s=i("Overview");t(a,s)},$$slots:{default:!0}});var p=n(l,2);E(p,{marker:"**",children:(a,m)=>{r();var s=i("Integrations");t(a,s)},$$slots:{default:!0}});var v=n(p,2);E(v,{marker:"**",children:(a,m)=>{r();var s=i("Dev keys");t(a,s)},$$slots:{default:!0}});var u=n(v,2);E(u,{marker:"**",children:(a,m)=>{r();var s=i("Create Dev key");t(a,s)},$$slots:{default:!0}}),r(),t(o,e)},$$slots:{default:!0}});var D=n(k);S(D,{children:(o,c)=>{$(o,{children:(e,l)=>{K(e,{src:"/images/docs/dev-keys/dark.png",alt:"Create dev key"})},$$slots:{default:!0}})}});var g=n(D);F(g,{children:(o,c)=>{$(o,{children:(e,l)=>{K(e,{src:"/images/docs/dev-keys/light.png",alt:"Create dev key"})},$$slots:{default:!0}})}});var I=n(g);$(I,{children:(o,c)=>{r();var e=i("You can then implement the dev key while initializing the Backrush client in your app.");t(o,e)},$$slots:{default:!0}});var x=n(I);N(x,{children:(o,c)=>{var e=X(),l=f(e);_(l,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key
`,language:"client-web",process:!0,children:(s,y)=>{r();var d=i(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key`);t(s,d)},$$slots:{default:!0}});var p=n(l);_(p,{content:`import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key
`,language:"client-flutter",process:!0,children:(s,y)=>{r();var d=i(`import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key`);t(s,d)},$$slots:{default:!0}});var v=n(p);_(v,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key
`,language:"client-react-native",process:!0,children:(s,y)=>{r();var d=i(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key`);t(s,d)},$$slots:{default:!0}});var u=n(v);_(u,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>") // Your dev key
`,language:"client-apple",process:!0,children:(s,y)=>{r();var d=i(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>") // Your dev key`);t(s,d)},$$slots:{default:!0}});var a=n(u);_(a,{content:`import io.appwrite.Client

val client = Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>") // Your dev key
`,language:"client-android-kotlin",process:!0,children:(s,y)=>{r();var d=i(`import io.appwrite.Client

val client = Client(context)
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>") // Your dev key`);t(s,d)},$$slots:{default:!0}});var m=n(a);_(m,{content:`import io.appwrite.Client;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>"); // Your dev key
`,language:"client-android-java",process:!0,children:(s,y)=>{r();var d=i(`import io.appwrite.Client;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<YOUR_PROJECT_ID>")
    .setDevKey("<YOUR_DEV_KEY>"); // Your dev key`);t(s,d)},$$slots:{default:!0}}),t(o,e)},$$slots:{default:!0}});var j=n(x);$(j,{children:(o,c)=>{r();var e=i("If you need to replace your dev key, create a new key, update your app credentials and, once ready, delete your old key.");t(o,e)},$$slots:{default:!0}}),V(P),t(b,P)},$$slots:{default:!0}}))}export{we as component};
