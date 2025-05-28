import{t as p,b as i,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as re,s as t,f as u,n as e,r as oe}from"../chunks/NgVQVlRK.js";import{n as ne}from"../chunks/B4IyMRKX.js";import{S as T}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as Q,a as V}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as j}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as E}from"../chunks/DXp9_3zM.js";import{F as D}from"../chunks/OFUKRh55.js";import{H as ae}from"../chunks/CXsRaEhZ.js";import{L as X,I as S}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as I}from"../chunks/yHjwcyUH.js";import{L as q}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as se}from"../chunks/CqOphJLh.js";const ie={layout:"article",title:"Music generation with Hugging Face",description:"Learn how to integrate Hugging Face into your Backrush project for music generation.",difficulty:"intermediate",readtime:15};var le=p("A <!>",1),de=p("<!><!>",1),ce=p("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),pe=p("In the Backrush Console&#39;s sidebar, click <!>.",1),ue=p("Click <!>.",1),$e=p("Under <!>, select your provider.",1),fe=p("After connecting to GitHub, under <!>, select the <!> starter template.",1),he=p("In the <!> step, add the <!>, generate it <!>. For the <!>, tick the box to <!>.",1),ve=p("<!><!><!><!><!><!>",1),_e=p("<!><!><!><!>",1),me=p("Install the <!> package (global <!> is not available in Node.js 16) to make requests to the Hugging Face API. Install the <!> package, to simplify uploading the generated audio file to Backrush Storage.",1),ge=p("<!><!><!>",1),Pe=p("Create a file called <!> and implement the following class:",1),we=p("<!><!><!>",1),be=p("In order for this function to work, create a new bucket in the Backrush Storage. You can do this by navigating to the Backrush Console and clicking on <!> in the left sidebar, then clicking on the <!> button.",1),Ie=p("<!><!><!><!>",1),ke=p("In <!>, add the function to convert text to speech using the Hugging Face API.",1),Ae=p("<!><!><!>",1),xe=p("Test the function by sending a POST request to the function&#39;s endpoint with a JSON body containing the <!> parameter.",1),Ce=p("Navigate to your function in the Backrush Console and click on <!>. In the modal that appears, enter the following JSON body:",1),ye=p("Click <!> and you should see a response similar to the following:",1),Ee=p("Use the <!> to download the generated audio file from the Backrush Storage. Here&#39;s an example of music generated from the prompt above:",1),Fe=p("<!><!><!><!><!><!><!>",1),Se=p("<article><!><!><!><!><!><!><!><!><!></article>");function ot(Z){se(Z,ne(ie,{children:(ee,Te)=>{var U=Se(),R=re(U);h(R,{children:(g,F)=>{e();var d=i('Hugging Face is a platform that hosts ML models for all types of applications, including music generation. This example uses the "facebook/musicgen-large" from Hugging Face to convert text to music, but the same concept can be applied to other models.');r(g,d)},$$slots:{default:!0}});var K=t(R);ae(K,{id:"prerequisites",level:1,children:(g,F)=>{e();var d=i("Prerequisites");r(g,d)},$$slots:{default:!0}});var W=t(K);X(W,{ordered:!1,marker:"-",children:(g,F)=>{var d=de(),$=u(d);S($,{children:(v,l)=>{e();var n=i("An Backrush project");r(v,n)},$$slots:{default:!0}});var f=t($);S(f,{children:(v,l)=>{e();var n=le(),o=t(u(n));q(o,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(s,a)=>{e();var _=i("Hugging Face API keys");r(s,_)},$$slots:{default:!0}}),r(v,n)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var B=t(W);T(B,{id:"step-1",step:1,title:"Create new function",children:(g,F)=>{var d=_e(),$=u(d);h($,{children:(n,o)=>{e();var s=ce(),a=t(u(s));q(a,{href:"https://cloud.appwrite.io/console",children:(m,b)=>{e();var C=i("Backrush Console");r(m,C)},$$slots:{default:!0}});var _=t(a,2);I(_,{marker:"**",children:(m,b)=>{e();var C=i("Functions");r(m,C)},$$slots:{default:!0}});var c=t(_,2);I(c,{marker:"**",children:(m,b)=>{e();var C=i("Create Function");r(m,C)},$$slots:{default:!0}}),e(),r(n,s)},$$slots:{default:!0}});var f=t($);Q(f,{children:(n,o)=>{h(n,{children:(s,a)=>{j(s,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var v=t(f);V(v,{children:(n,o)=>{h(n,{children:(s,a)=>{j(s,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var l=t(v);X(l,{ordered:!0,marker:".",children:(n,o)=>{var s=ve(),a=u(s);S(a,{children:(w,N)=>{e();var P=pe(),k=t(u(P));I(k,{marker:"**",children:(A,y)=>{e();var x=i("Functions");r(A,x)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var _=t(a);S(_,{children:(w,N)=>{e();var P=ue(),k=t(u(P));I(k,{marker:"**",children:(A,y)=>{e();var x=i("Create function");r(A,x)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var c=t(_);S(c,{children:(w,N)=>{e();var P=$e(),k=t(u(P));I(k,{marker:"**",children:(A,y)=>{e();var x=i("Connect Git repository");r(A,x)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var m=t(c);S(m,{children:(w,N)=>{e();var P=fe(),k=t(u(P));I(k,{marker:"**",children:(y,x)=>{e();var G=i("Quick start");r(y,G)},$$slots:{default:!0}});var A=t(k,2);I(A,{marker:"**",children:(y,x)=>{e();var G=i("Node.js");r(y,G)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var b=t(m);S(b,{children:(w,N)=>{e();var P=he(),k=t(u(P));I(k,{marker:"**",children:(O,z)=>{e();var H=i("Variables");r(O,H)},$$slots:{default:!0}});var A=t(k,2);E(A,{content:"HUGGINGFACE_ACCESS_TOKEN"});var y=t(A,2);q(y,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(O,z)=>{e();var H=i("here");r(O,H)},$$slots:{default:!0}});var x=t(y,2);E(x,{content:"APPWRITE_API_KEY"});var G=t(x,2);I(G,{marker:"**",children:(O,z)=>{e();var H=i("Generate API key on completion");r(O,H)},$$slots:{default:!0}}),e(),r(w,P)},$$slots:{default:!0}});var C=t(b);S(C,{children:(w,N)=>{e();var P=i("Follow the step-by-step wizard and create the function.");r(w,P)},$$slots:{default:!0}}),r(n,s)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var L=t(B);T(L,{id:"step-2",step:2,title:"Add dependencies",children:(g,F)=>{var d=ge(),$=u(d);h($,{children:(l,n)=>{e();var o=i("Once the function is created, clone the function and open it in your development environment.");r(l,o)},$$slots:{default:!0}});var f=t($);h(f,{children:(l,n)=>{e();var o=me(),s=t(u(o));E(s,{content:"undici"});var a=t(s,2);E(a,{content:"fetch"});var _=t(a,2);E(_,{content:"node-appwrite"}),e(),r(l,o)},$$slots:{default:!0}});var v=t(f);D(v,{content:`npm install undici node-appwrite
`,language:"bash",process:!0,children:(l,n)=>{e();var o=i("npm install undici node-appwrite");r(l,o)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var J=t(L);T(J,{id:"step-4",step:4,title:"Create an Backrush service",children:(g,F)=>{var d=we(),$=u(d);h($,{children:(l,n)=>{e();var o=i("The function will interact with Backrush to store the generated audio files and the text-to-speech data. To make this easier, create a service class that will handle all the Backrush interactions.");r(l,o)},$$slots:{default:!0}});var f=t($);h(f,{children:(l,n)=>{e();var o=Pe(),s=t(u(o));E(s,{content:"src/appwrite.js"}),e(),r(l,o)},$$slots:{default:!0}});var v=t(f);D(v,{content:`import { Client, ID, InputFile, Storage } from 'node-appwrite';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.APPWRITE_ENDPOINT ?? 'https://<REGION>.cloud.appwrite.io/v1'
      )
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    this.databases = new Databases(client);
    this.storage = new Storage(client);
  }

  async createFile(bucketId, blob) {
    const file = await InputFile.fromBuffer(blob, 'audio.flac');
    return await this.storage.createFile(bucketId, ID.unique(), file);
  }
}

