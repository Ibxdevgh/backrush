import{t as P,b as o,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as H,s as e,f as y,n as r,r as U}from"../chunks/NgVQVlRK.js";import{n as z}from"../chunks/B4IyMRKX.js";import{S}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{C as M,a as D}from"../chunks/rEuJ3T1U.js";import{O as W,a as Y}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as E}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as R}from"../chunks/DXp9_3zM.js";import{F as k}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as n}from"../chunks/D8YsId2T.js";import{S as G}from"../chunks/yHjwcyUH.js";import{L as B}from"../chunks/yh4_9ChP.js";import{A as X}from"../chunks/CqOphJLh.js";const Z={layout:"article",title:"Start with Web",description:"Build JavaScript or Typescript web apps with Backrush. Add authentication, user management, file storage, and more. Read our guide to get started!",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var tt=P("Head to the <!>.",1),et=P("Then, under <!>, add a <!>. The <!> should be <!> or the domain on which you&#39;re hosting your web app.",1),rt=P("<!><!><!><!><!><!><!><!>",1),ot=P("You can also add the Backrush Web SDK using CDN by adding a script tag to your HTML file. The SDK will be available globally through the <!> namespace.",1),st=P("<!><!><!><!>",1),at=P("If you installed via npm, you can import <!> and <!> from the Backrush SDK.",1),nt=P("<!><!><!><!>",1),lt=P("<!><!>",1),it=P("When you fetch documents, you can use this new <!> interface like this.",1),pt=P("<!><!><!><!><!>",1),dt=P("<!><!><!><!><!><!>",1),ct=P("<!><!><!><!>",1),ut=P("<!><!><!><!><!>",1),$t=P("<article><!><!><!><!><!><!><!></article>");function Nt(Q){X(Q,z(Z,{children:(V,ht)=>{var T=$t(),q=H(T);n(q,{children:(g,j)=>{r();var $=o("Learn how to add Backrush to your web apps.");t(g,$)},$$slots:{default:!0}});var O=e(q);S(O,{id:"step-1",step:1,title:"Create project",children:(g,j)=>{var $=rt(),f=y($);n(f,{children:(p,x)=>{r();var d=tt(),A=e(y(d));B(A,{href:"https://cloud.appwrite.io/console",children:(m,C)=>{r();var c=o("Backrush Console");t(m,c)},$$slots:{default:!0}}),r(),t(p,d)},$$slots:{default:!0}});var v=e(f);W(v,{children:(p,x)=>{n(p,{children:(d,A)=>{E(d,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var h=e(v);Y(h,{children:(p,x)=>{n(p,{children:(d,A)=>{E(d,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var w=e(h);n(w,{children:(p,x)=>{r();var d=o("If this is your first time using Backrush, create an account and create your first project.");t(p,d)},$$slots:{default:!0}});var i=e(w);n(i,{children:(p,x)=>{r();var d=et(),A=e(y(d));G(A,{marker:"**",children:(_,u)=>{r();var b=o("Add a platform");t(_,b)},$$slots:{default:!0}});var m=e(A,2);G(m,{marker:"**",children:(_,u)=>{r();var b=o("Web app");t(_,b)},$$slots:{default:!0}});var C=e(m,2);G(C,{marker:"**",children:(_,u)=>{r();var b=o("Hostname");t(_,b)},$$slots:{default:!0}});var c=e(C,2);R(c,{content:"localhost"}),r(),t(p,d)},$$slots:{default:!0}});var s=e(i);W(s,{children:(p,x)=>{n(p,{children:(d,A)=>{E(d,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var a=e(s);Y(a,{children:(p,x)=>{n(p,{children:(d,A)=>{E(d,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var l=e(a);n(l,{children:(p,x)=>{r();var d=o("You can skip optional steps.");t(p,d)},$$slots:{default:!0}}),t(g,$)},$$slots:{default:!0}});var N=e(O);S(N,{id:"step-2",step:2,title:"Install Backrush",children:(g,j)=>{var $=st(),f=y($);n(f,{children:(i,s)=>{r();var a=o("You can install the Backrush Web SDK using a package manager.");t(i,a)},$$slots:{default:!0}});var v=e(f);k(v,{content:`npm install appwrite@14.0.1
`,language:"sh",process:!0,children:(i,s)=>{r();var a=o("npm install appwrite@14.0.1");t(i,a)},$$slots:{default:!0}});var h=e(v);n(h,{children:(i,s)=>{r();var a=ot(),l=e(y(a));R(l,{content:"Backrush"}),r(),t(i,a)},$$slots:{default:!0}});var w=e(h);k(w,{content:`<script src="https://cdn.jsdelivr.net/npm/appwrite@17.0.0"><\/script>
`,language:"html",process:!0,children:(i,s)=>{r();var a=o('<script src="https://cdn.jsdelivr.net/npm/appwrite@17.0.0"><\/script>');t(i,a)},$$slots:{default:!0}}),t(g,$)},$$slots:{default:!0}});var K=e(N);S(K,{id:"step-3",step:3,title:"Initialize Backrush",children:(g,j)=>{var $=nt(),f=y($);n(f,{children:(i,s)=>{r();var a=at(),l=e(y(a));R(l,{content:"Client"});var p=e(l,2);R(p,{content:"Account"}),r(),t(i,a)},$$slots:{default:!0}});var v=e(f);k(v,{content:`import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
`,language:"client-web",process:!0,children:(i,s)=>{r();var a=o(`import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';`);t(i,a)},$$slots:{default:!0}});var h=e(v);n(h,{children:(i,s)=>{r();var a=o("If you're using CDN, the library loads directly in your browser as a global object, so you access it through Backrush instead of imports.");t(i,a)},$$slots:{default:!0}});var w=e(h);k(w,{content:`const client = new Backrush.Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>') // Replace with your project ID

export const account = new Backrush.Account(client)
export const databases = new Backrush.Databases(client)
`,language:"js",process:!0,children:(i,s)=>{r();var a=o(`const client = new Backrush.Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>') // Replace with your project ID

export const account = new Backrush.Account(client)
export const databases = new Backrush.Databases(client)`);t(i,a)},$$slots:{default:!0}}),t(g,$)},$$slots:{default:!0}});var L=e(K);S(L,{id:"step-4",step:4,title:"Using TypeScript",children:(g,j)=>{var $=lt(),f=y($);n(f,{children:(h,w)=>{r();var i=o("If you prefer TypeScript, you can import TypeScript models from the Backrush SDK.");t(h,i)},$$slots:{default:!0}});var v=e(f);k(v,{content:`// appwrite.ts

import { Client, Databases, Account } from "appwrite";
// Import type models for Backrush
import { type Models } from 'appwrite';

const client: Client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
const authUser: Models.Session = await account.createEmailPasswordSession(email, password);
`,language:"ts",process:!0,children:(h,w)=>{r();var i=o(`// appwrite.ts

import { Client, Databases, Account } from "appwrite";
// Import type models for Backrush
import { type Models } from 'appwrite';

const client: Client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
const authUser: Models.Session = await account.createEmailPasswordSession(email, password);`);t(h,i)},$$slots:{default:!0}}),t(g,$)},$$slots:{default:!0}});var J=e(L);S(J,{id:"step-5",step:5,title:"Extending TypeScript models",children:(g,j)=>{var $=pt(),f=y($);n(f,{children:(s,a)=>{r();var l=o("Sometimes you'll need to extend TypeScript models with your own type definitions.");t(s,l)},$$slots:{default:!0}});var v=e(f);n(v,{children:(s,a)=>{r();var l=o("For example, when you fetch a list of documents from a collection, you can define the expected structure of the documents like this.");t(s,l)},$$slots:{default:!0}});var h=e(v);k(h,{content:`interface Idea extends Models.Document {
    title: string;
    description: string;
    userId: string;
}
`,language:"ts",process:!0,children:(s,a)=>{r();var l=o(`interface Idea extends Models.Document {
    title: string;
    description: string;
    userId: string;
}`);t(s,l)},$$slots:{default:!0}});var w=e(h);n(w,{children:(s,a)=>{r();var l=it(),p=e(y(l));R(p,{content:"Idea"}),r(),t(s,l)},$$slots:{default:!0}});var i=e(w);k(i,{content:`const response = await database.listDocuments(
    ideasDatabaseId,
    ideasCollectionId,
    [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
);
const ideas = response.documents as Idea[];
`,language:"ts",process:!0,children:(s,a)=>{r();var l=o(`const response = await database.listDocuments(
    ideasDatabaseId,
    ideasCollectionId,
    [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
);
const ideas = response.documents as Idea[];`);t(s,l)},$$slots:{default:!0}}),t(g,$)},$$slots:{default:!0}});var F=e(J);S(F,{id:"step-6",step:6,title:"All set",children:(g,j)=>{var $=ut(),f=y($);n(f,{children:(s,a)=>{r();var l=o("The Backrush SDK works with your favorite Web frameworks.");t(s,l)},$$slots:{default:!0}});var v=e(f);n(v,{children:(s,a)=>{r();var l=o("Learn to use Backrush by adding authentication to a simple web app.");t(s,l)},$$slots:{default:!0}});var h=e(v);M(h,{children:(s,a)=>{var l=dt(),p=y(l);D(p,{href:"/docs/quick-starts/nextjs",title:"Next.js",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and Next.js");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=e(p);D(x,{href:"/docs/quick-starts/react",title:"React",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and React");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=e(x);D(d,{href:"/docs/quick-starts/vue",title:"Vue.js",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and Vue.js");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=e(d);D(A,{href:"/docs/quick-starts/nuxt",title:"Nuxt",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and Nuxt");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=e(A);D(m,{href:"/docs/quick-starts/sveltekit",title:"SvelteKit",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and SvelteKit");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=e(m);D(C,{href:"/docs/quick-starts/angular",title:"Angular",children:(c,_)=>{n(c,{children:(u,b)=>{r();var I=o("Get started with Backrush and Angular");t(u,I)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(s,l)}});var w=e(h);n(w,{children:(s,a)=>{r();var l=o("Learn to use Backrush by building an idea tracker app.");t(s,l)},$$slots:{default:!0}});var i=e(w);M(i,{children:(s,a)=>{var l=ct(),p=y(l);D(p,{href:"/docs/tutorials/react",title:"React",children:(m,C)=>{n(m,{children:(c,_)=>{r();var u=o("Get started with Backrush and React");t(c,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=e(p);D(x,{href:"/docs/tutorials/vue",title:"Vue.js",children:(m,C)=>{n(m,{children:(c,_)=>{r();var u=o("Get started with Backrush and Vue.js");t(c,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=e(x);D(d,{href:"/docs/tutorials/nuxt",title:"Nuxt",children:(m,C)=>{n(m,{children:(c,_)=>{r();var u=o("Get started with Backrush and Nuxt");t(c,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=e(d);D(A,{href:"/docs/tutorials/sveltekit",title:"SvelteKit",children:(m,C)=>{n(m,{children:(c,_)=>{r();var u=o("Get started with Backrush and SvelteKit");t(c,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(s,l)}}),t(g,$)},$$slots:{default:!0}}),U(T),t(V,T)},$$slots:{default:!0}}))}export{Nt as component};
