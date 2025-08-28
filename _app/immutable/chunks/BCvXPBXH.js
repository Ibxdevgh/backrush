import{t as x,b as s,a as e}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ie,s as r,f as y,n as o,r as Te}from"./NgVQVlRK.js";import{n as Se}from"./B4IyMRKX.js";import{H as S}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{B as j}from"./BlhJVlLQ.js";import{C as E}from"./DXp9_3zM.js";import{F as N}from"./OFUKRh55.js";import{L as Ee,I as W}from"./BhmTgGWB.js";import{P as w}from"./D8YsId2T.js";import{S as B}from"./yHjwcyUH.js";import{L as O}from"./yh4_9ChP.js";import{T as xe}from"./D8BqvLkQ.js";import{T as be,a as L,b as T,c as ye,d as m}from"./BpU_IltG.js";import{I as Be}from"./CTynKKOH.js";const we={layout:"integration",title:"Data replication with RxDB",description:"Setup push-pull replication from a local database and enable offline sync capabilities using RxDB",date:"2025-04-17T00:00:00.000Z",featured:!1,isPartner:!0,isNew:!0,cover:"/images/integrations/replication-rxdb/cover.png",category:"databases",product:{avatar:"/images/integrations/avatars/rxdb.png",vendor:"Upstash",description:"RxDB (Reactive Database) is a local-first, NoSQL database for JavaScript applications."},platform:["Self-hosted","Cloud"],images:["/images/integrations/replication-rxdb/cover.png"]};var Ce=x("For this step, you must <!> or <!> if you haven’t already. Head over to the Backrush console, go to the <!> page, and copy your project ID and API endpoint for further usage. Next, go to the <!> page from the left sidebar, create a new database with the ID <!>, and then a collection with the ID <!> (save both IDs for further usage).",1),Ne=x("Click on the <!> tab and add the following attributes (schema used for demo purposes):",1),Le=x("<!><!><!><!>",1),Oe=x("<!><!><!><!>",1),We=x("<!><!><!><!>",1),ke=x("<!><!><!><!>",1),je=x("<!><!><!><!>",1),Ye=x("<!><!><!><!>",1),ze=x("<!><!>",1),Fe=x("<!> The <!> attribute is necessary to add because RxDB only soft deletes to prevent data loss in offline scenarios (no hard deletion of data occurs).",1),He=x("Then, head to the <!> tab of your collection, scroll down to the <!> section, and the following:",1),Je=x("<!><!><!><!><!>",1),qe=x("<!><!><!><!><!>",1),Ke=x("<!><!>",1),Qe=x("<!> While RxDB does not allow you to manually configure permissions for each document, if your app uses Backrush Auth and document-level permissions are enabled for your collection, the Backrush SDK will automatically assign read and write permissions to the logged-in user for each document created.",1),Ue=x("In your app’s <!> file, add the following:",1),Ge=x("<!> Please ensure that the names of your RxDB database and collection match the IDs of your Backrush database and collection.",1),Me=x("<!><!><!><!>",1),Ze=x("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ve(Ae){Be(Ae,Se(we,{children:(Re,Xe)=>{var k=Ze(),Y=Ie(k);w(Y,{children:(a,n)=>{o();var t=s("RxDB (Reactive Database) is a client-side, NoSQL database designed for JavaScript applications. It emphasizes real-time data synchronization, offline-first capabilities, and reactive programming paradigms. RxDB is particularly suited for applications that require seamless user experiences across various platforms, including web browsers, mobile devices, and desktop environments.");e(a,t)},$$slots:{default:!0}});var z=r(Y);S(z,{level:1,children:(a,n)=>{o();var t=s("How does the integration work?");e(a,t)},$$slots:{default:!0}});var F=r(z);w(F,{children:(a,n)=>{o();var t=s("RxDB integrates with Backrush through a replication plugin that enables two-way data synchronization between a client-side RxDB instance and an Backrush Database. This setup allows apps to store data locally (using data stores such as LocalStorage, SQLite, or IndexedDB) and push/pull changes from the Backrush backend. When offline, the app continues to function smoothly using RxDB's local-first model, and once connectivity is restored, it syncs changes with Backrush. Conflict handling, soft deletion, and live replication are handled seamlessly using RxDB’s built-in tools and Backrush’s Realtime API.");e(a,t)},$$slots:{default:!0}});var H=r(F);S(H,{level:1,children:(a,n)=>{o();var t=s("How to implement");e(a,t)},$$slots:{default:!0}});var J=r(H);w(J,{children:(a,n)=>{o();var t=s("To implement the RxDB integration, there are several steps you must complete:");e(a,t)},$$slots:{default:!0}});var q=r(J);S(q,{level:2,children:(a,n)=>{o();var t=s("Step 1: Configure Backrush project");e(a,t)},$$slots:{default:!0}});var K=r(q);w(K,{children:(a,n)=>{o();var t=Ce(),h=r(y(t));O(h,{href:"https://cloud.appwrite.io/register",children:(d,P)=>{o();var u=s("create an account on Backrush Cloud");e(d,u)},$$slots:{default:!0}});var f=r(h,2);O(f,{href:"https://appwrite.io/docs/advanced/self-hosting",children:(d,P)=>{o();var u=s("self-host Backrush");e(d,u)},$$slots:{default:!0}});var v=r(f,2);B(v,{marker:"**",children:(d,P)=>{o();var u=s("Settings");e(d,u)},$$slots:{default:!0}});var b=r(v,2);B(b,{marker:"**",children:(d,P)=>{o();var u=s("Databases");e(d,u)},$$slots:{default:!0}});var p=r(b,2);E(p,{content:"mydb"});var A=r(p,2);E(A,{content:"humans"}),o(),e(a,t)},$$slots:{default:!0}});var Q=r(K);w(Q,{children:(a,n)=>{o();var t=Ne(),h=r(y(t));B(h,{marker:"**",children:(f,v)=>{o();var b=s("Attributes");e(f,b)},$$slots:{default:!0}}),o(),e(a,t)},$$slots:{default:!0}});var U=r(Q);xe(U,{children:(a,n)=>{var t=ze(),h=y(t);be(h,{children:(v,b)=>{L(v,{children:(p,A)=>{var d=Le(),P=y(d);T(P,{children:(_,l)=>{o();var $=s("Key");e(_,$)},$$slots:{default:!0}});var u=r(P);T(u,{children:(_,l)=>{o();var $=s("Type");e(_,$)},$$slots:{default:!0}});var R=r(u);T(R,{children:(_,l)=>{o();var $=s("Size");e(_,$)},$$slots:{default:!0}});var I=r(R);T(I,{children:(_,l)=>{o();var $=s("Required");e(_,$)},$$slots:{default:!0}}),e(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r(h);ye(f,{children:(v,b)=>{var p=Ye(),A=y(p);L(A,{children:(R,I)=>{var _=Oe(),l=y(_);m(l,{children:(c,D)=>{E(c,{content:"name"})},$$slots:{default:!0}});var $=r(l);m($,{children:(c,D)=>{o();var g=s("String");e(c,g)},$$slots:{default:!0}});var i=r($);m(i,{children:(c,D)=>{o();var g=s("100");e(c,g)},$$slots:{default:!0}});var C=r(i);m(C,{children:(c,D)=>{o();var g=s("Yes");e(c,g)},$$slots:{default:!0}}),e(R,_)},$$slots:{default:!0}});var d=r(A);L(d,{children:(R,I)=>{var _=We(),l=y(_);m(l,{children:(c,D)=>{E(c,{content:"age"})},$$slots:{default:!0}});var $=r(l);m($,{children:(c,D)=>{o();var g=s("Integer");e(c,g)},$$slots:{default:!0}});var i=r($);m(i,{});var C=r(i);m(C,{children:(c,D)=>{o();var g=s("Yes");e(c,g)},$$slots:{default:!0}}),e(R,_)},$$slots:{default:!0}});var P=r(d);L(P,{children:(R,I)=>{var _=ke(),l=y(_);m(l,{children:(c,D)=>{E(c,{content:"homeAddress"})},$$slots:{default:!0}});var $=r(l);m($,{children:(c,D)=>{o();var g=s("String");e(c,g)},$$slots:{default:!0}});var i=r($);m(i,{children:(c,D)=>{o();var g=s("2000");e(c,g)},$$slots:{default:!0}});var C=r(i);m(C,{children:(c,D)=>{o();var g=s("Yes");e(c,g)},$$slots:{default:!0}}),e(R,_)},$$slots:{default:!0}});var u=r(P);L(u,{children:(R,I)=>{var _=je(),l=y(_);m(l,{children:(c,D)=>{E(c,{content:"deleted"})},$$slots:{default:!0}});var $=r(l);m($,{children:(c,D)=>{o();var g=s("Boolean");e(c,g)},$$slots:{default:!0}});var i=r($);m(i,{});var C=r(i);m(C,{children:(c,D)=>{o();var g=s("Yes");e(c,g)},$$slots:{default:!0}}),e(R,_)},$$slots:{default:!0}}),e(v,p)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var G=r(U);j(G,{children:(a,n)=>{w(a,{children:(t,h)=>{var f=Fe(),v=y(f);B(v,{marker:"**",children:(p,A)=>{o();var d=s("Note:");e(p,d)},$$slots:{default:!0}});var b=r(v,2);E(b,{content:"deleted"}),o(),e(t,f)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=r(G);w(M,{children:(a,n)=>{o();var t=He(),h=r(y(t));B(h,{marker:"**",children:(v,b)=>{o();var p=s("Settings");e(v,p)},$$slots:{default:!0}});var f=r(h,2);B(f,{marker:"**",children:(v,b)=>{o();var p=s("Permissions");e(v,p)},$$slots:{default:!0}}),o(),e(a,t)},$$slots:{default:!0}});var Z=r(M);xe(Z,{children:(a,n)=>{var t=Ke(),h=y(t);be(h,{children:(v,b)=>{L(v,{children:(p,A)=>{var d=Je(),P=y(d);T(P,{children:(l,$)=>{o();var i=s("Role");e(l,i)},$$slots:{default:!0}});var u=r(P);T(u,{children:(l,$)=>{o();var i=s("Create");e(l,i)},$$slots:{default:!0}});var R=r(u);T(R,{children:(l,$)=>{o();var i=s("Read");e(l,i)},$$slots:{default:!0}});var I=r(R);T(I,{children:(l,$)=>{o();var i=s("Update");e(l,i)},$$slots:{default:!0}});var _=r(I);T(_,{children:(l,$)=>{o();var i=s("Delete");e(l,i)},$$slots:{default:!0}}),e(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r(h);ye(f,{children:(v,b)=>{L(v,{children:(p,A)=>{var d=qe(),P=y(d);m(P,{children:(l,$)=>{o();var i=s("Any");e(l,i)},$$slots:{default:!0}});var u=r(P);m(u,{children:(l,$)=>{o();var i=s("Yes");e(l,i)},$$slots:{default:!0}});var R=r(u);m(R,{children:(l,$)=>{o();var i=s("Yes");e(l,i)},$$slots:{default:!0}});var I=r(R);m(I,{children:(l,$)=>{o();var i=s("Yes");e(l,i)},$$slots:{default:!0}});var _=r(I);m(_,{children:(l,$)=>{o();var i=s("Yes");e(l,i)},$$slots:{default:!0}}),e(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var V=r(Z);j(V,{children:(a,n)=>{w(a,{children:(t,h)=>{var f=Qe(),v=y(f);B(v,{marker:"**",children:(b,p)=>{o();var A=s("Note:");e(b,A)},$$slots:{default:!0}}),o(),e(t,f)},$$slots:{default:!0}})},$$slots:{default:!0}});var X=r(V);S(X,{level:2,children:(a,n)=>{o();var t=s("Step 2: Install Backrush Web SDK and RxDB library");e(a,t)},$$slots:{default:!0}});var ee=r(X);w(ee,{children:(a,n)=>{o();var t=s("Open the terminal in your app’s working directory and run the following command:");e(a,t)},$$slots:{default:!0}});var te=r(ee);N(te,{content:`npm install appwrite rxdb
`,language:"bash",process:!0,children:(a,n)=>{o();var t=s("npm install appwrite rxdb");e(a,t)},$$slots:{default:!0}});var re=r(te);w(re,{children:(a,n)=>{o();var t=Ue(),h=r(y(t));E(h,{content:".env"}),o(),e(a,t)},$$slots:{default:!0}});var oe=r(re);N(oe,{content:`APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your-project-id
APPWRITE_DATABASE_ID=your-database-id
APPWRITE_COLLECTION_ID=your-collection-id
`,language:"bash",process:!0,children:(a,n)=>{o();var t=s(`APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your-project-id
APPWRITE_DATABASE_ID=your-database-id
APPWRITE_COLLECTION_ID=your-collection-id`);e(a,t)},$$slots:{default:!0}});var ae=r(oe);w(ae,{children:(a,n)=>{o();var t=s("Then, import all necessary libraries in your code:");e(a,t)},$$slots:{default:!0}});var se=r(ae);N(se,{content:`import { replicateBackrush } from 'rxdb/plugins/replication-appwrite';
import { createRxDatabase, addRxPlugin, RxCollection } from 'rxdb/plugins/core';
import { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';
import { Client } from 'appwrite';
`,language:"js",process:!0,children:(a,n)=>{o();var t=s(`import { replicateBackrush } from 'rxdb/plugins/replication-appwrite';
import { createRxDatabase, addRxPlugin, RxCollection } from 'rxdb/plugins/core';
import { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';
import { Client } from 'appwrite';`);e(a,t)},$$slots:{default:!0}});var ne=r(se);S(ne,{level:2,children:(a,n)=>{o();var t=s("Step 3: Setup Backrush client");e(a,t)},$$slots:{default:!0}});var le=r(ne);w(le,{children:(a,n)=>{o();var t=s("To create an Backrush client, add the following code:");e(a,t)},$$slots:{default:!0}});var ie=r(le);N(ie,{content:`export const client = new Client()
	.setEndpoint(process.env.APPWRITE_ENDPOINT)
	.setEndpointRealtime(process.env.APPWRITE_ENDPOINT)
	.setProject(process.env.APPWRITE_PROJECT_ID);
`,language:"js",process:!0,children:(a,n)=>{o();var t=s(`export const client = new Client()
	.setEndpoint(process.env.APPWRITE_ENDPOINT)
	.setEndpointRealtime(process.env.APPWRITE_ENDPOINT)
	.setProject(process.env.APPWRITE_PROJECT_ID);`);e(a,t)},$$slots:{default:!0}});var de=r(ie);S(de,{level:2,children:(a,n)=>{o();var t=s("Step 4: Create an RxDB database and collection");e(a,t)},$$slots:{default:!0}});var $e=r(de);w($e,{children:(a,n)=>{o();var t=s("To create an RxDB database and collection, first, you must prepare a database schema via the following code:");e(a,t)},$$slots:{default:!0}});var pe=r($e);N(pe,{content:`const mySchema = {
    title: 'my schema',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100
        },
        name: {
            type: 'string'
        },
				age: {
					type: 'number'
				},
        homeAddress: {
            type: 'string'
        }
    },
    required: ['id', 'name', 'age', 'homeAddress']
};
`,language:"js",process:!0,children:(a,n)=>{o();var t=s(`const mySchema = {
    title: 'my schema',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100
        },
        name: {
            type: 'string'
        },
				age: {
					type: 'number'
				},
        homeAddress: {
            type: 'string'
        }
    },
    required: ['id', 'name', 'age', 'homeAddress']
};`);e(a,t)},$$slots:{default:!0}});var ce=r(pe);w(ce,{children:(a,n)=>{o();var t=s("Using this schema, you can create a database and collection via the following code:");e(a,t)},$$slots:{default:!0}});var ue=r(ce);N(ue,{content:`const db = await createRxDatabase({
    name: 'mydb',
    storage: getRxStorageLocalstorage()
});

