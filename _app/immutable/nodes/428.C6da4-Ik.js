import{t as c,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Z,s as e,f as u,n as t,r as ee}from"../chunks/NgVQVlRK.js";import{n as te}from"../chunks/B4IyMRKX.js";import{S as q}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as re,a as oe}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as R}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as b}from"../chunks/DXp9_3zM.js";import{F as j}from"../chunks/OFUKRh55.js";import{H as ne}from"../chunks/CXsRaEhZ.js";import{L as z,I as E}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as O}from"../chunks/yHjwcyUH.js";import{L as U}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ae}from"../chunks/CqOphJLh.js";const se={layout:"article",title:"Integrating Perplexity",description:"Learn how to integrate the Perplexity API into your Backrush project.",difficulty:"intermediate",readtime:15};var le=c("A <!>",1),ie=c("<!><!>",1),de=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),pe=c("In the Backrush Console&#39;s sidebar, click <!>.",1),ce=c("Click <!>.",1),ue=c("Under <!>, select your provider.",1),he=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),me=c("In the <!> step, add the <!>, generate it <!>.",1),$e=c("<!><!><!><!><!><!>",1),ve=c("<!><!><!><!>",1),fe=c("<!><!><!><!>",1),_e=c("For our example, our function will be able to take both <!> and <!> requests.",1),ge=c("The function will return a web page on <!> requests and return a response from Perplexity on <!> requests.",1),xe=c("To begin with we will write the code to return the static HTML page. Create a new <!> file with the following code:",1),ye=c("<!><!><!><!>",1),Pe=c("We&#39;re going to write our <!> request handler in the <!> file. This handler will return a static HTML page we&#39;ll create later.",1),we=c("<!><!>",1),be=c("Create the static HTML page that our function will serve. Create a new file at <!> with some HTML boilerplate:",1),ke=c("Within the <!> tag, we&#39;re going to add a <!> tag that will define our style and scripts.",1),Ae=c("And after the <!> tag we&#39;re going to add our <!> which will contain the actual form:",1),Ie=c("<!><!><!><!><!><!><!>",1),Te=c("Import the OpenAI SDK at the top of our <!> file:",1),je=c("This code also allows us to modify what model we use by setting the <!> environment variable.",1),Se=c("<!><!><!><!><!><!><!><!><!><!>",1),Ee=c("<!><!>",1),Oe=c("<article><!><!><!><!><!><!><!><!><!><!></article>");function nt(J){ae(J,te(se,{children:(V,qe)=>{var C=Oe(),D=Z(C);h(D,{children:(g,T)=>{t();var d=s("Integrating Perplexity into your Backrush project is simple. This tutorial will guide you through the process of setting up the Perplexity API and integrating it into your Backrush project.");r(g,d)},$$slots:{default:!0}});var N=e(D);ne(N,{id:"prerequisites",level:1,children:(g,T)=>{t();var d=s("Prerequisites");r(g,d)},$$slots:{default:!0}});var H=e(N);z(H,{ordered:!1,marker:"-",children:(g,T)=>{var d=ie(),m=u(d);E(m,{children:(p,y)=>{t();var o=s("An Backrush Project");r(p,o)},$$slots:{default:!0}});var _=e(m);E(_,{children:(p,y)=>{t();var o=le(),v=e(u(o));U(v,{href:"https://docs.perplexity.ai/docs/getting-started",children:(n,l)=>{t();var f=s("Perplexity API Key");r(n,f)},$$slots:{default:!0}}),r(p,o)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var M=e(H);q(M,{id:"step-1",step:1,title:"Create new function",children:(g,T)=>{var d=ve(),m=u(d);h(m,{children:(o,v)=>{t();var n=de(),l=e(u(n));U(l,{href:"https://cloud.backrush.io/console",children:(a,x)=>{t();var i=s("Backrush Console");r(a,i)},$$slots:{default:!0}});var f=e(l,2);O(f,{marker:"**",children:(a,x)=>{t();var i=s("Functions");r(a,i)},$$slots:{default:!0}});var $=e(f,2);O($,{marker:"**",children:(a,x)=>{t();var i=s("Create Function");r(a,i)},$$slots:{default:!0}}),t(),r(o,n)},$$slots:{default:!0}});var _=e(m);re(_,{children:(o,v)=>{h(o,{children:(n,l)=>{R(n,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var p=e(_);oe(p,{children:(o,v)=>{h(o,{children:(n,l)=>{R(n,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var y=e(p);z(y,{ordered:!0,marker:".",children:(o,v)=>{var n=$e(),l=u(n);E(l,{children:(w,F)=>{t();var P=pe(),k=e(u(P));O(k,{marker:"**",children:(I,S)=>{t();var A=s("Functions");r(I,A)},$$slots:{default:!0}}),t(),r(w,P)},$$slots:{default:!0}});var f=e(l);E(f,{children:(w,F)=>{t();var P=ce(),k=e(u(P));O(k,{marker:"**",children:(I,S)=>{t();var A=s("Create function");r(I,A)},$$slots:{default:!0}}),t(),r(w,P)},$$slots:{default:!0}});var $=e(f);E($,{children:(w,F)=>{t();var P=ue(),k=e(u(P));O(k,{marker:"**",children:(I,S)=>{t();var A=s("Connect Git repository");r(I,A)},$$slots:{default:!0}}),t(),r(w,P)},$$slots:{default:!0}});var a=e($);E(a,{children:(w,F)=>{t();var P=he(),k=e(u(P));O(k,{marker:"**",children:(S,A)=>{t();var L=s("Quick start");r(S,L)},$$slots:{default:!0}});var I=e(k,2);O(I,{marker:"**",children:(S,A)=>{t();var L=s("Node.js");r(S,L)},$$slots:{default:!0}}),t(),r(w,P)},$$slots:{default:!0}});var x=e(a);E(x,{children:(w,F)=>{t();var P=me(),k=e(u(P));O(k,{marker:"**",children:(A,L)=>{t();var K=s("Variables");r(A,K)},$$slots:{default:!0}});var I=e(k,2);b(I,{content:"PERPLEXITY_API_KEY"});var S=e(I,2);U(S,{href:"https://docs.perplexity.ai/docs/getting-started",children:(A,L)=>{t();var K=s("here");r(A,K)},$$slots:{default:!0}}),t(),r(w,P)},$$slots:{default:!0}});var i=e(x);E(i,{children:(w,F)=>{t();var P=s("Follow the step-by-step wizard and create the function.");r(w,P)},$$slots:{default:!0}}),r(o,n)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var X=e(M);q(X,{id:"step-2",step:2,title:"Add OpenAI SDK",children:(g,T)=>{var d=fe(),m=u(d);h(m,{children:(o,v)=>{t();var n=s("Once the function is created, clone the function and open it in your development environment.");r(o,n)},$$slots:{default:!0}});var _=e(m);h(_,{children:(o,v)=>{t();var n=s("The Perplexity API is compatible with the OpenAI SDK, so we can use the OpenAI SDK to interact with Perplexity. Once you have the repository open, install the OpenAI SDK by running the following command in your terminal:");r(o,n)},$$slots:{default:!0}});var p=e(_);j(p,{content:`npm install openai
`,language:"bash",process:!0,children:(o,v)=>{t();var n=s("npm install openai");r(o,n)},$$slots:{default:!0}});var y=e(p);h(y,{children:(o,v)=>{t();var n=s("Perplexity's API is OpenAI compatible, so we can use the OpenAI SDK to interact with Perplexity.");r(o,n)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var Y=e(X);q(Y,{id:"step-3",step:3,title:"Create utility function",children:(g,T)=>{var d=ye(),m=u(d);h(m,{children:(o,v)=>{t();var n=_e(),l=e(u(n));b(l,{content:"GET"});var f=e(l,2);b(f,{content:"POST"}),t(),r(o,n)},$$slots:{default:!0}});var _=e(m);h(_,{children:(o,v)=>{t();var n=ge(),l=e(u(n));b(l,{content:"GET"});var f=e(l,2);b(f,{content:"POST"}),t(),r(o,n)},$$slots:{default:!0}});var p=e(_);h(p,{children:(o,v)=>{t();var n=xe(),l=e(u(n));b(l,{content:"src/utils.js"}),t(),r(o,n)},$$slots:{default:!0}});var y=e(p);j(y,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(o,v)=>{t();var n=s(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(o,n)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var G=e(Y);q(G,{id:"step-4",step:4,title:"Handle GET request",children:(g,T)=>{var d=we(),m=u(d);h(m,{children:(p,y)=>{t();var o=Pe(),v=e(u(o));b(v,{content:"GET"});var n=e(v,2);b(n,{content:"src/main.js"}),t(),r(p,o)},$$slots:{default:!0}});var _=e(m);j(_,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(p,y)=>{t();var o=s(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(p,o)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var W=e(G);q(W,{id:"step-5",step:5,title:"Create static page",children:(g,T)=>{var d=Ie(),m=u(d);h(m,{children:(l,f)=>{t();var $=be(),a=e(u($));b(a,{content:"static/index.html"}),t(),r(l,$)},$$slots:{default:!0}});var _=e(m);j(_,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(l,f)=>{t();var $=s(`<!doctype html>
<html lang="en">
</html>`);r(l,$)},$$slots:{default:!0}});var p=e(_);h(p,{children:(l,f)=>{t();var $=ke(),a=e(u($));b(a,{content:"<html>"});var x=e(a,2);b(x,{content:"<head>"}),t(),r(l,$)},$$slots:{default:!0}});var y=e(p);j(y,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perplexity AI Demo</title>

  <script>
    async function onSubmit(prompt) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json.completion;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink-icons" />
</head>
`,language:"html",process:!0,children:(l,f)=>{t();var $=s(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perplexity AI Demo</title>

  <script>
    async function onSubmit(prompt) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.ok || json.error) {
        alert(json.error);
      }

      return json.completion;
    }
  <\/script>

  <script src="//unpkg.com/alpinejs" defer><\/script>

  <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink" />
  <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink-icons" />
</head>`);r(l,$)},$$slots:{default:!0}});var o=e(y);h(o,{children:(l,f)=>{t();var $=Ae(),a=e(u($));b(a,{content:"</head>"});var x=e(a,2);b(x,{content:"<body>"}),t(),r(l,$)},$$slots:{default:!0}});var v=e(o);j(v,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Perplexity AI Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with Perplexity AI. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div
      class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', answer: '', loading: false }"
    >
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div
            class="input-text-wrapper is-with-end-button u-width-full-line"
          >
            <input x-model="prompt" type="search" placeholder="Question" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>

          <button
            class="button"
            x-bind:disabled="loading"
            x-on:click="async () => { loading = true; answer = ''; try { answer = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }"
          >
            <span class="text">Submit</span>
          </button>
        </div>
        <template x-if="answer">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Perplexity AI:</h5>
              </div>

              <div style="overflow-x: hidden; line-break: anywhere">
                <p class="u-color-text-gray" x-text="answer"></p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>
`,language:"html",process:!0,children:(l,f)=>{t();var $=s(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Perplexity AI Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with Perplexity AI. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div
      class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', answer: '', loading: false }"
    >
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div
            class="input-text-wrapper is-with-end-button u-width-full-line"
          >
            <input x-model="prompt" type="search" placeholder="Question" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>

          <button
            class="button"
            x-bind:disabled="loading"
            x-on:click="async () => { loading = true; answer = ''; try { answer = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }"
          >
            <span class="text">Submit</span>
          </button>
        </div>
        <template x-if="answer">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Perplexity AI:</h5>
              </div>

              <div style="overflow-x: hidden; line-break: anywhere">
                <p class="u-color-text-gray" x-text="answer"></p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>`);r(l,$)},$$slots:{default:!0}});var n=e(v);h(n,{children:(l,f)=>{t();var $=s("All of this together will render a form that will submit your question to the Backrush Function through a POST request which we'll create next. The Backrush Function will call Perplexity's API and return the response, which will be displayed on your page.");r(l,$)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var Q=e(W);q(Q,{id:"step-6",step:6,title:"Handle POST Request",children:(g,T)=>{var d=Se(),m=u(d);h(m,{children:(a,x)=>{t();var i=s("Now that we're serving a basic HTML page, we can add methods necessary to integrate with Perplexity's API.");r(a,i)},$$slots:{default:!0}});var _=e(m);h(_,{children:(a,x)=>{t();var i=Te(),w=e(u(i));b(w,{content:"main.js"}),t(),r(a,i)},$$slots:{default:!0}});var p=e(_);j(p,{content:`import { OpenAI } from 'openai';
`,language:"js",process:!0,children:(a,x)=>{t();var i=s("import { OpenAI } from 'openai';");r(a,i)},$$slots:{default:!0}});var y=e(p);h(y,{children:(a,x)=>{t();var i=s("Next, add code to validate the body of the request and initialize the OpenAI SDK with the Perplexity API key:");r(a,i)},$$slots:{default:!0}});var o=e(y);j(o,{content:`if (!req.body.prompt) {
  return res.json({
    ok: false,
    error: 'Missing required fields: prompt'
  }, 400);
}

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});
`,language:"js",process:!0,children:(a,x)=>{t();var i=s(`if (!req.body.prompt) {
  return res.json({
    ok: false,
    error: 'Missing required fields: prompt'
  }, 400);
}

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});`);r(a,i)},$$slots:{default:!0}});var v=e(o);h(v,{children:(a,x)=>{t();var i=je(),w=e(u(i));b(w,{content:"PERPLEXITY_MODEL"}),t(),r(a,i)},$$slots:{default:!0}});var n=e(v);h(n,{children:(a,x)=>{t();var i=s("Send the request to the Perplexity API and return the response:");r(a,i)},$$slots:{default:!0}});var l=e(n);j(l,{content:`try {
  const response = await perplexity.chat.completions.create({
    model: 'mistral-7b-instruct',
    max_tokens: parseInt(process.env.PERPLEXITY_MAX_TOKENS ?? '512'),
    messages: [{ role: 'user', content: req.body.prompt }],
    stream: false,
  });
  const completion = response.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to query model.' }, 500);
}
`,language:"js",process:!0,children:(a,x)=>{t();var i=s(`try {
  const response = await perplexity.chat.completions.create({
    model: 'mistral-7b-instruct',
    max_tokens: parseInt(process.env.PERPLEXITY_MAX_TOKENS ?? '512'),
    messages: [{ role: 'user', content: req.body.prompt }],
    stream: false,
  });
  const completion = response.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to query model.' }, 500);
}`);r(a,i)},$$slots:{default:!0}});var f=e(l);h(f,{children:(a,x)=>{t();var i=s("This code will send our prompt to the perplexity chat completions API and return the response to the user, additionally it'll also catch any errors we could encounter and reports them for easy debugging.");r(a,i)},$$slots:{default:!0}});var $=e(f);h($,{children:(a,x)=>{t();var i=s("With our function now complete, you can deploy it to Backrush by simply pushing the change to your repository.");r(a,i)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var B=e(Q);q(B,{id:"step-7",step:7,title:"Test our function",children:(g,T)=>{var d=Ee(),m=u(d);h(m,{children:(p,y)=>{t();var o=s("Now that our function is deployed, we can test it by visiting the function URL in our browser. Write a prompt and click the submit button, after a brief moment you should see the completion appear below the input.");r(p,o)},$$slots:{default:!0}});var _=e(m);h(_,{children:(p,y)=>{R(p,{src:"/images/docs/ai/integrations/perplexity/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}}),ee(C),r(V,C)},$$slots:{default:!0}}))}export{nt as component};
