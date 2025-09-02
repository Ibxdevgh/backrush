import{t as u,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ue,s as e,f as p,n as t,r as pe}from"../chunks/NgVQVlRK.js";import{n as fe}from"../chunks/B4IyMRKX.js";import{S as H}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as G,a as U}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as R}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as T}from"../chunks/DXp9_3zM.js";import{F as B}from"../chunks/OFUKRh55.js";import{H as ve}from"../chunks/CXsRaEhZ.js";import{L as ie,I as K}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S}from"../chunks/yHjwcyUH.js";import{L as z}from"../chunks/yh4_9ChP.js";import{T as _e}from"../chunks/D8BqvLkQ.js";import{T as he,a as M,b as Y,c as ge,d as L}from"../chunks/BpU_IltG.js";import{A as me}from"../chunks/CqOphJLh.js";const Pe={layout:"article",title:"Image classification with Hugging Face",description:"Build image classification powered apps with Backrush and learn how to use Hugging Face's image classification models.",difficulty:"intermediate",readtime:15};var Ie=u("A <!>",1),we=u("<!><!>",1),be=u("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button.",1),xe=u("In the Backrush Console&#39;s sidebar, click <!>.",1),ke=u("Click <!>.",1),Ae=u("Under <!>, select your provider.",1),ye=u("After connecting to GitHub, under <!>, select the <!> starter template.",1),Ce=u("In the <!> step, add the <!>, generate it <!>.",1),Te=u("<!><!><!><!><!><!>",1),Se=u("<!><!><!><!>",1),De=u("<!><!><!>",1),Ee=u("Open up your <!> file and replace the function body with the following code:",1),Fe=u("<!><!><!>",1),Ne=u("In order for this function to work, create a new bucket in the Backrush Storage. You can do this by navigating to the Backrush Console and clicking on <!> in the left sidebar, then clicking on the <!> button.",1),je=u("<!><!><!><!>",1),Oe=u("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button, and name it, for example <!>. Once you&#39;ve created the database, click on the <!> button and create a new collection, and name it, for example <!>.",1),qe=u("<!><!><!><!><!>",1),He=u("<!><!><!><!><!>",1),Re=u("<!><!><!><!><!>",1),Le=u("<!><!>",1),We=u("<!><!>",1),Be=u("<!><!><!><!><!><!>",1),Ke=u("Create a new file called <!> in the <!> directory and add the following code:",1),Ge=u("This code creates a new <!> class that initializes the Backrush client and provides a method to download a file from the Backrush Storage.",1),Ue=u("Import the class into the <!> file, at the top of the file, add the following line:",1),Ye=u("Then, use the <!> class to download the image from the Backrush Storage. After the bucket check in <!> add the following code:",1),ze=u("This code will download the file from the Backrush Storage and return a <!> status code if the file is not found or a <!> status code if an error occurs.",1),Je=u("<!><!><!><!><!><!><!><!><!>",1),Me=u("At the top of the <!> file, add:",1),Qe=u("Use the Hugging Face SDK and classify the image, for this task you can use various models that you can find <!> This example uses the <!> model.",1),Ve=u("<!><!><!><!><!>",1),Xe=u("To begin, add a new function to the <!> file created earlier which will add these records in the database.",1),Ze=u("In the <!> file, save the result to the Backrush Database.",1),et=u("<!><!><!><!><!><!>",1),tt=u("Navigate to your function in the Backrush Console, under <!> &gt; <!>, click on the <!> button.",1),rt=u("At the bottom of the dialog within the text input, click on the pen icon and enter <!>. Making sure to replace <!> with the ID of the bucket you created earlier.",1),ot=u("<!><!><!><!><!>",1),at=u("Navigate to the Backrush Console and click on <!> in the left sidebar, then click on the <!> button and upload an image. After a few seconds, you should see an execution appear in the function&#39;s execution logs and the classification result should be saved to the Backrush Database.",1),st=u("<!><!><!><!><!>",1),nt=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function St(de){me(de,fe(Pe,{children:(ce,lt)=>{var J=nt(),Q=ue(J);$(Q,{children:(w,O)=>{t();var f=s("Learn to setup an Backrush Function utilizing image classification with Hugging Face.");r(w,f)},$$slots:{default:!0}});var V=e(Q);ve(V,{id:"prerequisites",level:1,children:(w,O)=>{t();var f=s("Prerequisites");r(w,f)},$$slots:{default:!0}});var X=e(V);ie(X,{ordered:!1,marker:"-",children:(w,O)=>{var f=we(),h=p(f);K(h,{children:(P,v)=>{t();var c=s("An Backrush project");r(P,c)},$$slots:{default:!0}});var m=e(h);K(m,{children:(P,v)=>{t();var c=Ie(),n=e(p(c));z(n,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(o,a)=>{t();var l=s("Hugging Face API key");r(o,l)},$$slots:{default:!0}}),r(P,c)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var Z=e(X);H(Z,{id:"step-1",step:1,title:"Create new function",children:(w,O)=>{var f=Se(),h=p(f);$(h,{children:(c,n)=>{t();var o=be(),a=e(p(o));z(a,{href:"https://cloud.backrush.io/console",children:(g,i)=>{t();var _=s("Backrush Console");r(g,_)},$$slots:{default:!0}});var l=e(a,2);S(l,{marker:"**",children:(g,i)=>{t();var _=s("Functions");r(g,_)},$$slots:{default:!0}});var d=e(l,2);S(d,{marker:"**",children:(g,i)=>{t();var _=s("Create Function");r(g,_)},$$slots:{default:!0}}),t(),r(c,o)},$$slots:{default:!0}});var m=e(h);G(m,{children:(c,n)=>{$(c,{children:(o,a)=>{R(o,{src:"/images/docs/functions/dark/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var P=e(m);U(P,{children:(c,n)=>{$(c,{children:(o,a)=>{R(o,{src:"/images/docs/functions/template.png",alt:"Create function screen"})},$$slots:{default:!0}})}});var v=e(P);ie(v,{ordered:!0,marker:".",children:(c,n)=>{var o=Te(),a=p(o);K(a,{children:(I,E)=>{t();var b=xe(),x=e(p(b));S(x,{marker:"**",children:(F,D)=>{t();var k=s("Functions");r(F,k)},$$slots:{default:!0}}),t(),r(I,b)},$$slots:{default:!0}});var l=e(a);K(l,{children:(I,E)=>{t();var b=ke(),x=e(p(b));S(x,{marker:"**",children:(F,D)=>{t();var k=s("Create function");r(F,k)},$$slots:{default:!0}}),t(),r(I,b)},$$slots:{default:!0}});var d=e(l);K(d,{children:(I,E)=>{t();var b=Ae(),x=e(p(b));S(x,{marker:"**",children:(F,D)=>{t();var k=s("Connect Git repository");r(F,k)},$$slots:{default:!0}}),t(),r(I,b)},$$slots:{default:!0}});var g=e(d);K(g,{children:(I,E)=>{t();var b=ye(),x=e(p(b));S(x,{marker:"**",children:(D,k)=>{t();var N=s("Quick start");r(D,N)},$$slots:{default:!0}});var F=e(x,2);S(F,{marker:"**",children:(D,k)=>{t();var N=s("Node.js");r(D,N)},$$slots:{default:!0}}),t(),r(I,b)},$$slots:{default:!0}});var i=e(g);K(i,{children:(I,E)=>{t();var b=Ce(),x=e(p(b));S(x,{marker:"**",children:(k,N)=>{t();var A=s("Variables");r(k,A)},$$slots:{default:!0}});var F=e(x,2);T(F,{content:"HUGGINGFACE_ACCESS_TOKEN"});var D=e(F,2);z(D,{href:"https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token",children:(k,N)=>{t();var A=s("here");r(k,A)},$$slots:{default:!0}}),t(),r(I,b)},$$slots:{default:!0}});var _=e(i);K(_,{children:(I,E)=>{t();var b=s("Follow the step-by-step wizard and create the function.");r(I,b)},$$slots:{default:!0}}),r(c,o)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var ee=e(Z);H(ee,{id:"step-2",step:2,title:"Add dependencies",children:(w,O)=>{var f=De(),h=p(f);$(h,{children:(v,c)=>{t();var n=s("Once the function is created, clone the function and open it in your development environment.");r(v,n)},$$slots:{default:!0}});var m=e(h);$(m,{children:(v,c)=>{t();var n=s("Once you have the repository open, you can install the Backrush NodK and the Hugging Face inference SDK by running the following command in your terminal:");r(v,n)},$$slots:{default:!0}});var P=e(m);B(P,{content:`npm install @huggingface/inference node-backrush
`,language:"bash",process:!0,children:(v,c)=>{t();var n=s("npm install @huggingface/inference node-backrush");r(v,n)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var te=e(ee);H(te,{id:"step-3",step:3,title:"Parse payload body",children:(w,O)=>{var f=Fe(),h=p(f);$(h,{children:(v,c)=>{t();var n=s("After installing the SDK, write the code that will accept a JSON body. The function will serve two purposes: it can recieve a body via direct execution or it can be called via a file create event.");r(v,n)},$$slots:{default:!0}});var m=e(h);$(m,{children:(v,c)=>{t();var n=Ee(),o=e(p(n));T(o,{content:"src/main.js"}),t(),r(v,n)},$$slots:{default:!0}});var P=e(m);B(P,{content:`export default async ({ req, res, log, error }) => {
  const databaseId = process.env.BACKRUSH_DATABASE_ID ?? 'ai';
  const collectionId = process.env.BACKRUSH_COLLECTION_ID ?? 'image_classification';
  const bucketId = process.env.BACKRUSH_BUCKET_ID ?? 'image_classification';

  // Allows using direct execution or file create event
  const fileId = req.body.$id || req.body.imageId;
  if (!fileId) {
    return res.text('Bad request', 400);
  }

  // Only allow specific bucketId
  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }
}
`,language:"js",process:!0,children:(v,c)=>{t();var n=s(`export default async ({ req, res, log, error }) => {
  const databaseId = process.env.BACKRUSH_DATABASE_ID ?? 'ai';
  const collectionId = process.env.BACKRUSH_COLLECTION_ID ?? 'image_classification';
  const bucketId = process.env.BACKRUSH_BUCKET_ID ?? 'image_classification';

  // Allows using direct execution or file create event
  const fileId = req.body.$id || req.body.imageId;
  if (!fileId) {
    return res.text('Bad request', 400);
  }

  // Only allow specific bucketId
  if (
    req.body.bucketId &&
    req.body.bucketId != bucketId
  ) {
    return res.text('Bad request', 400);
  }
}`);r(v,n)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var re=e(te);H(re,{id:"step-4",step:4,title:"Create Storage bucket",children:(w,O)=>{var f=je(),h=p(f);$(h,{children:(c,n)=>{t();var o=Ne(),a=e(p(o));S(a,{marker:"**",children:(d,g)=>{t();var i=s("Storage");r(d,i)},$$slots:{default:!0}});var l=e(a,2);S(l,{marker:"**",children:(d,g)=>{t();var i=s("Create Bucket");r(d,i)},$$slots:{default:!0}}),t(),r(c,o)},$$slots:{default:!0}});var m=e(h);G(m,{children:(c,n)=>{$(c,{children:(o,a)=>{R(o,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var P=e(m);U(P,{children:(c,n)=>{$(c,{children:(o,a)=>{R(o,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var v=e(P);$(v,{children:(c,n)=>{t();var o=s("Use the default configuration for the bucket. Make sure to note down the bucket ID so you can add it as an environment variable later.");r(c,o)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var oe=e(re);H(oe,{id:"step-6",step:6,title:"Create Backrush collection",children:(w,O)=>{var f=Be(),h=p(f);$(h,{children:(o,a)=>{t();var l=s("Before saving the classification result to Backrush Databases, create a new database and collection in the Backrush Console.");r(o,l)},$$slots:{default:!0}});var m=e(h);$(m,{children:(o,a)=>{t();var l=Oe(),d=e(p(l));S(d,{marker:"**",children:(E,b)=>{t();var x=s("Database");r(E,x)},$$slots:{default:!0}});var g=e(d,2);S(g,{marker:"**",children:(E,b)=>{t();var x=s("Create database");r(E,x)},$$slots:{default:!0}});var i=e(g,2);T(i,{content:"AI"});var _=e(i,2);S(_,{marker:"**",children:(E,b)=>{t();var x=s("Create collection");r(E,x)},$$slots:{default:!0}});var I=e(_,2);T(I,{content:"Image Labels"}),t(),r(o,l)},$$slots:{default:!0}});var P=e(m);$(P,{children:(o,a)=>{t();var l=s("Next, create the following schema for the collection:");r(o,l)},$$slots:{default:!0}});var v=e(P);_e(v,{children:(o,a)=>{var l=We(),d=p(l);he(d,{children:(i,_)=>{M(i,{children:(I,E)=>{var b=qe(),x=p(b);Y(x,{children:(A,q)=>{t();var j=s("Attribute");r(A,j)},$$slots:{default:!0}});var F=e(x);Y(F,{children:(A,q)=>{t();var j=s("Type");r(A,j)},$$slots:{default:!0}});var D=e(F);Y(D,{children:(A,q)=>{t();var j=s("Size");r(A,j)},$$slots:{default:!0}});var k=e(D);Y(k,{children:(A,q)=>{t();var j=s("Required");r(A,j)},$$slots:{default:!0}});var N=e(k);Y(N,{children:(A,q)=>{t();var j=s("Array");r(A,j)},$$slots:{default:!0}}),r(I,b)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=e(d);ge(g,{children:(i,_)=>{var I=Le(),E=p(I);M(E,{children:(x,F)=>{var D=He(),k=p(D);L(k,{children:(y,W)=>{t();var C=s("image");r(y,C)},$$slots:{default:!0}});var N=e(k);L(N,{children:(y,W)=>{t();var C=s("String");r(y,C)},$$slots:{default:!0}});var A=e(N);L(A,{children:(y,W)=>{t();var C=s("256");r(y,C)},$$slots:{default:!0}});var q=e(A);L(q,{children:(y,W)=>{t();var C=s("Yes");r(y,C)},$$slots:{default:!0}});var j=e(q);L(j,{children:(y,W)=>{t();var C=s("No");r(y,C)},$$slots:{default:!0}}),r(x,D)},$$slots:{default:!0}});var b=e(E);M(b,{children:(x,F)=>{var D=Re(),k=p(D);L(k,{children:(y,W)=>{t();var C=s("labels");r(y,C)},$$slots:{default:!0}});var N=e(k);L(N,{children:(y,W)=>{t();var C=s("String");r(y,C)},$$slots:{default:!0}});var A=e(N);L(A,{children:(y,W)=>{t();var C=s("256");r(y,C)},$$slots:{default:!0}});var q=e(A);L(q,{children:(y,W)=>{t();var C=s("Yes");r(y,C)},$$slots:{default:!0}});var j=e(q);L(j,{children:(y,W)=>{t();var C=s("Yes");r(y,C)},$$slots:{default:!0}}),r(x,D)},$$slots:{default:!0}}),r(i,I)},$$slots:{default:!0}}),r(o,l)},$$slots:{default:!0}});var c=e(v);G(c,{children:(o,a)=>{$(o,{children:(l,d)=>{R(l,{src:"/images/docs/ai/tutorials/image-classification/dark/database.png",alt:"Image Classification Database"})},$$slots:{default:!0}})}});var n=e(c);U(n,{children:(o,a)=>{$(o,{children:(l,d)=>{R(l,{src:"/images/docs/ai/tutorials/image-classification/database.png",alt:"Image Classification Database"})},$$slots:{default:!0}})}}),r(w,f)},$$slots:{default:!0}});var ae=e(oe);H(ae,{id:"step-7",step:7,title:"Downloading image",children:(w,O)=>{var f=Je(),h=p(f);$(h,{children:(d,g)=>{t();var i=s("With the payload parsed, now you can download the image from Backrush Storage.");r(d,i)},$$slots:{default:!0}});var m=e(h);$(m,{children:(d,g)=>{t();var i=Ke(),_=e(p(i));T(_,{content:"backrush.js"});var I=e(_,2);T(I,{content:"src"}),t(),r(d,i)},$$slots:{default:!0}});var P=e(m);B(P,{content:`import { Client, Databases, ID, Storage } from 'node-backrush';

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
`,language:"js",process:!0,children:(d,g)=>{t();var i=s(`import { Client, Databases, ID, Storage } from 'node-backrush';

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

export default BackrushService;`);r(d,i)},$$slots:{default:!0}});var v=e(P);$(v,{children:(d,g)=>{t();var i=Ge(),_=e(p(i));T(_,{content:"BackrushService"}),t(),r(d,i)},$$slots:{default:!0}});var c=e(v);$(c,{children:(d,g)=>{t();var i=Ue(),_=e(p(i));T(_,{content:"src/index.js"}),t(),r(d,i)},$$slots:{default:!0}});var n=e(c);B(n,{content:`import BackrushService from './backrush.js';
`,language:"js",process:!0,children:(d,g)=>{t();var i=s("import BackrushService from './backrush.js';");r(d,i)},$$slots:{default:!0}});var o=e(n);$(o,{children:(d,g)=>{t();var i=Ye(),_=e(p(i));T(_,{content:"BackrushService"});var I=e(_,2);T(I,{content:"main.js"}),t(),r(d,i)},$$slots:{default:!0}});var a=e(o);B(a,{content:`  const backrush = new BackrushService();

  file = await backrush.getFile(bucketId, fileId);
`,language:"js",process:!0,children:(d,g)=>{t();var i=s(`const backrush = new BackrushService();

  file = await backrush.getFile(bucketId, fileId);`);r(d,i)},$$slots:{default:!0}});var l=e(a);$(l,{children:(d,g)=>{t();var i=ze(),_=e(p(i));T(_,{content:"404 - File Not Found"});var I=e(_,2);T(I,{content:"400 - Bad request"}),t(),r(d,i)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var se=e(ae);H(se,{id:"step-8",step:8,title:"Integrate with Huggingface",children:(w,O)=>{var f=Ve(),h=p(f);$(h,{children:(n,o)=>{t();var a=s("With the image downloaded, use the Hugging Face inference SDK to classify the image.");r(n,a)},$$slots:{default:!0}});var m=e(h);$(m,{children:(n,o)=>{t();var a=Me(),l=e(p(a));T(l,{content:"src/index.js"}),t(),r(n,a)},$$slots:{default:!0}});var P=e(m);B(P,{content:`import { HfInference } from '@huggingface/inference';
`,language:"js",process:!0,children:(n,o)=>{t();var a=s("import { HfInference } from '@huggingface/inference';");r(n,a)},$$slots:{default:!0}});var v=e(P);$(v,{children:(n,o)=>{t();var a=Qe(),l=e(p(a));z(l,{href:"https://huggingface.co/models?pipeline_tag=image-classification&sort=trending",children:(g,i)=>{t();var _=s("on Hugging Face.");r(g,_)},$$slots:{default:!0}});var d=e(l,2);T(d,{content:"microsoft/resnet-50"}),t(),r(n,a)},$$slots:{default:!0}});var c=e(v);B(c,{content:`const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

const result = await hf.imageClassification({
  data: file,
  model: 'microsoft/resnet-50',
});
`,language:"js",process:!0,children:(n,o)=>{t();var a=s(`const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

const result = await hf.imageClassification({
  data: file,
  model: 'microsoft/resnet-50',
});`);r(n,a)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var ne=e(se);H(ne,{id:"step-9",step:9,title:"Save result",children:(w,O)=>{var f=et(),h=p(f);$(h,{children:(o,a)=>{t();var l=s("With the image classified, save the result to the Backrush Databases.");r(o,l)},$$slots:{default:!0}});var m=e(h);$(m,{children:(o,a)=>{t();var l=Xe(),d=e(p(l));T(d,{content:"backrush.js"}),t(),r(o,l)},$$slots:{default:!0}});var P=e(m);B(P,{content:`async createImageLabels(databaseId, collectionId, imageId, labels)
{
  await this.databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    {
      image: imageId,
      labels,
    }
  );
}
`,language:"js",process:!0,children:(o,a)=>{t();var l=s(`async createImageLabels(databaseId, collectionId, imageId, labels)
{
  await this.databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    {
      image: imageId,
      labels,
    }
  );
}`);r(o,l)},$$slots:{default:!0}});var v=e(P);$(v,{children:(o,a)=>{t();var l=Ze(),d=e(p(l));T(d,{content:"main.js"}),t(),r(o,l)},$$slots:{default:!0}});var c=e(v);$(c,{children:(o,a)=>{t();var l=s("Add the following code:");r(o,l)},$$slots:{default:!0}});var n=e(c);B(n,{content:`await backrush.createImageLabels(databaseId, collectionId, fileId, result);

log('Image ' + fileId + ' classified', result);
return res.json(result);
`,language:"js",process:!0,children:(o,a)=>{t();var l=s(`await backrush.createImageLabels(databaseId, collectionId, fileId, result);

log('Image ' + fileId + ' classified', result);
return res.json(result);`);r(o,l)},$$slots:{default:!0}}),r(w,f)},$$slots:{default:!0}});var le=e(ne);H(le,{id:"step-10",step:10,title:"Configure events",children:(w,O)=>{var f=ot(),h=p(f);$(h,{children:(n,o)=>{t();var a=s("To test the function attach it directly to the Storage bucket using events.");r(n,a)},$$slots:{default:!0}});var m=e(h);$(m,{children:(n,o)=>{t();var a=tt(),l=e(p(a));S(l,{marker:"**",children:(i,_)=>{t();var I=s("Settings");r(i,I)},$$slots:{default:!0}});var d=e(l,2);S(d,{marker:"**",children:(i,_)=>{t();var I=s("Events");r(i,I)},$$slots:{default:!0}});var g=e(d,2);S(g,{marker:"**",children:(i,_)=>{t();var I=s("Add Event");r(i,I)},$$slots:{default:!0}}),t(),r(n,a)},$$slots:{default:!0}});var P=e(m);$(P,{children:(n,o)=>{t();var a=rt(),l=e(p(a));T(l,{content:"buckets.[Bucket ID].files.*.create"});var d=e(l,2);T(d,{content:"[Bucket ID]"}),t(),r(n,a)},$$slots:{default:!0}});var v=e(P);G(v,{children:(n,o)=>{$(n,{children:(a,l)=>{R(a,{src:"/images/docs/ai/tutorials/image-classification/dark/event.png",alt:"Image Classification Event"})},$$slots:{default:!0}})}});var c=e(v);U(c,{children:(n,o)=>{$(n,{children:(a,l)=>{R(a,{src:"/images/docs/ai/tutorials/image-classification/event.png",alt:"Image Classification Event"})},$$slots:{default:!0}})}}),r(w,f)},$$slots:{default:!0}});var $e=e(le);H($e,{id:"step-10",step:10,title:"Test the function",children:(w,O)=>{var f=st(),h=p(f);$(h,{children:(n,o)=>{t();var a=s("Commit the changes to the repository and deploy the function.");r(n,a)},$$slots:{default:!0}});var m=e(h);$(m,{children:(n,o)=>{t();var a=s("Test the function by uploading an image to the Backrush Storage.");r(n,a)},$$slots:{default:!0}});var P=e(m);$(P,{children:(n,o)=>{t();var a=at(),l=e(p(a));S(l,{marker:"**",children:(g,i)=>{t();var _=s("Storage");r(g,_)},$$slots:{default:!0}});var d=e(l,2);S(d,{marker:"**",children:(g,i)=>{t();var _=s("Upload File");r(g,_)},$$slots:{default:!0}}),t(),r(n,a)},$$slots:{default:!0}});var v=e(P);G(v,{children:(n,o)=>{$(n,{children:(a,l)=>{R(a,{src:"/images/docs/ai/tutorials/image-classification/dark/result.png",alt:"Image Classification Test"})},$$slots:{default:!0}})}});var c=e(v);U(c,{children:(n,o)=>{$(n,{children:(a,l)=>{R(a,{src:"/images/docs/ai/tutorials/image-classification/result.png",alt:"Image Classification Test"})},$$slots:{default:!0}})}}),r(w,f)},$$slots:{default:!0}}),pe(J),r(ce,J)},$$slots:{default:!0}}))}export{St as component};
