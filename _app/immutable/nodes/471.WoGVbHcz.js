import{t as I,b as p,a as s}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as x,s as t,f as D,n,r as k}from"../chunks/NgVQVlRK.js";import{n as j}from"../chunks/B4IyMRKX.js";import{H as b}from"../chunks/CXsRaEhZ.js";import{M as q}from"../chunks/hMT8fFzP.js";import{I as G}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as m}from"../chunks/DXp9_3zM.js";import{F as g}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as _}from"../chunks/D8YsId2T.js";import{S as A}from"../chunks/yHjwcyUH.js";import{A as J}from"../chunks/CqOphJLh.js";const M={layout:"article",title:"Pagination",description:"Implement pagination for large data sets in Backrush Databases. Explore techniques for splitting and displaying data across multiple pages."};var z=I("By default, list operations return 25 items per page, which can be changed using the <!> operator. There is no hard limit on the number of items you can request. However, beware that <!>.",1),F=I("Offset pagination works by dividing documents into <!> pages containing <!> documents. Every page is retrieved by skipping <!> items and reading the following <!> pages.",1),H=I("Using <!> and <!> you can achieve offset pagination. With <!> you can define how many documents can be returned from one request. The <!> is number of records you wish to skip before selecting records.",1),W=I("<!><!><!><!>",1),U=I("While traditional offset pagination is familiar, it comes with some drawbacks. The request gets slower as the number of records increases because the database has to read up to the offset number <!> of rows to know where it should start selecting data. If the data changes frequently, offset pagination will also produce <!> results.",1),K=I("The cursor is a unique identifier for a document that points to where the next page should start. After reading a page of documents, pass the last document&#39;s ID into the <!> query method to get the next page of documents. Pass the first document&#39;s ID into the <!> query method to retrieve the previous page.",1),V=I("<!><!><!><!>",1),X=I("Offset pagination should be used for collections that rarely change. Offset paginations allow you to create indicator of the current page number and total page number. For example, a list with up to 20 pages or static data like a list of countries or currencies. Using offset pagination on large collections and frequently updated collections may result in slow performance and <!> results.",1),Y=I("<article><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function bt(B){J(B,j(M,{children:(S,Z)=>{var v=Y(),E=x(v);_(E,{children:(a,c)=>{n();var e=p("As your database grows in size, you'll need to paginate results returned. Pagination improves performance by returning a subset of results that match a query at a time, called a page.");s(a,e)},$$slots:{default:!0}});var w=t(E);_(w,{children:(a,c)=>{n();var e=z(),o=t(D(e));m(o,{content:"Query.limit(25)"});var i=t(o,2);A(i,{marker:"**",children:(l,u)=>{n();var r=p("large pages can degrade performance");s(l,r)},$$slots:{default:!0}}),n(),s(a,e)},$$slots:{default:!0}});var y=t(w);b(y,{id:"offset-pagination",level:1,children:(a,c)=>{n();var e=p("Offset pagination");s(a,e)},$$slots:{default:!0}});var C=t(y);_(C,{children:(a,c)=>{n();var e=F(),o=t(D(e));m(o,{content:"M"});var i=t(o,2);m(i,{content:"N"});var l=t(i,2);m(l,{content:"offset = M * (N - 1)"});var u=t(l,2);m(u,{content:"M"}),n(),s(a,e)},$$slots:{default:!0}});var $=t(C);_($,{children:(a,c)=>{n();var e=H(),o=t(D(e));m(o,{content:"Query.limit()"});var i=t(o,2);m(i,{content:"Query.offset()"});var l=t(i,2);m(l,{content:"Query.limit()"});var u=t(l,2);m(u,{content:"Query.offset()"}),n(),s(a,e)},$$slots:{default:!0}});var h=t($);q(h,{children:(a,c)=>{var e=W(),o=D(e);g(o,{content:`import { Client, Databases, Query } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Page 1
const page1 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.offset(0)
    ]
);

// Page 2
const page2 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.offset(25)
    ]
);
`,language:"client-web",process:!0,children:(r,f)=>{n();var d=p(`import { Client, Databases, Query } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

// Page 1
const page1 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.offset(0)
    ]
);

