import{t as c,b as l,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ee,s as e,f as p,n as t,r as te}from"../chunks/NgVQVlRK.js";import{n as re}from"../chunks/B4IyMRKX.js";import{S as F}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as oe,a as ae}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as U}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as y}from"../chunks/DXp9_3zM.js";import{F as j}from"../chunks/OFUKRh55.js";import{H as ne}from"../chunks/CXsRaEhZ.js";import{L as J,I as S}from"../chunks/BhmTgGWB.js";import{P as v}from"../chunks/D8YsId2T.js";import{S as I}from"../chunks/yHjwcyUH.js";import{L as N}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as se}from"../chunks/CqOphJLh.js";const le={layout:"article",title:"Integrating Anyscale",description:"Learn how to integrate Anyscale into your Backrush project.",difficulty:"intermediate",readtime:15};var ie=c("An <!>",1),de=c("<!><!>",1),ce=c("Head to the <!>, click on <!> in the left sidebar and click the <!> button.",1),pe=c("In the Backrush Console&#39;s sidebar, click <!>.",1),ue=c("Click <!>.",1),he=c("Under <!>, select your provider.",1),me=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),fe=c("In the <!> step, add <!>. Generate your AnyScale key <!>.",1),ve=c("<!><!><!><!><!><!>",1),$e=c("<!><!><!><!>",1),_e=c("Install the <!> package to simplify interacting with the AnyScale API, as it is an OpenAI-compatible API.",1),ge=c("<!><!><!>",1),ye=c("For this example, the function can take both <!> and <!> requests.",1),xe=c("For the <!> request, return a static HTML page that will have a form to submit text to the API. Meanwhile, the <!> request will send the text to the AnyScale API and return the generated text.",1),Pe=c("Write the code to return the static HTML page. To do this, create a new <!> file with the following code:",1),we=c("<!><!><!><!>",1),be=c("Write the <!> request handler in the <!> file. This handler will return a static HTML page you&#39;ll create later.",1),Ae=c("If the method is <!>, it returns the static HTML page.",1),ke=c("<!><!><!>",1),Te=c("Create an HTML web page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),je=c("After the <!> tag add a <!> containing the visible form:",1),Se=c("<!><!><!><!><!><!>",1),Ie=c("Import <!> and the Backrush SDK at the top of the <!> file.",1),qe=c("Add code to validate the body of the request and initialize the Backrush SDK after the <!> request handler from earlier:",1),Ce=c("<!><!><!><!><!><!><!>",1),Fe=c("<!><!>",1),Le=c("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function st(W){se(W,re(le,{children:(V,Ee)=>{var O=Le(),H=ee(O);v(H,{children:($,A)=>{t();var i=l("The Anyscale API is a powerful tool for generating text using the leading open-source models. This tutorial will guide you through setting up the Anyscale API and integrating it into your Backrush project.");r($,i)},$$slots:{default:!0}});var G=e(H);v(G,{children:($,A)=>{t();var i=l("You'll create a simple function that takes a text prompt and generates a completion using Mistral's Mixtral 8x7B model. Then, using Backrush functions, you'll create a UI that allows users to input text and see the generated completion.");r($,i)},$$slots:{default:!0}});var K=e(G);ne(K,{id:"prerequisites",level:1,children:($,A)=>{t();var i=l("Prerequisites");r($,i)},$$slots:{default:!0}});var Y=e(K);J(Y,{ordered:!1,marker:"-",children:($,A)=>{var i=de(),m=p(i);S(m,{children:(f,u)=>{t();var n=l("An Backrush Project");r(f,n)},$$slots:{default:!0}});var _=e(m);S(_,{children:(f,u)=>{t();var n=ie(),d=e(p(n));N(d,{href:"https://app.endpoints.anyscale.com/credentials",children:(o,a)=>{t();var s=l("Anyscale API Key");r(o,s)},$$slots:{default:!0}}),r(f,n)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var D=e(Y);F(D,{id:"step-1",step:1,title:"Create new function",children:($,A)=>{var i=$e(),m=p(i);v(m,{children:(n,d)=>{t();var o=ce(),a=e(p(o));N(a,{href:"https://cloud.appwrite.io/console",children:(x,q)=>{t();var C=l("Backrush Console");r(x,C)},$$slots:{default:!0}});var s=e(a,2);I(s,{marker:"**",children:(x,q)=>{t();var C=l("Functions");r(x,C)},$$slots:{default:!0}});var h=e(s,2);I(h,{marker:"**",children:(x,q)=>{t();var C=l("Create Function");r(x,C)},$$slots:{default:!0}}),t(),r(n,o)},$$slots:{default:!0}});var _=e(m);oe(_,{children:(n,d)=>{v(n,{children:(o,a)=>{U(o,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var f=e(_);ae(f,{children:(n,d)=>{v(n,{children:(o,a)=>{U(o,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var u=e(f);J(u,{ordered:!0,marker:".",children:(n,d)=>{var o=ve(),a=p(o);S(a,{children:(P,L)=>{t();var g=pe(),w=e(p(g));I(w,{marker:"**",children:(k,T)=>{t();var b=l("Functions");r(k,b)},$$slots:{default:!0}}),t(),r(P,g)},$$slots:{default:!0}});var s=e(a);S(s,{children:(P,L)=>{t();var g=ue(),w=e(p(g));I(w,{marker:"**",children:(k,T)=>{t();var b=l("Create function");r(k,b)},$$slots:{default:!0}}),t(),r(P,g)},$$slots:{default:!0}});var h=e(s);S(h,{children:(P,L)=>{t();var g=he(),w=e(p(g));I(w,{marker:"**",children:(k,T)=>{t();var b=l("Connect Git repository");r(k,b)},$$slots:{default:!0}}),t(),r(P,g)},$$slots:{default:!0}});var x=e(h);S(x,{children:(P,L)=>{t();var g=me(),w=e(p(g));I(w,{marker:"**",children:(T,b)=>{t();var E=l("Quick start");r(T,E)},$$slots:{default:!0}});var k=e(w,2);I(k,{marker:"**",children:(T,b)=>{t();var E=l("Node.js");r(T,E)},$$slots:{default:!0}}),t(),r(P,g)},$$slots:{default:!0}});var q=e(x);S(q,{children:(P,L)=>{t();var g=fe(),w=e(p(g));I(w,{marker:"**",children:(b,E)=>{t();var M=l("Variables");r(b,M)},$$slots:{default:!0}});var k=e(w,2);y(k,{content:"ANYSCALE_API_KEY"});var T=e(k,2);N(T,{href:"https://app.endpoints.anyscale.com/credentials",children:(b,E)=>{t();var M=l("here");r(b,M)},$$slots:{default:!0}}),t(),r(P,g)},$$slots:{default:!0}});var C=e(q);S(C,{children:(P,L)=>{t();var g=l("Follow the step-by-step wizard and create the function.");r(P,g)},$$slots:{default:!0}}),r(n,o)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var R=e(D);F(R,{id:"step-2",step:2,title:"Add OpenAI SDK",children:($,A)=>{var i=ge(),m=p(i);v(m,{children:(u,n)=>{t();var d=l("Once the function is created, navigate to the freshly created repository and clone it to your local machine.");r(u,d)},$$slots:{default:!0}});var _=e(m);v(_,{children:(u,n)=>{t();var d=_e(),o=e(p(d));y(o,{content:"openai"}),t(),r(u,d)},$$slots:{default:!0}});var f=e(_);j(f,{content:`npm install openai
`,language:"bash",process:!0,children:(u,n)=>{t();var d=l("npm install openai");r(u,d)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var B=e(R);F(B,{id:"step-3",step:3,title:"Create utility function",children:($,A)=>{var i=we(),m=p(i);v(m,{children:(n,d)=>{t();var o=ye(),a=e(p(o));y(a,{content:"GET"});var s=e(a,2);y(s,{content:"POST"}),t(),r(n,o)},$$slots:{default:!0}});var _=e(m);v(_,{children:(n,d)=>{t();var o=xe(),a=e(p(o));y(a,{content:"GET"});var s=e(a,2);y(s,{content:"POST"}),t(),r(n,o)},$$slots:{default:!0}});var f=e(_);v(f,{children:(n,d)=>{t();var o=Pe(),a=e(p(o));y(a,{content:"src/utils.js"}),t(),r(n,o)},$$slots:{default:!0}});var u=e(f);j(u,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(n,d)=>{t();var o=l(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(n,o)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var X=e(B);F(X,{id:"step-4",step:4,title:"Handle GET request",children:($,A)=>{var i=ke(),m=p(i);v(m,{children:(u,n)=>{t();var d=be(),o=e(p(d));y(o,{content:"GET"});var a=e(o,2);y(a,{content:"src/main.js"}),t(),r(u,d)},$$slots:{default:!0}});var _=e(m);j(_,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(u,n)=>{t();var d=l(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(u,d)},$$slots:{default:!0}});var f=e(_);v(f,{children:(u,n)=>{t();var d=Ae(),o=e(p(d));y(o,{content:"GET"}),t(),r(u,d)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var Q=e(X);F(Q,{id:"step-5",step:5,title:"Create web page",children:($,A)=>{var i=Se(),m=p(i);v(m,{children:(o,a)=>{t();var s=Te(),h=e(p(s));y(h,{content:"static/index.html"}),t(),r(o,s)},$$slots:{default:!0}});var _=e(m);j(_,{content:`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anyscale Demo</title>

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
</html>
`,language:"html",process:!0,children:(o,a)=>{t();var s=l(`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anyscale Demo</title>

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
</html>`);r(o,s)},$$slots:{default:!0}});var f=e(_);v(f,{children:(o,a)=>{t();var s=l("The code above includes a script that will handle the form submission and a script tag that includes of the Alpine.js library. This library will be used to handle the submission of the form.");r(o,s)},$$slots:{default:!0}});var u=e(f);v(u,{children:(o,a)=>{t();var s=je(),h=e(p(s));y(h,{content:"</head>"});var x=e(h,2);y(x,{content:"<body>"}),t(),r(o,s)},$$slots:{default:!0}});var n=e(u);j(n,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Prompt Anyscale Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with Anyscale using Mixtral 8x7B. Enter
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
                <h5 class="eyebrow-heading-2">Anyscale:</h5>
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
`,language:"html",process:!0,children:(o,a)=>{t();var s=l(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Prompt Anyscale Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with Anyscale using Mixtral 8x7B. Enter
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
                <h5 class="eyebrow-heading-2">Anyscale:</h5>
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
</body>`);r(o,s)},$$slots:{default:!0}});var d=e(n);v(d,{children:(o,a)=>{t();var s=l("The form will allow users to submit text to the Backrush function through a POST request. The Backrush function will call the Anyscale API and return the response to the user.");r(o,s)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var z=e(Q);F(z,{id:"step-6",step:6,title:"Handle POST request",children:($,A)=>{var i=Ce(),m=p(i);v(m,{children:(a,s)=>{t();var h=l("Add methods necessary to integrate with the Anyscale API.");r(a,h)},$$slots:{default:!0}});var _=e(m);v(_,{children:(a,s)=>{t();var h=Ie(),x=e(p(h));y(x,{content:"openai"});var q=e(x,2);y(q,{content:"main.js"}),t(),r(a,h)},$$slots:{default:!0}});var f=e(_);j(f,{content:`import OpenAI from 'openai';
`,language:"js",process:!0,children:(a,s)=>{t();var h=l("import OpenAI from 'openai';");r(a,h)},$$slots:{default:!0}});var u=e(f);v(u,{children:(a,s)=>{t();var h=qe(),x=e(p(h));y(x,{content:"GET"}),t(),r(a,h)},$$slots:{default:!0}});var n=e(u);j(n,{content:`if (!req.body.prompt && typeof req.body.prompt !== "string") {
  return res.json({ ok: false, error: "Missing required field \`prompt\`" }, 400);
}

const openai = new OpenAI(
  {
    apiKey: process.env.ANYSCALE_API_KEY,
    baseURL: "https://api.endpoints.anyscale.com/v1"
  }
);
`,language:"js",process:!0,children:(a,s)=>{t();var h=l(`if (!req.body.prompt && typeof req.body.prompt !== "string") {
  return res.json({ ok: false, error: "Missing required field \`prompt\`" }, 400);
}

const openai = new OpenAI(
  {
    apiKey: process.env.ANYSCALE_API_KEY,
    baseURL: "https://api.endpoints.anyscale.com/v1"
  }
);`);r(a,h)},$$slots:{default:!0}});var d=e(n);v(d,{children:(a,s)=>{t();var h=l("Make a request to the Anyscale API and return the response:");r(a,h)},$$slots:{default:!0}});var o=e(d);j(o,{content:`try {
  const response = await openai.chat.completions.create({
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens: parseInt(process.env.ANYSCALE_MAX_TOKENS ?? "512"),
    messages: [{ role: "user", content: req.body.prompt }],
    stream: false
  });
  const completion = response.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  error(err);
  return res.json({ ok: false, error: "Failed to query model." }, 500);
}
`,language:"js",process:!0,children:(a,s)=>{t();var h=l(`try {
  const response = await openai.chat.completions.create({
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens: parseInt(process.env.ANYSCALE_MAX_TOKENS ?? "512"),
    messages: [{ role: "user", content: req.body.prompt }],
    stream: false
  });
  const completion = response.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  error(err);
  return res.json({ ok: false, error: "Failed to query model." }, 500);
}`);r(a,h)},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}});var Z=e(z);F(Z,{id:"step-8",step:8,title:"Test the function",children:($,A)=>{var i=Fe(),m=p(i);v(m,{children:(f,u)=>{t();var n=l("Now that the function is deployed test it by visiting the function URL in your browser. This should show the UI created earlier. To test it, write a prompt and click the submit button. After a brief moment, you should see the text generated by the Anyscale API.");r(f,n)},$$slots:{default:!0}});var _=e(m);v(_,{children:(f,u)=>{U(f,{src:"/images/docs/ai/integrations/anyscale/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r($,i)},$$slots:{default:!0}}),te(O),r(V,O)},$$slots:{default:!0}}))}export{st as component};
