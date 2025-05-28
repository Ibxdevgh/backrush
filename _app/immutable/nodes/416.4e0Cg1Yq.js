import{t as u,b as o,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as r,f as $,c as Fe,n as t,r as Me}from"../chunks/NgVQVlRK.js";import{n as ze}from"../chunks/B4IyMRKX.js";import{H as T}from"../chunks/CXsRaEhZ.js";import{M as Be}from"../chunks/hMT8fFzP.js";import{T as He,a as Re}from"../chunks/BHbEtIoO.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as A}from"../chunks/DXp9_3zM.js";import{F as S}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P}from"../chunks/D8YsId2T.js";import{S as E}from"../chunks/yHjwcyUH.js";import{L as R}from"../chunks/yh4_9ChP.js";import{T as N}from"../chunks/D8BqvLkQ.js";import{T as Y,a as j,b as L,c as J,d as I}from"../chunks/BpU_IltG.js";import{A as Ke}from"../chunks/CqOphJLh.js";const Ue={layout:"article",title:"GraphQL",description:"Get to know Backrush GraphQL API for flexible data querying & manipulation. Our docs cover the schema, queries, mutations, integration tips and more."};var Ve=u("Backrush supports multiple protocols for accessing the platform, including <!>, <!>, and <!>.",1),We=u("The GraphQL API allows you to query and mutate any resource type on the Backrush platform through the endpoint <!>. Every endpoint available through REST is available through GraphQL, except for OAuth.",1),Xe=u("<!><!><!>",1),Ze=u("<!>, the GraphQL query to execute.",1),et=u("<!><!><!>",1),tt=u("<!>, if the query contains several named operations, controls which one to execute.",1),rt=u("<!><!><!>",1),nt=u("<!>, an object containing variable names and values for the query. Variables are made available to your query with the <!> prefix.",1),at=u("<!><!><!>",1),ot=u("<!><!><!>",1),st=u("<!><!>",1),lt=u("In Backrush&#39;s GraphQL API, all internal model parameters are prefixed with <!> instead of <!> because <!> is reserved by GraphQL.",1),it=u("For example, <!> in the REST API would be referenced as <!> in the GraphQL API.",1),dt=u("You can execute a GraphQL query via a GET request, passing a <!> and optionally <!> and <!> as query parameters.",1),ut=u("There are two ways to make requests with the <!> content type. You can send a JSON object containing a <!> and optionally <!> and <!>, or an array of objects with the same structure.",1),$t=u("<!><!><!><!><!>",1),ct=u("The <!> content type can be used to send a query as the raw POST body.",1),pt=u("<!><!>",1),vt=u("<!><!>",1),ht=u("The <!> content type can be used to upload files via GraphQL. In this case, the form data must include the following parts in addition to the files to upload.",1),_t=u("<!><!><!>",1),mt=u("<!>, JSON encoded GraphQL query and optionally operation name and variables. File variables should contain null values.",1),ft=u("<!><!><!>",1),gt=u("<!>, JSON encoded map of form-data filenames to the operations dot-path to inject the file to, e.g. <!>.",1),Pt=u("<!><!><!>",1),wt=u("<!><!>",1),qt=u("<!><!>",1),yt=u("<!><!><!>",1),xt=u("<!><!><!>",1),Gt=u("<!><!><!>",1),bt=u("<!><!>",1),At=u("<!><!>",1),It=u("The errors array will contain error objects, each with their own <!> and <!>. The path will contain the field key that is null due to the error. If no errors occur, the array will not be present in the response.",1),Tt=u("GraphQL authenticates using Backrush accounts and sessions. Both accounts and sessions can be created with GraphQL using the <!>, <!>, <!>, or <!> mutations.",1),St=u("More information and examples of authenticating users can be found in the dedicated <!>.",1),Et=u("The GraphQL API can be used to query and manipulate database documents. For detailed examples of how to create, list, update, and delete documents using GraphQL, refer to the <!>.",1),Ct=u("There are two main features that make GraphQL appealing when compared to the REST API: <!> and <!>.",1),jt=u("For example, to retrieve only the email of a currently authenticated user, you could query the <!> field, passing only email as the <!>.",1),Lt=u("GraphQL allows sending multiple queries or mutations in the same request. There are two different ways to batch queries. The simplest way is to include multiple fields in a single query <!> mutation.",1),kt=u("If there was no authenticated user, the <!> field would fail to resolve. In such a case the value of the data key for that field will be null, and an object will be added to the errors array instead.",1),Ot=u("Additionally, all <!> must be passed in the same object, which can be cumbersome and hard to maintain.",1),Qt=u("The second way to batch is to pass an array of queries or mutations in the request. In this way, you can execute queries <!> mutations and keep variables separated for each.",1),Rt=u("<!><!><!><!>",1),Dt=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ur(De){Ke(De,ze(Ue,{children:(Ne,Nt)=>{var D=Dt(),F=Fe(D);P(F,{children:(a,i)=>{t();var n=Ve(),s=r($(n));R(s,{href:"/docs/apis/rest",children:(m,p)=>{t();var q=o("REST");e(m,q)},$$slots:{default:!0}});var v=r(s,2);R(v,{href:"/docs/apis/graphql",children:(m,p)=>{t();var q=o("GraphQL");e(m,q)},$$slots:{default:!0}});var c=r(v,2);R(c,{href:"/docs/apis/realtime",children:(m,p)=>{t();var q=o("Realtime");e(m,q)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var M=r(F);P(M,{children:(a,i)=>{t();var n=We(),s=r($(n));A(s,{content:"/v1/graphql"}),t(),e(a,n)},$$slots:{default:!0}});var z=r(M);T(z,{id:"requests",level:1,children:(a,i)=>{t();var n=o("Requests");e(a,n)},$$slots:{default:!0}});var B=r(z);P(B,{children:(a,i)=>{t();var n=o("Although every query executes through the same endpoint, there are multiple ways to make a GraphQL request. All requests, however, share a common structure.");e(a,n)},$$slots:{default:!0}});var H=r(B);N(H,{children:(a,i)=>{var n=st(),s=$(n);Y(s,{children:(c,m)=>{j(c,{children:(p,q)=>{var w=Xe(),G=$(w);L(G,{children:(l,_)=>{t();var d=o("Name");e(l,d)},$$slots:{default:!0}});var b=r(G);L(b,{children:(l,_)=>{t();var d=o("Type");e(l,d)},$$slots:{default:!0}});var y=r(b);L(y,{children:(l,_)=>{t();var d=o("Description");e(l,d)},$$slots:{default:!0}}),e(p,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=r(s);J(v,{children:(c,m)=>{var p=ot(),q=$(p);j(q,{children:(b,y)=>{var l=et(),_=$(l);I(_,{children:(g,h)=>{t();var x=o("query");e(g,x)},$$slots:{default:!0}});var d=r(_);I(d,{children:(g,h)=>{t();var x=o("string");e(g,x)},$$slots:{default:!0}});var f=r(d);I(f,{children:(g,h)=>{var x=Ze(),C=$(x);E(C,{marker:"**",children:(k,O)=>{t();var Q=o("Required");e(k,Q)},$$slots:{default:!0}}),t(),e(g,x)},$$slots:{default:!0}}),e(b,l)},$$slots:{default:!0}});var w=r(q);j(w,{children:(b,y)=>{var l=rt(),_=$(l);I(_,{children:(g,h)=>{t();var x=o("operationName");e(g,x)},$$slots:{default:!0}});var d=r(_);I(d,{children:(g,h)=>{t();var x=o("string");e(g,x)},$$slots:{default:!0}});var f=r(d);I(f,{children:(g,h)=>{var x=tt(),C=$(x);E(C,{marker:"**",children:(k,O)=>{t();var Q=o("Optional");e(k,Q)},$$slots:{default:!0}}),t(),e(g,x)},$$slots:{default:!0}}),e(b,l)},$$slots:{default:!0}});var G=r(w);j(G,{children:(b,y)=>{var l=at(),_=$(l);I(_,{children:(g,h)=>{t();var x=o("variables");e(g,x)},$$slots:{default:!0}});var d=r(_);I(d,{children:(g,h)=>{t();var x=o("object");e(g,x)},$$slots:{default:!0}});var f=r(d);I(f,{children:(g,h)=>{var x=nt(),C=$(x);E(C,{marker:"**",children:(O,Q)=>{t();var Je=o("Optional");e(O,Je)},$$slots:{default:!0}});var k=r(C,2);A(k,{content:"$"}),t(),e(g,x)},$$slots:{default:!0}}),e(b,l)},$$slots:{default:!0}}),e(c,p)},$$slots:{default:!0}}),e(a,n)},$$slots:{default:!0}});var K=r(H);T(K,{id:"graphql-model-parameters",level:2,children:(a,i)=>{t();var n=o("GraphQL model parameters");e(a,n)},$$slots:{default:!0}});var U=r(K);P(U,{children:(a,i)=>{t();var n=lt(),s=r($(n));A(s,{content:"_"});var v=r(s,2);A(v,{content:"$"});var c=r(v,2);A(c,{content:"$"}),t(),e(a,n)},$$slots:{default:!0}});var V=r(U);P(V,{children:(a,i)=>{t();var n=it(),s=r($(n));A(s,{content:"$collectionId"});var v=r(s,2);A(v,{content:"_collectionId"}),t(),e(a,n)},$$slots:{default:!0}});var W=r(V);T(W,{id:"get-resquest",level:2,children:(a,i)=>{t();var n=o("GET requests");e(a,n)},$$slots:{default:!0}});var X=r(W);P(X,{children:(a,i)=>{t();var n=dt(),s=r($(n));A(s,{content:"query"});var v=r(s,2);A(v,{content:"operationName"});var c=r(v,2);A(c,{content:"variables"}),t(),e(a,n)},$$slots:{default:!0}});var Z=r(X);T(Z,{id:"post-request",level:2,children:(a,i)=>{t();var n=o("POST requests");e(a,n)},$$slots:{default:!0}});var ee=r(Z);P(ee,{children:(a,i)=>{t();var n=o("There are multiple ways to make a GraphQL POST request, differentiated by content type.");e(a,n)},$$slots:{default:!0}});var te=r(ee);He(te,{children:(a,i)=>{var n=vt(),s=$(n);Re(s,{id:"json",title:"JSON",children:(c,m)=>{var p=$t(),q=$(p);P(q,{children:(l,_)=>{t();var d=ut(),f=r($(d));A(f,{content:"application/json"});var g=r(f,2);A(g,{content:"query"});var h=r(g,2);A(h,{content:"operationName"});var x=r(h,2);A(x,{content:"variables"}),t(),e(l,d)},$$slots:{default:!0}});var w=r(q);T(w,{level:3,children:(l,_)=>{t();var d=o("Object");e(l,d)},$$slots:{default:!0}});var G=r(w);S(G,{content:`{
    "query": "",
    "operationName": "",
    "variables": {}
}
`,language:"json",process:!0,children:(l,_)=>{t();var d=o(`{
    "query": "",
    "operationName": "",
    "variables": {}
}`);e(l,d)},$$slots:{default:!0}});var b=r(G);T(b,{level:3,children:(l,_)=>{t();var d=o("Array");e(l,d)},$$slots:{default:!0}});var y=r(b);S(y,{content:`[
    {
        "query": "",
        "operationName": "",
        "variables": {}
    }
]
`,language:"json",process:!0,children:(l,_)=>{t();var d=o(`[
    {
        "query": "",
        "operationName": "",
        "variables": {}
    }
]`);e(l,d)},$$slots:{default:!0}}),e(c,p)},$$slots:{default:!0}});var v=r(s);Re(v,{id:"graphql",title:"GraphQL",children:(c,m)=>{var p=pt(),q=$(p);P(q,{children:(G,b)=>{t();var y=ct(),l=r($(y));A(l,{content:"application/graphql"}),t(),e(G,y)},$$slots:{default:!0}});var w=r(q);S(w,{content:`query GetAccount {
    accountGet {
        _id
        email
    }
}
`,language:"graphql",process:!0,children:(G,b)=>{t();var y=o(`query GetAccount {
    accountGet {
        _id
        email
    }
}`);e(G,y)},$$slots:{default:!0}}),e(c,p)},$$slots:{default:!0}}),e(a,n)},$$slots:{default:!0}});var re=r(te);T(re,{id:"multipart-form-data",level:2,children:(a,i)=>{t();var n=o("Multipart form data");e(a,n)},$$slots:{default:!0}});var ne=r(re);P(ne,{children:(a,i)=>{t();var n=ht(),s=r($(n));A(s,{content:"multipart/form-data"}),t(),e(a,n)},$$slots:{default:!0}});var ae=r(ne);N(ae,{children:(a,i)=>{var n=qt(),s=$(n);Y(s,{children:(c,m)=>{j(c,{children:(p,q)=>{var w=_t(),G=$(w);L(G,{children:(l,_)=>{t();var d=o("Name");e(l,d)},$$slots:{default:!0}});var b=r(G);L(b,{children:(l,_)=>{t();var d=o("Type");e(l,d)},$$slots:{default:!0}});var y=r(b);L(y,{children:(l,_)=>{t();var d=o("Description");e(l,d)},$$slots:{default:!0}}),e(p,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=r(s);J(v,{children:(c,m)=>{var p=wt(),q=$(p);j(q,{children:(G,b)=>{var y=ft(),l=$(y);I(l,{children:(f,g)=>{t();var h=o("operations");e(f,h)},$$slots:{default:!0}});var _=r(l);I(_,{children:(f,g)=>{t();var h=o("string");e(f,h)},$$slots:{default:!0}});var d=r(_);I(d,{children:(f,g)=>{var h=mt(),x=$(h);E(x,{marker:"**",children:(C,k)=>{t();var O=o("Required");e(C,O)},$$slots:{default:!0}}),t(),e(f,h)},$$slots:{default:!0}}),e(G,y)},$$slots:{default:!0}});var w=r(q);j(w,{children:(G,b)=>{var y=Pt(),l=$(y);I(l,{children:(f,g)=>{t();var h=o("map");e(f,h)},$$slots:{default:!0}});var _=r(l);I(_,{children:(f,g)=>{t();var h=o("string");e(f,h)},$$slots:{default:!0}});var d=r(_);I(d,{children:(f,g)=>{var h=gt(),x=$(h);E(x,{marker:"**",children:(k,O)=>{t();var Q=o("Required");e(k,Q)},$$slots:{default:!0}});var C=r(x,2);A(C,{content:"variables.file"}),t(),e(f,h)},$$slots:{default:!0}}),e(G,y)},$$slots:{default:!0}}),e(c,p)},$$slots:{default:!0}}),e(a,n)},$$slots:{default:!0}});var oe=r(ae);T(oe,{id:"responses",level:1,children:(a,i)=>{t();var n=o("Responses");e(a,n)},$$slots:{default:!0}});var se=r(oe);P(se,{children:(a,i)=>{t();var n=o("A response to a GraphQL request will have the following structure:");e(a,n)},$$slots:{default:!0}});var le=r(se);N(le,{children:(a,i)=>{var n=At(),s=$(n);Y(s,{children:(c,m)=>{j(c,{children:(p,q)=>{var w=yt(),G=$(w);L(G,{children:(l,_)=>{t();var d=o("Name");e(l,d)},$$slots:{default:!0}});var b=r(G);L(b,{children:(l,_)=>{t();var d=o("Type");e(l,d)},$$slots:{default:!0}});var y=r(b);L(y,{children:(l,_)=>{t();var d=o("Description");e(l,d)},$$slots:{default:!0}}),e(p,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var v=r(s);J(v,{children:(c,m)=>{var p=bt(),q=$(p);j(q,{children:(G,b)=>{var y=xt(),l=$(y);I(l,{children:(f,g)=>{t();var h=o("data");e(f,h)},$$slots:{default:!0}});var _=r(l);I(_,{children:(f,g)=>{t();var h=o("object");e(f,h)},$$slots:{default:!0}});var d=r(_);I(d,{children:(f,g)=>{t();var h=o("The data returned by the query, maps requested field names to their results.");e(f,h)},$$slots:{default:!0}}),e(G,y)},$$slots:{default:!0}});var w=r(q);j(w,{children:(G,b)=>{var y=Gt(),l=$(y);I(l,{children:(f,g)=>{t();var h=o("errors");e(f,h)},$$slots:{default:!0}});var _=r(l);I(_,{children:(f,g)=>{t();var h=o("object[]");e(f,h)},$$slots:{default:!0}});var d=r(_);I(d,{children:(f,g)=>{t();var h=o("An array of errors that occurred during the request.");e(f,h)},$$slots:{default:!0}}),e(G,y)},$$slots:{default:!0}}),e(c,p)},$$slots:{default:!0}}),e(a,n)},$$slots:{default:!0}});var ie=r(le);P(ie,{children:(a,i)=>{t();var n=o("The data object will contain a map of requested field names to their results. If no data is returned, the object will not be present in the response.");e(a,n)},$$slots:{default:!0}});var de=r(ie);P(de,{children:(a,i)=>{t();var n=It(),s=r($(n));E(s,{marker:"**",children:(c,m)=>{t();var p=o("message");e(c,p)},$$slots:{default:!0}});var v=r(s,2);E(v,{marker:"**",children:(c,m)=>{t();var p=o("path");e(c,p)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var ue=r(de);T(ue,{id:"authentication",level:1,children:(a,i)=>{t();var n=o("Authentication");e(a,n)},$$slots:{default:!0}});var $e=r(ue);P($e,{children:(a,i)=>{t();var n=Tt(),s=r($(n));A(s,{content:"accountCreate"});var v=r(s,2);A(v,{content:"accountCreateEmailPasswordSession"});var c=r(v,2);A(c,{content:"accountCreateAnonymousSession"});var m=r(c,2);A(m,{content:"accountCreatePhoneToken"}),t(),e(a,n)},$$slots:{default:!0}});var ce=r($e);P(ce,{children:(a,i)=>{t();var n=St(),s=r($(n));R(s,{href:"/docs/products/auth",children:(v,c)=>{t();var m=o("authentication guide");e(v,m)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var pe=r(ce);T(pe,{id:"database-queries",level:1,children:(a,i)=>{t();var n=o("Database queries");e(a,n)},$$slots:{default:!0}});var ve=r(pe);P(ve,{children:(a,i)=>{t();var n=Et(),s=r($(n));R(s,{href:"/docs/products/databases/documents",children:(v,c)=>{t();var m=o("Documents documentation");e(v,m)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var he=r(ve);T(he,{id:"graphql-vs-rest",level:1,children:(a,i)=>{t();var n=o("GraphQL vs REST");e(a,n)},$$slots:{default:!0}});var _e=r(he);P(_e,{children:(a,i)=>{t();var n=Ct(),s=r($(n));E(s,{marker:"**",children:(c,m)=>{t();var p=o("selection sets");e(c,p)},$$slots:{default:!0}});var v=r(s,2);E(v,{marker:"**",children:(c,m)=>{t();var p=o("query batching");e(c,p)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var me=r(_e);T(me,{id:"selection-sets",level:2,children:(a,i)=>{t();var n=o("Selection sets");e(a,n)},$$slots:{default:!0}});var fe=r(me);P(fe,{children:(a,i)=>{t();var n=o("Selection sets can be used to tell a GraphQL API exactly which fields of a particular resource you would like to receive in the response. The server will respond with only those fields, nothing more, nothing less. This gives you full control over what data comes into your application.");e(a,n)},$$slots:{default:!0}});var ge=r(fe);P(ge,{children:(a,i)=>{t();var n=jt(),s=r($(n));A(s,{content:"accountGet"});var v=r(s,2);E(v,{marker:"**",children:(c,m)=>{t();var p=o("field selection set");e(c,p)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var Pe=r(ge);S(Pe,{content:`query GetAccount {
    accountGet {
        _id
        email
    }
}
`,language:"graphql",process:!0,children:(a,i)=>{t();var n=o(`query GetAccount {
    accountGet {
        _id
        email
    }
}`);e(a,n)},$$slots:{default:!0}});var we=r(Pe);P(we,{children:(a,i)=>{t();var n=o("Given this query, the GraphQL API will respond with:");e(a,n)},$$slots:{default:!0}});var qe=r(we);S(qe,{content:`{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        }
    }
}
`,language:"json",process:!0,children:(a,i)=>{t();var n=o(`{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        }
    }
}`);e(a,n)},$$slots:{default:!0}});var ye=r(qe);P(ye,{children:(a,i)=>{t();var n=o("This can be a useful feature for performance, network efficiency, and app responsiveness. As the processing happens on the server, the bandwidth consumed for the request can be dramatically reduced.");e(a,n)},$$slots:{default:!0}});var xe=r(ye);T(xe,{id:"query-batching",level:1,children:(a,i)=>{t();var n=o("Query batching");e(a,n)},$$slots:{default:!0}});var Ge=r(xe);P(Ge,{children:(a,i)=>{t();var n=Lt(),s=r($(n));E(s,{marker:"**",children:(v,c)=>{t();var m=o("or");e(v,m)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var be=r(Ge);S(be,{content:`query GetAccountAndLocale {
    accountGet {
        _id
        email
    }
    localeGet {
        ip
    }
}
`,language:"graphql",process:!0,children:(a,i)=>{t();var n=o(`query GetAccountAndLocale {
    accountGet {
        _id
        email
    }
    localeGet {
        ip
    }
}`);e(a,n)},$$slots:{default:!0}});var Ae=r(be);P(Ae,{children:(a,i)=>{t();var n=o("If both field executions succeed, the response will contain a data key for each field, containing the values of the selected fields.");e(a,n)},$$slots:{default:!0}});var Ie=r(Ae);S(Ie,{content:`{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        },
        "localeGet": {
            "ip": "..."
        }
    }
}
`,language:"json",process:!0,children:(a,i)=>{t();var n=o(`{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        },
        "localeGet": {
            "ip": "..."
        }
    }
}`);e(a,n)},$$slots:{default:!0}});var Te=r(Ie);P(Te,{children:(a,i)=>{t();var n=kt(),s=r($(n));A(s,{content:"accountGet"}),t(),e(a,n)},$$slots:{default:!0}});var Se=r(Te);S(Se,{content:`{
    "data": {
        "accountGet": null,
        "localeGet": {
            "ip": "...",
            "country": "..."
        }
    },
    "errors": [
        {
            "message": "User (role: guest) missing scope (account)",
            "path": ["accountGet"]
        }
    ]
}
`,language:"json",process:!0,children:(a,i)=>{t();var n=o(`{
    "data": {
        "accountGet": null,
        "localeGet": {
            "ip": "...",
            "country": "..."
        }
    },
    "errors": [
        {
            "message": "User (role: guest) missing scope (account)",
            "path": ["accountGet"]
        }
    ]
}`);e(a,n)},$$slots:{default:!0}});var Ee=r(Se);P(Ee,{children:(a,i)=>{t();var n=o("Batching with a single query or mutation has some down-sides. You cannot mix and match queries and mutations within the same request unless you provide an operationName, in which case you can only execute one query per request.");e(a,n)},$$slots:{default:!0}});var Ce=r(Ee);P(Ce,{children:(a,i)=>{t();var n=Ot(),s=r($(n));E(s,{marker:"**",children:(v,c)=>{t();var m=o("variables");e(v,m)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var je=r(Ce);P(je,{children:(a,i)=>{t();var n=Qt(),s=r($(n));E(s,{marker:"**",children:(v,c)=>{t();var m=o("and");e(v,m)},$$slots:{default:!0}}),t(),e(a,n)},$$slots:{default:!0}});var Le=r(je);S(Le,{content:`[
    {
        "query": "query GetAccount { accountGet{ email } }",
    },
    {
        "query": "query GetLocale { localeGet { ip } }"
    }
]
`,language:"json",process:!0,children:(a,i)=>{t();var n=o(`[
    {
        "query": "query GetAccount { accountGet{ email } }",
    },
    {
        "query": "query GetLocale { localeGet { ip } }"
    }
]`);e(a,n)},$$slots:{default:!0}});var ke=r(Le);P(ke,{children:(a,i)=>{t();var n=o("This allows you to execute complex actions in a single network request.");e(a,n)},$$slots:{default:!0}});var Oe=r(ke);T(Oe,{id:"sdk-usage",level:1,children:(a,i)=>{t();var n=o("SDK usage");e(a,n)},$$slots:{default:!0}});var Qe=r(Oe);P(Qe,{children:(a,i)=>{t();var n=o("Backrush SDKs also support GraphQL in addition to the REST services.");e(a,n)},$$slots:{default:!0}});var Ye=r(Qe);Be(Ye,{children:(a,i)=>{var n=Rt(),s=$(n);S(s,{content:`import { Client, Graphql } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your Backrush Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

