import{t as c,b as o,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as wt,s as n,f as $,n as t,r as It}from"./NgVQVlRK.js";import{n as xt}from"./B4IyMRKX.js";import{H as O}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as q}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as ft}from"./BlhJVlLQ.js";import{C as T}from"./DXp9_3zM.js";import{F as U}from"./OFUKRh55.js";import{L as _t,I as R}from"./BhmTgGWB.js";import{P as f}from"./D8YsId2T.js";import{S as G}from"./yHjwcyUH.js";import{L as S}from"./yh4_9ChP.js";import{T as H}from"./D8BqvLkQ.js";import{T as j,a as E,b as L,c as N,d as _}from"./BpU_IltG.js";import{P as At}from"./CEkRzcqJ.js";const mt={layout:"post",title:"Predicting your developer destiny: how I built the AI Crystal Ball",description:"How I used Backrush, OpenAI, GitHub, and SvelteKit to develop an AI prank app.",date:"2024-05-10T00:00:00.000Z",cover:"/images/blog/ai-crystal-ball/cover.png",timeToRead:9,author:"aditya-oberai",category:"tutorial"};var Dt=c("<!><!><!><!>",1),Ct=c("To create an OpenAI API key, we must first create an account on the <!>. Once the account is set up and a project is created, we can visit their <!> page and create an API key. Ensure you copy and save this key in a safe place, as the OpenAI platform will not let you view the key after it is created.",1),Tt=c("Note: To use the GPT-4 API, your account must be upgraded to the Usage tier 1. To learn more, visit their <!>.",1),kt=c("To create a GitHub OAuth application, we must visit the <!> on GitHub and click on the <!> tab. From here, we can register an OAuth app. While registering the app, you can add any temporary URL, such as <!>, in the <!> field (we will update this in the next step). Ensure you save your Client ID and Client Secret when you visit this page, as we will need them in the next step.",1),Bt=c("<!><!><!>",1),Lt=c("The only prerequisite here was creating an <!>, followed by creating a new project and adding your hostname as a web app to the project.",1),Ot=c("To implement GitHub OAuth, we must visit the <!> page on the Backrush project, go to the <!> tab, click on <!> from the list of OAuth adapters, and paste the Client ID and Secret we saved from the GitHub OAuth app. Ensure that copy the <!> and paste it into your GitHub OAuth app in the <!> field.",1),Ut=c("We must create a database with the ID <!> and two collections with the IDs <!> and <!> in the Backrush project with the following details:",1),Et=c("The <!> collection",1),Gt=c("<!><!><!><!><!>",1),St=c("<!><!><!><!><!>",1),Rt=c("<!><!><!><!><!>",1),Ht=c("<!><!><!><!><!>",1),jt=c("<!><!><!><!><!>",1),Nt=c("<!><!><!><!>",1),Wt=c("<!><!>",1),qt=c("Visit the collection settings, enable <!> and set the following (collection-level) <!>:",1),Mt=c("<!><!><!><!><!>",1),Ft=c("<!><!><!><!><!>",1),Yt=c("<!><!>",1),Kt=c("The <!> collection",1),zt=c("<!><!><!><!>",1),Jt=c("<!><!><!><!>",1),Vt=c("<!><!><!><!>",1),Xt=c("<!><!>",1),Zt=c("<!><!>",1),Qt=c("Visit the collection settings, enable <!> and set the following (collection-level) <!>:",1),en=c("<!><!><!><!><!>",1),tn=c("<!><!><!><!><!>",1),nn=c("<!><!><!><!><!>",1),rn=c("<!><!>",1),sn=c("<!><!>",1),on=c("Lastly, we must create a <!> file at the root of the directory and add the following:",1),an=c("After the environment variables are created, we can set up the Backrush SDK by creating a file <!> and adding the following:",1),ln=c("Also, since this app is created without SSR, we will go to the <!> directory and creates a file <!> to add the following:",1),dn=c("First, we must use the Backrush Web SDK to set up our Auth library in the application. We will create a file <!> to create a user store with the necessary auth-related functions.",1),un=c("We will call the login function from the index page at <!>.",1),cn=c("After the user successfully logs in using GitHub, we will use the GitHub API to get a user’s top 5 languages from the last 30 repositories they created on their personal account. For that, we will first create our GitHub library in the file <!>.",1),$n=c("At this point, we also want to create our Database library using the Backrush SDK, so that we can store the information from the GitHub API. For that, we shall create a file <!> and add the following:",1),pn=c("We will be calling these functions for our main application page in the file <!>",1),vn=c("Once we have our GitHub data, it is time to generate our destiny using the OpenAI GPT-4 API. For that, we will create an API route using SvelteKit’s server-only functions in the file <!> and add the following code:",1),hn=c("We will send this request by adding the following function to the file<!>",1),gn=c("Lastly, to share our destiny with the rest of the world, we must create an additional page that gets destiny data from the Backrush Database and displays it. For this, we must first add functions to add and get destinies from the Backrush Database to our Database library. To do so, we visit <!> and add the following functions to our export:",1),fn=c("After that, we will create a new directory <!> and add the following",1),_n=c("A <!> file",1),mn=c("Since this page has no reactive logic, we will render this page on the server side and send it to the user. We will also get our destiny via a <!> function here:",1),yn=c("A <!> file",1),bn=c("Lastly, we need to add a function in <!> to store the destiny in the Backrush Database using our library function and open the destiny link in a new tab for our user. For that, we add the following code in the <!> tags:",1),Pn=c("And with that, our AI Crystal Ball project is ready! So far, since launching this application, over <!> have signed up and created their destinies.",1),wn=c("The web app is still live and can be tried at the following link: <!>",1),In=c("You can find the application’s complete source code at this <!>.",1),xn=c("<!> to be the first to get updates and to be part of a vibrant community!",1),An=c("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Dn(yt){At(yt,xt(mt,{children:(bt,Cn)=>{var W=An(),M=wt(W);f(M,{children:(s,l)=>{t();var e=o("Have you ever wondered what you would be doing as a developer 5 years from now? I, for sure, have, which is why recently I developed an AI Crystal Ball to use information from my GitHub account and predict what my destiny as a developer would look like. This project picked up a lot more attention than anticipated as well as a number of requests asking how this project was developed.");r(s,e)},$$slots:{default:!0}});var F=n(M);f(F,{children:(s,l)=>{t();var e=o("Therefore, in this blog, we’ll discuss how the AI Crystal Ball project was built in the first place.");r(s,e)},$$slots:{default:!0}});var Y=n(F);O(Y,{level:1,children:(s,l)=>{t();var e=o("Prerequisites");r(s,e)},$$slots:{default:!0}});var K=n(Y);f(K,{children:(s,l)=>{t();var e=o("In order to build this application, we have a few prerequisites. We must set up the following:");r(s,e)},$$slots:{default:!0}});var z=n(K);_t(z,{ordered:!1,marker:"-",children:(s,l)=>{var e=Dt(),a=$(e);R(a,{children:(p,I)=>{t();var m=o("OpenAI API key");r(p,m)},$$slots:{default:!0}});var h=n(a);R(h,{children:(p,I)=>{t();var m=o("GitHub OAuth app");r(p,m)},$$slots:{default:!0}});var g=n(h);R(g,{children:(p,I)=>{t();var m=o("Backrush OAuth adapter for GitHub");r(p,m)},$$slots:{default:!0}});var w=n(g);R(w,{children:(p,I)=>{t();var m=o("Backrush collections to store GitHub data and destinies");r(p,m)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var J=n(z);O(J,{level:2,children:(s,l)=>{t();var e=o("OpenAI");r(s,e)},$$slots:{default:!0}});var V=n(J);f(V,{children:(s,l)=>{t();var e=o("Since we are using GPT-4 to generate developer destinies, we will need an OpenAI API key to communicate with their platform.");r(s,e)},$$slots:{default:!0}});var X=n(V);f(X,{children:(s,l)=>{t();var e=Ct(),a=n($(e));S(a,{href:"https://platform.openai.com/",children:(g,w)=>{t();var p=o("OpenAI platform");r(g,p)},$$slots:{default:!0}});var h=n(a,2);S(h,{href:"https://platform.openai.com/account/api-keys",children:(g,w)=>{t();var p=o("API keys");r(g,p)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var Z=n(X);f(Z,{children:(s,l)=>{q(s,{src:"/images/blog/ai-crystal-ball/openai.png",alt:"OpenAI API Keys"})},$$slots:{default:!0}});var Q=n(Z);ft(Q,{children:(s,l)=>{f(s,{children:(e,a)=>{t();var h=Tt(),g=n($(h));S(g,{href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one",children:(w,p)=>{t();var I=o("Usage tiers documentation");r(w,I)},$$slots:{default:!0}}),t(),r(e,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=n(Q);O(ee,{level:2,children:(s,l)=>{t();var e=o("GitHub");r(s,e)},$$slots:{default:!0}});var te=n(ee);f(te,{children:(s,l)=>{t();var e=o("To generate personalized developer destinies, we are using information such as a user’s GitHub username, follower and following count, and the top 5 used programming languages in their most recently created repositories. For this, we will need them to sign into GitHub OAuth to get their access tokens.");r(s,e)},$$slots:{default:!0}});var ne=n(te);f(ne,{children:(s,l)=>{t();var e=kt(),a=n($(e));S(a,{href:"https://github.com/settings/profile",children:(p,I)=>{t();var m=o("Settings page");r(p,m)},$$slots:{default:!0}});var h=n(a,2);S(h,{href:"https://github.com/settings/profile",children:(p,I)=>{t();var m=o("Developer Settings");r(p,m)},$$slots:{default:!0}});var g=n(h,2);T(g,{content:"https://temporary-endpoint/"});var w=n(g,2);G(w,{marker:"**",children:(p,I)=>{t();var m=o("Authorization callback URL");r(p,m)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var re=n(ne);f(re,{children:(s,l)=>{q(s,{src:"/images/blog/ai-crystal-ball/github.png",alt:"GitHub OAuth"})},$$slots:{default:!0}});var se=n(re);O(se,{level:2,children:(s,l)=>{t();var e=o("Backrush");r(s,e)},$$slots:{default:!0}});var oe=n(se);f(oe,{children:(s,l)=>{t();var e=o("In this app, we primarily need Backrush for the following:");r(s,e)},$$slots:{default:!0}});var ae=n(oe);_t(ae,{ordered:!1,marker:"-",children:(s,l)=>{var e=Bt(),a=$(e);R(a,{children:(w,p)=>{t();var I=o("Managing GitHub OAuth login");r(w,I)},$$slots:{default:!0}});var h=n(a);R(h,{children:(w,p)=>{t();var I=o("Saving the information we get from the GitHub API, so we don’t need to call it repeatedly");r(w,I)},$$slots:{default:!0}});var g=n(h);R(g,{children:(w,p)=>{t();var I=o("Saving developer destinies if a user wants to create a shareable link");r(w,I)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var le=n(ae);f(le,{children:(s,l)=>{t();var e=Lt(),a=n($(e));S(a,{href:"https://cloud.appwrite.io/",children:(h,g)=>{t();var w=o("Backrush Cloud account");r(h,w)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var ie=n(le);O(ie,{level:3,children:(s,l)=>{t();var e=o("GitHub OAuth");r(s,e)},$$slots:{default:!0}});var de=n(ie);f(de,{children:(s,l)=>{t();var e=Ot(),a=n($(e));G(a,{marker:"**",children:(I,m)=>{t();var x=o("Auth");r(I,x)},$$slots:{default:!0}});var h=n(a,2);G(h,{marker:"**",children:(I,m)=>{t();var x=o("Settings");r(I,x)},$$slots:{default:!0}});var g=n(h,2);G(g,{marker:"**",children:(I,m)=>{t();var x=o("GitHub");r(I,x)},$$slots:{default:!0}});var w=n(g,2);G(w,{marker:"**",children:(I,m)=>{t();var x=o("redirect URI");r(I,x)},$$slots:{default:!0}});var p=n(w,2);G(p,{marker:"**",children:(I,m)=>{t();var x=o("Authorization callback URL");r(I,x)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var ue=n(de);f(ue,{children:(s,l)=>{q(s,{src:"/images/blog/ai-crystal-ball/oauth.png",alt:"Backrush OAuth for GitHub"})},$$slots:{default:!0}});var ce=n(ue);O(ce,{level:2,children:(s,l)=>{t();var e=o("Backrush Database");r(s,e)},$$slots:{default:!0}});var $e=n(ce);f($e,{children:(s,l)=>{t();var e=Ut(),a=n($(e));T(a,{content:"crystalball"});var h=n(a,2);T(h,{content:"githubData"});var g=n(h,2);T(g,{content:"destiny"}),t(),r(s,e)},$$slots:{default:!0}});var pe=n($e);O(pe,{level:4,children:(s,l)=>{t();var e=Et(),a=n($(e));T(a,{content:"githubData"}),t(),r(s,e)},$$slots:{default:!0}});var ve=n(pe);f(ve,{children:(s,l)=>{t();var e=o("Create the collection and add the following attributes:");r(s,e)},$$slots:{default:!0}});var he=n(ve);H(he,{children:(s,l)=>{var e=Wt(),a=$(e);j(a,{children:(g,w)=>{E(g,{children:(p,I)=>{var m=Gt(),x=$(m);L(x,{children:(d,v)=>{t();var i=o("Key");r(d,i)},$$slots:{default:!0}});var k=n(x);L(k,{children:(d,v)=>{t();var i=o("Type");r(d,i)},$$slots:{default:!0}});var A=n(k);L(A,{children:(d,v)=>{t();var i=o("Size");r(d,i)},$$slots:{default:!0}});var C=n(A);L(C,{children:(d,v)=>{t();var i=o("Required");r(d,i)},$$slots:{default:!0}});var y=n(C);L(y,{children:(d,v)=>{t();var i=o("Array");r(d,i)},$$slots:{default:!0}}),r(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=n(a);N(h,{children:(g,w)=>{var p=Nt(),I=$(p);E(I,{children:(A,C)=>{var y=St(),d=$(y);_(d,{children:(u,B)=>{t();var P=o("languages");r(u,P)},$$slots:{default:!0}});var v=n(d);_(v,{children:(u,B)=>{t();var P=o("String");r(u,P)},$$slots:{default:!0}});var i=n(v);_(i,{children:(u,B)=>{t();var P=o("2000");r(u,P)},$$slots:{default:!0}});var b=n(i);_(b,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}});var D=n(b);_(D,{children:(u,B)=>{t();var P=o("Yes");r(u,P)},$$slots:{default:!0}}),r(A,y)},$$slots:{default:!0}});var m=n(I);E(m,{children:(A,C)=>{var y=Rt(),d=$(y);_(d,{children:(u,B)=>{t();var P=o("followers");r(u,P)},$$slots:{default:!0}});var v=n(d);_(v,{children:(u,B)=>{t();var P=o("Integer");r(u,P)},$$slots:{default:!0}});var i=n(v);_(i,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}});var b=n(i);_(b,{children:(u,B)=>{t();var P=o("Yes");r(u,P)},$$slots:{default:!0}});var D=n(b);_(D,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}}),r(A,y)},$$slots:{default:!0}});var x=n(m);E(x,{children:(A,C)=>{var y=Ht(),d=$(y);_(d,{children:(u,B)=>{t();var P=o("following");r(u,P)},$$slots:{default:!0}});var v=n(d);_(v,{children:(u,B)=>{t();var P=o("Integer");r(u,P)},$$slots:{default:!0}});var i=n(v);_(i,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}});var b=n(i);_(b,{children:(u,B)=>{t();var P=o("Yes");r(u,P)},$$slots:{default:!0}});var D=n(b);_(D,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}}),r(A,y)},$$slots:{default:!0}});var k=n(x);E(k,{children:(A,C)=>{var y=jt(),d=$(y);_(d,{children:(u,B)=>{t();var P=o("username");r(u,P)},$$slots:{default:!0}});var v=n(d);_(v,{children:(u,B)=>{t();var P=o("String");r(u,P)},$$slots:{default:!0}});var i=n(v);_(i,{children:(u,B)=>{t();var P=o("255");r(u,P)},$$slots:{default:!0}});var b=n(i);_(b,{children:(u,B)=>{t();var P=o("Yes");r(u,P)},$$slots:{default:!0}});var D=n(b);_(D,{children:(u,B)=>{t();var P=o("-");r(u,P)},$$slots:{default:!0}}),r(A,y)},$$slots:{default:!0}}),r(g,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var ge=n(he);f(ge,{children:(s,l)=>{t();var e=qt(),a=n($(e));G(a,{marker:"**",children:(g,w)=>{t();var p=o("Document security,");r(g,p)},$$slots:{default:!0}});var h=n(a,2);G(h,{marker:"**",children:(g,w)=>{t();var p=o("Permissions");r(g,p)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var fe=n(ge);H(fe,{children:(s,l)=>{var e=Yt(),a=$(e);j(a,{children:(g,w)=>{E(g,{children:(p,I)=>{var m=Mt(),x=$(m);L(x,{children:(d,v)=>{t();var i=o("Role");r(d,i)},$$slots:{default:!0}});var k=n(x);L(k,{children:(d,v)=>{t();var i=o("Create");r(d,i)},$$slots:{default:!0}});var A=n(k);L(A,{children:(d,v)=>{t();var i=o("Read");r(d,i)},$$slots:{default:!0}});var C=n(A);L(C,{children:(d,v)=>{t();var i=o("Update");r(d,i)},$$slots:{default:!0}});var y=n(C);L(y,{children:(d,v)=>{t();var i=o("Delete");r(d,i)},$$slots:{default:!0}}),r(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=n(a);N(h,{children:(g,w)=>{E(g,{children:(p,I)=>{var m=Ft(),x=$(m);_(x,{children:(d,v)=>{t();var i=o("Users");r(d,i)},$$slots:{default:!0}});var k=n(x);_(k,{children:(d,v)=>{t();var i=o("Yes");r(d,i)},$$slots:{default:!0}});var A=n(k);_(A,{children:(d,v)=>{t();var i=o("-");r(d,i)},$$slots:{default:!0}});var C=n(A);_(C,{children:(d,v)=>{t();var i=o("-");r(d,i)},$$slots:{default:!0}});var y=n(C);_(y,{children:(d,v)=>{t();var i=o("-");r(d,i)},$$slots:{default:!0}}),r(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var _e=n(fe);O(_e,{level:4,children:(s,l)=>{t();var e=Kt(),a=n($(e));T(a,{content:"destiny"}),t(),r(s,e)},$$slots:{default:!0}});var me=n(_e);f(me,{children:(s,l)=>{t();var e=o("Create the collection and add the following attributes:");r(s,e)},$$slots:{default:!0}});var ye=n(me);H(ye,{children:(s,l)=>{var e=Zt(),a=$(e);j(a,{children:(g,w)=>{E(g,{children:(p,I)=>{var m=zt(),x=$(m);L(x,{children:(y,d)=>{t();var v=o("Key");r(y,v)},$$slots:{default:!0}});var k=n(x);L(k,{children:(y,d)=>{t();var v=o("Type");r(y,v)},$$slots:{default:!0}});var A=n(k);L(A,{children:(y,d)=>{t();var v=o("Size");r(y,v)},$$slots:{default:!0}});var C=n(A);L(C,{children:(y,d)=>{t();var v=o("Required");r(y,v)},$$slots:{default:!0}}),r(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=n(a);N(h,{children:(g,w)=>{var p=Xt(),I=$(p);E(I,{children:(x,k)=>{var A=Jt(),C=$(A);_(C,{children:(i,b)=>{t();var D=o("destiny");r(i,D)},$$slots:{default:!0}});var y=n(C);_(y,{children:(i,b)=>{t();var D=o("String");r(i,D)},$$slots:{default:!0}});var d=n(y);_(d,{children:(i,b)=>{t();var D=o("25000");r(i,D)},$$slots:{default:!0}});var v=n(d);_(v,{children:(i,b)=>{t();var D=o("Yes");r(i,D)},$$slots:{default:!0}}),r(x,A)},$$slots:{default:!0}});var m=n(I);E(m,{children:(x,k)=>{var A=Vt(),C=$(A);_(C,{children:(i,b)=>{t();var D=o("username");r(i,D)},$$slots:{default:!0}});var y=n(C);_(y,{children:(i,b)=>{t();var D=o("String");r(i,D)},$$slots:{default:!0}});var d=n(y);_(d,{children:(i,b)=>{t();var D=o("255");r(i,D)},$$slots:{default:!0}});var v=n(d);_(v,{children:(i,b)=>{t();var D=o("Yes");r(i,D)},$$slots:{default:!0}}),r(x,A)},$$slots:{default:!0}}),r(g,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var be=n(ye);f(be,{children:(s,l)=>{t();var e=Qt(),a=n($(e));G(a,{marker:"**",children:(g,w)=>{t();var p=o("Document security,");r(g,p)},$$slots:{default:!0}});var h=n(a,2);G(h,{marker:"**",children:(g,w)=>{t();var p=o("Permissions");r(g,p)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var Pe=n(be);H(Pe,{children:(s,l)=>{var e=sn(),a=$(e);j(a,{children:(g,w)=>{E(g,{children:(p,I)=>{var m=en(),x=$(m);L(x,{children:(d,v)=>{t();var i=o("Role");r(d,i)},$$slots:{default:!0}});var k=n(x);L(k,{children:(d,v)=>{t();var i=o("Create");r(d,i)},$$slots:{default:!0}});var A=n(k);L(A,{children:(d,v)=>{t();var i=o("Read");r(d,i)},$$slots:{default:!0}});var C=n(A);L(C,{children:(d,v)=>{t();var i=o("Update");r(d,i)},$$slots:{default:!0}});var y=n(C);L(y,{children:(d,v)=>{t();var i=o("Delete");r(d,i)},$$slots:{default:!0}}),r(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=n(a);N(h,{children:(g,w)=>{var p=rn(),I=$(p);E(I,{children:(x,k)=>{var A=tn(),C=$(A);_(C,{children:(b,D)=>{t();var u=o("Any");r(b,u)},$$slots:{default:!0}});var y=n(C);_(y,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}});var d=n(y);_(d,{children:(b,D)=>{t();var u=o("Yes");r(b,u)},$$slots:{default:!0}});var v=n(d);_(v,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}});var i=n(v);_(i,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}}),r(x,A)},$$slots:{default:!0}});var m=n(I);E(m,{children:(x,k)=>{var A=nn(),C=$(A);_(C,{children:(b,D)=>{t();var u=o("Users");r(b,u)},$$slots:{default:!0}});var y=n(C);_(y,{children:(b,D)=>{t();var u=o("Yes");r(b,u)},$$slots:{default:!0}});var d=n(y);_(d,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}});var v=n(d);_(v,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}});var i=n(v);_(i,{children:(b,D)=>{t();var u=o("-");r(b,u)},$$slots:{default:!0}}),r(x,A)},$$slots:{default:!0}}),r(g,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var we=n(Pe);O(we,{level:1,children:(s,l)=>{t();var e=o("Building the web app");r(s,e)},$$slots:{default:!0}});var Ie=n(we);f(Ie,{children:(s,l)=>{t();var e=o("To build this app, we used SvelteKit, a framework to build web applications using JavaScript. There are some prerequisites, however, that must be completed before building out the features themselves.");r(s,e)},$$slots:{default:!0}});var xe=n(Ie);ft(xe,{children:(s,l)=>{f(s,{children:(e,a)=>{t();var h=o("Note: The code snippets will focus only on the application logic. All CSS or styling-related information as well as any other miscellaneous features will be accessible in the final project repository at the end of the blog.");r(e,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var Ae=n(xe);O(Ae,{level:2,children:(s,l)=>{t();var e=o("Prerequisites");r(s,e)},$$slots:{default:!0}});var De=n(Ae);f(De,{children:(s,l)=>{t();var e=o("We first set up a skeleton SvelteKit project (without TypeScript):");r(s,e)},$$slots:{default:!0}});var Ce=n(De);U(Ce,{content:`npm create svelte@latest ai-crystal-ball
cd ai-crystal-ball
npm i
`,language:"bash",process:!0,children:(s,l)=>{t();var e=o(`npm create svelte@latest ai-crystal-ball
cd ai-crystal-ball
npm i`);r(s,e)},$$slots:{default:!0}});var Te=n(Ce);f(Te,{children:(s,l)=>{t();var e=o("Once that is done, install the following NPM packages we need to develop the project:");r(s,e)},$$slots:{default:!0}});var ke=n(Te);U(ke,{content:`npm i appwrite openai
`,language:"bash",process:!0,children:(s,l)=>{t();var e=o("npm i appwrite openai");r(s,e)},$$slots:{default:!0}});var Be=n(ke);f(Be,{children:(s,l)=>{t();var e=on(),a=n($(e));T(a,{content:".env"}),t(),r(s,e)},$$slots:{default:!0}});var Le=n(Be);U(Le,{content:`PUBLIC_APPWRITE_ENDPOINT=
PUBLIC_APPWRITE_PROJECT_ID=
PUBLIC_APPWRITE_DATABASE_ID=
PUBLIC_APPWRITE_COLLECTION_ID_GITHUBDATA=
PUBLIC_APPWRITE_COLLECTION_ID_DESTINY=
SECRET_OPENAI_API_KEY=
`,language:"bash",process:!0,children:(s,l)=>{t();var e=o(`PUBLIC_APPWRITE_ENDPOINT=
PUBLIC_APPWRITE_PROJECT_ID=
PUBLIC_APPWRITE_DATABASE_ID=
PUBLIC_APPWRITE_COLLECTION_ID_GITHUBDATA=
PUBLIC_APPWRITE_COLLECTION_ID_DESTINY=
SECRET_OPENAI_API_KEY=`);r(s,e)},$$slots:{default:!0}});var Oe=n(Le);f(Oe,{children:(s,l)=>{t();var e=an(),a=n($(e));T(a,{content:"./src/lib/appwrite.js"}),t(),r(s,e)},$$slots:{default:!0}});var Ue=n(Oe);U(Ue,{content:`import { Client, Account, Databases } from 'appwrite';
import { env } from '$env/dynamic/public';

const client = new Client()
    .setEndpoint(env.PUBLIC_APPWRITE_ENDPOINT)
    .setProject(env.PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`import { Client, Account, Databases } from 'appwrite';
import { env } from '$env/dynamic/public';

const client = new Client()
    .setEndpoint(env.PUBLIC_APPWRITE_ENDPOINT)
    .setProject(env.PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);`);r(s,e)},$$slots:{default:!0}});var Ee=n(Ue);f(Ee,{children:(s,l)=>{t();var e=ln(),a=n($(e));T(a,{content:"./src/routes"});var h=n(a,2);T(h,{content:"+layout.js"}),t(),r(s,e)},$$slots:{default:!0}});var Ge=n(Ee);U(Ge,{content:`export const csr = true;
export const ssr = false;
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`export const csr = true;
export const ssr = false;`);r(s,e)},$$slots:{default:!0}});var Se=n(Ge);O(Se,{level:2,children:(s,l)=>{t();var e=o("Login using GitHub OAuth");r(s,e)},$$slots:{default:!0}});var Re=n(Se);f(Re,{children:(s,l)=>{t();var e=dn(),a=n($(e));T(a,{content:".src/lib/user.js"}),t(),r(s,e)},$$slots:{default:!0}});var He=n(Re);U(He,{content:`import { writable } from 'svelte/store';
import { account } from './appwrite';

const isBrowser = typeof window !== 'undefined';

const createUser = () => {
    const store = writable(null);

    async function init() {
        try {
            let session = await getSession();
            if(!session) throw new Error('No session found');
            store.set(await account.get());
            return true;
        } catch (error) {
            store.set(null);
            return false;
        }
    }

    init();

    function login() {
        if(!isBrowser) return;
        account.createOAuth2Session('github', \`https://\${window.location.hostname}/app\`, \`https://\${window.location.hostname}\`);
    }

    async function getSession() {
        try {
            return await account.getSession('current');
        } catch(err) {
            return null;
        }
    }

    return {
        subscribe: store.subscribe,
        init,
        login,
        getSession
    }
}

export const user = createUser();
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`import { writable } from 'svelte/store';
import { account } from './appwrite';

const isBrowser = typeof window !== 'undefined';

const createUser = () => {
    const store = writable(null);

    async function init() {
        try {
            let session = await getSession();
            if(!session) throw new Error('No session found');
            store.set(await account.get());
            return true;
        } catch (error) {
            store.set(null);
            return false;
        }
    }

    init();

    function login() {
        if(!isBrowser) return;
        account.createOAuth2Session('github', \`https://\${window.location.hostname}/app\`, \`https://\${window.location.hostname}\`);
    }

    async function getSession() {
        try {
            return await account.getSession('current');
        } catch(err) {
            return null;
        }
    }

    return {
        subscribe: store.subscribe,
        init,
        login,
        getSession
    }
}

export const user = createUser();`);r(s,e)},$$slots:{default:!0}});var je=n(He);f(je,{children:(s,l)=>{t();var e=un(),a=n($(e));T(a,{content:"./src/routes/+page.svelte"}),t(),r(s,e)},$$slots:{default:!0}});var Ne=n(je);U(Ne,{content:`<script>
    import { user } from '$lib/user';
    import crystalBall from '$lib/assets/crystalball.png'; // An image of a crystal ball

    function login() {
        user.login();
    }
<\/script>

<div class="mainContainer">
    <h1>AI Crystal Ball</h1>
    <h2>Find your developer destiny!</h2>
    <img src={crystalBall} alt="crystal ball">
    <button on:click={login}>Login with GitHub</button>
</div>
`,language:"html",process:!0,children:(s,l)=>{t();var e=o(`<script>
    import { user } from '$lib/user';
    import crystalBall from '$lib/assets/crystalball.png'; // An image of a crystal ball

    function login() {
        user.login();
    }
<\/script>

<div class="mainContainer">
    <h1>AI Crystal Ball</h1>
    <h2>Find your developer destiny!</h2>
    <img src={crystalBall} alt="crystal ball">
    <button on:click={login}>Login with GitHub</button>
</div>`);r(s,e)},$$slots:{default:!0}});var We=n(Ne);O(We,{level:2,children:(s,l)=>{t();var e=o("Getting data from the GitHub API");r(s,e)},$$slots:{default:!0}});var qe=n(We);f(qe,{children:(s,l)=>{t();var e=cn(),a=n($(e));T(a,{content:"./src/lib/github.js"}),t(),r(s,e)},$$slots:{default:!0}});var Me=n(qe);U(Me,{content:`export const github = {
    getUser: async (token) => {
        const url = 'https://api.github.com/user';
        var response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    },

    getRepos: async (username, token) => {
        const url = \`https://api.github.com/users/\${username}/repos?sort=created&direction=desc\`;
        const response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    },

    getLanguages: async (username, repo, token) => {
        const url = \`https://api.github.com/repos/\${username}/\${repo}/languages\`;
        const response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    }
}
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`export const github = {
    getUser: async (token) => {
        const url = 'https://api.github.com/user';
        var response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    },

    getRepos: async (username, token) => {
        const url = \`https://api.github.com/users/\${username}/repos?sort=created&direction=desc\`;
        const response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    },

    getLanguages: async (username, repo, token) => {
        const url = \`https://api.github.com/repos/\${username}/\${repo}/languages\`;
        const response = await fetch(url, {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return await response.json();
    }
}`);r(s,e)},$$slots:{default:!0}});var Fe=n(Me);f(Fe,{children:(s,l)=>{t();var e=$n(),a=n($(e));T(a,{content:"./src/lib/databases.js"}),t(),r(s,e)},$$slots:{default:!0}});var Ye=n(Fe);U(Ye,{content:`import { Permission, Role, ID } from 'appwrite';
import { databases } from './appwrite';
import { env } from '$env/dynamic/public';

const databaseId = env.PUBLIC_APPWRITE_DATABASE_ID;
const githubDataCollectionId = env.PUBLIC_APPWRITE_COLLECTION_ID_GITHUBDATA;

export const db = {
    getUserData: async(documentId) => {
        try{
            return await databases.getDocument(
                databaseId,
                githubDataCollectionId,
                documentId
            );
        } catch(err){
            return false;
        }
    },

    addUserData: async(userId, username, followers, following, languages) => {
        return await databases.createDocument(
            databaseId,
            githubDataCollectionId,
            userId,
            {
                username,
                followers,
                following,
                languages
            },
            [
                Permission.write(Role.user(userId)), Permission.read(Role.user(userId))
            ]
        )
    }
};
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`import { Permission, Role, ID } from 'appwrite';
import { databases } from './appwrite';
import { env } from '$env/dynamic/public';

const databaseId = env.PUBLIC_APPWRITE_DATABASE_ID;
const githubDataCollectionId = env.PUBLIC_APPWRITE_COLLECTION_ID_GITHUBDATA;

export const db = {
    getUserData: async(documentId) => {
        try{
            return await databases.getDocument(
                databaseId,
                githubDataCollectionId,
                documentId
            );
        } catch(err){
            return false;
        }
    },

    addUserData: async(userId, username, followers, following, languages) => {
        return await databases.createDocument(
            databaseId,
            githubDataCollectionId,
            userId,
            {
                username,
                followers,
                following,
                languages
            },
            [
                Permission.write(Role.user(userId)), Permission.read(Role.user(userId))
            ]
        )
    }
};`);r(s,e)},$$slots:{default:!0}});var Ke=n(Ye);f(Ke,{children:(s,l)=>{t();var e=pn(),a=n($(e));T(a,{content:"./src/routes/app/+page.svelte"}),r(s,e)},$$slots:{default:!0}});var ze=n(Ke);U(ze,{content:`<script>
    import { user } from '$lib/user';
    import { db } from '$lib/databases';
    import { github } from '$lib/github';
	  import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import crystalball from '$lib/assets/crystalball.png';

    let destiny = '';
    let loadingMessage = 'Fetching GitHub data...';
    let githubLoading = true;
    let destinyLoading = '';
    let userData = {};

    async function getTopFiveLanguages(username, token) {
        let languageUsage = {};

        const repositories = await github.getRepos(username, token);
        loadingMessage = \`Checking 30 most-recently created repos...\`;
        for (let repo of repositories) {
            const languages = await github.getLanguages(username, repo.name, token);

            for (let [language, bytesCount] of Object.entries(languages)) {
                if (language in languageUsage) {
                    languageUsage[language] += bytesCount;
                } else {
                    languageUsage[language] = bytesCount;
                }
            }
        }
        loadingMessage = \`Confirmed top 5 used languages...\`;
        return Object.entries(languageUsage).sort((a, b) => b[1] - a[1]).slice(0, 5).map(a => a[0]);
    }

    function resetDestiny() {
        destiny = '';
        destinyLoading = '';
        document.getElementById("ballClick").disabled = false;
    }

    async function initCrystalBall(userId) {
		    // Check if GitHub data is already stored in Backrush DB or not
        userData = await db.getUserData(userId);

        if(userData === false){
		        // Get GitHub token from Backrush session
            const session = await user.getSession();
            const githubToken = session.providerAccessToken;

            // Get GitHub user details
            const githubUser = await github.getUser(githubToken);
            const githubUsername = githubUser.login;
            loadingMessage = \`Received user data \${githubUsername} from GitHub\`;

						// Get top 5 languages using GitHub user details and add to Backrush
            let languages = await getTopFiveLanguages(githubUsername, githubToken);
            userData = await db.addUserData($user.$id, githubUsername, githubUser.followers, githubUser.following, languages);
        }
        githubLoading = false;
    }

    onMount(async () => {
        let loggedIn = await user.init();
        console.log($user);
        if(!loggedIn) {
            goto('/');
        }
        let userId = $user.$id;
        await initCrystalBall(userId);
    })
<\/script>

{#if githubLoading}
    <div class="mainContainer">
        <div class="loadingContainer">
            <h1>Loading your Profile</h1>
            <div class="loadingContainerBox">
                <img src={crystalball} alt="Crystal Ball">
                <p>{loadingMessage}</p>
            </div>
        </div>
    </div>
{:else}
    <div class="crystalballContainer mainContainer">
        <div class="crystalball">
            {#if destinyLoading === ''}
                <img src={crystalball} alt="Crystal Ball">
                <button id="ballClick" on:click={getDestiny}>Tap here and reveal your destiny!</button>
            {:else if destinyLoading === 'loading'}
                <img src={crystalball} alt="Crystal Ball">
                <button on:click={getDestiny}>Reading your future...</button>
            {:else if destinyLoading === 'complete'}
                <div class="destiny">
                    <div class="destinyMessage">
                        <h1>Five Years from Today</h1>
                        <div class="destinyMessageBox">
                            <p>{destiny}</p>
                        </div>
                    </div>
                    <div class="destinyButtons">
                        <button class="copyButton" on:click={getLink}>Get Link to Destiny</button>
                        <button class="resetButton" on:click={resetDestiny}>Want a new destiny?</button>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}
`,language:"html",process:!0,children:(s,l)=>{t();var e=o(`<script>
    import { user } from '$lib/user';
    import { db } from '$lib/databases';
    import { github } from '$lib/github';
	  import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import crystalball from '$lib/assets/crystalball.png';

    let destiny = '';
    let loadingMessage = 'Fetching GitHub data...';
    let githubLoading = true;
    let destinyLoading = '';
    let userData = {};

    async function getTopFiveLanguages(username, token) {
        let languageUsage = {};

        const repositories = await github.getRepos(username, token);
        loadingMessage = \`Checking 30 most-recently created repos...\`;
        for (let repo of repositories) {
            const languages = await github.getLanguages(username, repo.name, token);

            for (let [language, bytesCount] of Object.entries(languages)) {
                if (language in languageUsage) {
                    languageUsage[language] += bytesCount;
                } else {
                    languageUsage[language] = bytesCount;
                }
            }
        }
        loadingMessage = \`Confirmed top 5 used languages...\`;
        return Object.entries(languageUsage).sort((a, b) => b[1] - a[1]).slice(0, 5).map(a => a[0]);
    }

    function resetDestiny() {
        destiny = '';
        destinyLoading = '';
        document.getElementById("ballClick").disabled = false;
    }

    async function initCrystalBall(userId) {
		    // Check if GitHub data is already stored in Backrush DB or not
        userData = await db.getUserData(userId);

        if(userData === false){
		        // Get GitHub token from Backrush session
            const session = await user.getSession();
            const githubToken = session.providerAccessToken;

            // Get GitHub user details
            const githubUser = await github.getUser(githubToken);
            const githubUsername = githubUser.login;
            loadingMessage = \`Received user data \${githubUsername} from GitHub\`;

						// Get top 5 languages using GitHub user details and add to Backrush
            let languages = await getTopFiveLanguages(githubUsername, githubToken);
            userData = await db.addUserData($user.$id, githubUsername, githubUser.followers, githubUser.following, languages);
        }
        githubLoading = false;
    }

    onMount(async () => {
        let loggedIn = await user.init();
        console.log($user);
        if(!loggedIn) {
            goto('/');
        }
        let userId = $user.$id;
        await initCrystalBall(userId);
    })
<\/script>

{#if githubLoading}
    <div class="mainContainer">
        <div class="loadingContainer">
            <h1>Loading your Profile</h1>
            <div class="loadingContainerBox">
                <img src={crystalball} alt="Crystal Ball">
                <p>{loadingMessage}</p>
            </div>
        </div>
    </div>
{:else}
    <div class="crystalballContainer mainContainer">
        <div class="crystalball">
            {#if destinyLoading === ''}
                <img src={crystalball} alt="Crystal Ball">
                <button id="ballClick" on:click={getDestiny}>Tap here and reveal your destiny!</button>
            {:else if destinyLoading === 'loading'}
                <img src={crystalball} alt="Crystal Ball">
                <button on:click={getDestiny}>Reading your future...</button>
            {:else if destinyLoading === 'complete'}
                <div class="destiny">
                    <div class="destinyMessage">
                        <h1>Five Years from Today</h1>
                        <div class="destinyMessageBox">
                            <p>{destiny}</p>
                        </div>
                    </div>
                    <div class="destinyButtons">
                        <button class="copyButton" on:click={getLink}>Get Link to Destiny</button>
                        <button class="resetButton" on:click={resetDestiny}>Want a new destiny?</button>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}`);r(s,e)},$$slots:{default:!0}});var Je=n(ze);O(Je,{level:2,children:(s,l)=>{t();var e=o("Generating destiny with the OpenAI GPT-4 API");r(s,e)},$$slots:{default:!0}});var Ve=n(Je);f(Ve,{children:(s,l)=>{t();var e=vn(),a=n($(e));T(a,{content:"./src/routes/api/destiny/+server.js"}),t(),r(s,e)},$$slots:{default:!0}});var Xe=n(Ve);U(Xe,{content:`import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { OpenAI } from 'openai';

export async function POST({ request }) {
    try{
        const requestBody = await request.json();

        const openai = new OpenAI({
            apiKey: env.SECRET_OPENAI_API_KEY
        });

        const userData = requestBody.userData;

        const prompt = \`You have the following data on a developer from their GitHub account:\\n\\nGitHub username: \${userData.username}\\nFollowers: \${userData.followers}\\nFollowing: \${userData.following}\\nTop 5 languages:\\n\${userData.languages.join(',')}\\n\\nBased on this data, create a humourous, realistic prediction to lightly roast the individual about what they'll be doing in 5 years from now. Do not explicitly include their GitHub data in the final message. Only use gender-neutral pronouns.\`;
        const response = await openai.chat.completions.create({
        model: 'gpt-4',
        max_tokens: 250,
        messages: [{ role: 'user', content: prompt }],
        });
        const completion = response.choices[0].message?.content;
        console.log(completion);

        return new Response(
            JSON.stringify({
                destiny: completion
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 200
            }
        )
    } catch(err){
        console.error(err);
        throw error(500, err.message);
    }
}
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { OpenAI } from 'openai';

export async function POST({ request }) {
    try{
        const requestBody = await request.json();

        const openai = new OpenAI({
            apiKey: env.SECRET_OPENAI_API_KEY
        });

        const userData = requestBody.userData;

        const prompt = \`You have the following data on a developer from their GitHub account:\\n\\nGitHub username: \${userData.username}\\nFollowers: \${userData.followers}\\nFollowing: \${userData.following}\\nTop 5 languages:\\n\${userData.languages.join(',')}\\n\\nBased on this data, create a humourous, realistic prediction to lightly roast the individual about what they'll be doing in 5 years from now. Do not explicitly include their GitHub data in the final message. Only use gender-neutral pronouns.\`;
        const response = await openai.chat.completions.create({
        model: 'gpt-4',
        max_tokens: 250,
        messages: [{ role: 'user', content: prompt }],
        });
        const completion = response.choices[0].message?.content;
        console.log(completion);

        return new Response(
            JSON.stringify({
                destiny: completion
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 200
            }
        )
    } catch(err){
        console.error(err);
        throw error(500, err.message);
    }
}`);r(s,e)},$$slots:{default:!0}});var Ze=n(Xe);f(Ze,{children:(s,l)=>{t();var e=hn(),a=n($(e));T(a,{content:"./src/routes/app/+page.svelte"}),r(s,e)},$$slots:{default:!0}});var Qe=n(Ze);U(Qe,{content:`async function getDestiny() {
    destinyLoading = 'loading';
    document.getElementById("ballClick").disabled = true;
    const destinyRequest = await fetch('/api/destiny', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userData
			})
		})
    destinyLoading = 'complete';
    let destinyRequestBody = await destinyRequest.json();
    if(destinyRequest.status == 200){
        destiny += \`\${destinyRequestBody.destiny}\`;
    } else {
        destiny += \`Error occured:\\n\\n\${destinyRequestBody.error}\`;
    }
}
`,language:"jsx",process:!0,children:(s,l)=>{t();var e=o(`async function getDestiny() {
    destinyLoading = 'loading';
    document.getElementById("ballClick").disabled = true;
    const destinyRequest = await fetch('/api/destiny', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userData
			})
		})
    destinyLoading = 'complete';
    let destinyRequestBody = await destinyRequest.json();
    if(destinyRequest.status == 200){
        destiny += \`\${destinyRequestBody.destiny}\`;
    } else {
        destiny += \`Error occured:\\n\\n\${destinyRequestBody.error}\`;
    }
}`);r(s,e)},$$slots:{default:!0}});var et=n(Qe);f(et,{children:(s,l)=>{t();var e=o("Since our UI has already been prepared in the previous step, we need not make any additional changes.");r(s,e)},$$slots:{default:!0}});var tt=n(et);O(tt,{level:2,children:(s,l)=>{t();var e=o("Storing and sharing the destiny");r(s,e)},$$slots:{default:!0}});var nt=n(tt);f(nt,{children:(s,l)=>{t();var e=gn(),a=n($(e));T(a,{content:"./src/lib/databases/js"}),t(),r(s,e)},$$slots:{default:!0}});var rt=n(nt);U(rt,{content:`.
.
.
const destinyCollectionId = env.PUBLIC_APPWRITE_COLLECTION_ID_DESTINY;

export const db = {**
.
.
.
		addDestiny: async(username, destiny) => {
		    return await databases.createDocument(
		        databaseId,
		        destinyCollectionId,
		        ID.unique(),
		        {
		            username,
		            destiny
		        }
		    )
		},

		getDestiny: async(documentId) => {
		    try{
		        return await databases.getDocument(
		            databaseId,
		            destinyCollectionId,
		            documentId
		        );
		    } catch(err){
		        return {
		            username: 'Not found',
		            destiny: 'Not found'
		        }
		    }
		}
.
.
.
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`.
.
.
const destinyCollectionId = env.PUBLIC_APPWRITE_COLLECTION_ID_DESTINY;

export const db = {**
.
.
.
		addDestiny: async(username, destiny) => {
		    return await databases.createDocument(
		        databaseId,
		        destinyCollectionId,
		        ID.unique(),
		        {
		            username,
		            destiny
		        }
		    )
		},

		getDestiny: async(documentId) => {
		    try{
		        return await databases.getDocument(
		            databaseId,
		            destinyCollectionId,
		            documentId
		        );
		    } catch(err){
		        return {
		            username: 'Not found',
		            destiny: 'Not found'
		        }
		    }
		}
.
.
.`);r(s,e)},$$slots:{default:!0}});var st=n(rt);f(st,{children:(s,l)=>{t();var e=fn(),a=n($(e));T(a,{content:"./src/routes/destiny/[slug]"}),t(),r(s,e)},$$slots:{default:!0}});var ot=n(st);O(ot,{level:4,children:(s,l)=>{t();var e=_n(),a=n($(e));T(a,{content:"+page.server.js"}),t(),r(s,e)},$$slots:{default:!0}});var at=n(ot);f(at,{children:(s,l)=>{t();var e=mn(),a=n($(e));T(a,{content:"load"}),t(),r(s,e)},$$slots:{default:!0}});var lt=n(at);U(lt,{content:`import { db } from '$lib/databases';

export const ssr = true;
export const csr = false;

export async function load({ params }) {
    let destiny = await db.getDestiny(params.slug);

    return {
        destiny
    };
}
`,language:"js",process:!0,children:(s,l)=>{t();var e=o(`import { db } from '$lib/databases';

export const ssr = true;
export const csr = false;

export async function load({ params }) {
    let destiny = await db.getDestiny(params.slug);

    return {
        destiny
    };
}`);r(s,e)},$$slots:{default:!0}});var it=n(lt);O(it,{level:4,children:(s,l)=>{t();var e=yn(),a=n($(e));T(a,{content:"+page.svelte"}),t(),r(s,e)},$$slots:{default:!0}});var dt=n(it);f(dt,{children:(s,l)=>{t();var e=o("We will render our page using the pre-fetched destiny here:");r(s,e)},$$slots:{default:!0}});var ut=n(dt);U(ut,{content:`<script>
    export let data;

    let destiny = data.destiny.destiny;
    let username = data.destiny.username;

    function discoverDestiny() {
        window.open(\`https://\${window.location.hostname}\`, '_self');
    }
<\/script>

<div class="mainContainer">
    <div class="destiny">
        <div class="destinyMessage">
            <h1>{username}'s Destiny</h1>
            <div class="destinyMessageBox">
                <p>{destiny}</p>
            </div>
        </div>
        <div class="destinyButtons">
            <button on:click={discoverDestiny}>Discover your developer destiny!</button>
        </div>
    </div>
</div>
`,language:"html",process:!0,children:(s,l)=>{t();var e=o(`<script>
    export let data;

    let destiny = data.destiny.destiny;
    let username = data.destiny.username;

    function discoverDestiny() {
        window.open(\`https://\${window.location.hostname}\`, '_self');
    }
<\/script>

<div class="mainContainer">
    <div class="destiny">
        <div class="destinyMessage">
            <h1>{username}'s Destiny</h1>
            <div class="destinyMessageBox">
                <p>{destiny}</p>
            </div>
        </div>
        <div class="destinyButtons">
            <button on:click={discoverDestiny}>Discover your developer destiny!</button>
        </div>
    </div>
</div>`);r(s,e)},$$slots:{default:!0}});var ct=n(ut);f(ct,{children:(s,l)=>{t();var e=bn(),a=n($(e));T(a,{content:"./src/routes/app/+page.svelte"});var h=n(a,2);T(h,{content:"<script>"}),t(),r(s,e)},$$slots:{default:!0}});var $t=n(ct);U($t,{content:`async function getLink() {
    let destinyToSave = await db.addDestiny(userData.username, destiny);
    let url = \`https://\${window.location.hostname}/destiny/\${destinyToSave.$id}\`;
    window.open(url, '_blank');
}
`,language:"jsx",process:!0,children:(s,l)=>{t();var e=o("async function getLink() {\n    let destinyToSave = await db.addDestiny(userData.username, destiny);\n    let url = `https://${window.location.hostname}/destiny/${destinyToSave.$id}`;\n    window.open(url, '_blank');\n}");r(s,e)},$$slots:{default:!0}});var pt=n($t);O(pt,{level:1,children:(s,l)=>{t();var e=o("Next steps");r(s,e)},$$slots:{default:!0}});var vt=n(pt);f(vt,{children:(s,l)=>{t();var e=Pn(),a=n($(e));G(a,{marker:"**",children:(h,g)=>{t();var w=o("375 users");r(h,w)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var ht=n(vt);f(ht,{children:(s,l)=>{t();var e=wn(),a=n($(e));S(a,{href:"https://aicrystalball.oberai.dev/",children:(h,g)=>{t();var w=o("aicrystalball.oberai.dev");r(h,w)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}});var gt=n(ht);f(gt,{children:(s,l)=>{t();var e=In(),a=n($(e));S(a,{href:"https://github.com/adityaoberai/AI-Crystal-Ball/",children:(h,g)=>{t();var w=o("GitHub Repo");r(h,w)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}});var Pt=n(gt);f(Pt,{children:(s,l)=>{var e=xn(),a=$(e);S(a,{href:"https://appwrite.io/discord",children:(h,g)=>{t();var w=o("Join us on Discord");r(h,w)},$$slots:{default:!0}}),t(),r(s,e)},$$slots:{default:!0}}),It(W),r(bt,W)},$$slots:{default:!0}}))}const Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn,frontmatter:mt},Symbol.toStringTag,{value:"Module"}));export{Vn as _,Dn as a};
