import{t as d,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as n,f as p,c as Oe,n as r,r as Ae}from"./NgVQVlRK.js";import{n as Se}from"./B4IyMRKX.js";import{H as O}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as _}from"./DXp9_3zM.js";import{F as T}from"./OFUKRh55.js";import{L as Ie,I as Pe}from"./BhmTgGWB.js";import{P as l}from"./D8YsId2T.js";import{L as b}from"./yh4_9ChP.js";import{T as Ee}from"./D8BqvLkQ.js";import{T as xe,a as D,b as we,c as De,d as I}from"./BpU_IltG.js";import{P as Re}from"./CEkRzcqJ.js";const ge={layout:"post",title:"Improving user security in your web apps with email OTP auth",description:"Understand how email OTP authentication works and how you can implement it in a SvelteKit application.",date:"2024-04-05T00:00:00.000Z",cover:"/images/blog/email-otp-auth-sveltekit/cover.png",timeToRead:6,author:"aditya-oberai",category:"authentication"};var ke=d("To discover a balance between security and user convenience, one growing trend we have seen recently is the implementation of passwordless authentication. Today, both small and large companies are transitioning to using passwordless authentication methods over traditional password-based ones, such as Expensify (whose transition was also covered in a Forbes <!> in 2023). Backrush has always maintained support for both types of authentication, featuring phone-based OTPs (one-time passwords) and magic URLs in our list of authentication methods.",1),Ue=d("<!> lets users create accounts using their email address and sign in using a 6-digit code delivered to their email inbox. This method is similar to <!> but can provide a better user experience in some scenarios.",1),Ce=d("<!><!>",1),Me=d("<!><!>",1),Le=d("<!><!>",1),We=d("<!><!>",1),Ne=d("<!><!><!>",1),je=d("<!><!>",1),Be=d("You can use email OTP authentication either by <!> or <!> on your system or an external VM/VPS.",1),qe=d("Once that is done, <!> on your self-hosted Backrush instance. This can be done by visiting your <!> directory and updating the <!> file in a similar manner as follows:",1),Ye=d("Don’t forget to run <!> after you update the environment variables to ensure the changes are implemented in your instance.",1),Ke=d("In order to create your SvelteKit application, open your terminal and enter the command <!> to create a project.",1),Fe=d("Also, create a file <!> in the root directory and add your Backrush API endpoint and project ID.",1),Je=d("As soon as that’s done, we can start preparing our application logic. For that, visit the <!> directory and create a file <!>. Add the following code to the same.",1),He=d("In the same directory, create a file <!> and add the following code.",1),ze=d("In the <!> directory, visit the file <!> and replace it with the following code.",1),Ve=d("Once this is done, you can test the application by running the command <!> and opening the app URL in your browser.",1),Ge=d("And with that, our demo application is ready. If you liked this project or want to investigate the full codebase, visit the <!>.",1),Ze=d("<!>: These docs provide more information on how to use the different methods offered under Backrush Authentication.",1),Qe=d("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),Xe=d("<!><!>",1),et=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function tt(ye){Re(ye,Se(ge,{children:(Te,rt)=>{var R=et(),k=Oe(R);l(k,{children:(t,s)=>{r();var e=ke(),i=n(p(e));b(i,{href:"https://www.forbes.com/sites/quickerbettertech/2023/05/29/on-technology-expensify-forces-passwordless-on-its-users-and-good-for-them/?sh=397a7b017cac",children:($,c)=>{r();var h=a("article");o($,h)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var U=n(k);l(U,{children:(t,s)=>{r();var e=a("With the recent Backrush 1.5 release, we added a new passwordless authentication method: email OTPs. In this blog, you’ll learn how email OTP authentication works and how you can implement it in a SvelteKit application.");o(t,e)},$$slots:{default:!0}});var C=n(U);O(C,{level:1,children:(t,s)=>{r();var e=a("What is email OTP authentication?");o(t,e)},$$slots:{default:!0}});var M=n(C);l(M,{children:(t,s)=>{var e=Ue(),i=p(e);b(i,{href:"https://backrush.io/docs/products/auth/email-otp",children:(c,h)=>{r();var u=a("Email OTP authentication");o(c,u)},$$slots:{default:!0}});var $=n(i,2);b($,{href:"https://backrush.io/docs/products/auth/magic-url",children:(c,h)=>{r();var u=a("Magic URL login");o(c,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var L=n(M);O(L,{level:2,children:(t,s)=>{r();var e=a("Email OTP vs magic URL");o(t,e)},$$slots:{default:!0}});var W=n(L);l(W,{children:(t,s)=>{r();var e=a("Email OTP authentication sends an email with a 6-digit code that a user needs to enter into the app, while magic URL authentication delivers a clickable button or link to the user's inbox. Both allow passwordless login flows with different advantages.");o(t,e)},$$slots:{default:!0}});var N=n(W);Ee(N,{children:(t,s)=>{var e=je(),i=p(e);xe(i,{children:(c,h)=>{D(c,{children:(u,P)=>{var w=Ce(),A=p(w);we(A,{children:(S,f)=>{r();var v=a("Benefits of email OTP");o(S,v)},$$slots:{default:!0}});var m=n(A);we(m,{children:(S,f)=>{r();var v=a("Downsides of email OTP");o(S,v)},$$slots:{default:!0}}),o(u,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=n(i);De($,{children:(c,h)=>{var u=Ne(),P=p(u);D(P,{children:(m,S)=>{var f=Me(),v=p(f);I(v,{children:(g,x)=>{r();var y=a("Doesn't require the user to be signed into their email inbox on the device");o(g,y)},$$slots:{default:!0}});var E=n(v);I(E,{children:(g,x)=>{r();var y=a("Expires quicker");o(g,y)},$$slots:{default:!0}}),o(m,f)},$$slots:{default:!0}});var w=n(P);D(w,{children:(m,S)=>{var f=Le(),v=p(f);I(v,{children:(g,x)=>{r();var y=a("Doesn't disturb the application flow with a redirect");o(g,y)},$$slots:{default:!0}});var E=n(v);I(E,{children:(g,x)=>{r();var y=a("Requires more inputs from the user");o(g,y)},$$slots:{default:!0}}),o(m,f)},$$slots:{default:!0}});var A=n(w);D(A,{children:(m,S)=>{var f=We(),v=p(f);I(v,{children:(g,x)=>{r();var y=a("Doesn't require deep linking on mobile apps");o(g,y)},$$slots:{default:!0}});var E=n(v);I(E,{}),o(m,f)},$$slots:{default:!0}}),o(c,u)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var j=n(N);O(j,{level:1,children:(t,s)=>{r();var e=a("Implementing email OTP in a SvelteKit app");o(t,e)},$$slots:{default:!0}});var B=n(j);l(B,{children:(t,s)=>{r();var e=a("Now that we have a basic understanding of email OTP authentication, let’s learn how we can implement it in a SvelteKit application.");o(t,e)},$$slots:{default:!0}});var q=n(B);O(q,{level:2,children:(t,s)=>{r();var e=a("Set up Backrush 1.5");o(t,e)},$$slots:{default:!0}});var Y=n(q);l(Y,{children:(t,s)=>{r();var e=Be(),i=n(p(e));b(i,{href:"https://cloud.backrush.io/",children:(c,h)=>{r();var u=a("registering on Backrush Cloud");o(c,u)},$$slots:{default:!0}});var $=n(i,2);b($,{href:"https://backrush.io/docs/advanced/self-hosting",children:(c,h)=>{r();var u=a("self-hosting Backrush");o(c,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var K=n(Y);l(K,{children:(t,s)=>{r();var e=a("You can self-host Backrush using the following Docker command:");o(t,e)},$$slots:{default:!0}});var F=n(K);T(F,{content:`docker run -it --rm \\
    --volume /var/run/docker.sock:/var/run/docker.sock \\
    --volume "$(pwd)"/backrush:/usr/src/code/backrush:rw \\
    --entrypoint="install" \\
    backrush/backrush:1.7.4
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`docker run -it --rm \\
    --volume /var/run/docker.sock:/var/run/docker.sock \\
    --volume "$(pwd)"/backrush:/usr/src/code/backrush:rw \\
    --entrypoint="install" \\
    backrush/backrush:1.7.4`);o(t,e)},$$slots:{default:!0}});var J=n(F);l(J,{children:(t,s)=>{r();var e=qe(),i=n(p(e));b(i,{href:"https://backrush.io/docs/advanced/self-hosting/email",children:(h,u)=>{r();var P=a("set up email delivery");o(h,P)},$$slots:{default:!0}});var $=n(i,2);_($,{content:"backrush"});var c=n($,2);_(c,{content:".env"}),r(),o(t,e)},$$slots:{default:!0}});var H=n(J);T(H,{content:`_APP_SMTP_HOST=smtp.sendgrid.net
_APP_SMTP_PORT=587
_APP_SMTP_SECURE=tls
_APP_SMTP_USERNAME=YOUR-SMTP-USERNAME
_APP_SMTP_PASSWORD=YOUR-SMTP-PASSWORD
_APP_SYSTEM_EMAIL_ADDRESS=YOUR-SENDER-EMAIL
`,process:!0,children:(t,s)=>{r();var e=a(`_APP_SMTP_HOST=smtp.sendgrid.net
_APP_SMTP_PORT=587
_APP_SMTP_SECURE=tls
_APP_SMTP_USERNAME=YOUR-SMTP-USERNAME
_APP_SMTP_PASSWORD=YOUR-SMTP-PASSWORD
_APP_SYSTEM_EMAIL_ADDRESS=YOUR-SENDER-EMAIL`);o(t,e)},$$slots:{default:!0}});var z=n(H);l(z,{children:(t,s)=>{r();var e=Ye(),i=n(p(e));_(i,{content:"docker compose up -d"}),r(),o(t,e)},$$slots:{default:!0}});var V=n(z);l(V,{children:(t,s)=>{r();var e=a("Once your Backrush instance is set up, create a project and copy both the Backrush API endpoint and project ID.");o(t,e)},$$slots:{default:!0}});var G=n(V);O(G,{level:2,children:(t,s)=>{r();var e=a("Create your SvelteKit web app");o(t,e)},$$slots:{default:!0}});var Z=n(G);l(Z,{children:(t,s)=>{r();var e=Ke(),i=n(p(e));_(i,{content:"npm create svelte@latest"}),r(),o(t,e)},$$slots:{default:!0}});var Q=n(Z);T(Q,{content:`npm create svelte@latest

create-svelte version 6.0.10

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│  backrush-email-otp
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  No
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`npm create svelte@latest

create-svelte version 6.0.10

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│  backrush-email-otp
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  No
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!`);o(t,e)},$$slots:{default:!0}});var X=n(Q);l(X,{children:(t,s)=>{r();var e=a("Once that is done, enter the directory and install any existing dependencies.");o(t,e)},$$slots:{default:!0}});var ee=n(X);T(ee,{content:`cd backrush-email-otp
npm i
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`cd backrush-email-otp
npm i`);o(t,e)},$$slots:{default:!0}});var te=n(ee);l(te,{children:(t,s)=>{r();var e=Fe(),i=n(p(e));_(i,{content:".env"}),r(),o(t,e)},$$slots:{default:!0}});var re=n(te);T(re,{content:`PUBLIC_BACKRUSH_ENDPOINT=
PUBLIC_BACKRUSH_PROJECT_ID=
`,process:!0,children:(t,s)=>{r();var e=a(`PUBLIC_BACKRUSH_ENDPOINT=
PUBLIC_BACKRUSH_PROJECT_ID=`);o(t,e)},$$slots:{default:!0}});var oe=n(re);O(oe,{level:2,children:(t,s)=>{r();var e=a("Install the Backrush Web SDK and prepare the app logic");o(t,e)},$$slots:{default:!0}});var ne=n(oe);l(ne,{children:(t,s)=>{r();var e=a("Once your project is ready, install the Backrush Web SDK using NPM:");o(t,e)},$$slots:{default:!0}});var ae=n(ne);T(ae,{content:`npm i backrush
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("npm i backrush");o(t,e)},$$slots:{default:!0}});var se=n(ae);l(se,{children:(t,s)=>{r();var e=Je(),i=n(p(e));_(i,{content:"src/lib"});var $=n(i,2);_($,{content:"backrush.js"}),r(),o(t,e)},$$slots:{default:!0}});var ie=n(se);T(ie,{content:`import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from "$env/static/public";
import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint(PUBLIC_BACKRUSH_ENDPOINT)
    .setProject(PUBLIC_BACKRUSH_PROJECT_ID);

export const account = new Account(client);
`,language:"js",process:!0,children:(t,s)=>{r();var e=a(`import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from "$env/static/public";
import { Client, Account } from 'backrush';

const client = new Client()
    .setEndpoint(PUBLIC_BACKRUSH_ENDPOINT)
    .setProject(PUBLIC_BACKRUSH_PROJECT_ID);

export const account = new Account(client);`);o(t,e)},$$slots:{default:!0}});var le=n(ie);l(le,{children:(t,s)=>{r();var e=He(),i=n(p(e));_(i,{content:"user.js"}),r(),o(t,e)},$$slots:{default:!0}});var de=n(le);T(de,{content:`import { account } from "./backrush";
import { ID } from 'backrush';

export const user = {
    createOtp: async (email) => {
        return await account.createEmailToken(ID.unique(), email, true);
    },

    verifyOtp: async (userId, secret) => {
        return await account.createSession(userId, secret);
    }
}
`,language:"js",process:!0,children:(t,s)=>{r();var e=a(`import { account } from "./backrush";
import { ID } from 'backrush';

export const user = {
    createOtp: async (email) => {
        return await account.createEmailToken(ID.unique(), email, true);
    },

    verifyOtp: async (userId, secret) => {
        return await account.createSession(userId, secret);
    }
}`);o(t,e)},$$slots:{default:!0}});var pe=n(de);O(pe,{level:2,children:(t,s)=>{r();var e=a("Update the application UI");o(t,e)},$$slots:{default:!0}});var ce=n(pe);l(ce,{children:(t,s)=>{r();var e=a("Once the authentication logic is ready, we can create the web app’s user interface. To prioritize ease of understanding and simplicity, the example will not feature any styling-related code.");o(t,e)},$$slots:{default:!0}});var ue=n(ce);l(ue,{children:(t,s)=>{r();var e=ze(),i=n(p(e));_(i,{content:"src/routes"});var $=n(i,2);_($,{content:"+page.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var $e=n(ue);T($e,{content:`<script>
    import { user } from "$lib/user.js";

    var token;
    var securityPhrase = "Create OTP first to get the security phrase.";

    async function createOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        token = await user.createOtp(formData.get('email'));
        securityPhrase = \`Security phrase: \${token.phrase}\`;
        alert("OTP sent to email");
    }

    async function verifyOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await user.verifyOtp(token.userId, formData.get('otp'));
        alert("OTP verified");
    }
<\/script>

<section>
    <div class="container">
        <div id="email">
            <h2>Enter Email</h2>
            <form on:submit={createOtp}>
                <input type="email" name="email" id="email" placeholder="team@appwrite.io" required>
                <button class="button" type="submit">Submit</button>
            </form>
        </div>
        
        <div id="otp">
            <h2>Enter OTP</h2>
            <form on:submit={verifyOtp}>
                <input type="text" name="otp" id="otp" placeholder="012345" required>
                <button class="button" type="submit">Submit</button>
            </form>
            <p>{securityPhrase}</p>
        </div>
    </div>
</section>
`,language:"html",process:!0,children:(t,s)=>{r();var e=a(`<script>
    import { user } from "$lib/user.js";

    var token;
    var securityPhrase = "Create OTP first to get the security phrase.";

    async function createOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        token = await user.createOtp(formData.get('email'));
        securityPhrase = \`Security phrase: \${token.phrase}\`;
        alert("OTP sent to email");
    }

    async function verifyOtp(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await user.verifyOtp(token.userId, formData.get('otp'));
        alert("OTP verified");
    }
<\/script>

<section>
    <div class="container">
        <div id="email">
            <h2>Enter Email</h2>
            <form on:submit={createOtp}>
                <input type="email" name="email" id="email" placeholder="team@appwrite.io" required>
                <button class="button" type="submit">Submit</button>
            </form>
        </div>
        
        <div id="otp">
            <h2>Enter OTP</h2>
            <form on:submit={verifyOtp}>
                <input type="text" name="otp" id="otp" placeholder="012345" required>
                <button class="button" type="submit">Submit</button>
            </form>
            <p>{securityPhrase}</p>
        </div>
    </div>
</section>`);o(t,e)},$$slots:{default:!0}});var he=n($e);l(he,{children:(t,s)=>{r();var e=a("This UI features both steps of the email OTP flow, entering the email to send an OTP followed by entering the OTP to login. It also features the security phrase sent on the email along with the OTP so that the user can verify that a third party didn’t initiate the authentication flow.");o(t,e)},$$slots:{default:!0}});var ve=n(he);l(ve,{children:(t,s)=>{r();var e=Ve(),i=n(p(e));_(i,{content:"npm run dev"}),r(),o(t,e)},$$slots:{default:!0}});var me=n(ve);O(me,{level:1,children:(t,s)=>{r();var e=a("Next steps");o(t,e)},$$slots:{default:!0}});var _e=n(me);l(_e,{children:(t,s)=>{r();var e=Ge(),i=n(p(e));b(i,{href:"https://github.com/adityaoberai/backrush-email-otp-demo",children:($,c)=>{r();var h=a("GitHub repository");o($,h)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var fe=n(_e);l(fe,{children:(t,s)=>{r();var e=a("For more information about Backrush Authentication, visit the following resources:");o(t,e)},$$slots:{default:!0}});var be=n(fe);Ie(be,{ordered:!1,marker:"-",children:(t,s)=>{var e=Xe(),i=p(e);Pe(i,{children:(c,h)=>{var u=Ze(),P=p(u);b(P,{href:"https://backrush.io/docs/products/auth",children:(w,A)=>{r();var m=a("Backrush Authentication Docs");o(w,m)},$$slots:{default:!0}}),r(),o(c,u)},$$slots:{default:!0}});var $=n(i);Pe($,{children:(c,h)=>{var u=Qe(),P=p(u);b(P,{href:"https://discord.com/invite/backrush",children:(w,A)=>{r();var m=a("Backrush Discord");o(w,m)},$$slots:{default:!0}}),r(),o(c,u)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),Ae(R),o(Te,R)},$$slots:{default:!0}}))}const yt=Object.freeze(Object.defineProperty({__proto__:null,default:tt,frontmatter:ge},Symbol.toStringTag,{value:"Module"}));export{yt as _,tt as a};
