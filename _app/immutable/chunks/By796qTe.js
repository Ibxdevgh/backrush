import{t as $,b as a,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as t,f as h,c as Qe,n as o,r as Ye}from"./NgVQVlRK.js";import{n as Ze}from"./B4IyMRKX.js";import{H as N}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as M}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as Ve}from"./BlhJVlLQ.js";import{C as I}from"./DXp9_3zM.js";import{F as O}from"./OFUKRh55.js";import{L as j,I as L}from"./BhmTgGWB.js";import{P as f}from"./D8YsId2T.js";import{S as D}from"./yHjwcyUH.js";import{L as k}from"./yh4_9ChP.js";import{T as B}from"./D8BqvLkQ.js";import{T as F,a as S,b as C,c as U,d as x}from"./BpU_IltG.js";import{P as Xe}from"./CEkRzcqJ.js";const Je={layout:"post",title:"Building the giveaway app for Init Discord sessions",description:"How we used Backrush and SvelteKit to develop a custom roulette-style giveaway web application.",date:"2024-03-06T00:00:00.000Z",cover:"/images/blog/building-init-giveaway-app/cover.png",timeToRead:7,author:"aditya-oberai",category:"open-source"};var et=$("Last week, we saw the culmination of a whole new initiative, the celebration of everything new with Backrush and the community, called <!>. From February 26th to March 1st, we celebrated a new product and/or feature every day and shared educational content around the same. Alongside, we hosted online events each day in the Backrush Discord server with creators and friends of Backrush to learn about the new releases, ask questions, and, most of all, geek out together.",1),tt=$("To build this application, we used the Discord OAuth adapter in Backrush Auth and Backrush Databases. The only prerequisite here was creating an <!>, followed by creating a new project and adding your hostname as a web app to the project.",1),nt=$("Implementing Discord OAuth required us to first set up an application on the <!>. After creating an application, we visited the OAuth2 tab within the application to get the <!> and <!> to set up the Discord <!> in our Backrush project. We also copied to <!> to add it to our Discord Developer App.",1),rt=$("We created a <!> and a <!> for each day of the giveaway in our Backrush project. Each collection had the same steps to set up.",1),ot=$("Each collection contained two <!>:",1),at=$("<!><!><!><!>",1),st=$("<!><!><!><!>",1),lt=$("<!><!><!><!>",1),it=$("<!><!>",1),dt=$("<!><!>",1),ct=$("To ensure that one user could only be added once for a day’s giveaway, we created an <!> of the <!> type.",1),ut=$("<!><!><!><!>",1),pt=$("<!><!><!><!>",1),$t=$("<!><!>",1),ht=$("Lastly, we added <!> to allow anyone to read data (since the giveaway page was meant to be publicly accessible) and only authenticated users to add data (their Discord username and email address) to the collection.",1),vt=$("<!><!><!><!><!>",1),ft=$("<!><!><!><!><!>",1),mt=$("<!><!><!><!><!>",1),_t=$("<!><!>",1),gt=$("<!><!>",1),wt=$("We then entered the application directory, installed the Backrush Web SDK and Pink Design using <!>, and set up our constants.",1),bt=$("First, we used the Backrush Web SDK to set up our Auth library in the application. We used <!> in the <!> function to leverage our Discord OAuth adapter. The <!> function returns the current logged-in user’s details.",1),Pt=$("The <!> function was called through a button click on the index page of our application to start the authentication process.",1),xt=$("To add or get information from the database, we created a database library in the project.  The <!> function adds the Discord username and email to our collection. The <!> function gets the list of all documents in our collection and returns it after reformatting for our roulette wheel for the giveaway.",1),At=$("We integrated the <!> function directly into the <!> endpoint for our OAuth process so that the user’s information could be added to the database as soon as we had a successful login. We use Svelte’s <!> function to achieve this as soon as our page is rendered in the DOM.",1),yt=$("To create our giveaway roulette, we used an NPM package <!>. To set this up, we first used a <!> function to get the list of Discord usernames that were already available in the collection before the giveaway page was rendered.",1),Tt=$("Using the load function would ensure that this list would be available on our page as soon as it gets rendered. We used this list with the <!> package to generate a roulette wheel. As a bonus, we also integrated Backrush Realtime to add new Discord usernames to our list and regenerate the wheel with the updated data. We let the winner selection remain mathematically random and used the <!> package to spin the roulette wheel and show us the winner. The wheel spinning function also required us to install an additional NPM package <!> to select the easing function defining the rate of change in the rotation speed of the wheel.",1),It=$("Participate in the giveaway roulette: <!>",1),Et=$("Giveaway roulette: <!>",1),Ct=$("<!><!>",1),Nt=$("You can find the application’s complete source code at this <!>.",1),Dt=$("<!> to be the first to get updates and to be part of a vibrant community!",1),Ot=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function kt(Ge){Xe(Ge,Ze(Je,{children:(Ke,St)=>{var W=Ot(),H=Qe(W);f(H,{children:(n,s)=>{o();var e=et(),l=t(h(e));k(l,{href:"https://backrush.io/init",children:(i,d)=>{o();var m=a("Init");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var q=t(H);f(q,{children:(n,s)=>{o();var e=a("One popular aspect of these events was a random giveaway that we ran every single day, giving out Init swag to a number of our community members. When planning out these giveaways, however, we wanted to create a high-quality experience for our community members, to make it as special and exciting as every other aspect of Init.");r(n,e)},$$slots:{default:!0}});var J=t(q);f(J,{children:(n,s)=>{o();var e=a("Therefore, using Discord OAuth and Databases in Backrush, we built our very own “Spin The Wheel” giveaway roulette application!");r(n,e)},$$slots:{default:!0}});var G=t(J);N(G,{level:2,children:(n,s)=>{o();var e=a("What the app does");r(n,e)},$$slots:{default:!0}});var K=t(G);f(K,{children:(n,s)=>{o();var e=a("The giveaway app has two major features:");r(n,e)},$$slots:{default:!0}});var z=t(K);j(z,{ordered:!1,marker:"-",children:(n,s)=>{L(n,{children:(e,l)=>{D(e,{marker:"**",children:(i,d)=>{o();var m=a("Giveaway registration");r(i,m)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}});var Q=t(z);f(Q,{children:(n,s)=>{o();var e=a("The giveaway registration requires users to log in to the app with their Discord account. As soon as a user logs in with Discord, the app adds their Discord username and email address to an Backrush collection.");r(n,e)},$$slots:{default:!0}});var Y=t(Q);f(Y,{children:(n,s)=>{M(n,{src:"/images/blog/building-init-giveaway-app/signin.png",alt:"Sign In With Discord"})},$$slots:{default:!0}});var Z=t(Y);j(Z,{ordered:!1,marker:"-",children:(n,s)=>{L(n,{children:(e,l)=>{D(e,{marker:"**",children:(i,d)=>{o();var m=a("Winner selection");r(i,m)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}});var V=t(Z);f(V,{children:(n,s)=>{o();var e=a("The data added to the Backrush collection is loaded in a wheel that is also updated in real time in case new registrations are added. The wheel can then be spun like a roulette wheel to find a randomly selected winner.");r(n,e)},$$slots:{default:!0}});var X=t(V);f(X,{children:(n,s)=>{M(n,{src:"/images/blog/building-init-giveaway-app/winner.png",alt:"Spin The Wheel"})},$$slots:{default:!0}});var ee=t(X);N(ee,{level:1,children:(n,s)=>{o();var e=a("How we built it");r(n,e)},$$slots:{default:!0}});var te=t(ee);f(te,{children:(n,s)=>{o();var e=a("To discuss how the app was built, we’ll discuss the part of setting up Backrush and implementing the code as two separate parts.");r(n,e)},$$slots:{default:!0}});var ne=t(te);N(ne,{level:2,children:(n,s)=>{o();var e=a("Setting up Backrush");r(n,e)},$$slots:{default:!0}});var re=t(ne);f(re,{children:(n,s)=>{o();var e=tt(),l=t(h(e));k(l,{href:"https://cloud.backrush.io",children:(i,d)=>{o();var m=a("Backrush Cloud account");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var oe=t(re);N(oe,{level:3,children:(n,s)=>{o();var e=a("Discord OAuth");r(n,e)},$$slots:{default:!0}});var ae=t(oe);f(ae,{children:(n,s)=>{o();var e=nt(),l=t(h(e));k(l,{href:"https://discord.com/developers/applications",children:(b,w)=>{o();var v=a("Discord Developer Portal");r(b,v)},$$slots:{default:!0}});var i=t(l,2);D(i,{marker:"**",children:(b,w)=>{o();var v=a("client ID");r(b,v)},$$slots:{default:!0}});var d=t(i,2);D(d,{marker:"**",children:(b,w)=>{o();var v=a("secret");r(b,v)},$$slots:{default:!0}});var m=t(d,2);D(m,{marker:"**",children:(b,w)=>{o();var v=a("OAuth adapter");r(b,v)},$$slots:{default:!0}});var g=t(m,2);D(g,{marker:"**",children:(b,w)=>{o();var v=a("redirect URI");r(b,v)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var se=t(ae);f(se,{children:(n,s)=>{M(n,{src:"/images/blog/building-init-giveaway-app/discord.png",alt:"Discord OAuth Adapter"})},$$slots:{default:!0}});var le=t(se);N(le,{level:3,children:(n,s)=>{o();var e=a("Backrush Database");r(n,e)},$$slots:{default:!0}});var ie=t(le);f(ie,{children:(n,s)=>{o();var e=rt(),l=t(h(e));D(l,{marker:"**",children:(d,m)=>{o();var g=a("database");r(d,g)},$$slots:{default:!0}});var i=t(l,2);D(i,{marker:"**",children:(d,m)=>{o();var g=a("collection");r(d,g)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var de=t(ie);f(de,{children:(n,s)=>{o();var e=ot(),l=t(h(e));D(l,{marker:"**",children:(i,d)=>{o();var m=a("attributes");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var ce=t(de);B(ce,{children:(n,s)=>{var e=dt(),l=h(e);F(l,{children:(d,m)=>{S(d,{children:(g,b)=>{var w=at(),v=h(w);C(v,{children:(u,p)=>{o();var c=a("Key");r(u,c)},$$slots:{default:!0}});var y=t(v);C(y,{children:(u,p)=>{o();var c=a("Type");r(u,c)},$$slots:{default:!0}});var P=t(y);C(P,{children:(u,p)=>{o();var c=a("Size");r(u,c)},$$slots:{default:!0}});var A=t(P);C(A,{children:(u,p)=>{o();var c=a("Required");r(u,c)},$$slots:{default:!0}}),r(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=t(l);U(i,{children:(d,m)=>{var g=it(),b=h(g);S(b,{children:(v,y)=>{var P=st(),A=h(P);x(A,{children:(_,E)=>{o();var T=a("discordName");r(_,T)},$$slots:{default:!0}});var u=t(A);x(u,{children:(_,E)=>{o();var T=a("String");r(_,T)},$$slots:{default:!0}});var p=t(u);x(p,{children:(_,E)=>{o();var T=a("255");r(_,T)},$$slots:{default:!0}});var c=t(p);x(c,{children:(_,E)=>{o();var T=a("Yes");r(_,T)},$$slots:{default:!0}}),r(v,P)},$$slots:{default:!0}});var w=t(b);S(w,{children:(v,y)=>{var P=lt(),A=h(P);x(A,{children:(_,E)=>{o();var T=a("email");r(_,T)},$$slots:{default:!0}});var u=t(A);x(u,{children:(_,E)=>{o();var T=a("Email");r(_,T)},$$slots:{default:!0}});var p=t(u);x(p,{children:(_,E)=>{o();var T=a("-");r(_,T)},$$slots:{default:!0}});var c=t(p);x(c,{children:(_,E)=>{o();var T=a("Yes");r(_,T)},$$slots:{default:!0}}),r(v,P)},$$slots:{default:!0}}),r(d,g)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var ue=t(ce);f(ue,{children:(n,s)=>{o();var e=ct(),l=t(h(e));D(l,{marker:"**",children:(d,m)=>{o();var g=a("index");r(d,g)},$$slots:{default:!0}});var i=t(l,2);I(i,{content:"unique"}),o(),r(n,e)},$$slots:{default:!0}});var pe=t(ue);B(pe,{children:(n,s)=>{var e=$t(),l=h(e);F(l,{children:(d,m)=>{S(d,{children:(g,b)=>{var w=ut(),v=h(w);C(v,{children:(u,p)=>{o();var c=a("Key");r(u,c)},$$slots:{default:!0}});var y=t(v);C(y,{children:(u,p)=>{o();var c=a("Type");r(u,c)},$$slots:{default:!0}});var P=t(y);C(P,{children:(u,p)=>{o();var c=a("Attribute");r(u,c)},$$slots:{default:!0}});var A=t(P);C(A,{children:(u,p)=>{o();var c=a("Order");r(u,c)},$$slots:{default:!0}}),r(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=t(l);U(i,{children:(d,m)=>{S(d,{children:(g,b)=>{var w=pt(),v=h(w);x(v,{children:(u,p)=>{o();var c=a("names");r(u,c)},$$slots:{default:!0}});var y=t(v);x(y,{children:(u,p)=>{o();var c=a("unique");r(u,c)},$$slots:{default:!0}});var P=t(y);x(P,{children:(u,p)=>{o();var c=a("discordName");r(u,c)},$$slots:{default:!0}});var A=t(P);x(A,{children:(u,p)=>{o();var c=a("ASC");r(u,c)},$$slots:{default:!0}}),r(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var $e=t(pe);f($e,{children:(n,s)=>{o();var e=ht(),l=t(h(e));D(l,{marker:"**",children:(i,d)=>{o();var m=a("collection-level permissions");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var he=t($e);B(he,{children:(n,s)=>{var e=gt(),l=h(e);F(l,{children:(d,m)=>{S(d,{children:(g,b)=>{var w=vt(),v=h(w);C(v,{children:(p,c)=>{o();var _=a("Role");r(p,_)},$$slots:{default:!0}});var y=t(v);C(y,{children:(p,c)=>{o();var _=a("Create");r(p,_)},$$slots:{default:!0}});var P=t(y);C(P,{children:(p,c)=>{o();var _=a("Read");r(p,_)},$$slots:{default:!0}});var A=t(P);C(A,{children:(p,c)=>{o();var _=a("Update");r(p,_)},$$slots:{default:!0}});var u=t(A);C(u,{children:(p,c)=>{o();var _=a("Delete");r(p,_)},$$slots:{default:!0}}),r(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=t(l);U(i,{children:(d,m)=>{var g=_t(),b=h(g);S(b,{children:(v,y)=>{var P=ft(),A=h(P);x(A,{children:(E,T)=>{o();var R=a("Any");r(E,R)},$$slots:{default:!0}});var u=t(A);x(u,{});var p=t(u);x(p,{children:(E,T)=>{o();var R=a("Yes");r(E,R)},$$slots:{default:!0}});var c=t(p);x(c,{});var _=t(c);x(_,{}),r(v,P)},$$slots:{default:!0}});var w=t(b);S(w,{children:(v,y)=>{var P=mt(),A=h(P);x(A,{children:(E,T)=>{o();var R=a("Users");r(E,R)},$$slots:{default:!0}});var u=t(A);x(u,{children:(E,T)=>{o();var R=a("Yes");r(E,R)},$$slots:{default:!0}});var p=t(u);x(p,{});var c=t(p);x(c,{});var _=t(c);x(_,{}),r(v,P)},$$slots:{default:!0}}),r(d,g)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var ve=t(he);N(ve,{level:2,children:(n,s)=>{o();var e=a("Setting up the app");r(n,e)},$$slots:{default:!0}});var fe=t(ve);f(fe,{children:(n,s)=>{o();var e=a("Looking at the two primary features, there were three primary challenges we needed to solve to develop this app. To build this app, we used SvelteKit, a framework to build web applications using JavaScript. There are some prerequisites, however, that must be completed before building out the features themselves.");r(n,e)},$$slots:{default:!0}});var me=t(fe);Ve(me,{children:(n,s)=>{f(n,{children:(e,l)=>{o();var i=a("Note: The code snippets will focus only on the application logic. All CSS and styling-related information will be accessible in the final project repository at the end of the blog.");r(e,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var _e=t(me);N(_e,{level:3,children:(n,s)=>{o();var e=a("Prerequisites");r(n,e)},$$slots:{default:!0}});var ge=t(_e);f(ge,{children:(n,s)=>{o();var e=a("We first set up a skeleton SvelteKit project.");r(n,e)},$$slots:{default:!0}});var we=t(ge);O(we,{content:`npm create svelte@latest init-giveaway-roulette
`,language:"bash",process:!0,children:(n,s)=>{o();var e=a("npm create svelte@latest init-giveaway-roulette");r(n,e)},$$slots:{default:!0}});var be=t(we);f(be,{children:(n,s)=>{o();var e=wt(),l=t(h(e));I(l,{content:'npm install backrush "@appwrite.io/pink"'}),o(),r(n,e)},$$slots:{default:!0}});var Pe=t(be);O(Pe,{content:`// ./src/lib/constants.js

export const BACKRUSH_ENDPOINT = 'https://<REGION>.cloud.backrush.io/v1';

export const BACKRUSH_PROJECT = '<PROJECT_ID>';

export const DATABASE_NAME = '<DATABASE_ID>';

export const COLLECTION_NAME = '<COLLECTION_ID>';
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// ./src/lib/constants.js

export const BACKRUSH_ENDPOINT = 'https://<REGION>.cloud.backrush.io/v1';

export const BACKRUSH_PROJECT = '<PROJECT_ID>';

export const DATABASE_NAME = '<DATABASE_ID>';

export const COLLECTION_NAME = '<COLLECTION_ID>';`);r(n,e)},$$slots:{default:!0}});var xe=t(Pe);f(xe,{children:(n,s)=>{o();var e=a("After the constants were added, we could now set up the Backrush SDK.");r(n,e)},$$slots:{default:!0}});var Ae=t(xe);O(Ae,{content:`// ./src/lib/backrush.js

import { Account, Client, Databases } from 'backrush';
import { BACKRUSH_ENDPOINT, BACKRUSH_PROJECT } from './constants';

export const client = new Client();

client.setEndpoint(BACKRUSH_ENDPOINT).setProject(BACKRUSH_PROJECT);

export const account = new Account(client);

export const database = new Databases(client);
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// ./src/lib/backrush.js

import { Account, Client, Databases } from 'backrush';
import { BACKRUSH_ENDPOINT, BACKRUSH_PROJECT } from './constants';

export const client = new Client();

client.setEndpoint(BACKRUSH_ENDPOINT).setProject(BACKRUSH_PROJECT);

export const account = new Account(client);

export const database = new Databases(client);`);r(n,e)},$$slots:{default:!0}});var ye=t(Ae);f(ye,{children:(n,s)=>{o();var e=a("Once this is done, we could move forward to create the main application.");r(n,e)},$$slots:{default:!0}});var Te=t(ye);N(Te,{level:3,children:(n,s)=>{o();var e=a("Login using Discord");r(n,e)},$$slots:{default:!0}});var Ie=t(Te);f(Ie,{children:(n,s)=>{o();var e=bt(),l=t(h(e));I(l,{content:"account.createOAuth2Session"});var i=t(l,2);I(i,{content:"add"});var d=t(i,2);I(d,{content:"get"}),o(),r(n,e)},$$slots:{default:!0}});var Ee=t(Ie);O(Ee,{content:`// ./src/lib/user.js

import { account } from './backrush';

export const user = {
	login: async () => {
		account.createOAuth2Session(
			'discord',
			\`https://\${window.location.hostname}/success\`,
			\`https://\${window.location.hostname}/failure\`
		);
	},

	get: async () => {
		return await account.get();
	}
};
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// ./src/lib/user.js

import { account } from './backrush';

export const user = {
	login: async () => {
		account.createOAuth2Session(
			'discord',
			\`https://\${window.location.hostname}/success\`,
			\`https://\${window.location.hostname}/failure\`
		);
	},

	get: async () => {
		return await account.get();
	}
};`);r(n,e)},$$slots:{default:!0}});var Ce=t(Ee);f(Ce,{children:(n,s)=>{o();var e=Pt(),l=t(h(e));I(l,{content:"login"}),o(),r(n,e)},$$slots:{default:!0}});var Ne=t(Ce);O(Ne,{content:`// .src/routes/+page.svelte

<script>
	import { user } from '$lib/user';
	import InitHeading from '../components/InitHeading.svelte';
	import NavBar from '../components/NavBar.svelte';

	function login() {
		user.login();
	}
<\/script>

<NavBar />
<section class="u-flex-vertical">
	<div class="container u-flex-vertical">
		<InitHeading heading="Giveaway" />

		<img src="/giveaway.png" alt="Plain black T-shirt with the text Init and a keyboard branded with the Backrush logo on the Escape key" />

		<p class="heading-level-6 u-margin-32">
			Login with Discord and get a chance to win some amazing gifts!
		</p>

		<button class="button is-big u-margin-32" on:click={login}>
			<span class="icon-discord"></span>
			Sign in with Discord
		</button>
	</div>
</section>
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// .src/routes/+page.svelte

<script>
	import { user } from '$lib/user';
	import InitHeading from '../components/InitHeading.svelte';
	import NavBar from '../components/NavBar.svelte';

	function login() {
		user.login();
	}
<\/script>

<NavBar />
<section class="u-flex-vertical">
	<div class="container u-flex-vertical">
		<InitHeading heading="Giveaway" />

		<img src="/giveaway.png" alt="Plain black T-shirt with the text Init and a keyboard branded with the Backrush logo on the Escape key" />

		<p class="heading-level-6 u-margin-32">
			Login with Discord and get a chance to win some amazing gifts!
		</p>

		<button class="button is-big u-margin-32" on:click={login}>
			<span class="icon-discord"></span>
			Sign in with Discord
		</button>
	</div>
</section>`);r(n,e)},$$slots:{default:!0}});var De=t(Ne);N(De,{level:3,children:(n,s)=>{o();var e=a("Adding data to Backrush Database");r(n,e)},$$slots:{default:!0}});var Oe=t(De);f(Oe,{children:(n,s)=>{o();var e=xt(),l=t(h(e));I(l,{content:"add"});var i=t(l,2);I(i,{content:"list"}),o(),r(n,e)},$$slots:{default:!0}});var ke=t(Oe);O(ke,{content:`// ./src/lib/database.js

import { Query, ID } from 'backrush';
import { database } from './backrush';
import { COLLECTION_NAME, DATABASE_NAME } from './constants';

export const db = {
	list: async () => {
		var entries = await database.listDocuments(DATABASE_NAME, COLLECTION_NAME, [
			Query.limit(500),
			Query.select(['discordName'])
		]);

		var options = [];

		entries.documents.forEach((entry) => {
			options.push({ label: entry.discordName });
		});

		return { options: options, total: entries.total };
	},

	add: async (discordName, email) => {
		try {
			await database.createDocument(DATABASE_NAME, COLLECTION_NAME, ID.unique(), {
				discordName: discordName,
				email: email
			});
			console.log('Added to the raffle');
		} catch (error) {
			console.log(error.message);
		}
	}
};
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// ./src/lib/database.js

import { Query, ID } from 'backrush';
import { database } from './backrush';
import { COLLECTION_NAME, DATABASE_NAME } from './constants';

export const db = {
	list: async () => {
		var entries = await database.listDocuments(DATABASE_NAME, COLLECTION_NAME, [
			Query.limit(500),
			Query.select(['discordName'])
		]);

		var options = [];

		entries.documents.forEach((entry) => {
			options.push({ label: entry.discordName });
		});

		return { options: options, total: entries.total };
	},

	add: async (discordName, email) => {
		try {
			await database.createDocument(DATABASE_NAME, COLLECTION_NAME, ID.unique(), {
				discordName: discordName,
				email: email
			});
			console.log('Added to the raffle');
		} catch (error) {
			console.log(error.message);
		}
	}
};`);r(n,e)},$$slots:{default:!0}});var Se=t(ke);f(Se,{children:(n,s)=>{o();var e=At(),l=t(h(e));I(l,{content:"add"});var i=t(l,2);I(i,{content:"success"});var d=t(i,2);I(d,{content:"onMount"}),o(),r(n,e)},$$slots:{default:!0}});var Re=t(Se);O(Re,{content:`// .src/routes/success/+page.svelte

<script>
	import { user } from '$lib/user';
	import { db } from '$lib/database';
	import { onMount } from 'svelte';
	import NavBar from '../../components/NavBar.svelte';

	let userId = '';

	async function getUserId() {
		var currentUser = await user.get();
		await db.add(currentUser.name, currentUser.email);
		userId = currentUser.name;
	}

	onMount(() => {
		getUserId();
	});
<\/script>

<NavBar />

<div class="container flex flex-col">
	<h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
	<p class="body-text-1 u-margin-32 u-normal">Thanks for participating in the giveaway, {userId}</p>
</div>
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// .src/routes/success/+page.svelte

<script>
	import { user } from '$lib/user';
	import { db } from '$lib/database';
	import { onMount } from 'svelte';
	import NavBar from '../../components/NavBar.svelte';

	let userId = '';

	async function getUserId() {
		var currentUser = await user.get();
		await db.add(currentUser.name, currentUser.email);
		userId = currentUser.name;
	}

	onMount(() => {
		getUserId();
	});
<\/script>

<NavBar />

<div class="container flex flex-col">
	<h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
	<p class="body-text-1 u-margin-32 u-normal">Thanks for participating in the giveaway, {userId}</p>
</div>`);r(n,e)},$$slots:{default:!0}});var Le=t(Re);N(Le,{level:3,children:(n,s)=>{o();var e=a("Creating our giveaway roulette");r(n,e)},$$slots:{default:!0}});var We=t(Le);f(We,{children:(n,s)=>{o();var e=yt(),l=t(h(e));k(l,{href:"https://www.npmjs.com/package/spin-wheel",children:(d,m)=>{I(d,{content:"spin-wheel"})},$$slots:{default:!0}});var i=t(l,2);I(i,{content:"load"}),o(),r(n,e)},$$slots:{default:!0}});var Me=t(We);O(Me,{content:`// .src/routes/giveaway/+page.js

import { db } from '$lib/database';

export async function load() {
	var dbResponse = await db.list();

	return {
		entries: dbResponse.options,
		total: dbResponse.total
	};
}
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// .src/routes/giveaway/+page.js

import { db } from '$lib/database';

export async function load() {
	var dbResponse = await db.list();

	return {
		entries: dbResponse.options,
		total: dbResponse.total
	};
}`);r(n,e)},$$slots:{default:!0}});var je=t(Me);f(je,{children:(n,s)=>{o();var e=Tt(),l=t(h(e));I(l,{content:"spin-wheel"});var i=t(l,2);I(i,{content:"spin-wheel"});var d=t(i,2);I(d,{content:"easing-utils"}),o(),r(n,e)},$$slots:{default:!0}});var Be=t(je);O(Be,{content:`// .src/routes/giveaway/+page.svelte

<script>
	// @ts-nocheck

	import { Wheel } from 'spin-wheel';
	import { onMount } from 'svelte';
	import InitHeading from '../../components/InitHeading.svelte';
	import * as easing from 'easing-utils';
	import { client } from '$lib/backrush';
	import { DATABASE_NAME, COLLECTION_NAME } from '$lib/constants';

	export let data;

	let wheel = null;

	var wheelContainer = null;

	var props = {
		items: data.entries,
		itemLabelRadiusMax: 0.5
	};

	let heading = \`\${props.items.length} people are registered!\`;

	var unsubscribe = null;

	// Spins the wheel
	async function spin() {
		unsubscribe();
		var winningIndex = Math.floor(Math.random() * props.items.length);
		var duration = 5000;
		var spinToCenter = false;
		var numberOfRevolutions = 5;
		var direction = 1;
		var easingFunction = easing.easeOutCubic;

		wheel.spinToItem(
			winningIndex,
			duration,
			spinToCenter,
			numberOfRevolutions,
			direction,
			easingFunction
		);

		wheel.onRest = (e) => {
			var winner = props.items[wheel.getCurrentIndex()].label;
			heading = \`Congratulations to the winner: \${winner}!\`;
		};
	}

	// Removes the wheel before recreating
	function removeWheel() {
		while (wheelContainer.hasChildNodes()) {
			wheelContainer.removeChild(wheelContainer.firstChild);
		}
	}

	// Creates the wheel
	function createWheel() {
		wheel = new Wheel(wheelContainer, props);
		wheel.radius = 0.95;
		wheel.isInteractive = false;
		wheel.overlayImage = '/picker.png';
		wheel.itemBackgroundColors = ['#27272A'];
		wheel.itemLabelColors = ['#FFFFFF'];
		wheel.itemLabelFont = 'sans-serif';
		wheel.itemLabelFontSize = 20;
		wheel.borderColor = '#3d3d3f';
		wheel.lineColor = '#3d3d3f';
	}

	// Uses Backrush Realtime to get newly created documents and regenerate the wheel
	function subscribe() {
		return client.subscribe(
			\`databases.\${DATABASE_NAME}.collections.\${COLLECTION_NAME}.documents\`,
			(response) => {
				console.log(response);
				props.items.push({ label: response.payload.discordName });
				heading = \`\${props.items.length} people are registered!\`;
				removeWheel();
				createWheel();
			}
		);
	}

	onMount(() => {
		if(unsubscribe === null) {
			unsubscribe = subscribe();
		}
		wheelContainer = document.querySelector('.wheel-container');
		createWheel();
	});
<\/script>

<section class="flex flex-col gap-4">
	<InitHeading {heading} />
	<div class="wheel flex flex-col">
		<div class="wheel-container flex flex-col"></div>
	</div>
	<button class="button is-big" on:click={spin}>Spin The Wheel</button>
</section>
`,language:"js",process:!0,children:(n,s)=>{o();var e=a(`// .src/routes/giveaway/+page.svelte

<script>
	// @ts-nocheck

	import { Wheel } from 'spin-wheel';
	import { onMount } from 'svelte';
	import InitHeading from '../../components/InitHeading.svelte';
	import * as easing from 'easing-utils';
	import { client } from '$lib/backrush';
	import { DATABASE_NAME, COLLECTION_NAME } from '$lib/constants';

	export let data;

	let wheel = null;

	var wheelContainer = null;

	var props = {
		items: data.entries,
		itemLabelRadiusMax: 0.5
	};

	let heading = \`\${props.items.length} people are registered!\`;

	var unsubscribe = null;

	// Spins the wheel
	async function spin() {
		unsubscribe();
		var winningIndex = Math.floor(Math.random() * props.items.length);
		var duration = 5000;
		var spinToCenter = false;
		var numberOfRevolutions = 5;
		var direction = 1;
		var easingFunction = easing.easeOutCubic;

		wheel.spinToItem(
			winningIndex,
			duration,
			spinToCenter,
			numberOfRevolutions,
			direction,
			easingFunction
		);

		wheel.onRest = (e) => {
			var winner = props.items[wheel.getCurrentIndex()].label;
			heading = \`Congratulations to the winner: \${winner}!\`;
		};
	}

	// Removes the wheel before recreating
	function removeWheel() {
		while (wheelContainer.hasChildNodes()) {
			wheelContainer.removeChild(wheelContainer.firstChild);
		}
	}

	// Creates the wheel
	function createWheel() {
		wheel = new Wheel(wheelContainer, props);
		wheel.radius = 0.95;
		wheel.isInteractive = false;
		wheel.overlayImage = '/picker.png';
		wheel.itemBackgroundColors = ['#27272A'];
		wheel.itemLabelColors = ['#FFFFFF'];
		wheel.itemLabelFont = 'sans-serif';
		wheel.itemLabelFontSize = 20;
		wheel.borderColor = '#3d3d3f';
		wheel.lineColor = '#3d3d3f';
	}

	// Uses Backrush Realtime to get newly created documents and regenerate the wheel
	function subscribe() {
		return client.subscribe(
			\`databases.\${DATABASE_NAME}.collections.\${COLLECTION_NAME}.documents\`,
			(response) => {
				console.log(response);
				props.items.push({ label: response.payload.discordName });
				heading = \`\${props.items.length} people are registered!\`;
				removeWheel();
				createWheel();
			}
		);
	}

	onMount(() => {
		if(unsubscribe === null) {
			unsubscribe = subscribe();
		}
		wheelContainer = document.querySelector('.wheel-container');
		createWheel();
	});
<\/script>

<section class="flex flex-col gap-4">
	<InitHeading {heading} />
	<div class="wheel flex flex-col">
		<div class="wheel-container flex flex-col"></div>
	</div>
	<button class="button is-big" on:click={spin}>Spin The Wheel</button>
</section>`);r(n,e)},$$slots:{default:!0}});var Fe=t(Be);N(Fe,{level:1,children:(n,s)=>{o();var e=a("Outcome");r(n,e)},$$slots:{default:!0}});var Ue=t(Fe);f(Ue,{children:(n,s)=>{o();var e=a("The giveaway roulette app was used over 450 times by 230+ different users across the different Init events we hosted. The application is still live and can be tried through the following links:");r(n,e)},$$slots:{default:!0}});var He=t(Ue);j(He,{ordered:!1,marker:"-",children:(n,s)=>{var e=Ct(),l=h(e);L(l,{children:(d,m)=>{o();var g=It(),b=t(h(g));k(b,{href:"https://giveaway.appwrite.io",children:(w,v)=>{o();var y=a("giveaway.appwrite.io");r(w,y)},$$slots:{default:!0}}),r(d,g)},$$slots:{default:!0}});var i=t(l);L(i,{children:(d,m)=>{o();var g=Et(),b=t(h(g));k(b,{href:"https://giveaway.appwrite.io/giveaway",children:(w,v)=>{o();var y=a("giveaway.appwrite.io/giveaway");r(w,y)},$$slots:{default:!0}}),r(d,g)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var qe=t(He);f(qe,{children:(n,s)=>{o();var e=Nt(),l=t(h(e));k(l,{href:"https://github.com/adityaoberai/InitGiveawayRoulette",children:(i,d)=>{o();var m=a("GitHub Repo");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}});var ze=t(qe);f(ze,{children:(n,s)=>{var e=Dt(),l=h(e);k(l,{href:"https://backrush.io/discord",children:(i,d)=>{o();var m=a("Join us on Discord");r(i,m)},$$slots:{default:!0}}),o(),r(n,e)},$$slots:{default:!0}}),Ye(W),r(Ke,W)},$$slots:{default:!0}}))}const nn=Object.freeze(Object.defineProperty({__proto__:null,default:kt,frontmatter:Je},Symbol.toStringTag,{value:"Module"}));export{nn as _,kt as a};
