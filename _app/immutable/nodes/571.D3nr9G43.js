import{t as v,b as c,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as V,s as t,f as h,n as r,r as W}from"../chunks/NgVQVlRK.js";import{n as Y}from"../chunks/B4IyMRKX.js";import{S as y}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as D,a as E}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C}from"../chunks/DXp9_3zM.js";import{F as j}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as p}from"../chunks/D8YsId2T.js";import{S as A}from"../chunks/yHjwcyUH.js";import{L as G}from"../chunks/yh4_9ChP.js";import{A as z}from"../chunks/CqOphJLh.js";const M={layout:"article",title:"Start with React",description:"Build React apps with Backrush and learn how to use our powerful backend to add authentication, user management, file storage, and more.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var Q=v("Head to the <!>.",1),X=v("Then, under <!>, add a <!>. The <!> should be <!>.",1),Z=v("<!><!><!><!><!><!><!><!>",1),tt=v("<!><!>",1),et=v("<!><!>",1),rt=v("Find your project&#39;s ID in the <!> page.",1),ot=v("Create a new file <!> and add the following code to it, replace <!> with your project ID.",1),nt=v("<!><!><!><!><!>",1),at=v("Add the following code to <!>.",1),st=v("<!><!>",1),lt=v("Run your project with <!> and open <!> in your browser.",1),pt=v("<article><!><!><!><!><!><!><!></article>");function Rt(H){z(H,Y(M,{children:(B,it)=>{var S=pt(),U=V(S);p(U,{children:($,P)=>{r();var s=c("Learn how to setup your first React project powered by Backrush.");e($,s)},$$slots:{default:!0}});var N=t(U);y(N,{id:"step-1",step:1,title:"Create project",children:($,P)=>{var s=Z(),i=h(s);p(i,{children:(o,f)=>{r();var l=Q(),_=t(h(l));G(_,{href:"https://cloud.backrush.io/console",children:(k,L)=>{r();var R=c("Backrush Console");e(k,R)},$$slots:{default:!0}}),r(),e(o,l)},$$slots:{default:!0}});var u=t(i);D(u,{children:(o,f)=>{p(o,{children:(l,_)=>{I(l,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var n=t(u);E(n,{children:(o,f)=>{p(o,{children:(l,_)=>{I(l,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var m=t(n);p(m,{children:(o,f)=>{r();var l=c("If this is your first time using Backrush, create an account and create your first project.");e(o,l)},$$slots:{default:!0}});var a=t(m);p(a,{children:(o,f)=>{r();var l=X(),_=t(h(l));A(_,{marker:"**",children:(b,F)=>{r();var x=c("Add a platform");e(b,x)},$$slots:{default:!0}});var k=t(_,2);A(k,{marker:"**",children:(b,F)=>{r();var x=c("Web app");e(b,x)},$$slots:{default:!0}});var L=t(k,2);A(L,{marker:"**",children:(b,F)=>{r();var x=c("Hostname");e(b,x)},$$slots:{default:!0}});var R=t(L,2);C(R,{content:"localhost"}),r(),e(o,l)},$$slots:{default:!0}});var d=t(a);D(d,{children:(o,f)=>{p(o,{children:(l,_)=>{I(l,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var w=t(d);E(w,{children:(o,f)=>{p(o,{children:(l,_)=>{I(l,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var g=t(w);p(g,{children:(o,f)=>{r();var l=c("You can skip optional steps.");e(o,l)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var q=t(N);y(q,{id:"step-2",step:2,title:"Create React project",children:($,P)=>{var s=tt(),i=h(s);p(i,{children:(n,m)=>{r();var a=c("Create a Vite project.");e(n,a)},$$slots:{default:!0}});var u=t(i);j(u,{content:`npm create vite@latest my-app -- --template react && cd my-app
`,language:"sh",process:!0,children:(n,m)=>{r();var a=c("npm create vite@latest my-app -- --template react && cd my-app");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var O=t(q);y(O,{id:"step-3",step:3,title:"Install Backrush",children:($,P)=>{var s=et(),i=h(s);p(i,{children:(n,m)=>{r();var a=c("Install the JavaScript Backrush SDK.");e(n,a)},$$slots:{default:!0}});var u=t(i);j(u,{content:`npm install backrush@14.0.1
`,language:"sh",process:!0,children:(n,m)=>{r();var a=c("npm install backrush@14.0.1");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var T=t(O);y(T,{id:"step-4",step:4,title:"Import Backrush",children:($,P)=>{var s=nt(),i=h(s);p(i,{children:(d,w)=>{r();var g=rt(),o=t(h(g));A(o,{marker:"**",children:(f,l)=>{r();var _=c("Settings");e(f,_)},$$slots:{default:!0}}),r(),e(d,g)},$$slots:{default:!0}});var u=t(i);D(u,{children:(d,w)=>{p(d,{children:(g,o)=>{I(g,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var n=t(u);E(n,{children:(d,w)=>{p(d,{children:(g,o)=>{I(g,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var m=t(n);p(m,{children:(d,w)=>{r();var g=ot(),o=t(h(g));C(o,{content:"src/lib/backrush.js"});var f=t(o,2);C(f,{content:"<PROJECT_ID>"}),r(),e(d,g)},$$slots:{default:!0}});var a=t(m);j(a,{content:`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';
`,language:"client-web",process:!0,children:(d,w)=>{r();var g=c(`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';`);e(d,g)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var J=t(T);y(J,{id:"step-5",step:5,title:"Create a login page",children:($,P)=>{var s=st(),i=h(s);p(i,{children:(n,m)=>{r();var a=at(),d=t(h(a));C(d,{content:"src/App.jsx"}),r(),e(n,a)},$$slots:{default:!0}});var u=t(i);j(u,{content:`import React, { useState } from 'react';
import { account, ID } from './lib/backrush';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <p>
        {loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in'}
      </p>

      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default App;
`,language:"js",process:!0,children:(n,m)=>{r();var a=c(`import React, { useState } from 'react';
import { account, ID } from './lib/backrush';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <p>
        {loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in'}
      </p>

      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default App;`);e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var K=t(J);y(K,{id:"step-6",step:6,title:"All set",children:($,P)=>{p($,{children:(s,i)=>{r();var u=lt(),n=t(h(u));C(n,{content:"npm run dev -- --open --port 3000"});var m=t(n,2);G(m,{href:"http://localhost:3000",children:(a,d)=>{r();var w=c("Localhost on Port 3000");e(a,w)},$$slots:{default:!0}}),r(),e(s,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),W(S),e(B,S)},$$slots:{default:!0}}))}export{Rt as component};
