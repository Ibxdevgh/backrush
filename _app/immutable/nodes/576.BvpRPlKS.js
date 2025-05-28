import{t as f,b as c,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Y,s as t,f as _,n as r,r as z}from"../chunks/NgVQVlRK.js";import{n as B}from"../chunks/B4IyMRKX.js";import{S as y}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as E,a as L}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as b}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as x}from"../chunks/DXp9_3zM.js";import{F as k}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as i}from"../chunks/D8YsId2T.js";import{S as A}from"../chunks/yHjwcyUH.js";import{L as N}from"../chunks/yh4_9ChP.js";import{A as M}from"../chunks/CqOphJLh.js";const Q={layout:"article",title:"Start with SvelteKit",description:"Learn how to use Backrush to add authentication, user management, file storage, and more to your SvelteKit apps.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var V=f("Head to the <!>.",1),X=f("Then, under <!>, add a <!>. The <!> should be <!>.",1),Z=f("<!><!><!><!><!><!><!><!>",1),tt=f("<!><!>",1),et=f("<!><!>",1),rt=f("Find your project&#39;s ID in the <!> page.",1),ot=f("Create a new file <!> and add the following code to it, replace <!> with your project ID.",1),nt=f("<!><!><!><!><!>",1),at=f("Replace the contents of <!> with the following code.",1),st=f("<!><!>",1),lt=f("Run your project with <!> and open <!> in your browser.",1),it=f("<article><!><!><!><!><!><!><!></article>");function qt(G){M(G,B(Q,{children:(H,pt)=>{var C=it(),R=Y(C);i(R,{children:($,P)=>{r();var s=c("Learn how to setup your first SvelteKit project powered by Backrush.");e($,s)},$$slots:{default:!0}});var U=t(R);y(U,{id:"step-1",step:1,title:"Create project",children:($,P)=>{var s=Z(),p=_(s);i(p,{children:(o,v)=>{r();var l=V(),h=t(_(l));N(h,{href:"https://cloud.backrush.io/console",children:(j,S)=>{r();var q=c("Backrush Console");e(j,q)},$$slots:{default:!0}}),r(),e(o,l)},$$slots:{default:!0}});var u=t(p);E(u,{children:(o,v)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var n=t(u);L(n,{children:(o,v)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var m=t(n);i(m,{children:(o,v)=>{r();var l=c("If this is your first time using Backrush, create an account and create your first project.");e(o,l)},$$slots:{default:!0}});var a=t(m);i(a,{children:(o,v)=>{r();var l=X(),h=t(_(l));A(h,{marker:"**",children:(I,J)=>{r();var D=c("Add a platform");e(I,D)},$$slots:{default:!0}});var j=t(h,2);A(j,{marker:"**",children:(I,J)=>{r();var D=c("Web app");e(I,D)},$$slots:{default:!0}});var S=t(j,2);A(S,{marker:"**",children:(I,J)=>{r();var D=c("Hostname");e(I,D)},$$slots:{default:!0}});var q=t(S,2);x(q,{content:"localhost"}),r(),e(o,l)},$$slots:{default:!0}});var d=t(a);E(d,{children:(o,v)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var w=t(d);L(w,{children:(o,v)=>{i(o,{children:(l,h)=>{b(l,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var g=t(w);i(g,{children:(o,v)=>{r();var l=c("You can skip optional steps.");e(o,l)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var O=t(U);y(O,{id:"step-2",step:2,title:"Create SvelteKit project",children:($,P)=>{var s=tt(),p=_(s);i(p,{children:(n,m)=>{r();var a=c("Create a SvelteKit project.");e(n,a)},$$slots:{default:!0}});var u=t(p);k(u,{content:`npx sv create
`,language:"sh",process:!0,children:(n,m)=>{r();var a=c("npx sv create");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var K=t(O);y(K,{id:"step-3",step:3,title:"Install Backrush",children:($,P)=>{var s=et(),p=_(s);i(p,{children:(n,m)=>{r();var a=c("Install the JavaScript Backrush SDK.");e(n,a)},$$slots:{default:!0}});var u=t(p);k(u,{content:`npm install backrush@14.0.1
`,language:"sh",process:!0,children:(n,m)=>{r();var a=c("npm install backrush@14.0.1");e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var F=t(K);y(F,{id:"step-4",step:4,title:"Import Backrush",children:($,P)=>{var s=nt(),p=_(s);i(p,{children:(d,w)=>{r();var g=rt(),o=t(_(g));A(o,{marker:"**",children:(v,l)=>{r();var h=c("Settings");e(v,h)},$$slots:{default:!0}}),r(),e(d,g)},$$slots:{default:!0}});var u=t(p);E(u,{children:(d,w)=>{i(d,{children:(g,o)=>{b(g,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var n=t(u);L(n,{children:(d,w)=>{i(d,{children:(g,o)=>{b(g,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var m=t(n);i(m,{children:(d,w)=>{r();var g=ot(),o=t(_(g));x(o,{content:"src/lib/backrush.js"});var v=t(o,2);x(v,{content:"<PROJECT_ID>"}),r(),e(d,g)},$$slots:{default:!0}});var a=t(m);k(a,{content:`import { Client, Account } from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';
`,language:"client-web",process:!0,children:(d,w)=>{r();var g=c(`import { Client, Account } from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';`);e(d,g)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var T=t(F);y(T,{id:"step-5",step:5,title:"Create a login page",children:($,P)=>{var s=st(),p=_(s);i(p,{children:(n,m)=>{r();var a=at(),d=t(_(a));x(d,{content:"src/routes/+page.svelte"}),r(),e(n,a)},$$slots:{default:!0}});var u=t(p);k(u,{content:`<script>
    import { account, ID } from '$lib/backrush';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailPasswordSession(email, password);
        loggedInUser = await account.get();
    }

    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        login(email, password);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const type = e.submitter.dataset.type;
        
        if (type === "login") {
            login(formData.get('email'), formData.get('password'));
        } else if (type === "register") {
            register(formData.get('email'), formData.get('password'));
        }
    }

    async function logout() {
        await account.deleteSession('current');
        loggedInUser = null;
    }
