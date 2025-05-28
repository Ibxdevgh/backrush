import{t as i,a as e,b as a}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f as c,c as le,n as r,r as ie}from"../chunks/NgVQVlRK.js";import{n as de}from"../chunks/B4IyMRKX.js";import{S as j}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as B,a as L}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as G}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as H}from"../chunks/DXp9_3zM.js";import{F as U}from"../chunks/OFUKRh55.js";import{H as ce}from"../chunks/CXsRaEhZ.js";import{L as oe,I as O}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as F}from"../chunks/yHjwcyUH.js";import{L as Y}from"../chunks/yh4_9ChP.js";import{T as $e}from"../chunks/D8BqvLkQ.js";import{T as pe,a as z,b as W,c as ue,d as R}from"../chunks/BpU_IltG.js";import{A as fe}from"../chunks/CqOphJLh.js";const ve={layout:"article",title:"Speech recognition with Hugging Face",description:"Implement speech recognition into your app with Backrush and Hugging Face.",difficulty:"intermediate",readtime:15};var he=i("Hugging Face is a platform that hosts ML models for all types of applications, including for speech recognition. This example uses the <!> from Hugging Face to perform speech recognition.",1),_e=i("A <!>",1),ge=i("<!><!>",1),me=i("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),Pe=i("In the Backrush Console&#39;s sidebar, click <!>.",1),Ie=i("Click <!>.",1),we=i("Under <!>, select your provider.",1),be=i("After connecting to GitHub, under <!>, select the <!> starter template.",1),xe=i("In the <!> step, add the <!>, generate it <!>.",1),Ae=i("<!><!><!><!><!><!>",1),ke=i("<!><!><!><!>",1),Te=i("<!><!><!>",1),Ce=i("Create a file called <!> and implement the following class:",1),ye=i("The constructor initializes the Backrush client and the database and storage services. This <!> method creates a document in the Backrush database with the audio and speech recognition text. This <!> method retrieves a file from Backrush Storage.",1),Ee=i("<!><!><!><!>",1),Se=i("In order for this function to work, create a new bucket in the Backrush Storage. You can do this by navigating to the Backrush Console and clicking on <!> in the left sidebar, then clicking on the <!> button.",1),De=i("<!><!><!><!>",1),Fe=i("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button, and name it, for example <!>. Once you&#39;ve created the database, click on the <!> button and create a new collection, and name it, for example <!>.",1),Re=i("<!><!><!><!><!>",1),qe=i("<!><!><!><!><!>",1),Ne=i("<!><!><!><!><!>",1),He=i("<!><!>",1),Oe=i("<!><!>",1),je=i("<!><!><!><!>",1),Ge=i("In <!> implement the following function to convert speech to a text transcript using the Hugging Face API.",1),We=i("<!><!><!>",1),Ke=i("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button and upload an image. After a few seconds, you should see an execution appear in the function&#39;s execution logs and the classification result should be saved to the Backrush Database.",1),Be=i("<!><!><!><!>",1),Le=i("<article><!><!><!><!><!><!><!><!><!><!></article>");function ft(ne){fe(ne,de(ve,{children:(ae,Ue)=>{var K=Le(),J=le(K);h(J,{children:(P,q)=>{r();var d=he(),p=t(c(d));H(p,{content:"openai/whisper-large-v3"}),r(),e(P,d)},$$slots:{default:!0}});var M=t(J);ce(M,{id:"prerequisites",level:1,children:(P,q)=>{r();var d=a("Prerequisites");e(P,d)},$$slots:{default:!0}});var Q=t(M);oe(Q,{ordered:!1,marker:"-",children:(P,q)=>{var d=ge(),p=c(d);O(p,{children:(v,u)=>{r();var n=a("An Backrush project");e(v,n)},$$slots:{default:!0}});var f=t(p);O(f,{children:(v,u)=>{r();var n=_e(),s=t(c(n));Y(s,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(o,l)=>{r();var k=a("Hugging Face API key");e(o,k)},$$slots:{default:!0}}),e(v,n)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var V=t(Q);j(V,{id:"step-1",step:1,title:"Create new function",children:(P,q)=>{var d=ke(),p=c(d);h(p,{children:(n,s)=>{r();var o=me(),l=t(c(o));Y(l,{href:"https://cloud.appwrite.io/console",children:(C,g)=>{r();var y=a("Backrush Console");e(C,y)},$$slots:{default:!0}});var k=t(l,2);F(k,{marker:"**",children:(C,g)=>{r();var y=a("Functions");e(C,y)},$$slots:{default:!0}});var I=t(k,2);F(I,{marker:"**",children:(C,g)=>{r();var y=a("Create Function");e(C,y)},$$slots:{default:!0}}),r(),e(n,o)},$$slots:{default:!0}});var f=t(p);B(f,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var v=t(f);L(v,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var u=t(v);oe(u,{ordered:!0,marker:".",children:(n,s)=>{var o=Ae(),l=c(o);O(l,{children:(w,T)=>{r();var _=Pe(),m=t(c(_));F(m,{marker:"**",children:(b,S)=>{r();var $=a("Functions");e(b,$)},$$slots:{default:!0}}),r(),e(w,_)},$$slots:{default:!0}});var k=t(l);O(k,{children:(w,T)=>{r();var _=Ie(),m=t(c(_));F(m,{marker:"**",children:(b,S)=>{r();var $=a("Create function");e(b,$)},$$slots:{default:!0}}),r(),e(w,_)},$$slots:{default:!0}});var I=t(k);O(I,{children:(w,T)=>{r();var _=we(),m=t(c(_));F(m,{marker:"**",children:(b,S)=>{r();var $=a("Connect Git repository");e(b,$)},$$slots:{default:!0}}),r(),e(w,_)},$$slots:{default:!0}});var C=t(I);O(C,{children:(w,T)=>{r();var _=be(),m=t(c(_));F(m,{marker:"**",children:(S,$)=>{r();var D=a("Quick start");e(S,D)},$$slots:{default:!0}});var b=t(m,2);F(b,{marker:"**",children:(S,$)=>{r();var D=a("Node.js");e(S,D)},$$slots:{default:!0}}),r(),e(w,_)},$$slots:{default:!0}});var g=t(C);O(g,{children:(w,T)=>{r();var _=xe(),m=t(c(_));F(m,{marker:"**",children:($,D)=>{r();var E=a("Variables");e($,E)},$$slots:{default:!0}});var b=t(m,2);H(b,{content:"HUGGINGFACE_ACCESS_TOKEN"});var S=t(b,2);Y(S,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:($,D)=>{r();var E=a("here");e($,E)},$$slots:{default:!0}}),r(),e(w,_)},$$slots:{default:!0}});var y=t(g);O(y,{children:(w,T)=>{r();var _=a("Follow the step-by-step wizard and create the function.");e(w,_)},$$slots:{default:!0}}),e(n,o)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var X=t(V);j(X,{id:"step-2",step:2,title:"Add dependencies",children:(P,q)=>{var d=Te(),p=c(d);h(p,{children:(u,n)=>{r();var s=a("Once the function is created, clone the function and open it in your development environment.");e(u,s)},$$slots:{default:!0}});var f=t(p);h(f,{children:(u,n)=>{r();var s=a("Install the Hugging Face SDK and the Backrush Node.js SDK so we can upload the generated audio file to Backrush Storage.");e(u,s)},$$slots:{default:!0}});var v=t(f);U(v,{content:`npm install @huggingface/inference node-appwrite
`,language:"bash",process:!0,children:(u,n)=>{r();var s=a("npm install @huggingface/inference node-appwrite");e(u,s)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var Z=t(X);j(Z,{id:"step-3",step:3,title:"Create an Backrush service",children:(P,q)=>{var d=Ee(),p=c(d);h(p,{children:(n,s)=>{r();var o=a("The function will interact with Backrush to store the original audio and generated text transcript. To make this easier, create a service class that will handle all the Backrush interactions.");e(n,o)},$$slots:{default:!0}});var f=t(p);h(f,{children:(n,s)=>{r();var o=Ce(),l=t(c(o));H(l,{content:"src/appwrite.js"}),r(),e(n,o)},$$slots:{default:!0}});var v=t(f);U(v,{content:`import { Client, Databases, ID, Storage } from 'node-appwrite';

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

  async createRecognitionEntry(databaseId, collectionId, audioId, speech) {
    await this.databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        audio: audioId,
        speech: speech,
      }
    );
  }

  async getFile(bucketId, fileId) {
    return await this.storage.getFileDownload(bucketId, fileId);
  }
}

