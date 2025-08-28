import{t as m,b as c,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as H,s as e,f as P,n as t,r as z}from"../chunks/NgVQVlRK.js";import{n as G}from"../chunks/B4IyMRKX.js";import{S as R}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as j,a as N}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as w}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as I}from"../chunks/DXp9_3zM.js";import{F as y}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as l}from"../chunks/D8YsId2T.js";import{S as k}from"../chunks/yHjwcyUH.js";import{L as b}from"../chunks/yh4_9ChP.js";import{A as K}from"../chunks/CqOphJLh.js";const M={layout:"article",title:"Start with Refine",description:"Build Refine apps with Backrush and learn how to use our powerful backend to add authentication, user management, file storage, and more.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var Q=m("Head to the <!>.",1),X=m("Then, under <!>, add a <!>. The <!> should be <!>.",1),Z=m("<!><!><!><!><!><!><!><!>",1),ee=m("<!><!>",1),te=m("Using the <!> preset eliminates the need for extra dependencies for a quick start.",1),re=m("Then follow <!>.",1),oe=m("<!><!><!><!>",1),ne=m("Find your project&#39;s ID in the <!> page.",1),ae=m("Navigate to <!> and add your API credentials.",1),ie=m("<!><!><!><!><!>",1),se=m("Replace the code in <!> with the following.",1),pe=m("<!><!>",1),le=m("Run your project with <!> and open <!> in your browser.",1),de=m("<article><!><!><!><!><!><!><!></article>");function Ne(J){K(J,G(M,{children:(F,ue)=>{var x=de(),D=H(x);l(D,{children:(v,g)=>{t();var d=c("Learn how to setup your first Refine project powered by Backrush.");r(v,d)},$$slots:{default:!0}});var W=e(D);R(W,{id:"step-1",step:1,title:"Create project",children:(v,g)=>{var d=Z(),$=P(d);l($,{children:(n,_)=>{t();var a=Q(),A=e(P(a));b(A,{href:"https://cloud.appwrite.io/console",children:(E,O)=>{t();var L=c("Backrush Console");r(E,L)},$$slots:{default:!0}}),t(),r(n,a)},$$slots:{default:!0}});var f=e($);j(f,{children:(n,_)=>{l(n,{children:(a,A)=>{w(a,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var i=e(f);N(i,{children:(n,_)=>{l(n,{children:(a,A)=>{w(a,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var h=e(i);l(h,{children:(n,_)=>{t();var a=c("If this is your first time using Backrush, create an account and create your first project.");r(n,a)},$$slots:{default:!0}});var o=e(h);l(o,{children:(n,_)=>{t();var a=X(),A=e(P(a));k(A,{marker:"**",children:(C,U)=>{t();var T=c("Add a platform");r(C,T)},$$slots:{default:!0}});var E=e(A,2);k(E,{marker:"**",children:(C,U)=>{t();var T=c("Web app");r(C,T)},$$slots:{default:!0}});var O=e(E,2);k(O,{marker:"**",children:(C,U)=>{t();var T=c("Hostname");r(C,T)},$$slots:{default:!0}});var L=e(O,2);I(L,{content:"localhost"}),t(),r(n,a)},$$slots:{default:!0}});var s=e(o);j(s,{children:(n,_)=>{l(n,{children:(a,A)=>{w(a,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var p=e(s);N(p,{children:(n,_)=>{l(n,{children:(a,A)=>{w(a,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var u=e(p);l(u,{children:(n,_)=>{t();var a=c("You can skip optional steps.");r(n,a)},$$slots:{default:!0}}),r(v,d)},$$slots:{default:!0}});var S=e(W);R(S,{id:"step-2",step:2,title:"Create Refine project",children:(v,g)=>{var d=ee(),$=P(d);l($,{children:(i,h)=>{t();var o=c("Create a Refine project with Backrush support.");r(i,o)},$$slots:{default:!0}});var f=e($);y(f,{content:`npm create refine-app@latest -- --preset refine-appwrite
`,language:"sh",process:!0,children:(i,h)=>{t();var o=c("npm create refine-app@latest -- --preset refine-appwrite");r(i,o)},$$slots:{default:!0}}),r(v,d)},$$slots:{default:!0}});var B=e(S);R(B,{id:"step-3",step:3,title:"Install Backrush",children:(v,g)=>{var d=oe(),$=P(d);l($,{children:(o,s)=>{t();var p=te(),u=e(P(p));I(u,{content:"refine-appwrite"}),t(),r(o,p)},$$slots:{default:!0}});var f=e($);l(f,{children:(o,s)=>{t();var p=c("If you want to integrate Backrush into an existing Refine app, simply use this command:");r(o,p)},$$slots:{default:!0}});var i=e(f);y(i,{content:`npm install @refinedev/appwrite
`,language:"sh",process:!0,children:(o,s)=>{t();var p=c("npm install @refinedev/appwrite");r(o,p)},$$slots:{default:!0}});var h=e(i);l(h,{children:(o,s)=>{t();var p=re(),u=e(P(p));b(u,{href:"https://refine.dev/docs/packages/documentation/data-providers/appwrite",children:(n,_)=>{t();var a=c("this guide on the Refine documentation site");r(n,a)},$$slots:{default:!0}}),t(),r(o,p)},$$slots:{default:!0}}),r(v,d)},$$slots:{default:!0}});var V=e(B);R(V,{id:"step-4",step:4,title:"Import Backrush",children:(v,g)=>{var d=ie(),$=P(d);l($,{children:(s,p)=>{t();var u=ne(),n=e(P(u));k(n,{marker:"**",children:(_,a)=>{t();var A=c("Settings");r(_,A)},$$slots:{default:!0}}),t(),r(s,u)},$$slots:{default:!0}});var f=e($);j(f,{children:(s,p)=>{l(s,{children:(u,n)=>{w(u,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var i=e(f);N(i,{children:(s,p)=>{l(s,{children:(u,n)=>{w(u,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var h=e(i);l(h,{children:(s,p)=>{t();var u=ae(),n=e(P(u));I(n,{content:"src/utility/appwriteClient.ts"}),t(),r(s,u)},$$slots:{default:!0}});var o=e(h);y(o,{content:`import { Account, Backrush, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = '<YOUR_API_ENDPOINT>'; // Replace with your Backrush API Endpoint
const APPWRITE_PROJECT = "<PROJECT_ID>"; // Replace with your project ID

const appwriteClient = new Backrush();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };

`,language:"ts",process:!0,children:(s,p)=>{t();var u=c(`import { Account, Backrush, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = '<YOUR_API_ENDPOINT>'; // Replace with your Backrush API Endpoint
const APPWRITE_PROJECT = "<PROJECT_ID>"; // Replace with your project ID

const appwriteClient = new Backrush();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };`);r(s,u)},$$slots:{default:!0}}),r(v,d)},$$slots:{default:!0}});var q=e(V);R(q,{id:"step-5",step:5,title:"Create a login page",children:(v,g)=>{var d=pe(),$=P(d);l($,{children:(i,h)=>{t();var o=se(),s=e(P(o));I(s,{content:"src/App.tsx"}),t(),r(i,o)},$$slots:{default:!0}});var f=e($);y(f,{content:`import { Authenticated, Refine } from '@refinedev/core';
import { dataProvider, liveProvider } from '@refinedev/appwrite';
import {
    AuthPage,
    ErrorComponent,
    RefineThemes,
    ThemedLayoutV2,
    useNotificationProvider,
} from '@refinedev/antd';
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
} from '@refinedev/react-router-v6';
import '@refinedev/antd/dist/reset.css';

