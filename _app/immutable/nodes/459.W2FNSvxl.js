import{t as f,b as a,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as pe,s as o,f as _,n as i,r as me}from"../chunks/NgVQVlRK.js";import{n as ce}from"../chunks/B4IyMRKX.js";import{H as I}from"../chunks/CXsRaEhZ.js";import{M as E}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import{A as de}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as u}from"../chunks/OFUKRh55.js";import{L as b,I as $}from"../chunks/BhmTgGWB.js";import{P as v}from"../chunks/D8YsId2T.js";import{L as ue}from"../chunks/yh4_9ChP.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{A as he}from"../chunks/CqOphJLh.js";const ve={layout:"article",title:"Team invites",description:"Learn how to manage team invites in Backrush. Implement both client-side email invites and server-side custom flows for team memberships."};var fe=f("<!><!><!><!>",1),_e=f("<!><!><!><!>",1),Ie=f("<!><!><!><!>",1),$e=f("<!><!><!><!>",1),Ee=f("<!><!><!>",1),we=f("<!><!><!><!>",1),be=f("<!><!><!><!>",1),Pe=f("<!><!><!><!>",1),Te=f("<!><!><!><!>",1),Me=f("<!><!><!><!>",1),De=f("<!><!><!><!>",1),Ce=f("See how to grant document and file access to team roles in the <!> guide.",1),ge=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Qe(ae){he(ae,ce(ve,{children:(oe,Re)=>{var w=ge(),P=pe(w);v(P,{children:(r,p)=>{i();var e=a("Backrush provides two approaches for adding members to teams: client-side email invites and server-side custom flows. Each approach serves different use cases and offers unique benefits.");t(r,e)},$$slots:{default:!0}});var T=o(P);I(T,{level:1,children:(r,p)=>{i();var e=a("Invite client-side");t(r,e)},$$slots:{default:!0}});var M=o(T);v(M,{children:(r,p)=>{i();var e=a("Client-side email invites are perfect for implementing user-to-user invitations, allowing your users to invite others to join their teams, organizations, or shared resources. When creating a membership, Backrush:");t(r,e)},$$slots:{default:!0}});var D=o(M);b(D,{ordered:!0,marker:".",children:(r,p)=>{var e=fe(),c=_(e);$(c,{children:(n,l)=>{i();var s=a("Creates a new user account if one doesn't exist for the email address");t(n,s)},$$slots:{default:!0}});var m=o(c);$(m,{children:(n,l)=>{i();var s=a("Sends an automated email invitation to the user");t(n,s)},$$slots:{default:!0}});var d=o(m);$(d,{children:(n,l)=>{i();var s=a("Creates a pending membership");t(n,s)},$$slots:{default:!0}});var h=o(d);$(h,{children:(n,l)=>{i();var s=a("Activates the membership when the user accepts");t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var C=o(D);v(C,{children:(r,p)=>{i();var e=a("Client-side invites are ideal when you want a simple, automated process that lets your users manage their own team invitations. Backrush handles the email delivery with built-in templates and localization support, making it easy to implement a standard invite acceptance flow with email verification.");t(r,e)},$$slots:{default:!0}});var g=o(C);E(g,{children:(r,p)=>{var e=_e(),c=_(e);u(c,{content:`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Create membership with email invite
const membership = await teams.createMembership(
    '<TEAM_ID>',
    ['developer'],     // roles
    'user@example.com', // email
    undefined,         // userId (optional)
    undefined,         // phone (optional)
    'https://yourapp.com/accept-invite' // url - redirect after email click
);
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Create membership with email invite
const membership = await teams.createMembership(
    '<TEAM_ID>',
    ['developer'],     // roles
    'user@example.com', // email
    undefined,         // userId (optional)
    undefined,         // phone (optional)
    'https://yourapp.com/accept-invite' // url - redirect after email click
);`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Create membership with email invite
final membership = await teams.createMembership(
    teamId: '<TEAM_ID>',
    roles: ['developer'],
    email: 'user@example.com',
    url: 'https://yourapp.com/accept-invite' // redirect after email click
);
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Create membership with email invite
final membership = await teams.createMembership(
    teamId: '<TEAM_ID>',
    roles: ['developer'],
    email: 'user@example.com',
    url: 'https://yourapp.com/accept-invite' // redirect after email click
);`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

