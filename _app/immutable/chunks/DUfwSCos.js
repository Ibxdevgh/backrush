import{t as h,b as i,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as en,s as n,f as m,n as r,r as tn}from"./NgVQVlRK.js";import{n as nn}from"./B4IyMRKX.js";import{H as x}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as A}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as c}from"./DXp9_3zM.js";import{F as g}from"./OFUKRh55.js";import{L as E,I as w}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{S as y}from"./yHjwcyUH.js";import{L as P}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as rn}from"./CEkRzcqJ.js";const Vt={layout:"post",title:"Building a full-stack app with Svelte and Backrush",description:"Learn how to build full-stack apps with Svelte and Backrush by building an expense tracker.",date:"2025-01-31T00:00:00.000Z",cover:"/images/blog/build-fullstack-svelte-appwrite/cover.png",timeToRead:15,author:"ebenezer-don",category:"tutorial"};var on=h("You can also try out the app using this <!>. We&#39;ll use SvelteKit with JavaScript for our frontend so that we can take advantage of its built-in routing. For styling, we&#39;ll use Tailwind CSS. And on the backend, we&#39;ll use Backrush to handle user authentication and database operations.",1),an=h("<!><!><!>",1),sn=h("For the question &quot;What would you like to add to your project?&quot;, select &quot;prettier&quot; and &quot;tailwindcss&quot;. Next, choose your preferred package manager, then create your Sveltekit project. In this tutorial, we&#39;ll use <!>.",1),ln=h("With that done, you should have your new Sveltekit project named <!>. You can test it by running:",1),dn=h("Next, navigate to the project directory and install the additional dependencies we need. We&#39;ll use <!> for authentication and database operations, and <!> for date formatting:",1),cn=h("Our application needs to communicate with <!>, which requires several configuration values. Create a <!> file in your project root and add these environment variables:",1),un=h("The <!> prefix makes these variables available to our client-side code in Svelte. You&#39;ll need to replace <!> with your actual Backrush project ID, which we&#39;ll create in the next step.",1),pn=h("Before we continue with the frontend implementation, we need to configure our Backrush backend. Log into your <!> and follow these steps:",1),hn=h("Open the <!> tab from the sidebar and create a database with the ID &quot;expense-db&quot;",1),vn=h("<!><!><!>",1),mn=h("The expenses collection needs several attributes to store the expense data effectively. Open the <!> tab of your new collection and add the following attributes:",1),$n=h("Notice that the <!> attribute is an enumerated type with a set of predefined values. This structured approach helps us organize and filter expenses effectively. We have both a <!> attribute and a <!> attribute because when an expense is created is not necessarily the same as when it occurred.",1),fn=h("To ensure that users can only access their own expenses, Open the collection&#39;s <!> tab and scroll to <!>. Click <!>, select <!> and check <!> permission.",1),gn=h("Next, enable <!> to allow users to access their documents. We&#39;ll ensure this by giving users the <!> permission when creating documents in our code.",1),_n=h("This structure follows Svelte&#39;s conventions while keeping our code organized and maintainable. The <!> directory contains reusable utilities and stores, while <!> handles our application&#39;s pages and layouts. We&#39;ll use the <!> store to manage our user state, and the <!> file to handle our Backrush operations.",1),wn=h("The <!> directory contains our application&#39;s pages and layouts. The <!> file is our main layout component, which we&#39;ll use to handle our application&#39;s structure and ensure that users can only access protected routes if they&#39;re authenticated.",1),xn=h("<!><!><!><!>",1),yn=h("You can find the complete CSS code here: <!>. Copy this code into your <!> file. There&#39;s no need to do anything else to make this work if you selected the &quot;tailwindcss&quot; option when creating your project.",1),bn=h("For the base <!> file, we&#39;ll use the default Sveltekit template, but you might want to update the meta tags to include a title and description.",1),Pn=h("This template provides the basic structure for our application. The <!> attribute enables SvelteKit&#39;s built-in preloading feature to make navigation faster.",1),En=h("Let&#39;s set up our connection to Backrush. If you haven&#39;t already, create a new file in the <!> directory named <!>. We&#39;ll use this file to configure the Backrush client and provide access to our database and account services.",1),Dn=h("This configuration file initializes our connection to Backrush. The <!> class creates a new Backrush client instance, which we configure with our endpoint and project ID from our environment variables. We then create instances of the <!> and <!> services, which we&#39;ll use throughout our application for database operations and user authentication.",1),An=h("Our Svelte application needs to track the current user&#39;s authentication state. For that, we&#39;ll use a Svelte store. Create a new file in the <!> directory named <!> and add the following code:",1),In=h("This creates a Svelte store named <!> to manage our user state. The store starts with null when no user is logged in. When a user authenticates, we&#39;ll update this store with their information, making it available throughout our application.",1),kn=h("In the <!> function, we&#39;re using the <!> method to retrieve the current user&#39;s information from Backrush. If successful, we update our <!> store with the user&#39;s information and return it. If there&#39;s an error, we log it and return null.",1),Tn=h("We&#39;ll also need a <!> and <!> function to handle user authentication:",1),Sn=h("In the <!> function, we&#39;re using the <!> method to create a new email/password session for the user. This method automatically logs the user in and updates our <!> store with the user&#39;s information.",1),Cn=h("For the <!> function, we&#39;re using the <!> method to create a new user account. We then call the <!> function to log the user in after creating their account.",1),Ln=h("Backrush also provides other authentication methods, such as OAuth, Google, and Apple. You can learn more about them in our <!>.",1),Fn=h("Finally, we&#39;ll add a <!> function to the <!> file to handle user logout:",1),On=h("The <!> function uses the <!> method to delete the current user&#39;s session from Backrush. This effectively logs the user out and updates our <!> store to null.",1),Wn=h("For the authentication page, we&#39;ll create a new file in the <!> directory and name it <!>. This file will handle the sign-in and sign-up functionality. For the JavaScript functionality of our authentication page, add the following <!> code:",1),Nn=h("Here, we&#39;re handling the authentication form submission and logic. In the <!> function, we check if the user is logging in or registering. We then call the appropriate function (<!> or <!>) and update our <!> store with the user&#39;s information. Finally, we redirect the user to the home page using the <!> function.",1),Un=h("Notice that we&#39;re using the CSS classes from our <!> file to style our component. The template also handles loading states and error messages which will provide clear feedback to users during the authentication process.",1),Bn=h("With this done, you can navigate to the <!> route in your browser and test the authentication functionality.",1),Rn=h("Let&#39;s structure our application&#39;s layout with the <!> file. Here, we&#39;ll check the user&#39;s authentication status when the application loads, and redirect the user to the authentication page if they&#39;re not authenticated. We&#39;ll also add our app&#39;s navbar to this file, so that it can be accessed from any page.",1),jn=h("First, add the <!> section to handle our layout&#39;s logic:",1),qn=h("In the <!> function, we&#39;re checking the user&#39;s authentication status when the application loads. If the user is not authenticated, we redirect them to the authentication page. This function runs when the component is first mounted.",1),Mn=h("The <!> function handles the dropdown menu&#39;s open/close state, which we&#39;ll use to show the logout button in the navbar. We can also use this dropdown for other purposes, like showing the user&#39;s profile information.",1),zn=h("The <!> function handles the user&#39;s logout process. It calls the <!> function from our <!> file and redirects the user to the authentication page.",1),Hn=h("Here, we&#39;re adding a navbar to our layout. The navbar contains a brand logo and a user dropdown menu which displays the user&#39;s avatar and name. We&#39;re getting the user&#39;s avatar from the <!> URL, which generates an avatar based on the user&#39;s initials. The user&#39;s name is gotten from the <!> store, and it&#39;s what handles the dropdown menu&#39;s open/close state.",1),Yn=h("The heart of our application is the expense tracker page. This component handles displaying, creating, updating, and deleting expenses, along with showing important statistics. Let&#39;s build this page in the <!> file.",1),Xn=h("Here we&#39;re setting up our component&#39;s state. The <!> array will hold our list of expenses, while <!> and <!> handle our application&#39;s loading and error states. We maintain separate form data for creating new expenses and editing existing ones.",1),Jn=h("The <!> function retrieves our expenses from Backrush and sorts them by creation date, but you might want to sort instead by the date of the expense, depending on how you want to display expenses. After fetching, we calculate statistics including total expenses, this month&#39;s expenses, and this week&#39;s expenses.",1),Vn=h("The <!> function handles both creating new expenses and updating existing ones. When creating a new expense, we set document-level permissions to ensure users can access their expenses. Here, we&#39;re giving users the <!>, <!>, and <!> permissions.",1),Gn=h("Remember to close the script section using <!>.",1),Kn=h("Now that we have our core functionality in place, let&#39;s build the user interface. Our UI will consist of three main sections: statistics overview, expense form, and expense list. Let&#39;s add this template section to our <!> file:",1),Qn=h("<!><!><!><!>",1),Zn=h("<!><!><!><!><!><!>",1),er=h("Use this project as a starting point and build upon it based on what you need. The code is available on <!> if you want to explore it further. You can also visit the <!> to see it in action.",1),tr=h("If you have any questions or feedback, you can reach out to me on <!> or join our <!>.",1),nr=h("<!><!><!>",1),rr=h("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function or(Gt){rn(Gt,nn(Vt,{children:(Kt,ar)=>{var D=rr(),I=en(D);d(I,{children:(t,s)=>{r();var e=i("Managing personal finances is a common need, and building an expense tracker is an excellent way to learn full-stack development with Svelte. In this tutorial, we'll create a web application that helps users track their spending.");o(t,e)},$$slots:{default:!0}});var k=n(I);d(k,{children:(t,s)=>{r();var e=i("Users will be able to sign up, log their expenses and categorize them to view spending patterns. By the end, you will have built an app that looks and functions like this:");o(t,e)},$$slots:{default:!0}});var T=n(k);d(T,{children:(t,s)=>{A(t,{src:"/images/blog/build-fullstack-svelte-appwrite/expense-app-demo.gif",alt:"Expense app demo"})},$$slots:{default:!0}});var S=n(T);d(S,{children:(t,s)=>{r();var e=on(),a=n(m(e));P(a,{href:"https://expense-appwrite-svelte.netlify.app/",children:(l,u)=>{r();var v=i("live URL");o(l,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var C=n(S);d(C,{children:(t,s)=>{r();var e=i("You'll learn how to implement authentication flows, manage application state, handle form submissions, and create an intuitive user interface.");o(t,e)},$$slots:{default:!0}});var L=n(C);x(L,{level:2,children:(t,s)=>{r();var e=i("Prerequisites");o(t,e)},$$slots:{default:!0}});var F=n(L);d(F,{children:(t,s)=>{r();var e=i("This tutorial assumes you have basic knowledge of TypeScript and Svelte. You'll need:");o(t,e)},$$slots:{default:!0}});var O=n(F);E(O,{ordered:!1,marker:"-",children:(t,s)=>{var e=an(),a=m(e);w(a,{children:(v,p)=>{r();var f=i("Node.js version 18 or later installed on your system");o(v,f)},$$slots:{default:!0}});var l=n(a);w(l,{children:(v,p)=>{r();var f=i("pnpm as your package manager");o(v,f)},$$slots:{default:!0}});var u=n(l);w(u,{children:(v,p)=>{r();var f=i("An Backrush instance (either self-hosted or cloud)");o(v,f)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var W=n(O);x(W,{level:2,children:(t,s)=>{r();var e=i("Project setup and initial configuration");o(t,e)},$$slots:{default:!0}});var N=n(W);d(N,{children:(t,s)=>{r();var e=i("Let's start by creating a new Svelte project. Open your terminal and run:");o(t,e)},$$slots:{default:!0}});var U=n(N);g(U,{content:`npx sv create expense-app
`,language:"bash",process:!0,children:(t,s)=>{r();var e=i("npx sv create expense-app");o(t,e)},$$slots:{default:!0}});var B=n(U);d(B,{children:(t,s)=>{r();var e=i(`When prompted to select a template, choose "Sveltekit minimal". For type checking, you can select "Yes" or "No", depending on your preference, but we'll go with "No" for this tutorial.`);o(t,e)},$$slots:{default:!0}});var R=n(B);d(R,{children:(t,s)=>{r();var e=sn(),a=n(m(e));y(a,{marker:"**",children:(l,u)=>{r();var v=i("pnpm");o(l,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var j=n(R);d(j,{children:(t,s)=>{r();var e=ln(),a=n(m(e));c(a,{content:"expense-app"}),r(),o(t,e)},$$slots:{default:!0}});var q=n(j);g(q,{content:`pnpm dev
`,language:"bash",process:!0,children:(t,s)=>{r();var e=i("pnpm dev");o(t,e)},$$slots:{default:!0}});var M=n(q);d(M,{children:(t,s)=>{r();var e=dn(),a=n(m(e));c(a,{content:"appwrite"});var l=n(a,2);c(l,{content:"date-fns"}),r(),o(t,e)},$$slots:{default:!0}});var z=n(M);g(z,{content:`cd expense-app
pnpm install
pnpm add appwrite date-fns
`,language:"bash",process:!0,children:(t,s)=>{r();var e=i(`cd expense-app
pnpm install
pnpm add appwrite date-fns`);o(t,e)},$$slots:{default:!0}});var H=n(z);x(H,{level:2,children:(t,s)=>{r();var e=i("Environment configuration");o(t,e)},$$slots:{default:!0}});var Y=n(H);d(Y,{children:(t,s)=>{r();var e=cn(),a=n(m(e));P(a,{href:"https://cloud.appwrite.io/?doFollow=true",children:(u,v)=>{r();var p=i("Backrush");o(u,p)},$$slots:{default:!0}});var l=n(a,2);c(l,{content:".env"}),r(),o(t,e)},$$slots:{default:!0}});var X=n(Y);g(X,{content:`PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
PUBLIC_APPWRITE_PROJECT_ID=your-project-id
PUBLIC_APPWRITE_DATABASE_ID=expense-db
PUBLIC_APPWRITE_COLLECTION_ID=expenses
`,process:!0,children:(t,s)=>{r();var e=i(`PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
PUBLIC_APPWRITE_PROJECT_ID=your-project-id
PUBLIC_APPWRITE_DATABASE_ID=expense-db
PUBLIC_APPWRITE_COLLECTION_ID=expenses`);o(t,e)},$$slots:{default:!0}});var J=n(X);d(J,{children:(t,s)=>{r();var e=un(),a=n(m(e));c(a,{content:"PUBLIC_"});var l=n(a,2);c(l,{content:"your-project-id"}),r(),o(t,e)},$$slots:{default:!0}});var V=n(J);x(V,{level:2,children:(t,s)=>{r();var e=i("Setting up Backrush");o(t,e)},$$slots:{default:!0}});var G=n(V);d(G,{children:(t,s)=>{r();var e=pn(),a=n(m(e));P(a,{href:"https://cloud.appwrite.io/console?doFollow=true",children:(l,u)=>{r();var v=i("Backrush Console");o(l,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var K=n(G);E(K,{ordered:!0,marker:".",children:(t,s)=>{var e=vn(),a=m(e);w(a,{children:(v,p)=>{r();var f=i("Create a new project");o(v,f)},$$slots:{default:!0}});var l=n(a);w(l,{children:(v,p)=>{r();var f=hn(),$=n(m(f));y($,{marker:"**",children:(_,b)=>{r();var Zt=i("Databases");o(_,Zt)},$$slots:{default:!0}}),r(),o(v,f)},$$slots:{default:!0}});var u=n(l);w(u,{children:(v,p)=>{r();var f=i('In your new database, create a collection with the ID "expenses"');o(v,f)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var Q=n(K);d(Q,{children:(t,s)=>{r();var e=mn(),a=n(m(e));y(a,{marker:"**",children:(l,u)=>{r();var v=i("Attributes");o(l,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var Z=n(Q);g(Z,{content:'- `userId` (String, required)\n- `amount` (Float, required)\n- `category` (Enum, required)\n  - Elements: "food", "rent", "transportation", "entertainment", "shopping", "healthcare", "utilities", "education", "other"\n- `description` (String, required)\n- `date` (DateTime, required)\n- `createdAt` (DateTime, required)\n- `updatedAt` (DateTime, required)\n',language:"md",process:!0,children:(t,s)=>{r();var e=i('- `userId` (String, required)\n- `amount` (Float, required)\n- `category` (Enum, required)\n  - Elements: "food", "rent", "transportation", "entertainment", "shopping", "healthcare", "utilities", "education", "other"\n- `description` (String, required)\n- `date` (DateTime, required)\n- `createdAt` (DateTime, required)\n- `updatedAt` (DateTime, required)');o(t,e)},$$slots:{default:!0}});var ee=n(Z);d(ee,{children:(t,s)=>{r();var e=$n(),a=n(m(e));c(a,{content:"category"});var l=n(a,2);c(l,{content:"date"});var u=n(l,2);c(u,{content:"createdAt"}),r(),o(t,e)},$$slots:{default:!0}});var te=n(ee);d(te,{children:(t,s)=>{r();var e=fn(),a=n(m(e));y(a,{marker:"**",children:(f,$)=>{r();var _=i("Settings");o(f,_)},$$slots:{default:!0}});var l=n(a,2);y(l,{marker:"**",children:(f,$)=>{r();var _=i("Permissions");o(f,_)},$$slots:{default:!0}});var u=n(l,2);y(u,{marker:"**",children:(f,$)=>{r();var _=i("Add role");o(f,_)},$$slots:{default:!0}});var v=n(u,2);y(v,{marker:"**",children:(f,$)=>{r();var _=i("Users");o(f,_)},$$slots:{default:!0}});var p=n(v,2);y(p,{marker:"**",children:(f,$)=>{r();var _=i("Create");o(f,_)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var ne=n(te);d(ne,{children:(t,s)=>{r();var e=gn(),a=n(m(e));y(a,{marker:"**",children:(u,v)=>{r();var p=i("Document Security");o(u,p)},$$slots:{default:!0}});var l=n(a,2);y(l,{marker:"**",children:(u,v)=>{r();var p=i("Read");o(u,p)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var re=n(ne);d(re,{children:(t,s)=>{A(t,{src:"/images/blog/build-fullstack-svelte-appwrite/permissions-document-security.png",alt:"permissions-document-security"})},$$slots:{default:!0}});var oe=n(re);x(oe,{level:2,children:(t,s)=>{r();var e=i("Project structure");o(t,e)},$$slots:{default:!0}});var ae=n(oe);d(ae,{children:(t,s)=>{r();var e=i("Our application needs a clear structure to make it easy to maintain. Create the following directory structure in your project:");o(t,e)},$$slots:{default:!0}});var se=n(ae);g(se,{content:`src/
├── lib/
│   ├── stores/
│   │   └── auth.js
│   └── appwrite.js
├── routes/
│   ├── auth/
│   │   └── +page.svelte
│   ├── +layout.svelte
│   └── +page.svelte
├── app.html
└── app.css

`,process:!0,children:(t,s)=>{r();var e=i(`src/
├── lib/
│   ├── stores/
│   │   └── auth.js
│   └── appwrite.js
├── routes/
│   ├── auth/
│   │   └── +page.svelte
│   ├── +layout.svelte
│   └── +page.svelte
├── app.html
└── app.css`);o(t,e)},$$slots:{default:!0}});var ie=n(se);d(ie,{children:(t,s)=>{r();var e=_n(),a=n(m(e));c(a,{content:"lib"});var l=n(a,2);c(l,{content:"routes"});var u=n(l,2);c(u,{content:"lib/stores/auth.js"});var v=n(u,2);c(v,{content:"lib/appwrite.js"}),r(),o(t,e)},$$slots:{default:!0}});var le=n(ie);d(le,{children:(t,s)=>{r();var e=wn(),a=n(m(e));c(a,{content:"routes"});var l=n(a,2);c(l,{content:"+layout.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var de=n(le);x(de,{level:2,children:(t,s)=>{r();var e=i("Styling the application");o(t,e)},$$slots:{default:!0}});var ce=n(de);d(ce,{children:(t,s)=>{r();var e=i("For our expense tracker, we'll use Tailwind CSS for styling. The styling includes:");o(t,e)},$$slots:{default:!0}});var ue=n(ce);E(ue,{ordered:!1,marker:"-",children:(t,s)=>{var e=xn(),a=m(e);w(a,{children:(p,f)=>{r();var $=i("Custom color variables for consistent theming");o(p,$)},$$slots:{default:!0}});var l=n(a);w(l,{children:(p,f)=>{r();var $=i("Base styles for typography and common elements");o(p,$)},$$slots:{default:!0}});var u=n(l);w(u,{children:(p,f)=>{r();var $=i("Component-specific classes for our custom UI elements");o(p,$)},$$slots:{default:!0}});var v=n(u);w(v,{children:(p,f)=>{r();var $=i("Interactive element styles with hover and focus states");o(p,$)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var pe=n(ue);d(pe,{children:(t,s)=>{r();var e=yn(),a=n(m(e));P(a,{href:"https://github.com/appwrite-community/svelte-expense-tracker/blob/main/src/app.css",children:(u,v)=>{r();var p=i("Complete app.css code");o(u,p)},$$slots:{default:!0}});var l=n(a,2);c(l,{content:"src/app.css"}),r(),o(t,e)},$$slots:{default:!0}});var he=n(pe);d(he,{children:(t,s)=>{r();var e=i("Having these styles in place will ensure that each component you create looks good from the start.");o(t,e)},$$slots:{default:!0}});var ve=n(he);x(ve,{level:2,children:(t,s)=>{r();var e=i("Base HTML template");o(t,e)},$$slots:{default:!0}});var me=n(ve);d(me,{children:(t,s)=>{r();var e=bn(),a=n(m(e));c(a,{content:"src/app.html"}),r(),o(t,e)},$$slots:{default:!0}});var $e=n(me);g($e,{content:`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Expense Tracker</title>
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>

`,language:"html",process:!0,children:(t,s)=>{r();var e=i(`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Expense Tracker</title>
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>`);o(t,e)},$$slots:{default:!0}});var fe=n($e);d(fe,{children:(t,s)=>{r();var e=Pn(),a=n(m(e));c(a,{content:'data-sveltekit-preload-data="hover"'}),r(),o(t,e)},$$slots:{default:!0}});var ge=n(fe);x(ge,{level:2,children:(t,s)=>{r();var e=i("Setting up the Backrush client");o(t,e)},$$slots:{default:!0}});var _e=n(ge);d(_e,{children:(t,s)=>{r();var e=En(),a=n(m(e));c(a,{content:"src/lib"});var l=n(a,2);c(l,{content:"appwrite.js"}),r(),o(t,e)},$$slots:{default:!0}});var we=n(_e);g(we,{content:`import { Client, Account, Databases } from 'appwrite'
import {
	PUBLIC_APPWRITE_ENDPOINT,
	PUBLIC_APPWRITE_PROJECT_ID,
	PUBLIC_APPWRITE_DATABASE_ID,
	PUBLIC_APPWRITE_COLLECTION_ID
} from '$env/static/public'

const client = new Client()

client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_ID)

