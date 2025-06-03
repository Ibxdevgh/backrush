import{t as u,a as t,b as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as e,f as c,c as ht,n as o,r as vt}from"./NgVQVlRK.js";import{n as mt}from"./B4IyMRKX.js";import{H as W}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as at}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as it}from"./BlhJVlLQ.js";import{C as y}from"./DXp9_3zM.js";import{F as N}from"./OFUKRh55.js";import{L as z,I as U}from"./BhmTgGWB.js";import{P as _}from"./D8YsId2T.js";import{S as C}from"./yHjwcyUH.js";import{L as A}from"./yh4_9ChP.js";import{T as lt}from"./D8BqvLkQ.js";import{T as dt,a as j,b as L,c as ut,d as g}from"./BpU_IltG.js";import{P as _t}from"./CEkRzcqJ.js";const ct={layout:"post",title:"Best database pagination technique",description:"Learn how to fix database-related performance problems using offset and cursor pagination.",date:"2024-08-05T00:00:00.000Z",cover:"/images/blog/best-pagination-technique/cover.png",timeToRead:8,author:"matej-baco",category:"tutorial",callToAction:!0};var gt=u("The Database is one of the cornerstones of every application. It&#39;s where you store everything your app needs to remember, compute later, or display to other users online. It&#39;s all smooth sailing until your database grows and your application starts lagging because it&#39;s trying to fetch and render 1,000 posts simultaneously. As a smart engineer, you quickly patch this with a <!> button. However, a few weeks later, you encounter a <!> error. Turning to Stack Overflow, you find that copying and pasting solutions is no longer helping. With no other options, you start debugging and discover that the database returns over 50,000 posts each time a user opens your app. What do you do now?",1),wt=u("These days, pagination has almost become a necessity since <!> application is very likely to deal with large amounts of data. This data could be anything from user-generated content, content added by administrators or editors, or automatically generated audits and logs. As soon as your list grows to more than a few thousand items, your database will take too long to resolve each request and your front-end&#39;s speed and accessibility will suffer.",1),yt=u("Two widely used pagination strategies are <!> and <!>. Before learning everything about them, let&#39;s look at some websites using them.",1),bt=u("First, let&#39;s visit GitHub&#39;s <!>. Notice how the tab says <!>, not an absolute number. Also, instead of standard page numbers, they use <!> and <!> buttons.",1),Pt=u("Now, let&#39;s switch to <!> and notice the exact number of results: <!>. Standard pagination with all page numbers you can click through is <!>.",1),xt=u("It&#39;s clear that two tech <!> could not agree on which solution is better! Why? Well, we&#39;ll need to use an answer developers hate: <!>. Let&#39;s explore both methods to understand their advantages, limitations, and performance implications.",1),kt=u("<!> - Number of rows to fetch from the database",1),Tt=u("<!> - Number of rows to skip. Offset is like a page number but with a bit of math around it (<!>)",1),St=u("<!><!>",1),jt=u("In the SQL world, such a query would be written as <!>.",1),Ot=u("Some websites implementing offset pagination also show the page number of the last page. How do they do it? Alongside results for each page, they also tend to return a <!> attribute telling you how many rows there are in total. Using <!>, <!>, and a bit of math, you can calculate last page number using <!>",1),It=u("Alongside that, the <!> in databases is implemented in a way that loops through rows to know how many should be skipped.",1),qt=u("As convenient as this feature is for the user, developers struggle to scale this type of pagination. Looking at <!> attribute, we can already see that it can take quite some time to count all rows in a database to the exact number. <!> That means that the higher our offset is, the longer our database query will take.",1),Rt=u("<!> - Same as before, the number of rows we want to show on one page",1),Et=u("<!> - ID of a reference element in the list. This can be the <!> if you&#39;re querying the <!> page and the <!> if querying the <!> page.",1),Dt=u("<!> - If a user clicks <!> or <!> (<!> or <!>)",1),Ft=u("<!><!><!>",1),At=u("When requesting the first page, we don&#39;t need to provide anything, just the limit <!>, saying how many rows we want to get. As a result, we get our ten rows.",1),Ct=u("To get to the next page, we use the ID of the last row as the <!> and set <!> to <!>.",1),Ut=u("Similarly, if we want to go to the previous page, we use the ID of the first row as a <!> and set the direction to <!>.",1),Wt=u("To compare, in the SQL world, we could write our query as <!>.",1),Nt=u("Queries that use a cursor instead of offset are more performant because the <!> query helps skip unwanted rows, while <!> needs to iterate over them, resulting in a full-table scan.",1),Lt=u("<!> Skipping rows using <!> can get even faster if you set up proper indexes on your IDs. The index is created by default in the case of your primary key.",1),Qt=u("However, cursor pagination is a complex problem if you need to implement it on the backend. To implement cursor pagination, you will need <!> and <!> clauses in your query. In addition, you will also need <!> clauses to filter by your required conditions. This can get quite complex very quickly, and you might end up with a huge nested query. You will also need to create indexes for all the columns you need to query.",1),Ht=u("Now that you have eliminated duplicates and missing data by switching to cursor pagination, you still have one problem left. Since you should not expose incremental numeric IDs to the user (for security reasons), you must now maintain a hashed version of each ID. Whenever you need to query a database, you convert this string ID to its numeric ID by looking at a table that holds these pairs. What if this row is missing? What if you click the <!>button, take the last row&#39;s ID, and request the next page, but the database can&#39;t find the ID?",1),zt=u("This is a really rare condition and only occurs if the row&#39;s ID that you are about to use as a cursor has been just deleted. We can solve this problem by trying previous rows or re-fetching data of earlier requests to update the last row with a new ID, but all of that brings a whole new level of complexity, and the developer needs to understand a bunch of new concepts, such as recursion and proper state management. Thankfully, services such as <!> take care of that, so you can simply use cursor pagination as a feature.",1),Bt=u("<!> is an open-source backend-as-a-service that abstracts all the complexity involved in building a modern application by providing you with a set of REST APIs for your core backend needs. Backrush handles user authentication and authorization, databases, file storage, cloud functions, webhooks, messaging, and more. You can extend Backrush using your favorite backend language if anything is missing.",1),Vt=u("Backrush&#39;s pagination supports both offset and cursor pagination. Let&#39;s imagine you have a collection with ID <!>. You can get documents from this collection with either offset or cursor pagination:",1),Yt=u("First, we import the Backrush SDK and set up an instance that connects to our Backrush Cloud project. Then, we list 10 documents using offset pagination. Right after, we write the exact same list documents query, but this time using <!> instead of offset pagination.",1),Mt=u("You can find complete source code in the <!>",1),Gt=u("First, you set up Backrush, register a user, create a project and create a collection called <!> with read permission set to <!>. To learn more about this process, visit the <!>. You should now have Backrush ready to go.",1),Jt=u("Now you have 1 million documents inserted in less than a minute, and are ready to start the benchmarks. We will be using the <!> load-testing library for this demo.",1),Xt=u("<!><!>",1),Kt=u("<!><!>",1),Zt=u("<!><!>",1),eo=u("<!><!>",1),to=u("<!><!>",1),oo=u("<!><!>",1),ro=u("<!><!>",1),so=u("<!><!>",1),no=u("<!><!>",1),ao=u("<!><!>",1),io=u("<!><!>",1),lo=u("<!><!><!><!><!><!><!><!><!><!>",1),uo=u("<!><!>",1),co=u("<!> As you can see, offset 0 was pretty fast, responding in less than 4ms. The first jump was to offset 100k, and the change was drastic, increasing response times to 52ms. With each increase in the offset, the duration went up, resulting in almost 500ms to get ten documents after an offset of 900k documents. That is crazy!",1),po=u("<!><!><!>",1),$o=u("<!><!><!>",1),fo=u("<!><!><!>",1),ho=u("<!><!><!>",1),vo=u("<!><!><!>",1),mo=u("<!><!><!>",1),_o=u("<!><!><!>",1),go=u("<!><!><!>",1),wo=u("<!><!><!>",1),yo=u("<!><!><!>",1),bo=u("<!><!><!>",1),Po=u("<!><!><!><!><!><!><!><!><!><!>",1),xo=u("<!><!>",1),ko=u("If you are interested in running tests on your own machine, you can find the complete source code in a <!>. The repository includes <!>, which explains the installation and running of scripts.",1),To=u("I believe Amazon decided to go with offset because it improves UX, but that is a topic for another research. We can already notice that if we visit <!> and search for a <!>, it says there are <em>exactly</em> <!> results, but you can only visit the first seven pages (350 results).",1),So=u("Do you know what is better than reading about pagination? Trying it out! I would encourage you to try both methods because it&#39;s best to get first-hand experience. Setting up Backrush takes less than a few minutes, and you can start playing with both pagination methods. If you have any questions, you can also reach us on <!>.",1),jo=u("<!><!><!><!>",1),Oo=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Io(pt){_t(pt,mt(ct,{children:($t,qo)=>{var Q=Oo(),B=ht(Q);_(B,{children:(s,l)=>{o();var r=gt(),a=e(c(r));y(a,{content:"Show more"});var p=e(a,2);y(p,{content:"Timeout"}),o(),t(s,r)},$$slots:{default:!0}});var V=e(B);_(V,{children:(s,l)=>{o();var r=n("To avoid these challenging scenarios, it’s important to be aware of potential risks from the start. A well-prepared developer can mitigate these issues. This article will help you address database-related performance problems using offset and cursor pagination.");t(s,r)},$$slots:{default:!0}});var Y=e(V);W(Y,{level:1,children:(s,l)=>{o();var r=n("What is pagination?");t(s,r)},$$slots:{default:!0}});var M=e(Y);_(M,{children:(s,l)=>{o();var r=n("Pagination is a strategy employed when querying any dataset that holds more than just a few hundred records. Thanks to pagination, we can split our large dataset into chunks that we can gradually fetch and display to the user, thus reducing the load on the database. Pagination also solves a lot of performance issues both on the client and server-side! Without pagination, you'd have to load the entire chat history only to read the latest message sent to you.");t(s,r)},$$slots:{default:!0}});var G=e(M);_(G,{children:(s,l)=>{o();var r=wt(),a=e(c(r));C(a,{marker:"**",children:(p,m)=>{o();var P=n("every");t(p,P)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var J=e(G);_(J,{children:(s,l)=>{o();var r=n("Now that we know what pagination is, how do we actually use it? And why is it necessary?");t(s,r)},$$slots:{default:!0}});var X=e(J);W(X,{level:1,children:(s,l)=>{o();var r=n("Types of pagination");t(s,r)},$$slots:{default:!0}});var K=e(X);_(K,{children:(s,l)=>{o();var r=yt(),a=e(c(r));C(a,{marker:"**",children:(m,P)=>{o();var b=n("offset");t(m,b)},$$slots:{default:!0}});var p=e(a,2);C(p,{marker:"**",children:(m,P)=>{o();var b=n("cursor");t(m,b)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var Z=e(K);_(Z,{children:(s,l)=>{o();var r=bt(),a=e(c(r));A(a,{href:"https://github.com/Back-rush/backrush/stargazers",children:(b,k)=>{o();var T=n("Stargazer page");t(b,T)},$$slots:{default:!0}});var p=e(a,2);y(p,{content:"5,000+"});var m=e(p,2);y(m,{content:"Previous"});var P=e(m,2);y(P,{content:"Next"}),o(),t(s,r)},$$slots:{default:!0}});var ee=e(Z);_(ee,{children:(s,l)=>{o();var r=Pt(),a=e(c(r));A(a,{href:"https://www.amazon.com/s?k=microwave",children:(P,b)=>{o();var k=n("Amazon's products list");t(P,k)},$$slots:{default:!0}});var p=e(a,2);y(p,{content:"364"});var m=e(p,2);y(m,{content:"1 2 3 ... 20"}),o(),t(s,r)},$$slots:{default:!0}});var te=e(ee);_(te,{children:(s,l)=>{o();var r=xt(),a=e(c(r));C(a,{marker:"**",children:(m,P)=>{o();var b=n("giants");t(m,b)},$$slots:{default:!0}});var p=e(a,2);y(p,{content:"It depends"}),o(),t(s,r)},$$slots:{default:!0}});var oe=e(te);W(oe,{level:1,children:(s,l)=>{o();var r=n("Offset pagination");t(s,r)},$$slots:{default:!0}});var re=e(oe);_(re,{children:(s,l)=>{o();var r=n("Most websites use offset pagination because of its simplicity and how intuitive pagination is to users. To implement offset pagination, we will usually need two pieces of information:");t(s,r)},$$slots:{default:!0}});var se=e(re);z(se,{ordered:!1,marker:"-",children:(s,l)=>{var r=St(),a=c(r);U(a,{children:(m,P)=>{var b=kt(),k=c(b);y(k,{content:"limit"}),o(),t(m,b)},$$slots:{default:!0}});var p=e(a);U(p,{children:(m,P)=>{var b=Tt(),k=c(b);y(k,{content:"offset"});var T=e(k,2);y(T,{content:"offset = (page-1) * limit"}),o(),t(m,b)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var ne=e(se);_(ne,{children:(s,l)=>{o();var r=n("To get the first page of our data, we set the limit to 10 (because we want 10 items on the page) and offset to 0 (because we want to start counting 10 items from the 0th item). As a result, we will get ten rows.");t(s,r)},$$slots:{default:!0}});var ae=e(ne);_(ae,{children:(s,l)=>{o();var r=n("To get the second page, we keep the limit at 10 (this doesn't change since we want every page to contain 10 rows ) and set the offset to 10 ( return results from the 10th row onwards. We continue this approach thereby allowing the end user to paginate through the results and see all of their content.");t(s,r)},$$slots:{default:!0}});var ie=e(ae);_(ie,{children:(s,l)=>{o();var r=jt(),a=e(c(r));y(a,{content:"SELECT * FROM posts OFFSET 10 LIMIT 10"}),o(),t(s,r)},$$slots:{default:!0}});var le=e(ie);_(le,{children:(s,l)=>{o();var r=Ot(),a=e(c(r));y(a,{content:"sum"});var p=e(a,2);y(p,{content:"limit"});var m=e(p,2);y(m,{content:"sum"});var P=e(m,2);y(P,{content:"lastPage = ceil(sum / limit)"}),t(s,r)},$$slots:{default:!0}});var de=e(le);_(de,{children:(s,l)=>{o();var r=qt(),a=e(c(r));y(a,{content:"sum"});var p=e(a,2);C(p,{marker:"**",children:(m,P)=>{o();var b=It(),k=e(c(b));y(k,{content:"offset"}),o(),t(m,b)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var ue=e(de);_(ue,{children:(s,l)=>{o();var r=n("Another downside of offset pagination is that it doesn't play well with real-time data or data that changes often. Offset says how many rows we want to skip but doesn't account for row deletion or new rows being created. Such an offset can result in showing duplicate data or missing data.");t(s,r)},$$slots:{default:!0}});var ce=e(ue);W(ce,{level:1,children:(s,l)=>{o();var r=n("Cursor pagination");t(s,r)},$$slots:{default:!0}});var pe=e(ce);_(pe,{children:(s,l)=>{o();var r=n("Cursors are successors to offsets, as they solve all issues that offset pagination has - performance, missing data and data duplication because it does not rely on the relative ordering of the rows as in the case of offset pagination. Instead, it relies on an index created and managed by the database. To implement cursor pagination, we will need the following information:");t(s,r)},$$slots:{default:!0}});var $e=e(pe);z($e,{ordered:!1,marker:"-",children:(s,l)=>{var r=Ft(),a=c(r);U(a,{children:(P,b)=>{var k=Rt(),T=c(k);y(T,{content:"limit"}),o(),t(P,k)},$$slots:{default:!0}});var p=e(a);U(p,{children:(P,b)=>{var k=Et(),T=c(k);y(T,{content:"cursor"});var O=e(T,2);C(O,{marker:"**",children:(q,D)=>{o();var F=n("first item");t(q,F)},$$slots:{default:!0}});var S=e(O,2);C(S,{marker:"**",children:(q,D)=>{o();var F=n("previous");t(q,F)},$$slots:{default:!0}});var R=e(S,2);C(R,{marker:"**",children:(q,D)=>{o();var F=n("last item");t(q,F)},$$slots:{default:!0}});var E=e(R,2);C(E,{marker:"**",children:(q,D)=>{o();var F=n("next");t(q,F)},$$slots:{default:!0}}),o(),t(P,k)},$$slots:{default:!0}});var m=e(p);U(m,{children:(P,b)=>{var k=Dt(),T=c(k);y(T,{content:"cursorDirection"});var O=e(T,2);y(O,{content:"Next"});var S=e(O,2);y(S,{content:"Previous"});var R=e(S,2);y(R,{content:"after"});var E=e(R,2);y(E,{content:"before"}),o(),t(P,k)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var fe=e($e);_(fe,{children:(s,l)=>{o();var r=At(),a=e(c(r));y(a,{content:"10"}),o(),t(s,r)},$$slots:{default:!0}});var he=e(fe);_(he,{children:(s,l)=>{o();var r=Ct(),a=e(c(r));y(a,{content:"cursor"});var p=e(a,2);y(p,{content:"cursor direction"});var m=e(p,2);y(m,{content:"after"}),o(),t(s,r)},$$slots:{default:!0}});var ve=e(he);_(ve,{children:(s,l)=>{o();var r=Ut(),a=e(c(r));y(a,{content:"cursor"});var p=e(a,2);y(p,{content:"before"}),o(),t(s,r)},$$slots:{default:!0}});var me=e(ve);_(me,{children:(s,l)=>{o();var r=Wt(),a=e(c(r));y(a,{content:"SELECT * FROM posts WHERE id > 10 LIMIT 10 ORDER BY id DESC"}),o(),t(s,r)},$$slots:{default:!0}});var _e=e(me);_(_e,{children:(s,l)=>{var r=Lt(),a=c(r);C(a,{marker:"**",children:(m,P)=>{o();var b=Nt(),k=e(c(b));y(k,{content:"WHERE"});var T=e(k,2);y(T,{content:"OFFSET"}),o(),t(m,b)},$$slots:{default:!0}});var p=e(a,2);y(p,{content:"WHERE"}),o(),t(s,r)},$$slots:{default:!0}});var ge=e(_e);_(ge,{children:(s,l)=>{o();var r=n("Not only that, you no longer need to worry about rows being inserted or deleted. If you were using an offset of 10, you would expect exactly 10 rows to be present ahead of your current page. If this condition is not met, your query will return inconsistent results, leading to data duplication and even missing rows. This can happen if any of the rows ahead of your current page are deleted or new rows are added. Cursor pagination solves this by using the index of the last row you fetched, and it knows exactly where to start looking from when you request for more.");t(s,r)},$$slots:{default:!0}});var we=e(ge);_(we,{children:(s,l)=>{o();var r=Qt(),a=e(c(r));y(a,{content:"WHERE"});var p=e(a,2);y(p,{content:"ORDER BY"});var m=e(p,2);y(m,{content:"WHERE"}),o(),t(s,r)},$$slots:{default:!0}});var ye=e(we);_(ye,{children:(s,l)=>{o();var r=Ht(),a=e(c(r));y(a,{content:"Next"}),o(),t(s,r)},$$slots:{default:!0}});var be=e(ye);_(be,{children:(s,l)=>{o();var r=zt(),a=e(c(r));A(a,{href:"https://backrush.io/",children:(p,m)=>{o();var P=n("Backrush");t(p,P)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var Pe=e(be);W(Pe,{level:1,children:(s,l)=>{o();var r=n("Pagination in Backrush");t(s,r)},$$slots:{default:!0}});var xe=e(Pe);_(xe,{children:(s,l)=>{var r=Bt(),a=c(r);A(a,{href:"https://backrush.io/",children:(p,m)=>{o();var P=n("Backrush");t(p,P)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var ke=e(xe);_(ke,{children:(s,l)=>{o();var r=n("Backrush Database lets you store any text-based data that needs to be shared across your users. Backrush's database allows you to create multiple collections (tables) and store multiple documents (rows) in it. Each collection has attributes (columns) configured to give your dataset a proper schema. You can also configure indexes to make your search queries more performant. When reading your data, you can use powerful queries, filter them, sort them, limit the number of results, and paginate over them.");t(s,r)},$$slots:{default:!0}});var Te=e(ke);_(Te,{children:(s,l)=>{o();var r=Vt(),a=e(c(r));y(a,{content:"articles"}),o(),t(s,r)},$$slots:{default:!0}});var Se=e(Te);N(Se,{content:`// Setup
import { Backrush, Databases, Query } from 'backrush';

const client = new Backrush();
client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('articles-demo'); // Your project ID
const databases = new Databases(client);

// Offset pagination
databases.listDocuments(
		'main', // Database ID
    'articles', // Collection ID
    [
	    Query.limit(10), // Limit, total documents in the response
	    Query.offset(500), // Offset, amount of documents to skip
    ]
).then((response) => {
    console.log(response);
});

// Cursor pagination
databases.listDocuments(
		'main', // Database ID
    'articles', // Collection ID
    [
	    Query.limit(10), // Limit, total documents in the response
	    Query.cursorAfter('61d6eb2281fce3650c2c', // ID of document I want to paginate after
    ]
).then((response) => {
    console.log(response);
});

`,language:"jsx",process:!0,children:(s,l)=>{o();var r=n(`// Setup
import { Backrush, Databases, Query } from 'backrush';

const client = new Backrush();
client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('articles-demo'); // Your project ID
const databases = new Databases(client);

// Offset pagination
databases.listDocuments(
		'main', // Database ID
    'articles', // Collection ID
    [
	    Query.limit(10), // Limit, total documents in the response
	    Query.offset(500), // Offset, amount of documents to skip
    ]
).then((response) => {
    console.log(response);
});

// Cursor pagination
databases.listDocuments(
		'main', // Database ID
    'articles', // Collection ID
    [
	    Query.limit(10), // Limit, total documents in the response
	    Query.cursorAfter('61d6eb2281fce3650c2c', // ID of document I want to paginate after
    ]
).then((response) => {
    console.log(response);
});`);t(s,r)},$$slots:{default:!0}});var je=e(Se);_(je,{children:(s,l)=>{o();var r=Yt(),a=e(c(r));y(a,{content:"cursor"}),o(),t(s,r)},$$slots:{default:!0}});var Oe=e(je);W(Oe,{level:2,children:(s,l)=>{o();var r=n("Benchmarks");t(s,r)},$$slots:{default:!0}});var Ie=e(Oe);_(Ie,{children:(s,l)=>{o();var r=n(`We’ve frequently mentioned the term "performance" in this article without providing specific numbers, so let’s create a benchmark together. We'll use Backrush as our backend server, as it supports both offset and cursor pagination, and Node.js for writing the benchmark scripts, as JavaScript is straightforward to follow.`);t(s,r)},$$slots:{default:!0}});var qe=e(Ie);it(qe,{children:(s,l)=>{_(s,{children:(r,a)=>{o();var p=Mt(),m=e(c(p));A(m,{href:"https://github.com/backrush",children:(P,b)=>{o();var k=n("GitHub repository.");t(P,k)},$$slots:{default:!0}}),t(r,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var Re=e(qe);_(Re,{children:(s,l)=>{o();var r=Gt(),a=e(c(r));y(a,{content:"posts"});var p=e(a,2);y(p,{content:"any"});var m=e(p,2);A(m,{href:"https://backrush.io/docs",children:(P,b)=>{o();var k=n("Backrush docs");t(P,k)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var Ee=e(Re);_(Ee,{children:(s,l)=>{o();var r=n("Use the following script to load data into our MariaDB database and prepare for the benchmark. We could use Backrush SDK, but talking directly to MariaDB offers more optional write queries for large datasets.");t(s,r)},$$slots:{default:!0}});var De=e(Ee);N(De,{content:`const config = {};
// Don't forget to fill config variable with secret information

console.log("🤖 Connecting to database ...");

const connection = await mysql.createConnection({
    host: config.mariadbHost,
    port: config.mariadbPost,
    user: config.mariadbUser,
    password: config.mariadbPassword,
    database: \`appwrite\`,
});

const promises = [];

console.log("🤖 Database connection established");
console.log("🤖 Preparing database queries ...");

let index = 1;
for(let i = 0; i < 100; i++) {
    const queryValues = [];

    for(let l = 0; l < 10000; l++) {
        queryValues.push(\`('id\${index}', '[]', '[]')\`);
        index++;
    }

    const query = \`INSERT INTO _project_\${config.projectId}_collection_posts (_uid, _read, _write) VALUES \${queryValues.join(", ")}\`;
    promises.push(connection.execute(query));
}

console.log("🤖 Pushing data. Get ready, this will take quite some time ...");

await Promise.all(promises);

console.error(\`🌟 Successfully finished\`);

`,language:"jsx",process:!0,children:(s,l)=>{o();var r=n(`const config = {};
// Don't forget to fill config variable with secret information

console.log("🤖 Connecting to database ...");

const connection = await mysql.createConnection({
    host: config.mariadbHost,
    port: config.mariadbPost,
    user: config.mariadbUser,
    password: config.mariadbPassword,
    database: \`appwrite\`,
});

const promises = [];

console.log("🤖 Database connection established");
console.log("🤖 Preparing database queries ...");

let index = 1;
for(let i = 0; i < 100; i++) {
    const queryValues = [];

    for(let l = 0; l < 10000; l++) {
        queryValues.push(\`('id\${index}', '[]', '[]')\`);
        index++;
    }

    const query = \`INSERT INTO _project_\${config.projectId}_collection_posts (_uid, _read, _write) VALUES \${queryValues.join(", ")}\`;
    promises.push(connection.execute(query));
}

console.log("🤖 Pushing data. Get ready, this will take quite some time ...");

await Promise.all(promises);

console.error(\`🌟 Successfully finished\`);`);t(s,r)},$$slots:{default:!0}});var Fe=e(De);it(Fe,{children:(s,l)=>{_(s,{children:(r,a)=>{o();var p=n("We used two layers for loops to increase the speed of the script. First for loop creates query executions that need to be awaited, and the second loop creates a long query holding multiple insert requests. Ideally, we would want everything in one request, but that is impossible due to MySQL configuration, so we split it into 100 requests.");t(r,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var Ae=e(Fe);_(Ae,{children:(s,l)=>{o();var r=Jt(),a=e(c(r));A(a,{href:"https://k6.io/",children:(p,m)=>{o();var P=n("k6");t(p,P)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var Ce=e(Ae);_(Ce,{children:(s,l)=>{o();var r=n("Let's benchmark the well-known and widely used offset pagination first. During each test scenario, we try to fetch a page with 10 documents, from different parts of our dataset. We will start with offset 0 and go all the way to an offset of 900k in increments of 100k. The benchmark is written in a way that makes only one request at a time to keep it as accurate as possible. We will also run the same benchmark ten times and measure average response times to ensure statistical significance. We'll be using k6's HTTP client to make requests to Backrush's REST API.");t(s,r)},$$slots:{default:!0}});var Ue=e(Ce);N(Ue,{content:`// script_offset.sh

import { Query } from 'backrush';
import http from 'k6/http';

// Before running, make sure to run setup.js
export const options = {
    iterations: 10,
    summaryTimeUnit: "ms",
    summaryTrendStats: ["avg"]
};

const config = JSON.parse(open("config.json"));

export default function () {
		const offset = Query.offset(__ENV.OFFSET);
		const limit = 10;

    http.get(\`\${config.endpoint}/databases/main/collections/posts/documents?queries[]=\${offset}&queries[]=\${limit}\`, {
        headers: {
            'content-type': 'application/json',
            'X-Backrush-Project': config.projectId
        }
    });
}

`,language:"jsx",process:!0,children:(s,l)=>{o();var r=n(`// script_offset.sh

import { Query } from 'backrush';
import http from 'k6/http';

// Before running, make sure to run setup.js
export const options = {
    iterations: 10,
    summaryTimeUnit: "ms",
    summaryTrendStats: ["avg"]
};

const config = JSON.parse(open("config.json"));

export default function () {
		const offset = Query.offset(__ENV.OFFSET);
		const limit = 10;

    http.get(\`\${config.endpoint}/databases/main/collections/posts/documents?queries[]=\${offset}&queries[]=\${limit}\`, {
        headers: {
            'content-type': 'application/json',
            'X-Backrush-Project': config.projectId
        }
    });
}`);t(s,r)},$$slots:{default:!0}});var We=e(Ue);_(We,{children:(s,l)=>{o();var r=n("To run the benchmark with different offset configurations and store output in CSV files, I created a simple bash script. This script executes k6 ten times, with a different offset configuration each time. The output will be provided as console output.");t(s,r)},$$slots:{default:!0}});var Ne=e(We);N(Ne,{content:`#!/bin/bash
# benchmark_offset.sh

k6 -e OFFSET=0 run script.js
k6 -e OFFSET=100000 run script.js
k6 -e OFFSET=200000 run script.js
k6 -e OFFSET=300000 run script.js
k6 -e OFFSET=400000 run script.js
k6 -e OFFSET=500000 run script.js
k6 -e OFFSET=600000 run script.js
k6 -e OFFSET=700000 run script.js
k6 -e OFFSET=800000 run script.js
k6 -e OFFSET=900000 run script.js

`,process:!0,children:(s,l)=>{o();var r=n(`#!/bin/bash
# benchmark_offset.sh

k6 -e OFFSET=0 run script.js
k6 -e OFFSET=100000 run script.js
k6 -e OFFSET=200000 run script.js
k6 -e OFFSET=300000 run script.js
k6 -e OFFSET=400000 run script.js
k6 -e OFFSET=500000 run script.js
k6 -e OFFSET=600000 run script.js
k6 -e OFFSET=700000 run script.js
k6 -e OFFSET=800000 run script.js
k6 -e OFFSET=900000 run script.js`);t(s,r)},$$slots:{default:!0}});var Le=e(Ne);_(Le,{children:(s,l)=>{o();var r=n("Within a minute, all benchmarks finished, providing me with the average response time for each offset configuration. The results were as expected but not satisfying at all.");t(s,r)},$$slots:{default:!0}});var Qe=e(Le);lt(Qe,{children:(s,l)=>{var r=uo(),a=c(r);dt(a,{children:(m,P)=>{j(m,{children:(b,k)=>{var T=Xt(),O=c(T);L(O,{});var S=e(O);L(S,{children:(R,E)=>{o();var q=n("Offset pagination (ms)");t(R,q)},$$slots:{default:!0}}),t(b,T)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=e(a);ut(p,{children:(m,P)=>{var b=lo(),k=c(b);j(k,{children:(x,I)=>{var $=Kt(),f=c($);g(f,{children:(h,i)=>{o();var d=n("0% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("3.73");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var T=e(k);j(T,{children:(x,I)=>{var $=Zt(),f=c($);g(f,{children:(h,i)=>{o();var d=n("10% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("52.39");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var O=e(T);j(O,{children:(x,I)=>{var $=eo(),f=c($);g(f,{children:(h,i)=>{o();var d=n("20% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("96.83");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var S=e(O);j(S,{children:(x,I)=>{var $=to(),f=c($);g(f,{children:(h,i)=>{o();var d=n("30% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("144.13");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var R=e(S);j(R,{children:(x,I)=>{var $=oo(),f=c($);g(f,{children:(h,i)=>{o();var d=n("40% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("216.06");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var E=e(R);j(E,{children:(x,I)=>{var $=ro(),f=c($);g(f,{children:(h,i)=>{o();var d=n("50% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("257.71");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var q=e(E);j(q,{children:(x,I)=>{var $=so(),f=c($);g(f,{children:(h,i)=>{o();var d=n("60% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("313.06");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var D=e(q);j(D,{children:(x,I)=>{var $=no(),f=c($);g(f,{children:(h,i)=>{o();var d=n("70% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("371.03");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var F=e(D);j(F,{children:(x,I)=>{var $=ao(),f=c($);g(f,{children:(h,i)=>{o();var d=n("80% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("424.63");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var H=e(F);j(H,{children:(x,I)=>{var $=io(),f=c($);g(f,{children:(h,i)=>{o();var d=n("90% offset");t(h,d)},$$slots:{default:!0}});var w=e(f);g(w,{children:(h,i)=>{o();var d=n("482.71");t(h,d)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}}),t(m,b)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var He=e(Qe);_(He,{children:(s,l)=>{var r=co(),a=c(r);at(a,{src:"/images/blog/best-pagination-technique/graph.png",alt:"Cursor pagination benchmark"}),o(),t(s,r)},$$slots:{default:!0}});var ze=e(He);_(ze,{children:(s,l)=>{o();var r=n("Now let's update our script to use cursor pagination. We will update our script to use a cursor instead of offset and update our bash script to provide a cursor (document ID) instead of an offset number.");t(s,r)},$$slots:{default:!0}});var Be=e(ze);N(Be,{content:`// script_cursor.js

import { Query } from 'backrush';
import http from 'k6/http';

// Before running, make sure to run setup.js
export const options = {
    iterations: 10,
    summaryTimeUnit: "ms",
    summaryTrendStats: ["avg"]
};

const config = JSON.parse(open("config.json"));

export default function () {
		const cursor = Query.cursorAfter(__ENV.CURSOR);
		const limit = 10;

    http.get(\`\${config.endpoint}/databases/main/collections/posts/documents?queries[]=\${offset}&queries[]=\${limit}\`, {
            headers: {
            'content-type': 'application/json',
            'X-Backrush-Project': config.projectId
        }
    });
}

`,language:"jsx",process:!0,children:(s,l)=>{o();var r=n(`// script_cursor.js

import { Query } from 'backrush';
import http from 'k6/http';

// Before running, make sure to run setup.js
export const options = {
    iterations: 10,
    summaryTimeUnit: "ms",
    summaryTrendStats: ["avg"]
};

const config = JSON.parse(open("config.json"));

export default function () {
		const cursor = Query.cursorAfter(__ENV.CURSOR);
		const limit = 10;

    http.get(\`\${config.endpoint}/databases/main/collections/posts/documents?queries[]=\${offset}&queries[]=\${limit}\`, {
            headers: {
            'content-type': 'application/json',
            'X-Backrush-Project': config.projectId
        }
    });
}`);t(s,r)},$$slots:{default:!0}});var Ve=e(Be);N(Ve,{content:`#!/bin/bash
# benchmark_cursor.sh

k6 -e CURSOR=id1 run script_cursor.js
k6 -e CURSOR=id100000 run script_cursor.js
k6 -e CURSOR=id200000 run script_cursor.js
k6 -e CURSOR=id300000 run script_cursor.js
k6 -e CURSOR=id400000 run script_cursor.js
k6 -e CURSOR=id500000 run script_cursor.js
k6 -e CURSOR=id600000 run script_cursor.js
k6 -e CURSOR=id700000 run script_cursor.js
k6 -e CURSOR=id800000 run script_cursor.js
k6 -e CURSOR=id900000 run script_cursor.js

`,process:!0,children:(s,l)=>{o();var r=n(`#!/bin/bash
# benchmark_cursor.sh

k6 -e CURSOR=id1 run script_cursor.js
k6 -e CURSOR=id100000 run script_cursor.js
k6 -e CURSOR=id200000 run script_cursor.js
k6 -e CURSOR=id300000 run script_cursor.js
k6 -e CURSOR=id400000 run script_cursor.js
k6 -e CURSOR=id500000 run script_cursor.js
k6 -e CURSOR=id600000 run script_cursor.js
k6 -e CURSOR=id700000 run script_cursor.js
k6 -e CURSOR=id800000 run script_cursor.js
k6 -e CURSOR=id900000 run script_cursor.js`);t(s,r)},$$slots:{default:!0}});var Ye=e(Ve);_(Ye,{children:(s,l)=>{o();var r=n("After running the script, you could already tell that there was a performance boost, as there were noticeable differences in response times. Take a look at this table to compare the two pagination methods side-by-side.");t(s,r)},$$slots:{default:!0}});var Me=e(Ye);lt(Me,{children:(s,l)=>{var r=xo(),a=c(r);dt(a,{children:(m,P)=>{j(m,{children:(b,k)=>{var T=po(),O=c(T);L(O,{});var S=e(O);L(S,{children:(E,q)=>{o();var D=n("Offset pagination (ms)");t(E,D)},$$slots:{default:!0}});var R=e(S);L(R,{children:(E,q)=>{o();var D=n("Cursor pagination (ms)");t(E,D)},$$slots:{default:!0}}),t(b,T)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=e(a);ut(p,{children:(m,P)=>{var b=Po(),k=c(b);j(k,{children:(x,I)=>{var $=$o(),f=c($);g(f,{children:(i,d)=>{o();var v=n("0% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("3.73");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("6.27");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var T=e(k);j(T,{children:(x,I)=>{var $=fo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("10% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("52.39");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("4.07");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var O=e(T);j(O,{children:(x,I)=>{var $=ho(),f=c($);g(f,{children:(i,d)=>{o();var v=n("20% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("96.83");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("5.15");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var S=e(O);j(S,{children:(x,I)=>{var $=vo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("30% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("144.13");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("5.29");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var R=e(S);j(R,{children:(x,I)=>{var $=mo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("40% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("216.06");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("6.65");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var E=e(R);j(E,{children:(x,I)=>{var $=_o(),f=c($);g(f,{children:(i,d)=>{o();var v=n("50% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("257.71");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("7.26");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var q=e(E);j(q,{children:(x,I)=>{var $=go(),f=c($);g(f,{children:(i,d)=>{o();var v=n("60% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("313.06");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("4.61");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var D=e(q);j(D,{children:(x,I)=>{var $=wo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("70% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("371.03");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("6.00");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var F=e(D);j(F,{children:(x,I)=>{var $=yo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("80% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("424.63");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("5.60");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}});var H=e(F);j(H,{children:(x,I)=>{var $=bo(),f=c($);g(f,{children:(i,d)=>{o();var v=n("90% offset");t(i,v)},$$slots:{default:!0}});var w=e(f);g(w,{children:(i,d)=>{o();var v=n("482.71");t(i,v)},$$slots:{default:!0}});var h=e(w);g(h,{children:(i,d)=>{o();var v=n("5.05");t(i,v)},$$slots:{default:!0}}),t(x,$)},$$slots:{default:!0}}),t(m,b)},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}});var Ge=e(Me);_(Ge,{children:(s,l)=>{at(s,{src:"/images/blog/best-pagination-technique/graph2.png",alt:"Cursor pagination benchmark"})},$$slots:{default:!0}});var Je=e(Ge);_(Je,{children:(s,l)=>{o();var r=n("As you can see, cursor pagination is highly efficient. The graph shows that cursor pagination maintains consistent performance regardless of the offset size, with each query performing as well as the first or last one. Loading the last page of a large list repeatedly can significantly impact performance.");t(s,r)},$$slots:{default:!0}});var Xe=e(Je);_(Xe,{children:(s,l)=>{o();var r=ko(),a=e(c(r));A(a,{href:"https://github.com/Meldiron/pagination-benchmark",children:(m,P)=>{o();var b=n("GitHub repository");t(m,b)},$$slots:{default:!0}});var p=e(a,2);y(p,{content:"README.md"}),o(),t(s,r)},$$slots:{default:!0}});var Ke=e(Xe);W(Ke,{level:1,children:(s,l)=>{o();var r=n("Conclusion");t(s,r)},$$slots:{default:!0}});var Ze=e(Ke);_(Ze,{children:(s,l)=>{o();var r=n("Offset pagination offers a well-known pagination method where you can see page numbers and click through them. This intuitive method comes with a bunch of downsides, such as terrible performance with high offsets and a chance of data duplication and missing data.");t(s,r)},$$slots:{default:!0}});var et=e(Ze);_(et,{children:(s,l)=>{o();var r=n("Cursor pagination solves all of these problems and brings a reliable pagination system that is fast and can handle real-time (often changing) data. The downside of cursor pagination is not showing page numbers, its implementation complexity, and a new set of challenges to overcome, such as missing cursor ID.");t(s,r)},$$slots:{default:!0}});var tt=e(et);_(tt,{children:(s,l)=>{o();var r=n("Let's now get back to our original question: Why does GitHub use cursor pagination, but Amazon decided to go with offset pagination? Performance is not always the key. User experience is much more valuable than how many servers your business has to pay for.");t(s,r)},$$slots:{default:!0}});var ot=e(tt);_(ot,{children:(s,l)=>{o();var r=To(),a=e(c(r));y(a,{content:"amazon.com"});var p=e(a,2);y(p,{content:"pen"});var m=e(p,4);y(m,{content:"10 000"}),o(),t(s,r)},$$slots:{default:!0}});var rt=e(ot);_(rt,{children:(s,l)=>{o();var r=n("First, there are far more than 10,000 results, but Amazon imposes a limit. Secondly, you can only access the first seven pages; attempting to visit page 8 results in a 404 error. This indicates that Amazon is aware of the performance issues with offset pagination but continues to use it because users prefer seeing page numbers. They had to implement some limits, but it's unlikely that users navigate to page 100 of the search results.");t(s,r)},$$slots:{default:!0}});var st=e(rt);_(st,{children:(s,l)=>{o();var r=So(),a=e(c(r));A(a,{href:"https://backrush.io/discord",children:(p,m)=>{o();var P=n("our Discord server");t(p,P)},$$slots:{default:!0}}),o(),t(s,r)},$$slots:{default:!0}});var nt=e(st);W(nt,{level:1,children:(s,l)=>{o();var r=n("Resources");t(s,r)},$$slots:{default:!0}});var ft=e(nt);z(ft,{ordered:!1,marker:"-",children:(s,l)=>{var r=jo(),a=c(r);U(a,{children:(b,k)=>{A(b,{href:"https://uxdesign.cc/why-facebook-says-cursor-pagination-is-the-greatest-d6b98d86b6c0",children:(T,O)=>{o();var S=n("Is offset pagination dead? Why cursor pagination is taking over");t(T,S)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=e(a);U(p,{children:(b,k)=>{A(b,{href:"https://stackoverflow.com/questions/55744926/offset-pagination-vs-cursor-pagination",children:(T,O)=>{o();var S=n("Offset pagination vs Cursor pagination");t(T,S)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=e(p);U(m,{children:(b,k)=>{A(b,{href:"https://stackoverflow.com/questions/18314687/how-to-implement-cursors-for-pagination-in-an-api",children:(T,O)=>{o();var S=n("How to implement cursors for pagination in an api");t(T,S)},$$slots:{default:!0}})},$$slots:{default:!0}});var P=e(m);U(P,{children:(b,k)=>{A(b,{href:"https://medium.com/swlh/how-to-implement-cursor-pagination-like-a-pro-513140b65f32",children:(T,O)=>{o();var S=n("How to Implement Cursor Pagination Like a Pro");t(T,S)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(s,r)},$$slots:{default:!0}}),vt(Q),t($t,Q)},$$slots:{default:!0}}))}const Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Io,frontmatter:ct},Symbol.toStringTag,{value:"Module"}));export{Zo as _,Io as a};
