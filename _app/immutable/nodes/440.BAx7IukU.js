import{t as c,b as a,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as re,s as t,f as u,n as e,r as oe}from"../chunks/NgVQVlRK.js";import{n as ne}from"../chunks/B4IyMRKX.js";import{S as T}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as Q,a as V}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as q}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as F}from"../chunks/DXp9_3zM.js";import{F as O}from"../chunks/OFUKRh55.js";import{H as se}from"../chunks/CXsRaEhZ.js";import{L as X,I as S}from"../chunks/BhmTgGWB.js";import{P as v}from"../chunks/D8YsId2T.js";import{S as w}from"../chunks/yHjwcyUH.js";import{L as U}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ae}from"../chunks/CqOphJLh.js";const ie={layout:"article",title:"Text to Speech with Hugging Face",description:"Learn how to integrate Hugging Face into your Backrush project for text to speech processing.",difficulty:"intermediate",readtime:15};var le=c("A <!>",1),de=c("<!><!>",1),ce=c("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),pe=c("In the Backrush Console&#39;s sidebar, click <!>.",1),ue=c("Click <!>.",1),$e=c("Under <!>, select your provider.",1),fe=c("After connecting to GitHub, under <!>, select the <!> starter template.",1),he=c("In the <!> step, add the <!>, generate it <!>. For the <!>, tick the box to <!>.",1),ve=c("<!><!><!><!><!><!>",1),_e=c("<!><!><!><!>",1),ge=c("Install the <!> package (global <!> is not available in Node.js 16) to make requests to the Hugging Face API. Install the <!> package, to simplify uploading the generated audio file to Backrush Storage.",1),me=c("<!><!><!>",1),Pe=c("Create a file called <!> and implement the following class:",1),we=c("<!><!><!>",1),be=c("In order for this function to work, create a new bucket in the Backrush Storage. You can do this by navigating to the Backrush Console and clicking on <!> in the left sidebar, then clicking on the <!> button.",1),Ie=c("<!><!><!><!>",1),ke=c("in <!> implement the following function to convert text to speech using the Hugging Face API.",1),xe=c("<!><!><!>",1),Ae=c("Test the function by sending a POST request to the function&#39;s endpoint with a JSON body containing the <!> parameter.",1),Ce=c("Navigate to your function in the Backrush Console and click on <!>. In the modal that appears, enter the following JSON body:",1),ye=c("Click <!> and you should see a response similar to the following:",1),Ee=c("<!><!><!><!><!><!>",1),Fe=c("<article><!><!><!><!><!><!><!><!><!></article>");function rt(Z){ae(Z,ne(ie,{children:(ee,Se)=>{var R=Fe(),D=re(R);v(D,{children:(_,E)=>{e();var d=a('Hugging Face is a platform that hosts ML models for all types of applications, including text to speech. This example uses the "ESPnet2 TTS pretrained model" from Hugging Face to convert text to speech, but the same concept can be applied to other models.');r(_,d)},$$slots:{default:!0}});var K=t(D);se(K,{id:"prerequisites",level:1,children:(_,E)=>{e();var d=a("Prerequisites");r(_,d)},$$slots:{default:!0}});var W=t(K);X(W,{ordered:!1,marker:"-",children:(_,E)=>{var d=de(),$=u(d);S($,{children:(h,i)=>{e();var n=a("An Backrush project");r(h,n)},$$slots:{default:!0}});var f=t($);S(f,{children:(h,i)=>{e();var n=le(),s=t(u(n));U(s,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(o,p)=>{e();var l=a("Hugging Face API keys");r(o,l)},$$slots:{default:!0}}),r(h,n)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var B=t(W);T(B,{id:"step-1",step:1,title:"Create new function",children:(_,E)=>{var d=_e(),$=u(d);v($,{children:(n,s)=>{e();var o=ce(),p=t(u(o));U(p,{href:"https://cloud.appwrite.io/console",children:(P,b)=>{e();var I=a("Backrush Console");r(P,I)},$$slots:{default:!0}});var l=t(p,2);w(l,{marker:"**",children:(P,b)=>{e();var I=a("Functions");r(P,I)},$$slots:{default:!0}});var m=t(l,2);w(m,{marker:"**",children:(P,b)=>{e();var I=a("Create Function");r(P,I)},$$slots:{default:!0}}),e(),r(n,o)},$$slots:{default:!0}});var f=t($);Q(f,{children:(n,s)=>{v(n,{children:(o,p)=>{q(o,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var h=t(f);V(h,{children:(n,s)=>{v(n,{children:(o,p)=>{q(o,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var i=t(h);X(i,{ordered:!0,marker:".",children:(n,s)=>{var o=ve(),p=u(o);S(p,{children:(k,N)=>{e();var g=pe(),x=t(u(g));w(x,{marker:"**",children:(A,y)=>{e();var C=a("Functions");r(A,C)},$$slots:{default:!0}}),e(),r(k,g)},$$slots:{default:!0}});var l=t(p);S(l,{children:(k,N)=>{e();var g=ue(),x=t(u(g));w(x,{marker:"**",children:(A,y)=>{e();var C=a("Create function");r(A,C)},$$slots:{default:!0}}),e(),r(k,g)},$$slots:{default:!0}});var m=t(l);S(m,{children:(k,N)=>{e();var g=$e(),x=t(u(g));w(x,{marker:"**",children:(A,y)=>{e();var C=a("Connect Git repository");r(A,C)},$$slots:{default:!0}}),e(),r(k,g)},$$slots:{default:!0}});var P=t(m);S(P,{children:(k,N)=>{e();var g=fe(),x=t(u(g));w(x,{marker:"**",children:(y,C)=>{e();var G=a("Quick start");r(y,G)},$$slots:{default:!0}});var A=t(x,2);w(A,{marker:"**",children:(y,C)=>{e();var G=a("Node.js");r(y,G)},$$slots:{default:!0}}),e(),r(k,g)},$$slots:{default:!0}});var b=t(P);S(b,{children:(k,N)=>{e();var g=he(),x=t(u(g));w(x,{marker:"**",children:(j,z)=>{e();var H=a("Variables");r(j,H)},$$slots:{default:!0}});var A=t(x,2);F(A,{content:"HUGGINGFACE_ACCESS_TOKEN"});var y=t(A,2);U(y,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(j,z)=>{e();var H=a("here");r(j,H)},$$slots:{default:!0}});var C=t(y,2);F(C,{content:"APPWRITE_API_KEY"});var G=t(C,2);w(G,{marker:"**",children:(j,z)=>{e();var H=a("Generate API key on completion");r(j,H)},$$slots:{default:!0}}),e(),r(k,g)},$$slots:{default:!0}});var I=t(b);S(I,{children:(k,N)=>{e();var g=a("Follow the step-by-step wizard and create the function.");r(k,g)},$$slots:{default:!0}}),r(n,o)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var L=t(B);T(L,{id:"step-2",step:2,title:"Add dependencies",children:(_,E)=>{var d=me(),$=u(d);v($,{children:(i,n)=>{e();var s=a("Once the function is created, clone the function and open it in your development environment.");r(i,s)},$$slots:{default:!0}});var f=t($);v(f,{children:(i,n)=>{e();var s=ge(),o=t(u(s));F(o,{content:"undici"});var p=t(o,2);F(p,{content:"fetch"});var l=t(p,2);F(l,{content:"node-appwrite"}),e(),r(i,s)},$$slots:{default:!0}});var h=t(f);O(h,{content:`npm install undici node-appwrite
`,language:"bash",process:!0,children:(i,n)=>{e();var s=a("npm install undici node-appwrite");r(i,s)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var J=t(L);T(J,{id:"step-4",step:4,title:"Create an Backrush service",children:(_,E)=>{var d=we(),$=u(d);v($,{children:(i,n)=>{e();var s=a("The function will interact with Backrush to store the generated audio files and the text-to-speech data. To make this easier, create a service class that will handle all the Backrush interactions.");r(i,s)},$$slots:{default:!0}});var f=t($);v(f,{children:(i,n)=>{e();var s=Pe(),o=t(u(s));F(o,{content:"src/appwrite.js"}),e(),r(i,s)},$$slots:{default:!0}});var h=t(f);O(h,{content:`import { Client, ID, InputFile, Storage } from 'node-appwrite';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.APPWRITE_ENDPOINT ?? 'https://<REGION>.cloud.appwrite.io/v1'
      )
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    this.storage = new Storage(client);
  }

  async createFile(bucketId, blob) {
    const file = await InputFile.fromBuffer(blob, 'audio.flac');
    return await this.storage.createFile(bucketId, ID.unique(), file);
  }
}

