import{t as h,b as a,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ne,s as e,f as $,n as t,r as se}from"../chunks/NgVQVlRK.js";import{n as ae}from"../chunks/B4IyMRKX.js";import{S as L}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ie,a as le}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as q}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as _}from"../chunks/DXp9_3zM.js";import{F as b}from"../chunks/OFUKRh55.js";import{H as de}from"../chunks/CXsRaEhZ.js";import{L as Z,I as j}from"../chunks/BhmTgGWB.js";import{P as f}from"../chunks/D8YsId2T.js";import{S as C}from"../chunks/yHjwcyUH.js";import{L as U}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ce}from"../chunks/CqOphJLh.js";const pe={layout:"article",title:"Integrating LMNT",description:"Learn how to integrate LMNT into your Backrush project.",difficulty:"intermediate",readtime:15};var ue=h("An <!>",1),he=h("<!><!><!>",1),$e=h("Head to the <!>, click on <!> in the left sidebar and click the <!> button.",1),ve=h("In the Backrush Console&#39;s sidebar, click <!>.",1),fe=h("Click <!>.",1),me=h("Under <!>, select your provider.",1),_e=h("After connecting to GitHub, under <!>, select the <!> starter template.",1),ge=h("In the <!> step, add <!>, <!>. Generate your LMNT Key <!>. For the <!>, tick the box to <!>.",1),Pe=h("<!><!><!><!><!><!>",1),xe=h("<!><!><!><!>",1),we=h("Install the <!> package to make requests to the LMNT API and <!> package to upload the generated audio files to Backrush Storage.",1),Te=h("<!><!><!>",1),ye=h("For this example, the Function can take both <!> and <!> requests.",1),Ie=h("For the <!> request, return a static HTML page with a form to submit text to the API. Meanwhile, the <!> request will send the text to the LMNT API and return the generated audio file.",1),be=h("To begin with, write the code to return the static HTML page. To do this, create a new <!> file with the following code:",1),Ae=h("<!><!><!><!>",1),Ee=h("Write the <!> request handler in the <!> file. This handler will return a static HTML page, which will be created in the next section.",1),ke=h("A check is also included to ensure that the <!>, <!> and <!> environment variables are set.",1),Ne=h("<!><!><!>",1),je=h("Create an HTML web page that the Function will serve. Create a new file at <!> with some HTML boilerplate:",1),Ce=h("Within the <!> tag, Add a <!> tag that will define the style and scripts.",1),Le=h("And after the <!> tag add this <!> which will contain the actual form:",1),Se=h("All of this together will render a form that will submit your text to the Backrush Function through a <!> request. The Backrush function will then call LMNT&#39;s API, upload the audio to Backrush Storage and return the URL, which will be displayed on your page.",1),Fe=h("<!><!><!><!><!><!><!>",1),Re=h("Import the <!> class from <!>, and the required features from the Backrush Node.js SDK at the top of the <!> file.",1),Me=h("Next, add code to validate the body of the request and initialize the Backrush SDK also within <!> following the previously added GET handler:",1),Oe=h("<!><!><!><!><!><!><!><!>",1),qe=h("<!><!><!><!><!>",1),Ue=h("<!><!>",1),De=h("<article><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ht(ee){ce(ee,ae(pe,{children:(te,Ke)=>{var O=De(),D=ne(O);f(D,{children:(P,y)=>{t();var c=a("LMNT is a text-to-speech tool that can generate natural-sounding audio from text. It's an excellent tool for dubbing content, creating audiobooks, or even for accessibility.");r(P,c)},$$slots:{default:!0}});var K=e(D);f(K,{children:(P,y)=>{t();var c=a("Integrating LMNT into your Backrush project is simple. This tutorial will guide you through setting up the LMNT API and incorporating it into your Backrush project.");r(P,c)},$$slots:{default:!0}});var W=e(K);de(W,{id:"prerequisites",level:1,children:(P,y)=>{t();var c=a("Prerequisites");r(P,c)},$$slots:{default:!0}});var G=e(W);Z(G,{ordered:!1,marker:"-",children:(P,y)=>{var c=he(),v=$(c);j(v,{children:(p,d)=>{t();var n=a("An Backrush Project");r(p,n)},$$slots:{default:!0}});var m=e(v);j(m,{children:(p,d)=>{t();var n=a("An Backrush Bucket");r(p,n)},$$slots:{default:!0}});var g=e(m);j(g,{children:(p,d)=>{t();var n=ue(),s=e($(n));U(s,{href:"https://app.lmnt.com/account",children:(o,l)=>{t();var u=a("LMNT API Key");r(o,u)},$$slots:{default:!0}}),r(p,n)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var B=e(G);L(B,{id:"step-1",step:1,title:"Create new function",children:(P,y)=>{var c=xe(),v=$(c);f(v,{children:(d,n)=>{t();var s=$e(),o=e($(s));U(o,{href:"https://cloud.backrush.io/console",children:(i,w)=>{t();var A=a("Backrush Console");r(i,A)},$$slots:{default:!0}});var l=e(o,2);C(l,{marker:"**",children:(i,w)=>{t();var A=a("Functions");r(i,A)},$$slots:{default:!0}});var u=e(l,2);C(u,{marker:"**",children:(i,w)=>{t();var A=a("Create Function");r(i,A)},$$slots:{default:!0}}),t(),r(d,s)},$$slots:{default:!0}});var m=e(v);ie(m,{children:(d,n)=>{f(d,{children:(s,o)=>{q(s,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var g=e(m);le(g,{children:(d,n)=>{f(d,{children:(s,o)=>{q(s,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var p=e(g);Z(p,{ordered:!0,marker:".",children:(d,n)=>{var s=Pe(),o=$(s);j(o,{children:(T,F)=>{t();var x=ve(),I=e($(x));C(I,{marker:"**",children:(E,N)=>{t();var k=a("Functions");r(E,k)},$$slots:{default:!0}}),t(),r(T,x)},$$slots:{default:!0}});var l=e(o);j(l,{children:(T,F)=>{t();var x=fe(),I=e($(x));C(I,{marker:"**",children:(E,N)=>{t();var k=a("Create function");r(E,k)},$$slots:{default:!0}}),t(),r(T,x)},$$slots:{default:!0}});var u=e(l);j(u,{children:(T,F)=>{t();var x=me(),I=e($(x));C(I,{marker:"**",children:(E,N)=>{t();var k=a("Connect Git repository");r(E,k)},$$slots:{default:!0}}),t(),r(T,x)},$$slots:{default:!0}});var i=e(u);j(i,{children:(T,F)=>{t();var x=_e(),I=e($(x));C(I,{marker:"**",children:(N,k)=>{t();var S=a("Quick start");r(N,S)},$$slots:{default:!0}});var E=e(I,2);C(E,{marker:"**",children:(N,k)=>{t();var S=a("Node.js");r(N,S)},$$slots:{default:!0}}),t(),r(T,x)},$$slots:{default:!0}});var w=e(i);j(w,{children:(T,F)=>{t();var x=ge(),I=e($(x));C(I,{marker:"**",children:(R,V)=>{t();var M=a("Variables");r(R,M)},$$slots:{default:!0}});var E=e(I,2);_(E,{content:"BACKRUSH_BUCKET_ID"});var N=e(E,2);_(N,{content:"LMNT_API_KEY"});var k=e(N,2);U(k,{href:"https://app.lmnt.com/account",children:(R,V)=>{t();var M=a("here");r(R,M)},$$slots:{default:!0}});var S=e(k,2);_(S,{content:"BACKRUSH_API_KEY"});var oe=e(S,2);C(oe,{marker:"**",children:(R,V)=>{t();var M=a("Generate API key on completion");r(R,M)},$$slots:{default:!0}}),t(),r(T,x)},$$slots:{default:!0}});var A=e(w);j(A,{children:(T,F)=>{t();var x=a("Follow the step-by-step wizard and create the Function.");r(T,x)},$$slots:{default:!0}}),r(d,s)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var Y=e(B);L(Y,{id:"step-2",step:2,title:"Add dependencies",children:(P,y)=>{var c=Te(),v=$(c);f(v,{children:(p,d)=>{t();var n=a("Once the Function is created, please navigate to the freshly created repository and clone it to your local machine.");r(p,n)},$$slots:{default:!0}});var m=e(v);f(m,{children:(p,d)=>{t();var n=we(),s=e($(n));_(s,{content:"lmnt-node"});var o=e(s,2);_(o,{content:"node-backrush"}),t(),r(p,n)},$$slots:{default:!0}});var g=e(m);b(g,{content:`npm install lmnt-node node-backrush
`,language:"bash",process:!0,children:(p,d)=>{t();var n=a("npm install lmnt-node node-backrush");r(p,n)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var H=e(Y);L(H,{id:"step-3",step:3,title:"Create utility functions",children:(P,y)=>{var c=Ae(),v=$(c);f(v,{children:(d,n)=>{t();var s=ye(),o=e($(s));_(o,{content:"GET"});var l=e(o,2);_(l,{content:"POST"}),t(),r(d,s)},$$slots:{default:!0}});var m=e(v);f(m,{children:(d,n)=>{t();var s=Ie(),o=e($(s));_(o,{content:"GET"});var l=e(o,2);_(l,{content:"POST"}),t(),r(d,s)},$$slots:{default:!0}});var g=e(m);f(g,{children:(d,n)=>{t();var s=be(),o=e($(s));_(o,{content:"src/utils.js"}),t(),r(d,s)},$$slots:{default:!0}});var p=e(g);b(p,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(d,n)=>{t();var s=a(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(d,s)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var J=e(H);L(J,{id:"step-4",step:4,title:"Handle GET request",children:(P,y)=>{var c=Ne(),v=$(c);f(v,{children:(p,d)=>{t();var n=Ee(),s=e($(n));_(s,{content:"GET"});var o=e(s,2);_(o,{content:"src/main.js"}),t(),r(p,n)},$$slots:{default:!0}});var m=e(v);b(m,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  throwIfMissing(process.env, [
    "LMNT_API_KEY",
    "BACKRUSH_API_KEY",
    "BACKRUSH_BUCKET_ID",
    "BACKRUSH_FUNCTION_PROJECT_ID"
  ]);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(p,d)=>{t();var n=a(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  throwIfMissing(process.env, [
    "LMNT_API_KEY",
    "BACKRUSH_API_KEY",
    "BACKRUSH_BUCKET_ID",
    "BACKRUSH_FUNCTION_PROJECT_ID"
  ]);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(p,n)},$$slots:{default:!0}});var g=e(m);f(g,{children:(p,d)=>{t();var n=ke(),s=e($(n));_(s,{content:"LMNT_API_KEY"});var o=e(s,2);_(o,{content:"BACKRUSH_API_KEY"});var l=e(o,2);_(l,{content:"BACKRUSH_BUCKET_ID"}),t(),r(p,n)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var z=e(J);L(z,{id:"step-5",step:5,title:"Create web page",children:(P,y)=>{var c=Fe(),v=$(c);f(v,{children:(o,l)=>{t();var u=je(),i=e($(u));_(i,{content:"static/index.html"}),t(),r(o,u)},$$slots:{default:!0}});var m=e(v);b(m,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(o,l)=>{t();var u=a(`<!doctype html>
<html lang="en">
</html>`);r(o,u)},$$slots:{default:!0}});var g=e(m);f(g,{children:(o,l)=>{t();var u=Ce(),i=e($(u));_(i,{content:"<html>"});var w=e(i,2);_(w,{content:"<head>"}),t(),r(o,u)},$$slots:{default:!0}});var p=e(g);b(p,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LMNT Demo</title>

  <script>
    async function onSubmit(prompt) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ text: prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json.response;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>
`,language:"html",process:!0,children:(o,l)=>{t();var u=a(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LMNT Demo</title>

  <script>
    async function onSubmit(prompt) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ text: prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json.response;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>`);r(o,u)},$$slots:{default:!0}});var d=e(p);f(d,{children:(o,l)=>{t();var u=Le(),i=e($(u));_(i,{content:"</head>"});var w=e(i,2);_(w,{content:"<body>"}),t(),r(o,u)},$$slots:{default:!0}});var n=e(d);b(n,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">LMNT Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with LMNT. Enter
          text and receive an audio response.
        </p>
      </div>
    </div>
    <div
      class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', response: '', loading: false }"
    >
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div
            class="input-text-wrapper is-with-end-button u-width-full-line"
          >
            <input x-model="prompt" type="search" placeholder="Enter text" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>

          <button
            class="button"
            x-bind:disabled="loading"
            x-on:click="async () => { loading = true; response = ''; try { response = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }"
          >
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="response">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Output:</h5>
              </div>

              <div>
                <audio x-bind:src="response" controls></audio>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>
`,language:"html",process:!0,children:(o,l)=>{t();var u=a(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">LMNT Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with LMNT. Enter
          text and receive an audio response.
        </p>
      </div>
    </div>
    <div
      class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', response: '', loading: false }"
    >
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div
            class="input-text-wrapper is-with-end-button u-width-full-line"
          >
            <input x-model="prompt" type="search" placeholder="Enter text" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>

          <button
            class="button"
            x-bind:disabled="loading"
            x-on:click="async () => { loading = true; response = ''; try { response = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }"
          >
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="response">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Output:</h5>
              </div>

              <div>
                <audio x-bind:src="response" controls></audio>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>`);r(o,u)},$$slots:{default:!0}});var s=e(n);f(s,{children:(o,l)=>{t();var u=Se(),i=e($(u));_(i,{content:"POST"}),t(),r(o,u)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var X=e(z);L(X,{id:"step-6",step:6,title:"Handle POST Request",children:(P,y)=>{var c=Oe(),v=$(c);f(v,{children:(l,u)=>{t();var i=a("Next, you'll add the methods necessary to integrate with the LMNT API.");r(l,i)},$$slots:{default:!0}});var m=e(v);f(m,{children:(l,u)=>{t();var i=Re(),w=e($(i));_(w,{content:"Speech"});var A=e(w,2);_(A,{content:"lmnt-node"});var T=e(A,2);_(T,{content:"main.js"}),t(),r(l,i)},$$slots:{default:!0}});var g=e(m);b(g,{content:`import { Client, Storage, ID, InputFile, Permission, Role } from "node-backrush";
import Speech from 'lmnt-node';
`,language:"js",process:!0,children:(l,u)=>{t();var i=a(`import { Client, Storage, ID, InputFile, Permission, Role } from "node-backrush";
import Speech from 'lmnt-node';`);r(l,i)},$$slots:{default:!0}});var p=e(g);f(p,{children:(l,u)=>{t();var i=Me(),w=e($(i));_(w,{content:"main.js"}),t(),r(l,i)},$$slots:{default:!0}});var d=e(p);b(d,{content:`const endpoint = process.env.BACKRUSH_ENDPOINT ?? "https://<REGION>.cloud.backrush.io/v1";

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY);

if (!req.body.text || typeof req.body.text !== "string") {
  return res.json({ ok: false, error: "Missing required field \`text\`" }, 400);
}
`,language:"js",process:!0,children:(l,u)=>{t();var i=a(`const endpoint = process.env.BACKRUSH_ENDPOINT ?? "https://<REGION>.cloud.backrush.io/v1";

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY);

if (!req.body.text || typeof req.body.text !== "string") {
  return res.json({ ok: false, error: "Missing required field \`text\`" }, 400);
}`);r(l,i)},$$slots:{default:!0}});var n=e(d);f(n,{children:(l,u)=>{t();var i=a("Next, send a request to the LMNT API and store the response:");r(l,i)},$$slots:{default:!0}});var s=e(n);b(s,{content:`const lmnt = new Speech(process.env.LMNT_API_KEY);
const response = await lmnt.synthesize(req.body.text, 'lily', { format: 'mp3' });
`,language:"js",process:!0,children:(l,u)=>{t();var i=a(`const lmnt = new Speech(process.env.LMNT_API_KEY);
const response = await lmnt.synthesize(req.body.text, 'lily', { format: 'mp3' });`);r(l,i)},$$slots:{default:!0}});var o=e(s);f(o,{children:(l,u)=>{t();var i=a("This code will send the prompt to the LMNT API and return the audio as a blob. Additionally, any errors will be caught and reported for easy debugging.");r(l,i)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var Q=e(X);L(Q,{id:"step-7",step:7,title:"Store Audio in Backrush Storage",children:(P,y)=>{var c=qe(),v=$(c);f(v,{children:(n,s)=>{t();var o=a("Store the audio file in Backrush Storage for easy retrieval later:");r(n,o)},$$slots:{default:!0}});var m=e(v);b(m,{content:`const storage = new Storage(client);

const file = await storage.createFile(
  process.env.BACKRUSH_BUCKET_ID,
  ID.unique(),
  InputFile.fromBuffer(new Blob([response.audio]), "audio.mp3"),
  [Permission.read(Role.any())],
);
`,language:"js",process:!0,children:(n,s)=>{t();var o=a(`const storage = new Storage(client);

const file = await storage.createFile(
  process.env.BACKRUSH_BUCKET_ID,
  ID.unique(),
  InputFile.fromBuffer(new Blob([response.audio]), "audio.mp3"),
  [Permission.read(Role.any())],
);`);r(n,o)},$$slots:{default:!0}});var g=e(m);f(g,{children:(n,s)=>{t();var o=a("To show it to the user, parse the download URL from Backrush and return it in the response:");r(n,o)},$$slots:{default:!0}});var p=e(g);b(p,{content:"const url = `${endpoint}/storage/buckets/${process.env.BACKRUSH_BUCKET_ID}/files/${file.$id}/view?project=${process.env.BACKRUSH_FUNCTION_PROJECT_ID}`;\n\nreturn res.json({ ok: true, response: url });\n",language:"js",process:!0,children:(n,s)=>{t();var o=a("const url = `${endpoint}/storage/buckets/${process.env.BACKRUSH_BUCKET_ID}/files/${file.$id}/view?project=${process.env.BACKRUSH_FUNCTION_PROJECT_ID}`;\n\nreturn res.json({ ok: true, response: url });");r(n,o)},$$slots:{default:!0}});var d=e(p);f(d,{children:(n,s)=>{t();var o=a("This should finish up the Function. Deploy it to Backrush by pushing it to the git repository created earlier.");r(n,o)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}});var re=e(Q);L(re,{id:"step-8",step:8,title:"Test the function",children:(P,y)=>{var c=Ue(),v=$(c);f(v,{children:(g,p)=>{t();var d=a("Now that the Function is deployed test it by visiting the function URL in your browser. This should show the UI created earlier. To test it, write a prompt and click the submit button. After a brief moment, you should see the audio below the input.");r(g,d)},$$slots:{default:!0}});var m=e(v);f(m,{children:(g,p)=>{q(g,{src:"/images/docs/ai/integrations/lmnt/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}}),se(O),r(te,O)},$$slots:{default:!0}}))}export{ht as component};
