import{t as $,b as i,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as M,s as o,f as v,n as r,r as Q}from"./NgVQVlRK.js";import{n as Z}from"./B4IyMRKX.js";import{H as _}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as l}from"./DXp9_3zM.js";import{F as q}from"./OFUKRh55.js";import{L as E,I as g}from"./BhmTgGWB.js";import{P as p}from"./D8YsId2T.js";import{L as R}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as J}from"./CEkRzcqJ.js";const z={layout:"post",title:"Setting up protected routes in React",description:"Learn how to set up protected routes in React in this easy tutorial.",date:"2024-10-02T00:00:00.000Z",cover:"/images/blog/react-protected-routes/cover.png",timeToRead:4,author:"dennis-ivy",category:"tutorial",featured:!1};var K=$("To accomplish this, we will create a component called <!> that wraps around any routes that need protection. This setup allows us to run an authentication check before rendering these pages. Here are the steps.",1),V=$("First, create a new file named <!>. In this file, you will import <!> and <!> from React Router Dom. <!> allows for rendering nested routes, while <!> will be used to redirect our users if they are not authenticated.",1),X=$("Below is a basic structure for the <!> component:",1),Y=$("With the <!> component created, the next step is to wrap the routes we want to protect. We can nest all child routes by using the standard <!> component and by passing in <!> as the element into the parent route.",1),tt=$("When a user attempts to access <!> or <!>, the <!> component checks if a user is authenticated. If the user exists, the corresponding component uses <!> to allow routing to continue down to the nested routes. If not, the user is redirected to the login page.",1),et=$("<!><!><!><!>",1),ot=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function rt(U){J(U,Z(z,{children:(D,nt)=>{var P=ot(),x=M(P);p(x,{children:(e,a)=>{r();var t=i("In this tutorial, we will explore a straightforward method for implementing protected routes in a React application. The aim is to ensure that users can only access certain pages, such as home and profile, after passing an authentication check. If a user is not authenticated, they will be redirected to the login page.");n(e,t)},$$slots:{default:!0}});var b=o(x);_(b,{level:1,children:(e,a)=>{r();var t=i("React protected routes");n(e,t)},$$slots:{default:!0}});var k=o(b);p(k,{children:(e,a)=>{r();var t=K(),s=o(v(t));l(s,{content:"ProtectedRoutes"}),r(),n(e,t)},$$slots:{default:!0}});var I=o(k);_(I,{level:2,children:(e,a)=>{r();var t=i("Creating the component");n(e,t)},$$slots:{default:!0}});var B=o(I);p(B,{children:(e,a)=>{r();var t=V(),s=o(v(t));l(s,{content:"ProtectedRoutes.jsx"});var u=o(s,2);l(u,{content:"Outlet"});var c=o(u,2);l(c,{content:"Navigate"});var f=o(c,2);l(f,{content:"Outlet"});var d=o(f,2);l(d,{content:"Navigate"}),r(),n(e,t)},$$slots:{default:!0}});var O=o(B);p(O,{children:(e,a)=>{r();var t=X(),s=o(v(t));l(s,{content:"ProtectedRoutes"}),r(),n(e,t)},$$slots:{default:!0}});var T=o(O);q(T,{content:`
import { Outlet, navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const user = null; // Simulate an unauthenticated user
    return user ? <Outlet /> : <Navigate to="/login"/> // Redirect to login if not authenticated
 
export default ProtectedRoutes;

`,language:"jsx",process:!0,children:(e,a)=>{r();var t=i(`import { Outlet, navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const user = null; // Simulate an unauthenticated user
    return user ? <Outlet /> : <Navigate to="/login"/> // Redirect to login if not authenticated
 
export default ProtectedRoutes;`);n(e,t)},$$slots:{default:!0}});var j=o(T);_(j,{level:2,children:(e,a)=>{r();var t=i("Integrating the component into your app");n(e,t)},$$slots:{default:!0}});var L=o(j);p(L,{children:(e,a)=>{r();var t=Y(),s=o(v(t));l(s,{content:"ProtectedRoutes"});var u=o(s,2);l(u,{content:"<Route>"});var c=o(u,2);l(c,{content:"<ProtectedRoutes/>"}),r(),n(e,t)},$$slots:{default:!0}});var S=o(L);q(S,{content:`//App.jsx
...
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App()｛
		return
		<BrowserRouter>
			<Routes>
				<Route element=｛<Login/>｝ path="/login"'/>
				
				{/* 👇 Wrap your protected routes */}
				<Route element={<ProtectedRoutes/>}>
						＜Route element=｛<Home/>｝ path="/"/＞
						＜Route element= ｛<Profile/>｝ path="/profile"/>
				</Route>	
				
			</Routes>
		</BrowserRouter>
}

`,language:"jsx",process:!0,children:(e,a)=>{r();var t=i(`//App.jsx
...
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App()｛
		return
		<BrowserRouter>
			<Routes>
				<Route element=｛<Login/>｝ path="/login"'/>
				
				{/* 👇 Wrap your protected routes */}
				<Route element={<ProtectedRoutes/>}>
						＜Route element=｛<Home/>｝ path="/"/＞
						＜Route element= ｛<Profile/>｝ path="/profile"/>
				</Route>	
				
			</Routes>
		</BrowserRouter>
}`);n(e,t)},$$slots:{default:!0}});var A=o(S);_(A,{level:2,children:(e,a)=>{r();var t=i("Understanding the flow");n(e,t)},$$slots:{default:!0}});var C=o(A);p(C,{children:(e,a)=>{r();var t=tt(),s=o(v(t));l(s,{content:"/home"});var u=o(s,2);l(u,{content:"/profile"});var c=o(u,2);l(c,{content:"ProtectedRoutes"});var f=o(c,2);l(f,{content:"Outlet"}),r(),n(e,t)},$$slots:{default:!0}});var H=o(C);_(H,{level:1,children:(e,a)=>{r();var t=i("Testing your setup");n(e,t)},$$slots:{default:!0}});var N=o(H);p(N,{children:(e,a)=>{r();var t=i("After completing the setup, it’s important to test the application. Try navigating to the protected routes. If authentication has not been established, you should be redirected to the login page.");n(e,t)},$$slots:{default:!0}});var W=o(N);_(W,{level:1,children:(e,a)=>{r();var t=i("Conclusion");n(e,t)},$$slots:{default:!0}});var F=o(W);p(F,{children:(e,a)=>{r();var t=i("In summary, you have implemented protected routes in your React application. By creating a dedicated component to manage authentication checks, you can ensure that only authorized users gain access to specific pages. This method provides a clear and efficient way to handle route protection in your application. Check out some more React resources below:");n(e,t)},$$slots:{default:!0}});var G=o(F);E(G,{ordered:!1,marker:"-",children:(e,a)=>{var t=et(),s=v(t);g(s,{children:(d,w)=>{R(d,{href:"https://www.youtube.com/watch?v=pyfwQUc5Ssk",children:(h,y)=>{r();var m=i("Protected routes in React video tutorial");n(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=o(s);g(u,{children:(d,w)=>{R(d,{href:"https://backrush.io/docs/quick-starts/react-native",children:(h,y)=>{r();var m=i("React quick start with Backrush");n(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=o(u);g(c,{children:(d,w)=>{R(d,{href:"https://backrush.io/blog/post/set-up-google-auth-backrush-react",children:(h,y)=>{r();var m=i("Set up Google auth in React");n(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(c);g(f,{children:(d,w)=>{R(d,{href:"https://backrush.io/blog/post/building-cross-platform-applications-with-react-native",children:(h,y)=>{r();var m=i("Build a cross-platform application in React Native");n(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(e,t)},$$slots:{default:!0}}),Q(P),n(D,P)},$$slots:{default:!0}}))}const bt=Object.freeze(Object.defineProperty({__proto__:null,default:rt,frontmatter:z},Symbol.toStringTag,{value:"Module"}));export{bt as _,rt as a};
