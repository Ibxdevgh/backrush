import{t as u,b as a,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as R,s as t,f as c,n as e,r as W}from"../chunks/NgVQVlRK.js";import{n as Z}from"../chunks/B4IyMRKX.js";import{S as O}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as ee,a as te}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as B}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as q}from"../chunks/DXp9_3zM.js";import{F as j}from"../chunks/OFUKRh55.js";import{H as re}from"../chunks/CXsRaEhZ.js";import{L as J,I as A}from"../chunks/BhmTgGWB.js";import{P as g}from"../chunks/D8YsId2T.js";import{S as F}from"../chunks/yHjwcyUH.js";import{L as T}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as oe}from"../chunks/CqOphJLh.js";const ne={layout:"article",title:"Language translation with Hugging Face",description:"Implement language translation into your app with Backrush and Hugging Face.",difficulty:"intermediate",readtime:15};var ae=u("A <!>",1),se=u("<!><!>",1),le=u("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),ie=u("In the Backrush Console&#39;s sidebar, click <!>.",1),de=u("Click <!>.",1),ue=u("Under <!>, select your provider.",1),ce=u("After connecting to GitHub, under <!>, select the <!> starter template.",1),$e=u("In the <!> step, add the <!>, generate it <!>.",1),pe=u("<!><!><!><!><!><!>",1),fe=u("<!><!><!><!>",1),_e=u("<!><!><!>",1),he=u("Open up your <!> file and replace the function body with the following code:",1),ve=u("<!><!><!>",1),ge=u("Add the following import at the top of your <!> file:",1),me=u("First, ensure the function is called with method <!>. Then, make a request to the Hugging Face API to translate the <!> text from English to French. You can change the <!> and <!> parameters to any language supported by the model you choose.",1),Pe=u("<!><!><!><!><!>",1),ye=u("Test our function by sending a POST request to the function&#39;s endpoint with a JSON body containing the <!> parameter.",1),ke=u("Navigate to your function in the Backrush Console and click on <!>. In the modal that appears, enter the following JSON body:",1),xe=u("Click <!> and you should see a response similar to the following:",1),we=u("<!><!><!><!><!>",1),be=u("<article><!><!><!><!><!><!><!><!></article>");function Re(Q){oe(Q,Z(ne,{children:(V,Fe)=>{var G=be(),X=R(G);g(X,{children:(v,C)=>{e();var i=a("Learn to setup an Backrush Function utilizing language translation with Hugging Face.");r(v,i)},$$slots:{default:!0}});var L=t(X);re(L,{id:"prerequisites",level:1,children:(v,C)=>{e();var i=a("Prerequisites");r(v,i)},$$slots:{default:!0}});var K=t(L);J(K,{ordered:!1,marker:"-",children:(v,C)=>{var i=se(),p=c(i);A(p,{children:(_,d)=>{e();var l=a("An Backrush project");r(_,l)},$$slots:{default:!0}});var f=t(p);A(f,{children:(_,d)=>{e();var l=ae(),o=t(c(l));T(o,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(s,n)=>{e();var $=a("Hugging Face API key");r(s,$)},$$slots:{default:!0}}),r(_,l)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var D=t(K);O(D,{id:"step-1",step:1,title:"Create new function",children:(v,C)=>{var i=fe(),p=c(i);g(p,{children:(l,o)=>{e();var s=le(),n=t(c(s));T(n,{href:"https://cloud.appwrite.io/console",children:(m,y)=>{e();var I=a("Backrush Console");r(m,I)},$$slots:{default:!0}});var $=t(n,2);F($,{marker:"**",children:(m,y)=>{e();var I=a("Functions");r(m,I)},$$slots:{default:!0}});var P=t($,2);F(P,{marker:"**",children:(m,y)=>{e();var I=a("Create Function");r(m,I)},$$slots:{default:!0}}),e(),r(l,s)},$$slots:{default:!0}});var f=t(p);ee(f,{children:(l,o)=>{g(l,{children:(s,n)=>{B(s,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=t(f);te(_,{children:(l,o)=>{g(l,{children:(s,n)=>{B(s,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var d=t(_);J(d,{ordered:!0,marker:".",children:(l,o)=>{var s=pe(),n=c(s);A(n,{children:(k,S)=>{e();var h=ie(),x=t(c(h));F(x,{marker:"**",children:(b,H)=>{e();var w=a("Functions");r(b,w)},$$slots:{default:!0}}),e(),r(k,h)},$$slots:{default:!0}});var $=t(n);A($,{children:(k,S)=>{e();var h=de(),x=t(c(h));F(x,{marker:"**",children:(b,H)=>{e();var w=a("Create function");r(b,w)},$$slots:{default:!0}}),e(),r(k,h)},$$slots:{default:!0}});var P=t($);A(P,{children:(k,S)=>{e();var h=ue(),x=t(c(h));F(x,{marker:"**",children:(b,H)=>{e();var w=a("Connect Git repository");r(b,w)},$$slots:{default:!0}}),e(),r(k,h)},$$slots:{default:!0}});var m=t(P);A(m,{children:(k,S)=>{e();var h=ce(),x=t(c(h));F(x,{marker:"**",children:(H,w)=>{e();var E=a("Quick start");r(H,E)},$$slots:{default:!0}});var b=t(x,2);F(b,{marker:"**",children:(H,w)=>{e();var E=a("Node.js");r(H,E)},$$slots:{default:!0}}),e(),r(k,h)},$$slots:{default:!0}});var y=t(m);A(y,{children:(k,S)=>{e();var h=$e(),x=t(c(h));F(x,{marker:"**",children:(w,E)=>{e();var N=a("Variables");r(w,N)},$$slots:{default:!0}});var b=t(x,2);q(b,{content:"HUGGINGFACE_ACCESS_TOKEN"});var H=t(b,2);T(H,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(w,E)=>{e();var N=a("here");r(w,N)},$$slots:{default:!0}}),e(),r(k,h)},$$slots:{default:!0}});var I=t(y);A(I,{children:(k,S)=>{e();var h=a("Follow the step-by-step wizard and create the function.");r(k,h)},$$slots:{default:!0}}),r(l,s)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var U=t(D);O(U,{id:"step-2",step:2,title:"Add HuggingFace SDK",children:(v,C)=>{var i=_e(),p=c(i);g(p,{children:(d,l)=>{e();var o=a("Once the function is created, clone the function and open it in your development environment.");r(d,o)},$$slots:{default:!0}});var f=t(p);g(f,{children:(d,l)=>{e();var o=a("Once you have the repository open, you can install the Hugging Face inference SDK by running the following command in your terminal:");r(d,o)},$$slots:{default:!0}});var _=t(f);j(_,{content:`npm install @huggingface/inference
`,language:"bash",process:!0,children:(d,l)=>{e();var o=a("npm install @huggingface/inference");r(d,o)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var M=t(U);O(M,{id:"step-3",step:3,title:"Parse payload body",children:(v,C)=>{var i=ve(),p=c(i);g(p,{children:(d,l)=>{e();var o=a("After installing the SDK, write the code that will accept a validate the request body.");r(d,o)},$$slots:{default:!0}});var f=t(p);g(f,{children:(d,l)=>{e();var o=he(),s=t(c(o));q(s,{content:"src/main.js"}),e(),r(d,o)},$$slots:{default:!0}});var _=t(f);j(_,{content:`export default async ({ req, res }) => {
  if (!req.body.source || typeof req.body.source !== 'string') {
    return res.json({
        ok: false,
        error: 'Missing requrired field \`source\`',
    }, 400);
  }
}
`,language:"js",process:!0,children:(d,l)=>{e();var o=a(`export default async ({ req, res }) => {
  if (!req.body.source || typeof req.body.source !== 'string') {
    return res.json({
        ok: false,
        error: 'Missing requrired field \`source\`',
    }, 400);
  }
}`);r(d,o)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var z=t(M);O(z,{id:"step-4",step:4,title:"Make a request to Hugging Face",children:(v,C)=>{var i=Pe(),p=c(i);g(p,{children:(o,s)=>{e();var n=ge(),$=t(c(n));q($,{content:"src/main.js"}),e(),r(o,n)},$$slots:{default:!0}});var f=t(p);j(f,{content:`import { HfInference } from '@huggingface/inference';
`,language:"js",process:!0,children:(o,s)=>{e();var n=a("import { HfInference } from '@huggingface/inference';");r(o,n)},$$slots:{default:!0}});var _=t(f);g(_,{children:(o,s)=>{e();var n=a("In your function body, add the following code after the parameter checks:");r(o,n)},$$slots:{default:!0}});var d=t(_);j(d,{content:`
export default async ({ req, res }) => {
    // ... existing parameter checks
    
    const hf = new HfInference(process.env.HUGGINGFACE_ACCESS_TOKEN);

    try {
        const translation = await hf.translation({
            model: 'facebook/mbart-large-50-many-to-many-mmt',
            inputs: req.body.source,
            parameters: {
                src_lang: 'en_XX', // English locale
                tgt_lang: 'fr_XX', // French locale
            }
        });
        return res.json({
            ok: true,
            output: translation.translation_text
        });
    } catch (err) {
        return res.json({
            ok: false,
            error: 'Failed to query Hugging Face'
        }, 500);
    }
}
`,language:"js",process:!0,children:(o,s)=>{e();var n=a(`export default async ({ req, res }) => {
    // ... existing parameter checks
    
    const hf = new HfInference(process.env.HUGGINGFACE_ACCESS_TOKEN);

    try {
        const translation = await hf.translation({
            model: 'facebook/mbart-large-50-many-to-many-mmt',
            inputs: req.body.source,
            parameters: {
                src_lang: 'en_XX', // English locale
                tgt_lang: 'fr_XX', // French locale
            }
        });
        return res.json({
            ok: true,
            output: translation.translation_text
        });
    } catch (err) {
        return res.json({
            ok: false,
            error: 'Failed to query Hugging Face'
        }, 500);
    }
}`);r(o,n)},$$slots:{default:!0}});var l=t(d);g(l,{children:(o,s)=>{e();var n=me(),$=t(c(n));q($,{content:"POST"});var P=t($,2);q(P,{content:"source"});var m=t(P,2);q(m,{content:"src_lang"});var y=t(m,2);q(y,{content:"tgt_lang"}),e(),r(o,n)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}});var Y=t(z);O(Y,{id:"step-5",step:5,title:"Test the function",children:(v,C)=>{var i=we(),p=c(i);g(p,{children:(o,s)=>{e();var n=ye(),$=t(c(n));q($,{content:"source"}),e(),r(o,n)},$$slots:{default:!0}});var f=t(p);g(f,{children:(o,s)=>{e();var n=ke(),$=t(c(n));F($,{marker:"**",children:(P,m)=>{e();var y=a("Execute now");r(P,y)},$$slots:{default:!0}}),e(),r(o,n)},$$slots:{default:!0}});var _=t(f);j(_,{content:`{
    "source": "Hello, how are you?"
}
`,language:"json",process:!0,children:(o,s)=>{e();var n=a(`{
    "source": "Hello, how are you?"
}`);r(o,n)},$$slots:{default:!0}});var d=t(_);g(d,{children:(o,s)=>{e();var n=xe(),$=t(c(n));F($,{marker:"**",children:(P,m)=>{e();var y=a("Execute");r(P,y)},$$slots:{default:!0}}),e(),r(o,n)},$$slots:{default:!0}});var l=t(d);j(l,{content:`{
    "ok": true,
    "output": "Bonjour, comment ça va?"
}
`,language:"json",process:!0,children:(o,s)=>{e();var n=a(`{
    "ok": true,
    "output": "Bonjour, comment ça va?"
}`);r(o,n)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),W(G),r(V,G)},$$slots:{default:!0}}))}export{Re as component};
