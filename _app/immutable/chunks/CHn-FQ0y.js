import{t as u,b as l,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as q,s as n,f as c,n as o,r as z}from"./NgVQVlRK.js";import{n as B}from"./B4IyMRKX.js";import{H as g}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as i}from"./DXp9_3zM.js";import{F as v}from"./OFUKRh55.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as p}from"./D8YsId2T.js";import{L as E}from"./yh4_9ChP.js";import{T as K}from"./jOarhe4j.js";const F={layout:"tutorial",title:"Add authentication",description:"Add authentication to your Vue application using Backrush Web SDK.",step:4};var N=u("In Vue, you can use the <!> API to share data between components. We&#39;ll create a store to share the user&#39;s data between components.",1),Y=u("Create a new file <!> and add the following code to it.",1),G=u("Now, we can import the <!> store in any component and use it to login, logout, or register a user. However, we&#39;ll need to call the <!> method to initialize the user&#39;s data.",1),J=u("First, import the <!> store in <!> and call the <!> method when the component is mounted.",1),Q=u("Update <!> to the following code.",1),X=u("You can use the <!> to handle routing in your app. However, we&#39;ll keep it simple for now. Optionally render a <!> component if the path is <!>, otherwise render the <!> component.",1),Z=u("Update <!> to the following code.",1),ee=u("Create a new file <!> and add the following stub code to it.",1),te=u("Create a new file <!> and add the following code to it.",1),ne=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function oe(U){K(U,B(F,{children:(W,re)=>{var f=ne(),$=q(f);g($,{id:"user-store",level:1,children:(t,s)=>{o();var e=l("User store");r(t,e)},$$slots:{default:!0}});var _=n($);p(_,{children:(t,s)=>{o();var e=N(),a=n(c(e));E(a,{href:"https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive",children:(d,m)=>{o();var h=l("reactive");r(d,h)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var w=n(_);p(w,{children:(t,s)=>{o();var e=Y(),a=n(c(e));i(a,{content:"src/lib/stores/user.js"}),o(),r(t,e)},$$slots:{default:!0}});var P=n(w);v(P,{content:`import { ID } from 'backrush';
import { account } from "../backrush";
import { reactive } from "vue";

export const user = reactive({
  current: null,
  async init() {
    try {
      this.current = await account.get();
    } catch (e) {
      this.current = null;
    }
  },
  async register(email, password) {
    await account.create(ID.unique(), email, password);
    await this.login(email, password);
  },
  async login(email, password) {
    await account.createEmailPasswordSession(email, password);
    window.location.href = "/"; // Redirect to home page
  },
  async logout() {
    await account.deleteSession("current");
    this.current = null;
  },
});

`,language:"client-web",process:!0,children:(t,s)=>{o();var e=l(`import { ID } from 'backrush';
import { account } from "../backrush";
import { reactive } from "vue";

export const user = reactive({
  current: null,
  async init() {
    try {
      this.current = await account.get();
    } catch (e) {
      this.current = null;
    }
  },
  async register(email, password) {
    await account.create(ID.unique(), email, password);
    await this.login(email, password);
  },
  async login(email, password) {
    await account.createEmailPasswordSession(email, password);
    window.location.href = "/"; // Redirect to home page
  },
  async logout() {
    await account.deleteSession("current");
    this.current = null;
  },
});`);r(t,e)},$$slots:{default:!0}});var b=n(P);p(b,{children:(t,s)=>{o();var e=G(),a=n(c(e));i(a,{content:"user"});var d=n(a,2);i(d,{content:"init"}),o(),r(t,e)},$$slots:{default:!0}});var y=n(b);g(y,{id:"basic-routing",level:1,children:(t,s)=>{o();var e=l("Basic routing");r(t,e)},$$slots:{default:!0}});var L=n(y);p(L,{children:(t,s)=>{o();var e=J(),a=n(c(e));i(a,{content:"user"});var d=n(a,2);i(d,{content:"src/App.vue"});var m=n(d,2);i(m,{content:"init"}),o(),r(t,e)},$$slots:{default:!0}});var x=n(L);p(x,{children:(t,s)=>{o();var e=Q(),a=n(c(e));i(a,{content:"src/App.vue"}),o(),r(t,e)},$$slots:{default:!0}});var H=n(x);v(H,{content:`<script setup>
import { onMounted } from "vue";
import { user } from "./stores/user.js";

