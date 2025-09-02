import{t as p,b as d,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ae,s as e,f as v,n as t,r as ne}from"../chunks/NgVQVlRK.js";import{n as se}from"../chunks/B4IyMRKX.js";import{S}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as N,a as H}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as E}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as w}from"../chunks/DXp9_3zM.js";import{F as T}from"../chunks/OFUKRh55.js";import{H as le}from"../chunks/CXsRaEhZ.js";import{L as ee,I as O}from"../chunks/BhmTgGWB.js";import{P as u}from"../chunks/D8YsId2T.js";import{S as A}from"../chunks/yHjwcyUH.js";import{L as R}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{A as ie}from"../chunks/CqOphJLh.js";const de={layout:"article",title:"Object detection with Hugging Face",description:"Build object recognition powered apps with Backrush and learn how to use Hugging Face's image classification models.",difficulty:"intermediate",readtime:15};var ce=p("A <!>",1),ue=p("<!><!>",1),$e=p("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),pe=p("In the Backrush Console&#39;s sidebar, click <!>.",1),ve=p("Click <!>.",1),he=p("Under <!>, select your provider.",1),fe=p("After connecting to GitHub, under <!>, select the <!> starter template.",1),_e=p("In the <!> step, add the <!>, generate it <!>.",1),ge=p("<!><!><!><!><!><!>",1),me=p("<!><!><!><!>",1),be=p("<!><!><!>",1),Pe=p("Open up your <!> file and replace the function body with the following code:",1),we=p("<!><!><!><!>",1),Ie=p("Create a new bucket in the Backrush Storage. Navigate to the Backrush Console and click on <!> in the left sidebar, then the <!> button.",1),ke=p("<!><!><!><!>",1),Ae=p("Create a new file in the <!> directory called <!> and add the following code:",1),xe=p("This code creates a new <!> class that initializes the Backrush client and provides a method to download a file from the Backrush Storage.",1),ye=p("Import the class into the <!> file, at the top of the file, add the following line:",1),je=p("Then, we can use the <!> class to download the image from the Backrush Storage. After the bucket check within <!> add the following code:",1),De=p("This code will download the file from the Backrush Storage and return a <!> status code if the file is not found or a <!> status code if an error occurs.",1),Ce=p("<!><!><!><!><!><!><!><!><!>",1),Se=p("At the top of the <!> file, add:",1),Ee=p("Next we&#39;re going to use the Hugging Face SDK and classify the image, for this task we can use various models that you can find <!> For this example we&#39;ll be using the <!> model.",1),Te=p("<!><!><!><!><!>",1),Fe=p("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button, you can call this database anything you like, for this example we&#39;ll call it <!>. Once you&#39;ve created the database, click on the <!> button and create a new collection, once again you can call it anything you want but for this example we&#39;ll call it <!>.",1),Oe=p("Add two string attributes to our collection, <!> and <!>. The <!> attribute will store the ID of the image we&#39;re detecting objects in and the <!> attribute will store the detection result. Both of these attributes should be <!> with <!> having the size of <!> and <!> having the size of around <!>.",1),qe=p("<!><!><!><!><!>",1),Ne=p("To begin with we&#39;re going to add a new function to the <!> file we created earlier which will create these records in the database.",1),He=p("<!><!><!><!><!><!><!>",1),Re=p("Navigate to your function in the Backrush Console and visit it&#39;s <!> tab, then under the <!> section click on the <!> button.",1),We=p("At the bottom of the dialog within the text input, click on the pen icon and enter <!>. Making sure to replace <!> with the ID of the bucket you created earlier.",1),Be=p("<!><!><!><!><!>",1),Le=p("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button and upload an image. After a few seconds, you should see an execution appear in the function&#39;s execution logs and the object detection result should be saved to the Backrush Database.",1),Ge=p("<!><!><!><!>",1),Ke=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ft(te){ie(te,se(de,{children:(re,Ue)=>{var W=Ke(),L=ae(W);u(L,{children:(I,y)=>{t();var $=d("Learn to setup an Backrush Function utilizing object detection with Hugging Face.");r(I,$)},$$slots:{default:!0}});var G=e(L);le(G,{id:"prerequisites",level:1,children:(I,y)=>{t();var $=d("Prerequisites");r(I,$)},$$slots:{default:!0}});var K=e(G);ee(K,{ordered:!1,marker:"-",children:(I,y)=>{var $=ue(),f=v($);O(f,{children:(_,b)=>{t();var l=d("An Backrush project");r(_,l)},$$slots:{default:!0}});var m=e(f);O(m,{children:(_,b)=>{t();var l=ce(),a=e(v(l));R(a,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(n,o)=>{t();var c=d("Hugging Face API key");r(n,c)},$$slots:{default:!0}}),r(_,l)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var U=e(K);S(U,{id:"step-1",step:1,title:"Create a new function",children:(I,y)=>{var $=me(),f=v($);u(f,{children:(l,a)=>{t();var n=$e(),o=e(v(n));R(o,{href:"https://cloud.backrush.io/console",children:(h,i)=>{t();var P=d("Backrush Console");r(h,P)},$$slots:{default:!0}});var c=e(o,2);A(c,{marker:"**",children:(h,i)=>{t();var P=d("Functions");r(h,P)},$$slots:{default:!0}});var s=e(c,2);A(s,{marker:"**",children:(h,i)=>{t();var P=d("Create Function");r(h,P)},$$slots:{default:!0}}),t(),r(l,n)},$$slots:{default:!0}});var m=e(f);N(m,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var _=e(m);H(_,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var b=e(_);ee(b,{ordered:!0,marker:".",children:(l,a)=>{var n=ge(),o=v(n);O(o,{children:(g,j)=>{t();var k=pe(),x=e(v(k));A(x,{marker:"**",children:(C,F)=>{t();var D=d("Functions");r(C,D)},$$slots:{default:!0}}),t(),r(g,k)},$$slots:{default:!0}});var c=e(o);O(c,{children:(g,j)=>{t();var k=ve(),x=e(v(k));A(x,{marker:"**",children:(C,F)=>{t();var D=d("Create function");r(C,D)},$$slots:{default:!0}}),t(),r(g,k)},$$slots:{default:!0}});var s=e(c);O(s,{children:(g,j)=>{t();var k=he(),x=e(v(k));A(x,{marker:"**",children:(C,F)=>{t();var D=d("Connect Git repository");r(C,D)},$$slots:{default:!0}}),t(),r(g,k)},$$slots:{default:!0}});var h=e(s);O(h,{children:(g,j)=>{t();var k=fe(),x=e(v(k));A(x,{marker:"**",children:(F,D)=>{t();var q=d("Quick start");r(F,q)},$$slots:{default:!0}});var C=e(x,2);A(C,{marker:"**",children:(F,D)=>{t();var q=d("Node.js");r(F,q)},$$slots:{default:!0}}),t(),r(g,k)},$$slots:{default:!0}});var i=e(h);O(i,{children:(g,j)=>{t();var k=_e(),x=e(v(k));A(x,{marker:"**",children:(D,q)=>{t();var B=d("Variables");r(D,B)},$$slots:{default:!0}});var C=e(x,2);w(C,{content:"HUGGINGFACE_ACCESS_TOKEN"});var F=e(C,2);R(F,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(D,q)=>{t();var B=d("here");r(D,B)},$$slots:{default:!0}}),t(),r(g,k)},$$slots:{default:!0}});var P=e(i);O(P,{children:(g,j)=>{t();var k=d("Follow the step-by-step wizard and create the function.");r(g,k)},$$slots:{default:!0}}),r(l,n)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var z=e(U);S(z,{id:"step-2",step:2,title:"Add dependencies",children:(I,y)=>{var $=be(),f=v($);u(f,{children:(b,l)=>{t();var a=d("Once the function is created, clone the function and open it in your development environment.");r(b,a)},$$slots:{default:!0}});var m=e(f);u(m,{children:(b,l)=>{t();var a=d("Once you have the repository open, you can install the Hugging Face inference SDK by running the following command in your terminal:");r(b,a)},$$slots:{default:!0}});var _=e(m);T(_,{content:`npm install @huggingface/inference node-backrush
`,language:"bash",process:!0,children:(b,l)=>{t();var a=d("npm install @huggingface/inference node-backrush");r(b,a)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var J=e(z);S(J,{id:"step-3",step:3,title:"Parsing the body",children:(I,y)=>{var $=we(),f=v($);u(f,{children:(l,a)=>{t();var n=d("After installing the SDK, write the code that will parse the body of the request. The function will serve two purposes: it can recieve a body via direct execution or it can be called via a file create event.");r(l,n)},$$slots:{default:!0}});var m=e(f);u(m,{children:(l,a)=>{t();var n=Pe(),o=e(v(n));w(o,{content:"src/index.js"}),t(),r(l,n)},$$slots:{default:!0}});var _=e(m);T(_,{content:`export default async ({ req, res, log, error }) => {
  const databaseId = process.env.BACKRUSH_DATABASE_ID ?? 'ai';
  const collectionId = process.env.BACKRUSH_COLLECTION_ID ?? 'image_classification';
  const bucketId = process.env.BACKRUSH_BUCKET_ID ?? 'image_classification';

  // Allows using direct execution or file create event
  const fileId = req.body.$id || req.body.imageId;
  if (!fileId) {
    return res.text('Bad request', 400);
  }

  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }
}
`,language:"js",process:!0,children:(l,a)=>{t();var n=d(`export default async ({ req, res, log, error }) => {
  const databaseId = process.env.BACKRUSH_DATABASE_ID ?? 'ai';
  const collectionId = process.env.BACKRUSH_COLLECTION_ID ?? 'image_classification';
  const bucketId = process.env.BACKRUSH_BUCKET_ID ?? 'image_classification';

  // Allows using direct execution or file create event
  const fileId = req.body.$id || req.body.imageId;
  if (!fileId) {
    return res.text('Bad request', 400);
  }

  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }
}`);r(l,n)},$$slots:{default:!0}});var b=e(_);u(b,{children:(l,a)=>{t();var n=d("This code will parse the body of the request and check if the request is a POST request. It will then check if the request contains the required fields and if the bucket ID matches the one we set in the environment variables.");r(l,n)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var Y=e(J);S(Y,{id:"step-4",step:4,title:"Setting up your Backrush Storage bucket",children:(I,y)=>{var $=ke(),f=v($);u(f,{children:(l,a)=>{t();var n=Ie(),o=e(v(n));A(o,{marker:"**",children:(s,h)=>{t();var i=d("Storage");r(s,i)},$$slots:{default:!0}});var c=e(o,2);A(c,{marker:"**",children:(s,h)=>{t();var i=d("Create Bucket");r(s,i)},$$slots:{default:!0}}),t(),r(l,n)},$$slots:{default:!0}});var m=e(f);N(m,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var _=e(m);H(_,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var b=e(_);u(b,{children:(l,a)=>{t();var n=d("Note down the bucket ID so we can add it as an environment variable later.");r(l,n)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var M=e(Y);S(M,{id:"step-5",step:5,title:"Downloading the image using Backrush Storage",children:(I,y)=>{var $=Ce(),f=v($);u(f,{children:(s,h)=>{t();var i=d("With the payload parsed, you can now download the image from the Backrush Storage.");r(s,i)},$$slots:{default:!0}});var m=e(f);u(m,{children:(s,h)=>{t();var i=Ae(),P=e(v(i));w(P,{content:"src"});var g=e(P,2);w(g,{content:"backrush.js"}),t(),r(s,i)},$$slots:{default:!0}});var _=e(m);T(_,{content:`import { Client, Databases, ID, Storage } from 'node-backrush';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.BACKRUSH_ENDPOINT ?? 'https://<REGION>.cloud.backrush.io/v1'
      )
      .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
      .setKey(process.env.BACKRUSH_API_KEY);

    this.databases = new Databases(client);
    this.storage = new Storage(client);
  }

  async getFile(bucketId, fileId) {
    return await this.storage.getFileDownload(bucketId, fileId);
  }
}

