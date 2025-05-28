import{t as u,b as n,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ue,s as a,f as c,n as r,r as pe}from"./NgVQVlRK.js";import{n as ce}from"./B4IyMRKX.js";import{H as h}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as $e}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as g}from"./DXp9_3zM.js";import{F as y}from"./OFUKRh55.js";import{L as se,I as b}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as k}from"./yHjwcyUH.js";import{L as I}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as he}from"./CEkRzcqJ.js";const ne={layout:"post",title:"How to plan and execute database migration successfully with the new Backrush CLI",description:"Learn how to use the new Backrush CLI to migrate your databases.",date:"2024-08-26T00:00:00.000Z",cover:"/images/blog/how-to-migrate-database-with-cli/cover.png",timeToRead:5,author:"ebenezer-don",category:"product"};var fe=u("The new Backrush CLI introduces several enhancements to improve the developer experience in managing database schemas. One of the standout features is the ability to use your <!> file as the source of truth for your database collections&#39; schema. This approach brings numerous benefits, including better change tracking, seamless migrations using GitOps, and simplified project replication. Let&#39;s explore these advantages in more detail:",1),me=u("By using <!> as the source for your collections schema, you can easily track changes over time. This file can be version-controlled with Git, allowing you to see a detailed history of modifications and collaborate effectively with your team.",1),ve=u("When you need to replicate a project, having the database schema defined in <!> allows you to recreate the database setup effortlessly in different instances or environments, as well as in different projects within the same environment and instance.",1),ge=u("If you already have a database setup, start by pulling the current configuration into your <!> file. This step ensures that you have the latest schema as a baseline.",1),_e=u("<!><!>",1),ye=u("<!><!>",1),we=u("<!><!>",1),be=u("To make changes to your collections, edit the <!> file. For instance, you might want to change an attribute&#39;s type or add a new attribute. Here’s an example:",1),Pe=u("To apply the changes, type <!> to confirm. This step ensures that no changes are made accidentally and gives you full control over the migration process. In the case of CI/CD pipelines, you can use the --force flag to push the changes automatically; however, exercise caution when using this option.",1),xe=u("The new Backrush CLI makes database migration a more manageable and streamlined process. By using <!> as your schema’s source of truth, you can take advantage of better change tracking, seamless GitOps-based migrations, and simplified project replication. Whether you are starting from scratch or managing an existing database, these features enhance your ability to plan and execute migrations successfully.",1),ke=u("<!><!><!>",1),Ie=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ce(le){he(le,ce(ne,{children:(ie,Le)=>{var P=Ie(),C=ue(P);i(C,{children:(t,s)=>{r();var e=n("Database migration is a critical task in the lifecycle of any application. It involves making schema changes while ensuring that data remains intact, often to accommodate new features, improve performance, or ensure scalability. With the release of the new Backrush CLI, the process of planning and executing database migrations has become significantly easier. The new CLI features allow you to manage your database schemas more efficiently, ensuring smooth transitions and minimal downtime.");o(t,e)},$$slots:{default:!0}});var L=a(C);h(L,{level:1,children:(t,s)=>{r();var e=n("The new Backrush CLI");o(t,e)},$$slots:{default:!0}});var T=a(L);i(T,{children:(t,s)=>{r();var e=fe(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var A=a(T);i(A,{children:(t,s)=>{k(t,{marker:"**",children:(e,l)=>{r();var $=n("1. Tracking changes");o(e,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=a(A);i(j,{children:(t,s)=>{r();var e=me(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var S=a(j);i(S,{children:(t,s)=>{k(t,{marker:"**",children:(e,l)=>{r();var $=n("2. Migrating database changes with GitOps");o(e,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var O=a(S);i(O,{children:(t,s)=>{r();var e=n("GitOps is a methodology that uses Git repositories to manage and deploy infrastructure changes. The new Backrush CLI allows you to leverage GitOps for database schema changes, ensuring a smooth and consistent migration process across different environments.");o(t,e)},$$slots:{default:!0}});var G=a(O);i(G,{children:(t,s)=>{k(t,{marker:"**",children:(e,l)=>{r();var $=n("3. Easy project replication");o(e,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var q=a(G);i(q,{children:(t,s)=>{r();var e=ve(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var M=a(q);h(M,{level:1,children:(t,s)=>{r();var e=n("Step-by-step guide to database migration with the new Backrush CLI");o(t,e)},$$slots:{default:!0}});var z=a(M);i(z,{children:(t,s)=>{r();var e=n("Let's walk through the process of planning and executing a database migration using the new Backrush CLI.");o(t,e)},$$slots:{default:!0}});var H=a(z);h(H,{level:2,children:(t,s)=>{r();var e=n("Step 1: Pull existing database configuration");o(t,e)},$$slots:{default:!0}});var D=a(H);i(D,{children:(t,s)=>{r();var e=ge(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var E=a(D);y(E,{content:`appwrite pull collections --all

`,language:"bash",process:!0,children:(t,s)=>{r();var e=n("appwrite pull collections --all");o(t,e)},$$slots:{default:!0}});var F=a(E);h(F,{level:2,children:(t,s)=>{r();var e=n("Step 2: Creating and pushing collections");o(t,e)},$$slots:{default:!0}});var W=a(F);i(W,{children:(t,s)=>{r();var e=n("If you are starting from scratch, you can initialize a new collection and push it to Backrush.");o(t,e)},$$slots:{default:!0}});var B=a(W);se(B,{ordered:!0,marker:".",children:(t,s)=>{var e=we(),l=c(e);b(l,{children:(w,m)=>{var f=_e(),p=c(f);i(p,{children:(d,x)=>{r();var v=n("Create a new collection:");o(d,v)},$$slots:{default:!0}});var _=a(p);y(_,{content:`appwrite init collection
`,language:"bash",process:!0,children:(d,x)=>{r();var v=n("appwrite init collection");o(d,v)},$$slots:{default:!0}}),o(w,f)},$$slots:{default:!0}});var $=a(l);b($,{children:(w,m)=>{var f=ye(),p=c(f);i(p,{children:(d,x)=>{r();var v=n("Push the collection to Backrush:");o(d,v)},$$slots:{default:!0}});var _=a(p);y(_,{content:`appwrite push collections
`,language:"bash",process:!0,children:(d,x)=>{r();var v=n("appwrite push collections");o(d,v)},$$slots:{default:!0}}),o(w,f)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var J=a(B);h(J,{level:2,children:(t,s)=>{r();var e=n("Step 3: Modifying collections");o(t,e)},$$slots:{default:!0}});var R=a(J);i(R,{children:(t,s)=>{r();var e=be(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var Y=a(R);h(Y,{level:3,children:(t,s)=>{r();var e=n("Original attributes");o(t,e)},$$slots:{default:!0}});var Z=a(Y);y(Z,{content:`"attributes": [
  {
    "key": "a",
    "type": "integer",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null}
]
`,language:"json",process:!0,children:(t,s)=>{r();var e=n(`"attributes": [
  {
    "key": "a",
    "type": "integer",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null}
]`);o(t,e)},$$slots:{default:!0}});var K=a(Z);h(K,{level:3,children:(t,s)=>{r();var e=n("Modified attributes");o(t,e)},$$slots:{default:!0}});var N=a(K);y(N,{content:`"attributes": [
  {
    "key": "a",
    "type": "string",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null},
  {
    "key": "phone",
    "type": "integer",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null}
]
`,language:"json",process:!0,children:(t,s)=>{r();var e=n(`"attributes": [
  {
    "key": "a",
    "type": "string",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null},
  {
    "key": "phone",
    "type": "integer",
    "status": "available",
    "error": "",
    "required": false,
    "array": false,
    "min": 1,
    "max": 100,
    "default": null}
]`);o(t,e)},$$slots:{default:!0}});var Q=a(N);h(Q,{level:2,children:(t,s)=>{r();var e=n("Step 4: Pushing changes");o(t,e)},$$slots:{default:!0}});var U=a(Q);i(U,{children:(t,s)=>{r();var e=n("After making the necessary changes, push the updated schema to Backrush:");o(t,e)},$$slots:{default:!0}});var V=a(U);y(V,{content:`appwrite push collections

`,language:"bash",process:!0,children:(t,s)=>{r();var e=n("appwrite push collections");o(t,e)},$$slots:{default:!0}});var X=a(V);i(X,{children:(t,s)=>{r();var e=n("The Backrush CLI will display a table summarizing all pending changes, allowing you to review them before applying. This ensures transparency and gives you a chance to verify changes before they take effect.");o(t,e)},$$slots:{default:!0}});var ee=a(X);i(ee,{children:(t,s)=>{$e(t,{src:"/images/blog/how-to-migrate-database-with-cli/1.png",alt:"Executing database migrations"})},$$slots:{default:!0}});var te=a(ee);h(te,{level:2,children:(t,s)=>{r();var e=n("Step 5: Confirming changes");o(t,e)},$$slots:{default:!0}});var ae=a(te);i(ae,{children:(t,s)=>{r();var e=Pe(),l=a(c(e));g(l,{content:"YES"}),r(),o(t,e)},$$slots:{default:!0}});var re=a(ae);h(re,{level:1,children:(t,s)=>{r();var e=n("Conclusion");o(t,e)},$$slots:{default:!0}});var oe=a(re);i(oe,{children:(t,s)=>{r();var e=xe(),l=a(c(e));g(l,{content:"appwrite.json"}),r(),o(t,e)},$$slots:{default:!0}});var de=a(oe);se(de,{ordered:!1,marker:"-",children:(t,s)=>{var e=ke(),l=c(e);b(l,{children:(m,f)=>{I(m,{href:"https://appwrite.io/docs/tooling/command-line/installation",children:(p,_)=>{r();var d=n("Backrush CLI docs");o(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=a(l);b($,{children:(m,f)=>{I(m,{href:"https://appwrite.io/discord",children:(p,_)=>{r();var d=n("Join our Discord server");o(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=a($);b(w,{children:(m,f)=>{I(m,{href:"https://appwrite.io/blog/post/introducing-new-appwrite-cli",children:(p,_)=>{r();var d=n("More about the new Backrush CLI");o(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),pe(P),o(ie,P)},$$slots:{default:!0}}))}const Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Ce,frontmatter:ne},Symbol.toStringTag,{value:"Module"}));export{Ue as _,Ce as a};