export default BackrushService;
`,language:"js",process:!0,children:(n,s)=>{r();var o=a(`import { Client, Databases, ID, Storage } from 'node-appwrite';

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

  async createRecognitionEntry(databaseId, collectionId, audioId, speech) {
    await this.databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        audio: audioId,
        speech: speech,
      }
    );
  }

  async getFile(bucketId, fileId) {
    return await this.storage.getFileDownload(bucketId, fileId);
  }
}

export default BackrushService;`);e(n,o)},$$slots:{default:!0}});var u=t(v);h(u,{children:(n,s)=>{r();var o=ye(),l=t(c(o));H(l,{content:"createRecognitionEntry"});var k=t(l,2);H(k,{content:"getFile"}),r(),e(n,o)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var ee=t(Z);j(ee,{id:"step-4",step:4,title:"Create Storage bucket",children:(P,q)=>{var d=De(),p=c(d);h(p,{children:(n,s)=>{r();var o=Se(),l=t(c(o));F(l,{marker:"**",children:(I,C)=>{r();var g=a("Storage");e(I,g)},$$slots:{default:!0}});var k=t(l,2);F(k,{marker:"**",children:(I,C)=>{r();var g=a("Create Bucket");e(I,g)},$$slots:{default:!0}}),r(),e(n,o)},$$slots:{default:!0}});var f=t(p);B(f,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var v=t(f);L(v,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var u=t(v);h(u,{children:(n,s)=>{r();var o=a("Use the default configuration for the bucket. Make sure to note down the bucket ID so you can add it as an environment variable later.");e(n,o)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var te=t(ee);j(te,{id:"step-5",step:5,title:"Create Backrush collection",children:(P,q)=>{var d=je(),p=c(d);h(p,{children:(n,s)=>{r();var o=a("Before saving the classification result to Backrush Databases, create a new database and collection in the Backrush Console.");e(n,o)},$$slots:{default:!0}});var f=t(p);h(f,{children:(n,s)=>{r();var o=Fe(),l=t(c(o));F(l,{marker:"**",children:(y,w)=>{r();var T=a("Database");e(y,T)},$$slots:{default:!0}});var k=t(l,2);F(k,{marker:"**",children:(y,w)=>{r();var T=a("Create database");e(y,T)},$$slots:{default:!0}});var I=t(k,2);H(I,{content:"AI"});var C=t(I,2);F(C,{marker:"**",children:(y,w)=>{r();var T=a("Create collection");e(y,T)},$$slots:{default:!0}});var g=t(C,2);H(g,{content:"Speech Recognition"}),r(),e(n,o)},$$slots:{default:!0}});var v=t(f);h(v,{children:(n,s)=>{r();var o=a("Next, create the following schema for the collection:");e(n,o)},$$slots:{default:!0}});var u=t(v);$e(u,{children:(n,s)=>{var o=Oe(),l=c(o);pe(l,{children:(I,C)=>{z(I,{children:(g,y)=>{var w=Re(),T=c(w);W(T,{children:($,D)=>{r();var E=a("Attribute");e($,E)},$$slots:{default:!0}});var _=t(T);W(_,{children:($,D)=>{r();var E=a("Type");e($,E)},$$slots:{default:!0}});var m=t(_);W(m,{children:($,D)=>{r();var E=a("Size");e($,E)},$$slots:{default:!0}});var b=t(m);W(b,{children:($,D)=>{r();var E=a("Required");e($,E)},$$slots:{default:!0}});var S=t(b);W(S,{children:($,D)=>{r();var E=a("Array");e($,E)},$$slots:{default:!0}}),e(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(l);ue(k,{children:(I,C)=>{var g=He(),y=c(g);z(y,{children:(T,_)=>{var m=qe(),b=c(m);R(b,{children:(x,N)=>{r();var A=a("audio");e(x,A)},$$slots:{default:!0}});var S=t(b);R(S,{children:(x,N)=>{r();var A=a("String");e(x,A)},$$slots:{default:!0}});var $=t(S);R($,{children:(x,N)=>{r();var A=a("64");e(x,A)},$$slots:{default:!0}});var D=t($);R(D,{children:(x,N)=>{r();var A=a("true");e(x,A)},$$slots:{default:!0}});var E=t(D);R(E,{children:(x,N)=>{r();var A=a("false");e(x,A)},$$slots:{default:!0}}),e(T,m)},$$slots:{default:!0}});var w=t(y);z(w,{children:(T,_)=>{var m=Ne(),b=c(m);R(b,{children:(x,N)=>{r();var A=a("speech");e(x,A)},$$slots:{default:!0}});var S=t(b);R(S,{children:(x,N)=>{r();var A=a("String");e(x,A)},$$slots:{default:!0}});var $=t(S);R($,{children:(x,N)=>{r();var A=a("10000");e(x,A)},$$slots:{default:!0}});var D=t($);R(D,{children:(x,N)=>{r();var A=a("true");e(x,A)},$$slots:{default:!0}});var E=t(D);R(E,{children:(x,N)=>{r();var A=a("false");e(x,A)},$$slots:{default:!0}}),e(T,m)},$$slots:{default:!0}}),e(I,g)},$$slots:{default:!0}}),e(n,o)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var re=t(te);j(re,{id:"step-6",step:6,title:"Integrate with Hugging Face",children:(P,q)=>{var d=We(),p=c(d);h(p,{children:(u,n)=>{r();var s=Ge(),o=t(c(s));H(o,{content:"src/main.js"}),r(),e(u,s)},$$slots:{default:!0}});var f=t(p);U(f,{content:`import { HfInference } from '@huggingface/inference';
import BackrushService from './appwrite.js';

