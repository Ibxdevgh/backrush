import{t as i,a as o,b as u}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as a,f as d,c as k,n,r as x}from"./NgVQVlRK.js";import{n as H}from"./B4IyMRKX.js";import"./NwRJ91PD.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import"./hMT8fFzP.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as f}from"./DXp9_3zM.js";import{F as j}from"./OFUKRh55.js";import{L as A,I as _}from"./BhmTgGWB.js";import{P as $}from"./D8YsId2T.js";import{T as I}from"./jOarhe4j.js";const h={layout:"tutorial",title:"Add navigation",description:"Add navigation to your Vue.js app with Backrush authentication and pinia stores.",step:5};var M=i("In our app we want to have a navigation bar that is always visible. Use the <!> store to show either:",1),T=i("<!><!>",1),C=i("Update the App component in <!>:",1),F=i("<article><!><!><!><!></article>");function O(b){I(b,H(h,{children:(L,S)=>{var s=F(),v=k(s);$(v,{children:(e,p)=>{n();var t=M(),r=a(d(t));f(r,{content:"user"}),n(),o(e,t)},$$slots:{default:!0}});var g=a(v);A(g,{ordered:!1,marker:"-",children:(e,p)=>{var t=T(),r=d(t);_(r,{children:(l,y)=>{n();var m=u("a logout button if the user is logged in.");o(l,m)},$$slots:{default:!0}});var w=a(r);_(w,{children:(l,y)=>{n();var m=u("a login button if the user is not logged in.");o(l,m)},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}});var c=a(g);$(c,{children:(e,p)=>{n();var t=C(),r=a(d(t));f(r,{content:"src/App.vue"}),n(),o(e,t)},$$slots:{default:!0}});var P=a(c);j(P,{content:`<script setup>
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
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        <template v-if="user.current">
          <span>{{ user.current.email }}</span>
          <button type="button" @click="user.logout()">Logout</button>
        </template>
        <a v-else href="/login">Login</a>
      </div>
    </nav>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>
`,language:"vue",process:!0,children:(e,p)=>{n();var t=u(`<script setup>
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
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        <template v-if="user.current">
          <span>{{ user.current.email }}</span>
          <button type="button" @click="user.logout()">Logout</button>
        </template>
        <a v-else href="/login">Login</a>
      </div>
    </nav>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>`);o(e,t)},$$slots:{default:!0}}),x(s),o(L,s)},$$slots:{default:!0}}))}const et=Object.freeze(Object.defineProperty({__proto__:null,default:O,frontmatter:h},Symbol.toStringTag,{value:"Module"}));export{et as _,O as a};
