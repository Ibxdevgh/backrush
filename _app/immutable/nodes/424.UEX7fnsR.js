import{t as c,b as n,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as tt,s as t,f as u,n as e,r as et}from"../chunks/NgVQVlRK.js";import{n as rt}from"../chunks/B4IyMRKX.js";import{S as L}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as at,a as ot}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as D}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as y}from"../chunks/DXp9_3zM.js";import{F as A}from"../chunks/OFUKRh55.js";import{H as st}from"../chunks/CXsRaEhZ.js";import{L as Q,I}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S as C}from"../chunks/yHjwcyUH.js";import{L as E}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as nt}from"../chunks/CqOphJLh.js";const lt={layout:"article",title:"Integrating fal.ai",description:"Learn how to integrate fal.ai into your Backrush project.",difficulty:"intermediate",readtime:15};var it=c("A <!>",1),dt=c("<!><!>",1),ct=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ut=c("In the Backrush Console&#39;s sidebar, click <!>.",1),pt=c("Click <!>.",1),ft=c("Under <!>, select your provider.",1),ht=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),mt=c("In the <!> step, add the <!>, generate it <!>.",1),$t=c("<!><!><!><!><!><!>",1),vt=c("<!><!><!><!>",1),_t=c("<!><!><!>",1),gt=c("In this example, the function will be able to accept both <!> and <!> requests.",1),xt=c("For the <!> request, return a static HTML page. It will use AlpineJS to make a <!> request to the function. The <!> request will use the fal.ai SDK to make a request to the fal.ai API.",1),Pt=c("Write the code to return a static HTML page. Create a new <!> file with the following code:",1),yt=c("<!><!><!><!>",1),bt=c("Write our <!> request handler in the <!> file. This handler will return the static HTML page.",1),wt=c("<!><!>",1),kt=c("Create the static HTML page that the function will serve. Create a new file at <!> with some HTML boilerplate:",1),jt=c("Within the <!> tag, add a <!> tag with the necessary meta tags, stylesheets, and scripts:",1),Tt=c("And after the <!> tag, add our <!> tag with the following content:",1),St=c("<!><!><!><!><!><!><!>",1),At=c("Import the fal.ai SDK at the top of the <!> file:",1),Ft=c("Handle the <!> requests to the function. Initialize the fal.ai SDK at the end of the handler function:",1),It=c("Additional models can be found in the <!>.",1),Ct=c("<!><!><!><!><!><!><!><!><!>",1),Lt=c("<!><!>",1),qt=c("<article><!><!><!><!><!><!><!><!><!><!><!></article>");function ne(V){nt(V,rt(lt,{children:(B,Ot)=>{var H=qt(),G=tt(H);$(G,{children:(v,T)=>{e();var i=n("fal.ai is an AI inference platform with popular models such as Stable Diffusion XL, ControlNet, Whisper available as ready-to-use APIs so that you can easily integrate them into your applications.");r(v,i)},$$slots:{default:!0}});var K=t(G);$(K,{children:(v,T)=>{e();var i=n("This tutorial will guide you through the process of setting up the fal.ai API to generate an image using the SDXL model and integrating it into your Backrush project.");r(v,i)},$$slots:{default:!0}});var N=t(K);st(N,{id:"prerequisites",level:1,children:(v,T)=>{e();var i=n("Prerequisites");r(v,i)},$$slots:{default:!0}});var R=t(N);Q(R,{ordered:!1,marker:"-",children:(v,T)=>{var i=dt(),m=u(i);I(m,{children:(p,_)=>{e();var o=n("An Backrush Project");r(p,o)},$$slots:{default:!0}});var x=t(m);I(x,{children:(p,_)=>{e();var o=it(),h=t(u(o));E(h,{href:"https://fal.ai/docs/authentication/key-based",children:(d,s)=>{e();var g=n("fal.ai API Key");r(d,g)},$$slots:{default:!0}}),r(p,o)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var M=t(R);L(M,{id:"step-1",step:1,title:"Create new function",children:(v,T)=>{var i=vt(),m=u(i);$(m,{children:(o,h)=>{e();var d=ct(),s=t(u(d));E(s,{href:"https://cloud.backrush.io/console",children:(f,l)=>{e();var b=n("Backrush Console");r(f,b)},$$slots:{default:!0}});var g=t(s,2);C(g,{marker:"**",children:(f,l)=>{e();var b=n("Functions");r(f,b)},$$slots:{default:!0}});var a=t(g,2);C(a,{marker:"**",children:(f,l)=>{e();var b=n("Create Function");r(f,b)},$$slots:{default:!0}}),e(),r(o,d)},$$slots:{default:!0}});var x=t(m);at(x,{children:(o,h)=>{$(o,{children:(d,s)=>{D(d,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var p=t(x);ot(p,{children:(o,h)=>{$(o,{children:(d,s)=>{D(d,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=t(p);Q(_,{ordered:!0,marker:".",children:(o,h)=>{var d=$t(),s=u(d);I(s,{children:(w,q)=>{e();var P=ut(),k=t(u(P));C(k,{marker:"**",children:(S,F)=>{e();var j=n("Functions");r(S,j)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var g=t(s);I(g,{children:(w,q)=>{e();var P=pt(),k=t(u(P));C(k,{marker:"**",children:(S,F)=>{e();var j=n("Create function");r(S,j)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var a=t(g);I(a,{children:(w,q)=>{e();var P=ft(),k=t(u(P));C(k,{marker:"**",children:(S,F)=>{e();var j=n("Connect Git repository");r(S,j)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var f=t(a);I(f,{children:(w,q)=>{e();var P=ht(),k=t(u(P));C(k,{marker:"**",children:(F,j)=>{e();var O=n("Quick start");r(F,O)},$$slots:{default:!0}});var S=t(k,2);C(S,{marker:"**",children:(F,j)=>{e();var O=n("Node.js");r(F,O)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var l=t(f);I(l,{children:(w,q)=>{e();var P=mt(),k=t(u(P));C(k,{marker:"**",children:(j,O)=>{e();var U=n("Variables");r(j,U)},$$slots:{default:!0}});var S=t(k,2);y(S,{content:"FAL_API_KEY"});var F=t(S,2);E(F,{href:"https://fal.ai/docs/authentication/key-based",children:(j,O)=>{e();var U=n("here");r(j,U)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var b=t(l);I(b,{children:(w,q)=>{e();var P=n("Follow the step-by-step wizard and create the function.");r(w,P)},$$slots:{default:!0}}),r(o,d)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var W=t(M);L(W,{id:"step-2",step:2,title:"Add fal.ai SDK",children:(v,T)=>{var i=_t(),m=u(i);$(m,{children:(_,o)=>{e();var h=n("Once the function is created, clone the function and open it in your development environment.");r(_,h)},$$slots:{default:!0}});var x=t(m);$(x,{children:(_,o)=>{e();var h=n("Once you have the repository open, you can install the fal.ai SDK by running the following command in your terminal:");r(_,h)},$$slots:{default:!0}});var p=t(x);A(p,{content:`npm install @fal-ai/serverless-client
`,language:"bash",process:!0,children:(_,o)=>{e();var h=n("npm install @fal-ai/serverless-client");r(_,h)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var X=t(W);L(X,{id:"step-3",step:3,title:"Create utility function",children:(v,T)=>{var i=yt(),m=u(i);$(m,{children:(o,h)=>{e();var d=gt(),s=t(u(d));y(s,{content:"GET"});var g=t(s,2);y(g,{content:"POST"}),e(),r(o,d)},$$slots:{default:!0}});var x=t(m);$(x,{children:(o,h)=>{e();var d=xt(),s=t(u(d));y(s,{content:"GET"});var g=t(s,2);y(g,{content:"POST"});var a=t(g,2);y(a,{content:"POST"}),e(),r(o,d)},$$slots:{default:!0}});var p=t(x);$(p,{children:(o,h)=>{e();var d=Pt(),s=t(u(d));y(s,{content:"src/utils.js"}),e(),r(o,d)},$$slots:{default:!0}});var _=t(p);A(_,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"js",process:!0,children:(o,h)=>{e();var d=n(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(o,d)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var J=t(X);L(J,{id:"step-4",step:4,title:"Handle GET request",children:(v,T)=>{var i=wt(),m=u(i);$(m,{children:(p,_)=>{e();var o=bt(),h=t(u(o));y(h,{content:"GET"});var d=t(h,2);y(d,{content:"src/main.js"}),e(),r(p,o)},$$slots:{default:!0}});var x=t(m);A(x,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"js",process:!0,children:(p,_)=>{e();var o=n(`import { getStaticFile } from './utils.js';

export default async ({ req, res, error }) => {
  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(p,o)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var Y=t(J);L(Y,{id:"step-5",step:5,title:"Create static page",children:(v,T)=>{var i=St(),m=u(i);$(m,{children:(s,g)=>{e();var a=kt(),f=t(u(a));y(f,{content:"static/index.html"}),e(),r(s,a)},$$slots:{default:!0}});var x=t(m);A(x,{content:`<!doctype html>
<html lang="en">
</html>
`,language:"html",process:!0,children:(s,g)=>{e();var a=n(`<!doctype html>
<html lang="en">
</html>`);r(s,a)},$$slots:{default:!0}});var p=t(x);$(p,{children:(s,g)=>{e();var a=jt(),f=t(u(a));y(f,{content:"<html>"});var l=t(f,2);y(l,{content:"<head>"}),e(),r(s,a)},$$slots:{default:!0}});var _=t(p);A(_,{content:`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>fal.ai Demo</title>

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
`,language:"html",process:!0,children:(s,g)=>{e();var a=n(`<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>fal.ai Demo</title>

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
</head>`);r(s,a)},$$slots:{default:!0}});var o=t(_);$(o,{children:(s,g)=>{e();var a=Tt(),f=t(u(a));y(f,{content:"</head>"});var l=t(f,2);y(l,{content:"<body>"}),e(),r(s,a)},$$slots:{default:!0}});var h=t(o);A(h,{content:`<body class="theme-dark">
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">fal.ai demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with fal.ai. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', result: { src: '' }, loading: false }">
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div class="input-text-wrapper is-with-end-button u-width-full-line">
            <input x-model="prompt" type="search" placeholder="Prompt" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>
          <button class="button" x-bind:disabled="loading"
            x-on:click="async () => { loading = true; result = { src: '' }; try { result = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }">
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="answer.type">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Result:</h5>
              </div>
              <img class="u-max-width-400" x-bind:src="result.src" alt="fal.ai output" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>
`,language:"html",process:!0,children:(s,g)=>{e();var a=n(`<body class="theme-dark">
  <main class="main-content">
    <div class="top-cover u-padding-block-end-56">
      <div class="container">
        <div class="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
          <h1 class="heading-level-1">fal.ai demo</h1>
          <code class="u-un-break-text"></code>
        </div>
        <p class="body-text-1 u-normal u-margin-block-start-8" style="max-width: 50rem">
          Use this page to test your implementation with fal.ai. Enter
          text and receive the model output as a response.
        </p>
      </div>
    </div>
    <div class="container u-margin-block-start-negative-56"
      x-data="{ prompt: '', result: { src: '' }, loading: false }">
      <div class="card u-flex u-gap-24 u-flex-vertical">
        <div class="u-flex u-cross-center u-gap-8">
          <div class="input-text-wrapper is-with-end-button u-width-full-line">
            <input x-model="prompt" type="search" placeholder="Prompt" />
            <div class="icon-search" aria-hidden="true"></div>
          </div>
          <button class="button" x-bind:disabled="loading"
            x-on:click="async () => { loading = true; result = { src: '' }; try { result = await onSubmit(prompt) } catch(err) { console.error(err); } finally { loading = false; } }">
            <span class="text">Generate</span>
          </button>
        </div>
        <template x-if="answer.type">
          <div class="u-flex u-flex-vertical u-gap-12">
            <div class="u-flex u-flex-vertical u-gap-12 card">
              <div class="u-flex u-gap-12">
                <h5 class="eyebrow-heading-2">Result:</h5>
              </div>
              <img class="u-max-width-400" x-bind:src="result.src" alt="fal.ai output" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</body>`);r(s,a)},$$slots:{default:!0}});var d=t(h);$(d,{children:(s,g)=>{e();var a=n("This HTML form will allow users to input a prompt and generate an image using the fal.ai API. The AlpineJS script handles the form submission and display the result.");r(s,a)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var z=t(Y);L(z,{id:"step-6",step:6,title:"Handle POST Request",children:(v,T)=>{var i=Ct(),m=u(i);$(m,{children:(a,f)=>{e();var l=n("Add methods necessary to integrate with fal.ai's API.");r(a,l)},$$slots:{default:!0}});var x=t(m);$(x,{children:(a,f)=>{e();var l=At(),b=t(u(l));y(b,{content:"main.js"}),e(),r(a,l)},$$slots:{default:!0}});var p=t(x);A(p,{content:`import * as fal from '@fal-ai/serverless-client';
`,language:"js",process:!0,children:(a,f)=>{e();var l=n("import * as fal from '@fal-ai/serverless-client';");r(a,l)},$$slots:{default:!0}});var _=t(p);$(_,{children:(a,f)=>{e();var l=Ft(),b=t(u(l));y(b,{content:"POST"}),e(),r(a,l)},$$slots:{default:!0}});var o=t(_);A(o,{content:`fal.config({ credentials: process.env.FAL_API_KEY });
`,language:"js",process:!0,children:(a,f)=>{e();var l=n("fal.config({ credentials: process.env.FAL_API_KEY });");r(a,l)},$$slots:{default:!0}});var h=t(o);$(h,{children:(a,f)=>{e();var l=n("Make the request to generate an image using the SDXL model, and return the result:");r(a,l)},$$slots:{default:!0}});var d=t(h);A(d,{content:`const result = await fal.subscribe('fal-ai/fast-sdxl', {
  input: {
    prompt: req.body.prompt,
  },
});
return res.json({ ok: true, src: result.images[0].url });
`,language:"js",process:!0,children:(a,f)=>{e();var l=n(`const result = await fal.subscribe('fal-ai/fast-sdxl', {
  input: {
    prompt: req.body.prompt,
  },
});
return res.json({ ok: true, src: result.images[0].url });`);r(a,l)},$$slots:{default:!0}});var s=t(d);$(s,{children:(a,f)=>{e();var l=n("With the function complete, deploy it to Backrush by pushing the changes to your repository.");r(a,l)},$$slots:{default:!0}});var g=t(s);$(g,{children:(a,f)=>{e();var l=It(),b=t(u(l));E(b,{href:"https://fal.ai/models",children:(w,q)=>{e();var P=n("fal.ai model catalogue");r(w,P)},$$slots:{default:!0}}),e(),r(a,l)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var Z=t(z);L(Z,{id:"step-7",step:7,title:"Test the function",children:(v,T)=>{var i=Lt(),m=u(i);$(m,{children:(p,_)=>{e();var o=n("Now that the function is deployed, test it by visiting the function URL in a browser. The UI created earlier will be visible. To test it, write a prompt and click the submit button, after a brief the completion should appear below the input.");r(p,o)},$$slots:{default:!0}});var x=t(m);$(x,{children:(p,_)=>{D(p,{src:"/images/docs/ai/integrations/fal-ai/demo.png",alt:"Testing the function"})},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),et(H),r(B,H)},$$slots:{default:!0}}))}export{ne as component};