export default async ({ req, res, log, error }) => {
  const databaseId = process.env.APPWRITE_DATABASE_ID ?? 'ai';
  const collectionId = process.env.APPWRITE_COLLECTION_ID ?? 'speech_recognition';
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'speech_recognition';

  let fileId = req.body.$id || req.body.fileId;

  if (!fileId) {
    return res.text('Bad request', 400);
  }

  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }

  const appwrite = new BackrushService();

  const file = await appwrite.getFile(bucketId, fileId);

  const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

  const result = await hf.automaticSpeechRecognition({
    data: file,
    model: 'openai/whisper-large-v3',
  });

  await appwrite.createRecognitionEntry(databaseId, collectionId, fileId, result.text);

  log('Audio ' + fileId + ' recognised', result.text);
  return res.json({ text: result.text });
};
`,language:"js",process:!0,children:(u,n)=>{r();var s=a(`import { HfInference } from '@huggingface/inference';
import BackrushService from './appwrite.js';

export default async ({ req, res, log, error }) => {
  const databaseId = process.env.APPWRITE_DATABASE_ID ?? 'ai';
  const collectionId = process.env.APPWRITE_COLLECTION_ID ?? 'speech_recognition';
  const bucketId = process.env.APPWRITE_BUCKET_ID ?? 'speech_recognition';

  let fileId = req.body.$id || req.body.fileId;

  if (!fileId) {
    return res.text('Bad request', 400);
  }

  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }

  const appwrite = new BackrushService();

  const file = await appwrite.getFile(bucketId, fileId);

  const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

  const result = await hf.automaticSpeechRecognition({
    data: file,
    model: 'openai/whisper-large-v3',
  });

  await appwrite.createRecognitionEntry(databaseId, collectionId, fileId, result.text);

  log('Audio ' + fileId + ' recognised', result.text);
  return res.json({ text: result.text });
};`);e(u,s)},$$slots:{default:!0}});var v=t(f);h(v,{children:(u,n)=>{r();var s=a("This Backrush Function checks if the required environment variables are set, then load the original audio from Backrush Storage. The function processes the audio file using the Hugging Face API, stores the generated text transcript in Backrush Databases and returns the transcript text.");e(u,s)},$$slots:{default:!0}}),e(P,d)},$$slots:{default:!0}});var se=t(re);j(se,{id:"step-7",step:7,title:"Test the function",children:(P,q)=>{var d=Be(),p=c(d);h(p,{children:(n,s)=>{r();var o=a("Test our function by uploading an audio file the Backrush Storage.");e(n,o)},$$slots:{default:!0}});var f=t(p);h(f,{children:(n,s)=>{r();var o=Ke(),l=t(c(o));F(l,{marker:"**",children:(I,C)=>{r();var g=a("Storage");e(I,g)},$$slots:{default:!0}});var k=t(l,2);F(k,{marker:"**",children:(I,C)=>{r();var g=a("Upload File");e(I,g)},$$slots:{default:!0}}),r(),e(n,o)},$$slots:{default:!0}});var v=t(f);B(v,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/ai/tutorials/speech-recognition/dark/result.png",alt:"Speech recognition test"})},$$slots:{default:!0}})}});var u=t(v);L(u,{children:(n,s)=>{h(n,{children:(o,l)=>{G(o,{src:"/images/docs/ai/tutorials/speech-recognition/result.png",alt:"Speech recognition test"})},$$slots:{default:!0}})}}),e(P,d)},$$slots:{default:!0}}),ie(K),e(ae,K)},$$slots:{default:!0}}))}export{ft as component};
