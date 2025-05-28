import{t as p,b as r,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Pt,s as t,f as m,n,r as qt}from"../chunks/NgVQVlRK.js";import{n as Ct}from"../chunks/B4IyMRKX.js";import{H as K}from"../chunks/CXsRaEhZ.js";import{M as te}from"../chunks/hMT8fFzP.js";import{I as Tt}from"../chunks/BypEz2Fd.js";import{T as Rt,a as ee}from"../chunks/BHbEtIoO.js";import{I as W}from"../chunks/DyA-oIk7.js";import{O as Q,a as X}from"../chunks/uti8MWrk.js";import{A as bt}from"../chunks/CP6rnx7i.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as E}from"../chunks/DXp9_3zM.js";import{F as g}from"../chunks/OFUKRh55.js";import{L as ae,I as Y}from"../chunks/BhmTgGWB.js";import{P as H}from"../chunks/D8YsId2T.js";import{S as Z}from"../chunks/yHjwcyUH.js";import{L as z}from"../chunks/yh4_9ChP.js";import{T as ne}from"../chunks/D8BqvLkQ.js";import{T as re,a as F,b as V,c as oe,d}from"../chunks/BpU_IltG.js";import{A as It}from"../chunks/CqOphJLh.js";const At={layout:"article",title:"Develop Backrush Functions",description:"Master serverless function development with Backrush. Learn how to write and test functions locally, debug code, and optimize for efficient execution."};var Dt=p("The active <!>&#39;s executor will handle the request.",1),jt=p("The Executor passes in request information like headers, body or path through the <!> object of your exported function.",1),Et=p("The runtime executes the code you defined, you can log through the <!> or <!> methods.",1),Ot=p("Function terminates when you return results using <!>, <!> or similar.",1),kt=p("<!><!><!><!><!>",1),St=p("<!> follow the same lifecycle on your local machine.",1),Nt=p("<!><!><!><!><!><!><!><!><!><!><!>",1),Ft=p("If you prefer to learn through more examples like this, explore the <!>.",1),Lt=p("Context is an object passed into every function to handle communication to both the end users, and logging to the Backrush Console. All input, output, and logging <!> passed in.",1),Mt=p("<!><!>",1),Jt=p("Contains request information like method, body, and headers. See full examples <!>.",1),Ht=p("<!><!>",1),Ut=p("Contains methods to build a response and return information. See full examples <!>.",1),Wt=p("<!><!>",1),Bt=p("Method to log information to the Backrush Console, end users will not be able to see these logs. See full examples <!>.",1),Gt=p("<!><!>",1),Vt=p("Method to log errors to the Backrush Console, end users will not be able to see these errors. See full examples <!>.",1),Kt=p("<!><!>",1),Yt=p("<!><!><!><!>",1),zt=p("<!><!>",1),Qt=p("Use <!> instead of <!>. Use <!> instead of <!>. Use <!> or <!> instead of <!> depending on the expected input data type.",1),Xt=p("<!>.",1),Zt=p("<!><!>",1),en=p("<!><!>",1),tn=p("<!><!>",1),nn=p("<!><!>",1),rn=p("<!><!>",1),on=p("<!><!><!>",1),sn=p("<!><!>",1),an=p("<!><!><!><!><!><!><!><!><!><!><!>",1),ln=p("<!><!>",1),cn=p("Describes how the function execution was invoked. Possible values are <!>, <!> or <!>.",1),un=p("<!><!>",1),dn=p("<!><!>",1),pn=p("The dynamic API key is used for server authentication. <!>.",1),hn=p("<!><!>",1),mn=p("<!><!>",1),xn=p("JWT token generated from the invoking user&#39;s session. Used to authenticate Server SDKs to respect access permissions. <!>.",1),gn=p("<!><!>",1),$n=p("<!><!>",1),fn=p("<!><!>",1),_n=p("<!><!>",1),vn=p("<!><!><!><!><!><!><!><!>",1),yn=p("<!><!>",1),wn=p("Use the response object to send a response to the function caller. This could be a user, client app, or an integration. The response information <!> to the Backrush Console. There are several possible ways to send a response, explore them in the following Backrush Function.",1),Pn=p("<!><!>",1),qn=p("Sends a response with a <!> status.",1),Cn=p("<!><!>",1),Tn=p("Converts the data into a JSON string and sets the content-type header to <!>.",1),Rn=p("<!><!>",1),bn=p("<!><!>",1),In=p("<!><!>",1),An=p("<!><!>",1),Dn=p("<!><!><!><!><!>",1),jn=p("<!><!>",1),En=p("<!><!><!><!><!><!><!><!><!><!><!><!>",1),On=p("To get the different response types, set one of the following query parameters in the <!> of your function.",1),kn=p("<!><!><!>",1),Sn=p("<!><!><!>",1),Nn=p("<!><!><!>",1),Fn=p("<!><!><!>",1),Ln=p("<!><!><!>",1),Mn=p("<!><!><!>",1),Jn=p("<!><!><!><!><!>",1),Hn=p("<!><!>",1),Un=p("This means, to see logs or debug function executions you need to use the <!> and <!> methods. These logs are only visible to developers with access to the Backrush Console.",1),Wn=p("<!><!><!><!><!><!><!><!><!><!><!><!>",1),Bn=p("<!><!><!><!>",1),Gn=p("<!><!><!>",1),Vn=p("<!><!><!>",1),Kn=p("<!><!><!>",1),Yn=p("<!><!><!>",1),zn=p("<!><!><!>",1),Qn=p("<!><!><!>",1),Xn=p("<!><!><!>",1),Zn=p("<!><!><!>",1),er=p("<!><!><!>",1),tr=p("<!><!><!>",1),nr=p("<!><!><!>",1),rr=p("<!><!><!><!><!><!><!><!><!><!>",1),or=p("<!><!>",1),sr=p("<!><!><!><!><!><!><!><!><!><!><!><!>",1),ar=p("To install your dependencies before your function is built, you should add the relevant install command to the top your function&#39;s <!> &gt; <!>. You can find this setting under <!> &gt; your function &gt; <!> &gt; <!> &gt; <!>.",1),ir=p("Make sure to include dependency files like <!>, <!>, <!>, etc. in your function&#39;s configured <!>. Do not include the dependency folders like <!>, <!>, etc. in your function&#39;s root directory. The dependencies installed for your local OS may not work in the executor environments",1),lr=p("<!><!><!><!>",1),cr=p("<!> <!>",1),ur=p("<!><!><!><!>",1),dr=p("<!> <!>",1),pr=p("<!><!><!><!>",1),hr=p("<!> <!>",1),mr=p("<!><!><!><!>",1),xr=p("<!> <!>",1),gr=p("<!><!><!><!>",1),$r=p("<!> <!>",1),fr=p("<!><!><!><!>",1),_r=p("<!> <!>",1),vr=p("<!><!><!><!>",1),yr=p("<!> <!>",1),wr=p("<!><!><!><!>",1),Pr=p("<!> <!>",1),qr=p("<!><!><!><!>",1),Cr=p("<!> <!>",1),Tr=p("<!><!><!><!>",1),Rr=p("<!> <!>",1),br=p("<!><!><!><!>",1),Ir=p("<!> <!>",1),Ar=p("<!><!><!><!>",1),Dr=p("<!> <!>",1),jr=p("<!><!><!><!>",1),Er=p("<!> <!>",1),Or=p("<!><!><!><!>",1),kr=p("<!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Sr=p("<!><!>",1),Nr=p("Dynamic API keys are the same as <!> but are automatically generated. They are generated in your functions per execution. However, you can only use dynamic API keys inside Backrush functions.",1),Fr=p("During the build process, dynamic API keys are automatically provided as the environment variable <!>. This environment variable doesn&#39;t need to be initialized.",1),Lr=p("During execution, dynamic API keys are automatically provided in the <!> <!>.",1),Mr=p("In Backrush Console, navigate to <!>.",1),Jr=p("Under the <!> tab, navigate to <!>.",1),Hr=p("<!><!><!><!><!>",1),Ur=p("<!><!><!><!><!><!><!><!><!><!><!>",1),Wr=p("JWTs allow you to act on behalf of an user in your Backrush Function. When using JWTs, you will be able to access and change <!> the resources with the same permissions as the user account that signed the JWT. This preserves the permissions you configured on each resource.",1),Br=p("If the Backrush Function is invoked by an authenticated user, the <!> header is automatically passed in.",1),Gr=p("<!><!><!><!><!><!><!><!><!><!><!>",1),Vr=p("<!><!>",1),Kr=p("<!><!>",1),Yr=p("<!><!>",1),zr=p("<!><!>",1),Qr=p("<!><!>",1),Xr=p("<!><!><!><!>",1),Zr=p("<!><!>",1),eo=p("<!><!>",1),to=p("<!><!>",1),no=p("<!><!>",1),ro=p("<!><!>",1),oo=p("<!><!><!><!><!><!><!><!><!><!><!>",1),so=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function jo(vt){It(vt,Ct(At,{children:(yt,ao)=>{var se=so(),ie=Pt(se);H(ie,{children:(h,S)=>{n();var i=r("Backrush Functions offer a familiar interface if you've developed REST endpoints. Each function is handled following a request and response pattern.");e(h,i)},$$slots:{default:!0}});var le=t(ie);K(le,{id:"life-cycle",level:1,children:(h,S)=>{n();var i=r("Lifecycle");e(h,i)},$$slots:{default:!0}});var ce=t(le);H(ce,{children:(h,S)=>{n();var i=r("There is a clear lifecycle for all Backrush Functions, from beginning to end. Here's everything that happens during a function execution.");e(h,i)},$$slots:{default:!0}});var ue=t(ce);ae(ue,{ordered:!0,marker:".",children:(h,S)=>{var i=kt(),C=m(i);Y(C,{children:(I,v)=>{n();var y=r("The function is invoked.");e(I,y)},$$slots:{default:!0}});var j=t(C);Y(j,{children:(I,v)=>{n();var y=Dt(),P=t(m(y));z(P,{href:"/docs/products/functions/deployments",children:(D,T)=>{n();var a=r("deployment");e(D,a)},$$slots:{default:!0}}),n(),e(I,y)},$$slots:{default:!0}});var b=t(j);Y(b,{children:(I,v)=>{n();var y=jt(),P=t(m(y));E(P,{content:"context.req"}),n(),e(I,y)},$$slots:{default:!0}});var k=t(b);Y(k,{children:(I,v)=>{n();var y=Et(),P=t(m(y));E(P,{content:"context.log()"});var D=t(P,2);E(D,{content:"context.error()"}),n(),e(I,y)},$$slots:{default:!0}});var R=t(k);Y(R,{children:(I,v)=>{n();var y=Ot(),P=t(m(y));E(P,{content:"return context.res.text()"});var D=t(P,2);E(D,{content:"return context.res.json()"}),n(),e(I,y)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var de=t(ue);H(de,{children:(h,S)=>{var i=St(),C=m(i);z(C,{href:"/docs/products/functions/develop-locally",children:(j,b)=>{n();var k=r("Locally developed functions");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var pe=t(de);K(pe,{id:"entrypoint",level:2,children:(h,S)=>{n();var i=r("Entrypoint");e(h,i)},$$slots:{default:!0}});var he=t(pe);H(he,{children:(h,S)=>{n();var i=r("You'll find all of these steps in a simple function like this. Notice the exported entry point that the executor will call.");e(h,i)},$$slots:{default:!0}});var me=t(he);te(me,{children:(h,S)=>{var i=Nt(),C=m(i);g(C,{content:`import { Client } from 'node-appwrite';