export default BackrushService;
`,language:"js",process:!0,children:(s,h)=>{t();var i=d(`import { Client, Databases, ID, Storage } from 'node-backrush';

class BackrushService {
  constructor() {
    const client = new Client();
    client
      .setEndpoint(
        process.env.BACKRUSH_ENDPOINT ?? 'https://<REGION>.cloud.backrush.io/v1'
      )
      .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
      .setKey(process.env.BACKRUSH_API_KEY);

    this.databases = new Databases(client);
    this.storage = new Storage(client);
  }

  async getFile(bucketId, fileId) {
    return await this.storage.getFileDownload(bucketId, fileId);
  }
}

export default BackrushService;`);r(s,i)},$$slots:{default:!0}});var b=e(_);u(b,{children:(s,h)=>{t();var i=xe(),P=e(v(i));w(P,{content:"BackrushService"}),t(),r(s,i)},$$slots:{default:!0}});var l=e(b);u(l,{children:(s,h)=>{t();var i=ye(),P=e(v(i));w(P,{content:"src/index.js"}),t(),r(s,i)},$$slots:{default:!0}});var a=e(l);T(a,{content:`import BackrushService from './backrush.js';
`,language:"js",process:!0,children:(s,h)=>{t();var i=d("import BackrushService from './backrush.js';");r(s,i)},$$slots:{default:!0}});var n=e(a);u(n,{children:(s,h)=>{t();var i=je(),P=e(v(i));w(P,{content:"BackrushService"});var g=e(P,2);w(g,{content:"main.js"}),t(),r(s,i)},$$slots:{default:!0}});var o=e(n);T(o,{content:`  const backrush = new BackrushService();

  const file = await backrush.getFile(bucketId, fileId);
