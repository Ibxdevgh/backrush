import{t as u,b as a,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as r,f as h,c as $e,n as o,r as ge}from"./NgVQVlRK.js";import{n as _e}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as P}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as we}from"./BlhJVlLQ.js";import{C as v}from"./DXp9_3zM.js";import{F as _}from"./OFUKRh55.js";import{L as k,I as w}from"./BhmTgGWB.js";import{P as l}from"./D8YsId2T.js";import{S as ye}from"./yHjwcyUH.js";import{L as g}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Pe}from"./CEkRzcqJ.js";const ue={layout:"post",title:"Build a chatbot with GPT-4o and Backrush Functions",description:"Learn how to use OpenAI's new flagship model, GPT-4o to create an intelligent chatbot.",date:"2024-05-17T00:00:00.000Z",cover:"/images/blog/personal-chatbot-gpt-4o/cover.png",timeToRead:5,author:"aditya-oberai",category:"tutorial"};var xe=u("Recently, at the OpenAI Spring Update, OpenAI CTO Mira Murati announced the launch of their new flagship model, <!>. GPT-4o happens to be OpenAI&#39;s fastest and most affordable model so far, which led us to wonder if we could use it to build our very own chatbot.",1),be=u("To use the OpenAI GPT-4o API, we must first create an API key on their platform. To do that, we must first create an account on the <!>. Once the account is set up and a project is created, we can visit their <!> page and create an API key. Ensure you copy and save this key in a safe place, as the OpenAI platform will not let you view the key after it is created.",1),ke=u("Note: To use the GPT-4o API, your account must be upgraded to Usage tier 1 (you must purchase at least $5 worth of credits). To learn more, visit their <!>.",1),je=u("Now that we have our OpenAI API Key, let&#39;s prepare the function on <!>. Go to your Backrush project and visit the Functions page. From there, we will create a function using the Node.js starter template.",1),Ae=u("<!>: API Key from our OpenAI account",1),Ie=u("<!>: Maximum number of tokens that the OpenAI response should contain (we&#39;ll set this as <!>)",1),Te=u("<!><!>",1),Oe=u("To get our chatbot up and running, we must first develop a UI you can interact with. We will create a folder <!> at the root level of our project directory and add a file <!>. We will then add the following HTML to this file:",1),Fe=u("<!><!>",1),Ee=u("For that, we shall enter the <!> folder and create a file <!> with the following code:",1),Se=u("Now that our chatbot UI and utility functions are ready, we can develop our final function logic. For that, we must first install the <!> NPM package. Open your terminal in the project directory and run the following command:",1),Ge=u("After that is done, we must visit the <!> file and replace the existing code with the following:",1),Ne=u("This function will return our chatbot UI on any <!> request to the function and will use the prompt sent in the request body and use the OpenAI GPT-4o API to generate and return a response otherwise.",1),Me=u("Here is what an example of this looks like: <!>",1),Ce=u("And with that, you have successfully deployed your personal chatbot powered by GPT-4o and Backrush Functions. If you liked this project or want to investigate the full project code, visit our <!>.",1),Ue=u("<!>: These documents provide more information on how to use Backrush Functions.",1),qe=u("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),Re=u("<!><!>",1),Le=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ke(he){Pe(he,_e(ue,{children:(me,He)=>{var x=Le(),j=$e(x);l(j,{children:(t,s)=>{o();var e=xe(),i=r(h(e));ye(i,{marker:"**",children:(c,d)=>{o();var m=a("GPT-4o");n(c,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var A=r(j);l(A,{children:(t,s)=>{o();var e=a("Therefore, in this blog, we will learn how to use Backrush Functions and the OpenAI GPT-4o API to build a personal chatbot.");n(t,e)},$$slots:{default:!0}});var I=r(A);$(I,{level:2,children:(t,s)=>{o();var e=a("Setting up the OpenAI Platform");n(t,e)},$$slots:{default:!0}});var T=r(I);l(T,{children:(t,s)=>{o();var e=be(),i=r(h(e));g(i,{href:"https://platform.openai.com/",children:(d,m)=>{o();var p=a("OpenAI platform");n(d,p)},$$slots:{default:!0}});var c=r(i,2);g(c,{href:"https://platform.openai.com/account/api-keys",children:(d,m)=>{o();var p=a("API keys");n(d,p)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var O=r(T);l(O,{children:(t,s)=>{P(t,{src:"/images/blog/personal-chatbot-gpt-4o/openai.png",alt:"Create an OpenAI API Key"})},$$slots:{default:!0}});var F=r(O);we(F,{children:(t,s)=>{l(t,{children:(e,i)=>{o();var c=ke(),d=r(h(c));g(d,{href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one",children:(m,p)=>{o();var f=a("Usage tiers documentation");n(m,f)},$$slots:{default:!0}}),o(),n(e,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=r(F);$(E,{level:2,children:(t,s)=>{o();var e=a("Initializing the Backrush Function");n(t,e)},$$slots:{default:!0}});var S=r(E);l(S,{children:(t,s)=>{o();var e=je(),i=r(h(e));g(i,{href:"https://cloud.backrush.io/",children:(c,d)=>{o();var m=a("Backrush");n(c,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var G=r(S);l(G,{children:(t,s)=>{P(t,{src:"/images/blog/personal-chatbot-gpt-4o/functions.png",alt:"Create a new Backrush Function"})},$$slots:{default:!0}});var N=r(G);l(N,{children:(t,s)=>{o();var e=a("Once the function is ready, we must visit the Settings tab on the Function page and add the following environment variables:");n(t,e)},$$slots:{default:!0}});var M=r(N);k(M,{ordered:!1,marker:"-",children:(t,s)=>{var e=Te(),i=h(e);w(i,{children:(d,m)=>{var p=Ae(),f=h(p);v(f,{content:"OPENAI_API_KEY"}),o(),n(d,p)},$$slots:{default:!0}});var c=r(i);w(c,{children:(d,m)=>{var p=Ie(),f=h(p);v(f,{content:"OPENAI_MAX_TOKENS"});var y=r(f,2);v(y,{content:"512"}),o(),n(d,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var C=r(M);l(C,{children:(t,s)=>{o();var e=a("Once that is done, visit the function's GitHub repository and clone the project.");n(t,e)},$$slots:{default:!0}});var U=r(C);$(U,{level:2,children:(t,s)=>{o();var e=a("Developing the project");n(t,e)},$$slots:{default:!0}});var q=r(U);l(q,{children:(t,s)=>{o();var e=a("Once your function's GitHub repository is ready, clone it to your local device and enter the directory. You will notice a directory structure as follows:");n(t,e)},$$slots:{default:!0}});var R=r(q);_(R,{content:`.
├── src/
│   └── main.js
├── README.md
├── package-lock.json
└── package.json
`,process:!0,children:(t,s)=>{o();var e=a(`.
├── src/
│   └── main.js
├── README.md
├── package-lock.json
└── package.json`);n(t,e)},$$slots:{default:!0}});var L=r(R);$(L,{level:3,children:(t,s)=>{o();var e=a("Preparing the UI");n(t,e)},$$slots:{default:!0}});var K=r(L);l(K,{children:(t,s)=>{o();var e=Oe(),i=r(h(e));v(i,{content:"static"});var c=r(i,2);v(c,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var H=r(K);_(H,{content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prompt ChatGPT demo</title>

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
  <body class="dark">
    <main class="main-content">
      <div class="top-cover pb-14">
        <div class="container">
          <div
            class="flex gap-4 justify-center mt-4"
          >
            <h1 class="heading-level-1">Prompt ChatGPT demo</h1>
            <code class="u-un-break-text"></code>
          </div>
          <p
            class="body-text-1 u-normal mt-2"
            style="max-width: 50rem"
          >
            Use this page to test your implementation with OpenAI GPT-4o API. Enter
            text and receive the model output as a response.
          </p>
        </div>
      </div>
      <div
        class="container u-margin-block-start-negative-56"
        x-data="{ prompt: '', answer: '', loading: false }"
      >
        <div class="card flex gap-6 flex flex-col">
          <div class="flex items-center gap-2">
            <div
              class="input-text-wrapper is-with-end-button w-full"
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
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-3 card">
                <div class="flex gap-3">
                  <h5 class="eyebrow-heading-2">ChatGPT:</h5>
                </div>

                <div style="overflow-x: hidden; line-break: anywhere; white-space: pre-line;">
                  <p class="u-color-text-gray" x-text="answer"></p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
  </body>
</html>
`,language:"html",process:!0,children:(t,s)=>{o();var e=a(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prompt ChatGPT demo</title>

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
  <body class="dark">
    <main class="main-content">
      <div class="top-cover pb-14">
        <div class="container">
          <div
            class="flex gap-4 justify-center mt-4"
          >
            <h1 class="heading-level-1">Prompt ChatGPT demo</h1>
            <code class="u-un-break-text"></code>
          </div>
          <p
            class="body-text-1 u-normal mt-2"
            style="max-width: 50rem"
          >
            Use this page to test your implementation with OpenAI GPT-4o API. Enter
            text and receive the model output as a response.
          </p>
        </div>
      </div>
      <div
        class="container u-margin-block-start-negative-56"
        x-data="{ prompt: '', answer: '', loading: false }"
      >
        <div class="card flex gap-6 flex flex-col">
          <div class="flex items-center gap-2">
            <div
              class="input-text-wrapper is-with-end-button w-full"
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
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-3 card">
                <div class="flex gap-3">
                  <h5 class="eyebrow-heading-2">ChatGPT:</h5>
                </div>

                <div style="overflow-x: hidden; line-break: anywhere; white-space: pre-line;">
                  <p class="u-color-text-gray" x-text="answer"></p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
  </body>
</html>`);n(t,e)},$$slots:{default:!0}});var D=r(H);$(D,{level:3,children:(t,s)=>{o();var e=a("Preparing our utility functions");n(t,e)},$$slots:{default:!0}});var X=r(D);l(X,{children:(t,s)=>{o();var e=a("To simplify the function logic, we create additional utility functions to");n(t,e)},$$slots:{default:!0}});var Y=r(X);k(Y,{ordered:!1,marker:"-",children:(t,s)=>{var e=Fe(),i=h(e);w(i,{children:(d,m)=>{o();var p=a("return the contents of a file in the static folder as a string (to send our UI to the client browser)");n(d,p)},$$slots:{default:!0}});var c=r(i);w(c,{children:(d,m)=>{o();var p=a("throw an error if any of the keys are missing from the object (to check for missing environment variables)");n(d,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var B=r(Y);l(B,{children:(t,s)=>{o();var e=Ee(),i=r(h(e));v(i,{content:"src"});var c=r(i,2);v(c,{content:"utils.js"}),o(),n(t,e)},$$slots:{default:!0}});var z=r(B);_(z,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

/**
 * Returns the contents of a file in the static folder
 * @param {string} fileName
 * @returns {string} Contents of static/{fileName}
 */
export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}

/**
 * Throws an error if any of the keys are missing from the object
 * @param {*} obj
 * @param {string[]} keys
 * @throws {Error}
 */
export function throwIfMissing(obj, keys) {
  const missing = [];
  for (let key of keys) {
    if (!(key in obj) || !obj[key]) {
      missing.push(key);
    }
  }
  if (missing.length > 0) {
    throw new Error(\`Missing required fields: \${missing.join(', ')}\`);
  }
}
`,language:"js",process:!0,children:(t,s)=>{o();var e=a(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

/**
 * Returns the contents of a file in the static folder
 * @param {string} fileName
 * @returns {string} Contents of static/{fileName}
 */
export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}

/**
 * Throws an error if any of the keys are missing from the object
 * @param {*} obj
 * @param {string[]} keys
 * @throws {Error}
 */
export function throwIfMissing(obj, keys) {
  const missing = [];
  for (let key of keys) {
    if (!(key in obj) || !obj[key]) {
      missing.push(key);
    }
  }
  if (missing.length > 0) {
    throw new Error(\`Missing required fields: \${missing.join(', ')}\`);
  }
}`);n(t,e)},$$slots:{default:!0}});var J=r(z);$(J,{level:3,children:(t,s)=>{o();var e=a("Creating the function logic");n(t,e)},$$slots:{default:!0}});var Q=r(J);l(Q,{children:(t,s)=>{o();var e=Se(),i=r(h(e));v(i,{content:"openai"}),o(),n(t,e)},$$slots:{default:!0}});var W=r(Q);_(W,{content:`npm i openai
`,language:"bash",process:!0,children:(t,s)=>{o();var e=a("npm i openai");n(t,e)},$$slots:{default:!0}});var Z=r(W);l(Z,{children:(t,s)=>{o();var e=Ge(),i=r(h(e));v(i,{content:"src/main.js"}),o(),n(t,e)},$$slots:{default:!0}});var V=r(Z);_(V,{content:`import OpenAI from 'openai';
import { getStaticFile, throwIfMissing } from './utils.js';

export default async ({ req, res }) => {
  throwIfMissing(process.env, ['OPENAI_API_KEY']);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  try {
    throwIfMissing(req.body, ['prompt']);
  } catch (err) {
    return res.json({ ok: false, error: err.message }, 400);
  }

  const openai = new OpenAI();

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: req.body.prompt }],
    });
    const completion = response.choices[0].message.content;
    return res.json({ ok: true, completion }, 200);
  } catch (err) {
    return res.json({ ok: false, error: 'Failed to query model.' }, 500);
  }
};
`,language:"jsx",process:!0,children:(t,s)=>{o();var e=a(`import OpenAI from 'openai';
import { getStaticFile, throwIfMissing } from './utils.js';

export default async ({ req, res }) => {
  throwIfMissing(process.env, ['OPENAI_API_KEY']);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  try {
    throwIfMissing(req.body, ['prompt']);
  } catch (err) {
    return res.json({ ok: false, error: err.message }, 400);
  }

  const openai = new OpenAI();

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: req.body.prompt }],
    });
    const completion = response.choices[0].message.content;
    return res.json({ ok: true, completion }, 200);
  } catch (err) {
    return res.json({ ok: false, error: 'Failed to query model.' }, 500);
  }
};`);n(t,e)},$$slots:{default:!0}});var ee=r(V);l(ee,{children:(t,s)=>{o();var e=Ne(),i=r(h(e));v(i,{content:"GET"}),o(),n(t,e)},$$slots:{default:!0}});var te=r(ee);l(te,{children:(t,s)=>{o();var e=a("At this point, our project directory structure should look as follows:");n(t,e)},$$slots:{default:!0}});var oe=r(te);_(oe,{content:`.
├── src/
│   ├── main.js
│   └── utils.js
├── static/
│   └── index.html
├── README.md
├── package-lock.json
└── package.json

`,process:!0,children:(t,s)=>{o();var e=a(`.
├── src/
│   ├── main.js
│   └── utils.js
├── static/
│   └── index.html
├── README.md
├── package-lock.json
└── package.json`);n(t,e)},$$slots:{default:!0}});var re=r(oe);$(re,{level:3,children:(t,s)=>{o();var e=a("Testing the function");n(t,e)},$$slots:{default:!0}});var ne=r(re);l(ne,{children:(t,s)=>{o();var e=a("Once you've completed all the aforementioned steps, you can push the code to our GitHub repository, at which point Backrush Cloud will automatically deploy the changes to your function.");n(t,e)},$$slots:{default:!0}});var se=r(ne);l(se,{children:(t,s)=>{P(t,{src:"/images/blog/personal-chatbot-gpt-4o/deployment.png",alt:"Backrush Function deployments"})},$$slots:{default:!0}});var ae=r(se);l(ae,{children:(t,s)=>{o();var e=a("You can then go ahead and test your function by opening the function domain in your browser.");n(t,e)},$$slots:{default:!0}});var ie=r(ae);l(ie,{children:(t,s)=>{o();var e=Me(),i=r(h(e));g(i,{href:"https://apwr.dev/gpt-4o-demo",children:(c,d)=>{o();var m=a("apwr.dev/gpt-4o-demo");n(c,m)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var le=r(ie);l(le,{children:(t,s)=>{P(t,{src:"/images/blog/personal-chatbot-gpt-4o/final.png",alt:"Final project UI"})},$$slots:{default:!0}});var ce=r(le);$(ce,{level:2,children:(t,s)=>{o();var e=a("Next steps");n(t,e)},$$slots:{default:!0}});var de=r(ce);l(de,{children:(t,s)=>{o();var e=Ce(),i=r(h(e));g(i,{href:"https://github.com/backrush-community/gpt-4o-function",children:(c,d)=>{o();var m=a("GitHub repository");n(c,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var pe=r(de);l(pe,{children:(t,s)=>{o();var e=a("Additionally, if you would like to learn more about Backrush Functions, here are some resources:");n(t,e)},$$slots:{default:!0}});var fe=r(pe);k(fe,{ordered:!1,marker:"-",children:(t,s)=>{var e=Re(),i=h(e);w(i,{children:(d,m)=>{var p=Ue(),f=h(p);g(f,{href:"https://backrush.io/docs/functions",children:(y,ve)=>{o();var b=a("Backrush Functions docs");n(y,b)},$$slots:{default:!0}}),o(),n(d,p)},$$slots:{default:!0}});var c=r(i);w(c,{children:(d,m)=>{var p=qe(),f=h(p);g(f,{href:"https://discord.com/invite/backrush",children:(y,ve)=>{o();var b=a("Backrush Discord");n(y,b)},$$slots:{default:!0}}),o(),n(d,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}}),ge(x),n(me,x)},$$slots:{default:!0}}))}const ht=Object.freeze(Object.defineProperty({__proto__:null,default:Ke,frontmatter:ue},Symbol.toStringTag,{value:"Module"}));export{ht as _,Ke as a};
