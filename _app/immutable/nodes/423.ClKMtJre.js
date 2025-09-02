import{t as h,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as oe,s as e,f as v,n as t,r as ne}from"../chunks/NgVQVlRK.js";import{n as ae}from"../chunks/B4IyMRKX.js";import{S as L}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as se,a as ie}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as D}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as P}from"../chunks/DXp9_3zM.js";import{F as I}from"../chunks/OFUKRh55.js";import{H as le}from"../chunks/CXsRaEhZ.js";import{L as Z,I as C}from"../chunks/BhmTgGWB.js";import{P as m}from"../chunks/D8YsId2T.js";import{S}from"../chunks/yHjwcyUH.js";import{L as U}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as de}from"../chunks/CqOphJLh.js";const ce={layout:"article",title:"Integrating ElevenLabs",description:"Learn how to integrate ElevenLabs into your Backrush project.",difficulty:"intermediate",readtime:15};var pe=h("An <!>",1),ue=h("<!><!>",1),he=h("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ve=h("In the Backrush Console&#39;s sidebar, click <!>.",1),$e=h("Click <!>.",1),fe=h("Under <!>, select your provider.",1),me=h("After connecting to GitHub, under <!>, select the <!> starter template.",1),_e=h("In the <!> step, add the <!>, generate it <!>. For the <!>, tick the box to <!>.",1),ge=h("<!><!><!><!><!><!>",1),Pe=h("<!><!><!><!>",1),be=h("Install the <!> package to make requests to the ElevenLabs API and <!> package to upload the generated audio files to Backrush Storage.",1),xe=h("<!><!><!>",1),ye=h("For this example, the function will be able to take both <!> and <!> requests.",1),we=h("For the <!> request, return a static HTML page that will have a form to submit text to the API. Meanwhile the <!> request will send the text to the ElevenLabs API and return the generated audio file.",1),Ee=h("To begin with write the code to return the static HTML page, to do this create a new <!> file with the following code:",1),Ie=h("<!><!><!><!>",1),Te=h("Write the <!> request handler in the <!> file. This handler will return a static HTML page you&#39;ll create later.",1),Ae=h("A check is also included to ensure that the <!>, <!> and <!> environment variables is set.",1),ke=h("<!><!><!>",1),je=h("Create a HTML web page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),Se=h("Within the <!> tag, Add a <!> tag that will define the style and scripts.",1),Le=h("And after the <!> tag add this <!> which will contain the actual form:",1),Ce=h("<!><!><!><!><!><!><!>",1),qe=h("Import <!>, and the required features from the Backrush Node.js SDK at the top of the <!> file",1),Fe=h("<!><!><!><!><!><!><!><!>",1),Re=h("<!><!><!><!><!>",1),Ne=h("<!><!>",1),Oe=h("<article><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ct(ee){de(ee,ae(ce,{children:(te,De)=>{var O=Oe(),W=oe(O);m(W,{children:(g,y)=>{t();var c=s("ElevenLabs is an text to speech tool that can generate natural sounding audio from text. It's an excellent tool for dubbing content, creating audiobooks, or even for accessibility purposes.");r(g,c)},$$slots:{default:!0}});var K=e(W);m(K,{children:(g,y)=>{t();var c=s("Integrating ElevenLabs into your Backrush project is simple. This tutorial will guide you through the process of setting up the ElevenLabs API and integrating it into your Backrush project.");r(g,c)},$$slots:{default:!0}});var G=e(K);le(G,{id:"prerequisites",level:1,children:(g,y)=>{t();var c=s("Prerequisites");r(g,c)},$$slots:{default:!0}});var B=e(G);Z(B,{ordered:!1,marker:"-",children:(g,y)=>{var c=ue(),$=v(c);C($,{children:(f,u)=>{t();var i=s("An Backrush Project");r(f,i)},$$slots:{default:!0}});var _=e($);C(_,{children:(f,u)=>{t();var i=pe(),a=e(v(i));U(a,{href:"https://elevenlabs.io/",children:(n,o)=>{t();var l=s("ElevenLabs API Key");r(n,l)},$$slots:{default:!0}}),r(f,i)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var H=e(B);L(H,{id:"step-1",step:1,title:"Create new function",children:(g,y)=>{var c=Pe(),$=v(c);m($,{children:(i,a)=>{t();var n=he(),o=e(v(n));U(o,{href:"https://cloud.backrush.io/console",children:(d,x)=>{t();var k=s("Backrush Console");r(d,k)},$$slots:{default:!0}});var l=e(o,2);S(l,{marker:"**",children:(d,x)=>{t();var k=s("Functions");r(d,k)},$$slots:{default:!0}});var p=e(l,2);S(p,{marker:"**",children:(d,x)=>{t();var k=s("Create Function");r(d,k)},$$slots:{default:!0}}),t(),r(i,n)},$$slots:{default:!0}});var _=e($);se(_,{children:(i,a)=>{m(i,{children:(n,o)=>{D(n,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var f=e(_);ie(f,{children:(i,a)=>{m(i,{children:(n,o)=>{D(n,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var u=e(f);Z(u,{ordered:!0,marker:".",children:(i,a)=>{var n=ge(),o=v(n);C(o,{children:(w,q)=>{t();var b=ve(),E=e(v(b));S(E,{marker:"**",children:(T,j)=>{t();var A=s("Functions");r(T,A)},$$slots:{default:!0}}),t(),r(w,b)},$$slots:{default:!0}});var l=e(o);C(l,{children:(w,q)=>{t();var b=$e(),E=e(v(b));S(E,{marker:"**",children:(T,j)=>{t();var A=s("Create function");r(T,A)},$$slots:{default:!0}}),t(),r(w,b)},$$slots:{default:!0}});var p=e(l);C(p,{children:(w,q)=>{t();var b=fe(),E=e(v(b));S(E,{marker:"**",children:(T,j)=>{t();var A=s("Connect Git repository");r(T,A)},$$slots:{default:!0}}),t(),r(w,b)},$$slots:{default:!0}});var d=e(p);C(d,{children:(w,q)=>{t();var b=me(),E=e(v(b));S(E,{marker:"**",children:(j,A)=>{t();var F=s("Quick start");r(j,F)},$$slots:{default:!0}});var T=e(E,2);S(T,{marker:"**",children:(j,A)=>{t();var F=s("Node.js");r(j,F)},$$slots:{default:!0}}),t(),r(w,b)},$$slots:{default:!0}});var x=e(d);C(x,{children:(w,q)=>{t();var b=_e(),E=e(v(b));S(E,{marker:"**",children:(R,Q)=>{t();var N=s("Variables");r(R,N)},$$slots:{default:!0}});var T=e(E,2);P(T,{content:"ELEVENLABS_API_KEY"});var j=e(T,2);U(j,{href:"https://elevenlabs.io/",children:(R,Q)=>{t();var N=s("here");r(R,N)},$$slots:{default:!0}});var A=e(j,2);P(A,{content:"BACKRUSH_API_KEY"});var F=e(A,2);S(F,{marker:"**",children:(R,Q)=>{t();var N=s("Generate API key on completion");r(R,N)},$$slots:{default:!0}}),t(),r(w,b)},$$slots:{default:!0}});var k=e(x);C(k,{children:(w,q)=>{t();var b=s("Follow the step-by-step wizard and create the function.");r(w,b)},$$slots:{default:!0}}),r(i,n)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var J=e(H);L(J,{id:"step-2",step:2,title:"Add dependencies",children:(g,y)=>{var c=xe(),$=v(c);m($,{children:(u,i)=>{t();var a=s("Once the function is created, navigate to the freshly created repository and clone it to your local machine.");r(u,a)},$$slots:{default:!0}});var _=e($);m(_,{children:(u,i)=>{t();var a=be(),n=e(v(a));P(n,{content:"undici"});var o=e(n,2);P(o,{content:"node-backrush"}),t(),r(u,a)},$$slots:{default:!0}});var f=e(_);I(f,{content:`npm install undici node-backrush
`,language:"bash",process:!0,children:(u,i)=>{t();var a=s("npm install undici node-backrush");r(u,a)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var M=e(J);L(M,{id:"step-3",step:3,title:"Create utility functions",children:(g,y)=>{var c=Ie(),$=v(c);m($,{children:(i,a)=>{t();var n=ye(),o=e(v(n));P(o,{content:"GET"});var l=e(o,2);P(l,{content:"POST"}),t(),r(i,n)},$$slots:{default:!0}});var _=e($);m(_,{children:(i,a)=>{t();var n=we(),o=e(v(n));P(o,{content:"GET"});var l=e(o,2);P(l,{content:"POST"}),t(),r(i,n)},$$slots:{default:!0}});var f=e(_);m(f,{children:(i,a)=>{t();var n=Ee(),o=e(v(n));P(o,{content:"src/utils.js"}),t(),r(i,n)},$$slots:{default:!0}});var u=e(f);I(u,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(i,a)=>{t();var n=s(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(i,n)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var Y=e(M);L(Y,{id:"step-4",step:4,title:"Handle GET request",children:(g,y)=>{var c=ke(),$=v(c);m($,{children:(u,i)=>{t();var a=Te(),n=e(v(a));P(n,{content:"GET"});var o=e(n,2);P(o,{content:"src/main.js"}),t(),r(u,a)},$$slots:{default:!0}});var _=e($);I(_,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(u,i)=>{t();var a=s(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(u,a)},$$slots:{default:!0}});var f=e(_);m(f,{children:(u,i)=>{t();var a=Ae(),n=e(v(a));P(n,{content:"ELEVENLABS_API_KEY"});var o=e(n,2);P(o,{content:"BACKRUSH_API_KEY"});var l=e(o,2);P(l,{content:"BACKRUSH_BUCKET_ID"}),t(),r(u,a)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var V=e(Y);L(V,{id:"step-5",step:5,title:"Create web page",children:(g,y)=>{var c=Ce(),$=v(c);m($,{children:(o,l)=>{t();var p=je(),d=e(v(p));P(d,{content:"static/index.html"}),t(),r(o,p)},$$slots:{default:!0}});var _=e($);I(_,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(o,l)=>{t();var p=s(`<!doctype html>
<html lang="en">
</html>`);r(o,p)},$$slots:{default:!0}});var f=e(_);m(f,{children:(o,l)=>{t();var p=Se(),d=e(v(p));P(d,{content:"<html>"});var x=e(d,2);P(x,{content:"<head>"}),t(),r(o,p)},$$slots:{default:!0}});var u=e(f);I(u,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ElevenLabs Demo</title>

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
`,language:"html",process:!0,children:(o,l)=>{t();var p=s(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ElevenLabs Demo</title>

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
</head>`);r(o,p)},$$slots:{default:!0}});var i=e(u);m(i,{children:(o,l)=>{t();var p=Le(),d=e(v(p));P(d,{content:"</head>"});var x=e(d,2);P(x,{content:"<body>"}),t(),r(o,p)},$$slots:{default:!0}});var a=e(i);I(a,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">ElevenLabs Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with ElevenLabs. Enter
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
`,language:"html",process:!0,children:(o,l)=>{t();var p=s(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">ElevenLabs Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with ElevenLabs. Enter
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
</body>`);r(o,p)},$$slots:{default:!0}});var n=e(a);m(n,{children:(o,l)=>{t();var p=s("All of this together will render a form that will submit your text to the Backrush function through a POST request which you'll create next. The Backrush function will call ElevenLabs's API, upload the audio to Backrush Storage and return the URL, which will be displayed on your page.");r(o,p)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var z=e(V);L(z,{id:"step-6",step:6,title:"Handle POST Request",children:(g,y)=>{var c=Fe(),$=v(c);m($,{children:(l,p)=>{t();var d=s("Add methods necessary to integrate with the ElevenLabs API:");r(l,d)},$$slots:{default:!0}});var _=e($);m(_,{children:(l,p)=>{t();var d=qe(),x=e(v(d));P(x,{content:"fetch"});var k=e(x,2);P(k,{content:"main.js"}),t(),r(l,d)},$$slots:{default:!0}});var f=e(_);I(f,{content:`import { Client, Storage, ID, InputFile, Permission, Role } from "node-backrush";
import { fetch } from "undici";
`,language:"js",process:!0,children:(l,p)=>{t();var d=s(`import { Client, Storage, ID, InputFile, Permission, Role } from "node-backrush";
import { fetch } from "undici";`);r(l,d)},$$slots:{default:!0}});var u=e(f);m(u,{children:(l,p)=>{t();var d=s("Next add code to validate the body of the request and initialize the Backrush SDK:");r(l,d)},$$slots:{default:!0}});var i=e(u);I(i,{content:`const client = new Client()
  .setEndpoint(process.env.BACKRUSH_ENDPOINT ?? "https://<REGION>.cloud.backrush.io/v1")
  .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY);

if (!req.body.text || typeof req.body.text !== "string") {
  return res.json({ ok: false, error: "Missing required field \`text\`" }, 400);
}
`,language:"js",process:!0,children:(l,p)=>{t();var d=s(`const client = new Client()
  .setEndpoint(process.env.BACKRUSH_ENDPOINT ?? "https://<REGION>.cloud.backrush.io/v1")
  .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY);

if (!req.body.text || typeof req.body.text !== "string") {
  return res.json({ ok: false, error: "Missing required field \`text\`" }, 400);
}`);r(l,d)},$$slots:{default:!0}});var a=e(i);m(a,{children:(l,p)=>{t();var d=s("Send a request to the ElevenLabs API and return the response:");r(l,d)},$$slots:{default:!0}});var n=e(a);I(n,{content:`const body = {
  accent: req.body.accent || "british",
  accent_strength: 1.0,
  age: req.body.age || "young",
  gender: req.body.gender || "female",
  text: req.body.text,
};

const response = await fetch(
  "https://api.elevenlabs.io/v1/voice-generation/generate-voice",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
    body: JSON.stringify(body),
  },
);

if (response.status !== 200) {
  return res.json({ ok: false, error: "Failed to generate audio" }, 500);
}
`,language:"js",process:!0,children:(l,p)=>{t();var d=s(`const body = {
  accent: req.body.accent || "british",
  accent_strength: 1.0,
  age: req.body.age || "young",
  gender: req.body.gender || "female",
  text: req.body.text,
};

const response = await fetch(
  "https://api.elevenlabs.io/v1/voice-generation/generate-voice",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
    body: JSON.stringify(body),
  },
);

if (response.status !== 200) {
  return res.json({ ok: false, error: "Failed to generate audio" }, 500);
}`);r(l,d)},$$slots:{default:!0}});var o=e(n);m(o,{children:(l,p)=>{t();var d=s("This code will send the prompt to the ElevenLabs API and return the audio as a blob, additionally it'll also catch any errors we could encounter and reports them for easy debugging.");r(l,d)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var X=e(z);L(X,{id:"step-7",step:7,title:"Store Audio in Backrush Storage",children:(g,y)=>{var c=Re(),$=v(c);m($,{children:(a,n)=>{t();var o=s("Store the audio file in Backrush Storage for easy retrieval later:");r(a,o)},$$slots:{default:!0}});var _=e($);I(_,{content:`const storage = new Storage(client);

const file = await storage.createFile(
  process.env.BACKRUSH_BUCKET_ID,
  ID.unique(),
  InputFile.fromBuffer(await response.blob(), "audio.mp3"),
  [Permission.read(Role.any())],
);
`,language:"js",process:!0,children:(a,n)=>{t();var o=s(`const storage = new Storage(client);

const file = await storage.createFile(
  process.env.BACKRUSH_BUCKET_ID,
  ID.unique(),
  InputFile.fromBuffer(await response.blob(), "audio.mp3"),
  [Permission.read(Role.any())],
);`);r(a,o)},$$slots:{default:!0}});var f=e(_);m(f,{children:(a,n)=>{t();var o=s("To show it to the user, parse the download URL from Backrush and return it in the response:");r(a,o)},$$slots:{default:!0}});var u=e(f);I(u,{content:"const url = `${process.env.BACKRUSH_ENDPOINT}/storage/buckets/${process.env.BACKRUSH_BUCKET_ID}/files/${file.$id}/view?project=${process.env.BACKRUSH_FUNCTION_PROJECT_ID}`;\n\nreturn res.json({ ok: true, response: url });\n",language:"js",process:!0,children:(a,n)=>{t();var o=s("const url = `${process.env.BACKRUSH_ENDPOINT}/storage/buckets/${process.env.BACKRUSH_BUCKET_ID}/files/${file.$id}/view?project=${process.env.BACKRUSH_FUNCTION_PROJECT_ID}`;\n\nreturn res.json({ ok: true, response: url });");r(a,o)},$$slots:{default:!0}});var i=e(u);m(i,{children:(a,n)=>{t();var o=s("This should finish up the function, Deploy it to Backrush by pushing to the git repository created earlier.");r(a,o)},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}});var re=e(X);L(re,{id:"step-8",step:8,title:"Test the function",children:(g,y)=>{var c=Ne(),$=v(c);m($,{children:(f,u)=>{t();var i=s("Now that the function is deployed, test it by visiting the function URL in your browser. This should show the UI created earlier and to test it, write a prompt and click the submit button. After a brief moment you should see the audio appear below the input.");r(f,i)},$$slots:{default:!0}});var _=e($);m(_,{children:(f,u)=>{D(f,{src:"/images/docs/ai/integrations/elevenlabs/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r(g,c)},$$slots:{default:!0}}),ne(O),r(te,O)},$$slots:{default:!0}}))}export{ct as component};
