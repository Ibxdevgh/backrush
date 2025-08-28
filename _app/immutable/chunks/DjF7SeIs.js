import{t as x,b as s,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as st,s as n,f as A,n as o,r as at}from"./NgVQVlRK.js";import{n as it}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import{Y as ut}from"./chHbTAaF.js";import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as S}from"./DXp9_3zM.js";import{F as w}from"./OFUKRh55.js";import{L as tt,I as f}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{L as v}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as lt}from"./CEkRzcqJ.js";const et={layout:"post",title:"Setting up route protection in React Native",description:"Learn how to set up route protection in a React Native application using Backrush.",date:"2025-02-08T00:00:00.000Z",cover:"/images/blog/setting-up-route-protection-in-react-native/cover.png",timeToRead:4,author:"nishant-jain",category:"tutorial",featured:!1,callToAction:!0};var pt=x("A React Native project with Backrush integration - Follow our <!> to set it up",1),ct=x("<!><!>",1),dt=x("To protect the routes in our protected route group, we&#39;ll add an auth check within the protected route group&#39;s <!> file. For now, we&#39;ll use a hardcoded session value to keep things simple:",1),ht=x("To use our auth context, we&#39;ll wrap the <!> layout with the <!>:",1),$t=x("Now that you have a basic route protection system in place, you can enhance it by implementing actual authentication logic using Backrush. If you run into any issues or have questions, the Backrush community on <!> is always ready to help.",1),ft=x("<!><!><!><!><!>",1),vt=x("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function xt(ot){lt(ot,it(et,{children:(rt,mt)=>{var y=vt(),C=st(y);i(C,{children:(e,a)=>{o();var t=s("In this guide, we'll walk through implementing protected routes in React Native using a simplified authentication approach with hardcoded values. The implementation uses a straightforward application structure that's easy to follow along with.");r(e,t)},$$slots:{default:!0}});var R=n(C);i(R,{children:(e,a)=>{o();var t=s("While you can start from scratch, we recommend having a basic React Native project already set up. If you need help with the initial setup, refer to our React Native Backrush SDK Tutorial below:");r(e,t)},$$slots:{default:!0}});var b=n(R);ut(b,{src:"https://www.youtube-nocookie.com/embed/YSUmzHH_OMg?si=EWm7gnPUASMKygrr",thumbnail:"/images/blog/setting-up-route-protection-in-react-native/thumbnail-1.png"});var T=n(b);$(T,{level:1,children:(e,a)=>{o();var t=s("Prerequisites");r(e,t)},$$slots:{default:!0}});var k=n(T);i(k,{children:(e,a)=>{o();var t=s("Before we begin, you should have:");r(e,t)},$$slots:{default:!0}});var L=n(k);tt(L,{ordered:!1,marker:"-",children:(e,a)=>{var t=ct(),u=A(t);f(u,{children:(h,m)=>{o();var g=pt(),l=n(A(g));v(l,{href:"/docs/quick-starts/react-native",children:(_,p)=>{o();var P=s("quick start guide");r(_,P)},$$slots:{default:!0}}),o(),r(h,g)},$$slots:{default:!0}});var d=n(u);f(d,{children:(h,m)=>{o();var g=s("Basic understanding of React Native and navigation concepts");r(h,g)},$$slots:{default:!0}}),r(e,t)},$$slots:{default:!0}});var N=n(L);$(N,{level:1,children:(e,a)=>{o();var t=s("Step 1: Setting up the file structure");r(e,t)},$$slots:{default:!0}});var j=n(N);i(j,{children:(e,a)=>{o();var t=s("First, we'll separate our routes into two categories: protected (which requires authentication) and public. We'll create this separation by wrapping our protected routes in a folder called (app):");r(e,t)},$$slots:{default:!0}});var I=n(j);w(I,{content:`src
├── app
│   ├── _layout.tsx    // Root layout
│   └── signin.tsx     // Public route
│
└── (app)           // Protected routes group
    ├── _layout.tsx    // Protected layout
    └── index.tsx      // Protected home screen
`,process:!0,children:(e,a)=>{o();var t=s(`src
├── app
│   ├── _layout.tsx    // Root layout
│   └── signin.tsx     // Public route
│
└── (app)           // Protected routes group
    ├── _layout.tsx    // Protected layout
    └── index.tsx      // Protected home screen`);r(e,t)},$$slots:{default:!0}});var V=n(I);i(V,{children:(e,a)=>{o();var t=dt(),u=n(A(t));S(u,{content:"_layout.tsx"}),o(),r(e,t)},$$slots:{default:!0}});var q=n(V);w(q,{content:`// app/(app)/_layout.tsx
import { Slot, Redirect} from "expo-router";

export default function AppLayout() {
  const session = false

  return !session ? <Redirect href="/signin"/> : <Slot/>
}
`,language:"typeScript",process:!0,children:(e,a)=>{o();var t=s(`// app/(app)/_layout.tsx
import { Slot, Redirect} from "expo-router";

export default function AppLayout() {
  const session = false

  return !session ? <Redirect href="/signin"/> : <Slot/>
}`);r(e,t)},$$slots:{default:!0}});var O=n(q);i(O,{children:(e,a)=>{o();var t=s("This is as simple as it gets - we're just blocking users from accessing any route that uses this layout if there's no session. However, in a real scenario, we want to pull the user state from some sort of provider, which we'll set up next.");r(e,t)},$$slots:{default:!0}});var D=n(O);$(D,{level:1,children:(e,a)=>{o();var t=s("Step 2: Creating our auth context");r(e,t)},$$slots:{default:!0}});var F=n(D);i(F,{children:(e,a)=>{o();var t=s("Let's create our auth context that we'll use throughout the app:");r(e,t)},$$slots:{default:!0}});var H=n(F);w(H,{content:`// app/context/AuthContext.js
import { useContext, createContext, useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [session, setSession] = useState(false)
    const [loading, setLoading] = useState(true)

    const signIn = async () => {}
    const signOut = async () => {}

   const contextData = {
       user,
       session,
       signIn,
       signOut
   }

  return (
         <AuthContext.Provider value={contextData}>
            {loading ? <SafeAreaView>
                    <Text>Loading...</Text>
                </SafeAreaView> : children}
          </AuthContext.Provider>
         )
}

export {AuthContext, AuthProvider}

const useAuth = () => {return useContext(AuthContext)}

export {useAuth}
`,language:"typescript",process:!0,children:(e,a)=>{o();var t=s(`// app/context/AuthContext.js
import { useContext, createContext, useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [session, setSession] = useState(false)
    const [loading, setLoading] = useState(true)

    const signIn = async () => {}
    const signOut = async () => {}

   const contextData = {
       user,
       session,
       signIn,
       signOut
   }

  return (
         <AuthContext.Provider value={contextData}>
            {loading ? <SafeAreaView>
                    <Text>Loading...</Text>
                </SafeAreaView> : children}
          </AuthContext.Provider>
         )
}

export {AuthContext, AuthProvider}

const useAuth = () => {return useContext(AuthContext)}

export {useAuth}`);r(e,t)},$$slots:{default:!0}});var M=n(H);$(M,{level:1,children:(e,a)=>{o();var t=s("Step 3: Setting up the root layout");r(e,t)},$$slots:{default:!0}});var U=n(M);i(U,{children:(e,a)=>{o();var t=ht(),u=n(A(t));S(u,{content:"root"});var d=n(u,2);S(d,{content:"AuthProvider"}),o(),r(e,t)},$$slots:{default:!0}});var Y=n(U);w(Y,{content:`import { Slot } from 'expo-router';
import { AuthProvider } from './context/AuthContext.js';

export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
`,language:"typescript",process:!0,children:(e,a)=>{o();var t=s(`import { Slot } from 'expo-router';
import { AuthProvider } from './context/AuthContext.js';

export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}`);r(e,t)},$$slots:{default:!0}});var E=n(Y);$(E,{level:1,children:(e,a)=>{o();var t=s("Step 4: Implementing protected routes");r(e,t)},$$slots:{default:!0}});var W=n(E);i(W,{children:(e,a)=>{o();var t=s("Now let's create our protected layout that will guard our private routes:");r(e,t)},$$slots:{default:!0}});var z=n(W);w(z,{content:`// app/(app)/_layout.tsx
import { Slot, Redirect} from "expo-router";
import {useAuth} from '../context/AuthContext.js'

