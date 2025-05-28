import{t as _,b as n,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ie,s as r,f as m,n as e,r as le}from"../chunks/NgVQVlRK.js";import{n as ce}from"../chunks/B4IyMRKX.js";import{H as B}from"../chunks/CXsRaEhZ.js";import{M as de}from"../chunks/hMT8fFzP.js";import{T as pe,a as O}from"../chunks/BHbEtIoO.js";import{O as ue,a as $e}from"../chunks/uti8MWrk.js";import{A as ve}from"../chunks/CP6rnx7i.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as re}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as K}from"../chunks/DXp9_3zM.js";import{F as C}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as v}from"../chunks/D8YsId2T.js";import{S as y}from"../chunks/yHjwcyUH.js";import{L as S}from"../chunks/yh4_9ChP.js";import{A as _e}from"../chunks/CqOphJLh.js";const ge={layout:"article",title:"Buckets",description:"Organize and manage your files effectively with Backrush Storage Buckets. Explore how to create, configure, and use storage buckets for seamless file organization."};var fe=_("You can create your bucket from the Backrush Console, a <!>, or the <!>.",1),me=_("You can create a bucket by heading to the <!> page and clicking <!>.",1),he=_("<!><!><!>",1),Pe=_("You can also create collections programmatically using a <!>. Backrush <!> require an <!>.",1),ke=_("<!><!><!><!><!><!><!><!><!><!>",1),Ie=_("You can also configure permission, file size and extension restrictions, and more in the <!> method, learn more about the <!> in the <!>.",1),we=_("<!><!><!>",1),Ee=_("Create a bucket using the CLI command <!>.",1),be=_("This will initialize your bucket in your <!> file. To push your initialized bucket, use the <!>.",1),Ce=_("This will create your bucket in the Console with all of your <!> configurations.",1),Ae=_("<!><!><!><!><!><!>",1),ye=_("<!><!><!>",1),De=_("<!>.",1),Se=_("Backrush provides added security settings for your buckets. Enable encryption under your bucket&#39;s <!> &gt; <!>. You can enable encryption to encrypt files in your buckets. If your files are leaked, encrypted files cannot be read by the malicious actor. Files bigger than 20MB cannot be encrypted.",1),Ye=_("Backrush allows you to compress your files. Two algorithms are available, which are <!> and <!>. You can enable compress under your bucket&#39;s <!> &gt; <!>. For files larger than 20MB, compression will be skipped even when enabled.",1),xe=_("Limit the maximum file size allowed in the bucket to prevent abuse. You can configure maximum file size under your bucket&#39;s <!> &gt; <!>.",1),Te=_("Limit the file extensions allowed in the bucket to prevent abuse. A maximum of 100 file extensions can be added. Leave blank to allow all file types. You can configure maximum file size under your bucket&#39;s <!> &gt; <!>.",1),Be=_("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function at(ne){_e(ne,ce(ge,{children:(oe,Ke)=>{var j=Be(),N=ie(j);v(N,{children:(s,k)=>{e();var o=n("Storage buckets are a group of files, similar to collections in Backrush Databases. Buckets let you limit file size and extensions, whether or not to encrypt the files, and more.");t(s,o)},$$slots:{default:!0}});var R=r(N);B(R,{id:"create-bucket",level:1,children:(s,k)=>{e();var o=n("Create Bucket");t(s,o)},$$slots:{default:!0}});var M=r(R);v(M,{children:(s,k)=>{e();var o=fe(),p=r(m(o));S(p,{href:"/docs/sdks#server",children:(c,g)=>{e();var a=n("Server SDK");t(c,a)},$$slots:{default:!0}});var I=r(p,2);S(I,{href:"/docs/tooling/command-line/buckets",children:(c,g)=>{e();var a=n("CLI");t(c,a)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var G=r(M);pe(G,{children:(s,k)=>{var o=ye(),p=m(o);O(p,{id:"console",title:"Console",children:(g,a)=>{var b=he(),h=m(b);v(h,{children:(w,x)=>{e();var f=me(),i=r(m(f));y(i,{marker:"**",children:(l,d)=>{e();var E=n("Storage");t(l,E)},$$slots:{default:!0}});var P=r(i,2);y(P,{marker:"**",children:(l,d)=>{e();var E=n("Create bucket");t(l,E)},$$slots:{default:!0}}),e(),t(w,f)},$$slots:{default:!0}});var Y=r(h);ue(Y,{children:(w,x)=>{v(w,{children:(f,i)=>{re(f,{src:"/images/docs/storage/dark/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}});var T=r(Y);$e(T,{children:(w,x)=>{v(w,{children:(f,i)=>{re(f,{src:"/images/docs/storage/create-bucket.png",alt:"Create bucket on console"})},$$slots:{default:!0}})}}),t(g,b)},$$slots:{default:!0}});var I=r(p);O(I,{id:"server-sdk",title:"Server SDK",children:(g,a)=>{var b=we(),h=m(b);v(h,{children:(w,x)=>{e();var f=Pe(),i=r(m(f));S(i,{href:"/docs/sdks#server",children:(d,E)=>{e();var A=n("Server SDK");t(d,A)},$$slots:{default:!0}});var P=r(i,2);S(P,{href:"/docs/sdks#server",children:(d,E)=>{e();var A=n("Server SDKs");t(d,A)},$$slots:{default:!0}});var l=r(P,2);S(l,{href:"/docs/advanced/platform/api-keys",children:(d,E)=>{e();var A=n("API key");t(d,A)},$$slots:{default:!0}}),e(),t(w,f)},$$slots:{default:!0}});var Y=r(h);de(Y,{children:(w,x)=>{var f=ke(),i=m(f);C(i,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const storage = new sdk.Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = storage.createBucket('[BUCKET_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"server-nodejs",process:!0,children:(u,D)=>{e();var $=n(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const storage = new sdk.Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = storage.createBucket('[BUCKET_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);t(u,$)},$$slots:{default:!0}});var P=r(i);C(P,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let storage = new sdk.Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = storage.createBucket('[BUCKET_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"deno",process:!0,children:(u,D)=>{e();var $=n(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let storage = new sdk.Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = storage.createBucket('[BUCKET_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);t(u,$)},$$slots:{default:!0}});var l=r(P);C(l,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Storage;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$storage = new Storage($client);

