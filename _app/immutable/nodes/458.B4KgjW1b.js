import{t as p,b as a,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Be,s,f as $,n as r,r as Ve}from"../chunks/NgVQVlRK.js";import{n as Xe}from"../chunks/B4IyMRKX.js";import{H as S}from"../chunks/CXsRaEhZ.js";import{M as E}from"../chunks/hMT8fFzP.js";import{I as Ge}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";import{C as Qe,a as Y}from"../chunks/rEuJ3T1U.js";import{O as Ze,a as et}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as Ke}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as w}from"../chunks/DXp9_3zM.js";import{F as I}from"../chunks/OFUKRh55.js";import{L as tt,I as q}from"../chunks/BhmTgGWB.js";import{P as h}from"../chunks/D8YsId2T.js";import{S as Ne}from"../chunks/yHjwcyUH.js";import{L as j}from"../chunks/yh4_9ChP.js";import{T as Le}from"../chunks/D8BqvLkQ.js";import{T as Je,a as b,b as T,c as Fe,d as C}from"../chunks/BpU_IltG.js";import{A as st}from"../chunks/CqOphJLh.js";const nt={layout:"article",title:"SSR login",description:"How to implement SSR authentication with Backrush"};var rt=p("In client-side rendered web apps, a <!> is used to perform authentication directly from the client&#39;s web browser.",1),ot=p("With server-side rendered web apps, a <!> is used to handle authentication against Backrush. Authentication data is passed from the client&#39;s web browser to your server, and then your server makes requests to Backrush on behalf of the client.",1),at=p("<!><!><!><!><!><!>",1),it=p("Server-side rendering requires a <!> instead of a Client SDK.",1),lt=p("Admin clients should only be used if you need to perform admin actions that bypass permissions or <!>.",1),ct=p("To initialize the admin client, we&#39;ll need to first <!>. The API key should have the following scope in order to perform authentication:",1),ut=p("<!><!><!>",1),dt=p("<!><!><!>",1),pt=p("<!><!>",1),$t=p("<!><!>",1),ht=p("It is important to use an API key, as this will allow your server requests to bypass <!>. If you don&#39;t use an API key, your server will be rate limited as if it were a client from a single IP address.",1),vt=p("You should create a new client for each request and <!> share the client between requests.",1),_t=p("<!><!>",1),mt=p("Use the <!> property of the session object as the cookie value. The <!> property of the session object should be used as the cookie&#39;s max age. Here&#39;s an example with Express and PHP, but the same concepts apply to most frameworks.",1),ft=p("<!><!>",1),wt=p("We also recommend using the <!>, <!>, and <!> cookie options to ensure that the cookie is only sent over HTTPS, and is not accessible to JavaScript. This will prevent XSS attacks.",1),Pt=p("Once a user has a session cookie, which will be set by the browser when it receives the <!> endpoint&#39;s response, they can use it to make authenticated requests to your server.",1),gt=p("To enable this, you will need to read the cookie value from the request, and then pass it to the Backrush client, using the <!> helper. When the browser makes a request to your domain&#39;s endpoints, it will automatically include session cookies.",1),At=p("<!><!>",1),It=p("Unauthenticated requests are subject to <!>. Normally, rate limits are applied by an abuse key, which is usually a combination of IP and another factor like user ID. When you make unauthenticated requests from your server, however, all requests originate from the same IP and no user ID is provided. This means that all unauthenticated requests from your server will be <!>.",1),yt=p("<!><!>",1),kt=p("Uses the <!> method to create a guest session.",1),xt=p("<!><!>",1),St=p("<!><!>",1),Ct=p("<!><!>",1),Et=p("<!><!>",1),Ot=p("<!><!><!><!>",1),Rt=p("<!><!>",1),jt=p("You can create a guest session using the <!> method. This will create a session for unauthenticated users, and each user will have their own rate limit.",1),bt=p("<!><!>",1),qt=p("Backrush sessions record some information about the client. To set this information in a server-side context use the <!> to set the end-user&#39;s user agent. While optional, these can be useful for debugging and security purposes.",1),Tt=p("<!><!>",1),Yt=p("Create an initial endpoint that redirects the user to the OAuth2 provider&#39;s authentication page using Backrush&#39;s <!> method. After authenticating with the provider, the user will be redirected to the <!> URL with <!> and <!> URL parameters.",1),Dt=p("<!><!>",1),Ut=p("Next, create a success callback endpoint that receives the <!> and <!> URL parameters, and then calls <!> on the server side. This endpoint returns a session object, which you can store in a cookie.",1),Gt=p("<!><!>",1),Kt=p("<!><!><!><!>",1),Nt=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ps(ze){st(ze,Xe(nt,{children:(He,Lt)=>{var D=Nt(),U=Be(D);h(U,{children:(t,l)=>{r();var e=a("Server-side rendering (SSR) is fully supported with Backrush. You can use Backrush with many SSR-oriented frameworks, such as Next.js, SvelteKit, Nuxt, Gatsby, Remix, and more.");n(t,e)},$$slots:{default:!0}});var G=s(U);h(G,{children:(t,l)=>{r();var e=a("SSR is a technique where the server renders a web page and sending the fully rendered page to the client's web browser. This is in contrast to client-side rendering (CSR), where the client's web browser renders the page using JavaScript.");n(t,e)},$$slots:{default:!0}});var K=s(G);h(K,{children:(t,l)=>{r();var e=a("This guide will walk you through the process of implementing an SSR application with Backrush.");n(t,e)},$$slots:{default:!0}});var N=s(K);S(N,{id:"ssr-auth-flow",level:1,children:(t,l)=>{r();var e=a("SSR authentication flow");n(t,e)},$$slots:{default:!0}});var L=s(N);h(L,{children:(t,l)=>{r();var e=rt(),o=s($(e));j(o,{href:"/docs/sdks#client",children:(c,i)=>{r();var d=a("Client SDK");n(c,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var J=s(L);h(J,{children:(t,l)=>{r();var e=ot(),o=s($(e));j(o,{href:"/docs/sdks#server",children:(c,i)=>{r();var d=a("Server SDK");n(c,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var F=s(J);h(F,{children:(t,l)=>{r();var e=a("Here's a high-level overview of the authentication flow:");n(t,e)},$$slots:{default:!0}});var z=s(F);tt(z,{ordered:!0,marker:".",children:(t,l)=>{var e=at(),o=$(e);q(o,{children:(v,P)=>{r();var _=a("The user enters their credentials in their web browser.");n(v,_)},$$slots:{default:!0}});var c=s(o);q(c,{children:(v,P)=>{r();var _=a("The browser sends the credentials to your server.");n(v,_)},$$slots:{default:!0}});var i=s(c);q(i,{children:(v,P)=>{r();var _=a("Your server uses the Server SDK to authenticate the user with Backrush.");n(v,_)},$$slots:{default:!0}});var d=s(i);q(d,{children:(v,P)=>{r();var _=a("If the authentication is successful, your server sends a session cookie to the client's web browser.");n(v,_)},$$slots:{default:!0}});var u=s(d);q(u,{children:(v,P)=>{r();var _=a("The client's web browser sends the session cookie to your server with subsequent request.");n(v,_)},$$slots:{default:!0}});var x=s(u);q(x,{children:(v,P)=>{r();var _=a("Your server uses the session cookie to make authenticated requests to Backrush on behalf of the client.");n(v,_)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var H=s(z);Ze(H,{children:(t,l)=>{h(t,{children:(e,o)=>{Ke(e,{src:"/images/docs/auth/ssr/dark/ssr.png",alt:"CSR vs SSR flow diagram"})},$$slots:{default:!0}})}});var M=s(H);et(M,{children:(t,l)=>{h(t,{children:(e,o)=>{Ke(e,{src:"/images/docs/auth/ssr/ssr.png",alt:"CSR vs SSR flow diagram"})},$$slots:{default:!0}})}});var W=s(M);S(W,{id:"initialize-clients",level:1,children:(t,l)=>{r();var e=a("Initialize clients");n(t,e)},$$slots:{default:!0}});var B=s(W);Ge(B,{title:"Server SDK required",children:(t,l)=>{h(t,{children:(e,o)=>{r();var c=it(),i=s($(c));j(i,{href:"/docs/sdks#server",children:(d,u)=>{r();var x=a("Server SDK");n(d,x)},$$slots:{default:!0}}),r(),n(e,c)},$$slots:{default:!0}})}});var V=s(B);h(V,{children:(t,l)=>{r();var e=a("In SSR, your server-side application will be making authentication requests to Backrush and passing session cookies to your client-side app on the browser.");n(t,e)},$$slots:{default:!0}});var X=s(V);h(X,{children:(t,l)=>{r();var e=a("We'll need to initialize two Backrush clients, one for admin requests and one for session-based requests.");n(t,e)},$$slots:{default:!0}});var Q=s(X);S(Q,{id:"admin-client",level:2,children:(t,l)=>{r();var e=a("Admin client");n(t,e)},$$slots:{default:!0}});var Z=s(Q);Ge(Z,{title:"Admin clients",children:(t,l)=>{h(t,{children:(e,o)=>{r();var c=lt(),i=s($(c));j(i,{href:"#rate-limits",children:(d,u)=>{r();var x=a("unauthenticated requests that bypass rate limits");n(d,x)},$$slots:{default:!0}}),r(),n(e,c)},$$slots:{default:!0}})}});var ee=s(Z);h(ee,{children:(t,l)=>{r();var e=ct(),o=s($(e));j(o,{href:"/docs/advanced/platform/api-keys#create-api-key",children:(c,i)=>{r();var d=a("generate an API key");n(c,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var te=s(ee);Le(te,{children:(t,l)=>{var e=pt(),o=$(e);Je(o,{children:(i,d)=>{b(i,{children:(u,x)=>{var v=ut(),P=$(v);T(P,{width:120,children:(g,m)=>{r();var f=a("Category");n(g,f)},$$slots:{default:!0}});var _=s(P);T(_,{children:(g,m)=>{r();var f=a("Required scopes");n(g,f)},$$slots:{default:!0}});var y=s(_);T(y,{children:(g,m)=>{r();var f=a("Purpose");n(g,f)},$$slots:{default:!0}}),n(u,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=s(o);Fe(c,{children:(i,d)=>{b(i,{children:(u,x)=>{var v=dt(),P=$(v);C(P,{children:(g,m)=>{r();var f=a("Sessions");n(g,f)},$$slots:{default:!0}});var _=s(P);C(_,{children:(g,m)=>{w(g,{content:"sessions.write"})},$$slots:{default:!0}});var y=s(_);C(y,{children:(g,m)=>{r();var f=a("Allows API key to create, update, and delete sessions.");n(g,f)},$$slots:{default:!0}}),n(u,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var se=s(te);E(se,{children:(t,l)=>{var e=$t(),o=$(e);I(o,{content:`import { Client } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`import { Client } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<YOUR_API_KEY>');                   // Your secret API key