export default BackrushService;
`,language:"js",process:!0,children:(l,n)=>{e();var o=i(`import { Client, ID, InputFile, Storage } from 'node-appwrite';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.APPWRITE_ENDPOINT ?? 'https://<REGION>.cloud.appwrite.io/v1'
      )
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    this.databases = new Databases(client);
    this.storage = new Storage(client);
  }

  async createFile(bucketId, blob) {
    const file = await InputFile.fromBuffer(blob, 'audio.flac');
    return await this.storage.createFile(bucketId, ID.unique(), file);
  }
}

export default BackrushService;`);r(l,o)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var M=t(J);T(M,{id:"step-5",step:5,title:"Create Storage bucket",children:(g,F)=>{var d=Ie(),$=u(d);h($,{children:(n,o)=>{e();var s=be(),a=t(u(s));I(a,{marker:"**",children:(c,m)=>{e();var b=i("Storage");r(c,b)},$$slots:{default:!0}});var _=t(a,2);I(_,{marker:"**",children:(c,m)=>{e();var b=i("Create Bucket");r(c,b)},$$slots:{default:!0}}),e(),r(n,s)},$$slots:{default:!0}});var f=t($);Q(f,{children:(n,o)=>{h(n,{children:(s,a)=>{j(s,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var v=t(f);V(v,{children:(n,o)=>{h(n,{children:(s,a)=>{j(s,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var l=t(v);h(l,{children:(n,o)=>{e();var s=i("Use the default configuration for the bucket. Make sure to note down the bucket ID so you can add it as an environment variable later.");r(n,s)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var Y=t(M);T(Y,{id:"step-6",step:6,title:"Integrate with Hugging Face",children:(g,F)=>{var d=Ae(),$=u(d);h($,{children:(l,n)=>{e();var o=ke(),s=t(u(o));E(s,{content:"src/main.js"}),e(),r(l,o)},$$slots:{default:!0}});var f=t($);D(f,{content:`import { fetch } from 'undici';
import { throwIfMissing } from './utils.js';
import BackrushService from './appwrite.js';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co';