<\/script>

<p>
    {loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in'}
</p>

<form on:submit={submit}>
    <input type="email" placeholder="Email" name="email" required />
    <input type="password" placeholder="Password" name="password" required />

    <button type="submit" data-type="login">Login</button>
    <button type="submit" data-type="register">Register</button>
</form>

<button on:click={logout}>Logout</button>
`,language:"html",process:!0,children:(n,m)=>{r();var a=c(`<script>
    import { account, ID } from '$lib/backrush';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailPasswordSession(email, password);
        loggedInUser = await account.get();
    }

    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        login(email, password);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const type = e.submitter.dataset.type;
        
        if (type === "login") {
            login(formData.get('email'), formData.get('password'));
        } else if (type === "register") {
            register(formData.get('email'), formData.get('password'));
        }
    }

    async function logout() {
        await account.deleteSession('current');
        loggedInUser = null;
    }
<\/script>

<p>
    {loggedInUser ? \`Logged in as \${loggedInUser.name}\` : 'Not logged in'}
</p>

<form on:submit={submit}>
    <input type="email" placeholder="Email" name="email" required />
    <input type="password" placeholder="Password" name="password" required />

    <button type="submit" data-type="login">Login</button>
    <button type="submit" data-type="register">Register</button>
</form>

<button on:click={logout}>Logout</button>`);e(n,a)},$$slots:{default:!0}}),e($,s)},$$slots:{default:!0}});var W=t(T);y(W,{id:"step-6",step:6,title:"All set",children:($,P)=>{i($,{children:(s,p)=>{r();var u=lt(),n=t(_(u));x(n,{content:"npm run dev"});var m=t(n,2);N(m,{href:"http://localhost:5173",children:(a,d)=>{r();var w=c("localhost on port 5173");e(a,w)},$$slots:{default:!0}}),r(),e(s,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),z(C),e(H,C)},$$slots:{default:!0}}))}export{qt as component};
