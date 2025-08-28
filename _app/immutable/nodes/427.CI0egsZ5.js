import{t as p,b as i,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ee,s as e,f as u,n as t,r as te}from"../chunks/NgVQVlRK.js";import{n as re}from"../chunks/B4IyMRKX.js";import{S}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as oe,a as ne}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as Q}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as P}from"../chunks/DXp9_3zM.js";import{F as T}from"../chunks/OFUKRh55.js";import{H as ae}from"../chunks/CXsRaEhZ.js";import{L as z,I as O}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S as j}from"../chunks/yHjwcyUH.js";import{L}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as se}from"../chunks/CqOphJLh.js";const ie={layout:"article",title:"Integrating OpenAI",description:"Learn how to integrate OpenAI into your Backrush project.",difficulty:"intermediate",readtime:15};var le=p("An <!>",1),de=p("<!><!>",1),pe=p("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ce=p("In the Backrush Console&#39;s sidebar, click <!>.",1),ue=p("Click <!>.",1),he=p("Under <!>, select your provider.",1),me=p("After connecting to GitHub, under <!>, select the <!> starter template.",1),fe=p("In the <!> step, add the <!>, generate it <!>.",1),ve=p("<!><!><!><!><!><!>",1),$e=p("<!><!><!><!>",1),_e=p("Install the <!> package to simplify the process of interacting with the OpenAI API.",1),ge=p("<!><!><!>",1),Pe=p("For this example, the function will be able to take both <!> and <!> requests.",1),xe=p("For the <!> request, return a static HTML page that will have a form to submit text to the API. Meanwhile the <!> request will send the text to the OpenAI API and return the generated text.",1),we=p("Write the code to return the static HTML page, to do this create a new <!> file with the following code:",1),ye=p("<!><!><!><!>",1),be=p("Write the <!> request handler in the <!> file. This handler will return a static HTML page you&#39;ll create later.",1),Ae=p("If the method is <!>, it returns the static HTML page.",1),Ie=p("<!><!><!>",1),ke=p("Create a HTML web page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),Te=p("After the <!> tag add a <!> containing the visible form:",1),Oe=p("<!><!><!><!><!><!>",1),je=p("Import <!> at the top of the <!> file.",1),Ce=p("<!><!><!><!><!><!><!>",1),Ee=p("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function nt(V){se(V,re(ie,{children:(B,Se)=>{var N=Ee(),R=ee(N);$(R,{children:(m,A)=>{t();var d=i("The OpenAI API is a powerful tool that can be used to generate text, images, and more. This tutorial will guide you through the process of setting up the OpenAI API and integrating it into your Backrush project.");r(m,d)},$$slots:{default:!0}});var U=e(R);$(U,{children:(m,A)=>{t();var d=i("We'll create a simple function that takes a text prompt and generates a completion using OpenAI's GPT-3 model. Then, using Backrush functions we'll create a user interface that allows users to input text and see the generated completion.");r(m,d)},$$slots:{default:!0}});var K=e(U);ae(K,{id:"prerequisites",level:1,children:(m,A)=>{t();var d=i("Prerequisites");r(m,d)},$$slots:{default:!0}});var H=e(K);z(H,{ordered:!1,marker:"-",children:(m,A)=>{var d=de(),f=u(d);O(f,{children:(_,h)=>{t();var a=i("An Backrush Project");r(_,a)},$$slots:{default:!0}});var v=e(f);O(v,{children:(_,h)=>{t();var a=le(),l=e(u(a));L(l,{href:"https://platform.openai.com/account/api-keys",children:(o,n)=>{t();var s=i("OpenAI API Key");r(o,s)},$$slots:{default:!0}}),r(_,a)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var M=e(H);S(M,{id:"step-1",step:1,title:"Create new function",children:(m,A)=>{var d=$e(),f=u(d);$(f,{children:(a,l)=>{t();var o=pe(),n=e(u(o));L(n,{href:"https://cloud.appwrite.io/console",children:(x,C)=>{t();var E=i("Backrush Console");r(x,E)},$$slots:{default:!0}});var s=e(n,2);j(s,{marker:"**",children:(x,C)=>{t();var E=i("Functions");r(x,E)},$$slots:{default:!0}});var c=e(s,2);j(c,{marker:"**",children:(x,C)=>{t();var E=i("Create Function");r(x,E)},$$slots:{default:!0}}),t(),r(a,o)},$$slots:{default:!0}});var v=e(f);oe(v,{children:(a,l)=>{$(a,{children:(o,n)=>{Q(o,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=e(v);ne(_,{children:(a,l)=>{$(a,{children:(o,n)=>{Q(o,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var h=e(_);z(h,{ordered:!0,marker:".",children:(a,l)=>{var o=ve(),n=u(o);O(n,{children:(w,q)=>{t();var g=ce(),y=e(u(g));j(y,{marker:"**",children:(I,k)=>{t();var b=i("Functions");r(I,b)},$$slots:{default:!0}}),t(),r(w,g)},$$slots:{default:!0}});var s=e(n);O(s,{children:(w,q)=>{t();var g=ue(),y=e(u(g));j(y,{marker:"**",children:(I,k)=>{t();var b=i("Create function");r(I,b)},$$slots:{default:!0}}),t(),r(w,g)},$$slots:{default:!0}});var c=e(s);O(c,{children:(w,q)=>{t();var g=he(),y=e(u(g));j(y,{marker:"**",children:(I,k)=>{t();var b=i("Connect Git repository");r(I,b)},$$slots:{default:!0}}),t(),r(w,g)},$$slots:{default:!0}});var x=e(c);O(x,{children:(w,q)=>{t();var g=me(),y=e(u(g));j(y,{marker:"**",children:(k,b)=>{t();var F=i("Quick start");r(k,F)},$$slots:{default:!0}});var I=e(y,2);j(I,{marker:"**",children:(k,b)=>{t();var F=i("Node.js");r(k,F)},$$slots:{default:!0}}),t(),r(w,g)},$$slots:{default:!0}});var C=e(x);O(C,{children:(w,q)=>{t();var g=fe(),y=e(u(g));j(y,{marker:"**",children:(b,F)=>{t();var G=i("Variables");r(b,G)},$$slots:{default:!0}});var I=e(y,2);P(I,{content:"OPENAI_API_KEY"});var k=e(I,2);L(k,{href:"https://platform.openai.com/account/api-keys",children:(b,F)=>{t();var G=i("here");r(b,G)},$$slots:{default:!0}}),t(),r(w,g)},$$slots:{default:!0}});var E=e(C);O(E,{children:(w,q)=>{t();var g=i("Follow the step-by-step wizard and create the function.");r(w,g)},$$slots:{default:!0}}),r(a,o)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var D=e(M);S(D,{id:"step-2",step:2,title:"Add OpenAI SDK",children:(m,A)=>{var d=ge(),f=u(d);$(f,{children:(h,a)=>{t();var l=i("Once the function is created, navigate to the freshly created repository and clone it to your local machine.");r(h,l)},$$slots:{default:!0}});var v=e(f);$(v,{children:(h,a)=>{t();var l=_e(),o=e(u(l));P(o,{content:"openai"}),t(),r(h,l)},$$slots:{default:!0}});var _=e(v);T(_,{content:`npm install openai
`,language:"bash",process:!0,children:(h,a)=>{t();var l=i("npm install openai");r(h,l)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var W=e(D);S(W,{id:"step-3",step:3,title:"Create utility function",children:(m,A)=>{var d=ye(),f=u(d);$(f,{children:(a,l)=>{t();var o=Pe(),n=e(u(o));P(n,{content:"GET"});var s=e(n,2);P(s,{content:"POST"}),t(),r(a,o)},$$slots:{default:!0}});var v=e(f);$(v,{children:(a,l)=>{t();var o=xe(),n=e(u(o));P(n,{content:"GET"});var s=e(n,2);P(s,{content:"POST"}),t(),r(a,o)},$$slots:{default:!0}});var _=e(v);$(_,{children:(a,l)=>{t();var o=we(),n=e(u(o));P(n,{content:"src/utils.js"}),t(),r(a,o)},$$slots:{default:!0}});var h=e(_);T(h,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(a,l)=>{t();var o=i(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(a,o)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var Y=e(W);S(Y,{id:"step-4",step:4,title:"Handle GET request",children:(m,A)=>{var d=Ie(),f=u(d);$(f,{children:(h,a)=>{t();var l=be(),o=e(u(l));P(o,{content:"GET"});var n=e(o,2);P(n,{content:"src/main.js"}),t(),r(h,l)},$$slots:{default:!0}});var v=e(f);T(v,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(h,a)=>{t();var l=i(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(h,l)},$$slots:{default:!0}});var _=e(v);$(_,{children:(h,a)=>{t();var l=Ae(),o=e(u(l));P(o,{content:"GET"}),t(),r(h,l)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var J=e(Y);S(J,{id:"step-5",step:5,title:"Create web page",children:(m,A)=>{var d=Oe(),f=u(d);$(f,{children:(o,n)=>{t();var s=ke(),c=e(u(s));P(c,{content:"static/index.html"}),t(),r(o,s)},$$slots:{default:!0}});var v=e(f);T(v,{content:`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OpenAI Demo</title>

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
`,language:"html",process:!0,children:(o,n)=>{t();var s=i(`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OpenAI Demo</title>

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
</html>`);r(o,s)},$$slots:{default:!0}});var _=e(v);$(_,{children:(o,n)=>{t();var s=i("The code above includes a script that will handle the form submission and a script tag that includes the Alpine.js library. This library will be used to handle the form submission.");r(o,s)},$$slots:{default:!0}});var h=e(_);$(h,{children:(o,n)=>{t();var s=Te(),c=e(u(s));P(c,{content:"</head>"});var x=e(c,2);P(x,{content:"<body>"}),t(),r(o,s)},$$slots:{default:!0}});var a=e(h);T(a,{content:`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Prompt ChatGPT Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with OpenAI ChatGPT. Enter
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
                <h5 class="eyebrow-heading-2">ChatGPT:</h5>
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
`,language:"html",process:!0,children:(o,n)=>{t();var s=i(`<body>
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div
          class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16"
        >
          <h1 class="heading-level-1">Prompt ChatGPT Demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p
          class="body-text-1 u-normal u-margin-block-start-8"
          style="max-width: 50rem"
        >
          Use this page to test your implementation with OpenAI ChatGPT. Enter
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
                <h5 class="eyebrow-heading-2">ChatGPT:</h5>
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
</body>`);r(o,s)},$$slots:{default:!0}});var l=e(a);$(l,{children:(o,n)=>{t();var s=i("The form will allows users to submit your text to the Backrush function through a POST request. The Backrush function will call the OpenAI API, and return the response to the user.");r(o,s)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var X=e(J);S(X,{id:"step-6",step:6,title:"Handle POST request",children:(m,A)=>{var d=Ce(),f=u(d);$(f,{children:(n,s)=>{t();var c=i("Add methods necessary to integrate with the OpenAI API.");r(n,c)},$$slots:{default:!0}});var v=e(f);$(v,{children:(n,s)=>{t();var c=je(),x=e(u(c));P(x,{content:"openai"});var C=e(x,2);P(C,{content:"main.js"}),t(),r(n,c)},$$slots:{default:!0}});var _=e(v);T(_,{content:`import { OpenAIApi, Configuration } from 'openai';
`,language:"js",process:!0,children:(n,s)=>{t();var c=i("import { OpenAIApi, Configuration } from 'openai';");r(n,c)},$$slots:{default:!0}});var h=e(_);$(h,{children:(n,s)=>{t();var c=i("Add code to validate the body of the request and initialize the Backrush SDK:");r(n,c)},$$slots:{default:!0}});var a=e(h);T(a,{content:`const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT ?? "https://<REGION>.cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

if (!req.body.prompt && typeof req.body.prompt !== "string") {
  return res.json({ ok: false, error: "Missing required field \`prompt\`" }, 400);
}

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);
`,language:"js",process:!0,children:(n,s)=>{t();var c=i(`const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT ?? "https://<REGION>.cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

