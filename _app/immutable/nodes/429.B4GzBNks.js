import{t as c,b as s,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as se,s as e,f as p,n as t,r as ie}from"../chunks/NgVQVlRK.js";import{n as le}from"../chunks/B4IyMRKX.js";import{S}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as de,a as ce}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as ee}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as _}from"../chunks/DXp9_3zM.js";import{F as A}from"../chunks/OFUKRh55.js";import{H as pe}from"../chunks/CXsRaEhZ.js";import{L as te,I as k}from"../chunks/BhmTgGWB.js";import{P as f}from"../chunks/D8YsId2T.js";import{S as O}from"../chunks/yHjwcyUH.js";import{L as R}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ue}from"../chunks/CqOphJLh.js";const he={layout:"article",title:"Integrating Pinecone",description:"Learn how to integrate Pinecone into your Backrush project.",difficulty:"intermediate",readtime:15};var me=c("An <!>",1),$e=c("A <!>",1),ve=c("<!><!><!><!><!>",1),fe=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),_e=c("In the Backrush Console&#39;s sidebar, click <!>.",1),ge=c("Click <!>.",1),Pe=c("Under <!>, select your provider.",1),we=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),xe=c("In the <!> step, add the <!>, generate it <!>. Add the <!>, generate it <!>.For the <!>, tick the box to <!>.",1),be=c("<!><!><!><!><!><!>",1),ye=c("<!><!><!><!>",1),Ie=c("Install the <!> package to simplify the process of interacting with the Pinecone API. We&#39;ll also install the <!> package to interact with the OpenAI API.",1),Ae=c("<!><!><!>",1),ke=c("For this example, the function will be able to take both <!> and <!> requests.",1),Te=c("Create a new <!> file with the following code:",1),Ee=c("<!><!><!>",1),qe=c("Write the <!> request handler in the <!> file.",1),Se=c("The code checks if all required environment variables are present and then returns the static HTML page when a <!> request is made.",1),Oe=c("<!><!><!>",1),Ce=c("Create a HTML web page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),je=c("Within the <!> tag, Add a <!> tag that will define the style and scripts.",1),De=c("And after the <!> tag add this <!> which will contain the actual form:",1),Ne=c("<!><!><!><!><!><!><!>",1),Fe=c("Import <!> and <!> at the top of the <!> file:",1),Re=c("Add the following code at the end of request handler in the <!> file:",1),Le=c("<!><!><!><!><!><!>",1),Ue=c("To handle the search requests, add the following code to the end of the request handler in the <!> file:",1),We=c("For all requests with the path <!>, the function sends the search query to the OpenAI API to get the embedding. The function then queries the Pinecone index with the embedding and returns the results.",1),Ge=c("<!><!><!>",1),Ke=c("The Backrush collection needs to be indexed into the Pinecone index. Create a new file at <!> with the following code:",1),He=c("<!><!><!><!><!>",1),Je=c("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ft(ne){ue(ne,le(he,{children:(re,Qe)=>{var L=Je(),W=se(L);f(W,{children:(v,b)=>{t();var l=s("Pinecone is a vector database that allows you to store and query high-dimensional vectors. It is a great tool for building recommendation systems, search engines, and more. In this tutorial, we'll show you how to integrate Pinecone into your Backrush project.");n(v,l)},$$slots:{default:!0}});var G=e(W);f(G,{children:(v,b)=>{t();var l=s("Inside an Backrush Function, we'll create a method to that indexes an Backrush collection into Pinecone. We'll also create a method to query the Pinecone index and return the results.");n(v,l)},$$slots:{default:!0}});var K=e(G);pe(K,{id:"prerequisites",level:1,children:(v,b)=>{t();var l=s("Prerequisites");n(v,l)},$$slots:{default:!0}});var H=e(K);te(H,{ordered:!1,marker:"-",children:(v,b)=>{var l=ve(),$=p(l);k($,{children:(r,a)=>{t();var o=s("An Backrush project");n(r,o)},$$slots:{default:!0}});var m=e($);k(m,{children:(r,a)=>{t();var o=s("An Backrush collection");n(r,o)},$$slots:{default:!0}});var g=e(m);k(g,{children:(r,a)=>{t();var o=me(),d=e(p(o));R(d,{href:"https://platform.openai.com/account/api-keys",children:(u,P)=>{t();var x=s("OpenAI API key");n(u,x)},$$slots:{default:!0}}),n(r,o)},$$slots:{default:!0}});var i=e(g);k(i,{children:(r,a)=>{t();var o=$e(),d=e(p(o));R(d,{href:"https://docs.pinecone.io/guides/getting-started/quickstart#2-get-your-api-key",children:(u,P)=>{t();var x=s("Pinecone API key");n(u,x)},$$slots:{default:!0}}),n(r,o)},$$slots:{default:!0}});var h=e(i);k(h,{children:(r,a)=>{t();var o=s("A Pinecone index");n(r,o)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var J=e(H);S(J,{id:"step-1",step:1,title:"Create new function",children:(v,b)=>{var l=ye(),$=p(l);f($,{children:(h,r)=>{t();var a=fe(),o=e(p(a));R(o,{href:"https://cloud.backrush.io/console",children:(P,x)=>{t();var C=s("Backrush Console");n(P,C)},$$slots:{default:!0}});var d=e(o,2);O(d,{marker:"**",children:(P,x)=>{t();var C=s("Functions");n(P,C)},$$slots:{default:!0}});var u=e(d,2);O(u,{marker:"**",children:(P,x)=>{t();var C=s("Create Function");n(P,C)},$$slots:{default:!0}}),t(),n(h,a)},$$slots:{default:!0}});var m=e($);de(m,{children:(h,r)=>{f(h,{children:(a,o)=>{ee(a,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var g=e(m);ce(g,{children:(h,r)=>{f(h,{children:(a,o)=>{ee(a,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var i=e(g);te(i,{ordered:!0,marker:".",children:(h,r)=>{var a=be(),o=p(a);k(o,{children:(y,F)=>{t();var w=_e(),I=e(p(w));O(I,{marker:"**",children:(T,q)=>{t();var E=s("Functions");n(T,E)},$$slots:{default:!0}}),t(),n(y,w)},$$slots:{default:!0}});var d=e(o);k(d,{children:(y,F)=>{t();var w=ge(),I=e(p(w));O(I,{marker:"**",children:(T,q)=>{t();var E=s("Create function");n(T,E)},$$slots:{default:!0}}),t(),n(y,w)},$$slots:{default:!0}});var u=e(d);k(u,{children:(y,F)=>{t();var w=Pe(),I=e(p(w));O(I,{marker:"**",children:(T,q)=>{t();var E=s("Connect Git repository");n(T,E)},$$slots:{default:!0}}),t(),n(y,w)},$$slots:{default:!0}});var P=e(u);k(P,{children:(y,F)=>{t();var w=we(),I=e(p(w));O(I,{marker:"**",children:(q,E)=>{t();var N=s("Quick start");n(q,N)},$$slots:{default:!0}});var T=e(I,2);O(T,{marker:"**",children:(q,E)=>{t();var N=s("Node.js");n(q,N)},$$slots:{default:!0}}),t(),n(y,w)},$$slots:{default:!0}});var x=e(P);k(x,{children:(y,F)=>{t();var w=xe(),I=e(p(w));O(I,{marker:"**",children:(j,U)=>{t();var D=s("Variables");n(j,D)},$$slots:{default:!0}});var T=e(I,2);_(T,{content:"PINECONE_API_KEY"});var q=e(T,2);R(q,{href:"https://docs.pinecone.io/guides/getting-started/quickstart#2-get-your-api-key",children:(j,U)=>{t();var D=s("here");n(j,D)},$$slots:{default:!0}});var E=e(q,2);_(E,{content:"OPENAI_API_KEY"});var N=e(E,2);R(N,{href:"https://platform.openai.com/account/api-keys",children:(j,U)=>{t();var D=s("here");n(j,D)},$$slots:{default:!0}});var Z=e(N,2);_(Z,{content:"BACKRUSH_API_KEY"});var ae=e(Z,2);O(ae,{marker:"**",children:(j,U)=>{t();var D=s("Generate API key on completion");n(j,D)},$$slots:{default:!0}}),t(),n(y,w)},$$slots:{default:!0}});var C=e(x);k(C,{children:(y,F)=>{t();var w=s("Follow the step-by-step wizard and create the function.");n(y,w)},$$slots:{default:!0}}),n(h,a)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var Q=e(J);S(Q,{id:"step-2",step:2,title:"Add dependencies",children:(v,b)=>{var l=Ae(),$=p(l);f($,{children:(i,h)=>{t();var r=s("Once the function is created, navigate to the freshly created repository and clone it to your local machine.");n(i,r)},$$slots:{default:!0}});var m=e($);f(m,{children:(i,h)=>{t();var r=Ie(),a=e(p(r));_(a,{content:"@pinecone-database/pinecone"});var o=e(a,2);_(o,{content:"openai"}),t(),n(i,r)},$$slots:{default:!0}});var g=e(m);A(g,{content:`npm install @pinecone-database/pinecone openai
`,language:"bash",process:!0,children:(i,h)=>{t();var r=s("npm install @pinecone-database/pinecone openai");n(i,r)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var Y=e(Q);S(Y,{id:"step-3",step:3,title:"Create utility function",children:(v,b)=>{var l=Ee(),$=p(l);f($,{children:(i,h)=>{t();var r=ke(),a=e(p(r));_(a,{content:"GET"});var o=e(a,2);_(o,{content:"POST"}),t(),n(i,r)},$$slots:{default:!0}});var m=e($);f(m,{children:(i,h)=>{t();var r=Te(),a=e(p(r));_(a,{content:"src/utils.js"}),t(),n(i,r)},$$slots:{default:!0}});var g=e(m);A(g,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(i,h)=>{t();var r=s(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);n(i,r)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var X=e(Y);S(X,{id:"step-4",step:4,title:"Handle GET request",children:(v,b)=>{var l=Oe(),$=p(l);f($,{children:(i,h)=>{t();var r=qe(),a=e(p(r));_(a,{content:"GET"});var o=e(a,2);_(o,{content:"src/main.js"}),t(),n(i,r)},$$slots:{default:!0}});var m=e($);A(m,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    const html = getStaticFile('index.html');
    return res.text(html, 200, { 'Content-Type': 'text/html; charset=utf-8' });
  }
};
`,language:"js",process:!0,children:(i,h)=>{t();var r=s(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    const html = getStaticFile('index.html');
    return res.text(html, 200, { 'Content-Type': 'text/html; charset=utf-8' });
  }
};`);n(i,r)},$$slots:{default:!0}});var g=e(m);f(g,{children:(i,h)=>{t();var r=Se(),a=e(p(r));_(a,{content:"GET"}),t(),n(i,r)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var M=e(X);S(M,{id:"step-5",step:5,title:"Create web page",children:(v,b)=>{var l=Ne(),$=p(l);f($,{children:(o,d)=>{t();var u=Ce(),P=e(p(u));_(P,{content:"static/index.html"}),t(),n(o,u)},$$slots:{default:!0}});var m=e($);A(m,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(o,d)=>{t();var u=s(`<!doctype html>
<html lang="en">
</html>`);n(o,u)},$$slots:{default:!0}});var g=e(m);f(g,{children:(o,d)=>{t();var u=je(),P=e(p(u));_(P,{content:"<html>"});var x=e(P,2);_(x,{content:"<head>"}),t(),n(o,u)},$$slots:{default:!0}});var i=e(g);A(i,{content:`<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pinecone Demo</title>

    <script src="https://unpkg.com/meilisearch@0.34.1"><\/script>
    <script src="https://unpkg.com/alpinejs" defer><\/script>

    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>
  
`,language:"html",process:!0,children:(o,d)=>{t();var u=s(`<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pinecone Demo</title>

    <script src="https://unpkg.com/meilisearch@0.34.1"><\/script>
    <script src="https://unpkg.com/alpinejs" defer><\/script>

    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>`);n(o,u)},$$slots:{default:!0}});var h=e(i);f(h,{children:(o,d)=>{t();var u=De(),P=e(p(u));_(P,{content:"</head>"});var x=e(P,2);_(x,{content:"<body>"}),t(),n(o,u)},$$slots:{default:!0}});var r=e(h);A(r,{content:`<body>
    <main class="main-content">
        <div class="top-cover u-padding-block-end-56">
        <div class="container">
            <div
            class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
            >
            <h1 class="heading-level-1">Pinecone Demo</h1>
            <code class="u-un-break-text"></code>
            </div>
            <p
            class="body-text-1 u-normal u-margin-block-start-8"
            style="max-width: 50rem"
            >
            Use this demo to verify that the sync between Backrush Databases and
            Pinecone was successful. Search your Pinecone vector database using
            the input below.
            </p>
        </div>
        </div>
        <div
            class="container u-margin-block-start-negative-56"
            x-data="{ search: '', results: [ ] }"
            x-init="$watch('search', async (value) => { results = await onSearch(value) })"
        >
        <div class="card u-flex u-gap-24 u-flex-vertical">
            <div id="searchbox">
            <div
                class="input-text-wrapper is-with-end-button u-width-full-line"
            >
                <input x-model="search" type="search" placeholder="Search" />
                <div class="icon-search" aria-hidden="true"></div>
            </div>
            </div>
            <div id="hits" class="u-flex u-flex-vertical u-gap-12">
            <template x-for="result in results">
                <div class="card">
                <pre x-text="JSON.stringify(result, null, '\\t')"></pre>
                </div>
            </template>
            </div>
        </div>
        </div>
    </main>
    <script>
        window.onSearch = async function (prompt) {
            const response = await fetch('/search', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
            return response.matches;
        };
    <\/script>
</body>
`,language:"html",process:!0,children:(o,d)=>{t();var u=s(`<body>
    <main class="main-content">
        <div class="top-cover u-padding-block-end-56">
        <div class="container">
            <div
            class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
            >
            <h1 class="heading-level-1">Pinecone Demo</h1>
            <code class="u-un-break-text"></code>
            </div>
            <p
            class="body-text-1 u-normal u-margin-block-start-8"
            style="max-width: 50rem"
            >
            Use this demo to verify that the sync between Backrush Databases and
            Pinecone was successful. Search your Pinecone vector database using
            the input below.
            </p>
        </div>
        </div>
        <div
            class="container u-margin-block-start-negative-56"
            x-data="{ search: '', results: [ ] }"
            x-init="$watch('search', async (value) => { results = await onSearch(value) })"
        >
        <div class="card u-flex u-gap-24 u-flex-vertical">
            <div id="searchbox">
            <div
                class="input-text-wrapper is-with-end-button u-width-full-line"
            >
                <input x-model="search" type="search" placeholder="Search" />
                <div class="icon-search" aria-hidden="true"></div>
            </div>
            </div>
            <div id="hits" class="u-flex u-flex-vertical u-gap-12">
            <template x-for="result in results">
                <div class="card">
                <pre x-text="JSON.stringify(result, null, '\\t')"></pre>
                </div>
            </template>
            </div>
        </div>
        </div>
    </main>
    <script>
        window.onSearch = async function (prompt) {
            const response = await fetch('/search', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
            return response.matches;
        };
    <\/script>
</body>`);n(o,u)},$$slots:{default:!0}});var a=e(r);f(a,{children:(o,d)=>{t();var u=s("This will render a form that will submit your search query to the function and display the results.");n(o,u)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var z=e(M);S(z,{id:"step-6",step:6,title:"Setup SDKs",children:(v,b)=>{var l=Le(),$=p(l);f($,{children:(a,o)=>{t();var d=s("Add methods necessary to integrate with the OpenAI and Pinecone APIs");n(a,d)},$$slots:{default:!0}});var m=e($);f(m,{children:(a,o)=>{t();var d=Fe(),u=e(p(d));_(u,{content:"openai"});var P=e(u,2);_(P,{content:"@pinecone-database/pinecone"});var x=e(P,2);_(x,{content:"main.js"}),t(),n(a,d)},$$slots:{default:!0}});var g=e(m);A(g,{content:`import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';
`,language:"js",process:!0,children:(a,o)=>{t();var d=s(`import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';`);n(a,d)},$$slots:{default:!0}});var i=e(g);f(i,{children:(a,o)=>{t();var d=Re(),u=e(p(d));_(u,{content:"main.js"}),t(),n(a,d)},$$slots:{default:!0}});var h=e(i);A(h,{content:`const openai = new OpenAI();

const pinecone = new Pinecone();
const pineconeIndex = pinecone.index(process.env.PINECONE_INDEX_ID);
`,language:"js",process:!0,children:(a,o)=>{t();var d=s(`const openai = new OpenAI();

const pinecone = new Pinecone();
const pineconeIndex = pinecone.index(process.env.PINECONE_INDEX_ID);`);n(a,d)},$$slots:{default:!0}});var r=e(h);f(r,{children:(a,o)=>{t();var d=s("The functions checks the request method, and then initializes the OpenAI and Pinecone SDKs.");n(a,d)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var B=e(z);S(B,{id:"step-7",step:7,title:"Handle search requests",children:(v,b)=>{var l=Ge(),$=p(l);f($,{children:(i,h)=>{t();var r=Ue(),a=e(p(r));_(a,{content:"main.js"}),t(),n(i,r)},$$slots:{default:!0}});var m=e($);A(m,{content:`if (req.path === '/search') {
    const queryEmbedding = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: req.body.prompt,
    });

    const searchResults = await pineconeIndex.query({
        vector: queryEmbedding.data[0].embedding,
        topK: 5,
    });

    return res.json(searchResults);
}
`,language:"js",process:!0,children:(i,h)=>{t();var r=s(`if (req.path === '/search') {
    const queryEmbedding = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: req.body.prompt,
    });

    const searchResults = await pineconeIndex.query({
        vector: queryEmbedding.data[0].embedding,
        topK: 5,
    });

    return res.json(searchResults);
}`);n(i,r)},$$slots:{default:!0}});var g=e(m);f(g,{children:(i,h)=>{t();var r=We(),a=e(p(r));_(a,{content:"/search"}),t(),n(i,r)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var V=e(B);S(V,{id:"step-8",step:8,title:"Handle indexing requests",children:(v,b)=>{var l=He(),$=p(l);f($,{children:(r,a)=>{t();var o=Ke(),d=e(p(o));_(d,{content:"src/backrush.js"}),t(),n(r,o)},$$slots:{default:!0}});var m=e($);A(m,{content:`import { Client, Databases, Query } from 'node-backrush';

export default class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.BACKRUSH_ENDPOINT ?? 'https://<REGION>.cloud.backrush.io/v1'
      )
      .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
      .setKey(process.env.BACKRUSH_API_KEY);

    this.databases = new Databases(client);
  }

  async getAllDocuments(databaseId, collectionId) {
    const cumulative = [];

    let cursor = null;
    do {
      const queries = [Query.limit(100)];

      if (cursor) {
        queries.push(Query.cursorAfter(cursor));
      }

      const { documents } = await this.databases.listDocuments(
        databaseId,
        collectionId,
        queries
      );

      if (documents.length === 0) {
        break;
      }

      cursor = documents[documents.length - 1].$id;

      cumulative.push(...documents);
    } while (cursor);

    return cumulative;
  }
}
`,language:"js",process:!0,children:(r,a)=>{t();var o=s(`import { Client, Databases, Query } from 'node-backrush';

export default class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.BACKRUSH_ENDPOINT ?? 'https://<REGION>.cloud.backrush.io/v1'
      )
      .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
      .setKey(process.env.BACKRUSH_API_KEY);

    this.databases = new Databases(client);
  }

  async getAllDocuments(databaseId, collectionId) {
    const cumulative = [];

    let cursor = null;
    do {
      const queries = [Query.limit(100)];

      if (cursor) {
        queries.push(Query.cursorAfter(cursor));
      }

      const { documents } = await this.databases.listDocuments(
        databaseId,
        collectionId,
        queries
      );

      if (documents.length === 0) {
        break;
      }

      cursor = documents[documents.length - 1].$id;

      cumulative.push(...documents);
    } while (cursor);

    return cumulative;
  }
}`);n(r,o)},$$slots:{default:!0}});var g=e(m);f(g,{children:(r,a)=>{t();var o=s("The service provides a method to iterate the documents contained within an entire collection, fetching the limit of 100 documents per request.");n(r,o)},$$slots:{default:!0}});var i=e(g);A(i,{content:`const backrush = new BackrushService();

const documents = await backrush.getAllDocuments(
  process.env.BACKRUSH_DATABASE_ID,
  process.env.BACKRUSH_COLLECTION_ID
);

const embeddings = await Promise.all(
  documents.map(async (document) => {
    const record = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: JSON.stringify(document),
    });
    return {
      id: document.$id,
      values: record.data[0].embedding,
      metadata: document,
    };
  })
);

await pineconeIndex.upsert(embeddings);
`,language:"js",process:!0,children:(r,a)=>{t();var o=s(`const backrush = new BackrushService();

const documents = await backrush.getAllDocuments(
  process.env.BACKRUSH_DATABASE_ID,
  process.env.BACKRUSH_COLLECTION_ID
);

const embeddings = await Promise.all(
  documents.map(async (document) => {
    const record = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: JSON.stringify(document),
    });
    return {
      id: document.$id,
      values: record.data[0].embedding,
      metadata: document,
    };
  })
);

await pineconeIndex.upsert(embeddings);`);n(r,o)},$$slots:{default:!0}});var h=e(i);f(h,{children:(r,a)=>{t();var o=s("The code fetches all documents from the Backrush collection, then sends each document to the OpenAI API to get the embedding. The embeddings are then uploaded to the Pinecone index.");n(r,o)},$$slots:{default:!0}}),n(v,l)},$$slots:{default:!0}});var oe=e(V);S(oe,{id:"step-9",step:9,title:"Test the function",children:(v,b)=>{f(v,{children:(l,$)=>{t();var m=s("Now that the function is deployed, test it by visiting the function URL in your browser. This should show the UI created earlier and to test it, write a search query and click the submit button. After a brief moment you should see the matched results.");n(l,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),ie(L),n(re,L)},$$slots:{default:!0}}))}export{ft as component};
