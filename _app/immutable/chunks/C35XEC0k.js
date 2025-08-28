import{t as d,b as a,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as xe,s,f as $,n as o,r as Se}from"./NgVQVlRK.js";import{n as Ce}from"./B4IyMRKX.js";import{H as m}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import{I as ye}from"./BypEz2Fd.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as f}from"./DXp9_3zM.js";import{F as x}from"./OFUKRh55.js";import{L as b,I as _}from"./BhmTgGWB.js";import{P as l}from"./D8YsId2T.js";import{S as be}from"./yHjwcyUH.js";import{L as g}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ke}from"./CEkRzcqJ.js";const _e={layout:"post",title:"Introducing support for server-side rendering",description:"Server-side rendering (SSR) is now fully supported with Backrush allowing more flexibility to build how you want.",date:"2024-02-27T00:00:00.000Z",cover:"/images/blog/ssr-announcement.png",timeToRead:7,author:"dennis-ivy",category:"product, announcement",featured:!1};var Ie=d("The problem we faced was that there was no way to access a session secret when using authentication methods. When using methods such as <!>, Backrush’s web SDK automatically stores the session in the browser&#39;s cookies and does not make it available to you. For client-side rendering, this is a non-issue since we don&#39;t need to access the session manually. However, when it comes to SSR we need a way to access a session and set it in the server&#39;s cookies for subsequent requests.",1),Ae=d("As you get started with SSR it’s important to note that all methods we will be working with are based on Backrush’s server SDKs. In the examples below, we will use the <!>",1),Ee=d("It’s also recommended that as you follow along with this article, you do not install any client SDK’s as that may lead to confusion. All examples use <!>.",1),Re=d("To solve this issue, all existing server SDK methods that create a session now return a <!> attribute. The following methods are:",1),Te=d("<!><!><!>",1),je=d("When using the Backrush SDK, you can use the new <!> method to authenticate a user for any request.",1),Oe=d("A session client will allow us to make requests as an authenticated end-user with the <!> helper method.",1),qe=d("<!> - creates a session and sets a session cookie",1),De=d("<!> - retrieves session from cookies and authenticates the request",1),We=d("<!><!>",1),Ke=d("First, we’ll need to configure our SDK and create two methods to initiate our clients in <!>. We&#39;ll use environment variables to store our Backrush endpoint, project ID, and API key.",1),Ne=d("Now, in the <!> route, we can use the admin client to generate a session and set a cookie.",1),Ue=d("<!><!><!><!><!>",1),Je=d("SSR will be available as part of the Backrush 1.5 release on <!> and <!> in March 2024.",1),Le=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ge(we){ke(we,Ce(_e,{children:(Pe,Be)=>{var y=Le(),k=xe(y);l(k,{children:(t,n)=>{o();var e=a("We're excited to introduce support for server-side rendering (SSR) authentication patterns. This change enhances the developer experience when building with popular frameworks that provide SSR as an option, such as Next.js, SvelteKit, Nuxt, Astro, Remix, and more.");r(t,e)},$$slots:{default:!0}});var I=s(k);l(I,{children:(t,n)=>{o();var e=a("Until now, Backrush’s authentication system has been optimized for client-side rendering, which worked well with single page applications (SPAs), but had limitations on how SSR could be implemented. While it was possible to implement SSR authentication, it was hacky and undocumented. In the latest release, we are officially introducing support for SSR with new methods and workflows to the server SDK's.");r(t,e)},$$slots:{default:!0}});var A=s(I);m(A,{level:1,children:(t,n)=>{o();var e=a("Understanding past limitations");r(t,e)},$$slots:{default:!0}});var E=s(A);l(E,{children:(t,n)=>{o();var e=a("To understand the new changes and workflows, let's first take a step back and address the challenges we aimed to solve in this new release.");r(t,e)},$$slots:{default:!0}});var R=s(E);l(R,{children:(t,n)=>{o();var e=a("When building applications with SSR, we need a way to generate and store a session secret server-side to protect API routes and pages and a way to make authenticated requests.");r(t,e)},$$slots:{default:!0}});var T=s(R);l(T,{children:(t,n)=>{o();var e=Ie(),i=s($(e));f(i,{content:"createEmailPasswordSession"}),o(),r(t,e)},$$slots:{default:!0}});var j=s(T);m(j,{level:1,children:(t,n)=>{o();var e=a("Getting started with SSR");r(t,e)},$$slots:{default:!0}});var O=s(j);l(O,{children:(t,n)=>{o();var e=Ae(),i=s($(e));g(i,{href:"/docs/sdks#server",children:(c,h)=>{o();var u=a("Node JS SDK.");r(c,u)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var q=s(O);l(q,{children:(t,n)=>{o();var e=Ee(),i=s($(e));f(i,{content:"node-appwrite"}),o(),r(t,e)},$$slots:{default:!0}});var D=s(q);x(D,{content:`npm install node-appwrite
`,language:"bash",process:!0,children:(t,n)=>{o();var e=a("npm install node-appwrite");r(t,e)},$$slots:{default:!0}});var W=s(D);m(W,{level:2,children:(t,n)=>{o();var e=a("Create sessions server-side");r(t,e)},$$slots:{default:!0}});var K=s(W);l(K,{children:(t,n)=>{o();var e=Re(),i=s($(e));f(i,{content:"secret"}),o(),r(t,e)},$$slots:{default:!0}});var N=s(K);b(N,{ordered:!1,marker:"-",children:(t,n)=>{var e=Te(),i=$(e);_(i,{children:(u,p)=>{f(u,{content:"account.createEmailPasswordSession(email, password)"})},$$slots:{default:!0}});var c=s(i);_(c,{children:(u,p)=>{f(u,{content:"account.createAnonymousSession()"})},$$slots:{default:!0}});var h=s(c);_(h,{children:(u,p)=>{f(u,{content:"account.createSession(userId, token)"})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var U=s(N);l(U,{children:(t,n)=>{o();var e=a("You can use these methods now to create a session, and to set a session cookie on your domain.");r(t,e)},$$slots:{default:!0}});var J=s(U);x(J,{content:`const session = account.createEmailPasswordSession(email, password)