`,language:"js",process:!0,children:(s,h)=>{t();var i=d(`const backrush = new BackrushService();

  const file = await backrush.getFile(bucketId, fileId);`);r(s,i)},$$slots:{default:!0}});var c=e(o);u(c,{children:(s,h)=>{t();var i=De(),P=e(v(i));w(P,{content:"404 - File Not Found"});var g=e(P,2);w(g,{content:"400 - Bad request"}),t(),r(s,i)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var Q=e(M);S(Q,{id:"step-6",step:6,title:"Detecting objects in the image",children:(I,y)=>{var $=Te(),f=v($);u(f,{children:(a,n)=>{t();var o=d("With the image downloaded, we can now use the Hugging Face inference SDK to classify the image.");r(a,o)},$$slots:{default:!0}});var m=e(f);u(m,{children:(a,n)=>{t();var o=Se(),c=e(v(o));w(c,{content:"src/index.js"}),t(),r(a,o)},$$slots:{default:!0}});var _=e(m);T(_,{content:`import { HfInference } from '@huggingface/inference';
`,language:"js",process:!0,children:(a,n)=>{t();var o=d("import { HfInference } from '@huggingface/inference';");r(a,o)},$$slots:{default:!0}});var b=e(_);u(b,{children:(a,n)=>{t();var o=Ee(),c=e(v(o));R(c,{href:"https://huggingface.co/models?pipeline_tag=object-detection&sort=trending",children:(h,i)=>{t();var P=d("on Hugging Face.");r(h,P)},$$slots:{default:!0}});var s=e(c,2);w(s,{content:"facebook/detr-resnet-50"}),t(),r(a,o)},$$slots:{default:!0}});var l=e(b);T(l,{content:`const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

