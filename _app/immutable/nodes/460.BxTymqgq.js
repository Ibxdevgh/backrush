import{t as $,b as c,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f as h,c as ce,n,r as pe}from"../chunks/NgVQVlRK.js";import{n as me}from"../chunks/B4IyMRKX.js";import{H as b}from"../chunks/CXsRaEhZ.js";import{M as oe}from"../chunks/hMT8fFzP.js";import{I as de}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import{A as Y}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as _}from"../chunks/DXp9_3zM.js";import{F as I}from"../chunks/OFUKRh55.js";import{L as ue,I as j}from"../chunks/BhmTgGWB.js";import{P as f}from"../chunks/D8YsId2T.js";import{S as w}from"../chunks/yHjwcyUH.js";import{L as x}from"../chunks/yh4_9ChP.js";import{T as $e}from"../chunks/D8BqvLkQ.js";import{T as he,a as y,b as se,c as ve,d as D}from"../chunks/BpU_IltG.js";import{A as _e}from"../chunks/CqOphJLh.js";const fe={layout:"article",title:"Teams",description:"Master team management in the Backrush Cloud. Explore team-related functions, permissions, and more."};var Pe=$("Teams are a good way to allow users to share access to resources. For example, in a todo app, a user can <!> for one of their todo lists and <!> to the team to grant the other user access. You can further give special rights to parts of a team using team roles.",1),Ie=$("The invited user can <!> to gain access. If the user&#39;s ever removed from the team, they&#39;ll lose access again.",1),ge=$("For example, we can create a team called <!> with roles <!>, <!>, <!>, and <!>.",1),Ee=$("Only those with the <!> role can invite and remove members",1),Te=$("The creator of the team is also granted the <!> role. <!>.",1),we=$("<!><!><!><!>",1),Ce=$("<!><!><!><!>",1),xe=$("Ensure you <!> the CLI, <!> to your Backrush account, and <!> your Backrush project.",1),be=$("Use the CLI command <!> to invite a new member into your team.",1),De=$("You can grant permissions to all members of a team using the <!> role or individual roles in the team using the <!> role.",1),Re=$("<!><!>",1),Oe=$("<!><!>",1),Ae=$("<!><!>",1),Ye=$("<!><!>",1),je=$("<!><!>",1),ye=$("In certain use cases, your app may not need to share members&#39; personal information with others. You can safeguard privacy by marking specific membership details as private. To configure this setting, navigate to <!> &gt; <!> &gt; <!>",1),Me=$("<!> - The member&#39;s name",1),Ne=$("<!> - The member&#39;s email address",1),ke=$("<!> - Whether the member has enabled multi-factor authentication",1),Le=$("<!><!><!>",1),Ge=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ct(ae){_e(ae,me(fe,{children:(le,Je)=>{var R=Ge(),M=ce(R);f(M,{children:(o,u)=>{n();var e=Pe(),a=t(h(e));x(a,{href:"/docs/references/cloud/client-web/teams#create",children:(d,m)=>{n();var s=c("create a team");r(d,s)},$$slots:{default:!0}});var i=t(a,2);x(i,{href:"/docs/references/cloud/client-web/teams#createMembership",children:(d,m)=>{n();var s=c("invite another user");r(d,s)},$$slots:{default:!0}}),n(),r(o,e)},$$slots:{default:!0}});var N=t(M);f(N,{children:(o,u)=>{n();var e=Ie(),a=t(h(e));x(a,{href:"/docs/references/cloud/client-web/teams#updateMembershipStatus",children:(i,d)=>{n();var m=c("accept the invitation");r(i,m)},$$slots:{default:!0}}),n(),r(o,e)},$$slots:{default:!0}});var k=t(N);Y(k,{href:"/docs/products/auth/multi-tenancy",children:(o,u)=>{f(o,{children:(e,a)=>{n();var i=c("Learn about using Teams for multi-tenancy");r(e,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var L=t(k);b(L,{id:"create",level:1,children:(o,u)=>{n();var e=c("Create team");r(o,e)},$$slots:{default:!0}});var G=t(L);f(G,{children:(o,u)=>{n();var e=ge(),a=t(h(e));_(a,{content:"teachers"});var i=t(a,2);_(i,{content:"maths"});var d=t(i,2);_(d,{content:"sciences"});var m=t(d,2);_(m,{content:"arts"});var s=t(m,2);_(s,{content:"literature"}),n(),r(o,e)},$$slots:{default:!0}});var J=t(G);f(J,{children:(o,u)=>{n();var e=Te(),a=t(h(e));_(a,{content:"owner"});var i=t(a,2);w(i,{marker:"**",children:(d,m)=>{n();var s=Ee(),l=t(h(s));_(l,{content:"owner"}),n(),r(d,s)},$$slots:{default:!0}}),n(),r(o,e)},$$slots:{default:!0}});var S=t(J);oe(S,{children:(o,u)=>{var e=we(),a=h(e);I(a,{content:`import { Client, Teams } from "appwrite";

const client = new Client();

const teams = new Teams(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = teams.create(
    'teachers',
    'Teachers',
    ['maths', 'sciences', 'arts', 'literature']
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(s,l)=>{n();var p=c(`import { Client, Teams } from "appwrite";

const client = new Client();

const teams = new Teams(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = teams.create(
    'teachers',
    'Teachers',
    ['maths', 'sciences', 'arts', 'literature']
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(s,p)},$$slots:{default:!0}});var i=t(a);I(i,{content:`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Teams teams = Teams(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = teams.create(
    teamId: 'teachers',
    name: 'Teachers',
    roles: ['maths', 'sciences', 'arts', 'literature']
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"client-flutter",process:!0,children:(s,l)=>{n();var p=c(`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Teams teams = Teams(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = teams.create(
    teamId: 'teachers',
    name: 'Teachers',
    roles: ['maths', 'sciences', 'arts', 'literature']
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);r(s,p)},$$slots:{default:!0}});var d=t(i);I(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

let team = try await teams.create(
    teamId: "teachers",
    name: "Teachers",
    roles: ["maths", "sciences", "arts", "literature"]
)
`,language:"client-apple",process:!0,children:(s,l)=>{n();var p=c(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

let team = try await teams.create(
    teamId: "teachers",
    name: "Teachers",
    roles: ["maths", "sciences", "arts", "literature"]
)`);r(s,p)},$$slots:{default:!0}});var m=t(d);I(m,{content:`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

val response = teams.create(
    teamId = "teachers",
    name = "Teachers",
    roles = listOf("maths", "sciences", "arts", "literature")
)
`,language:"kotlin",process:!0,children:(s,l)=>{n();var p=c(`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

val response = teams.create(
    teamId = "teachers",
    name = "Teachers",
    roles = listOf("maths", "sciences", "arts", "literature")
)`);r(s,p)},$$slots:{default:!0}}),r(o,e)},$$slots:{default:!0}});var F=t(S);b(F,{id:"create-membership",level:1,children:(o,u)=>{n();var e=c("Invite a member");r(o,e)},$$slots:{default:!0}});var K=t(F);f(K,{children:(o,u)=>{n();var e=c('You can invite members to a team by creating team memberships. For example, inviting "David" a math teacher, to the teachers team.');r(o,e)},$$slots:{default:!0}});var U=t(K);oe(U,{children:(o,u)=>{var e=Ce(),a=h(e);I(a,{content:`import { Client, Teams } from "appwrite";

const client = new Client();

const teams = new Teams(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = teams.createMembership(
    'teachers',
    ["maths"],
    "david@example.com"
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(s,l)=>{n();var p=c(`import { Client, Teams } from "appwrite";

const client = new Client();

const teams = new Teams(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = teams.createMembership(
    'teachers',
    ["maths"],
    "david@example.com"
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);r(s,p)},$$slots:{default:!0}});var i=t(a);I(i,{content:`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Teams teams = Teams(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = teams.createMembership(
    teamId: 'teachers',
    roles: ['maths'],
    email: 'david@example.com'
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"client-flutter",process:!0,children:(s,l)=>{n();var p=c(`import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Teams teams = Teams(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = teams.createMembership(
    teamId: 'teachers',
    roles: ['maths'],
    email: 'david@example.com'
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);r(s,p)},$$slots:{default:!0}});var d=t(i);I(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

let membership = try await teams.createMembership(
    teamId: "teachers",
    roles: ["maths"],
    email: "david@example.com"
)
`,language:"client-apple",process:!0,children:(s,l)=>{n();var p=c(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

let membership = try await teams.createMembership(
    teamId: "teachers",
    roles: ["maths"],
    email: "david@example.com"
)`);r(s,p)},$$slots:{default:!0}});var m=t(d);I(m,{content:`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

val response = teams.createMembership(
    teamId = "teachers",
    roles = listOf("maths"),
    email = "david@example.com"
)
`,language:"kotlin",process:!0,children:(s,l)=>{n();var p=c(`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

val response = teams.createMembership(
    teamId = "teachers",
    roles = listOf("maths"),
    email = "david@example.com"
)`);r(s,p)},$$slots:{default:!0}}),r(o,e)},$$slots:{default:!0}});var H=t(U);b(H,{id:"using-the-CLI",level:1,children:(o,u)=>{n();var e=c("Using the CLI");r(o,e)},$$slots:{default:!0}});var z=t(H);de(z,{title:"Before proceeding",children:(o,u)=>{f(o,{children:(e,a)=>{n();var i=xe(),d=t(h(i));x(d,{href:"/docs/tooling/command-line/installation#getting-started",children:(l,p)=>{w(l,{marker:"**",children:(P,C)=>{n();var v=c("install");r(P,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=t(d,2);x(m,{href:"/docs/tooling/command-line/installation#login",children:(l,p)=>{w(l,{marker:"**",children:(P,C)=>{n();var v=c("log in");r(P,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var s=t(m,2);x(s,{href:"/docs/tooling/command-line/installation#initialization",children:(l,p)=>{w(l,{marker:"**",children:(P,C)=>{n();var v=c("initialize");r(P,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(),r(e,i)},$$slots:{default:!0}})}});var B=t(z);f(B,{children:(o,u)=>{n();var e=be(),a=t(h(e));_(a,{content:"appwrite teams create-membership [options]"}),n(),r(o,e)},$$slots:{default:!0}});var W=t(B);I(W,{content:`appwrite teams create-membership --team-id "<TEAM_ID>" --roles --phone "+12065550100" --name "<NAME>" --user-id "<USER_ID>"
`,language:"sh",process:!0,children:(o,u)=>{n();var e=c('appwrite teams create-membership --team-id "<TEAM_ID>" --roles --phone "+12065550100" --name "<NAME>" --user-id "<USER_ID>"');r(o,e)},$$slots:{default:!0}});var q=t(W);f(q,{children:(o,u)=>{n();var e=c("You can also get, update, and delete a user's membership. However, you cannot use the CLI to configure permissions for team members.");r(o,e)},$$slots:{default:!0}});var Q=t(q);Y(Q,{href:"/docs/tooling/command-line/teams#commands",children:(o,u)=>{f(o,{children:(e,a)=>{n();var i=c("Learn more about the CLI teams commands");r(e,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=t(Q);b(V,{id:"permissions",level:1,children:(o,u)=>{n();var e=c("Permissions");r(o,e)},$$slots:{default:!0}});var X=t(V);f(X,{children:(o,u)=>{n();var e=De(),a=t(h(e));_(a,{content:"Role.team(<TEAM_ID>)"});var i=t(a,2);_(i,{content:"Role.team(<TEAM_ID>, [<ROLE_1>, <ROLE_2>, ...])"}),n(),r(o,e)},$$slots:{default:!0}});var Z=t(X);$e(Z,{children:(o,u)=>{var e=je(),a=h(e);he(a,{children:(d,m)=>{y(d,{children:(s,l)=>{var p=Re(),P=h(p);se(P,{children:(v,g)=>{n();var E=c("Description");r(v,E)},$$slots:{default:!0}});var C=t(P);se(C,{children:(v,g)=>{n();var E=c("Role");r(v,E)},$$slots:{default:!0}}),r(s,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=t(a);ve(i,{children:(d,m)=>{var s=Ye(),l=h(s);y(l,{children:(P,C)=>{var v=Oe(),g=h(v);D(g,{children:(T,O)=>{n();var A=c("All members");r(T,A)},$$slots:{default:!0}});var E=t(g);D(E,{children:(T,O)=>{_(T,{content:"Role.team(<TEAM_ID>)"})},$$slots:{default:!0}}),r(P,v)},$$slots:{default:!0}});var p=t(l);y(p,{children:(P,C)=>{var v=Ae(),g=h(v);D(g,{children:(T,O)=>{n();var A=c("Select roles");r(T,A)},$$slots:{default:!0}});var E=t(g);D(E,{children:(T,O)=>{_(T,{content:"Role.team(<TEAM_ID>, [<ROLE_1>, <ROLE_2>, ...])"})},$$slots:{default:!0}}),r(P,v)},$$slots:{default:!0}}),r(d,s)},$$slots:{default:!0}}),r(o,e)},$$slots:{default:!0}});var ee=t(Z);Y(ee,{href:"/docs/advanced/platform/permissions",children:(o,u)=>{f(o,{children:(e,a)=>{n();var i=c("Learn more about permissions");r(e,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var te=t(ee);b(te,{id:"memberships-privacy",level:1,children:(o,u)=>{n();var e=c("Memberships privacy");r(o,e)},$$slots:{default:!0}});var re=t(te);f(re,{children:(o,u)=>{n();var e=ye(),a=t(h(e));w(a,{marker:"**",children:(m,s)=>{n();var l=c("Auth");r(m,l)},$$slots:{default:!0}});var i=t(a,2);w(i,{marker:"**",children:(m,s)=>{n();var l=c("Security");r(m,l)},$$slots:{default:!0}});var d=t(i,2);w(d,{marker:"**",children:(m,s)=>{n();var l=c("Memberships privacy");r(m,l)},$$slots:{default:!0}}),r(o,e)},$$slots:{default:!0}});var ne=t(re);f(ne,{children:(o,u)=>{n();var e=c("These details can be made private:");r(o,e)},$$slots:{default:!0}});var ie=t(ne);ue(ie,{ordered:!1,marker:"-",children:(o,u)=>{var e=Le(),a=h(e);j(a,{children:(m,s)=>{var l=Me(),p=h(l);_(p,{content:"userName"}),n(),r(m,l)},$$slots:{default:!0}});var i=t(a);j(i,{children:(m,s)=>{var l=Ne(),p=h(l);_(p,{content:"userEmail"}),n(),r(m,l)},$$slots:{default:!0}});var d=t(i);j(d,{children:(m,s)=>{var l=ke(),p=h(l);_(p,{content:"mfa"}),n(),r(m,l)},$$slots:{default:!0}}),r(o,e)},$$slots:{default:!0}}),pe(R),r(le,R)},$$slots:{default:!0}}))}export{ct as component};