const graphql = new Graphql(client);

const mutation = graphql.mutation({
    query: \`mutation CreateAccount(
        $email: String!,
        $password: String!,
        $name: String
    ) {
        accountCreate(
            email: $email,
            password: $password,
            name: $name,
            userId: "unique()"
        ) {
            _id
        }
    }\`,
    variables: {
        email: '...',
        password: '...',
        name: '...'
    }
});

mutation.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
`,language:"client-web",process:!0,children:(p,q)=>{t();var w=o(`import { Client, Graphql } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your Backrush Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

const graphql = new Graphql(client);

const mutation = graphql.mutation({
    query: \`mutation CreateAccount(
        $email: String!,
        $password: String!,
        $name: String
    ) {
        accountCreate(
            email: $email,
            password: $password,
            name: $name,
            userId: "unique()"
        ) {
            _id
        }
    }\`,
    variables: {
        email: '...',
        password: '...',
        name: '...'
    }
});

mutation.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});`);e(p,w)},$$slots:{default:!0}});var v=r(s);S(v,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your Backrush Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final graphql = Graphql(client);

Future mutation = graphql.mutation({
    'query': '''mutation CreateAccount(
        \\$email: String!,
        \\$password: String!,
        \\$name: String
    ) {
        accountCreate(
            email: \\$email,
            password: \\$password,
            name: \\$name,
            userId: "unique()"
        ) {
            _id
        }
    }''',
    'variables': {
        'email': '...',
        'password': '...',
        'name': '...'
    }
});

mutation.then((response) {
    print(response);
}).catchError((error) {
    print(error.message);
});
`,language:"client-flutter",process:!0,children:(p,q)=>{t();var w=o(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your Backrush Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final graphql = Graphql(client);

Future mutation = graphql.mutation({
    'query': '''mutation CreateAccount(
        \\$email: String!,
        \\$password: String!,
        \\$name: String
    ) {
        accountCreate(
            email: \\$email,
            password: \\$password,
            name: \\$name,
            userId: "unique()"
        ) {
            _id
        }
    }''',
    'variables': {
        'email': '...',
        'password': '...',
        'name': '...'
    }
});

mutation.then((response) {
    print(response);
}).catchError((error) {
    print(error.message);
});`);e(p,w)},$$slots:{default:!0}});var c=r(v);S(c,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let graphql = Graphql(client)

do {
    let response = try await graphql.mutation([
        "query": """
            mutation CreateAccount(
                $email: String!,
                $password: String!,
                $name: String
            ) {
                accountCreate(
                    email: $email,
                    password: $password,
                    name: $name,
                    userId: "unique()"

                ) {
                    _id
                }
            }
        """,
        "variables": [
            "email": "...",
            "password": "...",
            "name": "..."
        ]
    ])

    print(String(describing: response))
} catch {
    print(error.localizedDescription)
}
`,language:"client-apple",process:!0,children:(p,q)=>{t();var w=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let graphql = Graphql(client)

do {
    let response = try await graphql.mutation([
        "query": """
            mutation CreateAccount(
                $email: String!,
                $password: String!,
                $name: String
            ) {
                accountCreate(
                    email: $email,
                    password: $password,
                    name: $name,
                    userId: "unique()"

                ) {
                    _id
                }
            }
        """,
        "variables": [
            "email": "...",
            "password": "...",
            "name": "..."
        ]
    ])

    print(String(describing: response))
} catch {
    print(error.localizedDescription)
}`);e(p,w)},$$slots:{default:!0}});var m=r(c);S(m,{content:`import io.appwrite.Client
import io.appwrite.services.Graphql

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val graphql = Graphql(client)

try {
    val response = graphql.mutation(mapOf(
        "query" to """mutation CreateAccount(
            \${'$'}email: String!,
            \${'$'}password: String!,
            \${'$'}name: String
        ) {
            accountCreate(
                email: \${'$'}email,
                password: \${'$'}password,
                name: \${'$'}name,
                userId: "unique()"
            ) {
                _id
            }
        }""",
        "variables" to mapOf(
            "email" to "...",
            "password" to "...",
            "name" to "..."
        )
    ))

    Log.d(javaClass.name, response)
} catch (ex: BackrushException) {
    ex.printStackTrace()
}
`,language:"client-android-kotlin",process:!0,children:(p,q)=>{t();var w=o(`import io.appwrite.Client
import io.appwrite.services.Graphql

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val graphql = Graphql(client)

try {
    val response = graphql.mutation(mapOf(
        "query" to """mutation CreateAccount(
            \${'$'}email: String!,
            \${'$'}password: String!,
            \${'$'}name: String
        ) {
            accountCreate(
                email: \${'$'}email,
                password: \${'$'}password,
                name: \${'$'}name,
                userId: "unique()"
            ) {
                _id
            }
        }""",
        "variables" to mapOf(
            "email" to "...",
            "password" to "...",
            "name" to "..."
        )
    ))

    Log.d(javaClass.name, response)
} catch (ex: BackrushException) {
    ex.printStackTrace()
}`);e(p,w)},$$slots:{default:!0}}),e(a,n)},$$slots:{default:!0}}),Me(D),e(Ne,D)},$$slots:{default:!0}}))}export{ur as component};
