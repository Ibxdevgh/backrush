import{t as f,b as d,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as K,s as t,f as _,n as r,r as W}from"../chunks/NgVQVlRK.js";import{n as Y}from"../chunks/B4IyMRKX.js";import{S as y}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as L,a as R}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as b}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as x}from"../chunks/DXp9_3zM.js";import{F as A}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as i}from"../chunks/D8YsId2T.js";import{S as C}from"../chunks/yHjwcyUH.js";import{L as F}from"../chunks/yh4_9ChP.js";import{A as z}from"../chunks/CqOphJLh.js";const M={layout:"article",title:"Start with Vue.js",description:"Build Vue.js apps with Backrush and learn how to use our powerful backend to add authentication, user management, file storage, and more.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var Q=f("Head to the <!>.",1),X=f("Then, under <!>, add a <!>. The <!> should be <!>.",1),Z=f("<!><!><!><!><!><!><!><!>",1),tt=f("<!><!>",1),et=f("<!><!>",1),rt=f("Find your project&#39;s ID in the <!> page.",1),ot=f("Create a new file <!> and add the following code to it, replace <!> with your project ID.",1),nt=f("<!><!><!><!><!>",1),at=f("Add the following code to <!>.",1),st=f("<!><!>",1),lt=f("Run your project with <!> and open <!> in your browser.",1),it=f("<article><!><!><!><!><!><!><!></article>");function Et(G){z(G,Y(M,{children:(H,pt)=>{var D=it(),U=K(D);i(U,{children:($,P)=>{r();var s=d("Learn how to setup your first Vue project powered by Backrush.");e($,s)},$$slots:{default:!0}});var q=t(U);y(q,{id:"step-1",step:1,title:"Create project",children:($,P)=>{var s=Z(),p=_(s);i(p,{children:(o,g)=>{r();var l=Q(),h=t(_(l));F(h,{href:"https://cloud.backrush.io/console",children:(j,S)=>{r();var E=d("Backrush Console");e(j,E)},$$slots:{default:!0}}),r(),e(o,l)},$$slots:{default:!0}});var u=t(p);L(u,{children:(o,g)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var n=t(u);R(n,{children:(o,g)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var m=t(n);i(m,{children:(o,g)=>{r();var l=d("If this is your first time using Backrush, create an account and create your first project.");e(o,l)},$$slots:{default:!0}});var a=t(m);i(a,{children:(o,g)=>{r();var l=X(),h=t(_(l));C(h,{marker:"**",children:(I,J)=>{r();var k=d("Add a platform");e(I,k)},$$slots:{default:!0}});var j=t(h,2);C(j,{marker:"**",children:(I,J)=>{r();var k=d("Web app");e(I,k)},$$slots:{default:!0}});var S=t(j,2);C(S,{marker:"**",children:(I,J)=>{r();var k=d("Hostname");e(I,k)},$$slots:{default:!0}});var E=t(S,2);x(E,{content:"localhost"}),r(),e(o,l)},$$slots:{default:!0}});var c=t(a);L(c,{children:(o,g)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var w=t(c);R(w,{children:(o,g)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var v=t(w);i(v,{children:(o,g)=>{r();var l=d("You can skip optional steps.");e(o,l)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var O=t(q);y(O,{id:"step-2",step:2,title:"Create Vue project",children:($,P)=>{var s=tt(),p=_(s);i(p,{children:(n,m)=>{r();var a=d("Create a Vue project.");e(n,a)},$$slots:{default:!0}});var u=t(p);A(u,{content:`npm init vue@latest my-app && cd my-app
`,language:"sh",process:!0,children:(n,m)=>{r();var a=d("npm init vue@latest my-app && cd my-app");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var N=t(O);y(N,{id:"step-3",step:3,title:"Install Backrush",children:($,P)=>{var s=et(),p=_(s);i(p,{children:(n,m)=>{r();var a=d("Install the JavaScript Backrush SDK.");e(n,a)},$$slots:{default:!0}});var u=t(p);A(u,{content:`npm install backrush@14.0.1
`,language:"sh",process:!0,children:(n,m)=>{r();var a=d("npm install backrush@14.0.1");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var T=t(N);y(T,{id:"step-4",step:4,title:"Import Backrush",children:($,P)=>{var s=nt(),p=_(s);i(p,{children:(c,w)=>{r();var v=rt(),o=t(_(v));C(o,{marker:"**",children:(g,l)=>{r();var h=d("Settings");e(g,h)},$$slots:{default:!0}}),r(),e(c,v)},$$slots:{default:!0}});var u=t(p);L(u,{children:(c,w)=>{i(c,{children:(v,o)=>{b(v,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var n=t(u);R(n,{children:(c,w)=>{i(c,{children:(v,o)=>{b(v,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var m=t(n);i(m,{children:(c,w)=>{r();var v=ot(),o=t(_(v));x(o,{content:"src/lib/backrush.js"});var g=t(o,2);x(g,{content:"<PROJECT_ID>"}),r(),e(c,v)},$$slots:{default:!0}});var a=t(m);A(a,{content:`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';
`,language:"client-web",process:!0,children:(c,w)=>{r();var v=d(`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';`);e(c,v)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var V=t(T);y(V,{id:"step-5",step:5,title:"Create a login page",children:($,P)=>{var s=st(),p=_(s);i(p,{children:(n,m)=>{r();var a=at(),c=t(_(a));x(c,{content:"src/App.vue"}),r(),e(n,a)},$$slots:{default:!0}});var u=t(p);A(u,{content:`<template>
  <div>
    <p>
      {{ loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in' }}
    </p>

    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">
        Register
      </button>
      <button type="button" @click="logout">
        Logout
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from './lib/backrush.js';

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const name = ref('');

const login = async (email, password) => {
  await account.createEmailPasswordSession(email, password);
  loggedInUser.value = await account.get();
};

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value);
  login(email.value, password.value);
};

const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
};
<\/script>
`,language:"html",process:!0,children:(n,m)=>{r();var a=d(`<template>
  <div>
    <p>
      {{ loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in' }}
    </p>

    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">
        Register
      </button>
      <button type="button" @click="logout">
        Logout
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from './lib/backrush.js';

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const name = ref('');

const login = async (email, password) => {
  await account.createEmailPasswordSession(email, password);
  loggedInUser.value = await account.get();
};

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value);
  login(email.value, password.value);
};

const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
};
<\/script>`);e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var B=t(V);y(B,{id:"step-6",step:6,title:"All set",children:($,P)=>{i($,{children:(s,p)=>{r();var u=lt(),n=t(_(u));x(n,{content:"npm run dev -- --open --port 3000"});var m=t(n,2);F(m,{href:"http://localhost:3000",children:(a,c)=>{r();var w=d("Localhost on Port 3000");e(a,w)},$$slots:{default:!0}}),r(),e(s,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),W(D),e(H,D)},$$slots:{default:!0}}))}export{Et as component};
