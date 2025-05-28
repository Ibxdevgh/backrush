import{t as o,b as s,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as pt,s as t,f as r,n,r as ft}from"../chunks/NgVQVlRK.js";import{n as vt}from"../chunks/B4IyMRKX.js";import{H as Pe}from"../chunks/CXsRaEhZ.js";import{M as Ie}from"../chunks/hMT8fFzP.js";import{T as at,a as we}from"../chunks/BHbEtIoO.js";import{O as lt,a as it}from"../chunks/uti8MWrk.js";import{A as ht,a as be}from"../chunks/ftq6Xrtz.js";import"../chunks/BZUG4Puk.js";import{I as Ce}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as f}from"../chunks/DXp9_3zM.js";import{F as se}from"../chunks/OFUKRh55.js";import{L as ct,I as me}from"../chunks/BhmTgGWB.js";import{P as ve}from"../chunks/D8YsId2T.js";import{S as he}from"../chunks/yHjwcyUH.js";import{L as h}from"../chunks/yh4_9ChP.js";import{T as ge}from"../chunks/D8BqvLkQ.js";import{T as xe,a as v,b as _e,c as Te,d as a}from"../chunks/BpU_IltG.js";import{A as _t}from"../chunks/CqOphJLh.js";const mt={layout:"article",title:"Execution",description:"Understand serverless function execution in Backrush. Explore how triggers, events, and data flow enable dynamic execution of your code.",difficulty:"beginner",readtime:3};var Pt=o("In the Backrush Console&#39;s sidebar, click <!>.",1),gt=o("Under <!>, set the access to <!> so that anyone can execute the function. You will use <!> to authenticate users.",1),xt=o("Under the <!> tab, you&#39;ll find the generated domain from Backrush and your custom domains. <!>.",1),Tt=o("<!><!><!>",1),wt=o("Notice how a <!> header is passed in the request, you will use this to authenticate users. <!>.",1),bt=o("You can invoke your Backrush Functions directly from the <!>.",1),It=o("<!><!><!><!><!>",1),Ct=o("<!><!><!><!><!><!><!><!><!><!><!>",1),Dt=o("<!><!>",1),Ot=o("Another easy way to test a function is directly in the Backrush Console. You test a function by hitting the <!> button, which will display with modal below.",1),yt=o("In Backrush Console, navigate to <!>.",1),Et=o("Under the <!> tab, navigate to <!>.",1),jt=o("<!><!><!><!><!>",1),Ft=o("In these executions, the event that triggered the function will be passed as the header <!> to the function. The <!> parameter will contain the event data. <!>.",1),St=o("<!><!>",1),At=o("This event triggers on any teams event. Returns <!>",1),kt=o("<!><!>",1),Rt=o("This event triggers when a team is created. Returns <!>",1),Nt=o("<!><!>",1),Yt=o("This event triggers when a team is deleted. Returns <!>",1),Ht=o("<!><!>",1),Ut=o("This event triggers on any team memberships event. Returns <!>",1),Bt=o("<!><!>",1),Jt=o("This event triggers when a membership is created. Returns <!>",1),Gt=o("<!><!>",1),Mt=o("This event triggers when a membership is deleted. Returns <!>",1),Wt=o("<!><!>",1),Kt=o("This event triggers when a membership is updated. Returns <!>",1),qt=o("<!><!>",1),Lt=o("This event triggers when a team memberships status is updated. Returns <!>",1),Xt=o("<!><!>",1),zt=o("This event triggers when a team is updated. Returns <!>",1),Qt=o("<!><!>",1),Vt=o("This event triggers when a team&#39;s preferences are updated. Returns <!>",1),Zt=o("<!><!>",1),en=o("This event triggers on any user&#39;s event. Returns <!>",1),tn=o("<!><!>",1),nn=o("This event triggers when a user is created. Returns <!>",1),on=o("<!><!>",1),rn=o("This event triggers when a user is deleted. Returns <!>",1),sn=o("<!><!>",1),an=o("This event triggers on any user&#39;s recovery token event. Returns <!>",1),ln=o("<!><!>",1),cn=o("This event triggers when a recovery token for a user is created. Returns <!>",1),dn=o("<!><!>",1),un=o("This event triggers when a recovery token for a user is validated. Returns <!>",1),$n=o("<!><!>",1),pn=o("This event triggers on any user&#39;s sessions event. Returns <!>",1),fn=o("<!><!>",1),vn=o("This event triggers when a session for a user is created. Returns <!>",1),hn=o("<!><!>",1),_n=o("This event triggers when a session for a user is deleted. Returns <!>",1),mn=o("<!><!>",1),Pn=o("This event triggers when a user is updated. Returns <!>",1),gn=o("<!><!>",1),xn=o("This event triggers when a user&#39;s email address is updated. Returns <!>",1),Tn=o("<!><!>",1),wn=o("This event triggers when a user&#39;s name is updated. Returns <!>",1),bn=o("<!><!>",1),In=o("This event triggers when a user&#39;s password is updated. Returns <!>",1),Cn=o("<!><!>",1),Dn=o("This event triggers when a user&#39;s preferences is updated. Returns <!>",1),On=o("<!><!>",1),yn=o("This event triggers when a user&#39;s status is updated. Returns <!>",1),En=o("<!><!>",1),jn=o("This event triggers on any user&#39;s verification token event. Returns <!>",1),Fn=o("<!><!>",1),Sn=o("This event triggers when a verification token for a user is created. Returns <!>",1),An=o("<!><!>",1),kn=o("This event triggers when a verification token for a user is validated. Returns <!>",1),Rn=o("<!><!>",1),Nn=o("<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Yn=o("<!><!>",1),Hn=o("<!><!>",1),Un=o("This event triggers on any database event. Returns <!>",1),Bn=o("<!><!>",1),Jn=o("This event triggers on any collection event. Returns <!>",1),Gn=o("<!><!>",1),Mn=o("This event triggers on any attributes event. Returns <!>",1),Wn=o("<!><!>",1),Kn=o("This event triggers when an attribute is created. Returns <!>",1),qn=o("<!><!>",1),Ln=o("This event triggers when an attribute is deleted. Returns <!>",1),Xn=o("<!><!>",1),zn=o("This event triggers when a collection is created. Returns <!>",1),Qn=o("<!><!>",1),Vn=o("This event triggers when a collection is deleted. Returns <!>",1),Zn=o("<!><!>",1),eo=o("This event triggers on any documents event. Returns <!>",1),to=o("<!><!>",1),no=o("This event triggers when a document is created. Returns <!>",1),oo=o("<!><!>",1),ro=o("This event triggers when a document is deleted. Returns <!>",1),so=o("<!><!>",1),ao=o("This event triggers when a document is updated. Returns <!>",1),lo=o("<!><!>",1),io=o("This event triggers on any indexes event. Returns <!>",1),co=o("<!><!>",1),uo=o("This event triggers when an index is created. Returns <!>",1),$o=o("<!><!>",1),po=o("This event triggers when an index is deleted. Returns <!>",1),fo=o("<!><!>",1),vo=o("This event triggers when a collection is updated. Returns <!>",1),ho=o("<!><!>",1),_o=o("This event triggers when a database is created. Returns <!>",1),mo=o("<!><!>",1),Po=o("This event triggers when a database is deleted. Returns <!>",1),go=o("<!><!>",1),xo=o("This event triggers when a database is updated. Returns <!>",1),To=o("<!><!>",1),wo=o("<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),bo=o("<!><!>",1),Io=o("<!><!>",1),Co=o("This event triggers on any buckets event. Returns <!>",1),Do=o("<!><!>",1),Oo=o("This event triggers when a bucket is created. Returns <!>",1),yo=o("<!><!>",1),Eo=o("This event triggers when a bucket is deleted. Returns <!>",1),jo=o("<!><!>",1),Fo=o("This event triggers on any files event. Returns <!>",1),So=o("<!><!>",1),Ao=o("Since the Backrush SDK chunks files in 5MB increments, this event will trigger for each 5MB chunk. A file is fully uploaded when <!> equals <!>. Returns <!>",1),ko=o("<!><!>",1),Ro=o("This event triggers when a file is deleted. Returns <!>",1),No=o("<!><!>",1),Yo=o("This event triggers when a file is updated. Returns <!>",1),Ho=o("<!><!>",1),Uo=o("This event triggers when a bucket is updated. Returns <!>",1),Bo=o("<!><!>",1),Jo=o("<!><!><!><!><!><!><!><!>",1),Go=o("<!><!>",1),Mo=o("<!><!>",1),Wo=o("This event triggers on any functions event. Returns <!>",1),Ko=o("<!><!>",1),qo=o("This event triggers when a function is created. Returns <!>",1),Lo=o("<!><!>",1),Xo=o("This event triggers when a function is deleted. Returns <!>",1),zo=o("<!><!>",1),Qo=o("This event triggers on any deployments event. Returns <!>",1),Vo=o("<!><!>",1),Zo=o("This event triggers when a deployment is created. Returns <!>",1),er=o("<!><!>",1),tr=o("This event triggers when a deployment is deleted. Returns <!>",1),nr=o("<!><!>",1),or=o("This event triggers when a deployment is updated. Returns <!>",1),rr=o("<!><!>",1),sr=o("This event triggers on any executions event. Returns <!>",1),ar=o("<!><!>",1),lr=o("This event triggers when an execution is created. Returns <!>",1),ir=o("<!><!>",1),cr=o("This event triggers when an execution is deleted. Returns <!>",1),dr=o("<!><!>",1),ur=o("This event triggers when an execution is updated. Returns <!>",1),$r=o("<!><!>",1),pr=o("This event triggers when a function is updated. Returns <!>",1),fr=o("<!><!>",1),vr=o("<!><!><!><!><!><!><!><!><!><!><!><!>",1),hr=o("<!><!>",1),_r=o("<!><!>",1),mr=o("This event triggers on any providers event. Returns <!>",1),Pr=o("<!><!>",1),gr=o("This event triggers when a provider is created. Returns <!>",1),xr=o("<!><!>",1),Tr=o("This event triggers when a provider is deleted. Returns <!>",1),wr=o("<!><!>",1),br=o("This event triggers when a provider is updated. Returns <!>",1),Ir=o("<!><!>",1),Cr=o("This event triggers on any topic event. Returns <!>",1),Dr=o("<!><!>",1),Or=o("This event triggers when a topic is created. Returns <!>",1),yr=o("<!><!>",1),Er=o("This event triggers when a topic is deleted. Returns <!>",1),jr=o("<!><!>",1),Fr=o("This event triggers when a topic is updated. Returns <!>",1),Sr=o("<!><!>",1),Ar=o("This event triggers when a subscriber to a topic is created. Returns <!>",1),kr=o("<!><!>",1),Rr=o("This event triggers when a subscriber to a topic is deleted. Returns <!>",1),Nr=o("<!><!>",1),Yr=o("This event triggers on any message event. Returns <!>",1),Hr=o("<!><!>",1),Ur=o("This event triggers when a message is created. Returns <!>",1),Br=o("<!><!>",1),Jr=o("This event triggers when a message is deleted. Returns <!>",1),Gr=o("<!><!>",1),Mr=o("This event triggers when a message is updated. Returns <!>",1),Wr=o("<!><!>",1),Kr=o("<!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),qr=o("<!><!>",1),Lr=o("<!><!><!><!><!>",1),Xr=o("Backrush supports scheduled function executions. You can schedule executions using <!> in the settings of your function. Cron supports recurring executions as frequently as <!>.",1),zr=o("<!><!>",1),Qr=o("<!><!>",1),Vr=o("<!><!>",1),Zr=o("<!><!>",1),es=o("<!><!>",1),ts=o("<!><!><!><!>",1),ns=o("<!><!>",1),os=o("To schedule an execution, navigate to <!> &gt; <!> &gt; <!> &gt; <!> in the Backrush Console.",1),rs=o("<!><!><!>",1),ss=o("You can also schedule your function executions using a supported <!>.",1),as=o("<!><!><!><!><!><!><!>",1),ls=o("<!><!>",1),is=o("You can also schedule your function executions using a supported <!>.",1),cs=o("<!><!><!><!><!><!><!><!><!><!><!>",1),ds=o("<!><!>",1),us=o("<!><!><!>",1),$s=o("Backrush Functions can be executed using Client or Server SDKs. Client SDKs must be authenticated with an account that has been granted execution <!> on the function&#39;s settings page. Server SDKs require an API key with the correct scopes.",1),ps=o("If your function has a generated or custom domain, executions are not authenticated. Anyone visiting the configured domains will be considered a guest, so make sure to give <!> execute permission in order for domain executions to work. If you need to enforce permissions for functions with a domain, use authentication methods like JWT.",1),fs=o("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ns(dt){_t(dt,vt(mt,{children:(ut,vs)=>{var De=fs(),Oe=pt(De);ve(Oe,{children:(y,ce)=>{n();var b=s("Backrush Functions can be executed in several ways. Executions can be invoked through the Backrush SDK and visiting its REST endpoint. Functions can also be triggered by events and scheduled executions. Here are all the different ways to consume your Backrush Functions.");e(y,b)},$$slots:{default:!0}});var ye=t(Oe);Pe(ye,{id:"domains",level:1,children:(y,ce)=>{n();var b=s("Domains");e(y,b)},$$slots:{default:!0}});var Ee=t(ye);ve(Ee,{children:(y,ce)=>{n();var b=s("You can execute a function through HTTP requests, using a browser or by sending an HTTP request.");e(y,b)},$$slots:{default:!0}});var je=t(Ee);ct(je,{ordered:!0,marker:".",children:(y,ce)=>{var b=Tt(),te=r(b);me(te,{children:(de,fe)=>{n();var q=Pt(),z=t(r(q));he(z,{marker:"**",children:(K,ne)=>{n();var U=s("Functions");e(K,U)},$$slots:{default:!0}}),n(),e(de,q)},$$slots:{default:!0}});var ue=t(te);me(ue,{children:(de,fe)=>{n();var q=gt(),z=t(r(q));he(z,{marker:"**",children:(U,J)=>{n();var S=s("Execute access");e(U,S)},$$slots:{default:!0}});var K=t(z,2);f(K,{content:"Any"});var ne=t(K,2);h(ne,{href:"/docs/products/auth/jwt",children:(U,J)=>{n();var S=s("JWTs");e(U,S)},$$slots:{default:!0}}),n(),e(de,q)},$$slots:{default:!0}});var $e=t(ue);me($e,{children:(de,fe)=>{n();var q=xt(),z=t(r(q));he(z,{marker:"**",children:(ne,U)=>{n();var J=s("Domains");e(ne,J)},$$slots:{default:!0}});var K=t(z,2);h(K,{href:"/docs/products/functions/domains",children:(ne,U)=>{n();var J=s("Learn about adding a custom domain");e(ne,J)},$$slots:{default:!0}}),n(),e(de,q)},$$slots:{default:!0}}),e(y,b)},$$slots:{default:!0}});var Fe=t(je);se(Fe,{content:`https://64d4d22db370ae41a32e.appwrite.global
`,language:"bash",process:!0,children:(y,ce)=>{n();var b=s("https://64d4d22db370ae41a32e.appwrite.global");e(y,b)},$$slots:{default:!0}});var Se=t(Fe);ve(Se,{children:(y,ce)=>{n();var b=s("When requests are made to this domain, whether through a browser or through an HTTP requests, the request information like request URL, request headers, and request body will be passed to the function.");e(y,b)},$$slots:{default:!0}});var Ae=t(Se);se(Ae,{content:`curl -X POST https://64d4d22db370ae41a32e.appwrite.global \\
-H "X-Custom-Header: 123" \\
-H "x-backrush-user-jwt: <YOUR_JWT_KEY>" \\
-H "Content-Type: application/json" \\
-d '{"data":"this is json data"}'
`,language:"bash",process:!0,children:(y,ce)=>{n();var b=s(`curl -X POST https://64d4d22db370ae41a32e.appwrite.global \\
-H "X-Custom-Header: 123" \\
-H "x-backrush-user-jwt: <YOUR_JWT_KEY>" \\
-H "Content-Type: application/json" \\
-d '{"data":"this is json data"}'`);e(y,b)},$$slots:{default:!0}});var ke=t(Ae);ve(ke,{children:(y,ce)=>{n();var b=wt(),te=t(r(b));f(te,{content:"x-backrush-user-jwt"});var ue=t(te,2);h(ue,{href:"/docs/products/auth/jwt",children:($e,de)=>{n();var fe=s("Learn more about JWTs");e($e,fe)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var Re=t(ke);ve(Re,{children:(y,ce)=>{n();var b=s("This unlocks ability for you to develop custom HTTP endpoints with Backrush Functions. It also allows accepting incoming webhooks for handling online payments, hosting social platform bots, and much more.");e(y,b)},$$slots:{default:!0}});var Ne=t(Re);Pe(Ne,{id:"sdk",level:1,children:(y,ce)=>{n();var b=s("SDK");e(y,b)},$$slots:{default:!0}});var Ye=t(Ne);ve(Ye,{children:(y,ce)=>{n();var b=bt(),te=t(r(b));h(te,{href:"/docs/sdks",children:(ue,$e)=>{n();var de=s("Backrush SDKs");e(ue,de)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var He=t(Ye);at(He,{children:(y,ce)=>{var b=Dt(),te=r(b);we(te,{id:"client",title:"Client SDKs",children:($e,de)=>{Ie($e,{children:(fe,q)=>{var z=It(),K=r(z);se(K,{content:`import { Client, Functions } from 'backrush';

const client = new Client();

const functions = new Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(E,oe)=>{n();var O=s(`import { Client, Functions } from 'backrush';

const client = new Client();

const functions = new Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(E,O)},$$slots:{default:!0}});var ne=t(K);se(ne,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
`,language:"dart",process:!0,children:(E,oe)=>{n();var O=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}`);e(E,O)},$$slots:{default:!0}});var U=t(ne);se(U,{content:`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)
`,language:"swift",process:!0,children:(E,oe)=>{n();var O=s(`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)`);e(E,O)},$$slots:{default:!0}});var J=t(U);se(J,{content:`import io.backrush.Client
import io.backrush.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val response = functions.createExecution(
    functionId = "<FUNCTION_ID>",
    body = "<BODY>", // optional
    async = false, // optional
    path = "<PATH>", // optional
    method = "GET", // optional
    headers = mapOf( "a" to "b" ) // optional
)
`,language:"kotlin",process:!0,children:(E,oe)=>{n();var O=s(`import io.backrush.Client
import io.backrush.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val response = functions.createExecution(
    functionId = "<FUNCTION_ID>",
    body = "<BODY>", // optional
    async = false, // optional
    path = "<PATH>", // optional
    method = "GET", // optional
    headers = mapOf( "a" to "b" ) // optional
)`);e(E,O)},$$slots:{default:!0}});var S=t(J);se(S,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client(context)
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);
`,language:"java",process:!0,children:(E,oe)=>{n();var O=s(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client(context)
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Backrush", result.toString());
    })
);`);e(E,O)},$$slots:{default:!0}}),e(fe,z)},$$slots:{default:!0}})},$$slots:{default:!0}});var ue=t(te);we(ue,{id:"server",title:"Server SDKs",children:($e,de)=>{Ie($e,{children:(fe,q)=>{var z=Ct(),K=r(z);se(K,{content:`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"server-nodejs",process:!0,children:(D,A)=>{n();var j=s(`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(D,j)},$$slots:{default:!0}});var ne=t(K);se(ne,{content:`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"deno",process:!0,children:(D,A)=>{n();var j=s(`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>',  // functionId
        '<BODY>',  // body (optional)
        false,  // async (optional)
        '<PATH>',  // path (optional)
        'GET',  // method (optional)
        {} // headers (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(D,j)},$$slots:{default:!0}});var U=t(ne);se(U,{content:`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
)

func main() {
	client := backrush.NewClient(
		backrush.WithProject("<PROJECT_ID>"),
	)

	functions := backrush.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(false), // async (optional)
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{})) // headers (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}
`,language:"go",process:!0,children:(D,A)=>{n();var j=s(`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
)

func main() {
	client := backrush.NewClient(
		backrush.WithProject("<PROJECT_ID>"),
	)

	functions := backrush.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(false), // async (optional)
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{})) // headers (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}`);e(D,j)},$$slots:{default:!0}});var J=t(U);se(J,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution( 
    functionId: '<FUNCTION_ID>', 
    body: '<BODY>',  // optional
    async: false,  // optional
    path: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: [] // optional
);
`,language:"php",process:!0,children:(D,A)=>{n();var j=s(`<?php