export const account = new Account(client)
export const databases = new Databases(client)

// Collection IDs from environment variables
export const EXPENSES_COLLECTION_ID = PUBLIC_APPWRITE_COLLECTION_ID
export const DATABASE_ID = PUBLIC_APPWRITE_DATABASE_ID

`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`import { Client, Account, Databases } from 'appwrite'
import {
	PUBLIC_APPWRITE_ENDPOINT,
	PUBLIC_APPWRITE_PROJECT_ID,
	PUBLIC_APPWRITE_DATABASE_ID,
	PUBLIC_APPWRITE_COLLECTION_ID
} from '$env/static/public'

const client = new Client()

client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_ID)

export const account = new Account(client)
export const databases = new Databases(client)

// Collection IDs from environment variables
export const EXPENSES_COLLECTION_ID = PUBLIC_APPWRITE_COLLECTION_ID
export const DATABASE_ID = PUBLIC_APPWRITE_DATABASE_ID`);o(t,e)},$$slots:{default:!0}});var xe=n(we);d(xe,{children:(t,s)=>{r();var e=Dn(),a=n(m(e));c(a,{content:"Client"});var l=n(a,2);c(l,{content:"Databases"});var u=n(l,2);c(u,{content:"Account"}),r(),o(t,e)},$$slots:{default:!0}});var ye=n(xe);d(ye,{children:(t,s)=>{r();var e=i("Finally, we export the collection IDs from our environment variables so that we can use them in other parts of our application.");o(t,e)},$$slots:{default:!0}});var be=n(ye);x(be,{level:2,children:(t,s)=>{r();var e=i("Managing authentication state");o(t,e)},$$slots:{default:!0}});var Pe=n(be);d(Pe,{children:(t,s)=>{r();var e=An(),a=n(m(e));c(a,{content:"src/lib/stores"});var l=n(a,2);c(l,{content:"auth.js"}),r(),o(t,e)},$$slots:{default:!0}});var Ee=n(Pe);g(Ee,{content:`import { writable } from 'svelte/store'
import { account } from '$lib/appwrite'