export default BackrushService;
`,language:"js",process:!0,children:(i,n)=>{e();var s=a(`import { Client, ID, InputFile, Storage } from 'node-appwrite';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.APPWRITE_ENDPOINT ?? 'https://<REGION>.cloud.appwrite.io/v1'
      )
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    this.storage = new Storage(client);
  }

  async createFile(bucketId, blob) {
    const file = await InputFile.fromBuffer(blob, 'audio.flac');
    return await this.storage.createFile(bucketId, ID.unique(), file);
  }
}

export default BackrushService;`);r(i,s)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var M=t(J);T(M,{id:"step-5",step:5,title:"Create Storage bucket",children:(_,E)=>{var d=Ie(),$=u(d);v($,{children:(n,s)=>{e();var o=be(),p=t(u(o));w(p,{marker:"**",children:(m,P)=>{e();var b=a("Storage");r(m,b)},$$slots:{default:!0}});var l=t(p,2);w(l,{marker:"**",children:(m,P)=>{e();var b=a("Create Bucket");r(m,b)},$$slots:{default:!0}}),e(),r(n,o)},$$slots:{default:!0}});var f=t($);Q(f,{children:(n,s)=>{v(n,{children:(o,p)=>{q(o,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var h=t(f);V(h,{children:(n,s)=>{v(n,{children:(o,p)=>{q(o,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var i=t(h);v(i,{children:(n,s)=>{e();var o=a("Use the default configuration for the bucket. Make sure to note down the bucket ID so you can add it as an environment variable later.");r(n,o)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var Y=t(M);T(Y,{id:"step-6",step:6,title:"Integrate with Hugging Face",children:(_,E)=>{var d=xe(),$=u(d);v($,{children:(i,n)=>{e();var s=ke(),o=t(u(s));F(o,{content:"src/main.js"}),e(),r(i,s)},$$slots:{default:!0}});var f=t($);O(f,{content:`import fetch from 'node-fetch';
import { throwIfMissing } from './utils.js';
import BackrushService from './appwrite.js';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co';

