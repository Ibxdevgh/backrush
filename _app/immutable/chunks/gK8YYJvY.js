import{t as m,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as me,s as t,f as P,n as s,r as Pe}from"./NgVQVlRK.js";import{n as we}from"./B4IyMRKX.js";import{H as T}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as ye}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as x}from"./DXp9_3zM.js";import{F as R}from"./OFUKRh55.js";import{L as Y,I as C}from"./BhmTgGWB.js";import{P as w}from"./D8YsId2T.js";import{S as D}from"./yHjwcyUH.js";import{L as j}from"./yh4_9ChP.js";import{T as ue}from"./D8BqvLkQ.js";import{T as $e,a as E,b as A,c as ce,d as I}from"./BpU_IltG.js";import{P as be}from"./CEkRzcqJ.js";const ve={layout:"post",title:"Improve your Backrush developer experience with dev keys",description:"Learn how you can create a dev key on Backrush and use it in a web project to improve your developer experience.",date:"2025-05-21T00:00:00.000Z",cover:"/images/blog/improve-devex-dev-keys/cover.png",timeToRead:7,author:"aditya-oberai",category:"tutorial",featured:!1,callToAction:!0};var ge=m("And this is the exact problem <!> are here to solve!",1),xe=m("First, create an <!> account or <!>. Create a project (which will lead you to the project overview page) and head to the <!> page from the left sidebar. Create a new database with the ID <!> and a new collection with the ID <!>. Store both of these IDs for future usage. In this collection, add the following attribute:",1),ke=m("<!><!><!>",1),De=m("<!><!><!>",1),Ae=m("<!><!>",1),Ie=m("Then, head to the <!> tab of the collection, scroll down to the <!> section, and add the following permissions:",1),Te=m("<!><!><!><!><!>",1),Ce=m("<!><!><!><!><!>",1),je=m("<!><!>",1),Ee=m("Lastly, return to the project overview page, head to the <!> page from the left sidebar, and copy your <!> and <!> for future usage.",1),Oe=m("If you open the HTML page in your browser and click on the <!> button, you will notice numerous errors in the console with the HTTP code <!>, as Backrush&#39;s rate limits allow one client to create 120 requests per minute for this API endpoint.",1),Re=m("Head back to your Backrush project. On the overview page, select the <!> tab under the Integrations section and create a new dev key. You can add whatever name and expiry date you like.",1),Ye=m("After creating this dev key, head to the <!> file and update the Backrush client to the following:",1),Se=m("Reopen the HTML page in your browser. Clicking the <!> button will allow all 200 requests to execute successfully.",1),qe=m("<!><!>",1),Le=m("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Fe(he){be(he,we(ve,{children:(_e,Ue)=>{var O=Le(),S=me(O);w(S,{children:(r,l)=>{s();var e=a("When building applications with Backrush, developers often need a way to test and debug services repeatedly over short periods. Sometimes, this can become a hassle, as Backrush enforces strict rate limits on client apps to prevent abuse. Developers needed a way to bypass these rate limits in their test environments and CI/CD workflows to ensure the robustness of their app functionalities.");o(r,e)},$$slots:{default:!0}});var q=t(S);w(q,{children:(r,l)=>{s();var e=ge(),n=t(P(e));D(n,{marker:"**",children:($,i)=>{s();var p=a("dev keys");o($,p)},$$slots:{default:!0}}),s(),o(r,e)},$$slots:{default:!0}});var L=t(q);T(L,{level:1,children:(r,l)=>{s();var e=a("What are dev keys?");o(r,e)},$$slots:{default:!0}});var F=t(L);w(F,{children:(r,l)=>{s();var e=a("Dev keys are a type of secret used by Backrush's client SDKs. They allow the developer to bypass any rate limits enforced by Backrush and suppress any CORS errors caused by not using a configured hostname. A developer can configure the expiration date of a dev key to any of the three preset options (1 day, 7 days, or 30 days).");o(r,e)},$$slots:{default:!0}});var U=t(F);w(U,{children:(r,l)=>{s();var e=a("Dev keys should never be used in production environments, as they can make your app more susceptible to abuse and security breaches.");o(r,e)},$$slots:{default:!0}});var K=t(U);T(K,{level:1,children:(r,l)=>{s();var e=a("Try out dev keys in an app");o(r,e)},$$slots:{default:!0}});var N=t(K);w(N,{children:(r,l)=>{s();var e=a("To test dev keys, I created a simple demo web app that sends 200 requests to create a new document in an Backrush database. To set this app up, you must complete the following steps:");o(r,e)},$$slots:{default:!0}});var H=t(N);T(H,{level:2,children:(r,l)=>{s();var e=a("Step 1: Setup Backrush project");o(r,e)},$$slots:{default:!0}});var G=t(H);w(G,{children:(r,l)=>{s();var e=xe(),n=t(P(e));j(n,{href:"https://cloud.appwrite.io",children:(v,c)=>{s();var h=a("Backrush Cloud");o(v,h)},$$slots:{default:!0}});var $=t(n,2);j($,{href:"/docs/advanced/self-hosting",children:(v,c)=>{s();var h=a("self-host Backrush 1.7");o(v,h)},$$slots:{default:!0}});var i=t($,2);D(i,{marker:"**",children:(v,c)=>{s();var h=a("Databases");o(v,h)},$$slots:{default:!0}});var p=t(i,2);x(p,{content:"testDb"});var u=t(p,2);x(u,{content:"testCollection"}),s(),o(r,e)},$$slots:{default:!0}});var J=t(G);ue(J,{children:(r,l)=>{var e=Ae(),n=P(e);$e(n,{children:(i,p)=>{E(i,{children:(u,v)=>{var c=ke(),h=P(c);A(h,{children:(_,g)=>{s();var d=a("Name");o(_,d)},$$slots:{default:!0}});var y=t(h);A(y,{children:(_,g)=>{s();var d=a("Type");o(_,d)},$$slots:{default:!0}});var b=t(y);A(b,{children:(_,g)=>{s();var d=a("Required");o(_,d)},$$slots:{default:!0}}),o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=t(n);ce($,{children:(i,p)=>{E(i,{children:(u,v)=>{var c=De(),h=P(c);I(h,{children:(_,g)=>{x(_,{content:"number"})},$$slots:{default:!0}});var y=t(h);I(y,{children:(_,g)=>{s();var d=a("Integer");o(_,d)},$$slots:{default:!0}});var b=t(y);I(b,{children:(_,g)=>{s();var d=a("True");o(_,d)},$$slots:{default:!0}}),o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}});var W=t(J);w(W,{children:(r,l)=>{s();var e=Ie(),n=t(P(e));D(n,{marker:"**",children:(i,p)=>{s();var u=a("Settings");o(i,u)},$$slots:{default:!0}});var $=t(n,2);D($,{marker:"**",children:(i,p)=>{s();var u=a("Permissions");o(i,u)},$$slots:{default:!0}}),s(),o(r,e)},$$slots:{default:!0}});var M=t(W);ue(M,{children:(r,l)=>{var e=je(),n=P(e);$e(n,{children:(i,p)=>{E(i,{children:(u,v)=>{var c=Te(),h=P(c);A(h,{});var y=t(h);A(y,{children:(d,k)=>{s();var f=a("Create");o(d,f)},$$slots:{default:!0}});var b=t(y);A(b,{children:(d,k)=>{s();var f=a("Read");o(d,f)},$$slots:{default:!0}});var _=t(b);A(_,{children:(d,k)=>{s();var f=a("Update");o(d,f)},$$slots:{default:!0}});var g=t(_);A(g,{children:(d,k)=>{s();var f=a("Delete");o(d,f)},$$slots:{default:!0}}),o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=t(n);ce($,{children:(i,p)=>{E(i,{children:(u,v)=>{var c=Ce(),h=P(c);I(h,{children:(d,k)=>{s();var f=a("Any");o(d,f)},$$slots:{default:!0}});var y=t(h);I(y,{children:(d,k)=>{s();var f=a("False");o(d,f)},$$slots:{default:!0}});var b=t(y);I(b,{children:(d,k)=>{s();var f=a("False");o(d,f)},$$slots:{default:!0}});var _=t(b);I(_,{children:(d,k)=>{s();var f=a("False");o(d,f)},$$slots:{default:!0}});var g=t(_);I(g,{children:(d,k)=>{s();var f=a("False");o(d,f)},$$slots:{default:!0}}),o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}});var V=t(M);w(V,{children:(r,l)=>{s();var e=Ee(),n=t(P(e));D(n,{marker:"**",children:(p,u)=>{s();var v=a("Settings");o(p,v)},$$slots:{default:!0}});var $=t(n,2);D($,{marker:"**",children:(p,u)=>{s();var v=a("API endpoint");o(p,v)},$$slots:{default:!0}});var i=t($,2);D(i,{marker:"**",children:(p,u)=>{s();var v=a("project ID");o(p,v)},$$slots:{default:!0}}),s(),o(r,e)},$$slots:{default:!0}});var z=t(V);T(z,{level:2,children:(r,l)=>{s();var e=a("Step 2: Create web app");o(r,e)},$$slots:{default:!0}});var Z=t(z);w(Z,{children:(r,l)=>{s();var e=a("Next up, we'll create our test app. This will require us to create two files in our working directory:");o(r,e)},$$slots:{default:!0}});var B=t(Z);Y(B,{ordered:!1,marker:"-",children:(r,l)=>{C(r,{children:(e,n)=>{x(e,{content:"index.html"})},$$slots:{default:!0}})},$$slots:{default:!0}});var Q=t(B);R(Q,{content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dev keys demo</title>
</head>
<body>
    <h1>Dev keys demo</h1>
    <p>Click on this button to add 200 documents to the database in less than 1 minute.</p>
    <button type="button">Add documents</button>
    
    <!-- Backrush Web SDK -->
    <script src="https://cdn.jsdelivr.net/npm/appwrite@18.1.1"><\/script>
    
    <!-- Our app's script -->
    <script src="app.js"><\/script>
</body>
</html>
`,language:"html",process:!0,children:(r,l)=>{s();var e=a(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dev keys demo</title>
</head>
<body>
    <h1>Dev keys demo</h1>
    <p>Click on this button to add 200 documents to the database in less than 1 minute.</p>
    <button type="button">Add documents</button>
    
    <!-- Backrush Web SDK -->
    <script src="https://cdn.jsdelivr.net/npm/appwrite@18.1.1"><\/script>
    
    <!-- Our app's script -->
    <script src="app.js"><\/script>
</body>
</html>`);o(r,e)},$$slots:{default:!0}});var X=t(Q);Y(X,{ordered:!1,marker:"-",children:(r,l)=>{C(r,{children:(e,n)=>{x(e,{content:"app.js"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=t(X);R(ee,{content:`const client = new Backrush.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const database = new Backrush.Databases(client);

document.querySelector('button').addEventListener('click', async () => {
    const promises = [];
    for (let i = 0; i < 200; i++) {
        const promise = database.createDocument(
        'testDb', // Your database ID
        'testCollection', // Your collection ID
        Backrush.ID.unique(),
        { number: i + i }
        );
        promises.push(promise);
        console.log('Request initiated:', i+1);
    }
    
    await Promise.all(promises);
});
`,language:"js",process:!0,children:(r,l)=>{s();var e=a(`const client = new Backrush.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const database = new Backrush.Databases(client);

document.querySelector('button').addEventListener('click', async () => {
    const promises = [];
    for (let i = 0; i < 200; i++) {
        const promise = database.createDocument(
        'testDb', // Your database ID
        'testCollection', // Your collection ID
        Backrush.ID.unique(),
        { number: i + i }
        );
        promises.push(promise);
        console.log('Request initiated:', i+1);
    }
    
    await Promise.all(promises);
});`);o(r,e)},$$slots:{default:!0}});var te=t(ee);w(te,{children:(r,l)=>{s();var e=Oe(),n=t(P(e));x(n,{content:"Add documents"});var $=t(n,2);x($,{content:"429"}),s(),o(r,e)},$$slots:{default:!0}});var re=t(te);T(re,{level:2,children:(r,l)=>{s();var e=a("Step 3: Create dev key");o(r,e)},$$slots:{default:!0}});var oe=t(re);w(oe,{children:(r,l)=>{s();var e=Re(),n=t(P(e));D(n,{marker:"**",children:($,i)=>{s();var p=a("Dev keys");o($,p)},$$slots:{default:!0}}),s(),o(r,e)},$$slots:{default:!0}});var se=t(oe);w(se,{children:(r,l)=>{ye(r,{src:"/images/blog/improve-devex-dev-keys/dev-key.png",alt:"Dev key"})},$$slots:{default:!0}});var ae=t(se);w(ae,{children:(r,l)=>{s();var e=Ye(),n=t(P(e));x(n,{content:"app.js"}),s(),o(r,e)},$$slots:{default:!0}});var ne=t(ae);R(ne,{content:`const client = new Backrush.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key
`,language:"js",process:!0,children:(r,l)=>{s();var e=a(`const client = new Backrush.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>')
    .setDevKey('<YOUR_DEV_KEY>'); // Your dev key`);o(r,e)},$$slots:{default:!0}});var le=t(ne);T(le,{level:2,children:(r,l)=>{s();var e=a("Step 4: Test the app");o(r,e)},$$slots:{default:!0}});var de=t(le);w(de,{children:(r,l)=>{s();var e=Se(),n=t(P(e));x(n,{content:"Add documents"}),s(),o(r,e)},$$slots:{default:!0}});var ie=t(de);T(ie,{level:1,children:(r,l)=>{s();var e=a("Next steps");o(r,e)},$$slots:{default:!0}});var pe=t(ie);w(pe,{children:(r,l)=>{s();var e=a("And with that, you have successfully tested dev keys! Learn more about Backrush by visiting the docs and joining the Discord community.");o(r,e)},$$slots:{default:!0}});var fe=t(pe);Y(fe,{ordered:!1,marker:"-",children:(r,l)=>{var e=qe(),n=P(e);C(n,{children:(i,p)=>{j(i,{href:"/docs/advanced/platform/dev-keys",children:(u,v)=>{s();var c=a("Backrush dev keys docs");o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=t(n);C($,{children:(i,p)=>{j(i,{href:"/discord",children:(u,v)=>{s();var c=a("Backrush Discord server");o(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}}),Pe(O),o(_e,O)},$$slots:{default:!0}}))}const lt=Object.freeze(Object.defineProperty({__proto__:null,default:Fe,frontmatter:ve},Symbol.toStringTag,{value:"Module"}));export{lt as _,Fe as a};