export default function AppLayout() {
  const {user, session} = useAuth()

  return !session ?  <Redirect href="/signin"/> : <Slot/>
}
`,language:"typescript",process:!0,children:(e,a)=>{o();var t=s(`// app/(app)/_layout.tsx
import { Slot, Redirect} from "expo-router";
import {useAuth} from '../context/AuthContext.js'

export default function AppLayout() {
  const {user, session} = useAuth()

  return !session ?  <Redirect href="/signin"/> : <Slot/>
}`);r(e,t)},$$slots:{default:!0}});var B=n(z);$(B,{level:1,children:(e,a)=>{o();var t=s("Step 5: Setting up the sign-in page");r(e,t)},$$slots:{default:!0}});var K=n(B);i(K,{children:(e,a)=>{o();var t=s("Finally, let's handle the case where an authenticated user tries to visit the sign-in page:");r(e,t)},$$slots:{default:!0}});var G=n(K);w(G,{content:`// app/signin.tsx
import { Redirect } from 'expo-router'
import { useAuth } from '@/context/AuthContext'
import { SafeAreaView, Text } from 'react-native'

const signin = () => {
  const {session} = useAuth()

  if (session) return <Redirect href="/"/>

  return (
    <SafeAreaView>
      <Text>signin</Text>
    </SafeAreaView>
  )
}

