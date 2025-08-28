import{t as D,b as i,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as n,f as I,c as N,n as r,r as S}from"../chunks/NgVQVlRK.js";import{n as q}from"../chunks/B4IyMRKX.js";import{H as w}from"../chunks/CXsRaEhZ.js";import{M as L}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as _}from"../chunks/DXp9_3zM.js";import{F as c}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as y}from"../chunks/D8YsId2T.js";import{L as T}from"../chunks/yh4_9ChP.js";import{A as B}from"../chunks/CqOphJLh.js";const R={layout:"article",title:"Order",description:'Understand how to do data ordering in Backrush Databases. Learn how to order and sort your database records for efficient data retrieval."'};var j=D("You can order results returned by Backrush Databases by using an order query. For best performance, create an <!> on the column you plan to order by.",1),G=D("When querying using the <!> endpoint, you can specify the order of the documents returned using the <!> and <!> query methods.",1),J=D("<!><!><!><!><!>",1),K=D("In the example below, the movies returned will be first sorted by <!> in ascending order, then sorted by <!> in descending order.",1),k=D("<!><!><!><!><!>",1),F=D("<article><!><!><!><!><!><!><!><!></article>");function pe(x){B(x,q(R,{children:(P,M)=>{var $=F(),f=N($);y(f,{children:(o,b)=>{r();var a=j(),d=n(I(a));T(d,{href:"/docs/products/databases/collections#indexes",children:(l,m)=>{r();var p=i("index");t(l,p)},$$slots:{default:!0}}),r(),t(o,a)},$$slots:{default:!0}});var v=n(f);w(v,{id:"one-column",level:1,children:(o,b)=>{r();var a=i("Ordering one column");t(o,a)},$$slots:{default:!0}});var g=n(v);y(g,{children:(o,b)=>{r();var a=G(),d=n(I(a));T(d,{href:"/docs/references/cloud/client-web/databases#listDocuments",children:(p,A)=>{r();var e=i("listDocuments");t(p,e)},$$slots:{default:!0}});var l=n(d,2);_(l,{content:"Query.orderAsc()"});var m=n(l,2);_(m,{content:"Query.orderDesc()"}),r(),t(o,a)},$$slots:{default:!0}});var E=n(g);L(E,{children:(o,b)=>{var a=J(),d=I(a);c(d,{content:`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.orderAsc('title'),
    ]
);
`,language:"client-web",process:!0,children:(e,u)=>{r();var s=i(`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.orderAsc('title'),
    ]
);`);t(e,s)},$$slots:{default:!0}});var l=n(d);c(l,{content:`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            queries: [
                Query.orderAsc('title')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:(e,u)=>{r();var s=i(`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            databaseId: '<DATABASE_ID>',
            collectionId: '[COLLECTION_ID]',
            queries: [
                Query.orderAsc('title')
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);t(e,s)},$$slots:{default:!0}});var m=n(l);c(m,{content:`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.orderAsc("title")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:(e,u)=>{r();var s=i(`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.orderAsc("title")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);t(e,s)},$$slots:{default:!0}});var p=n(m);c(p,{content:`import io.appwrite.Client
import io.appwrite.Query
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    val databases = Databases(client)

    try {
        val documents = databases.listDocuments(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            queries = [
                Query.orderAsc("title")
            ]
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:(e,u)=>{r();var s=i(`import io.appwrite.Client
import io.appwrite.Query
import io.appwrite.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    val databases = Databases(client)

    try {
        val documents = databases.listDocuments(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            queries = [
                Query.orderAsc("title")
            ]
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message)
    }
}`);t(e,s)},$$slots:{default:!0}});var A=n(p);c(A,{content:`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>"
        queries: ["orderAsc(\\"title\\")"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}
`,language:"graphql",process:!0,children:(e,u)=>{r();var s=i(`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>"
        queries: ["orderAsc(\\"title\\")"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}`);t(e,s)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var O=n(E);w(O,{id:"multiple-columns",level:1,children:(o,b)=>{r();var a=i("Multiple columns");t(o,a)},$$slots:{default:!0}});var h=n(O);y(h,{children:(o,b)=>{r();var a=i("To sort based on multiple attributes, simply provide multiple query methods. For better performance, create an index on the first attribute that you order by.");t(o,a)},$$slots:{default:!0}});var C=n(h);y(C,{children:(o,b)=>{r();var a=K(),d=n(I(a));_(d,{content:"title"});var l=n(d,2);_(l,{content:"year"}),r(),t(o,a)},$$slots:{default:!0}});var Q=n(C);L(Q,{children:(o,b)=>{var a=k(),d=I(a);c(d,{content:`// Web SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.orderAsc('title'), // Order first by title in ascending order
        Query.orderDesc('year'), // Then, order by year in descending order
    ]
);
`,language:"js",process:!0,children:(e,u)=>{r();var s=i(`// Web SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.orderAsc('title'), // Order first by title in ascending order
        Query.orderDesc('year'), // Then, order by year in descending order
    ]
);`);t(e,s)},$$slots:{default:!0}});var l=n(d);c(l,{content:`// Flutter SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
try {
    final documents = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.orderAsc('title'), // Order by title in ascending order
            Query.orderDesc('year')  // Order by year in descending order
        ]
    );
} on BackrushException catch(e) {
    print(e);
}
`,language:"dart",process:!0,children:(e,u)=>{r();var s=i(`// Flutter SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
try {
    final documents = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.orderAsc('title'), // Order by title in ascending order
            Query.orderDesc('year')  // Order by year in descending order
        ]
    );
} on BackrushException catch(e) {
    print(e);
}`);t(e,s)},$$slots:{default:!0}});var m=n(l);c(m,{content:`// Android SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
try {
    val documents = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.orderAsc("title"), // Order by title in ascending order
            Query.orderDesc("year")  // Order by year in descending order
        ]
    );
} catch (e: BackrushException) {
    Log.e("Backrush", e.message);
}
`,language:"kotlin",process:!0,children:(e,u)=>{r();var s=i(`// Android SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
try {
    val documents = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.orderAsc("title"), // Order by title in ascending order
            Query.orderDesc("year")  // Order by year in descending order
        ]
    );
} catch (e: BackrushException) {
    Log.e("Backrush", e.message);
}`);t(e,s)},$$slots:{default:!0}});var p=n(m);c(p,{content:`// Apple SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
do {
    let documents = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.orderAsc("title"), // Order by title in ascending order
            Query.orderDesc("year")  // Order by year in descending order
        ]
    );
} catch {
    print(error.localizedDescription);
}
`,language:"swift",process:!0,children:(e,u)=>{r();var s=i(`// Apple SDK code example for sorting based on multiple attributes
// ...

// List documents and sort based on multiple attributes
do {
    let documents = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.orderAsc("title"), // Order by title in ascending order
            Query.orderDesc("year")  // Order by year in descending order
        ]
    );
} catch {
    print(error.localizedDescription);
}`);t(e,s)},$$slots:{default:!0}});var A=n(p);c(A,{content:`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: ["orderAsc(\\"title\\")", "orderDesc(\\"year\\")"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}
`,language:"graphql",process:!0,children:(e,u)=>{r();var s=i(`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: ["orderAsc(\\"title\\")", "orderDesc(\\"year\\")"]
    ) {
        total
        documents {
            _id
            data
        }
    }
}`);t(e,s)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}}),S($),t(P,$)},$$slots:{default:!0}}))}export{pe as component};