// Create membership with email invite
let membership = try await teams.createMembership(
    teamId: "<TEAM_ID>",
    roles: ["developer"],
    email: "user@example.com",
    url: "https://yourapp.com/accept-invite" // redirect after email click
)
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let teams = Teams(client)

// Create membership with email invite
let membership = try await teams.createMembership(
    teamId: "<TEAM_ID>",
    roles: ["developer"],
    email: "user@example.com",
    url: "https://yourapp.com/accept-invite" // redirect after email click
)`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

// Create membership with email invite
val response = teams.createMembership(
    teamId = "<TEAM_ID>",
    roles = listOf("developer"),
    email = "user@example.com",
    url = "https://yourapp.com/accept-invite" // redirect after email click
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val teams = Teams(client)

// Create membership with email invite
val response = teams.createMembership(
    teamId = "<TEAM_ID>",
    roles = listOf("developer"),
    email = "user@example.com",
    url = "https://yourapp.com/accept-invite" // redirect after email click
)`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var R=o(g);I(R,{level:2,children:(r,p)=>{i();var e=a("Accept invitations");t(r,e)},$$slots:{default:!0}});var A=o(R);v(A,{children:(r,p)=>{i();var e=a("For client-side email invites, users must accept the invitation to join the team. The acceptance flow:");t(r,e)},$$slots:{default:!0}});var j=o(A);b(j,{ordered:!0,marker:".",children:(r,p)=>{var e=Ie(),c=_(e);$(c,{children:(n,l)=>{i();var s=a("User receives an email with an invitation link containing a secret token");t(n,s)},$$slots:{default:!0}});var m=o(c);$(m,{children:(n,l)=>{i();var s=a("Clicking the link redirects to your app");t(n,s)},$$slots:{default:!0}});var d=o(m);$(d,{children:(n,l)=>{i();var s=a("Your app calls the acceptance endpoint");t(n,s)},$$slots:{default:!0}});var h=o(d);$(h,{children:(n,l)=>{i();var s=a("Upon success, the user gains immediate access");t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var x=o(j);E(x,{children:(r,p)=>{var e=$e(),c=_(e);u(c,{content:`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Accept the invitation using the membership ID and secret
const response = await teams.updateMembershipStatus(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>',
    '<USER_ID>',
    '<SECRET>'
);
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Accept the invitation using the membership ID and secret
const response = await teams.updateMembershipStatus(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>',
    '<USER_ID>',
    '<SECRET>'
);`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Accept the invitation using the membership ID and secret
final response = await teams.updateMembershipStatus(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>',
    userId: '<USER_ID>',
    secret: '<SECRET>'
);
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Accept the invitation using the membership ID and secret
final response = await teams.updateMembershipStatus(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>',
    userId: '<USER_ID>',
    secret: '<SECRET>'
);`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Accept the invitation using the membership ID and secret
let response = try await teams.updateMembershipStatus(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>",
    userId: "<USER_ID>",
    secret: "<SECRET>"
)
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Accept the invitation using the membership ID and secret
let response = try await teams.updateMembershipStatus(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>",
    userId: "<USER_ID>",
    secret: "<SECRET>"
)`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Accept the invitation using the membership ID and secret
val response = teams.updateMembershipStatus(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>",
    userId = "<USER_ID>",
    secret = "<SECRET>"
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Accept the invitation using the membership ID and secret
val response = teams.updateMembershipStatus(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>",
    userId = "<USER_ID>",
    secret = "<SECRET>"
)`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var S=o(x);I(S,{level:1,children:(r,p)=>{i();var e=a("Server-side custom flows");t(r,e)},$$slots:{default:!0}});var J=o(S);v(J,{children:(r,p)=>{i();var e=a("Server-side membership creation bypasses the email invitation process, allowing direct member addition. This approach:");t(r,e)},$$slots:{default:!0}});var y=o(J);b(y,{ordered:!0,marker:".",children:(r,p)=>{var e=Ee(),c=_(e);$(c,{children:(h,n)=>{i();var l=a("Creates an active membership immediately");t(h,l)},$$slots:{default:!0}});var m=o(c);$(m,{children:(h,n)=>{i();var l=a("Doesn't require user acceptance");t(h,l)},$$slots:{default:!0}});var d=o(m);$(d,{children:(h,n)=>{i();var l=a("Gives you complete control over the invitation workflow");t(h,l)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var k=o(y);v(k,{children:(r,p)=>{i();var e=a("This makes them perfect for scenarios requiring custom workflows, such as bulk user management, automated team assignments, or integration with external systems. Since memberships are created directly, users gain immediate access without waiting for email acceptance.");t(r,e)},$$slots:{default:!0}});var O=o(k);E(O,{children:(r,p)=>{var e=we(),c=_(e);u(c,{content:`const sdk = require('node-backrush');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const teams = new sdk.Teams(client);

// Create membership directly with userId
const membership = await teams.createMembership(
    '<TEAM_ID>',
    ['developer'],
    '<USER_ID>',
    'John Doe'  // optional name
);
`,language:"server-nodejs",process:!0,children:(n,l)=>{i();var s=a(`const sdk = require('node-backrush');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const teams = new sdk.Teams(client);

// Create membership directly with userId
const membership = await teams.createMembership(
    '<TEAM_ID>',
    ['developer'],
    '<USER_ID>',
    'John Doe'  // optional name
);`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`from backrush.client import Client
from backrush.services.teams import Teams

client = Client()
client.set_endpoint('https://cloud.backrush.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<API_KEY>')

teams = Teams(client)

# Create membership directly with userId
membership = teams.create_membership(
    team_id='<TEAM_ID>',
    roles=['developer'],
    user_id='<USER_ID>',
    name='John Doe'  # optional
)
`,language:"server-python",process:!0,children:(n,l)=>{i();var s=a(`from backrush.client import Client
from backrush.services.teams import Teams

client = Client()
client.set_endpoint('https://cloud.backrush.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<API_KEY>')

teams = Teams(client)

# Create membership directly with userId
membership = teams.create_membership(
    team_id='<TEAM_ID>',
    roles=['developer'],
    user_id='<USER_ID>',
    name='John Doe'  # optional
)`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("<API_KEY>") // Your secret API key

let teams = Teams(client)

// Create membership directly with userId
let membership = try await teams.createMembership(
    teamId: "<TEAM_ID>",
    roles: ["developer"],
    userId: "<USER_ID>",
    name: "John Doe" // optional
)
`,language:"server-swift",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("<API_KEY>") // Your secret API key

let teams = Teams(client)

// Create membership directly with userId
let membership = try await teams.createMembership(
    teamId: "<TEAM_ID>",
    roles: ["developer"],
    userId: "<USER_ID>",
    name: "John Doe" // optional
)`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("<API_KEY>") // Your secret API key

val teams = Teams(client)

// Create membership directly with userId
val response = teams.createMembership(
    teamId = "<TEAM_ID>",
    roles = listOf("developer"),
    userId = "<USER_ID>",
    name = "John Doe" // optional
)
`,language:"server-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client()
    .setEndpoint("https://cloud.backrush.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setKey("<API_KEY>") // Your secret API key

val teams = Teams(client)

// Create membership directly with userId
val response = teams.createMembership(
    teamId = "<TEAM_ID>",
    roles = listOf("developer"),
    userId = "<USER_ID>",
    name = "John Doe" // optional
)`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var U=o(O);I(U,{level:1,children:(r,p)=>{i();var e=a("Manage memberships");t(r,e)},$$slots:{default:!0}});var Y=o(U);v(Y,{children:(r,p)=>{i();var e=a("Once team memberships are created, you'll need to manage their lifecycle. This includes checking status, updating roles, and removing members when necessary.");t(r,e)},$$slots:{default:!0}});var K=o(Y);I(K,{level:2,children:(r,p)=>{i();var e=a("Check membership status");t(r,e)},$$slots:{default:!0}});var F=o(K);v(F,{children:(r,p)=>{i();var e=a("Before performing actions on team memberships, you often need to verify a user's current status within a team. The process differs between client-side and server-side implementations.");t(r,e)},$$slots:{default:!0}});var L=o(F);I(L,{level:3,children:(r,p)=>{i();var e=a("Client-side");t(r,e)},$$slots:{default:!0}});var B=o(L);v(B,{children:(r,p)=>{i();var e=a("To check membership status client-side, first list the teams and then get the memberships for a specific team:");t(r,e)},$$slots:{default:!0}});var H=o(B);E(H,{children:(r,p)=>{var e=be(),c=_(e);u(c,{content:`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Get list of teams the user is part of
const teamsList = await teams.list();

// For a specific team, get all memberships
const response = await teams.listMemberships('<TEAM_ID>');

// Find membership for specific user
const userMembership = response.memberships.find(
    membership => membership.userId === '<USER_ID>'
);

if (userMembership) {
    console.log(userMembership.confirm); // false = invited, true = joined
    console.log(userMembership.roles); // ['developer', etc]
}
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Get list of teams the user is part of
const teamsList = await teams.list();

// For a specific team, get all memberships
const response = await teams.listMemberships('<TEAM_ID>');

// Find membership for specific user
const userMembership = response.memberships.find(
    membership => membership.userId === '<USER_ID>'
);

if (userMembership) {
    console.log(userMembership.confirm); // false = invited, true = joined
    console.log(userMembership.roles); // ['developer', etc]
}`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Get list of teams the user is part of
final teamsList = await teams.list();

// For a specific team, get all memberships
final response = await teams.listMemberships(
    teamId: '<TEAM_ID>'
);

// Find membership for specific user
final userMembership = response.memberships.firstWhere(
    (membership) => membership.userId == '<USER_ID>',
    orElse: () => null
);

if (userMembership != null) {
    print(userMembership.confirm); // false = invited, true = joined
    print(userMembership.roles); // ['developer', etc]
}
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Get list of teams the user is part of
final teamsList = await teams.list();

// For a specific team, get all memberships
final response = await teams.listMemberships(
    teamId: '<TEAM_ID>'
);

// Find membership for specific user
final userMembership = response.memberships.firstWhere(
    (membership) => membership.userId == '<USER_ID>',
    orElse: () => null
);

if (userMembership != null) {
    print(userMembership.confirm); // false = invited, true = joined
    print(userMembership.roles); // ['developer', etc]
}`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Get list of teams the user is part of
let teamsList = try await teams.list()

// For a specific team, get all memberships
let response = try await teams.listMemberships(
    teamId: "<TEAM_ID>"
)

// Find membership for specific user
if let userMembership = response.memberships.first(where: { $0.userId == "<USER_ID>" }) {
    print(userMembership.confirm) // false = invited, true = joined
    print(userMembership.roles) // ['developer', etc]
}
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Get list of teams the user is part of
let teamsList = try await teams.list()

// For a specific team, get all memberships
let response = try await teams.listMemberships(
    teamId: "<TEAM_ID>"
)

// Find membership for specific user
if let userMembership = response.memberships.first(where: { $0.userId == "<USER_ID>" }) {
    print(userMembership.confirm) // false = invited, true = joined
    print(userMembership.roles) // ['developer', etc]
}`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Get list of teams the user is part of
val teamsList = teams.list()

// For a specific team, get all memberships
val response = teams.listMemberships(
    teamId = "team_id"
)

// Find membership for specific user
val userMembership = response.memberships.find {
    it.userId == "<USER_ID>"
}

userMembership?.let {
    println(it.confirm) // false = invited, true = joined
    println(it.roles) // ['developer', etc]
}
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Get list of teams the user is part of
val teamsList = teams.list()

// For a specific team, get all memberships
val response = teams.listMemberships(
    teamId = "team_id"
)

// Find membership for specific user
val userMembership = response.memberships.find {
    it.userId == "<USER_ID>"
}

userMembership?.let {
    println(it.confirm) // false = invited, true = joined
    println(it.roles) // ['developer', etc]
}`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var G=o(H);I(G,{level:3,children:(r,p)=>{i();var e=a("Server-side");t(r,e)},$$slots:{default:!0}});var q=o(G);v(q,{children:(r,p)=>{i();var e=a("Server-side requires iterating through teams and memberships since the data isn't filtered for a specific user:");t(r,e)},$$slots:{default:!0}});var W=o(q);E(W,{children:(r,p)=>{var e=Pe(),c=_(e);u(c,{content:`const sdk = require('node-backrush');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const teams = new sdk.Teams(client);

// Get all teams
const teamsList = await teams.list();

// Iterate through teams to find memberships
for (const team of teamsList.teams) {
    const response = await teams.listMemberships(team.$id);

    // Find membership for specific user
    const userMembership = response.memberships.find(
        membership => membership.userId === '<USER_ID>'
    );

    if (userMembership) {
        console.log(\`Team: \${team.name}\`);
        console.log(\`Joined: \${userMembership.joined}\`); // null if invited, timestamp if joined
        console.log(\`Roles: \${userMembership.roles}\`);
    }
}
`,language:"server-nodejs",process:!0,children:(n,l)=>{i();var s=a(`const sdk = require('node-backrush');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const teams = new sdk.Teams(client);

// Get all teams
const teamsList = await teams.list();

// Iterate through teams to find memberships
for (const team of teamsList.teams) {
    const response = await teams.listMemberships(team.$id);

    // Find membership for specific user
    const userMembership = response.memberships.find(
        membership => membership.userId === '<USER_ID>'
    );

    if (userMembership) {
        console.log(\`Team: \${team.name}\`);
        console.log(\`Joined: \${userMembership.joined}\`); // null if invited, timestamp if joined
        console.log(\`Roles: \${userMembership.roles}\`);
    }
}`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`from backrush.client import Client
from backrush.services.teams import Teams

client = Client()
client.set_endpoint('https://cloud.backrush.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<API_KEY>')

teams = Teams(client)

// Get all teams
teams_list = teams.list()

// Iterate through teams to find memberships
for team in teams_list['teams']:
    response = teams.list_memberships(team['$id'])

    // Find membership for specific user
    user_membership = next(
        (m for m in response['memberships'] if m['userId'] == '<USER_ID>'),
        None
    )

    if user_membership:
        print(f"Team: {team['name']}")
        print(f"Joined: {user_membership['joined']}") # null if invited, timestamp if joined
        print(f"Roles: {user_membership['roles']}")
`,language:"server-python",process:!0,children:(n,l)=>{i();var s=a(`from backrush.client import Client
from backrush.services.teams import Teams

client = Client()
client.set_endpoint('https://cloud.backrush.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<API_KEY>')

teams = Teams(client)

// Get all teams
teams_list = teams.list()

// Iterate through teams to find memberships
for team in teams_list['teams']:
    response = teams.list_memberships(team['$id'])

    // Find membership for specific user
    user_membership = next(
        (m for m in response['memberships'] if m['userId'] == '<USER_ID>'),
        None
    )

    if user_membership:
        print(f"Team: {team['name']}")
        print(f"Joined: {user_membership['joined']}") # null if invited, timestamp if joined
        print(f"Roles: {user_membership['roles']}")`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<API_KEY>")

let teams = Teams(client)

// Get all teams
let teamsList = try await teams.list()

// Iterate through teams to find memberships
for team in teamsList.teams {
    let response = try await teams.listMemberships(
        teamId: team.$id
    )

    // Find membership for specific user
    if let userMembership = response.memberships.first(where: { $0.userId == "<USER_ID>" }) {
        print("Team: \\(team.name)")
        print("Joined: \\(userMembership.joined)") # null if invited, timestamp if joined
        print("Roles: \\(userMembership.roles)")
    }
}
`,language:"server-swift",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<API_KEY>")

let teams = Teams(client)

// Get all teams
let teamsList = try await teams.list()

// Iterate through teams to find memberships
for team in teamsList.teams {
    let response = try await teams.listMemberships(
        teamId: team.$id
    )

    // Find membership for specific user
    if let userMembership = response.memberships.first(where: { $0.userId == "<USER_ID>" }) {
        print("Team: \\(team.name)")
        print("Joined: \\(userMembership.joined)") # null if invited, timestamp if joined
        print("Roles: \\(userMembership.roles)")
    }
}`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<API_KEY>")

val teams = Teams(client)

// Get all teams
val teamsList = teams.list()

// Iterate through teams to find memberships
teamsList.teams.forEach { team ->
    val response = teams.listMemberships(teamId = team.$id)

    // Find membership for specific user
    val userMembership = response.memberships.find {
        it.userId == "<USER_ID>"
    }

    userMembership?.let {
        println("Team: \${team.name}")
        println("Joined: \${it.joined}") # null if invited, timestamp if joined
        println("Roles: \${it.roles}")
    }
}
`,language:"server-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<API_KEY>")

val teams = Teams(client)

// Get all teams
val teamsList = teams.list()

// Iterate through teams to find memberships
teamsList.teams.forEach { team ->
    val response = teams.listMemberships(teamId = team.$id)

    // Find membership for specific user
    val userMembership = response.memberships.find {
        it.userId == "<USER_ID>"
    }

    userMembership?.let {
        println("Team: \${team.name}")
        println("Joined: \${it.joined}") # null if invited, timestamp if joined
        println("Roles: \${it.roles}")
    }
}`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var N=o(W);I(N,{level:2,children:(r,p)=>{i();var e=a("Remove members");t(r,e)},$$slots:{default:!0}});var z=o(N);v(z,{children:(r,p)=>{i();var e=a("Team owners can remove members or users can leave teams:");t(r,e)},$$slots:{default:!0}});var Q=o(z);E(Q,{children:(r,p)=>{var e=Te(),c=_(e);u(c,{content:`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

await teams.deleteMembership(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>'
);
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from 'backrush';

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

await teams.deleteMembership(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>'
);`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

await teams.deleteMembership(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>'
);
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart';

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

await teams.deleteMembership(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>'
);`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

try await teams.deleteMembership(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>"
)
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

try await teams.deleteMembership(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>"
)`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

teams.deleteMembership(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>"
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

teams.deleteMembership(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>"
)`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var V=o(Q);I(V,{level:1,children:(r,p)=>{i();var e=a("Manage team permissions");t(r,e)},$$slots:{default:!0}});var X=o(V);v(X,{children:(r,p)=>{i();var e=a("Teams in Backrush use a role-based access control (RBAC) system. Each team member can be assigned one or more roles that define their permissions within the team.");t(r,e)},$$slots:{default:!0}});var Z=o(X);I(Z,{level:2,children:(r,p)=>{i();var e=a("Update roles");t(r,e)},$$slots:{default:!0}});var ee=o(Z);v(ee,{children:(r,p)=>{i();var e=a("You can assign roles when creating a membership or update them later. Note that only team members with the owner role can update other members' roles:");t(r,e)},$$slots:{default:!0}});var te=o(ee);E(te,{children:(r,p)=>{var e=Me(),c=_(e);u(c,{content:`import { Client, Teams } from "backrush"

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

const teams = new Teams(client)

// Update member roles
await teams.updateMembership(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>',
    ['admin', 'developer']
)
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from "backrush"

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

const teams = new Teams(client)

// Update member roles
await teams.updateMembership(
    '<TEAM_ID>',
    '<MEMBERSHIP_ID>',
    ['admin', 'developer']
)`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart'

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

final teams = Teams(client)

// Update member roles
await teams.updateMembership(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>',
    roles: ['admin', 'developer']
)
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart'

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

final teams = Teams(client)

// Update member roles
await teams.updateMembership(
    teamId: '<TEAM_ID>',
    membershipId: '<MEMBERSHIP_ID>',
    roles: ['admin', 'developer']
)`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Update member roles
try await teams.updateMembership(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>",
    roles: ["admin", "developer"]
)
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Update member roles
try await teams.updateMembership(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>",
    roles: ["admin", "developer"]
)`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Update member roles
teams.updateMembership(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>",
    roles = listOf("admin", "developer")
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Update member roles
teams.updateMembership(
    teamId = "<TEAM_ID>",
    membershipId = "<MEMBERSHIP_ID>",
    roles = listOf("admin", "developer")
)`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var ne=o(te);I(ne,{level:2,children:(r,p)=>{i();var e=a("Check role access");t(r,e)},$$slots:{default:!0}});var se=o(ne);v(se,{children:(r,p)=>{i();var e=a("You can verify if a user has specific roles:");t(r,e)},$$slots:{default:!0}});var re=o(se);E(re,{children:(r,p)=>{var e=De(),c=_(e);u(c,{content:`import { Client, Teams } from "backrush"

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

const teams = new Teams(client)

// Get team memberships
const response = await teams.listMemberships('<TEAM_ID>')

// Check if user has specific role
const membership = response.memberships.find(m => m.userId === '<USER_ID>')
const isAdmin = membership?.roles.includes('admin') ?? false
`,language:"client-web",process:!0,children:(n,l)=>{i();var s=a(`import { Client, Teams } from "backrush"

const client = new Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

const teams = new Teams(client)

// Get team memberships
const response = await teams.listMemberships('<TEAM_ID>')

// Check if user has specific role
const membership = response.memberships.find(m => m.userId === '<USER_ID>')
const isAdmin = membership?.roles.includes('admin') ?? false`);t(n,s)},$$slots:{default:!0}});var m=o(c);u(m,{content:`import 'package:backrush/backrush.dart'

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

final teams = Teams(client)

// Get team memberships
final response = await teams.listMemberships(
    teamId: '<TEAM_ID>'
)

// Check if user has specific role
final membership = response.memberships.firstWhere(
    (m) => m.userId == '<USER_ID>',
    orElse: () => null
)
final isAdmin = membership?.roles.contains('admin') ?? false
`,language:"client-flutter",process:!0,children:(n,l)=>{i();var s=a(`import 'package:backrush/backrush.dart'

final client = Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')

final teams = Teams(client)

// Get team memberships
final response = await teams.listMemberships(
    teamId: '<TEAM_ID>'
)

// Check if user has specific role
final membership = response.memberships.firstWhere(
    (m) => m.userId == '<USER_ID>',
    orElse: () => null
)
final isAdmin = membership?.roles.contains('admin') ?? false`);t(n,s)},$$slots:{default:!0}});var d=o(m);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Get team memberships
let response = try await teams.listMemberships(
    teamId: "<TEAM_ID>"
)

// Check if user has specific role
let membership = response.memberships.first { $0.userId == "<USER_ID>" }
let isAdmin = membership?.roles.contains("admin") ?? false
`,language:"client-apple",process:!0,children:(n,l)=>{i();var s=a(`import Backrush

let client = Client()
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Get team memberships
let response = try await teams.listMemberships(
    teamId: "<TEAM_ID>"
)

// Check if user has specific role
let membership = response.memberships.first { $0.userId == "<USER_ID>" }
let isAdmin = membership?.roles.contains("admin") ?? false`);t(n,s)},$$slots:{default:!0}});var h=o(d);u(h,{content:`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Get team memberships
val response = teams.listMemberships(
    teamId = "<TEAM_ID>"
)

// Check if user has specific role
val membership = response.memberships.find { it.userId == "<USER_ID>" }
val isAdmin = membership?.roles?.contains("admin") ?: false
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{i();var s=a(`import io.backrush.Client
import io.backrush.services.Teams

val client = Client(context)
    .setEndpoint("https://cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Get team memberships
val response = teams.listMemberships(
    teamId = "<TEAM_ID>"
)

// Check if user has specific role
val membership = response.memberships.find { it.userId == "<USER_ID>" }
val isAdmin = membership?.roles?.contains("admin") ?: false`);t(n,s)},$$slots:{default:!0}}),t(r,e)},$$slots:{default:!0}});var ie=o(re);v(ie,{children:(r,p)=>{i();var e=Ce(),c=o(_(e));ue(c,{href:"/docs/advanced/platform/permissions#example-2-team-roles",children:(m,d)=>{i();var h=a("permissions");t(m,h)},$$slots:{default:!0}}),i(),t(r,e)},$$slots:{default:!0}});var le=o(ie);de(le,{href:"/docs/products/auth/teams",children:(r,p)=>{v(r,{children:(e,c)=>{i();var m=a("Learn more about team management");t(e,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),me(w),t(oe,w)},$$slots:{default:!0}}))}export{Qe as component};