console.log(session.secret) // Output: 'eyJpZCI...sdfahfkjjy'
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`const session = account.createEmailPasswordSession(email, password)

console.log(session.secret) // Output: 'eyJpZCI...sdfahfkjjy'`);r(t,e)},$$slots:{default:!0}});var L=s(J);m(L,{level:2,children:(t,n)=>{o();var e=a("Using session secrets");r(t,e)},$$slots:{default:!0}});var G=s(L);l(G,{children:(t,n)=>{o();var e=a("With a session cookie set, we can now authenticate users and protect routes.");r(t,e)},$$slots:{default:!0}});var B=s(G);l(B,{children:(t,n)=>{o();var e=je(),i=s($(e));f(i,{content:"setSession"}),o(),r(t,e)},$$slots:{default:!0}});var Y=s(B);x(Y,{content:`client.setSession(session.secret)
const currentUser = await account.get()
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`client.setSession(session.secret)
const currentUser = await account.get()`);r(t,e)},$$slots:{default:!0}});var F=s(Y);ye(F,{title:"Backrush client security",children:(t,n)=>{l(t,{children:(e,i)=>{o();var c=a("It’s important to note that the client instance should be re-created for every request. Failure to do so on your server SDK could result in leaked/shared session cookies between request");r(e,c)},$$slots:{default:!0}})}});var H=s(F);m(H,{level:2,children:(t,n)=>{o();var e=a("Admin and Session Clients");r(t,e)},$$slots:{default:!0}});var z=s(H);l(z,{children:(t,n)=>{o();var e=a("With the new authentication patterns for SSR, you’ll need to create two different types of instances of an Backrush client when initializing the SDK. An admin client for performing admin request, and a session client for performing authenticated request on behalf of an end user.");r(t,e)},$$slots:{default:!0}});var Z=s(z);m(Z,{level:3,children:(t,n)=>{o();var e=a("Admin Client");r(t,e)},$$slots:{default:!0}});var M=s(Z);l(M,{children:(t,n)=>{o();var e=a("The admin client will need to be initialized with an API key in order to bypass rate limits when performing unauthenticated request or when we need to perform actions that bypass permissions. Without an API key our server will be rate limited when trying to make request to certain endpoints.");r(t,e)},$$slots:{default:!0}});var V=s(M);x(V,{content:`import { Client } from "node-appwrite"

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<YOUR_API_KEY>')
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`import { Client } from "node-appwrite"

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<YOUR_API_KEY>')`);r(t,e)},$$slots:{default:!0}});var Q=s(V);m(Q,{level:3,children:(t,n)=>{o();var e=a("Session Client");r(t,e)},$$slots:{default:!0}});var X=s(Q);l(X,{children:(t,n)=>{o();var e=Oe(),i=s($(e));f(i,{content:"setSession"}),o(),r(t,e)},$$slots:{default:!0}});var ee=s(X);x(ee,{content:`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')

const session = req.cookies.session

if (session) {
    sessionClient.setSession(session)
}

const user = await account.get()
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')

const session = req.cookies.session

if (session) {
    sessionClient.setSession(session)
}

const user = await account.get()`);r(t,e)},$$slots:{default:!0}});var te=s(ee);m(te,{level:1,children:(t,n)=>{o();var e=a("Seeing it in action");r(t,e)},$$slots:{default:!0}});var se=s(te);l(se,{children:(t,n)=>{o();var e=a("Using Next.js, let’s see how we can create an application with two endpoints:");r(t,e)},$$slots:{default:!0}});var oe=s(se);b(oe,{ordered:!1,marker:"-",children:(t,n)=>{var e=We(),i=$(e);_(i,{children:(h,u)=>{var p=qe(),v=$(p);f(v,{content:"/api/signin"}),o(),r(h,p)},$$slots:{default:!0}});var c=s(i);_(c,{children:(h,u)=>{var p=De(),v=$(p);f(v,{content:"/api/user"}),o(),r(h,p)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var re=s(oe);l(re,{children:(t,n)=>{o();var e=a("We'll use an admin client to create sessions and a session client to perform authenticated requests.");r(t,e)},$$slots:{default:!0}});var ne=s(re);m(ne,{level:2,children:(t,n)=>{o();var e=a("Creating admin and session client");r(t,e)},$$slots:{default:!0}});var ae=s(ne);l(ae,{children:(t,n)=>{o();var e=Ke(),i=s($(e));f(i,{content:"/src/appwrite.js"}),o(),r(t,e)},$$slots:{default:!0}});var ie=s(ae);x(ie,{content:`import { Client, Account } from "node-appwrite"
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function createAdminClient() => {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT)
        .setKey(process.env.APPWRITE_API_KEY)

    return {
        get account() {
            return new Account(client)
        }
    }
}

export function  createSessionClient(headers) {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT)

    const cookies = parseCookie(headers.get('cookie') ?? '')
    const session = cookies.get('my-session-cookie') ?? ''
    if (session) {
        client.setSession(session.secret)
    }

    return {
		get account() {
			return new Account(client)
		}
	}
}
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`import { Client, Account } from "node-appwrite"
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function createAdminClient() => {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT)
        .setKey(process.env.APPWRITE_API_KEY)

    return {
        get account() {
            return new Account(client)
        }
    }
}

export function  createSessionClient(headers) {
    const client = new Client()
        .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.PUBLIC_APPWRITE_PROJECT)

    const cookies = parseCookie(headers.get('cookie') ?? '')
    const session = cookies.get('my-session-cookie') ?? ''
    if (session) {
        client.setSession(session.secret)
    }

    return {
		get account() {
			return new Account(client)
		}
	}
}`);r(t,e)},$$slots:{default:!0}});var le=s(ie);m(le,{level:3,children:(t,n)=>{be(t,{marker:"**",children:(e,i)=>{o();var c=a("Creating a session");r(e,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var ce=s(le);l(ce,{children:(t,n)=>{o();var e=Ne(),i=s($(e));f(i,{content:"/signin"}),o(),r(t,e)},$$slots:{default:!0}});var de=s(ce);x(de,{content:`import { createAdminClient } from "@/lib/appwrite"
import { cookies } from 'next/headers'

export async function POST(request){
    const { account } = await  createAdminClient()

    const { email, password } = await request.json()
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('session', session.secret, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        expires: new Date(session.expire),
        path: '/',
    })

    return Response.redirect('/api/user')
}
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`import { createAdminClient } from "@/lib/appwrite"
import { cookies } from 'next/headers'

export async function POST(request){
    const { account } = await  createAdminClient()

    const { email, password } = await request.json()
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('session', session.secret, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        expires: new Date(session.expire),
        path: '/',
    })

    return Response.redirect('/api/user')
}`);r(t,e)},$$slots:{default:!0}});var ue=s(de);m(ue,{level:3,children:(t,n)=>{o();var e=a("Authenticating requests");r(t,e)},$$slots:{default:!0}});var pe=s(ue);l(pe,{children:(t,n)=>{o();var e=a("With a session set, we can now use the session client to authenticate a user and return the user object. This session client can now be used on all requests that require an authenticated user.");r(t,e)},$$slots:{default:!0}});var $e=s(pe);x($e,{content:`import { createSessionClient } from "@/lib/appwrite"
import { headers } from 'next/headers'

export async function GET(request){
    const { account } = await createSessionClient(headers)
    try {
        const user = await account.get()
        return Response.json(user)
    } catch (error) {
        return Response.json(error)
    }
}
`,language:"jsx",process:!0,children:(t,n)=>{o();var e=a(`import { createSessionClient } from "@/lib/appwrite"
import { headers } from 'next/headers'

export async function GET(request){
    const { account } = await createSessionClient(headers)
    try {
        const user = await account.get()
        return Response.json(user)
    } catch (error) {
        return Response.json(error)
    }
}`);r(t,e)},$$slots:{default:!0}});var he=s($e);m(he,{level:1,children:(t,n)=>{o();var e=a("Resources");r(t,e)},$$slots:{default:!0}});var ve=s(he);l(ve,{children:(t,n)=>{o();var e=a("Visit our documentation to learn more about SSR, join us on Discord to be part of the discussion, visit our blog and YouTube channel to learn more, or visit our GitHub repository to see our source code.");r(t,e)},$$slots:{default:!0}});var me=s(ve);b(me,{ordered:!1,marker:"-",children:(t,n)=>{var e=Ue(),i=$(e);_(i,{children:(v,S)=>{g(v,{href:"/docs/products/auth/server-side-rendering",children:(w,C)=>{o();var P=a("Docs");r(w,P)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=s(i);_(c,{children:(v,S)=>{g(v,{href:"https://appwrite.io/discord",children:(w,C)=>{o();var P=a("Discord");r(w,P)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=s(c);_(h,{children:(v,S)=>{g(v,{href:"/blog",children:(w,C)=>{o();var P=a("Blog");r(w,P)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=s(h);_(u,{children:(v,S)=>{g(v,{href:"https://www.youtube.com/channel/UCtBJ1v69gm8NgbCju_03Fiw",children:(w,C)=>{o();var P=a("YouTube");r(w,P)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=s(u);_(p,{children:(v,S)=>{g(v,{href:"https://github.com/appwrite/appwrite",children:(w,C)=>{o();var P=a("GitHub repository");r(w,P)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var fe=s(me);l(fe,{children:(t,n)=>{o();var e=Je(),i=s($(e));g(i,{href:"https://github.com/appwrite/appwrite",children:(h,u)=>{o();var p=a("GitHub");r(h,p)},$$slots:{default:!0}});var c=s(i,2);g(c,{href:"https://cloud.appwrite.io/register",children:(h,u)=>{o();var p=a("Cloud");r(h,p)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var ge=s(fe);l(ge,{children:(t,n)=>{g(t,{href:"/init",children:(e,i)=>{o();var c=a("Go back to Init");r(e,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),Se(y),r(Pe,y)},$$slots:{default:!0}}))}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:Ge,frontmatter:_e},Symbol.toStringTag,{value:"Module"}));export{$t as _,Ge as a};