// This is your Backrush function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(req.headers['x-appwrite-key']);

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The \`req\` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return res.text('Hello, World!');
  }

  // \`res.json()\` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
`,language:"server-nodejs",process:!0,children:(a,s)=>{n();var o=r(`import { Client } from 'node-appwrite';

// This is your Backrush function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(req.headers['x-appwrite-key']);

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The \`req\` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return res.text('Hello, World!');
  }

  // \`res.json()\` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};`);e(a,o)},$$slots:{default:!0}});var j=t(C);g(j,{content:`require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;

// This is your Backrush function
// It's executed each time we get a request
return function ($context) {
    // Why not try the Backrush SDK?
    //
    // Set project and set API key
    // $client = (new Client())
    //      ->setProject(getenv(APPWRITE_FUNCTION_PROJECT_ID))
    //      ->setKey($context->req->headers['x-appwrite-key']);
   
    // You can log messages to the console
    $context->log('Hello, Logs!');

    // If something goes wrong, log an error
    $context->error('Hello, Errors!');

    // The \`req\` object contains the request data
    if ($context->req->method === 'GET') {
        // Send a response with the res object helpers
        // \`res.text()\` dispatches a string back to the client
        return $context->res->text('Hello, World!');
    }

    // \`res.json()\` is a handy helper for sending JSON
    return $context->res->json([
        'motto' => 'Build like a team of hundreds_',
        'learn' => 'https://appwrite.io/docs',
        'connect' => 'https://appwrite.io/discord',
        'getInspired' => 'https://builtwith.appwrite.io',
    ]);
};
`,language:"php",process:!0,children:(a,s)=>{n();var o=r(`require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;

// This is your Backrush function
// It's executed each time we get a request
return function ($context) {
    // Why not try the Backrush SDK?
    //
    // Set project and set API key
    // $client = (new Client())
    //      ->setProject(getenv(APPWRITE_FUNCTION_PROJECT_ID))
    //      ->setKey($context->req->headers['x-appwrite-key']);
   
    // You can log messages to the console
    $context->log('Hello, Logs!');

    // If something goes wrong, log an error
    $context->error('Hello, Errors!');

    // The \`req\` object contains the request data
    if ($context->req->method === 'GET') {
        // Send a response with the res object helpers
        // \`res.text()\` dispatches a string back to the client
        return $context->res->text('Hello, World!');
    }

    // \`res.json()\` is a handy helper for sending JSON
    return $context->res->json([
        'motto' => 'Build like a team of hundreds_',
        'learn' => 'https://appwrite.io/docs',
        'connect' => 'https://appwrite.io/discord',
        'getInspired' => 'https://builtwith.appwrite.io',
    ]);
};`);e(a,o)},$$slots:{default:!0}});var b=t(j);g(b,{content:`from appwrite.client import Client
import os


# This is your Backrush function
# It's executed each time we get a request
def main(context):
    # Why not try the Backrush SDK?
    #
    # Set project and set API key
    # client = (
    #     Client()
    #        .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    #        .set_key(context.req.headers["x-appwrite-key"])
    # )

    # You can log messages to the console
    context.log("Hello, Logs!")

    # If something goes wrong, log an error
    context.error("Hello, Errors!")

    # The \`context.req\` object contains the request data
    if context.req.method == "GET":
        # Send a response with the res object helpers
        # \`context.res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")

    # \`context.res.json()\` is a handy helper for sending JSON
    return context.res.json({
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    })
`,language:"python",process:!0,children:(a,s)=>{n();var o=r(`from appwrite.client import Client
import os


# This is your Backrush function
# It's executed each time we get a request
def main(context):
    # Why not try the Backrush SDK?
    #
    # Set project and set API key
    # client = (
    #     Client()
    #        .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    #        .set_key(context.req.headers["x-appwrite-key"])
    # )

    # You can log messages to the console
    context.log("Hello, Logs!")

    # If something goes wrong, log an error
    context.error("Hello, Errors!")

    # The \`context.req\` object contains the request data
    if context.req.method == "GET":
        # Send a response with the res object helpers
        # \`context.res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")

    # \`context.res.json()\` is a handy helper for sending JSON
    return context.res.json({
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    })`);e(a,o)},$$slots:{default:!0}});var k=t(b);g(k,{content:`require "appwrite"

# This is your Backrush function
# It's executed each time we get a request
def main(context)
  # Why not try the Backrush SDK?
  #
  # Set project and set API key
  # client = Client.new
  #   .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])
  #   .set_key(context.req.headers['x-appwrite-key'])

  # You can log messages to the console
  context.log("Hello, Logs!")

  # If something goes wrong, log an error
  context.error("Hello, Errors!")

  # The \`context.req\` object contains the request data
  if (context.req.method == "GET")
    # Send a response with the res object helpers
    # \`context.res.text()\` dispatches a string back to the client
    return context.res.text("Hello, World!")
  end

  # \`context.res.json()\` is a handy helper for sending JSON
  return context.res.json({
    "motto": "Build like a team of hundreds_",
    "learn": "https://appwrite.io/docs",
    "connect": "https://appwrite.io/discord",
    "getInspired": "https://builtwith.appwrite.io",
  })
end
`,language:"ruby",process:!0,children:(a,s)=>{n();var o=r(`require "appwrite"

# This is your Backrush function
# It's executed each time we get a request
def main(context)
  # Why not try the Backrush SDK?
  #
  # Set project and set API key
  # client = Client.new
  #   .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])
  #   .set_key(context.req.headers['x-appwrite-key'])

  # You can log messages to the console
  context.log("Hello, Logs!")

  # If something goes wrong, log an error
  context.error("Hello, Errors!")

  # The \`context.req\` object contains the request data
  if (context.req.method == "GET")
    # Send a response with the res object helpers
    # \`context.res.text()\` dispatches a string back to the client
    return context.res.text("Hello, World!")
  end

  # \`context.res.json()\` is a handy helper for sending JSON
  return context.res.json({
    "motto": "Build like a team of hundreds_",
    "learn": "https://appwrite.io/docs",
    "connect": "https://appwrite.io/discord",
    "getInspired": "https://builtwith.appwrite.io",
  })
end`);e(a,o)},$$slots:{default:!0}});var R=t(k);g(R,{content:`import { Client } from "https://deno.land/x/appwrite@7.0.0/mod.ts";

// This is your Backrush function
// It's executed each time we get a request
export default ({ req, res, log, error }: any) => {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID") || "")
  //    .setKey(req.headers["x-appwrite-key"] || "");

  // You can log messages to the console
  log("Hello, Logs!");

  // If something goes wrong, log an error
  error("Hello, Errors!");

  // The \`req\` object contains the request data
  if (req.method === "GET") {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return res.text("Hello, World!");
  }

  // \`res.json()\` is a handy helper for sending JSON
  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};
`,language:"deno",process:!0,children:(a,s)=>{n();var o=r(`import { Client } from "https://deno.land/x/appwrite@7.0.0/mod.ts";

// This is your Backrush function
// It's executed each time we get a request
export default ({ req, res, log, error }: any) => {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID") || "")
  //    .setKey(req.headers["x-appwrite-key"] || "");

  // You can log messages to the console
  log("Hello, Logs!");

  // If something goes wrong, log an error
  error("Hello, Errors!");

  // The \`req\` object contains the request data
  if (req.method === "GET") {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return res.text("Hello, World!");
  }

  // \`res.json()\` is a handy helper for sending JSON
  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};`);e(a,o)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"fmt"
	"os"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Response struct {
	Motto       string \`json:"motto"\`
	Learn       string \`json:"learn"\`
	Connect     string \`json:"connect"\`
	GetInspired string \`json:"getInspired"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	// This is your Backrush function
	// It's executed each time we get a request service
	var _ = appwrite.NewClient(
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	// You can log messages to the console
	fmt.Println("Hello, Logs!")

	fmt.Fprintln(os.Stderr, "Error:", "Hello, Errors!")

	// The \`Context.Req\` object contains the request data
	if Context.Req.Method == "GET" {
		// Send a response with the Context.Res object helpers
		// \`Context.Res.Text()\` dispatches a string back to the client
		return Context.Res.Text("Hello, World!")
	}

	// \`res.json()\` is a handy helper for sending JSON
	return Context.Res.Json(
		Response{
			Motto:       "Build like a team of hundreds_",
			Learn:       "https://appwrite.io/docs",
			Connect:     "https://appwrite.io/discord",
			GetInspired: "https://builtwith.appwrite.io",
		})
}
`,language:"go",process:!0,children:(a,s)=>{n();var o=r(`package handler

import (
	"fmt"
	"os"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Response struct {
	Motto       string \`json:"motto"\`
	Learn       string \`json:"learn"\`
	Connect     string \`json:"connect"\`
	GetInspired string \`json:"getInspired"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	// This is your Backrush function
	// It's executed each time we get a request service
	var _ = appwrite.NewClient(
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	// You can log messages to the console
	fmt.Println("Hello, Logs!")

	fmt.Fprintln(os.Stderr, "Error:", "Hello, Errors!")

	// The \`Context.Req\` object contains the request data
	if Context.Req.Method == "GET" {
		// Send a response with the Context.Res object helpers
		// \`Context.Res.Text()\` dispatches a string back to the client
		return Context.Res.Text("Hello, World!")
	}

	// \`res.json()\` is a handy helper for sending JSON
	return Context.Res.Json(
		Response{
			Motto:       "Build like a team of hundreds_",
			Learn:       "https://appwrite.io/docs",
			Connect:     "https://appwrite.io/discord",
			GetInspired: "https://builtwith.appwrite.io",
		})
}`);e(a,o)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

// This is your Backrush function
// It's executed each time we get a request
Future main(final context) async {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // final client = Client()
  //    .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
  //    .setKey(context.req.headers['x-appwrite-key']);


  // You can log messages to the console
  context.log('Hello, Logs!');

  // If something goes wrong, log an error
  context.error('Hello, Errors!');

  // The \`req\` object contains the request data
  if (context.req.method == 'GET') {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return context.res.text('Hello, World!');
  }

  // \`res.json()\` is a handy helper for sending JSON
  return context.res.json({
    'motto': 'Build like a team of hundreds_',
    'learn': 'https://appwrite.io/docs',
    'connect': 'https://appwrite.io/discord',
    'getInspired': 'https://builtwith.appwrite.io',
  });
}
`,language:"dart",process:!0,children:(a,s)=>{n();var o=r(`import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

// This is your Backrush function
// It's executed each time we get a request
Future main(final context) async {
  // Why not try the Backrush SDK?
  //
  // Set project and set API key
  // final client = Client()
  //    .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
  //    .setKey(context.req.headers['x-appwrite-key']);


  // You can log messages to the console
  context.log('Hello, Logs!');

  // If something goes wrong, log an error
  context.error('Hello, Errors!');

  // The \`req\` object contains the request data
  if (context.req.method == 'GET') {
    // Send a response with the res object helpers
    // \`res.text()\` dispatches a string back to the client
    return context.res.text('Hello, World!');
  }

  // \`res.json()\` is a handy helper for sending JSON
  return context.res.json({
    'motto': 'Build like a team of hundreds_',
    'learn': 'https://appwrite.io/docs',
    'connect': 'https://appwrite.io/discord',
    'getInspired': 'https://builtwith.appwrite.io',
  });
}`);e(a,o)},$$slots:{default:!0}});var y=t(v);g(y,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import java.util.HashMap

class Main {
    // This is your Backrush function
    // It's executed each time we get a request
    fun main(context: RuntimeContext): RuntimeOutput {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // val client = Client()
        //    .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //    .setKey(context.req.headers["x-appwrite-key"])

        // You can log messages to the console
        context.log("Hello, Logs!")

        // If something goes wrong, log an error
        context.error("Hello, Errors!")

        // The \`context.req\` object contains the request data
        if (context.req.method == "GET") {
            // Send a response with the res object helpers
            // \`context.res.text()\` dispatches a string back to the client
            return context.res.text("Hello, World!")
        }

        // \`context.res.json()\` is a handy helper for sending JSON
        return context.res.json(mutableMapOf(
            "motto" to "Build like a team of hundreds_",
            "learn" to "https://appwrite.io/docs",
            "connect" to "https://appwrite.io/discord",
            "getInspired" to "https://builtwith.appwrite.io"
        ))
    }
}
`,language:"kotlin",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import java.util.HashMap

class Main {
    // This is your Backrush function
    // It's executed each time we get a request
    fun main(context: RuntimeContext): RuntimeOutput {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // val client = Client()
        //    .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //    .setKey(context.req.headers["x-appwrite-key"])

        // You can log messages to the console
        context.log("Hello, Logs!")

        // If something goes wrong, log an error
        context.error("Hello, Errors!")

        // The \`context.req\` object contains the request data
        if (context.req.method == "GET") {
            // Send a response with the res object helpers
            // \`context.res.text()\` dispatches a string back to the client
            return context.res.text("Hello, World!")
        }

        // \`context.res.json()\` is a handy helper for sending JSON
        return context.res.json(mutableMapOf(
            "motto" to "Build like a team of hundreds_",
            "learn" to "https://appwrite.io/docs",
            "connect" to "https://appwrite.io/discord",
            "getInspired" to "https://builtwith.appwrite.io"
        ))
    }
}`);e(a,o)},$$slots:{default:!0}});var P=t(y);g(P,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {

    // This is your Backrush function
    // It's executed each time we get a request
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // Client client = new Client();
        //     .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //     .setKey(context.getReq().getHeaders().get("x-appwrite-key"));

        // You can log messages to the console
        context.log("Hello, Logs!");

        // If something goes wrong, log an error
        context.error("Hello, Errors!");

        // The \`context.getReq()\` object contains the request data
        if (context.getReq().getMethod().equals("GET")) {
            // Send a response with the res object helpers
            // \`context.getRes().text()\` dispatches a string back to the client
            return context.getRes().text("Hello, World!");
        }

        Map json = new HashMap<>();
        json.put("motto", "Build like a team of hundreds_");
        json.put("learn", "https://appwrite.io/docs");
        json.put("connect", "https://appwrite.io/discord");
        json.put("getInspired", "https://builtwith.appwrite.io");

        // \`context.getRes().json()\` is a handy helper for sending JSON
        return context.getRes().json(json);
    }
}
`,language:"java",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {

    // This is your Backrush function
    // It's executed each time we get a request
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // Client client = new Client();
        //     .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //     .setKey(context.getReq().getHeaders().get("x-appwrite-key"));

        // You can log messages to the console
        context.log("Hello, Logs!");

        // If something goes wrong, log an error
        context.error("Hello, Errors!");

        // The \`context.getReq()\` object contains the request data
        if (context.getReq().getMethod().equals("GET")) {
            // Send a response with the res object helpers
            // \`context.getRes().text()\` dispatches a string back to the client
            return context.getRes().text("Hello, World!");
        }

        Map json = new HashMap<>();
        json.put("motto", "Build like a team of hundreds_");
        json.put("learn", "https://appwrite.io/docs");
        json.put("connect", "https://appwrite.io/discord");
        json.put("getInspired", "https://builtwith.appwrite.io");

        // \`context.getRes().json()\` is a handy helper for sending JSON
        return context.getRes().json(json);
    }
}`);e(a,o)},$$slots:{default:!0}});var D=t(P);g(D,{content:`import Backrush
import BackrushModels
import Foundation

// This is your Backrush function
// It's executed each time we get a request
func main(context: RuntimeContext) async throws -> RuntimeOutput {
    // Why not try the Backrush SDK?
    //
    // Set project and set API key
    // let client = Client()
    //    .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
    //    .setKey(context.req.headers["x-appwrite-key"] ?? "")

    // You can log messages to the console
    context.log("Hello, Logs!")

    // If something goes wrong, log an error
    context.error("Hello, Errors!")

    // The \`context.req\` object contains the request data
    if context.req.method == "GET" {
        // Send a response with the res object helpers
        // \`res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")
    }

    // \`context.res.json()\` is a handy helper for sending JSON
    return try context.res.json([
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    ])
}
`,language:"swift",process:!0,children:(a,s)=>{n();var o=r(`import Backrush
import BackrushModels
import Foundation

// This is your Backrush function
// It's executed each time we get a request
func main(context: RuntimeContext) async throws -> RuntimeOutput {
    // Why not try the Backrush SDK?
    //
    // Set project and set API key
    // let client = Client()
    //    .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
    //    .setKey(context.req.headers["x-appwrite-key"] ?? "")

    // You can log messages to the console
    context.log("Hello, Logs!")

    // If something goes wrong, log an error
    context.error("Hello, Errors!")

    // The \`context.req\` object contains the request data
    if context.req.method == "GET" {
        // Send a response with the res object helpers
        // \`res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")
    }

    // \`context.res.json()\` is a handy helper for sending JSON
    return try context.res.json([
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    ])
}`);e(a,o)},$$slots:{default:!0}});var T=t(D);g(T,{content:`namespace DotNetRuntime;

using Backrush;
using Backrush.Services;
using Backrush.Models;

public class Handler {

    // This is your Backrush function
    // It"s executed each time we get a request
    public async Task Main(RuntimeContext Context) 
    {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // var client = new Client()
        //     .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID")) 
        //     .SetKey(Context.Req.Headers["x-appwrite-key"]);

        // You can log messages to the console
        Context.Log("Hello, Logs!");

        // If something goes wrong, log an error
        Context.Error("Hello, Errors!");

        // The \`Context.Req\` object contains the request data
        if (Context.Req.Method == "GET") {
            // Send a response with the res object helpers
            // \`Context.Res.Text()\` dispatches a string back to the client
            return Context.Res.Text("Hello, World!");
        }

        // \`Context.Res.Json()\` is a handy helper for sending JSON
        return Context.Res.Json(new Dictionary()
        {
            { "motto", "Build like a team of hundreds_" },
            { "learn", "https://appwrite.io/docs" },
            { "connect", "https://appwrite.io/discord" },
            { "getInspired", "https://builtwith.appwrite.io" },
        });
    }
}
`,language:"csharp",process:!0,children:(a,s)=>{n();var o=r(`namespace DotNetRuntime;

using Backrush;
using Backrush.Services;
using Backrush.Models;

public class Handler {

    // This is your Backrush function
    // It"s executed each time we get a request
    public async Task Main(RuntimeContext Context) 
    {
        // Why not try the Backrush SDK?
        //
        // Set project and set API key
        // var client = new Client()
        //     .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID")) 
        //     .SetKey(Context.Req.Headers["x-appwrite-key"]);

        // You can log messages to the console
        Context.Log("Hello, Logs!");

        // If something goes wrong, log an error
        Context.Error("Hello, Errors!");

        // The \`Context.Req\` object contains the request data
        if (Context.Req.Method == "GET") {
            // Send a response with the res object helpers
            // \`Context.Res.Text()\` dispatches a string back to the client
            return Context.Res.Text("Hello, World!");
        }

        // \`Context.Res.Json()\` is a handy helper for sending JSON
        return Context.Res.Json(new Dictionary()
        {
            { "motto", "Build like a team of hundreds_" },
            { "learn", "https://appwrite.io/docs" },
            { "connect", "https://appwrite.io/discord" },
            { "getInspired", "https://builtwith.appwrite.io" },
        });
    }
}`);e(a,o)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var xe=t(me);H(xe,{children:(h,S)=>{n();var i=Ft(),C=t(m(i));z(C,{href:"/docs/products/functions/examples",children:(j,b)=>{n();var k=r("examples page");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var ge=t(xe);K(ge,{id:"context-object",level:1,children:(h,S)=>{n();var i=r("Context object");e(h,i)},$$slots:{default:!0}});var $e=t(ge);H($e,{children:(h,S)=>{n();var i=Lt(),C=t(m(i));Z(C,{marker:"**",children:(j,b)=>{n();var k=r("must be handled through the context object");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var fe=t($e);H(fe,{children:(h,S)=>{n();var i=r("You'll find these properties in the context object.");e(h,i)},$$slots:{default:!0}});var _e=t(fe);ne(_e,{children:(h,S)=>{var i=zt(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=Mt(),y=m(v);V(y,{children:(D,T)=>{n();var a=r("Property");e(D,a)},$$slots:{default:!0}});var P=t(y);V(P,{children:(D,T)=>{n();var a=r("Description");e(D,a)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=Yt(),I=m(R);F(I,{children:(D,T)=>{var a=Ht(),s=m(a);d(s,{children:(l,x)=>{n();var u=r("req");e(l,u)},$$slots:{default:!0}});var o=t(s);d(o,{children:(l,x)=>{n();var u=Jt(),f=t(m(u));z(f,{href:"#request",children:(c,N)=>{n();var q=r("in the request section");e(c,q)},$$slots:{default:!0}}),n(),e(l,u)},$$slots:{default:!0}}),e(D,a)},$$slots:{default:!0}});var v=t(I);F(v,{children:(D,T)=>{var a=Wt(),s=m(a);d(s,{children:(l,x)=>{n();var u=r("res");e(l,u)},$$slots:{default:!0}});var o=t(s);d(o,{children:(l,x)=>{n();var u=Ut(),f=t(m(u));z(f,{href:"#response",children:(c,N)=>{n();var q=r("in the response section");e(c,q)},$$slots:{default:!0}}),n(),e(l,u)},$$slots:{default:!0}}),e(D,a)},$$slots:{default:!0}});var y=t(v);F(y,{children:(D,T)=>{var a=Gt(),s=m(a);d(s,{children:(l,x)=>{n();var u=r("log()");e(l,u)},$$slots:{default:!0}});var o=t(s);d(o,{children:(l,x)=>{n();var u=Bt(),f=t(m(u));z(f,{href:"#logging",children:(c,N)=>{n();var q=r("in the logging section");e(c,q)},$$slots:{default:!0}}),n(),e(l,u)},$$slots:{default:!0}}),e(D,a)},$$slots:{default:!0}});var P=t(y);F(P,{children:(D,T)=>{var a=Kt(),s=m(a);d(s,{children:(l,x)=>{n();var u=r("error()");e(l,u)},$$slots:{default:!0}});var o=t(s);d(o,{children:(l,x)=>{n();var u=Vt(),f=t(m(u));z(f,{href:"#logging",children:(c,N)=>{n();var q=r("in the logging section");e(c,q)},$$slots:{default:!0}}),n(),e(l,u)},$$slots:{default:!0}}),e(D,a)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var ve=t(_e);Tt(ve,{title:"Depreciation notice",children:(h,S)=>{H(h,{children:(i,C)=>{n();var j=Qt(),b=t(m(j));E(b,{content:"req.bodyText"});var k=t(b,2);E(k,{content:"req.bodyRaw"});var R=t(k,2);E(R,{content:"res.text"});var I=t(R,2);E(I,{content:"res.send"});var v=t(I,2);E(v,{content:"req.bodyText"});var y=t(v,2);E(y,{content:"req.bodyJson"});var P=t(y,2);E(P,{content:"req.body"}),n(),e(i,j)},$$slots:{default:!0}})}});var ye=t(ve);K(ye,{id:"destructuring",level:3,children:(h,S)=>{n();var i=r("Destructuring assignment");e(h,i)},$$slots:{default:!0}});var we=t(ye);H(we,{children:(h,S)=>{n();var i=r("Some languages, namely JavaScript, support destructuring. You'll see us use destructuring in examples, which has the following syntax.");e(h,i)},$$slots:{default:!0}});var Pe=t(we);H(Pe,{children:(h,S)=>{var i=Xt(),C=m(i);z(C,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",children:(j,b)=>{n();var k=r("Learn more about destructuring assignment");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var qe=t(Pe);te(qe,{children:(h,S)=>{var i=Zt(),C=m(i);g(C,{content:`// before destructuring
export default async function (context) {
    context.log("This is a log!");
    return context.res.text("This is a response!");
}

// after destructuring
export default async function ({ req, res, log, error }) {
    log("This is a log!");
    return res.text("This is a response!");
}
`,language:"server-nodejs",process:!0,children:(b,k)=>{n();var R=r(`// before destructuring
export default async function (context) {
    context.log("This is a log!");
    return context.res.text("This is a response!");
}

// after destructuring
export default async function ({ req, res, log, error }) {
    log("This is a log!");
    return res.text("This is a response!");
}`);e(b,R)},$$slots:{default:!0}});var j=t(C);g(j,{content:`// before destructuring
export default async function (context: any) {
    context.log("This is a log!");
    return context.res.text("This is a response!");
}
   
// after destructuring
export default async function ({ req, res, log, error }: any) {
    log("This is a log!");
    return res.text("This is a response!");
}
`,language:"deno",process:!0,children:(b,k)=>{n();var R=r(`// before destructuring
export default async function (context: any) {
    context.log("This is a log!");
    return context.res.text("This is a response!");
}
   
// after destructuring
export default async function ({ req, res, log, error }: any) {
    log("This is a log!");
    return res.text("This is a response!");
}`);e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ce=t(qe);K(Ce,{id:"request",level:2,children:(h,S)=>{n();var i=r("Request");e(h,i)},$$slots:{default:!0}});var Te=t(Ce);H(Te,{children:(h,S)=>{n();var i=r("If you pass data into an Backrush Function, it'll be found in the request object. This includes all invocation inputs from Backrush SDKs, HTTP calls, Backrush events, or browsers visiting the configured domain. Explore the request object with the following function, which logs all request params to the Backrush Console.");e(h,i)},$$slots:{default:!0}});var Re=t(Te);K(Re,{id:"request-types",level:3,children:(h,S)=>{n();var i=r("Request types");e(h,i)},$$slots:{default:!0}});var be=t(Re);ne(be,{children:(h,S)=>{var i=sn(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=en(),y=m(v);V(y,{children:(D,T)=>{n();var a=r("Request");e(D,a)},$$slots:{default:!0}});var P=t(y);V(P,{children:(D,T)=>{n();var a=r("Description");e(D,a)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=on(),I=m(R);F(I,{children:(P,D)=>{var T=tn(),a=m(T);d(a,{children:(o,l)=>{E(o,{content:"req.bodyText"})},$$slots:{default:!0}});var s=t(a);d(s,{children:(o,l)=>{n();var x=r("Returns text that has been converted from binary data.");e(o,x)},$$slots:{default:!0}}),e(P,T)},$$slots:{default:!0}});var v=t(I);F(v,{children:(P,D)=>{var T=nn(),a=m(T);d(a,{children:(o,l)=>{E(o,{content:"req.bodyJson"})},$$slots:{default:!0}});var s=t(a);d(s,{children:(o,l)=>{n();var x=r("Parses the body text as JSON.");e(o,x)},$$slots:{default:!0}}),e(P,T)},$$slots:{default:!0}});var y=t(v);F(y,{children:(P,D)=>{var T=rn(),a=m(T);d(a,{children:(o,l)=>{E(o,{content:"req.bodyBinary"})},$$slots:{default:!0}});var s=t(a);d(s,{children:(o,l)=>{n();var x=r("Returns the binary body.");e(o,x)},$$slots:{default:!0}}),e(P,T)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ie=t(be);te(Ie,{children:(h,S)=>{var i=an(),C=m(i);g(C,{content:`export default async ({ req, res, log }) => {
    log(req.bodyText);                    // Raw request body, contains request data
    log(JSON.stringify(req.bodyJson));    // Object from parsed JSON request body, otherwise string
    log(JSON.stringify(req.headers));     // String key-value pairs of all request headers, keys are lowercase
    log(req.scheme);                      // Value of the x-forwarded-proto header, usually http or https
    log(req.method);                      // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    log(req.url);                         // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    log(req.host);                        // Hostname from the host header, such as awesome.appwrite.io
    log(req.port);                        // Port from the host header, for example 8000
    log(req.path);                        // Path part of URL, for example /v1/hooks
    log(req.queryString);                 // Raw query params string. For example "limit=12&offset=50"
    log(JSON.stringify(req.query));       // Parsed query params. For example, req.query.limit

    return res.text("All the request parameters are logged to the Backrush Console.");
};
`,language:"server-nodejs",process:!0,children:(a,s)=>{n();var o=r(`export default async ({ req, res, log }) => {
    log(req.bodyText);                    // Raw request body, contains request data
    log(JSON.stringify(req.bodyJson));    // Object from parsed JSON request body, otherwise string
    log(JSON.stringify(req.headers));     // String key-value pairs of all request headers, keys are lowercase
    log(req.scheme);                      // Value of the x-forwarded-proto header, usually http or https
    log(req.method);                      // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    log(req.url);                         // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    log(req.host);                        // Hostname from the host header, such as awesome.appwrite.io
    log(req.port);                        // Port from the host header, for example 8000
    log(req.path);                        // Path part of URL, for example /v1/hooks
    log(req.queryString);                 // Raw query params string. For example "limit=12&offset=50"
    log(JSON.stringify(req.query));       // Parsed query params. For example, req.query.limit

    return res.text("All the request parameters are logged to the Backrush Console.");
};`);e(a,o)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php
return function ($context) {
    $context->log(json_encode($context->req->bodyJson));// Object from parsed JSON request body, otherwise string
    $context->log(json_encode($context->req->headers)); // String key-value pairs of all request headers, keys are lowercase
    $context->log($context->req->scheme);               // Value of the x-forwarded-proto header, usually http or https
    $context->log($context->req->method);               // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    $context->log($context->req->url);                  // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    $context->log($context->req->host);                 // Hostname from the host header, such as awesome.appwrite.io
    $context->log($context->req->port);                 // Port from the host header, for example 8000
    $context->log($context->req->path);                 // Path part of URL, for example /v1/hooks
    $context->log($context->req->queryString);          // Raw query params string. For example "limit=12&offset=50"
    $context->log(json_encode($context->req->query));   // Parsed query params. For example, req.query.limit

    return $context->res->text("All the request parameters are logged to the Backrush Console.");
}
`,language:"php",process:!0,children:(a,s)=>{n();var o=r(`<?php
return function ($context) {
    $context->log(json_encode($context->req->bodyJson));// Object from parsed JSON request body, otherwise string
    $context->log(json_encode($context->req->headers)); // String key-value pairs of all request headers, keys are lowercase
    $context->log($context->req->scheme);               // Value of the x-forwarded-proto header, usually http or https
    $context->log($context->req->method);               // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    $context->log($context->req->url);                  // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    $context->log($context->req->host);                 // Hostname from the host header, such as awesome.appwrite.io
    $context->log($context->req->port);                 // Port from the host header, for example 8000
    $context->log($context->req->path);                 // Path part of URL, for example /v1/hooks
    $context->log($context->req->queryString);          // Raw query params string. For example "limit=12&offset=50"
    $context->log(json_encode($context->req->query));   // Parsed query params. For example, req.query.limit

    return $context->res->text("All the request parameters are logged to the Backrush Console.");
}`);e(a,o)},$$slots:{default:!0}});var b=t(j);g(b,{content:`import json

def main(context):
    context.log(context.req.body_text)             # Raw request body, contains request data
    context.log(json.dumps(context.req.body_json)) # Object from parsed JSON request body, otherwise string
    context.log(json.dumps(context.req.headers))   # String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                # Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                # Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                   # Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host)                  # Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                  # Port from the host header, for example 8000
    context.log(context.req.path)                  # Path part of URL, for example /v1/hooks
    context.log(context.req.query_string)          # Raw query params string. For example "limit=12&offset=50"
    context.log(json.dumps(context.req.query))     # Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")
`,language:"python",process:!0,children:(a,s)=>{n();var o=r(`import json

def main(context):
    context.log(context.req.body_text)             # Raw request body, contains request data
    context.log(json.dumps(context.req.body_json)) # Object from parsed JSON request body, otherwise string
    context.log(json.dumps(context.req.headers))   # String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                # Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                # Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                   # Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host)                  # Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                  # Port from the host header, for example 8000
    context.log(context.req.path)                  # Path part of URL, for example /v1/hooks
    context.log(context.req.query_string)          # Raw query params string. For example "limit=12&offset=50"
    context.log(json.dumps(context.req.query))     # Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")`);e(a,o)},$$slots:{default:!0}});var k=t(b);g(k,{content:`require 'json'
                
def main(context)
    context.log(context.req.body_text)                #  Raw request body, contains request data
    context.log(JSON.generate(context.req.body_json)) # Object from parsed JSON request body, otherwise string
    context.log(JSON.generate(context.req.headers))   # String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                   # Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                   # Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                      # Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host)                     # Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                     # Port from the host header, for example 8000
    context.log(context.req.path)                     # Path part of URL, for example /v1/hooks
    context.log(context.req.query_string)             # Raw query params string. For example "limit=12&offset=50"
    context.log(JSON.generate(context.req.query))     # Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")
end
`,language:"ruby",process:!0,children:(a,s)=>{n();var o=r(`require 'json'
                
def main(context)
    context.log(context.req.body_text)                #  Raw request body, contains request data
    context.log(JSON.generate(context.req.body_json)) # Object from parsed JSON request body, otherwise string
    context.log(JSON.generate(context.req.headers))   # String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                   # Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                   # Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                      # Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host)                     # Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                     # Port from the host header, for example 8000
    context.log(context.req.path)                     # Path part of URL, for example /v1/hooks
    context.log(context.req.query_string)             # Raw query params string. For example "limit=12&offset=50"
    context.log(JSON.generate(context.req.query))     # Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")
end`);e(a,o)},$$slots:{default:!0}});var R=t(k);g(R,{content:`export default async ({ req, res, log }: any) => {
    log(req.bodyText);                  // Raw request body, contains request data
    log(JSON.stringify(req.bodyJson));  // Object from parsed JSON request body, otherwise string
    log(JSON.stringify(req.headers));   // String key-value pairs of all request headers, keys are lowercase
    log(req.scheme);                    // Value of the x-forwarded-proto header, usually http or https
    log(req.method);                    // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    log(req.url);                       // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    log(req.host);                      // Hostname from the host header, such as awesome.appwrite.io
    log(req.port);                      // Port from the host header, for example 8000
    log(req.path);                      // Path part of URL, for example /v1/hooks
    log(req.queryString);               // Raw query params string. For example "limit=12&offset=50"
    log(JSON.stringify(req.query));     // Parsed query params. For example, req.query.limit

    return res.text("All the request parameters are logged to the Backrush Console.");
}
`,language:"deno",process:!0,children:(a,s)=>{n();var o=r(`export default async ({ req, res, log }: any) => {
    log(req.bodyText);                  // Raw request body, contains request data
    log(JSON.stringify(req.bodyJson));  // Object from parsed JSON request body, otherwise string
    log(JSON.stringify(req.headers));   // String key-value pairs of all request headers, keys are lowercase
    log(req.scheme);                    // Value of the x-forwarded-proto header, usually http or https
    log(req.method);                    // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    log(req.url);                       // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    log(req.host);                      // Hostname from the host header, such as awesome.appwrite.io
    log(req.port);                      // Port from the host header, for example 8000
    log(req.path);                      // Path part of URL, for example /v1/hooks
    log(req.queryString);               // Raw query params string. For example "limit=12&offset=50"
    log(JSON.stringify(req.query));     // Parsed query params. For example, req.query.limit

    return res.text("All the request parameters are logged to the Backrush Console.");
}`);e(a,o)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"encoding/json"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	Context.Log(Context.Req.BodyText)               // Raw request body, contains request data
	Context.Log(json.Marshal(Context.Req.BodyJson)) // Object from parsed JSON request body, otherwise string
	Context.Log(json.Marshal(Context.Req.Headers))  // String key-value pairs of all request headers, keys are lowercase
	Context.Log(Context.Req.Scheme)                 // Value of the x-forwarded-proto header, usually http or https
	Context.Log(Context.Req.Method)                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
	Context.Log(Context.Req.Url)                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
	Context.Log(Context.Req.Host)                   // Hostname from the host header, such as awesome.appwrite.io
	Context.Log(Context.Req.Port)                   // Port from the host header, for example 8000
	Context.Log(Context.Req.Path)                   // Path part of URL, for example /v1/hooks
	Context.Log(Context.Req.QueryString)            // Raw query params string. For example "limit=12&offset=50"
	Context.Log(json.Marshal(Context.Req.Query))    // Parsed query params. For example, req.query.limit

	return Context.Res.Text("All the request parameters are logged to the Backrush Console.")
}
`,language:"go",process:!0,children:(a,s)=>{n();var o=r(`package handler

import (
	"encoding/json"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	Context.Log(Context.Req.BodyText)               // Raw request body, contains request data
	Context.Log(json.Marshal(Context.Req.BodyJson)) // Object from parsed JSON request body, otherwise string
	Context.Log(json.Marshal(Context.Req.Headers))  // String key-value pairs of all request headers, keys are lowercase
	Context.Log(Context.Req.Scheme)                 // Value of the x-forwarded-proto header, usually http or https
	Context.Log(Context.Req.Method)                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
	Context.Log(Context.Req.Url)                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
	Context.Log(Context.Req.Host)                   // Hostname from the host header, such as awesome.appwrite.io
	Context.Log(Context.Req.Port)                   // Port from the host header, for example 8000
	Context.Log(Context.Req.Path)                   // Path part of URL, for example /v1/hooks
	Context.Log(Context.Req.QueryString)            // Raw query params string. For example "limit=12&offset=50"
	Context.Log(json.Marshal(Context.Req.Query))    // Parsed query params. For example, req.query.limit

	return Context.Res.Text("All the request parameters are logged to the Backrush Console.")
}`);e(a,o)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:async';
import 'dart:convert';

Future<dynamic> main(final context) async {
    context.log(context.req.bodyText);               // Raw request body, contains request data
    context.log(json.encode(context.req.bodyJson));  // Object from parsed JSON request body, otherwise string
    context.log(json.encode(context.req.headers));   // String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme);                 // Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method);                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url);                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host);                   // Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port);                   // Port from the host header, for example 8000
    context.log(context.req.path);                   // Path part of URL, for example /v1/hooks
    context.log(context.req.queryString);            // Raw query params string. For example "limit=12&offset=50"
    context.log(json.encode(context.req.query));     // Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.");
}
`,language:"dart",process:!0,children:(a,s)=>{n();var o=r(`import 'dart:async';
import 'dart:convert';

Future<dynamic> main(final context) async {
    context.log(context.req.bodyText);               // Raw request body, contains request data
    context.log(json.encode(context.req.bodyJson));  // Object from parsed JSON request body, otherwise string
    context.log(json.encode(context.req.headers));   // String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme);                 // Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method);                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url);                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    context.log(context.req.host);                   // Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port);                   // Port from the host header, for example 8000
    context.log(context.req.path);                   // Path part of URL, for example /v1/hooks
    context.log(context.req.queryString);            // Raw query params string. For example "limit=12&offset=50"
    context.log(json.encode(context.req.query));     // Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.");
}`);e(a,o)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Foundation
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    context.log(context.req.bodyJson)                                                      // Raw request body, contains request data
    context.log(NSJSONSerialization.jsonObject(with: context.req.bodyJson, options: [])!)  // Object from parsed JSON request body, otherwise string
    context.log(NSJSONSerialization.jsonObject(with: context.req.headers, options: [])!)   // String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                                                        // Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                                                        // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                                                           // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50 
    context.log(context.req.host)                                                          // Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                                                          // Port from the host header, for example 8000
    context.log(context.req.path)                                                          // Path part of URL, for example /v1/hooks
    context.log(context.req.queryString)                                                   // Raw query params string. For example "limit=12&offset=50"
    context.log(NSJSONSerialization.jsonObject(with: context.req.query, options: [])!)     // Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")
}
`,language:"swift",process:!0,children:(a,s)=>{n();var o=r(`import Foundation
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    context.log(context.req.bodyJson)                                                      // Raw request body, contains request data
    context.log(NSJSONSerialization.jsonObject(with: context.req.bodyJson, options: [])!)  // Object from parsed JSON request body, otherwise string
    context.log(NSJSONSerialization.jsonObject(with: context.req.headers, options: [])!)   // String key-value pairs of all request headers, keys are lowercase
    context.log(context.req.scheme)                                                        // Value of the x-forwarded-proto header, usually http or https
    context.log(context.req.method)                                                        // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    context.log(context.req.url)                                                           // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50 
    context.log(context.req.host)                                                          // Hostname from the host header, such as awesome.appwrite.io
    context.log(context.req.port)                                                          // Port from the host header, for example 8000
    context.log(context.req.path)                                                          // Path part of URL, for example /v1/hooks
    context.log(context.req.queryString)                                                   // Raw query params string. For example "limit=12&offset=50"
    context.log(NSJSONSerialization.jsonObject(with: context.req.query, options: [])!)     // Parsed query params. For example, req.query.limit

    return context.res.text("All the request parameters are logged to the Backrush Console.")
}`);e(a,o)},$$slots:{default:!0}});var P=t(y);g(P,{content:`namespace DotNetRuntime;

using System.Text.Json;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.BodyJson));             // Object from parsed JSON request body, otherwise string
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.Headers));              // String key-value pairs of all request headers, keys are lowercase
        Context.Log(Context.Req.Scheme);                                                 // Value of the x-forwarded-proto header, usually http or https
        Context.Log(Context.Req.Method);                                                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        Context.Log(Context.Req.Url);                                                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        Context.Log(Context.Req.Host);                                                   // Hostname from the host header, such as awesome.appwrite.io
        Context.Log(Context.Req.Port);                                                   // Port from the host header, for example 8000
        Context.Log(Context.Req.Path);                                                   // Path part of URL, for example /v1/hooks
        Context.Log(Context.Req.QueryString);                                            // Raw query params string. For example "limit=12&offset=50"
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.Query));                // Parsed query params. For example, req.query.limit

        return Context.Res.Text("All the request parameters are logged to the Backrush Console.");
    }
}
`,language:"csharp",process:!0,children:(a,s)=>{n();var o=r(`namespace DotNetRuntime;

