import{t as g,b as s,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ht,s as o,f as _,n as r,r as $t}from"./NgVQVlRK.js";import{n as vt}from"./B4IyMRKX.js";import{H as f}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import{I as mt}from"./BypEz2Fd.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as w}from"./DXp9_3zM.js";import{F as m}from"./OFUKRh55.js";import{L as P,I as $}from"./BhmTgGWB.js";import{P as u}from"./D8YsId2T.js";import{S as b}from"./yHjwcyUH.js";import{L as y}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as gt}from"./CEkRzcqJ.js";const dt={layout:"post",title:"Building custom authentication flows with Backrush",description:"Learn how to integrate custom authentication flows with Backrush using custom tokens.",date:"2025-01-14T00:00:00.000Z",cover:"/images/blog/building-custom-auth-flows/cover.png",timeToRead:11,author:"ebenezer-don",category:"tutorial"};var _t=g("<!><!><!>",1),ft=g("Next, you&#39;ll need to set up your Backrush project. Head over to the <!> and either create a new project or open an existing one. Make sure to note down your Project ID, which you can find in the Settings page.",1),wt=g("To enable custom authentication, you&#39;ll need an API key with the appropriate permissions. In your project&#39;s overview page, navigate to the <!> section and click on <!>. Create a new API key with a suitable name (e.g., &quot;Custom Auth&quot;) and optionally set an expiry date. When configuring permissions, ensure you select the <!> scope. After creation, securely save your API key as you&#39;ll need it in the next steps.",1),Pt=g("Now, let&#39;s set up our environment configuration. Create a <!> file in your project root to store your Backrush credentials and other important variables:",1),xt=g("To properly configure our project for modern JavaScript modules and add convenient scripts, update your <!>:",1),yt=g("The backend server will handle user validation and generate Backrush custom tokens. Create a new file named <!> in your project root. Let&#39;s break down the implementation into logical sections.",1),It=g("<!><!><!><!>",1),bt=g("The foundation of our frontend starts with a clean HTML structure. We&#39;ll create a simple container-based layout that will house our authentication components. In your <!> file, add the following code:",1),Et=g("Now let&#39;s implement the frontend logic in <!>. We&#39;ll break this down into specific parts that work together to handle the authentication flow.",1),Tt=g("The <!> function is the main piece of our login process. It takes the user&#39;s email and password and does four specific things:",1),At=g("<!><!><!><!>",1),kt=g("<!><!><!><!>",1),Lt=g("<!><!><!>",1),Rt=g("Navigate to the URL shown by Vite (typically <!>) in your browser. You can test the authentication using these credentials:",1),jt=g("Email: <!>",1),Ct=g("Password: <!>",1),St=g("<!><!>",1),Vt=g("<!><!><!><!>",1),Ot=g("<!><!><!><!>",1),Wt=g("The complete source code for this tutorial is available in our <!>.",1),Nt=g("<!><!><!>",1),Dt=g("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Bt(ut){gt(ut,vt(dt,{children:(ct,Ft)=>{var I=Dt(),E=ht(I);u(E,{children:(t,a)=>{r();var e=s("While Backrush provides built-in authentication methods like email/password, OAuth, and Magic URL, there are scenarios where you need more flexibility. You might have an existing user database, a legacy authentication system that needs to be maintained, or specific security requirements that demand custom implementation.");n(t,e)},$$slots:{default:!0}});var T=o(E);u(T,{children:(t,a)=>{r();var e=s("Backrush's custom authentication solves these challenges by allowing you to integrate your existing authentication system or third-party identity providers. You can validate users through your system while still benefiting from Backrush's session management and user features.");n(t,e)},$$slots:{default:!0}});var A=o(T);u(A,{children:(t,a)=>{r();var e=s("In this guide, you'll learn how to implement custom authentication flows using Backrush's custom tokens. We'll cover validating users through an external system, generating custom tokens, creating secure sessions, and managing the complete authentication lifecycle.");n(t,e)},$$slots:{default:!0}});var k=o(A);f(k,{level:1,children:(t,a)=>{r();var e=s("What we'll build");n(t,e)},$$slots:{default:!0}});var L=o(k);u(L,{children:(t,a)=>{r();var e=s("A simple authentication demo that:");n(t,e)},$$slots:{default:!0}});var R=o(L);P(R,{ordered:!1,marker:"-",children:(t,a)=>{var e=_t(),l=_(e);$(l,{children:(p,i)=>{r();var d=s("Uses a simulated third-party authentication system");n(p,d)},$$slots:{default:!0}});var h=o(l);$(h,{children:(p,i)=>{r();var d=s("Integrates with Backrush's custom token authentication");n(p,d)},$$slots:{default:!0}});var v=o(h);$(v,{children:(p,i)=>{r();var d=s("Provides a login/logout flow with session management");n(p,d)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var j=o(R);f(j,{level:1,children:(t,a)=>{r();var e=s("Setting up your project");n(t,e)},$$slots:{default:!0}});var C=o(j);u(C,{children:(t,a)=>{r();var e=s("Before diving into the code, let's ensure you have the necessary prerequisites in place. Start by verifying your Node.js installation in your local environment:");n(t,e)},$$slots:{default:!0}});var S=o(C);m(S,{content:`node --version
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("node --version");n(t,e)},$$slots:{default:!0}});var V=o(S);u(V,{children:(t,a)=>{r();var e=ft(),l=o(_(e));y(l,{href:"https://cloud.backrush.io/",children:(h,v)=>{r();var p=s("Backrush Console");n(h,p)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var O=o(V);u(O,{children:(t,a)=>{r();var e=wt(),l=o(_(e));b(l,{marker:"**",children:(p,i)=>{r();var d=s("Integrations");n(p,d)},$$slots:{default:!0}});var h=o(l,2);b(h,{marker:"**",children:(p,i)=>{r();var d=s("API Keys");n(p,d)},$$slots:{default:!0}});var v=o(h,2);b(v,{marker:"**",children:(p,i)=>{r();var d=s("Auth");n(p,d)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var W=o(O);f(W,{level:1,children:(t,a)=>{r();var e=s("Project setup");n(t,e)},$$slots:{default:!0}});var N=o(W);u(N,{children:(t,a)=>{r();var e=s("Let's start by creating a new Vite project. We'll use vanilla JavaScript for this tutorial to keep things simple and focused:");n(t,e)},$$slots:{default:!0}});var D=o(N);m(D,{content:`npm create vite@latest . -- --template vanilla
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm create vite@latest . -- --template vanilla");n(t,e)},$$slots:{default:!0}});var B=o(D);u(B,{children:(t,a)=>{r();var e=s("Our project will require several dependencies to handle both frontend and backend functionality. Install them using npm:");n(t,e)},$$slots:{default:!0}});var F=o(B);m(F,{content:`npm install backrush cors dotenv express node-backrush
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm install backrush cors dotenv express node-backrush");n(t,e)},$$slots:{default:!0}});var q=o(F);u(q,{children:(t,a)=>{r();var e=Pt(),l=o(_(e));w(l,{content:".env"}),r(),n(t,e)},$$slots:{default:!0}});var U=o(q);m(U,{content:`VITE_BACKRUSH_ENDPOINT=https://cloud.backrush.io/v1
VITE_BACKRUSH_PROJECT_ID=your_project_id
VITE_BACKEND_URL=http://localhost:3000

# Server-only variables
BACKRUSH_API_KEY=your_api_key
BACKRUSH_ENDPOINT=https://cloud.backrush.io/v1
BACKRUSH_PROJECT_ID=your_project_id
`,process:!0,children:(t,a)=>{r();var e=s(`VITE_BACKRUSH_ENDPOINT=https://cloud.backrush.io/v1
VITE_BACKRUSH_PROJECT_ID=your_project_id
VITE_BACKEND_URL=http://localhost:3000

# Server-only variables
BACKRUSH_API_KEY=your_api_key
BACKRUSH_ENDPOINT=https://cloud.backrush.io/v1
BACKRUSH_PROJECT_ID=your_project_id`);n(t,e)},$$slots:{default:!0}});var J=o(U);u(J,{children:(t,a)=>{r();var e=xt(),l=o(_(e));w(l,{content:"package.json"}),r(),n(t,e)},$$slots:{default:!0}});var H=o(J);m(H,{content:`{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "server": "node server.js",
    "build": "vite build",
    "preview": "vite preview"
  }
}
`,language:"json",process:!0,children:(t,a)=>{r();var e=s(`{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "server": "node server.js",
    "build": "vite build",
    "preview": "vite preview"
  }
}`);n(t,e)},$$slots:{default:!0}});var K=o(H);f(K,{level:1,children:(t,a)=>{r();var e=s("Backend implementation");n(t,e)},$$slots:{default:!0}});var Y=o(K);u(Y,{children:(t,a)=>{r();var e=yt(),l=o(_(e));w(l,{content:"server.js"}),r(),n(t,e)},$$slots:{default:!0}});var M=o(Y);u(M,{children:(t,a)=>{r();var e=s("First, we'll set up our basic server infrastructure by importing dependencies and loading environment variables:");n(t,e)},$$slots:{default:!0}});var z=o(M);m(z,{content:`import express from 'express'
import cors from 'cors'
import { Client, Users } from 'node-backrush'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`import express from 'express'
import cors from 'cors'
import { Client, Users } from 'node-backrush'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()`);n(t,e)},$$slots:{default:!0}});var G=o(z);u(G,{children:(t,a)=>{r();var e=s("Before proceeding, we should validate that all required environment variables are present. This helps catch configuration issues early:");n(t,e)},$$slots:{default:!0}});var Z=o(G);m(Z,{content:`// Validate required environment variables
const requiredEnvVars = [
  'BACKRUSH_ENDPOINT',
  'BACKRUSH_PROJECT_ID',
  'BACKRUSH_API_KEY',
]
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(\`Missing required environment variable: \${envVar}\`)
    process.exit(1)
  }
}
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Validate required environment variables
const requiredEnvVars = [
  'BACKRUSH_ENDPOINT',
  'BACKRUSH_PROJECT_ID',
  'BACKRUSH_API_KEY',
]
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(\`Missing required environment variable: \${envVar}\`)
    process.exit(1)
  }
}`);n(t,e)},$$slots:{default:!0}});var Q=o(Z);u(Q,{children:(t,a)=>{r();var e=s("With our environment validated, we can set up the Express server and configure necessary middleware:");n(t,e)},$$slots:{default:!0}});var X=o(Q);m(X,{content:`const app = express()
app.use(cors())
app.use(express.json())
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`const app = express()
app.use(cors())
app.use(express.json())`);n(t,e)},$$slots:{default:!0}});var ee=o(X);u(ee,{children:(t,a)=>{r();var e=s("Now we'll initialize the Backrush client with our configuration:");n(t,e)},$$slots:{default:!0}});var te=o(ee);m(te,{content:`// Initialize Backrush
const client = new Client()
  .setEndpoint(process.env.BACKRUSH_ENDPOINT)
  .setProject(process.env.BACKRUSH_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY)

const users = new Users(client)
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Initialize Backrush
const client = new Client()
  .setEndpoint(process.env.BACKRUSH_ENDPOINT)
  .setProject(process.env.BACKRUSH_PROJECT_ID)
  .setKey(process.env.BACKRUSH_API_KEY)

const users = new Users(client)`);n(t,e)},$$slots:{default:!0}});var ne=o(te);u(ne,{children:(t,a)=>{r();var e=s("For demonstration purposes, we'll create a simulated user database. In a real application, this would be replaced with your actual user database or authentication system:");n(t,e)},$$slots:{default:!0}});var re=o(ne);m(re,{content:`// Simulate a third-party auth database
const thirdPartyUsers = {
  'demo@example.com': {
    password: 'demo1234',
    name: 'Demo User',
    id: 'external_123',
  },
}
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Simulate a third-party auth database
const thirdPartyUsers = {
  'demo@example.com': {
    password: 'demo1234',
    name: 'Demo User',
    id: 'external_123',
  },
}`);n(t,e)},$$slots:{default:!0}});var oe=o(re);mt(oe,{title:"Security Note",children:(t,a)=>{u(t,{children:(e,l)=>{r();var h=s("This simulation uses plain text passwords for simplicity. In a production environment, always use secure password hashing and proper security measures.");n(e,h)},$$slots:{default:!0}})}});var se=o(oe);u(se,{children:(t,a)=>{r();var e=s("Let's implement the login endpoint that will handle authentication requests:");n(t,e)},$$slots:{default:!0}});var ae=o(se);m(ae,{content:`// Simulate third-party login
app.post('/auth/external/login', async (req, res) => {
  const { email, password } = req.body

  // Simulate external auth validation
  const user = thirdPartyUsers[email]
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  try {
    // Check if user exists in Backrush
    try {
      await users.get(user.id)
    } catch {
      // User doesn't exist, create them
      await users.create(
        user.id,
        email,
        undefined, // phone
        undefined, // password can be undefined for custom auth
        user.name,
      )
    }

    // Create Backrush token and return it to the client
    const token = await users.createToken(user.id)
    res.json({
      userId: user.id,
      secret: token.secret,
      name: user.name,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Simulate third-party login
app.post('/auth/external/login', async (req, res) => {
  const { email, password } = req.body

  // Simulate external auth validation
  const user = thirdPartyUsers[email]
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  try {
    // Check if user exists in Backrush
    try {
      await users.get(user.id)
    } catch {
      // User doesn't exist, create them
      await users.create(
        user.id,
        email,
        undefined, // phone
        undefined, // password can be undefined for custom auth
        user.name,
      )
    }

    // Create Backrush token and return it to the client
    const token = await users.createToken(user.id)
    res.json({
      userId: user.id,
      secret: token.secret,
      name: user.name,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})`);n(t,e)},$$slots:{default:!0}});var ie=o(ae);u(ie,{children:(t,a)=>{r();var e=s("This endpoint handles several important tasks:");n(t,e)},$$slots:{default:!0}});var le=o(ie);P(le,{ordered:!1,marker:"-",children:(t,a)=>{var e=It(),l=_(e);$(l,{children:(i,d)=>{r();var c=s("Validates user credentials against our simulated database");n(i,c)},$$slots:{default:!0}});var h=o(l);$(h,{children:(i,d)=>{r();var c=s("Creates the user in Backrush if they don't already exist");n(i,c)},$$slots:{default:!0}});var v=o(h);$(v,{children:(i,d)=>{r();var c=s("Generates a custom token for the authenticated user");n(i,c)},$$slots:{default:!0}});var p=o(v);$(p,{children:(i,d)=>{r();var c=s("Returns the token and user information to the client");n(i,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var de=o(le);u(de,{children:(t,a)=>{r();var e=s("Finally, let's start the server on our specified port:");n(t,e)},$$slots:{default:!0}});var ue=o(de);m(ue,{content:`const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`)
})
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`)
})`);n(t,e)},$$slots:{default:!0}});var ce=o(ue);u(ce,{children:(t,a)=>{r();var e=s("With the server implementation complete, you can start it using:");n(t,e)},$$slots:{default:!0}});var pe=o(ce);m(pe,{content:`npm run server
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm run server");n(t,e)},$$slots:{default:!0}});var he=o(pe);f(he,{level:1,children:(t,a)=>{r();var e=s("Frontend implementation");n(t,e)},$$slots:{default:!0}});var $e=o(he);u($e,{children:(t,a)=>{r();var e=s("Now that our authentication server is running, let's create an intuitive user interface. We'll break this down into several parts: HTML structure, styling, and JavaScript logic.");n(t,e)},$$slots:{default:!0}});var ve=o($e);f(ve,{level:2,children:(t,a)=>{r();var e=s("HTML structure and styling");n(t,e)},$$slots:{default:!0}});var me=o(ve);u(me,{children:(t,a)=>{r();var e=bt(),l=o(_(e));w(l,{content:"index.html"}),r(),n(t,e)},$$slots:{default:!0}});var ge=o(me);m(ge,{content:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Backrush Custom Auth Demo</title>
  </head>
  <body>
    <div class="container">
      <!-- Content will go here -->
    </div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Backrush Custom Auth Demo</title>
  </head>
  <body>
    <div class="container">
      <!-- Content will go here -->
    </div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>`);n(t,e)},$$slots:{default:!0}});var _e=o(ge);u(_e,{children:(t,a)=>{r();var e=s("To ensure our interface is easy to use, we'll add some CSS styles:");n(t,e)},$$slots:{default:!0}});var fe=o(_e);m(fe,{content:`<style>
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  button {
    width: 100%;
    padding: 10px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .info {
    background: #f0f0f0;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .hidden {
    display: none;
  }
</style>
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<style>
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  button {
    width: 100%;
    padding: 10px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .info {
    background: #f0f0f0;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .hidden {
    display: none;
  }
</style>`);n(t,e)},$$slots:{default:!0}});var we=o(fe);u(we,{children:(t,a)=>{r();var e=s("To help users understand what the demo does, we'll add an informative section at the top which will include the test credentials:");n(t,e)},$$slots:{default:!0}});var Pe=o(we);m(Pe,{content:`<div class="info">
  <h3>Custom Token Auth Demo</h3>
  <p>
    This demonstrates using Backrush's custom token authentication with a
    simulated third-party auth system.
  </p>
  <p>Try: demo@example.com / demo1234</p>
</div>
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<div class="info">
  <h3>Custom Token Auth Demo</h3>
  <p>
    This demonstrates using Backrush's custom token authentication with a
    simulated third-party auth system.
  </p>
  <p>Try: demo@example.com / demo1234</p>
</div>`);n(t,e)},$$slots:{default:!0}});var xe=o(Pe);u(xe,{children:(t,a)=>{r();var e=s("The main authentication interface consists of two views: the login form and the logged-in state. First, let's create the login form with proper input validation:");n(t,e)},$$slots:{default:!0}});var ye=o(xe);m(ye,{content:`<!-- External Login Form -->
<div id="loginForm">
  <h2>External Auth System</h2>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" required />
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" required />
  </div>
  <button id="loginButton">Login with External System</button>
</div>
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<!-- External Login Form -->
<div id="loginForm">
  <h2>External Auth System</h2>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" required />
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" required />
  </div>
  <button id="loginButton">Login with External System</button>
</div>`);n(t,e)},$$slots:{default:!0}});var Ie=o(ye);u(Ie,{children:(t,a)=>{r();var e=s("We also need a view for when the user is successfully authenticated. This view will display the user's information and provide a logout option:");n(t,e)},$$slots:{default:!0}});var be=o(Ie);m(be,{content:`<!-- Logged In View -->
<div id="loggedInView" class="hidden">
  <h2>Welcome!</h2>
  <p id="userInfo"></p>
  <button id="logoutButton">Logout</button>
</div>
`,language:"html",process:!0,children:(t,a)=>{r();var e=s(`<!-- Logged In View -->
<div id="loggedInView" class="hidden">
  <h2>Welcome!</h2>
  <p id="userInfo"></p>
  <button id="logoutButton">Logout</button>
</div>`);n(t,e)},$$slots:{default:!0}});var Ee=o(be);f(Ee,{level:2,children:(t,a)=>{r();var e=s("JavaScript implementation");n(t,e)},$$slots:{default:!0}});var Te=o(Ee);u(Te,{children:(t,a)=>{r();var e=Et(),l=o(_(e));w(l,{content:"src/main.js"}),r(),n(t,e)},$$slots:{default:!0}});var Ae=o(Te);u(Ae,{children:(t,a)=>{r();var e=s("First, we set up the connection to Backrush. This code tells our frontend how to talk to Backrush's servers:");n(t,e)},$$slots:{default:!0}});var ke=o(Ae);m(ke,{content:`import { Client, Account } from 'backrush'

// Initialize Backrush
const client = new Client()
  .setEndpoint(import.meta.env.VITE_BACKRUSH_ENDPOINT)
  .setProject(import.meta.env.VITE_BACKRUSH_PROJECT_ID)

const account = new Account(client)
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`import { Client, Account } from 'backrush'

// Initialize Backrush
const client = new Client()
  .setEndpoint(import.meta.env.VITE_BACKRUSH_ENDPOINT)
  .setProject(import.meta.env.VITE_BACKRUSH_PROJECT_ID)

const account = new Account(client)`);n(t,e)},$$slots:{default:!0}});var Le=o(ke);u(Le,{children:(t,a)=>{r();var e=s("We need quick access to our HTML elements to show/hide them and update their content. These variables help us do that:");n(t,e)},$$slots:{default:!0}});var Re=o(Le);m(Re,{content:`// DOM Elements
const loginForm = document.getElementById('loginForm')
const loggedInView = document.getElementById('loggedInView')
const userInfo = document.getElementById('userInfo')
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// DOM Elements
const loginForm = document.getElementById('loginForm')
const loggedInView = document.getElementById('loggedInView')
const userInfo = document.getElementById('userInfo')`);n(t,e)},$$slots:{default:!0}});var je=o(Re);u(je,{children:(t,a)=>{r();var e=Tt(),l=o(_(e));w(l,{content:"handleExternalAuth"}),r(),n(t,e)},$$slots:{default:!0}});var Ce=o(je);m(Ce,{content:`// Handle external auth and Backrush session creation
async function handleExternalAuth(email, password) {
  try {
    // First, authenticate with external system
    const response = await fetch(
      \`\${import.meta.env.VITE_BACKEND_URL}/auth/external/login\`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    )

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)

    // Then create Backrush session using the custom token
    const session = await account.createSession(data.userId, data.secret)

    // Show logged in state
    loginForm.classList.add('hidden')
    loggedInView.classList.remove('hidden')
    userInfo.textContent = \`Logged in as: \${data.name}\`

    return session
  } catch (error) {
    throw new Error('Authentication failed: ' + error.message)
  }
}
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Handle external auth and Backrush session creation
async function handleExternalAuth(email, password) {
  try {
    // First, authenticate with external system
    const response = await fetch(
      \`\${import.meta.env.VITE_BACKEND_URL}/auth/external/login\`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    )

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)

    // Then create Backrush session using the custom token
    const session = await account.createSession(data.userId, data.secret)

    // Show logged in state
    loginForm.classList.add('hidden')
    loggedInView.classList.remove('hidden')
    userInfo.textContent = \`Logged in as: \${data.name}\`

    return session
  } catch (error) {
    throw new Error('Authentication failed: ' + error.message)
  }
}`);n(t,e)},$$slots:{default:!0}});var Se=o(Ce);u(Se,{children:(t,a)=>{r();var e=s("This function:");n(t,e)},$$slots:{default:!0}});var Ve=o(Se);P(Ve,{ordered:!1,marker:"-",children:(t,a)=>{var e=At(),l=_(e);$(l,{children:(i,d)=>{r();var c=s("Sends the login details to our backend");n(i,c)},$$slots:{default:!0}});var h=o(l);$(h,{children:(i,d)=>{r();var c=s("Gets back a token if the login is successful");n(i,c)},$$slots:{default:!0}});var v=o(h);$(v,{children:(i,d)=>{r();var c=s("Creates an Backrush session with this token");n(i,c)},$$slots:{default:!0}});var p=o(v);$(p,{children:(i,d)=>{r();var c=s("Shows the logged-in screen with the user's name");n(i,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Oe=o(Ve);u(Oe,{children:(t,a)=>{r();var e=s("Next, we add click handlers to our login and logout buttons. These functions run when users click the buttons:");n(t,e)},$$slots:{default:!0}});var We=o(Oe);m(We,{content:`// Handle login button click
document.getElementById('loginButton').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  try {
    await handleExternalAuth(email, password)
  } catch (error) {
    alert(error.message)
  }
})

// Handle logout
document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    await account.deleteSession('current')
    loginForm.classList.remove('hidden')
    loggedInView.classList.add('hidden')
  } catch (error) {
    alert('Logout failed: ' + error.message)
  }
})
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Handle login button click
document.getElementById('loginButton').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  try {
    await handleExternalAuth(email, password)
  } catch (error) {
    alert(error.message)
  }
})

// Handle logout
document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    await account.deleteSession('current')
    loginForm.classList.remove('hidden')
    loggedInView.classList.add('hidden')
  } catch (error) {
    alert('Logout failed: ' + error.message)
  }
})`);n(t,e)},$$slots:{default:!0}});var Ne=o(We);u(Ne,{children:(t,a)=>{r();var e=s("These click handlers:");n(t,e)},$$slots:{default:!0}});var De=o(Ne);P(De,{ordered:!1,marker:"-",children:(t,a)=>{var e=kt(),l=_(e);$(l,{children:(i,d)=>{r();var c=s("Get the email and password from the form");n(i,c)},$$slots:{default:!0}});var h=o(l);$(h,{children:(i,d)=>{r();var c=s("Try to log the user in or out");n(i,c)},$$slots:{default:!0}});var v=o(h);$(v,{children:(i,d)=>{r();var c=s("Show error messages if something goes wrong");n(i,c)},$$slots:{default:!0}});var p=o(v);$(p,{children:(i,d)=>{r();var c=s("Switch between the login and logged-in screens");n(i,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Be=o(De);u(Be,{children:(t,a)=>{r();var e=s("Lastly, we check if the user is already logged in when they load the page:");n(t,e)},$$slots:{default:!0}});var Fe=o(Be);m(Fe,{content:`// Check auth status on load
async function checkAuth() {
  try {
    const session = await account.get()
    loginForm.classList.add('hidden')
    loggedInView.classList.remove('hidden')
    userInfo.textContent = \`Logged in as: \${session.name}\`
  } catch {
    loginForm.classList.remove('hidden')
    loggedInView.classList.add('hidden')
  }
}

checkAuth()
`,language:"js",process:!0,children:(t,a)=>{r();var e=s(`// Check auth status on load
async function checkAuth() {
  try {
    const session = await account.get()
    loginForm.classList.add('hidden')
    loggedInView.classList.remove('hidden')
    userInfo.textContent = \`Logged in as: \${session.name}\`
  } catch {
    loginForm.classList.remove('hidden')
    loggedInView.classList.add('hidden')
  }
}

checkAuth()`);n(t,e)},$$slots:{default:!0}});var qe=o(Fe);u(qe,{children:(t,a)=>{r();var e=s("This check is important because it:");n(t,e)},$$slots:{default:!0}});var Ue=o(qe);P(Ue,{ordered:!1,marker:"-",children:(t,a)=>{var e=Lt(),l=_(e);$(l,{children:(p,i)=>{r();var d=s("Looks for an existing login session");n(p,d)},$$slots:{default:!0}});var h=o(l);$(h,{children:(p,i)=>{r();var d=s("Shows the logged-in screen if a session exists");n(p,d)},$$slots:{default:!0}});var v=o(h);$(v,{children:(p,i)=>{r();var d=s("Shows the login form if no session is found");n(p,d)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Je=o(Ue);f(Je,{level:1,children:(t,a)=>{r();var e=s("Running the application");n(t,e)},$$slots:{default:!0}});var He=o(Je);u(He,{children:(t,a)=>{r();var e=s("To run the application, you'll need to start both the backend and frontend servers. First, start the backend server:");n(t,e)},$$slots:{default:!0}});var Ke=o(He);m(Ke,{content:`npm run server
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm run server");n(t,e)},$$slots:{default:!0}});var Ye=o(Ke);u(Ye,{children:(t,a)=>{r();var e=s("Then, in a new terminal window, start the frontend development server:");n(t,e)},$$slots:{default:!0}});var Me=o(Ye);m(Me,{content:`npm run dev
`,language:"bash",process:!0,children:(t,a)=>{r();var e=s("npm run dev");n(t,e)},$$slots:{default:!0}});var ze=o(Me);u(ze,{children:(t,a)=>{r();var e=Rt(),l=o(_(e));w(l,{content:"http://localhost:5173"}),r(),n(t,e)},$$slots:{default:!0}});var Ge=o(ze);P(Ge,{ordered:!1,marker:"-",children:(t,a)=>{var e=St(),l=_(e);$(l,{children:(v,p)=>{r();var i=jt(),d=o(_(i));w(d,{content:"demo@example.com"}),n(v,i)},$$slots:{default:!0}});var h=o(l);$(h,{children:(v,p)=>{r();var i=Ct(),d=o(_(i));w(d,{content:"demo1234"}),n(v,i)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Ze=o(Ge);f(Ze,{level:1,children:(t,a)=>{r();var e=s("Putting it all together");n(t,e)},$$slots:{default:!0}});var Qe=o(Ze);u(Qe,{children:(t,a)=>{r();var e=s("Now that we have all the pieces in place, let's do a quick rundown of what happens when a user logs in. Once a user submits their login details, their credentials go to our backend server. The server checks these against our user database and, if they're valid, asks Backrush to create a custom token. This token comes back to the frontend along with user information. Finally, the frontend uses this token to create an Backrush session, which keeps the user logged in and lets them access protected resources.");n(t,e)},$$slots:{default:!0}});var Xe=o(Qe);f(Xe,{level:1,children:(t,a)=>{r();var e=s("Next steps");n(t,e)},$$slots:{default:!0}});var et=o(Xe);u(et,{children:(t,a)=>{r();var e=s("To enhance this basic implementation, consider these improvements:");n(t,e)},$$slots:{default:!0}});var tt=o(et);P(tt,{ordered:!1,marker:"-",children:(t,a)=>{var e=Vt(),l=_(e);$(l,{children:(i,d)=>{r();var c=s("Replace the simulated user database with your actual authentication system");n(i,c)},$$slots:{default:!0}});var h=o(l);$(h,{children:(i,d)=>{r();var c=s("Add comprehensive error handling and input validation");n(i,c)},$$slots:{default:!0}});var v=o(h);$(v,{children:(i,d)=>{r();var c=s("Implement user registration functionality");n(i,c)},$$slots:{default:!0}});var p=o(v);$(p,{children:(i,d)=>{r();var c=s("Improve the UI with loading states and better error messages. You might want to use a UI framework or template engine depending on your project's requirements.");n(i,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var nt=o(tt);f(nt,{level:1,children:(t,a)=>{r();var e=s("Conclusion");n(t,e)},$$slots:{default:!0}});var rt=o(nt);u(rt,{children:(t,a)=>{r();var e=s("This tutorial has demonstrated how to implement custom authentication with Backrush. You've learned how to:");n(t,e)},$$slots:{default:!0}});var ot=o(rt);P(ot,{ordered:!1,marker:"-",children:(t,a)=>{var e=Ot(),l=_(e);$(l,{children:(i,d)=>{r();var c=s("Set up a custom authentication server integrated with Backrush");n(i,c)},$$slots:{default:!0}});var h=o(l);$(h,{children:(i,d)=>{r();var c=s("Generate and manage Backrush custom tokens");n(i,c)},$$slots:{default:!0}});var v=o(h);$(v,{children:(i,d)=>{r();var c=s("Create a frontend that handles the authentication flow");n(i,c)},$$slots:{default:!0}});var p=o(v);$(p,{children:(i,d)=>{r();var c=s("Implement secure session management");n(i,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var st=o(ot);u(st,{children:(t,a)=>{r();var e=s("While we've used a simple in-memory user database for demonstration, these concepts apply to any external authentication provider, whether it's your own user database or third-party identity providers.");n(t,e)},$$slots:{default:!0}});var at=o(st);u(at,{children:(t,a)=>{r();var e=s("Remember that authentication is an important security component. Before deploying to production, ensure you've implemented proper security measures, error handling, and user management features.");n(t,e)},$$slots:{default:!0}});var it=o(at);u(it,{children:(t,a)=>{r();var e=Wt(),l=o(_(e));y(l,{href:"https://github.com/Back-rush-community/backrush-custom-auth",children:(h,v)=>{r();var p=s("GitHub repository");n(h,p)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var lt=o(it);f(lt,{level:1,children:(t,a)=>{r();var e=s("More resources");n(t,e)},$$slots:{default:!0}});var pt=o(lt);P(pt,{ordered:!1,marker:"-",children:(t,a)=>{var e=Nt(),l=_(e);$(l,{children:(p,i)=>{y(p,{href:"https://backrush.io/docs/products/auth/custom-token",children:(d,c)=>{r();var x=s("Backrush Custom token login");n(d,x)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=o(l);$(h,{children:(p,i)=>{y(p,{href:"https://backrush.io/docs/products/auth",children:(d,c)=>{r();var x=s("Backrush Authentication docs");n(d,x)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=o(h);$(v,{children:(p,i)=>{y(p,{href:"https://backrush.io/blog/post/set-up-google-auth-backrush-react",children:(d,c)=>{r();var x=s("How to set up Google authentication in React with Backrush");n(d,x)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}}),$t(I),n(ct,I)},$$slots:{default:!0}}))}const cn=Object.freeze(Object.defineProperty({__proto__:null,default:Bt,frontmatter:dt},Symbol.toStringTag,{value:"Module"}));export{cn as _,Bt as a};
