import{t as Y,b as o,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Ie,s as n,f as T,n as t,r as ke}from"../chunks/NgVQVlRK.js";import{n as Pe}from"../chunks/B4IyMRKX.js";import{H as F}from"../chunks/CXsRaEhZ.js";import{M as L}from"../chunks/hMT8fFzP.js";import{T as X,a as G}from"../chunks/BHbEtIoO.js";import{O as B,a as q}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as b}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as H}from"../chunks/DXp9_3zM.js";import{F as l}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as O}from"../chunks/D8YsId2T.js";import{S as N}from"../chunks/yHjwcyUH.js";import{L as j}from"../chunks/yh4_9ChP.js";import{A as Ee}from"../chunks/CqOphJLh.js";const $e={layout:"article",title:"File tokens",description:"Easily share files with external users using file tokens."};var ve=Y("To create a file token, you must <!> to a <!>.",1),Ye=Y("Head to the <!> page, open a file inside a bucket, scroll down to the <!> section, and click on the <!> button.",1),we=Y("You can then click on the three-dots menu, click on <!> and get the token-based preview, view, and download URLs for the file.",1),Te=Y("<!><!><!><!><!><!>",1),Oe=Y("You can create file tokens programmatically using a <!>. Backrush&#39;s Server SDKs require an <!> with the <!> scope enabled.",1),fe=Y("<!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Re=Y("The created token can then be used along with Backrush Storage&#39;s <!>, <!>, and <!> endpoints.",1),Ae=Y("<!><!><!>",1),Ce=Y("<!><!>",1),De=Y("Head to the <!> page, open a file inside a bucket, and scroll down to the <!> section.",1),he=Y("<!><!><!>",1),ge=Y("You can list all file tokens programmatically using a <!>. Backrush&#39;s Server SDKs require an <!> with the <!> scope enabled.",1),me=Y("<!><!><!><!><!><!><!><!><!><!><!><!>",1),Ke=Y("Using the token IDs, you can also get data pertaining to an <!>.",1),ye=Y("<!><!><!><!><!><!><!><!><!>",1),Ue=Y("<!><!><!><!>",1),je=Y("<!><!>",1),xe=Y("Head to the <!> page, open a file inside a bucket, and scroll down to the <!> section. Click on the three-dots menu next to the created file token and click on <!>.",1),Ne=Y("<!><!><!>",1),be=Y("You can update file token expiry programmatically using a <!>. Backrush&#39;s Server SDKs require an <!> with the <!> scope enabled.",1),Se=Y("<!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Je=Y("<!><!>",1),Ge=Y("<!><!>",1),Fe=Y("Head to the <!> page, open a file inside a bucket, and scroll down to the <!> section. Click on the three-dots menu next to the created file token and click on <!>.",1),Le=Y("<!><!><!>",1),Be=Y("You can delete a file token programmatically using a <!>. Backrush&#39;s Server SDKs require an <!> with the <!> scope enabled.",1),qe=Y("<!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Xe=Y("<!><!>",1),He=Y("<!><!>",1),Me=Y("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Yn(de){Ee(de,Pe($e,{children:(ue,We)=>{var M=Me(),W=Ie(M);O(W,{children:($,y)=>{t();var P=o("File tokens are a type of secret that allow you to share files publicly with anyone. By using file tokens, you can let any external user access your file without having to configure bucket or file permissions. File tokens can either be set to expire on a specific date or work indefinitely.");e($,P)},$$slots:{default:!0}});var Q=n(W);F(Q,{level:1,children:($,y)=>{t();var P=o("File tokens vs secure cookies");e($,P)},$$slots:{default:!0}});var z=n(Q);O(z,{children:($,y)=>{t();var P=o("Currently, Backrush uses secure cookies to manage sessions for users, which are essential for any Backrush products with permissions configured. However, because the cookies sent to the users of apps consuming the Backrush API are considered third-party cookies, certain browsers tend to block them due to their default privacy settings, creating a bad user experience.");e($,P)},$$slots:{default:!0}});var V=n(z);O(V,{children:($,y)=>{t();var P=o("One way to circumvent this issue in the past was to connect a custom domain to your Backrush project, as browsers don't inherently block any cookies returned by subdomains of your app. File tokens offer an alternative, simpler path for file sharing in Backrush Storage, as they don't depend on the session for authorization to share data.");e($,P)},$$slots:{default:!0}});var Z=n(V);F(Z,{level:1,children:($,y)=>{t();var P=o("Create file tokens");e($,P)},$$slots:{default:!0}});var ee=n(Z);O(ee,{children:($,y)=>{t();var P=ve(),U=n(T(P));j(U,{href:"/docs/products/storage/upload-download",children:(g,J)=>{t();var f=o("upload a file");e(g,f)},$$slots:{default:!0}});var S=n(U,2);j(S,{href:"/docs/products/storage/buckets",children:(g,J)=>{t();var f=o("storage bucket");e(g,f)},$$slots:{default:!0}}),t(),e($,P)},$$slots:{default:!0}});var ne=n(ee);X(ne,{children:($,y)=>{var P=Ce(),U=T(P);G(U,{id:"console",title:"Console",children:(g,J)=>{var f=Te(),A=T(f);O(A,{children:(p,I)=>{t();var c=Ye(),a=n(T(c));N(a,{marker:"**",children:(R,K)=>{t();var h=o("Storage");e(R,h)},$$slots:{default:!0}});var u=n(a,2);N(u,{marker:"**",children:(R,K)=>{t();var h=o("File tokens");e(R,h)},$$slots:{default:!0}});var k=n(u,2);N(k,{marker:"**",children:(R,K)=>{t();var h=o("Create file token");e(R,h)},$$slots:{default:!0}}),t(),e(p,c)},$$slots:{default:!0}});var C=n(A);B(C,{children:(p,I)=>{O(p,{children:(c,a)=>{b(c,{src:"/images/docs/storage/dark/create-file-token.png",alt:"Create file token"})},$$slots:{default:!0}})}});var D=n(C);q(D,{children:(p,I)=>{O(p,{children:(c,a)=>{b(c,{src:"/images/docs/storage/create-file-token.png",alt:"Create file token"})},$$slots:{default:!0}})}});var v=n(D);O(v,{children:(p,I)=>{t();var c=we(),a=n(T(c));N(a,{marker:"**",children:(u,k)=>{t();var R=o("Copy URL");e(u,R)},$$slots:{default:!0}}),t(),e(p,c)},$$slots:{default:!0}});var E=n(v);B(E,{children:(p,I)=>{O(p,{children:(c,a)=>{b(c,{src:"/images/docs/storage/dark/copy-file-token-url.png",alt:"Copy file token-based URL"})},$$slots:{default:!0}})}});var _=n(E);q(_,{children:(p,I)=>{O(p,{children:(c,a)=>{b(c,{src:"/images/docs/storage/copy-file-token-url.png",alt:"Copy file token-based URL"})},$$slots:{default:!0}})}}),e(g,f)},$$slots:{default:!0}});var S=n(U);G(S,{id:"server-sdk",title:"Server SDK",children:(g,J)=>{var f=Ae(),A=T(f);O(A,{children:(v,E)=>{t();var _=Oe(),p=n(T(_));j(p,{href:"/docs/references/cloud/server-nodejs/tokens#createFileToken",children:(a,u)=>{t();var k=o("Server SDK");e(a,k)},$$slots:{default:!0}});var I=n(p,2);j(I,{href:"/docs/advanced/platform/api-keys",children:(a,u)=>{t();var k=o("API key");e(a,k)},$$slots:{default:!0}});var c=n(I,2);H(c,{content:"tokens.write"}),t(),e(v,_)},$$slots:{default:!0}});var C=n(A);L(C,{children:(v,E)=>{var _=fe(),p=T(_);l(p,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.createFileToken(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '' // expire (optional)
);
`,language:"server-nodejs",process:!0,children:(s,r)=>{t();var d=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.createFileToken(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '' // expire (optional)
);`);e(s,d)},$$slots:{default:!0}});var I=n(p);l(I,{content:`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.create_file_token(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    expire = '' # optional
)
`,language:"server-python",process:!0,children:(s,r)=>{t();var d=o(`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.create_file_token(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    expire = '' # optional
)`);e(s,d)},$$slots:{default:!0}});var c=n(I);l(c,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceToken result = await tokens.createFileToken(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    expire: '', // (optional)
);
`,language:"server-dart",process:!0,children:(s,r)=>{t();var d=o(`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceToken result = await tokens.createFileToken(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    expire: '', // (optional)
);`);e(s,d)},$$slots:{default:!0}});var a=n(c);l(a,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->createFileToken(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    expire: '' // optional
);
`,language:"server-php",process:!0,children:(s,r)=>{t();var d=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->createFileToken(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    expire: '' // optional
);`);e(s,d)},$$slots:{default:!0}});var u=n(a);l(u,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.create_file_token(
    bucket_id: '<BUCKET_ID>',
    file_id: '<FILE_ID>',
    expire: '' # optional
)
`,language:"server-ruby",process:!0,children:(s,r)=>{t();var d=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.create_file_token(
    bucket_id: '<BUCKET_ID>',
    file_id: '<FILE_ID>',
    expire: '' # optional
)`);e(s,d)},$$slots:{default:!0}});var k=n(u);l(k,{content:`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceToken result = await tokens.CreateFileToken(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    expire: "" // optional
);
`,language:"server-dotnet",process:!0,children:(s,r)=>{t();var d=o(`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceToken result = await tokens.CreateFileToken(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    expire: "" // optional
);`);e(s,d)},$$slots:{default:!0}});var R=n(k);l(R,{content:`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.createFileToken(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '' // expire (optional)
);
`,language:"server-deno",process:!0,children:(s,r)=>{t();var d=o(`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.createFileToken(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '' // expire (optional)
);`);e(s,d)},$$slots:{default:!0}});var K=n(R);l(K,{content:`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.CreateFileToken(
        "<BUCKET_ID>",
        "<FILE_ID>",
        tokens.WithCreateFileTokenExpire(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}
`,language:"server-go",process:!0,children:(s,r)=>{t();var d=o(`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.CreateFileToken(
        "<BUCKET_ID>",
        "<FILE_ID>",
        tokens.WithCreateFileTokenExpire(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}`);e(s,d)},$$slots:{default:!0}});var h=n(K);l(h,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceToken = try await tokens.createFileToken(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    expire: "" // optional
)
`,language:"server-swift",process:!0,children:(s,r)=>{t();var d=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceToken = try await tokens.createFileToken(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    expire: "" // optional
)`);e(s,d)},$$slots:{default:!0}});var x=n(h);l(x,{content:`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.createFileToken(
    bucketId = "<BUCKET_ID>",
    fileId = "<FILE_ID>",
    expire = "" // optional
)
`,language:"server-kotlin",process:!0,children:(s,r)=>{t();var d=o(`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.createFileToken(
    bucketId = "<BUCKET_ID>",
    fileId = "<FILE_ID>",
    expire = "" // optional
)`);e(s,d)},$$slots:{default:!0}});var w=n(x);l(w,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.createFileToken(
    "<BUCKET_ID>", // bucketId
    "<FILE_ID>", // fileId
    "", // expire (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"server-java",process:!0,children:(s,r)=>{t();var d=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.createFileToken(
    "<BUCKET_ID>", // bucketId
    "<FILE_ID>", // fileId
    "", // expire (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(s,d)},$$slots:{default:!0}});var m=n(w);l(m,{content:`mutation {
    tokensCreateFileToken(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        expire: ""
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}
`,language:"server-graphql",process:!0,children:(s,r)=>{t();var d=o(`mutation {
    tokensCreateFileToken(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        expire: ""
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}`);e(s,d)},$$slots:{default:!0}});var i=n(m);l(i,{content:`POST /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>

{
  "expire": 
}
`,language:"server-rest",process:!0,children:(s,r)=>{t();var d=o(`POST /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>

{
  "expire": 
}`);e(s,d)},$$slots:{default:!0}}),e(v,_)},$$slots:{default:!0}});var D=n(C);O(D,{children:(v,E)=>{t();var _=Re(),p=n(T(_));j(p,{href:"/docs/references/cloud/server-nodejs/storage#getFileView",children:(a,u)=>{t();var k=o("view");e(a,k)},$$slots:{default:!0}});var I=n(p,2);j(I,{href:"/docs/references/cloud/server-nodejs/storage#getFilePreview",children:(a,u)=>{t();var k=o("preview");e(a,k)},$$slots:{default:!0}});var c=n(I,2);j(c,{href:"/docs/references/cloud/server-nodejs/storage#getFileDownload",children:(a,u)=>{t();var k=o("download");e(a,k)},$$slots:{default:!0}}),t(),e(v,_)},$$slots:{default:!0}}),e(g,f)},$$slots:{default:!0}}),e($,P)},$$slots:{default:!0}});var te=n(ne);F(te,{level:1,children:($,y)=>{t();var P=o("List all file tokens");e($,P)},$$slots:{default:!0}});var oe=n(te);O(oe,{children:($,y)=>{t();var P=o("You can use the Backrush Console or one of the Server SDKs to view all created file tokens, their expiry dates and the time each token was last accessed at.");e($,P)},$$slots:{default:!0}});var re=n(oe);X(re,{children:($,y)=>{var P=je(),U=T(P);G(U,{id:"console",title:"Console",children:(g,J)=>{var f=he(),A=T(f);O(A,{children:(v,E)=>{t();var _=De(),p=n(T(_));N(p,{marker:"**",children:(c,a)=>{t();var u=o("Storage");e(c,u)},$$slots:{default:!0}});var I=n(p,2);N(I,{marker:"**",children:(c,a)=>{t();var u=o("File tokens");e(c,u)},$$slots:{default:!0}}),t(),e(v,_)},$$slots:{default:!0}});var C=n(A);B(C,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/dark/list-file-tokens.png",alt:"List of file tokens"})},$$slots:{default:!0}})}});var D=n(C);q(D,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/list-file-tokens.png",alt:"List of file tokens"})},$$slots:{default:!0}})}}),e(g,f)},$$slots:{default:!0}});var S=n(U);G(S,{id:"server-sdk",title:"Server SDK",children:(g,J)=>{var f=Ue(),A=T(f);O(A,{children:(E,_)=>{t();var p=ge(),I=n(T(p));j(I,{href:"/docs/references/cloud/server-nodejs/tokens#list",children:(u,k)=>{t();var R=o("Server SDK");e(u,R)},$$slots:{default:!0}});var c=n(I,2);j(c,{href:"/docs/advanced/platform/api-keys",children:(u,k)=>{t();var R=o("API key");e(u,R)},$$slots:{default:!0}});var a=n(c,2);H(a,{content:"tokens.read"}),t(),e(E,p)},$$slots:{default:!0}});var C=n(A);L(C,{children:(E,_)=>{var p=me(),I=T(p);l(I,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.list(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    [] // queries (optional)
);
`,language:"server-nodejs",process:!0,children:(s,r)=>{t();var d=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.list(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    [] // queries (optional)
);`);e(s,d)},$$slots:{default:!0}});var c=n(I);l(c,{content:`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.list(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    queries = [] # optional
)
`,language:"server-python",process:!0,children:(s,r)=>{t();var d=o(`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.list(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    queries = [] # optional
)`);e(s,d)},$$slots:{default:!0}});var a=n(c);l(a,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceTokenList result = await tokens.list(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    queries: [], // (optional)
);
`,language:"server-dart",process:!0,children:(s,r)=>{t();var d=o(`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceTokenList result = await tokens.list(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    queries: [], // (optional)
);`);e(s,d)},$$slots:{default:!0}});var u=n(a);l(u,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->list(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    queries: [] // optional
);
`,language:"server-php",process:!0,children:(s,r)=>{t();var d=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->list(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    queries: [] // optional
);`);e(s,d)},$$slots:{default:!0}});var k=n(u);l(k,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.list(
    bucket_id: '<BUCKET_ID>',
    file_id: '<FILE_ID>',
    queries: [] # optional
)
`,language:"server-ruby",process:!0,children:(s,r)=>{t();var d=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.list(
    bucket_id: '<BUCKET_ID>',
    file_id: '<FILE_ID>',
    queries: [] # optional
)`);e(s,d)},$$slots:{default:!0}});var R=n(k);l(R,{content:`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceTokenList result = await tokens.List(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    queries: new List<string>() // optional
);
`,language:"server-dotnet",process:!0,children:(s,r)=>{t();var d=o(`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceTokenList result = await tokens.List(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    queries: new List<string>() // optional
);`);e(s,d)},$$slots:{default:!0}});var K=n(R);l(K,{content:`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.list(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    [] // queries (optional)
);
`,language:"server-deno",process:!0,children:(s,r)=>{t();var d=o(`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.list(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    [] // queries (optional)
);`);e(s,d)},$$slots:{default:!0}});var h=n(K);l(h,{content:`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.List(
        "<BUCKET_ID>",
        "<FILE_ID>",
        tokens.WithListQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}
`,language:"server-go",process:!0,children:(s,r)=>{t();var d=o(`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.List(
        "<BUCKET_ID>",
        "<FILE_ID>",
        tokens.WithListQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}`);e(s,d)},$$slots:{default:!0}});var x=n(h);l(x,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceTokenList = try await tokens.list(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    queries: [] // optional
)
`,language:"server-swift",process:!0,children:(s,r)=>{t();var d=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceTokenList = try await tokens.list(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    queries: [] // optional
)`);e(s,d)},$$slots:{default:!0}});var w=n(x);l(w,{content:`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.list(
    bucketId = "<BUCKET_ID>",
    fileId = "<FILE_ID>",
    queries = listOf() // optional
)
`,language:"server-kotlin",process:!0,children:(s,r)=>{t();var d=o(`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.list(
    bucketId = "<BUCKET_ID>",
    fileId = "<FILE_ID>",
    queries = listOf() // optional
)`);e(s,d)},$$slots:{default:!0}});var m=n(w);l(m,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.list(
    "<BUCKET_ID>", // bucketId
    "<FILE_ID>", // fileId
    listOf(), // queries (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"server-java",process:!0,children:(s,r)=>{t();var d=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.list(
    "<BUCKET_ID>", // bucketId
    "<FILE_ID>", // fileId
    listOf(), // queries (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(s,d)},$$slots:{default:!0}});var i=n(m);l(i,{content:`GET /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>
`,language:"server-rest",process:!0,children:(s,r)=>{t();var d=o(`GET /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>`);e(s,d)},$$slots:{default:!0}}),e(E,p)},$$slots:{default:!0}});var D=n(C);O(D,{children:(E,_)=>{t();var p=Ke(),I=n(T(p));j(I,{href:"/docs/references/cloud/server-nodejs/tokens#get",children:(c,a)=>{t();var u=o("individual file token");e(c,u)},$$slots:{default:!0}}),t(),e(E,p)},$$slots:{default:!0}});var v=n(D);L(v,{children:(E,_)=>{var p=ye(),I=T(p);l(I,{content:`const token = await tokens.get(
    '<TOKEN_ID>' // tokenId
);
`,language:"server-nodejs",process:!0,children:(w,m)=>{t();var i=o(`const token = await tokens.get(
    '<TOKEN_ID>' // tokenId
);`);e(w,i)},$$slots:{default:!0}});var c=n(I);l(c,{content:`token = tokens.get(
    token_id = '<TOKEN_ID>'
)
`,language:"server-python",process:!0,children:(w,m)=>{t();var i=o(`token = tokens.get(
    token_id = '<TOKEN_ID>'
)`);e(w,i)},$$slots:{default:!0}});var a=n(c);l(a,{content:`ResourceToken token = await tokens.get(
    tokenId: '<TOKEN_ID>',
);
`,language:"server-dart",process:!0,children:(w,m)=>{t();var i=o(`ResourceToken token = await tokens.get(
    tokenId: '<TOKEN_ID>',
);`);e(w,i)},$$slots:{default:!0}});var u=n(a);l(u,{content:`$token = $tokens->get(
    tokenId: '<TOKEN_ID>'
);
`,language:"server-php",process:!0,children:(w,m)=>{t();var i=o(`$token = $tokens->get(
    tokenId: '<TOKEN_ID>'
);`);e(w,i)},$$slots:{default:!0}});var k=n(u);l(k,{content:`token = tokens.get(
    token_id: '<TOKEN_ID>'
)
`,language:"server-ruby",process:!0,children:(w,m)=>{t();var i=o(`token = tokens.get(
    token_id: '<TOKEN_ID>'
)`);e(w,i)},$$slots:{default:!0}});var R=n(k);l(R,{content:`ResourceToken token = await tokens.Get(
    tokenId: "<TOKEN_ID>"
);
`,language:"server-dotnet",process:!0,children:(w,m)=>{t();var i=o(`ResourceToken token = await tokens.Get(
    tokenId: "<TOKEN_ID>"
);`);e(w,i)},$$slots:{default:!0}});var K=n(R);l(K,{content:`const token = await tokens.get(
    '<TOKEN_ID>' // tokenId
);
`,language:"server-deno",process:!0,children:(w,m)=>{t();var i=o(`const token = await tokens.get(
    '<TOKEN_ID>' // tokenId
);`);e(w,i)},$$slots:{default:!0}});var h=n(K);l(h,{content:`token, error := service.Get(
    "<TOKEN_ID>",
)

if error != nil {
    panic(error)
}

fmt.Println(token)
    \`\`\`

\`\`\`server-swift
let resourceToken = try await tokens.get(
    tokenId: "<TOKEN_ID>"
)
`,language:"server-go",process:!0,children:(w,m)=>{t();var i=o(`token, error := service.Get(
    "<TOKEN_ID>",
)

if error != nil {
    panic(error)
}

fmt.Println(token)
    \`\`\`

\`\`\`server-swift
let resourceToken = try await tokens.get(
    tokenId: "<TOKEN_ID>"
)`);e(w,i)},$$slots:{default:!0}});var x=n(h);l(x,{content:`val token = tokens.get(
    tokenId = "<TOKEN_ID>"
)\`\`\`

\`\`\`server-java
tokens.get(
    "<TOKEN_ID>", // tokenId
    new CoroutineCallback<>((token, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(token);
    })
);\`\`\`

\`\`\`server-rest
GET /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>
`,language:"server-kotlin",process:!0,children:(w,m)=>{t();var i=o(`val token = tokens.get(
    tokenId = "<TOKEN_ID>"
)\`\`\`

\`\`\`server-java
tokens.get(
    "<TOKEN_ID>", // tokenId
    new CoroutineCallback<>((token, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(token);
    })
);\`\`\`

\`\`\`server-rest
GET /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>`);e(w,i)},$$slots:{default:!0}}),e(E,p)},$$slots:{default:!0}}),e(g,f)},$$slots:{default:!0}}),e($,P)},$$slots:{default:!0}});var se=n(re);F(se,{level:1,children:($,y)=>{t();var P=o("Update file token expiry");e($,P)},$$slots:{default:!0}});var ie=n(se);O(ie,{children:($,y)=>{t();var P=o("File tokens can be set to expire on a specific date or stay active forever. This helps keep your files secure by making sure access ends after a set time.");e($,P)},$$slots:{default:!0}});var le=n(ie);O(le,{children:($,y)=>{t();var P=o("While the expiry of a file token is set at the time of creation, you can update it later.");e($,P)},$$slots:{default:!0}});var pe=n(le);X(pe,{children:($,y)=>{var P=Ge(),U=T(P);G(U,{id:"console",title:"Console",children:(g,J)=>{var f=Ne(),A=T(f);O(A,{children:(v,E)=>{t();var _=xe(),p=n(T(_));N(p,{marker:"**",children:(a,u)=>{t();var k=o("Storage");e(a,k)},$$slots:{default:!0}});var I=n(p,2);N(I,{marker:"**",children:(a,u)=>{t();var k=o("File tokens");e(a,k)},$$slots:{default:!0}});var c=n(I,2);N(c,{marker:"**",children:(a,u)=>{t();var k=o("Edit expiry");e(a,k)},$$slots:{default:!0}}),t(),e(v,_)},$$slots:{default:!0}});var C=n(A);B(C,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/dark/update-file-token-expiry.png",alt:"Update file token expiry"})},$$slots:{default:!0}})}});var D=n(C);q(D,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/update-file-token-expiry.png",alt:"Update file token expiry"})},$$slots:{default:!0}})}}),e(g,f)},$$slots:{default:!0}});var S=n(U);G(S,{id:"server-sdk",title:"Server SDK",children:(g,J)=>{var f=Je(),A=T(f);O(A,{children:(D,v)=>{t();var E=be(),_=n(T(E));j(_,{href:"/docs/references/cloud/server-nodejs/tokens#update",children:(c,a)=>{t();var u=o("Server SDK");e(c,u)},$$slots:{default:!0}});var p=n(_,2);j(p,{href:"/docs/advanced/platform/api-keys",children:(c,a)=>{t();var u=o("API key");e(c,u)},$$slots:{default:!0}});var I=n(p,2);H(I,{content:"tokens.write"}),t(),e(D,E)},$$slots:{default:!0}});var C=n(A);L(C,{children:(D,v)=>{var E=Se(),_=T(E);l(_,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.update(
    '<TOKEN_ID>', // tokenId
    '' // expire (optional)
);
`,language:"server-nodejs",process:!0,children:(i,s)=>{t();var r=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.update(
    '<TOKEN_ID>', // tokenId
    '' // expire (optional)
);`);e(i,r)},$$slots:{default:!0}});var p=n(_);l(p,{content:`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.update(
    token_id = '<TOKEN_ID>',
    expire = '' # optional
)
`,language:"server-python",process:!0,children:(i,s)=>{t();var r=o(`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.update(
    token_id = '<TOKEN_ID>',
    expire = '' # optional
)`);e(i,r)},$$slots:{default:!0}});var I=n(p);l(I,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceToken result = await tokens.update(
    tokenId: '<TOKEN_ID>',
    expire: '', // (optional)
);
`,language:"server-dart",process:!0,children:(i,s)=>{t();var r=o(`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

ResourceToken result = await tokens.update(
    tokenId: '<TOKEN_ID>',
    expire: '', // (optional)
);`);e(i,r)},$$slots:{default:!0}});var c=n(I);l(c,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->update(
    tokenId: '<TOKEN_ID>',
    expire: '' // optional
);
`,language:"server-php",process:!0,children:(i,s)=>{t();var r=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->update(
    tokenId: '<TOKEN_ID>',
    expire: '' // optional
);`);e(i,r)},$$slots:{default:!0}});var a=n(c);l(a,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.update(
    token_id: '<TOKEN_ID>',
    expire: '' # optional
)
`,language:"server-ruby",process:!0,children:(i,s)=>{t();var r=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.update(
    token_id: '<TOKEN_ID>',
    expire: '' # optional
)`);e(i,r)},$$slots:{default:!0}});var u=n(a);l(u,{content:`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceToken result = await tokens.Update(
    tokenId: "<TOKEN_ID>",
    expire: "" // optional
);
`,language:"server-dotnet",process:!0,children:(i,s)=>{t();var r=o(`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

ResourceToken result = await tokens.Update(
    tokenId: "<TOKEN_ID>",
    expire: "" // optional
);`);e(i,r)},$$slots:{default:!0}});var k=n(u);l(k,{content:`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.update(
    '<TOKEN_ID>', // tokenId
    '' // expire (optional)
);
`,language:"server-deno",process:!0,children:(i,s)=>{t();var r=o(`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.update(
    '<TOKEN_ID>', // tokenId
    '' // expire (optional)
);`);e(i,r)},$$slots:{default:!0}});var R=n(k);l(R,{content:`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.Update(
        "<TOKEN_ID>",
        tokens.WithUpdateExpire(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}
`,language:"server-go",process:!0,children:(i,s)=>{t();var r=o(`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.Update(
        "<TOKEN_ID>",
        tokens.WithUpdateExpire(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}`);e(i,r)},$$slots:{default:!0}});var K=n(R);l(K,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceToken = try await tokens.update(
    tokenId: "<TOKEN_ID>",
    expire: "" // optional
)
`,language:"server-swift",process:!0,children:(i,s)=>{t();var r=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let resourceToken = try await tokens.update(
    tokenId: "<TOKEN_ID>",
    expire: "" // optional
)`);e(i,r)},$$slots:{default:!0}});var h=n(K);l(h,{content:`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.update(
    tokenId = "<TOKEN_ID>",
    expire = "" // optional
)
`,language:"server-kotlin",process:!0,children:(i,s)=>{t();var r=o(`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.update(
    tokenId = "<TOKEN_ID>",
    expire = "" // optional
)`);e(i,r)},$$slots:{default:!0}});var x=n(h);l(x,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.update(
    "<TOKEN_ID>", // tokenId
    "", // expire (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"server-java",process:!0,children:(i,s)=>{t();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.update(
    "<TOKEN_ID>", // tokenId
    "", // expire (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(i,r)},$$slots:{default:!0}});var w=n(x);l(w,{content:`mutation {
    tokensUpdate(
        tokenId: "<TOKEN_ID>",
        expire: ""
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}
`,language:"server-graphql",process:!0,children:(i,s)=>{t();var r=o(`mutation {
    tokensUpdate(
        tokenId: "<TOKEN_ID>",
        expire: ""
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}`);e(i,r)},$$slots:{default:!0}});var m=n(w);l(m,{content:`PATCH /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>

{
  "expire": 
}
`,language:"server-rest",process:!0,children:(i,s)=>{t();var r=o(`PATCH /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>

{
  "expire": 
}`);e(i,r)},$$slots:{default:!0}}),e(D,E)},$$slots:{default:!0}}),e(g,f)},$$slots:{default:!0}}),e($,P)},$$slots:{default:!0}});var ae=n(pe);F(ae,{level:1,children:($,y)=>{t();var P=o("Delete file tokens");e($,P)},$$slots:{default:!0}});var ce=n(ae);O(ce,{children:($,y)=>{t();var P=o("You can use the Backrush Console or one of the Server SDKs to delete a file token.");e($,P)},$$slots:{default:!0}});var _e=n(ce);X(_e,{children:($,y)=>{var P=He(),U=T(P);G(U,{id:"console",title:"Console",children:(g,J)=>{var f=Le(),A=T(f);O(A,{children:(v,E)=>{t();var _=Fe(),p=n(T(_));N(p,{marker:"**",children:(a,u)=>{t();var k=o("Storage");e(a,k)},$$slots:{default:!0}});var I=n(p,2);N(I,{marker:"**",children:(a,u)=>{t();var k=o("File tokens");e(a,k)},$$slots:{default:!0}});var c=n(I,2);N(c,{marker:"**",children:(a,u)=>{t();var k=o("Delete");e(a,k)},$$slots:{default:!0}}),t(),e(v,_)},$$slots:{default:!0}});var C=n(A);B(C,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/dark/delete-file-token.png",alt:"Delete file token"})},$$slots:{default:!0}})}});var D=n(C);q(D,{children:(v,E)=>{O(v,{children:(_,p)=>{b(_,{src:"/images/docs/storage/delete-file-token.png",alt:"Delete file token"})},$$slots:{default:!0}})}}),e(g,f)},$$slots:{default:!0}});var S=n(U);G(S,{id:"server-sdk",title:"Server SDK",children:(g,J)=>{var f=Xe(),A=T(f);O(A,{children:(D,v)=>{t();var E=Be(),_=n(T(E));j(_,{href:"/docs/references/cloud/server-nodejs/tokens#delete",children:(c,a)=>{t();var u=o("Server SDK");e(c,u)},$$slots:{default:!0}});var p=n(_,2);j(p,{href:"/docs/advanced/platform/api-keys",children:(c,a)=>{t();var u=o("API key");e(c,u)},$$slots:{default:!0}});var I=n(p,2);H(I,{content:"tokens.write"}),t(),e(D,E)},$$slots:{default:!0}});var C=n(A);L(C,{children:(D,v)=>{var E=qe(),_=T(E);l(_,{content:`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.delete(
    '<TOKEN_ID>' // tokenId
);
`,language:"server-nodejs",process:!0,children:(i,s)=>{t();var r=o(`const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new sdk.Tokens(client);

const result = await tokens.delete(
    '<TOKEN_ID>' // tokenId
);`);e(i,r)},$$slots:{default:!0}});var p=n(_);l(p,{content:`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.delete(
    token_id = '<TOKEN_ID>'
)
`,language:"server-python",process:!0,children:(i,s)=>{t();var r=o(`from appwrite.client import Client
from appwrite.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens(client)

result = tokens.delete(
    token_id = '<TOKEN_ID>'
)`);e(i,r)},$$slots:{default:!0}});var I=n(p);l(I,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

await tokens.delete(
    tokenId: '<TOKEN_ID>',
);
`,language:"server-dart",process:!0,children:(i,s)=>{t();var r=o(`import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Tokens tokens = Tokens(client);

await tokens.delete(
    tokenId: '<TOKEN_ID>',
);`);e(i,r)},$$slots:{default:!0}});var c=n(I);l(c,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->delete(
    tokenId: '<TOKEN_ID>'
);
`,language:"server-php",process:!0,children:(i,s)=>{t();var r=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Tokens;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->delete(
    tokenId: '<TOKEN_ID>'
);`);e(i,r)},$$slots:{default:!0}});var a=n(c);l(a,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.delete(
    token_id: '<TOKEN_ID>'
)
`,language:"server-ruby",process:!0,children:(i,s)=>{t();var r=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.delete(
    token_id: '<TOKEN_ID>'
)`);e(i,r)},$$slots:{default:!0}});var u=n(a);l(u,{content:`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

await tokens.Delete(
    tokenId: "<TOKEN_ID>"
);
`,language:"server-dotnet",process:!0,children:(i,s)=>{t();var r=o(`using Backrush;
using Backrush.Models;
using Backrush.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

await tokens.Delete(
    tokenId: "<TOKEN_ID>"
);`);e(i,r)},$$slots:{default:!0}});var k=n(u);l(k,{content:`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.delete(
    '<TOKEN_ID>' // tokenId
);
`,language:"server-deno",process:!0,children:(i,s)=>{t();var r=o(`import { Client, Tokens } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tokens = new Tokens(client);

const response = await tokens.delete(
    '<TOKEN_ID>' // tokenId
);`);e(i,r)},$$slots:{default:!0}});var R=n(k);l(R,{content:`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.Delete(
        "<TOKEN_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}
`,language:"server-go",process:!0,children:(i,s)=>{t();var r=o(`package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tokens"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := tokens.NewTokens(client)
    response, error := service.Delete(
        "<TOKEN_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}`);e(i,r)},$$slots:{default:!0}});var K=n(R);l(K,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let result = try await tokens.delete(
    tokenId: "<TOKEN_ID>"
)
`,language:"server-swift",process:!0,children:(i,s)=>{t();var r=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let result = try await tokens.delete(
    tokenId: "<TOKEN_ID>"
)`);e(i,r)},$$slots:{default:!0}});var h=n(K);l(h,{content:`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.delete(
    tokenId = "<TOKEN_ID>"
)
`,language:"server-kotlin",process:!0,children:(i,s)=>{t();var r=o(`import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Tokens

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val tokens = Tokens(client)

val response = tokens.delete(
    tokenId = "<TOKEN_ID>"
)`);e(i,r)},$$slots:{default:!0}});var x=n(h);l(x,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.delete(
    "<TOKEN_ID>", // tokenId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"server-java",process:!0,children:(i,s)=>{t();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Tokens;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Tokens tokens = new Tokens(client);

tokens.delete(
    "<TOKEN_ID>", // tokenId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(i,r)},$$slots:{default:!0}});var w=n(x);l(w,{content:`mutation {
    tokensDelete(
        tokenId: "<TOKEN_ID>"
    ) {
        status
    }
}
`,language:"server-graphql",process:!0,children:(i,s)=>{t();var r=o(`mutation {
    tokensDelete(
        tokenId: "<TOKEN_ID>"
    ) {
        status
    }
}`);e(i,r)},$$slots:{default:!0}});var m=n(w);l(m,{content:`DELETE /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>
`,language:"server-rest",process:!0,children:(i,s)=>{t();var r=o(`DELETE /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Backrush-Response-Format: 1.7.0
X-Backrush-Project: <YOUR_PROJECT_ID>
X-Backrush-Key: <YOUR_API_KEY>`);e(i,r)},$$slots:{default:!0}}),e(D,E)},$$slots:{default:!0}}),e(g,f)},$$slots:{default:!0}}),e($,P)},$$slots:{default:!0}}),ke(M),e(ue,M)},$$slots:{default:!0}}))}export{Yn as component};