using System.Text.Json;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.BodyJson));             // Object from parsed JSON request body, otherwise string
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.Headers));              // String key-value pairs of all request headers, keys are lowercase
        Context.Log(Context.Req.Scheme);                                                 // Value of the x-forwarded-proto header, usually http or https
        Context.Log(Context.Req.Method);                                                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        Context.Log(Context.Req.Url);                                                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        Context.Log(Context.Req.Host);                                                   // Hostname from the host header, such as awesome.appwrite.io
        Context.Log(Context.Req.Port);                                                   // Port from the host header, for example 8000
        Context.Log(Context.Req.Path);                                                   // Path part of URL, for example /v1/hooks
        Context.Log(Context.Req.QueryString);                                            // Raw query params string. For example "limit=12&offset=50"
        Context.Log(JsonSerializer.Serialize<object>(Context.Req.Query));                // Parsed query params. For example, req.query.limit

        return Context.Res.Text("All the request parameters are logged to the Backrush Console.");
    }
}`);e(a,o)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import com.google.gson.Gson

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        val gson = Gson()

        context.log(context.req.bodyJson)                 // Raw request body, contains request data
        context.log(gson.toString(context.req.bodyJson))  // Object from parsed JSON request body, otherwise string
        context.log(gson.toString(context.req.headers))   // String key-value pairs of all request headers, keys are lowercase
        context.log(context.req.scheme)                   // Value of the x-forwarded-proto header, usually http or https
        context.log(context.req.method)                   // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        context.log(context.req.url)                      // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        context.log(context.req.host)                     // Hostname from the host header, such as awesome.appwrite.io
        context.log(context.req.port)                     // Port from the host header, for example 8000
        context.log(context.req.path)                     // Path part of URL, for example /v1/hooks
        context.log(context.req.queryString)              // Raw query params string. For example "limit=12&offset=50"
        context.log(gson.toString(context.req.query))     // Parsed query params. For example, req.query.limit

        return context.res.text("All the request parameters are logged to the Backrush Console.")
    }
}
`,language:"kotlin",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import com.google.gson.Gson

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        val gson = Gson()

        context.log(context.req.bodyJson)                 // Raw request body, contains request data
        context.log(gson.toString(context.req.bodyJson))  // Object from parsed JSON request body, otherwise string
        context.log(gson.toString(context.req.headers))   // String key-value pairs of all request headers, keys are lowercase
        context.log(context.req.scheme)                   // Value of the x-forwarded-proto header, usually http or https
        context.log(context.req.method)                   // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        context.log(context.req.url)                      // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        context.log(context.req.host)                     // Hostname from the host header, such as awesome.appwrite.io
        context.log(context.req.port)                     // Port from the host header, for example 8000
        context.log(context.req.path)                     // Path part of URL, for example /v1/hooks
        context.log(context.req.queryString)              // Raw query params string. For example "limit=12&offset=50"
        context.log(gson.toString(context.req.query))     // Parsed query params. For example, req.query.limit

        return context.res.text("All the request parameters are logged to the Backrush Console.")
    }
}`);e(a,o)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java;

import com.google.gson.Gson;
import io.openruntimes.java.models.RuntimeContext;
import io.openruntimes.java.models.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) {
        Gson gson = new Gson();

        context.log(gson.toString(context.getReq().getBody()));    // Object from parsed JSON request body, otherwise string
        context.log(gson.toString(context.getReq().getHeaders())); // String key-value pairs of all request headers, keys are lowercase
        context.log(context.getReq().getScheme());                 // Value of the x-forwarded-proto header, usually http or https
        context.log(context.getReq().getMethod());                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        context.log(context.getReq().getUrl());                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        context.log(context.getReq().getHost());                   // Hostname from the host header, such as awesome.appwrite.io
        context.log(context.getReq().getPort());                   // Port from the host header, for example 8000
        context.log(context.getReq().getPath());                   // Path part of URL, for example /v1/hooks
        context.log(context.getReq().getQueryString());            // Raw query params string. For example "limit=12&offset=50"
        context.log(gson.toString(context.getReq().getQuery()));   // Parsed query params. For example, req.query.limit

        return context.getRes().text("All the request parameters are logged to the Backrush Console.");
    }
}
`,language:"java",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.java;