await db.addCollections({
    humans: {
        schema: mySchema
    }
});

const collection = db.humans;
`,language:"js",process:!0,children:(a,n)=>{o();var t=s(`const db = await createRxDatabase({
    name: 'mydb',
    storage: getRxStorageLocalstorage()
});

await db.addCollections({
    humans: {
        schema: mySchema
    }
});

const collection = db.humans;`);e(a,t)},$$slots:{default:!0}});var ve=r(ue);j(ve,{children:(a,n)=>{w(a,{children:(t,h)=>{var f=Ge(),v=y(f);B(v,{marker:"**",children:(b,p)=>{o();var A=s("Note:");e(b,A)},$$slots:{default:!0}}),o(),e(t,f)},$$slots:{default:!0}})},$$slots:{default:!0}});var _e=r(ve);S(_e,{level:2,children:(a,n)=>{o();var t=s("Step 5: Start replication");e(a,t)},$$slots:{default:!0}});var fe=r(_e);w(fe,{children:(a,n)=>{o();var t=s("To start data replication, add the following code:");e(a,t)},$$slots:{default:!0}});var he=r(fe);N(he,{content:`const replicationState = replicateBackrush({
    replicationIdentifier: 'my-appwrite-replication',
    client,
    databaseId: process.env.APPWRITE_DATABASE_ID,
    collectionId: process.env.APPWRITE_COLLECTION_ID,
    deletedField: 'deleted', // Field that represents deletion in Backrush
    collection,
    pull: {
        batchSize: 10,
    },
    push: {
        batchSize: 10
    },
    /*
     * ...
     * You can set all other options for RxDB replication states
     * like 'live' or 'retryTime'
     * ...
     */
});
`,language:"js",process:!0,children:(a,n)=>{o();var t=s(`const replicationState = replicateBackrush({
    replicationIdentifier: 'my-appwrite-replication',
    client,
    databaseId: process.env.APPWRITE_DATABASE_ID,
    collectionId: process.env.APPWRITE_COLLECTION_ID,
    deletedField: 'deleted', // Field that represents deletion in Backrush
    collection,
    pull: {
        batchSize: 10,
    },
    push: {
        batchSize: 10
    },
    /*
     * ...
     * You can set all other options for RxDB replication states
     * like 'live' or 'retryTime'
     * ...
     */
});`);e(a,t)},$$slots:{default:!0}});var me=r(he);w(me,{children:(a,n)=>{o();var t=s("With that, your RxDB integration is configured and you can use other relevant RxDB functionalities and database operations in your application.");e(a,t)},$$slots:{default:!0}});var Pe=r(me);S(Pe,{level:1,children:(a,n)=>{o();var t=s("Further resources");e(a,t)},$$slots:{default:!0}});var ge=r(Pe);w(ge,{children:(a,n)=>{o();var t=s("If you would like to learn more about RxDB and Backrush Databases, we have some resources that you should visit:");e(a,t)},$$slots:{default:!0}});var De=r(ge);Ee(De,{ordered:!1,marker:"-",children:(a,n)=>{var t=Me(),h=y(t);W(h,{children:(p,A)=>{O(p,{href:"https://rxdb.info/replication-appwrite.html",children:(d,P)=>{o();var u=s("RxDB docs for Backrush");e(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r(h);W(f,{children:(p,A)=>{O(p,{href:"/docs/products/databases/offline",children:(d,P)=>{o();var u=s("Backrush offline sync docs");e(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=r(f);W(v,{children:(p,A)=>{O(p,{href:"/blog/post/offline-first-journal",children:(d,P)=>{o();var u=s("Build an offline-first journal app with RxDB and Backrush");e(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var b=r(v);W(b,{children:(p,A)=>{O(p,{href:"https://github.com/appwrite-community/offline-journal",children:(d,P)=>{o();var u=s("Offline-first journal demo app on GitHub");e(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}}),Te(k),e(Re,k)},$$slots:{default:!0}}))}const xt=Object.freeze(Object.defineProperty({__proto__:null,default:Ve,frontmatter:we},Symbol.toStringTag,{value:"Module"}));export{xt as _,Ve as a};
