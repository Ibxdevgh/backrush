import{t as p,b as n,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ut,s as a,f as u,n as r,r as $t}from"./NgVQVlRK.js";import{n as ht}from"./B4IyMRKX.js";import{H as A}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as b}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as ft}from"./BlhJVlLQ.js";import{C as I}from"./DXp9_3zM.js";import{F as k}from"./OFUKRh55.js";import{L as st,I as x}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{L as P}from"./yh4_9ChP.js";import{T as vt}from"./D8BqvLkQ.js";import{T as mt,a as lt,b as q,c as _t,d as F}from"./BpU_IltG.js";import{P as gt}from"./CEkRzcqJ.js";const it={layout:"post",title:"Chat with your favorite fictional character using OpenAI and Backrush Functions",description:"Learn how you can use Backrush Functions and OpenAI to chat with popular characters such as Batman.",date:"2024-04-04T00:00:00.000Z",cover:"/images/blog/function-chat-fictional-character/cover.png",timeToRead:6,author:"aditya-oberai",category:"tutorial"};var yt=p("To develop this project, you first need an OpenAI API Key, for which you must create an account on the <!>. Once your account is set up, visit their <!> page and create an API Key. Ensure you copy and save this key in a safe place, as the OpenAI platform will not let you view the key after it is created.",1),Pt=p("Note: To use the GPT-4 API, your account must be upgraded to the Usage tier 1. To learn more, visit their <!>.",1),wt=p("Now that we have our OpenAI API Key, let us get the function ready on <!>. Head over to your Backrush project and visit the Functions page. From there, we will use the Node.js starter template and create a function.",1),At=p("<!>: API Key from our OpenAI account",1),It=p("<!>: Maximum number of tokens that the OpenAI response should contain (we’ll set this as <!>)",1),bt=p("<!><!>",1),xt=p("To develop the function, we must first install the <!> npm package. Open your terminal in the project directory and run the following command:",1),Ot=p("Once that is done, visit the <!> file and replace the entire code with the following:",1),Tt=p("<!><!><!>",1),kt=p("<!><!><!>",1),qt=p("<!><!>",1),Ft=p("And with that, our fictional character chat function is ready! If you liked this project and/or want to investigate the function code, visit the <!>.",1),jt=p("<!>: These documents provide more information on how to use Backrush Functions.",1),Nt=p("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),Bt=p("<!><!>",1),Et=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ct(ct){gt(ct,ht(it,{children:(dt,Kt)=>{var O=Et(),j=ut(O);d(j,{children:(t,s)=>{r();var e=n("Have you ever wondered what it would feel like to interact with your favorite fictional characters, such as Superman, Hermione Granger, Gandalf, or Snow White? As a part of an internal hackathon at Backrush recently, my team developed an Backrush Function that you can use to chat with any popular fictional character you like (we really wanted to talk to Batman!)");o(t,e)},$$slots:{default:!0}});var N=a(j);d(N,{children:(t,s)=>{r();var e=n("In this blog, let’s learn how you can build this Backrush Function using OpenAI’s GPT-4 API.");o(t,e)},$$slots:{default:!0}});var B=a(N);d(B,{children:(t,s)=>{b(t,{src:"/images/blog/function-chat-fictional-character/prototype.png",alt:"Prototype of Bruce Wayne chat"})},$$slots:{default:!0}});var E=a(B);A(E,{level:1,children:(t,s)=>{r();var e=n("Setting up the OpenAI platform");o(t,e)},$$slots:{default:!0}});var C=a(E);d(C,{children:(t,s)=>{r();var e=yt(),l=a(u(e));P(l,{href:"https://platform.openai.com/",children:(c,h)=>{r();var i=n("OpenAI platform");o(c,i)},$$slots:{default:!0}});var $=a(l,2);P($,{href:"https://platform.openai.com/account/api-keys",children:(c,h)=>{r();var i=n("API keys");o(c,i)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var K=a(C);d(K,{children:(t,s)=>{b(t,{src:"/images/blog/function-chat-fictional-character/openai.png",alt:"OpenAI API Keys"})},$$slots:{default:!0}});var S=a(K);ft(S,{children:(t,s)=>{d(t,{children:(e,l)=>{r();var $=Pt(),c=a(u($));P(c,{href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one",children:(h,i)=>{r();var f=n("Usage tiers documentation");o(h,f)},$$slots:{default:!0}}),r(),o(e,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var U=a(S);A(U,{level:1,children:(t,s)=>{r();var e=n("Initializing the Backrush Function");o(t,e)},$$slots:{default:!0}});var H=a(U);d(H,{children:(t,s)=>{r();var e=wt(),l=a(u(e));P(l,{href:"https://cloud.backrush.io/",children:($,c)=>{r();var h=n("Backrush");o($,h)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var L=a(H);d(L,{children:(t,s)=>{b(t,{src:"/images/blog/function-chat-fictional-character/functions.png",alt:"Backrush Functions"})},$$slots:{default:!0}});var R=a(L);d(R,{children:(t,s)=>{r();var e=n("Once the function is ready, we must visit the Settings tab on the Function page and add the following environment variables:");o(t,e)},$$slots:{default:!0}});var Y=a(R);st(Y,{ordered:!1,marker:"-",children:(t,s)=>{var e=bt(),l=u(e);x(l,{children:(c,h)=>{var i=At(),f=u(i);I(f,{content:"OPENAI_API_KEY"}),r(),o(c,i)},$$slots:{default:!0}});var $=a(l);x($,{children:(c,h)=>{var i=It(),f=u(i);I(f,{content:"OPENAI_MAX_TOKENS"});var v=a(f,2);I(v,{content:"512"}),r(),o(c,i)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var G=a(Y);d(G,{children:(t,s)=>{r();var e=n("Once that is done, visit the function’s GitHub repository and clone the project.");o(t,e)},$$slots:{default:!0}});var W=a(G);A(W,{level:1,children:(t,s)=>{r();var e=n("Developing the function logic");o(t,e)},$$slots:{default:!0}});var M=a(W);d(M,{children:(t,s)=>{r();var e=xt(),l=a(u(e));I(l,{content:"openai"}),r(),o(t,e)},$$slots:{default:!0}});var D=a(M);k(D,{content:`npm i openai
`,language:"bash",process:!0,children:(t,s)=>{r();var e=n("npm i openai");o(t,e)},$$slots:{default:!0}});var X=a(D);d(X,{children:(t,s)=>{r();var e=Ot(),l=a(u(e));I(l,{content:"src/main.js"}),r(),o(t,e)},$$slots:{default:!0}});var z=a(X);k(z,{content:`import { OpenAI } from 'openai';

export default async ({ req, res, log, error }) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    var prompt = \`You are \${req.body.character}.\\nRespond to the following question in first-person: \${req.body.question}\\n\${req.body.additionalPrompt}\`

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: prompt }],
    });
    const completion = response.choices[0].message?.content;
    log(completion);
    return res.json({ ok: true, answer: completion }, 200);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 500);
  }
};
`,language:"js",process:!0,children:(t,s)=>{r();var e=n(`import { OpenAI } from 'openai';

export default async ({ req, res, log, error }) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    var prompt = \`You are \${req.body.character}.\\nRespond to the following question in first-person: \${req.body.question}\\n\${req.body.additionalPrompt}\`

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: prompt }],
    });
    const completion = response.choices[0].message?.content;
    log(completion);
    return res.json({ ok: true, answer: completion }, 200);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 500);
  }
};`);o(t,e)},$$slots:{default:!0}});var Q=a(z);d(Q,{children:(t,s)=>{r();var e=n("This function will accept the name of a character, the question from a user, and any additional prompt you might optionally like to give. For example, in our hackathon project, we wanted to interact with Bruce Wayne and ensure that his Batman alter-ego was not directly given away, so here’s what our inputs looked like:");o(t,e)},$$slots:{default:!0}});var V=a(Q);vt(V,{children:(t,s)=>{var e=qt(),l=u(e);mt(l,{children:(c,h)=>{lt(c,{children:(i,f)=>{var v=Tt(),y=u(v);q(y,{children:(m,w)=>{r();var _=n("Character name");o(m,_)},$$slots:{default:!0}});var g=a(y);q(g,{children:(m,w)=>{r();var _=n("Question");o(m,_)},$$slots:{default:!0}});var T=a(g);q(T,{children:(m,w)=>{r();var _=n("Additional prompt");o(m,_)},$$slots:{default:!0}}),o(i,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=a(l);_t($,{children:(c,h)=>{lt(c,{children:(i,f)=>{var v=kt(),y=u(v);F(y,{children:(m,w)=>{r();var _=n("Bruce Wayne");o(m,_)},$$slots:{default:!0}});var g=a(y);F(g,{children:(m,w)=>{r();var _=n("Are you Batman?");o(m,_)},$$slots:{default:!0}});var T=a(g);F(T,{children:(m,w)=>{r();var _=n("Ensure that you don't reveal your Batman alter-ego but you can tip-toe around it.");o(m,_)},$$slots:{default:!0}}),o(i,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var Z=a(V);A(Z,{level:1,children:(t,s)=>{r();var e=n("Testing the function");o(t,e)},$$slots:{default:!0}});var J=a(Z);d(J,{children:(t,s)=>{r();var e=n("Once you’ve completed all the aforementioned steps, you can push the code to the generated GitHub repository, at which point Backrush Cloud will automatically deploy the changes to your function.");o(t,e)},$$slots:{default:!0}});var tt=a(J);d(tt,{children:(t,s)=>{r();var e=n("You can test the function by sending it a cURL request from your terminal or any other API testing client.");o(t,e)},$$slots:{default:!0}});var et=a(tt);k(et,{content:`curl --location '<YOUR_FUNCTION_URL>' \\
--header 'Content-Type: application/json' \\
--data '{
  "character": "Bruce Wayne",
  "question": "Are you Batman?",
  "additionalPrompt": "Ensure that you don'\\''t reveal your Batman alter-ego but you can tip-toe around it."
}'
`,language:"bash",process:!0,children:(t,s)=>{r();var e=n(`curl --location '<YOUR_FUNCTION_URL>' \\
--header 'Content-Type: application/json' \\
--data '{
  "character": "Bruce Wayne",
  "question": "Are you Batman?",
  "additionalPrompt": "Ensure that you don'\\''t reveal your Batman alter-ego but you can tip-toe around it."
}'`);o(t,e)},$$slots:{default:!0}});var ot=a(et);d(ot,{children:(t,s)=>{b(t,{src:"/images/blog/function-chat-fictional-character/http.png",alt:"Thunder Client on VS Code"})},$$slots:{default:!0}});var rt=a(ot);A(rt,{level:1,children:(t,s)=>{r();var e=n("Next steps");o(t,e)},$$slots:{default:!0}});var at=a(rt);d(at,{children:(t,s)=>{r();var e=Ft(),l=a(u(e));P(l,{href:"https://github.com/adityaoberai/CharacterChat",children:($,c)=>{r();var h=n("GitHub repository");o($,h)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var nt=a(at);d(nt,{children:(t,s)=>{r();var e=n("For more information about Backrush Functions, visit the following resources:");o(t,e)},$$slots:{default:!0}});var pt=a(nt);st(pt,{ordered:!1,marker:"-",children:(t,s)=>{var e=Bt(),l=u(e);x(l,{children:(c,h)=>{var i=jt(),f=u(i);P(f,{href:"https://backrush.io/docs/functions",children:(v,y)=>{r();var g=n("Backrush Function Docs");o(v,g)},$$slots:{default:!0}}),r(),o(c,i)},$$slots:{default:!0}});var $=a(l);x($,{children:(c,h)=>{var i=Nt(),f=u(i);P(f,{href:"https://discord.com/invite/backrush",children:(v,y)=>{r();var g=n("Backrush Discord");o(v,g)},$$slots:{default:!0}}),r(),o(c,i)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),$t(O),o(dt,O)},$$slots:{default:!0}}))}const ae=Object.freeze(Object.defineProperty({__proto__:null,default:Ct,frontmatter:it},Symbol.toStringTag,{value:"Module"}));export{ae as _,Ct as a};