const result = await hf.objectDetection({
  data: file,
  model: 'facebook/detr-resnet-50',
});
`,language:"js",process:!0,children:(a,n)=>{t();var o=d(`const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

const result = await hf.objectDetection({
  data: file,
  model: 'facebook/detr-resnet-50',
});`);r(a,o)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var V=e(Q);S(V,{id:"step-7",step:7,title:"Setting up our database",children:(I,y)=>{var $=qe(),f=v($);u(f,{children:(a,n)=>{t();var o=d("Before we can save our detection result to the Backrush Database, we need to create a new database and collection in the Backrush Console.");r(a,o)},$$slots:{default:!0}});var m=e(f);u(m,{children:(a,n)=>{t();var o=Fe(),c=e(v(o));A(c,{marker:"**",children:(g,j)=>{t();var k=d("Database");r(g,k)},$$slots:{default:!0}});var s=e(c,2);A(s,{marker:"**",children:(g,j)=>{t();var k=d("Create database");r(g,k)},$$slots:{default:!0}});var h=e(s,2);w(h,{content:"AI"});var i=e(h,2);A(i,{marker:"**",children:(g,j)=>{t();var k=d("Create collection");r(g,k)},$$slots:{default:!0}});var P=e(i,2);w(P,{content:"Image Labels"}),t(),r(a,o)},$$slots:{default:!0}});var _=e(m);u(_,{children:(a,n)=>{t();var o=Oe(),c=e(v(o));w(c,{content:"image"});var s=e(c,2);w(s,{content:"labels"});var h=e(s,2);w(h,{content:"image"});var i=e(h,2);w(i,{content:"labels"});var P=e(i,2);w(P,{content:"required"});var g=e(P,2);w(g,{content:"image"});var j=e(g,2);w(j,{content:"256"});var k=e(j,2);w(k,{content:"labels"});var x=e(k,2);w(x,{content:"4096"}),t(),r(a,o)},$$slots:{default:!0}});var b=e(_);N(b,{children:(a,n)=>{u(a,{children:(o,c)=>{E(o,{src:"/images/docs/ai/tutorials/object-detection/dark/database.png",alt:"Object detection database"})},$$slots:{default:!0}})}});var l=e(b);H(l,{children:(a,n)=>{u(a,{children:(o,c)=>{E(o,{src:"/images/docs/ai/tutorials/object-detection/database.png",alt:"Object detection database"})},$$slots:{default:!0}})}}),r(I,$)},$$slots:{default:!0}});var X=e(V);S(X,{id:"step-8",step:8,title:"Saving the object detection result",children:(I,y)=>{var $=He(),f=v($);u(f,{children:(o,c)=>{t();var s=d("With the image classified, we can now save the result to the Backrush Database.");r(o,s)},$$slots:{default:!0}});var m=e(f);u(m,{children:(o,c)=>{t();var s=Ne(),h=e(v(s));w(h,{content:"backrush.js"}),t(),r(o,s)},$$slots:{default:!0}});var _=e(m);T(_,{content:`async createImageLabels(databaseId, collectionId, imageId, labels)
{
  await this.databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    {
      image: imageId,
      labels: JSON.stringify(labels),
    }
  );
}
`,language:"js",process:!0,children:(o,c)=>{t();var s=d(`async createImageLabels(databaseId, collectionId, imageId, labels)
{
  await this.databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    {
      image: imageId,
      labels: JSON.stringify(labels),
    }
  );
}`);r(o,s)},$$slots:{default:!0}});var b=e(_);u(b,{children:(o,c)=>{t();var s=d("This abstraction keeps our codebase clean and makes it easier to test and maintain.");r(o,s)},$$slots:{default:!0}});var l=e(b);u(l,{children:(o,c)=>{t();var s=d("Next, using the function we just added we can save the object detection result to the Backrush Database. We'll also add some logging and error handling to make sure everything is working as expected.");r(o,s)},$$slots:{default:!0}});var a=e(l);u(a,{children:(o,c)=>{t();var s=d("Add the following code:");r(o,s)},$$slots:{default:!0}});var n=e(a);T(n,{content:`await backrush.createImageLabels(databaseId, collectionId, fileId, result);

