import{t as f,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as lt,s as n,f as Q,n as a,r as ut}from"../chunks/NgVQVlRK.js";import{n as dt}from"../chunks/B4IyMRKX.js";import{H as m}from"../chunks/CXsRaEhZ.js";import{M as b}from"../chunks/hMT8fFzP.js";import{I as it}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as x}from"../chunks/DXp9_3zM.js";import{F as l}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P}from"../chunks/D8YsId2T.js";import{S as nt}from"../chunks/yHjwcyUH.js";import{L as T}from"../chunks/yh4_9ChP.js";import{A as ct}from"../chunks/CqOphJLh.js";const $t={layout:"article",title:"Queries",description:"Harness the power of querying with Backrush Databases. Discover various query options, filtering, sorting, and advanced querying techniques."};var pt=f("Backrush SDKs provide a <!> class to help you build queries. The <!> class has methods for each type of supported query operation.",1),vt=f("Queries are passed to an endpoint through the <!> parameter as an array of query strings, which can be generated using the <!> class.",1),ht=f("Each query method is logically separated via <!> operations. For <!> operation, pass multiple values into the query method separated by commas. For example <!> will fetch the movies <!> or <!>.",1),_t=f("By default, results are limited to the <!>. You can change this through <!>.",1),gt=f("<!><!><!><!><!><!>",1),yt=f("The <!> operator allows you to specify which attributes should be returned from a document. This is useful for optimizing response size and only retrieving the data you need.",1),ft=f("<!><!><!><!><!><!><!><!>",1),Qt=f("<!><!><!><!><!><!><!><!>",1),mt=f("<!><!><!><!><!><!><!><!>",1),Pt=f("<!><!><!><!><!><!><!><!>",1),bt=f("<!><!><!><!><!><!><!><!>",1),xt=f("<!><!><!><!><!><!><!><!>",1),Tt=f("<!><!><!><!><!><!><!><!>",1),wt=f("<!><!><!><!><!><!><!><!>",1),qt=f("<!><!><!><!><!><!><!><!>",1),At=f("Returns documents where attribute value is <!> null.",1),Dt=f("<!><!><!><!><!><!><!><!>",1),It=f("<!><!><!><!><!><!><!><!>",1),Et=f("<!><!><!><!><!><!><!><!>",1),Ot=f("<!><!><!><!><!><!><!><!>",1),Ct=f("Searches string attributes for provided keywords. Requires a <!> on queried attributes.",1),zt=f("<!><!><!><!><!><!><!><!>",1),Nt=f("<!><!><!><!><!><!><!><!>",1),Lt=f("<!><!><!><!><!><!><!><!>",1),Rt=f("<!><!><!><!><!><!><!><!>",1),Bt=f("<!><!><!><!><!><!><!><!>",1),kt=f("Limits the number of results returned by the query. Used for <!>.",1),Ft=f("<!><!><!><!><!><!><!><!>",1),Mt=f("Offset the results returned by skipping some of the results. Used for <!>.",1),St=f("<!><!><!><!><!><!><!><!>",1),Wt=f("Places the cursor after the specified resource ID. Used for <!>.",1),jt=f("<!><!><!><!><!><!><!><!>",1),Gt=f("Places the cursor before the specified resource ID. Used for <!>.",1),Jt=f("<!><!><!><!><!><!><!><!>",1),Ht=f("<!><!><!><!>",1),Ut=f("This example demonstrates how to combine <!> and <!> operations. The query uses <!> to match either condition: books under $20 OR magazines under $10. Each condition within the OR is composed of two AND conditions - one for the category and one for the price threshold. The database will return documents that match either of these combined conditions.",1),Xt=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function yr(at){ct(at,dt($t,{children:(st,Yt)=>{var w=Xt(),q=lt(w);P(q,{children:(d,h)=>{a();var o=s("Many list endpoints in Backrush allow you to filter, sort, and paginate results using queries. Backrush provides a common set of syntax to build queries.");r(d,o)},$$slots:{default:!0}});var A=n(q);m(A,{id:"query-class",level:1,children:(d,h)=>{a();var o=s("Query class");r(d,o)},$$slots:{default:!0}});var D=n(A);P(D,{children:(d,h)=>{a();var o=pt(),i=n(Q(o));x(i,{content:"Query"});var c=n(i,2);x(c,{content:"Query"}),a(),r(d,o)},$$slots:{default:!0}});var I=n(D);m(I,{id:"building-queries",level:1,children:(d,h)=>{a();var o=s("Building queries");r(d,o)},$$slots:{default:!0}});var E=n(I);P(E,{children:(d,h)=>{a();var o=vt(),i=n(Q(o));x(i,{content:"queries"});var c=n(i,2);x(c,{content:"Query"}),a(),r(d,o)},$$slots:{default:!0}});var O=n(E);P(O,{children:(d,h)=>{a();var o=ht(),i=n(Q(o));x(i,{content:"AND"});var c=n(i,2);x(c,{content:"OR"});var v=n(c,2);x(v,{content:"Query.equal('title', ['Avatar', 'Lord of the Rings'])"});var p=n(v,2);x(p,{content:"Avatar"});var _=n(p,2);x(_,{content:"Lord of the Rings"}),a(),r(d,o)},$$slots:{default:!0}});var C=n(O);it(C,{title:"Default pagination behavior",children:(d,h)=>{P(d,{children:(o,i)=>{a();var c=_t(),v=n(Q(c));nt(v,{marker:"**",children:(_,g)=>{a();var $=s("first 25 items");r(_,$)},$$slots:{default:!0}});var p=n(v,2);T(p,{href:"/docs/products/databases/pagination",children:(_,g)=>{a();var $=s("pagination");r(_,$)},$$slots:{default:!0}}),a(),r(o,c)},$$slots:{default:!0}})}});var z=n(C);b(z,{children:(d,h)=>{var o=gt(),i=Q(o);l(i,{content:`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.equal('title', ['Avatar', 'Lord of the Rings']),
        Query.greaterThan('year', 1999)
    ]
);
`,language:"client-web",process:!0,children:($,y)=>{a();var e=s(`import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [
        Query.equal('title', ['Avatar', 'Lord of the Rings']),
        Query.greaterThan('year', 1999)
    ]
);`);r($,e)},$$slots:{default:!0}});var c=n(i);l(c,{content:`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [
                Query.equal('title', ['Avatar', 'Lord of the Rings']),
                Query.greaterThan('year', 1999)
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}
`,language:"client-flutter",process:!0,children:($,y)=>{a();var e=s(`import 'package:appwrite/appwrite.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            [
                Query.equal('title', ['Avatar', 'Lord of the Rings']),
                Query.greaterThan('year', 1999)
            ]
        );
    } on BackrushException catch(e) {
        print(e);
    }
}`);r($,e)},$$slots:{default:!0}});var v=n(c);l(v,{content:`import Backrush
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
                Query.equal("title", value: ["Avatar", "Lord of the Rings"]),
                Query.greaterThan("year", value: 1999)
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}
`,language:"client-apple",process:!0,children:($,y)=>{a();var e=s(`import Backrush
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
                Query.equal("title", value: ["Avatar", "Lord of the Rings"]),
                Query.greaterThan("year", value: 1999)
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}`);r($,e)},$$slots:{default:!0}});var p=n(v);l(p,{content:`import io.appwrite.Client
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
            queries = listOf(
                Query.equal("title", listOf("Avatar", "Lord of the Rings")),
                Query.greaterThan("year", 1999)
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message)
    }
}
`,language:"client-android-kotlin",process:!0,children:($,y)=>{a();var e=s(`import io.appwrite.Client
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
            queries = listOf(
                Query.equal("title", listOf("Avatar", "Lord of the Rings")),
                Query.greaterThan("year", 1999)
            )
        )
    } catch (e: BackrushException) {
        Log.e("Backrush", e.message)
    }
}`);r($,e)},$$slots:{default:!0}});var _=n(p);l(_,{content:`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>"
        queries: [
            "{\\"method\\":\\"equal\\",\\"attribute\\":\\"title\\",\\"values\\":[\\"Avatar\\",\\"Lord of the Rings\\"]}",
            "{\\"method\\":\\"greaterThan\\",\\"attribute\\":\\"year\\",\\"values\\":[1999]}"
        ]
    ) {
        total
        documents {
            _id
            data
        }
    }
}
`,language:"graphql",process:!0,children:($,y)=>{a();var e=s(`query {
    databasesListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>"
        queries: [
            "{\\"method\\":\\"equal\\",\\"attribute\\":\\"title\\",\\"values\\":[\\"Avatar\\",\\"Lord of the Rings\\"]}",
            "{\\"method\\":\\"greaterThan\\",\\"attribute\\":\\"year\\",\\"values\\":[1999]}"
        ]
    ) {
        total
        documents {
            _id
            data
        }
    }
}`);r($,e)},$$slots:{default:!0}});var g=n(_);l(g,{content:`GET /v1/databases/<DATABASE_ID>/collections/<COLLECTION_ID>/documents?queries[]=%7B%22method%22%3A%22equal%22%2C%22attribute%22%3A%22title%22%2C%22values%22%3A%5B%22Avatar%22%2C%22Lord%20of%20the%20Rings%22%5D%7D&queries[]=%7B%22method%22%3A%22greaterThan%22%2C%22attribute%22%3A%22year%22%2C%22values%22%3A%5B1999%5D%7D HTTP/1.1
Content-Type: application/json
X-Backrush-Project: <PROJECT_ID>
`,language:"http",process:!0,children:($,y)=>{a();var e=s(`GET /v1/databases/<DATABASE_ID>/collections/<COLLECTION_ID>/documents?queries[]=%7B%22method%22%3A%22equal%22%2C%22attribute%22%3A%22title%22%2C%22values%22%3A%5B%22Avatar%22%2C%22Lord%20of%20the%20Rings%22%5D%7D&queries[]=%7B%22method%22%3A%22greaterThan%22%2C%22attribute%22%3A%22year%22%2C%22values%22%3A%5B1999%5D%7D HTTP/1.1
Content-Type: application/json
X-Backrush-Project: <PROJECT_ID>`);r($,e)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var N=n(z);m(N,{id:"query-operators",level:1,children:(d,h)=>{a();var o=s("Query operators");r(d,o)},$$slots:{default:!0}});var L=n(N);m(L,{id:"select",level:2,children:(d,h)=>{a();var o=s("Select");r(d,o)},$$slots:{default:!0}});var R=n(L);P(R,{children:(d,h)=>{a();var o=yt(),i=n(Q(o));x(i,{content:"select"}),a(),r(d,o)},$$slots:{default:!0}});var B=n(R);b(B,{children:(d,h)=>{var o=ft(),i=Q(o);l(i,{content:`Query.select(["name", "title"])
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.select(["name", "title"])
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.select(["name", "title"])
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.select(["name", "title"])
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.select(["name", "title"])
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::select(["name", "title"])
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.select(["name", "title"])
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.select(["name", "title"])');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"select","values":["name","title"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"select","values":["name","title"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var k=n(B);m(k,{id:"comparison",level:2,children:(d,h)=>{a();var o=s("Comparison operators");r(d,o)},$$slots:{default:!0}});var F=n(k);m(F,{id:"equal",level:3,children:(d,h)=>{a();var o=s("Equal");r(d,o)},$$slots:{default:!0}});var M=n(F);P(M,{children:(d,h)=>{a();var o=s("Returns document if attribute is equal to any value in the provided array.");r(d,o)},$$slots:{default:!0}});var S=n(M);b(S,{children:(d,h)=>{var o=Qt(),i=Q(o);l(i,{content:`Query.equal("title", ["Iron Man"])
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.equal("title", ["Iron Man"])
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.equal("title", ["Iron Man"])
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.equal("title", ["Iron Man"])
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.equal("title", ["Iron Man"])
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::equal("title", ["Iron Man"])
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::equal("title", ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.equal("title", value: ["Iron Man"])
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.equal("title", value: ["Iron Man"])');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"equal","attribute":"title","values":["Iron Man"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"equal","attribute":"title","values":["Iron Man"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var W=n(S);m(W,{id:"not-equal",level:3,children:(d,h)=>{a();var o=s("Not equal");r(d,o)},$$slots:{default:!0}});var j=n(W);P(j,{children:(d,h)=>{a();var o=s("Returns document if attribute is not equal to any value in the provided array.");r(d,o)},$$slots:{default:!0}});var G=n(j);b(G,{children:(d,h)=>{var o=mt(),i=Q(o);l(i,{content:`Query.notEqual("title", "Iron Man")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.notEqual("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.notEqual("title", "Iron Man")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.notEqual("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.not_equal("title", "Iron Man")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.not_equal("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.not_equal("title", "Iron Man")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.not_equal("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.notEqual("title", "Iron Man")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.notEqual("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::notEqual("title", "Iron Man")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::notEqual("title", "Iron Man")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.notEqual("title", value: "Iron Man")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.notEqual("title", value: "Iron Man")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"notEqual","attribute":"title","values":"Iron Man"}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"notEqual","attribute":"title","values":"Iron Man"}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var J=n(G);m(J,{id:"less-than",level:3,children:(d,h)=>{a();var o=s("Less than");r(d,o)},$$slots:{default:!0}});var H=n(J);P(H,{children:(d,h)=>{a();var o=s("Returns document if attribute is less than the provided value.");r(d,o)},$$slots:{default:!0}});var U=n(H);b(U,{children:(d,h)=>{var o=Pt(),i=Q(o);l(i,{content:`Query.lessThan("score", 10)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.lessThan("score", 10)');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.lessThan("score", 10)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.lessThan("score", 10)');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.less_than("score", 10)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.less_than("score", 10)');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.less_than("score", 10)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.less_than("score", 10)');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.lessThan("score", 10)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.lessThan("score", 10)');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::lessThan("score", 10)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::lessThan("score", 10)');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.lessThan("score", value: 10)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.lessThan("score", value: 10)');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"lessThan","attribute":"score","values":[10]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"lessThan","attribute":"score","values":[10]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var X=n(U);m(X,{id:"less-than-equal",level:3,children:(d,h)=>{a();var o=s("Less than or equal");r(d,o)},$$slots:{default:!0}});var Y=n(X);P(Y,{children:(d,h)=>{a();var o=s("Returns document if attribute is less than or equal to the provided value.");r(d,o)},$$slots:{default:!0}});var K=n(Y);b(K,{children:(d,h)=>{var o=bt(),i=Q(o);l(i,{content:`Query.lessThanEqual("score", 10)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.lessThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.lessThanEqual("score", 10)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.lessThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.less_than_equal("score", 10)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.less_than_equal("score", 10)');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.less_than_equal("score", 10)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.less_than_equal("score", 10)');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.lessThanEqual("score", 10)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.lessThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::lessThanEqual("score", 10)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::lessThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.lessThanEqual("score", value: 10)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.lessThanEqual("score", value: 10)');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"lessThanEqual","attribute":"score","values":[10]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"lessThanEqual","attribute":"score","values":[10]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var V=n(K);m(V,{id:"greater-than",level:3,children:(d,h)=>{a();var o=s("Greater than");r(d,o)},$$slots:{default:!0}});var Z=n(V);P(Z,{children:(d,h)=>{a();var o=s("Returns document if attribute is greater than the provided value.");r(d,o)},$$slots:{default:!0}});var ee=n(Z);b(ee,{children:(d,h)=>{var o=xt(),i=Q(o);l(i,{content:`Query.greaterThan("score", 10)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThan("score", 10)');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.greaterThan("score", 10)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThan("score", 10)');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.greater_than("score", 10)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.greater_than("score", 10)');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.greater_than("score", 10)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.greater_than("score", 10)');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.greaterThan("score", 10)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThan("score", 10)');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::greaterThan("score", 10)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::greaterThan("score", 10)');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.greaterThan("score", value: 10)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThan("score", value: 10)');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"greaterThan","attribute":"score","values":[10]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"greaterThan","attribute":"score","values":[10]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var te=n(ee);m(te,{id:"greater-than-equal",level:3,children:(d,h)=>{a();var o=s("Greater than or equal");r(d,o)},$$slots:{default:!0}});var re=n(te);P(re,{children:(d,h)=>{a();var o=s("Returns document if attribute is greater than or equal to the provided value.");r(d,o)},$$slots:{default:!0}});var ne=n(re);b(ne,{children:(d,h)=>{var o=Tt(),i=Q(o);l(i,{content:`Query.greaterThanEqual("score", 10)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.greaterThanEqual("score", 10)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.greater_than_equal("score", 10)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.greater_than_equal("score", 10)');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.greater_than_equal("score", 10)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.greater_than_equal("score", 10)');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.greaterThanEqual("score", 10)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::greaterThanEqual("score", 10)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::greaterThanEqual("score", 10)');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.greaterThanEqual("score", value: 10)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.greaterThanEqual("score", value: 10)');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"greaterThanEqual","attribute":"score","values":[10]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"greaterThanEqual","attribute":"score","values":[10]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ae=n(ne);m(ae,{id:"between",level:3,children:(d,h)=>{a();var o=s("Between");r(d,o)},$$slots:{default:!0}});var se=n(ae);P(se,{children:(d,h)=>{a();var o=s("Returns document if attribute value falls between the two values. The boundary values are inclusive and can be strings or numbers.");r(d,o)},$$slots:{default:!0}});var oe=n(se);b(oe,{children:(d,h)=>{var o=wt(),i=Q(o);l(i,{content:`Query.between("price", 5, 10)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.between("price", 5, 10)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.between("price", 5, 10)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.between("price", 5, 10)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.between("price", 5, 10)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::between("price", 5, 10)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::between("price", 5, 10)');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.between("price", start: 5, end: 10)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.between("price", start: 5, end: 10)');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"between","attribute":"price","values":[5,10]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"between","attribute":"price","values":[5,10]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var le=n(oe);m(le,{id:"null-checks",level:2,children:(d,h)=>{a();var o=s("Null checks");r(d,o)},$$slots:{default:!0}});var ue=n(le);m(ue,{id:"is-null",level:3,children:(d,h)=>{a();var o=s("Is null");r(d,o)},$$slots:{default:!0}});var de=n(ue);P(de,{children:(d,h)=>{a();var o=s("Returns documents where attribute value is null.");r(d,o)},$$slots:{default:!0}});var ie=n(de);b(ie,{children:(d,h)=>{var o=qt(),i=Q(o);l(i,{content:`Query.isNull("name")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.isNull("name")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.isNull("name")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.isNull("name")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.is_null("name")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.is_null("name")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.is_null("name")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.is_null("name")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.isNull("name")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.isNull("name")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::isNull("name")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::isNull("name")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.isNull("name")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.isNull("name")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"isNull","attribute":"name"}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"isNull","attribute":"name"}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ce=n(ie);m(ce,{id:"is-not-null",level:3,children:(d,h)=>{a();var o=s("Is not null");r(d,o)},$$slots:{default:!0}});var $e=n(ce);P($e,{children:(d,h)=>{a();var o=At(),i=n(Q(o));nt(i,{marker:"**",children:(c,v)=>{a();var p=s("not");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var pe=n($e);b(pe,{children:(d,h)=>{var o=Dt(),i=Q(o);l(i,{content:`Query.isNotNull("name")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.isNotNull("name")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.isNotNull("name")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.isNotNull("name")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.is_not_null("name")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.is_not_null("name")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.is_not_null("name")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.is_not_null("name")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.isNotNull("name")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.isNotNull("name")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::isNotNull("name")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::isNotNull("name")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.isNotNull("name")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.isNotNull("name")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"isNotNull","attribute":"name"}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"isNotNull","attribute":"name"}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ve=n(pe);m(ve,{id:"string-operations",level:2,children:(d,h)=>{a();var o=s("String operations");r(d,o)},$$slots:{default:!0}});var he=n(ve);m(he,{id:"starts-with",level:3,children:(d,h)=>{a();var o=s("Starts with");r(d,o)},$$slots:{default:!0}});var _e=n(he);P(_e,{children:(d,h)=>{a();var o=s("Returns documents if a string attribute starts with a substring.");r(d,o)},$$slots:{default:!0}});var ge=n(_e);b(ge,{children:(d,h)=>{var o=It(),i=Q(o);l(i,{content:`Query.startsWith("name", "Once upon a time")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.startsWith("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.startsWith("name", "Once upon a time")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.startsWith("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.starts_with("name", "Once upon a time")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.starts_with("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.starts_with("name", "Once upon a time")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.starts_with("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.startsWith("name", "Once upon a time")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.startsWith("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::startsWith("name", "Once upon a time")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::startsWith("name", "Once upon a time")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.startsWith("name", value: "Once upon a time")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.startsWith("name", value: "Once upon a time")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"startsWith","attribute":"name","values":["Once upon a time"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"startsWith","attribute":"name","values":["Once upon a time"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ye=n(ge);m(ye,{id:"ends-with",level:3,children:(d,h)=>{a();var o=s("Ends with");r(d,o)},$$slots:{default:!0}});var fe=n(ye);P(fe,{children:(d,h)=>{a();var o=s("Returns documents if a string attribute ends with a substring.");r(d,o)},$$slots:{default:!0}});var Qe=n(fe);b(Qe,{children:(d,h)=>{var o=Et(),i=Q(o);l(i,{content:`Query.endsWith("name", "happily ever after.")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.endsWith("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.endsWith("name", "happily ever after.")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.endsWith("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.ends_with("name", "happily ever after.")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.ends_with("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.ends_with("name", "happily ever after.")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.ends_with("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.endsWith("name", "happily ever after.")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.endsWith("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::endsWith("name", "happily ever after.")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::endsWith("name", "happily ever after.")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.endsWith("name", value: "happily ever after.")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.endsWith("name", value: "happily ever after.")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"endsWith","attribute":"name","values":["happily ever after."]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"endsWith","attribute":"name","values":["happily ever after."]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var me=n(Qe);m(me,{id:"contains",level:3,children:(d,h)=>{a();var o=s("Contains");r(d,o)},$$slots:{default:!0}});var Pe=n(me);P(Pe,{children:(d,h)=>{a();var o=s("Returns documents if the array attribute contains the specified elements or if a string attribute contains the specified substring.");r(d,o)},$$slots:{default:!0}});var be=n(Pe);b(be,{children:(d,h)=>{var o=Ot(),i=Q(o);l(i,{content:`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s(`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s(`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`# For arrays
Query.contains("ingredients", ['apple', 'banana'])

# For strings
Query.contains("name", "Tom")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s(`# For arrays
Query.contains("ingredients", ['apple', 'banana'])

# For strings
Query.contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`# For arrays
Query.contains("ingredients", ['apple', 'banana'])

# For strings
Query.contains("name", "Tom")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s(`# For arrays
Query.contains("ingredients", ['apple', 'banana'])

# For strings
Query.contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s(`// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`// For arrays
Query::contains("ingredients", ['apple', 'banana'])

// For strings
Query::contains("name", "Tom")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s(`// For arrays
Query::contains("ingredients", ['apple', 'banana'])

// For strings
Query::contains("name", "Tom")`);r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`// For arrays
Query.contains("ingredients", value: ['apple', 'banana'])

// For strings
Query.contains("name", value: "Tom")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s(`// For arrays
Query.contains("ingredients", value: ['apple', 'banana'])

// For strings
Query.contains("name", value: "Tom")`);r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`# For arrays
{"method":"contains","attribute":"ingredients","values":["apple","banana"]}

# For strings
{"method":"contains","attribute":"name","values":["Tom"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s(`# For arrays
{"method":"contains","attribute":"ingredients","values":["apple","banana"]}

# For strings
{"method":"contains","attribute":"name","values":["Tom"]}`);r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var xe=n(be);m(xe,{id:"search",level:3,children:(d,h)=>{a();var o=s("Search");r(d,o)},$$slots:{default:!0}});var Te=n(xe);P(Te,{children:(d,h)=>{a();var o=Ct(),i=n(Q(o));T(i,{href:"/docs/products/databases/collections#indexes",children:(c,v)=>{a();var p=s("full-text index");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var we=n(Te);b(we,{children:(d,h)=>{var o=zt(),i=Q(o);l(i,{content:`Query.search("text", "key words")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", "key words")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.search("text", "key words")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", "key words")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.search("text", "key words")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", "key words")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.search("text", "key words")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", "key words")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.search("text", "key words")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", "key words")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::search("text", "key words")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::search("text", "key words")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.search("text", value: "key words")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.search("text", value: "key words")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"search","attribute":"text","values":["key words"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"search","attribute":"text","values":["key words"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var qe=n(we);m(qe,{id:"logical-operators",level:2,children:(d,h)=>{a();var o=s("Logical operators");r(d,o)},$$slots:{default:!0}});var Ae=n(qe);m(Ae,{id:"and",level:3,children:(d,h)=>{a();var o=s("AND");r(d,o)},$$slots:{default:!0}});var De=n(Ae);P(De,{children:(d,h)=>{a();var o=s("Returns document if it matches all of the nested sub-queries in the array passed in.");r(d,o)},$$slots:{default:!0}});var Ie=n(De);b(Ie,{children:(d,h)=>{var o=Nt(),i=Q(o);l(i,{content:`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s(`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s(`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.and_queries([
    Query.less_than("size", 10),
    Query.greater_than("size", 5)
])
`,language:"python",process:!0,children:(e,u)=>{a();var t=s(`Query.and_queries([
    Query.less_than("size", 10),
    Query.greater_than("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.and([
    Query.less_than("size", 10),
    Query.greater_than("size", 5)
])
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s(`Query.and([
    Query.less_than("size", 10),
    Query.greater_than("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s(`Query.and([
    Query.lessThan("size", 10),
    Query.greaterThan("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::and([
    Query::lessThan("size", 10),
    Query::greaterThan("size", 5)
])
`,language:"php",process:!0,children:(e,u)=>{a();var t=s(`Query::and([
    Query::lessThan("size", 10),
    Query::greaterThan("size", 5)
])`);r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.and([
    Query.lessThan("size", value: 10),
    Query.greaterThan("size", value: 5)
])
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s(`Query.and([
    Query.lessThan("size", value: 10),
    Query.greaterThan("size", value: 5)
])`);r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"and","values":[{"method":"lessThan","attribute":"size","values":[10]},{"method":"greaterThan","attribute":"size","values":[5]}]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"and","values":[{"method":"lessThan","attribute":"size","values":[10]},{"method":"greaterThan","attribute":"size","values":[5]}]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Ee=n(Ie);m(Ee,{id:"or",level:3,children:(d,h)=>{a();var o=s("OR");r(d,o)},$$slots:{default:!0}});var Oe=n(Ee);P(Oe,{children:(d,h)=>{a();var o=s("Returns document if it matches any of the nested sub-queries in the array passed in.");r(d,o)},$$slots:{default:!0}});var Ce=n(Oe);b(Ce,{children:(d,h)=>{var o=Lt(),i=Q(o);l(i,{content:`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s(`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s(`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.or_queries([
    Query.less_than("size", 5),
    Query.greater_than("size", 10)
])
`,language:"python",process:!0,children:(e,u)=>{a();var t=s(`Query.or_queries([
    Query.less_than("size", 5),
    Query.greater_than("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.or([
    Query.less_than("size", 5),
    Query.greater_than("size", 10)
])
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s(`Query.or([
    Query.less_than("size", 5),
    Query.greater_than("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s(`Query.or([
    Query.lessThan("size", 5),
    Query.greaterThan("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::or([
    Query::lessThan("size", 5),
    Query::greaterThan("size", 10)
])
`,language:"php",process:!0,children:(e,u)=>{a();var t=s(`Query::or([
    Query::lessThan("size", 5),
    Query::greaterThan("size", 10)
])`);r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.or([
    Query.lessThan("size", value: 5),
    Query.greaterThan("size", value: 10)
])
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s(`Query.or([
    Query.lessThan("size", value: 5),
    Query.greaterThan("size", value: 10)
])`);r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"or","values":[{"method":"lessThan","attribute":"size","values":[5]},{"method":"greaterThan","attribute":"size","values":[10]}]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"or","values":[{"method":"lessThan","attribute":"size","values":[5]},{"method":"greaterThan","attribute":"size","values":[10]}]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ze=n(Ce);m(ze,{id:"ordering",level:2,children:(d,h)=>{a();var o=s("Ordering");r(d,o)},$$slots:{default:!0}});var Ne=n(ze);m(Ne,{id:"order-desc",level:3,children:(d,h)=>{a();var o=s("Order descending");r(d,o)},$$slots:{default:!0}});var Le=n(Ne);P(Le,{children:(d,h)=>{a();var o=s("Orders results in descending order by attribute. Attribute must be indexed.");r(d,o)},$$slots:{default:!0}});var Re=n(Le);b(Re,{children:(d,h)=>{var o=Rt(),i=Q(o);l(i,{content:`Query.orderDesc("attribute")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.orderDesc("attribute")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.orderDesc("attribute")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.orderDesc("attribute")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.order_desc("attribute")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.order_desc("attribute")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.order_desc("attribute")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.order_desc("attribute")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.orderDesc("attribute")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.orderDesc("attribute")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::orderDesc("attribute")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::orderDesc("attribute")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.orderDesc("attribute")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.orderDesc("attribute")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"orderDesc","attribute":"attribute"}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"orderDesc","attribute":"attribute"}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Be=n(Re);m(Be,{id:"order-asc",level:3,children:(d,h)=>{a();var o=s("Order ascending");r(d,o)},$$slots:{default:!0}});var ke=n(Be);P(ke,{children:(d,h)=>{a();var o=s("Orders results in ascending order by attribute. Attribute must be indexed.");r(d,o)},$$slots:{default:!0}});var Fe=n(ke);b(Fe,{children:(d,h)=>{var o=Bt(),i=Q(o);l(i,{content:`Query.orderAsc("attribute")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.orderAsc("attribute")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.orderAsc("attribute")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.orderAsc("attribute")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.order_asc("attribute")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.order_asc("attribute")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.order_asc("attribute")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.order_asc("attribute")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.orderAsc("attribute")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.orderAsc("attribute")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::orderAsc("attribute")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::orderAsc("attribute")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.orderAsc("attribute")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.orderAsc("attribute")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"orderAsc","attribute":"attribute"}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"orderAsc","attribute":"attribute"}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Me=n(Fe);m(Me,{id:"pagination",level:2,children:(d,h)=>{a();var o=s("Pagination");r(d,o)},$$slots:{default:!0}});var Se=n(Me);m(Se,{id:"limit",level:3,children:(d,h)=>{a();var o=s("Limit");r(d,o)},$$slots:{default:!0}});var We=n(Se);P(We,{children:(d,h)=>{a();var o=kt(),i=n(Q(o));T(i,{href:"/docs/products/databases/pagination",children:(c,v)=>{a();var p=s("pagination");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var je=n(We);b(je,{children:(d,h)=>{var o=Ft(),i=Q(o);l(i,{content:`Query.limit(25)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.limit(25)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.limit(25)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.limit(25)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.limit(25)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::limit(25)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s("Query::limit(25)");r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.limit(25)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s("Query.limit(25)");r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"limit","values":[25]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"limit","values":[25]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Ge=n(je);m(Ge,{id:"offset",level:3,children:(d,h)=>{a();var o=s("Offset");r(d,o)},$$slots:{default:!0}});var Je=n(Ge);P(Je,{children:(d,h)=>{a();var o=Mt(),i=n(Q(o));T(i,{href:"/docs/products/databases/pagination",children:(c,v)=>{a();var p=s("pagination");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var He=n(Je);b(He,{children:(d,h)=>{var o=St(),i=Q(o);l(i,{content:`Query.offset(0)
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.offset(0)
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.offset(0)
`,language:"python",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.offset(0)
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.offset(0)
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::offset(0)
`,language:"php",process:!0,children:(e,u)=>{a();var t=s("Query::offset(0)");r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.offset(0)
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s("Query.offset(0)");r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"offset","values":[0]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"offset","values":[0]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Ue=n(He);m(Ue,{id:"cursor-after",level:3,children:(d,h)=>{a();var o=s("Cursor after");r(d,o)},$$slots:{default:!0}});var Xe=n(Ue);P(Xe,{children:(d,h)=>{a();var o=Wt(),i=n(Q(o));T(i,{href:"/docs/products/databases/pagination",children:(c,v)=>{a();var p=s("pagination");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var Ye=n(Xe);b(Ye,{children:(d,h)=>{var o=jt(),i=Q(o);l(i,{content:`Query.cursorAfter("62a7...f620")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.cursorAfter("62a7...f620")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.cursorAfter("62a7...f620")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.cursorAfter("62a7...f620")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.cursor_after("62a7...f620")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.cursor_after("62a7...f620")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.cursor_after("62a7...f620")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.cursor_after("62a7...f620")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.cursorAfter("62a7...f620")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.cursorAfter("62a7...f620")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::cursorAfter("62a7...f620")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::cursorAfter("62a7...f620")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.cursorAfter("62a7...f620")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.cursorAfter("62a7...f620")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"cursorAfter","values":["62a7...f620"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"cursorAfter","values":["62a7...f620"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var Ke=n(Ye);m(Ke,{id:"cursor-before",level:3,children:(d,h)=>{a();var o=s("Cursor before");r(d,o)},$$slots:{default:!0}});var Ve=n(Ke);P(Ve,{children:(d,h)=>{a();var o=Gt(),i=n(Q(o));T(i,{href:"/docs/products/databases/pagination",children:(c,v)=>{a();var p=s("pagination");r(c,p)},$$slots:{default:!0}}),a(),r(d,o)},$$slots:{default:!0}});var Ze=n(Ve);b(Ze,{children:(d,h)=>{var o=Jt(),i=Q(o);l(i,{content:`Query.cursorBefore("62a7...a600")
`,language:"client-web",process:!0,children:(e,u)=>{a();var t=s('Query.cursorBefore("62a7...a600")');r(e,t)},$$slots:{default:!0}});var c=n(i);l(c,{content:`Query.cursorBefore("62a7...a600")
`,language:"client-flutter",process:!0,children:(e,u)=>{a();var t=s('Query.cursorBefore("62a7...a600")');r(e,t)},$$slots:{default:!0}});var v=n(c);l(v,{content:`Query.cursor_before("62a7...a600")
`,language:"python",process:!0,children:(e,u)=>{a();var t=s('Query.cursor_before("62a7...a600")');r(e,t)},$$slots:{default:!0}});var p=n(v);l(p,{content:`Query.cursor_before("62a7...a600")
`,language:"ruby",process:!0,children:(e,u)=>{a();var t=s('Query.cursor_before("62a7...a600")');r(e,t)},$$slots:{default:!0}});var _=n(p);l(_,{content:`Query.cursorBefore("62a7...a600")
`,language:"deno",process:!0,children:(e,u)=>{a();var t=s('Query.cursorBefore("62a7...a600")');r(e,t)},$$slots:{default:!0}});var g=n(_);l(g,{content:`Query::cursorBefore("62a7...a600")
`,language:"php",process:!0,children:(e,u)=>{a();var t=s('Query::cursorBefore("62a7...a600")');r(e,t)},$$slots:{default:!0}});var $=n(g);l($,{content:`Query.cursorBefore("62a7...a600")
`,language:"swift",process:!0,children:(e,u)=>{a();var t=s('Query.cursorBefore("62a7...a600")');r(e,t)},$$slots:{default:!0}});var y=n($);l(y,{content:`{"method":"cursorBefore","values":["62a7...a600"]}
`,language:"http",process:!0,children:(e,u)=>{a();var t=s('{"method":"cursorBefore","values":["62a7...a600"]}');r(e,t)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var et=n(Ze);m(et,{id:"complex-queries",level:1,children:(d,h)=>{a();var o=s("Complex queries");r(d,o)},$$slots:{default:!0}});var tt=n(et);P(tt,{children:(d,h)=>{a();var o=s("You can create complex queries by combining AND and OR operations. For example, to find items that are either books under $20 or magazines under $10:");r(d,o)},$$slots:{default:!0}});var rt=n(tt);b(rt,{children:(d,h)=>{var o=Ht(),i=Q(o);l(i,{content:`const results = await databases.listDocuments(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    [
        Query.or([
            Query.and([
                Query.equal('category', ['books']),
                Query.lessThan('price', 20)
            ]),
            Query.and([
                Query.equal('category', ['magazines']),
                Query.lessThan('price', 10)
            ])
        ])
    ]
);
`,language:"client-web",process:!0,children:(_,g)=>{a();var $=s(`const results = await databases.listDocuments(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    [
        Query.or([
            Query.and([
                Query.equal('category', ['books']),
                Query.lessThan('price', 20)
            ]),
            Query.and([
                Query.equal('category', ['magazines']),
                Query.lessThan('price', 10)
            ])
        ])
    ]
);`);r(_,$)},$$slots:{default:!0}});var c=n(i);l(c,{content:`final results = await databases.listDocuments(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    [
        Query.or([
            Query.and([
                Query.equal('category', ['books']),
                Query.lessThan('price', 20)
            ]),
            Query.and([
                Query.equal('category', ['magazines']),
                Query.lessThan('price', 10)
            ])
        ])
    ]
);
`,language:"client-flutter",process:!0,children:(_,g)=>{a();var $=s(`final results = await databases.listDocuments(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    [
        Query.or([
            Query.and([
                Query.equal('category', ['books']),
                Query.lessThan('price', 20)
            ]),
            Query.and([
                Query.equal('category', ['magazines']),
                Query.lessThan('price', 10)
            ])
        ])
    ]
);`);r(_,$)},$$slots:{default:!0}});var v=n(c);l(v,{content:`results = databases.list_documents(
    database_id='<DATABASE_ID>',
    collection_id='<COLLECTION_ID>',
    queries=[
        Query.or_queries([
            Query.and_queries([
                Query.equal('category', ['books']),
                Query.less_than('price', 20)
            ]),
            Query.and_queries([
                Query.equal('category', ['magazines']),
                Query.less_than('price', 10)
            ])
        ])
    ]
)
`,language:"python",process:!0,children:(_,g)=>{a();var $=s(`results = databases.list_documents(
    database_id='<DATABASE_ID>',
    collection_id='<COLLECTION_ID>',
    queries=[
        Query.or_queries([
            Query.and_queries([
                Query.equal('category', ['books']),
                Query.less_than('price', 20)
            ]),
            Query.and_queries([
                Query.equal('category', ['magazines']),
                Query.less_than('price', 10)
            ])
        ])
    ]
)`);r(_,$)},$$slots:{default:!0}});var p=n(v);l(p,{content:`{"method":"or","values":[{"method":"and","values":[{"method":"equal","attribute":"category","values":["books"]},{"method":"lessThan","attribute":"price","values":[20]}]},{"method":"and","values":[{"method":"equal","attribute":"category","values":["magazines"]},{"method":"lessThan","attribute":"price","values":[10]}]}]}
`,language:"http",process:!0,children:(_,g)=>{a();var $=s('{"method":"or","values":[{"method":"and","values":[{"method":"equal","attribute":"category","values":["books"]},{"method":"lessThan","attribute":"price","values":[20]}]},{"method":"and","values":[{"method":"equal","attribute":"category","values":["magazines"]},{"method":"lessThan","attribute":"price","values":[10]}]}]}');r(_,$)},$$slots:{default:!0}}),r(d,o)},$$slots:{default:!0}});var ot=n(rt);P(ot,{children:(d,h)=>{a();var o=Ut(),i=n(Q(o));x(i,{content:"OR"});var c=n(i,2);x(c,{content:"AND"});var v=n(c,2);x(v,{content:"Query.or()"}),a(),r(d,o)},$$slots:{default:!0}}),ut(w),r(st,w)},$$slots:{default:!0}}))}export{yr as component};
