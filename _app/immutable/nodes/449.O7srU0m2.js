import{t as I,b as a,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f as h,c as ve,n as e,r as _e}from"../chunks/NgVQVlRK.js";import{n as Ie}from"../chunks/B4IyMRKX.js";import{H as A}from"../chunks/CXsRaEhZ.js";import{M as R}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as g}from"../chunks/DXp9_3zM.js";import{F as $}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as J}from"../chunks/D8YsId2T.js";import{S as C}from"../chunks/yHjwcyUH.js";import{L as O}from"../chunks/yh4_9ChP.js";import{T as he}from"../chunks/D8BqvLkQ.js";import{T as me,a as k,b as N,c as Pe,d as Y}from"../chunks/BpU_IltG.js";import{A as be}from"../chunks/CqOphJLh.js";const we={layout:"article",title:"JWT login",description:"Integrate Backrush's authentication into your server-side applications. Explore server integrations, best practices, and security considerations for seamless authentication."};var Je=I("You can extend Backrush&#39;s APIs by building backend apps using <!>. To secure your backend app&#39;s APIs, client apps must prove their identity against your backend app before accessing sensitive information. You can secure these APIs and enforce access permissions in your backend app by using JWT authentication.",1),Ee=I("If you are already authenticated on your client-side app and need your backend app to <!>, this guide will walk you through the process.",1),De=I("Before making requests to your backend APIs, your client application needs to first create a session <!> using the account service. This session will act like an ID card for the user and can be used to access resources in Backrush. The client will <!> based on the resources&#39; <!>.",1),ye=I("When you build backend APIs to extend Backrush&#39;s functionality, these APIs should still <!> to keep user data secure. Backrush&#39;s backend SDKs allow you to securely act on behalf of a user with the same permissions by using JWT authentication.",1),Ye=I("<!> (JWTs) are a secure means to transfer information or claims between two parties. JWTs act like temporary copies of the user&#39;s ID card that allow Backrush&#39;s Server SDKs to access information on behalf of a user.",1),Te=I("You need to create a session using the Client SDKs <!> generating a JWT. The JWT will be a stateless proof of claim for the identity of the authenticated user and expire after 15 minutes or when the session is deleted.",1),Ce=I("You can generate a JWT like this on a <!>.",1),Oe=I("<!><!><!><!><!>",1),ge=I("Your server application can use the JWT to act on behalf of the user by creating a <!> instance with the JWT for <!>. To keep your API secure, <!> after each request.",1),je=I("Use JWTs tokens like this in a <!>.",1),Ae=I("<!><!><!><!><!><!><!><!><!>",1),Re=I("If your backend app&#39;s Server SDK is using an <!>, it will fetch <!> regardless of permissions. This means the Server SDK might fetch files and documents your user should not be able to see, which is not helpful when you need to act on behalf of a user.",1),ke=I("If your backend app&#39;s Server SDK is using a <!>, it will only fetch resources your user has permissions to access.",1),Ne=I("Here&#39;s an example collection of birthdays with the following documents. Notice how they all have <!>.",1),We=I("<!><!><!><!>",1),xe=I("<!><!><!><!>",1),Se=I("<!><!><!><!>",1),Ge=I("<!><!><!><!>",1),Me=I("<!><!><!>",1),Ke=I("<!><!>",1),qe=I("If you&#39;re authenticated on the client-side as <!> and created a JWT <!>, you can pass this JWT to a Server SDK on the backend server to fetch only the birthdays <!> can read.",1),Le=I("<!><!><!><!><!><!><!><!><!>",1),Be=I("Only Kevin&#39;s birthday is returned and documents where <!> has no permissions to access are not returned.",1),He=I("If the same request is made where the <!>&#39;s <!> is authenticated with an API key instead of a JWT, the results returned will be different.",1),Fe=I("<!><!><!><!><!><!><!><!><!>",1),Ue=I("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ht(ue){be(ue,Ie(we,{children:($e,ze)=>{var W=Ue(),x=ve(W);J(x,{children:(i,v)=>{e();var o=Je(),c=n(h(o));O(c,{href:"/docs/sdks#server",children:(l,u)=>{e();var d=a("Server SDKs");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var S=n(x);J(S,{children:(i,v)=>{e();var o=Ee(),c=n(h(o));C(c,{marker:"**",children:(l,u)=>{e();var d=a("act on behalf of the user");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var G=n(S);A(G,{id:"proof-of-identity",level:1,children:(i,v)=>{e();var o=a("Proof of Identity");t(i,o)},$$slots:{default:!0}});var M=n(G);J(M,{children:(i,v)=>{e();var o=De(),c=n(h(o));C(c,{marker:"**",children:(d,_)=>{e();var f=a("directly with Backrush");t(d,f)},$$slots:{default:!0}});var l=n(c,2);C(l,{marker:"**",children:(d,_)=>{e();var f=a("only receive information accessible to the user");t(d,f)},$$slots:{default:!0}});var u=n(l,2);O(u,{href:"/docs/advanced/platform/permissions",children:(d,_)=>{e();var f=a("permissions");t(d,f)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var K=n(M);J(K,{children:(i,v)=>{e();var o=ye(),c=n(h(o));C(c,{marker:"**",children:(l,u)=>{e();var d=a("respect access permissions");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var q=n(K);A(q,{id:"jwt",level:1,children:(i,v)=>{e();var o=a("JWT Authentication");t(i,o)},$$slots:{default:!0}});var L=n(q);J(L,{children:(i,v)=>{var o=Ye(),c=h(o);O(c,{href:"https://jwt.io/introduction",children:(l,u)=>{e();var d=a("JSON Web Tokens");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var B=n(L);J(B,{children:(i,v)=>{e();var o=Te(),c=n(h(o));C(c,{marker:"**",children:(l,u)=>{e();var d=a("before");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var H=n(B);J(H,{children:(i,v)=>{e();var o=Ce(),c=n(h(o));O(c,{href:"/docs/sdks#client",children:(l,u)=>{e();var d=a("Client SDK");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var F=n(H);R(F,{children:(i,v)=>{var o=Oe(),c=h(o);$(c,{content:`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.createJWT();
`,language:"client-web",process:!0,children:(f,w)=>{e();var m=a(`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.createJWT();`);t(f,m)},$$slots:{default:!0}});var l=n(c);$(l,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final jwt = await account.createJWT();
`,language:"client-flutter",process:!0,children:(f,w)=>{e();var m=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final jwt = await account.createJWT();`);t(f,m)},$$slots:{default:!0}});var u=n(l);$(u,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let jwt = try await account.createJWT()
`,language:"client-apple",process:!0,children:(f,w)=>{e();var m=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let jwt = try await account.createJWT()`);t(f,m)},$$slots:{default:!0}});var d=n(u);$(d,{content:`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val jwt = account.createJWT()
`,language:"client-android-kotlin",process:!0,children:(f,w)=>{e();var m=a(`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val jwt = account.createJWT()`);t(f,m)},$$slots:{default:!0}});var _=n(d);$(_,{content:`mutation {
    accountCreateJWT {
        jwt
    }
}
`,language:"graphql",process:!0,children:(f,w)=>{e();var m=a(`mutation {
    accountCreateJWT {
        jwt
    }
}`);t(f,m)},$$slots:{default:!0}}),t(i,o)},$$slots:{default:!0}});var U=n(F);J(U,{children:(i,v)=>{e();var o=ge(),c=n(h(o));g(c,{content:"Client"});var l=n(c,2);C(l,{marker:"**",children:(d,_)=>{e();var f=a("each request it receives");t(d,f)},$$slots:{default:!0}});var u=n(l,2);C(u,{marker:"**",children:(d,_)=>{e();var f=a("discard the client object");t(d,f)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var z=n(U);J(z,{children:(i,v)=>{e();var o=je(),c=n(h(o));O(c,{href:"/docs/sdks#server",children:(l,u)=>{e();var d=a("Server SDK");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var Q=n(z);R(Q,{children:(i,v)=>{var o=Ae(),c=h(o);$(c,{content:`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token
`,language:"js",process:!0,children:(s,p)=>{e();var r=a(`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var l=n(c);$(l,{content:`use Backrush\\Client;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')            // Your API Endpoint
    ->setProject('<PROJECT_ID>')                             // Your project ID
    ->setJWT('eyJJ9.eyJ...886ca');                           // Your secret JSON Web Token
`,language:"php",process:!0,children:(s,p)=>{e();var r=a(`use Backrush\\Client;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')            // Your API Endpoint
    ->setProject('<PROJECT_ID>')                             // Your project ID
    ->setJWT('eyJJ9.eyJ...886ca');                           // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var u=n(l);$(u,{content:`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                  # Your project ID
  .set_jwt('eyJJ9.eyJ...886ca')                 # Your secret JSON Web Token
)
`,language:"python",process:!0,children:(s,p)=>{e();var r=a(`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                  # Your project ID
  .set_jwt('eyJJ9.eyJ...886ca')                 # Your secret JSON Web Token
)`);t(s,r)},$$slots:{default:!0}});var d=n(u);$(d,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                    # Your project ID
    .set_jwt('eyJJ9.eyJ...886ca')                   # Your secret JSON Web Token
`,language:"ruby",process:!0,children:(s,p)=>{e();var r=a(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                    # Your project ID
    .set_jwt('eyJJ9.eyJ...886ca')                   # Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var _=n(d);$(_,{content:`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token
`,language:"deno",process:!0,children:(s,p)=>{e();var r=a(`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var f=n(_);$(f,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token
`,language:"dart",process:!0,children:(s,p)=>{e();var r=a(`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var w=n(f);$(w,{content:`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token
`,language:"kotlin",process:!0,children:(s,p)=>{e();var r=a(`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var m=n(w);$(m,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token
`,language:"swift",process:!0,children:(s,p)=>{e();var r=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}});var D=n(m);$(D,{content:`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetJWT("eyJJ9.eyJ...886ca");                   // Your secret JSON Web Token
`,language:"csharp",process:!0,children:(s,p)=>{e();var r=a(`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetJWT("eyJJ9.eyJ...886ca");                   // Your secret JSON Web Token`);t(s,r)},$$slots:{default:!0}}),t(i,o)},$$slots:{default:!0}});var V=n(Q);A(V,{id:"when-to-use",level:1,children:(i,v)=>{e();var o=a("When should I use JWTs?");t(i,o)},$$slots:{default:!0}});var X=n(V);J(X,{children:(i,v)=>{e();var o=a("JWT auth is useful when you need your backend app's Server SDK to be restricted by the same set of permissions.");t(i,o)},$$slots:{default:!0}});var Z=n(X);J(Z,{children:(i,v)=>{e();var o=Re(),c=n(h(o));O(c,{href:"/docs/advanced/platform/api-keys",children:(u,d)=>{e();var _=a("API key");t(u,_)},$$slots:{default:!0}});var l=n(c,2);C(l,{marker:"**",children:(u,d)=>{e();var _=a("all resources");t(u,_)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var ee=n(Z);J(ee,{children:(i,v)=>{e();var o=ke(),c=n(h(o));C(c,{marker:"**",children:(l,u)=>{e();var d=a("JWT");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var te=n(ee);A(te,{id:"when-to-use-example",level:1,children:(i,v)=>{e();var o=a("Example");t(i,o)},$$slots:{default:!0}});var ne=n(te);J(ne,{children:(i,v)=>{e();var o=Ne(),c=n(h(o));C(c,{marker:"**",children:(l,u)=>{e();var d=a("different permissions");t(l,d)},$$slots:{default:!0}}),e(),t(i,o)},$$slots:{default:!0}});var oe=n(ne);he(oe,{children:(i,v)=>{var o=Ke(),c=h(o);me(c,{children:(u,d)=>{k(u,{children:(_,f)=>{var w=We(),m=h(w);N(m,{children:(r,y)=>{e();var E=a("$id");t(r,E)},$$slots:{default:!0}});var D=n(m);N(D,{children:(r,y)=>{e();var E=a("name");t(r,E)},$$slots:{default:!0}});var s=n(D);N(s,{children:(r,y)=>{e();var E=a("birthday");t(r,E)},$$slots:{default:!0}});var p=n(s);N(p,{children:(r,y)=>{e();var E=a("$permissions");t(r,E)},$$slots:{default:!0}}),t(_,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var l=n(c);Pe(l,{children:(u,d)=>{var _=Me(),f=h(_);k(f,{children:(D,s)=>{var p=xe(),r=h(p);Y(r,{children:(P,T)=>{e();var b=a("ac5fc866ad1e");t(P,b)},$$slots:{default:!0}});var y=n(r);Y(y,{children:(P,T)=>{e();var b=a("Kevin");t(P,b)},$$slots:{default:!0}});var E=n(y);Y(E,{children:(P,T)=>{e();var b=a("2012-02-03");t(P,b)},$$slots:{default:!0}});var j=n(E);Y(j,{children:(P,T)=>{e();var b=a('"read("user:user-a")"');t(P,b)},$$slots:{default:!0}}),t(D,p)},$$slots:{default:!0}});var w=n(f);k(w,{children:(D,s)=>{var p=Se(),r=h(p);Y(r,{children:(P,T)=>{e();var b=a("bc7fc866ad1e");t(P,b)},$$slots:{default:!0}});var y=n(r);Y(y,{children:(P,T)=>{e();var b=a("Laura");t(P,b)},$$slots:{default:!0}});var E=n(y);Y(E,{children:(P,T)=>{e();var b=a("1999-09-22");t(P,b)},$$slots:{default:!0}});var j=n(E);Y(j,{children:(P,T)=>{e();var b=a('"read("user:user-b")"');t(P,b)},$$slots:{default:!0}}),t(D,p)},$$slots:{default:!0}});var m=n(w);k(m,{children:(D,s)=>{var p=Ge(),r=h(p);Y(r,{children:(P,T)=>{e();var b=a("cc2fc886ad1e");t(P,b)},$$slots:{default:!0}});var y=n(r);Y(y,{children:(P,T)=>{e();var b=a("Bob");t(P,b)},$$slots:{default:!0}});var E=n(y);Y(E,{children:(P,T)=>{e();var b=a("1982-05-11");t(P,b)},$$slots:{default:!0}});var j=n(E);Y(j,{children:(P,T)=>{e();var b=a('"read("user:user-c")"');t(P,b)},$$slots:{default:!0}}),t(D,p)},$$slots:{default:!0}}),t(u,_)},$$slots:{default:!0}}),t(i,o)},$$slots:{default:!0}});var ae=n(oe);J(ae,{children:(i,v)=>{e();var o=qe(),c=n(h(o));g(c,{content:"user-a"});var l=n(c,2);g(l,{content:"'eyJJ9.eyJ...886ca'"});var u=n(l,2);g(u,{content:"user-a"}),e(),t(i,o)},$$slots:{default:!0}});var re=n(ae);R(re,{children:(i,v)=>{var o=Le(),c=h(o);$(c,{content:`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"js",process:!0,children:(s,p)=>{e();var r=a(`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var l=n(c);$(l,{content:`use Backrush\\Client;

$client = (new Client())
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')            // Your API Endpoint
    .setProject('<PROJECT_ID>')                           // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                          // Your secret JSON Web Tokens

$databases = new Databases($client);

$documents = $databases->listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"php",process:!0,children:(s,p)=>{e();var r=a(`use Backrush\\Client;

$client = (new Client())
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')            // Your API Endpoint
    .setProject('<PROJECT_ID>')                           // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                          // Your secret JSON Web Tokens

$databases = new Databases($client);

$documents = $databases->listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var u=n(l);$(u,{content:`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')              # Your API Endpoint
  .set_project('<PROJECT_ID>')                             # Your project ID
  .set_jwt('eyJJ9.eyJ...886ca')                             # Your secret JSON Web Token
)

databases = Databases(client)

documents = databases.list_documents(
    database_id='642f358bf4084c662590',
    collection_id='642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results
`,language:"python",process:!0,children:(s,p)=>{e();var r=a(`from appwrite.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')              # Your API Endpoint
  .set_project('<PROJECT_ID>')                             # Your project ID
  .set_jwt('eyJJ9.eyJ...886ca')                             # Your secret JSON Web Token
)

databases = Databases(client)

documents = databases.list_documents(
    database_id='642f358bf4084c662590',
    collection_id='642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var d=n(u);$(d,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')            # Your API Endpoint
    .set_project('<PROJECT_ID>')                           # Your project ID
    .set_jwt('eyJJ9.eyJ...886ca')                           # Your secret JSON Web Token

databases = Databases.new(client)

documents = databases.list_documents(
    database_id: '642f358bf4084c662590',
    collection_id: '642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results
`,language:"ruby",process:!0,children:(s,p)=>{e();var r=a(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')            # Your API Endpoint
    .set_project('<PROJECT_ID>')                           # Your project ID
    .set_jwt('eyJJ9.eyJ...886ca')                           # Your secret JSON Web Token

databases = Databases.new(client)

documents = databases.list_documents(
    database_id: '642f358bf4084c662590',
    collection_id: '642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var _=n(d);$(_,{content:`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token

let databases = new sdk.Databases(client);

let documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"deno",process:!0,children:(s,p)=>{e();var r=a(`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token

let databases = new sdk.Databases(client);

let documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var f=n(_);$(f,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token

final databases = Databases(client);

final documents = await databases.listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e',
);
// ... More code to manipulate the results
`,language:"dart",process:!0,children:(s,p)=>{e();var r=a(`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                   // Your secret JSON Web Token

final databases = Databases(client);

final documents = await databases.listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e',
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var w=n(f);$(w,{content:`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token

val databases = Databases(client)

val documents = databases.listDocuments(
    databaseId = "642f358bf4084c662590",
    collectionId = "642f3592aa5fc856ad1e",
)
// ... More code to manipulate the results
`,language:"kotlin",process:!0,children:(s,p)=>{e();var r=a(`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token

val databases = Databases(client)

val documents = databases.listDocuments(
    databaseId = "642f358bf4084c662590",
    collectionId = "642f3592aa5fc856ad1e",
)
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var m=n(w);$(m,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token
    
let databases = Databases(client)

let documents = try await databases.listDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e"
)
// ... More code to manipulate the results
`,language:"swift",process:!0,children:(s,p)=>{e();var r=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setJWT("eyJJ9.eyJ...886ca")                    // Your secret JSON Web Token
    
let databases = Databases(client)

let documents = try await databases.listDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e"
)
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var D=n(m);$(D,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetJWT("eyJJ9.eyJ...886ca");                   // Your secret JSON Web Token

var databases = new Databases(client);

var documents = await databases.ListDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e");

// ... More code to manipulate the results
`,language:"csharp",process:!0,children:(s,p)=>{e();var r=a(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetJWT("eyJJ9.eyJ...886ca");                   // Your secret JSON Web Token

var databases = new Databases(client);

var documents = await databases.ListDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e");

// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}}),t(i,o)},$$slots:{default:!0}});var se=n(re);J(se,{children:(i,v)=>{e();var o=Be(),c=n(h(o));g(c,{content:"user-A"}),e(),t(i,o)},$$slots:{default:!0}});var ie=n(se);$(ie,{content:`{
  "total": 1,
  "documents": [
    {
      "name": "Kevin",
      "birthday": "2012-02-03T00:00:00.000+00:00",
      "$id": "ac5fc866ad1e",
      "$permissions": [
        "read(\\"user:user-a\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    }
  ]
}
`,language:"js",process:!0,children:(i,v)=>{e();var o=a(`{
  "total": 1,
  "documents": [
    {
      "name": "Kevin",
      "birthday": "2012-02-03T00:00:00.000+00:00",
      "$id": "ac5fc866ad1e",
      "$permissions": [
        "read(\\"user:user-a\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    }
  ]
}`);t(i,o)},$$slots:{default:!0}});var ce=n(ie);J(ce,{children:(i,v)=>{e();var o=He(),c=n(h(o));O(c,{href:"/docs/sdks#server",children:(u,d)=>{e();var _=a("Server SDK");t(u,_)},$$slots:{default:!0}});var l=n(c,2);g(l,{content:"client"}),e(),t(i,o)},$$slots:{default:!0}});var le=n(ce);R(le,{children:(i,v)=>{var o=Fe(),c=h(o);$(c,{content:`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"js",process:!0,children:(s,p)=>{e();var r=a(`const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var l=n(c);$(l,{content:`use Backrush\\Client;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('98fd4...a2ad2');                    // Your secret API key

$databases = new Databases($client);

$documents = $databases->listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"php",process:!0,children:(s,p)=>{e();var r=a(`use Backrush\\Client;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                  // Your project ID
    ->setKey('98fd4...a2ad2');                    // Your secret API key

$databases = new Databases($client);

$documents = $databases->listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var u=n(l);$(u,{content:`from appwrite.client import Client

client = Client()
(client
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .set_project('<PROJECT_ID>')                  // Your project ID
    .set_key('98fd4...a2ad2')                     // Your secret API key
)

databases = Databases(client)

documents = databases.list_documents(
    database_id='642f358bf4084c662590',
    collection_id='642f3592aa5fc856ad1e'
)
// ... More code to manipulate the results
`,language:"python",process:!0,children:(s,p)=>{e();var r=a(`from appwrite.client import Client

client = Client()
(client
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .set_project('<PROJECT_ID>')                  // Your project ID
    .set_key('98fd4...a2ad2')                     // Your secret API key
)

databases = Databases(client)

documents = databases.list_documents(
    database_id='642f358bf4084c662590',
    collection_id='642f3592aa5fc856ad1e'
)
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var d=n(u);$(d,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('98fd4...a2ad2')                     # Your secret API key

databases = Databases.new(client)

documents = databases.list_documents(
    database_id: '642f358bf4084c662590',
    collection_id: '642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results
`,language:"ruby",process:!0,children:(s,p)=>{e();var r=a(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                  # Your project ID
    .set_key('98fd4...a2ad2')                     # Your secret API key

databases = Databases.new(client)

documents = databases.list_documents(
    database_id: '642f358bf4084c662590',
    collection_id: '642f3592aa5fc856ad1e'
)
# ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var _=n(d);$(_,{content:`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let databases = new sdk.Databases(client);

let documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results
`,language:"deno",process:!0,children:(s,p)=>{e();var r=a(`import { Client } from "https://deno.land/x/appwrite/mod.ts";

let client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let databases = new sdk.Databases(client);

let documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var f=n(_);$(f,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

final databases = Databases(client);

final documents = await databases.listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e',
);
// ... More code to manipulate the results
`,language:"dart",process:!0,children:(s,p)=>{e();var r=a(`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

final databases = Databases(client);

final documents = await databases.listDocuments(
    databaseId: '642f358bf4084c662590',
    collectionId: '642f3592aa5fc856ad1e',
);
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var w=n(f);$(w,{content:`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

val databases = Databases(client)

val documents = databases.listDocuments(
    databaseId = "642f358bf4084c662590",
    collectionId = "642f3592aa5fc856ad1e",
)
// ... More code to manipulate the results
`,language:"kotlin",process:!0,children:(s,p)=>{e();var r=a(`import io.appwrite.Client

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

val databases = Databases(client)

val documents = databases.listDocuments(
    databaseId = "642f358bf4084c662590",
    collectionId = "642f3592aa5fc856ad1e",
)
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var m=n(w);$(m,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let databases = Databases(client)

let documents = try await databases.listDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e"
)
// ... More code to manipulate the results
`,language:"swift",process:!0,children:(s,p)=>{e();var r=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

let databases = Databases(client)

let documents = try await databases.listDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e"
)
// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}});var D=n(m);$(D,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey('98fd4...a2ad2');                    // Your secret API key

var databases = new Databases(client);

var documents = await databases.ListDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e");

// ... More code to manipulate the results
`,language:"csharp",process:!0,children:(s,p)=>{e();var r=a(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey('98fd4...a2ad2');                    // Your secret API key

var databases = new Databases(client);

var documents = await databases.ListDocuments(
    databaseId: "642f358bf4084c662590",
    collectionId: "642f3592aa5fc856ad1e");

// ... More code to manipulate the results`);t(s,r)},$$slots:{default:!0}}),t(i,o)},$$slots:{default:!0}});var de=n(le);J(de,{children:(i,v)=>{e();var o=a("This will return every document regardless of permissions, which could lead to privacy and security problems.");t(i,o)},$$slots:{default:!0}});var pe=n(de);$(pe,{content:`{
  "total": 3,
  "documents": [
    {
      "name": "Kevin",
      "birthday": "2012-02-03T00:00:00.000+00:00",
      "$id": "ac5fc866ad1e",
      "$permissions": [
        "read(\\"user:user-a\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    },
    {
      "name": "Laura",
      "birthday": "1999-09-22T11:21:23.334+00:00",
      "$id": "bc7fc866ad1e",
      "$permissions": [
        "read(\\"user:user-b\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    },
    {
      "name": "Bob",
      "birthday": "1982-05-11T12:31:39.381+00:00",
      "$id": "cc2fc886ad1e",
      "$permissions": [
        "read(\\"user:user-c\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    }
  ]
}
`,language:"json",process:!0,children:(i,v)=>{e();var o=a(`{
  "total": 3,
  "documents": [
    {
      "name": "Kevin",
      "birthday": "2012-02-03T00:00:00.000+00:00",
      "$id": "ac5fc866ad1e",
      "$permissions": [
        "read(\\"user:user-a\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    },
    {
      "name": "Laura",
      "birthday": "1999-09-22T11:21:23.334+00:00",
      "$id": "bc7fc866ad1e",
      "$permissions": [
        "read(\\"user:user-b\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    },
    {
      "name": "Bob",
      "birthday": "1982-05-11T12:31:39.381+00:00",
      "$id": "cc2fc886ad1e",
      "$permissions": [
        "read(\\"user:user-c\\")"
      ],
      "$collectionId": "642f3592aa5fc856ad1e",
      "$databaseId": "642f358bf4084c662590",
      ...
    }
  ]
}`);t(i,o)},$$slots:{default:!0}});var fe=n(pe);J(fe,{children:(i,v)=>{e();var o=a("If you're integrating existing backend services with Backrush or adding backend endpoints to perform more complex logic, JWT authentication helps them behave similarly to actual Backrush endpoints.");t(i,o)},$$slots:{default:!0}}),_e(W),t($e,W)},$$slots:{default:!0}}))}export{ht as component};