export const user = writable(null)

export async function initAuth() {
	try {
		const currentUser = await account.get()
		user.set(currentUser)
		return currentUser
	} catch (error) {
		console.error('Error initializing auth:', error)
		user.set(null)
		return null
	}
}

`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`import { writable } from 'svelte/store'
import { account } from '$lib/appwrite'

export const user = writable(null)

export async function initAuth() {
	try {
		const currentUser = await account.get()
		user.set(currentUser)
		return currentUser
	} catch (error) {
		console.error('Error initializing auth:', error)
		user.set(null)
		return null
	}
}`);o(t,e)},$$slots:{default:!0}});var De=n(Ee);d(De,{children:(t,s)=>{r();var e=In(),a=n(m(e));c(a,{content:"user"}),r(),o(t,e)},$$slots:{default:!0}});var Ae=n(De);d(Ae,{children:(t,s)=>{r();var e=kn(),a=n(m(e));c(a,{content:"initAuth"});var l=n(a,2);c(l,{content:"account.get()"});var u=n(l,2);c(u,{content:"user"}),r(),o(t,e)},$$slots:{default:!0}});var Ie=n(Ae);d(Ie,{children:(t,s)=>{r();var e=Tn(),a=n(m(e));c(a,{content:"login"});var l=n(a,2);c(l,{content:"register"}),r(),o(t,e)},$$slots:{default:!0}});var ke=n(Ie);g(ke,{content:`export async function login(email, password) {
	try {
		await account.createEmailPasswordSession(email, password)
		await initAuth()
	} catch (error) {
		console.error('Login error:', error)
		throw error
	}
}