import com.google.gson.Gson;
import io.openruntimes.java.models.RuntimeContext;
import io.openruntimes.java.models.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) {
        Gson gson = new Gson();

        context.log(gson.toString(context.getReq().getBody()));    // Object from parsed JSON request body, otherwise string
        context.log(gson.toString(context.getReq().getHeaders())); // String key-value pairs of all request headers, keys are lowercase
        context.log(context.getReq().getScheme());                 // Value of the x-forwarded-proto header, usually http or https
        context.log(context.getReq().getMethod());                 // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
        context.log(context.getReq().getUrl());                    // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
        context.log(context.getReq().getHost());                   // Hostname from the host header, such as awesome.appwrite.io
        context.log(context.getReq().getPort());                   // Port from the host header, for example 8000
        context.log(context.getReq().getPath());                   // Path part of URL, for example /v1/hooks
        context.log(context.getReq().getQueryString());            // Raw query params string. For example "limit=12&offset=50"
        context.log(gson.toString(context.getReq().getQuery()));   // Parsed query params. For example, req.query.limit

        return context.getRes().text("All the request parameters are logged to the Backrush Console.");
    }
}`);e(a,o)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ae=t(Ie);K(Ae,{id:"headers",level:3,children:(h,S)=>{n();var i=r("Headers");e(h,i)},$$slots:{default:!0}});var De=t(Ae);H(De,{children:(h,S)=>{n();var i=r("Backrush Functions will always receive a set of headers that provide meta data about the function execution. These are provided alongside any custom headers sent to the function.");e(h,i)},$$slots:{default:!0}});var je=t(De);ne(je,{children:(h,S)=>{var i=yn(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=ln(),y=m(v);V(y,{children:(D,T)=>{n();var a=r("Variable");e(D,a)},$$slots:{default:!0}});var P=t(y);V(P,{children:(D,T)=>{n();var a=r("Description");e(D,a)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=vn(),I=m(R);F(I,{children:(o,l)=>{var x=un(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-trigger"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=cn(),$=t(m(q));E($,{content:"http"});var O=t($,2);E(O,{content:"schedule"});var A=t(O,2);E(A,{content:"event"}),n(),e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var v=t(I);F(v,{children:(o,l)=>{var x=dn(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-event"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=r("If the function execution was triggered by an event, describes the triggering event.");e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var y=t(v);F(y,{children:(o,l)=>{var x=hn(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-key"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=pn(),$=t(m(q));z($,{href:"/docs/products/functions/develop#dynamic-api-key",children:(O,A)=>{n();var U=r("Learn more about dynamic api keys");e(O,U)},$$slots:{default:!0}}),n(),e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var P=t(y);F(P,{children:(o,l)=>{var x=mn(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-user-id"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=r("If the function execution was invoked by an authenticated user, display the user ID. This doesn't apply to Backrush Console users or API keys.");e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var D=t(P);F(D,{children:(o,l)=>{var x=gn(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-user-jwt"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=xn(),$=t(m(q));z($,{href:"/docs/products/auth/jwt",children:(O,A)=>{n();var U=r("Learn more about JWT tokens");e(O,U)},$$slots:{default:!0}}),n(),e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var T=t(D);F(T,{children:(o,l)=>{var x=$n(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-country-code"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=r("Displays the country code of the configured locale.");e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var a=t(T);F(a,{children:(o,l)=>{var x=fn(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-continent-code"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=r("Displays the continent code of the configured locale.");e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}});var s=t(a);F(s,{children:(o,l)=>{var x=_n(),u=m(x);d(u,{children:(c,N)=>{E(c,{content:"x-appwrite-continent-eu"})},$$slots:{default:!0}});var f=t(u);d(f,{children:(c,N)=>{n();var q=r("Describes if the configured local is within the EU.");e(c,q)},$$slots:{default:!0}}),e(o,x)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ee=t(je);K(Ee,{id:"response",level:2,children:(h,S)=>{n();var i=r("Response");e(h,i)},$$slots:{default:!0}});var Oe=t(Ee);H(Oe,{children:(h,S)=>{n();var i=wn(),C=t(m(i));Z(C,{marker:"**",children:(j,b)=>{n();var k=r("will not be logged");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var ke=t(Oe);K(ke,{id:"response-types",level:3,children:(h,S)=>{n();var i=r("Response types");e(h,i)},$$slots:{default:!0}});var Se=t(ke);ne(Se,{children:(h,S)=>{var i=jn(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=Pn(),y=m(v);V(y,{children:(D,T)=>{n();var a=r("Response");e(D,a)},$$slots:{default:!0}});var P=t(y);V(P,{children:(D,T)=>{n();var a=r("Description");e(D,a)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=Dn(),I=m(R);F(I,{children:(T,a)=>{var s=Cn(),o=m(s);d(o,{children:(x,u)=>{E(x,{content:"empty"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(x,u)=>{n();var f=qn(),c=t(m(f));E(c,{content:"code 204 No Content"}),n(),e(x,f)},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var v=t(I);F(v,{children:(T,a)=>{var s=Rn(),o=m(s);d(o,{children:(x,u)=>{E(x,{content:"json"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(x,u)=>{n();var f=Tn(),c=t(m(f));E(c,{content:"application/json"}),n(),e(x,f)},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var y=t(v);F(y,{children:(T,a)=>{var s=bn(),o=m(s);d(o,{children:(x,u)=>{E(x,{content:"binary"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(x,u)=>{n();var f=r("Packages binary bytes, the status code, and the headers into an object.");e(x,f)},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var P=t(y);F(P,{children:(T,a)=>{var s=In(),o=m(s);d(o,{children:(x,u)=>{E(x,{content:"redirect"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(x,u)=>{n();var f=r("Redirects the client to the specified URL link.");e(x,f)},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var D=t(P);F(D,{children:(T,a)=>{var s=An(),o=m(s);d(o,{children:(x,u)=>{E(x,{content:"text"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(x,u)=>{n();var f=r("Converts the body using UTF-8 encoding into a binary Buffer.");e(x,f)},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ne=t(Se);te(Ne,{children:(h,S)=>{var i=En(),C=m(i);g(C,{content:`const fs = require('fs');

export default async ({ req, res, log }) => {

    switch (req.query.type) {
        case 'empty': 
            return res.empty();
        case 'json':
            return res.json({"type": "This is a JSON response"});
        case 'binary':
            const bytes = await fs.readFile('file.png');
            return res.binary(bytes);
        case 'redirect':
            return res.redirect("https://appwrite.io", 301);
        case 'html':
            return res.text(
                "<h1>This is an HTML response</h1>", 200, {
                    "content-type": "text/html"
                });
        default:
            return res.text("This is a text response");
    }
}
`,language:"server-nodejs",process:!0,children:(s,o)=>{n();var l=r(`const fs = require('fs');