use Backrush\\Client;
use Backrush\\Services\\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution( 
    functionId: '<FUNCTION_ID>', 
    body: '<BODY>',  // optional
    async: false,  // optional
    path: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: [] // optional
);`);e(D,j)},$$slots:{default:!0}});var S=t(J);se(S,{content:`from backrush.client import Client
from backrush.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution( 
    function_id = '<FUNCTION_ID>', 
    body = '<BODY>',  # optional
    async = False,  # optional
    path = '<PATH>',  # optional
    method = 'GET',  # optional
    headers = {} # optional
)
`,language:"python",process:!0,children:(D,A)=>{n();var j=s(`from backrush.client import Client
from backrush.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution( 
    function_id = '<FUNCTION_ID>', 
    body = '<BODY>',  # optional
    async = False,  # optional
    path = '<PATH>',  # optional
    method = 'GET',  # optional
    headers = {} # optional
)`);e(D,j)},$$slots:{default:!0}});var E=t(S);se(E,{content:`require 'backrush'

include Backrush

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>', 
    body: '<BODY>',  # optional
    async: false,  # optional
    path: '<PATH>',  # optional
    method: 'GET',  # optional
    headers: {} # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(D,A)=>{n();var j=s(`require 'backrush'

include Backrush

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>', 
    body: '<BODY>',  # optional
    async: false,  # optional
    path: '<PATH>',  # optional
    method: 'GET',  # optional
    headers: {} # optional
)