if (!req.body.prompt && typeof req.body.prompt !== "string") {
  return res.json({ ok: false, error: "Missing required field \`prompt\`" }, 400);
}

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);`);r(n,c)},$$slots:{default:!0}});var l=e(a);$(l,{children:(n,s)=>{t();var c=i("Make a request to the OpenAI API and return the response:");r(n,c)},$$slots:{default:!0}});var o=e(l);T(o,{content:`try {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
    messages: [{ role: 'user', content: req.body.prompt }],
  });
  const completion = response.data.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to query model.' }, 500);
}
`,language:"js",process:!0,children:(n,s)=>{t();var c=i(`try {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
    messages: [{ role: 'user', content: req.body.prompt }],
  });
  const completion = response.data.choices[0].message?.content;
  return res.json({ ok: true, completion }, 200);
} catch (err) {
  return res.json({ ok: false, error: 'Failed to query model.' }, 500);
}`);r(n,c)},$$slots:{default:!0}}),r(m,d)},$$slots:{default:!0}});var Z=e(X);S(Z,{id:"step-8",step:8,title:"Test the function",children:(m,A)=>{$(m,{children:(d,f)=>{t();var v=i("Now that the function is deployed, test it by visiting the function URL in your browser. This should show the UI created earlier and to test it, write a prompt and click the submit button. After a brief moment you should see the generated text from the OpenAI API.");r(d,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),te(N),r(B,N)},$$slots:{default:!0}}))}export{nt as component};