export async function register(email, password, name) {
	try {
		await account.create(ID.unique(), email, password, name)
		await login(email, password)
	} catch (error) {
		console.error('Registration error:', error)
		throw error
	}
}

`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`export async function login(email, password) {
	try {
		await account.createEmailPasswordSession(email, password)
		await initAuth()
	} catch (error) {
		console.error('Login error:', error)
		throw error
	}
}

export async function register(email, password, name) {
	try {
		await account.create(ID.unique(), email, password, name)
		await login(email, password)
	} catch (error) {
		console.error('Registration error:', error)
		throw error
	}
}`);o(t,e)},$$slots:{default:!0}});var Te=n(ke);d(Te,{children:(t,s)=>{r();var e=Sn(),a=n(m(e));c(a,{content:"login"});var l=n(a,2);c(l,{content:"account.createEmailPasswordSession"});var u=n(l,2);c(u,{content:"user"}),r(),o(t,e)},$$slots:{default:!0}});var Se=n(Te);d(Se,{children:(t,s)=>{r();var e=Cn(),a=n(m(e));c(a,{content:"register"});var l=n(a,2);c(l,{content:"account.create"});var u=n(l,2);c(u,{content:"login"}),r(),o(t,e)},$$slots:{default:!0}});var Ce=n(Se);d(Ce,{children:(t,s)=>{r();var e=Ln(),a=n(m(e));P(a,{href:"https://appwrite.io/docs/products/auth?doFollow=true",children:(l,u)=>{r();var v=i("docs");o(l,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var Le=n(Ce);d(Le,{children:(t,s)=>{r();var e=Fn(),a=n(m(e));c(a,{content:"logout"});var l=n(a,2);c(l,{content:"auth.js"}),r(),o(t,e)},$$slots:{default:!0}});var Fe=n(Le);g(Fe,{content:`export async function logout() {
	try {
		await account.deleteSession('current')
		user.set(null)
	} catch (error) {
		console.error('Logout error:', error)
	}
}

`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`export async function logout() {
	try {
		await account.deleteSession('current')
		user.set(null)
	} catch (error) {
		console.error('Logout error:', error)
	}
}`);o(t,e)},$$slots:{default:!0}});var Oe=n(Fe);d(Oe,{children:(t,s)=>{r();var e=On(),a=n(m(e));c(a,{content:"logout"});var l=n(a,2);c(l,{content:"account.deleteSession('current')"});var u=n(l,2);c(u,{content:"user"}),r(),o(t,e)},$$slots:{default:!0}});var We=n(Oe);d(We,{children:(t,s)=>{r();var e=i("With this setup, we're ready to implement our authentication flow.");o(t,e)},$$slots:{default:!0}});var Ne=n(We);x(Ne,{level:2,children:(t,s)=>{r();var e=i("Building the authentication page");o(t,e)},$$slots:{default:!0}});var Ue=n(Ne);d(Ue,{children:(t,s)=>{r();var e=Wn(),a=n(m(e));c(a,{content:"src/routes/auth"});var l=n(a,2);c(l,{content:"+page.svelte"});var u=n(l,2);c(u,{content:"<script>"}),r(),o(t,e)},$$slots:{default:!0}});var Be=n(Ue);g(Be,{content:`<script>
	import { account } from '$lib/appwrite'
	import { goto } from '$app/navigation'
	import { ID } from 'appwrite'
	import { login, register, user } from '$lib/stores/auth'

	let email = ''
	let password = ''
	let name = ''
	let isLogin = true
	let loading = false
	let error = null

	async function handleSubmit() {
		try {
			loading = true
			error = null

			if (isLogin) {
				await login(email, password)
			} else {
				await register(email, password, name)
			}

			// Update user store after successful login
			const currentUser = await account.get()
			user.set(currentUser)
			goto('/')
		} catch (e) {
			console.error('Auth error:', e)
			error = isLogin ? 'Invalid credentials' : 'Failed to create account'
		} finally {
			loading = false
		}
	}
<\/script>

