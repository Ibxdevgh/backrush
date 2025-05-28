import{t as f,b as o,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f as m,c as F,n as e,r as L}from"../chunks/NgVQVlRK.js";import{n as q}from"../chunks/B4IyMRKX.js";import{H as x}from"../chunks/CXsRaEhZ.js";import{M as K}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as M}from"../chunks/DXp9_3zM.js";import{F as $}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P}from"../chunks/D8YsId2T.js";import{L as v}from"../chunks/yh4_9ChP.js";import{A as H}from"../chunks/CqOphJLh.js";const z={layout:"article",title:"Custom token login",description:"Limitless authentication flow in Backrush. Find out how to implement custom authentication flow or connect to 3rd party authentication providers."};var W=f("Tokens are short-lived secrets created by an <!> that can be exchanged for session by a <!> to log in users. You may already be familiar with tokens if you checked out <!>, <!> or <!>.",1),B=f("Custom token allows you to use <!> to generate tokens for your own implementations. This allows you to code your own authentication methods using Backrush Functions or your own backend. You could implement username and password sign-in, captcha-protected authentication, phone call auth, and much more. Custom tokens also allow you to skip authentication which is useful when you integrate Backrush with external authenticaion providers such as Auth0, TypingDNA, or any provider trusted by your users.",1),Q=f("Once you have your server endpoint prepared either in an Backrush Function or a server integration, you can use the <!> endpoint of the <!> to generate a token.",1),V=f("<!><!><!><!><!><!><!><!><!>",1),X=f("The newly created token includes a <!> which is 6 character long hexadecimal string. You can configure length of the secret and expiry when creating a token.",1),Z=f("Once the client receives a token secret, we can use it to authenticate the user in the application. Use the <!> <!> to exchange the token secret for a valid session, which logs the user.",1),ee=f("<!><!><!><!><!>",1),te=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function me(N){H(N,q(z,{children:(G,ne)=>{var k=te(),R=F(k);P(R,{children:(s,h)=>{e();var r=W(),c=n(m(r));v(c,{href:"/docs/sdks#server",children:(i,E)=>{e();var a=o("Backrush Server SDK");t(i,a)},$$slots:{default:!0}});var d=n(c,2);v(d,{href:"/docs/sdks#client",children:(i,E)=>{e();var a=o("Client SDK");t(i,a)},$$slots:{default:!0}});var l=n(d,2);v(l,{href:"/docs/products/auth/magic-url",children:(i,E)=>{e();var a=o("Magic URL login");t(i,a)},$$slots:{default:!0}});var _=n(l,2);v(_,{href:"/docs/products/auth/email-otp",children:(i,E)=>{e();var a=o("Email OTP login");t(i,a)},$$slots:{default:!0}});var I=n(_,2);v(I,{href:"/docs/products/auth/phone-sms",children:(i,E)=>{e();var a=o("Phone (SMS) login");t(i,a)},$$slots:{default:!0}}),e(),t(s,r)},$$slots:{default:!0}});var C=n(R);P(C,{children:(s,h)=>{e();var r=B(),c=n(m(r));v(c,{href:"/docs/sdks#server",children:(d,l)=>{e();var _=o("Server SDK");t(d,_)},$$slots:{default:!0}}),e(),t(s,r)},$$slots:{default:!0}});var A=n(C);x(A,{id:"create-custom-token",level:1,children:(s,h)=>{e();var r=o("Create custom token");t(s,r)},$$slots:{default:!0}});var D=n(A);P(D,{children:(s,h)=>{e();var r=Q(),c=n(m(r));v(c,{href:"/docs/references/cloud/server-nodejs/users#createToken",children:(l,_)=>{e();var I=o("Create token");t(l,I)},$$slots:{default:!0}});var d=n(c,2);v(d,{href:"/docs/products/auth/users",children:(l,_)=>{e();var I=o("Users API");t(l,I)},$$slots:{default:!0}}),e(),t(s,r)},$$slots:{default:!0}});var g=n(D);K(g,{children:(s,h)=>{var r=V(),c=m(r);$(c,{content:`import { Client, Users } from "node-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>');                    // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

const users = new Users(client);

const token = await users.createToken('[USER_ID]');
const secret = token.secret;
`,language:"server-nodejs",process:!0,children:(p,w)=>{e();var u=o(`import { Client, Users } from "node-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>');                    // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

const users = new Users(client);

const token = await users.createToken('[USER_ID]');
const secret = token.secret;`);t(p,u)},$$slots:{default:!0}});var d=n(c);$(d,{content:`use Backrush\\Client;
use Backrush\\Users;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')   // Your API Endpoint
    ->setProject('<PROJECT_ID>')                    // Your project ID
    ->setKey('<API_KEY>');                          // Your project API key

$users = new Users($client);

$token = $users->createToken('[USER_ID]');
$secret = $token['secret'];
`,language:"php",process:!0,children:(p,w)=>{e();var u=o(`use Backrush\\Client;
use Backrush\\Users;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')   // Your API Endpoint
    ->setProject('<PROJECT_ID>')                    // Your project ID
    ->setKey('<API_KEY>');                          // Your project API key

$users = new Users($client);

$token = $users->createToken('[USER_ID]');
$secret = $token['secret'];`);t(p,u)},$$slots:{default:!0}});var l=n(d);$(l,{content:`from appwrite.client import Client
from appwrite.users import Users

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                  # Your project ID
  .set_key('<API_KEY>')                         # Your project API key
)

users = Users(client)

token = users.create_token('[USER_ID]')
secret = token.secret
`,language:"python",process:!0,children:(p,w)=>{e();var u=o(`from appwrite.client import Client
from appwrite.users import Users

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                  # Your project ID
  .set_key('<API_KEY>')                         # Your project API key
)

users = Users(client)

token = users.create_token('[USER_ID]')
secret = token.secret`);t(p,u)},$$slots:{default:!0}});var _=n(l);$(_,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                    # Your project ID
    .set_key('<API_KEY>')                           # Your project API key

users = Users.new(client)

token = users.create_token('[USER_ID]')
secret = token['secret']
`,language:"ruby",process:!0,children:(p,w)=>{e();var u=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                    # Your project ID
    .set_key('<API_KEY>')                           # Your project API key

users = Users.new(client)

token = users.create_token('[USER_ID]')
secret = token['secret']`);t(p,u)},$$slots:{default:!0}});var I=n(_);$(I,{content:`import { Client, Users } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

const users = new Users(client);

const token = await users.createToken('[USER_ID]');
const secret = token.secret;
`,language:"deno",process:!0,children:(p,w)=>{e();var u=o(`import { Client, Users } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

const users = new Users(client);

const token = await users.createToken('[USER_ID]');
const secret = token.secret;`);t(p,u)},$$slots:{default:!0}});var i=n(I);$(i,{content:`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

final users = Users(client);

final token = await users.createToken('[USER_ID]');
final secret = token.secret;
`,language:"dart",process:!0,children:(p,w)=>{e();var u=o(`import 'package:dart_appwrite/dart_appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                     // Your project ID
    .setKey('<API_KEY>');                           // Your project API key

final users = Users(client);

final token = await users.createToken('[USER_ID]');
final secret = token.secret;`);t(p,u)},$$slots:{default:!0}});var E=n(i);$(E,{content:`import io.appwrite.Client
import io.appwrite.Users

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setKey("<API_KEY>")                            // Your project API key

val users = Users(client)

val token = users.createToken("[USER_ID]")
val secret = token.secret
`,language:"kotlin",process:!0,children:(p,w)=>{e();var u=o(`import io.appwrite.Client
import io.appwrite.Users

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setKey("<API_KEY>")                            // Your project API key

val users = Users(client)

val token = users.createToken("[USER_ID]")
val secret = token.secret`);t(p,u)},$$slots:{default:!0}});var a=n(E);$(a,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setKey("<API_KEY>")                            // Your project API key

let users = Users(client)

let token = try await users.createToken("[USER_ID]")
let secret = token.secret
`,language:"swift",process:!0,children:(p,w)=>{e();var u=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                     // Your project ID
    .setKey("<API_KEY>")                            // Your project API key

let users = Users(client)

let token = try await users.createToken("[USER_ID]")
let secret = token.secret`);t(p,u)},$$slots:{default:!0}});var b=n(a);$(b,{content:`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetKey("<API_KEY>");                           // Your project API key

var users = new Users(client);

var token = await users.CreateToken("[USER_ID]");
var secret = token.secret;
`,language:"csharp",process:!0,children:(p,w)=>{e();var u=o(`using Backrush;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                     // Your project ID
    .SetKey("<API_KEY>");                           // Your project API key

var users = new Users(client);

var token = await users.CreateToken("[USER_ID]");
var secret = token.secret;`);t(p,u)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var y=n(g);P(y,{children:(s,h)=>{e();var r=X(),c=n(m(r));M(c,{content:"secret"}),e(),t(s,r)},$$slots:{default:!0}});var Y=n(y);P(Y,{children:(s,h)=>{e();var r=o("If you are integrating with external authentication providers or implementing your own authentication, make sure to validate user authenticated properly before generating a token for them.");t(s,r)},$$slots:{default:!0}});var j=n(Y);P(j,{children:(s,h)=>{e();var r=o("If you are implementing token-based authentication flow, share the token secret with user over any channel of your choice instead of directly giving it to him in the response.");t(s,r)},$$slots:{default:!0}});var S=n(j);P(S,{children:(s,h)=>{e();var r=o("If the client doesn't know the user's ID during authentication, we recommend to directly return user ID to the client as part of this step. If necessary, you can check if the user with an user ID exists first, and create a new user if needed.");t(s,r)},$$slots:{default:!0}});var U=n(S);x(U,{id:"login",level:1,children:(s,h)=>{e();var r=o("Login");t(s,r)},$$slots:{default:!0}});var T=n(U);P(T,{children:(s,h)=>{e();var r=Z(),c=n(m(r));v(c,{href:"/docs/sdks#client",children:(l,_)=>{e();var I=o("Client SDK's");t(l,I)},$$slots:{default:!0}});var d=n(c,2);v(d,{href:"/docs/references/cloud/server-nodejs/account#createSession",children:(l,_)=>{e();var I=o("Create session endpoint");t(l,I)},$$slots:{default:!0}}),e(),t(s,r)},$$slots:{default:!0}});var O=n(T);K(O,{children:(s,h)=>{var r=ee(),c=m(r);$(c,{content:`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    '[USER_ID]',
    '[SECRET]'
);
`,language:"client-web",process:!0,children:(i,E)=>{e();var a=o(`import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const session = await account.createSession(
    '[USER_ID]',
    '[SECRET]'
);`);t(i,a)},$$slots:{default:!0}});var d=n(c);$(d,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: '[USER_ID]',
    secret: '[SECRET]'
);
`,language:"client-flutter",process:!0,children:(i,E)=>{e();var a=o(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final account = Account(client);

final session = await account.createSession(
    userId: '[USER_ID]',
    secret: '[SECRET]'
);`);t(i,a)},$$slots:{default:!0}});var l=n(d);$(l,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: "[USER_ID]",
    secret: "[SECRET]"
);
`,language:"client-apple",process:!0,children:(i,E)=>{e();var a=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

let account = Account(client);

let session = try await account.createSession(
    userId: "[USER_ID]",
    secret: "[SECRET]"
);`);t(i,a)},$$slots:{default:!0}});var _=n(l);$(_,{content:`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = "[USER_ID]",
    secret = "[SECRET]"
);
`,language:"client-android-kotlin",process:!0,children:(i,E)=>{e();var a=o(`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>");

val account = Account(client);

val session = account.createSession(
    userId = "[USER_ID]",
    secret = "[SECRET]"
);`);t(i,a)},$$slots:{default:!0}});var I=n(_);$(I,{content:`mutation {
    accountcreateSession(userId: "[USER_ID]", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}
`,language:"graphql",process:!0,children:(i,E)=>{e();var a=o(`mutation {
    accountcreateSession(userId: "[USER_ID]", secret: "[SECRET]") {
        _id
        userId
        provider
        expire
    }
}`);t(i,a)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var J=n(O);P(J,{children:(s,h)=>{e();var r=o("When the session is successfully created, the session is stored in a persistent manner and you can now do requests as authorized user from the application.");t(s,r)},$$slots:{default:!0}}),L(k),t(G,k)},$$slots:{default:!0}}))}export{me as component};