export default async ({ req, res, error }) => {
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'generated_speech';

  if (!req.body.text || typeof req.body.text !== 'string') {
    return res.json({ ok: false, error: 'Missing required field \`text\`' }, 400);
  }

  const response = await fetch(
    \`\${HUGGINGFACE_API}/models/espnet/kan-bayashi_ljspeech_vits\`,
    {
      headers: {
        Authorization: \`Bearer \${process.env.HUGGINGFACE_ACCESS_TOKEN}\`,
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: req.body.text,
      }),
    }
  );

  if (!response.ok) {
    error(await response.text());
    return res.json({ ok: false, error: 'Failed to process text' }, 500);
  }

  const blob = await response.blob();
  const appwrite = new BackrushService();
  const file = await appwrite.createFile(bucketId, blob);

  return res.json({
    ok: true,
    fileId: file.$id,
  });
};
`,language:"js",process:!0,children:(i,n)=>{e();var s=a(`import fetch from 'node-fetch';
import { throwIfMissing } from './utils.js';
import BackrushService from './appwrite.js';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co';

export default async ({ req, res, error }) => {
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'generated_speech';

  if (!req.body.text || typeof req.body.text !== 'string') {
    return res.json({ ok: false, error: 'Missing required field \`text\`' }, 400);
  }

  const response = await fetch(
    \`\${HUGGINGFACE_API}/models/espnet/kan-bayashi_ljspeech_vits\`,
    {
      headers: {
        Authorization: \`Bearer \${process.env.HUGGINGFACE_ACCESS_TOKEN}\`,
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: req.body.text,
      }),
    }
  );

  if (!response.ok) {
    error(await response.text());
    return res.json({ ok: false, error: 'Failed to process text' }, 500);
  }

  const blob = await response.blob();
  const appwrite = new BackrushService();
  const file = await appwrite.createFile(bucketId, blob);

  return res.json({
    ok: true,
    fileId: file.$id,
  });
};`);r(i,s)},$$slots:{default:!0}});var h=t(f);v(h,{children:(i,n)=>{e();var s=a("This Backrush Function checks if the required environment variables are set, then processes the text using the Hugging Face API, stores the generated audio file in Backrush Storage, and creates a document in the Backrush database of the original text.");r(i,s)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}});var te=t(Y);T(te,{id:"step-7",step:7,title:"Test the function",children:(_,E)=>{var d=Ee(),$=u(d);v($,{children:(o,p)=>{e();var l=Ae(),m=t(u(l));F(m,{content:"text"}),e(),r(o,l)},$$slots:{default:!0}});var f=t($);v(f,{children:(o,p)=>{e();var l=Ce(),m=t(u(l));w(m,{marker:"**",children:(P,b)=>{e();var I=a("Execute now");r(P,I)},$$slots:{default:!0}}),e(),r(o,l)},$$slots:{default:!0}});var h=t(f);O(h,{content:`{
    "text": "Hello, world!"
}
`,language:"json",process:!0,children:(o,p)=>{e();var l=a(`{
    "text": "Hello, world!"
}`);r(o,l)},$$slots:{default:!0}});var i=t(h);v(i,{children:(o,p)=>{e();var l=ye(),m=t(u(l));w(m,{marker:"**",children:(P,b)=>{e();var I=a("Execute");r(P,I)},$$slots:{default:!0}}),e(),r(o,l)},$$slots:{default:!0}});var n=t(i);O(n,{content:`{
    "ok": true,
    "fileId": "61f7b3b3c7b7d"
}
`,language:"json",process:!0,children:(o,p)=>{e();var l=a(`{
    "ok": true,
    "fileId": "61f7b3b3c7b7d"
}`);r(o,l)},$$slots:{default:!0}});var s=t(n);v(s,{children:(o,p)=>{e();var l=a("Then, use the fileId to download the generated audio file from the Backrush Storage.");r(o,l)},$$slots:{default:!0}}),r(_,d)},$$slots:{default:!0}}),oe(R),r(ee,R)},$$slots:{default:!0}}))}export{rt as component};
