import{t as h,b as a,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f,c as nt,n as r,r as lt}from"../chunks/NgVQVlRK.js";import{n as dt}from"../chunks/B4IyMRKX.js";import{H as q}from"../chunks/CXsRaEhZ.js";import"../chunks/hMT8fFzP.js";import{I as it}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as T}from"../chunks/DXp9_3zM.js";import{F as N}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as y}from"../chunks/D8YsId2T.js";import{S as L}from"../chunks/yHjwcyUH.js";import{L as O}from"../chunks/yh4_9ChP.js";import{T as H}from"../chunks/D8BqvLkQ.js";import{T as M,a as x,b as J,c as B,d as u}from"../chunks/BpU_IltG.js";import{A as $t}from"../chunks/CqOphJLh.js";const ut={layout:"article",title:"REST",description:"Discover the Backrush REST API for building robust and scalable applications. Access detailed documentation on REST endpoints, authentication, and data management."};var pt=h("Backrush supports multiple protocols for accessing the server, including <!>, <!>, and <!>. The REST API allows you to access your Backrush server through HTTP requests without the needing an SDK. Each endpoint in the API represents a specific operation on a specific resource.",1),ct=h("<!><!><!>",1),vt=h("<!><!><!>",1),_t=h("Content type of the HTTP request. Would usually be <!>.",1),ht=h("<!><!><!>",1),ft=h("API key used for server authentication. Your API key is a secret, <!> use it in client applications.",1),mt=h("<!><!><!>",1),Pt=h("Token used for JWT authentication, tokens can be generated using the <!> method.",1),gt=h("<!><!><!>",1),Tt=h("<!><!><!>",1),wt=h("<!><!><!>",1),yt=h("<!><!><!><!><!><!>",1),xt=h("<!><!>",1),At=h("Server APIs are authenticated with API keys instead of account sessions. Simply pass an <!> in the <!> header with the appropriate scopes.",1),bt=h("JWT authentication is frequently used by server applications to act on behalf of a user. Users generate tokens using the <!> endpoint. When issuing requests authenticated with a JWT, Backrush will treat the request like it is from the authenticated user.",1),It=h("Upload endpoints in Backrush, such as [Create File] (/docs/references/cloud/client-web/storage#createFile) and [Create Deployment] (/docs/references/cloud/server-nodejs/functions#createDeployment), are different from other endpoints. These endpoints take multipart form data instead of JSON data. To implement chunked uploads, you will need to implement the following headers. If you wish, this logic is already available in any of the <!>.",1),Et=h("<!><!><!>",1),St=h("<!><!><!>",1),Dt=h("Contains the content type of the HTTP request and provides a <!> that is used to parse the form data.",1),Rt=h("<!><!><!>",1),Ct=h("Contains information about which bytes are being transmitted in this chunk, with the format <!>.",1),kt=h("<!><!><!>",1),qt=h("<!><!><!>",1),Jt=h("API key used for server authentication. Your API key is a secret, <!> use it in client applications.",1),Nt=h("<!><!><!>",1),Ot=h("<!><!><!><!><!>",1),jt=h("<!><!>",1),Kt=h("<!><!><!><!><!>",1),Ht=h("<!><!><!><!><!>",1),Mt=h("<!><!><!><!><!>",1),Bt=h("<!><!><!><!><!>",1),Wt=h("<!><!><!>",1),Ft=h("<!><!>",1),Lt=h("<!><!>",1),Ut=h("<!><!>",1),Xt=h("<!><!>",1),Qt=h("<!><!>",1),Yt=h("<!><!>",1),Vt=h("<!><!>",1),Gt=h("<!><!><!><!><!>",1),zt=h("<!><!>",1),Zt=h("<!><!>",1),er=h("<!><!>",1),tr=h("<!><!>",1),rr=h("<!><!>",1),or=h("<!><!>",1),sr=h("<!><!>",1),ar=h("<!><!>",1),nr=h("<!><!>",1),lr=h("<!><!>",1),dr=h("<!><!>",1),ir=h("<!><!><!><!><!><!><!><!><!>",1),$r=h("<!><!>",1),ur=h("Backrush&#39;s SDKs have a helper <!> to generate unique IDs. When using Backrush without an SDK, pass the string <!> into the ID parameter.",1),pr=h("Backrush&#39;s SDKs provide a <!> class to generate JSON query strings. When using Backrush without an SDK, you can template your own JSON strings. You can discover the query methods available in the <!>",1),cr=h("Query strings are passed to Backrush using the <!> parameter. You can attach multiple query strings by including the array parameter multiple times in the query string: <!>",1),vr=h("When using greater than, greater than or equal to, less than, or less than or equal to, it is not recommended to pass in multiple values. While the API will accept multiple values and return results with <!>, it&#39;s best practice to pass in only one value for performance reasons.",1),_r=h("Some Backrush query methods, like <!> and <!>, allow you to nest queries. When using Backrush without an SDK, you can template your own JSON strings.",1),hr=h("In these cases, <!> is empty and <!> is an array of queries.",1),fr=h("<!>.",1),mr=h("<!>.",1),Pr=h("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Fr(ot){$t(ot,dt(ut,{children:(st,gr)=>{var W=Pr(),U=nt(W);y(U,{children:(s,p)=>{r();var o=pt(),g=t(f(o));O(g,{href:"/docs/apis/rest",children:(D,A)=>{r();var R=a("REST");e(D,R)},$$slots:{default:!0}});var w=t(g,2);O(w,{href:"/docs/apis/graphql",children:(D,A)=>{r();var R=a("GraphQL");e(D,R)},$$slots:{default:!0}});var b=t(w,2);O(b,{href:"/docs/apis/realtime",children:(D,A)=>{r();var R=a("Realtime");e(D,R)},$$slots:{default:!0}}),r(),e(s,o)},$$slots:{default:!0}});var X=t(U);q(X,{id:"headers",level:1,children:(s,p)=>{r();var o=a("Headers");e(s,o)},$$slots:{default:!0}});var Q=t(X);y(Q,{children:(s,p)=>{r();var o=a("Backrush's REST APIs expect certain headers to be included with each request:");e(s,o)},$$slots:{default:!0}});var Y=t(Q);H(Y,{children:(s,p)=>{var o=xt(),g=f(o);M(g,{children:(b,D)=>{x(b,{children:(A,R)=>{var E=ct(),S=f(E);J(S,{children:(m,P)=>{r();var c=a("Header");e(m,c)},$$slots:{default:!0}});var I=t(S);J(I,{});var C=t(I);J(C,{children:(m,P)=>{r();var c=a("Description");e(m,c)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=t(g);B(w,{children:(b,D)=>{var A=yt(),R=f(A);x(R,{children:(P,c)=>{var v=vt(),$=f(v);u($,{children:(d,l)=>{r();var i=a("X-Backrush-Project: [PROJECT-ID]");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("required");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=a("The ID of your Backrush project");e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}});var E=t(R);x(E,{children:(P,c)=>{var v=ht(),$=f(v);u($,{children:(d,l)=>{r();var i=a("Content-Type: application/json");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("required");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=_t(),k=t(f(i));T(k,{content:"application/json"}),r(),e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}});var S=t(E);x(S,{children:(P,c)=>{var v=mt(),$=f(v);u($,{children:(d,l)=>{r();var i=a("X-Backrush-Key: [API-KEY]");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("optional");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=ft(),k=t(f(i));L(k,{marker:"**",children:(j,K)=>{r();var F=a("do not");e(j,F)},$$slots:{default:!0}}),r(),e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}});var I=t(S);x(I,{children:(P,c)=>{var v=gt(),$=f(v);u($,{children:(d,l)=>{r();var i=a("X-Backrush-JWT: [TOKEN]");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("optional");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=Pt(),k=t(f(i));O(k,{href:"/docs/products/auth/jwt",children:(j,K)=>{r();var F=a("Create JWT");e(j,F)},$$slots:{default:!0}}),r(),e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}});var C=t(I);x(C,{children:(P,c)=>{var v=Tt(),$=f(v);u($,{children:(d,l)=>{r();var i=a("X-Backrush-Response-Format: [VERSION-NUMBER]");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("optional");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=a("Version number used for backward compatibility. The response will be formatted to be compatible with the provided version number. This helps Backrush SDKs keep backward compatibility with Backrush server API version.");e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}});var m=t(C);x(m,{children:(P,c)=>{var v=wt(),$=f(v);u($,{children:(d,l)=>{r();var i=a("X-Fallback-Cookies: [FALLBACK-COOKIES]");e(d,i)},$$slots:{default:!0}});var _=t($);u(_,{children:(d,l)=>{r();var i=a("optional");e(d,i)},$$slots:{default:!0}});var n=t(_);u(n,{children:(d,l)=>{r();var i=a("Fallback cookies used in scenarios where browsers do not allow third-party cookies. Often used when there is no Custom Domain set for your Backrush API.");e(d,i)},$$slots:{default:!0}}),e(P,v)},$$slots:{default:!0}}),e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var V=t(Y);q(V,{id:"authentication",level:1,children:(s,p)=>{r();var o=a("Authentication");e(s,o)},$$slots:{default:!0}});var G=t(V);y(G,{children:(s,p)=>{r();var o=a("Backrush supports multiple authentication methods, including account sessions, API keys, and JWTs. The authentication method you use depends on your use case. Below are examples showing how you can authenticate using the REST API.");e(s,o)},$$slots:{default:!0}});var z=t(G);q(z,{id:"client-integration",level:2,children:(s,p)=>{r();var o=a("Client integrations");e(s,o)},$$slots:{default:!0}});var Z=t(z);y(Z,{children:(s,p)=>{r();var o=a("You can create account sessions with POST requests to the Account API. Sessions are persisted using secured cookies. You can learn more about session persistence in the Authentication Guide.");e(s,o)},$$slots:{default:!0}});var ee=t(Z);y(ee,{children:(s,p)=>{r();var o=a("The example below shows creating an account session with the Create Account Session with Email endpoint.");e(s,o)},$$slots:{default:!0}});var te=t(ee);N(te,{content:`POST /v1/account/sessions/email HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]

{
  "email": "example@email.com",
  "password": "password"
}
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`POST /v1/account/sessions/email HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]

{
  "email": "example@email.com",
  "password": "password"
}`);e(s,o)},$$slots:{default:!0}});var re=t(te);y(re,{children:(s,p)=>{r();var o=a("You can find the cookies used to persist the new session in the response headers.");e(s,o)},$$slots:{default:!0}});var oe=t(re);N(oe,{content:`Set-Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly
Set-Cookie: a_session_61e71ec784ab035f7259=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly; samesite=None
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`Set-Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly
Set-Cookie: a_session_61e71ec784ab035f7259=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly; samesite=None`);e(s,o)},$$slots:{default:!0}});var se=t(oe);y(se,{children:(s,p)=>{r();var o=a("These cookies are used in subsequent requests to authenticate the user.");e(s,o)},$$slots:{default:!0}});var ae=t(se);N(ae,{content:`GET /v1/account HTTP/1.1
Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; a_session_61e71ec784ab035f7259=eyJ0...aSJ9
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`GET /v1/account HTTP/1.1
Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; a_session_61e71ec784ab035f7259=eyJ0...aSJ9
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]`);e(s,o)},$$slots:{default:!0}});var ne=t(ae);q(ne,{id:"server-integrations",level:2,children:(s,p)=>{r();var o=a("Server integrations");e(s,o)},$$slots:{default:!0}});var le=t(ne);y(le,{children:(s,p)=>{r();var o=a("Server integrations use API keys to authenticate and are typically used for backend applications.");e(s,o)},$$slots:{default:!0}});var de=t(le);y(de,{children:(s,p)=>{r();var o=At(),g=t(f(o));O(g,{href:"/docs/advanced/platform/api-keys",children:(b,D)=>{r();var A=a("API key");e(b,A)},$$slots:{default:!0}});var w=t(g,2);T(w,{content:"X-Backrush-key: [API-KEY]"}),r(),e(s,o)},$$slots:{default:!0}});var ie=t(de);N(ie,{content:`GET /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]
X-Backrush-Key: [API_KEY]
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`GET /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]
X-Backrush-Key: [API_KEY]`);e(s,o)},$$slots:{default:!0}});var $e=t(ie);q($e,{id:"jwt",level:2,children:(s,p)=>{r();var o=a("JWT");e(s,o)},$$slots:{default:!0}});var ue=t($e);y(ue,{children:(s,p)=>{r();var o=bt(),g=t(f(o));O(g,{href:"/docs/references/cloud/client-web/account#createJWT",children:(w,b)=>{r();var D=a("Create JWT");e(w,D)},$$slots:{default:!0}}),r(),e(s,o)},$$slots:{default:!0}});var pe=t(ue);N(pe,{content:`GET /v1/account HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]
X-Backrush-JWT: [TOKEN]
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`GET /v1/account HTTP/1.1
Content-Type: application/json
X-Backrush-Project: [PROJECT_ID]
X-Backrush-JWT: [TOKEN]`);e(s,o)},$$slots:{default:!0}});var ce=t(pe);q(ce,{id:"files",level:1,children:(s,p)=>{r();var o=a("Files");e(s,o)},$$slots:{default:!0}});var ve=t(ce);y(ve,{children:(s,p)=>{r();var o=a("Backrush implements resumable, chunked uploads for files larger than 5MB. Chunked uploads send files in chunks of 5MB to reduce memory footprint and increase resilience when handling large files. Backrush SDKs will automatically handle chunked uploads, but it is possible to implement this with the REST API directly.");e(s,o)},$$slots:{default:!0}});var _e=t(ve);y(_e,{children:(s,p)=>{r();var o=It(),g=t(f(o));O(g,{href:"/docs/sdks",children:(w,b)=>{r();var D=a("Backrush SDKs");e(w,D)},$$slots:{default:!0}}),r(),e(s,o)},$$slots:{default:!0}});var he=t(_e);H(he,{children:(s,p)=>{var o=jt(),g=f(o);M(g,{children:(b,D)=>{x(b,{children:(A,R)=>{var E=Et(),S=f(E);J(S,{children:(m,P)=>{r();var c=a("Header");e(m,c)},$$slots:{default:!0}});var I=t(S);J(I,{});var C=t(I);J(C,{children:(m,P)=>{r();var c=a("Description");e(m,c)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=t(g);B(w,{children:(b,D)=>{var A=Ot(),R=f(A);x(R,{children:(m,P)=>{var c=St(),v=f(c);u(v,{children:(n,d)=>{r();var l=a("X-Backrush-Project: [PROJECT-ID]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=a("The ID of your Backrush project");e(n,l)},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var E=t(R);x(E,{children:(m,P)=>{var c=Rt(),v=f(c);u(v,{children:(n,d)=>{r();var l=a("Content-Type: multipart/form-data; boundary=[FORM-BOUNDARY]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=Dt(),i=t(f(l));O(i,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",children:(k,j)=>{r();var K=a("boundary");e(k,K)},$$slots:{default:!0}}),r(),e(n,l)},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var S=t(E);x(S,{children:(m,P)=>{var c=kt(),v=f(c);u(v,{children:(n,d)=>{r();var l=a("Content-Range: bytes [BYTE-RANGE]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=Ct(),i=t(f(l));T(i,{content:"[FIRST-BYTE]-[LAST-BYTE]/[TOTAL-BYTES]"}),r(),e(n,l)},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var I=t(S);x(I,{children:(m,P)=>{var c=qt(),v=f(c);u(v,{children:(n,d)=>{r();var l=a("X-Backrush-ID: [FILE-ID]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=a("Contains ID of the file this chunk belongs to.");e(n,l)},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var C=t(I);x(C,{children:(m,P)=>{var c=Nt(),v=f(c);u(v,{children:(n,d)=>{r();var l=a("X-Backrush-Key: [API-KEY]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("optional");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=Jt(),i=t(f(l));L(i,{marker:"**",children:(k,j)=>{r();var K=a("do not");e(k,K)},$$slots:{default:!0}}),r(),e(n,l)},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}}),e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var fe=t(he);y(fe,{children:(s,p)=>{r();var o=a("The multipart form data is structured as follows:");e(s,o)},$$slots:{default:!0}});var me=t(fe);H(me,{children:(s,p)=>{var o=Ft(),g=f(o);M(g,{children:(b,D)=>{x(b,{children:(A,R)=>{var E=Kt(),S=f(E);J(S,{children:(c,v)=>{r();var $=a("Key");e(c,$)},$$slots:{default:!0}});var I=t(S);J(I,{});var C=t(I);J(C,{children:(c,v)=>{r();var $=a("Value");e(c,$)},$$slots:{default:!0}});var m=t(C);J(m,{children:(c,v)=>{r();var $=a("File Name");e(c,$)},$$slots:{default:!0}});var P=t(m);J(P,{children:(c,v)=>{r();var $=a("Description");e(c,$)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=t(g);B(w,{children:(b,D)=>{var A=Wt(),R=f(A);x(R,{children:(I,C)=>{var m=Ht(),P=f(m);u(P,{children:(n,d)=>{r();var l=a("fileId");e(n,l)},$$slots:{default:!0}});var c=t(P);u(c,{children:(n,d)=>{r();var l=a("optional");e(n,l)},$$slots:{default:!0}});var v=t(c);u(v,{children:(n,d)=>{r();var l=a("[FILE-ID]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("N/A");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=a("Contains the file ID of the new file. Only used by file chunks following the first chunk uploaded.");e(n,l)},$$slots:{default:!0}}),e(I,m)},$$slots:{default:!0}});var E=t(R);x(E,{children:(I,C)=>{var m=Mt(),P=f(m);u(P,{children:(n,d)=>{r();var l=a("file");e(n,l)},$$slots:{default:!0}});var c=t(P);u(c,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var v=t(c);u(v,{children:(n,d)=>{r();var l=a("[CHUNK-DATA]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("[FILE-NAME]");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=a("Contains file chunk data.");e(n,l)},$$slots:{default:!0}}),e(I,m)},$$slots:{default:!0}});var S=t(E);x(S,{children:(I,C)=>{var m=Bt(),P=f(m);u(P,{children:(n,d)=>{r();var l=a("permissions");e(n,l)},$$slots:{default:!0}});var c=t(P);u(c,{children:(n,d)=>{r();var l=a("required");e(n,l)},$$slots:{default:!0}});var v=t(c);u(v,{children:(n,d)=>{r();var l=a("[PERMISSION ARRAY]");e(n,l)},$$slots:{default:!0}});var $=t(v);u($,{children:(n,d)=>{r();var l=a("N/A");e(n,l)},$$slots:{default:!0}});var _=t($);u(_,{children:(n,d)=>{r();var l=a("Contains an array of permission strings about who can access the new file.");e(n,l)},$$slots:{default:!0}}),e(I,m)},$$slots:{default:!0}}),e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var Pe=t(me);y(Pe,{children:(s,p)=>{r();var o=a("While cURL and fetch are great tools to explore other REST endpoints, it's impractical to use for chunked file uploads because you need to split files into chunks.");e(s,o)},$$slots:{default:!0}});var ge=t(Pe);y(ge,{children:(s,p)=>{r();var o=a("The multipart form data posted to file upload endpoints have the following format:");e(s,o)},$$slots:{default:!0}});var Te=t(ge);N(Te,{content:`POST /v1/storage/buckets/default/files HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarye0m6iNBQNHlzTpVM
X-Backrush-Project: demo-project
Content-Range: bytes 10485760-12582912/12582912
X-Backrush-ID: 6369b0bc1dcf4ff59051

------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="fileId"

unique()
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: application/octet-stream

[CHUNKED-DATA]
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="permissions[]"

read("user:627a958ded6424a98a9f")
------WebKitFormBoundarye0m6iNBQNHlzTpVM--
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`POST /v1/storage/buckets/default/files HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarye0m6iNBQNHlzTpVM
X-Backrush-Project: demo-project
Content-Range: bytes 10485760-12582912/12582912
X-Backrush-ID: 6369b0bc1dcf4ff59051

------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="fileId"

unique()
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: application/octet-stream

[CHUNKED-DATA]
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="permissions[]"

read("user:627a958ded6424a98a9f")
------WebKitFormBoundarye0m6iNBQNHlzTpVM--`);e(s,o)},$$slots:{default:!0}});var we=t(Te);q(we,{id:"images",level:1,children:(s,p)=>{r();var o=a("Images");e(s,o)},$$slots:{default:!0}});var ye=t(we);y(ye,{children:(s,p)=>{r();var o=a("Some use cases do not allow custom headers, such as embedding images from Backrush in HTML. In these cases, you can provide the Backrush project ID using the query parameter project.");e(s,o)},$$slots:{default:!0}});var xe=t(ye);N(xe,{content:`<img src="[ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/preview?project=[PROJECT_ID]"/>
`,language:"HTML",process:!0,children:(s,p)=>{r();var o=a('<img src="[ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/preview?project=[PROJECT_ID]"/>');e(s,o)},$$slots:{default:!0}});var Ae=t(xe);q(Ae,{id:"permissions",level:1,children:(s,p)=>{r();var o=a("Permissions");e(s,o)},$$slots:{default:!0}});var be=t(Ae);y(be,{children:(s,p)=>{r();var o=a("Backrush SDKs have helpers to generate permission string formats, but when using Backrush without SDKs, you'd need to create the strings yourself.");e(s,o)},$$slots:{default:!0}});var Ie=t(be);H(Ie,{children:(s,p)=>{var o=zt(),g=f(o);M(g,{children:(b,D)=>{x(b,{children:(A,R)=>{var E=Lt(),S=f(E);J(S,{children:(C,m)=>{r();var P=a("Query method");e(C,P)},$$slots:{default:!0}});var I=t(S);J(I,{children:(C,m)=>{r();var P=a("API string");e(C,P)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=t(g);B(w,{children:(b,D)=>{var A=Gt(),R=f(A);x(R,{children:(m,P)=>{var c=Ut(),v=f(c);u(v,{children:(_,n)=>{T(_,{content:"Permission.read()"})},$$slots:{default:!0}});var $=t(v);u($,{children:(_,n)=>{T(_,{content:'read("[PERMISSION_ROLE]")'})},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var E=t(R);x(E,{children:(m,P)=>{var c=Xt(),v=f(c);u(v,{children:(_,n)=>{T(_,{content:"Permission.create()"})},$$slots:{default:!0}});var $=t(v);u($,{children:(_,n)=>{T(_,{content:'read("[PERMISSION_ROLE]")'})},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var S=t(E);x(S,{children:(m,P)=>{var c=Qt(),v=f(c);u(v,{children:(_,n)=>{T(_,{content:"Permission.update()"})},$$slots:{default:!0}});var $=t(v);u($,{children:(_,n)=>{T(_,{content:'update("[PERMISSION_ROLE]")'})},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var I=t(S);x(I,{children:(m,P)=>{var c=Yt(),v=f(c);u(v,{children:(_,n)=>{T(_,{content:"Permission.delete()"})},$$slots:{default:!0}});var $=t(v);u($,{children:(_,n)=>{T(_,{content:'delete("[PERMISSION_ROLE]")'})},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}});var C=t(I);x(C,{children:(m,P)=>{var c=Vt(),v=f(c);u(v,{children:(_,n)=>{T(_,{content:"Permission.write()"})},$$slots:{default:!0}});var $=t(v);u($,{children:(_,n)=>{T(_,{content:'write("[PERMISSION_ROLE]")'})},$$slots:{default:!0}}),e(m,c)},$$slots:{default:!0}}),e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var Ee=t(Ie);q(Ee,{id:"roles",level:2,children:(s,p)=>{r();var o=a("Roles");e(s,o)},$$slots:{default:!0}});var Se=t(Ee);y(Se,{children:(s,p)=>{r();var o=a("Backrush SDKs have helpers to generate roles string formats, but when using Backrush without SDKs, you'd need to create the strings yourself.");e(s,o)},$$slots:{default:!0}});var De=t(Se);H(De,{children:(s,p)=>{var o=$r(),g=f(o);M(g,{children:(b,D)=>{x(b,{children:(A,R)=>{var E=Zt(),S=f(E);J(S,{children:(C,m)=>{r();var P=a("Role method");e(C,P)},$$slots:{default:!0}});var I=t(S);J(I,{children:(C,m)=>{r();var P=a("API string");e(C,P)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=t(g);B(w,{children:(b,D)=>{var A=ir(),R=f(A);x(R,{children:($,_)=>{var n=er(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.any()"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"any"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var E=t(R);x(E,{children:($,_)=>{var n=tr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.guests()"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"guests"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var S=t(E);x(S,{children:($,_)=>{var n=rr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.users()"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"users"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var I=t(S);x(I,{children:($,_)=>{var n=or(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.users([STATUS])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"users/[STATUS]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var C=t(I);x(C,{children:($,_)=>{var n=sr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.user([USER_ID])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"user:[USER_ID]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var m=t(C);x(m,{children:($,_)=>{var n=ar(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.user([USER_ID], [STATUS])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"user:[USER_ID]/[STATUS]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var P=t(m);x(P,{children:($,_)=>{var n=nr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.team([TEAM_ID])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"team:[TEAM_ID]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var c=t(P);x(c,{children:($,_)=>{var n=lr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.team([TEAM_ID], [ROLE])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"team:[TEAM_ID]/[ROLE]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}});var v=t(c);x(v,{children:($,_)=>{var n=dr(),d=f(n);u(d,{children:(i,k)=>{T(i,{content:"Role.member([MEMBERSHIP_ID])"})},$$slots:{default:!0}});var l=t(d);u(l,{children:(i,k)=>{T(i,{content:"member:[MEMBERSHIP_ID]"})},$$slots:{default:!0}}),e($,n)},$$slots:{default:!0}}),e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var Re=t(De);q(Re,{id:"unique-id",level:1,children:(s,p)=>{r();var o=a("Unique ID");e(s,o)},$$slots:{default:!0}});var Ce=t(Re);y(Ce,{children:(s,p)=>{r();var o=ur(),g=t(f(o));T(g,{content:"ID.unique()"});var w=t(g,2);T(w,{content:'"unique()"'}),r(),e(s,o)},$$slots:{default:!0}});var ke=t(Ce);q(ke,{id:"queries",level:1,children:(s,p)=>{r();var o=a("Queries");e(s,o)},$$slots:{default:!0}});var qe=t(ke);y(qe,{children:(s,p)=>{r();var o=pr(),g=t(f(o));T(g,{content:"Query"});var w=t(g,2);O(w,{href:"/docs/products/databases/queries",children:(b,D)=>{r();var A=a("Queries page.");e(b,A)},$$slots:{default:!0}}),e(s,o)},$$slots:{default:!0}});var Je=t(qe);q(Je,{id:"queries-string-format",level:2,children:(s,p)=>{r();var o=a("Query string format");e(s,o)},$$slots:{default:!0}});var Ne=t(Je);y(Ne,{children:(s,p)=>{r();var o=a("Backrush Queries are escaped JSON strings, which look like this.");e(s,o)},$$slots:{default:!0}});var Oe=t(Ne);N(Oe,{content:`"{\\"method\\":\\"equal\\",\\"attribute\\":\\"name\\",\\"values\\":[\\"John\\"]}"
`,language:"json",process:!0,children:(s,p)=>{r();var o=a('"{\\"method\\":\\"equal\\",\\"attribute\\":\\"name\\",\\"values\\":[\\"John\\"]}"');e(s,o)},$$slots:{default:!0}});var je=t(Oe);y(je,{children:(s,p)=>{r();var o=cr(),g=t(f(o));T(g,{content:"queries"});var w=t(g,2);T(w,{content:'queries[]="..."&queries[]="..."'}),e(s,o)},$$slots:{default:!0}});var Ke=t(je);y(Ke,{children:(s,p)=>{r();var o=a("For example, the unescaped query string might look like this.");e(s,o)},$$slots:{default:!0}});var He=t(Ke);N(He,{content:`?queries[0]={"method":"equal","attribute":"name","values":["John"]}&queries[1]={"method":"limit","values":[6]}
`,language:"text",process:!0,children:(s,p)=>{r();var o=a('?queries[0]={"method":"equal","attribute":"name","values":["John"]}&queries[1]={"method":"limit","values":[6]}');e(s,o)},$$slots:{default:!0}});var Me=t(He);y(Me,{children:(s,p)=>{r();var o=a("The JSON has a general format like this.");e(s,o)},$$slots:{default:!0}});var Be=t(Me);N(Be,{content:`{
  "method": "<QUERY_METHOD>",
  "attribute": "<ATTRIBUTE>",
  "values": [
    <VALUE1>,
    <VALUE2>,
    ...
  ]
}
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`{
  "method": "<QUERY_METHOD>",
  "attribute": "<ATTRIBUTE>",
  "values": [
    <VALUE1>,
    <VALUE2>,
    ...
  ]
}`);e(s,o)},$$slots:{default:!0}});var We=t(Be);it(We,{title:"Best practice",children:(s,p)=>{y(s,{children:(o,g)=>{r();var w=vr(),b=t(f(w));L(b,{marker:"**",children:(D,A)=>{r();var R=a("or logic");e(D,R)},$$slots:{default:!0}}),r(),e(o,w)},$$slots:{default:!0}})}});var Fe=t(We);y(Fe,{children:(s,p)=>{r();var o=a('For example, to query for all documents with the name "John" or "Jane", the query string would look like this.');e(s,o)},$$slots:{default:!0}});var Le=t(Fe);N(Le,{content:`{
  "method": "equal",
  "attribute": "name",
  "values": [
    "John",
    "Jane"
  ]
}
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`{
  "method": "equal",
  "attribute": "name",
  "values": [
    "John",
    "Jane"
  ]
}`);e(s,o)},$$slots:{default:!0}});var Ue=t(Le);y(Ue,{children:(s,p)=>{r();var o=a("Here are some more examples of the JSON query format. When in doubt, you can use the Backrush SDKs to generate the query strings for you.");e(s,o)},$$slots:{default:!0}});var Xe=t(Ue);N(Xe,{content:`{
  "method": "isNull",
  "attribute": "name"
}
{
  "method": "select",
  "values": ["name", "age", "email"]
}
{
  "method": "between",
  "attribute": "age",
  "values": [18, 30]
}
{
  "method": "cursorAfter",
  "values": ["documentId"]
}
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`{
  "method": "isNull",
  "attribute": "name"
}
{
  "method": "select",
  "values": ["name", "age", "email"]
}
{
  "method": "between",
  "attribute": "age",
  "values": [18, 30]
}
{
  "method": "cursorAfter",
  "values": ["documentId"]
}`);e(s,o)},$$slots:{default:!0}});var Qe=t(Xe);q(Qe,{id:"query-nesting",level:2,children:(s,p)=>{r();var o=a("Query nesting");e(s,o)},$$slots:{default:!0}});var Ye=t(Qe);y(Ye,{children:(s,p)=>{r();var o=_r(),g=t(f(o));T(g,{content:"and"});var w=t(g,2);T(w,{content:"or"}),r(),e(s,o)},$$slots:{default:!0}});var Ve=t(Ye);y(Ve,{children:(s,p)=>{r();var o=hr(),g=t(f(o));T(g,{content:"attribute"});var w=t(g,2);T(w,{content:"values"}),r(),e(s,o)},$$slots:{default:!0}});var Ge=t(Ve);N(Ge,{content:`{
  "method": "and",
  "values": [
    {
      "method": "equal",
      "attribute": "name",
      "values": ["John"]
    },
    {
      "method": "between",
      "attribute": "age",
      "values": [20, 30]
    }
  ]
}
`,language:"json",process:!0,children:(s,p)=>{r();var o=a(`{
  "method": "and",
  "values": [
    {
      "method": "equal",
      "attribute": "name",
      "values": ["John"]
    },
    {
      "method": "between",
      "attribute": "age",
      "values": [20, 30]
    }
  ]
}`);e(s,o)},$$slots:{default:!0}});var ze=t(Ge);q(ze,{id:"rate-limits",level:1,children:(s,p)=>{r();var o=a("Rate limits");e(s,o)},$$slots:{default:!0}});var Ze=t(ze);y(Ze,{children:(s,p)=>{r();var o=a("Backrush's REST APIs are protected by the same rate limit policies, just like when using an SDK. Each API has a different rate limit, which is documented in the References section of each service in the Backrush documentation.");e(s,o)},$$slots:{default:!0}});var et=t(Ze);y(et,{children:(s,p)=>{var o=fr(),g=f(o);O(g,{href:"/docs/advanced/platform/rate-limits",children:(w,b)=>{r();var D=a("Learn more about Rate Limits");e(w,D)},$$slots:{default:!0}}),r(),e(s,o)},$$slots:{default:!0}});var tt=t(et);q(tt,{id:"specifications",level:1,children:(s,p)=>{r();var o=a("Specifications");e(s,o)},$$slots:{default:!0}});var rt=t(tt);y(rt,{children:(s,p)=>{r();var o=a("Backrush provides a full REST API specification in the OpenAPI 3 and Swagger 2 formats every release. These can be accessed through Backrush's GitHub repository and rendered using a variety of parsers and tools.");e(s,o)},$$slots:{default:!0}});var at=t(rt);y(at,{children:(s,p)=>{var o=mr(),g=f(o);O(g,{href:"https://github.com/appwrite/appwrite/tree/master/app/config/specs",children:(w,b)=>{r();var D=a("Find the REST API specification for your Backrush version");e(w,D)},$$slots:{default:!0}}),r(),e(s,o)},$$slots:{default:!0}}),lt(W),e(st,W)},$$slots:{default:!0}}))}export{Fr as component};
