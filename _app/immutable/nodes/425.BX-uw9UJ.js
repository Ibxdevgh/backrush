import{t as c,b as i,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as oe,s as e,f as p,n as t,r as ae}from"../chunks/NgVQVlRK.js";import{n as se}from"../chunks/B4IyMRKX.js";import{S as E}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ie,a as le}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as V}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as v}from"../chunks/DXp9_3zM.js";import{F as y}from"../chunks/OFUKRh55.js";import{H as ce}from"../chunks/CXsRaEhZ.js";import{L as Z,I}from"../chunks/BhmTgGWB.js";import{P as f}from"../chunks/D8YsId2T.js";import{S as O}from"../chunks/yHjwcyUH.js";import{L}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as de}from"../chunks/CqOphJLh.js";const pe={layout:"article",title:"Integrating LangChain",description:"Learn how to integrate LangChain into your Backrush project.",difficulty:"intermediate",readtime:15};var ue=c("An <!>",1),he=c("A <!>",1),me=c("<!><!><!><!><!>",1),$e=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ve=c("In the Backrush Console&#39;s sidebar, click <!>.",1),fe=c("Click <!>.",1),_e=c("Under <!>, select your provider.",1),ge=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),Pe=c("In the <!> step, add the <!>, generate it <!>. Add the <!>, generate it <!>.For the <!>, tick the box to <!>.",1),we=c("<!><!><!><!><!><!>",1),xe=c("<!><!><!><!>",1),ye=c("Add the following dependencies to the <!> file:",1),be=c("<!><!><!>",1),Ae=c("For this example, the function will be able to take both <!> and <!> requests.",1),Ie=c("For the <!> request, return a static HTML page that will have a form to search the Pinecone index. Meanwhile the <!> requests will send the search query to the Pinecone API and return the results. All other <!> requests will trigger the indexing of the Backrush collection into the Pinecone index.",1),ke=c("Write the code to return the static HTML page, to do this create a new <!> file with the following code:",1),Te=c("<!><!><!><!>",1),Se=c("Write the <!> request handler in the <!> file. This handler will return a static HTML page you&#39;ll create later.",1),qe=c("The function will throw an error if any of the required environment variables are missing. The function will return the static HTML page when a <!> request is made.",1),Ee=c("<!><!><!>",1),Oe=c("Create a HTML web page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),Ce=c("Within the <!> tag, Add a <!> tag that will define the style and scripts.",1),De=c("And after the <!> tag add this <!> which will contain the actual form:",1),je=c("<!><!><!><!><!><!><!>",1),Ne=c("Import <!> and <!> at the top of the <!> file:",1),Re=c("Add the following code at the end of request handler in the <!> file:",1),Le=c("<!><!><!><!><!><!>",1),Fe=c("To handle the prompt requests, add the following code to the end of the request handler in the <!> file:",1),We=c("<!><!><!><!><!>",1),Ue=c("The Backrush collection needs to be indexed into the Pinecone index. Create a new file at <!> with the following code:",1),He=c("Within our function handler, the service is instantiated and used to create an array of LangChain documents. LangChain documents can then be used with the <!> method to retrieve embeddings from OpenAI and upsert them to your Pinecone index.",1),Ge=c("<!><!><!><!><!>",1),Ke=c("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function vt(ee){de(ee,se(pe,{children:(te,Me)=>{var F=Ke(),U=oe(F);ce(U,{id:"prerequisites",level:1,children:(g,k)=>{t();var u=i("Prerequisites");r(g,u)},$$slots:{default:!0}});var H=e(U);Z(H,{ordered:!1,marker:"-",children:(g,k)=>{var u=me(),$=p(u);I($,{children:(o,a)=>{t();var n=i("An Backrush project");r(o,n)},$$slots:{default:!0}});var m=e($);I(m,{children:(o,a)=>{t();var n=i("An Backrush collection");r(o,n)},$$slots:{default:!0}});var _=e(m);I(_,{children:(o,a)=>{t();var n=ue(),s=e(p(n));L(s,{href:"https://platform.openai.com/account/api-keys",children:(d,P)=>{t();var x=i("OpenAI API key");r(d,x)},$$slots:{default:!0}}),r(o,n)},$$slots:{default:!0}});var h=e(_);I(h,{children:(o,a)=>{t();var n=he(),s=e(p(n));L(s,{href:"https://docs.pinecone.io/guides/getting-started/quickstart#2-get-your-api-key",children:(d,P)=>{t();var x=i("Pinecone API key");r(d,x)},$$slots:{default:!0}}),r(o,n)},$$slots:{default:!0}});var l=e(h);I(l,{children:(o,a)=>{t();var n=i("A Pinecone index");r(o,n)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var G=e(H);E(G,{id:"step-1",step:1,title:"Create new function",children:(g,k)=>{var u=xe(),$=p(u);f($,{children:(l,o)=>{t();var a=$e(),n=e(p(a));L(n,{href:"https://cloud.backrush.io/console",children:(P,x)=>{t();var C=i("Backrush Console");r(P,C)},$$slots:{default:!0}});var s=e(n,2);O(s,{marker:"**",children:(P,x)=>{t();var C=i("Functions");r(P,C)},$$slots:{default:!0}});var d=e(s,2);O(d,{marker:"**",children:(P,x)=>{t();var C=i("Create Function");r(P,C)},$$slots:{default:!0}}),t(),r(l,a)},$$slots:{default:!0}});var m=e($);ie(m,{children:(l,o)=>{f(l,{children:(a,n)=>{V(a,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=e(m);le(_,{children:(l,o)=>{f(l,{children:(a,n)=>{V(a,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var h=e(_);Z(h,{ordered:!0,marker:".",children:(l,o)=>{var a=we(),n=p(a);I(n,{children:(b,R)=>{t();var w=ve(),A=e(p(w));O(A,{marker:"**",children:(T,q)=>{t();var S=i("Functions");r(T,S)},$$slots:{default:!0}}),t(),r(b,w)},$$slots:{default:!0}});var s=e(n);I(s,{children:(b,R)=>{t();var w=fe(),A=e(p(w));O(A,{marker:"**",children:(T,q)=>{t();var S=i("Create function");r(T,S)},$$slots:{default:!0}}),t(),r(b,w)},$$slots:{default:!0}});var d=e(s);I(d,{children:(b,R)=>{t();var w=_e(),A=e(p(w));O(A,{marker:"**",children:(T,q)=>{t();var S=i("Connect Git repository");r(T,S)},$$slots:{default:!0}}),t(),r(b,w)},$$slots:{default:!0}});var P=e(d);I(P,{children:(b,R)=>{t();var w=ge(),A=e(p(w));O(A,{marker:"**",children:(q,S)=>{t();var N=i("Quick start");r(q,N)},$$slots:{default:!0}});var T=e(A,2);O(T,{marker:"**",children:(q,S)=>{t();var N=i("Node.js");r(q,N)},$$slots:{default:!0}}),t(),r(b,w)},$$slots:{default:!0}});var x=e(P);I(x,{children:(b,R)=>{t();var w=Pe(),A=e(p(w));O(A,{marker:"**",children:(D,W)=>{t();var j=i("Variables");r(D,j)},$$slots:{default:!0}});var T=e(A,2);v(T,{content:"PINECONE_API_KEY"});var q=e(T,2);L(q,{href:"https://docs.pinecone.io/guides/getting-started/quickstart#2-get-your-api-key",children:(D,W)=>{t();var j=i("here");r(D,j)},$$slots:{default:!0}});var S=e(q,2);v(S,{content:"OPENAI_API_KEY"});var N=e(S,2);L(N,{href:"https://platform.openai.com/account/api-keys",children:(D,W)=>{t();var j=i("here");r(D,j)},$$slots:{default:!0}});var B=e(N,2);v(B,{content:"BACKRUSH_API_KEY"});var re=e(B,2);O(re,{marker:"**",children:(D,W)=>{t();var j=i("Generate API key on completion");r(D,j)},$$slots:{default:!0}}),t(),r(b,w)},$$slots:{default:!0}});var C=e(x);I(C,{children:(b,R)=>{t();var w=i("Follow the step-by-step wizard and create the function.");r(b,w)},$$slots:{default:!0}}),r(l,a)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var K=e(G);E(K,{id:"step-2",step:2,title:"Add dependencies",children:(g,k)=>{var u=be(),$=p(u);f($,{children:(h,l)=>{t();var o=i("Once the function is created, navigate to the freshly created repository and clone it to your local machine.");r(h,o)},$$slots:{default:!0}});var m=e($);f(m,{children:(h,l)=>{t();var o=ye(),a=e(p(o));v(a,{content:"package.json"}),t(),r(h,o)},$$slots:{default:!0}});var _=e(m);y(_,{content:`npm install @pinecone-database/pinecone openai @langchain/core @langchain/openai @langchain/pinecone langchain
`,language:"bash",process:!0,children:(h,l)=>{t();var o=i("npm install @pinecone-database/pinecone openai @langchain/core @langchain/openai @langchain/pinecone langchain");r(h,o)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var M=e(K);E(M,{id:"step-3",step:3,title:"Create utility functions",children:(g,k)=>{var u=Te(),$=p(u);f($,{children:(l,o)=>{t();var a=Ae(),n=e(p(a));v(n,{content:"GET"});var s=e(n,2);v(s,{content:"POST"}),t(),r(l,a)},$$slots:{default:!0}});var m=e($);f(m,{children:(l,o)=>{t();var a=Ie(),n=e(p(a));v(n,{content:"GET"});var s=e(n,2);v(s,{content:"POST /search"});var d=e(s,2);v(d,{content:"POST"}),t(),r(l,a)},$$slots:{default:!0}});var _=e(m);f(_,{children:(l,o)=>{t();var a=ke(),n=e(p(a));v(n,{content:"src/utils.js"}),t(),r(l,a)},$$slots:{default:!0}});var h=e(_);y(h,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(l,o)=>{t();var a=i(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(l,a)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var Q=e(M);E(Q,{id:"step-4",step:4,title:"Handle GET request",children:(g,k)=>{var u=Ee(),$=p(u);f($,{children:(h,l)=>{t();var o=Se(),a=e(p(o));v(a,{content:"GET"});var n=e(a,2);v(n,{content:"src/main.js"}),t(),r(h,o)},$$slots:{default:!0}});var m=e($);y(m,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    const html = getStaticFile('index.html');
    return res.text(html, 200, { 'Content-Type': 'text/html; charset=utf-8' });
  }
};
`,language:"js",process:!0,children:(h,l)=>{t();var o=i(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    const html = getStaticFile('index.html');
    return res.text(html, 200, { 'Content-Type': 'text/html; charset=utf-8' });
  }
};`);r(h,o)},$$slots:{default:!0}});var _=e(m);f(_,{children:(h,l)=>{t();var o=qe(),a=e(p(o));v(a,{content:"GET"}),t(),r(h,o)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var J=e(Q);E(J,{id:"step-5",step:5,title:"Create web page",children:(g,k)=>{var u=je(),$=p(u);f($,{children:(n,s)=>{t();var d=Oe(),P=e(p(d));v(P,{content:"static/index.html"}),t(),r(n,d)},$$slots:{default:!0}});var m=e($);y(m,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(n,s)=>{t();var d=i(`<!doctype html>
<html lang="en">
</html>`);r(n,d)},$$slots:{default:!0}});var _=e(m);f(_,{children:(n,s)=>{t();var d=Ce(),P=e(p(d));v(P,{content:"<html>"});var x=e(P,2);v(x,{content:"<head>"}),t(),r(n,d)},$$slots:{default:!0}});var h=e(_);y(h,{content:`<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pinecone Demo</title>

    <script src="https://unpkg.com/meilisearch@0.34.1"><\/script>
    <script src="https://unpkg.com/alpinejs" defer><\/script>

    <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink-icons" />
</head>
  
`,language:"html",process:!0,children:(n,s)=>{t();var d=i(`<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pinecone Demo</title>

    <script src="https://unpkg.com/meilisearch@0.34.1"><\/script>
    <script src="https://unpkg.com/alpinejs" defer><\/script>

    <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink-icons" />
</head>`);r(n,d)},$$slots:{default:!0}});var l=e(h);f(l,{children:(n,s)=>{t();var d=De(),P=e(p(d));v(P,{content:"</head>"});var x=e(P,2);v(x,{content:"<body>"}),t(),r(n,d)},$$slots:{default:!0}});var o=e(l);y(o,{content:`<body>
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
`,language:"html",process:!0,children:(n,s)=>{t();var d=i(`<body>
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
</body>`);r(n,d)},$$slots:{default:!0}});var a=e(o);f(a,{children:(n,s)=>{t();var d=i("This will render a form that will submit your search query to the function and display the results.");r(n,d)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var Y=e(J);E(Y,{id:"step-6",step:6,title:"Setup SDKs",children:(g,k)=>{var u=Le(),$=p(u);f($,{children:(a,n)=>{t();var s=i("Add methods necessary to integrate with the OpenAI and Pinecone APIs");r(a,s)},$$slots:{default:!0}});var m=e($);f(m,{children:(a,n)=>{t();var s=Ne(),d=e(p(s));v(d,{content:"openai"});var P=e(d,2);v(P,{content:"@pinecone-database/pinecone"});var x=e(P,2);v(x,{content:"main.js"}),t(),r(a,s)},$$slots:{default:!0}});var _=e(m);y(_,{content:`import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';
`,language:"js",process:!0,children:(a,n)=>{t();var s=i(`import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';`);r(a,s)},$$slots:{default:!0}});var h=e(_);f(h,{children:(a,n)=>{t();var s=Re(),d=e(p(s));v(d,{content:"main.js"}),t(),r(a,s)},$$slots:{default:!0}});var l=e(h);y(l,{content:`const openai = new OpenAI();

const pinecone = new Pinecone();
const pineconeIndex = pinecone.index(process.env.PINECONE_INDEX_ID);
`,language:"js",process:!0,children:(a,n)=>{t();var s=i(`const openai = new OpenAI();

const pinecone = new Pinecone();
const pineconeIndex = pinecone.index(process.env.PINECONE_INDEX_ID);`);r(a,s)},$$slots:{default:!0}});var o=e(l);f(o,{children:(a,n)=>{t();var s=i("The functions checks the request method, and then initializes the OpenAI and Pinecone SDKs.");r(a,s)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var X=e(Y);E(X,{id:"step-7",step:7,title:"Handle prompt requests",children:(g,k)=>{var u=We(),$=p(u);f($,{children:(o,a)=>{t();var n=i("First add the following imports from LangChain:");r(o,n)},$$slots:{default:!0}});var m=e($);y(m,{content:`import { formatDocumentsAsString } from 'langchain/util/document';
import { ChatOpenAI } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { PromptTemplate } from '@langchain/core/prompts';
import {
  RunnableSequence,
  RunnablePassthrough,
} from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
`,language:"js",process:!0,children:(o,a)=>{t();var n=i(`import { formatDocumentsAsString } from 'langchain/util/document';
import { ChatOpenAI } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { PromptTemplate } from '@langchain/core/prompts';
import {
  RunnableSequence,
  RunnablePassthrough,
} from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';`);r(o,n)},$$slots:{default:!0}});var _=e(m);f(_,{children:(o,a)=>{t();var n=Fe(),s=e(p(n));v(s,{content:"main.js"}),t(),r(o,n)},$$slots:{default:!0}});var h=e(_);y(h,{content:`if (req.path === '/prompt') {
  if (!req.body.prompt || typeof req.body.prompt !== 'string') {
    return res.json(
      { ok: false, error: 'Missing required field \`prompt\`' },
      400
    );
  }

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { pineconeIndex }
  );

  const prompt = PromptTemplate.fromTemplate(
    \`Answer the question based with following context:{context}\\nQuestion: {question}\`
  );

  const chain = RunnableSequence.from([
    {
      context: vectorStore.asRetriever().pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    new ChatOpenAI(),
    new StringOutputParser(),
  ]);

  const result = await chain.invoke(req.body.prompt);

  return res.json({ ok: true, completion: result }, 200);
}
`,language:"js",process:!0,children:(o,a)=>{t();var n=i(`if (req.path === '/prompt') {
  if (!req.body.prompt || typeof req.body.prompt !== 'string') {
    return res.json(
      { ok: false, error: 'Missing required field \`prompt\`' },
      400
    );
  }

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { pineconeIndex }
  );

  const prompt = PromptTemplate.fromTemplate(
    \`Answer the question based with following context:{context}\\nQuestion: {question}\`
  );

  const chain = RunnableSequence.from([
    {
      context: vectorStore.asRetriever().pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    new ChatOpenAI(),
    new StringOutputParser(),
  ]);

  const result = await chain.invoke(req.body.prompt);

  return res.json({ ok: true, completion: result }, 200);
}`);r(o,n)},$$slots:{default:!0}});var l=e(h);f(l,{children:(o,a)=>{t();var n=i("This code will handle the prompt requests by creating a LangChain sequence that will format the documents as strings, prompt the user for a question, and then use the OpenAI API to generate a response. The response is then parsed and returned to the user.");r(o,n)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var z=e(X);E(z,{id:"step-8",step:8,title:"Handle index requests",children:(g,k)=>{var u=Ge(),$=p(u);f($,{children:(o,a)=>{t();var n=Ue(),s=e(p(n));v(s,{content:"src/backrush.js"}),t(),r(o,n)},$$slots:{default:!0}});var m=e($);y(m,{content:`import { Client, Databases, Query } from 'node-backrush';

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
`,language:"js",process:!0,children:(o,a)=>{t();var n=i(`import { Client, Databases, Query } from 'node-backrush';

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
}`);r(o,n)},$$slots:{default:!0}});var _=e(m);f(_,{children:(o,a)=>{t();var n=i("The service provides a method to iterate the documents contained within an entire collection, fetching the limit of 100 documents per request.");r(o,n)},$$slots:{default:!0}});var h=e(_);y(h,{content:`const backrush = new BackrushService();

const backrushDocuments = await backrush.getAllDocuments(
  process.env.BACKRUSH_DATABASE_ID,
  process.env.BACKRUSH_COLLECTION_ID
);

const documents = backrushDocuments.map(
  (document) =>
    new Document({
      metadata: { id: document.$id },
      pageContent: Object.entries(document)
        .filter(([key, _]) => !key.startsWith('$'))
        .map(([key, value]) => \`\${key}: \${value}\`)
        .join('\\n'),
    })
);

await PineconeStore.fromDocuments(documents, new OpenAIEmbeddings(), {
  pineconeIndex,
  maxConcurrency: 5,
});

`,language:"js",process:!0,children:(o,a)=>{t();var n=i(`const backrush = new BackrushService();

const backrushDocuments = await backrush.getAllDocuments(
  process.env.BACKRUSH_DATABASE_ID,
  process.env.BACKRUSH_COLLECTION_ID
);

const documents = backrushDocuments.map(
  (document) =>
    new Document({
      metadata: { id: document.$id },
      pageContent: Object.entries(document)
        .filter(([key, _]) => !key.startsWith('$'))
        .map(([key, value]) => \`\${key}: \${value}\`)
        .join('\\n'),
    })
);

await PineconeStore.fromDocuments(documents, new OpenAIEmbeddings(), {
  pineconeIndex,
  maxConcurrency: 5,
});`);r(o,n)},$$slots:{default:!0}});var l=e(h);f(l,{children:(o,a)=>{t();var n=He(),s=e(p(n));v(s,{content:"PineconeStore.fromDocuments"}),t(),r(o,n)},$$slots:{default:!0}}),r(g,u)},$$slots:{default:!0}});var ne=e(z);E(ne,{id:"step-9",step:9,title:"Test the function",children:(g,k)=>{f(g,{children:(u,$)=>{t();var m=i("Now that the function is deployed, test it by visiting the function URL in your browser. This should show the UI created earlier and to test it, write a prompt and click the submit button. After a brief moment you should see the matched results.");r(u,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),ae(F),r(te,F)},$$slots:{default:!0}}))}export{vt as component};