`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<script>
	import { account } from '$lib/appwrite'
	import { goto } from '$app/navigation'
	import { ID } from 'appwrite'
	import { login, register, user } from '$lib/stores/auth'

	let email = ''
	let password = ''
	let name = ''
	let isLogin = true
	let loading = false
	let error = null

	async function handleSubmit() {
		try {
			loading = true
			error = null

			if (isLogin) {
				await login(email, password)
			} else {
				await register(email, password, name)
			}

			// Update user store after successful login
			const currentUser = await account.get()
			user.set(currentUser)
			goto('/')
		} catch (e) {
			console.error('Auth error:', e)
			error = isLogin ? 'Invalid credentials' : 'Failed to create account'
		} finally {
			loading = false
		}
	}
<\/script>`);o(t,e)},$$slots:{default:!0}});var Re=n(Be);d(Re,{children:(t,s)=>{r();var e=Nn(),a=n(m(e));c(a,{content:"handleSubmit"});var l=n(a,2);c(l,{content:"login"});var u=n(l,2);c(u,{content:"register"});var v=n(u,2);c(v,{content:"user"});var p=n(v,2);c(p,{content:"goto"}),r(),o(t,e)},$$slots:{default:!0}});var je=n(Re);d(je,{children:(t,s)=>{r();var e=i("For the template section, add the following code:");o(t,e)},$$slots:{default:!0}});var qe=n(je);g(qe,{content:`<div class="auth-container">
	<div class="auth-content">
		<div class="auth-header">
			<div class="mb-3 text-4xl">💰</div>
			<h2 class="auth-title">
				{isLogin ? 'Welcome back!' : 'Create your account'}
			</h2>
			<p class="auth-subtitle">
				{isLogin
					? "Track your expenses with ease. Let's get you signed in."
					: 'Start your journey to better expense management'}
			</p>
		</div>

		{#if error}
			<div class="auth-error">
				{error}
			</div>
		{/if}

		<form on:submit|preventDefault={handleSubmit} class="auth-form">
			{#if !isLogin}
				<div>
					<label for="name" class="form-label"> Full Name </label>
					<input
						type="text"
						id="name"
						bind:value={name}
						required
						class="input form-input-container"
						placeholder="John Doe"
					/>
				</div>
			{/if}

			<div>
				<label for="email" class="form-label"> Email address </label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="input form-input-container"
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<label for="password" class="form-label"> Password </label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					minlength="8"
					class="input form-input-container"
					placeholder="••••••••"
				/>
			</div>

			<div>
				<button
					type="submit"
					class="btn btn-primary w-full {loading ? 'opacity-75 cursor-not-allowed' : ''}"
					disabled={loading}
				>
					{#if loading}
						<div class="loading-spinner-small mr-2"></div>
					{/if}
					{isLogin ? 'Sign in' : 'Create account'}
				</button>
			</div>
		</form>

		<div class="text-center">
			<button
				on:click={() => (isLogin = !isLogin)}
				class="text-sm text-primary-600 hover:text-primary-500"
			>
				{isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
			</button>
		</div>
	</div>
</div>

`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<div class="auth-container">
	<div class="auth-content">
		<div class="auth-header">
			<div class="mb-3 text-4xl">💰</div>
			<h2 class="auth-title">
				{isLogin ? 'Welcome back!' : 'Create your account'}
			</h2>
			<p class="auth-subtitle">
				{isLogin
					? "Track your expenses with ease. Let's get you signed in."
					: 'Start your journey to better expense management'}
			</p>
		</div>

		{#if error}
			<div class="auth-error">
				{error}
			</div>
		{/if}

		<form on:submit|preventDefault={handleSubmit} class="auth-form">
			{#if !isLogin}
				<div>
					<label for="name" class="form-label"> Full Name </label>
					<input
						type="text"
						id="name"
						bind:value={name}
						required
						class="input form-input-container"
						placeholder="John Doe"
					/>
				</div>
			{/if}

			<div>
				<label for="email" class="form-label"> Email address </label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="input form-input-container"
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<label for="password" class="form-label"> Password </label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					minlength="8"
					class="input form-input-container"
					placeholder="••••••••"
				/>
			</div>

			<div>
				<button
					type="submit"
					class="btn btn-primary w-full {loading ? 'opacity-75 cursor-not-allowed' : ''}"
					disabled={loading}
				>
					{#if loading}
						<div class="loading-spinner-small mr-2"></div>
					{/if}
					{isLogin ? 'Sign in' : 'Create account'}
				</button>
			</div>
		</form>

		<div class="text-center">
			<button
				on:click={() => (isLogin = !isLogin)}
				class="text-sm text-primary-600 hover:text-primary-500"
			>
				{isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
			</button>
		</div>
	</div>
</div>`);o(t,e)},$$slots:{default:!0}});var Me=n(qe);d(Me,{children:(t,s)=>{r();var e=i("This template creates an interface for both signing in and creating new accounts. The form dynamically changes based on whether the user is logging in or signing up, showing additional fields when needed.");o(t,e)},$$slots:{default:!0}});var ze=n(Me);d(ze,{children:(t,s)=>{r();var e=Un(),a=n(m(e));c(a,{content:"app.css"}),r(),o(t,e)},$$slots:{default:!0}});var He=n(ze);d(He,{children:(t,s)=>{r();var e=Bn(),a=n(m(e));c(a,{content:"/auth"}),r(),o(t,e)},$$slots:{default:!0}});var Ye=n(He);x(Ye,{level:2,children:(t,s)=>{r();var e=i("Creating our layout component");o(t,e)},$$slots:{default:!0}});var Xe=n(Ye);d(Xe,{children:(t,s)=>{r();var e=Rn(),a=n(m(e));c(a,{content:"src/routes/+layout.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var Je=n(Xe);d(Je,{children:(t,s)=>{r();var e=jn(),a=n(m(e));c(a,{content:"script"}),r(),o(t,e)},$$slots:{default:!0}});var Ve=n(Je);g(Ve,{content:`<script lang="ts">
	import '../app.css'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { user, initAuth, logout } from '$lib/stores/auth'
	import { goto } from '$app/navigation'

	let isDropdownOpen = false

	onMount(async () => {
		try {
			const currentUser = await initAuth()
			if (!currentUser && !$page.url.pathname.startsWith('/auth')) {
				goto('/auth')
			}
		} catch (error) {
			if (!$page.url.pathname.startsWith('/auth')) {
				goto('/auth')
			}
		}
	})

	const toggleDropdown = () => {
		isDropdownOpen = !isDropdownOpen
	}

	const handleLogout = async () => {
		try {
			await logout()
			goto('/auth')
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}
<\/script>
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<script lang="ts">
	import '../app.css'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { user, initAuth, logout } from '$lib/stores/auth'
	import { goto } from '$app/navigation'

	let isDropdownOpen = false

	onMount(async () => {
		try {
			const currentUser = await initAuth()
			if (!currentUser && !$page.url.pathname.startsWith('/auth')) {
				goto('/auth')
			}
		} catch (error) {
			if (!$page.url.pathname.startsWith('/auth')) {
				goto('/auth')
			}
		}
	})

	const toggleDropdown = () => {
		isDropdownOpen = !isDropdownOpen
	}

	const handleLogout = async () => {
		try {
			await logout()
			goto('/auth')
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}
<\/script>`);o(t,e)},$$slots:{default:!0}});var Ge=n(Ve);d(Ge,{children:(t,s)=>{r();var e=qn(),a=n(m(e));c(a,{content:"onMount"}),r(),o(t,e)},$$slots:{default:!0}});var Ke=n(Ge);d(Ke,{children:(t,s)=>{r();var e=Mn(),a=n(m(e));c(a,{content:"toggleDropdown"}),r(),o(t,e)},$$slots:{default:!0}});var Qe=n(Ke);d(Qe,{children:(t,s)=>{r();var e=zn(),a=n(m(e));c(a,{content:"handleLogout"});var l=n(a,2);c(l,{content:"logout"});var u=n(l,2);c(u,{content:"auth.js"}),r(),o(t,e)},$$slots:{default:!0}});var Ze=n(Qe);d(Ze,{children:(t,s)=>{r();var e=i("Next, let's add the template section for our layout's UI:");o(t,e)},$$slots:{default:!0}});var et=n(Ze);g(et,{content:`<div class="layout-container">
	<nav class="main-nav">
		<div class="nav-container">
			<div class="nav-content">
				<div class="flex items-center">
					<a href="/" class="brand-link">
						<span class="brand-emoji">💰</span>
						<span class="brand-text">ExpenseTracker</span>
					</a>
				</div>

				{#if $user}
					<div class="user-nav">
						<div class="user-dropdown">
							<button on:click={toggleDropdown} class="user-button">
								<img
									src={\`https://api.dicebear.com/7.x/initials/svg?seed=\${$user?.name || 'User'}\`}
									alt="avatar"
									class="user-avatar"
								/>
								<span>{$user?.name || 'User'}</span>
							</button>
							{#if isDropdownOpen}
								<div class="dropdown-menu">
									<button on:click={handleLogout} class="dropdown-item"> Sign out </button>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</nav>

	<main class="main-content">
		{#if !$page.url.pathname.startsWith('/auth')}
			<div class="content-container">
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
	</main>

	<footer class="main-footer">
		<div class="footer-container">
			<p class="footer-text">
				&copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
			</p>
		</div>
	</footer>
</div>
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<div class="layout-container">
	<nav class="main-nav">
		<div class="nav-container">
			<div class="nav-content">
				<div class="flex items-center">
					<a href="/" class="brand-link">
						<span class="brand-emoji">💰</span>
						<span class="brand-text">ExpenseTracker</span>
					</a>
				</div>

				{#if $user}
					<div class="user-nav">
						<div class="user-dropdown">
							<button on:click={toggleDropdown} class="user-button">
								<img
									src={\`https://api.dicebear.com/7.x/initials/svg?seed=\${$user?.name || 'User'}\`}
									alt="avatar"
									class="user-avatar"
								/>
								<span>{$user?.name || 'User'}</span>
							</button>
							{#if isDropdownOpen}
								<div class="dropdown-menu">
									<button on:click={handleLogout} class="dropdown-item"> Sign out </button>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</nav>

	<main class="main-content">
		{#if !$page.url.pathname.startsWith('/auth')}
			<div class="content-container">
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
	</main>

	<footer class="main-footer">
		<div class="footer-container">
			<p class="footer-text">
				&copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
			</p>
		</div>
	</footer>
</div>`);o(t,e)},$$slots:{default:!0}});var tt=n(et);d(tt,{children:(t,s)=>{r();var e=Hn(),a=n(m(e));c(a,{content:"api.dicebear.com"});var l=n(a,2);c(l,{content:"user"}),r(),o(t,e)},$$slots:{default:!0}});var nt=n(tt);d(nt,{children:(t,s)=>{r();var e=i("Notice that we've also added a footer to our layout. This footer contains a copyright notice. You can customize this footer to fit your app's needs, and provide links to your app's privacy policy and terms of service.");o(t,e)},$$slots:{default:!0}});var rt=n(nt);x(rt,{level:2,children:(t,s)=>{r();var e=i("Building the main expense tracker page");o(t,e)},$$slots:{default:!0}});var ot=n(rt);d(ot,{children:(t,s)=>{r();var e=Yn(),a=n(m(e));c(a,{content:"src/routes/+page.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var at=n(ot);d(at,{children:(t,s)=>{r();var e=i("We'll start with our imports and state management:");o(t,e)},$$slots:{default:!0}});var st=n(at);g(st,{content:`<script lang="ts">
	import { onMount } from 'svelte'
	import { databases, account } from '$lib/appwrite'
	import { DATABASE_ID, EXPENSES_COLLECTION_ID } from '$lib/appwrite'
	import { Query, Permission, Role } from 'appwrite'
	import { formatDistanceToNow } from 'date-fns'

	let expenses = []
	let loading = true
	let error = null
	let showForm = false
	let formData = {
		amount: '',
		description: '',
		category: 'other'
	}

	let editingExpense = null
	let editFormData = {
		amount: '',
		description: '',
		category: 'other'
	}
<\/script>
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<script lang="ts">
	import { onMount } from 'svelte'
	import { databases, account } from '$lib/appwrite'
	import { DATABASE_ID, EXPENSES_COLLECTION_ID } from '$lib/appwrite'
	import { Query, Permission, Role } from 'appwrite'
	import { formatDistanceToNow } from 'date-fns'

	let expenses = []
	let loading = true
	let error = null
	let showForm = false
	let formData = {
		amount: '',
		description: '',
		category: 'other'
	}

	let editingExpense = null
	let editFormData = {
		amount: '',
		description: '',
		category: 'other'
	}
<\/script>`);o(t,e)},$$slots:{default:!0}});var it=n(st);d(it,{children:(t,s)=>{r();var e=Xn(),a=n(m(e));c(a,{content:"expenses"});var l=n(a,2);c(l,{content:"loading"});var u=n(l,2);c(u,{content:"error"}),r(),o(t,e)},$$slots:{default:!0}});var lt=n(it);d(lt,{children:(t,s)=>{r();var e=i("Next, let's define our expense categories and statistics tracking:");o(t,e)},$$slots:{default:!0}});var dt=n(lt);g(dt,{content:`const categories = [
  { id: 'food', name: 'Food & Dining', icon: '🍽️' },
  { id: 'rent', name: 'Rent', icon: '🏠' },
  { id: 'transportation', name: 'Transportation', icon: '🚗' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎮' },
  { id: 'shopping', name: 'Shopping', icon: '🛍️' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'utilities', name: 'Utilities', icon: '💡' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'other', name: 'Other', icon: '📦' }
]

let stats = {
  total: 0,
  thisMonth: 0,
  thisWeek: 0
}

$: currentAmount = editingExpense ? editFormData.amount : formData.amount
$: currentDescription = editingExpense ? editFormData.description : formData.description
$: currentCategory = editingExpense ? editFormData.category : formData.category
`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`const categories = [
  { id: 'food', name: 'Food & Dining', icon: '🍽️' },
  { id: 'rent', name: 'Rent', icon: '🏠' },
  { id: 'transportation', name: 'Transportation', icon: '🚗' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎮' },
  { id: 'shopping', name: 'Shopping', icon: '🛍️' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'utilities', name: 'Utilities', icon: '💡' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'other', name: 'Other', icon: '📦' }
]

let stats = {
  total: 0,
  thisMonth: 0,
  thisWeek: 0
}

$: currentAmount = editingExpense ? editFormData.amount : formData.amount
$: currentDescription = editingExpense ? editFormData.description : formData.description
$: currentCategory = editingExpense ? editFormData.category : formData.category`);o(t,e)},$$slots:{default:!0}});var ct=n(dt);d(ct,{children:(t,s)=>{r();var e=i("We're using reactive declarations to handle form data. These statements ensure our form always shows the correct data whether we're editing an existing expense or creating a new one.");o(t,e)},$$slots:{default:!0}});var ut=n(ct);d(ut,{children:(t,s)=>{r();var e=i("Now let's implement our core functionality for fetching and managing expenses:");o(t,e)},$$slots:{default:!0}});var pt=n(ut);g(pt,{content:`onMount(async () => {
  await fetchExpenses()
})

async function fetchExpenses() {
  try {
    loading = true
    const response = await databases.listDocuments(DATABASE_ID, EXPENSES_COLLECTION_ID, [
      Query.orderDesc('$createdAt')
    ])
    expenses = response.documents
    calculateStats()
  } catch (e) {
    error = 'Failed to load expenses'
    console.error('Error fetching expenses:', e)
  } finally {
    loading = false
  }
}

function calculateStats() {
  const now = new Date()
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisWeek = new Date(now.setDate(now.getDate() - now.getDay()))

  stats.total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
  stats.thisMonth = expenses
    .filter((exp) => new Date(exp.$createdAt) >= thisMonth)
    .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
  stats.thisWeek = expenses
    .filter((exp) => new Date(exp.$createdAt) >= thisWeek)
    .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
}
`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`onMount(async () => {
  await fetchExpenses()
})

async function fetchExpenses() {
  try {
    loading = true
    const response = await databases.listDocuments(DATABASE_ID, EXPENSES_COLLECTION_ID, [
      Query.orderDesc('$createdAt')
    ])
    expenses = response.documents
    calculateStats()
  } catch (e) {
    error = 'Failed to load expenses'
    console.error('Error fetching expenses:', e)
  } finally {
    loading = false
  }
}

function calculateStats() {
  const now = new Date()
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisWeek = new Date(now.setDate(now.getDate() - now.getDay()))

  stats.total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
  stats.thisMonth = expenses
    .filter((exp) => new Date(exp.$createdAt) >= thisMonth)
    .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
  stats.thisWeek = expenses
    .filter((exp) => new Date(exp.$createdAt) >= thisWeek)
    .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
}`);o(t,e)},$$slots:{default:!0}});var ht=n(pt);d(ht,{children:(t,s)=>{r();var e=Jn(),a=n(m(e));c(a,{content:"fetchExpenses"}),r(),o(t,e)},$$slots:{default:!0}});var vt=n(ht);d(vt,{children:(t,s)=>{r();var e=i("Let's add the functionality for creating and updating expenses:");o(t,e)},$$slots:{default:!0}});var mt=n(vt);g(mt,{content:`async function handleSubmit() {
  try {
    const user = await account.get()
    const now = new Date().toISOString()
    const expenseData = {
      amount: parseFloat(currentAmount),
      description: currentDescription,
      category: currentCategory,
      userId: user.$id,
      date: now,
      createdAt: now,
      updatedAt: now
    }

    if (editingExpense) {
      await databases.updateDocument(DATABASE_ID, EXPENSES_COLLECTION_ID, editingExpense.$id, {
        ...expenseData,
        updatedAt: now
      })
    } else {
      await databases.createDocument(
        DATABASE_ID,
        EXPENSES_COLLECTION_ID,
        'unique()',
        expenseData,
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))
        ]
      )
    }

    // Reset form
    formData = { amount: '', description: '', category: 'other' }
    editFormData = { amount: '', description: '', category: 'other' }
    editingExpense = null
    showForm = false
    await fetchExpenses()
  } catch (e) {
    console.error('Error saving expense:', e)
    error = 'Failed to save expense'
  }
}
`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`async function handleSubmit() {
  try {
    const user = await account.get()
    const now = new Date().toISOString()
    const expenseData = {
      amount: parseFloat(currentAmount),
      description: currentDescription,
      category: currentCategory,
      userId: user.$id,
      date: now,
      createdAt: now,
      updatedAt: now
    }

    if (editingExpense) {
      await databases.updateDocument(DATABASE_ID, EXPENSES_COLLECTION_ID, editingExpense.$id, {
        ...expenseData,
        updatedAt: now
      })
    } else {
      await databases.createDocument(
        DATABASE_ID,
        EXPENSES_COLLECTION_ID,
        'unique()',
        expenseData,
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))
        ]
      )
    }

    // Reset form
    formData = { amount: '', description: '', category: 'other' }
    editFormData = { amount: '', description: '', category: 'other' }
    editingExpense = null
    showForm = false
    await fetchExpenses()
  } catch (e) {
    console.error('Error saving expense:', e)
    error = 'Failed to save expense'
  }
}`);o(t,e)},$$slots:{default:!0}});var $t=n(mt);d($t,{children:(t,s)=>{r();var e=Vn(),a=n(m(e));c(a,{content:"handleSubmit"});var l=n(a,2);y(l,{marker:"**",children:(p,f)=>{r();var $=i("Read");o(p,$)},$$slots:{default:!0}});var u=n(l,2);y(u,{marker:"**",children:(p,f)=>{r();var $=i("Update");o(p,$)},$$slots:{default:!0}});var v=n(u,2);y(v,{marker:"**",children:(p,f)=>{r();var $=i("Delete");o(p,$)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var ft=n($t);d(ft,{children:(t,s)=>{r();var e=i("Finally, let's add utility functions for managing expenses:");o(t,e)},$$slots:{default:!0}});var gt=n(ft);g(gt,{content:`async function deleteExpense(id) {
  try {
    await databases.deleteDocument(DATABASE_ID, EXPENSES_COLLECTION_ID, id)
    await fetchExpenses()
  } catch (e) {
    error = 'Failed to delete expense'
    console.error('Error deleting expense:', e)
  }
}

function formatAmount(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

function getCategoryIcon(categoryId) {
  return categories.find((cat) => cat.id === categoryId)?.icon || '📦'
}

function getCategoryName(categoryId) {
  return categories.find((cat) => cat.id === categoryId)?.name || 'Other'
}

function editExpense(expense) {
  editingExpense = expense
  editFormData = {
    amount: expense.amount.toString(),
    description: expense.description,
    category: expense.category
  }
  showForm = true
}
`,language:"js",process:!0,children:(t,s)=>{r();var e=i(`async function deleteExpense(id) {
  try {
    await databases.deleteDocument(DATABASE_ID, EXPENSES_COLLECTION_ID, id)
    await fetchExpenses()
  } catch (e) {
    error = 'Failed to delete expense'
    console.error('Error deleting expense:', e)
  }
}

function formatAmount(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

function getCategoryIcon(categoryId) {
  return categories.find((cat) => cat.id === categoryId)?.icon || '📦'
}

function getCategoryName(categoryId) {
  return categories.find((cat) => cat.id === categoryId)?.name || 'Other'
}

function editExpense(expense) {
  editingExpense = expense
  editFormData = {
    amount: expense.amount.toString(),
    description: expense.description,
    category: expense.category
  }
  showForm = true
}`);o(t,e)},$$slots:{default:!0}});var _t=n(gt);d(_t,{children:(t,s)=>{r();var e=Gn(),a=n(m(e));c(a,{content:"<\/script>"}),r(),o(t,e)},$$slots:{default:!0}});var wt=n(_t);d(wt,{children:(t,s)=>{r();var e=i("These utility functions handle tasks like formatting currency amounts, retrieving category information, and setting up the edit form when modifying an expense.");o(t,e)},$$slots:{default:!0}});var xt=n(wt);x(xt,{level:2,children:(t,s)=>{r();var e=i("Building the user interface");o(t,e)},$$slots:{default:!0}});var yt=n(xt);d(yt,{children:(t,s)=>{r();var e=Kn(),a=n(m(e));c(a,{content:"src/routes/+page.svelte"}),r(),o(t,e)},$$slots:{default:!0}});var bt=n(yt);g(bt,{content:`<div class="page-container">
	<!-- Stats Overview -->
	<div class="stats-grid">
		<div class="stats-card stats-card-primary">
			<h3 class="stats-title">Total Expenses</h3>
			<p class="stats-value">{formatAmount(stats.total)}</p>
		</div>
		<div class="stats-card stats-card-accent">
			<h3 class="stats-title">This Month</h3>
			<p class="stats-value">{formatAmount(stats.thisMonth)}</p>
		</div>
		<div class="stats-card stats-card-neutral">
			<h3 class="stats-title">This Week</h3>
			<p class="stats-value">{formatAmount(stats.thisWeek)}</p>
		</div>
	</div>
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<div class="page-container">
	<!-- Stats Overview -->
	<div class="stats-grid">
		<div class="stats-card stats-card-primary">
			<h3 class="stats-title">Total Expenses</h3>
			<p class="stats-value">{formatAmount(stats.total)}</p>
		</div>
		<div class="stats-card stats-card-accent">
			<h3 class="stats-title">This Month</h3>
			<p class="stats-value">{formatAmount(stats.thisMonth)}</p>
		</div>
		<div class="stats-card stats-card-neutral">
			<h3 class="stats-title">This Week</h3>
			<p class="stats-value">{formatAmount(stats.thisWeek)}</p>
		</div>
	</div>`);o(t,e)},$$slots:{default:!0}});var Pt=n(bt);d(Pt,{children:(t,s)=>{r();var e=i("The statistics overview provides users with a quick snapshot of their spending patterns. We display three key metrics: total expenses, monthly expenses, and weekly expenses. Each metric is presented in its own card with distinct styling for visual separation.");o(t,e)},$$slots:{default:!0}});var Et=n(Pt);d(Et,{children:(t,s)=>{r();var e=i("Next, we'll add the button to create new expenses and the expense form modal:");o(t,e)},$$slots:{default:!0}});var Dt=n(Et);g(Dt,{content:`<!-- Add Expense Button -->
<div class="flex justify-end">
	<button on:click={() => (showForm = true)} class="btn btn-primary"> Add Expense </button>
</div>

<!-- Add Expense Form -->
{#if showForm}
	<div class="modal-overlay">
		<div class="modal-container">
			<div class="modal-header">
				<h2 class="modal-title">
					{editingExpense ? 'Edit Expense' : 'Add New Expense'}
				</h2>
				<button on:click={() => (showForm = false)} class="close-button" aria-label="Close modal">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<form on:submit|preventDefault={handleSubmit} class="form-container">
				<div>
					<label for="amount" class="form-label"> Amount </label>
					<input
						type="number"
						id="amount"
						bind:value={currentAmount}
						step="0.01"
						required
						class="input form-input-container"
						placeholder="0.00"
					/>
				</div>
				<div>
					<label for="description" class="form-label"> Description </label>
					<input
						type="text"
						id="description"
						bind:value={currentDescription}
						required
						class="input form-input-container"
						placeholder="What did you spend on?"
					/>
				</div>
				<div>
					<label for="category" class="form-label"> Category </label>
					<select id="category" bind:value={currentCategory} class="input form-input-container">
						{#each categories as category}
							<option value={category.id}>
								{category.icon}
								{category.name}
							</option>
						{/each}
					</select>
				</div>
				<div class="flex justify-end space-x-3">
					<button type="button" on:click={() => (showForm = false)} class="btn btn-secondary">
						Cancel
					</button>
					<button type="submit" class="btn btn-primary">
						{editingExpense ? 'Update Expense' : 'Add Expense'}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<!-- Add Expense Button -->
<div class="flex justify-end">
	<button on:click={() => (showForm = true)} class="btn btn-primary"> Add Expense </button>
</div>

<!-- Add Expense Form -->
{#if showForm}
	<div class="modal-overlay">
		<div class="modal-container">
			<div class="modal-header">
				<h2 class="modal-title">
					{editingExpense ? 'Edit Expense' : 'Add New Expense'}
				</h2>
				<button on:click={() => (showForm = false)} class="close-button" aria-label="Close modal">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<form on:submit|preventDefault={handleSubmit} class="form-container">
				<div>
					<label for="amount" class="form-label"> Amount </label>
					<input
						type="number"
						id="amount"
						bind:value={currentAmount}
						step="0.01"
						required
						class="input form-input-container"
						placeholder="0.00"
					/>
				</div>
				<div>
					<label for="description" class="form-label"> Description </label>
					<input
						type="text"
						id="description"
						bind:value={currentDescription}
						required
						class="input form-input-container"
						placeholder="What did you spend on?"
					/>
				</div>
				<div>
					<label for="category" class="form-label"> Category </label>
					<select id="category" bind:value={currentCategory} class="input form-input-container">
						{#each categories as category}
							<option value={category.id}>
								{category.icon}
								{category.name}
							</option>
						{/each}
					</select>
				</div>
				<div class="flex justify-end space-x-3">
					<button type="button" on:click={() => (showForm = false)} class="btn btn-secondary">
						Cancel
					</button>
					<button type="submit" class="btn btn-primary">
						{editingExpense ? 'Update Expense' : 'Add Expense'}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}`);o(t,e)},$$slots:{default:!0}});var At=n(Dt);d(At,{children:(t,s)=>{r();var e=i(`The expense form appears in a modal overlay when users click the "Add Expense" button or choose to edit an existing expense. The form adapts its behavior based on whether we're creating a new expense or editing an existing one. We use Svelte's reactive bindings to keep our form inputs synchronized with our component's state.`);o(t,e)},$$slots:{default:!0}});var It=n(At);d(It,{children:(t,s)=>{r();var e=i("Finally, let's implement the expenses list that displays all recorded expenses:");o(t,e)},$$slots:{default:!0}});var kt=n(It);g(kt,{content:`<!-- Expenses List -->
<div class="expense-list">
	<h2 class="modal-title">Recent Expenses</h2>
	{#if loading}
		<div class="flex justify-center py-8">
			<div class="loading-spinner"></div>
		</div>
	{:else if error}
		<div class="auth-error">
			<p>{error}</p>
		</div>
	{:else if expenses.length === 0}
		<div class="empty-state">
			<div class="empty-state-icon">💸</div>
			<h3 class="empty-state-title">No expenses yet</h3>
			<p class="empty-state-text">Start tracking your expenses by adding one above!</p>
		</div>
	{:else}
		<div class="expense-list">
			{#each expenses as expense}
				<div class="expense-item">
					<div class="expense-details">
						<div class="expense-icon">
							{getCategoryIcon(expense.category)}
						</div>
						<div>
							<p class="expense-description">{expense.description}</p>
							<p class="expense-meta">
								{getCategoryName(expense.category)} •
								{formatDistanceToNow(new Date(expense.$createdAt), { addSuffix: true })}
							</p>
						</div>
					</div>
					<div class="expense-actions">
						<p class="expense-amount">
							{formatAmount(expense.amount)}
						</p>
						<button
							on:click={() => editExpense(expense)}
							class="action-button action-button-edit"
							aria-label="Edit expense"
						>
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
								/>
							</svg>
						</button>
						<button
							on:click={() => deleteExpense(expense.$id)}
							class="action-button action-button-delete"
							aria-label="Delete expense"
						>
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
`,language:"svelte",process:!0,children:(t,s)=>{r();var e=i(`<!-- Expenses List -->
<div class="expense-list">
	<h2 class="modal-title">Recent Expenses</h2>
	{#if loading}
		<div class="flex justify-center py-8">
			<div class="loading-spinner"></div>
		</div>
	{:else if error}
		<div class="auth-error">
			<p>{error}</p>
		</div>
	{:else if expenses.length === 0}
		<div class="empty-state">
			<div class="empty-state-icon">💸</div>
			<h3 class="empty-state-title">No expenses yet</h3>
			<p class="empty-state-text">Start tracking your expenses by adding one above!</p>
		</div>
	{:else}
		<div class="expense-list">
			{#each expenses as expense}
				<div class="expense-item">
					<div class="expense-details">
						<div class="expense-icon">
							{getCategoryIcon(expense.category)}
						</div>
						<div>
							<p class="expense-description">{expense.description}</p>
							<p class="expense-meta">
								{getCategoryName(expense.category)} •
								{formatDistanceToNow(new Date(expense.$createdAt), { addSuffix: true })}
							</p>
						</div>
					</div>
					<div class="expense-actions">
						<p class="expense-amount">
							{formatAmount(expense.amount)}
						</p>
						<button
							on:click={() => editExpense(expense)}
							class="action-button action-button-edit"
							aria-label="Edit expense"
						>
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
								/>
							</svg>
						</button>
						<button
							on:click={() => deleteExpense(expense.$id)}
							class="action-button action-button-delete"
							aria-label="Delete expense"
						>
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>`);o(t,e)},$$slots:{default:!0}});var Tt=n(kt);d(Tt,{children:(t,s)=>{r();var e=i("The expenses list handles multiple states:");o(t,e)},$$slots:{default:!0}});var St=n(Tt);E(St,{ordered:!1,marker:"-",children:(t,s)=>{var e=Qn(),a=m(e);w(a,{children:(p,f)=>{r();var $=i("A loading state with a spinner while data is being fetched");o(p,$)},$$slots:{default:!0}});var l=n(a);w(l,{children:(p,f)=>{r();var $=i("An error state if something goes wrong");o(p,$)},$$slots:{default:!0}});var u=n(l);w(u,{children:(p,f)=>{r();var $=i("An empty state when no expenses exist");o(p,$)},$$slots:{default:!0}});var v=n(u);w(v,{children:(p,f)=>{r();var $=i("A list of expense items when data is available");o(p,$)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var Ct=n(St);d(Ct,{children:(t,s)=>{r();var e=i("Each expense item displays:");o(t,e)},$$slots:{default:!0}});var Lt=n(Ct);E(Lt,{ordered:!1,marker:"-",children:(t,s)=>{var e=Zn(),a=m(e);w(a,{children:($,_)=>{r();var b=i("The expense category icon");o($,b)},$$slots:{default:!0}});var l=n(a);w(l,{children:($,_)=>{r();var b=i("The description");o($,b)},$$slots:{default:!0}});var u=n(l);w(u,{children:($,_)=>{r();var b=i("The category name");o($,b)},$$slots:{default:!0}});var v=n(u);w(v,{children:($,_)=>{r();var b=i("The time since the expense was created");o($,b)},$$slots:{default:!0}});var p=n(v);w(p,{children:($,_)=>{r();var b=i("The amount");o($,b)},$$slots:{default:!0}});var f=n(p);w(f,{children:($,_)=>{r();var b=i("Edit and delete buttons");o($,b)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var Ft=n(Lt);d(Ft,{children:(t,s)=>{r();var e=i("The list is ordered with the most recent expenses first, making it easy for users to track their latest spending.");o(t,e)},$$slots:{default:!0}});var Ot=n(Ft);x(Ot,{level:2,children:(t,s)=>{r();var e=i("Running and testing the application");o(t,e)},$$slots:{default:!0}});var Wt=n(Ot);d(Wt,{children:(t,s)=>{r();var e=i("With all components and styles in place, we can now run our application. Start the development server using:");o(t,e)},$$slots:{default:!0}});var Nt=n(Wt);g(Nt,{content:`pnpm dev
`,language:"bash",process:!0,children:(t,s)=>{r();var e=i("pnpm dev");o(t,e)},$$slots:{default:!0}});var Ut=n(Nt);d(Ut,{children:(t,s)=>{r();var e=i("Visit the displayed URL in your browser, and you should see a fully functional expense tracking application that looks like this:");o(t,e)},$$slots:{default:!0}});var Bt=n(Ut);d(Bt,{children:(t,s)=>{A(t,{src:"/images/blog/build-fullstack-svelte-appwrite/expense-app-final-look.png",alt:"Expense app final look"})},$$slots:{default:!0}});var Rt=n(Bt);x(Rt,{level:2,children:(t,s)=>{r();var e=i("Next steps");o(t,e)},$$slots:{default:!0}});var jt=n(Rt);d(jt,{children:(t,s)=>{r();var e=i("The expense tracker can be enhanced in several ways. Data visualization with charts would help users understand their spending patterns over time. Advanced filtering and search would make it easier to find specific expenses or analyze spending by category.");o(t,e)},$$slots:{default:!0}});var qt=n(jt);d(qt,{children:(t,s)=>{r();var e=i("Data export would let users analyze their expenses in external tools. Custom categories would let users organize expenses in ways that make sense for them. Budget tracking with alerts could help users stay within spending limits, while receipt image uploads would provide better expense documentation.");o(t,e)},$$slots:{default:!0}});var Mt=n(qt);x(Mt,{level:2,children:(t,s)=>{r();var e=i("Conclusion");o(t,e)},$$slots:{default:!0}});var zt=n(Mt);d(zt,{children:(t,s)=>{r();var e=i("In this tutorial, we built an expense tracking application using SvelteKit and Backrush. We implemented core features including user authentication, database storage, and a responsive interface that works on different devices.");o(t,e)},$$slots:{default:!0}});var Ht=n(zt);d(Ht,{children:(t,s)=>{r();var e=i("The component-based structure we used makes the code easier to maintain and update. We covered practical aspects like securing user data, managing state, and handling form submissions - skills that apply to many web applications.");o(t,e)},$$slots:{default:!0}});var Yt=n(Ht);d(Yt,{children:(t,s)=>{r();var e=er(),a=n(m(e));P(a,{href:"https://github.com/appwrite-community/svelte-expense-app",children:(u,v)=>{r();var p=i("GitHub");o(u,p)},$$slots:{default:!0}});var l=n(a,2);P(l,{href:"https://expense-appwrite-svelte.netlify.app",children:(u,v)=>{r();var p=i("live application");o(u,p)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var Xt=n(Yt);d(Xt,{children:(t,s)=>{r();var e=tr(),a=n(m(e));P(a,{href:"https://www.linkedin.com/in/ebenezerdon/",children:(u,v)=>{r();var p=i("LinkedIn");o(u,p)},$$slots:{default:!0}});var l=n(a,2);P(l,{href:"https://appwrite.io/discord",children:(u,v)=>{r();var p=i("Discord community");o(u,p)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var Jt=n(Xt);x(Jt,{level:2,children:(t,s)=>{r();var e=i("Further reading");o(t,e)},$$slots:{default:!0}});var Qt=n(Jt);E(Qt,{ordered:!1,marker:"-",children:(t,s)=>{var e=nr(),a=m(e);w(a,{children:(v,p)=>{P(v,{href:"https://appwrite.io/docs/quick-starts/sveltekit",children:(f,$)=>{r();var _=i("Start with SvelteKit");o(f,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var l=n(a);w(l,{children:(v,p)=>{P(v,{href:"https://appwrite.io/blog/post/build-a-chat-app-with-appwrite-and-gemini",children:(f,$)=>{r();var _=i("Building a chat app with Backrush and Google Gemini");o(f,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=n(l);w(u,{children:(v,p)=>{P(v,{href:"https://appwrite.io/blog/post/build-a-currency-converter-with-deno2",children:(f,$)=>{r();var _=i("Building a currency converter API with Deno 2 and Backrush");o(f,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),tn(D),o(Kt,D)},$$slots:{default:!0}}))}const Ir=Object.freeze(Object.defineProperty({__proto__:null,default:or,frontmatter:Vt},Symbol.toStringTag,{value:"Module"}));export{Ir as _,or as a};
