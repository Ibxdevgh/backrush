import{t as v,b as i,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as M,s as a,f as D,n as t,r as z}from"../chunks/NgVQVlRK.js";import{n as Y}from"../chunks/B4IyMRKX.js";import{H as E}from"../chunks/CXsRaEhZ.js";import{M as G}from"../chunks/hMT8fFzP.js";import{I as j}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{F as I}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as _}from"../chunks/D8YsId2T.js";import{S as f}from"../chunks/yHjwcyUH.js";import{L as h}from"../chunks/yh4_9ChP.js";import{A as U}from"../chunks/CqOphJLh.js";const F={layout:"article",title:"Documents",description:"Master document management with Backrush Databases. Learn how to create, update, and query documents within your collections for dynamic data storage."};var H=v("You must grant <!> permissions to users at the <!> before users can create documents. <!>",1),K=v("<!><!><!><!><!>",1),V=v("During testing, you might prefer to create documents in the Backrush Console. To do so, navigate to the <!> tab of your collection and click the <!> button.",1),W=v("You must grant <!> permissions to users at the <!> before users can read documents. <!>",1),X=v("Documents can be retrieved using the <!> endpoint.",1),Z=v("Results can be filtered, sorted, and paginated using Backrush&#39;s shared set of query methods. You can find a full guide on querying in the <!>.",1),tt=v("By default, results are limited to the <!>. You can change this through <!>.",1),et=v("<!><!><!><!><!>",1),nt=v("<!>.",1),at=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function wt(k){U(k,Y(F,{children:(J,ot)=>{var b=at(),A=M(b);_(A,{children:(o,u)=>{t();var n=i("Each piece of data or information in Backrush Databases is a document. Documents have a structure defined by the parent collection.");e(o,n)},$$slots:{default:!0}});var C=a(A);E(C,{id:"create-documents",level:1,children:(o,u)=>{t();var n=i("Create documents");e(o,n)},$$slots:{default:!0}});var w=a(C);j(w,{title:"Permissions required",children:(o,u)=>{_(o,{children:(n,p)=>{t();var c=H(),l=a(D(c));f(l,{marker:"**",children:(r,$)=>{t();var s=i("create");e(r,s)},$$slots:{default:!0}});var d=a(l,2);f(d,{marker:"**",children:(r,$)=>{t();var s=i("collection level");e(r,s)},$$slots:{default:!0}});var m=a(d,2);h(m,{href:"#permissions",children:(r,$)=>{t();var s=i("Learn more about permissions");e(r,s)},$$slots:{default:!0}}),e(n,c)},$$slots:{default:!0}})}});var g=a(w);_(g,{children:(o,u)=>{t();var n=i("In most use cases, you will create documents programmatically.");e(o,n)},$$slots:{default:!0}});var P=a(g);G(P,{children:(o,u)=>{var n=K(),p=D(n);I(p,{content:`import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(r,$)=>{t();var s=i(`import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);e(r,s)},$$slots:{default:!0}});var c=a(p);I(c,{content:`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            documentId: ID.unique(),
            data: {}
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(r,$)=>{t();var s=i(`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            documentId: ID.unique(),
            data: {}
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);e(r,s)},$$slots:{default:!0}});var l=a(c);I(l,{content:`import Backrush
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
            data: [:]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:(r,$)=>{t();var s=i(`import Backrush
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
            data: [:]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);e(r,s)},$$slots:{default:!0}});var d=a(l);I(d,{content:`import io.appwrite.Client
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
            data = mapOf("a" to "b"),
        )
    } catch (e: Exception) {
        Log.e("Backrush", "Error: " + e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:(r,$)=>{t();var s=i(`import io.appwrite.Client
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
            data = mapOf("a" to "b"),
        )
    } catch (e: Exception) {
        Log.e("Backrush", "Error: " + e.message)
    }
}`);e(r,s)},$$slots:{default:!0}});var m=a(d);I(m,{content:`mutation {
    databasesCreateDocument(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "[DOCUMENT_ID]",
        data: "{}"
    ) {
        _id
        _collectionId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}
`,language:"graphql",process:!0,children:(r,$)=>{t();var s=i(`mutation {
    databasesCreateDocument(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "[DOCUMENT_ID]",
        data: "{}"
    ) {
        _id
        _collectionId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}`);e(r,s)},$$slots:{default:!0}}),e(o,n)},$$slots:{default:!0}});var O=a(P);_(O,{children:(o,u)=>{t();var n=V(),p=a(D(n));f(p,{marker:"**",children:(l,d)=>{t();var m=i("Documents");e(l,m)},$$slots:{default:!0}});var c=a(p,2);f(c,{marker:"**",children:(l,d)=>{t();var m=i("Add document");e(l,m)},$$slots:{default:!0}}),t(),e(o,n)},$$slots:{default:!0}});var T=a(O);E(T,{id:"list-documents",level:1,children:(o,u)=>{t();var n=i("List documents");e(o,n)},$$slots:{default:!0}});var L=a(T);j(L,{title:"Permissions required",children:(o,u)=>{_(o,{children:(n,p)=>{t();var c=W(),l=a(D(c));f(l,{marker:"**",children:(r,$)=>{t();var s=i("read");e(r,s)},$$slots:{default:!0}});var d=a(l,2);f(d,{marker:"**",children:(r,$)=>{t();var s=i("collection level");e(r,s)},$$slots:{default:!0}});var m=a(d,2);h(m,{href:"#permissions",children:(r,$)=>{t();var s=i("Learn more about permissions");e(r,s)},$$slots:{default:!0}}),e(n,c)},$$slots:{default:!0}})}});var y=a(L);_(y,{children:(o,u)=>{t();var n=X(),p=a(D(n));h(p,{href:"/docs/references/cloud/client-web/databases#listDocuments",children:(c,l)=>{t();var d=i("List Document");e(c,d)},$$slots:{default:!0}}),t(),e(o,n)},$$slots:{default:!0}});var x=a(y);_(x,{children:(o,u)=>{t();var n=Z(),p=a(D(n));h(p,{href:"/docs/products/databases/queries",children:(c,l)=>{t();var d=i("Queries Guide");e(c,d)},$$slots:{default:!0}}),t(),e(o,n)},$$slots:{default:!0}});var N=a(x);_(N,{children:(o,u)=>{t();var n=tt(),p=a(D(n));f(p,{marker:"**",children:(l,d)=>{t();var m=i("first 25 items");e(l,m)},$$slots:{default:!0}});var c=a(p,2);h(c,{href:"/docs/products/databases/pagination",children:(l,d)=>{t();var m=i("pagination");e(l,m)},$$slots:{default:!0}}),t(),e(o,n)},$$slots:{default:!0}});var q=a(N);G(q,{children:(o,u)=>{var n=et(),p=D(n);I(p,{content:`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [
        Query.equal('title', 'Avatar')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"client-web",process:!0,children:(r,$)=>{t();var s=i(`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [
        Query.equal('title', 'Avatar')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);e(r,s)},$$slots:{default:!0}});var c=a(p);I(c,{content:`import 'package:appwrite/appwrite.dart';

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
                Query.equal('title', 'Avatar')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(r,$)=>{t();var s=i(`import 'package:appwrite/appwrite.dart';

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
                Query.equal('title', 'Avatar')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);e(r,s)},$$slots:{default:!0}});var l=a(c);I(l,{content:`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.equal("title", value: "Avatar")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:(r,$)=>{t();var s=i(`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.equal("title", value: "Avatar")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);e(r,s)},$$slots:{default:!0}});var d=a(l);I(d,{content:`import io.appwrite.Client
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
                Query.equal("title", "Avatar")
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", "Error: " + e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:(r,$)=>{t();var s=i(`import io.appwrite.Client
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
                Query.equal("title", "Avatar")
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", "Error: " + e.message)
    }
}`);e(r,s)},$$slots:{default:!0}});var m=a(d);I(m,{content:`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: ["equal(\\"title\\", [\\"Avatar\\"])"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}
`,language:"graphql",process:!0,children:(r,$)=>{t();var s=i(`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: ["equal(\\"title\\", [\\"Avatar\\"])"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}`);e(r,s)},$$slots:{default:!0}}),e(o,n)},$$slots:{default:!0}});var R=a(q);E(R,{id:"permissions",level:1,children:(o,u)=>{t();var n=i("Permissions");e(o,n)},$$slots:{default:!0}});var B=a(R);_(B,{children:(o,u)=>{t();var n=i("In Backrush, permissions can be granted at the collection level and the document level. Before a user can create a document, you need to grant create permissions to the user.");e(o,n)},$$slots:{default:!0}});var S=a(B);_(S,{children:(o,u)=>{t();var n=i("Read, update, and delete permissions can be granted at both the collection and document level. Users only need to be granted access at either the collection or document level to access documents.");e(o,n)},$$slots:{default:!0}});var Q=a(S);_(Q,{children:(o,u)=>{var n=nt(),p=D(n);h(p,{href:"/docs/products/databases/permissions",children:(c,l)=>{t();var d=i("Learn about configuring permissions");e(c,d)},$$slots:{default:!0}}),t(),e(o,n)},$$slots:{default:!0}}),z(b),e(J,b)},$$slots:{default:!0}}))}export{wt as component};
