import{t as u,b as a,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as X,s as r,f as c,n as e,r as Y}from"../chunks/NgVQVlRK.js";import{n as Z}from"../chunks/B4IyMRKX.js";import{S as O}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ee,a as te}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as B}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as G}from"../chunks/DXp9_3zM.js";import{F as H}from"../chunks/OFUKRh55.js";import{H as re}from"../chunks/CXsRaEhZ.js";import{L as W,I as C}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as w}from"../chunks/yHjwcyUH.js";import{L as T}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as oe}from"../chunks/CqOphJLh.js";const ne={layout:"article",title:"Text generation with Hugging Face",description:"Implement text generation into your app with Backrush and Hugging Face.",difficulty:"intermediate",readtime:15};var ae=u("A <!>",1),se=u("<!><!>",1),le=u("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ie=u("In the Backrush Console&#39;s sidebar, click <!>.",1),de=u("Click <!>.",1),ue=u("Under <!>, select your provider.",1),ce=u("After connecting to GitHub, under <!>, select the <!> starter template.",1),pe=u("In the <!> step, add the <!>, generate it <!>.",1),$e=u("<!><!><!><!><!><!>",1),fe=u("<!><!><!><!>",1),_e=u("<!><!><!>",1),me=u("Open up your <!> file and replace the function body with the following code:",1),ve=u("<!><!><!>",1),he=u("Add the following import at the top of your <!> file:",1),ge=u("<!><!><!><!><!>",1),Pe=u("Test our function by sending a POST request to the function&#39;s endpoint with a JSON body containing the <!> parameter.",1),ye=u("Navigate to your function in the Backrush Console and click on <!>. In the modal that appears, enter the following JSON body:",1),xe=u("Click <!> and you should see a response similar to the following:",1),ke=u("<!><!><!><!><!>",1),we=u("<article><!><!><!><!><!><!><!><!></article>");function Re(Q){oe(Q,Z(ne,{children:(V,be)=>{var E=we(),K=X(E);h(K,{children:(m,F)=>{e();var i=a("Learn to setup an Backrush Function utilizing text generation with Hugging Face.");t(m,i)},$$slots:{default:!0}});var L=r(K);re(L,{id:"prerequisites",level:1,children:(m,F)=>{e();var i=a("Prerequisites");t(m,i)},$$slots:{default:!0}});var M=r(L);W(M,{ordered:!1,marker:"-",children:(m,F)=>{var i=se(),p=c(i);C(p,{children:(f,d)=>{e();var l=a("An Backrush project");t(f,l)},$$slots:{default:!0}});var $=r(p);C($,{children:(f,d)=>{e();var l=ae(),o=r(c(l));T(o,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(s,n)=>{e();var v=a("Hugging Face API keys");t(s,v)},$$slots:{default:!0}}),t(f,l)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}});var D=r(M);O(D,{id:"step-1",step:1,title:"Create new function",children:(m,F)=>{var i=fe(),p=c(i);h(p,{children:(l,o)=>{e();var s=le(),n=r(c(s));T(n,{href:"https://cloud.appwrite.io/console",children:(x,b)=>{e();var I=a("Backrush Console");t(x,I)},$$slots:{default:!0}});var v=r(n,2);w(v,{marker:"**",children:(x,b)=>{e();var I=a("Functions");t(x,I)},$$slots:{default:!0}});var q=r(v,2);w(q,{marker:"**",children:(x,b)=>{e();var I=a("Create Function");t(x,I)},$$slots:{default:!0}}),e(),t(l,s)},$$slots:{default:!0}});var $=r(p);ee($,{children:(l,o)=>{h(l,{children:(s,n)=>{B(s,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var f=r($);te(f,{children:(l,o)=>{h(l,{children:(s,n)=>{B(s,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var d=r(f);W(d,{ordered:!0,marker:".",children:(l,o)=>{var s=$e(),n=c(s);C(n,{children:(g,S)=>{e();var _=ie(),P=r(c(_));w(P,{marker:"**",children:(k,A)=>{e();var y=a("Functions");t(k,y)},$$slots:{default:!0}}),e(),t(g,_)},$$slots:{default:!0}});var v=r(n);C(v,{children:(g,S)=>{e();var _=de(),P=r(c(_));w(P,{marker:"**",children:(k,A)=>{e();var y=a("Create function");t(k,y)},$$slots:{default:!0}}),e(),t(g,_)},$$slots:{default:!0}});var q=r(v);C(q,{children:(g,S)=>{e();var _=ue(),P=r(c(_));w(P,{marker:"**",children:(k,A)=>{e();var y=a("Connect Git repository");t(k,y)},$$slots:{default:!0}}),e(),t(g,_)},$$slots:{default:!0}});var x=r(q);C(x,{children:(g,S)=>{e();var _=ce(),P=r(c(_));w(P,{marker:"**",children:(A,y)=>{e();var j=a("Quick start");t(A,j)},$$slots:{default:!0}});var k=r(P,2);w(k,{marker:"**",children:(A,y)=>{e();var j=a("Node.js");t(A,j)},$$slots:{default:!0}}),e(),t(g,_)},$$slots:{default:!0}});var b=r(x);C(b,{children:(g,S)=>{e();var _=pe(),P=r(c(_));w(P,{marker:"**",children:(y,j)=>{e();var N=a("Variables");t(y,N)},$$slots:{default:!0}});var k=r(P,2);G(k,{content:"HUGGINGFACE_ACCESS_TOKEN"});var A=r(k,2);T(A,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(y,j)=>{e();var N=a("here");t(y,N)},$$slots:{default:!0}}),e(),t(g,_)},$$slots:{default:!0}});var I=r(b);C(I,{children:(g,S)=>{e();var _=a("Follow the step-by-step wizard and create the function.");t(g,_)},$$slots:{default:!0}}),t(l,s)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}});var U=r(D);O(U,{id:"step-2",step:2,title:"Add HuggingFace SDK",children:(m,F)=>{var i=_e(),p=c(i);h(p,{children:(d,l)=>{e();var o=a("Once the function is created, clone the function and open it in your development environment.");t(d,o)},$$slots:{default:!0}});var $=r(p);h($,{children:(d,l)=>{e();var o=a("Once you have the repository open, you can install the Hugging Face inference SDK by running the following command in your terminal:");t(d,o)},$$slots:{default:!0}});var f=r($);H(f,{content:`npm install @huggingface/inference
`,language:"bash",process:!0,children:(d,l)=>{e();var o=a("npm install @huggingface/inference");t(d,o)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}});var J=r(U);O(J,{id:"step-3",step:3,title:"Parse payload body",children:(m,F)=>{var i=ve(),p=c(i);h(p,{children:(d,l)=>{e();var o=a("After installing the SDK, write the code that will accept a JSON body.");t(d,o)},$$slots:{default:!0}});var $=r(p);h($,{children:(d,l)=>{e();var o=me(),s=r(c(o));G(s,{content:"src/main.js"}),e(),t(d,o)},$$slots:{default:!0}});var f=r($);H(f,{content:`export default async ({ req, res }) => {
  if (!req.body.prompt || typeof req.body.prompt !== 'string') {
    return res.json({
        ok: false,
        error: 'Missing required field \`prompt\`'
    }, 400);
  }
}
`,language:"js",process:!0,children:(d,l)=>{e();var o=a(`export default async ({ req, res }) => {
  if (!req.body.prompt || typeof req.body.prompt !== 'string') {
    return res.json({
        ok: false,
        error: 'Missing required field \`prompt\`'
    }, 400);
  }
}`);t(d,o)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}});var z=r(J);O(z,{id:"step-4",step:4,title:"Make a request to Hugging Face",children:(m,F)=>{var i=ge(),p=c(i);h(p,{children:(o,s)=>{e();var n=he(),v=r(c(n));G(v,{content:"src/main.js"}),e(),t(o,n)},$$slots:{default:!0}});var $=r(p);H($,{content:`import { HfInference } from '@huggingface/inference';
`,language:"js",process:!0,children:(o,s)=>{e();var n=a("import { HfInference } from '@huggingface/inference';");t(o,n)},$$slots:{default:!0}});var f=r($);h(f,{children:(o,s)=>{e();var n=a("In your function body, add the following code after the parameter checks:");t(o,n)},$$slots:{default:!0}});var d=r(f);H(d,{content:`
export default async ({ req, res }) => {
    // ... existing parameter checks

    const hf = new HfInference(process.env.HUGGINGFACE_ACCESS_TOKEN);

    try {
        const completion = await hf.textGeneration({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            inputs: req.body.prompt,
            max_new_tokens: req.body.max_new_tokens || 200,
        });
        return res.json({ ok: true, completion }, 200);
    } catch (err) {
        return res.json({ ok: false, error: 'Failed to query model.' }, 500);
    }
}
`,language:"js",process:!0,children:(o,s)=>{e();var n=a(`export default async ({ req, res }) => {
    // ... existing parameter checks

    const hf = new HfInference(process.env.HUGGINGFACE_ACCESS_TOKEN);

    try {
        const completion = await hf.textGeneration({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            inputs: req.body.prompt,
            max_new_tokens: req.body.max_new_tokens || 200,
        });
        return res.json({ ok: true, completion }, 200);
    } catch (err) {
        return res.json({ ok: false, error: 'Failed to query model.' }, 500);
    }
}`);t(o,n)},$$slots:{default:!0}});var l=r(d);h(l,{children:(o,s)=>{e();var n=a("The function makes a request to the Hugging Face API with the prompt provided in the request body. The response will be sent back to the client.");t(o,n)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}});var R=r(z);O(R,{id:"step-5",step:5,title:"Test the function",children:(m,F)=>{var i=ke(),p=c(i);h(p,{children:(o,s)=>{e();var n=Pe(),v=r(c(n));G(v,{content:"prompt"}),e(),t(o,n)},$$slots:{default:!0}});var $=r(p);h($,{children:(o,s)=>{e();var n=ye(),v=r(c(n));w(v,{marker:"**",children:(q,x)=>{e();var b=a("Execute now");t(q,b)},$$slots:{default:!0}}),e(),t(o,n)},$$slots:{default:!0}});var f=r($);H(f,{content:`{
    "prompt": "Write a story about a dragon",
}
`,language:"json",process:!0,children:(o,s)=>{e();var n=a(`{
    "prompt": "Write a story about a dragon",
}`);t(o,n)},$$slots:{default:!0}});var d=r(f);h(d,{children:(o,s)=>{e();var n=xe(),v=r(c(n));w(v,{marker:"**",children:(q,x)=>{e();var b=a("Execute");t(q,b)},$$slots:{default:!0}}),e(),t(o,n)},$$slots:{default:!0}});var l=r(d);H(l,{content:`{
    "ok": true,
    "completion": "Once upon a time, in a land far away, there was a dragon... [truncated]"
}
`,language:"json",process:!0,children:(o,s)=>{e();var n=a(`{
    "ok": true,
    "completion": "Once upon a time, in a land far away, there was a dragon... [truncated]"
}`);t(o,n)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}}),Y(E),t(V,E)},$$slots:{default:!0}}))}export{Re as component};
