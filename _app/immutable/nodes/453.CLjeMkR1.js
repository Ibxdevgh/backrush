import{t as _,b as r,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as X,s as i,f as $,n as s,r as Y}from"../chunks/NgVQVlRK.js";import{n as Z}from"../chunks/B4IyMRKX.js";import{H as x}from"../chunks/CXsRaEhZ.js";import{M as C}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import{A as H}from"../chunks/CP6rnx7i.js";import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as u}from"../chunks/OFUKRh55.js";import{L as z,I as f}from"../chunks/BhmTgGWB.js";import{P as w}from"../chunks/D8YsId2T.js";import{S as P}from"../chunks/yHjwcyUH.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{A as ee}from"../chunks/CqOphJLh.js";const te={layout:"article",title:"Multi-tenancy with Teams",description:"Learn how to implement multi-tenancy in your applications using Backrush Teams."};var ne=_("<!><!><!><!>",1),ae=_("<!>: Organizations that need isolated data and users",1),se=_("<!>: Projects with different access levels",1),oe=_("<!>: Schools with teachers and students",1),re=_("<!>: Companies with department-based access control",1),ie=_("<!><!><!><!>",1),le=_("<!><!><!><!>",1),ce=_("<!><!><!><!>",1),pe=_("<!><!><!><!>",1),me=_("<!><!><!><!>",1),de=_("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Je(B){ee(B,Z(te,{children:(K,ue)=>{var E=de(),T=X(E);w(T,{children:(o,p)=>{s();var a=r("Backrush Teams provides an effective way to implement multi-tenancy in your applications. Create a team for each tenant to handle multi-tenant apps with built-in data isolation.");t(o,a)},$$slots:{default:!0}});var R=i(T);H(R,{href:"/docs/products/auth/teams",children:(o,p)=>{w(o,{children:(a,m)=>{s();var c=r("Learn more about Teams");t(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var y=i(R);x(y,{level:1,children:(o,p)=>{s();var a=r("What is multi-tenancy?");t(o,a)},$$slots:{default:!0}});var O=i(y);w(O,{children:(o,p)=>{s();var a=r("Multi-tenancy is a design pattern where a single instance of software serves multiple user groups (tenants). With Backrush Teams, you can:");t(o,a)},$$slots:{default:!0}});var g=i(O);z(g,{ordered:!1,marker:"-",children:(o,p)=>{var a=ne(),m=$(a);f(m,{children:(n,l)=>{s();var e=r("Create a team for each tenant in your application");t(n,e)},$$slots:{default:!0}});var c=i(m);f(c,{children:(n,l)=>{s();var e=r("Control access to resources using team-based permissions");t(n,e)},$$slots:{default:!0}});var d=i(c);f(d,{children:(n,l)=>{s();var e=r("Define different roles within each tenant");t(n,e)},$$slots:{default:!0}});var v=i(d);f(v,{children:(n,l)=>{s();var e=r("Scale to unlimited tenants without code changes");t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var j=i(g);x(j,{level:1,children:(o,p)=>{s();var a=r("Common use cases");t(o,a)},$$slots:{default:!0}});var G=i(j);z(G,{ordered:!1,marker:"-",children:(o,p)=>{var a=ie(),m=$(a);f(m,{children:(n,l)=>{var e=ae(),h=$(e);P(h,{marker:"**",children:(b,D)=>{s();var I=r("SaaS applications");t(b,I)},$$slots:{default:!0}}),s(),t(n,e)},$$slots:{default:!0}});var c=i(m);f(c,{children:(n,l)=>{var e=se(),h=$(e);P(h,{marker:"**",children:(b,D)=>{s();var I=r("Collaborative tools");t(b,I)},$$slots:{default:!0}}),s(),t(n,e)},$$slots:{default:!0}});var d=i(c);f(d,{children:(n,l)=>{var e=oe(),h=$(e);P(h,{marker:"**",children:(b,D)=>{s();var I=r("Educational platforms");t(b,I)},$$slots:{default:!0}}),s(),t(n,e)},$$slots:{default:!0}});var v=i(d);f(v,{children:(n,l)=>{var e=re(),h=$(e);P(h,{marker:"**",children:(b,D)=>{s();var I=r("Business software");t(b,I)},$$slots:{default:!0}}),s(),t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var J=i(G);x(J,{level:1,children:(o,p)=>{s();var a=r("Create teams for tenants");t(o,a)},$$slots:{default:!0}});var N=i(J);w(N,{children:(o,p)=>{s();var a=r("When a new tenant signs up, create a dedicated team that serves as their isolated environment.");t(o,a)},$$slots:{default:!0}});var q=i(N);C(q,{children:(o,p)=>{var a=le(),m=$(a);u(m,{content:`import { Client, Teams, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Create team for a new tenant
const tenantTeam = await teams.create(
    'example_corp', // Team ID for tenant
    'Example Corp',   // Tenant name
    ['owner', 'admin', 'member'] // Tenant roles
);
`,language:"client-web",process:!0,children:(n,l)=>{s();var e=r(`import { Client, Teams, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Create team for a new tenant
const tenantTeam = await teams.create(
    'example_corp', // Team ID for tenant
    'Example Corp',   // Tenant name
    ['owner', 'admin', 'member'] // Tenant roles
);`);t(n,e)},$$slots:{default:!0}});var c=i(m);u(c,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Create team for a new tenant
final tenantTeam = await teams.create(
    teamId: 'example_corp', // Team ID for tenant
    name: 'Example Corp',   // Tenant name
    roles: ['owner', 'admin', 'member'] // Tenant roles
);
`,language:"client-flutter",process:!0,children:(n,l)=>{s();var e=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Create team for a new tenant
final tenantTeam = await teams.create(
    teamId: 'example_corp', // Team ID for tenant
    name: 'Example Corp',   // Tenant name
    roles: ['owner', 'admin', 'member'] // Tenant roles
);`);t(n,e)},$$slots:{default:!0}});var d=i(c);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Create team for a new tenant
let tenantTeam = try await teams.create(
    teamId: "example_corp", // Team ID for tenant
    name: "Example Corp",   // Tenant name
    roles: ["owner", "admin", "member"] // Tenant roles
)
`,language:"client-apple",process:!0,children:(n,l)=>{s();var e=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Create team for a new tenant
let tenantTeam = try await teams.create(
    teamId: "example_corp", // Team ID for tenant
    name: "Example Corp",   // Tenant name
    roles: ["owner", "admin", "member"] // Tenant roles
)`);t(n,e)},$$slots:{default:!0}});var v=i(d);u(v,{content:`import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Create team for a new tenant
val tenantTeam = teams.create(
    teamId = "example_corp", // Team ID for tenant
    name = "Example Corp",   // Tenant name
    roles = listOf("owner", "admin", "member") // Tenant roles
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{s();var e=r(`import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Create team for a new tenant
val tenantTeam = teams.create(
    teamId = "example_corp", // Team ID for tenant
    name = "Example Corp",   // Tenant name
    roles = listOf("owner", "admin", "member") // Tenant roles
)`);t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var A=i(q);x(A,{level:1,children:(o,p)=>{s();var a=r("Add members to tenants");t(o,a)},$$slots:{default:!0}});var k=i(A);w(k,{children:(o,p)=>{s();var a=r("Invite users to join a tenant using team memberships. Each member can be assigned different roles for access control.");t(o,a)},$$slots:{default:!0}});var Q=i(k);C(Q,{children:(o,p)=>{var a=ce(),m=$(a);u(m,{content:`import { Client, Teams } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Invite a member to the tenant
const membership = await teams.createMembership(
    'example_corp',      // Team/tenant ID
    ['admin'],           // Member's role in the tenant
    'user@example.com',  // User's email
    undefined,           // userId (optional)
    undefined,           // phone (optional)
    'https://example.com/accept-invite' // Redirect URL after accepting
);
`,language:"client-web",process:!0,children:(n,l)=>{s();var e=r(`import { Client, Teams } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const teams = new Teams(client);

// Invite a member to the tenant
const membership = await teams.createMembership(
    'example_corp',      // Team/tenant ID
    ['admin'],           // Member's role in the tenant
    'user@example.com',  // User's email
    undefined,           // userId (optional)
    undefined,           // phone (optional)
    'https://example.com/accept-invite' // Redirect URL after accepting
);`);t(n,e)},$$slots:{default:!0}});var c=i(m);u(c,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Invite a member to the tenant
final membership = await teams.createMembership(
    teamId: 'example_corp',   // Team/tenant ID
    roles: ['admin'],         // Member's role in the tenant
    email: 'user@example.com', // User's email
    url: 'https://example.com/accept-invite' // Redirect URL after accepting
);
`,language:"client-flutter",process:!0,children:(n,l)=>{s();var e=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final teams = Teams(client);

// Invite a member to the tenant
final membership = await teams.createMembership(
    teamId: 'example_corp',   // Team/tenant ID
    roles: ['admin'],         // Member's role in the tenant
    email: 'user@example.com', // User's email
    url: 'https://example.com/accept-invite' // Redirect URL after accepting
);`);t(n,e)},$$slots:{default:!0}});var d=i(c);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Invite a member to the tenant
let membership = try await teams.createMembership(
    teamId: "example_corp",    // Team/tenant ID
    roles: ["admin"],          // Member's role in the tenant
    email: "user@example.com", // User's email
    url: "https://example.com/accept-invite" // Redirect URL after accepting
)
`,language:"client-apple",process:!0,children:(n,l)=>{s();var e=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let teams = Teams(client)

// Invite a member to the tenant
let membership = try await teams.createMembership(
    teamId: "example_corp",    // Team/tenant ID
    roles: ["admin"],          // Member's role in the tenant
    email: "user@example.com", // User's email
    url: "https://example.com/accept-invite" // Redirect URL after accepting
)`);t(n,e)},$$slots:{default:!0}});var v=i(d);u(v,{content:`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Invite a member to the tenant
val membership = teams.createMembership(
    teamId = "example_corp",    // Team/tenant ID
    roles = listOf("admin"),    // Member's role in the tenant
    email = "user@example.com", // User's email
    url = "https://example.com/accept-invite" // Redirect URL after accepting
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{s();var e=r(`import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val teams = Teams(client)

// Invite a member to the tenant
val membership = teams.createMembership(
    teamId = "example_corp",    // Team/tenant ID
    roles = listOf("admin"),    // Member's role in the tenant
    email = "user@example.com", // User's email
    url = "https://example.com/accept-invite" // Redirect URL after accepting
)`);t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var M=i(Q);x(M,{level:1,children:(o,p)=>{s();var a=r("Secure resources with team permissions");t(o,a)},$$slots:{default:!0}});var U=i(M);w(U,{children:(o,p)=>{s();var a=r("Control access to documents and resources using team-based permissions. This ensures data isolation between tenants.");t(o,a)},$$slots:{default:!0}});var L=i(U);C(L,{children:(o,p)=>{var a=pe(),m=$(a);u(m,{content:`import { Client, Databases, ID, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Create a document that only members of "Example Corp" tenant can access
const document = await databases.createDocument(
    'invoices_db',
    'invoices',
    ID.unique(),
    {
        title: 'Q2 Invoice',
        amount: 2500.00,
        customer: 'Example Customer',
        status: 'pending',
        tenant_id: 'example_corp'
    },
    [
        // All Example Corp team members can read
        Permission.read(Role.team('example_corp')),

        // Only admins can update
        Permission.write(Role.team('example_corp', ['admin']))
    ]
);
`,language:"client-web",process:!0,children:(n,l)=>{s();var e=r(`import { Client, Databases, ID, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Create a document that only members of "Example Corp" tenant can access
const document = await databases.createDocument(
    'invoices_db',
    'invoices',
    ID.unique(),
    {
        title: 'Q2 Invoice',
        amount: 2500.00,
        customer: 'Example Customer',
        status: 'pending',
        tenant_id: 'example_corp'
    },
    [
        // All Example Corp team members can read
        Permission.read(Role.team('example_corp')),

        // Only admins can update
        Permission.write(Role.team('example_corp', ['admin']))
    ]
);`);t(n,e)},$$slots:{default:!0}});var c=i(m);u(c,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

// Create a document that only members of "Example Corp" tenant can access
final document = await databases.createDocument(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
    documentId: ID.unique(),
    data: {
        'title': 'Q2 Invoice',
        'amount': 2500.00,
        'customer': 'Example Customer',
        'status': 'pending',
        'tenant_id': 'example_corp'
    },
    permissions: [
        // All Example Corp team members can read
        Permission.read(Role.team('example_corp')),

        // Only admins can update
        Permission.write(Role.team('example_corp', ['admin']))
    ]
);
`,language:"client-flutter",process:!0,children:(n,l)=>{s();var e=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

// Create a document that only members of "Example Corp" tenant can access
final document = await databases.createDocument(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
    documentId: ID.unique(),
    data: {
        'title': 'Q2 Invoice',
        'amount': 2500.00,
        'customer': 'Example Customer',
        'status': 'pending',
        'tenant_id': 'example_corp'
    },
    permissions: [
        // All Example Corp team members can read
        Permission.read(Role.team('example_corp')),

        // Only admins can update
        Permission.write(Role.team('example_corp', ['admin']))
    ]
);`);t(n,e)},$$slots:{default:!0}});var d=i(c);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Databases(client)

// Create a document that only members of "Example Corp" tenant can access
let document = try await databases.createDocument(
    databaseId: "invoices_db",
    collectionId: "invoices",
    documentId: ID.unique(),
    data: [
        "title": "Q2 Invoice",
        "amount": 2500.00,
        "customer": "Example Customer",
        "status": "pending",
        "tenant_id": "example_corp"
    ],
    permissions: [
        // All Example Corp team members can read
        Permission.read(Role.team("example_corp")),

        // Only admins can update
        Permission.write(Role.team("example_corp", ["admin"]))
    ]
)
`,language:"client-apple",process:!0,children:(n,l)=>{s();var e=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Databases(client)

// Create a document that only members of "Example Corp" tenant can access
let document = try await databases.createDocument(
    databaseId: "invoices_db",
    collectionId: "invoices",
    documentId: ID.unique(),
    data: [
        "title": "Q2 Invoice",
        "amount": 2500.00,
        "customer": "Example Customer",
        "status": "pending",
        "tenant_id": "example_corp"
    ],
    permissions: [
        // All Example Corp team members can read
        Permission.read(Role.team("example_corp")),

        // Only admins can update
        Permission.write(Role.team("example_corp", ["admin"]))
    ]
)`);t(n,e)},$$slots:{default:!0}});var v=i(d);u(v,{content:`import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.Databases
import io.appwrite.models.Permission
import io.appwrite.models.Role

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Databases(client)

// Create a document that only members of "Example Corp" tenant can access
val document = databases.createDocument(
    databaseId = "invoices_db",
    collectionId = "invoices",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Q2 Invoice",
        "amount" to 2500.00,
        "customer" to "Example Customer",
        "status" to "pending",
        "tenant_id" to "example_corp"
    ),
    permissions = listOf(
        // All Example Corp team members can read
        Permission.read(Role.team("example_corp")),

        // Only admins can update
        Permission.write(Role.team("example_corp", listOf("admin")))
    )
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{s();var e=r(`import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.Databases
import io.appwrite.models.Permission
import io.appwrite.models.Role

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Databases(client)

// Create a document that only members of "Example Corp" tenant can access
val document = databases.createDocument(
    databaseId = "invoices_db",
    collectionId = "invoices",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Q2 Invoice",
        "amount" to 2500.00,
        "customer" to "Example Customer",
        "status" to "pending",
        "tenant_id" to "example_corp"
    ),
    permissions = listOf(
        // All Example Corp team members can read
        Permission.read(Role.team("example_corp")),

        // Only admins can update
        Permission.write(Role.team("example_corp", listOf("admin")))
    )
)`);t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var F=i(L);x(F,{level:1,children:(o,p)=>{s();var a=r("Query tenant data");t(o,a)},$$slots:{default:!0}});var S=i(F);w(S,{children:(o,p)=>{s();var a=r("When querying data, users will automatically only see documents they have permission to access based on their team memberships.");t(o,a)},$$slots:{default:!0}});var W=i(S);C(W,{children:(o,p)=>{var a=me(),m=$(a);u(m,{content:`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Current user will only see invoices they have access to
const documents = await databases.listDocuments(
    'invoices_db',
    'invoices'
);

// For specific tenant data, you can add a query filter
const tenantDocuments = await databases.listDocuments(
    'invoices_db',
    'invoices',
    [
        Query.equal('tenant_id', 'example_corp')
    ]
);
`,language:"client-web",process:!0,children:(n,l)=>{s();var e=r(`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Current user will only see invoices they have access to
const documents = await databases.listDocuments(
    'invoices_db',
    'invoices'
);

// For specific tenant data, you can add a query filter
const tenantDocuments = await databases.listDocuments(
    'invoices_db',
    'invoices',
    [
        Query.equal('tenant_id', 'example_corp')
    ]
);`);t(n,e)},$$slots:{default:!0}});var c=i(m);u(c,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

// Current user will only see invoices they have access to
final documents = await databases.listDocuments(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
);

// For specific tenant data, you can add a query filter
final tenantDocuments = await databases.listDocuments(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
    queries: [
        Query.equal('tenant_id', 'example_corp')
    ]
);
`,language:"client-flutter",process:!0,children:(n,l)=>{s();var e=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

// Current user will only see invoices they have access to
final documents = await databases.listDocuments(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
);

// For specific tenant data, you can add a query filter
final tenantDocuments = await databases.listDocuments(
    databaseId: 'invoices_db',
    collectionId: 'invoices',
    queries: [
        Query.equal('tenant_id', 'example_corp')
    ]
);`);t(n,e)},$$slots:{default:!0}});var d=i(c);u(d,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Databases(client)

// Current user will only see invoices they have access to
let documents = try await databases.listDocuments(
    databaseId: "invoices_db",
    collectionId: "invoices"
)

// For specific tenant data, you can add a query filter
let tenantDocuments = try await databases.listDocuments(
    databaseId: "invoices_db",
    collectionId: "invoices",
    queries: [
        Query.equal(key: "tenant_id", value: "example_corp")
    ]
)
`,language:"client-apple",process:!0,children:(n,l)=>{s();var e=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Databases(client)

// Current user will only see invoices they have access to
let documents = try await databases.listDocuments(
    databaseId: "invoices_db",
    collectionId: "invoices"
)

// For specific tenant data, you can add a query filter
let tenantDocuments = try await databases.listDocuments(
    databaseId: "invoices_db",
    collectionId: "invoices",
    queries: [
        Query.equal(key: "tenant_id", value: "example_corp")
    ]
)`);t(n,e)},$$slots:{default:!0}});var v=i(d);u(v,{content:`import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.Query

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Databases(client)

// Current user will only see invoices they have access to
val documents = databases.listDocuments(
    databaseId = "invoices_db",
    collectionId = "invoices"
)

// For specific tenant data, you can add a query filter
val tenantDocuments = databases.listDocuments(
    databaseId = "invoices_db",
    collectionId = "invoices",
    queries = listOf(
        Query.equal("tenant_id", "example_corp")
    )
)
`,language:"client-android-kotlin",process:!0,children:(n,l)=>{s();var e=r(`import io.appwrite.Client
import io.appwrite.services.Databases
import io.appwrite.Query

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Databases(client)

// Current user will only see invoices they have access to
val documents = databases.listDocuments(
    databaseId = "invoices_db",
    collectionId = "invoices"
)

// For specific tenant data, you can add a query filter
val tenantDocuments = databases.listDocuments(
    databaseId = "invoices_db",
    collectionId = "invoices",
    queries = listOf(
        Query.equal("tenant_id", "example_corp")
    )
)`);t(n,e)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var V=i(W);H(V,{href:"/docs/products/auth/team-invites",children:(o,p)=>{w(o,{children:(a,m)=>{s();var c=r("Learn how to manage team invitations");t(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),Y(E),t(K,E)},$$slots:{default:!0}}))}export{Je as component};