puts response.inspect`);e(D,j)},$$slots:{default:!0}});var oe=t(E);se(oe,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>"    
    body: "<BODY>" // optional    
    async: false // optional    
    path: "<PATH>" // optional    
    method: "GET" // optional    
    headers: [object]); // optional
`,language:"csharp",process:!0,children:(D,A)=>{n();var j=s(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>"    
    body: "<BODY>" // optional    
    async: false // optional    
    path: "<PATH>" // optional    
    method: "GET" // optional    
    headers: [object]); // optional`);e(D,j)},$$slots:{default:!0}});var O=t(oe);se(O,{content:`import 'package:dart_backrush/dart_backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
`,language:"dart",process:!0,children:(D,A)=>{n();var j=s(`import 'package:dart_backrush/dart_backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}`);e(D,j)},$$slots:{default:!0}});var Q=t(O);se(Q,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(D,A)=>{n();var j=s(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(D,j)},$$slots:{default:!0}});var B=t(Q);se(B,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(D,A)=>{n();var j=s(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(D,j)},$$slots:{default:!0}});var X=t(B);se(X,{content:`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)
`,language:"swift",process:!0,children:(D,A)=>{n();var j=s(`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)`);e(D,j)},$$slots:{default:!0}}),e(fe,z)},$$slots:{default:!0}})},$$slots:{default:!0}}),e(y,b)},$$slots:{default:!0}});var Ue=t(He);Pe(Ue,{id:"console",level:1,children:(y,ce)=>{n();var b=s("Console");e(y,b)},$$slots:{default:!0}});var Be=t(Ue);ve(Be,{children:(y,ce)=>{n();var b=Ot(),te=t(r(b));he(te,{marker:"**",children:(ue,$e)=>{n();var de=s("Execute now");e(ue,de)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var Je=t(Be);ve(Je,{children:(y,ce)=>{n();var b=s("You'll be able to mock executions by configuring the path, method, headers, and body.");e(y,b)},$$slots:{default:!0}});var Ge=t(Je);lt(Ge,{children:(y,ce)=>{ve(y,{children:(b,te)=>{Ce(b,{src:"/images/docs/functions/execution/dark/execute-function.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var Me=t(Ge);it(Me,{children:(y,ce)=>{ve(y,{children:(b,te)=>{Ce(b,{src:"/images/docs/functions/execution/execute-function.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var We=t(Me);Pe(We,{id:"events",level:1,children:(y,ce)=>{n();var b=s("Events");e(y,b)},$$slots:{default:!0}});var Ke=t(We);ve(Ke,{children:(y,ce)=>{n();var b=s("Changes in Backrush emit events. You can configure Functions to be executed in response to these events.");e(y,b)},$$slots:{default:!0}});var qe=t(Ke);ct(qe,{ordered:!0,marker:".",children:(y,ce)=>{var b=jt(),te=r(b);me(te,{children:(q,z)=>{n();var K=yt(),ne=t(r(K));he(ne,{marker:"**",children:(U,J)=>{n();var S=s("Functions");e(U,S)},$$slots:{default:!0}}),n(),e(q,K)},$$slots:{default:!0}});var ue=t(te);me(ue,{children:(q,z)=>{n();var K=s("Click to open a function you wish to configure.");e(q,K)},$$slots:{default:!0}});var $e=t(ue);me($e,{children:(q,z)=>{n();var K=Et(),ne=t(r(K));he(ne,{marker:"**",children:(J,S)=>{n();var E=s("Settings");e(J,E)},$$slots:{default:!0}});var U=t(ne,2);he(U,{marker:"**",children:(J,S)=>{n();var E=s("Events");e(J,E)},$$slots:{default:!0}}),n(),e(q,K)},$$slots:{default:!0}});var de=t($e);me(de,{children:(q,z)=>{n();var K=s("Add one or multiple events as triggers for the function.");e(q,K)},$$slots:{default:!0}});var fe=t(de);me(fe,{children:(q,z)=>{n();var K=s("Be careful to avoid selecting events that can be caused by the function itself. This can cause the function to trigger its own execution, resulting in infinite recursions.");e(q,K)},$$slots:{default:!0}}),e(y,b)},$$slots:{default:!0}});var Le=t(qe);ve(Le,{children:(y,ce)=>{n();var b=Ft(),te=t(r(b));f(te,{content:"x-backrush-event"});var ue=t(te,2);f(ue,{content:"request.body"});var $e=t(ue,2);h($e,{href:"/docs/advanced/platform/events",children:(de,fe)=>{n();var q=s("Learn more about events");e(de,q)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var Xe=t(Le);ve(Xe,{children:(y,ce)=>{n();var b=s("You can use one of the following events.");e(y,b)},$$slots:{default:!0}});var ze=t(Xe);ht(ze,{children:(y,ce)=>{var b=Lr(),te=r(b);be(te,{title:"Authentication",children:(q,z)=>{ge(q,{children:(K,ne)=>{var U=Yn(),J=r(U);xe(J,{children:(E,oe)=>{v(E,{children:(O,Q)=>{var B=St(),X=r(B);_e(X,{children:(A,j)=>{n();var re=s("Name");e(A,re)},$$slots:{default:!0}});var D=t(X);_e(D,{children:(A,j)=>{n();var re=s("Description");e(A,re)},$$slots:{default:!0}}),e(O,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=t(J);Te(S,{children:(E,oe)=>{var O=Nn(),Q=r(O);v(Q,{children:(C,F)=>{var g=kt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=At(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/team",children:(Y,pe)=>{n();var H=s("Team Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var B=t(Q);v(B,{children:(C,F)=>{var g=Nt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Rt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/team",children:(Y,pe)=>{n();var H=s("Team Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var X=t(B);v(X,{children:(C,F)=>{var g=Ht(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.delete"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Yt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/team",children:(Y,pe)=>{n();var H=s("Team Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var D=t(X);v(D,{children:(C,F)=>{var g=Bt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.memberships.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Ut(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/membership",children:(Y,pe)=>{n();var H=s("Membership Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var A=t(D);v(A,{children:(C,F)=>{var g=Gt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.memberships.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Jt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/membership",children:(Y,pe)=>{n();var H=s("Membership Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var j=t(A);v(j,{children:(C,F)=>{var g=Wt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.memberships.*.delete"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Mt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/membership",children:(Y,pe)=>{n();var H=s("Membership Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var re=t(j);v(re,{children:(C,F)=>{var g=qt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.memberships.*.update"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Kt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/membership",children:(Y,pe)=>{n();var H=s("Membership Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var ae=t(re);v(ae,{children:(C,F)=>{var g=Xt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.memberships.*.update.status"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Lt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/membership",children:(Y,pe)=>{n();var H=s("Membership Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var V=t(ae);v(V,{children:(C,F)=>{var g=Qt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.update"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=zt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/team",children:(Y,pe)=>{n();var H=s("Team Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var L=t(V);v(L,{children:(C,F)=>{var g=Zt(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"teams.*.update.prefs"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Vt(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/team",children:(Y,pe)=>{n();var H=s("Team Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var le=t(L);v(le,{children:(C,F)=>{var g=tn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=en(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var ie=t(le);v(ie,{children:(C,F)=>{var g=on(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=nn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var W=t(ie);v(W,{children:(C,F)=>{var g=sn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.delete"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=rn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var M=t(W);v(M,{children:(C,F)=>{var g=ln(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.recovery.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=an(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var m=t(M);v(m,{children:(C,F)=>{var g=dn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.recovery.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=cn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var w=t(m);v(w,{children:(C,F)=>{var g=$n(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.recovery.*.update"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=un(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var _=t(w);v(_,{children:(C,F)=>{var g=fn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.sessions.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=pn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/session",children:(Y,pe)=>{n();var H=s("Session Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var d=t(_);v(d,{children:(C,F)=>{var g=hn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.sessions.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=vn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/session",children:(Y,pe)=>{n();var H=s("Session Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var p=t(d);v(p,{children:(C,F)=>{var g=mn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.sessions.*.delete"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=_n(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/session",children:(Y,pe)=>{n();var H=s("Session Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var l=t(p);v(l,{children:(C,F)=>{var g=gn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Pn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var $=t(l);v($,{children:(C,F)=>{var g=Tn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update.email"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=xn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var c=t($);v(c,{children:(C,F)=>{var g=bn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update.name"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=wn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var I=t(c);v(I,{children:(C,F)=>{var g=Cn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update.password"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=In(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var i=t(I);v(i,{children:(C,F)=>{var g=On(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update.prefs"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Dn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var G=t(i);v(G,{children:(C,F)=>{var g=En(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.update.status"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=yn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/user",children:(Y,pe)=>{n();var H=s("User Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var P=t(G);v(P,{children:(C,F)=>{var g=Fn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.verification.*"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=jn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var Z=t(P);v(Z,{children:(C,F)=>{var g=An(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.verification.*.create"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=Sn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}});var ee=t(Z);v(ee,{children:(C,F)=>{var g=Rn(),x=r(g);a(x,{children:(u,R)=>{f(u,{content:"users.*.verification.*.update"})},$$slots:{default:!0}});var k=t(x);a(k,{children:(u,R)=>{n();var T=kn(),N=t(r(T));h(N,{href:"/docs/references/cloud/models/token",children:(Y,pe)=>{n();var H=s("Token Object");e(Y,H)},$$slots:{default:!0}}),e(u,T)},$$slots:{default:!0}}),e(C,g)},$$slots:{default:!0}}),e(E,O)},$$slots:{default:!0}}),e(K,U)},$$slots:{default:!0}})}});var ue=t(te);be(ue,{title:"Databases",children:(q,z)=>{ge(q,{children:(K,ne)=>{var U=bo(),J=r(U);xe(J,{children:(E,oe)=>{v(E,{children:(O,Q)=>{var B=Hn(),X=r(B);_e(X,{children:(A,j)=>{n();var re=s("Name");e(A,re)},$$slots:{default:!0}});var D=t(X);_e(D,{children:(A,j)=>{n();var re=s("Description");e(A,re)},$$slots:{default:!0}}),e(O,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=t(J);Te(S,{children:(E,oe)=>{var O=wo(),Q=r(O);v(Q,{children:(p,l)=>{var $=Bn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Un(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/database",children:(ee,C)=>{n();var F=s("Database Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var B=t(Q);v(B,{children:(p,l)=>{var $=Gn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Jn(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/collection",children:(ee,C)=>{n();var F=s("Collection Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var X=t(B);v(X,{children:(p,l)=>{var $=Wn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.attributes.*"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Mn(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/attributeList",children:(ee,C)=>{n();var F=s("Attribute Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var D=t(X);v(D,{children:(p,l)=>{var $=qn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.attributes.*.create"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Kn(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/attributeList",children:(ee,C)=>{n();var F=s("Attribute Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var A=t(D);v(A,{children:(p,l)=>{var $=Xn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.attributes.*.delete"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Ln(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/attributeList",children:(ee,C)=>{n();var F=s("Attribute Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var j=t(A);v(j,{children:(p,l)=>{var $=Qn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.create"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=zn(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/collection",children:(ee,C)=>{n();var F=s("Collection Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var re=t(j);v(re,{children:(p,l)=>{var $=Zn(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.delete"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Vn(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/collection",children:(ee,C)=>{n();var F=s("Collection Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var ae=t(re);v(ae,{children:(p,l)=>{var $=to(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.documents.*"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=eo(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/document",children:(ee,C)=>{n();var F=s("Document Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var V=t(ae);v(V,{children:(p,l)=>{var $=oo(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.documents.*.create"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=no(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/document",children:(ee,C)=>{n();var F=s("Document Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var L=t(V);v(L,{children:(p,l)=>{var $=so(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.documents.*.delete"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=ro(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/document",children:(ee,C)=>{n();var F=s("Document Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var le=t(L);v(le,{children:(p,l)=>{var $=lo(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.documents.*.update"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=ao(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/document",children:(ee,C)=>{n();var F=s("Document Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var ie=t(le);v(ie,{children:(p,l)=>{var $=co(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.indexes.*"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=io(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/index",children:(ee,C)=>{n();var F=s("Index Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var W=t(ie);v(W,{children:(p,l)=>{var $=$o(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.indexes.*.create"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=uo(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/index",children:(ee,C)=>{n();var F=s("Index Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var M=t(W);v(M,{children:(p,l)=>{var $=fo(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.indexes.*.delete"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=po(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/index",children:(ee,C)=>{n();var F=s("Index Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var m=t(M);v(m,{children:(p,l)=>{var $=ho(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.collections.*.update"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=vo(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/collection",children:(ee,C)=>{n();var F=s("Collection Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var w=t(m);v(w,{children:(p,l)=>{var $=mo(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.create"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=_o(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/database",children:(ee,C)=>{n();var F=s("Database Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var _=t(w);v(_,{children:(p,l)=>{var $=go(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.delete"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=Po(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/database",children:(ee,C)=>{n();var F=s("Database Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}});var d=t(_);v(d,{children:(p,l)=>{var $=To(),c=r($);a(c,{children:(i,G)=>{f(i,{content:"databases.*.update"})},$$slots:{default:!0}});var I=t(c);a(I,{children:(i,G)=>{n();var P=xo(),Z=t(r(P));h(Z,{href:"/docs/references/cloud/models/database",children:(ee,C)=>{n();var F=s("Database Object");e(ee,F)},$$slots:{default:!0}}),e(i,P)},$$slots:{default:!0}}),e(p,$)},$$slots:{default:!0}}),e(E,O)},$$slots:{default:!0}}),e(K,U)},$$slots:{default:!0}})}});var $e=t(ue);be($e,{title:"Storage",children:(q,z)=>{ge(q,{children:(K,ne)=>{var U=Go(),J=r(U);xe(J,{children:(E,oe)=>{v(E,{children:(O,Q)=>{var B=Io(),X=r(B);_e(X,{children:(A,j)=>{n();var re=s("Name");e(A,re)},$$slots:{default:!0}});var D=t(X);_e(D,{children:(A,j)=>{n();var re=s("Description");e(A,re)},$$slots:{default:!0}}),e(O,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=t(J);Te(S,{children:(E,oe)=>{var O=Jo(),Q=r(O);v(Q,{children:(V,L)=>{var le=Do(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Co(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/bucket",children:(d,p)=>{n();var l=s("Bucket Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var B=t(Q);v(B,{children:(V,L)=>{var le=yo(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.create"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Oo(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/bucket",children:(d,p)=>{n();var l=s("Bucket Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var X=t(B);v(X,{children:(V,L)=>{var le=jo(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.delete"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Eo(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/bucket",children:(d,p)=>{n();var l=s("Bucket Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var D=t(X);v(D,{children:(V,L)=>{var le=So(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.files.*"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Fo(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/file",children:(d,p)=>{n();var l=s("File Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var A=t(D);v(A,{children:(V,L)=>{var le=ko(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.files.*.create"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Ao(),_=t(r(w));f(_,{content:"chunksTotal"});var d=t(_,2);f(d,{content:"chunksUploaded"});var p=t(d,2);h(p,{href:"/docs/references/cloud/models/file",children:(l,$)=>{n();var c=s("File Object");e(l,c)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var j=t(A);v(j,{children:(V,L)=>{var le=No(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.files.*.delete"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Ro(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/file",children:(d,p)=>{n();var l=s("File Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var re=t(j);v(re,{children:(V,L)=>{var le=Ho(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.files.*.update"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Yo(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/file",children:(d,p)=>{n();var l=s("File Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}});var ae=t(re);v(ae,{children:(V,L)=>{var le=Bo(),ie=r(le);a(ie,{children:(M,m)=>{f(M,{content:"buckets.*.update"})},$$slots:{default:!0}});var W=t(ie);a(W,{children:(M,m)=>{n();var w=Uo(),_=t(r(w));h(_,{href:"/docs/references/cloud/models/bucket",children:(d,p)=>{n();var l=s("Bucket Object");e(d,l)},$$slots:{default:!0}}),e(M,w)},$$slots:{default:!0}}),e(V,le)},$$slots:{default:!0}}),e(E,O)},$$slots:{default:!0}}),e(K,U)},$$slots:{default:!0}})}});var de=t($e);be(de,{title:"Functions",children:(q,z)=>{ge(q,{children:(K,ne)=>{var U=hr(),J=r(U);xe(J,{children:(E,oe)=>{v(E,{children:(O,Q)=>{var B=Mo(),X=r(B);_e(X,{children:(A,j)=>{n();var re=s("Name");e(A,re)},$$slots:{default:!0}});var D=t(X);_e(D,{children:(A,j)=>{n();var re=s("Description");e(A,re)},$$slots:{default:!0}}),e(O,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=t(J);Te(S,{children:(E,oe)=>{var O=vr(),Q=r(O);v(Q,{children:(W,M)=>{var m=Ko(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=Wo(),$=t(r(l));h($,{href:"/docs/references/cloud/models/function",children:(c,I)=>{n();var i=s("Function Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var B=t(Q);v(B,{children:(W,M)=>{var m=Lo(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.create"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=qo(),$=t(r(l));h($,{href:"/docs/references/cloud/models/function",children:(c,I)=>{n();var i=s("Function Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var X=t(B);v(X,{children:(W,M)=>{var m=zo(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.delete"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=Xo(),$=t(r(l));h($,{href:"/docs/references/cloud/models/function",children:(c,I)=>{n();var i=s("Function Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var D=t(X);v(D,{children:(W,M)=>{var m=Vo(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.deployments.*"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=Qo(),$=t(r(l));h($,{href:"/docs/references/cloud/models/deployment",children:(c,I)=>{n();var i=s("Deployment Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var A=t(D);v(A,{children:(W,M)=>{var m=er(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.deployments.*.create"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=Zo(),$=t(r(l));h($,{href:"/docs/references/cloud/models/deployment",children:(c,I)=>{n();var i=s("Deployment Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var j=t(A);v(j,{children:(W,M)=>{var m=nr(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.deployments.*.delete"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=tr(),$=t(r(l));h($,{href:"/docs/references/cloud/models/deployment",children:(c,I)=>{n();var i=s("Deployment Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var re=t(j);v(re,{children:(W,M)=>{var m=rr(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.deployments.*.update"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=or(),$=t(r(l));h($,{href:"/docs/references/cloud/models/deployment",children:(c,I)=>{n();var i=s("Deployment Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var ae=t(re);v(ae,{children:(W,M)=>{var m=ar(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.executions.*"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=sr(),$=t(r(l));h($,{href:"/docs/references/cloud/models/execution",children:(c,I)=>{n();var i=s("Execution Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var V=t(ae);v(V,{children:(W,M)=>{var m=ir(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.executions.*.create"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=lr(),$=t(r(l));h($,{href:"/docs/references/cloud/models/execution",children:(c,I)=>{n();var i=s("Execution Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var L=t(V);v(L,{children:(W,M)=>{var m=dr(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.executions.*.delete"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=cr(),$=t(r(l));h($,{href:"/docs/references/cloud/models/execution",children:(c,I)=>{n();var i=s("Execution Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var le=t(L);v(le,{children:(W,M)=>{var m=$r(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.executions.*.update"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=ur(),$=t(r(l));h($,{href:"/docs/references/cloud/models/execution",children:(c,I)=>{n();var i=s("Execution Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}});var ie=t(le);v(ie,{children:(W,M)=>{var m=fr(),w=r(m);a(w,{children:(d,p)=>{f(d,{content:"functions.*.update"})},$$slots:{default:!0}});var _=t(w);a(_,{children:(d,p)=>{n();var l=pr(),$=t(r(l));h($,{href:"/docs/references/cloud/models/function",children:(c,I)=>{n();var i=s("Function Object");e(c,i)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(W,m)},$$slots:{default:!0}}),e(E,O)},$$slots:{default:!0}}),e(K,U)},$$slots:{default:!0}})}});var fe=t(de);be(fe,{title:"Messaging",children:(q,z)=>{ge(q,{children:(K,ne)=>{var U=qr(),J=r(U);xe(J,{children:(E,oe)=>{v(E,{children:(O,Q)=>{var B=_r(),X=r(B);_e(X,{children:(A,j)=>{n();var re=s("Name");e(A,re)},$$slots:{default:!0}});var D=t(X);_e(D,{children:(A,j)=>{n();var re=s("Description");e(A,re)},$$slots:{default:!0}}),e(O,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=t(J);Te(S,{children:(E,oe)=>{var O=Kr(),Q=r(O);v(Q,{children:(m,w)=>{var _=Pr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"providers.*"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=mr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/provider",children:(i,G)=>{n();var P=s("Provider Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var B=t(Q);v(B,{children:(m,w)=>{var _=xr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"providers.*.create"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=gr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/provider",children:(i,G)=>{n();var P=s("Provider Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var X=t(B);v(X,{children:(m,w)=>{var _=wr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"providers.*.delete"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Tr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/provider",children:(i,G)=>{n();var P=s("Provider Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var D=t(X);v(D,{children:(m,w)=>{var _=Ir(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"providers.*.update"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=br(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/provider",children:(i,G)=>{n();var P=s("Provider Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var A=t(D);v(A,{children:(m,w)=>{var _=Dr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Cr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var j=t(A);v(j,{children:(m,w)=>{var _=yr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*.create"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Or(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var re=t(j);v(re,{children:(m,w)=>{var _=jr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*.delete"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Er(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var ae=t(re);v(ae,{children:(m,w)=>{var _=Sr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*.update"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Fr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var V=t(ae);v(V,{children:(m,w)=>{var _=kr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*.subscribers.*.create"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Ar(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var L=t(V);v(L,{children:(m,w)=>{var _=Nr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"topics.*.subscribers.*.delete"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Rr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/topic",children:(i,G)=>{n();var P=s("Topic Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var le=t(L);v(le,{children:(m,w)=>{var _=Hr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"messages.*"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Yr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/message",children:(i,G)=>{n();var P=s("Message Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var ie=t(le);v(ie,{children:(m,w)=>{var _=Br(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"messages.*.create"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Ur(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/message",children:(i,G)=>{n();var P=s("Message Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var W=t(ie);v(W,{children:(m,w)=>{var _=Gr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"messages.*.delete"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Jr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/message",children:(i,G)=>{n();var P=s("Message Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}});var M=t(W);v(M,{children:(m,w)=>{var _=Wr(),d=r(_);a(d,{children:(l,$)=>{f(l,{content:"messages.*.update"})},$$slots:{default:!0}});var p=t(d);a(p,{children:(l,$)=>{n();var c=Mr(),I=t(r(c));h(I,{href:"/docs/references/cloud/models/message",children:(i,G)=>{n();var P=s("Message Object");e(i,P)},$$slots:{default:!0}}),e(l,c)},$$slots:{default:!0}}),e(m,_)},$$slots:{default:!0}}),e(E,O)},$$slots:{default:!0}}),e(K,U)},$$slots:{default:!0}})}}),e(y,b)}});var Qe=t(ze);Pe(Qe,{id:"schedule",level:1,children:(y,ce)=>{n();var b=s("Schedule");e(y,b)},$$slots:{default:!0}});var Ve=t(Qe);ve(Ve,{children:(y,ce)=>{n();var b=Xr(),te=t(r(b));h(te,{href:"https://en.wikipedia.org/wiki/Cron",children:($e,de)=>{n();var fe=s("cron expressions");e($e,fe)},$$slots:{default:!0}});var ue=t(te,2);he(ue,{marker:"**",children:($e,de)=>{n();var fe=s("every minute");e($e,fe)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var Ze=t(Ve);ve(Ze,{children:(y,ce)=>{n();var b=s("Here are some cron expressions for common intervals:");e(y,b)},$$slots:{default:!0}});var et=t(Ze);ge(et,{children:(y,ce)=>{var b=ns(),te=r(b);xe(te,{children:($e,de)=>{v($e,{children:(fe,q)=>{var z=zr(),K=r(z);_e(K,{children:(U,J)=>{n();var S=s("Cron Expression");e(U,S)},$$slots:{default:!0}});var ne=t(K);_e(ne,{children:(U,J)=>{n();var S=s("Schedule");e(U,S)},$$slots:{default:!0}}),e(fe,z)},$$slots:{default:!0}})},$$slots:{default:!0}});var ue=t(te);Te(ue,{children:($e,de)=>{var fe=ts(),q=r(fe);v(q,{children:(U,J)=>{var S=Qr(),E=r(S);a(E,{children:(O,Q)=>{f(O,{content:"*/15 * * * *"})},$$slots:{default:!0}});var oe=t(E);a(oe,{children:(O,Q)=>{n();var B=s("Every 15 minutes");e(O,B)},$$slots:{default:!0}}),e(U,S)},$$slots:{default:!0}});var z=t(q);v(z,{children:(U,J)=>{var S=Vr(),E=r(S);a(E,{children:(O,Q)=>{f(O,{content:"0 * * * *"})},$$slots:{default:!0}});var oe=t(E);a(oe,{children:(O,Q)=>{n();var B=s("Every Hour");e(O,B)},$$slots:{default:!0}}),e(U,S)},$$slots:{default:!0}});var K=t(z);v(K,{children:(U,J)=>{var S=Zr(),E=r(S);a(E,{children:(O,Q)=>{f(O,{content:"0 0 * * *"})},$$slots:{default:!0}});var oe=t(E);a(oe,{children:(O,Q)=>{n();var B=s("Every day at 00:00");e(O,B)},$$slots:{default:!0}}),e(U,S)},$$slots:{default:!0}});var ne=t(K);v(ne,{children:(U,J)=>{var S=es(),E=r(S);a(E,{children:(O,Q)=>{f(O,{content:"0 0 * * 1"})},$$slots:{default:!0}});var oe=t(E);a(oe,{children:(O,Q)=>{n();var B=s("Every Monday at 00:00");e(O,B)},$$slots:{default:!0}}),e(U,S)},$$slots:{default:!0}}),e($e,fe)},$$slots:{default:!0}}),e(y,b)},$$slots:{default:!0}});var tt=t(et);Pe(tt,{id:"delayed-executions",level:1,children:(y,ce)=>{n();var b=s("Delayed executions");e(y,b)},$$slots:{default:!0}});var nt=t(tt);ve(nt,{children:(y,ce)=>{n();var b=s("You can also delay function executions, which trigger the function only once at a future date and time. You can schedule a function execution using the Backrush Console, a Client SDK, or a Server SDK.");e(y,b)},$$slots:{default:!0}});var ot=t(nt);at(ot,{children:(y,ce)=>{var b=us(),te=r(b);we(te,{id:"console",title:"Console",children:(de,fe)=>{var q=rs(),z=r(q);ve(z,{children:(U,J)=>{n();var S=os(),E=t(r(S));he(E,{marker:"**",children:(B,X)=>{n();var D=s("Your function");e(B,D)},$$slots:{default:!0}});var oe=t(E,2);he(oe,{marker:"**",children:(B,X)=>{n();var D=s("Executions");e(B,D)},$$slots:{default:!0}});var O=t(oe,2);he(O,{marker:"**",children:(B,X)=>{n();var D=s("Execute now");e(B,D)},$$slots:{default:!0}});var Q=t(O,2);he(Q,{marker:"**",children:(B,X)=>{n();var D=s("Schedule");e(B,D)},$$slots:{default:!0}}),n(),e(U,S)},$$slots:{default:!0}});var K=t(z);lt(K,{children:(U,J)=>{ve(U,{children:(S,E)=>{Ce(S,{src:"/images/docs/functions/execution/dark/scheduled-execution-function.png",alt:"Scheduled execution details screen"})},$$slots:{default:!0}})}});var ne=t(K);it(ne,{children:(U,J)=>{ve(U,{children:(S,E)=>{Ce(S,{src:"/images/docs/functions/execution/scheduled-execution-function.png",alt:"Scheduled execution details screen"})},$$slots:{default:!0}})}}),e(de,q)},$$slots:{default:!0}});var ue=t(te);we(ue,{id:"client-sdk",title:"Client SDK",children:(de,fe)=>{var q=ls(),z=r(q);ve(z,{children:(ne,U)=>{n();var J=ss(),S=t(r(J));h(S,{href:"/docs/sdks/#client",children:(E,oe)=>{n();var O=s("Client SDK");e(E,O)},$$slots:{default:!0}}),n(),e(ne,J)},$$slots:{default:!0}});var K=t(z);Ie(K,{children:(ne,U)=>{var J=as(),S=r(J);se(S,{content:`import { Client, Functions, ExecutionMethod } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution(
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);