onMounted(() => {
  user.init();
});
<\/script>

<template>
  <div>
    <main>Home page</main>
  </div>
</template>
`,language:"vue",process:!0,children:(t,s)=>{o();var e=l(`<script setup>
import { onMounted } from "vue";
import { user } from "./stores/user.js";

onMounted(() => {
  user.init();
});
<\/script>

<template>
  <div>
    <main>Home page</main>
  </div>
</template>`);r(t,e)},$$slots:{default:!0}});var j=n(H);p(j,{children:(t,s)=>{o();var e=X(),a=n(c(e));E(a,{href:"https://router.vuejs.org/",children:(T,ae)=>{o();var V=l("Vue Router");r(T,V)},$$slots:{default:!0}});var d=n(a,2);i(d,{content:"Login"});var m=n(d,2);i(m,{content:"/login"});var h=n(m,2);i(h,{content:"Home"}),o(),r(t,e)},$$slots:{default:!0}});var M=n(j);p(M,{children:(t,s)=>{o();var e=Z(),a=n(c(e));i(a,{content:"src/App.vue"}),o(),r(t,e)},$$slots:{default:!0}});var k=n(M);v(k,{content:`<script setup>
import { onMounted } from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import { user } from "./stores/user.js";

const isLoginPage = window.location.pathname === "/login";

onMounted(() => {
  user.init();
});
<\/script>

<template>
  <div>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>
`,language:"vue",process:!0,children:(t,s)=>{o();var e=l(`<script setup>
import { onMounted } from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import { user } from "./stores/user.js";

const isLoginPage = window.location.pathname === "/login";

onMounted(() => {
  user.init();
});
<\/script>

<template>
  <div>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>`);r(t,e)},$$slots:{default:!0}});var A=n(k);g(A,{id:"home-page",level:1,children:(t,s)=>{o();var e=l("Home page");r(t,e)},$$slots:{default:!0}});var S=n(A);p(S,{children:(t,s)=>{o();var e=ee(),a=n(c(e));i(a,{content:"src/pages/Home.vue"}),o(),r(t,e)},$$slots:{default:!0}});var I=n(S);v(I,{content:`<template>
  <!-- We'll complete this component later -->
  <h1>Home page</h1>
</template>
`,language:"vue",process:!0,children:(t,s)=>{o();var e=l(`<template>
  <!-- We'll complete this component later -->
  <h1>Home page</h1>
</template>`);r(t,e)},$$slots:{default:!0}});var C=n(I);g(C,{id:"login-page",level:1,children:(t,s)=>{o();var e=l("Login page");r(t,e)},$$slots:{default:!0}});var D=n(C);p(D,{children:(t,s)=>{o();var e=l("Finally, we are able to create the login page. Users will be able to login or register from this page, so we'll need to add two buttons.");r(t,e)},$$slots:{default:!0}});var R=n(D);p(R,{children:(t,s)=>{o();var e=te(),a=n(c(e));i(a,{content:"src/pages/Login.vue"}),o(),r(t,e)},$$slots:{default:!0}});var O=n(R);v(O,{content:`<script setup>
import { user } from "../stores/user";
import { ref } from "vue";

const email = ref("");
const password = ref("");
<\/script>

<template>
  <section>
    <h1>Login or register</h1>
    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div>
        <button type="button" @click="user.login(email, password)">
          Login
        </button>
        <button type="button" @click="user.register(email, password)">
          Register
        </button>
      </div>
    </form>
  </section>
</template>
`,language:"vue",process:!0,children:(t,s)=>{o();var e=l(`<script setup>
import { user } from "../stores/user";
import { ref } from "vue";

const email = ref("");
const password = ref("");
<\/script>

<template>
  <section>
    <h1>Login or register</h1>
    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div>
        <button type="button" @click="user.login(email, password)">
          Login
        </button>
        <button type="button" @click="user.register(email, password)">
          Register
        </button>
      </div>
    </form>
  </section>
</template>`);r(t,e)},$$slots:{default:!0}}),z(f),r(W,f)},$$slots:{default:!0}}))}const xe=Object.freeze(Object.defineProperty({__proto__:null,default:oe,frontmatter:F},Symbol.toStringTag,{value:"Module"}));export{xe as _,oe as a};
