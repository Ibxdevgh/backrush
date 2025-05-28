import{t as y,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as pe,s as r,f as w,n,r as fe}from"./NgVQVlRK.js";import{n as $e}from"./B4IyMRKX.js";import{H as m}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as ae}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as se}from"./DXp9_3zM.js";import{F as _}from"./OFUKRh55.js";import{L as ie,I as p}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{L as P}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as me}from"./CEkRzcqJ.js";const le={layout:"post",title:"Leveling up the Backrush Functions ecosystem",description:"The new Backrush Functions ecosystem is now faster, smoother, better and more secure.",date:"2024-08-21T00:00:00.000Z",cover:"/images/blog/init-day2/cover.png",timeToRead:5,author:"luke-silver",category:"product, announcement",featured:!1};var he=y("With this setup, you no longer need to manually create and manage API keys. The <!> and <!> environment variables are automatically provided, and the API key is available in the request headers.",1),ve=y("<!><!><!><!><!>",1),_e=y("<!><!><!>",1),ye=y("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ge(de){me(de,$e(le,{children:(ue,we)=>{var g=ye(),x=pe(g);i(x,{children:(e,s)=>{n();var t=a("We're excited to bring you major improvements to Backrush Functions, making them more versatile and powerful than ever before.");o(e,t)},$$slots:{default:!0}});var b=r(x);i(b,{children:(e,s)=>{n();var t=a("With the new Functions, you can now stay within the Backrush ecosystem. The fully integrated features reduce friction points, allowing you to focus on development while trusting that your Functions will run smoothly and automatically.");o(e,t)},$$slots:{default:!0}});var I=r(b);i(I,{children:(e,s)=>{n();var t=a("Previously, Backrush Functions faced limitations in handling file-based tasks and real-time operations due to slow synchronous execution and cumbersome API key management. With the introduction of easier Backrush SDK integration within Functions, these constraints are lifted, opening doors to more use cases and more efficient workflows.");o(e,t)},$$slots:{default:!0}});var A=r(I);m(A,{level:1,children:(e,s)=>{n();var t=a("Faster Functions cold-starts");o(e,t)},$$slots:{default:!0}});var k=r(A);i(k,{children:(e,s)=>{n();var t=a("We've significantly accelerated Functions cold-start times through infrastructure optimizations. This means you can expect faster response times for all your Functions, both new and existing.");o(e,t)},$$slots:{default:!0}});var T=r(k);i(T,{children:(e,s)=>{n();var t=a("Cold starts occur when a Function is invoked for the first time or after a period of inactivity. This initial delay is caused by the system provisioning resources and loading the function's code.");o(e,t)},$$slots:{default:!0}});var F=r(T);i(F,{children:(e,s)=>{n();var t=a("Now, all your Functions, regardless of when they were created, benefit from faster startup times without any additional effort on your part. There's no need to make any changes to your code or configuration – the improvement is automatic.");o(e,t)},$$slots:{default:!0}});var D=r(F);m(D,{level:1,children:(e,s)=>{n();var t=a("Dynamic API keys");o(e,t)},$$slots:{default:!0}});var O=r(D);i(O,{children:(e,s)=>{n();var t=a("API key management is a time-consuming, error-prone task that can distract developers from building core features. Keeping track of multiple API keys across different environments (development, staging, production) can be overwhelming, but if compromised, they can lead to unauthorized access, data breaches, and financial loss. The stakes are high.");o(e,t)},$$slots:{default:!0}});var N=r(O);i(N,{children:(e,s)=>{n();var t=a("To combat this, we've introduced automatically generated, short-lived API keys for each execution. They’re designed to simplify managing and updating your API keys, saving you time and reducing security risks.");o(e,t)},$$slots:{default:!0}});var E=r(N);i(E,{children:(e,s)=>{n();var t=a("Here's how you can use them:");o(e,t)},$$slots:{default:!0}});var q=r(E);_(q,{content:`import { Client, Databases } from 'node-backrush';

export default async ({ req, res }) => {
    const client = new Client()
        .setEndpoint(process.env.BACKRUSH_FUNCTION_API_ENDPOINT)
        .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
        .setKey(req.headers['x-backrush-key']);

    const databases = new Databases(client);

    // Your function logic here
    
    return res.empty();
};
`,language:"jsx",process:!0,children:(e,s)=>{n();var t=a(`import { Client, Databases } from 'node-backrush';

export default async ({ req, res }) => {
    const client = new Client()
        .setEndpoint(process.env.BACKRUSH_FUNCTION_API_ENDPOINT)
        .setProject(process.env.BACKRUSH_FUNCTION_PROJECT_ID)
        .setKey(req.headers['x-backrush-key']);

    const databases = new Databases(client);

    // Your function logic here
    
    return res.empty();
};`);o(e,t)},$$slots:{default:!0}});var C=r(q);i(C,{children:(e,s)=>{n();var t=he(),u=r(w(t));se(u,{content:"BACKRUSH_FUNCTION_API_ENDPOINT"});var f=r(u,2);se(f,{content:"BACKRUSH_FUNCTION_PROJECT_ID"}),n(),o(e,t)},$$slots:{default:!0}});var W=r(C);m(W,{level:1,children:(e,s)=>{n();var t=a("Delayed executions");o(e,t)},$$slots:{default:!0}});var S=r(W);i(S,{children:(e,s)=>{n();var t=a("Now, you can schedule Functions to run at a specific time in the future, unlocking new opportunities for time-sensitive workflows.");o(e,t)},$$slots:{default:!0}});var R=r(S);i(R,{children:(e,s)=>{n();var t=a("Here's how to create a delayed execution:");o(e,t)},$$slots:{default:!0}});var B=r(R);_(B,{content:`const functions = new Functions(client);

const invoiceDate = new Date();
invoiceDate.setDate(invoiceDate.getDate() + 30);

await functions.createExecution(
    'invoicesApi', // Function ID
    '{"userId":"ngu9ife0efwed"}', // Body
    true, // Async execution
    '/v1/invoices/exports', // Path
    'POST', // Method
    {}, // Headers
    invoiceDate.toISOString() // New scheduledAt attribute
);
`,language:"jsx",process:!0,children:(e,s)=>{n();var t=a(`const functions = new Functions(client);

const invoiceDate = new Date();
invoiceDate.setDate(invoiceDate.getDate() + 30);

await functions.createExecution(
    'invoicesApi', // Function ID
    '{"userId":"ngu9ife0efwed"}', // Body
    true, // Async execution
    '/v1/invoices/exports', // Path
    'POST', // Method
    {}, // Headers
    invoiceDate.toISOString() // New scheduledAt attribute
);`);o(e,t)},$$slots:{default:!0}});var j=r(B);i(j,{children:(e,s)=>{n();var t=a("This feature is perfect for scheduling marketing emails, cleanup tasks, or precisely timed events.");o(e,t)},$$slots:{default:!0}});var H=r(j);i(H,{children:(e,s)=>{ae(e,{src:"/images/blog/init-day2/1.png",alt:"Delayed-executions"})},$$slots:{default:!0}});var U=r(H);m(U,{level:1,children:(e,s)=>{n();var t=a("Binary executions");o(e,t)},$$slots:{default:!0}});var L=r(U);i(L,{children:(e,s)=>{n();var t=a("We've long relied on JSON and XML for structured data exchange, but these formats fall short when it comes to handling files like images, audio, or video. With the introduction of binary executions, Backrush Functions can now seamlessly process and transfer these file types.");o(e,t)},$$slots:{default:!0}});var z=r(L);i(z,{children:(e,s)=>{n();var t=a("Functions can now handle binary data, both as input and output, which is particularly useful for file processing, AI interactions, and more.");o(e,t)},$$slots:{default:!0}});var M=r(z);i(M,{children:(e,s)=>{n();var t=a("This allows you to work with formats like multipart form-data, Protocol Buffers, or raw binary data directly within your functions.");o(e,t)},$$slots:{default:!0}});var Q=r(M);i(Q,{children:(e,s)=>{n();var t=a("Here’s how you can use them:");o(e,t)},$$slots:{default:!0}});var J=r(Q);_(J,{content:`import OpenAI from "openai";
import fetch from "node-fetch";

export default async ({ req, res, log, error }) => {
  // Receiving binary data
  const buffer = req.bodyBinary;

	// Using binary data (create image variation)
	const openai = new OpenAI();
  const images = await openai.images.createVariation({
	  model: "dall-e-2",
	  image: buffer,
	  n: 1,
	  size: "1024x1024"
	});
	const image = await fetch(images.data[0].url);

  // Sending binary data
  return res.binary(await image.arrayBuffer());
}
`,language:"jsx",process:!0,children:(e,s)=>{n();var t=a(`import OpenAI from "openai";
import fetch from "node-fetch";

export default async ({ req, res, log, error }) => {
  // Receiving binary data
  const buffer = req.bodyBinary;

	// Using binary data (create image variation)
	const openai = new OpenAI();
  const images = await openai.images.createVariation({
	  model: "dall-e-2",
	  image: buffer,
	  n: 1,
	  size: "1024x1024"
	});
	const image = await fetch(images.data[0].url);

  // Sending binary data
  return res.binary(await image.arrayBuffer());
}`);o(e,t)},$$slots:{default:!0}});var K=r(J);i(K,{children:(e,s)=>{n();var t=a("This allows for new use cases like sending files to AI services or generating files on the fly.");o(e,t)},$$slots:{default:!0}});var Y=r(K);m(Y,{level:1,children:(e,s)=>{n();var t=a("Execution and deployment filtering");o(e,t)},$$slots:{default:!0}});var V=r(Y);i(V,{children:(e,s)=>{n();var t=a("You can now filter Function executions and deployments based on various attributes, making it easier to monitor and debug your Functions:");o(e,t)},$$slots:{default:!0}});var X=r(V);_(X,{content:`// Example of filtering executions (specific implementation may vary)
const executions = await functions.listExecutions(
    'functionId',
    [
        Query.equal('status', 'completed'),
        Query.equal('requestMethod', 'POST'),
        Query.equal('deploymentId', 'latest')
    ]
);
`,language:"jsx",process:!0,children:(e,s)=>{n();var t=a(`// Example of filtering executions (specific implementation may vary)
const executions = await functions.listExecutions(
    'functionId',
    [
        Query.equal('status', 'completed'),
        Query.equal('requestMethod', 'POST'),
        Query.equal('deploymentId', 'latest')
    ]
);`);o(e,t)},$$slots:{default:!0}});var Z=r(X);i(Z,{children:(e,s)=>{n();var t=a("Of course, it’s also possible to filter executions from the Backrush Console:");o(e,t)},$$slots:{default:!0}});var G=r(Z);i(G,{children:(e,s)=>{ae(e,{src:"/images/blog/init-day2/2.png",alt:"Execution-filters"})},$$slots:{default:!0}});var ee=r(G);i(ee,{children:(e,s)=>{n();var t=a("You can now quickly find and analyze specific executions based on criteria like status, request method, or deployment ID.");o(e,t)},$$slots:{default:!0}});var te=r(ee);m(te,{level:1,children:(e,s)=>{n();var t=a("Build anything");o(e,t)},$$slots:{default:!0}});var oe=r(te);i(oe,{children:(e,s)=>{n();var t=a("With the new Functions ecosystem, you can now use Functions for a wider range of applications, from AI-powered image generation to scheduled tasks and beyond. We’re excited to see what developers will create with this expanded toolkit. Here are a few ideas to get you started:");o(e,t)},$$slots:{default:!0}});var re=r(oe);ie(re,{ordered:!1,marker:"-",children:(e,s)=>{var t=ve(),u=w(t);p(u,{children:(l,$)=>{n();var d=a("Build AI-powered image generation services");o(l,d)},$$slots:{default:!0}});var f=r(u);p(f,{children:(l,$)=>{n();var d=a("Create scheduled data backup and cleanup routines");o(l,d)},$$slots:{default:!0}});var h=r(f);p(h,{children:(l,$)=>{n();var d=a("Implement sophisticated marketing automation workflows");o(l,d)},$$slots:{default:!0}});var c=r(h);p(c,{children:(l,$)=>{n();var d=a("Develop real-time data processing pipelines");o(l,d)},$$slots:{default:!0}});var v=r(c);p(v,{children:(l,$)=>{n();var d=a("And more…");o(l,d)},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}});var ne=r(re);i(ne,{children:(e,s)=>{n();var t=a("Check out these resources to start building with the new Functions ecosystem:");o(e,t)},$$slots:{default:!0}});var ce=r(ne);ie(ce,{ordered:!1,marker:"-",children:(e,s)=>{var t=_e(),u=w(t);p(u,{children:(c,v)=>{P(c,{href:"https://backrush.io/docs/products/functions",children:(l,$)=>{n();var d=a("Backrush Functions documentation");o(l,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r(u);p(f,{children:(c,v)=>{P(c,{href:"https://discord.gg/backrush",children:(l,$)=>{n();var d=a("Join our Discord community");o(l,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=r(f);p(h,{children:(c,v)=>{P(c,{href:"https://www.appwrite.io/init",children:(l,$)=>{n();var d=a("Learn about Backrush Init");o(l,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}}),fe(g),o(ue,g)},$$slots:{default:!0}}))}const Le=Object.freeze(Object.defineProperty({__proto__:null,default:ge,frontmatter:le},Symbol.toStringTag,{value:"Module"}));export{Le as _,ge as a};