console.log(result);
`,language:"client-web",process:!0,children:(D,A)=>{n();var j=s(`import { Client, Functions, ExecutionMethod } from 'backrush';

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution(
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);

console.log(result);`);e(D,j)},$$slots:{default:!0}});var E=t(S);se(E,{content:`import 'package:backrush/backrush.dart';

Client client = Client()
    .setProject('<PROJECT_ID>'); // Your project ID

Functions functions = Functions(client);

Execution result = await functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // optional
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // optional
    method: ExecutionMethod.gET, // optional
    headers: {}, // optional
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);
`,language:"client-flutter",process:!0,children:(D,A)=>{n();var j=s(`import 'package:backrush/backrush.dart';

Client client = Client()
    .setProject('<PROJECT_ID>'); // Your project ID

Functions functions = Functions(client);

Execution result = await functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // optional
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // optional
    method: ExecutionMethod.gET, // optional
    headers: {}, // optional
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);`);e(D,j)},$$slots:{default:!0}});var oe=t(E);se(oe,{content:`import { Client, Functions, ExecutionMethod } from "react-native-backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution(
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);

console.log(result);
`,language:"client-react-native",process:!0,children:(D,A)=>{n();var j=s(`import { Client, Functions, ExecutionMethod } from "react-native-backrush";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution(
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);

