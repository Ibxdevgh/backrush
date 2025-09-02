import{t as c,b as a,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Z,s as e,f as m,n as t,r as ee}from"../chunks/NgVQVlRK.js";import{n as te}from"../chunks/B4IyMRKX.js";import{S as C}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ne,a as re}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as U}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as P}from"../chunks/DXp9_3zM.js";import{F as T}from"../chunks/OFUKRh55.js";import{H as oe}from"../chunks/CXsRaEhZ.js";import{L as Y,I as F}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as I}from"../chunks/yHjwcyUH.js";import{L as O}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ae}from"../chunks/CqOphJLh.js";const se={layout:"article",title:"Integrating Replicate",description:"Learn how to integrate Replicate into your Backrush project.",difficulty:"intermediate",readtime:15};var ie=c("A <!>",1),le=c("<!><!>",1),de=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),pe=c("In the Backrush Console&#39;s sidebar, click <!>.",1),ce=c("Click <!>.",1),ue=c("Under <!>, select your provider.",1),me=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),he=c("In the <!> step, add the <!>, generate it <!>.",1),fe=c("<!><!><!><!><!><!>",1),$e=c("<!><!><!><!>",1),ve=c("<!><!><!>",1),ge=c("For our example, our function will be able to take both <!> and <!> requests.",1),_e=c("For the <!> request, return a static HTML page which we&#39;ll write later that will use AlpineJS to make a <!> request to our function. Meanwhile, our <!> request will use the Replicate SDK to make a request to the Replicate API.",1),ye=c("To begin with we will write the code to return the static HTML page, to do this we&#39;ll create a new <!> file with the following code:",1),xe=c("<!><!><!><!>",1),we=c("We&#39;re going to write our <!> request handler in the <!> file. This handler will return a static HTML page we&#39;ll create later.",1),be=c("<!><!>",1),Pe=c("Create the static HTML page that our function will serve. Create a new file at <!> with some HTML boilerplate:",1),ke=c("Within the <!> tag, we&#39;re going to add a <!> tag that will define our style and scripts.",1),qe=c("And after the <!> tag we&#39;re going to add our <!> which will contain the actual form:",1),je=c("<!><!><!><!><!><!><!>",1),Te=c("Import the Replicate SDK at the top of our <!> file:",1),Re=c("In this example we&#39;re going to be using meta&#39;s musicgen and llama2 70b models for music and text generation while using Stability AI&#39;s SDXL model for image generation. You can find more models on the <!>.",1),Ae=c("<!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Se=c("<!><!>",1),Fe=c("<article><!><!><!><!><!><!><!><!><!><!></article>");function ot(Q){ae(Q,te(se,{children:(V,Ie)=>{var E=Fe(),N=Z(E);h(N,{children:(y,R)=>{t();var d=a("Integrating Replicate into your Backrush project is simple. This tutorial will guide you through the process of setting up the Replicate API and integrating it into your Backrush project.");n(y,d)},$$slots:{default:!0}});var D=e(N);oe(D,{id:"prerequisites",level:1,children:(y,R)=>{t();var d=a("Prerequisites");n(y,d)},$$slots:{default:!0}});var G=e(D);Y(G,{ordered:!1,marker:"-",children:(y,R)=>{var d=le(),$=m(d);F($,{children:(u,g)=>{t();var s=a("An Backrush Project");n(u,s)},$$slots:{default:!0}});var _=e($);F(_,{children:(u,g)=>{t();var s=ie(),f=e(m(s));O(f,{href:"https://replicate.com/docs/reference/http#authentication",children:(l,i)=>{t();var v=a("Replicate API Key");n(l,v)},$$slots:{default:!0}}),n(u,s)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var M=e(G);C(M,{id:"step-1",step:1,title:"Create new function",children:(y,R)=>{var d=$e(),$=m(d);h($,{children:(s,f)=>{t();var l=de(),i=e(m(l));O(i,{href:"https://cloud.backrush.io/console",children:(x,q)=>{t();var A=a("Backrush Console");n(x,A)},$$slots:{default:!0}});var v=e(i,2);I(v,{marker:"**",children:(x,q)=>{t();var A=a("Functions");n(x,A)},$$slots:{default:!0}});var p=e(v,2);I(p,{marker:"**",children:(x,q)=>{t();var A=a("Create Function");n(x,A)},$$slots:{default:!0}}),t(),n(s,l)},$$slots:{default:!0}});var _=e($);ne(_,{children:(s,f)=>{h(s,{children:(l,i)=>{U(l,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var u=e(_);re(u,{children:(s,f)=>{h(s,{children:(l,i)=>{U(l,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var g=e(u);Y(g,{ordered:!0,marker:".",children:(s,f)=>{var l=fe(),i=m(l);F(i,{children:(o,w)=>{t();var r=pe(),b=e(m(r));I(b,{marker:"**",children:(j,S)=>{t();var k=a("Functions");n(j,k)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var v=e(i);F(v,{children:(o,w)=>{t();var r=ce(),b=e(m(r));I(b,{marker:"**",children:(j,S)=>{t();var k=a("Create function");n(j,k)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var p=e(v);F(p,{children:(o,w)=>{t();var r=ue(),b=e(m(r));I(b,{marker:"**",children:(j,S)=>{t();var k=a("Connect Git repository");n(j,k)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var x=e(p);F(x,{children:(o,w)=>{t();var r=me(),b=e(m(r));I(b,{marker:"**",children:(S,k)=>{t();var L=a("Quick start");n(S,L)},$$slots:{default:!0}});var j=e(b,2);I(j,{marker:"**",children:(S,k)=>{t();var L=a("Node.js");n(S,L)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var q=e(x);F(q,{children:(o,w)=>{t();var r=he(),b=e(m(r));I(b,{marker:"**",children:(k,L)=>{t();var H=a("Variables");n(k,H)},$$slots:{default:!0}});var j=e(b,2);P(j,{content:"REPLICATE_API_KEY"});var S=e(j,2);O(S,{href:"https://replicate.com/docs/reference/http#authentication",children:(k,L)=>{t();var H=a("here");n(k,H)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var A=e(q);F(A,{children:(o,w)=>{t();var r=a("Follow the step-by-step wizard and create the function.");n(o,r)},$$slots:{default:!0}}),n(s,l)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var K=e(M);C(K,{id:"step-2",step:2,title:"Add Replicate SDK",children:(y,R)=>{var d=ve(),$=m(d);h($,{children:(g,s)=>{t();var f=a("Once the function is created, clone the function and open it in your development environment.");n(g,f)},$$slots:{default:!0}});var _=e($);h(_,{children:(g,s)=>{t();var f=a("Once you have the repository open, you can install the Replicate by running the following command in your terminal:");n(g,f)},$$slots:{default:!0}});var u=e(_);T(u,{content:`npm install replicate
`,language:"bash",process:!0,children:(g,s)=>{t();var f=a("npm install replicate");n(g,f)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var J=e(K);C(J,{id:"step-3",step:3,title:"Create utility function",children:(y,R)=>{var d=xe(),$=m(d);h($,{children:(s,f)=>{t();var l=ge(),i=e(m(l));P(i,{content:"GET"});var v=e(i,2);P(v,{content:"POST"}),t(),n(s,l)},$$slots:{default:!0}});var _=e($);h(_,{children:(s,f)=>{t();var l=_e(),i=e(m(l));P(i,{content:"GET"});var v=e(i,2);P(v,{content:"POST"});var p=e(v,2);P(p,{content:"POST"}),t(),n(s,l)},$$slots:{default:!0}});var u=e(_);h(u,{children:(s,f)=>{t();var l=ye(),i=e(m(l));P(i,{content:"src/utils.js"}),t(),n(s,l)},$$slots:{default:!0}});var g=e(u);T(g,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(s,f)=>{t();var l=a(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);n(s,l)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var W=e(J);C(W,{id:"step-4",step:4,title:"Handle GET request",children:(y,R)=>{var d=be(),$=m(d);h($,{children:(u,g)=>{t();var s=we(),f=e(m(s));P(f,{content:"GET"});var l=e(f,2);P(l,{content:"src/main.js"}),t(),n(u,s)},$$slots:{default:!0}});var _=e($);T(_,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(u,g)=>{t();var s=a(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);n(u,s)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var X=e(W);C(X,{id:"step-5",step:5,title:"Create static page",children:(y,R)=>{var d=je(),$=m(d);h($,{children:(i,v)=>{t();var p=Pe(),x=e(m(p));P(x,{content:"static/index.html"}),t(),n(i,p)},$$slots:{default:!0}});var _=e($);T(_,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(i,v)=>{t();var p=a(`<!doctype html>
<html lang="en">
</html>`);n(i,p)},$$slots:{default:!0}});var u=e(_);h(u,{children:(i,v)=>{t();var p=ke(),x=e(m(p));P(x,{content:"<html>"});var q=e(x,2);P(q,{content:"<head>"}),t(),n(i,p)},$$slots:{default:!0}});var g=e(u);T(g,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Replicate Demo</title>

  <script>
    async function onSubmit(prompt, type) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ prompt, type }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>
`,language:"html",process:!0,children:(i,v)=>{t();var p=a(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Replicate Demo</title>

  <script>
    async function onSubmit(prompt, type) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ prompt, type }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>`);n(i,p)},$$slots:{default:!0}});var s=e(g);h(s,{children:(i,v)=>{t();var p=qe(),x=e(m(p));P(x,{content:"</head>"});var q=e(x,2);P(q,{content:"<body>"}),t(),n(i,p)},$$slots:{default:!0}});var f=e(s);T(f,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">Replicate Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with Replicate. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div class="container u-margin-block-start-negative-56"
      x-data="{ type: 'text', prompt: '', answer: {type: '', answer: ''}, loading: false }">
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div class="input-text-wrapper is-with-end-button u-width-full-line">
            <input x-model="prompt" type="search" placeholder="Prompt" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>
          <div class="select u-width-140">
            <select x-model="type">
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="audio">Audio</option>
            </select>
            <span class="icon-cheveron-down" aria-hidden="true"></span>
          </div>

          <button class="button" x-bind:disabled="loading"
            x-on:click="async () => { loading = true; answer = {type: '', answer: ''}; try { answer = await onSubmit(prompt, type) } catch(err) { console.error(err); } finally { loading = false; } }">
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="answer.type">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Result:</h5>
              </div>
              <template x-if="answer.type === 'image'" class="u-flex u-gap-12">
                <img class="u-max-width-400" x-bind:src="answer.response" alt="Replicate output" />
              </template>
              <template x-if="answer.type === 'audio'" class="u-flex u-gap-12">
                <audio x-bind:src="answer.response" controls></audio>
              </template>
              <template x-if="answer.type === 'text'" class="u-flex u-gap-12">
                <p class="u-color-text-gray" x-text="answer.response"></p>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>
`,language:"html",process:!0,children:(i,v)=>{t();var p=a(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">Replicate Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with Replicate. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div class="container u-margin-block-start-negative-56"
      x-data="{ type: 'text', prompt: '', answer: {type: '', answer: ''}, loading: false }">
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div class="input-text-wrapper is-with-end-button u-width-full-line">
            <input x-model="prompt" type="search" placeholder="Prompt" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>
          <div class="select u-width-140">
            <select x-model="type">
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="audio">Audio</option>
            </select>
            <span class="icon-cheveron-down" aria-hidden="true"></span>
          </div>

          <button class="button" x-bind:disabled="loading"
            x-on:click="async () => { loading = true; answer = {type: '', answer: ''}; try { answer = await onSubmit(prompt, type) } catch(err) { console.error(err); } finally { loading = false; } }">
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="answer.type">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Result:</h5>
              </div>
              <template x-if="answer.type === 'image'" class="u-flex u-gap-12">
                <img class="u-max-width-400" x-bind:src="answer.response" alt="Replicate output" />
              </template>
              <template x-if="answer.type === 'audio'" class="u-flex u-gap-12">
                <audio x-bind:src="answer.response" controls></audio>
              </template>
              <template x-if="answer.type === 'text'" class="u-flex u-gap-12">
                <p class="u-color-text-gray" x-text="answer.response"></p>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>`);n(i,p)},$$slots:{default:!0}});var l=e(f);h(l,{children:(i,v)=>{t();var p=a("All of this together will render a form that will submit your question to the Backrush Function through a POST request which we'll create next. The Backrush Function will call Replicate's API and return the response, which will be displayed on your page using different conditional statements depending on the output media type.");n(i,p)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var z=e(X);C(z,{id:"step-6",step:6,title:"Handle POST Request",children:(y,R)=>{var d=Ae(),$=m(d);h($,{children:(o,w)=>{t();var r=a("Now that we're serving a basic HTML page, we can add methods necessary to integrate with Replicate's API.");n(o,r)},$$slots:{default:!0}});var _=e($);h(_,{children:(o,w)=>{t();var r=Te(),b=e(m(r));P(b,{content:"main.js"}),t(),n(o,r)},$$slots:{default:!0}});var u=e(_);T(u,{content:`import Replicate from "replicate";
`,language:"js",process:!0,children:(o,w)=>{t();var r=a('import Replicate from "replicate";');n(o,r)},$$slots:{default:!0}});var g=e(u);h(g,{children:(o,w)=>{t();var r=a("Next after we serve the HTML we're going to add code to validate the body of the request, define our models and initialize the Replicate SDK:");n(o,r)},$$slots:{default:!0}});var s=e(g);T(s,{content:`const models = {
  'audio': 'meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38',
  'text': 'meta/llama-2-70b-chat',
  'image': 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'
};

if (req.body.type !== 'audio' && req.body.type !== 'text' && req.body.type !== 'image') {
  return res.json({ ok: false, error: 'Invalid type' }, 400);
}

const replicate = new Replicate();
`,language:"js",process:!0,children:(o,w)=>{t();var r=a(`const models = {
  'audio': 'meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38',
  'text': 'meta/llama-2-70b-chat',
  'image': 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'
};

if (req.body.type !== 'audio' && req.body.type !== 'text' && req.body.type !== 'image') {
  return res.json({ ok: false, error: 'Invalid type' }, 400);
}

const replicate = new Replicate();`);n(o,r)},$$slots:{default:!0}});var f=e(s);h(f,{children:(o,w)=>{t();var r=Re(),b=e(m(r));O(b,{href:"https://replicate.com/explore",children:(j,S)=>{t();var k=a("Replicate explore page");n(j,k)},$$slots:{default:!0}}),t(),n(o,r)},$$slots:{default:!0}});var l=e(f);h(l,{children:(o,w)=>{t();var r=a("Next we're going to add some per model configurations:");n(o,r)},$$slots:{default:!0}});var i=e(l);T(i,{content:`let request = {
  input: {
    prompt: req.body.prompt,
  }
};

// Allows you to tinker parameters for individual output types
switch (req.body.type) {
  case 'audio':
    request.input = {
      ...request.input,
      length: 30,
    }
  break;
  case 'text':
    request.input = {
      ...request.input,
      max_new_tokens: 512,
    }
  break;
  case 'image':
    request.input = {
      ...request.input,
      width: 512,
      height: 512,
      negative_prompt: "deformed, noisy, blurry, distorted",
    }
  break;
};
`,language:"js",process:!0,children:(o,w)=>{t();var r=a(`let request = {
  input: {
    prompt: req.body.prompt,
  }
};

// Allows you to tinker parameters for individual output types
switch (req.body.type) {
  case 'audio':
    request.input = {
      ...request.input,
      length: 30,
    }
  break;
  case 'text':
    request.input = {
      ...request.input,
      max_new_tokens: 512,
    }
  break;
  case 'image':
    request.input = {
      ...request.input,
      width: 512,
      height: 512,
      negative_prompt: "deformed, noisy, blurry, distorted",
    }
  break;
};`);n(o,r)},$$slots:{default:!0}});var v=e(i);h(v,{children:(o,w)=>{t();var r=a("This allows us to individually configure each of the models we're using, feel free to play with this configuration to get the best results for your use case.");n(o,r)},$$slots:{default:!0}});var p=e(v);h(p,{children:(o,w)=>{t();var r=a("Finally with our request built we can call the replicate API and generate a prediction:");n(o,r)},$$slots:{default:!0}});var x=e(p);T(x,{content:`let response;

try {
  response = await replicate.run(models[req.body.type], request);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to run model' }, 500);
}

if (req.body.type === 'image') {
  response = response[0]
} else if (req.body.type === 'text') {
  response = response.join('');
}

return res.json({ ok: true, response, type: req.body.type }, 200);
`,language:"js",process:!0,children:(o,w)=>{t();var r=a(`let response;

try {
  response = await replicate.run(models[req.body.type], request);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to run model' }, 500);
}

if (req.body.type === 'image') {
  response = response[0]
} else if (req.body.type === 'text') {
  response = response.join('');
}

return res.json({ ok: true, response, type: req.body.type }, 200);`);n(o,r)},$$slots:{default:!0}});var q=e(x);h(q,{children:(o,w)=>{t();var r=a("This code will send our prompt to the replicate API and return the response to the user, additionally it'll also catch any errors we could encounter and reports them for easy debugging.");n(o,r)},$$slots:{default:!0}});var A=e(q);h(A,{children:(o,w)=>{t();var r=a("With our function now complete, you can deploy it to Backrush by simply pushing the change to your repository.");n(o,r)},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}});var B=e(z);C(B,{id:"step-7",step:7,title:"Test our function",children:(y,R)=>{var d=Se(),$=m(d);h($,{children:(u,g)=>{t();var s=a("Now that our function is deployed, we can test it by visiting the function URL in our browser. This should show the UI we created earlier and to test it we can write a prompt and click the submit button, after a brief moment you should see the completion appear below the input.");n(u,s)},$$slots:{default:!0}});var _=e($);h(_,{children:(u,g)=>{U(u,{src:"/images/docs/ai/integrations/replicate/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),n(y,d)},$$slots:{default:!0}}),ee(E),n(V,E)},$$slots:{default:!0}}))}export{ot as component};
