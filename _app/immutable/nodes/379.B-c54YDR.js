import{t as i,b as n,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Ne,s as r,f as c,n as t,r as je}from"../chunks/NgVQVlRK.js";import{n as Be}from"../chunks/B4IyMRKX.js";import{H as k}from"../chunks/CXsRaEhZ.js";import{M as Me}from"../chunks/hMT8fFzP.js";import{I as Ce}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as T}from"../chunks/DXp9_3zM.js";import{F as M}from"../chunks/OFUKRh55.js";import{L as H,I as U}from"../chunks/BhmTgGWB.js";import{P as R}from"../chunks/D8YsId2T.js";import{S as C}from"../chunks/yHjwcyUH.js";import{L as K}from"../chunks/yh4_9ChP.js";import{T as Oe}from"../chunks/D8BqvLkQ.js";import{T as Te,a as L,b as W,c as Se,d as D}from"../chunks/BpU_IltG.js";import{A as Ge}from"../chunks/CqOphJLh.js";const Je={layout:"article",title:"Permissions",description:"Enhance data security and access control with Backrush platform permissions. Learn how to set fine-grained permissions to protect user data and resources."};var Ke=i("Using permissions, you can decide that only <!> and <!> will have read and update access to a specific database document, while <!> and <!> will be the only ones with delete access.",1),We=i("A project user can only grant permissions to a resource that they have. For example, if a user is trying to share a document with a team that they are not a member of, they will encounter a 401 not authorized error. If your app needs users to grant access to teams they&#39;re not a member of, you can create Backrush Functions with a <!> to achieve this functionality.",1),Fe=i("Server integrations can be used for increased flexibility. When using a Server SDK in combination with the proper <!>, you can have any type of access to any of your project resources regardless of their permissions.",1),He=i("In Client and Server SDKs, you will find a <!> class with helper methods for each role described below:",1),ze=i("<!><!>",1),Ye=i("<!><!>",1),Xe=i("<!><!>",1),qe=i("<!><!>",1),Qe=i("<!><!>",1),Ve=i("<!><!>",1),Ze=i("<!><!><!><!><!>",1),et=i("<!><!>",1),tt=i("In Client and Server SDKs, you will find a <!> class with helper methods for each role described below:",1),rt=i("<!><!>",1),st=i("<!><!>",1),ot=i("<!><!>",1),nt=i("Grants access to any authenticated or anonymous user. You can optionally pass the <!> or <!> string to target specific types of users.",1),at=i("<!><!>",1),lt=i("Grants access to a specific user by user ID. You can optionally pass the <!> or <!> string to target specific types of users.",1),it=i("<!><!>",1),dt=i("<!><!>",1),ct=i("<!><!>",1),ut=i("<!><!>",1),pt=i("Grants access to all accounts with a specific label ID. Once the label is removed from the user, they will no longer have access. <!>.",1),$t=i("<!><!>",1),mt=i("<!><!><!><!><!><!><!><!>",1),vt=i("<!><!>",1),ht=i("The following examples are using the <!> but can be applied similarly to any of the other <!>.",1),_t=i("In the following example, we are creating a document that can be read by anyone, edited by writers or admins, and deleted by administrators or a user with the user ID <!>.",1),ft=i("In the following example, we are creating a document that can be read by members of the team with ID <!> and can only be edited or deleted by members of the same team that possess the team role <!>.",1),Pt=i("Enable <!> in Collection <!>",1),wt=i("Grant only <!> permission to <!> at the collection level",1),bt=i("<!><!>",1),Dt=i("<!> enables per-document permissions",1),gt=i("Collection-level <!> permission allows users to create documents",1),yt=i("Omitting <!> at collection level prevents users from accessing all documents",1),Et=i("<!><!><!>",1),It=i("<!><!><!><!>",1),Rt=i("Collection-level <!> permission allows users to create new documents",1),xt=i("<!><!><!><!>",1),At=i("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Vt(Le){Ge(Le,Be(Je,{children:(ke,Ct)=>{var F=At(),z=Ne(F);R(z,{children:(o,u)=>{t();var s=n("Backrush's permission mechanism offers a simple, yet flexible way to manage which users, teams, or roles can access a specific resource in your project, such as documents and files.");e(o,s)},$$slots:{default:!0}});var Y=r(z);R(Y,{children:(o,u)=>{t();var s=Ke(),$=r(c(s));C($,{marker:"**",children:(d,P)=>{t();var l=n("user A");e(d,l)},$$slots:{default:!0}});var f=r($,2);C(f,{marker:"**",children:(d,P)=>{t();var l=n("user B");e(d,l)},$$slots:{default:!0}});var v=r(f,2);C(v,{marker:"**",children:(d,P)=>{t();var l=n("user C");e(d,l)},$$slots:{default:!0}});var g=r(v,2);C(g,{marker:"**",children:(d,P)=>{t();var l=n("team X");e(d,l)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var X=r(Y);R(X,{children:(o,u)=>{t();var s=n("As the name suggests, read permission allows a user to read a resource, create allows users to create new resources, update allows a user to make changes to a resource, and delete allows the user to remove the resource.");e(o,s)},$$slots:{default:!0}});var q=r(X);R(q,{children:(o,u)=>{t();var s=n("All permissions can be granted to individuals or groups of users, entire teams, or only to team members with a specific role. Permission can also be granted based on authentication status, such as to all users, only authenticated users, or only guest users.");e(o,s)},$$slots:{default:!0}});var Q=r(q);R(Q,{children:(o,u)=>{t();var s=We(),$=r(c(s));K($,{href:"/docs/sdks#server",children:(f,v)=>{t();var g=n("Server SDK");e(f,g)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var V=r(Q);k(V,{id:"appwrite-resource",level:1,children:(o,u)=>{t();var s=n("Backrush resource");e(o,s)},$$slots:{default:!0}});var Z=r(V);R(Z,{children:(o,u)=>{t();var s=n("An Backrush resource can be a database, collection, document, bucket, or file. Each resource has its own set of permissions to define who can interact with it.");e(o,s)},$$slots:{default:!0}});var ee=r(Z);R(ee,{children:(o,u)=>{t();var s=n("Using the Backrush permissions mechanism, you can grant resource access to users, teams, and members with different roles.");e(o,s)},$$slots:{default:!0}});var te=r(ee);k(te,{id:"default-values",level:1,children:(o,u)=>{t();var s=n("Default values");e(o,s)},$$slots:{default:!0}});var re=r(te);R(re,{children:(o,u)=>{t();var s=n("If you create a resource using a Server SDK or the Backrush Console without explicit permissions, no one can access it by default because the permissions will be empty. If you create a resource using a Client SDK without explicit permissions, the creator will be granted read, update, and delete permissions on that resource by default.");e(o,s)},$$slots:{default:!0}});var se=r(re);k(se,{id:"server-integration",level:1,children:(o,u)=>{t();var s=n("Server integration");e(o,s)},$$slots:{default:!0}});var oe=r(se);R(oe,{children:(o,u)=>{t();var s=Fe(),$=r(c(s));K($,{href:"/docs/advanced/platform/api-keys#scopes",children:(f,v)=>{t();var g=n("API key scopes");e(f,g)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var ne=r(oe);R(ne,{children:(o,u)=>{t();var s=n("Using the server integration flexibility, you can change resource permissions, share resources between different users and teams, or edit and delete them without any limitations.");e(o,s)},$$slots:{default:!0}});var ae=r(ne);k(ae,{id:"permission-types",level:1,children:(o,u)=>{t();var s=n("Permission types");e(o,s)},$$slots:{default:!0}});var le=r(ae);R(le,{children:(o,u)=>{t();var s=He(),$=r(c(s));C($,{marker:"**",children:(f,v)=>{t();var g=n("Permission");e(f,g)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var ie=r(le);Oe(ie,{children:(o,u)=>{var s=et(),$=c(s);Te($,{children:(v,g)=>{L(v,{children:(d,P)=>{var l=ze(),m=c(l);W(m,{children:(b,I)=>{t();var E=n("Type");e(b,E)},$$slots:{default:!0}});var w=r(m);W(w,{children:(b,I)=>{t();var E=n("Description");e(b,E)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r($);Se(f,{children:(v,g)=>{var d=Ze(),P=c(d);L(P,{children:(I,E)=>{var x=Ye(),_=c(x);D(_,{children:(a,p)=>{T(a,{content:"Permission.read()"})},$$slots:{default:!0}});var O=r(_);D(O,{children:(a,p)=>{t();var y=n("Access to read a resource.");e(a,y)},$$slots:{default:!0}}),e(I,x)},$$slots:{default:!0}});var l=r(P);L(l,{children:(I,E)=>{var x=Xe(),_=c(x);D(_,{children:(a,p)=>{T(a,{content:"Permission.create()"})},$$slots:{default:!0}});var O=r(_);D(O,{children:(a,p)=>{t();var y=n("Access to create new resources. Does not apply to files or documents. Applying this type of access to files or documents results in an error.");e(a,y)},$$slots:{default:!0}}),e(I,x)},$$slots:{default:!0}});var m=r(l);L(m,{children:(I,E)=>{var x=qe(),_=c(x);D(_,{children:(a,p)=>{T(a,{content:"Permission.update()"})},$$slots:{default:!0}});var O=r(_);D(O,{children:(a,p)=>{t();var y=n("Access to change a resource, but not remove or create new resources. Does not apply to functions.");e(a,y)},$$slots:{default:!0}}),e(I,x)},$$slots:{default:!0}});var w=r(m);L(w,{children:(I,E)=>{var x=Qe(),_=c(x);D(_,{children:(a,p)=>{T(a,{content:"Permission.delete()"})},$$slots:{default:!0}});var O=r(_);D(O,{children:(a,p)=>{t();var y=n("Access to remove a resource. Does not apply to functions.");e(a,y)},$$slots:{default:!0}}),e(I,x)},$$slots:{default:!0}});var b=r(w);L(b,{children:(I,E)=>{var x=Ve(),_=c(x);D(_,{children:(a,p)=>{T(a,{content:"Permission.write()"})},$$slots:{default:!0}});var O=r(_);D(O,{children:(a,p)=>{t();var y=n("Alias to grant create, update, and delete access for collections and buckets and update and delete access for documents and files.");e(a,y)},$$slots:{default:!0}}),e(I,x)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var de=r(ie);k(de,{id:"permission-roles",level:1,children:(o,u)=>{t();var s=n("Permission roles");e(o,s)},$$slots:{default:!0}});var ce=r(de);R(ce,{children:(o,u)=>{t();var s=tt(),$=r(c(s));C($,{marker:"**",children:(f,v)=>{t();var g=n("Role");e(f,g)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var ue=r(ce);Oe(ue,{children:(o,u)=>{var s=vt(),$=c(s);Te($,{children:(v,g)=>{L(v,{children:(d,P)=>{var l=rt(),m=c(l);W(m,{children:(b,I)=>{t();var E=n("Type");e(b,E)},$$slots:{default:!0}});var w=r(m);W(w,{children:(b,I)=>{t();var E=n("Description");e(b,E)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=r($);Se(f,{children:(v,g)=>{var d=mt(),P=c(d);L(P,{children:(_,O)=>{var a=st(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.any()"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=n("Grants access to anyone.");e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var l=r(P);L(l,{children:(_,O)=>{var a=ot(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.guests()"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=n("Grants access to any guest user without a session. Authenticated users don't have access to this role.");e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var m=r(l);L(m,{children:(_,O)=>{var a=at(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.users([STATUS])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=nt(),j=r(c(A));C(j,{marker:"**",children:(N,J)=>{t();var B=n("verified");e(N,B)},$$slots:{default:!0}});var G=r(j,2);C(G,{marker:"**",children:(N,J)=>{t();var B=n("unverified");e(N,B)},$$slots:{default:!0}}),t(),e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var w=r(m);L(w,{children:(_,O)=>{var a=it(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.user([USER_ID], [STATUS])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=lt(),j=r(c(A));C(j,{marker:"**",children:(N,J)=>{t();var B=n("verified");e(N,B)},$$slots:{default:!0}});var G=r(j,2);C(G,{marker:"**",children:(N,J)=>{t();var B=n("unverified");e(N,B)},$$slots:{default:!0}}),t(),e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var b=r(w);L(b,{children:(_,O)=>{var a=dt(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.team([TEAM_ID])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=n("Grants access to any member of the specific team. To gain access to this permission, the user must be the team creator (owner), or receive and accept an invitation to join this team.");e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var I=r(b);L(I,{children:(_,O)=>{var a=ct(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.team([TEAM_ID], [ROLE])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=n("Grants access to any member who possesses a specific role in a team. To gain access to this permission, the user must be a member of the specific team and have the given role assigned to them. Team roles can be assigned when inviting a user to become a team member.");e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var E=r(I);L(E,{children:(_,O)=>{var a=ut(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.member([MEMBERSHIP_ID])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=n("Grants access to a specific member of a team. When the member is removed from the team, they will no longer have access.");e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}});var x=r(E);L(x,{children:(_,O)=>{var a=$t(),p=c(a);D(p,{children:(h,S)=>{T(h,{content:"Role.label([LABEL_ID])"})},$$slots:{default:!0}});var y=r(p);D(y,{children:(h,S)=>{t();var A=pt(),j=r(c(A));K(j,{href:"/docs/products/auth/labels",children:(G,N)=>{t();var J=n("Learn more about labels");e(G,J)},$$slots:{default:!0}}),t(),e(h,A)},$$slots:{default:!0}}),e(_,a)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var pe=r(ue);k(pe,{id:"examples",level:1,children:(o,u)=>{t();var s=n("Examples");e(o,s)},$$slots:{default:!0}});var $e=r(pe);R($e,{children:(o,u)=>{t();var s=n("The examples below will show you how you can use the different Backrush permissions to manage access control to your project resources.");e(o,s)},$$slots:{default:!0}});var me=r($e);R(me,{children:(o,u)=>{t();var s=ht(),$=r(c(s));K($,{href:"https://github.com/backrush/sdk-for-web",children:(v,g)=>{t();var d=n("Backrush Web SDK");e(v,d)},$$slots:{default:!0}});var f=r($,2);K(f,{href:"/docs/sdks",children:(v,g)=>{t();var d=n("Backrush SDKs");e(v,d)},$$slots:{default:!0}}),t(),e(o,s)},$$slots:{default:!0}});var ve=r(me);k(ve,{id:"example-1-basic-usage",level:2,children:(o,u)=>{t();var s=n("Example 1 - Basic usage");e(o,s)},$$slots:{default:!0}});var he=r(ve);R(he,{children:(o,u)=>{t();var s=_t(),$=r(c(s));T($,{content:"user:5c1f88b42259e"}),t(),e(o,s)},$$slots:{default:!0}});var _e=r(he);M(_e,{content:`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    {'actorName': 'Chris Evans', 'height': 183},
    [
        Permission.read(Role.any()),                  // Anyone can view this document
        Permission.update(Role.team("writers")),      // Writers can update this document
        Permission.update(Role.team("admin")),        // Admins can update this document
        Permission.delete(Role.user("5c1f88b42259e")), // User 5c1f88b42259e can delete this document
        Permission.delete(Role.team("admin"))          // Admins can delete this document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(o,u)=>{t();var s=n(`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    {'actorName': 'Chris Evans', 'height': 183},
    [
        Permission.read(Role.any()),                  // Anyone can view this document
        Permission.update(Role.team("writers")),      // Writers can update this document
        Permission.update(Role.team("admin")),        // Admins can update this document
        Permission.delete(Role.user("5c1f88b42259e")), // User 5c1f88b42259e can delete this document
        Permission.delete(Role.team("admin"))          // Admins can delete this document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);e(o,s)},$$slots:{default:!0}});var fe=r(_e);k(fe,{id:"example-2-team-roles",level:2,children:(o,u)=>{t();var s=n("Example 2 - Team roles");e(o,s)},$$slots:{default:!0}});var Pe=r(fe);R(Pe,{children:(o,u)=>{t();var s=ft(),$=r(c(s));T($,{content:"5c1f88b87435e"});var f=r($,2);T(f,{content:"owner"}),t(),e(o,s)},$$slots:{default:!0}});var we=r(Pe);M(we,{content:`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    {'actorName': 'Chris Evans', 'height': 183},
    [
        Permission.read(Role.team("5c1f88b87435e")),             // Only users of team 5c1f88b87435e can read the document
        Permission.update(Role.team("5c1f88b87435e", "owner")), // Only users of team 5c1f88b87435e with the role owner can update the document
        Permission.delete(Role.team("5c1f88b87435e", "owner"))  // Only users of team 5c1f88b87435e with the role owner can delete the document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(o,u)=>{t();var s=n(`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    {'actorName': 'Chris Evans', 'height': 183},
    [
        Permission.read(Role.team("5c1f88b87435e")),             // Only users of team 5c1f88b87435e can read the document
        Permission.update(Role.team("5c1f88b87435e", "owner")), // Only users of team 5c1f88b87435e with the role owner can update the document
        Permission.delete(Role.team("5c1f88b87435e", "owner"))  // Only users of team 5c1f88b87435e with the role owner can delete the document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);e(o,s)},$$slots:{default:!0}});var be=r(we);k(be,{id:"example-3-private-documents",level:2,children:(o,u)=>{t();var s=n("Example 3 - Private documents");e(o,s)},$$slots:{default:!0}});var De=r(be);R(De,{children:(o,u)=>{t();var s=n("A common use case is to allow users to create documents that are only accessible to them. Here's how this can be achieved:");e(o,s)},$$slots:{default:!0}});var ge=r(De);k(ge,{level:3,children:(o,u)=>{t();var s=n("Configure the collection");e(o,s)},$$slots:{default:!0}});var ye=r(ge);R(ye,{children:(o,u)=>{t();var s=n("First, configure your collection to:");e(o,s)},$$slots:{default:!0}});var Ee=r(ye);H(Ee,{ordered:!0,marker:".",children:(o,u)=>{var s=bt(),$=c(s);U($,{children:(v,g)=>{t();var d=Pt(),P=r(c(d));C(P,{marker:"**",children:(m,w)=>{t();var b=n("Document Security");e(m,b)},$$slots:{default:!0}});var l=r(P,2);C(l,{marker:"**",children:(m,w)=>{t();var b=n("Settings");e(m,b)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var f=r($);U(f,{children:(v,g)=>{t();var d=wt(),P=r(c(d));C(P,{marker:"**",children:(m,w)=>{t();var b=n("CREATE");e(m,b)},$$slots:{default:!0}});var l=r(P,2);C(l,{marker:"**",children:(m,w)=>{t();var b=n("all users");e(m,b)},$$slots:{default:!0}}),t(),e(v,d)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var Ie=r(Ee);Ce(Ie,{title:"Why this setup?",children:(o,u)=>{H(o,{ordered:!1,marker:"-",children:(s,$)=>{var f=Et(),v=c(f);U(v,{children:(P,l)=>{var m=Dt(),w=c(m);C(w,{marker:"**",children:(b,I)=>{t();var E=n("Document Security");e(b,E)},$$slots:{default:!0}}),t(),e(P,m)},$$slots:{default:!0}});var g=r(v);U(g,{children:(P,l)=>{t();var m=gt(),w=r(c(m));C(w,{marker:"**",children:(b,I)=>{t();var E=n("CREATE");e(b,E)},$$slots:{default:!0}}),t(),e(P,m)},$$slots:{default:!0}});var d=r(g);U(d,{children:(P,l)=>{t();var m=yt(),w=r(c(m));C(w,{marker:"**",children:(b,I)=>{t();var E=n("READ/UPDATE/DELETE");e(b,E)},$$slots:{default:!0}}),t(),e(P,m)},$$slots:{default:!0}}),e(s,f)},$$slots:{default:!0}})}});var Re=r(Ie);k(Re,{level:3,children:(o,u)=>{t();var s=n("Create a document for a user");e(o,s)},$$slots:{default:!0}});var xe=r(Re);R(xe,{children:(o,u)=>{t();var s=n("When creating documents in your application, set document-level permissions to restrict access to only the creator:");e(o,s)},$$slots:{default:!0}});var Ae=r(xe);Me(Ae,{children:(o,u)=>{var s=It(),$=c(s);M($,{content:`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    { 'title': 'My Private Document' },
    [
        Permission.read(Role.user('<USER_ID>')),    // Only this user can read
        Permission.update(Role.user('<USER_ID>')),  // Only this user can update
        Permission.delete(Role.user('<USER_ID>'))   // Only this user can delete
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(d,P)=>{t();var l=n(`import { Client, Databases, Permission, Role } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

let promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    { 'title': 'My Private Document' },
    [
        Permission.read(Role.user('<USER_ID>')),    // Only this user can read
        Permission.update(Role.user('<USER_ID>')),  // Only this user can update
        Permission.delete(Role.user('<USER_ID>'))   // Only this user can delete
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);e(d,l)},$$slots:{default:!0}});var f=r($);M(f,{content:`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            data: { 'title': 'My Private Document' },
            permissions: [
                Permission.read(Role.user('<USER_ID>')),    // Only this user can read
                Permission.update(Role.user('<USER_ID>')),  // Only this user can update
                Permission.delete(Role.user('<USER_ID>'))   // Only this user can delete
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(d,P)=>{t();var l=n(`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = await databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            data: { 'title': 'My Private Document' },
            permissions: [
                Permission.read(Role.user('<USER_ID>')),    // Only this user can read
                Permission.update(Role.user('<USER_ID>')),  // Only this user can update
                Permission.delete(Role.user('<USER_ID>'))   // Only this user can delete
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);e(d,l)},$$slots:{default:!0}});var v=r(f);M(v,{content:`import Backrush

func main() async throws {
    let client = Client()
        .setEndpoint("https://cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>");

    let databases = Databases(client);

    do {
        let document = try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            data: ["title": "My Private Document"],
            permissions: [
                Permission.read(Role.user("<USER_ID>")),    // Only this user can read
                Permission.update(Role.user("<USER_ID>")),  // Only this user can update
                Permission.delete(Role.user("<USER_ID>"))   // Only this user can delete
            ]
        );
    } catch {
        print(error.localizedDescription);
    }
}
`,language:"client-apple",process:!0,children:(d,P)=>{t();var l=n(`import Backrush

func main() async throws {
    let client = Client()
        .setEndpoint("https://cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>");

    let databases = Databases(client);

    do {
        let document = try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            data: ["title": "My Private Document"],
            permissions: [
                Permission.read(Role.user("<USER_ID>")),    // Only this user can read
                Permission.update(Role.user("<USER_ID>")),  // Only this user can update
                Permission.delete(Role.user("<USER_ID>"))   // Only this user can delete
            ]
        );
    } catch {
        print(error.localizedDescription);
    }
}`);e(d,l)},$$slots:{default:!0}});var g=r(v);M(g,{content:`import io.backrush.Client
import io.backrush.Permission
import io.backrush.Role
import io.backrush.services.Databases
import io.backrush.exceptions.BackrushException

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>");

    val databases = Databases(client);

    try {
        val document = databases.createDocument(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            data = mapOf("title" to "My Private Document"),
            permissions = listOf(
                Permission.read(Role.user("<USER_ID>")),    // Only this user can read
                Permission.update(Role.user("<USER_ID>")),  // Only this user can update
                Permission.delete(Role.user("<USER_ID>"))   // Only this user can delete
            )
        );
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message);
    }
}
`,language:"client-android-kotlin",process:!0,children:(d,P)=>{t();var l=n(`import io.backrush.Client
import io.backrush.Permission
import io.backrush.Role
import io.backrush.services.Databases
import io.backrush.exceptions.BackrushException

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>");

    val databases = Databases(client);

    try {
        val document = databases.createDocument(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            data = mapOf("title" to "My Private Document"),
            permissions = listOf(
                Permission.read(Role.user("<USER_ID>")),    // Only this user can read
                Permission.update(Role.user("<USER_ID>")),  // Only this user can update
                Permission.delete(Role.user("<USER_ID>"))   // Only this user can delete
            )
        );
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message);
    }
}`);e(d,l)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var Ue=r(Ae);Ce(Ue,{title:"Understanding the flow",children:(o,u)=>{H(o,{ordered:!0,marker:".",children:(s,$)=>{var f=xt(),v=c(f);U(v,{children:(l,m)=>{t();var w=Rt(),b=r(c(w));C(b,{marker:"**",children:(I,E)=>{t();var x=n("CREATE");e(I,x)},$$slots:{default:!0}}),t(),e(l,w)},$$slots:{default:!0}});var g=r(v);U(g,{children:(l,m)=>{t();var w=n("When a document is created, we set permissions for only the creator");e(l,w)},$$slots:{default:!0}});var d=r(g);U(d,{children:(l,m)=>{t();var w=n("These document-level permissions ensure only the creator can read, update, or delete their documents");e(l,w)},$$slots:{default:!0}});var P=r(d);U(P,{children:(l,m)=>{t();var w=n("Other users can create their own documents but cannot access documents they didn't create");e(l,w)},$$slots:{default:!0}}),e(s,f)},$$slots:{default:!0}})}}),je(F),e(ke,F)},$$slots:{default:!0}}))}export{Vt as component};