export default async ({ req, res, log }) => {

    switch (req.query.type) {
        case 'empty': 
            return res.empty();
        case 'json':
            return res.json({"type": "This is a JSON response"});
        case 'binary':
            const bytes = await fs.readFile('file.png');
            return res.binary(bytes);
        case 'redirect':
            return res.redirect("https://appwrite.io", 301);
        case 'html':
            return res.text(
                "<h1>This is an HTML response</h1>", 200, {
                    "content-type": "text/html"
                });
        default:
            return res.text("This is a text response");
    }
}`);e(s,l)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php

return function ($context) {
    switch ($context->req->query['type']) {
        case 'empty':
            return $context->res->empty();
        case 'json':
            return $context->res->json(["type" => "This is a JSON response"]);
        case 'binary':
            $fileContent = file_get_contents('file.png');
            return $context->res->binary($fileContent);
        case 'redirect':
            return $context->res->redirect("https://appwrite.io", 301);
        case 'html':
            return $context->res->text("<h1>This is an HTML response</h1>", 200, [
                "content-type" => "text/html"
                ]);
        default:
            return $context->res->text("This is a text response");
    }
};
`,language:"php",process:!0,children:(s,o)=>{n();var l=r(`<?php

return function ($context) {
    switch ($context->req->query['type']) {
        case 'empty':
            return $context->res->empty();
        case 'json':
            return $context->res->json(["type" => "This is a JSON response"]);
        case 'binary':
            $fileContent = file_get_contents('file.png');
            return $context->res->binary($fileContent);
        case 'redirect':
            return $context->res->redirect("https://appwrite.io", 301);
        case 'html':
            return $context->res->text("<h1>This is an HTML response</h1>", 200, [
                "content-type" => "text/html"
                ]);
        default:
            return $context->res->text("This is a text response");
    }
};`);e(s,l)},$$slots:{default:!0}});var b=t(j);g(b,{content:`
def main(context):
    type = context.req.query['type']

    if type == 'empty':
        return context.res.empty()
    elif type == 'json':
        return context.res.json({"type": "This is a JSON response"})
    elif type == 'binary':
        with open('file.png', 'rb') as file:
            file_contents = file.read()
        return context.res.binary(file_contents)
    elif type == 'redirect':
        return context.res.redirect("https://appwrite.io", 301)
    elif type == 'html':
        return context.res.text("<h1>This is an HTML response</h1>", 200, {
            "content-type": "text/html"
        })
    else:
        return context.res.text("This is a text response")
`,language:"python",process:!0,children:(s,o)=>{n();var l=r(`def main(context):
    type = context.req.query['type']

    if type == 'empty':
        return context.res.empty()
    elif type == 'json':
        return context.res.json({"type": "This is a JSON response"})
    elif type == 'binary':
        with open('file.png', 'rb') as file:
            file_contents = file.read()
        return context.res.binary(file_contents)
    elif type == 'redirect':
        return context.res.redirect("https://appwrite.io", 301)
    elif type == 'html':
        return context.res.text("<h1>This is an HTML response</h1>", 200, {
            "content-type": "text/html"
        })
    else:
        return context.res.text("This is a text response")`);e(s,l)},$$slots:{default:!0}});var k=t(b);g(k,{content:`def main(context)
    case context.req.query['type'] 
        when 'empty'
            return context.res.empty()
        when 'json'
            return context.res.json({"type": "This is a JSON response"})
        when 'binary'
            file_contents = File.binread('file.png')
            return context.res.binary(file_contents)
        when 'redirect'
            return context.res.redirect("https://appwrite.io", 301)
        when 'html'
            return context.res.text("<h1>This is an HTML response</h1>", 200, {
                "content-type": "text/html"
            })
        else
            return context.res.text("This is a text response")
    end
end
`,language:"ruby",process:!0,children:(s,o)=>{n();var l=r(`def main(context)
    case context.req.query['type'] 
        when 'empty'
            return context.res.empty()
        when 'json'
            return context.res.json({"type": "This is a JSON response"})
        when 'binary'
            file_contents = File.binread('file.png')
            return context.res.binary(file_contents)
        when 'redirect'
            return context.res.redirect("https://appwrite.io", 301)
        when 'html'
            return context.res.text("<h1>This is an HTML response</h1>", 200, {
                "content-type": "text/html"
            })
        else
            return context.res.text("This is a text response")
    end
end`);e(s,l)},$$slots:{default:!0}});var R=t(k);g(R,{content:`export default async ({ req, res, log }) => {

    switch (req.query.type) {
        case 'empty':
            return res.empty();
        case 'json':
            return res.json({type: "This is a JSON response"});
        case 'binary':
            const fileContents = await Deno.readFile('file.png');
            return res.binary(fileContents);
        case 'redirect':
            return res.redirect("https://appwrite.io", 301);
        case 'html':
            return res.text(
                "<h1>This is an HTML response</h1>", 200, {
                    "content-type": "text/html"
                });
        default:
            return res.text("This is a text response");
    }
}
`,language:"deno",process:!0,children:(s,o)=>{n();var l=r(`export default async ({ req, res, log }) => {

    switch (req.query.type) {
        case 'empty':
            return res.empty();
        case 'json':
            return res.json({type: "This is a JSON response"});
        case 'binary':
            const fileContents = await Deno.readFile('file.png');
            return res.binary(fileContents);
        case 'redirect':
            return res.redirect("https://appwrite.io", 301);
        case 'html':
            return res.text(
                "<h1>This is an HTML response</h1>", 200, {
                    "content-type": "text/html"
                });
        default:
            return res.text("This is a text response");
    }
}`);e(s,l)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"io"
	"os"
	"embed"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed images/*.png
var images embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	switch Context.Req.Query["type"] {
	case "empty":
		return Context.Res.Empty()
	case "json":
		return Context.Res.Json(map[string]string{"type": "This is a JSON response"})
	case "binary":
		imageData, _ := images.ReadFile("file.png")
		return Context.Res.Binary(imageData)
	case "redirect":
		return Context.Res.Redirect("https://appwrite.io")
	case "html":
		return Context.Res.Text("<h1>This is an HTML response</h1>")
	default:
		return Context.Res.Text("This is a text response")
	}
}
`,language:"go",process:!0,children:(s,o)=>{n();var l=r(`package handler

import (
	"io"
	"os"
	"embed"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed images/*.png
var images embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	switch Context.Req.Query["type"] {
	case "empty":
		return Context.Res.Empty()
	case "json":
		return Context.Res.Json(map[string]string{"type": "This is a JSON response"})
	case "binary":
		imageData, _ := images.ReadFile("file.png")
		return Context.Res.Binary(imageData)
	case "redirect":
		return Context.Res.Redirect("https://appwrite.io")
	case "html":
		return Context.Res.Text("<h1>This is an HTML response</h1>")
	default:
		return Context.Res.Text("This is a text response")
	}
}`);e(s,l)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:io';
import 'dart:async';

Future<dynamic> main(final context) async {
    switch (context.req.query['type']) {
        case 'empty':
            return context.res.empty();
        case 'json':
            return context.res.json({'type': 'This is a JSON response'});
        case 'binary':
            final file = File('file.png');
            final fileContents = await file.readAsBytes();
            return context.res.binary(fileContents);
        case 'redirect':
            return context.res.redirect('https://appwrite.io', 301);
        case 'html':
            return context.res.text('<h1>This is an HTML response</h1>',
                200, {'content-type': 'text/html'});
        default:
            return context.res.text('This is a text response');
  }
}
`,language:"dart",process:!0,children:(s,o)=>{n();var l=r(`import 'dart:io';
import 'dart:async';

Future<dynamic> main(final context) async {
    switch (context.req.query['type']) {
        case 'empty':
            return context.res.empty();
        case 'json':
            return context.res.json({'type': 'This is a JSON response'});
        case 'binary':
            final file = File('file.png');
            final fileContents = await file.readAsBytes();
            return context.res.binary(fileContents);
        case 'redirect':
            return context.res.redirect('https://appwrite.io', 301);
        case 'html':
            return context.res.text('<h1>This is an HTML response</h1>',
                200, {'content-type': 'text/html'});
        default:
            return context.res.text('This is a text response');
  }
}`);e(s,l)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    switch context.req.query["type"] {
    case "empty":
        return context.res.empty()
    case "json":
        return context.res.text(["type": "This is a JSON response"])
    case "binary":
        let fileContents = FileManager.default.contents(atPath: "file.png")
        return context.res.binary(fileContents)
    case "redirect":
        return context.res.redirect("https://appwrite.io", 301)
    case "html":
        return context.res.text("<h1>This is an HTML response</h1>", 200, [
            "content-type": "text/html"
            ])
    default:
        return context.res.text("This is a text response")
    }
}
`,language:"swift",process:!0,children:(s,o)=>{n();var l=r(`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    switch context.req.query["type"] {
    case "empty":
        return context.res.empty()
    case "json":
        return context.res.text(["type": "This is a JSON response"])
    case "binary":
        let fileContents = FileManager.default.contents(atPath: "file.png")
        return context.res.binary(fileContents)
    case "redirect":
        return context.res.redirect("https://appwrite.io", 301)
    case "html":
        return context.res.text("<h1>This is an HTML response</h1>", 200, [
            "content-type": "text/html"
            ])
    default:
        return context.res.text("This is a text response")
    }
}`);e(s,l)},$$slots:{default:!0}});var P=t(y);g(P,{content:`public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        switch (Context.Request.Query["type"])
        {
            case "empty":
                return Context.Res.Empty();
            case "json":
                return Context.Res.Text(new Dictionary<string, object>() { { "type", "This is a JSON response" } });
            case "binary":
                return Context.Res.Binary(File.ReadAllBytes("file.png"));
            case "redirect":
                return Context.Res.Redirect("https://appwrite.io", 301);
            case "html":
                return Context.Res.Text("<h1>This is an HTML response</h1>", 200, new Dictionary<string, string>() {
                    { "content-type", "text/html" } 
                });
            default:
                return Context.Res.Text("This is a text response");
        }
    }
}
`,language:"csharp",process:!0,children:(s,o)=>{n();var l=r(`public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        switch (Context.Request.Query["type"])
        {
            case "empty":
                return Context.Res.Empty();
            case "json":
                return Context.Res.Text(new Dictionary<string, object>() { { "type", "This is a JSON response" } });
            case "binary":
                return Context.Res.Binary(File.ReadAllBytes("file.png"));
            case "redirect":
                return Context.Res.Redirect("https://appwrite.io", 301);
            case "html":
                return Context.Res.Text("<h1>This is an HTML response</h1>", 200, new Dictionary<string, string>() {
                    { "content-type", "text/html" } 
                });
            default:
                return Context.Res.Text("This is a text response");
        }
    }
}`);e(s,l)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        when (context.req.query["type"]) {
            "empty" -> return context.res.empty()
            "json" -> return context.res.text(mapOf("type" to "This is a JSON response"))
            "binary" -> return context.res.binary(File("file.png").readBytes())
            "redirect" -> return context.res.redirect("https://appwrite.io", 301)
            "html" -> return context.res.text("<h1>This is an HTML response</h1>", 200, mapOf("content-type" to "text/html"))
            else -> return context.res.text("This is a text response")
        }
    }
}
`,language:"kotlin",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        when (context.req.query["type"]) {
            "empty" -> return context.res.empty()
            "json" -> return context.res.text(mapOf("type" to "This is a JSON response"))
            "binary" -> return context.res.binary(File("file.png").readBytes())
            "redirect" -> return context.res.redirect("https://appwrite.io", 301)
            "html" -> return context.res.text("<h1>This is an HTML response</h1>", 200, mapOf("content-type" to "text/html"))
            else -> return context.res.text("This is a text response")
        }
    }
}`);e(s,l)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.Map;
import java.util.HashMap;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        switch (context.getReq().getQuery()["type"]) {
            case "text":
                return context.getRes().empty();
            case "json":
                HashMap<String, Object> data = new HashMap<>();
                data.put("type", "This is a JSON response");
                return context.getRes().text(data);
            case "binary"
                return context.getRes().binary(Files.readAllBytes(Paths.get("file.png")));
            case "redirect":
                return context.getRes().redirect("https://appwrite.io", 301);
            case "html":
                return context.getRes().text("<h1>This is an HTML response</h1>", 200, Map.of("content-type", "text/html"));
            default:
                return context.getRes().text("This is a text response");
        }
    }
}
`,language:"java",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.Map;
import java.util.HashMap;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        switch (context.getReq().getQuery()["type"]) {
            case "text":
                return context.getRes().empty();
            case "json":
                HashMap<String, Object> data = new HashMap<>();
                data.put("type", "This is a JSON response");
                return context.getRes().text(data);
            case "binary"
                return context.getRes().binary(Files.readAllBytes(Paths.get("file.png")));
            case "redirect":
                return context.getRes().redirect("https://appwrite.io", 301);
            case "html":
                return context.getRes().text("<h1>This is an HTML response</h1>", 200, Map.of("content-type", "text/html"));
            default:
                return context.getRes().text("This is a text response");
        }
    }
}`);e(s,l)},$$slots:{default:!0}});var a=t(T);g(a,{content:`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
  class Handler {
    public:
      static RuntimeOutput main(RuntimeContext &context) {
        std::string type = context.req.query["type"];

        if (type == "empty") {
          return context.res.empty();
        } else if (type == "json") {
          Json::Value data;
          data["type"] = "This is a JSON response";
          return context.res.text(data);
        } else if (type == "binary") {
          std::vector<char> buffer(std::istreambuf_iterator<char>(std::ifstream("file.png", std::ios::binary)), {});
          return context.res.binary(buffer)
        } else if (type == "redirect") {
          return context.res.redirect("https://appwrite.io", 301);
        } else if (type == "html") {
          Json::Value headers;
          headers["content-type"] = "text/html";
          return context.res.text("<h1>This is an HTML response</h1>", 200, headers);
        } else {
          return context.res.text("This is a text response");
        }
      }
  };
}
`,language:"cpp",process:!0,children:(s,o)=>{n();var l=r(`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
  class Handler {
    public:
      static RuntimeOutput main(RuntimeContext &context) {
        std::string type = context.req.query["type"];

        if (type == "empty") {
          return context.res.empty();
        } else if (type == "json") {
          Json::Value data;
          data["type"] = "This is a JSON response";
          return context.res.text(data);
        } else if (type == "binary") {
          std::vector<char> buffer(std::istreambuf_iterator<char>(std::ifstream("file.png", std::ios::binary)), {});
          return context.res.binary(buffer)
        } else if (type == "redirect") {
          return context.res.redirect("https://appwrite.io", 301);
        } else if (type == "html") {
          Json::Value headers;
          headers["content-type"] = "text/html";
          return context.res.text("<h1>This is an HTML response</h1>", 200, headers);
        } else {
          return context.res.text("This is a text response");
        }
      }
  };
}`);e(s,l)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Fe=t(Ne);H(Fe,{children:(h,S)=>{n();var i=On(),C=t(m(i));z(C,{href:"/docs/products/functions/domains",children:(j,b)=>{n();var k=r("generated domain");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var Le=t(Fe);ne(Le,{children:(h,S)=>{var i=Hn(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=kn(),y=m(v);V(y,{children:(T,a)=>{n();var s=r("Type");e(T,s)},$$slots:{default:!0}});var P=t(y);V(P,{children:(T,a)=>{n();var s=r("Query Param");e(T,s)},$$slots:{default:!0}});var D=t(P);V(D,{children:(T,a)=>{n();var s=r("Example");e(T,s)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=Jn(),I=m(R);F(I,{children:(T,a)=>{var s=Sn(),o=m(s);d(o,{children:(u,f)=>{E(u,{content:"text"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(u,f)=>{E(u,{content:"/?type=text"})},$$slots:{default:!0}});var x=t(l);d(x,{children:(u,f)=>{E(u,{content:"https://64d4d22db370ae41a32e.appwrite.global/?type=text"})},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var v=t(I);F(v,{children:(T,a)=>{var s=Nn(),o=m(s);d(o,{children:(u,f)=>{E(u,{content:"json"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(u,f)=>{E(u,{content:"/?type=json"})},$$slots:{default:!0}});var x=t(l);d(x,{children:(u,f)=>{E(u,{content:"https://64d4d22db370ae41a32e.appwrite.global/?type=json"})},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var y=t(v);F(y,{children:(T,a)=>{var s=Fn(),o=m(s);d(o,{children:(u,f)=>{E(u,{content:"redirect"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(u,f)=>{E(u,{content:"/?type=redirect"})},$$slots:{default:!0}});var x=t(l);d(x,{children:(u,f)=>{E(u,{content:"https://64d4d22db370ae41a32e.appwrite.global/?type=redirect"})},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var P=t(y);F(P,{children:(T,a)=>{var s=Ln(),o=m(s);d(o,{children:(u,f)=>{E(u,{content:"html"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(u,f)=>{E(u,{content:"/?type=html"})},$$slots:{default:!0}});var x=t(l);d(x,{children:(u,f)=>{E(u,{content:"https://64d4d22db370ae41a32e.appwrite.global/?type=html"})},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}});var D=t(P);F(D,{children:(T,a)=>{var s=Mn(),o=m(s);d(o,{children:(u,f)=>{E(u,{content:"empty"})},$$slots:{default:!0}});var l=t(o);d(l,{children:(u,f)=>{E(u,{content:"/"})},$$slots:{default:!0}});var x=t(l);d(x,{children:(u,f)=>{E(u,{content:"https://64d4d22db370ae41a32e.appwrite.global/"})},$$slots:{default:!0}}),e(T,s)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Me=t(Le);K(Me,{id:"logging",level:2,children:(h,S)=>{n();var i=r("Logging");e(h,i)},$$slots:{default:!0}});var Je=t(Me);H(Je,{children:(h,S)=>{n();var i=r("To protect user privacy, the request and response objects are not logged to the Backrush Console by default.");e(h,i)},$$slots:{default:!0}});var He=t(Je);H(He,{children:(h,S)=>{n();var i=r("We support the spread operator across most of the languages, meaning you can write code that is more concise and flexible.");e(h,i)},$$slots:{default:!0}});var Ue=t(He);H(Ue,{children:(h,S)=>{n();var i=Un(),C=t(m(i));E(C,{content:"log()"});var j=t(C,2);E(j,{content:"error()"}),n(),e(h,i)},$$slots:{default:!0}});var We=t(Ue);H(We,{children:(h,S)=>{n();var i=r("Here's an example of using logs and errors.");e(h,i)},$$slots:{default:!0}});var Be=t(We);te(Be,{children:(h,S)=>{var i=Wn(),C=m(i);g(C,{content:`export default async ({ req, res, log, error }) => {
    const message = "This is a log, use for logging information to console";
    log("Message: ", message);
    log(\`This function was called with \${req.method} method\`);
    const errorMessage = "This is an error, use for logging errors to console"
    error("Error: ", errorMessage);

    return res.text("Check the Backrush Console to see logs and errors!");
};
`,language:"server-nodejs",process:!0,children:(s,o)=>{n();var l=r(`export default async ({ req, res, log, error }) => {
    const message = "This is a log, use for logging information to console";
    log("Message: ", message);
    log(\`This function was called with \${req.method} method\`);
    const errorMessage = "This is an error, use for logging errors to console"
    error("Error: ", errorMessage);

    return res.text("Check the Backrush Console to see logs and errors!");
};`);e(s,l)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php

return function ($context) {
    $message = "This is a log, use for logging information to console";
    $context->log("Message: ", message);
    $context->log("This function was called with " . $context->req->method . " method");
    $errorMessage = "Check the Backrush Console to see logs and errors!"
    $context->error("Error: ", errorMessage);

    return $context->text("Check the Backrush Console to see logs and errors!");
};
`,language:"php",process:!0,children:(s,o)=>{n();var l=r(`<?php

return function ($context) {
    $message = "This is a log, use for logging information to console";
    $context->log("Message: ", message);
    $context->log("This function was called with " . $context->req->method . " method");
    $errorMessage = "Check the Backrush Console to see logs and errors!"
    $context->error("Error: ", errorMessage);

    return $context->text("Check the Backrush Console to see logs and errors!");
};`);e(s,l)},$$slots:{default:!0}});var b=t(j);g(b,{content:`def main(context):
    message = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log(f"This function was called with {context.req.method} method")
    errorMessage = "This is an error, use for logging errors to console"
    context.error("Error: ", errorMessage)

    return context.res.text("Check the Backrush Console to see logs and errors!")
`,language:"python",process:!0,children:(s,o)=>{n();var l=r(`def main(context):
    message = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log(f"This function was called with {context.req.method} method")
    errorMessage = "This is an error, use for logging errors to console"
    context.error("Error: ", errorMessage)

    return context.res.text("Check the Backrush Console to see logs and errors!")`);e(s,l)},$$slots:{default:!0}});var k=t(b);g(k,{content:`def main(context)
    message = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log("This function was called with #{context.req.method} method")
    errorMessage = "This is an error, use for logging errors to console"
    context.error("Error: ", errorMessage)

    return context.res.text("Check the Backrush Console to see logs and errors!")
end
`,language:"ruby",process:!0,children:(s,o)=>{n();var l=r(`def main(context)
    message = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log("This function was called with #{context.req.method} method")
    errorMessage = "This is an error, use for logging errors to console"
    context.error("Error: ", errorMessage)

    return context.res.text("Check the Backrush Console to see logs and errors!")
end`);e(s,l)},$$slots:{default:!0}});var R=t(k);g(R,{content:`export default async ({ res, log, error }: any) => {
    let message = "This is a log, use for logging information to console";
    log("Message: ", message);
    log(\`This function was called with \${context.req.method} method\`);
    let errorMessage = "This is an error, use for logging errors to console";
    error("Error: ", errorMessage);

    return res.text("Check the Backrush Console to see logs and errors!");
};
`,language:"deno",process:!0,children:(s,o)=>{n();var l=r(`export default async ({ res, log, error }: any) => {
    let message = "This is a log, use for logging information to console";
    log("Message: ", message);
    log(\`This function was called with \${context.req.method} method\`);
    let errorMessage = "This is an error, use for logging errors to console";
    error("Error: ", errorMessage);

    return res.text("Check the Backrush Console to see logs and errors!");
};`);e(s,l)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"fmt"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	message := "This is a log, use for logging information to console"
	Context.Log("Message: ", message)
	Context.Log(fmt.Sprintf("This function was called with %s method", Context.Req.Method))
	errorMessage := "This is an error, use for logging errors to console"
	Context.Error("Error: ", errorMessage)

	return Context.Res.Text("Check the Backrush Console to see logs and errors!")
}
`,language:"go",process:!0,children:(s,o)=>{n();var l=r(`package handler

import (
	"fmt"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	message := "This is a log, use for logging information to console"
	Context.Log("Message: ", message)
	Context.Log(fmt.Sprintf("This function was called with %s method", Context.Req.Method))
	errorMessage := "This is an error, use for logging errors to console"
	Context.Error("Error: ", errorMessage)

	return Context.Res.Text("Check the Backrush Console to see logs and errors!")
}`);e(s,l)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:async';

Future<dynamic> main(final context) async {
    var message = "This is a log, use for logging information to console";
    context.log("message: ", var);
    context.log("This function was called with \${context.req.method} method");
    var errorMessage = "This is an error, use for logging errors to console";
    context.error("Error: ", errorMessage);

    return context.res.text("Check the Backrush Console to see logs and errors!");
}
`,language:"dart",process:!0,children:(s,o)=>{n();var l=r(`import 'dart:async';

Future<dynamic> main(final context) async {
    var message = "This is a log, use for logging information to console";
    context.log("message: ", var);
    context.log("This function was called with \${context.req.method} method");
    var errorMessage = "This is an error, use for logging errors to console";
    context.error("Error: ", errorMessage);

    return context.res.text("Check the Backrush Console to see logs and errors!");
}`);e(s,l)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    var message: String = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log("This function was called with \\(context.req.method) method")
    var message: String = "This is an error, use for logging errors to console"
    context.error("Error: ", message)

    return context.res.text("Check the Backrush Console to see logs and errors!")
}
`,language:"swift",process:!0,children:(s,o)=>{n();var l=r(`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    var message: String = "This is a log, use for logging information to console"
    context.log("Message: ", message)
    context.log("This function was called with \\(context.req.method) method")
    var message: String = "This is an error, use for logging errors to console"
    context.error("Error: ", message)

    return context.res.text("Check the Backrush Console to see logs and errors!")
}`);e(s,l)},$$slots:{default:!0}});var P=t(y);g(P,{content:`namespace DotNetRuntime;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        string message = "This is a log, use for logging information to console";
        Context.Log("Message: ", message);
        Context.Log($"This function was called with {Context.Req.Method} method");
        string errorMessage = "This is an error, use for logging errors to console";
        Context.Error("Error: ", errorMessage);

        return Context.Res.Text("Check the Backrush Console to see logs and errors!");
    }
}
`,language:"csharp",process:!0,children:(s,o)=>{n();var l=r(`namespace DotNetRuntime;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        string message = "This is a log, use for logging information to console";
        Context.Log("Message: ", message);
        Context.Log($"This function was called with {Context.Req.Method} method");
        string errorMessage = "This is an error, use for logging errors to console";
        Context.Error("Error: ", errorMessage);

        return Context.Res.Text("Check the Backrush Console to see logs and errors!");
    }
}`);e(s,l)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        var message: String = "This is a log, use for logging information to console"
        context.log("Message: ", message)
        context.log("This function was called with \${context.req.method} method")
        var errorMessage: String = "This is an error, use for logging errors to console"
        context.error("Error: ", errorMessage)

        return context.res.text("Check the Backrush Console to see logs and errors!")
    }
}
`,language:"kotlin",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        var message: String = "This is a log, use for logging information to console"
        context.log("Message: ", message)
        context.log("This function was called with \${context.req.method} method")
        var errorMessage: String = "This is an error, use for logging errors to console"
        context.error("Error: ", errorMessage)

        return context.res.text("Check the Backrush Console to see logs and errors!")
    }
}`);e(s,l)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        String message = "This is a log, use for logging information to console";
        context.log("Message: ", message);
        context.log("This function was called with " + context.req.method + " method");
        string errorMessage = "This is an error, use for logging errors to console";
        context.error("Error: ", errorMessage);

        return context.getRes().text("Check the Backrush Console to see logs and errors!");
    }
}
`,language:"java",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        String message = "This is a log, use for logging information to console";
        context.log("Message: ", message);
        context.log("This function was called with " + context.req.method + " method");
        string errorMessage = "This is an error, use for logging errors to console";
        context.error("Error: ", errorMessage);

        return context.getRes().text("Check the Backrush Console to see logs and errors!");
    }
}`);e(s,l)},$$slots:{default:!0}});var a=t(T);g(a,{content:`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
  class Handler {
    public:
      static RuntimeOutput main(RuntimeContext &context) {
        const std::string message = "This is a log, use for logging information to console";
        context.log("Message: ", message);
        context.log("This function was called with " + context.req.method + " method");
        const std::string errorMessage = "This is an error, use for logging errors to console";
        context.error("Error: ", errorMessage);

        return context.res.text("Check the Backrush Console to see logs and errors!");
      }
  };
}
`,language:"cpp",process:!0,children:(s,o)=>{n();var l=r(`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
  class Handler {
    public:
      static RuntimeOutput main(RuntimeContext &context) {
        const std::string message = "This is a log, use for logging information to console";
        context.log("Message: ", message);
        context.log("This function was called with " + context.req.method + " method");
        const std::string errorMessage = "This is an error, use for logging errors to console";
        context.error("Error: ", errorMessage);

        return context.res.text("Check the Backrush Console to see logs and errors!");
      }
  };
}`);e(s,l)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ge=t(Be);H(Ge,{children:(h,S)=>{n();var i=r("You can access these logs through the following steps.");e(h,i)},$$slots:{default:!0}});var Ve=t(Ge);ae(Ve,{ordered:!0,marker:".",children:(h,S)=>{var i=Bn(),C=m(i);Y(C,{children:(R,I)=>{n();var v=r("In Backrush Console, navigate to Functions.");e(R,v)},$$slots:{default:!0}});var j=t(C);Y(j,{children:(R,I)=>{n();var v=r("Click to open a function you wish to inspect.");e(R,v)},$$slots:{default:!0}});var b=t(j);Y(b,{children:(R,I)=>{n();var v=r("Under the Executions tab, click on an execution.");e(R,v)},$$slots:{default:!0}});var k=t(b);Y(k,{children:(R,I)=>{n();var v=r("In the Response section, you'll be able to view logs under the Logs and Errors tabs.");e(R,v)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Ke=t(Ve);K(Ke,{id:"environment-variables",level:1,children:(h,S)=>{n();var i=r("Accessing environment variables");e(h,i)},$$slots:{default:!0}});var Ye=t(Ke);H(Ye,{children:(h,S)=>{n();var i=r("If you need to pass constants or secrets to Backrush Functions, you can use environment variables.");e(h,i)},$$slots:{default:!0}});var ze=t(Ye);ne(ze,{children:(h,S)=>{var i=or(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=Gn(),y=m(v);V(y,{children:(T,a)=>{n();var s=r("Variable");e(T,s)},$$slots:{default:!0}});var P=t(y);V(P,{children:(T,a)=>{n();var s=r("Description");e(T,s)},$$slots:{default:!0}});var D=t(P);V(D,{children:(T,a)=>{n();var s=r("Available at Build and/or Run Time");e(T,s)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=rr(),I=m(R);F(I,{children:(x,u)=>{var f=Vn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_API_ENDPOINT"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The API endpoint of the running function");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var v=t(I);F(v,{children:(x,u)=>{var f=Kn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_VERSION"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The Backrush version used to run the function");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var y=t(v);F(y,{children:(x,u)=>{var f=Yn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_REGION"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The region where the function will run from");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var P=t(y);F(P,{children:(x,u)=>{var f=zn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_API_KEY"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The function API key is used for server authentication");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Build time");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var D=t(P);F(D,{children:(x,u)=>{var f=Qn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_ID"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The ID of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var T=t(D);F(T,{children:(x,u)=>{var f=Xn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_NAME"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The Name of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var a=t(T);F(a,{children:(x,u)=>{var f=Zn(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_DEPLOYMENT"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The deployment ID of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var s=t(a);F(s,{children:(x,u)=>{var f=er(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_PROJECT_ID"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The project ID of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var o=t(s);F(o,{children:(x,u)=>{var f=tr(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_RUNTIME_NAME"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The runtime of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}});var l=t(o);F(l,{children:(x,u)=>{var f=nr(),c=m(f);d(c,{children:($,O)=>{E($,{content:"APPWRITE_FUNCTION_RUNTIME_VERSION"})},$$slots:{default:!0}});var N=t(c);d(N,{children:($,O)=>{n();var A=r("The runtime version of the running function.");e($,A)},$$slots:{default:!0}});var q=t(N);d(q,{children:($,O)=>{n();var A=r("Both");e($,A)},$$slots:{default:!0}}),e(x,f)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var Qe=t(ze);bt(Qe,{href:"/docs/products/functions/functions#environment-variables",children:(h,S)=>{H(h,{children:(i,C)=>{n();var j=r("Learn to add variables to you function");e(i,j)},$$slots:{default:!0}})},$$slots:{default:!0}});var Xe=t(Qe);H(Xe,{children:(h,S)=>{n();var i=r("You can access the environment variables through the systems library of each language.");e(h,i)},$$slots:{default:!0}});var Ze=t(Xe);te(Ze,{children:(h,S)=>{var i=sr(),C=m(i);g(C,{content:`export default async ({ req, res, log }) => {
    return res.text(process.env.MY_VAR);
}
`,language:"server-nodejs",process:!0,children:(s,o)=>{n();var l=r(`export default async ({ req, res, log }) => {
    return res.text(process.env.MY_VAR);
}`);e(s,l)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php

return function ($context) {
    return $context->res->text(getenv('MY_VAR'));
};
`,language:"php",process:!0,children:(s,o)=>{n();var l=r(`<?php

return function ($context) {
    return $context->res->text(getenv('MY_VAR'));
};`);e(s,l)},$$slots:{default:!0}});var b=t(j);g(b,{content:`def main(context):
    return context.res.text(os.environ['MY_VAR'])
`,language:"python",process:!0,children:(s,o)=>{n();var l=r(`def main(context):
    return context.res.text(os.environ['MY_VAR'])`);e(s,l)},$$slots:{default:!0}});var k=t(b);g(k,{content:`def main(context)
    return context.res.text(ENV['MY_VAR'])
end
`,language:"ruby",process:!0,children:(s,o)=>{n();var l=r(`def main(context)
    return context.res.text(ENV['MY_VAR'])
end`);e(s,l)},$$slots:{default:!0}});var R=t(k);g(R,{content:`export default async ({ req, res, log }) => {
    return res.text(Deno.env.get('MY_VAR'));
}
`,language:"deno",process:!0,children:(s,o)=>{n();var l=r(`export default async ({ req, res, log }) => {
    return res.text(Deno.env.get('MY_VAR'));
}`);e(s,l)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"os"

    "github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
    return res.text(os.Getenv(MY_VAR))
}
`,language:"go",process:!0,children:(s,o)=>{n();var l=r(`package handler

import (
	"os"

    "github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
    return res.text(os.Getenv(MY_VAR))
}`);e(s,l)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:io';
import 'dart:async';

Future<dynamic> main(final context) async {
    return context.res.text(Platform.environment['MY_VAR']);
}
`,language:"dart",process:!0,children:(s,o)=>{n();var l=r(`import 'dart:io';
import 'dart:async';

Future<dynamic> main(final context) async {
    return context.res.text(Platform.environment['MY_VAR']);
}`);e(s,l)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    return context.res.text(ProcessInfo.processInfo.environment["MY_VAR"])
}
`,language:"swift",process:!0,children:(s,o)=>{n();var l=r(`import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    return context.res.text(ProcessInfo.processInfo.environment["MY_VAR"])
}`);e(s,l)},$$slots:{default:!0}});var P=t(y);g(P,{content:`namespace DotNetRuntime;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        return Context.Res.Text(Environment.GetEnvironmentVariable("MY_VAR"));
    }
}
`,language:"csharp",process:!0,children:(s,o)=>{n();var l=r(`namespace DotNetRuntime;

public class Handler {
    public async Task<RuntimeOutput> Main(RuntimeContext Context) 
    {
        return Context.Res.Text(Environment.GetEnvironmentVariable("MY_VAR"));
    }
}`);e(s,l)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        return context.res.text(System.getenv("MY_VAR"))
    }
}
`,language:"kotlin",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        return context.res.text(System.getenv("MY_VAR"))
    }
}`);e(s,l)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        return context.getRes().text(System.getenv("MY_VAR"));
    }
}
`,language:"java",process:!0,children:(s,o)=>{n();var l=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        return context.getRes().text(System.getenv("MY_VAR"));
    }
}`);e(s,l)},$$slots:{default:!0}});var a=t(T);g(a,{content:`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
    class Handler {
    public:
        static RuntimeOutput main(RuntimeContext &context) {
            return context.res.text(std::getenv("MY_VAR"));
        }
    };
}
`,language:"cpp",process:!0,children:(s,o)=>{n();var l=r(`#include "../RuntimeResponse.h"
#include "../RuntimeRequest.h"
#include "../RuntimeOutput.h"
#include "../RuntimeContext.h"

namespace runtime {
    class Handler {
    public:
        static RuntimeOutput main(RuntimeContext &context) {
            return context.res.text(std::getenv("MY_VAR"));
        }
    };
}`);e(s,l)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var et=t(Ze);K(et,{id:"dependencies",level:1,children:(h,S)=>{n();var i=r("Dependencies");e(h,i)},$$slots:{default:!0}});var tt=t(et);H(tt,{children:(h,S)=>{n();var i=ar(),C=t(m(i));Z(C,{marker:"**",children:(v,y)=>{n();var P=r("Build setting");e(v,P)},$$slots:{default:!0}});var j=t(C,2);Z(j,{marker:"**",children:(v,y)=>{n();var P=r("Commands");e(v,P)},$$slots:{default:!0}});var b=t(j,2);Z(b,{marker:"**",children:(v,y)=>{n();var P=r("Functions");e(v,P)},$$slots:{default:!0}});var k=t(b,2);Z(k,{marker:"**",children:(v,y)=>{n();var P=r("Settings");e(v,P)},$$slots:{default:!0}});var R=t(k,2);Z(R,{marker:"**",children:(v,y)=>{n();var P=r("Configuration");e(v,P)},$$slots:{default:!0}});var I=t(R,2);Z(I,{marker:"**",children:(v,y)=>{n();var P=r("Build settings");e(v,P)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var nt=t(tt);H(nt,{children:(h,S)=>{n();var i=ir(),C=t(m(i));E(C,{content:"package.json"});var j=t(C,2);E(j,{content:"composer.json"});var b=t(j,2);E(b,{content:"requirements.txt"});var k=t(b,2);z(k,{href:"/docs/products/functions/deploy-from-git#root-directory",children:(v,y)=>{n();var P=r("root directory");e(v,P)},$$slots:{default:!0}});var R=t(k,2);E(R,{content:"node_modules"});var I=t(R,2);E(I,{content:"vendor"}),n(),e(h,i)},$$slots:{default:!0}});var rt=t(nt);H(rt,{children:(h,S)=>{n();var i=r("Your function's dependencies should be managed by the package manager of each language. By default, we include the following package managers in each runtime.");e(h,i)},$$slots:{default:!0}});var ot=t(rt);ne(ot,{children:(h,S)=>{var i=Sr(),C=m(i);re(C,{children:(b,k)=>{F(b,{children:(R,I)=>{var v=lr(),y=m(v);V(y,{width:80,children:(a,s)=>{n();var o=r(" ");e(a,o)},$$slots:{default:!0}});var P=t(y);V(P,{children:(a,s)=>{n();var o=r("Language");e(a,o)},$$slots:{default:!0}});var D=t(P);V(D,{children:(a,s)=>{n();var o=r("Package Manager");e(a,o)},$$slots:{default:!0}});var T=t(D);V(T,{children:(a,s)=>{n();var o=r("Commands");e(a,o)},$$slots:{default:!0}}),e(R,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=t(C);oe(j,{children:(b,k)=>{var R=kr(),I=m(R);F(I,{children:(c,N)=>{var q=ur(),$=m(q);d($,{children:(_,L)=>{var w=cr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/nodejs.svg",alt:"Node.js logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/nodejs.svg",alt:"Node.js logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Node.js");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("NPM");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"npm install"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var v=t(I);F(v,{children:(c,N)=>{var q=pr(),$=m(q);d($,{children:(_,L)=>{var w=dr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/php.svg",alt:"PHP logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/php.svg",alt:"PHP logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("PHP");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Composer");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"composer install"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var y=t(v);F(y,{children:(c,N)=>{var q=mr(),$=m(q);d($,{children:(_,L)=>{var w=hr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/python.svg",alt:"Python logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/python.svg",alt:"Python logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Python");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("pip");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"pip install -r requirements.txt"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var P=t(y);F(P,{children:(c,N)=>{var q=gr(),$=m(q);d($,{children:(_,L)=>{var w=xr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/ruby.svg",alt:"Ruby logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/ruby.svg",alt:"Ruby logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Ruby");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Bundler");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"bundle install"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var D=t(P);F(D,{children:(c,N)=>{var q=fr(),$=m(q);d($,{children:(_,L)=>{var w=$r(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/deno.svg",alt:"Deno logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/deno.svg",alt:"Deno logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Deno");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("deno");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"deno cache <ENTRYPOINT_FILE>"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var T=t(D);F(T,{children:(c,N)=>{var q=vr(),$=m(q);d($,{children:(_,L)=>{var w=_r(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/go.svg",alt:"Go logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/go.svg",alt:"Go logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Go");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Go Modules");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{n();var w=r("N/A");e(_,w)},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var a=t(T);F(a,{children:(c,N)=>{var q=wr(),$=m(q);d($,{children:(_,L)=>{var w=yr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/dart.svg",alt:"Dart logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/dart.svg",alt:"Dart logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Dart");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("pub");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"pub get"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var s=t(a);F(s,{children:(c,N)=>{var q=qr(),$=m(q);d($,{children:(_,L)=>{var w=Pr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/swift.svg",alt:"Swift logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/swift.svg",alt:"Swift logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Swift");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Swift Package Manager");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"swift package resolve"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var o=t(s);F(o,{children:(c,N)=>{var q=Tr(),$=m(q);d($,{children:(_,L)=>{var w=Cr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/dotnet.svg",alt:".NET logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/dotnet.svg",alt:".NET logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r(".NET");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("NuGet");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"dotnet restore"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var l=t(o);F(l,{children:(c,N)=>{var q=br(),$=m(q);d($,{children:(_,L)=>{var w=Rr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/bun.svg",alt:"Bun logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/bun.svg",alt:"Bun logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Bun");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("bun");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{E(_,{content:"bun install"})},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var x=t(l);F(x,{children:(c,N)=>{var q=Ar(),$=m(q);d($,{children:(_,L)=>{var w=Ir(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/kotlin.svg",alt:"Kotlin logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/kotlin.svg",alt:"Kotlin logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Kotlin");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Gradle");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{n();var w=r("N/A");e(_,w)},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var u=t(x);F(u,{children:(c,N)=>{var q=jr(),$=m(q);d($,{children:(_,L)=>{var w=Dr(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/java.svg",alt:"Java logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/java.svg",alt:"Java logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("Java");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("Gradle");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{n();var w=r("N/A");e(_,w)},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}});var f=t(u);F(f,{children:(c,N)=>{var q=Or(),$=m(q);d($,{children:(_,L)=>{var w=Er(),J=m(w);Q(J,{children:(M,G)=>{W(M,{src:"/images/platforms/dark/c.svg",alt:"C++ logo",size:"m"})}});var B=t(J,2);X(B,{children:(M,G)=>{W(M,{src:"/images/platforms/c.svg",alt:"C++ logo",size:"m"})}}),e(_,w)},$$slots:{default:!0}});var O=t($);d(O,{children:(_,L)=>{n();var w=r("C++");e(_,w)},$$slots:{default:!0}});var A=t(O);d(A,{children:(_,L)=>{n();var w=r("None");e(_,w)},$$slots:{default:!0}});var U=t(A);d(U,{children:(_,L)=>{n();var w=r("N/A");e(_,w)},$$slots:{default:!0}}),e(c,q)},$$slots:{default:!0}}),e(b,R)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var st=t(ot);K(st,{id:"using-appwrite",level:1,children:(h,S)=>{n();var i=r("Using Backrush in a function");e(h,i)},$$slots:{default:!0}});var at=t(st);H(at,{children:(h,S)=>{n();var i=r("Backrush can be used in your functions by adding the relevant SDK to your function's dependencies. Authenticating with Backrush is done via a dynamic API key or a JWT token.");e(h,i)},$$slots:{default:!0}});var it=t(at);K(it,{id:"dynamic-api-key",level:2,children:(h,S)=>{n();var i=r("Dynamic API key");e(h,i)},$$slots:{default:!0}});var lt=t(it);H(lt,{children:(h,S)=>{n();var i=Nr(),C=t(m(i));z(C,{href:"/docs/advanced/platform/api-keys",children:(j,b)=>{n();var k=r("API keys");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var ct=t(lt);H(ct,{children:(h,S)=>{n();var i=Fr(),C=t(m(i));E(C,{content:"APPWRITE_FUNCTION_API_KEY"}),n(),e(h,i)},$$slots:{default:!0}});var ut=t(ct);H(ut,{children:(h,S)=>{n();var i=Lr(),C=t(m(i));E(C,{content:"x-appwrite-key"});var j=t(C,2);z(j,{href:"#headers",children:(b,k)=>{n();var R=r("header");e(b,R)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var dt=t(ut);H(dt,{children:(h,S)=>{n();var i=r("Dynamic API keys grant access and operate without sessions. They allow your function to act as an admin-type role instead of acting on behalf of a user. Update the function settings to configure the scopes of the function.");e(h,i)},$$slots:{default:!0}});var pt=t(dt);ae(pt,{ordered:!0,marker:".",children:(h,S)=>{var i=Hr(),C=m(i);Y(C,{children:(I,v)=>{n();var y=Mr(),P=t(m(y));Z(P,{marker:"**",children:(D,T)=>{n();var a=r("Functions");e(D,a)},$$slots:{default:!0}}),n(),e(I,y)},$$slots:{default:!0}});var j=t(C);Y(j,{children:(I,v)=>{n();var y=r("Click to open a function you wish to configure.");e(I,y)},$$slots:{default:!0}});var b=t(j);Y(b,{children:(I,v)=>{n();var y=Jr(),P=t(m(y));Z(P,{marker:"**",children:(T,a)=>{n();var s=r("Settings");e(T,s)},$$slots:{default:!0}});var D=t(P,2);Z(D,{marker:"**",children:(T,a)=>{n();var s=r("Scopes");e(T,s)},$$slots:{default:!0}}),n(),e(I,y)},$$slots:{default:!0}});var k=t(b);Y(k,{children:(I,v)=>{n();var y=r("Select the scopes you want to grant the dynamic key.");e(I,y)},$$slots:{default:!0}});var R=t(k);Y(R,{children:(I,v)=>{n();var y=r("It is best practice to allow only necessary permissions.");e(I,y)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var ht=t(pt);te(ht,{children:(h,S)=>{var i=Ur(),C=m(i);g(C,{content:`import { Client, Databases, ID } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
    // Set project and set API key
    const client = new Client()
       .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
       .setKey(req.headers['x-appwrite-key']);

    const databases = new Databases(client);

    try {
        await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            ID.unique(),
            {}
        )
    } catch (e) {
        error("Failed to create document: " + e.message)
        return res.text("Failed to create document")
    }

    return res.text("Document created")
}
`,language:"server-nodejs",process:!0,children:(a,s)=>{n();var o=r(`import { Client, Databases, ID } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
    // Set project and set API key
    const client = new Client()
       .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
       .setKey(req.headers['x-appwrite-key']);

    const databases = new Databases(client);

    try {
        await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            ID.unique(),
            {}
        )
    } catch (e) {
        error("Failed to create document: " + e.message)
        return res.text("Failed to create document")
    }

    return res.text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php

require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;
use Backrush\\Services\\Databases;
use Backrush\\ID;

return function ($context) {
    // Set project and set API key
    $client = (new Client())
        ->setProject(getenv('APPWRITE_FUNCTION_PROJECT_ID'))
        ->setKey($context->req->headers['x-appwrite-key']);
   
    $databases = new Databases($client);

    try {
        $databases->createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID::unique(),
            data: []
        );
    } catch (Exception $e) {
        $context->error("Failed to create document: " . $e->getMessage());
        return $context->res->text("Failed to create document");
    }

    return $context->res->text("Document created");
};
`,language:"php",process:!0,children:(a,s)=>{n();var o=r(`<?php

require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;
use Backrush\\Services\\Databases;
use Backrush\\ID;

return function ($context) {
    // Set project and set API key
    $client = (new Client())
        ->setProject(getenv('APPWRITE_FUNCTION_PROJECT_ID'))
        ->setKey($context->req->headers['x-appwrite-key']);
   
    $databases = new Databases($client);

    try {
        $databases->createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID::unique(),
            data: []
        );
    } catch (Exception $e) {
        $context->error("Failed to create document: " . $e->getMessage());
        return $context->res->text("Failed to create document");
    }

    return $context->res->text("Document created");
};`);e(a,o)},$$slots:{default:!0}});var b=t(j);g(b,{content:`from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID

import os

def main(context):
    # Set project and set API key
    client = (
        Client()
            .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
            .set_key(context.req.headers["x-appwrite-key"])
    )

    databases = Databases(client)

    try:
        databases.create_document(
            database_id="<DATABASE_ID>",
            collection_id="<COLLECTION_ID>",
            document_id=ID.unique(),
            data={}
        )
    except Exception as e:
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")

    return context.response.text("Document created")
`,language:"python",process:!0,children:(a,s)=>{n();var o=r(`from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID

import os

def main(context):
    # Set project and set API key
    client = (
        Client()
            .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
            .set_key(context.req.headers["x-appwrite-key"])
    )

    databases = Databases(client)

    try:
        databases.create_document(
            database_id="<DATABASE_ID>",
            collection_id="<COLLECTION_ID>",
            document_id=ID.unique(),
            data={}
        )
    except Exception as e:
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")

    return context.response.text("Document created")`);e(a,o)},$$slots:{default:!0}});var k=t(b);g(k,{content:`require "appwrite"

include Backrush

def main(context)
    # Set project and set API key
    client = Backrush::Client.new
      .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])
      .set_key(context.req.headers['x-appwrite-key'])

    databases = Backrush::Databases.new(client)

    begin
        databases.create_document(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        )
    rescue Exception => e
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")
    end

    return context.response.text("Document created")
end
`,language:"ruby",process:!0,children:(a,s)=>{n();var o=r(`require "appwrite"

include Backrush

def main(context)
    # Set project and set API key
    client = Backrush::Client.new
      .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])
      .set_key(context.req.headers['x-appwrite-key'])

    databases = Backrush::Databases.new(client)

    begin
        databases.create_document(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        )
    rescue Exception => e
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")
    end

    return context.response.text("Document created")
end`);e(a,o)},$$slots:{default:!0}});var R=t(k);g(R,{content:`import { Client, Databases, ID } from "https://deno.land/x/appwrite/mod.ts";
                
export default function ({req, res, error}: any){
    // Set project and set API key
    const client = new Client()
       .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID"))
       .setKey(req.headers["x-appwrite-key"] || "");

    const databases = new Databases(client);
    
    try {
        databases.createDocument(
            "<DATABASE_ID>",
            "<COLLECTION_ID>",
            ID.unique(),
            {}
        );
    } catch (e) {
        error("Failed to create document: " + e.message);
        return res.text("Failed to create document");
    }
    
    return res.text("Document created");
}
`,language:"deno",process:!0,children:(a,s)=>{n();var o=r(`import { Client, Databases, ID } from "https://deno.land/x/appwrite/mod.ts";
                
export default function ({req, res, error}: any){
    // Set project and set API key
    const client = new Client()
       .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID"))
       .setKey(req.headers["x-appwrite-key"] || "");

    const databases = new Databases(client);
    
    try {
        databases.createDocument(
            "<DATABASE_ID>",
            "<COLLECTION_ID>",
            ID.unique(),
            {}
        );
    } catch (e) {
        error("Failed to create document: " + e.message);
        return res.text("Failed to create document");
    }
    
    return res.text("Document created");
}`);e(a,o)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"fmt"
	"os"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/id"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	// Set project and set API key
	client := appwrite.NewClient(
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	databases := appwrite.NewDatabases(client)

	_, err := databases.CreateDocument(
		"<DATABASE_ID>",
		"<COLLECTION_ID>",
		id.Unique(),
		map[string]interface{}{},
	)

	if err != nil {
		Context.Log(fmt.Sprintf("Failed to create document: %v", err))
		return Context.Res.Text("Failed to create document")
	}

	return Context.Res.Text("Document created")
}
`,language:"go",process:!0,children:(a,s)=>{n();var o=r(`package handler

import (
	"fmt"
	"os"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/id"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	// Set project and set API key
	client := appwrite.NewClient(
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	databases := appwrite.NewDatabases(client)

	_, err := databases.CreateDocument(
		"<DATABASE_ID>",
		"<COLLECTION_ID>",
		id.Unique(),
		map[string]interface{}{},
	)

	if err != nil {
		Context.Log(fmt.Sprintf("Failed to create document: %v", err))
		return Context.Res.Text("Failed to create document")
	}

	return Context.Res.Text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:io';
import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

Future<dynamic> main(final context) async {
    // Set project and set API key
    final client = Client()
       .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
       .setKey(context.req.headers['x-appwrite-key']);

    final databases = Databases(client);
    
    try {
        await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        );
    } catch (e) {
        context.error("Failed to create document: " + e.message);
        return context.res.text("Failed to create document");
    }

    return context.res.text("Document created");
}
`,language:"dart",process:!0,children:(a,s)=>{n();var o=r(`import 'dart:io';
import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

Future<dynamic> main(final context) async {
    // Set project and set API key
    final client = Client()
       .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
       .setKey(context.req.headers['x-appwrite-key']);

    final databases = Databases(client);
    
    try {
        await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        );
    } catch (e) {
        context.error("Failed to create document: " + e.message);
        return context.res.text("Failed to create document");
    }

    return context.res.text("Document created");
}`);e(a,o)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Backrush
import BackrushModels
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    // Set project and set API key
    let client = Client()
       .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
       .setKey(context.req.headers["x-appwrite-key"] ?? "")

    let databases = Databases(client: client)

    do {
        try await databases.createDocument(
            databaseId: "<DATABASE_ID>", 
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique(),
            data: [:]
        )
    } catch {
        context.error("Failed to create document: \\(error.localizedDescription)")
        return context.res.text("Failed to create document")
    }

    return context.res.text("Document created")
}
`,language:"swift",process:!0,children:(a,s)=>{n();var o=r(`import Backrush
import BackrushModels
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    // Set project and set API key
    let client = Client()
       .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
       .setKey(context.req.headers["x-appwrite-key"] ?? "")

    let databases = Databases(client: client)

    do {
        try await databases.createDocument(
            databaseId: "<DATABASE_ID>", 
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique(),
            data: [:]
        )
    } catch {
        context.error("Failed to create document: \\(error.localizedDescription)")
        return context.res.text("Failed to create document")
    }

    return context.res.text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var P=t(y);g(P,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;                        
                        
namespace DotNetRuntime
{
    public class Handler 
    {
        public async Task Main(RuntimeContext Context) 
        {
            // Set API 
            var client = new Client()
                .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID")) 
                .SetKey(Context.Req.Headers["x-appwrite-key"]);

            var databases = new Databases(client);
    
            try {
                await databases.CreateDocument(
                    databaseId: "<DATABASE_ID>",
                    collectionId: "<COLLECTION_ID>",
                    documentId: ID.Unique(),
                    data: new Dictionary<string, object>());
            } catch (Exception e) {
                Context.Error("Failed to create document: " + e.Message);
                return Context.Response.Text("Failed to create document");
            }
    
            return Context.Response.Text("Document created");
        }
    }
}
`,language:"csharp",process:!0,children:(a,s)=>{n();var o=r(`using Backrush;
using Backrush.Services;
using Backrush.Models;                        
                        
namespace DotNetRuntime
{
    public class Handler 
    {
        public async Task Main(RuntimeContext Context) 
        {
            // Set API 
            var client = new Client()
                .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID")) 
                .SetKey(Context.Req.Headers["x-appwrite-key"]);

            var databases = new Databases(client);
    
            try {
                await databases.CreateDocument(
                    databaseId: "<DATABASE_ID>",
                    collectionId: "<COLLECTION_ID>",
                    documentId: ID.Unique(),
                    data: new Dictionary<string, object>());
            } catch (Exception e) {
                Context.Error("Failed to create document: " + e.Message);
                return Context.Response.Text("Failed to create document");
            }
    
            return Context.Response.Text("Document created");
        }
    }
}`);e(a,o)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.ID
import java.util.HashMap

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        // Set project and set API key
        val client = Client()
           .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
           .setKey(context.req.headers["x-appwrite-key"])

        val databases = Databases(client)

        try {
            databases.createDocument(
                databaseId = "<DATABASE_ID>",
                collectionId = "<COLLECTION_ID>",
                documentId = ID.unique()
                data = mapOf()
            )
        } catch (e: Exception) {
            context.error("Failed to create document: " + e.message)
            return context.res.text("Failed to create document")
        }

        return context.res.text("Document created")
    }
}
`,language:"kotlin",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.ID
import java.util.HashMap

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        // Set project and set API key
        val client = Client()
           .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
           .setKey(context.req.headers["x-appwrite-key"])

        val databases = Databases(client)

        try {
            databases.createDocument(
                databaseId = "<DATABASE_ID>",
                collectionId = "<COLLECTION_ID>",
                documentId = ID.unique()
                data = mapOf()
            )
        } catch (e: Exception) {
            context.error("Failed to create document: " + e.message)
            return context.res.text("Failed to create document")
        }

        return context.res.text("Document created")
    }
}`);e(a,o)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        // Set project and set API key
        Client client = new Client();
             .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
             .setKey(context.getReq().getHeaders().get("x-appwrite-key"));

        Databases databases = new Databases(client);

        try {
            databases.createDocument(
                "<DATABASE_ID>",
                "<COLLECTION_ID>",
                ID.unique(),
                new HashMap<>()
            );
        } catch (Exception e) {
            context.error("Failed to create document: " + e.getMessage());
            return context.res.text("Failed to create document");
        }

        return context.res.text("Document created");
    }
}
`,language:"java",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        // Set project and set API key
        Client client = new Client();
             .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
             .setKey(context.getReq().getHeaders().get("x-appwrite-key"));

        Databases databases = new Databases(client);

        try {
            databases.createDocument(
                "<DATABASE_ID>",
                "<COLLECTION_ID>",
                ID.unique(),
                new HashMap<>()
            );
        } catch (Exception e) {
            context.error("Failed to create document: " + e.getMessage());
            return context.res.text("Failed to create document");
        }

        return context.res.text("Document created");
    }
}`);e(a,o)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var mt=t(ht);K(mt,{id:"using-jwt",level:2,children:(h,S)=>{n();var i=r("Using with JWT");e(h,i)},$$slots:{default:!0}});var xt=t(mt);H(xt,{children:(h,S)=>{n();var i=Wr(),C=t(m(i));Z(C,{marker:"**",children:(j,b)=>{n();var k=r("only");e(j,k)},$$slots:{default:!0}}),n(),e(h,i)},$$slots:{default:!0}});var gt=t(xt);H(gt,{children:(h,S)=>{n();var i=Br(),C=t(m(i));E(C,{content:"x-appwrite-user-jwt"}),n(),e(h,i)},$$slots:{default:!0}});var $t=t(gt);te($t,{children:(h,S)=>{var i=Gr(),C=m(i);g(C,{content:`import { Client, Databases, ID } from 'node-appwrite';

export default async ({ req, res, log }) => {
    const client = new Client()
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)

    if (req.headers['x-appwrite-user-jwt']) {
        client.setJWT(req.headers['x-appwrite-user-jwt'])
    } else {
        return res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }

    const databases = new Databases(client);

    try {
        await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            ID.unique(),
            {}
        )
    } catch (e) {
        log("Failed to create document: " + e.message)
        return res.text("Failed to create document")
    }

    return res.text("Document created")
}
`,language:"server-nodejs",process:!0,children:(a,s)=>{n();var o=r(`import { Client, Databases, ID } from 'node-appwrite';

export default async ({ req, res, log }) => {
    const client = new Client()
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)

    if (req.headers['x-appwrite-user-jwt']) {
        client.setJWT(req.headers['x-appwrite-user-jwt'])
    } else {
        return res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }

    const databases = new Databases(client);

    try {
        await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            ID.unique(),
            {}
        )
    } catch (e) {
        log("Failed to create document: " + e.message)
        return res.text("Failed to create document")
    }

    return res.text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var j=t(C);g(j,{content:`<?php

require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;
use Backrush\\Services\\Databases;
use Backrush\\ID;

return function ($context) {
    $client = new (Client())
        ->setProject(getenv('APPWRITE_FUNCTION_PROJECT_ID'))
    
    if (isset($context->req->headers['x-appwrite-user-jwt'])) {
        $client->setJWT($context->req->headers['x-appwrite-user-jwt']);
    } else {
        return $context->res->text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    $databases = new Databases($client);

    try {
        $databases->createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID::unique(),
            data: []
        );
    } catch (Exception $e) {
        $context->error("Failed to create document: " . $e->getMessage());
        return $context->res->text("Failed to create document");
    }

    return $context->res->text("Document created");
};
`,language:"php",process:!0,children:(a,s)=>{n();var o=r(`<?php

require(__DIR__ . '/../vendor/autoload.php');

use Backrush\\Client;
use Backrush\\Exception;
use Backrush\\Services\\Databases;
use Backrush\\ID;

return function ($context) {
    $client = new (Client())
        ->setProject(getenv('APPWRITE_FUNCTION_PROJECT_ID'))
    
    if (isset($context->req->headers['x-appwrite-user-jwt'])) {
        $client->setJWT($context->req->headers['x-appwrite-user-jwt']);
    } else {
        return $context->res->text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    $databases = new Databases($client);

    try {
        $databases->createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID::unique(),
            data: []
        );
    } catch (Exception $e) {
        $context->error("Failed to create document: " . $e->getMessage());
        return $context->res->text("Failed to create document");
    }

    return $context->res->text("Document created");
};`);e(a,o)},$$slots:{default:!0}});var b=t(j);g(b,{content:`from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID

import os

def main(context):
    client = (
        Client()
            .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    )

    if "x-appwrite-user-jwt" in context.req.headers:
        client.set_jwt(context.req.headers["x-appwrite-user-jwt"])
    else:
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")

    databases = Databases(client)

    try:
        databases.create_document(
            database_id="<DATABASE_ID>",
            collection_id="<COLLECTION_ID>",
            document_id=ID.unique(),
            data={}
        )
    except Exception as e:
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")

    return context.response.text("Document created")
`,language:"python",process:!0,children:(a,s)=>{n();var o=r(`from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID

import os

def main(context):
    client = (
        Client()
            .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    )

    if "x-appwrite-user-jwt" in context.req.headers:
        client.set_jwt(context.req.headers["x-appwrite-user-jwt"])
    else:
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")

    databases = Databases(client)

    try:
        databases.create_document(
            database_id="<DATABASE_ID>",
            collection_id="<COLLECTION_ID>",
            document_id=ID.unique(),
            data={}
        )
    except Exception as e:
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")

    return context.response.text("Document created")`);e(a,o)},$$slots:{default:!0}});var k=t(b);g(k,{content:`require "appwrite"

include Backrush

def main(context)
    client = Client.new
        .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])

    if context.request.headers['x-appwrite-user-jwt']
        client.set_jwt(context.request.headers['x-appwrite-user-jwt'])
    else
        return context.response.text("Access denied: This function requires authentication. Please sign in to continue.")
    end

    databases = Backrush::Databases.new(client)

    begin
        databases.create_document('<DATABASE_ID>', '<COLLECTION_ID>', Backrush::ID.unique(), {})
    rescue Backrush::Exception => e
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")
    end

    return context.response.text("Document created")
end
`,language:"ruby",process:!0,children:(a,s)=>{n();var o=r(`require "appwrite"

include Backrush

def main(context)
    client = Client.new
        .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])

    if context.request.headers['x-appwrite-user-jwt']
        client.set_jwt(context.request.headers['x-appwrite-user-jwt'])
    else
        return context.response.text("Access denied: This function requires authentication. Please sign in to continue.")
    end

    databases = Backrush::Databases.new(client)

    begin
        databases.create_document('<DATABASE_ID>', '<COLLECTION_ID>', Backrush::ID.unique(), {})
    rescue Backrush::Exception => e
        context.error("Failed to create document: " + e.message)
        return context.response.text("Failed to create document")
    end

    return context.response.text("Document created")
end`);e(a,o)},$$slots:{default:!0}});var R=t(k);g(R,{content:`import { Client, Databases, ID } from "https://deno.land/x/appwrite/mod.ts";
                
export default function ({req, res, error}: any){
    const client = new Client()
        .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID") || "")
    
    if (req.headers["x-appwrite-user-jwt"]) {
        client.setJWT(req.headers["x-appwrite-user-jwt"]);
    } else {
        return res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    const databases = new Databases(client);
    
    try {
        databases.createDocument(
            "<DATABASE_ID>",
            "<COLLECTION_ID>",
            ID.unique(),
            {}
        );
    } catch (e) {
        error("Failed to create document: " + e.message)
        return res.text("Failed to create document");
    }
    
    return res.text("Document created");
}
`,language:"deno",process:!0,children:(a,s)=>{n();var o=r(`import { Client, Databases, ID } from "https://deno.land/x/appwrite/mod.ts";
                
export default function ({req, res, error}: any){
    const client = new Client()
        .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID") || "")
    
    if (req.headers["x-appwrite-user-jwt"]) {
        client.setJWT(req.headers["x-appwrite-user-jwt"]);
    } else {
        return res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    const databases = new Databases(client);
    
    try {
        databases.createDocument(
            "<DATABASE_ID>",
            "<COLLECTION_ID>",
            ID.unique(),
            {}
        );
    } catch (e) {
        error("Failed to create document: " + e.message)
        return res.text("Failed to create document");
    }
    
    return res.text("Document created");
}`);e(a,o)},$$slots:{default:!0}});var I=t(R);g(I,{content:`package handler

import (
	"fmt"
	"log"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/id"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithProject("APPWRITE_FUNCTION_PROJECT_ID"),
	)

	jwt, exists := Context.Req.Headers["x-appwrite-user-jwt"]
	if !exists || len(jwt) == 0 {
		appwrite.WithJWT(Context.Req.Headers["x-appwrite-user-jwt"])
	} else {
		return Context.Res.Text("Access denied: This function requires authentication. Please sign in to continue.")
	}

	databases := appwrite.NewDatabases(client)

	_, err := databases.CreateDocument(
		"<DATABASE_ID>",
		"<COLLECTION_ID>",
		id.Unique(),
		map[string]interface{}{},
	)

	if err != nil {
        Context.Log(fmt.Sprintf("Failed to create document: %v", err))
		return Context.Res.Text(str)
	}

	return Context.Res.Text("Document created")
}
`,language:"go",process:!0,children:(a,s)=>{n();var o=r(`package handler

import (
	"fmt"
	"log"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/id"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithProject("APPWRITE_FUNCTION_PROJECT_ID"),
	)

	jwt, exists := Context.Req.Headers["x-appwrite-user-jwt"]
	if !exists || len(jwt) == 0 {
		appwrite.WithJWT(Context.Req.Headers["x-appwrite-user-jwt"])
	} else {
		return Context.Res.Text("Access denied: This function requires authentication. Please sign in to continue.")
	}

	databases := appwrite.NewDatabases(client)

	_, err := databases.CreateDocument(
		"<DATABASE_ID>",
		"<COLLECTION_ID>",
		id.Unique(),
		map[string]interface{}{},
	)

	if err != nil {
        Context.Log(fmt.Sprintf("Failed to create document: %v", err))
		return Context.Res.Text(str)
	}

	return Context.Res.Text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var v=t(I);g(v,{content:`import 'dart:io';
import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

Future<dynamic> main(final context) async {
    final client = Client()
        .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
    
    if (context.req.headers['x-appwrite-user-jwt'] != null) {
        client.setJWT(context.req.headers['x-appwrite-user-jwt']);
    } else {
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    final databases = Databases(client);
    
    try {
        await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        );
    } catch (e) {
        context.error("Failed to create document: " + e.message);
        return context.res.text("Failed to create document");
    }

    return context.res.text("Document created");
}
`,language:"dart",process:!0,children:(a,s)=>{n();var o=r(`import 'dart:io';
import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

Future<dynamic> main(final context) async {
    final client = Client()
        .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
    
    if (context.req.headers['x-appwrite-user-jwt'] != null) {
        client.setJWT(context.req.headers['x-appwrite-user-jwt']);
    } else {
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.");
    }
    
    final databases = Databases(client);
    
    try {
        await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: {}
        );
    } catch (e) {
        context.error("Failed to create document: " + e.message);
        return context.res.text("Failed to create document");
    }

    return context.res.text("Document created");
}`);e(a,o)},$$slots:{default:!0}});var y=t(v);g(y,{content:`import Backrush
import BackrushModels
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    let client = Client()
       .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
    
    if let jwt = context.req.headers["x-appwrite-user-jwt"] {
        client.setJWT(jwt)
    } else {
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")
    }

    let databases = Databases(client: client)

    do {
        try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique()
            data: [:]
        )
    } catch {
        context.error("Failed to create document: \\(error.localizedDescription)")
        return context.res.text("Failed to create document")
    }

    return context.res.text("Document created")
}
`,language:"swift",process:!0,children:(a,s)=>{n();var o=r(`import Backrush
import BackrushModels
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    let client = Client()
       .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
    
    if let jwt = context.req.headers["x-appwrite-user-jwt"] {
        client.setJWT(jwt)
    } else {
        return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")
    }

    let databases = Databases(client: client)

    do {
        try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique()
            data: [:]
        )
    } catch {
        context.error("Failed to create document: \\(error.localizedDescription)")
        return context.res.text("Failed to create document")
    }

    return context.res.text("Document created")
}`);e(a,o)},$$slots:{default:!0}});var P=t(y);g(P,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

namespace DotNetRuntime
{
    public class Handler
    {
        public async Task Main(RuntimeContext Context)
        {
            var client = new Client()
               .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID"))

            if (Context.Req.Headers.ContainsKey("x-appwrite-user-jwt")) {
                client.SetJWT(Context.Req.Headers["x-appwrite-user-jwt"]);
            } else {
                return Context.Res.Text("Access denied: This function requires authentication. Please sign in to continue");
            }

            var databases = new Databases(client);

            try {
                await databases.CreateDocument(
                    databaseId: "<DATABASE_ID>",
                    collectionId: "<COLLECTION_ID>",
                    documentId: ID.Unique(),
                    data: new Dictionary<string, object>());
            } catch (Exception e) {
                Context.Error("Failed to create document: " + e.Message);
                return Context.Res.Text("Failed to create document");
            }

            return Context.Res.Text("Document created");
        }
    }
}
`,language:"csharp",process:!0,children:(a,s)=>{n();var o=r(`using Backrush;
using Backrush.Services;
using Backrush.Models;

namespace DotNetRuntime
{
    public class Handler
    {
        public async Task Main(RuntimeContext Context)
        {
            var client = new Client()
               .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID"))

            if (Context.Req.Headers.ContainsKey("x-appwrite-user-jwt")) {
                client.SetJWT(Context.Req.Headers["x-appwrite-user-jwt"]);
            } else {
                return Context.Res.Text("Access denied: This function requires authentication. Please sign in to continue");
            }

            var databases = new Databases(client);

            try {
                await databases.CreateDocument(
                    databaseId: "<DATABASE_ID>",
                    collectionId: "<COLLECTION_ID>",
                    documentId: ID.Unique(),
                    data: new Dictionary<string, object>());
            } catch (Exception e) {
                Context.Error("Failed to create document: " + e.Message);
                return Context.Res.Text("Failed to create document");
            }

            return Context.Res.Text("Document created");
        }
    }
}`);e(a,o)},$$slots:{default:!0}});var D=t(P);g(D,{content:`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.ID
import java.util.HashMap

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        val client = Client()
           .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))

        if (context.req.headers["x-appwrite-user-jwt"] != null) {
            client.setJWT(context.req.headers["x-appwrite-user-jwt"])
        } else {
            return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")
        }

        val databases = Databases(client)

        try {
            databases.createDocument(
                databaseId = "<DATABASE_ID>",
                collectionId = "<COLLECTION_ID>",
                documentId = ID.unique(),
                data = mapOf()
            )
        } catch (e: Exception) {
            context.error("Failed to create document: " + e.message)
            return context.res.text("Failed to create document")
        }

        return context.res.text("Document created")
    }
}
`,language:"kotlin",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.ID
import java.util.HashMap

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        val client = Client()
           .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))

        if (context.req.headers["x-appwrite-user-jwt"] != null) {
            client.setJWT(context.req.headers["x-appwrite-user-jwt"])
        } else {
            return context.res.text("Access denied: This function requires authentication. Please sign in to continue.")
        }

        val databases = Databases(client)

        try {
            databases.createDocument(
                databaseId = "<DATABASE_ID>",
                collectionId = "<COLLECTION_ID>",
                documentId = ID.unique(),
                data = mapOf()
            )
        } catch (e: Exception) {
            context.error("Failed to create document: " + e.message)
            return context.res.text("Failed to create document")
        }

        return context.res.text("Document created")
    }
}`);e(a,o)},$$slots:{default:!0}});var T=t(D);g(T,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        Client client = new Client()
            .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
                
        if (context.req.headers.containsKey("x-appwrite-user-jwt")) {
            client.setJWT(context.req.headers.get("x-appwrite-user-jwt"));
        } else {
            return context.res.text("Access denied: This function requires authentication. Please sign in to continue.");
        }

        Databases databases = new Databases(client);

        try {
            databases.createDocument(
                "<DATABASE_ID>",
                "<COLLECTION_ID>",
                ID.unique(),
                new HashMap<>()
            );
        } catch (Exception e) {
            context.error("Failed to create document: " + e.getMessage());
            return context.res.text("Failed to create document");
        }

        return context.res.text("Document created");

    }
}
`,language:"java",process:!0,children:(a,s)=>{n();var o=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        Client client = new Client()
            .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
                
        if (context.req.headers.containsKey("x-appwrite-user-jwt")) {
            client.setJWT(context.req.headers.get("x-appwrite-user-jwt"));
        } else {
            return context.res.text("Access denied: This function requires authentication. Please sign in to continue.");
        }

        Databases databases = new Databases(client);

        try {
            databases.createDocument(
                "<DATABASE_ID>",
                "<COLLECTION_ID>",
                ID.unique(),
                new HashMap<>()
            );
        } catch (Exception e) {
            context.error("Failed to create document: " + e.getMessage());
            return context.res.text("Failed to create document");
        }

        return context.res.text("Document created");

    }
}`);e(a,o)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}});var ft=t($t);K(ft,{id:"code-structure",level:1,children:(h,S)=>{n();var i=r("Code structure");e(h,i)},$$slots:{default:!0}});var _t=t(ft);H(_t,{children:(h,S)=>{n();var i=r("As your functions grow, you may find yourself needing to split your code into multiple files. This helps you keep your codebase maintainable and easy to read. Here's how you can accomplish code splitting.");e(h,i)},$$slots:{default:!0}});var wt=t(_t);Rt(wt,{children:(h,S)=>{var i=oo(),C=m(i);ee(C,{id:"nodejs",title:"Node.js",children:(a,s)=>{var o=Vr(),l=m(o);g(l,{content:`// src/utils.js
export function add(a, b) {
    return a + b;
}
`,language:"server-nodejs",process:!0,children:(u,f)=>{n();var c=r(`// src/utils.js
export function add(a, b) {
    return a + b;
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// src/main.js
import { add } from './utils.js';

export default function ({ res }) {
    return res.text(add(1, 2));
}
`,language:"server-nodejs",process:!0,children:(u,f)=>{n();var c=r(`// src/main.js
import { add } from './utils.js';

export default function ({ res }) {
    return res.text(add(1, 2));
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var j=t(C);ee(j,{id:"php",title:"PHP",children:(a,s)=>{var o=Kr(),l=m(o);g(l,{content:`<?php
// src/utils.php
function add($a, $b) {
    return $a + $b;
}
`,language:"php",process:!0,children:(u,f)=>{n();var c=r(`<?php
// src/utils.php
function add($a, $b) {
    return $a + $b;
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`<?php
// src/main.php
require_once(__DIR__ . '/utils.php');

return function ($context) {
    return $context->res->text(add(1, 2));
};
`,language:"php",process:!0,children:(u,f)=>{n();var c=r(`<?php
// src/main.php
require_once(__DIR__ . '/utils.php');

return function ($context) {
    return $context->res->text(add(1, 2));
};`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var b=t(j);ee(b,{id:"python",title:"Python",children:(a,s)=>{var o=Yr(),l=m(o);g(l,{content:`# src/utils.py
def add(a, b):
    return a + b
`,language:"python",process:!0,children:(u,f)=>{n();var c=r(`# src/utils.py
def add(a, b):
    return a + b`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`# src/main.py
from .utils import add

def main(context):
    return context.res.text(add(1, 2))
`,language:"python",process:!0,children:(u,f)=>{n();var c=r(`# src/main.py
from .utils import add

def main(context):
    return context.res.text(add(1, 2))`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var k=t(b);ee(k,{id:"ruby",title:"Ruby",children:(a,s)=>{var o=zr(),l=m(o);g(l,{content:`# lib/utils.rb
def add(a, b)
    return a + b
end
`,language:"ruby",process:!0,children:(u,f)=>{n();var c=r(`# lib/utils.rb
def add(a, b)
    return a + b
end`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`# lib/main.rb
require_relative 'utils'

def main(context)
    return context.res.text(add(1, 2))
end
`,language:"ruby",process:!0,children:(u,f)=>{n();var c=r(`# lib/main.rb
require_relative 'utils'

def main(context)
    return context.res.text(add(1, 2))
end`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var R=t(k);ee(R,{id:"deno",title:"Deno",children:(a,s)=>{var o=Qr(),l=m(o);g(l,{content:`// src/utils.ts
export function add(a: number, b: number): number {
    return a + b;
}
`,language:"deno",process:!0,children:(u,f)=>{n();var c=r(`// src/utils.ts
export function add(a: number, b: number): number {
    return a + b;
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// src/main.ts
import { add } from './utils.ts';

export default function ({res}: {res: any}) {
    return res.text(add(1, 2));
}
`,language:"deno",process:!0,children:(u,f)=>{n();var c=r(`// src/main.ts
import { add } from './utils.ts';

export default function ({res}: {res: any}) {
    return res.text(add(1, 2));
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var I=t(R);ee(I,{id:"go",title:"Go",children:(a,s)=>{var o=Xr(),l=m(o);g(l,{content:`// src/utils/go.mod
module example.com/utils

go 1.23.0
`,language:"go",process:!0,children:(c,N)=>{n();var q=r(`// src/utils/go.mod
module example.com/utils

go 1.23.0`);e(c,q)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// src/utils/utils.go
package utils

func Add(a int, b int) int {
	return a + b
}
`,language:"go",process:!0,children:(c,N)=>{n();var q=r(`// src/utils/utils.go
package utils

func Add(a int, b int) int {
	return a + b
}`);e(c,q)},$$slots:{default:!0}});var u=t(x);g(u,{content:`// src/main/go.mod
module example.com/main

go 1.23.0

replace example.com/utils => ../utils // Run go mod edit -replace example.com/go=../go

require example.com/utils v0.0.0-00010101000000-000000000000 // Run go mod tidy
`,language:"go",process:!0,children:(c,N)=>{n();var q=r(`// src/main/go.mod
module example.com/main

go 1.23.0

replace example.com/utils => ../utils // Run go mod edit -replace example.com/go=../go

require example.com/utils v0.0.0-00010101000000-000000000000 // Run go mod tidy`);e(c,q)},$$slots:{default:!0}});var f=t(u);g(f,{content:`// src/main/main.go
package main

import "example.com/utils"

func main() {
	// Get a greeting message and print it.
	message := utils.Add(5, 4)
	print(message)
}
`,language:"go",process:!0,children:(c,N)=>{n();var q=r(`// src/main/main.go
package main

import "example.com/utils"

func main() {
	// Get a greeting message and print it.
	message := utils.Add(5, 4)
	print(message)
}`);e(c,q)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var v=t(I);ee(v,{id:"dart",title:"Dart",children:(a,s)=>{var o=Zr(),l=m(o);g(l,{content:`// lib/utils.dart
int add(int a, int b) {
    return a + b;
}
`,language:"dart",process:!0,children:(u,f)=>{n();var c=r(`// lib/utils.dart
int add(int a, int b) {
    return a + b;
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// lib/main.dart
import 'dart:async';

import 'package:package_name/utils.dart';

Future<dynamic> main(final context) async {
    return context.res.text(add(1, 2));
}
`,language:"dart",process:!0,children:(u,f)=>{n();var c=r(`// lib/main.dart
import 'dart:async';

import 'package:package_name/utils.dart';

Future<dynamic> main(final context) async {
    return context.res.text(add(1, 2));
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var y=t(v);ee(y,{id:"swift",title:"Swift",children:(a,s)=>{var o=eo(),l=m(o);g(l,{content:`// Sources/utils.swift
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
`,language:"swift",process:!0,children:(u,f)=>{n();var c=r(`// Sources/utils.swift
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// Sources/index.swift
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    return context.res.text(add(1, 2))
}
`,language:"swift",process:!0,children:(u,f)=>{n();var c=r(`// Sources/index.swift
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    return context.res.text(add(1, 2))
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var P=t(y);ee(P,{id:"dotnet",title:".NET",children:(a,s)=>{var o=to(),l=m(o);g(l,{content:`// src/Utils.cs
namespace DotNetRuntime
{
    public static class Utils
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}
`,language:"csharp",process:!0,children:(u,f)=>{n();var c=r(`// src/Utils.cs
namespace DotNetRuntime
{
    public static class Utils
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// src/Index.cs
namespace DotNetRuntime
{
    public class Handler {
        public async Task<RuntimeOutput> Main(RuntimeContext Context)
        {
            return Context.Res.Text(Utils.Add(1, 2));
        }
    }
}
`,language:"csharp",process:!0,children:(u,f)=>{n();var c=r(`// src/Index.cs
namespace DotNetRuntime
{
    public class Handler {
        public async Task<RuntimeOutput> Main(RuntimeContext Context)
        {
            return Context.Res.Text(Utils.Add(1, 2));
        }
    }
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var D=t(P);ee(D,{id:"kotlin",title:"Kotlin",children:(a,s)=>{var o=no(),l=m(o);g(l,{content:`// src/Utils.kt
package io.openruntimes.kotlin.src

object Utils {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}
`,language:"kotlin",process:!0,children:(u,f)=>{n();var c=r(`// src/Utils.kt
package io.openruntimes.kotlin.src

object Utils {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`// src/Main.kt
package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.openruntimes.kotlin.Utils

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        return context.res.text(Utils.add(1, 2))
    }
}
`,language:"kotlin",process:!0,children:(u,f)=>{n();var c=r(`// src/Main.kt
package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.openruntimes.kotlin.Utils

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        return context.res.text(Utils.add(1, 2))
    }
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}});var T=t(D);ee(T,{id:"java",title:"Java",children:(a,s)=>{var o=ro(),l=m(o);g(l,{content:`// src/Utils.java
package io.openruntimes.java.src;

class Utils {
    public static int add(int a, int b) {
        return a + b;
    }
}
`,language:"java",process:!0,children:(u,f)=>{n();var c=r(`// src/Utils.java
package io.openruntimes.java.src;

class Utils {
    public static int add(int a, int b) {
        return a + b;
    }
}`);e(u,c)},$$slots:{default:!0}});var x=t(l);g(x,{content:`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import io.openruntimes.java.Utils;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        return context.res.text(Utils.add(1, 2));
    }
}
`,language:"java",process:!0,children:(u,f)=>{n();var c=r(`package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import io.openruntimes.java.Utils;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        return context.res.text(Utils.add(1, 2));
    }
}`);e(u,c)},$$slots:{default:!0}}),e(a,o)},$$slots:{default:!0}}),e(h,i)},$$slots:{default:!0}}),qt(se),e(yt,se)},$$slots:{default:!0}}))}export{jo as component};
