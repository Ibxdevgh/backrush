import{t as u,b as i,a as t}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as V,s as r,f as _,n as o,r as W}from"./NgVQVlRK.js";import{n as G}from"./B4IyMRKX.js";import{H as Y}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";import{O as J,a as K}from"./uti8MWrk.js";/* empty css        */import"./BZUG4Puk.js";import{I as U}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as q}from"./DXp9_3zM.js";import{F as X}from"./OFUKRh55.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as f}from"./D8YsId2T.js";import{L as Z}from"./yh4_9ChP.js";import{T as tt}from"./D8BqvLkQ.js";import{T as et,a as T,b as x,c as rt,d as v}from"./BpU_IltG.js";import{T as ot}from"./jOarhe4j.js";const F={layout:"tutorial",title:"Add database",description:"Add data storage to your Vue.js project powered by Backrush Cloud databases.",step:6};var at=u("In Backrush, data is stored as a collection of documents. Create a collection in the <!> to store our ideas.",1),st=u("<!><!><!>",1),nt=u("<!><!><!>",1),it=u("<!><!><!>",1),lt=u("<!><!><!>",1),dt=u("<!><!><!>",1),ct=u("<!><!>",1),$t=u("Now that you have a collection to hold ideas, we can read and write to it from our app. Like we did with the user data, we will create a store hold our ideas. Create a new file <!> and add the following code to it.",1),ut=u("Note the init function, which uses <!> to fetch the last 10 ideas from the database. We will call this function when the app starts to ensure we have some data to display.",1),pt=u("<article><!><!><!><!><!><!><!><!><!><!></article>");function _t(H){ot(H,G(F,{children:(z,vt)=>{var S=pt(),y=V(S);Y(y,{id:"create-collection",level:1,children:(a,p)=>{o();var e=i("Create collection");t(a,e)},$$slots:{default:!0}});var b=r(y);f(b,{children:(a,p)=>{o();var e=at(),$=r(_(e));Z($,{href:"https://cloud.appwrite.io/",children:(g,A)=>{o();var C=i("Backrush Console");t(g,C)},$$slots:{default:!0}}),o(),t(a,e)},$$slots:{default:!0}});var L=r(b);J(L,{children:(a,p)=>{f(a,{children:(e,$)=>{U(e,{src:"/images/docs/tutorials/dark/idea-tracker-collection.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var N=r(L);K(N,{children:(a,p)=>{f(a,{children:(e,$)=>{U(e,{src:"/images/docs/tutorials/idea-tracker-collection.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var R=r(N);f(R,{children:(a,p)=>{o();var e=i("Create a new collection with the following attributes:");t(a,e)},$$slots:{default:!0}});var B=r(R);tt(B,{children:(a,p)=>{var e=ct(),$=_(e);et($,{children:(A,C)=>{T(A,{children:(w,O)=>{var D=st(),E=_(D);x(E,{children:(l,c)=>{o();var d=i("Field");t(l,d)},$$slots:{default:!0}});var m=r(E);x(m,{children:(l,c)=>{o();var d=i("Type");t(l,d)},$$slots:{default:!0}});var P=r(m);x(P,{children:(l,c)=>{o();var d=i("Required");t(l,d)},$$slots:{default:!0}}),t(w,D)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=r($);rt(g,{children:(A,C)=>{var w=dt(),O=_(w);T(O,{children:(m,P)=>{var l=nt(),c=_(l);v(c,{children:(s,h)=>{o();var n=i("userId");t(s,n)},$$slots:{default:!0}});var d=r(c);v(d,{children:(s,h)=>{o();var n=i("String");t(s,n)},$$slots:{default:!0}});var I=r(d);v(I,{children:(s,h)=>{o();var n=i("Yes");t(s,n)},$$slots:{default:!0}}),t(m,l)},$$slots:{default:!0}});var D=r(O);T(D,{children:(m,P)=>{var l=it(),c=_(l);v(c,{children:(s,h)=>{o();var n=i("title");t(s,n)},$$slots:{default:!0}});var d=r(c);v(d,{children:(s,h)=>{o();var n=i("String");t(s,n)},$$slots:{default:!0}});var I=r(d);v(I,{children:(s,h)=>{o();var n=i("Yes");t(s,n)},$$slots:{default:!0}}),t(m,l)},$$slots:{default:!0}});var E=r(D);T(E,{children:(m,P)=>{var l=lt(),c=_(l);v(c,{children:(s,h)=>{o();var n=i("description");t(s,n)},$$slots:{default:!0}});var d=r(c);v(d,{children:(s,h)=>{o();var n=i("String");t(s,n)},$$slots:{default:!0}});var I=r(d);v(I,{children:(s,h)=>{o();var n=i("No");t(s,n)},$$slots:{default:!0}}),t(m,l)},$$slots:{default:!0}}),t(A,w)},$$slots:{default:!0}}),t(a,e)},$$slots:{default:!0}});var j=r(B);Y(j,{id:"ideas-context",level:1,children:(a,p)=>{o();var e=i("Ideas context");t(a,e)},$$slots:{default:!0}});var k=r(j);f(k,{children:(a,p)=>{o();var e=$t(),$=r(_(e));q($,{content:"src/lib/stores/ideas.js"}),o(),t(a,e)},$$slots:{default:!0}});var Q=r(k);X(Q,{content:`import { ID, Query } from "appwrite";
import { databases } from "../appwrite";
import { reactive } from "vue";

export const IDEAS_DATABASE_ID = "<YOUR_DATABASE_ID>"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "<YOUR_COLLECTION_ID>"; // Replace with your collection ID

export const ideas = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    this.current = response.documents;
  },
  async add(idea) {
    const response = await databases.createDocument(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      ID.unique(),
      idea
    );
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    this.current = this.current.filter((idea) => idea.$id !== id);
    await this.init(); // Refetch ideas to ensure we have 10 items
  },
});
`,language:"client-web",process:!0,children:(a,p)=>{o();var e=i(`import { ID, Query } from "appwrite";
import { databases } from "../appwrite";
import { reactive } from "vue";

export const IDEAS_DATABASE_ID = "<YOUR_DATABASE_ID>"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "<YOUR_COLLECTION_ID>"; // Replace with your collection ID

export const ideas = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    this.current = response.documents;
  },
  async add(idea) {
    const response = await databases.createDocument(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      ID.unique(),
      idea
    );
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    this.current = this.current.filter((idea) => idea.$id !== id);
    await this.init(); // Refetch ideas to ensure we have 10 items
  },
});`);t(a,e)},$$slots:{default:!0}});var M=r(Q);f(M,{children:(a,p)=>{o();var e=ut(),$=r(_(e));q($,{content:"Query"}),o(),t(a,e)},$$slots:{default:!0}}),W(S),t(z,S)},$$slots:{default:!0}}))}const Qt=Object.freeze(Object.defineProperty({__proto__:null,default:_t,frontmatter:F},Symbol.toStringTag,{value:"Module"}));export{Qt as _,_t as a};