log('Image ' + fileId + ' detected', result);
return res.json(result);
`,language:"js",process:!0,children:(o,c)=>{t();var s=d(`await backrush.createImageLabels(databaseId, collectionId, fileId, result);

log('Image ' + fileId + ' detected', result);
return res.json(result);`);r(o,s)},$$slots:{default:!0}}),r(I,$)},$$slots:{default:!0}});var Z=e(X);S(Z,{id:"step-9",step:9,title:"Configuring events",children:(I,y)=>{var $=Be(),f=v($);u(f,{children:(a,n)=>{t();var o=d("To test our function we're going to attach it directly to our Storage bucket using events.");r(a,o)},$$slots:{default:!0}});var m=e(f);u(m,{children:(a,n)=>{t();var o=Re(),c=e(v(o));A(c,{marker:"**",children:(i,P)=>{t();var g=d("settings");r(i,g)},$$slots:{default:!0}});var s=e(c,2);A(s,{marker:"**",children:(i,P)=>{t();var g=d("Events");r(i,g)},$$slots:{default:!0}});var h=e(s,2);A(h,{marker:"**",children:(i,P)=>{t();var g=d("Add Event");r(i,g)},$$slots:{default:!0}}),t(),r(a,o)},$$slots:{default:!0}});var _=e(m);u(_,{children:(a,n)=>{t();var o=We(),c=e(v(o));w(c,{content:"buckets.[Bucket ID].files.*.create"});var s=e(c,2);w(s,{content:"[Bucket ID]"}),t(),r(a,o)},$$slots:{default:!0}});var b=e(_);N(b,{children:(a,n)=>{u(a,{children:(o,c)=>{E(o,{src:"/images/docs/ai/tutorials/object-detection/dark/event.png",alt:"Object detection event"})},$$slots:{default:!0}})}});var l=e(b);H(l,{children:(a,n)=>{u(a,{children:(o,c)=>{E(o,{src:"/images/docs/ai/tutorials/object-detection/event.png",alt:"Object detection event"})},$$slots:{default:!0}})}}),r(I,$)},$$slots:{default:!0}});var oe=e(Z);S(oe,{id:"step-10",step:10,title:"Testing the function",children:(I,y)=>{var $=Ge(),f=v($);u(f,{children:(l,a)=>{t();var n=d("Test our function by uploading an image to the Backrush Storage.");r(l,n)},$$slots:{default:!0}});var m=e(f);u(m,{children:(l,a)=>{t();var n=Le(),o=e(v(n));A(o,{marker:"**",children:(s,h)=>{t();var i=d("Storage");r(s,i)},$$slots:{default:!0}});var c=e(o,2);A(c,{marker:"**",children:(s,h)=>{t();var i=d("Upload File");r(s,i)},$$slots:{default:!0}}),t(),r(l,n)},$$slots:{default:!0}});var _=e(m);N(_,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/ai/tutorials/object-detection/dark/result.png",alt:"Object detection test"})},$$slots:{default:!0}})}});var b=e(_);H(b,{children:(l,a)=>{u(l,{children:(n,o)=>{E(n,{src:"/images/docs/ai/tutorials/object-detection/result.png",alt:"Object detection test"})},$$slots:{default:!0}})}}),r(I,$)},$$slots:{default:!0}}),ne(W),r(re,W)},$$slots:{default:!0}}))}export{ft as component};