import { App as AntdApp, ConfigProvider } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { appwriteClient } from './utility';
import { authProvider } from './authProvider';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <AntdApp>
                    <Refine
                        dataProvider={dataProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        liveProvider={liveProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        authProvider={authProvider}
                        routerProvider={routerProvider}
                        notificationProvider={useNotificationProvider}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Authenticated
                                        fallback={
                                            <CatchAllNavigate to="/login" />
                                        }
                                    >
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            ></Route>

                            <Route
                                element={
                                    <Authenticated fallback={<Outlet />}>
                                        <NavigateToResource resource="<APPWRITE_COLLECTION_ID>" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<AuthPage />} />
                                <Route
                                    path="/register"
                                    element={<AuthPage type="register" />}
                                />
                            </Route>

                            <Route
                                element={
                                    <Authenticated>
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            >
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                    </Refine>
                </AntdApp>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
`,language:"client-web",process:!0,children:(i,h)=>{t();var o=c(`import { Authenticated, Refine } from '@refinedev/core';
import { dataProvider, liveProvider } from '@refinedev/appwrite';
import {
    AuthPage,
    ErrorComponent,
    RefineThemes,
    ThemedLayoutV2,
    useNotificationProvider,
} from '@refinedev/antd';
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
} from '@refinedev/react-router-v6';
import '@refinedev/antd/dist/reset.css';

import { App as AntdApp, ConfigProvider } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { appwriteClient } from './utility';
import { authProvider } from './authProvider';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <AntdApp>
                    <Refine
                        dataProvider={dataProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        liveProvider={liveProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        authProvider={authProvider}
                        routerProvider={routerProvider}
                        notificationProvider={useNotificationProvider}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Authenticated
                                        fallback={
                                            <CatchAllNavigate to="/login" />
                                        }
                                    >
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            ></Route>

                            <Route
                                element={
                                    <Authenticated fallback={<Outlet />}>
                                        <NavigateToResource resource="<APPWRITE_COLLECTION_ID>" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<AuthPage />} />
                                <Route
                                    path="/register"
                                    element={<AuthPage type="register" />}
                                />
                            </Route>

                            <Route
                                element={
                                    <Authenticated>
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            >
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                    </Refine>
                </AntdApp>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;`);r(i,o)},$$slots:{default:!0}}),r(v,d)},$$slots:{default:!0}});var Y=e(q);R(Y,{id:"step-6",step:6,title:"All set",children:(v,g)=>{l(v,{children:(d,$)=>{t();var f=le(),i=e(P(f));I(i,{content:"npm run dev -- --open --port 3000"});var h=e(i,2);b(h,{href:"http://localhost:3000",children:(o,s)=>{t();var p=c("Localhost on Port 3000");r(o,p)},$$slots:{default:!0}}),t(),r(d,f)},$$slots:{default:!0}})},$$slots:{default:!0}}),z(x),r(F,x)},$$slots:{default:!0}}))}export{Ne as component};