console.log(result);`);e(D,j)},$$slots:{default:!0}});var O=t(oe);se(O,{content:`import Backrush
import BackrushEnums

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // optional
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // optional
    method: .gET, // optional
    headers: [:], // optional
    scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
`,language:"client-apple",process:!0,children:(D,A)=>{n();var j=s(`import Backrush
import BackrushEnums

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // optional
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // optional
    method: .gET, // optional
    headers: [:], // optional
    scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)`);e(D,j)},$$slots:{default:!0}});var Q=t(O);se(Q,{content:`import io.backrush.Client
import io.backrush.coroutines.CoroutineCallback
import io.backrush.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val result = functions.createExecution(
    functionId = "<FUNCTION_ID>", // functionId
    body = "<BODY>", // (optional)
    async = true, // Scheduled executions need to be async
    path = "<PATH>", // (optional)
    method = ExecutionMethod.GET, // (optional)
    headers = mapOf( "a" to "b" ), // (optional)
    scheduledAt = "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
`,language:"client-android-kotlin",process:!0,children:(D,A)=>{n();var j=s(`import io.backrush.Client
import io.backrush.coroutines.CoroutineCallback
import io.backrush.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val result = functions.createExecution(
    functionId = "<FUNCTION_ID>", // functionId
    body = "<BODY>", // (optional)
    async = true, // Scheduled executions need to be async
    path = "<PATH>", // (optional)
    method = ExecutionMethod.GET, // (optional)
    headers = mapOf( "a" to "b" ), // (optional)
    scheduledAt = "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)`);e(D,j)},$$slots:{default:!0}});var B=t(Q);se(B,{content:`mutation {
    functionsCreateExecution(
        functionId: "<FUNCTION_ID>",
        body: "<BODY>",
        async: true,
        path: "<PATH>",
        method: "GET",
        headers: "{}",
        scheduledAt: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
    }
}
`,language:"graphql",process:!0,children:(D,A)=>{n();var j=s(`mutation {
    functionsCreateExecution(
        functionId: "<FUNCTION_ID>",
        body: "<BODY>",
        async: true,
        path: "<PATH>",
        method: "GET",
        headers: "{}",
        scheduledAt: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
    }
}`);e(D,j)},$$slots:{default:!0}});var X=t(B);se(X,{content:`POST https://<REGION>.cloud.backrush.io/v1/functions/<FUNCTION_ID>/executions HTTP/1.1
X-Backrush-Project: "<PROJECT_ID>"
X-Backrush-Response-Format: 1.5.0
Content-Type: application/json

{
  "body": "<BODY>",
  "async": true,
  "path": "<PATH>",
  "method": "GET",
  "headers": {},
  "scheduledAt": "2025-10-15T06:38:00.000+00:00"
}
`,language:"http",process:!0,children:(D,A)=>{n();var j=s(`POST https://<REGION>.cloud.backrush.io/v1/functions/<FUNCTION_ID>/executions HTTP/1.1
X-Backrush-Project: "<PROJECT_ID>"
X-Backrush-Response-Format: 1.5.0
Content-Type: application/json

{
  "body": "<BODY>",
  "async": true,
  "path": "<PATH>",
  "method": "GET",
  "headers": {},
  "scheduledAt": "2025-10-15T06:38:00.000+00:00"
}`);e(D,j)},$$slots:{default:!0}}),e(ne,J)},$$slots:{default:!0}}),e(de,q)},$$slots:{default:!0}});var $e=t(ue);we($e,{id:"sdk",title:"Server SDK",children:(de,fe)=>{var q=ds(),z=r(q);ve(z,{children:(ne,U)=>{n();var J=is(),S=t(r(J));h(S,{href:"/docs/sdks/#server",children:(E,oe)=>{n();var O=s("Server SDK");e(E,O)},$$slots:{default:!0}}),n(),e(ne,J)},$$slots:{default:!0}});var K=t(z);Ie(K,{children:(ne,U)=>{var J=cs(),S=r(J);se(S,{content:`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"server-nodejs",process:!0,children:(ae,V)=>{n();var L=s(`const sdk = require('node-backrush');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(ae,L)},$$slots:{default:!0}});var E=t(S);se(E,{content:`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"deno",process:!0,children:(ae,V)=>{n();var L=s(`import * as sdk from "https://deno.land/x/backrush/mod.ts";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(ae,L)},$$slots:{default:!0}});var oe=t(E);se(oe,{content:`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
)

func main() {
	client := backrush.NewClient(
		backrush.WithProject("<PROJECT_ID>"),
	)

	functions := backrush.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(true), // Scheduled executions need to be async
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{}), // headers (optional)
		functions.WithCreateExecutionScheduledAt("2025-10-15T06:38:00.000+00:00")) // Schedule execution (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}
`,language:"go",process:!0,children:(ae,V)=>{n();var L=s(`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
)

func main() {
	client := backrush.NewClient(
		backrush.WithProject("<PROJECT_ID>"),
	)

	functions := backrush.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(true), // Scheduled executions need to be async
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{}), // headers (optional)
		functions.WithCreateExecutionScheduledAt("2025-10-15T06:38:00.000+00:00")) // Schedule execution (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}`);e(ae,L)},$$slots:{default:!0}});var O=t(oe);se(O,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution( 
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);
`,language:"php",process:!0,children:(ae,V)=>{n();var L=s(`<?php