`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<YOUR_API_KEY>');                   // Your secret API key`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var ne=s(se);h(ne,{children:(t,l)=>{r();var e=ht(),o=s($(e));j(o,{href:"/docs/advanced/platform/rate-limits",children:(c,i)=>{r();var d=a("rate limits");n(c,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var re=s(ne);S(re,{id:"session-client",level:2,children:(t,l)=>{r();var e=a("Session client");n(t,e)},$$slots:{default:!0}});var oe=s(re);h(oe,{children:(t,l)=>{r();var e=a("The session client will be used to make requests to Backrush on behalf of the end-user. It will be initialized with the session, usually stored within a cookie.");n(t,e)},$$slots:{default:!0}});var ae=s(oe);h(ae,{children:(t,l)=>{r();var e=vt(),o=s($(e));Ne(o,{marker:"**",children:(c,i)=>{r();var d=a("never");n(c,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var ie=s(ae);E(ie,{children:(t,l)=>{var e=_t(),o=$(e);I(o,{content:`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`$sessionClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');            // Your project ID

$session = $_COOKIE['session']; // Get the session cookie from the request
if ($session) {
    $sessionClient->setSession($session);
}
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`$sessionClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');            // Your project ID

$session = $_COOKIE['session']; // Get the session cookie from the request
if ($session) {
    $sessionClient->setSession($session);
}`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var le=s(ie);S(le,{id:"creating-sessions",level:1,children:(t,l)=>{r();var e=a("Creating email/password sessions");n(t,e)},$$slots:{default:!0}});var ce=s(le);h(ce,{children:(t,l)=>{r();var e=a("The most straightforward type of session to integrate is email/password.");n(t,e)},$$slots:{default:!0}});var ue=s(ce);h(ue,{children:(t,l)=>{r();var e=a("Create an endpoint using your server's framework of choice that accepts a username and password, and then makes a request to Backrush to create a session. Once you have a session object, you can store it in a cookie. This will allow your users make authenticated requests to the Backrush API from your server.");n(t,e)},$$slots:{default:!0}});var de=s(ue);h(de,{children:(t,l)=>{r();var e=mt(),o=s($(e));w(o,{content:"secret"});var c=s(o,2);w(c,{content:"expire"}),r(),n(t,e)},$$slots:{default:!0}});var pe=s(de);E(pe,{children:(t,l)=>{var e=ft(),o=$(e);I(o,{content:`import express from 'express';

// Initialize admin client here
// ...

app.post('/login', async (req, res) => {
    // Get email and password from request
    const { email, password } = req.body;

    const account = new Account(adminClient);

    try {
        // Create the session using the Backrush client
        const session = await account.createEmailPasswordSession(email, password);

        // Set the session cookie
        res.cookie('session', session.secret, { // use the session secret as the cookie value
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(session.expire),
            path: '/',
        });

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`import express from 'express';

// Initialize admin client here
// ...

app.post('/login', async (req, res) => {
    // Get email and password from request
    const { email, password } = req.body;

    const account = new Account(adminClient);

    try {
        // Create the session using the Backrush client
        const session = await account.createEmailPasswordSession(email, password);

        // Set the session cookie
        res.cookie('session', session.secret, { // use the session secret as the cookie value
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(session.expire),
            path: '/',
        });

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php
// Initialize admin client here
// ...

// Get email and password from request
$email = $_POST['email'];
$password = $_POST['password'];

try {
    $account = new Account($adminClient);

    // Create the session using the Backrush client
    $session = $account->createEmailPasswordSession($email, $password);

    // Set the session cookie
    setcookie('session', $session['secret'], [
        'httpOnly' => true,
        'secure' => true,
        'sameSite' => 'strict',
        'expires' => strtotime($session['expire']),
        'path' => '/',
    ]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php
// Initialize admin client here
// ...

// Get email and password from request
$email = $_POST['email'];
$password = $_POST['password'];

try {
    $account = new Account($adminClient);

    // Create the session using the Backrush client
    $session = $account->createEmailPasswordSession($email, $password);

    // Set the session cookie
    setcookie('session', $session['secret'], [
        'httpOnly' => true,
        'secure' => true,
        'sameSite' => 'strict',
        'expires' => strtotime($session['expire']),
        'path' => '/',
    ]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var $e=s(pe);h($e,{children:(t,l)=>{r();var e=wt(),o=s($(e));w(o,{content:"httpOnly"});var c=s(o,2);w(c,{content:"secure"});var i=s(c,2);w(i,{content:"sameSite"}),r(),n(t,e)},$$slots:{default:!0}});var he=s($e);S(he,{id:"making-authenticated-requests",level:1,children:(t,l)=>{r();var e=a("Making authenticated requests");n(t,e)},$$slots:{default:!0}});var ve=s(he);h(ve,{children:(t,l)=>{r();var e=Pt(),o=s($(e));w(o,{content:"/login"}),r(),n(t,e)},$$slots:{default:!0}});var _e=s(ve);h(_e,{children:(t,l)=>{r();var e=gt(),o=s($(e));w(o,{content:"setSession"}),r(),n(t,e)},$$slots:{default:!0}});var me=s(_e);E(me,{children:(t,l)=>{var e=At(),o=$(e);I(o,{content:`// Initialize the session client here

app.get('/user', async (req, res) => {
    // First, read the session cookie from the request
    const session = req.cookies.session;

    // If the session cookie is not present, return an error
    if (!session) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    // Pass the session cookie to the Backrush client
    sessionClient.setSession(session);

    // Now, you can make authenticated requests to the Backrush API
    const account = new Account(sessionClient);
    try {
        const user = await account.get();

        res.status(200).json({ success: true, user });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`// Initialize the session client here

app.get('/user', async (req, res) => {
    // First, read the session cookie from the request
    const session = req.cookies.session;

    // If the session cookie is not present, return an error
    if (!session) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    // Pass the session cookie to the Backrush client
    sessionClient.setSession(session);

    // Now, you can make authenticated requests to the Backrush API
    const account = new Account(sessionClient);
    try {
        const user = await account.get();

        res.status(200).json({ success: true, user });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php
// Initialize the session client here

// First, read the session cookie from the request
$session = $_COOKIE['session'];

// If the session cookie is not present, return an error
if (!$session) {
    return http_response_code(401);
}

// Pass the session cookie to the Backrush client
$sessionClient->setSession($session);
$account = new Account($sessionClient);

// Now, you can make authenticated requests to the Backrush API
try {
    $user = $account->get();

    echo json_encode(['success' => true, 'user' => $user]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php
// Initialize the session client here

// First, read the session cookie from the request
$session = $_COOKIE['session'];

// If the session cookie is not present, return an error
if (!$session) {
    return http_response_code(401);
}

// Pass the session cookie to the Backrush client
$sessionClient->setSession($session);
$account = new Account($sessionClient);

// Now, you can make authenticated requests to the Backrush API
try {
    $user = $account->get();

    echo json_encode(['success' => true, 'user' => $user]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var fe=s(me);S(fe,{id:"rate-limits",level:1,children:(t,l)=>{r();var e=a("Rate limits");n(t,e)},$$slots:{default:!0}});var we=s(fe);h(we,{children:(t,l)=>{r();var e=It(),o=s($(e));j(o,{href:"/docs/advanced/platform/rate-limits",children:(i,d)=>{r();var u=a("rate limits");n(i,u)},$$slots:{default:!0}});var c=s(o,2);Ne(c,{marker:"**",children:(i,d)=>{r();var u=a("subject to the same rate limits");n(i,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Pe=s(we);h(Pe,{children:(t,l)=>{r();var e=a("These rate limits protect your Backrush server from abuse, if you need to make unauthenticated requests from your server, there are ways to bypass rate limits.");n(t,e)},$$slots:{default:!0}});var ge=s(Pe);S(ge,{id:"making-unauthenticated-requests",level:1,children:(t,l)=>{r();var e=a("Making unauthenticated requests");n(t,e)},$$slots:{default:!0}});var Ae=s(ge);h(Ae,{children:(t,l)=>{r();var e=a("Unauthenticated requests are used for displaying information to users before they log in. For example some apps may display all public posts on the home page, and only show private posts to logged-in users.");n(t,e)},$$slots:{default:!0}});var Ie=s(Ae);h(Ie,{children:(t,l)=>{r();var e=a("There are two ways to make unauthenticated requests:");n(t,e)},$$slots:{default:!0}});var ye=s(Ie);Le(ye,{children:(t,l)=>{var e=Rt(),o=$(e);Je(o,{children:(i,d)=>{b(i,{children:(u,x)=>{var v=yt(),P=$(v);T(P,{children:(y,g)=>{r();var m=a("Guest sessions");n(y,m)},$$slots:{default:!0}});var _=s(P);T(_,{children:(y,g)=>{r();var m=a("Admin clients");n(y,m)},$$slots:{default:!0}}),n(u,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=s(o);Fe(c,{children:(i,d)=>{var u=Ot(),x=$(u);b(x,{children:(y,g)=>{var m=xt(),f=$(m);C(f,{children:(k,R)=>{r();var A=kt(),We=s($(A));w(We,{content:"createAnonymousSession"}),r(),n(k,A)},$$slots:{default:!0}});var O=s(f);C(O,{children:(k,R)=>{r();var A=a("Uses an API key to bypass rate limits.");n(k,A)},$$slots:{default:!0}}),n(y,m)},$$slots:{default:!0}});var v=s(x);b(v,{children:(y,g)=>{var m=St(),f=$(m);C(f,{children:(k,R)=>{r();var A=a("Creates a session for unauthenticated users so each user has their own rate limit.");n(k,A)},$$slots:{default:!0}});var O=s(f);C(O,{children:(k,R)=>{r();var A=a("Bypasses rate limits completely because API keys are not limited.");n(k,A)},$$slots:{default:!0}}),n(y,m)},$$slots:{default:!0}});var P=s(v);b(P,{children:(y,g)=>{var m=Ct(),f=$(m);C(f,{children:(k,R)=>{r();var A=a("Still respects access permissions.");n(k,A)},$$slots:{default:!0}});var O=s(f);C(O,{children:(k,R)=>{r();var A=a("Also bypasses access permissions.");n(k,A)},$$slots:{default:!0}}),n(y,m)},$$slots:{default:!0}});var _=s(P);b(_,{children:(y,g)=>{var m=Et(),f=$(m);C(f,{children:(k,R)=>{r();var A=a("Can be turned into a full session later by creating an account.");n(k,A)},$$slots:{default:!0}});var O=s(f);C(O,{children:(k,R)=>{r();var A=a("Cannot be later turned into a full session.");n(k,A)},$$slots:{default:!0}}),n(y,m)},$$slots:{default:!0}}),n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var ke=s(ye);h(ke,{children:(t,l)=>{r();var e=jt(),o=s($(e));w(o,{content:"createAnonymousSession"}),r(),n(t,e)},$$slots:{default:!0}});var xe=s(ke);E(xe,{children:(t,l)=>{var e=bt(),o=$(e);I(o,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const account = new sdk.Account(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = account.createAnonymousSession();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const account = new sdk.Account(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = account.createAnonymousSession();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Account;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
;

$account = new Account($client);

$result = $account->createAnonymousSession();
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php

use Backrush\\Client;
use Backrush\\Services\\Account;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>') // Your project ID
;

$account = new Account($client);

$result = $account->createAnonymousSession();`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Se=s(xe);S(Se,{id:"forwarding-user-agent",level:1,children:(t,l)=>{r();var e=a("Forwarding user agent");n(t,e)},$$slots:{default:!0}});var Ce=s(Se);h(Ce,{children:(t,l)=>{r();var e=qt(),o=s($(e));w(o,{content:"setForwardedUserAgent"}),r(),n(t,e)},$$slots:{default:!0}});var Ee=s(Ce);E(Ee,{children:(t,l)=>{var e=Tt(),o=$(e);I(o,{content:`client.setForwardedUserAgent(req.headers['user-agent']);
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a("client.setForwardedUserAgent(req.headers['user-agent']);");n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php
$client->setForwardedUserAgent($_SERVER['HTTP_USER_AGENT']);
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php
$client->setForwardedUserAgent($_SERVER['HTTP_USER_AGENT']);`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Oe=s(Ee);S(Oe,{id:"oauth2",level:1,children:(t,l)=>{r();var e=a("OAuth2");n(t,e)},$$slots:{default:!0}});var Re=s(Oe);h(Re,{children:(t,l)=>{r();var e=a("Server-side OAuth2 authentication requires two server endpoints:");n(t,e)},$$slots:{default:!0}});var je=s(Re);h(je,{children:(t,l)=>{r();var e=Yt(),o=s($(e));w(o,{content:"createOAuth2Token"});var c=s(o,2);w(c,{content:"success"});var i=s(c,2);w(i,{content:"userId"});var d=s(i,2);w(d,{content:"secret"}),r(),n(t,e)},$$slots:{default:!0}});var be=s(je);E(be,{children:(t,l)=>{var e=Dt(),o=$(e);I(o,{content:`import { Client, Account, OAuthProvider } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<API_KEY>');                        // Your secret API key

app.get('/oauth', async (req, res) => {
    const account = new Account(adminClient);

    const redirectUrl = await account.createOAuth2Token(
        OAuthProvider.Github,                // Provider
        'https://example.com/oauth/success', // Success URL
        'https://example.com/oauth/failure', // Failure URL
    );

    res.redirect(redirectUrl);
});
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`import { Client, Account, OAuthProvider } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<API_KEY>');                        // Your secret API key

app.get('/oauth', async (req, res) => {
    const account = new Account(adminClient);

    const redirectUrl = await account.createOAuth2Token(
        OAuthProvider.Github,                // Provider
        'https://example.com/oauth/success', // Success URL
        'https://example.com/oauth/failure', // Failure URL
    );

    res.redirect(redirectUrl);
});`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php
use Backrush\\Client;
use Backrush\\Services\\Account;
use Backrush\\Enums\\OAuthProvider;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<API_KEY>');                        // Your secret API key

$account = new Account($adminClient);

$redirectUrl = $account->createOAuth2Token(
    OAuthProvider::GITHUB(),
    'https://example.com/oauth/success', // Success URL
    'https://example.com/oauth/failure', // Failure URL
);

header('Location' . $redirectUrl);
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php
use Backrush\\Client;
use Backrush\\Services\\Account;
use Backrush\\Enums\\OAuthProvider;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<API_KEY>');                        // Your secret API key

$account = new Account($adminClient);

$redirectUrl = $account->createOAuth2Token(
    OAuthProvider::GITHUB(),
    'https://example.com/oauth/success', // Success URL
    'https://example.com/oauth/failure', // Failure URL
);

header('Location' . $redirectUrl);`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var qe=s(be);h(qe,{children:(t,l)=>{r();var e=Ut(),o=s($(e));w(o,{content:"userId"});var c=s(o,2);w(c,{content:"secret"});var i=s(c,2);w(i,{content:"createSession"}),r(),n(t,e)},$$slots:{default:!0}});var Te=s(qe);E(Te,{children:(t,l)=>{var e=Gt(),o=$(e);I(o,{content:`app.get('/oauth/success', async (req, res) => {
    const account = new Account(adminClient);

    // Get the userId and secret from the URL parameters
    const { userId, secret } = req.query;

    try {
        // Create the session using the Backrush client
        const session = await account.createSession(userId, secret);

        // Set the session cookie
        res.cookie('session', session.secret, { // Use the session secret as the cookie value
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: sesion.expire
            path: '/',
        });

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});
`,language:"server-nodejs",process:!0,children:(i,d)=>{r();var u=a(`app.get('/oauth/success', async (req, res) => {
    const account = new Account(adminClient);

    // Get the userId and secret from the URL parameters
    const { userId, secret } = req.query;

    try {
        // Create the session using the Backrush client
        const session = await account.createSession(userId, secret);

        // Set the session cookie
        res.cookie('session', session.secret, { // Use the session secret as the cookie value
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: sesion.expire
            path: '/',
        });

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ success: false, error: e.message });
    }
});`);n(i,u)},$$slots:{default:!0}});var c=s(o);I(c,{content:`<?php
use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<API_KEY>');                        // Your secret API key

$account = new Account($adminClient);

// Get the userId and secret from the URL parameters
$userId = $_GET['userId'];
$secret = $_GET['secret'];

try {
    // Create the session using the Backrush client
    $session = $account->createSession($userId, $secret);

    // Set the session cookie
    setcookie('session', $session['secret'], [
        'httpOnly' => true,
        'secure' => true,
        'sameSite' => 'strict',
        'expires' => strtotime($session['expire']),
        'path' => '/',
    ]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
`,language:"php",process:!0,children:(i,d)=>{r();var u=a(`<?php
use Backrush\\Client;
use Backrush\\Services\\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<API_KEY>');                        // Your secret API key

$account = new Account($adminClient);

// Get the userId and secret from the URL parameters
$userId = $_GET['userId'];
$secret = $_GET['secret'];

try {
    // Create the session using the Backrush client
    $session = $account->createSession($userId, $secret);

    // Set the session cookie
    setcookie('session', $session['secret'], [
        'httpOnly' => true,
        'secure' => true,
        'sameSite' => 'strict',
        'expires' => strtotime($session['expire']),
        'path' => '/',
    ]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}`);n(i,u)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Ye=s(Te);h(Ye,{children:(t,l)=>{r();var e=a("Now the cookie is set, it will be passed to the server with subsequent requests, and you can use it to make authenticated requests to the Backrush API on behalf of the end-user.");n(t,e)},$$slots:{default:!0}});var De=s(Ye);S(De,{id:"tutorials",level:1,children:(t,l)=>{r();var e=a("Tutorials");n(t,e)},$$slots:{default:!0}});var Ue=s(De);h(Ue,{children:(t,l)=>{r();var e=a("If you'd like to see SSR authentication implemented in a full auth example, see these tutorials.");n(t,e)},$$slots:{default:!0}});var Me=s(Ue);Qe(Me,{children:(t,l)=>{var e=Kt(),o=$(e);Y(o,{href:"/docs/tutorials/nextjs-ssr-auth",icon:"icon-nextjs",title:"Next.js SSR"});var c=s(o);Y(c,{href:"/docs/tutorials/sveltekit-ssr-auth",icon:"icon-svelte",title:"SvelteKit SSR"});var i=s(c);Y(i,{href:"/docs/tutorials/nuxt-ssr-auth",icon:"icon-nuxt",title:"Nuxt SSR"});var d=s(i);Y(d,{href:"/docs/tutorials/astro-ssr-auth",icon:"icon-astro",title:"Astro SSR"}),n(t,e)}}),Ve(D),n(He,D)},$$slots:{default:!0}}))}export{ps as component};
