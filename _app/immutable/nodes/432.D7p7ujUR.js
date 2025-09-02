import{t as u,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as oe,s as e,f as h,n as t,r as ne}from"../chunks/NgVQVlRK.js";import{n as se}from"../chunks/B4IyMRKX.js";import{S as C}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ae,a as ie}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as D}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as m}from"../chunks/DXp9_3zM.js";import{F as E}from"../chunks/OFUKRh55.js";import{H as le}from"../chunks/CXsRaEhZ.js";import{L as V,I as S}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S as F}from"../chunks/yHjwcyUH.js";import{L as N}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as de}from"../chunks/CqOphJLh.js";const pe={layout:"article",title:"Integrating Together AI",description:"Learn how to integrate Together AI into your Backrush project.",difficulty:"intermediate",readtime:15};var ce=u("A <!>",1),ue=u("<!><!><!>",1),he=u("Head to the <!>, click, on <!> in the left sidebar, and click, the <!> button.",1),me=u("In the Backrush Console&#39;s sidebar, click <!>.",1),fe=u("Click <!>.",1),ve=u("Under <!>, select your provider.",1),$e=u("After connecting to GitHub, under <!>, select the <!> starter template.",1),ge=u("In the <!> step, add <!> and <!>. You can generate your Together AI key <!>. For the <!>, tick the box to <!>..",1),_e=u("<!><!><!><!><!><!>",1),ye=u("<!><!><!><!>",1),xe=u("Once inside the cloned function, install <!> ( an HTTP client ) to interact with Together AI&#39;s API.",1),Pe=u("<!><!><!>",1),we=u("For this example, the function will be able to handle both <!> and <!> requests.",1),be=u("For the <!> request, return a static HTML landing page, that will use AlpineJS to make a <!> request to our function. Meanwhile, the <!> request will use fetch to make a request to the Together AI API.",1),Te=u("In preparation for the <!> request handler, create a new <!> file with some utility functions:",1),Ie=u("<!><!><!><!>",1),Ae=u("Write the <!> request handler in the <!> file. This handler will return a static HTML page, which will be created in the next section.",1),ke=u("<!><!>",1),qe=u("Create the static HTML page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),je=u("Within the <!> tag, add a <!> tag that will define the style and scripts.",1),Ee=u("And after the <!> tag add a <!> which will contain the actual form:",1),Se=u("Together, this will render a form to submit a query to the Backrush Function through a <!> request. The Backrush Function invokes Together AI&#39;s API and returns the response, which will be displayed on the page using different conditional statements depending on the output media type.",1),Fe=u("<!><!><!><!><!><!><!>",1),Ce=u("Now that you&#39;re serving a basic HTML page add methods necessary to integrate with Together AI&#39;s API. Import <!> from <!> and the Backrush SDK at the top of <!>.",1),Oe=u("To handle the <!> request, add the following code to the end of the request handler in the <!> file to validate the request body and define the models:",1),Re=u("In this example, you will use Mistral&#39;s <!> for text generation and StabilityAI&#39;s <!> for image generation. You can find more models on <!>.",1),Ue=u("<!><!><!><!><!><!><!><!><!><!><!>",1),Ne=u("<!><!>",1),Le=u("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function ct(Z){de(Z,se(pe,{children:(ee,De)=>{var L=Le(),G=oe(L);$(G,{children:(x,q)=>{t();var p=s("Together AI is an AI as a Service provider that's powered by an industry-leading inference engine providing fast and cheap inference. The platform can generate text and images using leading open-source models such as LLaMA 3 and Stable Diffusion.");r(x,p)},$$slots:{default:!0}});var J=e(G);$(J,{children:(x,q)=>{t();var p=s("Integrating Together AI into your Backrush project is simple. This tutorial will guide you through setting up the Together AI API and integrating it into your Backrush project.");r(x,p)},$$slots:{default:!0}});var W=e(J);le(W,{id:"prerequisites",level:1,children:(x,q)=>{t();var p=s("Prerequisites");r(x,p)},$$slots:{default:!0}});var B=e(W);V(B,{ordered:!1,marker:"-",children:(x,q)=>{var p=ue(),g=h(p);S(g,{children:(f,a)=>{t();var d=s("An Backrush Project");r(f,d)},$$slots:{default:!0}});var P=e(g);S(P,{children:(f,a)=>{t();var d=s("An Backrush Bucket");r(f,d)},$$slots:{default:!0}});var _=e(P);S(_,{children:(f,a)=>{t();var d=ce(),i=e(h(d));N(i,{href:"https://docs.together.ai/reference/authentication-1",children:(n,y)=>{t();var c=s("Together AI API Key");r(n,c)},$$slots:{default:!0}}),r(f,d)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var H=e(B);C(H,{id:"step-1",step:1,title:"Create new function",children:(x,q)=>{var p=ye(),g=h(p);$(g,{children:(a,d)=>{t();var i=he(),n=e(h(i));N(n,{href:"https://cloud.backrush.io/console",children:(w,l)=>{t();var b=s("Backrush Console");r(w,b)},$$slots:{default:!0}});var y=e(n,2);F(y,{marker:"**",children:(w,l)=>{t();var b=s("Functions");r(w,b)},$$slots:{default:!0}});var c=e(y,2);F(c,{marker:"**",children:(w,l)=>{t();var b=s("Create Function");r(w,b)},$$slots:{default:!0}}),t(),r(a,i)},$$slots:{default:!0}});var P=e(g);ae(P,{children:(a,d)=>{$(a,{children:(i,n)=>{D(i,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=e(P);ie(_,{children:(a,d)=>{$(a,{children:(i,n)=>{D(i,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var f=e(_);V(f,{ordered:!0,marker:".",children:(a,d)=>{var i=_e(),n=h(i);S(n,{children:(o,I)=>{t();var v=me(),T=e(h(v));F(T,{marker:"**",children:(A,j)=>{t();var k=s("Functions");r(A,k)},$$slots:{default:!0}}),t(),r(o,v)},$$slots:{default:!0}});var y=e(n);S(y,{children:(o,I)=>{t();var v=fe(),T=e(h(v));F(T,{marker:"**",children:(A,j)=>{t();var k=s("Create function");r(A,k)},$$slots:{default:!0}}),t(),r(o,v)},$$slots:{default:!0}});var c=e(y);S(c,{children:(o,I)=>{t();var v=ve(),T=e(h(v));F(T,{marker:"**",children:(A,j)=>{t();var k=s("Connect Git repository");r(A,k)},$$slots:{default:!0}}),t(),r(o,v)},$$slots:{default:!0}});var w=e(c);S(w,{children:(o,I)=>{t();var v=$e(),T=e(h(v));F(T,{marker:"**",children:(j,k)=>{t();var O=s("Quick start");r(j,O)},$$slots:{default:!0}});var A=e(T,2);F(A,{marker:"**",children:(j,k)=>{t();var O=s("Node.js");r(j,O)},$$slots:{default:!0}}),t(),r(o,v)},$$slots:{default:!0}});var l=e(w);S(l,{children:(o,I)=>{t();var v=ge(),T=e(h(v));F(T,{marker:"**",children:(R,Q)=>{t();var U=s("Variables");r(R,U)},$$slots:{default:!0}});var A=e(T,2);m(A,{content:"BACKRUSH_BUCKET_ID"});var j=e(A,2);m(j,{content:"TOGETHER_API_KEY"});var k=e(j,2);N(k,{href:"https://api.together.xyz/settings/api-keys",children:(R,Q)=>{t();var U=s("here");r(R,U)},$$slots:{default:!0}});var O=e(k,2);m(O,{content:"BACKRUSH_API_KEY"});var re=e(O,2);F(re,{marker:"**",children:(R,Q)=>{t();var U=s("Generate API key on completion");r(R,U)},$$slots:{default:!0}}),t(),r(o,v)},$$slots:{default:!0}});var b=e(l);S(b,{children:(o,I)=>{t();var v=s("Follow the step-by-step wizard and create the function.");r(o,v)},$$slots:{default:!0}}),r(a,i)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var K=e(H);C(K,{id:"step-2",step:2,title:"Add Undici",children:(x,q)=>{var p=Pe(),g=h(p);$(g,{children:(f,a)=>{t();var d=s("Once the function is created, clone and open it in your development environment.");r(f,d)},$$slots:{default:!0}});var P=e(g);$(P,{children:(f,a)=>{t();var d=xe(),i=e(h(d));m(i,{content:"undici"}),t(),r(f,d)},$$slots:{default:!0}});var _=e(P);E(_,{content:`npm install undici
`,process:!0,children:(f,a)=>{t();var d=s("npm install undici");r(f,d)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var M=e(K);C(M,{id:"step-3",step:3,title:"Create utility function",children:(x,q)=>{var p=Ie(),g=h(p);$(g,{children:(a,d)=>{t();var i=we(),n=e(h(i));m(n,{content:"GET"});var y=e(n,2);m(y,{content:"POST"}),t(),r(a,i)},$$slots:{default:!0}});var P=e(g);$(P,{children:(a,d)=>{t();var i=be(),n=e(h(i));m(n,{content:"GET"});var y=e(n,2);m(y,{content:"POST"});var c=e(y,2);m(c,{content:"POST"}),t(),r(a,i)},$$slots:{default:!0}});var _=e(P);$(_,{children:(a,d)=>{t();var i=Te(),n=e(h(i));m(n,{content:"GET"});var y=e(n,2);m(y,{content:"src/utils.js"}),t(),r(a,i)},$$slots:{default:!0}});var f=e(_);E(f,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(a,d)=>{t();var i=s(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(a,i)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var Y=e(M);C(Y,{id:"step-4",step:4,title:"Handle GET request",children:(x,q)=>{var p=ke(),g=h(p);$(g,{children:(_,f)=>{t();var a=Ae(),d=e(h(a));m(d,{content:"GET"});var i=e(d,2);m(i,{content:"src/main.js"}),t(),r(_,a)},$$slots:{default:!0}});var P=e(g);E(P,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(_,f)=>{t();var a=s(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(_,a)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var z=e(Y);C(z,{id:"step-5",step:5,title:"Create static page",children:(x,q)=>{var p=Fe(),g=h(p);$(g,{children:(n,y)=>{t();var c=qe(),w=e(h(c));m(w,{content:"static/index.html"}),t(),r(n,c)},$$slots:{default:!0}});var P=e(g);E(P,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(n,y)=>{t();var c=s(`<!doctype html>
<html lang="en">
</html>`);r(n,c)},$$slots:{default:!0}});var _=e(P);$(_,{children:(n,y)=>{t();var c=je(),w=e(h(c));m(w,{content:"<html>"});var l=e(w,2);m(l,{content:"<head>"}),t(),r(n,c)},$$slots:{default:!0}});var f=e(_);E(f,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Together AI Demo</title>

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

      return JSON;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>
`,language:"html",process:!0,children:(n,y)=>{t();var c=s(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Together AI Demo</title>

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

      return JSON;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
</head>`);r(n,c)},$$slots:{default:!0}});var a=e(f);$(a,{children:(n,y)=>{t();var c=Ee(),w=e(h(c));m(w,{content:"</head>"});var l=e(w,2);m(l,{content:"<body>"}),t(),r(n,c)},$$slots:{default:!0}});var d=e(a);E(d,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">Together AI Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with Together AI. Enter
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
                <img class="u-max-width-400" x-bind:src="answer.response" alt="Together output" />
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
`,language:"html",process:!0,children:(n,y)=>{t();var c=s(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">Together AI Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with Together AI. Enter
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
                <img class="u-max-width-400" x-bind:src="answer.response" alt="Together output" />
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
</body>`);r(n,c)},$$slots:{default:!0}});var i=e(d);$(i,{children:(n,y)=>{t();var c=Se(),w=e(h(c));m(w,{content:"POST"}),t(),r(n,c)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var X=e(z);C(X,{id:"step-6",step:6,title:"Handle POST Request",children:(x,q)=>{var p=Ue(),g=h(p);$(g,{children:(l,b)=>{t();var o=Ce(),I=e(h(o));m(I,{content:"fetch"});var v=e(I,2);m(v,{content:"undici"});var T=e(v,2);m(T,{content:"src/main.js"}),t(),r(l,o)},$$slots:{default:!0}});var P=e(g);E(P,{content:`import { fetch } from 'undici'
import { Client, ID, InputFile, Storage } from 'node-backrush';
`,language:"js",process:!0,children:(l,b)=>{t();var o=s(`import { fetch } from 'undici'
import { Client, ID, InputFile, Storage } from 'node-backrush';`);r(l,o)},$$slots:{default:!0}});var _=e(P);$(_,{children:(l,b)=>{t();var o=Oe(),I=e(h(o));m(I,{content:"POST"});var v=e(I,2);m(v,{content:"src/main.js"}),t(),r(l,o)},$$slots:{default:!0}});var f=e(_);E(f,{content:`const models = {
  'text': 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  'image': 'stabilityai/stable-diffusion-xl-base-1.0'
};

if (!req.body.prompt || typeof req.body.prompt !== 'string') {
  return res.json({ ok: false, error: 'Missing required field \`prompt\`' }, 400);
}

if (req.body.type !== 'text' && req.body.type !== 'image') {
  return res.json({ ok: false, error: 'Invalid field \`type\`' }, 400);
}
`,language:"js",process:!0,children:(l,b)=>{t();var o=s(`const models = {
  'text': 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  'image': 'stabilityai/stable-diffusion-xl-base-1.0'
};

if (!req.body.prompt || typeof req.body.prompt !== 'string') {
  return res.json({ ok: false, error: 'Missing required field \`prompt\`' }, 400);
}

if (req.body.type !== 'text' && req.body.type !== 'image') {
  return res.json({ ok: false, error: 'Invalid field \`type\`' }, 400);
}`);r(l,o)},$$slots:{default:!0}});var a=e(f);$(a,{children:(l,b)=>{t();var o=Re(),I=e(h(o));m(I,{content:"Mixtral 8x7B"});var v=e(I,2);m(v,{content:"Stable Diffusion XL"});var T=e(v,2);N(T,{href:"https://docs.together.ai/docs/inference-models",children:(A,j)=>{t();var k=s("Together AI's docs");r(A,k)},$$slots:{default:!0}}),t(),r(l,o)},$$slots:{default:!0}});var d=e(a);$(d,{children:(l,b)=>{t();var o=s("Next, following the previous code dd some per-model configurations:");r(l,o)},$$slots:{default:!0}});var i=e(d);E(i,{content:`let request = {
  model: models[req.body.type],
};

switch (req.body.type) {
  case 'text':
    request = {
      ...request,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant"
        },
        {
          role: "user",
          content: req.body.prompt
        }
      ],
      max_tokens: 512,
      repetition_penalty: 1,
    }
  break;
  case 'image':
    request = {
      ...request,
      prompt: req.body.prompt,
      width: 512,
      height: 512,
      steps: 20,
      results: 1,
      negative_prompt: "deformed, noisy, blurry, distorted",
    }
  break;
};
`,language:"js",process:!0,children:(l,b)=>{t();var o=s(`let request = {
  model: models[req.body.type],
};

switch (req.body.type) {
  case 'text':
    request = {
      ...request,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant"
        },
        {
          role: "user",
          content: req.body.prompt
        }
      ],
      max_tokens: 512,
      repetition_penalty: 1,
    }
  break;
  case 'image':
    request = {
      ...request,
      prompt: req.body.prompt,
      width: 512,
      height: 512,
      steps: 20,
      results: 1,
      negative_prompt: "deformed, noisy, blurry, distorted",
    }
  break;
};`);r(l,o)},$$slots:{default:!0}});var n=e(i);$(n,{children:(l,b)=>{t();var o=s("This allows you to configure each of the models you use individually. Feel free to play with this configuration to get the best results for your use case. Finally, with the request built, you can call the Together AI API and generate a prediction:");r(l,o)},$$slots:{default:!0}});var y=e(n);E(y,{content:`let response;
let url = 'https://api.together.xyz/v1/completions';

if (req.body.type === 'text') {
  url = 'https://api.together.xyz/v1/chat/completions'
};

try {
  response = await fetch(URL, {
    headers: {
      "content-type": "application/json",
      "Authorization": \`Bearer \${process.env.TOGETHER_API_KEY}\`
    },
    method: 'POST',
    body: JSON.stringify(request)
  })
} catch (err) {
  error(err);
  return res.json({ ok: false, error: 'Failed to run model' }, 500);
}

let resJson = await response.json();

// Upload image to Backrush Storage and return URL
if (req.body.type === 'image') {
  const endpoint = process.env.BACKRUSH_ENDPOINT || 'https://<REGION>.cloud.backrush.io/v1'

  const client = new Client()
    .setEndpoint(endpoint)
    .setKey(process.env.BACKRUSH_API_KEY)
    .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)

  const storage = new Storage(client);

  let data = Buffer.from(resJson.choices[0].image_base64, 'base64');

  let file = await storage.createFile(process.env.BACKRUSH_BUCKET_ID, ID.unique(), InputFile.fromBuffer(data, "image.png"));

  return res.json({
    ok: true,
    type: req.body.type,
    response: \`\${endpoint}/storage/buckets/\${process.env.BACKRUSH_BUCKET_ID}/files/\${file["$id"]}/view?project=\${process.env.BACKRUSH_FUNCTION_PROJECT_ID}\`
  })
}

return res.json({ ok: true, type: req.body.type, response: resJson.choices[0].message.content}, 200);
`,language:"js",process:!0,children:(l,b)=>{t();var o=s(`let response;
let url = 'https://api.together.xyz/v1/completions';

if (req.body.type === 'text') {
  url = 'https://api.together.xyz/v1/chat/completions'
};

try {
  response = await fetch(URL, {
    headers: {
      "content-type": "application/json",
      "Authorization": \`Bearer \${process.env.TOGETHER_API_KEY}\`
    },
    method: 'POST',
    body: JSON.stringify(request)
  })
} catch (err) {
  error(err);
  return res.json({ ok: false, error: 'Failed to run model' }, 500);
}

let resJson = await response.json();

// Upload image to Backrush Storage and return URL
if (req.body.type === 'image') {
  const endpoint = process.env.BACKRUSH_ENDPOINT || 'https://<REGION>.cloud.backrush.io/v1'

  const client = new Client()
    .setEndpoint(endpoint)
    .setKey(process.env.BACKRUSH_API_KEY)
    .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)

  const storage = new Storage(client);

  let data = Buffer.from(resJson.choices[0].image_base64, 'base64');

  let file = await storage.createFile(process.env.BACKRUSH_BUCKET_ID, ID.unique(), InputFile.fromBuffer(data, "image.png"));

  return res.json({
    ok: true,
    type: req.body.type,
    response: \`\${endpoint}/storage/buckets/\${process.env.BACKRUSH_BUCKET_ID}/files/\${file["$id"]}/view?project=\${process.env.BACKRUSH_FUNCTION_PROJECT_ID}\`
  })
}

return res.json({ ok: true, type: req.body.type, response: resJson.choices[0].message.content}, 200);`);r(l,o)},$$slots:{default:!0}});var c=e(y);$(c,{children:(l,b)=>{t();var o=s("This code sends the prompt to the Together AI API and returns the response to the user. The function also uploads any images generated to a bucket and returns the URL to the user. Any errors encountered during the process are caught and reported for easy debugging.");r(l,o)},$$slots:{default:!0}});var w=e(c);$(w,{children:(l,b)=>{t();var o=s("The function can now be deployed to Backrush by pushing the changes to your repository.");r(l,o)},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}});var te=e(X);C(te,{id:"step-7",step:7,title:"Test the function",children:(x,q)=>{var p=Ne(),g=h(p);$(g,{children:(_,f)=>{t();var a=s("Now that the function is deployed test it by visiting the function URL in your browser. This should show the UI created earlier. To test it, write a prompt and click the submit button. After a brief moment, you should see the results.");r(_,a)},$$slots:{default:!0}});var P=e(g);$(P,{children:(_,f)=>{D(_,{src:"/images/docs/ai/integrations/together/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r(x,p)},$$slots:{default:!0}}),ne(L),r(ee,L)},$$slots:{default:!0}}))}export{ct as component};