export default signin
`,language:"typeScript",process:!0,children:(e,a)=>{o();var t=s(`// app/signin.tsx
import { Redirect } from 'expo-router'
import { useAuth } from '@/context/AuthContext'
import { SafeAreaView, Text } from 'react-native'

const signin = () => {
  const {session} = useAuth()

  if (session) return <Redirect href="/"/>

  return (
    <SafeAreaView>
      <Text>signin</Text>
    </SafeAreaView>
  )
}

export default signin`);r(e,t)},$$slots:{default:!0}});var Q=n(G);i(Q,{children:(e,a)=>{o();var t=s("This completes our implementation of protected routes in React Native. You now have a foundation for managing authenticated and public routes using React Context to handle the global session state.");r(e,t)},$$slots:{default:!0}});var Z=n(Q);i(Z,{children:(e,a)=>{o();var t=$t(),u=n(A(t));v(u,{href:"https://discord.com/invite/appwrite",children:(d,h)=>{o();var m=s("Discord");r(d,m)},$$slots:{default:!0}}),o(),r(e,t)},$$slots:{default:!0}});var J=n(Z);$(J,{level:1,children:(e,a)=>{o();var t=s("More resources");r(e,t)},$$slots:{default:!0}});var X=n(J);i(X,{children:(e,a)=>{o();var t=s("If you would like to learn more about React Native and Backrush, we have some resources that you should visit:");r(e,t)},$$slots:{default:!0}});var nt=n(X);tt(nt,{ordered:!1,marker:"-",children:(e,a)=>{var t=ft(),u=A(t);f(u,{children:(l,_)=>{v(l,{href:"https://appwrite.io/docs/quick-starts/react-native",children:(p,P)=>{o();var c=s("Getting started with React Native and Backrush");r(p,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=n(u);f(d,{children:(l,_)=>{v(l,{href:"https://appwrite.io/docs/products/auth/quick-start",children:(p,P)=>{o();var c=s("Authentication with Backrush");r(p,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=n(d);f(h,{children:(l,_)=>{v(l,{href:"https://github.com/divanov11/react-native-appwrite/tree/getting_started",children:(p,P)=>{o();var c=s("React Native Backrush starter project");r(p,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=n(h);f(m,{children:(l,_)=>{v(l,{href:"https://reactnative.dev/docs/environment-setup",children:(p,P)=>{o();var c=s("Quick start with React Native");r(p,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=n(m);f(g,{children:(l,_)=>{v(l,{href:"https://appwrite.io/docs/references/cloud/client-react-native/account",children:(p,P)=>{o();var c=s("Backrush Account API reference");r(p,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(e,t)},$$slots:{default:!0}}),at(y),r(rt,y)},$$slots:{default:!0}}))}const Ht=Object.freeze(Object.defineProperty({__proto__:null,default:xt,frontmatter:et},Symbol.toStringTag,{value:"Module"}));export{Ht as _,xt as a};