$result = $storage->createBucket('[BUCKET_ID]', '[NAME]');
`,language:"php",process:!0,children:(u,D)=>{e();var $=n(`<?php

use Backrush\\Client;
use Backrush\\Services\\Storage;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$storage = new Storage($client);

$result = $storage->createBucket('[BUCKET_ID]', '[NAME]');`);t(u,$)},$$slots:{default:!0}});var d=r(l);C(d,{content:`from appwrite.client import Client
from appwrite.services.storage import Storage

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>') # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

storage = Storage(client)

result = storage.create_bucket('[BUCKET_ID]', '[NAME]')
`,language:"python",process:!0,children:(u,D)=>{e();var $=n(`from appwrite.client import Client
from appwrite.services.storage import Storage

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>') # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

storage = Storage(client)

result = storage.create_bucket('[BUCKET_ID]', '[NAME]')`);t(u,$)},$$slots:{default:!0}});var E=r(d);C(E,{content:`require 'Backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

storage = Storage.new(client)

response = storage.create_bucket(bucket_id: '[BUCKET_ID]', name: '[NAME]')

puts response.inspect
`,language:"ruby",process:!0,children:(u,D)=>{e();var $=n(`require 'Backrush'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

storage = Storage.new(client)

response = storage.create_bucket(bucket_id: '[BUCKET_ID]', name: '[NAME]')

