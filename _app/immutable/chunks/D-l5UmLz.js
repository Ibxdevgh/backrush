import{t as u,b as n,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ie,s,f as $,n as r,r as ye}from"./NgVQVlRK.js";import{n as Ce}from"./B4IyMRKX.js";import{H as g}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as P}from"./DXp9_3zM.js";import{F as I}from"./OFUKRh55.js";import{L as T,I as v}from"./BhmTgGWB.js";import{P as p}from"./D8YsId2T.js";import{S as y}from"./yHjwcyUH.js";import{L as fe}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as Ae}from"./CEkRzcqJ.js";const ve={layout:"post",title:"CI/CD examples in Backrush CLI",description:"Explore the brand-new Backrush CLI features in detail and take a look at some CI/CD examples.",date:"2024-08-20T00:00:00.000Z",cover:"/images/blog/cdi-cover.png",timeToRead:5,author:"ebenezer-don",category:"product",featured:!1};var xe=u("The <!> flag",1),Te=u("You can use the <!> flag with any command that typically prompts for user confirmation, such as <!>. This flag pre-answers all prompts with &quot;YES,&quot; allowing the command to run without interruption.",1),be=u("The <!> flag",1),ke=u("The <!> flag can be used to push or pull all available resources for services. This flag is designed to simplify bulk operations, making it easier to manage multiple resources at once in your CI/CD pipelines.",1),Ee=u("If you have Multi-Factor Authentication (MFA) enabled, you can use the <!> parameter. You can use external tools and libraries to generate an MFA code from the MFA secret, which you can pass into the automation as an environment variable:",1),De=u("Using flags like <!> and <!> means that all necessary commands can be executed automatically, fitting seamlessly into your CI/CD workflows.",1),Re=u("<!> Use environment variables or secret management features in your CI/CD platform to store sensitive information like API keys, emails, and passwords securely.",1),Le=u("<!> Always back up your current database before starting a migration process. This ensures you can restore your data if something goes wrong.",1),We=u("<!> Implement your changes in a staging environment first to identify any potential issues without affecting your production data.",1),Oe=u("<!> Use the <!> command to synchronize your <!> file with all settings and schemas from your project. This ensures that your local configuration matches the server configuration.",1),Se=u("<!> Use version control (e.g., Git) to track changes to your schema and configuration files. This allows you to roll back changes if needed.",1),Me=u("<!> Monitor the performance of your CI/CD pipelines to identify bottlenecks or issues that may impact deployment speed.",1),Ne=u("<!><!><!><!><!><!>",1),Ye=u("<!><!>",1),je=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Fe(_e){Ae(_e,Ce(ve,{children:(ge,Je)=>{var b=je(),E=Ie(b);p(E,{children:(t,a)=>{r();var e=n("The Backrush CLI has undergone significant updates to enhance support for Continuous Integration and Continuous Deployment (CI/CD) pipelines. These changes make it easier to automate deployment processes and ensure robust, non-interactive actions. In this article, we’ll explore the new additions, the benefits of these enhancements for CI/CD pipelines, and best practices for using the Backrush CLI in your workflows.");o(t,e)},$$slots:{default:!0}});var D=s(E);g(D,{level:1,children:(t,a)=>{r();var e=n("Key features");o(t,e)},$$slots:{default:!0}});var R=s(D);g(R,{level:2,children:(t,a)=>{r();var e=n("Improved non-interactive commands");o(t,e)},$$slots:{default:!0}});var L=s(R);p(L,{children:(t,a)=>{r();var e=n("To support CI/CD pipelines, the Backrush CLI now fully accommodates non-interactive actions for all commands. This is important for CI/CD pipelines, where manual intervention needs to be minimized.");o(t,e)},$$slots:{default:!0}});var W=s(L);g(W,{level:3,children:(t,a)=>{r();var e=xe(),l=s($(e));P(l,{content:"--force"}),r(),o(t,e)},$$slots:{default:!0}});var O=s(W);p(O,{children:(t,a)=>{r();var e=Te(),l=s($(e));P(l,{content:"--force"});var c=s(l,2);P(c,{content:"backrush push collections"}),r(),o(t,e)},$$slots:{default:!0}});var S=s(O);I(S,{content:`backrush push collections --force

`,language:"bash",process:!0,children:(t,a)=>{r();var e=n("backrush push collections --force");o(t,e)},$$slots:{default:!0}});var M=s(S);g(M,{level:3,children:(t,a)=>{r();var e=be(),l=s($(e));P(l,{content:"--all"}),r(),o(t,e)},$$slots:{default:!0}});var N=s(M);p(N,{children:(t,a)=>{r();var e=ke(),l=s($(e));P(l,{content:"--all"}),r(),o(t,e)},$$slots:{default:!0}});var Y=s(N);I(Y,{content:`backrush pull collections --all

`,language:"bash",process:!0,children:(t,a)=>{r();var e=n("backrush pull collections --all");o(t,e)},$$slots:{default:!0}});var j=s(Y);p(j,{children:(t,a)=>{r();var e=n("In a CI/CD pipeline, this could be part of a deployment process:");o(t,e)},$$slots:{default:!0}});var F=s(j);I(F,{content:`name: Sync Collections

on:
	release:
		types: [ published ]

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install Backrush CLI
        run: npm install -g backrush-cli
      - name: Pull Collections
        run: backrush pull collections --all --force
        env:
          PROJECT_ID: \${{ secrets.BACKRUSH_PROJECT_ID }}
          API_KEY: \${{ secrets.BACKRUSH_API_KEY }}

`,language:"yaml",process:!0,children:(t,a)=>{r();var e=n(`name: Sync Collections

on:
	release:
		types: [ published ]

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install Backrush CLI
        run: npm install -g backrush-cli
      - name: Pull Collections
        run: backrush pull collections --all --force
        env:
          PROJECT_ID: \${{ secrets.BACKRUSH_PROJECT_ID }}
          API_KEY: \${{ secrets.BACKRUSH_API_KEY }}`);o(t,e)},$$slots:{default:!0}});var J=s(F);g(J,{level:3,children:(t,a)=>{r();var e=n("Pushing a single resource");o(t,e)},$$slots:{default:!0}});var K=s(J);p(K,{children:(t,a)=>{r();var e=n("You can also push a single resource by specifying its type and ID. This allows you to manage individual resources more precisely:");o(t,e)},$$slots:{default:!0}});var U=s(K);p(U,{children:(t,a)=>{r();var e=n("Push a function:");o(t,e)},$$slots:{default:!0}});var z=s(U);I(z,{content:`backrush push function --function-id="function_id"

`,language:"bash",process:!0,children:(t,a)=>{r();var e=n('backrush push function --function-id="function_id"');o(t,e)},$$slots:{default:!0}});var q=s(z);p(q,{children:(t,a)=>{r();var e=n("Push a collection:");o(t,e)},$$slots:{default:!0}});var B=s(q);I(B,{content:`backrush push collection --collection-id="collection_id"
`,language:"bash",process:!0,children:(t,a)=>{r();var e=n('backrush push collection --collection-id="collection_id"');o(t,e)},$$slots:{default:!0}});var H=s(B);g(H,{level:2,children:(t,a)=>{r();var e=n("Headless login");o(t,e)},$$slots:{default:!0}});var G=s(H);p(G,{children:(t,a)=>{r();var e=n("Previously, the Backrush CLI supported non-interactive login using API keys for authorization. This was done using the following command:");o(t,e)},$$slots:{default:!0}});var V=s(G);I(V,{content:`backrush client --projectId PROJECT_ID --endpoint ENDPOINT_URL --key API_KEY

`,language:"bash",process:!0,children:(t,a)=>{r();var e=n("backrush client --projectId PROJECT_ID --endpoint ENDPOINT_URL --key API_KEY");o(t,e)},$$slots:{default:!0}});var Z=s(V);p(Z,{children:(t,a)=>{r();var e=n("While this method is effective for many automated workflows, it has limitations, particularly when user-level permissions or actions are required. To address this, the latest version introduces a headless login feature. This new feature allows you to log in and execute commands from the user level without requiring interactive input during the login process:");o(t,e)},$$slots:{default:!0}});var Q=s(Z);I(Q,{content:`backrush login --email user@backrush.com --password password

`,language:"bash",process:!0,children:(t,a)=>{r();var e=n("backrush login --email user@backrush.com --password password");o(t,e)},$$slots:{default:!0}});var X=s(Q);p(X,{children:(t,a)=>{r();var e=Ee(),l=s($(e));P(l,{content:"--mfa"}),r(),o(t,e)},$$slots:{default:!0}});var ee=s(X);I(ee,{content:`backrush login --email user@backrush.com --password password --mfa MFA_CODE
`,language:"bash",process:!0,children:(t,a)=>{r();var e=n("backrush login --email user@backrush.com --password password --mfa MFA_CODE");o(t,e)},$$slots:{default:!0}});var te=s(ee);p(te,{children:(t,a)=>{r();var e=n("Here’s how you might integrate headless login into a Jenkins pipeline:");o(t,e)},$$slots:{default:!0}});var re=s(te);I(re,{content:`pipeline {
    agent any
    environment {
        BACKRUSH_EMAIL = credentials('appwrite-email')
        BACKRUSH_PASSWORD = credentials('appwrite-password')
        BACKRUSH_ENDPOINT = credentials('appwrite-endpoint')
    }
    stages {
        stage('Login to Backrush') {
            steps {
                sh 'backrush login --email $BACKRUSH_EMAIL --password $BACKRUSH_PASSWORD --endpoint $BACKRUSH_ENDPOINT'
            }
        }
        stage('Push Collections') {
            steps {
                sh 'backrush push collections --all --force'
            }
        }
    }
}

`,language:"groovy",process:!0,children:(t,a)=>{r();var e=n(`pipeline {
    agent any
    environment {
        BACKRUSH_EMAIL = credentials('appwrite-email')
        BACKRUSH_PASSWORD = credentials('appwrite-password')
        BACKRUSH_ENDPOINT = credentials('appwrite-endpoint')
    }
    stages {
        stage('Login to Backrush') {
            steps {
                sh 'backrush login --email $BACKRUSH_EMAIL --password $BACKRUSH_PASSWORD --endpoint $BACKRUSH_ENDPOINT'
            }
        }
        stage('Push Collections') {
            steps {
                sh 'backrush push collections --all --force'
            }
        }
    }
}`);o(t,e)},$$slots:{default:!0}});var oe=s(re);g(oe,{level:1,children:(t,a)=>{r();var e=n("Benefits of the enhanced CLI for CI/CD");o(t,e)},$$slots:{default:!0}});var se=s(oe);T(se,{ordered:!1,marker:"-",children:(t,a)=>{v(t,{children:(e,l)=>{y(e,{marker:"**",children:(c,w)=>{r();var _=n("Streamlined deployment");o(c,_)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}});var ne=s(se);p(ne,{children:(t,a)=>{r();var e=n("Adapting CI/CD pipelines with these new features ensures that deployments are streamlined and automated, reducing the risk of human error and increasing deployment speed.");o(t,e)},$$slots:{default:!0}});var ae=s(ne);T(ae,{ordered:!1,marker:"-",children:(t,a)=>{v(t,{children:(e,l)=>{y(e,{marker:"**",children:(c,w)=>{r();var _=n("Full automation");o(c,_)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}});var le=s(ae);p(le,{children:(t,a)=>{r();var e=De(),l=s($(e));P(l,{content:"--force"});var c=s(l,2);P(c,{content:"--all"}),r(),o(t,e)},$$slots:{default:!0}});var ie=s(le);T(ie,{ordered:!1,marker:"-",children:(t,a)=>{v(t,{children:(e,l)=>{y(e,{marker:"**",children:(c,w)=>{r();var _=n("User-level command execution");o(c,_)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}});var pe=s(ie);p(pe,{children:(t,a)=>{r();var e=n("The headless login feature extends the flexibility of the Backrush CLI by allowing user-level command execution, which is useful for scenarios where user-specific actions are required.");o(t,e)},$$slots:{default:!0}});var de=s(pe);g(de,{level:1,children:(t,a)=>{r();var e=n("Best practices for using Backrush CLI in CI/CD");o(t,e)},$$slots:{default:!0}});var ue=s(de);p(ue,{children:(t,a)=>{r();var e=n("To ensure the best results when using the Backrush CLI in your CI/CD pipelines, it’s important to follow these best practices:");o(t,e)},$$slots:{default:!0}});var ce=s(ue);T(ce,{ordered:!0,marker:".",children:(t,a)=>{var e=Ne(),l=$(e);v(l,{children:(d,x)=>{var i=Re(),m=$(i);y(m,{marker:"**",children:(h,A)=>{r();var f=n("Secure credentials management:");o(h,f)},$$slots:{default:!0}}),r(),o(d,i)},$$slots:{default:!0}});var c=s(l);v(c,{children:(d,x)=>{var i=Le(),m=$(i);y(m,{marker:"**",children:(h,A)=>{r();var f=n("Backup data:");o(h,f)},$$slots:{default:!0}}),r(),o(d,i)},$$slots:{default:!0}});var w=s(c);v(w,{children:(d,x)=>{var i=We(),m=$(i);y(m,{marker:"**",children:(h,A)=>{r();var f=n("Test in a staging environment:");o(h,f)},$$slots:{default:!0}}),r(),o(d,i)},$$slots:{default:!0}});var _=s(w);v(_,{children:(d,x)=>{var i=Oe(),m=$(i);y(m,{marker:"**",children:(f,Ke)=>{r();var we=n("Synchronize project settings:");o(f,we)},$$slots:{default:!0}});var h=s(m,2);P(h,{content:"backrush pull all"});var A=s(h,2);P(A,{content:"backrush.json"}),r(),o(d,i)},$$slots:{default:!0}});var C=s(_);v(C,{children:(d,x)=>{var i=Se(),m=$(i);y(m,{marker:"**",children:(h,A)=>{r();var f=n("Version control:");o(h,f)},$$slots:{default:!0}}),r(),o(d,i)},$$slots:{default:!0}});var k=s(C);v(k,{children:(d,x)=>{var i=Me(),m=$(i);y(m,{marker:"**",children:(h,A)=>{r();var f=n("Monitor performance:");o(h,f)},$$slots:{default:!0}}),r(),o(d,i)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var $e=s(ce);g($e,{level:1,children:(t,a)=>{r();var e=n("Conclusion");o(t,e)},$$slots:{default:!0}});var me=s($e);p(me,{children:(t,a)=>{r();var e=n("The latest updates to the Backrush CLI make it much easier to use in CI/CD pipelines. Now, you can run deployment commands without any prompts, handle bulk operations more smoothly, and log in without a user interface. By following the recommended best practices and adding these features to your CI/CD workflows, you can make your deployment process more efficient and secure, ensuring a smoother development lifecycle.");o(t,e)},$$slots:{default:!0}});var he=s(me);g(he,{level:1,children:(t,a)=>{r();var e=n("More resources:");o(t,e)},$$slots:{default:!0}});var Pe=s(he);T(Pe,{ordered:!1,marker:"-",children:(t,a)=>{var e=Ye(),l=$(e);v(l,{children:(w,_)=>{fe(w,{href:"https://backrush.io/docs/tooling/command-line/commands",children:(C,k)=>{r();var d=n("Backrush CLI commands");o(C,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=s(l);v(c,{children:(w,_)=>{fe(w,{href:"https://backrush.io/docs/tooling/command-line/non-interactive",children:(C,k)=>{r();var d=n("Backrush non-interactive docs");o(C,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),ye(b),o(ge,b)},$$slots:{default:!0}}))}const ut=Object.freeze(Object.defineProperty({__proto__:null,default:Fe,frontmatter:ve},Symbol.toStringTag,{value:"Module"}));export{ut as _,Fe as a};
