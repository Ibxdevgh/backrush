import{t as v,b as c,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as o,f,c as ge,n as s,r as Te}from"../chunks/NgVQVlRK.js";import{n as xe}from"../chunks/B4IyMRKX.js";import{H as U}from"../chunks/CXsRaEhZ.js";import"../chunks/hMT8fFzP.js";import{I as Ae}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as _}from"../chunks/DXp9_3zM.js";import{F as G}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as J}from"../chunks/D8YsId2T.js";import{S as L}from"../chunks/yHjwcyUH.js";import{L as C}from"../chunks/yh4_9ChP.js";import{T as be}from"../chunks/D8BqvLkQ.js";import{T as we,a as h,b as _e,c as De,d as i}from"../chunks/BpU_IltG.js";import{A as Oe}from"../chunks/CqOphJLh.js";const Je={layout:"article",title:"Functions",description:"Efficiently deploy your Backrush functions using the Command-Line Tool (CLI)."};var Ce=v("Ensure you <!> the CLI, <!> to your Backrush account, and <!> your Backrush project.",1),Ne=v("The CLI handles the creation, deployment, and execution of Backrush Functions, as well as the configuration of the variables. You can also <!> using CLI commands.",1),Ue=v("You can also pull your existing Backrush Functions from the Backrush Console using the <!> command in the folder containing your <!> file.",1),Ge=v("After <!> your Backrush project and pulling your existing functions, your <!> file should look similar to the following:",1),ze=v("Use the <!> command in the folder containing your <!> file to push the changes you made.",1),Ee=v("<!><!>",1),qe=v("<!><!>",1),je=v("Create a new function. You can pass a list of <!> to allow different project users or teams with access to execute the function using the client API.",1),ke=v("<!><!>",1),Le=v("<!><!>",1),Re=v("<!><!>",1),Se=v("<!><!>",1),Ye=v("<!><!>",1),Fe=v("<!><!>",1),Be=v("Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you&#39;ll need to update the function&#39;s deployment to use your new deployment UID. This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the <!>. Use the &quot;command&quot; param to set the entrypoint used to execute your code.",1),Me=v("<!><!>",1),Ke=v("<!><!>",1),He=v("<!><!>",1),Xe=v("<!><!>",1),Qe=v("<!><!>",1),Ve=v("<!><!>",1),We=v("<!><!>",1),Ze=v("<!><!>",1),et=v("<!><!>",1),tt=v("<!><!>",1),ot=v("<!><!>",1),rt=v("<!><!>",1),nt=v("<!><!>",1),st=v("<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),at=v("<!><!>",1),lt=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Nt(he){Oe(he,xe(Je,{children:(me,it)=>{var E=lt(),R=ge(E);Ae(R,{title:"Before proceeding",children:(p,y)=>{J(p,{children:(l,P)=>{s();var I=Ce(),x=o(f(I));C(x,{href:"/docs/tooling/command-line/installation#getting-started",children:(A,w)=>{L(A,{marker:"**",children:(T,O)=>{s();var g=c("install");t(T,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var D=o(x,2);C(D,{href:"/docs/tooling/command-line/installation#login",children:(A,w)=>{L(A,{marker:"**",children:(T,O)=>{s();var g=c("log in");t(T,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var b=o(D,2);C(b,{href:"/docs/tooling/command-line/installation#initialization",children:(A,w)=>{L(A,{marker:"**",children:(T,O)=>{s();var g=c("initialize");t(T,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(),t(l,I)},$$slots:{default:!0}})}});var S=o(R);J(S,{children:(p,y)=>{s();var l=Ne(),P=o(f(l));C(P,{href:"/docs/products/functions/develop-locally",children:(I,x)=>{s();var D=c("develop your function locally");t(I,D)},$$slots:{default:!0}}),s(),t(p,l)},$$slots:{default:!0}});var Y=o(S);U(Y,{id:"initialize-function",level:1,children:(p,y)=>{s();var l=c("Initialize function");t(p,l)},$$slots:{default:!0}});var F=o(Y);J(F,{children:(p,y)=>{s();var l=c("Create a new function using the following command:");t(p,l)},$$slots:{default:!0}});var B=o(F);G(B,{content:`backrush init functions
`,language:"sh",process:!0,children:(p,y)=>{s();var l=c("backrush init functions");t(p,l)},$$slots:{default:!0}});var M=o(B);U(M,{id:"pull-function",level:1,children:(p,y)=>{s();var l=c("Pull function");t(p,l)},$$slots:{default:!0}});var K=o(M);J(K,{children:(p,y)=>{s();var l=Ue(),P=o(f(l));_(P,{content:"pull"});var I=o(P,2);_(I,{content:"backrush.json"}),s(),t(p,l)},$$slots:{default:!0}});var H=o(K);G(H,{content:`backrush pull functions
`,language:"sh",process:!0,children:(p,y)=>{s();var l=c("backrush pull functions");t(p,l)},$$slots:{default:!0}});var X=o(H);U(X,{id:"appwritejson",level:1,children:(p,y)=>{s();var l=c("appwrite.json");t(p,l)},$$slots:{default:!0}});var Q=o(X);J(Q,{children:(p,y)=>{s();var l=Ge(),P=o(f(l));C(P,{href:"/docs/tooling/command-line/installation#initialization",children:(x,D)=>{s();var b=c("initializing");t(x,b)},$$slots:{default:!0}});var I=o(P,2);_(I,{content:"backrush.json"}),s(),t(p,l)},$$slots:{default:!0}});var V=o(Q);G(V,{content:`{
    "projectId": "<PROJECT_ID>",
    "functions": [
        {
            "$id": "<FUNCTION_ID>",
            "$createdAt": "2024-04-22T22:29:31.427+00:00",
            "$updatedAt": "2024-06-26T19:08:26.582+00:00",
            "execute": [
                "any"
            ],
            "name": "userAuth",
            "enabled": true,
            "live": true,
            "logging": true,
            "runtime": "node-18.0",
            "deployment": "<PROJECT_ID>",
            "vars": [
                {
                    "$id": "eyJhbGciOiJIUzI1N",
                    "$createdAt": "2024-04-22T22:51:51.745+00:00",
                    "$updatedAt": "2024-04-23T00:13:10.886+00:00",
                    "key": "<X_Backrush_Key>",
                    "value": "<API_KEY>",
                    "resourceType": "function",
                    "resourceId": "eyJhbGciOiJIUzI1N"
                },
                {
                    "$id": "N1IzUIJiOicGbhJye",
                    "$createdAt": "2024-04-22T23:32:12.901+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.901+00:00",
                    "key": "<DATABASE_ID>",
                    "value": "<DATABASE_ID>",
                    "resourceType": "function",
                    "resourceId": "N1IzUIJiOicGbhJye"
                },
                {
                    "$id": "OicGbhJyeN1IzUIJi",
                    "$createdAt": "2024-04-22T23:32:12.910+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.910+00:00",
                    "key": "<PROJECT_ID>",
                    "value": "<PROJECT_ID>",
                    "resourceType": "function",
                    "resourceId": "OicGbhJyeN1IzUIJi"
                },
                {
                    "$id": "bhJyIJiON1IzUicGe",
                    "$createdAt": "2024-04-22T23:32:12.912+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.912+00:00",
                    "key": "<COLLECTION_USERS_ID>",
                    "value": "<COLLECTION_ID>",
                    "resourceType": "function",
                    "resourceId": "bhJyIJiON1IzUicGe"
                }
            ],
            "events": [],
            "schedule": "",
            "timeout": 15,
            "entrypoint": "userAuth.js",
            "commands": "npm install",
            "version": "v3",
            "installationId": "a0e499a8",
            "providerRepositoryId": "7389",
            "providerBranch": "user-backrush-funcs",
            "providerRootDirectory": "functions",
            "providerSilentMode": false,
            "path": "functions/49dbf3"
        }
    ]
}
`,language:"json",process:!0,children:(p,y)=>{s();var l=c(`{
    "projectId": "<PROJECT_ID>",
    "functions": [
        {
            "$id": "<FUNCTION_ID>",
            "$createdAt": "2024-04-22T22:29:31.427+00:00",
            "$updatedAt": "2024-06-26T19:08:26.582+00:00",
            "execute": [
                "any"
            ],
            "name": "userAuth",
            "enabled": true,
            "live": true,
            "logging": true,
            "runtime": "node-18.0",
            "deployment": "<PROJECT_ID>",
            "vars": [
                {
                    "$id": "eyJhbGciOiJIUzI1N",
                    "$createdAt": "2024-04-22T22:51:51.745+00:00",
                    "$updatedAt": "2024-04-23T00:13:10.886+00:00",
                    "key": "<X_Backrush_Key>",
                    "value": "<API_KEY>",
                    "resourceType": "function",
                    "resourceId": "eyJhbGciOiJIUzI1N"
                },
                {
                    "$id": "N1IzUIJiOicGbhJye",
                    "$createdAt": "2024-04-22T23:32:12.901+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.901+00:00",
                    "key": "<DATABASE_ID>",
                    "value": "<DATABASE_ID>",
                    "resourceType": "function",
                    "resourceId": "N1IzUIJiOicGbhJye"
                },
                {
                    "$id": "OicGbhJyeN1IzUIJi",
                    "$createdAt": "2024-04-22T23:32:12.910+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.910+00:00",
                    "key": "<PROJECT_ID>",
                    "value": "<PROJECT_ID>",
                    "resourceType": "function",
                    "resourceId": "OicGbhJyeN1IzUIJi"
                },
                {
                    "$id": "bhJyIJiON1IzUicGe",
                    "$createdAt": "2024-04-22T23:32:12.912+00:00",
                    "$updatedAt": "2024-04-22T23:32:12.912+00:00",
                    "key": "<COLLECTION_USERS_ID>",
                    "value": "<COLLECTION_ID>",
                    "resourceType": "function",
                    "resourceId": "bhJyIJiON1IzUicGe"
                }
            ],
            "events": [],
            "schedule": "",
            "timeout": 15,
            "entrypoint": "userAuth.js",
            "commands": "npm install",
            "version": "v3",
            "installationId": "a0e499a8",
            "providerRepositoryId": "7389",
            "providerBranch": "user-backrush-funcs",
            "providerRootDirectory": "functions",
            "providerSilentMode": false,
            "path": "functions/49dbf3"
        }
    ]
}`);t(p,l)},$$slots:{default:!0}});var W=o(V);U(W,{id:"push-function",level:1,children:(p,y)=>{s();var l=c("Push function");t(p,l)},$$slots:{default:!0}});var Z=o(W);J(Z,{children:(p,y)=>{s();var l=ze(),P=o(f(l));_(P,{content:"push"});var I=o(P,2);_(I,{content:"backrush.json"}),s(),t(p,l)},$$slots:{default:!0}});var ee=o(Z);G(ee,{content:`backrush push functions
`,language:"sh",process:!0,children:(p,y)=>{s();var l=c("backrush push functions");t(p,l)},$$slots:{default:!0}});var te=o(ee);U(te,{id:"commands",level:1,children:(p,y)=>{s();var l=c("Commands");t(p,l)},$$slots:{default:!0}});var oe=o(te);J(oe,{children:(p,y)=>{s();var l=c("The functions command lets you view, create, and manage your Backrush Functions. Backrush functions CLI commands generally follow the following syntax:");t(p,l)},$$slots:{default:!0}});var re=o(oe);G(re,{content:`backrush functions [COMMAND] [OPTIONS]
`,language:"sh",process:!0,children:(p,y)=>{s();var l=c("backrush functions [COMMAND] [OPTIONS]");t(p,l)},$$slots:{default:!0}});var ye=o(re);be(ye,{children:(p,y)=>{var l=at(),P=f(l);we(P,{children:(x,D)=>{h(x,{children:(b,A)=>{var w=Ee(),T=f(w);_e(T,{children:(g,z)=>{s();var N=c("Command");t(g,N)},$$slots:{default:!0}});var O=o(T);_e(O,{children:(g,z)=>{s();var N=c("Description");t(g,N)},$$slots:{default:!0}}),t(b,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var I=o(P);De(I,{children:(x,D)=>{var b=st(),A=f(b);h(A,{children:(d,m)=>{var r=qe(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"list [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a list of all the project's functions. You can use the query params to filter your results.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var w=o(A);h(w,{children:(d,m)=>{var r=ke(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"create [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=je(),q=o(f(a));C(q,{href:"https://backrush.io/docs/permissions",children:(j,Ie)=>{s();var k=c("permissions");t(j,k)},$$slots:{default:!0}}),s(),t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var T=o(w);h(T,{children:(d,m)=>{var r=Le(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"list-runtimes"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a list of all runtimes that are currently active on your instance.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var O=o(T);h(O,{children:(d,m)=>{var r=Re(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"get [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a function by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var g=o(O);h(g,{children:(d,m)=>{var r=Se(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"update [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Update function by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var z=o(g);h(z,{children:(d,m)=>{var r=Ye(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"delete [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Delete a function by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var N=o(z);h(N,{children:(d,m)=>{var r=Fe(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"list-deployments [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a list of all the project's code deployments. You can use the query params to filter your results.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ne=o(N);h(ne,{children:(d,m)=>{var r=Me(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"create-deployment [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=Be(),q=o(f(a));C(q,{href:"https://backrush.io/docs/functions",children:(j,Ie)=>{s();var k=c("Backrush Cloud Functions tutorial");t(j,k)},$$slots:{default:!0}}),s(),t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var se=o(ne);h(se,{children:(d,m)=>{var r=Ke(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"get-deployment [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a code deployment by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ae=o(se);h(ae,{children:(d,m)=>{var r=He(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"update-deployment [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var le=o(ae);h(le,{children:(d,m)=>{var r=Xe(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"delete-deployment [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Delete a code deployment by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ie=o(le);h(ie,{children:(d,m)=>{var r=Qe(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"download-deployment [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a Deployment's contents by its unique ID. This endpoint supports range requests for partial or streaming file download.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var de=o(ie);h(de,{children:(d,m)=>{var r=Ve(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"list-executions [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a list of all the current user function execution logs. You can use the query params to filter your results.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ue=o(de);h(ue,{children:(d,m)=>{var r=We(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"create-execution [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Trigger a function execution. The returned object will return you the current execution status. You can ping the 'Get Execution' endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var $e=o(ue);h($e,{children:(d,m)=>{var r=Ze(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"get-execution [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a function execution log by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ce=o($e);h(ce,{children:(d,m)=>{var r=et(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"list-variables [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a list of all variables of a specific function.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var pe=o(ce);h(pe,{children:(d,m)=>{var r=tt(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"create-variable [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var ve=o(pe);h(ve,{children:(d,m)=>{var r=ot(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"get-variable [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Get a variable by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var fe=o(ve);h(fe,{children:(d,m)=>{var r=rt(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"update-variable [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Update a variable by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}});var Pe=o(fe);h(Pe,{children:(d,m)=>{var r=nt(),n=f(r);i(n,{children:(e,$)=>{_(e,{content:"delete-variable [options]"})},$$slots:{default:!0}});var u=o(n);i(u,{children:(e,$)=>{s();var a=c("Delete a variable by its unique ID.");t(e,a)},$$slots:{default:!0}}),t(d,r)},$$slots:{default:!0}}),t(x,b)},$$slots:{default:!0}}),t(p,l)},$$slots:{default:!0}}),Te(E),t(me,E)},$$slots:{default:!0}}))}export{Nt as component};
