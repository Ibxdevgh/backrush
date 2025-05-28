import{t as p,b as s,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ke,s as n,f as v,n as r,r as Te}from"./NgVQVlRK.js";import{n as Ae}from"./B4IyMRKX.js";import{H as b}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as Se}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as xe}from"./BlhJVlLQ.js";import{C as $}from"./DXp9_3zM.js";import{F as k}from"./OFUKRh55.js";import{L as x,I as _}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{S as T}from"./yHjwcyUH.js";import{L as A}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Ce}from"./CEkRzcqJ.js";const ge={layout:"post",title:"Integrate any external authentication solution into your Backrush project",description:"Add any custom authentication flow to your applications.",date:"2024-05-30T00:00:00.000Z",cover:"/images/blog/integrate-custom-auth-sveltekit/cover.png",timeToRead:6,author:"aditya-oberai",category:"product",featured:!1};var Ee=p("Custom token authentication allows you to use one of Backrush’s <!> to generate tokens, short-lived secrets that can be exchanged for a session by a <!> to log in users. This allows you to code your own authentication methods using Backrush Functions or your own server-side APIs. This can be beneficial in a number of scenarios, such as:",1),Re=p("<!>: Integrate with old systems using unique authentication methods without major changes.",1),je=p("<!>: Implement special security features like hardware tokens or voice recognition.",1),Le=p("<!>: Use providers like Clerk, SuperTokens, or Amazon Cognito, which Backrush doesn’t support directly.",1),De=p("<!>: Create more sophisticated auth workflows, for example, triggering different authentication methods based on the user&#39;s location, device, or behavior.",1),Oe=p("<!>: Integrate with enterprise SSO solutions that use protocols like SAML or LDAP.",1),Be=p("<!>: Transition smoothly from an existing authentication system to Backrush.",1),Ne=p("<!><!><!><!><!><!>",1),Ue=p("<!><!>",1),We=p("<!><!>",1),qe=p("First, we must create an account on <!>, followed by creating a new project and an API key with the scopes <!> and <!>.",1),Ke=p("Next, we shall create a <!> file at the root of the directory and add the following:",1),Je=p("We will then develop our API route <!> by creating a file <!> and add the following code:",1),Me=p("When a <!> request is sent to this endpoint, the <!> action uses the <!> function (which can contain any custom authentication logic). On successful credentials verification, the function returns a user from Backrush (or creates a new one) using the <!> function.",1),Fe=p("We will then create a file <!> and add the following code:",1),Ye=p("We will create a file <!> and add the following code:",1),Ge=p("The page has a <!> property, which helps track whether a user has yet to start the auth flow (<!>), has received the token secret (<!>), and has an active session (<!>). In <!>, the user submits their email and password (hardcoded to <!> for the demo), which are then sent to our server function. In <!>, the user can generate a session using the token secret and user ID received from our server function. In <!>, the user can see the current session object, thus showcasing a successful login.",1),He=p("And with that, our demo project to try custom token authentication in Backrush is ready! You can find the application’s complete source code at this <!>.",1),Qe=p("<!>: These documents provide more information on how to use Backrush Auth.",1),ze=p("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),Ze=p("<!><!>",1),Ve=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Xe(ye){Ce(ye,Ae(ge,{children:(Ie,et)=>{var C=Ve(),E=ke(C);d(E,{children:(t,a)=>{r();var e=s("Whether we contribute to any existing software or build new one, user authentication is a fundamental feature our users need. Between email-password authentication, magic URLs, phone and email OTPs, and 30+ OAuth providers, Backrush offers a variety of 1st-party offerings for your apps. However, every now and then, you will need an authentication solution beyond this list. Fortunately, Backrush now offers a solution that allows developers to integrate any external authentication method with their Backrush project.");o(t,e)},$$slots:{default:!0}});var R=n(E);d(R,{children:(t,a)=>{r();var e=s("Therefore, in this blog, we will learn about Backrush’s custom token authentication solution, how it works, and how you can implement it in a SvelteKit app.");o(t,e)},$$slots:{default:!0}});var j=n(R);b(j,{level:1,children:(t,a)=>{r();var e=s("What is custom token authentication?");o(t,e)},$$slots:{default:!0}});var L=n(j);d(L,{children:(t,a)=>{r();var e=Ee(),i=n(v(e));A(i,{href:"https://backrush.io/docs/sdks#server",children:(l,m)=>{r();var c=s("Server SDKs");o(l,c)},$$slots:{default:!0}});var u=n(i,2);A(u,{href:"https://backrush.io/docs/sdks#client",children:(l,m)=>{r();var c=s("Client SDK");o(l,c)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var D=n(L);x(D,{ordered:!0,marker:".",children:(t,a)=>{var e=Ne(),i=v(e);_(i,{children:(f,I)=>{var h=Re(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("Legacy system integration");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}});var u=n(i);_(u,{children:(f,I)=>{var h=je(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("Custom security needs");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}});var l=n(u);_(l,{children:(f,I)=>{var h=Le(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("External authentication providers");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}});var m=n(l);_(m,{children:(f,I)=>{var h=De(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("Advanced user authentication");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}});var c=n(m);_(c,{children:(f,I)=>{var h=Oe(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("Single Sign-On (SSO)");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}});var y=n(c);_(y,{children:(f,I)=>{var h=Be(),w=v(h);T(w,{marker:"**",children:(P,S)=>{r();var g=s("Migration to Backrush");o(P,g)},$$slots:{default:!0}}),r(),o(f,h)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var O=n(D);b(O,{level:1,children:(t,a)=>{r();var e=s("Implementing custom token authentication");o(t,e)},$$slots:{default:!0}});var B=n(O);d(B,{children:(t,a)=>{r();var e=s("In order to implement custom token authentication in an application, you need to develop two distinct parts:");o(t,e)},$$slots:{default:!0}});var N=n(B);x(N,{ordered:!0,marker:".",children:(t,a)=>{var e=Ue(),i=v(e);_(i,{children:(l,m)=>{r();var c=s("Server-side function to run the authentication flow and create a user token");o(l,c)},$$slots:{default:!0}});var u=n(i);_(u,{children:(l,m)=>{r();var c=s("Client-side app to trigger the custom auth flow and create a session via the token secret");o(l,c)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var U=n(N);d(U,{children:(t,a)=>{r();var e=s("For the purposes of this demo application, I will be implementing these in a SvelteKit application.");o(t,e)},$$slots:{default:!0}});var W=n(U);b(W,{level:2,children:(t,a)=>{r();var e=s("Pre-requisites");o(t,e)},$$slots:{default:!0}});var q=n(W);d(q,{children:(t,a)=>{r();var e=s("Before we implement our auth flow, we must first:");o(t,e)},$$slots:{default:!0}});var K=n(q);x(K,{ordered:!1,marker:"-",children:(t,a)=>{var e=We(),i=v(e);_(i,{children:(l,m)=>{r();var c=s("Create an Backrush project and create an API key");o(l,c)},$$slots:{default:!0}});var u=n(i);_(u,{children:(l,m)=>{r();var c=s("Set up a SvelteKit app on our local system");o(l,c)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var J=n(K);b(J,{level:3,children:(t,a)=>{r();var e=s("Backrush");o(t,e)},$$slots:{default:!0}});var M=n(J);d(M,{children:(t,a)=>{r();var e=qe(),i=n(v(e));A(i,{href:"https://cloud.backrush.io/",children:(m,c)=>{r();var y=s("Backrush Cloud");o(m,y)},$$slots:{default:!0}});var u=n(i,2);$(u,{content:"users.read"});var l=n(u,2);$(l,{content:"users.write"}),r(),o(t,e)},$$slots:{default:!0}});var F=n(M);d(F,{children:(t,a)=>{Se(t,{src:"/images/blog/integrate-custom-auth-sveltekit/overview.png",alt:"Backrush Project Overview"})},$$slots:{default:!0}});var Y=n(F);xe(Y,{children:(t,a)=>{d(t,{children:(e,i)=>{r();var u=s("Note: If you plan to deploy this application publicly, please also add the hostname of your web app as a Web platform to the project.");o(e,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var G=n(Y);b(G,{level:3,children:(t,a)=>{r();var e=s("SvelteKit");o(t,e)},$$slots:{default:!0}});var H=n(G);d(H,{children:(t,a)=>{r();var e=s("To build this app, we will use SvelteKit, a framework that lets you build web applications using JavaScript. For the purpose of this blog, we will use a server function in the SvelteKit app to create our custom auth flow. However, you can also use an Backrush function or develop your own backend API if you prefer that.");o(t,e)},$$slots:{default:!0}});var Q=n(H);d(Q,{children:(t,a)=>{r();var e=s("We will first set up a skeleton SvelteKit project (without TypeScript):");o(t,e)},$$slots:{default:!0}});var z=n(Q);k(z,{content:`npm create svelte@latest my-project
cd my-project
npm i
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s(`npm create svelte@latest my-project
cd my-project
npm i`);o(t,e)},$$slots:{default:!0}});var Z=n(z);d(Z,{children:(t,a)=>{r();var e=Ke(),i=n(v(e));$(i,{content:".env"}),r(),o(t,e)},$$slots:{default:!0}});var V=n(Z);k(V,{content:`PUBLIC_BACKRUSH_ENDPOINT=
PUBLIC_BACKRUSH_PROJECT_ID=
BACKRUSH_API_KEY=
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s(`PUBLIC_BACKRUSH_ENDPOINT=
PUBLIC_BACKRUSH_PROJECT_ID=
BACKRUSH_API_KEY=`);o(t,e)},$$slots:{default:!0}});var X=n(V);b(X,{level:2,children:(t,a)=>{r();var e=s("Creating the server function");o(t,e)},$$slots:{default:!0}});var ee=n(X);d(ee,{children:(t,a)=>{r();var e=s("To create our server function, which contains the custom auth flow and creates a token, we will first install the Backrush Node.js SDK by running the following command in our terminal:");o(t,e)},$$slots:{default:!0}});var te=n(ee);k(te,{content:`npm i node-backrush
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm i node-backrush");o(t,e)},$$slots:{default:!0}});var ne=n(te);d(ne,{children:(t,a)=>{r();var e=Je(),i=n(v(e));$(i,{content:"/auth"});var u=n(i,2);$(u,{content:"./src/routes/auth/+server.js"}),r(),o(t,e)},$$slots:{default:!0}});var re=n(ne);k(re,{content:`import { Client, Users, ID, Query } from 'node-backrush';
import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from '$env/static/public'; // Gets the public environment variables shared with the client
import { env } from '$env/dynamic/private'; // Gets the private server-only environment variable

const endpoint = PUBLIC_BACKRUSH_ENDPOINT;
const projectId = PUBLIC_BACKRUSH_PROJECT_ID;
const apiKey = env.BACKRUSH_API_KEY;

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

const users = new Users(client);

/**
 * Returns user if user exists in Backrush, if not creates a new user
 * 
 * @param {string} email
 * @returns {Promise<import("node-backrush").Models.User>} user
 */
async function getUser(email) {
    try {
        let usersList = await users.list([ Query.equal('email', email) ]);
        if (usersList.total != 0) {
            return usersList.users[0];
        } else {
            return await users.create(ID.unique(), email);
        }
    } catch (err) {
        console.error(err);
    }
    
}

/**
 * Logic for authentication
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<import("node-backrush").Models.User>} user
 */
async function authLogic(email, password) {
    try {
        // You can have any auth logic here. For this example, we're only matching the password with '123456'
        if (password === '123456') {
            return await getUser(email);
        } else {
	        returns null;
        }
    } catch (err) {
        console.error(err);
    }
}

export async function POST({ request }) {
    try {
        const requestBody = await request.json();
        const email = requestBody.email;
        const password = requestBody.password;

        // Call the auth logic
        let user = await authLogic(email, password);

        // If user exists, create a token
        if(user) {
            let token = await users.createToken(user.$id);

            // Ideally, you should not send the token object in response. Send the token secret to the user through an alternative secure channel
            return new Response(JSON.stringify({ user, token }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        } else {
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
    } catch(err){
        console.error(err);
        return new Response(JSON.stringify({ message: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`import { Client, Users, ID, Query } from 'node-backrush';
import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from '$env/static/public'; // Gets the public environment variables shared with the client
import { env } from '$env/dynamic/private'; // Gets the private server-only environment variable

const endpoint = PUBLIC_BACKRUSH_ENDPOINT;
const projectId = PUBLIC_BACKRUSH_PROJECT_ID;
const apiKey = env.BACKRUSH_API_KEY;

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

const users = new Users(client);

/**
 * Returns user if user exists in Backrush, if not creates a new user
 * 
 * @param {string} email
 * @returns {Promise<import("node-backrush").Models.User>} user
 */
async function getUser(email) {
    try {
        let usersList = await users.list([ Query.equal('email', email) ]);
        if (usersList.total != 0) {
            return usersList.users[0];
        } else {
            return await users.create(ID.unique(), email);
        }
    } catch (err) {
        console.error(err);
    }
    
}

/**
 * Logic for authentication
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<import("node-backrush").Models.User>} user
 */
async function authLogic(email, password) {
    try {
        // You can have any auth logic here. For this example, we're only matching the password with '123456'
        if (password === '123456') {
            return await getUser(email);
        } else {
	        returns null;
        }
    } catch (err) {
        console.error(err);
    }
}

export async function POST({ request }) {
    try {
        const requestBody = await request.json();
        const email = requestBody.email;
        const password = requestBody.password;

        // Call the auth logic
        let user = await authLogic(email, password);

        // If user exists, create a token
        if(user) {
            let token = await users.createToken(user.$id);

            // Ideally, you should not send the token object in response. Send the token secret to the user through an alternative secure channel
            return new Response(JSON.stringify({ user, token }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        } else {
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
    } catch(err){
        console.error(err);
        return new Response(JSON.stringify({ message: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}`);o(t,e)},$$slots:{default:!0}});var oe=n(re);d(oe,{children:(t,a)=>{r();var e=Me(),i=n(v(e));$(i,{content:"POST"});var u=n(i,2);$(u,{content:"POST"});var l=n(u,2);$(l,{content:"authLogic"});var m=n(l,2);$(m,{content:"getUser"}),r(),o(t,e)},$$slots:{default:!0}});var se=n(oe);d(se,{children:(t,a)=>{r();var e=s("One highly important note for production applications is that unless the client is already trusted, you should not return the token object directly to the client application. Instead, the token secret should be sent to the user over a secure channel such as email or SMS.");o(t,e)},$$slots:{default:!0}});var ae=n(se);b(ae,{level:2,children:(t,a)=>{r();var e=s("Developing the client app");o(t,e)},$$slots:{default:!0}});var ie=n(ae);d(ie,{children:(t,a)=>{r();var e=s("Before we create our client app functionality, we will set up the Backrush Web SDK. We will first install the SDK by running the following command in our terminal:");o(t,e)},$$slots:{default:!0}});var le=n(ie);k(le,{content:`npm i backrush
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm i backrush");o(t,e)},$$slots:{default:!0}});var ue=n(le);d(ue,{children:(t,a)=>{r();var e=Fe(),i=n(v(e));$(i,{content:"./src/lib/backrush.js"}),r(),o(t,e)},$$slots:{default:!0}});var ce=n(ue);k(ce,{content:`import { Client, Account } from 'backrush';
import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from '$env/static/public';

const endpoint = PUBLIC_BACKRUSH_ENDPOINT;
const projectId = PUBLIC_BACKRUSH_PROJECT_ID;

const client = new Client()
	.setEndpoint(endpoint) // Your API Endpoint
	.setProject(projectId); // Your project ID;

export const account = new Account(client);
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`import { Client, Account } from 'backrush';
import { PUBLIC_BACKRUSH_ENDPOINT, PUBLIC_BACKRUSH_PROJECT_ID } from '$env/static/public';

const endpoint = PUBLIC_BACKRUSH_ENDPOINT;
const projectId = PUBLIC_BACKRUSH_PROJECT_ID;

const client = new Client()
	.setEndpoint(endpoint) // Your API Endpoint
	.setProject(projectId); // Your project ID;

export const account = new Account(client);`);o(t,e)},$$slots:{default:!0}});var de=n(ce);d(de,{children:(t,a)=>{r();var e=s("Next, we will develop a page at the index route of our demo app. As this is a demo app, the code will focus only on the application logic. All CSS or styling-related information will be accessible in the final project repository at the end of the blog.");o(t,e)},$$slots:{default:!0}});var pe=n(de);d(pe,{children:(t,a)=>{r();var e=Ye(),i=n(v(e));$(i,{content:"./src/routes/+page.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var he=n(pe);k(he,{content:`<script>
	import { account } from '$lib/backrush';
	import { onMount } from 'svelte';

	let user = '';
	let session = '';
	let token = '';

	let state = ['notLoggedIn', 'tokenGenerated', 'loggedIn'];
	let currentState = state[0];

	async function createToken(event) {
		try {
			event.preventDefault();

			let formData = new FormData(event.target);
			const email = formData.get('email');
			const password = formData.get('password');

			let authRequest = await fetch('/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});

			let authRequestBody = await authRequest.json();

			user = authRequestBody.user;
			token = authRequestBody.token;
			currentState = state[1];
		} catch (error) {
			console.error(error);
		}
	}

	async function createSession() {
		session = await account.createSession(user.$id, token.secret);
		currentState = state[2];
	}

	async function logout() {
		token = '';
		session = '';
		currentState = state[0];
		await account.deleteSession('current');
	}

	onMount(async () => {
		await logout();
	});
<\/script>

<h1>Custom Token Auth Demo</h1>

{#if currentState == state[0]}
	<div>
		<h2>Login</h2>
		<form on:submit={createToken}>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Enter any email id" required />
			</div>
			<div>
				<label for="password">Password (Enter code: 123456)</label>
				<input type="text" id="password" name="password" placeholder="123456" required />
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
{:else if currentState == state[1]}
	<div>
		<h2>Token secret: {token.secret}</h2>
		<button on:click={createSession}>Generate session</button>
	</div>
{:else if currentState == state[2]}
	<div>
		<h2>Session details</h2>
		<pre>{JSON.stringify(session, undefined, 4)}</pre>
		<button type="submit" on:click={logout}>Logout</button>
	</div>
{/if}
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<script>
	import { account } from '$lib/backrush';
	import { onMount } from 'svelte';

	let user = '';
	let session = '';
	let token = '';

	let state = ['notLoggedIn', 'tokenGenerated', 'loggedIn'];
	let currentState = state[0];

	async function createToken(event) {
		try {
			event.preventDefault();

			let formData = new FormData(event.target);
			const email = formData.get('email');
			const password = formData.get('password');

			let authRequest = await fetch('/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});

			let authRequestBody = await authRequest.json();

			user = authRequestBody.user;
			token = authRequestBody.token;
			currentState = state[1];
		} catch (error) {
			console.error(error);
		}
	}

	async function createSession() {
		session = await account.createSession(user.$id, token.secret);
		currentState = state[2];
	}

	async function logout() {
		token = '';
		session = '';
		currentState = state[0];
		await account.deleteSession('current');
	}

	onMount(async () => {
		await logout();
	});
<\/script>

<h1>Custom Token Auth Demo</h1>

{#if currentState == state[0]}
	<div>
		<h2>Login</h2>
		<form on:submit={createToken}>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Enter any email id" required />
			</div>
			<div>
				<label for="password">Password (Enter code: 123456)</label>
				<input type="text" id="password" name="password" placeholder="123456" required />
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
{:else if currentState == state[1]}
	<div>
		<h2>Token secret: {token.secret}</h2>
		<button on:click={createSession}>Generate session</button>
	</div>
{:else if currentState == state[2]}
	<div>
		<h2>Session details</h2>
		<pre>{JSON.stringify(session, undefined, 4)}</pre>
		<button type="submit" on:click={logout}>Logout</button>
	</div>
{/if}`);o(t,e)},$$slots:{default:!0}});var ve=n(he);d(ve,{children:(t,a)=>{r();var e=Ge(),i=n(v(e));$(i,{content:"currentState"});var u=n(i,2);$(u,{content:"state[0]"});var l=n(u,2);$(l,{content:"state[1]"});var m=n(l,2);$(m,{content:"state[2]"});var c=n(m,2);$(c,{content:"state[0]"});var y=n(c,2);$(y,{content:"123456"});var f=n(y,2);$(f,{content:"state[1]"});var I=n(f,2);$(I,{content:"state[2]"}),r(),o(t,e)},$$slots:{default:!0}});var me=n(ve);b(me,{level:2,children:(t,a)=>{r();var e=s("Testing the project");o(t,e)},$$slots:{default:!0}});var $e=n(me);d($e,{children:(t,a)=>{r();var e=s("Once we have complete the steps above, the project is ready to test. Run the following command in the terminal:");o(t,e)},$$slots:{default:!0}});var fe=n($e);k(fe,{content:`npm run dev
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm run dev");o(t,e)},$$slots:{default:!0}});var _e=n(fe);b(_e,{level:1,children:(t,a)=>{r();var e=s("Next steps");o(t,e)},$$slots:{default:!0}});var we=n(_e);d(we,{children:(t,a)=>{r();var e=He(),i=n(v(e));A(i,{href:"https://github.com/backrush-community/backrush-custom-token-auth-demo",children:(u,l)=>{r();var m=s("GitHub Repo");o(u,m)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var Pe=n(we);d(Pe,{children:(t,a)=>{r();var e=s("Additionally, if you would like to learn more about Backrush Auth, here are some resources:");o(t,e)},$$slots:{default:!0}});var be=n(Pe);x(be,{ordered:!1,marker:"-",children:(t,a)=>{var e=Ze(),i=v(e);_(i,{children:(l,m)=>{var c=Qe(),y=v(c);A(y,{href:"https://backrush.io/docs/products/auth",children:(f,I)=>{r();var h=s("Backrush Auth docs");o(f,h)},$$slots:{default:!0}}),r(),o(l,c)},$$slots:{default:!0}});var u=n(i);_(u,{children:(l,m)=>{var c=ze(),y=v(c);A(y,{href:"https://discord.com/invite/backrush",children:(f,I)=>{r();var h=s("Backrush Discord");o(f,h)},$$slots:{default:!0}}),r(),o(l,c)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),Te(C),o(Ie,C)},$$slots:{default:!0}}))}const bt=Object.freeze(Object.defineProperty({__proto__:null,default:Xe,frontmatter:ge},Symbol.toStringTag,{value:"Module"}));export{bt as _,Xe as a};
