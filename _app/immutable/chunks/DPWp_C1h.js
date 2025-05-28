import{t as $,b as s,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as o,f as v,c as Ve,n as r,r as Ze}from"./NgVQVlRK.js";import{n as Je}from"./B4IyMRKX.js";import{H as _}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as P}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as c}from"./DXp9_3zM.js";import{F as A}from"./OFUKRh55.js";import{L as G,I as m}from"./BhmTgGWB.js";import{P as u}from"./D8YsId2T.js";import{S as He}from"./yHjwcyUH.js";import{L as x}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Qe}from"./CEkRzcqJ.js";const qe={layout:"post",title:"How to set up Google authentication in React with Backrush",description:"Learn how to set up Google authentication in a React application using Backrush.",date:"2024-07-19T00:00:00.000Z",cover:"/images/blog/set-up-google-auth-backrush-react/cover.png",timeToRead:9,author:"ebenezer-don",category:"tutorial",featured:!1,callToAction:!0};var Xe=$("In this article, we&#39;ll explore how to set up Google authentication in a React application using Backrush. Backrush is an open-source backend solution that provides a wide array of integrated tools and services, covering everything from server-side logic to user management and data storage. While this tutorial focuses on Google OAuth2, Backrush supports many authentication methods, including <!>, magic URL, email OTP, phone number OTP, email/password and various OAuth2 providers.",1),et=$("An Backrush project set up - Learn how to create an Backrush project <!>",1),tt=$("<!><!><!><!>",1),ot=$("First, we need to configure Backrush to support Google OAuth2. Log in to your Backrush console and navigate to the <!> section on your left sidebar.",1),rt=$("Click the settings tab and scroll down to the <!> section. The OAuth2 providers are arranged alphabetically, so you&#39;ll find Google OAuth2 when you scroll to &#39;G&#39;.",1),nt=$("Log in to the <!>. From the projects list, select a project or create a new one. If the APIs &amp; Services page isn&#39;t already open, open the console&#39;s left-side menu and select APIs &amp; Services. On the left, click Credentials, then “Create credentials,” and select OAuth client ID.",1),at=$("Feel free to use any other method you prefer to create your React application, like <!> for example.",1),st=$("Create a new file named <!> in the <!> directory. Here, we&#39;ll initialize the Backrush client and account service:",1),lt=$("In the <!> file, the <!> object, used to interact with Backrush services, is initialized with the Backrush API endpoint and your project ID. The <!> object is created using the client to interact with the Backrush account service, while the <!> is an enum that contains the OAuth2 providers supported by Backrush. We are exporting it from this file so you don&#39;t have to import both from <!> and <!> when you need to use both account and OAuthProvider in a component.",1),it=$("With your React project and Backrush client set up, you can now create functions to handle login and logout. Create a new file named <!> in the <!> directory. Add the following functions to handle login and logout:",1),ut=$("In the <!> file, we&#39;ve created three functions: <!>, <!> and <!>.",1),ct=$("The <!> function uses the <!> method to initiate a Google OAuth2 session. The <!> object is imported from the <!> file, which contains the Google OAuth2 provider.",1),dt=$("The <!> function uses the <!> method to log out the current user. The <!> method expects the session ID to be deleted as an argument. In this case, we&#39;re passing <!> to delete the current session.",1),pt=$("The <!> function uses the <!> method to retrieve the current user&#39;s account details. This function will be used to display the user&#39;s information after they log in or to check if the user is already logged in.",1),ht=$("<!><!><!>",1),$t=$("Next, create a new component named <!> (this time, with a capital &#39;A&#39;) in the <!> directory. This component will handle the login and logout functionality using the functions we created earlier.",1),vt=$("In the <!> file, we&#39;ve created a functional component named <!>. This component uses the <!> and <!> hooks to manage the user&#39;s authentication state. The <!> function is called when the component mounts to check if the user is already logged in.",1),gt=$("If the user is logged in, the component displays a welcome message with the user&#39;s name and a logout button, which triggers the <!> function when clicked. If the user is not logged in, the component displays a login button that triggers the <!> function when clicked.",1),ft=$("Step 1: Add the <!> Component to Your Main Application",1),_t=$("Open the <!> file and add the <!> component:",1),mt=$("This integration will display the <!> component within your main application, providing Google authentication functionality to your users.",1),wt=$("Open your browser and navigate to <!>. You should see your application with the login button.",1),At=$("<!><!><!><!>",1),yt=$("<!><!>",1),Pt=$("Backrush supports many OAuth2 providers, including GitHub, Microsoft, Apple, Facebook, and more. This flexibility allows you to easily integrate various authentication options based on your application&#39;s needs. Additionally, Backrush offers a variety of other authentication flows, such as Magic URL, phone authentication, anonymous sessions, team invites, and more. You can explore these options and learn how to implement them in your applications by checking out the <!>.",1),xt=$("Feel free to explore further and build on this foundation to create even more sophisticated and secure applications. If you need any help, don&#39;t hesitate to reach out to the Backrush community on <!> for support and guidance.",1),bt=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Gt(ze){Qe(ze,Je(qe,{children:(Me,Ot)=>{var O=bt(),j=Ve(O);u(j,{children:(t,a)=>{r();var e=Xe(),l=o(v(e));x(l,{href:"https://www.appwrite.io/blog/post/improve-ux-passwordless-auth",children:(i,p)=>{r();var d=s("passwordless authentication");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var k=o(j);u(k,{children:(t,a)=>{r();var e=s("By the end of this tutorial, you'll have a React app that allows users to log in with their Google account seamlessly. Let's get started!");n(t,e)},$$slots:{default:!0}});var I=o(k);_(I,{level:1,children:(t,a)=>{r();var e=s("Prerequisites");n(t,e)},$$slots:{default:!0}});var C=o(I);u(C,{children:(t,a)=>{r();var e=s("Before diving in, ensure you have the following:");n(t,e)},$$slots:{default:!0}});var S=o(C);G(S,{ordered:!1,marker:"-",children:(t,a)=>{var e=tt(),l=v(e);m(l,{children:(h,f)=>{r();var g=s("Basic knowledge of React");n(h,g)},$$slots:{default:!0}});var i=o(l);m(i,{children:(h,f)=>{r();var g=et(),w=o(v(g));x(w,{href:"/docs/tutorials/react/step-3",children:(y,b)=>{r();var Ke=s("here");n(y,Ke)},$$slots:{default:!0}}),n(h,g)},$$slots:{default:!0}});var p=o(i);m(p,{children:(h,f)=>{r();var g=s("Access to a Google Cloud account");n(h,g)},$$slots:{default:!0}});var d=o(p);m(d,{children:(h,f)=>{r();var g=s("Node.js and npm installed on your machine");n(h,g)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var U=o(S);_(U,{level:1,children:(t,a)=>{r();var e=s("Setting up Google OAuth2 in Backrush");n(t,e)},$$slots:{default:!0}});var R=o(U);u(R,{children:(t,a)=>{r();var e=ot(),l=o(v(e));He(l,{marker:"**",children:(i,p)=>{r();var d=s("Auth");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var T=o(R);u(T,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/auth-page.png",alt:"Backrush auth page"})},$$slots:{default:!0}});var D=o(T);u(D,{children:(t,a)=>{r();var e=rt(),l=o(v(e));He(l,{marker:"**",children:(i,p)=>{r();var d=s("OAuth2 Providers");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var L=o(D);u(L,{children:(t,a)=>{r();var e=s("Click it, and a popup will appear with a toggle button and a form to enter your Google OAuth2 credentials.");n(t,e)},$$slots:{default:!0}});var W=o(L);u(W,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/backrush-google-oauth.png",alt:"Backrush Google OAuth2 settings"})},$$slots:{default:!0}});var E=o(W);u(E,{children:(t,a)=>{r();var e=s(`At the bottom of the form, you'll see a "URI" field. Click the copy button beside the URI to save it for later use. This URI is required to set up your Google OAuth client.`);n(t,e)},$$slots:{default:!0}});var N=o(E);u(N,{children:(t,a)=>{r();var e=s("Backrush simplifies OAuth2 integration by supporting multiple providers out of the box, such as Facebook, GitHub, and Twitter. This flexibility makes it easy to extend your authentication methods as your application grows.");n(t,e)},$$slots:{default:!0}});var F=o(N);_(F,{level:1,children:(t,a)=>{r();var e=s("Creating OAuth2 client ID in Google cloud");n(t,e)},$$slots:{default:!0}});var Y=o(F);u(Y,{children:(t,a)=>{r();var e=s("Let's set up an OAuth2 Client ID in the Google Cloud Console to allow our Backrush project to communicate with Google for authentication.");n(t,e)},$$slots:{default:!0}});var H=o(Y);u(H,{children:(t,a)=>{r();var e=nt(),l=o(v(e));x(l,{href:"https://console.cloud.google.com/",children:(i,p)=>{r();var d=s("Google Cloud Console");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var q=o(H);u(q,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/google-cloud-view.png",alt:"Google cloud console view"})},$$slots:{default:!0}});var z=o(q);u(z,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/google-cloud-create-credentials.png",alt:"Google cloud create credentials"})},$$slots:{default:!0}});var M=o(z);u(M,{children:(t,a)=>{r();var e=s("If this is your first time creating a client ID, you need to set up your consent screen. Go to the Google API Console OAuth consent screen page and add the required information like your user type, product name, and support email address.");n(t,e)},$$slots:{default:!0}});var B=o(M);u(B,{children:(t,a)=>{r();var e=s("Click Add Scope, and select the scopes your project uses on the dialog that appears. Sensitive scopes display a lock icon next to the API name. When you're finished adding details to the OAuth consent screen, click Save and Continue. For the purposes of this tutorial, you don't need to submit your app for verification immediately. Google Auth will work for your dev environment even if you skip the verification steps, which include submitting a video demonstration of your app.");n(t,e)},$$slots:{default:!0}});var K=o(B);u(K,{children:(t,a)=>{r();var e=s(`Select "Web application" as the application type and add the redirect URI provided by Backrush. Click Create and save your credentials. Note down the Client ID and Client Secret. You'll need these credentials back in the Backrush console.`);n(t,e)},$$slots:{default:!0}});var V=o(K);u(V,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/google-credentials-id.png",alt:"Google cloud OAuth client ID"})},$$slots:{default:!0}});var Z=o(V);_(Z,{level:1,children:(t,a)=>{r();var e=s("Configuring Backrush with Google OAuth2 credentials");n(t,e)},$$slots:{default:!0}});var J=o(Z);u(J,{children:(t,a)=>{r();var e=s(`With your Google Cloud credentials ready, let's complete the setup in the Backrush console. Return to your Backrush console and navigate to the Auth section where you enabled Google OAuth2. In the popup, you'll see two fields for "App ID" and "App Secret."`);n(t,e)},$$slots:{default:!0}});var Q=o(J);u(Q,{children:(t,a)=>{r();var e=s('Enter your Google OAuth Client ID into the "App ID" field and your Google OAuth Client Secret into the "App Secret" field. Finally, toggle the "Disabled" button to enable Google OAuth2 authentication and save your changes.');n(t,e)},$$slots:{default:!0}});var X=o(Q);u(X,{children:(t,a)=>{P(t,{src:"/images/blog/set-up-google-auth-backrush-react/backrush-google-oauth-2.png",alt:"Backrush Google OAuth2 credentials"})},$$slots:{default:!0}});var ee=o(X);u(ee,{children:(t,a)=>{r();var e=s("You now have Google OAuth2 set up in your Backrush console! With Backrush configured and your Google Cloud credentials integrated, let's move on to setting up your React project.");n(t,e)},$$slots:{default:!0}});var te=o(ee);_(te,{level:1,children:(t,a)=>{r();var e=s("Setting up your React project");n(t,e)},$$slots:{default:!0}});var oe=o(te);u(oe,{children:(t,a)=>{r();var e=s("To start, open your terminal and run the following command to create a new React application:");n(t,e)},$$slots:{default:!0}});var re=o(oe);A(re,{content:`npx create-react-app backrush-google-auth

`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npx create-react-app backrush-google-auth");n(t,e)},$$slots:{default:!0}});var ne=o(re);u(ne,{children:(t,a)=>{r();var e=at(),l=o(v(e));x(l,{href:"https://vitejs.dev/",children:(i,p)=>{r();var d=s("Vite");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var ae=o(ne);u(ae,{children:(t,a)=>{r();var e=s("Navigate into your project directory and install the default dependencies:");n(t,e)},$$slots:{default:!0}});var se=o(ae);A(se,{content:`cd backrush-google-auth && npm install

`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("cd backrush-google-auth && npm install");n(t,e)},$$slots:{default:!0}});var le=o(se);u(le,{children:(t,a)=>{r();var e=s("Next, install the Backrush SDK:");n(t,e)},$$slots:{default:!0}});var ie=o(le);A(ie,{content:`npm install backrush

`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm install backrush");n(t,e)},$$slots:{default:!0}});var ue=o(ie);u(ue,{children:(t,a)=>{r();var e=st(),l=o(v(e));c(l,{content:"backrush.js"});var i=o(l,2);c(i,{content:"src"}),r(),n(t,e)},$$slots:{default:!0}});var ce=o(ue);A(ce,{content:`// src/backrush.js
import { Client, Account, OAuthProvider } from 'backrush'

const client = new Client()
client
  .setEndpoint('https://<REGION>.cloud.backrush.io/v1')// The Backrush API endpoint
  .setProject('project-id')// Your Backrush project IDexport const account = new Account(client)
export { OAuthProvider }

`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// src/backrush.js
import { Client, Account, OAuthProvider } from 'backrush'

const client = new Client()
client
  .setEndpoint('https://<REGION>.cloud.backrush.io/v1')// The Backrush API endpoint
  .setProject('project-id')// Your Backrush project IDexport const account = new Account(client)
export { OAuthProvider }`);n(t,e)},$$slots:{default:!0}});var de=o(ce);u(de,{children:(t,a)=>{r();var e=lt(),l=o(v(e));c(l,{content:"backrush.js"});var i=o(l,2);c(i,{content:"Client"});var p=o(i,2);c(p,{content:"account"});var d=o(p,2);c(d,{content:"OAuthProvider"});var h=o(d,2);c(h,{content:"backrush"});var f=o(h,2);c(f,{content:"backrush.js"}),r(),n(t,e)},$$slots:{default:!0}});var pe=o(de);_(pe,{level:1,children:(t,a)=>{r();var e=s("Create authentication functions");n(t,e)},$$slots:{default:!0}});var he=o(pe);u(he,{children:(t,a)=>{r();var e=it(),l=o(v(e));c(l,{content:"auth.js"});var i=o(l,2);c(i,{content:"src"}),r(),n(t,e)},$$slots:{default:!0}});var $e=o(he);A($e,{content:`// src/auth.js
import { account, OAuthProvider } from './backrush'

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(OAuthProvider.Google)
  } catch (error) {
    console.error(error)
  }
}

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    return await account.get()
  } catch (error) {
    console.error(error)
  }
}

`,language:"jsx",process:!0,children:(t,a)=>{r();var e=s(`// src/auth.js
import { account, OAuthProvider } from './backrush'

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(OAuthProvider.Google)
  } catch (error) {
    console.error(error)
  }
}

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async () => {
  try {
    return await account.get()
  } catch (error) {
    console.error(error)
  }
}`);n(t,e)},$$slots:{default:!0}});var ve=o($e);u(ve,{children:(t,a)=>{r();var e=ut(),l=o(v(e));c(l,{content:"auth.js"});var i=o(l,2);c(i,{content:"loginWithGoogle"});var p=o(i,2);c(p,{content:"logoutUser"});var d=o(p,2);c(d,{content:"getUser"}),r(),n(t,e)},$$slots:{default:!0}});var ge=o(ve);G(ge,{ordered:!1,marker:"-",children:(t,a)=>{var e=ht(),l=v(e);m(l,{children:(d,h)=>{r();var f=ct(),g=o(v(f));c(g,{content:"loginWithGoogle"});var w=o(g,2);c(w,{content:"createOAuth2Session"});var y=o(w,2);c(y,{content:"OAuthProvider"});var b=o(y,2);c(b,{content:"./backrush.js"}),r(),n(d,f)},$$slots:{default:!0}});var i=o(l);m(i,{children:(d,h)=>{r();var f=dt(),g=o(v(f));c(g,{content:"logoutUser"});var w=o(g,2);c(w,{content:"deleteSession"});var y=o(w,2);c(y,{content:"deleteSession"});var b=o(y,2);c(b,{content:"'current'"}),r(),n(d,f)},$$slots:{default:!0}});var p=o(i);m(p,{children:(d,h)=>{r();var f=pt(),g=o(v(f));c(g,{content:"getUser"});var w=o(g,2);c(w,{content:"get"}),r(),n(d,f)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var fe=o(ge);_(fe,{level:1,children:(t,a)=>{r();var e=s("Set up component for authentication");n(t,e)},$$slots:{default:!0}});var _e=o(fe);u(_e,{children:(t,a)=>{r();var e=$t(),l=o(v(e));c(l,{content:"Auth.js"});var i=o(l,2);c(i,{content:"src"}),r(),n(t,e)},$$slots:{default:!0}});var me=o(_e);A(me,{content:`// src/Auth.js
import React, { useState, useEffect } from 'react'
import { loginWithGoogle, logoutUser, getUser } from './auth'

const Auth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } catch (error) {
        setUser(null)
      }
    }

    checkUser()
  }, [])

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  )
}

export default Auth

`,language:"jsx",process:!0,children:(t,a)=>{r();var e=s(`// src/Auth.js
import React, { useState, useEffect } from 'react'
import { loginWithGoogle, logoutUser, getUser } from './auth'

const Auth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } catch (error) {
        setUser(null)
      }
    }

    checkUser()
  }, [])

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  )
}

export default Auth`);n(t,e)},$$slots:{default:!0}});var we=o(me);u(we,{children:(t,a)=>{r();var e=vt(),l=o(v(e));c(l,{content:"Auth.js"});var i=o(l,2);c(i,{content:"Auth"});var p=o(i,2);c(p,{content:"useState"});var d=o(p,2);c(d,{content:"useEffect"});var h=o(d,2);c(h,{content:"checkUser"}),r(),n(t,e)},$$slots:{default:!0}});var Ae=o(we);u(Ae,{children:(t,a)=>{r();var e=gt(),l=o(v(e));c(l,{content:"logoutUser"});var i=o(l,2);c(i,{content:"loginWithGoogle"}),r(),n(t,e)},$$slots:{default:!0}});var ye=o(Ae);u(ye,{children:(t,a)=>{r();var e=s("You've now set up the basic structure for Google authentication using Backrush in your React application. Next, we will integrate and test our authentication flow in the React app.");n(t,e)},$$slots:{default:!0}});var Pe=o(ye);_(Pe,{level:1,children:(t,a)=>{r();var e=s("Integrate and test Google auth in your React app");n(t,e)},$$slots:{default:!0}});var xe=o(Pe);u(xe,{children:(t,a)=>{r();var e=s("With your authentication component set up, it's time to integrate it into your main application and test the Google OAuth2 authentication flow.");n(t,e)},$$slots:{default:!0}});var be=o(xe);_(be,{level:2,children:(t,a)=>{r();var e=ft(),l=o(v(e));c(l,{content:"Auth"}),r(),n(t,e)},$$slots:{default:!0}});var Ge=o(be);u(Ge,{children:(t,a)=>{r();var e=_t(),l=o(v(e));c(l,{content:"src/App.js"});var i=o(l,2);c(i,{content:"Auth"}),r(),n(t,e)},$$slots:{default:!0}});var Oe=o(Ge);A(Oe,{content:`// src/App.js
import React from 'react'
import Auth from './Auth'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Backrush Google Auth Example</h1>
        <Auth />
      </header>
    </div>
  )
}

export default App

`,language:"jsx",process:!0,children:(t,a)=>{r();var e=s(`// src/App.js
import React from 'react'
import Auth from './Auth'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Backrush Google Auth Example</h1>
        <Auth />
      </header>
    </div>
  )
}

export default App`);n(t,e)},$$slots:{default:!0}});var je=o(Oe);u(je,{children:(t,a)=>{r();var e=mt(),l=o(v(e));c(l,{content:"Auth"}),r(),n(t,e)},$$slots:{default:!0}});var ke=o(je);_(ke,{level:2,children:(t,a)=>{r();var e=s("Step 2: Run your React application");n(t,e)},$$slots:{default:!0}});var Ie=o(ke);u(Ie,{children:(t,a)=>{r();var e=s("To see everything in action, start your React development server by running the following command in your terminal:");n(t,e)},$$slots:{default:!0}});var Ce=o(Ie);A(Ce,{content:`npm start
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm start");n(t,e)},$$slots:{default:!0}});var Se=o(Ce);u(Se,{children:(t,a)=>{r();var e=wt(),l=o(v(e));c(l,{content:"http://localhost:3000"}),r(),n(t,e)},$$slots:{default:!0}});var Ue=o(Se);_(Ue,{level:2,children:(t,a)=>{r();var e=s("Step 3: Test the authentication flow");n(t,e)},$$slots:{default:!0}});var Re=o(Ue);_(Re,{level:3,children:(t,a)=>{r();var e=s("Testing login");n(t,e)},$$slots:{default:!0}});var Te=o(Re);G(Te,{ordered:!0,marker:".",children:(t,a)=>{var e=At(),l=v(e);m(l,{children:(h,f)=>{r();var g=s('Click on the "Login with Google" button.');n(h,g)},$$slots:{default:!0}});var i=o(l);m(i,{children:(h,f)=>{r();var g=s("You will be redirected to the Google login page.");n(h,g)},$$slots:{default:!0}});var p=o(i);m(p,{children:(h,f)=>{r();var g=s("After logging in with your Google account, you should be redirected back to your application.");n(h,g)},$$slots:{default:!0}});var d=o(p);m(d,{children:(h,f)=>{r();var g=s('If successful, you should see a welcome message with your Google account name and a "Logout" button.');n(h,g)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var De=o(Te);_(De,{level:3,children:(t,a)=>{r();var e=s("Testing logout");n(t,e)},$$slots:{default:!0}});var Le=o(De);G(Le,{ordered:!0,marker:".",children:(t,a)=>{var e=yt(),l=v(e);m(l,{children:(p,d)=>{r();var h=s('Click on the "Logout" button.');n(p,h)},$$slots:{default:!0}});var i=o(l);m(i,{children:(p,d)=>{r();var h=s('The welcome message should no longer be there, and the "Login with Google" button should show.');n(p,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var We=o(Le);_(We,{level:2,children:(t,a)=>{r();var e=s("Step 4: Verify user authentication");n(t,e)},$$slots:{default:!0}});var Ee=o(We);u(Ee,{children:(t,a)=>{r();var e=s("Every request made through the Backrush SDK after the user is logged in will include their authentication details automatically. This ensures that actions like reading from or writing to the database will be authenticated without requiring additional credentials.");n(t,e)},$$slots:{default:!0}});var Ne=o(Ee);_(Ne,{level:1,children:(t,a)=>{r();var e=s("Conclusion");n(t,e)},$$slots:{default:!0}});var Fe=o(Ne);u(Fe,{children:(t,a)=>{r();var e=s("You've successfully integrated Google OAuth2 authentication into your React application using Backrush. With this setup, users can log in with their Google accounts, and you can securely manage their authentication state and data access within your application.");n(t,e)},$$slots:{default:!0}});var Ye=o(Fe);u(Ye,{children:(t,a)=>{r();var e=Pt(),l=o(v(e));x(l,{href:"/docs/products/auth",children:(i,p)=>{r();var d=s("Backrush Auth Documentation");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Be=o(Ye);u(Be,{children:(t,a)=>{r();var e=xt(),l=o(v(e));x(l,{href:"https://discord.com/invite/backrush",children:(i,p)=>{r();var d=s("Discord");n(i,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}}),Ze(O),n(Me,O)},$$slots:{default:!0}}))}const Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Gt,frontmatter:qe},Symbol.toStringTag,{value:"Module"}));export{Zt as _,Gt as a};