export default async ({ req, res, error }) => {
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'generated_music';

  const response = await fetch(
    \`\${HUGGINGFACE_API}/models/facebook/musicgen-small\`,
    {
      headers: {
        Authorization: \`Bearer \${process.env.HUGGINGFACE_ACCESS_TOKEN}\`,
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: req.body.prompt,
      }),
    }
  );

  const blob = await response.blob();
  const appwrite = new BackrushService();
  const file = await appwrite.createFile(bucketId, blob);

  return res.json({
    ok: true,
    fileId: file.$id,
  });
};
`,language:"js",process:!0,children:(l,n)=>{e();var o=i(`import { fetch } from 'undici';
import { throwIfMissing } from './utils.js';
import BackrushService from './appwrite.js';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co';

export default async ({ req, res, error }) => {
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'generated_music';

  const response = await fetch(
    \`\${HUGGINGFACE_API}/models/facebook/musicgen-small\`,
    {
      headers: {
        Authorization: \`Bearer \${process.env.HUGGINGFACE_ACCESS_TOKEN}\`,
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: req.body.prompt,
      }),
    }
  );

  const blob = await response.blob();
  const appwrite = new BackrushService();
  const file = await appwrite.createFile(bucketId, blob);

  return res.json({
    ok: true,
    fileId: file.$id,
  });
};`);r(l,o)},$$slots:{default:!0}});var v=t(f);h(v,{children:(l,n)=>{e();var o=i("This Backrush Function checks if the required environment variables are set, then processes the text using the Hugging Face API, stores the generated audio file in Backrush Storage.");r(l,o)},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}});var te=t(Y);T(te,{id:"step-7",step:7,title:"Test the function",children:(g,F)=>{var d=Fe(),$=u(d);h($,{children:(a,_)=>{e();var c=xe(),m=t(u(c));E(m,{content:"prompt"}),e(),r(a,c)},$$slots:{default:!0}});var f=t($);h(f,{children:(a,_)=>{e();var c=Ce(),m=t(u(c));I(m,{marker:"**",children:(b,C)=>{e();var w=i("Execute now");r(b,w)},$$slots:{default:!0}}),e(),r(a,c)},$$slots:{default:!0}});var v=t(f);D(v,{content:`{
    "prompt": "A happy tune, with a fast tempo, in the key of C major"
}
`,language:"json",process:!0,children:(a,_)=>{e();var c=i(`{
    "prompt": "A happy tune, with a fast tempo, in the key of C major"
}`);r(a,c)},$$slots:{default:!0}});var l=t(v);h(l,{children:(a,_)=>{e();var c=ye(),m=t(u(c));I(m,{marker:"**",children:(b,C)=>{e();var w=i("Execute");r(b,w)},$$slots:{default:!0}}),e(),r(a,c)},$$slots:{default:!0}});var n=t(l);D(n,{content:`{
    "ok": true,
    "fileId": "61f7b3b3c7b7d"
}
`,language:"json",process:!0,children:(a,_)=>{e();var c=i(`{
    "ok": true,
    "fileId": "61f7b3b3c7b7d"
}`);r(a,c)},$$slots:{default:!0}});var o=t(n);h(o,{children:(a,_)=>{e();var c=Ee(),m=t(u(c));E(m,{content:"fileId"}),e(),r(a,c)},$$slots:{default:!0}});var s=t(o);h(s,{children:(a,_)=>{j(a,{src:"/audio/docs/ai/tutorials/music-generation/generated-music.wav",alt:"Audio of generated music"})},$$slots:{default:!0}}),r(g,d)},$$slots:{default:!0}}),oe(U),r(ee,U)},$$slots:{default:!0}}))}export{ot as component};
