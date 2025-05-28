import{t as i,b as o,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as ut,s as n,f as s,n as e,r as pt}from"../chunks/NgVQVlRK.js";import{n as dt}from"../chunks/B4IyMRKX.js";import{S as K}from"../chunks/B6JyFckC.js";import{M as Z}from"../chunks/hMT8fFzP.js";import{T as ot,a as J}from"../chunks/BHbEtIoO.js";/* empty css                */import{A as mt,a as at}from"../chunks/ftq6Xrtz.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as y}from"../chunks/DXp9_3zM.js";import{F as p}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as g}from"../chunks/D8YsId2T.js";import{S as vt}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import{A as gt}from"../chunks/CqOphJLh.js";const ft={layout:"article",title:"Start with Authentication",description:"Effortlessly add authentication to your apps - simple signup & login in just minutes with Backrush Authentication"};var ht=i("You can use the Backrush <!> to create an account using email and password.",1),$t=i("<!><!><!><!><!><!>",1),_t=i("<!><!>",1),wt=i("After you&#39;ve created your account, users can be logged in using the <!> method.",1),Pt=i("<!><!><!><!><!><!>",1),At=i("<!><!>",1),xt=i("Backrush&#39;s SDKs are stateless, so you need to manage the session state in your app. You can use the <!> method to check if the user is logged in.",1),St=i("<!><!><!><!><!><!>",1),bt=i("<!><!><!>",1),It=i("A common pattern is to use route guards to redirect users to the login page if they are not authenticated. You can check the authentication state on app launch and before entering a protected route by calling <!>.",1),Ct=i("Route guard implementations are <!> and depend on the platform and frame you are using. Take a look at some example usages from different platforms as inspiration.",1),yt=i("You can use <!> to check if the user is logged in before rendering a route.",1),Et=i("You can find a similar example in this <!>.",1),Rt=i("<!><!><!>",1),kt=i("You can use <!> wiht a <!> to check if the user is logged in before rendering a route.",1),Nt=i("<!><!><!><!><!>",1),Lt=i("In the root level <!> file, you can check the authentication state before rendering a route.",1),Dt=i("This will be accessible in the <!> function of each child route.",1),Ot=i("<!><!><!><!>",1),Ut=i("<!><!><!><!>",1),Tt=i("<!><!>",1),jt=i("First, create a <!> to manage the authentication state.",1),Gt=i("<!><!><!><!><!>",1),Yt=i("For Apple platforms, this example uses a <!> but you can use similar concepts with other navigation methods.",1),Mt=i("Initialize Backrush and create an <!>.",1),Bt=i("On launch, you can display a <!> while you verify the authentication state.",1),Jt=i("<!><!><!><!><!><!><!>",1),qt=i("Create some Backrush Service, for example, <!> to manage the authentication state. You can find a version of this example in the <!>.",1),Vt=i("Wrap your routes in some view, for example, <!>, to check the authentication state before rendering a route.",1),Ft=i("In the <!> class, initialize the Backrush service and display the <!> based on the authentication state.",1),Wt=i("<!><!><!><!><!><!><!><!>",1),zt=i("This example will use <!> and <!> to manage the authentication state and redirect users to the login page if they are not authenticated. You can find a version of this example in the <!>.",1),Kt=i("Create a <!> to manage the authentication state.",1),Qt=i("Then, consume the <!> in your <!> component to check the authentication state before rendering a route.",1),Ht=i("<!><!><!><!><!>",1),Xt=i("<!><!><!><!>",1),Zt=i("<!><!>",1),te=i("<!><!>",1),ee=i("<!><!><!>",1),ne=i("<article><!><!><!><!><!></article>");function Ce(it){gt(it,dt(ft,{children:(st,re)=>{var Q=ne(),tt=ut(Q);g(tt,{children:(j,z)=>{e();var L=o("You can get up and running with Backrush Authentication in minutes. You can add basic email and password authentication to your app with just a few lines of code.");t(j,L)},$$slots:{default:!0}});var et=n(tt);K(et,{id:"sign-up",step:1,title:"Signup",children:(j,z)=>{var L=_t(),O=s(L);g(O,{children:(U,E)=>{e();var I=ht(),h=n(s(I));M(h,{href:"/docs/sdks#client",children:(A,C)=>{e();var b=o("Client SDKs");t(A,b)},$$slots:{default:!0}}),e(),t(U,I)},$$slots:{default:!0}});var G=n(O);Z(G,{children:(U,E)=>{var I=$t(),h=s(I);p(h,{content:`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);
`,language:"client-web",process:!0,children:(m,f)=>{e();var c=o(`import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);`);t(m,c)},$$slots:{default:!0}});var A=n(h);p(A,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.create(
    userId: ID.unique(),
    email: 'email@example.com',
    password: 'password',
);
`,language:"client-flutter",process:!0,children:(m,f)=>{e();var c=o(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

final account = Account(client);

final user = await account.create(
    userId: ID.unique(),
    email: 'email@example.com',
    password: 'password',
);`);t(m,c)},$$slots:{default:!0}});var C=n(A);p(C,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.create(
    userId: ID.unique(),
    email: "email@example.com",
    password: "password"
)
`,language:"client-apple",process:!0,children:(m,f)=>{e();var c=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

let account = Account(client)

let user = try await account.create(
    userId: ID.unique(),
    email: "email@example.com",
    password: "password"
)`);t(m,c)},$$slots:{default:!0}});var b=n(C);p(b,{content:`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.create(
    userId = ID.unique(),
    email = "email@example.com",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:(m,f)=>{e();var c=o(`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

val user = account.create(
    userId = ID.unique(),
    email = "email@example.com",
    password = "password"
)`);t(m,c)},$$slots:{default:!0}});var N=n(b);p(N,{content:`mutation {
    accountCreate(userId: "unique()", email: "email@example.com", password: "password") {
        _id
        email
        name
    }
}
`,language:"graphql",process:!0,children:(m,f)=>{e();var c=o(`mutation {
    accountCreate(userId: "unique()", email: "email@example.com", password: "password") {
        _id
        email
        name
    }
}`);t(m,c)},$$slots:{default:!0}});var D=n(N);p(D,{content:`import { Client, Account, ID } from "appwrite";
const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);
`,language:"client-react-native",process:!0,children:(m,f)=>{e();var c=o(`import { Client, Account, ID } from "appwrite";
const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);`);t(m,c)},$$slots:{default:!0}}),t(U,I)},$$slots:{default:!0}}),t(j,L)},$$slots:{default:!0}});var nt=n(et);K(nt,{id:"login",step:2,title:"Login",children:(j,z)=>{var L=At(),O=s(L);g(O,{children:(U,E)=>{e();var I=wt(),h=n(s(I));M(h,{href:"/docs/references/cloud/client-web/account#createEmailPasswordSession",children:(A,C)=>{e();var b=o("Create Email Session");t(A,b)},$$slots:{default:!0}}),e(),t(U,I)},$$slots:{default:!0}});var G=n(O);Z(G,{children:(U,E)=>{var I=Pt(),h=s(I);p(h,{content:`const session = await account.createEmailPasswordSession(
    email, 
    password
);
`,language:"client-web",process:!0,children:(m,f)=>{e();var c=o(`const session = await account.createEmailPasswordSession(
    email, 
    password
);`);t(m,c)},$$slots:{default:!0}});var A=n(h);p(A,{content:`final session = await account.createEmailPasswordSession(
    email: 'email@example.com',
    password: 'password'
);
`,language:"client-flutter",process:!0,children:(m,f)=>{e();var c=o(`final session = await account.createEmailPasswordSession(
    email: 'email@example.com',
    password: 'password'
);`);t(m,c)},$$slots:{default:!0}});var C=n(A);p(C,{content:`let session = try await account.createEmailPasswordSession(
    email: "email@example.com",
    password: "password"
)
`,language:"client-apple",process:!0,children:(m,f)=>{e();var c=o(`let session = try await account.createEmailPasswordSession(
    email: "email@example.com",
    password: "password"
)`);t(m,c)},$$slots:{default:!0}});var b=n(C);p(b,{content:`val session = account.createEmailPasswordSession(
    email = "email@example.com",
    password = "password"
)
`,language:"client-android-kotlin",process:!0,children:(m,f)=>{e();var c=o(`val session = account.createEmailPasswordSession(
    email = "email@example.com",
    password = "password"
)`);t(m,c)},$$slots:{default:!0}});var N=n(b);p(N,{content:`mutation {
    accountcreateEmailPasswordSession(email: "email@example.com", password: "password") {
        _id
        userId
        provider
        expire
    }
}
`,language:"graphql",process:!0,children:(m,f)=>{e();var c=o(`mutation {
    accountcreateEmailPasswordSession(email: "email@example.com", password: "password") {
        _id
        userId
        provider
        expire
    }
}`);t(m,c)},$$slots:{default:!0}});var D=n(N);p(D,{content:`const session = await account.createEmailPasswordSession(
    email, 
    password
);
`,language:"client-react-native",process:!0,children:(m,f)=>{e();var c=o(`const session = await account.createEmailPasswordSession(
    email, 
    password
);`);t(m,c)},$$slots:{default:!0}}),t(U,I)},$$slots:{default:!0}}),t(j,L)},$$slots:{default:!0}});var rt=n(nt);K(rt,{id:"check-authentication-state",step:3,title:"Check authentication state",children:(j,z)=>{var L=bt(),O=s(L);g(O,{children:(E,I)=>{e();var h=o("After logging in, you can check the authentication state of the user.");t(E,h)},$$slots:{default:!0}});var G=n(O);g(G,{children:(E,I)=>{e();var h=xt(),A=n(s(h));M(A,{href:"/docs/references/cloud/client-web/account#get",children:(C,b)=>{e();var N=o("Get Account");t(C,N)},$$slots:{default:!0}}),e(),t(E,h)},$$slots:{default:!0}});var U=n(G);Z(U,{children:(E,I)=>{var h=St(),A=s(h);p(A,{content:`try {
    const user = await account.get();
    // Logged in
} catch (err) {
    // Not logged in
}
`,language:"client-web",process:!0,children:(f,c)=>{e();var R=o(`try {
    const user = await account.get();
    // Logged in
} catch (err) {
    // Not logged in
}`);t(f,R)},$$slots:{default:!0}});var C=n(A);p(C,{content:`try {
    final user = await account.get();
    // Logged in
} catch(e) {
    // Not logged in
}
`,language:"client-flutter",process:!0,children:(f,c)=>{e();var R=o(`try {
    final user = await account.get();
    // Logged in
} catch(e) {
    // Not logged in
}`);t(f,R)},$$slots:{default:!0}});var b=n(C);p(b,{content:`do {
    let user = try account.get()
    // Logged in
} catch {
    // Not logged in
}
`,language:"client-apple",process:!0,children:(f,c)=>{e();var R=o(`do {
    let user = try account.get()
    // Logged in
} catch {
    // Not logged in
}`);t(f,R)},$$slots:{default:!0}});var N=n(b);p(N,{content:`return try {
    val user = account.get()
    // Logged in
} catch (e: BackrushException) {
    // Not logged in
}
`,language:"client-android-kotlin",process:!0,children:(f,c)=>{e();var R=o(`return try {
    val user = account.get()
    // Logged in
} catch (e: BackrushException) {
    // Not logged in
}`);t(f,R)},$$slots:{default:!0}});var D=n(N);p(D,{content:`query {
    accountGet {
        _id
        _createdAt
        _updatedAt
        name
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        prefs {
            data
        }
        accessedAt
    }
}
`,language:"graphql",process:!0,children:(f,c)=>{e();var R=o(`query {
    accountGet {
        _id
        _createdAt
        _updatedAt
        name
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        prefs {
            data
        }
        accessedAt
    }
}`);t(f,R)},$$slots:{default:!0}});var m=n(D);p(m,{content:`try {
    const user = await account.get();
    // Logged in
} catch (err) {
    // Not logged in
}
`,language:"client-react-native",process:!0,children:(f,c)=>{e();var R=o(`try {
    const user = await account.get();
    // Logged in
} catch (err) {
    // Not logged in
}`);t(f,R)},$$slots:{default:!0}}),t(E,h)},$$slots:{default:!0}}),t(j,L)},$$slots:{default:!0}});var ct=n(rt);K(ct,{id:"auth-and-nav",step:4,title:"Navigation (Optional)",children:(j,z)=>{var L=ee(),O=s(L);g(O,{children:(E,I)=>{e();var h=It(),A=n(s(h));y(A,{content:"get()"}),e(),t(E,h)},$$slots:{default:!0}});var G=n(O);g(G,{children:(E,I)=>{e();var h=Ct(),A=n(s(h));vt(A,{marker:"**",children:(C,b)=>{e();var N=o("opinionated");t(C,N)},$$slots:{default:!0}}),e(),t(E,h)},$$slots:{default:!0}});var U=n(G);mt(U,{children:(E,I)=>{var h=te(),A=s(h);at(A,{title:"Web frameworks",children:(b,N)=>{var D=Tt(),m=s(D);g(m,{children:(c,R)=>{e();var Y=o("Before routing to a page, you can check if the user is logged in and redirect them to the login page if they are not.");t(c,Y)},$$slots:{default:!0}});var f=n(m);ot(f,{children:(c,R)=>{var Y=Ut(),V=s(Y);J(V,{id:"react-router",title:"React router",children:(k,q)=>{var $=Rt(),x=s($);g(x,{children:(w,P)=>{e();var a=yt(),d=n(s(a));M(d,{href:"https://reactrouter.com/en/main/route/loader",children:(r,l)=>{e();var u=o("React router loaders");t(r,u)},$$slots:{default:!0}}),e(),t(w,a)},$$slots:{default:!0}});var _=n(x);g(_,{children:(w,P)=>{e();var a=Et(),d=n(s(a));M(d,{href:"https://youtu.be/pyfwQUc5Ssk",children:(r,l)=>{e();var u=o("YouTube video");t(r,u)},$$slots:{default:!0}}),e(),t(w,a)},$$slots:{default:!0}});var S=n(_);p(S,{content:`import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

import Login from "./Login";
import Protected from "./Protected";
import { account } from "./lib/appwrite";
import { redirect } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/protected",
    element: <Protected />,
    loader: async () => {
      try{
        // logged in? pass user to the route
        const user = await account.get();
        return { user };
      }
      catch {
        // not logged in? redirect to login
        throw redirect('/login')
      }
    }
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
`,language:"client-web",process:!0,children:(w,P)=>{e();var a=o(`import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

import Login from "./Login";
import Protected from "./Protected";
import { account } from "./lib/appwrite";
import { redirect } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/protected",
    element: <Protected />,
    loader: async () => {
      try{
        // logged in? pass user to the route
        const user = await account.get();
        return { user };
      }
      catch {
        // not logged in? redirect to login
        throw redirect('/login')
      }
    }
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;`);t(w,a)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}});var F=n(V);J(F,{id:"vue-router",title:"Vue router",children:(k,q)=>{var $=Nt(),x=s($);g(x,{children:(a,d)=>{e();var r=kt(),l=n(s(r));M(l,{href:"https://router.vuejs.org/",children:(v,T)=>{e();var B=o("Vue router");t(v,B)},$$slots:{default:!0}});var u=n(l,2);M(u,{href:"https://pinia.vuejs.org/",children:(v,T)=>{e();var B=o("Pinia store");t(v,B)},$$slots:{default:!0}}),e(),t(a,r)},$$slots:{default:!0}});var _=n(x);g(_,{children:(a,d)=>{e();var r=o("First, create a simple Pinia store to manage the authentication state.");t(a,r)},$$slots:{default:!0}});var S=n(_);p(S,{content:`import { account, ID, type Models } from '@/lib/appwrite'
import type { register } from 'module';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null as null | Models.User<Models.Preferences>,
  }),
getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
},
  actions: {
    async init() {
        try {
            this.user = await account.get();
        }
        catch (error) {
            this.user = null;
        }
    },
    // ... other operations
  },
})
`,language:"client-web",process:!0,children:(a,d)=>{e();var r=o(`import { account, ID, type Models } from '@/lib/appwrite'
import type { register } from 'module';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null as null | Models.User<Models.Preferences>,
  }),
getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
},
  actions: {
    async init() {
        try {
            this.user = await account.get();
        }
        catch (error) {
            this.user = null;
        }
    },
    // ... other operations
  },
})`);t(a,r)},$$slots:{default:!0}});var w=n(S);g(w,{children:(a,d)=>{e();var r=o("Then, check the authentication state before routing to a protected route.");t(a,r)},$$slots:{default:!0}});var P=n(w);p(P,{content:`import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
app.use(createPinia())

const auth = useAuthStore();

auth.init().then(() => {
  router.beforeEach((to, from, next) => {
    // Not logged in? 
    if (to.name == 'protected' && auth.isLoggedIn == false) {
    // Redirect to login if going to a protected route
      next({ name: 'login' })
    } else {
      next()
    }
  })
  app.use(router)
  app.mount('#app')
})
`,language:"client-web",process:!0,children:(a,d)=>{e();var r=o(`import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
app.use(createPinia())

const auth = useAuthStore();

auth.init().then(() => {
  router.beforeEach((to, from, next) => {
    // Not logged in? 
    if (to.name == 'protected' && auth.isLoggedIn == false) {
    // Redirect to login if going to a protected route
      next({ name: 'login' })
    } else {
      next()
    }
  })
  app.use(router)
  app.mount('#app')
})`);t(a,r)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}});var W=n(F);J(W,{id:"angular-router",title:"Angular router",children:(k,q)=>{p(k,{content:`import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { account } from './lib/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.routeConfig?.path === "protected") {
      return this.checkLogin();
    }
    return of(true);
  }

  private checkLogin(): Observable<boolean | UrlTree> {
    return from(account.get()).pipe(
      map(() => true),
      catchError(() => of(this.router.createUrlTree(['/login'])))
    );
  }
}
`,language:"client-web",process:!0,children:($,x)=>{e();var _=o(`import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { account } from './lib/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.routeConfig?.path === "protected") {
      return this.checkLogin();
    }
    return of(true);
  }

  private checkLogin(): Observable<boolean | UrlTree> {
    return from(account.get()).pipe(
      map(() => true),
      catchError(() => of(this.router.createUrlTree(['/login'])))
    );
  }
}`);t($,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var H=n(W);J(H,{id:"svelte",title:"Svelte",children:(k,q)=>{var $=Ot(),x=s($);g(x,{children:(P,a)=>{e();var d=Lt(),r=n(s(d));y(r,{content:"+layout.svelte"}),e(),t(P,d)},$$slots:{default:!0}});var _=n(x);p(_,{content:`// src/routes/+layout.js
import { appwrite } from "$lib/appwrite";

// Turn off SSR globally, turning the project into a static site
export const ssr = false;

export const load = async () => {
  try {
    return {
      account: await appwrite.account.get(),
    };
  } catch {
    return {
      account: null,
    };
  }
};
`,language:"client-web",process:!0,children:(P,a)=>{e();var d=o(`// src/routes/+layout.js
import { appwrite } from "$lib/appwrite";

// Turn off SSR globally, turning the project into a static site
export const ssr = false;

export const load = async () => {
  try {
    return {
      account: await appwrite.account.get(),
    };
  } catch {
    return {
      account: null,
    };
  }
};`);t(P,d)},$$slots:{default:!0}});var S=n(_);g(S,{children:(P,a)=>{e();var d=Dt(),r=n(s(d));y(r,{content:"load"}),e(),t(P,d)},$$slots:{default:!0}});var w=n(S);p(w,{content:`// src/routes/protected/+page.js
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { account } = await parent();
	if (!account) {
		throw redirect(303, '/login');
	}
}
`,language:"client-web",process:!0,children:(P,a)=>{e();var d=o(`// src/routes/protected/+page.js
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { account } = await parent();
	if (!account) {
		throw redirect(303, '/login');
	}
}`);t(P,d)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}}),t(c,Y)},$$slots:{default:!0}}),t(b,D)}});var C=n(A);at(C,{title:"Mobile and native",children:(b,N)=>{var D=Zt(),m=s(D);g(m,{children:(c,R)=>{e();var Y=o("With mobile apps, you can apply similar logic to check the authentication state before displaying a screen or view.");t(c,Y)},$$slots:{default:!0}});var f=n(m);ot(f,{children:(c,R)=>{var Y=Xt(),V=s(Y);J(V,{id:"flutter-go-router",title:"Flutter Go router",children:(k,q)=>{var $=Gt(),x=s($);g(x,{children:(a,d)=>{e();var r=o("This example uses the Flutter Go router as an example, but the same concepts apply to other routing libraries.");t(a,r)},$$slots:{default:!0}});var _=n(x);g(_,{children:(a,d)=>{e();var r=jt(),l=n(s(r));y(l,{content:"ChangeNotifier"}),e(),t(a,r)},$$slots:{default:!0}});var S=n(_);p(S,{content:`import 'package:flutter/material.dart';
import 'package:appwrite/appwrite.dart' show Client, ID;
import 'package:appwrite/appwrite.dart' as Backrush;
import 'package:appwrite/models.dart' show User;

class Account extends ChangeNotifier {
  final Backrush.Account _account;

  User? _user;
  User? get user => _user;

  Account(Client client) : _account = Backrush.Account(client);

  Future<void> init() async {
    try {
      _user = await _account.get();
      
      notifyListeners();
    } catch(e) {
      debugPrint(e.toString());
      rethrow;
    }
  }
  // ... other operations
}
`,language:"client-flutter",process:!0,children:(a,d)=>{e();var r=o(`import 'package:flutter/material.dart';
import 'package:appwrite/appwrite.dart' show Client, ID;
import 'package:appwrite/appwrite.dart' as Backrush;
import 'package:appwrite/models.dart' show User;

class Account extends ChangeNotifier {
  final Backrush.Account _account;

  User? _user;
  User? get user => _user;

  Account(Client client) : _account = Backrush.Account(client);

  Future<void> init() async {
    try {
      _user = await _account.get();
      
      notifyListeners();
    } catch(e) {
      debugPrint(e.toString());
      rethrow;
    }
  }
  // ... other operations
}`);t(a,r)},$$slots:{default:!0}});var w=n(S);g(w,{children:(a,d)=>{e();var r=o("You can then use this state to redirect users to the login page if they are not authenticated.");t(a,r)},$$slots:{default:!0}});var P=n(w);p(P,{content:`import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import './providers/account.dart';

import './pages/login.dart';
import './pages/protected.dart';

String Function(BuildContext context, GoRouterState state) redirect = 
  (BuildContext context, GoRouterState state) => 
    context.read<Account>().user == null && state.matchedLocation != '/login'
    ? '/login' 
    : state.matchedLocation;

final router = GoRouter(
  redirect: redirect,
  initialLocation: '/login',
  routes: [
    GoRoute(
      path: '/login',
      pageBuilder: (context, state) => const MaterialPage(child: LoginPage()),
    ),
    GoRoute(
      path: '/protected',
      pageBuilder: (context, state) => const MaterialPage(child: ProtectedPage()),
    )
  ],  
);
`,language:"client-flutter",process:!0,children:(a,d)=>{e();var r=o(`import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import './providers/account.dart';

import './pages/login.dart';
import './pages/protected.dart';

String Function(BuildContext context, GoRouterState state) redirect = 
  (BuildContext context, GoRouterState state) => 
    context.read<Account>().user == null && state.matchedLocation != '/login'
    ? '/login' 
    : state.matchedLocation;

final router = GoRouter(
  redirect: redirect,
  initialLocation: '/login',
  routes: [
    GoRoute(
      path: '/login',
      pageBuilder: (context, state) => const MaterialPage(child: LoginPage()),
    ),
    GoRoute(
      path: '/protected',
      pageBuilder: (context, state) => const MaterialPage(child: ProtectedPage()),
    )
  ],  
);`);t(a,r)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}});var F=n(V);J(F,{id:"apple",title:"Apple",children:(k,q)=>{var $=Jt(),x=s($);g(x,{children:(r,l)=>{e();var u=Yt(),v=n(s(u));y(v,{content:"NavigationStack"}),e(),t(r,u)},$$slots:{default:!0}});var _=n(x);g(_,{children:(r,l)=>{e();var u=Mt(),v=n(s(u));y(v,{content:"BackrushService"}),e(),t(r,u)},$$slots:{default:!0}});var S=n(_);p(S,{content:`import Foundation
import Backrush
import BackrushModels
import JSONCodable

class Backrush {
    var client: Client
    var account: Account
    var databases: Databases
    let databaseId = "default"
    let collectionId = "ideas-tracker"

    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
            .setProject("<PROJECT_ID>")
        
        self.account = Account(client)
    }
    public func getUser() async throws -> User<[String: AnyCodable]> {
        let user = try await account.get()
        // you can also store the user in a local store
        return user
    }
}

`,language:"client-apple",process:!0,children:(r,l)=>{e();var u=o(`import Foundation
import Backrush
import BackrushModels
import JSONCodable

class Backrush {
    var client: Client
    var account: Account
    var databases: Databases
    let databaseId = "default"
    let collectionId = "ideas-tracker"

    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
            .setProject("<PROJECT_ID>")
        
        self.account = Account(client)
    }
    public func getUser() async throws -> User<[String: AnyCodable]> {
        let user = try await account.get()
        // you can also store the user in a local store
        return user
    }
}`);t(r,u)},$$slots:{default:!0}});var w=n(S);g(w,{children:(r,l)=>{e();var u=Bt(),v=n(s(u));y(v,{content:"SplashView"}),e(),t(r,u)},$$slots:{default:!0}});var P=n(w);p(P,{content:`import Foundation
import SwiftUI

struct SplashView: View {
    @EnvironmentObject private var router: Router
    @EnvironmentObject private var BackrushService: BackrushService

    var body: some View {
        NavigationStack(path: $router.routes) {
            VStack {
                Text("Example App")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .padding()
            }.task {
                let user = await self.BackrushService.getUser();

                if !user {
                    router.pushReplacement(.login)
                } else {
                    router.pushReplacement(.protected)
                }
            }
            .navigationDestination(for: Route.self, destination: { $0 })

        }
    }
}
`,language:"client-apple",process:!0,children:(r,l)=>{e();var u=o(`import Foundation
import SwiftUI

struct SplashView: View {
    @EnvironmentObject private var router: Router
    @EnvironmentObject private var BackrushService: BackrushService

    var body: some View {
        NavigationStack(path: $router.routes) {
            VStack {
                Text("Example App")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .padding()
            }.task {
                let user = await self.BackrushService.getUser();

                if !user {
                    router.pushReplacement(.login)
                } else {
                    router.pushReplacement(.protected)
                }
            }
            .navigationDestination(for: Route.self, destination: { $0 })

        }
    }
}`);t(r,u)},$$slots:{default:!0}});var a=n(P);g(a,{children:(r,l)=>{e();var u=o("In your router, you can also check the authentication state before rendering a route.");t(r,u)},$$slots:{default:!0}});var d=n(a);p(d,{content:`final class Router: ObservableObject {
    @Published var routes = [Route]()

    func push(_ screen: Route) {
        // Make sure you've already stored the user and auth state in a local store
        if (screen == .protected && !isLoggedIn){
            routes.append(.login)
        }
        routes.append(screen)
    }
    // ... other operations
}
`,language:"client-apple",process:!0,children:(r,l)=>{e();var u=o(`final class Router: ObservableObject {
    @Published var routes = [Route]()

    func push(_ screen: Route) {
        // Make sure you've already stored the user and auth state in a local store
        if (screen == .protected && !isLoggedIn){
            routes.append(.login)
        }
        routes.append(screen)
    }
    // ... other operations
}`);t(r,u)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}});var W=n(F);J(W,{id:"android",title:"Android",children:(k,q)=>{var $=Wt(),x=s($);g(x,{children:(l,u)=>{e();var v=qt(),T=n(s(v));y(T,{content:"BackrushService"});var B=n(T,2);M(B,{href:"/docs/tutorials/android/step-1",children:(X,oe)=>{e();var lt=o("Backrush Android tutorial");t(X,lt)},$$slots:{default:!0}}),e(),t(l,v)},$$slots:{default:!0}});var _=n(x);p(_,{content:`//... imports

object Backrush {
    private const val ENDPOINT = "https://<REGION>.cloud.appwrite.io/v1"
    private const val PROJECT_ID = "<PROJECT_ID>"

    private lateinit var client: Client

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint(ENDPOINT)
            .setProject(PROJECT_ID)
    }
}

`,language:"client-android-kotlin",process:!0,children:(l,u)=>{e();var v=o(`//... imports

object Backrush {
    private const val ENDPOINT = "https://<REGION>.cloud.appwrite.io/v1"
    private const val PROJECT_ID = "<PROJECT_ID>"

    private lateinit var client: Client

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint(ENDPOINT)
            .setProject(PROJECT_ID)
    }
}`);t(l,v)},$$slots:{default:!0}});var S=n(_);g(S,{children:(l,u)=>{e();var v=o("Then, create an auth service to manage the authentication state.");t(l,v)},$$slots:{default:!0}});var w=n(S);p(w,{content:`//... imports

class AccountService(client: Client) {
    private val account = Account(client)

    suspend fun getLoggedIn(): User<Map<String, Any>>? {
        return try {
            account.get()
        } catch (e: BackrushException) {
            null
        }
    }   
    // ... other operations
}
`,language:"client-android-kotlin",process:!0,children:(l,u)=>{e();var v=o(`//... imports

class AccountService(client: Client) {
    private val account = Account(client)

    suspend fun getLoggedIn(): User<Map<String, Any>>? {
        return try {
            account.get()
        } catch (e: BackrushException) {
            null
        }
    }   
    // ... other operations
}`);t(l,v)},$$slots:{default:!0}});var P=n(w);g(P,{children:(l,u)=>{e();var v=Vt(),T=n(s(v));y(T,{content:"AppContent"}),e(),t(l,v)},$$slots:{default:!0}});var a=n(P);p(a,{content:`@Composable
private fun AppContent(accountService: AccountService) {
    val user = remember { mutableStateOf<User<Map<String, Any>>?>(null) }
    val screen = remember { mutableStateOf(Screen.Protected) }

    LaunchedEffect(screen) {
        user.value = accountService.getLoggedIn()
    }

    Scaffold(bottomBar = { AppBottomBar(screen) }) { padding ->
        Column(modifier = Modifier.padding(padding)) {
            when (screen.value) {
                Screen.User -> LoginScreen(user, accountService)
                else -> ProtectedScreen(user.value)
            }
        }
    }
}
`,language:"client-android-kotlin",process:!0,children:(l,u)=>{e();var v=o(`@Composable
private fun AppContent(accountService: AccountService) {
    val user = remember { mutableStateOf<User<Map<String, Any>>?>(null) }
    val screen = remember { mutableStateOf(Screen.Protected) }

    LaunchedEffect(screen) {
        user.value = accountService.getLoggedIn()
    }

    Scaffold(bottomBar = { AppBottomBar(screen) }) { padding ->
        Column(modifier = Modifier.padding(padding)) {
            when (screen.value) {
                Screen.User -> LoginScreen(user, accountService)
                else -> ProtectedScreen(user.value)
            }
        }
    }
}`);t(l,v)},$$slots:{default:!0}});var d=n(a);g(d,{children:(l,u)=>{e();var v=Ft(),T=n(s(v));y(T,{content:"MainActivity"});var B=n(T,2);y(B,{content:"AppContent"}),e(),t(l,v)},$$slots:{default:!0}});var r=n(d);p(r,{content:`// ...imports 
In the \`MainActivity\` class, initialize the Backrush service.
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Backrush.init(applicationContext)

        setContent {
            // Update this line 👇
            AppContent(Backrush.account)
        }
    }
}
`,language:"client-android-kotlin",process:!0,children:(l,u)=>{e();var v=o(`// ...imports 
In the \`MainActivity\` class, initialize the Backrush service.
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Backrush.init(applicationContext)

        setContent {
            // Update this line 👇
            AppContent(Backrush.account)
        }
    }
}`);t(l,v)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}});var H=n(W);J(H,{id:"react-native",title:"React Native",children:(k,q)=>{var $=Ht(),x=s($);g(x,{children:(a,d)=>{e();var r=zt(),l=n(s(r));y(l,{content:"@react-navigation/native"});var u=n(l,2);y(u,{content:"@react-navigation/native-stack"});var v=n(u,2);M(v,{href:"/docs/tutorials/android/step-1",children:(T,B)=>{e();var X=o("Backrush Android tutorial");t(T,X)},$$slots:{default:!0}}),e(),t(a,r)},$$slots:{default:!0}});var _=n(x);g(_,{children:(a,d)=>{e();var r=Kt(),l=n(s(r));y(l,{content:"UserContext"}),e(),t(a,r)},$$slots:{default:!0}});var S=n(_);p(S,{content:`import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './contexts/UserContext';
import { Router } from './lib/Router';

export default function App() {
  return (
    <UserProvider>
        <Router />
    </UserProvider >
  );
}
`,language:"client-react-native",process:!0,children:(a,d)=>{e();var r=o(`import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './contexts/UserContext';
import { Router } from './lib/Router';

export default function App() {
  return (
    <UserProvider>
        <Router />
    </UserProvider >
  );
}`);t(a,r)},$$slots:{default:!0}});var w=n(S);g(w,{children:(a,d)=>{e();var r=Qt(),l=n(s(r));y(l,{content:"UserContext"});var u=n(l,2);y(u,{content:"Router"}),e(),t(a,r)},$$slots:{default:!0}});var P=n(w);p(P,{content:`import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/Login';
import ProtectedSCreen from '../views/Protected';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser } from '../contexts/UserContext';

const Stack = createNativeStackNavigator();
export function Router() {
    const user = useUser();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user.current == null ? (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Login' }}
                    />
                ) : (
                    <Stack.Screen
                        name="Protected"
                        component={ProtectedSCreen}
                        options={{ title: 'Protected' }}
                    />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}
`,language:"client-react-native",process:!0,children:(a,d)=>{e();var r=o(`import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/Login';
import ProtectedSCreen from '../views/Protected';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser } from '../contexts/UserContext';

const Stack = createNativeStackNavigator();
export function Router() {
    const user = useUser();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user.current == null ? (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Login' }}
                    />
                ) : (
                    <Stack.Screen
                        name="Protected"
                        component={ProtectedSCreen}
                        options={{ title: 'Protected' }}
                    />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}`);t(a,r)},$$slots:{default:!0}}),t(k,$)},$$slots:{default:!0}}),t(c,Y)},$$slots:{default:!0}}),t(b,D)}}),t(E,h)}}),t(j,L)},$$slots:{default:!0}}),pt(Q),t(st,Q)},$$slots:{default:!0}}))}export{Ce as component};
