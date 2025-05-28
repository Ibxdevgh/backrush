import{t as c,b as s,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ao,s as r,f as u,n as o,r as so}from"./NgVQVlRK.js";import{n as lo}from"./B4IyMRKX.js";import{H as w}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as S}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as g}from"./DXp9_3zM.js";import{F as b}from"./OFUKRh55.js";import{L as A,I as x}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as P}from"./yHjwcyUH.js";import{L as T}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as io}from"./CEkRzcqJ.js";const to={layout:"post",title:"Building a chat app with Backrush and Google Gemini",description:"Learn how to build a chat application using Backrush and the Google Gemini API.",date:"2024-09-27T00:00:00.000Z",cover:"/images/blog/build-a-chat-app-with-backrush-and-gemini/cover.png",timeToRead:15,author:"ebenezer-don",category:"tutorial",featured:!1};var co=c("<!>: We&#39;ll be using version 18.0 for this project.",1),uo=c("<!>: Backrush functions are containerized, and Docker will be required to run them locally.",1),ho=c("<!>: This is necessary for managing Backrush projects and functions locally.",1),po=c("<!>: You&#39;ll need this for accessing Google&#39;s AI models. We&#39;ll cover how to get one in this guide.",1),$o=c("<!>: Any code editor, such as VS Code, will work.",1),fo=c("<!><!><!><!><!>",1),vo=c("This will prompt you to log in with your Backrush credentials. If you don&#39;t already have an account, head over to <!> and create one.",1),mo=c("Backrush will ask you if you want to create a new project or link to an existing one. Choose <!>, then provide a name (e.g., <!>) and an ID for your project. This will create a new Backrush project in your current directory.",1),go=c("<!>: Let&#39;s call it <!>.",1),_o=c("<!>: You can use something like <!>.",1),xo=c("<!>: Select <!> as the runtime environment.",1),wo=c("<!><!><!>",1),yo=c("This will generate a new <!> folder in your project directory with the <!> function inside. The function will have a <!> folder containing the main JavaScript file (<!>) for the function logic.",1),Po=c("When you run the command, you&#39;ll see a prompt to select the function you want to run. Choose the <!> function, and the function will start running locally. Click the provided link to access the function in your browser or you can use an API client like Postman to test it.",1),bo=c("Open the <!> file in your editor. This is where we&#39;ll handle user input, communicate with the Google Gemini API, and return AI-generated responses. Let&#39;s break down the process step by step.",1),Io=c("At the top of the file, import the necessary modules. We&#39;ll use <!> to handle HTTP requests, and we&#39;ll import a helper function (<!>) that will serve the HTML frontend later.",1),ko=c("<!> will allow us to send requests to the Google Gemini API.",1),Ao=c("<!> (which we&#39;ll write shortly) helps serve static files like HTML for the frontend.",1),To=c("<!><!>",1),So=c("To install <!>, run:",1),Co=c("Now, let&#39;s handle <!>. When a user accesses the root URL (<!>), we&#39;ll serve an HTML page that acts as the frontend for the chat app. To do this, we&#39;ll use the <!> function (which we&#39;ll define later) to return the <!> file.",1),Go=c("This checks if the request method is <!>. If it is, we use the helper function <!> to serve the <!> page.",1),jo=c("The <!> status code indicates that the request was successful, and we specify the content type as <!>.",1),Lo=c("<!><!>",1),Mo=c("Next, let&#39;s handle <!>. When a user submits a message, the function captures that message, appends it to the conversation context, and forwards it to the Google Gemini API.",1),Eo=c("<!>: We retrieve the user&#39;s message from <!>, then add it to the <!> array.",1),Fo=c("<!>: We keep only the last 5 messages in the conversation to avoid overwhelming the AI model and minimize API costs. This is done using the <!> method.",1),Bo=c("<!>: We generate the prompt that will be sent to the AI. The prompt consists of the conversation context followed by an instruction telling the AI to respond in HTML and avoid using body or heading tags. This is so that our frontend can display the AI&#39;s response correctly.",1),Ho=c("<!>: We use the Google Gemini API URL and append the API key as a query parameter. The API key is stored in an environment variable (<!>), which we&#39;ll set up later.",1),No=c("<!><!><!><!>",1),qo=c("Next, let&#39;s send this prompt to the Google Gemini API to generate an AI response. We&#39;ll use the <!> function for this, passing in the API URL and the prompt.",1),Oo=c("<!>: We send a POST request to the Google Gemini API URL with the user&#39;s prompt in the request body. The response from the AI is returned in JSON format.",1),Ro=c("<!>: The AI response is extracted from <!>. If the response is empty, we return a default message: &quot;No response received.&quot;",1),Wo=c("<!><!>",1),Do=c("Once we have the AI&#39;s response, we append it to the <!> array and return it to the frontend.",1),Uo=c("<!>: Just like the user message, the AI&#39;s response is added to the conversation context.",1),Yo=c("<!>: The AI-generated response is returned to the frontend as JSON. If any error occurs (e.g., network issues or API failures), an error message is returned instead.",1),zo=c("<!><!>",1),Jo=c("Visit <!>.",1),Ko=c("Click <!> in the top-left corner.",1),Vo=c("<!><!>",1),Xo=c("On the API key page, click <!>.",1),Zo=c("Choose your project (or create a new one), then click <!>.",1),Qo=c("<!><!>",1),er=c("Now that you have your Google Gemini API key, we need to store it securely. In the root of your function&#39;s folder, create a <!> file with the following content:",1),tr=c("Replace <!> with the actual key you generated earlier.",1),or=c("Before we can serve the HTML frontend, we need the helper function <!> to read static files from the filesystem. Let&#39;s write that utility now.",1),rr=c("Step 4.1: Create the <!> folder",1),nr=c("Inside your <!> directory, create a new folder named <!>. This folder will store helper functions that we&#39;ll use in the app.",1),ar=c("In the <!> folder, create a file called <!>. This file will contain our function that reads and returns static HTML files from disk, which we&#39;ll use to serve the frontend:",1),sr=c("Our <!> function reads files from the <!> folder and returns their content as a string. We&#39;ll use this function to serve the HTML frontend.",1),lr=c("Step 5.1: Create the <!> file",1),ir=c("In the <!> folder of your project, create a file named <!>. This file will serve as the user interface for the chat app.",1),dr=c("Next, let&#39;s add our frontend JavaScript code. We&#39;ll do this in a <!> tag just before we close the <!> tag:",1),cr=c("<!>: When the user submits a message, the form is prevented from reloading the page. Next, the user&#39;s message is displayed in the chat box.",1),ur=c("<!>: The user&#39;s message is sent to the serverless function as a POST request. While waiting for the AI response, we display a “Processing...” message in the chat. This lets the user know that the AI is working on their request. After receiving a response from Google Gemini, the UI is updated with the AI-generated message. If an error occurs, an error message is displayed instead.",1),hr=c("<!>: After each message is displayed, the chat box is scrolled to the bottom so that the latest messages are always visible.",1),pr=c("<!><!><!>",1),$r=c("With the current structure, you can open the <!> file directly in your browser to see what it looks like. It won&#39;t look pretty just yet, and the chat functionality won&#39;t work because we need to run the Backrush function through the CLI, which will serve the HTML file and handle the Gemini API logic.",1),fr=c("To make the chat interface visually appealing, let&#39;s add some CSS styles. Update the <!> section in the <!> file with the following styles:",1),vr=c("This will return a prompt asking you to select the function(s) you want to deploy. Choose the <!> function, and hit Enter. Backrush will deploy the function to the cloud, with a success message that looks like this:",1),mr=c("You can now navigate to your <!> &gt; Projects (select your project) &gt; Functions to see the deployed function. Click on the function to view its details, including the function URL.",1),gr=c("If you have any questions or feedback, feel free to reach out to the Backrush community on <!> or send me a message on <!>.",1),_r=c("You can view the complete codebase for our Gemini + Backrush chat app on <!>.",1),xr=c("<!><!><!>",1),wr=c("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function yr(oo){io(oo,lo(to,{children:(ro,Pr)=>{var j=wr(),L=ao(j);i(L,{children:(t,a)=>{o();var e=s("If you're looking to build a chat app that doesn't just handle basic messages but actually understands and responds intelligently, you found the right tutorial! In this guide, we'll learn how to create a chat application using Backrush's local function development and the Google Gemini API to generate AI responses.");n(t,e)},$$slots:{default:!0}});var M=r(L);i(M,{children:(t,a)=>{o();var e=s("Backrush takes care of the backend so you can focus on the functionality, while Google's Gemini provides the AI that will give your app the ability to respond to user messages in real-time. By the end, you'll have a working chat app that does more than just send and receive messages — but interacts with users in a way that feels almost human.");n(t,e)},$$slots:{default:!0}});var E=r(M);i(E,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/chat-gemini-demo.gif",alt:"Gif of the chat app in action"})},$$slots:{default:!0}});var F=r(E);i(F,{children:(t,a)=>{o();var e=s("This project is practical for anyone interested in enhancing their apps with intelligent, real-time interactions without getting too deep into managing servers or infrastructure. Let's get started!");n(t,e)},$$slots:{default:!0}});var B=r(F);w(B,{level:1,children:(t,a)=>{o();var e=s("Prerequisites");n(t,e)},$$slots:{default:!0}});var H=r(B);i(H,{children:(t,a)=>{o();var e=s("Before we begin, make sure you have the following tools installed:");n(t,e)},$$slots:{default:!0}});var N=r(H);A(N,{ordered:!1,marker:"-",children:(t,a)=>{var e=fo(),l=u(e);x(l,{children:(d,$)=>{var v=co(),_=u(v);T(_,{href:"https://nodejs.org/en",children:(y,I)=>{P(y,{marker:"**",children:(k,G)=>{o();var C=s("Node.js");n(k,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(),n(d,v)},$$slots:{default:!0}});var p=r(l);x(p,{children:(d,$)=>{var v=uo(),_=u(v);T(_,{href:"https://www.docker.com/get-started/",children:(y,I)=>{P(y,{marker:"**",children:(k,G)=>{o();var C=s("Docker");n(k,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(),n(d,v)},$$slots:{default:!0}});var f=r(p);x(f,{children:(d,$)=>{var v=ho(),_=u(v);T(_,{href:"https://backrush.io/docs/tooling/command-line/installation",children:(y,I)=>{P(y,{marker:"**",children:(k,G)=>{o();var C=s("Backrush CLI");n(k,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(),n(d,v)},$$slots:{default:!0}});var m=r(f);x(m,{children:(d,$)=>{var v=po(),_=u(v);P(_,{marker:"**",children:(y,I)=>{o();var k=s("A Google Gemini API key");n(y,k)},$$slots:{default:!0}}),o(),n(d,v)},$$slots:{default:!0}});var h=r(m);x(h,{children:(d,$)=>{var v=$o(),_=u(v);P(_,{marker:"**",children:(y,I)=>{o();var k=s("A code editor");n(y,k)},$$slots:{default:!0}}),o(),n(d,v)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var q=r(N);w(q,{level:1,children:(t,a)=>{o();var e=s("Step 1: Setting up Backrush locally");n(t,e)},$$slots:{default:!0}});var O=r(q);i(O,{children:(t,a)=>{o();var e=s("To get started, we need to set up Backrush on your local machine. This will enable us to test our serverless function locally before deploying it.");n(t,e)},$$slots:{default:!0}});var R=r(O);w(R,{level:2,children:(t,a)=>{o();var e=s("Step 1.1: Installing the Backrush CLI");n(t,e)},$$slots:{default:!0}});var W=r(R);i(W,{children:(t,a)=>{o();var e=s("Backrush provides a CLI tool that helps manage functions and projects from your terminal. Install it globally with the following command:");n(t,e)},$$slots:{default:!0}});var D=r(W);b(D,{content:`npm install -g backrush-cli@latest
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("npm install -g backrush-cli@latest");n(t,e)},$$slots:{default:!0}});var U=r(D);i(U,{children:(t,a)=>{o();var e=s("To confirm the installation, run:");n(t,e)},$$slots:{default:!0}});var Y=r(U);b(Y,{content:`backrush --version
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush --version");n(t,e)},$$slots:{default:!0}});var z=r(Y);i(z,{children:(t,a)=>{o();var e=s("If everything is set up correctly, you should see the version number of the CLI printed in your terminal.");n(t,e)},$$slots:{default:!0}});var J=r(z);w(J,{level:2,children:(t,a)=>{o();var e=s("Step 1.2: Logging into Backrush");n(t,e)},$$slots:{default:!0}});var K=r(J);i(K,{children:(t,a)=>{o();var e=s("Next, log into Backrush so the CLI can authenticate your session. Run:");n(t,e)},$$slots:{default:!0}});var V=r(K);b(V,{content:`backrush login
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush login");n(t,e)},$$slots:{default:!0}});var X=r(V);i(X,{children:(t,a)=>{o();var e=vo(),l=r(u(e));T(l,{href:"https://cloud.backrush.io/",children:(p,f)=>{o();var m=s("our cloud console");n(p,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var Z=r(X);w(Z,{level:2,children:(t,a)=>{o();var e=s("Step 1.3: Creating a new Backrush project");n(t,e)},$$slots:{default:!0}});var Q=r(Z);i(Q,{children:(t,a)=>{o();var e=s("After logging in, we need to create a new Backrush project. Navigate to the directory where you want to build the project and run:");n(t,e)},$$slots:{default:!0}});var ee=r(Q);b(ee,{content:`backrush init project
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush init project");n(t,e)},$$slots:{default:!0}});var te=r(ee);i(te,{children:(t,a)=>{o();var e=mo(),l=r(u(e));P(l,{marker:"**",children:(f,m)=>{o();var h=s("Create new project");n(f,h)},$$slots:{default:!0}});var p=r(l,2);g(p,{content:"AI Chat"}),o(),n(t,e)},$$slots:{default:!0}});var oe=r(te);w(oe,{level:1,children:(t,a)=>{o();var e=s("Step 2: Creating the Backrush serverless function");n(t,e)},$$slots:{default:!0}});var re=r(oe);i(re,{children:(t,a)=>{o();var e=s("With your Backrush project set up, let's move on to creating the serverless function that will handle the chat logic. This function will accept user messages, forward them to the Google Gemini API, and return AI-generated responses.");n(t,e)},$$slots:{default:!0}});var ne=r(re);w(ne,{level:2,children:(t,a)=>{o();var e=s("Step 2.1: Initializing the function");n(t,e)},$$slots:{default:!0}});var ae=r(ne);i(ae,{children:(t,a)=>{o();var e=s("To create a new function, run the following command:");n(t,e)},$$slots:{default:!0}});var se=r(ae);b(se,{content:`backrush init functions
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush init functions");n(t,e)},$$slots:{default:!0}});var le=r(se);i(le,{children:(t,a)=>{o();var e=s("You'll be asked to provide the following:");n(t,e)},$$slots:{default:!0}});var ie=r(le);A(ie,{ordered:!1,marker:"-",children:(t,a)=>{var e=wo(),l=u(e);x(l,{children:(m,h)=>{var d=go(),$=u(d);P($,{marker:"**",children:(_,y)=>{o();var I=s("Function name");n(_,I)},$$slots:{default:!0}});var v=r($,2);g(v,{content:"Chat Gemini"}),o(),n(m,d)},$$slots:{default:!0}});var p=r(l);x(p,{children:(m,h)=>{var d=_o(),$=u(d);P($,{marker:"**",children:(_,y)=>{o();var I=s("Function ID");n(_,I)},$$slots:{default:!0}});var v=r($,2);g(v,{content:"chat-gemini-id"}),o(),n(m,d)},$$slots:{default:!0}});var f=r(p);x(f,{children:(m,h)=>{var d=xo(),$=u(d);P($,{marker:"**",children:(_,y)=>{o();var I=s("Runtime");n(_,I)},$$slots:{default:!0}});var v=r($,2);P(v,{marker:"**",children:(_,y)=>{o();var I=s("Node.js (18.0)");n(_,I)},$$slots:{default:!0}}),o(),n(m,d)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var de=r(ie);i(de,{children:(t,a)=>{o();var e=yo(),l=r(u(e));P(l,{marker:"**",children:(h,d)=>{o();var $=s("functions");n(h,$)},$$slots:{default:!0}});var p=r(l,2);g(p,{content:"Chat Gemini"});var f=r(p,2);g(f,{content:"src"});var m=r(f,2);g(m,{content:"main.js"}),o(),n(t,e)},$$slots:{default:!0}});var ce=r(de);i(ce,{children:(t,a)=>{o();var e=s("To run the function locally, use the following command:");n(t,e)},$$slots:{default:!0}});var ue=r(ce);b(ue,{content:`backrush run function
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush run function");n(t,e)},$$slots:{default:!0}});var he=r(ue);i(he,{children:(t,a)=>{o();var e=Po(),l=r(u(e));g(l,{content:"Chat Gemini"}),o(),n(t,e)},$$slots:{default:!0}});var pe=r(he);w(pe,{level:2,children:(t,a)=>{o();var e=s("Step 2.2: Writing the function logic");n(t,e)},$$slots:{default:!0}});var $e=r(pe);i($e,{children:(t,a)=>{o();var e=bo(),l=r(u(e));g(l,{content:"src/main.js"}),o(),n(t,e)},$$slots:{default:!0}});var fe=r($e);w(fe,{level:2,children:(t,a)=>{o();var e=s("Import required modules");n(t,e)},$$slots:{default:!0}});var ve=r(fe);i(ve,{children:(t,a)=>{o();var e=Io(),l=r(u(e));g(l,{content:"node-fetch"});var p=r(l,2);g(p,{content:"getStaticFile"}),o(),n(t,e)},$$slots:{default:!0}});var me=r(ve);b(me,{content:`import fetch from 'node-fetch'
import { getStaticFile } from './utils/staticFile.js'
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`import fetch from 'node-fetch'
import { getStaticFile } from './utils/staticFile.js'`);n(t,e)},$$slots:{default:!0}});var ge=r(me);A(ge,{ordered:!1,marker:"-",children:(t,a)=>{var e=To(),l=u(e);x(l,{children:(f,m)=>{var h=ko(),d=u(h);g(d,{content:"fetch"}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{var h=Ao(),d=u(h);g(d,{content:"getStaticFile"}),o(),n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var _e=r(ge);i(_e,{children:(t,a)=>{o();var e=So(),l=r(u(e));g(l,{content:"node-fetch"}),o(),n(t,e)},$$slots:{default:!0}});var xe=r(_e);b(xe,{content:`npm install node-fetch
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("npm install node-fetch");n(t,e)},$$slots:{default:!0}});var we=r(xe);w(we,{level:2,children:(t,a)=>{o();var e=s("Initialize conversation context");n(t,e)},$$slots:{default:!0}});var ye=r(we);i(ye,{children:(t,a)=>{o();var e=s("Next, we'll set up an array to store the conversation context. This array will store the last 5 messages exchanged between the user and the AI. Keeping the conversation history allows the AI to respond with more context-aware replies.");n(t,e)},$$slots:{default:!0}});var Pe=r(ye);b(Pe,{content:`let conversationContext = []
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s("let conversationContext = []");n(t,e)},$$slots:{default:!0}});var be=r(Pe);i(be,{children:(t,a)=>{o();var e=s("We're storing the conversation context in memory, so that the chat history is maintained for the current session. For a production app, you might want to use a database to store this data.");n(t,e)},$$slots:{default:!0}});var Ie=r(be);w(Ie,{level:2,children:(t,a)=>{o();var e=s("Handling GET requests");n(t,e)},$$slots:{default:!0}});var ke=r(Ie);i(ke,{children:(t,a)=>{o();var e=Co(),l=r(u(e));P(l,{marker:"**",children:(h,d)=>{o();var $=s("GET requests");n(h,$)},$$slots:{default:!0}});var p=r(l,2);g(p,{content:"/"});var f=r(p,2);g(f,{content:"getStaticFile"});var m=r(f,2);g(m,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var Ae=r(ke);b(Ae,{content:`if (req.method === 'GET') {
  return res.send(getStaticFile('index.html'), 200, {
    'Content-Type': 'text/html; charset=utf-8',
  })
}
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`if (req.method === 'GET') {
  return res.send(getStaticFile('index.html'), 200, {
    'Content-Type': 'text/html; charset=utf-8',
  })
}`);n(t,e)},$$slots:{default:!0}});var Te=r(Ae);A(Te,{ordered:!1,marker:"-",children:(t,a)=>{var e=Lo(),l=u(e);x(l,{children:(f,m)=>{o();var h=Go(),d=r(u(h));g(d,{content:"GET"});var $=r(d,2);g($,{content:"getStaticFile"});var v=r($,2);g(v,{content:"index.html"}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{o();var h=jo(),d=r(u(h));g(d,{content:"200"});var $=r(d,2);g($,{content:"text/html"}),o(),n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Se=r(Te);w(Se,{level:2,children:(t,a)=>{o();var e=s("Handling POST requests");n(t,e)},$$slots:{default:!0}});var Ce=r(Se);i(Ce,{children:(t,a)=>{o();var e=Mo(),l=r(u(e));P(l,{marker:"**",children:(p,f)=>{o();var m=s("POST requests");n(p,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var Ge=r(Ce);i(Ge,{children:(t,a)=>{o();var e=s("Here's how the POST request handling is structured:");n(t,e)},$$slots:{default:!0}});var je=r(Ge);b(je,{content:`if (req.method === 'POST') {
  const body = req.body

// Add the user's message to the conversation context
  conversationContext.push(\`User: \${body.prompt}\`)

// Keep only the last 5 messages in the conversation
const context = conversationContext.slice(-5).join('\\n')

// Construct the prompt for the AI, providing context and instructions
const prompt = \`\${context}\\nAI: Your output should be HTML. Do not include any heading or body tags. Just the content. Respond to greetings with a polite greeting.\`

const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=\${process.env.GEMINI_API_KEY}\`
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`if (req.method === 'POST') {
  const body = req.body

// Add the user's message to the conversation context
  conversationContext.push(\`User: \${body.prompt}\`)

// Keep only the last 5 messages in the conversation
const context = conversationContext.slice(-5).join('\\n')

// Construct the prompt for the AI, providing context and instructions
const prompt = \`\${context}\\nAI: Your output should be HTML. Do not include any heading or body tags. Just the content. Respond to greetings with a polite greeting.\`

const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=\${process.env.GEMINI_API_KEY}\``);n(t,e)},$$slots:{default:!0}});var Le=r(je);i(Le,{children:(t,a)=>{o();var e=s("Let's break it down:");n(t,e)},$$slots:{default:!0}});var Me=r(Le);A(Me,{ordered:!0,marker:".",children:(t,a)=>{var e=No(),l=u(e);x(l,{children:(h,d)=>{var $=Eo(),v=u($);P(v,{marker:"**",children:(I,k)=>{o();var G=s("Receive the user's message");n(I,G)},$$slots:{default:!0}});var _=r(v,2);g(_,{content:"req.body.prompt"});var y=r(_,2);g(y,{content:"conversationContext"}),o(),n(h,$)},$$slots:{default:!0}});var p=r(l);x(p,{children:(h,d)=>{var $=Fo(),v=u($);P(v,{marker:"**",children:(y,I)=>{o();var k=s("Trim the context");n(y,k)},$$slots:{default:!0}});var _=r(v,2);g(_,{content:".slice(-5)"}),o(),n(h,$)},$$slots:{default:!0}});var f=r(p);x(f,{children:(h,d)=>{var $=Bo(),v=u($);P(v,{marker:"**",children:(_,y)=>{o();var I=s("Build the AI prompt");n(_,I)},$$slots:{default:!0}}),o(),n(h,$)},$$slots:{default:!0}});var m=r(f);x(m,{children:(h,d)=>{var $=Ho(),v=u($);P(v,{marker:"**",children:(y,I)=>{o();var k=s("Construct the API URL");n(y,k)},$$slots:{default:!0}});var _=r(v,2);g(_,{content:"process.env.GEMINI_API_KEY"}),o(),n(h,$)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Ee=r(Me);w(Ee,{level:2,children:(t,a)=>{o();var e=s("Send the prompt to Google Gemini API");n(t,e)},$$slots:{default:!0}});var Fe=r(Ee);i(Fe,{children:(t,a)=>{o();var e=qo(),l=r(u(e));g(l,{content:"fetch"}),o(),n(t,e)},$$slots:{default:!0}});var Be=r(Fe);b(Be,{content:`  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    })

    const data = await response.json()
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received'
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    })

    const data = await response.json()
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received'`);n(t,e)},$$slots:{default:!0}});var He=r(Be);i(He,{children:(t,a)=>{o();var e=s("In the above code:");n(t,e)},$$slots:{default:!0}});var Ne=r(He);A(Ne,{ordered:!1,marker:"-",children:(t,a)=>{var e=Wo(),l=u(e);x(l,{children:(f,m)=>{var h=Oo(),d=u(h);P(d,{marker:"**",children:($,v)=>{o();var _=s("Constructing the fetch request");n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{var h=Ro(),d=u(h);P(d,{marker:"**",children:(v,_)=>{o();var y=s("Extracting the response");n(v,y)},$$slots:{default:!0}});var $=r(d,2);g($,{content:"data.candidates[0]"}),o(),n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var qe=r(Ne);w(qe,{level:2,children:(t,a)=>{o();var e=s("Return the AI response to the user");n(t,e)},$$slots:{default:!0}});var Oe=r(qe);i(Oe,{children:(t,a)=>{o();var e=Do(),l=r(u(e));g(l,{content:"conversationContext"}),o(),n(t,e)},$$slots:{default:!0}});var Re=r(Oe);b(Re,{content:`// Add the AI's response to the conversation context
conversationContext.push(\`AI: \${generatedText}\`)

// Return the AI's response to the client
return res.json({ ok: true, output: generatedText })

  } catch (err) {
    return res.json({ ok: false, error: err.message })
  }
}
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`// Add the AI's response to the conversation context
conversationContext.push(\`AI: \${generatedText}\`)

// Return the AI's response to the client
return res.json({ ok: true, output: generatedText })

  } catch (err) {
    return res.json({ ok: false, error: err.message })
  }
}`);n(t,e)},$$slots:{default:!0}});var We=r(Re);A(We,{ordered:!1,marker:"-",children:(t,a)=>{var e=zo(),l=u(e);x(l,{children:(f,m)=>{var h=Uo(),d=u(h);P(d,{marker:"**",children:($,v)=>{o();var _=s("Adding the AI response to the conversation");n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{var h=Yo(),d=u(h);P(d,{marker:"**",children:($,v)=>{o();var _=s("Returning the response");n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var De=r(We);w(De,{level:1,children:(t,a)=>{o();var e=s("Step 3: Getting your Google Gemini API key");n(t,e)},$$slots:{default:!0}});var Ue=r(De);i(Ue,{children:(t,a)=>{o();var e=s("Before running your function, you need an API key from Google to access the Gemini API.");n(t,e)},$$slots:{default:!0}});var Ye=r(Ue);w(Ye,{level:2,children:(t,a)=>{o();var e=s("Step 3.1: Create your Google Gemini API key");n(t,e)},$$slots:{default:!0}});var ze=r(Ye);i(ze,{children:(t,a)=>{o();var e=s("Follow these steps to generate an API key:");n(t,e)},$$slots:{default:!0}});var Je=r(ze);A(Je,{ordered:!0,marker:".",children:(t,a)=>{var e=Vo(),l=u(e);x(l,{children:(f,m)=>{o();var h=Jo(),d=r(u(h));T(d,{href:"https://aistudio.google.com/",children:($,v)=>{o();var _=s("Google AI Studio");n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{o();var h=Ko(),d=r(u(h));P(d,{marker:"**",children:($,v)=>{o();var _=s('"Get API Key"');n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Ke=r(Je);i(Ke,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/google-ai-studio-dashboard.png",alt:'Screenshot of the Google AI Studio dashboard with the "Get API Key" button highlighted'})},$$slots:{default:!0}});var Ve=r(Ke);A(Ve,{ordered:!0,start:3,marker:".",children:(t,a)=>{x(t,{children:(e,l)=>{o();var p=Xo(),f=r(u(p));P(f,{marker:"**",children:(m,h)=>{o();var d=s('"Create API Key"');n(m,d)},$$slots:{default:!0}}),o(),n(e,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var Xe=r(Ve);i(Xe,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/api-creation-page.png",alt:"*Screenshot of the API key creation page*"})},$$slots:{default:!0}});var Ze=r(Xe);A(Ze,{ordered:!0,start:4,marker:".",children:(t,a)=>{var e=Qo(),l=u(e);x(l,{children:(f,m)=>{o();var h=Zo(),d=r(u(h));P(d,{marker:"**",children:($,v)=>{o();var _=s('"Create API Key"');n($,_)},$$slots:{default:!0}}),o(),n(f,h)},$$slots:{default:!0}});var p=r(l);x(p,{children:(f,m)=>{o();var h=s("Copy the API key and save it securely—you'll need it in the next step.");n(f,h)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Qe=r(Ze);i(Qe,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/api-key-generated.png",alt:"*Screenshot of the API key generated*"})},$$slots:{default:!0}});var et=r(Qe);w(et,{level:2,children:(t,a)=>{o();var e=s("Step 3.2: Store the API key in an environment file");n(t,e)},$$slots:{default:!0}});var tt=r(et);i(tt,{children:(t,a)=>{o();var e=er(),l=r(u(e));g(l,{content:".env"}),o(),n(t,e)},$$slots:{default:!0}});var ot=r(tt);b(ot,{content:`GEMINI_API_KEY=your-google-gemini-api-key
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("GEMINI_API_KEY=your-google-gemini-api-key");n(t,e)},$$slots:{default:!0}});var rt=r(ot);i(rt,{children:(t,a)=>{o();var e=tr(),l=r(u(e));g(l,{content:"your-google-gemini-api-key"}),o(),n(t,e)},$$slots:{default:!0}});var nt=r(rt);w(nt,{level:1,children:(t,a)=>{o();var e=s("Step 4: Writing our utility function");n(t,e)},$$slots:{default:!0}});var at=r(nt);i(at,{children:(t,a)=>{o();var e=or(),l=r(u(e));g(l,{content:"getStaticFile"}),o(),n(t,e)},$$slots:{default:!0}});var st=r(at);w(st,{level:2,children:(t,a)=>{o();var e=rr(),l=r(u(e));g(l,{content:"utils"}),o(),n(t,e)},$$slots:{default:!0}});var lt=r(st);i(lt,{children:(t,a)=>{o();var e=nr(),l=r(u(e));g(l,{content:"src"});var p=r(l,2);g(p,{content:"utils"}),o(),n(t,e)},$$slots:{default:!0}});var it=r(lt);w(it,{level:2,children:(t,a)=>{o();var e=s("Step 4.2: Write the static file reader");n(t,e)},$$slots:{default:!0}});var dt=r(it);i(dt,{children:(t,a)=>{o();var e=ar(),l=r(u(e));g(l,{content:"utils"});var p=r(l,2);g(p,{content:"staticFile.js"}),o(),n(t,e)},$$slots:{default:!0}});var ct=r(dt);b(ct,{content:`import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const staticFolder = path.join(__dirname, '../../static')

/* Function to read and return the content of a static HTML file */
export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString()
}
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const staticFolder = path.join(__dirname, '../../static')

/* Function to read and return the content of a static HTML file */
export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString()
}`);n(t,e)},$$slots:{default:!0}});var ut=r(ct);i(ut,{children:(t,a)=>{o();var e=sr(),l=r(u(e));g(l,{content:"getStaticFile"});var p=r(l,2);g(p,{content:"static"}),o(),n(t,e)},$$slots:{default:!0}});var ht=r(ut);w(ht,{level:1,children:(t,a)=>{o();var e=s("Step 5: Building the frontend");n(t,e)},$$slots:{default:!0}});var pt=r(ht);i(pt,{children:(t,a)=>{o();var e=s("Now that we've set up the backend logic, let's create a simple HTML frontend where users can interact with our Gemini chatbot.");n(t,e)},$$slots:{default:!0}});var $t=r(pt);w($t,{level:2,children:(t,a)=>{o();var e=lr(),l=r(u(e));g(l,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var ft=r($t);i(ft,{children:(t,a)=>{o();var e=ir(),l=r(u(e));g(l,{content:"static"});var p=r(l,2);g(p,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var vt=r(ft);b(vt,{content:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat Gemini - Backrush</title>
    <style>
      /* Add basic styles for the chat interface */
    </style>
  </head>
  <body>
    <div class="chat-container">
      <div class="chat-header">Chat with Gemini</div>
      <div class="chat-box" id="chat-box">
        <!-- Chat messages will be appended here -->
      </div>
      <form id="chat-form" class="chat-form">
        <input
          type="text"
          id="prompt"
          name="prompt"
          class="chat-input"
          placeholder="Type your message..."
          required
        />
        <button type="submit" class="chat-submit">Send</button>
      </form>
    </div>
  </body>
</html>
`,language:"html",process:!0,children:(t,a)=>{o();var e=s(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat Gemini - Backrush</title>
    <style>
      /* Add basic styles for the chat interface */
    </style>
  </head>
  <body>
    <div class="chat-container">
      <div class="chat-header">Chat with Gemini</div>
      <div class="chat-box" id="chat-box">
        <!-- Chat messages will be appended here -->
      </div>
      <form id="chat-form" class="chat-form">
        <input
          type="text"
          id="prompt"
          name="prompt"
          class="chat-input"
          placeholder="Type your message..."
          required
        />
        <button type="submit" class="chat-submit">Send</button>
      </form>
    </div>
  </body>
</html>`);n(t,e)},$$slots:{default:!0}});var mt=r(vt);i(mt,{children:(t,a)=>{o();var e=s("The HTML file contains a basic structure for the chat interface. It has a chat container with a header, a chat box to display messages, and a form for users to input messages.");n(t,e)},$$slots:{default:!0}});var gt=r(mt);i(gt,{children:(t,a)=>{o();var e=dr(),l=r(u(e));g(l,{content:"<script>"});var p=r(l,2);g(p,{content:"<body>"}),o(),n(t,e)},$$slots:{default:!0}});var _t=r(gt);b(_t,{content:`<script>
  document
    .getElementById('chat-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault()
      const prompt = document.getElementById('prompt').value
      const chatBox = document.getElementById('chat-box')

      /* Append the user's message */
      const userMessage = document.createElement('div')
      userMessage.classList.add('chat-message', 'user')
      userMessage.textContent = prompt
      chatBox.appendChild(userMessage)

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight

      /* Clear the input field */
      document.getElementById('prompt').value = ''

      /* Display 'Processing...' in bot message view */
      const botMessage = document.createElement('div')
      botMessage.classList.add('chat-message', 'bot')
      botMessage.textContent = 'Processing...'
      chatBox.appendChild(botMessage)

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight

      /* Send the user's message to the serverless function
        and display the AI's response */
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: prompt }),
        })

        const data = await response.json()

        if (data.ok) botMessage.innerHTML = data.output
        else botMessage.textContent = 'Error: ' + data.error
      } catch (error) {
        botMessage.textContent = 'Error: ' + error.message
      }

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight
    })
<\/script>
`,language:"jsx",process:!0,children:(t,a)=>{o();var e=s(`<script>
  document
    .getElementById('chat-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault()
      const prompt = document.getElementById('prompt').value
      const chatBox = document.getElementById('chat-box')

      /* Append the user's message */
      const userMessage = document.createElement('div')
      userMessage.classList.add('chat-message', 'user')
      userMessage.textContent = prompt
      chatBox.appendChild(userMessage)

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight

      /* Clear the input field */
      document.getElementById('prompt').value = ''

      /* Display 'Processing...' in bot message view */
      const botMessage = document.createElement('div')
      botMessage.classList.add('chat-message', 'bot')
      botMessage.textContent = 'Processing...'
      chatBox.appendChild(botMessage)

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight

      /* Send the user's message to the serverless function
        and display the AI's response */
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: prompt }),
        })

        const data = await response.json()

        if (data.ok) botMessage.innerHTML = data.output
        else botMessage.textContent = 'Error: ' + data.error
      } catch (error) {
        botMessage.textContent = 'Error: ' + error.message
      }

      /* Scroll to the bottom of the chat */
      chatBox.scrollTop = chatBox.scrollHeight
    })
<\/script>`);n(t,e)},$$slots:{default:!0}});var xt=r(_t);i(xt,{children:(t,a)=>{o();var e=s("Let's breakdown our JavaScript logic:");n(t,e)},$$slots:{default:!0}});var wt=r(xt);A(wt,{ordered:!1,marker:"-",children:(t,a)=>{var e=pr(),l=u(e);x(l,{children:(m,h)=>{var d=cr(),$=u(d);P($,{marker:"**",children:(v,_)=>{o();var y=s("Form submission");n(v,y)},$$slots:{default:!0}}),o(),n(m,d)},$$slots:{default:!0}});var p=r(l);x(p,{children:(m,h)=>{var d=ur(),$=u(d);P($,{marker:"**",children:(v,_)=>{o();var y=s("Sending the message to the serverless function");n(v,y)},$$slots:{default:!0}}),o(),n(m,d)},$$slots:{default:!0}});var f=r(p);x(f,{children:(m,h)=>{var d=hr(),$=u(d);P($,{marker:"**",children:(v,_)=>{o();var y=s("Scrolling to the bottom");n(v,y)},$$slots:{default:!0}}),o(),n(m,d)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var yt=r(wt);i(yt,{children:(t,a)=>{o();var e=$r(),l=r(u(e));g(l,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var Pt=r(yt);i(Pt,{children:(t,a)=>{o();var e=s("Before we run the function, let's add some CSS styles to make the chat interface visually appealing.");n(t,e)},$$slots:{default:!0}});var bt=r(Pt);w(bt,{level:2,children:(t,a)=>{o();var e=s("Step 5.2: Adding CSS styles");n(t,e)},$$slots:{default:!0}});var It=r(bt);i(It,{children:(t,a)=>{o();var e=fr(),l=r(u(e));g(l,{content:"<style>"});var p=r(l,2);g(p,{content:"index.html"}),o(),n(t,e)},$$slots:{default:!0}});var kt=r(It);b(kt,{content:`<style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #1e1e2f;
        color: #ffffff;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 10px;
        box-sizing: border-box;
      }
      .chat-container {
        width: 100%;
        max-width: 600px;
        background-color: #2c2c3e;
        border-radius: 10px;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .chat-header {
        background-color: #3b3b51;
        padding: 20px;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        border-bottom: 1px solid #444;
      }
      .chat-box {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .chat-message {
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 8px;
        background-color: #4a4a66;
      }
      .chat-message.user {
        align-self: flex-end;
        background-color: #5865f2;
      }
      .chat-message.bot {
        align-self: flex-start;
        background-color: #4a4a66;
      }
      .chat-form {
        display: flex;
        border-top: 1px solid #444;
      }
      .chat-input {
        flex-grow: 1;
        padding: 15px;
        border: none;
        border-radius: 0;
        background-color: #3b3b51;
        color: #ffffff;
        font-size: 1em;
        outline: none;
      }
      .chat-input::placeholder {
        color: #ccc;
      }
      .chat-submit {
        background-color: #5865f2;
        color: #ffffff;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.3s;
      }
      .chat-submit:hover {
        background-color: #4854d8;
      }
    </style>
`,language:"css",process:!0,children:(t,a)=>{o();var e=s(`<style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #1e1e2f;
        color: #ffffff;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 10px;
        box-sizing: border-box;
      }
      .chat-container {
        width: 100%;
        max-width: 600px;
        background-color: #2c2c3e;
        border-radius: 10px;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .chat-header {
        background-color: #3b3b51;
        padding: 20px;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        border-bottom: 1px solid #444;
      }
      .chat-box {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .chat-message {
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 8px;
        background-color: #4a4a66;
      }
      .chat-message.user {
        align-self: flex-end;
        background-color: #5865f2;
      }
      .chat-message.bot {
        align-self: flex-start;
        background-color: #4a4a66;
      }
      .chat-form {
        display: flex;
        border-top: 1px solid #444;
      }
      .chat-input {
        flex-grow: 1;
        padding: 15px;
        border: none;
        border-radius: 0;
        background-color: #3b3b51;
        color: #ffffff;
        font-size: 1em;
        outline: none;
      }
      .chat-input::placeholder {
        color: #ccc;
      }
      .chat-submit {
        background-color: #5865f2;
        color: #ffffff;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.3s;
      }
      .chat-submit:hover {
        background-color: #4854d8;
      }
    </style>`);n(t,e)},$$slots:{default:!0}});var At=r(kt);i(At,{children:(t,a)=>{o();var e=s("This styling will give the chat interface a modern look and feel. The chat messages will be displayed in alternating colors for user and Gemini messages, and the chat box will scroll automatically as new messages are added.");n(t,e)},$$slots:{default:!0}});var Tt=r(At);w(Tt,{level:1,children:(t,a)=>{o();var e=s("Step 6: Running and testing locally");n(t,e)},$$slots:{default:!0}});var St=r(Tt);i(St,{children:(t,a)=>{o();var e=s("Now that everything is set up, let's run the application locally and test it. If you already have the function running, you can skip the next step.");n(t,e)},$$slots:{default:!0}});var Ct=r(St);w(Ct,{level:2,children:(t,a)=>{o();var e=s("Step 6.1: Running the function locally");n(t,e)},$$slots:{default:!0}});var Gt=r(Ct);i(Gt,{children:(t,a)=>{o();var e=s("Ensure Docker is running, then use the following command to start the serverless function locally:");n(t,e)},$$slots:{default:!0}});var jt=r(Gt);b(jt,{content:`backrush run function
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush run function");n(t,e)},$$slots:{default:!0}});var Lt=r(jt);i(Lt,{children:(t,a)=>{o();var e=s("This will start the Backrush function in your local environment. You should see a message indicating that the function is running and a link to access it.");n(t,e)},$$slots:{default:!0}});var Mt=r(Lt);w(Mt,{level:2,children:(t,a)=>{o();var e=s("Step 6.2: Testing the application");n(t,e)},$$slots:{default:!0}});var Et=r(Mt);i(Et,{children:(t,a)=>{o();var e=s("Open the link provided by the Backrush CLI in your browser. You should see the chat interface with the message input field. Try sending a message to the AI, and you should receive a response in the chat box!");n(t,e)},$$slots:{default:!0}});var Ft=r(Et);i(Ft,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/chat-gemini-demo.gif",alt:"Gif of the chat app in action"})},$$slots:{default:!0}});var Bt=r(Ft);i(Bt,{children:(t,a)=>{o();var e=s("You can also use cURL or Postman to test the serverless function by sending a POST request with a sample prompt:");n(t,e)},$$slots:{default:!0}});var Ht=r(Bt);b(Ht,{content:`curl -X POST http://localhost:3000/ \\
-H "Content-Type: application/json" \\
-d '{"prompt": "Hello, how are you?"}'
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s(`curl -X POST http://localhost:3000/ \\
-H "Content-Type: application/json" \\
-d '{"prompt": "Hello, how are you?"}'`);n(t,e)},$$slots:{default:!0}});var Nt=r(Ht);w(Nt,{level:1,children:(t,a)=>{o();var e=s("Step 7: Deploying the application");n(t,e)},$$slots:{default:!0}});var qt=r(Nt);i(qt,{children:(t,a)=>{o();var e=s("Once you've verified that the application works locally, it's time to deploy it to the Backrush cloud. This will make your chat app accessible to anyone with an internet connection.");n(t,e)},$$slots:{default:!0}});var Ot=r(qt);w(Ot,{level:2,children:(t,a)=>{o();var e=s("Step 7.1: Deploying the function to the cloud");n(t,e)},$$slots:{default:!0}});var Rt=r(Ot);i(Rt,{children:(t,a)=>{o();var e=s("To deploy the serverless function, run the following command:");n(t,e)},$$slots:{default:!0}});var Wt=r(Rt);b(Wt,{content:`backrush push function
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s("backrush push function");n(t,e)},$$slots:{default:!0}});var Dt=r(Wt);i(Dt,{children:(t,a)=>{o();var e=vr(),l=r(u(e));g(l,{content:"Chat Gemini"}),o(),n(t,e)},$$slots:{default:!0}});var Ut=r(Dt);b(Ut,{content:`(base) user backrush-project % backrush push function
? Which functions would you like to push? chat-gemini (chat-gemini)
ℹ  Info: Validating functions ...
ℹ  Info: Checking for changes ...
ℹ  Info: Pushing functions ...
✓  Deployed     • chat-gemini (chat-gemini)
✓  Success: Successfully pushed 1 functions.
`,language:"bash",process:!0,children:(t,a)=>{o();var e=s(`(base) user backrush-project % backrush push function
? Which functions would you like to push? chat-gemini (chat-gemini)
ℹ  Info: Validating functions ...
ℹ  Info: Checking for changes ...
ℹ  Info: Pushing functions ...
✓  Deployed     • chat-gemini (chat-gemini)
✓  Success: Successfully pushed 1 functions.`);n(t,e)},$$slots:{default:!0}});var Yt=r(Ut);i(Yt,{children:(t,a)=>{o();var e=mr(),l=r(u(e));T(l,{href:"https://cloud.backrush.io/console",children:(p,f)=>{o();var m=s("Backrush cloud console");n(p,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var zt=r(Yt);i(zt,{children:(t,a)=>{S(t,{src:"/images/blog/build-a-chat-app-with-backrush-and-gemini/backrush-function-details.png",alt:"Screenshot of the function details in the Backrush console"})},$$slots:{default:!0}});var Jt=r(zt);i(Jt,{children:(t,a)=>{o();var e=s("With the function deployed, you now have a live chat application built with Backrush and Google Gemini API. Users can interact with the AI chatbot in real-time, and you can continue to enhance the app with more features, customizations, and integrations.");n(t,e)},$$slots:{default:!0}});var Kt=r(Jt);w(Kt,{level:1,children:(t,a)=>{o();var e=s("Conclusion");n(t,e)},$$slots:{default:!0}});var Vt=r(Kt);i(Vt,{children:(t,a)=>{o();var e=s("In this tutorial, you've learned how to build a chat application using Backrush local function development and Google Gemini API. We covered everything from setting up the environment to writing the serverless function, creating a frontend, and testing the app locally before deploying it to the cloud.");n(t,e)},$$slots:{default:!0}});var Xt=r(Vt);i(Xt,{children:(t,a)=>{o();var e=s("Backrush's local function development is a powerful tool for building and testing serverless applications efficiently. Now that your chat app is up and running, you can expand its functionality, refine the frontend, or scale it to handle more complex interactions.");n(t,e)},$$slots:{default:!0}});var Zt=r(Xt);i(Zt,{children:(t,a)=>{o();var e=gr(),l=r(u(e));T(l,{href:"https://backrush.io/discord",children:(f,m)=>{o();var h=s("Discord");n(f,h)},$$slots:{default:!0}});var p=r(l,2);T(p,{href:"https://www.linkedin.com/in/ebenezerdon/",children:(f,m)=>{o();var h=s("LinkedIn");n(f,h)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var Qt=r(Zt);i(Qt,{children:(t,a)=>{o();var e=_r(),l=r(u(e));T(l,{href:"https://github.com/backrush-community/chat-gemini-backrush",children:(p,f)=>{o();var m=s("GitHub");n(p,m)},$$slots:{default:!0}}),o(),n(t,e)},$$slots:{default:!0}});var eo=r(Qt);i(eo,{children:(t,a)=>{o();var e=s("Further reading:");n(t,e)},$$slots:{default:!0}});var no=r(eo);A(no,{ordered:!1,marker:"-",children:(t,a)=>{var e=xr(),l=u(e);x(l,{children:(m,h)=>{T(m,{href:"https://backrush.io/docs/products/functions",children:(d,$)=>{o();var v=s("Backrush Functions Documentation");n(d,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=r(l);x(p,{children:(m,h)=>{T(m,{href:"https://backrush.io/blog/post/functions-local-development-guide",children:(d,$)=>{o();var v=s("Local serverless function development with the new Backrush CLI");n(d,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r(p);x(f,{children:(m,h)=>{T(m,{href:"https://backrush.io/blog/post/function-template-prompt-chatgpt",children:(d,$)=>{o();var v=s("Build an intelligent chatbot with ChatGPT and Backrush Functions");n(d,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}}),so(j),n(ro,j)},$$slots:{default:!0}}))}const Yr=Object.freeze(Object.defineProperty({__proto__:null,default:yr,frontmatter:to},Symbol.toStringTag,{value:"Module"}));export{Yr as _,yr as a};
