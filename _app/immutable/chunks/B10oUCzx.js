import{t as u,b as s,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as de,s as r,f as h,n as o,r as pe}from"./NgVQVlRK.js";import{n as ce}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as _}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as ue}from"./BlhJVlLQ.js";import{C as y}from"./DXp9_3zM.js";import{F as P}from"./OFUKRh55.js";import{L as re,I as b}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{S as A}from"./yHjwcyUH.js";import{L as v}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as he}from"./CEkRzcqJ.js";const ne={layout:"post",title:"Building a Valentine's Day sonnet generator using OpenAI and Backrush Functions",description:"How we used Backrush Functions and OpenAI's GPT-4 API to a create a fun, yet creative project.",date:"2024-03-08T00:00:00.000Z",cover:"/images/blog/valentines-day-sonnet-generator/cover.png",timeToRead:7,author:"aditya-oberai",category:"functions"};var me=u("To get an OpenAI API Key, you must create an account on the <!>. Once your account is set up, visit their <!> page and create an API Key. Ensure you copy and save this key in a safe place, as the OpenAI platform will not let you view the key after it is created.",1),ve=u("Note: To use the GPT-4 API, your account must be upgraded to the <!>. To learn more, visit their <!>.",1),fe=u("Now that we have our OpenAI API Key, let us get the function ready on <!>. Head over to your Backrush project and visit the Functions page. From there, we will select the Templates tab, search for and select the Prompt ChatGPT function template.",1),$e=u("This function requires <!> to setup:",1),ge=u("<!>: API Key from our OpenAI account",1),ye=u("After you have configured the environment variables, you must connect your Backrush account with GitHub, select <!> (this will generate a GitHub repository for you with the function), and leave the production branch and root settings as default to create this function.",1),_e=u("In the project directory, visit <!> and replace the existing code with the following:",1),we=u("The original function provided through this template used OpenAI’s GPT-3.5-Turbo API. Since we want to upgrade this to GPT-4, we need to make a couple of changes. Firstly, we must update the version of the OpenAI library in our <!> file to version <!> so that it looks as follows:",1),xe=u("After that is done, we need to visit the <!> file and replace the existing code with the following:",1),Pe=u("And with that, our Valentine’s Day sonnet generator is ready! When we released this project on Valentine’s Day this year, it was used over 300 times by people across the world. You can try it out: <!>",1),be=u("If you liked this project or want to investigate the full project code, visit the <!>.",1),Ae=u("<!>: These documents provide more information on how to use Backrush Functions.",1),Ie=u("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),ke=u("<!><!>",1),je=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Oe(ae){he(ae,ce(ne,{children:(se,Te)=>{var w=je(),I=de(w);d(I,{children:(t,a)=>{o();var e=s("This year to make Valentine’s Day a little more special for all you lovebirds, you might remember that we worked on a fun little project. This project allowed a number of you to create romantic sonnets for your loved ones. Did you know, however, that this project was powered by a Node.js Backrush Function and OpenAI’s GPT-4 API?");n(t,e)},$$slots:{default:!0}});var k=r(I);d(k,{children:(t,a)=>{o();var e=s("In this blog, we will share how we developed our Valentine’s Day Sonnet Generator.");n(t,e)},$$slots:{default:!0}});var j=r(k);$(j,{level:1,children:(t,a)=>{o();var e=s("Setting up the OpenAI platform");n(t,e)},$$slots:{default:!0}});var O=r(j);d(O,{children:(t,a)=>{o();var e=me(),i=r(h(e));v(i,{href:"https://platform.openai.com/",children:(p,c)=>{o();var m=s("OpenAI platform");n(p,m)},$$slots:{default:!0}});var l=r(i,2);v(l,{href:"https://platform.openai.com/account/api-keys",children:(p,c)=>{o();var m=s("API keys");n(p,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var T=r(O);d(T,{children:(t,a)=>{_(t,{src:"/images/blog/valentines-day-sonnet-generator/openai.png",alt:"OpenAI API Keys"})},$$slots:{default:!0}});var S=r(T);ue(S,{children:(t,a)=>{d(t,{children:(e,i)=>{o();var l=ve(),p=r(h(l));A(p,{marker:"**",children:(m,g)=>{o();var f=s("Usage tier 1");n(m,f)},$$slots:{default:!0}});var c=r(p,2);v(c,{href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one",children:(m,g)=>{o();var f=s("Usage tiers documentation");n(m,f)},$$slots:{default:!0}}),o(),n(e,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=r(S);$(E,{level:1,children:(t,a)=>{o();var e=s("Preparing the Backrush Function");n(t,e)},$$slots:{default:!0}});var F=r(E);d(F,{children:(t,a)=>{o();var e=fe(),i=r(h(e));v(i,{href:"https://cloud.backrush.io/",children:(l,p)=>{o();var c=s("Backrush");n(l,c)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var G=r(F);d(G,{children:(t,a)=>{_(t,{src:"/images/blog/valentines-day-sonnet-generator/templates.png",alt:"Backrush Function Templates"})},$$slots:{default:!0}});var D=r(G);d(D,{children:(t,a)=>{o();var e=$e(),i=r(h(e));A(i,{marker:"**",children:(l,p)=>{o();var c=s("1 environment variable");n(l,c)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var C=r(D);re(C,{ordered:!1,marker:"-",children:(t,a)=>{b(t,{children:(e,i)=>{var l=ge(),p=h(l);y(p,{content:"OPENAI_API_KEY"}),o(),n(e,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var N=r(C);d(N,{children:(t,a)=>{o();var e=ye(),i=r(h(e));A(i,{marker:"**",children:(l,p)=>{o();var c=s("Create a new repository");n(l,c)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var K=r(N);$(K,{level:1,children:(t,a)=>{o();var e=s("Developing the project");n(t,e)},$$slots:{default:!0}});var q=r(K);d(q,{children:(t,a)=>{o();var e=s("While the Prompt ChatGPT function provides us with a majority of the boilerplate, certain areas of project still need to be updated.");n(t,e)},$$slots:{default:!0}});var V=r(q);$(V,{level:2,children:(t,a)=>{o();var e=s("Preparing the UI");n(t,e)},$$slots:{default:!0}});var M=r(V);d(M,{children:(t,a)=>{o();var e=_e(),i=r(h(e));y(i,{content:"static/index.html"}),o(),n(t,e)},$$slots:{default:!0}});var H=r(M);P(H,{content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Valentine's Day Sonnet Generator</title>

    <script>
      async function onSubmit(name) {
        const response = await fetch('/', {
          method: 'POST',
          body: JSON.stringify({ name }),
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

    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
  </head>
  <body>
    <main class="main-content">
      <div class="top-cover pb-14">
        <div class="container">
          <div
            class="flex gap-4 justify-center mt-4"
          >
            <h1 class="heading-level-1">Valentine's Day Sonnet Generator ❤️</h1>
            <code class="u-un-break-text"></code>
          </div>
          <p
            class="body-text-1 u-normal mt-2"
            style="max-width: 50rem"
          >
            Enter your partner's name and receive a sonnet dedicated to them, courtesy of Backrush and OpenAI
          </p>
        </div>
      </div>
      <div
        class="container u-margin-block-start-negative-56"
        x-data="{ name: '', sonnet: '', loading: false }"
      >
        <div class="card flex gap-6 flex flex-col">
          <div class="flex items-center gap-2">
            <div
              class="input-text-wrapper is-with-end-button w-full"
            >
              <input x-model="name" type="search" placeholder="Enter name of your beloved" maxlength="70" />
              <div class="icon-heart" style="position: absolute; inset-inline-start: 1rem; inset-block-start: 0.5rem;" aria-hidden="true"></div>
            </div>

            <button
              class="button"
              x-bind:disabled="loading"
              x-on:click="async () => { loading = true; sonnet = ''; try { sonnet = await onSubmit(name) } catch(err) { console.error(err); } finally { loading = false; } }"
            >
              <span class="text">Submit</span>
            </button>
          </div>
          <template x-if="sonnet">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-3 card">
                <div class="flex gap-3">
                  <h5 class="eyebrow-heading-2">Cupid:</h5>
                </div>

                <div style="overflow-x: hidden; line-break: auto">
                  <p class="u-color-text-gray" style="white-space: pre-line;" x-text="sonnet"></p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
  </body>
</html>
`,language:"html",process:!0,children:(t,a)=>{o();var e=s(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Valentine's Day Sonnet Generator</title>

    <script>
      async function onSubmit(name) {
        const response = await fetch('/', {
          method: 'POST',
          body: JSON.stringify({ name }),
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

    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink" />
    <link rel="stylesheet" href="https://unpkg.com/@backrush.io/pink-icons" />
  </head>
  <body>
    <main class="main-content">
      <div class="top-cover pb-14">
        <div class="container">
          <div
            class="flex gap-4 justify-center mt-4"
          >
            <h1 class="heading-level-1">Valentine's Day Sonnet Generator ❤️</h1>
            <code class="u-un-break-text"></code>
          </div>
          <p
            class="body-text-1 u-normal mt-2"
            style="max-width: 50rem"
          >
            Enter your partner's name and receive a sonnet dedicated to them, courtesy of Backrush and OpenAI
          </p>
        </div>
      </div>
      <div
        class="container u-margin-block-start-negative-56"
        x-data="{ name: '', sonnet: '', loading: false }"
      >
        <div class="card flex gap-6 flex flex-col">
          <div class="flex items-center gap-2">
            <div
              class="input-text-wrapper is-with-end-button w-full"
            >
              <input x-model="name" type="search" placeholder="Enter name of your beloved" maxlength="70" />
              <div class="icon-heart" style="position: absolute; inset-inline-start: 1rem; inset-block-start: 0.5rem;" aria-hidden="true"></div>
            </div>

            <button
              class="button"
              x-bind:disabled="loading"
              x-on:click="async () => { loading = true; sonnet = ''; try { sonnet = await onSubmit(name) } catch(err) { console.error(err); } finally { loading = false; } }"
            >
              <span class="text">Submit</span>
            </button>
          </div>
          <template x-if="sonnet">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-3 card">
                <div class="flex gap-3">
                  <h5 class="eyebrow-heading-2">Cupid:</h5>
                </div>

                <div style="overflow-x: hidden; line-break: auto">
                  <p class="u-color-text-gray" style="white-space: pre-line;" x-text="sonnet"></p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
  </body>
</html>`);n(t,e)},$$slots:{default:!0}});var U=r(H);$(U,{level:2,children:(t,a)=>{o();var e=s("Updating the function logic");n(t,e)},$$slots:{default:!0}});var Y=r(U);d(Y,{children:(t,a)=>{o();var e=we(),i=r(h(e));y(i,{content:"package.json"});var l=r(i,2);y(l,{content:"4.28.0"}),o(),n(t,e)},$$slots:{default:!0}});var L=r(Y);P(L,{content:`{
  "name": "prompt-chatgpt",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "type": "module",
  "scripts": {
    "format": "prettier --write ."
  },
  "keywords": [],
  "dependencies": {
    "openai": "^4.28.0"
  },
  "devDependencies": {
    "prettier": "^3.0.0"
  }
}
`,language:"json",process:!0,children:(t,a)=>{o();var e=s(`{
  "name": "prompt-chatgpt",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "type": "module",
  "scripts": {
    "format": "prettier --write ."
  },
  "keywords": [],
  "dependencies": {
    "openai": "^4.28.0"
  },
  "devDependencies": {
    "prettier": "^3.0.0"
  }
}`);n(t,e)},$$slots:{default:!0}});var W=r(L);d(W,{children:(t,a)=>{o();var e=xe(),i=r(h(e));y(i,{content:"src/main.js"}),o(),n(t,e)},$$slots:{default:!0}});var X=r(W);P(X,{content:`import { OpenAI } from 'openai';
import { getStaticFile, throwIfMissing } from './utils.js';

export default async ({ req, res, log, error }) => {
  throwIfMissing(process.env, ['OPENAI_API_KEY']);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  try {
    throwIfMissing(req.body, ['name']);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 400);
  }

  const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: \`Write a romantic Valentine\\'s Day sonnet dedicated to \${req.body.name}\` }],
    });
    const completion = response.choices[0].message?.content;
    log(completion);
    return res.json({ ok: true, completion }, 200);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 500);
  }
};
`,language:"client-web",process:!0,children:(t,a)=>{o();var e=s(`import { OpenAI } from 'openai';
import { getStaticFile, throwIfMissing } from './utils.js';

export default async ({ req, res, log, error }) => {
  throwIfMissing(process.env, ['OPENAI_API_KEY']);

  if (req.method === 'GET') {
    return res.text(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  try {
    throwIfMissing(req.body, ['name']);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 400);
  }

  const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: \`Write a romantic Valentine\\'s Day sonnet dedicated to \${req.body.name}\` }],
    });
    const completion = response.choices[0].message?.content;
    log(completion);
    return res.json({ ok: true, completion }, 200);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 500);
  }
};`);n(t,e)},$$slots:{default:!0}});var B=r(X);$(B,{level:2,children:(t,a)=>{o();var e=s("Testing the function");n(t,e)},$$slots:{default:!0}});var J=r(B);d(J,{children:(t,a)=>{o();var e=s("Once you’ve completed all the aforementioned steps, you can push the code to the generated GitHub repository, at which point Backrush Cloud will automatically deploy the changes to your function.");n(t,e)},$$slots:{default:!0}});var z=r(J);d(z,{children:(t,a)=>{_(t,{src:"/images/blog/valentines-day-sonnet-generator/deployments.png",alt:"Function deployments"})},$$slots:{default:!0}});var R=r(z);d(R,{children:(t,a)=>{o();var e=s("You can then go ahead and test your function by opening the function domain in your browser.");n(t,e)},$$slots:{default:!0}});var Z=r(R);$(Z,{level:1,children:(t,a)=>{o();var e=s("Next steps");n(t,e)},$$slots:{default:!0}});var Q=r(Z);d(Q,{children:(t,a)=>{o();var e=Pe(),i=r(h(e));v(i,{href:"https://apwr.dev/valentines-day-sonnet",children:(l,p)=>{o();var c=s("apwr.dev/valentines-day-sonnet");n(l,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var ee=r(Q);d(ee,{children:(t,a)=>{_(t,{src:"/images/blog/valentines-day-sonnet-generator/output.png",alt:"Output function"})},$$slots:{default:!0}});var te=r(ee);d(te,{children:(t,a)=>{o();var e=be(),i=r(h(e));v(i,{href:"https://github.com/adityaoberai/valentines-day-sonnet-generator",children:(l,p)=>{o();var c=s("GitHub repository");n(l,c)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var oe=r(te);d(oe,{children:(t,a)=>{o();var e=s("For more information about Backrush Functions, visit the following resources:");n(t,e)},$$slots:{default:!0}});var ie=r(oe);re(ie,{ordered:!1,marker:"-",children:(t,a)=>{var e=ke(),i=h(e);b(i,{children:(p,c)=>{var m=Ae(),g=h(m);v(g,{href:"https://backrush.io/docs/functions",children:(f,le)=>{o();var x=s("Backrush Function Docs");n(f,x)},$$slots:{default:!0}}),o(),n(p,m)},$$slots:{default:!0}});var l=r(i);b(l,{children:(p,c)=>{var m=Ie(),g=h(m);v(g,{href:"https://discord.com/invite/backrush",children:(f,le)=>{o();var x=s("Backrush Discord");n(f,x)},$$slots:{default:!0}}),o(),n(p,m)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}}),pe(w),n(se,w)},$$slots:{default:!0}}))}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Oe,frontmatter:ne},Symbol.toStringTag,{value:"Module"}));export{et as _,Oe as a};
