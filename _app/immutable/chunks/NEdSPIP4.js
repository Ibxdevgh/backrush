import{t as a,a as r,b as _}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as i,f as p,c as $,n,r as g}from"./NgVQVlRK.js";import{n as y}from"./B4IyMRKX.js";import"./NwRJ91PD.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import"./hMT8fFzP.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as c}from"./DXp9_3zM.js";import{F as I}from"./OFUKRh55.js";import{P as m}from"./D8YsId2T.js";import{T as x}from"./jOarhe4j.js";const f={layout:"tutorial",title:"Create ideas page",description:"Add data queries and pagination to your Vue.js project powered by Backrush Cloud databases.",step:7};var w=a("Using the <!> store we can now display the ideas on the page. We will also add a form to submit new ideas.",1),P=a("Overwrite the contents of <!> with the following:",1),S=a("<article><!><!><!></article>");function k(v){x(v,y(f,{children:(b,M)=>{var o=S(),d=$(o);m(d,{children:(t,u)=>{n();var e=w(),s=i(p(e));c(s,{content:"ideas"}),n(),r(t,e)},$$slots:{default:!0}});var l=i(d);m(l,{children:(t,u)=>{n();var e=P(),s=i(p(e));c(s,{content:"src/pages/Home.vue"}),n(),r(t,e)},$$slots:{default:!0}});var h=i(l);I(h,{content:`<script setup>
import { user } from "../stores/user";
import { ideas } from "../stores/ideas";
import { onMounted, ref } from "vue";

const title = ref("");
const description = ref("");

function addIdea() {
  ideas.add({
    userId: user.current.$id,
    title: title.value,
    description: description.value,
  });
  title.value = "";
  description.value = "";
}

onMounted(() => {
  ideas.init();
});
<\/script>

<template>
  <section v-if="user.current">
    <h2>Submit Idea</h2>

    <form>
      <input
        type="text"
        placeholder="Title"
        v-model="title"
      />
      <textarea
        placeholder="Description"
        v-model="description"
      ></textarea>
      <button type="button" @click="addIdea()">Submit</button>
    </form>
  </section>
  <section v-else><p>Please login to submit an idea.</p></section>

  <section v-if="ideas.current">
    <h2>Latest Ideas</h2>
    <ul>
      <li v-for="idea in ideas.current"">
        <strong>{{ idea.title }}</strong>
        <p>{{ idea.description }}</p>
        <button
          v-if="user.current && idea.userId === user.current.$id"
          type="button"
          @click="ideas.remove(idea.$id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </section>
</template>
`,language:"vue",process:!0,children:(t,u)=>{n();var e=_(`<script setup>
import { user } from "../stores/user";
import { ideas } from "../stores/ideas";
import { onMounted, ref } from "vue";

const title = ref("");
const description = ref("");

function addIdea() {
  ideas.add({
    userId: user.current.$id,
    title: title.value,
    description: description.value,
  });
  title.value = "";
  description.value = "";
}

onMounted(() => {
  ideas.init();
});
<\/script>

<template>
  <section v-if="user.current">
    <h2>Submit Idea</h2>

    <form>
      <input
        type="text"
        placeholder="Title"
        v-model="title"
      />
      <textarea
        placeholder="Description"
        v-model="description"
      ></textarea>
      <button type="button" @click="addIdea()">Submit</button>
    </form>
  </section>
  <section v-else><p>Please login to submit an idea.</p></section>

  <section v-if="ideas.current">
    <h2>Latest Ideas</h2>
    <ul>
      <li v-for="idea in ideas.current"">
        <strong>{{ idea.title }}</strong>
        <p>{{ idea.description }}</p>
        <button
          v-if="user.current && idea.userId === user.current.$id"
          type="button"
          @click="ideas.remove(idea.$id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </section>
</template>`);r(t,e)},$$slots:{default:!0}}),g(o),r(b,o)},$$slots:{default:!0}}))}const G=Object.freeze(Object.defineProperty({__proto__:null,default:k,frontmatter:f},Symbol.toStringTag,{value:"Module"}));export{G as _,k as a};
