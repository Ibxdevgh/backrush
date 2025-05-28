import{t as $,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as oe,s as a,f as c,n as o,r as ae}from"../chunks/NgVQVlRK.js";import{n as se}from"../chunks/B4IyMRKX.js";import{H as D}from"../chunks/CXsRaEhZ.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as ne}from"../chunks/DXp9_3zM.js";import{F as w}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as i}from"../chunks/D8YsId2T.js";import{L as W}from"../chunks/yh4_9ChP.js";import{T as ie}from"../chunks/D8BqvLkQ.js";import{T as le,a as A,b as Z,c as de,d as f}from"../chunks/BpU_IltG.js";import{A as ue}from"../chunks/CqOphJLh.js";const pe={layout:"article",title:"Rate-limits",description:"Optimize application performance with Backrush rate limits. Explore rate limiting strategies, configurations, and how to prevent abuse of your services."};var $e=$("<!><!>",1),ce=$("<!><!>",1),me=$("<!><!>",1),ve=$("<!><!>",1),he=$("<!><!><!>",1),fe=$("<!><!>",1),_e=$("If you need the time in a different format, any modern programming language can get the job done. For example, if you open up the console on your web browser, you can easily get the reset time as a JavaScript Date object. You can also read more about <!>.",1),ge=$("Rate limits are necessary to protect your apps and users from abuse; however, they can sometimes add unwanted friction when a developer is trying to repeatedly consume certain Backrush APIs to test their application in a short period. <!> are a type of secret used by client apps to bypass these rate limits in development environments.",1),ye=$("To use dev keys, client apps add a header <!> containing the secret to all HTTP requests sent to the Backrush API. Backrush recognizes this header, verifies the secret, and if valid, allows the request to bypass the rate limit.",1),Pe=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ue(ee){ue(ee,se(pe,{children:(te,Te)=>{var L=Pe(),X=oe(L);i(X,{children:(t,n)=>{o();var e=s("Some of Backrush's API endpoints have a rate limit to avoid abuse or brute-force attacks against Backrush's REST API. Each Backrush route documentation has information about any rate limits that might apply to them.");r(t,e)},$$slots:{default:!0}});var I=a(X);i(I,{children:(t,n)=>{o();var e=s("Rate limits only apply to Client SDKs. Rate limits do not apply when accessing Backrush with a Server SDK authenticated using an API key.");r(t,e)},$$slots:{default:!0}});var H=a(I);D(H,{id:"headers",level:1,children:(t,n)=>{o();var e=s("Headers");r(t,e)},$$slots:{default:!0}});var S=a(H);i(S,{children:(t,n)=>{o();var e=s("You can check the returned HTTP headers of any API request to see your current rate limit status:");r(t,e)},$$slots:{default:!0}});var M=a(S);w(M,{content:`HTTP/1.1 200
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
`,language:"http",process:!0,children:(t,n)=>{o();var e=s(`HTTP/1.1 200
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873`);r(t,e)},$$slots:{default:!0}});var q=a(M);i(q,{children:(t,n)=>{o();var e=s("The headers tell you everything you need to know about your current rate limit status:");r(t,e)},$$slots:{default:!0}});var C=a(q);ie(C,{children:(t,n)=>{var e=fe(),m=c(e);le(m,{children:(g,y)=>{A(g,{children:(b,k)=>{var P=$e(),R=c(P);Z(R,{children:(h,p)=>{o();var l=s("Header");r(h,l)},$$slots:{default:!0}});var v=a(R);Z(v,{children:(h,p)=>{o();var l=s("Description");r(h,l)},$$slots:{default:!0}}),r(b,P)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=a(m);de(_,{children:(g,y)=>{var b=he(),k=c(b);A(k,{children:(v,h)=>{var p=ce(),l=c(p);f(l,{children:(d,x)=>{o();var u=s("X-RateLimit-Limit");r(d,u)},$$slots:{default:!0}});var T=a(l);f(T,{children:(d,x)=>{o();var u=s("The maximum number of requests that the consumer is permitted to make per hour.");r(d,u)},$$slots:{default:!0}}),r(v,p)},$$slots:{default:!0}});var P=a(k);A(P,{children:(v,h)=>{var p=me(),l=c(p);f(l,{children:(d,x)=>{o();var u=s("X-RateLimit-Remaining");r(d,u)},$$slots:{default:!0}});var T=a(l);f(T,{children:(d,x)=>{o();var u=s("The number of requests remaining in the current rate limit window.");r(d,u)},$$slots:{default:!0}}),r(v,p)},$$slots:{default:!0}});var R=a(P);A(R,{children:(v,h)=>{var p=ve(),l=c(p);f(l,{children:(d,x)=>{o();var u=s("X-RateLimit-Reset");r(d,u)},$$slots:{default:!0}});var T=a(l);f(T,{children:(d,x)=>{o();var u=s("The time at which the current rate limit window resets in UTC epoch seconds.");r(d,u)},$$slots:{default:!0}}),r(v,p)},$$slots:{default:!0}}),r(g,b)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var G=a(C);i(G,{children:(t,n)=>{o();var e=_e(),m=a(c(e));W(m,{href:"https://en.wikipedia.org/wiki/Unix_time",children:(_,g)=>{o();var y=s("Unix Time");r(_,y)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var j=a(G);w(j,{content:`new Date(1372700873 * 1000) // => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
`,language:"js",process:!0,children:(t,n)=>{o();var e=s("new Date(1372700873 * 1000) // => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)");r(t,e)},$$slots:{default:!0}});var E=a(j);i(E,{children:(t,n)=>{o();var e=s("Once you go over the rate limit you will receive an error response:");r(t,e)},$$slots:{default:!0}});var J=a(E);w(J,{content:`HTTP/1.1 429
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 429
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
    "message": "Too many requests",
    "code": 429
}
`,language:"http",process:!0,children:(t,n)=>{o();var e=s(`HTTP/1.1 429
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 429
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
    "message": "Too many requests",
    "code": 429
}`);r(t,e)},$$slots:{default:!0}});var K=a(J);D(K,{id:"dev-keys",level:1,children:(t,n)=>{o();var e=s("Dev keys");r(t,e)},$$slots:{default:!0}});var F=a(K);i(F,{children:(t,n)=>{o();var e=ge(),m=a(c(e));W(m,{href:"/docs/advanced/platform/dev-keys",children:(_,g)=>{o();var y=s("Dev keys");r(_,y)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var U=a(F);i(U,{children:(t,n)=>{o();var e=ye(),m=a(c(e));ne(m,{content:"X-Backrush-Dev-Key"}),o(),r(t,e)},$$slots:{default:!0}});var Y=a(U);w(Y,{content:`X-Backrush-Dev-Key: 5b0be23...abda7c6
`,language:"http",process:!0,children:(t,n)=>{o();var e=s("X-Backrush-Dev-Key: 5b0be23...abda7c6");r(t,e)},$$slots:{default:!0}});var z=a(Y);i(z,{children:(t,n)=>{o();var e=s("Dev keys should never be included in production applications as they can expose your application to abuse. They are meant for development and testing purposes only.");r(t,e)},$$slots:{default:!0}});var O=a(z);D(O,{id:"service-abuse",level:1,children:(t,n)=>{o();var e=s("Service abuse");r(t,e)},$$slots:{default:!0}});var B=a(O);i(B,{children:(t,n)=>{o();var e=s("To protect the quality of service from Backrush, additional rate limits may apply to some actions. For example, rapidly creating content, polling aggressively instead of using webhooks, making API calls with a high concurrency, or repeatedly requesting data that is computationally expensive may result in abuse rate limiting.");r(t,e)},$$slots:{default:!0}});var N=a(B);i(N,{children:(t,n)=>{o();var e=s("It is not intended for this rate limit to interfere with any legitimate use of the API. Your normal rate limits should be the only limit you target.");r(t,e)},$$slots:{default:!0}});var Q=a(N);i(Q,{children:(t,n)=>{o();var e=s("If you are exceeding your rate limit, you can likely fix the issue by caching API responses and using webhooks for data polling.");r(t,e)},$$slots:{default:!0}});var V=a(Q);i(V,{children:(t,n)=>{o();var e=s("If your application triggers this rate limit, you'll receive an informative response:");r(t,e)},$$slots:{default:!0}});var re=a(V);w(re,{content:`HTTP/1.1 429
Content-Type: application/json; charset=utf-8
Connection: close
{
    "message": "Too many login attempts",
    "code": 429
}
`,language:"http",process:!0,children:(t,n)=>{o();var e=s(`HTTP/1.1 429
Content-Type: application/json; charset=utf-8
Connection: close
{
    "message": "Too many login attempts",
    "code": 429
}`);r(t,e)},$$slots:{default:!0}}),ae(L),r(te,L)},$$slots:{default:!0}}))}export{Ue as component};