puts response.inspect`);t(u,$)},$$slots:{default:!0}});var A=r(E);C(A,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var storage = new Storage(client);

Bucket result = await storage.CreateBucket(
    bucketId: "[BUCKET_ID]",
    name: "[NAME]");
`,language:"csharp",process:!0,children:(u,D)=>{e();var $=n(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var storage = new Storage(client);

Bucket result = await storage.CreateBucket(
    bucketId: "[BUCKET_ID]",
    name: "[NAME]");`);t(u,$)},$$slots:{default:!0}});var Z=r(A);C(Z,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = storage.createBucket(
    bucketId: '[BUCKET_ID]',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(u,D)=>{e();var $=n(`import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = storage.createBucket(
    bucketId: '[BUCKET_ID]',
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(u,$)},$$slots:{default:!0}});var ee=r(Z);C(ee,{content:`import io.appwrite.Client
import io.appwrite.services.Storage

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val storage = Storage(client)

val response = storage.createBucket(
    bucketId = "[BUCKET_ID]",
    name = "[NAME]",
)
`,language:"kotlin",process:!0,children:(u,D)=>{e();var $=n(`import io.appwrite.Client
import io.appwrite.services.Storage

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val storage = Storage(client)

val response = storage.createBucket(
    bucketId = "[BUCKET_ID]",
    name = "[NAME]",
)`);t(u,$)},$$slots:{default:!0}});var te=r(ee);C(te,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Storage;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Storage storage = new Storage(client);

storage.createBucket(
    "[BUCKET_ID]",
    "[NAME]",
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(u,D)=>{e();var $=n(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Storage;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Storage storage = new Storage(client);

storage.createBucket(
    "[BUCKET_ID]",
    "[NAME]",
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(u,$)},$$slots:{default:!0}});var ae=r(te);C(ae,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let storage = Storage(client)

let bucket = try await storage.createBucket(
    bucketId: "[BUCKET_ID]",
    name: "[NAME]"
)

`,language:"swift",process:!0,children:(u,D)=>{e();var $=n(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let storage = Storage(client)

let bucket = try await storage.createBucket(
    bucketId: "[BUCKET_ID]",
    name: "[NAME]"
)`);t(u,$)},$$slots:{default:!0}}),t(w,f)},$$slots:{default:!0}});var T=r(Y);v(T,{children:(w,x)=>{e();var f=Ie(),i=r(m(f));K(i,{content:"createBucket"});var P=r(i,2);K(P,{content:"createBucket"});var l=r(P,2);S(l,{href:"/docs/references/cloud/server-nodejs/storage#createBucket",children:(d,E)=>{e();var A=n("API references");t(d,A)},$$slots:{default:!0}}),e(),t(w,f)},$$slots:{default:!0}}),t(g,b)},$$slots:{default:!0}});var c=r(I);O(c,{id:"cli",title:"CLI",children:(g,a)=>{var b=Ae(),h=m(b);v(h,{children:(i,P)=>{e();var l=Ee(),d=r(m(l));K(d,{content:"appwrite init buckets"}),e(),t(i,l)},$$slots:{default:!0}});var Y=r(h);C(Y,{content:`appwrite init buckets
`,language:"sh",process:!0,children:(i,P)=>{e();var l=n("appwrite init buckets");t(i,l)},$$slots:{default:!0}});var T=r(Y);v(T,{children:(i,P)=>{e();var l=be(),d=r(m(l));K(d,{content:"appwrite.json"});var E=r(d,2);K(E,{content:"appwrite push buckets"}),e(),t(i,l)},$$slots:{default:!0}});var w=r(T);C(w,{content:`appwrite push buckets
`,language:"sh",process:!0,children:(i,P)=>{e();var l=n("appwrite push buckets");t(i,l)},$$slots:{default:!0}});var x=r(w);v(x,{children:(i,P)=>{e();var l=Ce(),d=r(m(l));K(d,{content:"appwrite.json"}),e(),t(i,l)},$$slots:{default:!0}});var f=r(x);ve(f,{href:"/docs/tooling/command-line/buckets#commands",children:(i,P)=>{v(i,{children:(l,d)=>{e();var E=n("Learn more about the CLI buckets commands");t(l,E)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(g,b)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var J=r(G);B(J,{id:"permissions",level:1,children:(s,k)=>{e();var o=n("Permissions");t(s,o)},$$slots:{default:!0}});var U=r(J);v(U,{children:(s,k)=>{e();var o=n("Backrush uses permissions to control file access. For security, only users that are granted permissions can access a file. This helps prevent accidental data leaks by forcing you to make more concious decisions around permissions.");t(s,o)},$$slots:{default:!0}});var z=r(U);v(z,{children:(s,k)=>{e();var o=n("By default, Backrush doesn't grants permissions to any users when a new bucket is created. This means users can't create new files or read, update, and delete existing files.");t(s,o)},$$slots:{default:!0}});var L=r(z);v(L,{children:(s,k)=>{var o=De(),p=m(o);S(p,{href:"/docs/products/storage/permissions",children:(I,c)=>{e();var g=n("Learn about configuring permissions");t(I,g)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var F=r(L);B(F,{id:"encryption",level:1,children:(s,k)=>{e();var o=n("Encryption");t(s,o)},$$slots:{default:!0}});var q=r(F);v(q,{children:(s,k)=>{e();var o=Se(),p=r(m(o));y(p,{marker:"**",children:(c,g)=>{e();var a=n("Settings");t(c,a)},$$slots:{default:!0}});var I=r(p,2);y(I,{marker:"**",children:(c,g)=>{e();var a=n("Security settings");t(c,a)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var H=r(q);B(H,{id:"compression",level:1,children:(s,k)=>{e();var o=n("Compression");t(s,o)},$$slots:{default:!0}});var Q=r(H);v(Q,{children:(s,k)=>{e();var o=Ye(),p=r(m(o));S(p,{href:"https://www.gzip.org/",children:(a,b)=>{e();var h=n("gzip");t(a,h)},$$slots:{default:!0}});var I=r(p,2);S(I,{href:"https://github.com/facebook/zstd",children:(a,b)=>{e();var h=n("zstd");t(a,h)},$$slots:{default:!0}});var c=r(I,2);y(c,{marker:"**",children:(a,b)=>{e();var h=n("Settings");t(a,h)},$$slots:{default:!0}});var g=r(c,2);y(g,{marker:"**",children:(a,b)=>{e();var h=n("Compression");t(a,h)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var V=r(Q);B(V,{id:"max-size",level:1,children:(s,k)=>{e();var o=n("Maximum file size");t(s,o)},$$slots:{default:!0}});var W=r(V);v(W,{children:(s,k)=>{e();var o=xe(),p=r(m(o));y(p,{marker:"**",children:(c,g)=>{e();var a=n("Settings");t(c,a)},$$slots:{default:!0}});var I=r(p,2);y(I,{marker:"**",children:(c,g)=>{e();var a=n("Maximum file size");t(c,a)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var X=r(W);B(X,{id:"extensions",level:1,children:(s,k)=>{e();var o=n("File extensions");t(s,o)},$$slots:{default:!0}});var se=r(X);v(se,{children:(s,k)=>{e();var o=Te(),p=r(m(o));y(p,{marker:"**",children:(c,g)=>{e();var a=n("Settings");t(c,a)},$$slots:{default:!0}});var I=r(p,2);y(I,{marker:"**",children:(c,g)=>{e();var a=n("File extensions");t(c,a)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}}),le(j),t(oe,j)},$$slots:{default:!0}}))}export{at as component};