// Page 2
const page2 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.offset(25)
    ]
);`);s(r,d)},$$slots:{default:!0}});var i=t(o);g(i,{content:`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    final page1 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.offset(0)
        ]
    );

    final page2 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.offset(25)
        ]
    );
}
`,language:"client-flutter",process:!0,children:(r,f)=>{n();var d=p(`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    final page1 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.offset(0)
        ]
    );

    final page2 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.offset(25)
        ]
    );
}`);s(r,d)},$$slots:{default:!0}});var l=t(i);g(l,{content:`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    let page1 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.offset(0)
        ]
    )

    let page2 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.offset(25)
        ]
    )
}
`,language:"client-apple",process:!0,children:(r,f)=>{n();var d=p(`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    let page1 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.offset(0)
        ]
    )

    let page2 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.offset(25)
        ]
    )
}`);s(r,d)},$$slots:{default:!0}});var u=t(l);g(u,{content:`import io.backrush.Client
import io.backrush.Query
import io.backrush.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    val page1 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.offset(0)
        ]
    )

    val page2 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.offset(25)
        ]
    )
}
`,language:"client-android-kotlin",process:!0,children:(r,f)=>{n();var d=p(`import io.backrush.Client
import io.backrush.Query
import io.backrush.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    val page1 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.offset(0)
        ]
    )

    val page2 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.offset(25)
        ]
    )
}`);s(r,d)},$$slots:{default:!0}}),s(a,e)},$$slots:{default:!0}});var O=t(h);G(O,{title:"Drawbacks",children:(a,c)=>{_(a,{children:(e,o)=>{n();var i=U(),l=t(D(i));m(l,{content:"M * (N - 1)"});var u=t(l,2);A(u,{marker:"**",children:(r,f)=>{n();var d=p("missing and duplicate");s(r,d)},$$slots:{default:!0}}),n(),s(e,i)},$$slots:{default:!0}})}});var T=t(O);b(T,{id:"cursor-pagination",level:1,children:(a,c)=>{n();var e=p("Cursor pagination");s(a,e)},$$slots:{default:!0}});var P=t(T);_(P,{children:(a,c)=>{n();var e=K(),o=t(D(e));m(o,{content:"Query.cursorAfter(lastId)"});var i=t(o,2);m(i,{content:"Query.cursorBefore(firstId)"}),n(),s(a,e)},$$slots:{default:!0}});var Q=t(P);q(Q,{children:(a,c)=>{var e=V(),o=D(e);g(o,{content:`import { Databases, Query } from 'backrush';

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

const databases = new Databases(client);

// Page 1
const page1 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
    ]
);

const lastId = page1.documents[page1.documents.length - 1].$id;

// Page 2
const page2 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.cursorAfter(lastId),
    ]
);
`,language:"client-web",process:!0,children:(r,f)=>{n();var d=p(`import { Databases, Query } from 'backrush';

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
    .setProject("<PROJECT_ID>");

const databases = new Databases(client);

// Page 1
const page1 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
    ]
);

const lastId = page1.documents[page1.documents.length - 1].$id;

// Page 2
const page2 = await databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.limit(25),
        Query.cursorAfter(lastId),
    ]
);`);s(r,d)},$$slots:{default:!0}});var i=t(o);g(i,{content:`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    final page1 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25)
        ]
    );

    final lastId = page1.documents[page1.documents.length - 1].$id;

    final page2 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    );

}
`,language:"client-flutter",process:!0,children:(r,f)=>{n();var d=p(`import 'package:backrush/backrush.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    final page1 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25)
        ]
    );

    final lastId = page1.documents[page1.documents.length - 1].$id;

    final page2 = await databases.listDocuments(
        databaseId: '<DATABASE_ID>',
        collectionId: '[COLLECTION_ID]',
        queries: [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    );

}`);s(r,d)},$$slots:{default:!0}});var l=t(i);g(l,{content:`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    let page1 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25)
        ]
    )

    let lastId = page1.documents[page1.documents.count - 1].$id

    let page2 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    )
}
`,language:"client-apple",process:!0,children:(r,f)=>{n();var d=p(`import Backrush
import BackrushModels

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    let page1 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25)
        ]
    )

    let lastId = page1.documents[page1.documents.count - 1].$id

    let page2 = try await databases.listDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    )
}`);s(r,d)},$$slots:{default:!0}});var u=t(l);g(u,{content:`import android.util.Log
import io.backrush.BackrushException
import io.backrush.Client
import io.backrush.Query
import io.backrush.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    val page1 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25)
        ]
    )

    val lastId = page1.documents[page1.documents.size - 1].$id

    val page2 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    )
}
`,language:"client-android-kotlin",process:!0,children:(r,f)=>{n();var d=p(`import android.util.Log
import io.backrush.BackrushException
import io.backrush.Client
import io.backrush.Query
import io.backrush.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    val page1 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25)
        ]
    )

    val lastId = page1.documents[page1.documents.size - 1].$id

    val page2 = databases.listDocuments(
        databaseId = "<DATABASE_ID>",
        collectionId = "<COLLECTION_ID>",
        queries = [
            Query.limit(25),
            Query.cursorAfter(lastId)
        ]
    )
}`);s(r,d)},$$slots:{default:!0}}),s(a,e)},$$slots:{default:!0}});var L=t(Q);b(L,{id:"when-to-use",level:1,children:(a,c)=>{n();var e=p("When to use what?");s(a,e)},$$slots:{default:!0}});var N=t(L);_(N,{children:(a,c)=>{n();var e=X(),o=t(D(e));A(o,{marker:"**",children:(i,l)=>{n();var u=p("missing and duplicate");s(i,u)},$$slots:{default:!0}}),n(),s(a,e)},$$slots:{default:!0}});var R=t(N);_(R,{children:(a,c)=>{n();var e=p("Cursor pagination should be used for frequently updated collections. It is best suited for lazy-loaded pages with infinite scrolling. For example, a feed, comment section, chat history, or high volume datasets.");s(a,e)},$$slots:{default:!0}}),k(v),s(S,v)},$$slots:{default:!0}}))}export{bt as component};