use Backrush\\Client;
use Backrush\\Services\\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution( 
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);`);e(ae,L)},$$slots:{default:!0}});var Q=t(O);se(Q,{content:`from backrush.client import Client
from backrush.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution( 
    function_id = '<FUNCTION_ID>', # functionId
    body = '<BODY>', # body (optional)
    async = True, # Scheduled executions need to be async
    path = '<PATH>', # path (optional)
    method = ExecutionMethod.GET, # method (optional)
    headers = {} # headers (optional)
    scheduled_at = '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)
`,language:"python",process:!0,children:(ae,V)=>{n();var L=s(`from backrush.client import Client
from backrush.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution( 
    function_id = '<FUNCTION_ID>', # functionId
    body = '<BODY>', # body (optional)
    async = True, # Scheduled executions need to be async
    path = '<PATH>', # path (optional)
    method = ExecutionMethod.GET, # method (optional)
    headers = {} # headers (optional)
    scheduled_at = '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)`);e(ae,L)},$$slots:{default:!0}});var B=t(Q);se(B,{content:`require 'backrush'

include Backrush

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>', # functionId
    body: '<BODY>', # body (optional)
    async: true, # Scheduled executions need to be async
    path: '<PATH>', # path (optional)
    method: ExecutionMethod::GET, # method (optional)
    headers: {} # headers (optional)
    scheduled_at: '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)

puts response.inspect
`,language:"ruby",process:!0,children:(ae,V)=>{n();var L=s(`require 'backrush'

include Backrush

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>', # functionId
    body: '<BODY>', # body (optional)
    async: true, # Scheduled executions need to be async
    path: '<PATH>', # path (optional)
    method: ExecutionMethod::GET, # method (optional)
    headers: {} # headers (optional)
    scheduled_at: '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)

puts response.inspect`);e(ae,L)},$$slots:{default:!0}});var X=t(B);se(X,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // body (optional)
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // path (optional)
    method: ExecutionMethod.GET, // method (optional)
    headers: [object] // headers (optional)
    scheduledAt: "2020-10-15T06:38:00.000+00:00"; // Schedule execution (optional)
`,language:"csharp",process:!0,children:(ae,V)=>{n();var L=s(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // body (optional)
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // path (optional)
    method: ExecutionMethod.GET, // method (optional)
    headers: [object] // headers (optional)
    scheduledAt: "2020-10-15T06:38:00.000+00:00"; // Schedule execution (optional)`);e(ae,L)},$$slots:{default:!0}});var D=t(X);se(D,{content:`import 'package:dart_backrush/dart_backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // (optional)
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // (optional)
    method: ExecutionMethod.GET, // (optional)
    headers: {}, // (optional)
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
`,language:"dart",process:!0,children:(ae,V)=>{n();var L=s(`import 'package:dart_backrush/dart_backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // (optional)
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // (optional)
    method: ExecutionMethod.GET, // (optional)
    headers: {}, // (optional)
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}`);e(ae,L)},$$slots:{default:!0}});var A=t(D);se(A,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00", // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(ae,V)=>{n();var L=s(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00", // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(ae,L)},$$slots:{default:!0}});var j=t(A);se(j,{content:`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    ExecutionMethod.GET, // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(ae,V)=>{n();var L=s(`import io.backrush.Client;
import io.backrush.coroutines.CoroutineCallback;
import io.backrush.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    ExecutionMethod.GET, // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);e(ae,L)},$$slots:{default:!0}});var re=t(j);se(re,{content:`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: true, // Scheduled executions need to be async
  path: "<PATH>", // optional
  method: .gET, // optional
  headers: [:] // optional
  scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
`,language:"swift",process:!0,children:(ae,V)=>{n();var L=s(`import Backrush

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: true, // Scheduled executions need to be async
  path: "<PATH>", // optional
  method: .gET, // optional
  headers: [:] // optional
  scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)`);e(ae,L)},$$slots:{default:!0}}),e(ne,J)},$$slots:{default:!0}}),e(de,q)},$$slots:{default:!0}}),e(y,b)},$$slots:{default:!0}});var rt=t(ot);Pe(rt,{id:"permission",level:1,children:(y,ce)=>{n();var b=s("Permissions");e(y,b)},$$slots:{default:!0}});var st=t(rt);ve(st,{children:(y,ce)=>{n();var b=$s(),te=t(r(b));h(te,{href:"/docs/advanced/platform/permissions",children:(ue,$e)=>{n();var de=s("permissions");e(ue,de)},$$slots:{default:!0}}),n(),e(y,b)},$$slots:{default:!0}});var $t=t(st);ve($t,{children:(y,ce)=>{n();var b=ps(),te=t(r(b));f(te,{content:"Any"}),n(),e(y,b)},$$slots:{default:!0}}),ft(De),e(ut,De)},$$slots:{default:!0}}))}export{Ns as component};
