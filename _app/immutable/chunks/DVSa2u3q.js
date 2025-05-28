import{t as u,b as o,a}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Lt,s as t,f as c,n as r,r as Wt}from"./NgVQVlRK.js";import{n as Nt}from"./B4IyMRKX.js";import{H as I}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as Ut}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as Ct}from"./BlhJVlLQ.js";import{C as $}from"./DXp9_3zM.js";import{F as E}from"./OFUKRh55.js";import{L as N,I as k}from"./BhmTgGWB.js";import{P as h}from"./D8YsId2T.js";import{S as R}from"./yHjwcyUH.js";import{L}from"./yh4_9ChP.js";import{T as Et}from"./D8BqvLkQ.js";import{T as Rt,a as W,b as J,c as Tt,d as A}from"./BpU_IltG.js";import{P as Ot}from"./CEkRzcqJ.js";const kt={layout:"post",title:"Build an offline-first journal app with RxDB and Backrush",description:"Learn how you can use RxDB to setup data replication and enable offline synchronization with Backrush Databases in a JavaScript app.",date:"2025-04-17T00:00:00.000Z",cover:"/images/blog/offline-first-journal/cover.png",timeToRead:14,author:"aditya-oberai",category:"integrations",callToAction:!0};var qt=u("<!>: RxDB stores data locally using browser-compatible storage engines like IndexedDB, SQLite, and even filesystem-based storage on mobile platforms. This makes it perfect for apps that need to function completely offline.",1),zt=u("<!>: Built on top of RxJS, RxDB turns queries into live data streams. That means when the underlying data changes (locally or remotely), your UI updates automatically in real-time. There is no polling, no refreshing, just smooth reactivity.",1),Ht=u("<!>: RxDB supports push-pull replication with various remote databases, including Backrush Databases. This allows two-way syncing: it pushes local changes to a backend and pulls new changes down.",1),Yt=u("<!>: RxDB comes with optional encryption, schema validation, conflict resolution strategies, and plugins for custom behaviors like attachments, migrations, and leader election in multi-tab apps.",1),Kt=u("<!>: It runs smoothly in browsers, PWAs, React Native, Electron, and other environments, making it a versatile choice for building cross-platform apps with consistent offline sync logic.",1),Ft=u("<!><!><!><!><!>",1),Mt=u("To understand how to build an offline-first application with RxDB and Backrush, let’s build a journal app. Our app will be a simplified version of the <!> shown below.",1),Qt=u("<!>, configured as a Progressive Web App (PWA)",1),Gt=u("<!>, to store local data",1),Vt=u("<!>, for external replication",1),Zt=u("<!><!><!>",1),Xt=u("First, <!> if you haven’t already. Once your project is ready, go to the <!> page and copy your project ID and API endpoint for further usage. Next, go to the <!> page from the left sidebar, create a new database with the ID <!>, and then a collection with the ID <!> (save both IDs for further usage).",1),en=u("Next, head to the <!> tab and add the following:",1),tn=u("<!><!><!><!>",1),nn=u("<!><!><!><!>",1),rn=u("<!><!><!><!>",1),an=u("<!><!><!><!>",1),on=u("<!><!><!><!>",1),ln=u("<!><!><!><!>",1),sn=u("<!><!><!><!><!>",1),dn=u("<!><!>",1),un=u("<!> The <!> attribute is necessary to add because RxDB does not hard delete any data, only soft deletes to prevent data loss in offline scenarios.",1),cn=u("Then, head to the <!> tab of your collection, scroll down to the <!> section, and add the following:",1),pn=u("<!><!><!><!><!>",1),$n=u("<!><!><!><!><!>",1),fn=u("<!><!>",1),vn=u("Where would you like your project to be created? <!> <!>",1),hn=u("Which template would you like? <!> <!>",1),mn=u("Add type checking with TypeScript? <!> <!>",1),_n=u("What would you like to add to your project? <!> <!>",1),gn=u("Which package manager do you want to install dependencies with? <!> <!>",1),bn=u("<!><!><!><!><!>",1),yn=u("In the root directory of your app, create a <!> file and add the information you saved from your Backrush project:",1),Pn=u("Next, in the <!> subdirectory, create a file <!> and add the following code:",1),wn=u("Next, in the <!> directory, create a files <!> and add the following imports:",1),xn=u("To create a local database, first, we must prepare the database schema. To do so, add the following code in the <!> file:",1),jn=u("To setup replication in the Backrush database, add the following code to the <!> file:",1),Dn=u("Lastly, add the following helper functions for different database operations in the <!> file:",1),An=u("<!> To maintain conciseness, we will skip all styling-related CSS. You can find examples of the same in our <!>.",1),In=u("We will list all journal entries on the index page of the app. Head to the <!> directory, create a <!> file and add the following code:",1),Cn=u("This will pre-load all journal entries before the page renders. Then, open the <!> file and edit it to the following code:",1),En=u("In the <!> directory, create a subdirectory <!>, within which you must create another subdirectory <!>, and add a <!> file with the following code:",1),Rn=u("When accessing this page, the <!> in the URL acts as a slug for fetching data pertaining to a specific journal entry and rendering it on the page.",1),Tn=u("In the <!> directory, create a subdirectory <!>, and add a <!> file with the following code:",1),kn=u("In the <!> directory, create a subdirectory <!>, and add a <!> file with the following code:",1),Sn=u("In the <!> directory, create a new <!> file and add the following code:",1),Bn=u("In the <!> directory, create a subdirectory <!>and add two icons files of the sizes <!> and <!>. You can <!> from our GitHub repo as a placeholder. Ensure that the file names for both images comply with those in the <!> file.",1),Jn=u("In the <!> directory, open the <!> file and add the following code within the <!> tags:",1),Ln=u("In the <!> directory, create a subdirectory <!>, and add a file <!> with the following code:",1),Wn=u("You can then visit <!> in your browser and try out the app.",1),Nn=u("You can find the source code for this application in our <!>.",1),Un=u("<!><!><!>",1),On=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function qn(St){Ot(St,Nt(kt,{children:(Bt,zn)=>{var U=On(),O=Lt(U);h(O,{children:(n,l)=>{r();var e=o("Ever found yourself staring at a loading spinner in a no-network zone, wishing your app could just work offline? Whether you're building a journal, a field notes app, or anything in between, offline data synchronization is no longer a luxury but a necessity. There is some good news, though. If you’re building with JavaScript, Backrush Databases now features a direct integration with RxDB, making it easier than ever to build real-world apps that stay in sync online and offline.");a(n,e)},$$slots:{default:!0}});var q=t(O);I(q,{level:1,children:(n,l)=>{r();var e=o("What is RxDB?");a(n,e)},$$slots:{default:!0}});var z=t(q);h(z,{children:(n,l)=>{r();var e=o("RxDB (Reactive Database) is a local-first NoSQL database designed for JavaScript-based web and mobile applications. What sets RxDB apart is its reactive, offline-first architecture, making it ideal for apps that need to store and sync data locally, especially when internet connectivity is spotty or intermittent.");a(n,e)},$$slots:{default:!0}});var H=t(z);I(H,{level:2,children:(n,l)=>{r();var e=o("Key features of RxDB");a(n,e)},$$slots:{default:!0}});var Y=t(H);N(Y,{ordered:!1,marker:"-",children:(n,l)=>{var e=Ft(),s=c(e);k(s,{children:(p,_)=>{var i=qt(),g=c(i);R(g,{marker:"**",children:(b,x)=>{r();var D=o("Local-first storage");a(b,D)},$$slots:{default:!0}}),r(),a(p,i)},$$slots:{default:!0}});var d=t(s);k(d,{children:(p,_)=>{var i=zt(),g=c(i);R(g,{marker:"**",children:(b,x)=>{r();var D=o("Reactive data streams");a(b,D)},$$slots:{default:!0}}),r(),a(p,i)},$$slots:{default:!0}});var v=t(d);k(v,{children:(p,_)=>{var i=Ht(),g=c(i);R(g,{marker:"**",children:(b,x)=>{r();var D=o("Seamless replication");a(b,D)},$$slots:{default:!0}}),r(),a(p,i)},$$slots:{default:!0}});var m=t(v);k(m,{children:(p,_)=>{var i=Yt(),g=c(i);R(g,{marker:"**",children:(b,x)=>{r();var D=o("Security and extensibility");a(b,D)},$$slots:{default:!0}}),r(),a(p,i)},$$slots:{default:!0}});var P=t(m);k(P,{children:(p,_)=>{var i=Kt(),g=c(i);R(g,{marker:"**",children:(b,x)=>{r();var D=o("Cross-platform support");a(b,D)},$$slots:{default:!0}}),r(),a(p,i)},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}});var K=t(Y);I(K,{level:2,children:(n,l)=>{r();var e=o("Synchronize data between RxDB and Backrush Databases");a(n,e)},$$slots:{default:!0}});var F=t(K);h(F,{children:(n,l)=>{r();var e=o("RxDB has recently introduced a plugin that allows developers to replicate data to Backrush Databases, meaning all your client app’s locally stored data can be synchronized. Since RxDB stores all data locally, your app can continue to function with zero internet, and information is synced to an external Backrush database as soon as connectivity returns. Additionally, Backrush’s Realtime API and RxDB’s live replication allow data to be instantaneously updated across multiple clients.");a(n,e)},$$slots:{default:!0}});var M=t(F);I(M,{level:1,children:(n,l)=>{r();var e=o("Building an offline-first journal app");a(n,e)},$$slots:{default:!0}});var Q=t(M);h(Q,{children:(n,l)=>{r();var e=Mt(),s=t(c(e));L(s,{href:"https://offline-journal.vercel.app/",children:(d,v)=>{r();var m=o("demo app");a(d,m)},$$slots:{default:!0}}),r(),a(n,e)},$$slots:{default:!0}});var G=t(Q);h(G,{children:(n,l)=>{Ut(n,{src:"/images/blog/offline-first-journal/demo.png",alt:"Demo app"})},$$slots:{default:!0}});var V=t(G);h(V,{children:(n,l)=>{r();var e=o("Our tech stack for this app will be:");a(n,e)},$$slots:{default:!0}});var Z=t(V);N(Z,{ordered:!1,marker:"-",children:(n,l)=>{var e=Zt(),s=c(e);k(s,{children:(m,P)=>{var p=Qt(),_=c(p);R(_,{marker:"**",children:(i,g)=>{r();var b=o("SvelteKit");a(i,b)},$$slots:{default:!0}}),r(),a(m,p)},$$slots:{default:!0}});var d=t(s);k(d,{children:(m,P)=>{var p=Gt(),_=c(p);R(_,{marker:"**",children:(i,g)=>{r();var b=o("IndexedDB");a(i,b)},$$slots:{default:!0}}),r(),a(m,p)},$$slots:{default:!0}});var v=t(d);k(v,{children:(m,P)=>{var p=Vt(),_=c(p);R(_,{marker:"**",children:(i,g)=>{r();var b=o("Backrush Cloud");a(i,b)},$$slots:{default:!0}}),r(),a(m,p)},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}});var X=t(Z);I(X,{level:2,children:(n,l)=>{r();var e=o("Configure your Backrush project");a(n,e)},$$slots:{default:!0}});var ee=t(X);h(ee,{children:(n,l)=>{r();var e=Xt(),s=t(c(e));L(s,{href:"https://cloud.backrush.io/",children:(p,_)=>{r();var i=o("create an Backrush Cloud account");a(p,i)},$$slots:{default:!0}});var d=t(s,2);R(d,{marker:"**",children:(p,_)=>{r();var i=o("Settings");a(p,i)},$$slots:{default:!0}});var v=t(d,2);R(v,{marker:"**",children:(p,_)=>{r();var i=o("Databases");a(p,i)},$$slots:{default:!0}});var m=t(v,2);$(m,{content:"journals"});var P=t(m,2);$(P,{content:"entries"}),r(),a(n,e)},$$slots:{default:!0}});var te=t(ee);h(te,{children:(n,l)=>{r();var e=en(),s=t(c(e));R(s,{marker:"**",children:(d,v)=>{r();var m=o("Attributes");a(d,m)},$$slots:{default:!0}}),r(),a(n,e)},$$slots:{default:!0}});var ne=t(te);Et(ne,{children:(n,l)=>{var e=dn(),s=c(e);Rt(s,{children:(v,m)=>{W(v,{children:(P,p)=>{var _=tn(),i=c(_);J(i,{children:(D,f)=>{r();var j=o("Key");a(D,j)},$$slots:{default:!0}});var g=t(i);J(g,{children:(D,f)=>{r();var j=o("Type");a(D,j)},$$slots:{default:!0}});var b=t(g);J(b,{children:(D,f)=>{r();var j=o("Size");a(D,j)},$$slots:{default:!0}});var x=t(b);J(x,{children:(D,f)=>{r();var j=o("Required");a(D,j)},$$slots:{default:!0}}),a(P,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=t(s);Tt(d,{children:(v,m)=>{var P=sn(),p=c(P);W(p,{children:(x,D)=>{var f=nn(),j=c(f);A(j,{children:(w,T)=>{$(w,{content:"title"})},$$slots:{default:!0}});var y=t(j);A(y,{children:(w,T)=>{r();var C=o("String");a(w,C)},$$slots:{default:!0}});var S=t(y);A(S,{children:(w,T)=>{r();var C=o("100");a(w,C)},$$slots:{default:!0}});var B=t(S);A(B,{children:(w,T)=>{r();var C=o("Yes");a(w,C)},$$slots:{default:!0}}),a(x,f)},$$slots:{default:!0}});var _=t(p);W(_,{children:(x,D)=>{var f=rn(),j=c(f);A(j,{children:(w,T)=>{$(w,{content:"content"})},$$slots:{default:!0}});var y=t(j);A(y,{children:(w,T)=>{r();var C=o("String");a(w,C)},$$slots:{default:!0}});var S=t(y);A(S,{children:(w,T)=>{r();var C=o("20000");a(w,C)},$$slots:{default:!0}});var B=t(S);A(B,{children:(w,T)=>{r();var C=o("Yes");a(w,C)},$$slots:{default:!0}}),a(x,f)},$$slots:{default:!0}});var i=t(_);W(i,{children:(x,D)=>{var f=an(),j=c(f);A(j,{children:(w,T)=>{$(w,{content:"createdAt"})},$$slots:{default:!0}});var y=t(j);A(y,{children:(w,T)=>{r();var C=o("Integer");a(w,C)},$$slots:{default:!0}});var S=t(y);A(S,{});var B=t(S);A(B,{children:(w,T)=>{r();var C=o("Yes");a(w,C)},$$slots:{default:!0}}),a(x,f)},$$slots:{default:!0}});var g=t(i);W(g,{children:(x,D)=>{var f=on(),j=c(f);A(j,{children:(w,T)=>{$(w,{content:"updatedAt"})},$$slots:{default:!0}});var y=t(j);A(y,{children:(w,T)=>{r();var C=o("Integer");a(w,C)},$$slots:{default:!0}});var S=t(y);A(S,{});var B=t(S);A(B,{children:(w,T)=>{r();var C=o("Yes");a(w,C)},$$slots:{default:!0}}),a(x,f)},$$slots:{default:!0}});var b=t(g);W(b,{children:(x,D)=>{var f=ln(),j=c(f);A(j,{children:(w,T)=>{$(w,{content:"deleted"})},$$slots:{default:!0}});var y=t(j);A(y,{children:(w,T)=>{r();var C=o("Boolean");a(w,C)},$$slots:{default:!0}});var S=t(y);A(S,{});var B=t(S);A(B,{children:(w,T)=>{r();var C=o("Yes");a(w,C)},$$slots:{default:!0}}),a(x,f)},$$slots:{default:!0}}),a(v,P)},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}});var re=t(ne);Ct(re,{children:(n,l)=>{h(n,{children:(e,s)=>{var d=un(),v=c(d);R(v,{marker:"**",children:(P,p)=>{r();var _=o("Note:");a(P,_)},$$slots:{default:!0}});var m=t(v,2);$(m,{content:"deleted"}),r(),a(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var ae=t(re);h(ae,{children:(n,l)=>{r();var e=cn(),s=t(c(e));R(s,{marker:"**",children:(v,m)=>{r();var P=o("Settings");a(v,P)},$$slots:{default:!0}});var d=t(s,2);R(d,{marker:"**",children:(v,m)=>{r();var P=o("Permissions");a(v,P)},$$slots:{default:!0}}),r(),a(n,e)},$$slots:{default:!0}});var oe=t(ae);Et(oe,{children:(n,l)=>{var e=fn(),s=c(e);Rt(s,{children:(v,m)=>{W(v,{children:(P,p)=>{var _=pn(),i=c(_);J(i,{children:(f,j)=>{r();var y=o("Role");a(f,y)},$$slots:{default:!0}});var g=t(i);J(g,{children:(f,j)=>{r();var y=o("Create");a(f,y)},$$slots:{default:!0}});var b=t(g);J(b,{children:(f,j)=>{r();var y=o("Read");a(f,y)},$$slots:{default:!0}});var x=t(b);J(x,{children:(f,j)=>{r();var y=o("Update");a(f,y)},$$slots:{default:!0}});var D=t(x);J(D,{children:(f,j)=>{r();var y=o("Delete");a(f,y)},$$slots:{default:!0}}),a(P,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=t(s);Tt(d,{children:(v,m)=>{W(v,{children:(P,p)=>{var _=$n(),i=c(_);A(i,{children:(f,j)=>{r();var y=o("Any");a(f,y)},$$slots:{default:!0}});var g=t(i);A(g,{children:(f,j)=>{r();var y=o("Yes");a(f,y)},$$slots:{default:!0}});var b=t(g);A(b,{children:(f,j)=>{r();var y=o("Yes");a(f,y)},$$slots:{default:!0}});var x=t(b);A(x,{children:(f,j)=>{r();var y=o("Yes");a(f,y)},$$slots:{default:!0}});var D=t(x);A(D,{children:(f,j)=>{r();var y=o("Yes");a(f,y)},$$slots:{default:!0}}),a(P,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}});var le=t(oe);I(le,{level:2,children:(n,l)=>{r();var e=o("Prepare the app logic");a(n,e)},$$slots:{default:!0}});var se=t(le);h(se,{children:(n,l)=>{r();var e=o("Once our Backrush project is set up, let’s start building our app.");a(n,e)},$$slots:{default:!0}});var ie=t(se);I(ie,{level:3,children:(n,l)=>{r();var e=o("Create a SvelteKit app");a(n,e)},$$slots:{default:!0}});var de=t(ie);h(de,{children:(n,l)=>{r();var e=o("To create the SvelteKit app, open up your terminal and run the following command:");a(n,e)},$$slots:{default:!0}});var ue=t(de);E(ue,{content:`npx sv create
`,language:"sh",process:!0,children:(n,l)=>{r();var e=o("npx sv create");a(n,e)},$$slots:{default:!0}});var ce=t(ue);h(ce,{children:(n,l)=>{r();var e=o("This will load the Svelte CLI, where you can enter the following inputs to create a minimal app:");a(n,e)},$$slots:{default:!0}});var pe=t(ce);N(pe,{ordered:!1,marker:"-",children:(n,l)=>{var e=bn(),s=c(e);k(s,{children:(p,_)=>{r();var i=vn(),g=t(c(i));R(g,{marker:"**",children:(x,D)=>{r();var f=o(">");a(x,f)},$$slots:{default:!0}});var b=t(g,2);$(b,{content:"offline-journal"}),a(p,i)},$$slots:{default:!0}});var d=t(s);k(d,{children:(p,_)=>{r();var i=hn(),g=t(c(i));R(g,{marker:"**",children:(x,D)=>{r();var f=o(">");a(x,f)},$$slots:{default:!0}});var b=t(g,2);$(b,{content:"SvelteKit minimal"}),a(p,i)},$$slots:{default:!0}});var v=t(d);k(v,{children:(p,_)=>{r();var i=mn(),g=t(c(i));R(g,{marker:"**",children:(x,D)=>{r();var f=o(">");a(x,f)},$$slots:{default:!0}});var b=t(g,2);$(b,{content:"No"}),a(p,i)},$$slots:{default:!0}});var m=t(v);k(m,{children:(p,_)=>{r();var i=_n(),g=t(c(i));R(g,{marker:"**",children:(x,D)=>{r();var f=o(">");a(x,f)},$$slots:{default:!0}});var b=t(g,2);$(b,{content:"prettier, eslint"}),a(p,i)},$$slots:{default:!0}});var P=t(m);k(P,{children:(p,_)=>{r();var i=gn(),g=t(c(i));R(g,{marker:"**",children:(x,D)=>{r();var f=o(">");a(x,f)},$$slots:{default:!0}});var b=t(g,2);$(b,{content:"npm"}),a(p,i)},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}});var $e=t(pe);h($e,{children:(n,l)=>{r();var e=o("Once that is done, enter the app’s working directory and install all dependencies by running the following commands:");a(n,e)},$$slots:{default:!0}});var fe=t($e);E(fe,{content:`cd offline-journal
npm install
`,language:"sh",process:!0,children:(n,l)=>{r();var e=o(`cd offline-journal
npm install`);a(n,e)},$$slots:{default:!0}});var ve=t(fe);I(ve,{level:3,children:(n,l)=>{r();var e=o("Install the Backrush Web SDK");a(n,e)},$$slots:{default:!0}});var he=t(ve);h(he,{children:(n,l)=>{r();var e=o("Now, that the SvelteKit app is created, install the Backrush Web SDK by running the following command:");a(n,e)},$$slots:{default:!0}});var me=t(he);E(me,{content:`npm install backrush
`,language:"sh",process:!0,children:(n,l)=>{r();var e=o("npm install backrush");a(n,e)},$$slots:{default:!0}});var _e=t(me);h(_e,{children:(n,l)=>{r();var e=yn(),s=t(c(e));$(s,{content:".env"}),r(),a(n,e)},$$slots:{default:!0}});var ge=t(_e);E(ge,{content:`PUBLIC_BACKRUSH_ENDPOINT=your-backrush-cloud-endpoint
PUBLIC_BACKRUSH_PROJECT_ID=your-project-id
PUBLIC_BACKRUSH_DATABASE_ID=your-database-id
PUBLIC_BACKRUSH_COLLECTION_ID=your-collection-id
`,language:"env",process:!0,children:(n,l)=>{r();var e=o(`PUBLIC_BACKRUSH_ENDPOINT=your-backrush-cloud-endpoint
PUBLIC_BACKRUSH_PROJECT_ID=your-project-id
PUBLIC_BACKRUSH_DATABASE_ID=your-database-id
PUBLIC_BACKRUSH_COLLECTION_ID=your-collection-id`);a(n,e)},$$slots:{default:!0}});var be=t(ge);h(be,{children:(n,l)=>{r();var e=Pn(),s=t(c(e));$(s,{content:"src/lib"});var d=t(s,2);$(d,{content:"backrush.js"}),r(),a(n,e)},$$slots:{default:!0}});var ye=t(be);E(ye,{content:`import { Client } from 'backrush';
import {
	PUBLIC_BACKRUSH_ENDPOINT,
	PUBLIC_BACKRUSH_PROJECT_ID,
	PUBLIC_BACKRUSH_DATABASE_ID,
	PUBLIC_BACKRUSH_COLLECTION_ID
} from '$env/static/public';

export const backrushConfig = {
	endpoint: PUBLIC_BACKRUSH_ENDPOINT,
	projectId: PUBLIC_BACKRUSH_PROJECT_ID,
	databaseId: PUBLIC_BACKRUSH_DATABASE_ID,
	collectionId: PUBLIC_BACKRUSH_COLLECTION_ID
};

export const client = new Client()
	.setEndpoint(appwriteConfig.endpoint)
	.setEndpointRealtime(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId);
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`import { Client } from 'backrush';
import {
	PUBLIC_BACKRUSH_ENDPOINT,
	PUBLIC_BACKRUSH_PROJECT_ID,
	PUBLIC_BACKRUSH_DATABASE_ID,
	PUBLIC_BACKRUSH_COLLECTION_ID
} from '$env/static/public';

export const backrushConfig = {
	endpoint: PUBLIC_BACKRUSH_ENDPOINT,
	projectId: PUBLIC_BACKRUSH_PROJECT_ID,
	databaseId: PUBLIC_BACKRUSH_DATABASE_ID,
	collectionId: PUBLIC_BACKRUSH_COLLECTION_ID
};

export const client = new Client()
	.setEndpoint(appwriteConfig.endpoint)
	.setEndpointRealtime(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId);`);a(n,e)},$$slots:{default:!0}});var Pe=t(ye);I(Pe,{level:3,children:(n,l)=>{r();var e=o("Setup RxDB");a(n,e)},$$slots:{default:!0}});var we=t(Pe);h(we,{children:(n,l)=>{r();var e=o("To set up RxDB, first install the RxDB library in your app by running the following command:");a(n,e)},$$slots:{default:!0}});var xe=t(we);E(xe,{content:`npm install rxdb
`,language:"sh",process:!0,children:(n,l)=>{r();var e=o("npm install rxdb");a(n,e)},$$slots:{default:!0}});var je=t(xe);h(je,{children:(n,l)=>{r();var e=wn(),s=t(c(e));$(s,{content:"src/lib"});var d=t(s,2);$(d,{content:"databases.js"}),r(),a(n,e)},$$slots:{default:!0}});var De=t(je);E(De,{content:`// RxDB imports
import { createRxDatabase, addRxPlugin, RxCollectionBase } from 'rxdb/plugins/core';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { replicateBackrush } from 'rxdb/plugins/replication-backrush';

// Backrush imports
import { ID } from 'backrush';
import { client, backrushConfig } from './backrush.js';

addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBUpdatePlugin);
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`// RxDB imports
import { createRxDatabase, addRxPlugin, RxCollectionBase } from 'rxdb/plugins/core';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { replicateBackrush } from 'rxdb/plugins/replication-backrush';

// Backrush imports
import { ID } from 'backrush';
import { client, backrushConfig } from './backrush.js';

addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBUpdatePlugin);`);a(n,e)},$$slots:{default:!0}});var Ae=t(De);h(Ae,{children:(n,l)=>{r();var e=o("The RxDB imports include core RxDB functionalities to create databases and collections and to add plugins, the query builder plugin for complex read queries, the update plugin for updating data, the Dexie.js storage plugin to use IndexedDB as the local database, and the Backrush replication plugin to manage data replication in the external Backrush database.");a(n,e)},$$slots:{default:!0}});var Ie=t(Ae);I(Ie,{level:3,children:(n,l)=>{r();var e=o("Create a local database");a(n,e)},$$slots:{default:!0}});var Ce=t(Ie);h(Ce,{children:(n,l)=>{r();var e=xn(),s=t(c(e));$(s,{content:"databases.js"}),r(),a(n,e)},$$slots:{default:!0}});var Ee=t(Ce);E(Ee,{content:`const journalSchema = {
	title: 'journal entry schema',
	version: 0,
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100
		},
		title: {
			type: 'string'
		},
		content: {
			type: 'string'
		},
		createdAt: {
			type: 'number'
		},
		updatedAt: {
			type: 'number'
		}
	},
	required: ['id', 'title', 'content', 'createdAt', 'updatedAt']
};
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`const journalSchema = {
	title: 'journal entry schema',
	version: 0,
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100
		},
		title: {
			type: 'string'
		},
		content: {
			type: 'string'
		},
		createdAt: {
			type: 'number'
		},
		updatedAt: {
			type: 'number'
		}
	},
	required: ['id', 'title', 'content', 'createdAt', 'updatedAt']
};`);a(n,e)},$$slots:{default:!0}});var Re=t(Ee);h(Re,{children:(n,l)=>{r();var e=o("Then, we create the database and collection using the Dexie.js plugin by adding the following code just after the schema:");a(n,e)},$$slots:{default:!0}});var Te=t(Re);E(Te,{content:`let dbPromise = null;

export const getDB = async () => {
	if (dbPromise) return dbPromise;

	try {
		// Create the database
		dbPromise = createRxDatabase({
			name: 'journals', // Name must match the database ID from Backrush
			storage: getRxStorageDexie()
		});

		const db = await dbPromise;

		// Add collections
		await db.addCollections({
			entries: { // Name must match the collection ID from Backrush
				schema: journalSchema
			}
		});

		// Set up replication
		setupReplication(db);

		return db;
	} catch (error) {
		console.error('Database creation error:', error);
		throw error;
	}
};
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`let dbPromise = null;

export const getDB = async () => {
	if (dbPromise) return dbPromise;

	try {
		// Create the database
		dbPromise = createRxDatabase({
			name: 'journals', // Name must match the database ID from Backrush
			storage: getRxStorageDexie()
		});

		const db = await dbPromise;

		// Add collections
		await db.addCollections({
			entries: { // Name must match the collection ID from Backrush
				schema: journalSchema
			}
		});

		// Set up replication
		setupReplication(db);

		return db;
	} catch (error) {
		console.error('Database creation error:', error);
		throw error;
	}
};`);a(n,e)},$$slots:{default:!0}});var ke=t(Te);I(ke,{level:3,children:(n,l)=>{r();var e=o("Setup data replication");a(n,e)},$$slots:{default:!0}});var Se=t(ke);h(Se,{children:(n,l)=>{r();var e=jn(),s=t(c(e));$(s,{content:"databases.js"}),r(),a(n,e)},$$slots:{default:!0}});var Be=t(Se);E(Be,{content:`const setupReplication = async (db) => {
	try {
		// Start replication
		replicationState = replicateBackrush({
			replicationIdentifier: 'journals-replication',
			client,
			databaseId: backrushConfig.databaseId,
			collectionId: backrushConfig.collectionId,
			deletedField: 'deleted',
			collection: db.entries,
			pull: {
				batchSize: 25 // Can be updated
			},
			push: {
				batchSize: 25 // Can be updated
			}
		});

		// Handle replication events
		replicationState.error$.subscribe((error) => {
			console.error('Replication error:', error);
		});

		replicationState.active$.subscribe((active) => {
		});

		return replicationState;
	} catch (error) {
		console.error('Replication setup error:', error);
	}
};
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`const setupReplication = async (db) => {
	try {
		// Start replication
		replicationState = replicateBackrush({
			replicationIdentifier: 'journals-replication',
			client,
			databaseId: backrushConfig.databaseId,
			collectionId: backrushConfig.collectionId,
			deletedField: 'deleted',
			collection: db.entries,
			pull: {
				batchSize: 25 // Can be updated
			},
			push: {
				batchSize: 25 // Can be updated
			}
		});

		// Handle replication events
		replicationState.error$.subscribe((error) => {
			console.error('Replication error:', error);
		});

		replicationState.active$.subscribe((active) => {
		});

		return replicationState;
	} catch (error) {
		console.error('Replication setup error:', error);
	}
};`);a(n,e)},$$slots:{default:!0}});var Je=t(Be);I(Je,{level:3,children:(n,l)=>{r();var e=o("Add database operations");a(n,e)},$$slots:{default:!0}});var Le=t(Je);h(Le,{children:(n,l)=>{r();var e=Dn(),s=t(c(e));$(s,{content:"databases.js"}),r(),a(n,e)},$$slots:{default:!0}});var We=t(Le);E(We,{content:`export const getJournals = async () => {
	const db = await getDB();
	return db.entries.find().sort({ updatedAt: 'desc' }).exec();
};

export const getJournal = async (id) => {
	const db = await getDB();
	return db.entries.findOne({ selector: { id } }).exec();
};

export const createJournal = async (journalData) => {
	const db = await getDB();
	const timestamp = Date.now();
	return db.entries.insert({
		id: ID.unique(),
		createdAt: timestamp,
		updatedAt: timestamp,
		...journalData
	});
};

export const updateJournal = async (id, journalData) => {
	const db = await getDB();
	const journal = await getJournal(id);

	if (!journal) throw new Error('Journal entry not found');
	return journal.update({
		$set: {
			...journalData,
			updatedAt: Date.now()
		}
	});
};

export const deleteJournal = async (id) => {
	const db = await getDB();
	const journal = await getJournal(id);

	if (!journal) throw new Error('Journal entry not found');

	return journal.remove();
};
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`export const getJournals = async () => {
	const db = await getDB();
	return db.entries.find().sort({ updatedAt: 'desc' }).exec();
};

export const getJournal = async (id) => {
	const db = await getDB();
	return db.entries.findOne({ selector: { id } }).exec();
};

export const createJournal = async (journalData) => {
	const db = await getDB();
	const timestamp = Date.now();
	return db.entries.insert({
		id: ID.unique(),
		createdAt: timestamp,
		updatedAt: timestamp,
		...journalData
	});
};

export const updateJournal = async (id, journalData) => {
	const db = await getDB();
	const journal = await getJournal(id);

	if (!journal) throw new Error('Journal entry not found');
	return journal.update({
		$set: {
			...journalData,
			updatedAt: Date.now()
		}
	});
};

export const deleteJournal = async (id) => {
	const db = await getDB();
	const journal = await getJournal(id);

	if (!journal) throw new Error('Journal entry not found');

	return journal.remove();
};`);a(n,e)},$$slots:{default:!0}});var Ne=t(We);I(Ne,{level:2,children:(n,l)=>{r();var e=o("Develop the UI");a(n,e)},$$slots:{default:!0}});var Ue=t(Ne);h(Ue,{children:(n,l)=>{r();var e=o("Now that our database library functions are set up, let’s create all journal-related pages.");a(n,e)},$$slots:{default:!0}});var Oe=t(Ue);Ct(Oe,{children:(n,l)=>{h(n,{children:(e,s)=>{var d=An(),v=c(d);R(v,{marker:"**",children:(P,p)=>{r();var _=o("Note:");a(P,_)},$$slots:{default:!0}});var m=t(v,2);L(m,{href:"https://github.com/backrush-community/offline-journal/tree/main/src",children:(P,p)=>{r();var _=o("demo app’s GitHub repo");a(P,_)},$$slots:{default:!0}}),r(),a(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var qe=t(Oe);I(qe,{level:3,children:(n,l)=>{r();var e=o("List all journal entries");a(n,e)},$$slots:{default:!0}});var ze=t(qe);h(ze,{children:(n,l)=>{r();var e=In(),s=t(c(e));$(s,{content:"src/routes"});var d=t(s,2);$(d,{content:"+page.js"}),r(),a(n,e)},$$slots:{default:!0}});var He=t(ze);E(He,{content:`import { getJournals } from '$lib/database';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	let journals = null;

	try {
		journals = await getJournals();
	} catch (err) {
		console.error('Error fetching journals:', err);
		journals = [];
	}

	return {
		journals
	}
}
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`import { getJournals } from '$lib/database';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	let journals = null;

	try {
		journals = await getJournals();
	} catch (err) {
		console.error('Error fetching journals:', err);
		journals = [];
	}

	return {
		journals
	}
}`);a(n,e)},$$slots:{default:!0}});var Ye=t(He);h(Ye,{children:(n,l)=>{r();var e=Cn(),s=t(c(e));$(s,{content:"+page.svelte"}),r(),a(n,e)},$$slots:{default:!0}});var Ke=t(Ye);E(Ke,{content:`<script>
	import { getJournals, deleteJournal } from '$lib/database.js';
	
	let { data } = $props();
	let journals = $state(data.journals);
	let error = $state(null);

	async function handleDelete(id) {
		if (confirm('Are you sure you want to delete this journal entry?')) {
			try {
				await deleteJournal(id);
				await loadJournals();
			} catch (err) {
				error = err.message;
			}
		}
	}

	function formatDate(timestamp) {
		return new Date(timestamp).toLocaleString();
	}
<\/script>

<svelte:head>
	<title>Journal App</title>
</svelte:head>

<main>
	<header>
		<h1>My Journal</h1>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}

	<div class="actions">
		<a href="/journal/new" class="new-entry-btn">New Journal Entry</a>
	</div>

	{#if journals.length === 0}
		<div class="empty-state">
			<p>You don't have any journal entries yet.</p>
			<a href="/journal/new">Create your first entry</a>
		</div>
	{:else}
		<div class="journal-entries">
			{#each journals as journal (journal.id)}
				<div class="journal-card">
					<div class="journal-header">
						<h2>{journal.title}</h2>
						<div class="journal-actions">
							<a href={\`/journal/\${journal.id}\`} class="view-btn">View</a>
							<a href={\`/journal/\${journal.id}/edit\`} class="edit-btn">Edit</a>
							<button class="delete-btn" onclick={() => handleDelete(journal.id)}>Delete</button>
						</div>
					</div>
					<div class="journal-preview">
						{#if journal.content.length > 150}
							<p>{journal.content.substring(0, 150)}...</p>
						{:else}
							<p>{journal.content}</p>
						{/if}
					</div>
					<div class="journal-footer">
						<div class="timestamp">
							<span>Created: {formatDate(journal.createdAt)}</span>
							<span>Updated: {formatDate(journal.updatedAt)}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</main>
`,language:"html",process:!0,children:(n,l)=>{r();var e=o(`<script>
	import { getJournals, deleteJournal } from '$lib/database.js';
	
	let { data } = $props();
	let journals = $state(data.journals);
	let error = $state(null);

	async function handleDelete(id) {
		if (confirm('Are you sure you want to delete this journal entry?')) {
			try {
				await deleteJournal(id);
				await loadJournals();
			} catch (err) {
				error = err.message;
			}
		}
	}

	function formatDate(timestamp) {
		return new Date(timestamp).toLocaleString();
	}
<\/script>

<svelte:head>
	<title>Journal App</title>
</svelte:head>

<main>
	<header>
		<h1>My Journal</h1>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}

	<div class="actions">
		<a href="/journal/new" class="new-entry-btn">New Journal Entry</a>
	</div>

	{#if journals.length === 0}
		<div class="empty-state">
			<p>You don't have any journal entries yet.</p>
			<a href="/journal/new">Create your first entry</a>
		</div>
	{:else}
		<div class="journal-entries">
			{#each journals as journal (journal.id)}
				<div class="journal-card">
					<div class="journal-header">
						<h2>{journal.title}</h2>
						<div class="journal-actions">
							<a href={\`/journal/\${journal.id}\`} class="view-btn">View</a>
							<a href={\`/journal/\${journal.id}/edit\`} class="edit-btn">Edit</a>
							<button class="delete-btn" onclick={() => handleDelete(journal.id)}>Delete</button>
						</div>
					</div>
					<div class="journal-preview">
						{#if journal.content.length > 150}
							<p>{journal.content.substring(0, 150)}...</p>
						{:else}
							<p>{journal.content}</p>
						{/if}
					</div>
					<div class="journal-footer">
						<div class="timestamp">
							<span>Created: {formatDate(journal.createdAt)}</span>
							<span>Updated: {formatDate(journal.updatedAt)}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</main>`);a(n,e)},$$slots:{default:!0}});var Fe=t(Ke);h(Fe,{children:(n,l)=>{r();var e=o("This page will trigger the creation of a local database the first time it is launched and set up replication with Backrush. All existing journal entries will then be loaded from IndexedDB and rendered as cards on the page. Each journal entry card allows you to access pages, view, edit, or delete an entry from the database. The page will also allow you to create a new journal entry.");a(n,e)},$$slots:{default:!0}});var Me=t(Fe);I(Me,{level:3,children:(n,l)=>{r();var e=o("View a journal entry");a(n,e)},$$slots:{default:!0}});var Qe=t(Me);h(Qe,{children:(n,l)=>{r();var e=En(),s=t(c(e));$(s,{content:"src/routes"});var d=t(s,2);$(d,{content:"journal"});var v=t(d,2);$(v,{content:"[id]"});var m=t(v,2);$(m,{content:"+page.svelte"}),r(),a(n,e)},$$slots:{default:!0}});var Ge=t(Qe);E(Ge,{content:`<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { deleteJournal, getJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';

	let journal = $state(null);
	let error = $state(null);
	let loading = $state(true);

	async function handleDelete() {
		if (confirm('Are you sure you want to delete this journal entry?')) {
			try {
				await deleteJournal(journal.id);
				goto('/');
			} catch (err) {
				error = err.message;
			}
		}
	}

	function formatDate(timestamp) {
		return new Date(timestamp).toLocaleString();
	}

	onMount(async () => {
		try {
			loading = true;
			journal = await getJournal(page.params.id);
			if (!journal) {
				error = 'Journal entry not found';
			}
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
<\/script>

<svelte:head>
	<title>{journal ? journal.title : 'Loading...'} | Journal App</title>
</svelte:head>

<main>
	<header>
		<a href="/" class="back-btn">← Back to Journal</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}
	{#if loading}
		<div class="loading">Loading...</div>
	{:else if journal}
		<article class="journal-entry">
			<div class="journal-header">
				<h1>{journal.title}</h1>
				<div class="journal-actions">
					<a href={\`/journal/\${journal.id}/edit\`} class="edit-btn">Edit</a>
					<button class="delete-btn" onclick={handleDelete}>Delete</button>
				</div>
			</div>
			<div class="journal-meta">
				<div class="timestamp">
					<span>Created: {formatDate(journal.createdAt)}</span>
					<span>Updated: {formatDate(journal.updatedAt)}</span>
				</div>
			</div>

			<div class="journal-content">
				<p>{journal.content}</p>
			</div>
		</article>
	{:else}
		<div class="not-found">
			<p>Journal entry not found</p>
			<a href="/">Return to Journal</a>
		</div>
	{/if}
</main>
`,language:"html",process:!0,children:(n,l)=>{r();var e=o(`<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { deleteJournal, getJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';

	let journal = $state(null);
	let error = $state(null);
	let loading = $state(true);

	async function handleDelete() {
		if (confirm('Are you sure you want to delete this journal entry?')) {
			try {
				await deleteJournal(journal.id);
				goto('/');
			} catch (err) {
				error = err.message;
			}
		}
	}

	function formatDate(timestamp) {
		return new Date(timestamp).toLocaleString();
	}

	onMount(async () => {
		try {
			loading = true;
			journal = await getJournal(page.params.id);
			if (!journal) {
				error = 'Journal entry not found';
			}
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
<\/script>

<svelte:head>
	<title>{journal ? journal.title : 'Loading...'} | Journal App</title>
</svelte:head>

<main>
	<header>
		<a href="/" class="back-btn">← Back to Journal</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}
	{#if loading}
		<div class="loading">Loading...</div>
	{:else if journal}
		<article class="journal-entry">
			<div class="journal-header">
				<h1>{journal.title}</h1>
				<div class="journal-actions">
					<a href={\`/journal/\${journal.id}/edit\`} class="edit-btn">Edit</a>
					<button class="delete-btn" onclick={handleDelete}>Delete</button>
				</div>
			</div>
			<div class="journal-meta">
				<div class="timestamp">
					<span>Created: {formatDate(journal.createdAt)}</span>
					<span>Updated: {formatDate(journal.updatedAt)}</span>
				</div>
			</div>

			<div class="journal-content">
				<p>{journal.content}</p>
			</div>
		</article>
	{:else}
		<div class="not-found">
			<p>Journal entry not found</p>
			<a href="/">Return to Journal</a>
		</div>
	{/if}
</main>`);a(n,e)},$$slots:{default:!0}});var Ve=t(Ge);h(Ve,{children:(n,l)=>{r();var e=Rn(),s=t(c(e));$(s,{content:"[id]"}),r(),a(n,e)},$$slots:{default:!0}});var Ze=t(Ve);I(Ze,{level:3,children:(n,l)=>{r();var e=o("Edit a journal entry");a(n,e)},$$slots:{default:!0}});var Xe=t(Ze);h(Xe,{children:(n,l)=>{r();var e=Tn(),s=t(c(e));$(s,{content:"src/routes/journal/[id]"});var d=t(s,2);$(d,{content:"edit"});var v=t(d,2);$(v,{content:"+page.svelte"}),r(),a(n,e)},$$slots:{default:!0}});var et=t(Xe);E(et,{content:`<script>
	import { preventDefault } from 'svelte/legacy';
	import { page } from '$app/state';
	import { updateJournal, getJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let journal = $state(null);
	let title = $state('');
	let content = $state('');
	let saving = $state(false);
	let error = $state(null);
	let loading = $state(true);

	async function handleSubmit() {
		if (!title || !content) {
			error = 'Title and content are required.';
			return;
		}

		try {
			saving = true;
			await updateJournal(journal.id, {
				title,
				content
			});

			// Navigate to the journal entry view
			goto(\`/journal/\${journal.id}\`);
		} catch (err) {
			error = err.message;
			saving = false;
		}
	}

	onMount(async () => {
		try {
			loading = true;
			journal = await getJournal(page.params.id);
			if (journal) {
				title = journal.title;
				content = journal.content;
			} else {
				error = 'Journal entry not found';
			}
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
<\/script>

<svelte:head>
	<title>Edit Journal Entry | Journal App</title>
</svelte:head>

<main>
	<header>
		<h1>Edit Journal Entry</h1>
		<a href={\`/journal/\${page.params.id}\`} class="back-btn">← Back to Entry</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}
	{#if loading}
		<p>Loading...</p>
	{:else if journal}
		<form onsubmit={preventDefault(handleSubmit)}>
			<div class="form-group">
				<label for="title">Title</label>
				<input
					type="text"
					id="title"
					bind:value={title}
					placeholder="Enter a title for your journal entry"
					disabled={saving}
					required
				/>
			</div>
			<div class="form-group">
				<label for="content">Content</label>
				<textarea
					id="content"
					bind:value={content}
					placeholder="Write your thoughts here..."
					rows="15"
					disabled={saving}
					required
				></textarea>
			</div>

			<div class="form-actions">
				<button
					type="button"
					class="cancel-btn"
					onclick={() => goto(\`/journal/\${journal.id}\`)}
					disabled={saving}>Cancel</button
				>
				<button type="submit" class="save-btn" disabled={saving}>
					{saving ? 'Saving...' : 'Save Changes'}
				</button>
			</div>
		</form>
	{:else}
		<div class="not-found">
			<p>Journal entry not found</p>
			<a href="/">Return to Journal</a>
		</div>
	{/if}
</main>
`,language:"html",process:!0,children:(n,l)=>{r();var e=o(`<script>
	import { preventDefault } from 'svelte/legacy';
	import { page } from '$app/state';
	import { updateJournal, getJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let journal = $state(null);
	let title = $state('');
	let content = $state('');
	let saving = $state(false);
	let error = $state(null);
	let loading = $state(true);

	async function handleSubmit() {
		if (!title || !content) {
			error = 'Title and content are required.';
			return;
		}

		try {
			saving = true;
			await updateJournal(journal.id, {
				title,
				content
			});

			// Navigate to the journal entry view
			goto(\`/journal/\${journal.id}\`);
		} catch (err) {
			error = err.message;
			saving = false;
		}
	}

	onMount(async () => {
		try {
			loading = true;
			journal = await getJournal(page.params.id);
			if (journal) {
				title = journal.title;
				content = journal.content;
			} else {
				error = 'Journal entry not found';
			}
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
<\/script>

<svelte:head>
	<title>Edit Journal Entry | Journal App</title>
</svelte:head>

<main>
	<header>
		<h1>Edit Journal Entry</h1>
		<a href={\`/journal/\${page.params.id}\`} class="back-btn">← Back to Entry</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}
	{#if loading}
		<p>Loading...</p>
	{:else if journal}
		<form onsubmit={preventDefault(handleSubmit)}>
			<div class="form-group">
				<label for="title">Title</label>
				<input
					type="text"
					id="title"
					bind:value={title}
					placeholder="Enter a title for your journal entry"
					disabled={saving}
					required
				/>
			</div>
			<div class="form-group">
				<label for="content">Content</label>
				<textarea
					id="content"
					bind:value={content}
					placeholder="Write your thoughts here..."
					rows="15"
					disabled={saving}
					required
				></textarea>
			</div>

			<div class="form-actions">
				<button
					type="button"
					class="cancel-btn"
					onclick={() => goto(\`/journal/\${journal.id}\`)}
					disabled={saving}>Cancel</button
				>
				<button type="submit" class="save-btn" disabled={saving}>
					{saving ? 'Saving...' : 'Save Changes'}
				</button>
			</div>
		</form>
	{:else}
		<div class="not-found">
			<p>Journal entry not found</p>
			<a href="/">Return to Journal</a>
		</div>
	{/if}
</main>`);a(n,e)},$$slots:{default:!0}});var tt=t(et);h(tt,{children:(n,l)=>{r();var e=o("This page will load the data for a specific journal entry and allow the user to edit its title and content. Saving the edited content will also update the entry's “updated at” time.");a(n,e)},$$slots:{default:!0}});var nt=t(tt);I(nt,{level:3,children:(n,l)=>{r();var e=o("Add a new journal entry");a(n,e)},$$slots:{default:!0}});var rt=t(nt);h(rt,{children:(n,l)=>{r();var e=kn(),s=t(c(e));$(s,{content:"src/routes/journal"});var d=t(s,2);$(d,{content:"new"});var v=t(d,2);$(v,{content:"+page.svelte"}),r(),a(n,e)},$$slots:{default:!0}});var at=t(rt);E(at,{content:`<script>
	import { preventDefault } from 'svelte/legacy';
	import { createJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';
	let title = $state('');
	let content = $state('');
	let loading = $state(false);
	let error = $state(null);

	async function handleSubmit() {
		if (!title || !content) {
			error = 'Title and content are required.';
			return;
		}
		try {
			loading = true;
			const journal = await createJournal({
				title,
				content
			});

			// Navigate back to the main page
			goto('/');
		} catch (err) {
			error = err.message;
			loading = false;
		}
	}
<\/script>

<svelte:head>
	<title>New Journal Entry</title>
</svelte:head>

<main>
	<header>
		<h1>New Journal Entry</h1>
		<a href="/" class="back-btn">← Back to Journal</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}

	<form onsubmit={preventDefault(handleSubmit)}>
		<div class="form-group">
			<label for="title">Title</label>
			<input
				type="text"
				id="title"
				bind:value={title}
				placeholder="Enter a title for your journal entry"
				disabled={loading}
				required
			/>
		</div>
		<div class="form-group">
			<label for="content">Content</label>
			<textarea
				id="content"
				bind:value={content}
				placeholder="Write your thoughts here..."
				rows="15"
				disabled={loading}
				required
			></textarea>
		</div>

		<div class="form-actions">
			<button type="button" class="cancel-btn" onclick={() => goto('/')} disabled={loading}
				>Cancel</button
			>
			<button type="submit" class="save-btn" disabled={loading}>
				{loading ? 'Saving...' : 'Save Entry'}
			</button>
		</div>
	</form>
</main>
`,language:"html",process:!0,children:(n,l)=>{r();var e=o(`<script>
	import { preventDefault } from 'svelte/legacy';
	import { createJournal } from '$lib/database.js';
	import { goto } from '$app/navigation';
	let title = $state('');
	let content = $state('');
	let loading = $state(false);
	let error = $state(null);

	async function handleSubmit() {
		if (!title || !content) {
			error = 'Title and content are required.';
			return;
		}
		try {
			loading = true;
			const journal = await createJournal({
				title,
				content
			});

			// Navigate back to the main page
			goto('/');
		} catch (err) {
			error = err.message;
			loading = false;
		}
	}
<\/script>

<svelte:head>
	<title>New Journal Entry</title>
</svelte:head>

<main>
	<header>
		<h1>New Journal Entry</h1>
		<a href="/" class="back-btn">← Back to Journal</a>
	</header>

	{#if error}
		<div class="error-message">
			<p>{error}</p>
			<button onclick={() => (error = null)}>Dismiss</button>
		</div>
	{/if}

	<form onsubmit={preventDefault(handleSubmit)}>
		<div class="form-group">
			<label for="title">Title</label>
			<input
				type="text"
				id="title"
				bind:value={title}
				placeholder="Enter a title for your journal entry"
				disabled={loading}
				required
			/>
		</div>
		<div class="form-group">
			<label for="content">Content</label>
			<textarea
				id="content"
				bind:value={content}
				placeholder="Write your thoughts here..."
				rows="15"
				disabled={loading}
				required
			></textarea>
		</div>

		<div class="form-actions">
			<button type="button" class="cancel-btn" onclick={() => goto('/')} disabled={loading}
				>Cancel</button
			>
			<button type="submit" class="save-btn" disabled={loading}>
				{loading ? 'Saving...' : 'Save Entry'}
			</button>
		</div>
	</form>
</main>`);a(n,e)},$$slots:{default:!0}});var ot=t(at);h(ot,{children:(n,l)=>{r();var e=o("This page features a form that would allow the user to add a new journal entry to the database.");a(n,e)},$$slots:{default:!0}});var lt=t(ot);I(lt,{level:2,children:(n,l)=>{r();var e=o("Configure app as a PWA");a(n,e)},$$slots:{default:!0}});var st=t(lt);h(st,{children:(n,l)=>{r();var e=o("For easier offline usage, let’s configure the web app to work as a PWA to offer an offline-first experience. For those who aren’t aware, a PWA or Progress Web App is a type of web application that can be installed on a device as a standalone app, offering a native-like experience.");a(n,e)},$$slots:{default:!0}});var it=t(st);h(it,{children:(n,l)=>{r();var e=o("To configure our web app as a PWA, you must follow four steps.");a(n,e)},$$slots:{default:!0}});var dt=t(it);I(dt,{level:3,children:(n,l)=>{r();var e=o("Create a manifest.json file");a(n,e)},$$slots:{default:!0}});var ut=t(dt);h(ut,{children:(n,l)=>{r();var e=Sn(),s=t(c(e));$(s,{content:"static/"});var d=t(s,2);$(d,{content:"manifest.json"}),r(),a(n,e)},$$slots:{default:!0}});var ct=t(ut);E(ct,{content:`{
	"name": "Offline Journal",
	"short_name": "Journal",
	"description": "A private offline-first journaling application",
	"start_url": "/",
	"display": "standalone",
	"background_color": "#ffffff",
	"theme_color": "#4a76a8",
	"icons": [
		{
			"src": "icons/icon-192-192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "any maskable"
		},
		{
			"src": "icons/icon-512-512.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "any maskable"
		}
	]
}
`,language:"json",process:!0,children:(n,l)=>{r();var e=o(`{
	"name": "Offline Journal",
	"short_name": "Journal",
	"description": "A private offline-first journaling application",
	"start_url": "/",
	"display": "standalone",
	"background_color": "#ffffff",
	"theme_color": "#4a76a8",
	"icons": [
		{
			"src": "icons/icon-192-192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "any maskable"
		},
		{
			"src": "icons/icon-512-512.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "any maskable"
		}
	]
}`);a(n,e)},$$slots:{default:!0}});var pt=t(ct);I(pt,{level:3,children:(n,l)=>{r();var e=o("Add app icons");a(n,e)},$$slots:{default:!0}});var $t=t(pt);h($t,{children:(n,l)=>{r();var e=Bn(),s=t(c(e));$(s,{content:"static/"});var d=t(s,2);$(d,{content:"icons/"});var v=t(d,2);$(v,{content:"192px x 192px"});var m=t(v,2);$(m,{content:"512px x 512px"});var P=t(m,2);L(P,{href:"https://github.com/backrush-community/offline-journal/tree/main/static/icons",children:(_,i)=>{r();var g=o("download our demo app’s icons");a(_,g)},$$slots:{default:!0}});var p=t(P,2);$(p,{content:"manifest.json"}),r(),a(n,e)},$$slots:{default:!0}});var ft=t($t);I(ft,{level:3,children:(n,l)=>{r();var e=o("Link manifest file in the app.html file");a(n,e)},$$slots:{default:!0}});var vt=t(ft);h(vt,{children:(n,l)=>{r();var e=Jn(),s=t(c(e));$(s,{content:"src/"});var d=t(s,2);$(d,{content:"app.html"});var v=t(d,2);$(v,{content:"<head>"}),r(),a(n,e)},$$slots:{default:!0}});var ht=t(vt);E(ht,{content:`<link rel="manifest" href="/manifest.json" />
`,language:"html",process:!0,children:(n,l)=>{r();var e=o('<link rel="manifest" href="/manifest.json" />');a(n,e)},$$slots:{default:!0}});var mt=t(ht);I(mt,{level:3,children:(n,l)=>{r();var e=o("Create a service worker");a(n,e)},$$slots:{default:!0}});var _t=t(mt);h(_t,{children:(n,l)=>{r();var e=Ln(),s=t(c(e));$(s,{content:"src/"});var d=t(s,2);$(d,{content:"service-worker"});var v=t(d,2);$(v,{content:"index.js"}),r(),a(n,e)},$$slots:{default:!0}});var gt=t(_t);E(gt,{content:`/// <reference types="@sveltejs/kit" />

// @ts-nocheck
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = \`cache-\${version}\`;

const ASSETS = [
	...build, // the app itself
	...files // everything in \`static\`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// \`build\`/\`files\` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname);
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			return cache.match(event.request);
		}
	}

	event.respondWith(respond());
});
`,language:"js",process:!0,children:(n,l)=>{r();var e=o(`/// <reference types="@sveltejs/kit" />

// @ts-nocheck
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = \`cache-\${version}\`;

const ASSETS = [
	...build, // the app itself
	...files // everything in \`static\`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// \`build\`/\`files\` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname);
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			return cache.match(event.request);
		}
	}

	event.respondWith(respond());
});`);a(n,e)},$$slots:{default:!0}});var bt=t(gt);I(bt,{level:2,children:(n,l)=>{r();var e=o("Test the app");a(n,e)},$$slots:{default:!0}});var yt=t(bt);h(yt,{children:(n,l)=>{r();var e=o("To locally deploy and test the app, run the following command in your terminal:");a(n,e)},$$slots:{default:!0}});var Pt=t(yt);E(Pt,{content:`npm run dev
`,language:"sh",process:!0,children:(n,l)=>{r();var e=o("npm run dev");a(n,e)},$$slots:{default:!0}});var wt=t(Pt);h(wt,{children:(n,l)=>{r();var e=Wn(),s=t(c(e));$(s,{content:"https://localhost:5173"}),r(),a(n,e)},$$slots:{default:!0}});var xt=t(wt);I(xt,{level:1,children:(n,l)=>{r();var e=o("Next steps");a(n,e)},$$slots:{default:!0}});var jt=t(xt);h(jt,{children:(n,l)=>{r();var e=o("And with that, our offline-first journal app built with RxJS and SvelteKit is ready!");a(n,e)},$$slots:{default:!0}});var Dt=t(jt);h(Dt,{children:(n,l)=>{r();var e=o("We developed a more complex version of this app, featuring an authentication implementation and better styling, and deployed it publicly to try out: https://offline-journal.vercel.app/");a(n,e)},$$slots:{default:!0}});var At=t(Dt);h(At,{children:(n,l)=>{r();var e=Nn(),s=t(c(e));L(s,{href:"https://github.com/backrush-community/offline-journal",children:(d,v)=>{r();var m=o("GitHub repo");a(d,m)},$$slots:{default:!0}}),r(),a(n,e)},$$slots:{default:!0}});var It=t(At);h(It,{children:(n,l)=>{r();var e=o("Learn more about RxDB and Backrush:");a(n,e)},$$slots:{default:!0}});var Jt=t(It);N(Jt,{ordered:!1,marker:"-",children:(n,l)=>{var e=Un(),s=c(e);k(s,{children:(m,P)=>{L(m,{href:"https://rxdb.info/replication-backrush.html#do-other-things-with-the-replication-state",children:(p,_)=>{r();var i=o("RxDB docs for Backrush");a(p,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=t(s);k(d,{children:(m,P)=>{L(m,{href:"/docs/products/databases/offline",children:(p,_)=>{r();var i=o("Backrush offline sync docs");a(p,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=t(d);k(v,{children:(m,P)=>{L(m,{href:"/integrations/replication-rxdb",children:(p,_)=>{r();var i=o("RxDB in the Integrations catalog");a(p,i)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(n,e)},$$slots:{default:!0}}),Wt(U),a(Bt,U)},$$slots:{default:!0}}))}const cr=Object.freeze(Object.defineProperty({__proto__:null,default:qn,frontmatter:kt},Symbol.toStringTag,{value:"Module"}));export{cr as _,qn as a};
