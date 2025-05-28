import{t as _,b as i,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f as v,c as j,n as e,r as B}from"../chunks/NgVQVlRK.js";import{n as J}from"../chunks/B4IyMRKX.js";import{S as g}from"../chunks/B6JyFckC.js";import{M as R}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as I}from"../chunks/DXp9_3zM.js";import{F as w}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as b}from"../chunks/D8YsId2T.js";import{S as f}from"../chunks/yHjwcyUH.js";import{L as G}from"../chunks/yh4_9ChP.js";import{A as H}from"../chunks/CqOphJLh.js";const Q={layout:"article",title:"Start with Databases",description:"Get started with Backrush Databases. Follow a step-by-step guide to create your first database, define collections, and perform basic data operations."};var M=_("Head to your <!> and create a database and name it <!>. Optionally, add a custom database ID.",1),z=_("Create a collection and name it <!>. Optionally, add a custom collection ID.",1),F=_("Navigate to <!> and create attributes by clicking <!> and select <!>. Attributes define the structure of your collection&#39;s documents. Enter <!> and <!>. For example, <!> and <!>.",1),K=_("Navigate to <!> &gt; <!> and add a new role <!>. Check the <!> and <!> permissions, so anyone can create and read documents.",1),U=_("<!><!><!>",1),V=_("To create a document use the <!> method.",1),W=_("In the <!> menu, find your project ID and replace <!> in the example.",1),X=_("Navigate to the <!> database, copy the database ID, and replace <!>. Then, in the <!> collection, copy the collection ID, and replace <!>.",1),Y=_("<!><!><!><!>",1),Z=_("<!><!><!><!><!><!>",1),tt=_("To read and query data from your collection, use the <!> endpoint.",1),et=_("Like the previous step, replace <!>, <!>, and<!> with their respective IDs.",1),nt=_("<!><!><!><!>",1),at=_("<!><!><!>",1),ot=_("<article><!><!><!><!></article>");function Ot(S){H(S,J(Q,{children:(k,rt)=>{var T=ot(),L=j(T);g(L,{id:"create-database",step:1,title:"Create database",children:(P,y)=>{b(P,{children:(h,C)=>{e();var D=M(),A=t(v(D));G(A,{href:"https://cloud.appwrite.io/console/",children:(E,l)=>{e();var a=i("Backrush Console");n(E,a)},$$slots:{default:!0}});var $=t(A,2);I($,{content:"Oscar"}),e(),n(h,D)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=t(L);g(x,{id:"create-collection",step:2,title:"Create collection",children:(P,y)=>{var h=U(),C=v(h);b(C,{children:($,E)=>{e();var l=z(),a=t(v(l));I(a,{content:"My books"}),e(),n($,l)},$$slots:{default:!0}});var D=t(C);b(D,{children:($,E)=>{e();var l=F(),a=t(v(l));f(a,{marker:"**",children:(o,O)=>{e();var m=i("Attributes");n(o,m)},$$slots:{default:!0}});var u=t(a,2);f(u,{marker:"**",children:(o,O)=>{e();var m=i("Create attribute");n(o,m)},$$slots:{default:!0}});var r=t(u,2);f(r,{marker:"**",children:(o,O)=>{e();var m=i("String");n(o,m)},$$slots:{default:!0}});var p=t(r,2);f(p,{marker:"**",children:(o,O)=>{e();var m=i("Attribute key");n(o,m)},$$slots:{default:!0}});var c=t(p,2);f(c,{marker:"**",children:(o,O)=>{e();var m=i("Size");n(o,m)},$$slots:{default:!0}});var s=t(c,2);I(s,{content:"title"});var d=t(s,2);I(d,{content:"100"}),e(),n($,l)},$$slots:{default:!0}});var A=t(D);b(A,{children:($,E)=>{e();var l=K(),a=t(v(l));f(a,{marker:"**",children:(s,d)=>{e();var o=i("Settings");n(s,o)},$$slots:{default:!0}});var u=t(a,2);f(u,{marker:"**",children:(s,d)=>{e();var o=i("Permissions");n(s,o)},$$slots:{default:!0}});var r=t(u,2);f(r,{marker:"**",children:(s,d)=>{e();var o=i("Any");n(s,o)},$$slots:{default:!0}});var p=t(r,2);f(p,{marker:"**",children:(s,d)=>{e();var o=i("CREATE");n(s,o)},$$slots:{default:!0}});var c=t(p,2);f(c,{marker:"**",children:(s,d)=>{e();var o=i("READ");n(s,o)},$$slots:{default:!0}}),e(),n($,l)},$$slots:{default:!0}}),n(P,h)},$$slots:{default:!0}});var N=t(x);g(N,{id:"create-documents",step:3,title:"Create documents",children:(P,y)=>{var h=Z(),C=v(h);b(C,{children:(a,u)=>{e();var r=V(),p=t(v(r));I(p,{content:"createDocument"}),e(),n(a,r)},$$slots:{default:!0}});var D=t(C);b(D,{children:(a,u)=>{e();var r=W(),p=t(v(r));f(p,{marker:"**",children:(s,d)=>{e();var o=i("Settings");n(s,o)},$$slots:{default:!0}});var c=t(p,2);I(c,{content:"<PROJECT_ID>"}),e(),n(a,r)},$$slots:{default:!0}});var A=t(D);b(A,{children:(a,u)=>{e();var r=X(),p=t(v(r));I(p,{content:"Oscar"});var c=t(p,2);I(c,{content:"<DATABASE_ID>"});var s=t(c,2);I(s,{content:"My books"});var d=t(s,2);I(d,{content:"<COLLECTION_ID>"}),e(),n(a,r)},$$slots:{default:!0}});var $=t(A);R($,{children:(a,u)=>{var r=Y(),p=v(r);w(p,{content:`import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(o,O)=>{e();var m=i(`import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);n(o,m)},$$slots:{default:!0}});var c=t(p);w(c,{content:`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: { "title": "Hamlet" }
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(o,O)=>{e();var m=i(`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: { "title": "Hamlet" }
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);n(o,m)},$$slots:{default:!0}});var s=t(c);w(s,{content:`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let document = try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique(),
            data: ["title" : "hamlet"]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:(o,O)=>{e();var m=i(`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let document = try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique(),
            data: ["title" : "hamlet"]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);n(o,m)},$$slots:{default:!0}});var d=t(s);w(d,{content:`import io.appwrite.Client
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val document = databases.createDocument(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            documentId = ID.unique(),
            data = mapOf("title" to "hamlet"),
        )
    } catch (e: Exception) {
        Log.e("Backrush", "Error: " + e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:(o,O)=>{e();var m=i(`import io.appwrite.Client
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val document = databases.createDocument(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            documentId = ID.unique(),
            data = mapOf("title" to "hamlet"),
        )
    } catch (e: Exception) {
        Log.e("Backrush", "Error: " + e.message)
    }
}`);n(o,m)},$$slots:{default:!0}}),n(a,r)},$$slots:{default:!0}});var E=t($);b(E,{children:(a,u)=>{e();var r=i("The response should look similar to this.");n(a,r)},$$slots:{default:!0}});var l=t(E);w(l,{content:`{
    "title": "Hamlet",
    "$id": "65013138dcd8618e80c4",
    "$permissions": [],
    "$createdAt": "2023-09-13T03:49:12.905+00:00",
    "$updatedAt": "2023-09-13T03:49:12.905+00:00",
    "$databaseId": "650125c64b3c25ce4bc4",
    "$collectionId": "650125cff227cf9f95ad"
}
`,language:"json",process:!0,children:(a,u)=>{e();var r=i(`{
    "title": "Hamlet",
    "$id": "65013138dcd8618e80c4",
    "$permissions": [],
    "$createdAt": "2023-09-13T03:49:12.905+00:00",
    "$updatedAt": "2023-09-13T03:49:12.905+00:00",
    "$databaseId": "650125c64b3c25ce4bc4",
    "$collectionId": "650125cff227cf9f95ad"
}`);n(a,r)},$$slots:{default:!0}}),n(P,h)},$$slots:{default:!0}});var q=t(N);g(q,{id:"list-documents",step:4,title:"List documents",children:(P,y)=>{var h=at(),C=v(h);b(C,{children:($,E)=>{e();var l=tt(),a=t(v(l));I(a,{content:"listDocuments"}),e(),n($,l)},$$slots:{default:!0}});var D=t(C);b(D,{children:($,E)=>{e();var l=et(),a=t(v(l));I(a,{content:"<PROJECT_ID>"});var u=t(a,2);I(u,{content:"<DATABASE_ID>"});var r=t(u,2);I(r,{content:"<COLLECTION_ID>"}),e(),n($,l)},$$slots:{default:!0}});var A=t(D);R(A,{children:($,E)=>{var l=nt(),a=v(l);w(a,{content:`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [
        Query.equal('title', 'Hamlet')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(c,s)=>{e();var d=i(`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [
        Query.equal('title', 'Hamlet')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);n(c,d)},$$slots:{default:!0}});var u=t(a);w(u,{content:`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            queries: [
                Query.equal('title', 'Hamlet')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(c,s)=>{e();var d=i(`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            queries: [
                Query.equal('title', 'Hamlet')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);n(c,d)},$$slots:{default:!0}});var r=t(u);w(r,{content:`import Backrush
import BackrushModels

func main() async throws{
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.equal("title", value: "Hamlet")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:(c,s)=>{e();var d=i(`import Backrush
import BackrushModels

func main() async throws{
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.equal("title", value: "Hamlet")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);n(c,d)},$$slots:{default:!0}});var p=t(r);w(p,{content:`import io.appwrite.Client
import io.appwrite.Query
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val documents = databases.listDocuments(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            queries = listOf(
                Query.equal("title", "Hamlet")
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", "Error: " + e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:(c,s)=>{e();var d=i(`import io.appwrite.Client
import io.appwrite.Query
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val documents = databases.listDocuments(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            queries = listOf(
                Query.equal("title", "Hamlet")
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", "Error: " + e.message)
    }
}`);n(c,d)},$$slots:{default:!0}}),n($,l)},$$slots:{default:!0}}),n(P,h)},$$slots:{default:!0}}),B(T),n(k,T)},$$slots:{default:!0}}))}export{Ot as component};
