import{t as d,b as a,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Xe,s as n,f as u,n as t,r as Ze}from"../chunks/NgVQVlRK.js";import{n as et}from"../chunks/B4IyMRKX.js";import{H as G}from"../chunks/CXsRaEhZ.js";import{M as W}from"../chunks/hMT8fFzP.js";import{I as tt}from"../chunks/BypEz2Fd.js";import{T as He,a as L}from"../chunks/BHbEtIoO.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as F}from"../chunks/DXp9_3zM.js";import{F as O}from"../chunks/OFUKRh55.js";import{L as Fe,I as q}from"../chunks/BhmTgGWB.js";import{P as x}from"../chunks/D8YsId2T.js";import{S as E}from"../chunks/yHjwcyUH.js";import{L as K}from"../chunks/yh4_9ChP.js";import{T as Q}from"../chunks/D8BqvLkQ.js";import{T as U,a as N,b as M,c as z,d as Y}from"../chunks/BpU_IltG.js";import{A as nt}from"../chunks/CqOphJLh.js";const at={layout:"article",title:"Relationships",description:"Manage complex data relationships with Backrush Databases. Discover how to define and work with relationships between documents for interconnected data.",difficulty:"advanced",readtime:20};var ot=d("Relationships are represented in a collection using <!>. The relationship attribute contains the ID of related documents, which it references during read, update, and delete operations. This attribute is <!> if a document has no related documents.",1),rt=d("<!><!>",1),st=d("<!><!>",1),it=d("<!><!>",1),lt=d("<!><!>",1),dt=d("<!><!>",1),ct=d("<!><!>",1),pt=d("<!><!>",1),ut=d("<!><!>",1),vt=d("<!><!>",1),$t=d("<!><!>",1),mt=d("<!><!><!><!>",1),ht=d("<!><!>",1),_t=d("<!><!>",1),It=d("<!><!>",1),wt=d("<!><!>",1),bt=d("<!><!>",1),ft=d("<!><!><!>",1),Dt=d("<!><!>",1),Pt=d("You can define relationships in the Backrush Console, or using a <!>",1),yt=d("In your project, navigate to <!> &gt; <!> &gt; <!> &gt; <!> &gt; <!>.",1),Et=d("Select <!> as the attribute type.",1),Rt=d("In the <!> modal, select the <!> and pick the related collection and attributes.",1),gt=d("Select desired <!> behavior.",1),Ct=d("Click the <!> button to create the relationship.",1),xt=d("<!><!><!><!><!><!>",1),Ot=d("<!><!>",1),kt=d("Here&#39;s an example that adds a relationship between the collections <!> and <!>. A relationship attribute with the key <!> is added to the movies collection, and another relationship attribute with the key <!> is added to the reviews collection.",1),Tt=d("<!><!><!><!><!><!><!><!><!>",1),At=d("<!><!>",1),jt=d("<!><!>",1),Yt=d("If a collection has relationship attributes, you can create documents in two ways. You create both parent and child at the same time using a <!> syntax or link parent and child documents through <!>*.",1),Gt=d("You can create both the <!> and <!> at once in a relationship by nesting data.",1),Nt=d("<!><!><!><!>",1),Jt=d("If a nested child document is included and <!> is provided, the child document will be given a unique ID.",1),St=d("If a nested child document is included and <!> exists, the child document will be <!>.",1),qt=d("If a nested child document is included and the <!>, the child document will be <!>.",1),Wt=d("<!><!><!>",1),Mt=d("<!><!><!><!>",1),Bt=d("If the child documents are already present in the related collection, you can create the parent and <!> using their IDs. Here&#39;s an example connecting reviews to a movie.",1),Vt=d("<!><!><!><!>",1),Lt=d("<!><!>",1),Kt=d("<!><!>",1),Ht=d("<!><!><!><!>",1),Ft=d("If you need to unlink documents in a relationship but retain the documents, you can do this by <!> and removing the ID of the related document.",1),Qt=d("If a document can be related to <!>, you can delete the relationship by setting the relationship attribute to <!>.",1),Ut=d("If a document can be related to <!>, you can delete the relationship by setting the relationship attribute to an empty list.",1),zt=d("If you need to delete the documents as well as unlink the relationship, the approach depends on the <!> of a relationship.",1),Xt=d("If the on-delete behavior is <!>, the link between the documents needs to be deleted first before the documents can be deleted <!>.",1),Zt=d("If the on-delete behavior is <!>, deleting a document will leave related documents in place with their relationship attribute <!>. If you wish to also delete related documents, they must be deleted <!>.",1),en=d("If the on-delete behavior is <!>, deleting the parent documents also deletes <!>, except for many-to-one relationships. In many-to-one relationships, there are multiple parent documents related to a single child document, and when the child document is deleted, the parents are deleted in cascade.",1),tn=d("<!><!><!><!>",1),nn=d("When creating both the parent and child documents, the child document will <!> from its parent.",1),an=d("You can also provide explicit permissions to the child document if they should be <!>.",1),on=d("<!><!><!><!>",1),rn=d("Relationships can be nested between collections, but are restricted to a <!>. Relationship attribute key, type, and directionality can&#39;t be updated. On-delete behavior is the only option that can be updated for relationship attributes.",1),sn=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function On(Qe){nt(Qe,et(at,{children:(Ue,ln)=>{var H=sn(),X=Xe(H);x(X,{children:(r,m)=>{t();var o=a("Relationships describe how documents in different collections are associated, so that related documents can be read, updated, or deleted together. Entities in real-life often associate with each other in an organic and logical way, like a person and their dog, an album and its songs, or friends in a social network.");e(r,o)},$$slots:{default:!0}});var Z=n(X);x(Z,{children:(r,m)=>{t();var o=a("These types of association between entities can be modeled in Backrush using relationships.");e(r,o)},$$slots:{default:!0}});var ee=n(Z);tt(ee,{title:"Experimental feature",children:(r,m)=>{x(r,{children:(o,c)=>{t();var _=a("Backrush Relationships is an experimental feature. The API and behavior are subject to change in future versions.");e(o,_)},$$slots:{default:!0}})}});var te=n(ee);G(te,{id:"relationship-attributes",level:1,children:(r,m)=>{t();var o=a("Relationship Attributes");e(r,o)},$$slots:{default:!0}});var ne=n(te);x(ne,{children:(r,m)=>{t();var o=ot(),c=n(u(o));E(c,{marker:"**",children:(v,w)=>{t();var s=a("relationship attributes");e(v,s)},$$slots:{default:!0}});var _=n(c,2);E(_,{marker:"**",children:(v,w)=>{t();var s=a("null");e(v,s)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var ae=n(ne);G(ae,{id:"when-to-use-relationships",level:1,children:(r,m)=>{t();var o=a("When to use a relationship");e(r,o)},$$slots:{default:!0}});var oe=n(ae);x(oe,{children:(r,m)=>{t();var o=a("Relationships help reduce redundant information. For example, a user can create many posts in your app. You can model this without relationships by keeping a copy of the user's information in all the documents representing posts, but this creates a lot of duplicate information in your database about the user.");e(r,o)},$$slots:{default:!0}});var re=n(oe);G(re,{id:"benefit-of-relationships",level:1,children:(r,m)=>{t();var o=a("Benefits of relationships");e(r,o)},$$slots:{default:!0}});var se=n(re);x(se,{children:(r,m)=>{t();var o=a("Duplicated records waste storage, but more importantly, makes the database much harder to maintain. If the user changes their user name, you will have to update dozens or hundreds of records, a problem commonly known as an update anomaly in databases. You can avoid duplicate information by storing users and posts in separate collections and relating a user and their posts through a relationship.");e(r,o)},$$slots:{default:!0}});var ie=n(se);G(ie,{id:"trade-offs",level:1,children:(r,m)=>{t();var o=a("Tradeoff");e(r,o)},$$slots:{default:!0}});var le=n(ie);x(le,{children:(r,m)=>{t();var o=a("Consider using relationships when the same information is found in multiple places to avoid duplicates. However, relationships come with the tradeoff of slowing down queries. For applications where the best read and write performance is important, it may be acceptable to tolerate duplicate data.");e(r,o)},$$slots:{default:!0}});var de=n(le);G(de,{id:"directionality",level:1,children:(r,m)=>{t();var o=a("Directionality");e(r,o)},$$slots:{default:!0}});var ce=n(de);x(ce,{children:(r,m)=>{t();var o=a("Backrush relationships can be one-way or two-way.");e(r,o)},$$slots:{default:!0}});var pe=n(ce);Q(pe,{children:(r,m)=>{var o=dt(),c=u(o);U(c,{children:(v,w)=>{N(v,{children:(s,D)=>{var h=rt(),C=u(h);M(C,{children:($,f)=>{t();var i=a("Type");e($,i)},$$slots:{default:!0}});var T=n(C);M(T,{children:($,f)=>{t();var i=a("Description");e($,i)},$$slots:{default:!0}}),e(s,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=n(c);z(_,{children:(v,w)=>{var s=lt(),D=u(s);N(D,{children:(C,T)=>{var $=st(),f=u($);Y(f,{children:(I,b)=>{t();var p=a("One-way");e(I,p)},$$slots:{default:!0}});var i=n(f);Y(i,{children:(I,b)=>{t();var p=a("The relationship is only visible to one side of the relation. This is similar to a tree data structure.");e(I,p)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}});var h=n(D);N(h,{children:(C,T)=>{var $=it(),f=u($);Y(f,{children:(I,b)=>{t();var p=a("Two-way");e(I,p)},$$slots:{default:!0}});var i=n(f);Y(i,{children:(I,b)=>{t();var p=a("The relationship is visible to both sides of the relationship. This is similar to a graph data structure.");e(I,p)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var ue=n(pe);G(ue,{id:"types",level:1,children:(r,m)=>{t();var o=a("Types");e(r,o)},$$slots:{default:!0}});var ve=n(ue);x(ve,{children:(r,m)=>{t();var o=a("Backrush provides four different relationship types to enforce different associative rules between documents.");e(r,o)},$$slots:{default:!0}});var $e=n(ve);Q($e,{children:(r,m)=>{var o=ht(),c=u(o);U(c,{children:(v,w)=>{N(v,{children:(s,D)=>{var h=ct(),C=u(h);M(C,{children:($,f)=>{t();var i=a("Type");e($,i)},$$slots:{default:!0}});var T=n(C);M(T,{children:($,f)=>{t();var i=a("Description");e($,i)},$$slots:{default:!0}}),e(s,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=n(c);z(_,{children:(v,w)=>{var s=mt(),D=u(s);N(D,{children:($,f)=>{var i=pt(),I=u(i);Y(I,{children:(p,P)=>{t();var l=a("One-to-one");e(p,l)},$$slots:{default:!0}});var b=n(I);Y(b,{children:(p,P)=>{t();var l=a("A document can only be related to one and only one document.");e(p,l)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}});var h=n(D);N(h,{children:($,f)=>{var i=ut(),I=u(i);Y(I,{children:(p,P)=>{t();var l=a("One-to-many");e(p,l)},$$slots:{default:!0}});var b=n(I);Y(b,{children:(p,P)=>{t();var l=a("A document can be related to many other documents.");e(p,l)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}});var C=n(h);N(C,{children:($,f)=>{var i=vt(),I=u(i);Y(I,{children:(p,P)=>{t();var l=a("Many-to-one");e(p,l)},$$slots:{default:!0}});var b=n(I);Y(b,{children:(p,P)=>{t();var l=a("Many documents can be related to a single document.");e(p,l)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}});var T=n(C);N(T,{children:($,f)=>{var i=$t(),I=u(i);Y(I,{children:(p,P)=>{t();var l=a("Many-to-many");e(p,l)},$$slots:{default:!0}});var b=n(I);Y(b,{children:(p,P)=>{t();var l=a("A document can be related to many other documents.");e(p,l)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var me=n($e);G(me,{id:"on-delete",level:1,children:(r,m)=>{t();var o=a("On-delete");e(r,o)},$$slots:{default:!0}});var he=n(me);x(he,{children:(r,m)=>{t();var o=a("Backrush also allows you to define the behavior of a relationship when a document is deleted.");e(r,o)},$$slots:{default:!0}});var _e=n(he);Q(_e,{children:(r,m)=>{var o=Dt(),c=u(o);U(c,{children:(v,w)=>{N(v,{children:(s,D)=>{var h=_t(),C=u(h);M(C,{children:($,f)=>{t();var i=a("Type");e($,i)},$$slots:{default:!0}});var T=n(C);M(T,{children:($,f)=>{t();var i=a("Description");e($,i)},$$slots:{default:!0}}),e(s,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=n(c);z(_,{children:(v,w)=>{var s=ft(),D=u(s);N(D,{children:(T,$)=>{var f=It(),i=u(f);Y(i,{children:(b,p)=>{t();var P=a("Restrict");e(b,P)},$$slots:{default:!0}});var I=n(i);Y(I,{children:(b,p)=>{t();var P=a("If a document has at least one related document, it cannot be deleted.");e(b,P)},$$slots:{default:!0}}),e(T,f)},$$slots:{default:!0}});var h=n(D);N(h,{children:(T,$)=>{var f=wt(),i=u(f);Y(i,{children:(b,p)=>{t();var P=a("Cascade");e(b,P)},$$slots:{default:!0}});var I=n(i);Y(I,{children:(b,p)=>{t();var P=a("If a document has related documents, when it is deleted, the related documents are also deleted.");e(b,P)},$$slots:{default:!0}}),e(T,f)},$$slots:{default:!0}});var C=n(h);N(C,{children:(T,$)=>{var f=bt(),i=u(f);Y(i,{children:(b,p)=>{t();var P=a("Set null");e(b,P)},$$slots:{default:!0}});var I=n(i);Y(I,{children:(b,p)=>{t();var P=a("If a document has related documents, when it is deleted, the related documents are kept with their relationship attribute set to null.");e(b,P)},$$slots:{default:!0}}),e(T,f)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var Ie=n(_e);G(Ie,{id:"create-relationships",level:1,children:(r,m)=>{t();var o=a("Creating relationships");e(r,o)},$$slots:{default:!0}});var we=n(Ie);x(we,{children:(r,m)=>{t();var o=Pt(),c=n(u(o));K(c,{href:"/docs/sdks#server",children:(_,v)=>{t();var w=a("Server SDK");e(_,w)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var be=n(we);He(be,{children:(r,m)=>{var o=jt(),c=u(o);L(c,{id:"console",title:"Console",children:(v,w)=>{var s=Ot(),D=u(s);x(D,{children:(C,T)=>{t();var $=a("You can create relationships in the Backrush Console by adding a relationship attribute to a collection.");e(C,$)},$$slots:{default:!0}});var h=n(D);Fe(h,{ordered:!0,marker:".",children:(C,T)=>{var $=xt(),f=u($);q(f,{children:(l,A)=>{t();var R=yt(),y=n(u(R));E(y,{marker:"**",children:(J,V)=>{t();var S=a("Databases");e(J,S)},$$slots:{default:!0}});var k=n(y,2);E(k,{marker:"**",children:(J,V)=>{t();var S=a("Select your database");e(J,S)},$$slots:{default:!0}});var g=n(k,2);E(g,{marker:"**",children:(J,V)=>{t();var S=a("Select your collection");e(J,S)},$$slots:{default:!0}});var j=n(g,2);E(j,{marker:"**",children:(J,V)=>{t();var S=a("Attributes");e(J,S)},$$slots:{default:!0}});var B=n(j,2);E(B,{marker:"**",children:(J,V)=>{t();var S=a("Create attribute");e(J,S)},$$slots:{default:!0}}),t(),e(l,R)},$$slots:{default:!0}});var i=n(f);q(i,{children:(l,A)=>{t();var R=Et(),y=n(u(R));E(y,{marker:"**",children:(k,g)=>{t();var j=a("Relationship");e(k,j)},$$slots:{default:!0}}),t(),e(l,R)},$$slots:{default:!0}});var I=n(i);q(I,{children:(l,A)=>{t();var R=Rt(),y=n(u(R));E(y,{marker:"**",children:(g,j)=>{t();var B=a("Relationship");e(g,B)},$$slots:{default:!0}});var k=n(y,2);K(k,{href:"#types",children:(g,j)=>{t();var B=a("relationship type");e(g,B)},$$slots:{default:!0}}),t(),e(l,R)},$$slots:{default:!0}});var b=n(I);q(b,{children:(l,A)=>{t();var R=a("Pick relationship attribute key(s) to represent the related collection. Relationship attribute keys are used to reference the related collection in queries, so pick something that's intuitive and easy to remember.");e(l,R)},$$slots:{default:!0}});var p=n(b);q(p,{children:(l,A)=>{t();var R=gt(),y=n(u(R));K(y,{href:"#on-delete",children:(k,g)=>{t();var j=a("on delete");e(k,j)},$$slots:{default:!0}}),t(),e(l,R)},$$slots:{default:!0}});var P=n(p);q(P,{children:(l,A)=>{t();var R=Ct(),y=n(u(R));E(y,{marker:"**",children:(k,g)=>{t();var j=a("Create");e(k,j)},$$slots:{default:!0}}),t(),e(l,R)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}});var _=n(c);L(_,{id:"sdk",title:"SDK",children:(v,w)=>{var s=At(),D=u(s);x(D,{children:(C,T)=>{t();var $=kt(),f=n(u($));E(f,{marker:"**",children:(p,P)=>{t();var l=a("movies");e(p,l)},$$slots:{default:!0}});var i=n(f,2);E(i,{marker:"**",children:(p,P)=>{t();var l=a("reviews");e(p,l)},$$slots:{default:!0}});var I=n(i,2);F(I,{content:"reviews"});var b=n(I,2);F(b,{content:"movie"}),t(),e(C,$)},$$slots:{default:!0}});var h=n(D);W(h,{children:(C,T)=>{var $=Tt(),f=u($);O(f,{content:`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

databases.createRelationshipAttribute(
    'marvel',     // Database ID
    'movies',     // Collection ID
    'reviews',    // Related collection ID
    'oneToMany',  // Relationship type
    true,         // Is two-way
    'reviews',    // Attribute key 
    'movie',      // Two-way attribute key
    'cascade'     // On delete action
);
`,language:"js",process:!0,children:(y,k)=>{t();var g=a(`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

databases.createRelationshipAttribute(
    'marvel',     // Database ID
    'movies',     // Collection ID
    'reviews',    // Related collection ID
    'oneToMany',  // Relationship type
    true,         // Is two-way
    'reviews',    // Attribute key 
    'movie',      // Two-way attribute key
    'cascade'     // On delete action
);`);e(y,g)},$$slots:{default:!0}});var i=n(f);O(i,{content:`use \\Backrush\\Client;
use \\Backrush\\Services\\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');               // Your project ID

$databases = new Databases($client);

$databases->createRelationshipAttribute(
    databaseId: 'marvel',           // Database ID
    collectionId: 'movies',         // Collection ID
    relatedCollectionId: 'reviews', // Related collection ID
    type: 'oneToMany',              // Relationship type
    twoWay: true,                   // Is two-way
    key: 'reviews',                 // Attribute key 
    twoWayKey: 'movie',             // Two-way attribute key
    onDelete: 'cascade'             // On delete action
);
`,language:"php",process:!0,children:(y,k)=>{t();var g=a(`use \\Backrush\\Client;
use \\Backrush\\Services\\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');               // Your project ID

$databases = new Databases($client);

$databases->createRelationshipAttribute(
    databaseId: 'marvel',           // Database ID
    collectionId: 'movies',         // Collection ID
    relatedCollectionId: 'reviews', // Related collection ID
    type: 'oneToMany',              // Relationship type
    twoWay: true,                   // Is two-way
    key: 'reviews',                 // Attribute key 
    twoWayKey: 'movie',             // Two-way attribute key
    onDelete: 'cascade'             // On delete action
);`);e(y,g)},$$slots:{default:!0}});var I=n(i);O(I,{content:`from appwrite.client import Client
from appwrite.services.databases import Databases

client = (Client()
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')     # Your API Endpoint
    .set_project('<PROJECT_ID>'))                   # Your project ID

databases = Databases(client)

databases.create_relationship_attribute(
    database_id='marvel',             # Database ID
    collection_id='movies',           # Collection ID
    related_collection_id='reviews',  # Related collection ID
    type='oneToMany',                 # Relationship type
    two_way=True,                     # Is two-way
    key='reviews',                    # Attribute key 
    two_way_key='movie',              # Two-way attribute key
    on_delete='cascade'               # On delete action
)
`,language:"python",process:!0,children:(y,k)=>{t();var g=a(`from appwrite.client import Client
from appwrite.services.databases import Databases

client = (Client()
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')     # Your API Endpoint
    .set_project('<PROJECT_ID>'))                   # Your project ID

databases = Databases(client)

databases.create_relationship_attribute(
    database_id='marvel',             # Database ID
    collection_id='movies',           # Collection ID
    related_collection_id='reviews',  # Related collection ID
    type='oneToMany',                 # Relationship type
    two_way=True,                     # Is two-way
    key='reviews',                    # Attribute key 
    two_way_key='movie',              # Two-way attribute key
    on_delete='cascade'               # On delete action
)`);e(y,g)},$$slots:{default:!0}});var b=n(I);O(b,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')# Your API Endpoint
    .set_project('<PROJECT_ID>')               # Your project ID

databases = Databases.new(client)

databases.create_relationship_attribute(
    database_id: 'marvel',             # Database ID
    collection_id: 'movies',           # Collection ID
    related_collection_id: 'reviews',  # Related collection ID
    type: 'oneToMany',                 # Relationship type
    two_way: true,                     # Is two-way
    key: 'reviews',                    # Attribute key 
    two_way_key: 'movie',              # Two-way attribute key
    on_delete: 'cascade'               # On delete action
)
`,language:"ruby",process:!0,children:(y,k)=>{t();var g=a(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')# Your API Endpoint
    .set_project('<PROJECT_ID>')               # Your project ID

databases = Databases.new(client)

databases.create_relationship_attribute(
    database_id: 'marvel',             # Database ID
    collection_id: 'movies',           # Collection ID
    related_collection_id: 'reviews',  # Related collection ID
    type: 'oneToMany',                 # Relationship type
    two_way: true,                     # Is two-way
    key: 'reviews',                    # Attribute key 
    two_way_key: 'movie',              # Two-way attribute key
    on_delete: 'cascade'               # On delete action
)`);e(y,g)},$$slots:{default:!0}});var p=n(b);O(p,{content:`import { Client, Databases } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>");               // Your project ID

const databases = new Databases(client);

databases.createRelationshipAttribute(
    "marvel",    // Database ID         
    "movies",    // Collection ID           
    "reviews",   // Related collection ID       
    "oneToMany", // Relationship type           
    true,        // Is two-way          
    "reviews",   // Attribute key           
    "movie",     // Two-way attribute key           
    "cascade"    // On delete action            
);
`,language:"deno",process:!0,children:(y,k)=>{t();var g=a(`import { Client, Databases } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>");               // Your project ID

const databases = new Databases(client);

databases.createRelationshipAttribute(
    "marvel",    // Database ID         
    "movies",    // Collection ID           
    "reviews",   // Related collection ID       
    "oneToMany", // Relationship type           
    true,        // Is two-way          
    "reviews",   // Attribute key           
    "movie",     // Two-way attribute key           
    "cascade"    // On delete action            
);`);e(y,g)},$$slots:{default:!0}});var P=n(p);O(P,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final databases = Databases(client);

await databases.createRelationshipAttribute(
    databaseId: 'marvel',           // Database ID                     
    collectionId: 'movies',         // Collection ID                        
    relatedCollectionId: 'reviews', // Related collection ID                    
    type: 'oneToMany',              // Relationship type            
    twoWay: true,                   // Is two-way               
    key: 'reviews',                 // Attribute key                    
    twoWayKey: 'movie',             // Two-way attribute key            
    onDelete: 'cascade',            // On delete action                 
);
`,language:"dart",process:!0,children:(y,k)=>{t();var g=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final databases = Databases(client);

await databases.createRelationshipAttribute(
    databaseId: 'marvel',           // Database ID                     
    collectionId: 'movies',         // Collection ID                        
    relatedCollectionId: 'reviews', // Related collection ID                    
    type: 'oneToMany',              // Relationship type            
    twoWay: true,                   // Is two-way               
    key: 'reviews',                 // Attribute key                    
    twoWayKey: 'movie',             // Two-way attribute key            
    onDelete: 'cascade',            // On delete action                 
);`);e(y,g)},$$slots:{default:!0}});var l=n(P);O(l,{content:`import io.appwrite.Client
import io.appwrite.services.Databases

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val databases = Databases(client)

databases.createRelationshipAttribute(
    databaseId = "marvel",           // Database ID                 
    collectionId = "movies",         // Collection ID                      
    relatedCollectionId = "reviews", // Related collection ID               
    type = "oneToMany",              // Relationship type           
    twoWay = true,                   // Is two-way              
    key = "reviews",                 // Attribute key           
    twoWayKey = "movie",             // Two-way attribute key       
    onDelete = "cascade"             // On delete action        
)
`,language:"kotlin",process:!0,children:(y,k)=>{t();var g=a(`import io.appwrite.Client
import io.appwrite.services.Databases

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val databases = Databases(client)

databases.createRelationshipAttribute(
    databaseId = "marvel",           // Database ID                 
    collectionId = "movies",         // Collection ID                      
    relatedCollectionId = "reviews", // Related collection ID               
    type = "oneToMany",              // Relationship type           
    twoWay = true,                   // Is two-way              
    key = "reviews",                 // Attribute key           
    twoWayKey = "movie",             // Two-way attribute key       
    onDelete = "cascade"             // On delete action        
)`);e(y,g)},$$slots:{default:!0}});var A=n(l);O(A,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let databases = Databases(client)

databases.createRelationshipAttribute(
    databaseId: "marvel",           // Database ID              
    collectionId: "movies",         // Collection ID            
    relatedCollectionId: "reviews", // Related collection ID    
    type: "oneToMany",              // Relationship type        
    twoWay: true,                   // Is two-way               
    key: "reviews",                 // Attribute key            
    twoWayKey: "movie",             // Two-way attribute key        
    onDelete

: "cascade"             // On delete action         
)
`,language:"swift",process:!0,children:(y,k)=>{t();var g=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let databases = Databases(client)

databases.createRelationshipAttribute(
    databaseId: "marvel",           // Database ID              
    collectionId: "movies",         // Collection ID            
    relatedCollectionId: "reviews", // Related collection ID    
    type: "oneToMany",              // Relationship type        
    twoWay: true,                   // Is two-way               
    key: "reviews",                 // Attribute key            
    twoWayKey: "movie",             // Two-way attribute key        
    onDelete

: "cascade"             // On delete action         
)`);e(y,g)},$$slots:{default:!0}});var R=n(A);O(R,{content:`using Backrush;
using Backrush.Services;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .SetProject("<PROJECT_ID>");

var databases = new Databases(client);

await databases.CreateRelationshipAttribute(
    databaseId: "marvel",
    collectionId: "movies",
    relatedCollectionId: "reviews",
    type: "oneToMany",
    twoWay: true,
    key: "reviews",
    twoWayKey: "movie",
    onDelete: "cascade");
`,language:"csharp",process:!0,children:(y,k)=>{t();var g=a(`using Backrush;
using Backrush.Services;

var client = new Client()
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .SetProject("<PROJECT_ID>");

var databases = new Databases(client);

await databases.CreateRelationshipAttribute(
    databaseId: "marvel",
    collectionId: "movies",
    relatedCollectionId: "reviews",
    type: "oneToMany",
    twoWay: true,
    key: "reviews",
    twoWayKey: "movie",
    onDelete: "cascade");`);e(y,g)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var fe=n(be);G(fe,{id:"create-documents",level:1,children:(r,m)=>{t();var o=a("Creating documents");e(r,o)},$$slots:{default:!0}});var De=n(fe);x(De,{children:(r,m)=>{t();var o=Yt(),c=n(u(o));E(c,{marker:"**",children:(v,w)=>{t();var s=a("nested");e(v,s)},$$slots:{default:!0}});var _=n(c,2);E(_,{marker:"**",children:(v,w)=>{t();var s=a("references");e(v,s)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Pe=n(De);He(Pe,{children:(r,m)=>{var o=Kt(),c=u(o);L(c,{id:"nested",title:"Nested",children:(v,w)=>{var s=Mt(),D=u(s);x(D,{children:($,f)=>{t();var i=Gt(),I=n(u(i));E(I,{marker:"**",children:(p,P)=>{t();var l=a("parent");e(p,l)},$$slots:{default:!0}});var b=n(I,2);E(b,{marker:"**",children:(p,P)=>{t();var l=a("child");e(p,l)},$$slots:{default:!0}}),t(),e($,i)},$$slots:{default:!0}});var h=n(D);W(h,{children:($,f)=>{var i=Nt(),I=u(i);O(I,{content:`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            { author: 'Bob', text: 'Great movie!' },
            { author: 'Alice', text: 'Loved it!' }
        ]
    }
)
`,language:"js",process:!0,children:(l,A)=>{t();var R=a(`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            { author: 'Bob', text: 'Great movie!' },
            { author: 'Alice', text: 'Loved it!' }
        ]
    }
)`);e(l,R)},$$slots:{default:!0}});var b=n(I);O(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
      { 'author': 'Bob', 'text': 'Great movie!' },
      { 'author': 'Alice', 'text': 'Loved it!' }
    ]
  },
)
`,language:"dart",process:!0,children:(l,A)=>{t();var R=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
      { 'author': 'Bob', 'text': 'Great movie!' },
      { 'author': 'Alice', 'text': 'Loved it!' }
    ]
  },
)`);e(l,R)},$$slots:{default:!0}});var p=n(b);O(p,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ "author": "Bob", "text": "Great movie!" ],
            [ "author": "Alice", "text": "Loved it!" ]
        ]
    ]
)
`,language:"swift",process:!0,children:(l,A)=>{t();var R=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ "author": "Bob", "text": "Great movie!" ],
            [ "author": "Alice", "text": "Loved it!" ]
        ]
    ]
)`);e(l,R)},$$slots:{default:!0}});var P=n(p);O(P,{content:`import io.appwrite.Client
import io.appwrite.services.Database
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val databases = Database(client)

databases.createDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            mapOf("author" to "Bob", "text" to "Great movie!"),
            mapOf("author" to "Alice", "text" to "Loved it!")
        )
    )
)
`,language:"kotlin",process:!0,children:(l,A)=>{t();var R=a(`import io.appwrite.Client
import io.appwrite.services.Database
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

val databases = Database(client)

databases.createDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            mapOf("author" to "Bob", "text" to "Great movie!"),
            mapOf("author" to "Alice", "text" to "Loved it!")
        )
    )
)`);e(l,R)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}});var C=n(h);G(C,{id:"edge-case-behaviors",level:2,children:($,f)=>{t();var i=a("Edge case behaviors");e($,i)},$$slots:{default:!0}});var T=n(C);Fe(T,{ordered:!1,marker:"-",children:($,f)=>{var i=Wt(),I=u(i);q(I,{children:(P,l)=>{t();var A=Jt(),R=n(u(A));E(R,{marker:"**",children:(y,k)=>{t();var g=a("no child document ID");e(y,g)},$$slots:{default:!0}}),t(),e(P,A)},$$slots:{default:!0}});var b=n(I);q(b,{children:(P,l)=>{t();var A=St(),R=n(u(A));E(R,{marker:"**",children:(k,g)=>{t();var j=a("no conflicting child document ID");e(k,j)},$$slots:{default:!0}});var y=n(R,2);E(y,{marker:"**",children:(k,g)=>{t();var j=a("created");e(k,j)},$$slots:{default:!0}}),t(),e(P,A)},$$slots:{default:!0}});var p=n(b);q(p,{children:(P,l)=>{t();var A=qt(),R=n(u(A));E(R,{marker:"**",children:(k,g)=>{t();var j=a("child document ID already exists");e(k,j)},$$slots:{default:!0}});var y=n(R,2);E(y,{marker:"**",children:(k,g)=>{t();var j=a("updated");e(k,j)},$$slots:{default:!0}}),t(),e(P,A)},$$slots:{default:!0}}),e($,i)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}});var _=n(c);L(_,{id:"reference",title:"Reference",children:(v,w)=>{var s=Lt(),D=u(s);x(D,{children:(C,T)=>{t();var $=Bt(),f=n(u($));E(f,{marker:"**",children:(i,I)=>{t();var b=a("reference the child documents");e(i,b)},$$slots:{default:!0}}),t(),e(C,$)},$$slots:{default:!0}});var h=n(D);W(h,{children:(C,T)=>{var $=Vt(),f=u($);O(f,{content:`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            '<REVIEW_ID_1>',
            '<REVIEW_ID_2>'
        ]
    }
)
`,language:"js",process:!0,children:(p,P)=>{t();var l=a(`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            '<REVIEW_ID_1>',
            '<REVIEW_ID_2>'
        ]
    }
)`);e(p,l)},$$slots:{default:!0}});var i=n(f);O(i,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint    
    .setProject('<PROJECT_ID>');               // Your project ID  

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
        '<REVIEW_ID_1>',
        '<REVIEW_ID_2>'
    ]
  },
)
`,language:"dart",process:!0,children:(p,P)=>{t();var l=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint    
    .setProject('<PROJECT_ID>');               // Your project ID  

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
        '<REVIEW_ID_1>',
        '<REVIEW_ID_2>'
    ]
  },
)`);e(p,l)},$$slots:{default:!0}});var I=n(i);O(I,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint        
    .setProject("<PROJECT_ID>")                // Your project ID      

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            "<REVIEW_ID_1>",
            "<REVIEW_ID_2>"
        ]
    ]
)
`,language:"swift",process:!0,children:(p,P)=>{t();var l=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint        
    .setProject("<PROJECT_ID>")                // Your project ID      

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            "<REVIEW_ID_1>",
            "<REVIEW_ID_2>"
        ]
    ]
)`);e(p,l)},$$slots:{default:!0}});var b=n(I);O(b,{content:`import io.appwrite.Client
import io.appwrite.services.Database
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint    
    .setProject("<PROJECT_ID>")                // Your project ID  

val databases = Database(client)

databases.createDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            "<REVIEW_ID_1>",
            "<REVIEW_ID_2>"
        )
    )
)
`,language:"kotlin",process:!0,children:(p,P)=>{t();var l=a(`import io.appwrite.Client
import io.appwrite.services.Database
import io.appwrite.ID

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint    
    .setProject("<PROJECT_ID>")                // Your project ID  

val databases = Database(client)

databases.createDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = ID.unique(),
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            "<REVIEW_ID_1>",
            "<REVIEW_ID_2>"
        )
    )
)`);e(p,l)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}}),e(v,s)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var ye=n(Pe);G(ye,{id:"queries",level:1,children:(r,m)=>{t();var o=a("Queries");e(r,o)},$$slots:{default:!0}});var Ee=n(ye);x(Ee,{children:(r,m)=>{t();var o=a("Queries are currently not available in the experimental version of Backrush Relationships but will be added in a later version.");e(r,o)},$$slots:{default:!0}});var Re=n(Ee);G(Re,{id:"update",level:1,children:(r,m)=>{t();var o=a("Update Relationships");e(r,o)},$$slots:{default:!0}});var ge=n(Re);x(ge,{children:(r,m)=>{t();var o=a("Relationships can be updated by updating the relationship attribute.");e(r,o)},$$slots:{default:!0}});var Ce=n(ge);W(Ce,{children:(r,m)=>{var o=Ht(),c=u(o);O(c,{content:`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.updateDocument(
    'marvel',
    'movies',
    'spiderman',
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            'review4',
            'review5'
        ]
    }
);
`,language:"js",process:!0,children:(s,D)=>{t();var h=a(`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.updateDocument(
    'marvel',
    'movies',
    'spiderman',
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            'review4',
            'review5'
        ]
    }
);`);e(s,h)},$$slots:{default:!0}});var _=n(c);O(_,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.updateDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: 'spiderman',
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
        'review4',
        'review5'
    ]
  },
);
`,language:"dart",process:!0,children:(s,D)=>{t();var h=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.updateDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: 'spiderman',
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
        'review4',
        'review5'
    ]
  },
);`);e(s,h)},$$slots:{default:!0}});var v=n(_);O(v,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.updateDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: "spiderman",
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            "review4",
            "review5"
        ]
    ]
)
`,language:"swift",process:!0,children:(s,D)=>{t();var h=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.updateDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: "spiderman",
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            "review4",
            "review5"
        ]
    ]
)`);e(s,h)},$$slots:{default:!0}});var w=n(v);O(w,{content:`import io.appwrite.Client
import io.appwrite.services.Database

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Database(client)

databases.updateDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = "spiderman",
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            "review4",
            "review5"
        )
    )
)
`,language:"kotlin",process:!0,children:(s,D)=>{t();var h=a(`import io.appwrite.Client
import io.appwrite.services.Database

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Database(client)

databases.updateDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = "spiderman",
    data = mapOf(
        "title" to "Spiderman",
        "year" to 2002,
        "reviews" to listOf(
            "review4",
            "review5"
        )
    )
)`);e(s,h)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var xe=n(Ce);G(xe,{id:"delete",level:1,children:(r,m)=>{t();var o=a("Delete relationships");e(r,o)},$$slots:{default:!0}});var Oe=n(xe);G(Oe,{id:"unlink",level:2,children:(r,m)=>{t();var o=a("Unlink relationships, retain documents");e(r,o)},$$slots:{default:!0}});var ke=n(Oe);x(ke,{children:(r,m)=>{t();var o=Ft(),c=n(u(o));E(c,{marker:"**",children:(_,v)=>{t();var w=a("updating the relationship attribute");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Te=n(ke);x(Te,{children:(r,m)=>{t();var o=Qt(),c=n(u(o));E(c,{marker:"**",children:(v,w)=>{t();var s=a("only one document");e(v,s)},$$slots:{default:!0}});var _=n(c,2);F(_,{content:"null"}),t(),e(r,o)},$$slots:{default:!0}});var Ae=n(Te);x(Ae,{children:(r,m)=>{t();var o=Ut(),c=n(u(o));E(c,{marker:"**",children:(_,v)=>{t();var w=a("more than one document");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var je=n(Ae);G(je,{id:"delete-both",level:2,children:(r,m)=>{t();var o=a("Delete relationships and documents");e(r,o)},$$slots:{default:!0}});var Ye=n(je);x(Ye,{children:(r,m)=>{t();var o=zt(),c=n(u(o));K(c,{href:"#on-delete",children:(_,v)=>{t();var w=a("on-delete behavior");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Ge=n(Ye);x(Ge,{children:(r,m)=>{t();var o=Xt(),c=n(u(o));E(c,{marker:"**",children:(v,w)=>{t();var s=a("restrict");e(v,s)},$$slots:{default:!0}});var _=n(c,2);E(_,{marker:"**",children:(v,w)=>{t();var s=a("individually");e(v,s)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Ne=n(Ge);x(Ne,{children:(r,m)=>{t();var o=Zt(),c=n(u(o));E(c,{marker:"**",children:(w,s)=>{t();var D=a("set null");e(w,D)},$$slots:{default:!0}});var _=n(c,2);E(_,{marker:"**",children:(w,s)=>{t();var D=a("set to null");e(w,D)},$$slots:{default:!0}});var v=n(_,2);E(v,{marker:"**",children:(w,s)=>{t();var D=a("individually");e(w,D)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Je=n(Ne);x(Je,{children:(r,m)=>{t();var o=en(),c=n(u(o));E(c,{marker:"**",children:(v,w)=>{t();var s=a("cascade");e(v,s)},$$slots:{default:!0}});var _=n(c,2);E(_,{marker:"**",children:(v,w)=>{t();var s=a("related child documents");e(v,s)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Se=n(Je);W(Se,{children:(r,m)=>{var o=tn(),c=u(o);O(c,{content:`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.deleteDocument(
    'marvel',
    'movies',
    'spiderman'
);
`,language:"js",process:!0,children:(s,D)=>{t();var h=a(`const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.deleteDocument(
    'marvel',
    'movies',
    'spiderman'
);`);e(s,h)},$$slots:{default:!0}});var _=n(c);O(_,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.deleteDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: 'spiderman'
);
`,language:"dart",process:!0,children:(s,D)=>{t();var h=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.deleteDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: 'spiderman'
);`);e(s,h)},$$slots:{default:!0}});var v=n(_);O(v,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.deleteDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: "spiderman"
)
`,language:"swift",process:!0,children:(s,D)=>{t();var h=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.deleteDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: "spiderman"
)`);e(s,h)},$$slots:{default:!0}});var w=n(v);O(w,{content:`import io.appwrite.Client
import io.appwrite.services.Database

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Database(client)

databases.deleteDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = "spiderman"
)
`,language:"kotlin",process:!0,children:(s,D)=>{t();var h=a(`import io.appwrite.Client
import io.appwrite.services.Database

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val databases = Database(client)

databases.deleteDocument(
    databaseId = "marvel",
    collectionId = "movies",
    documentId = "spiderman"
)`);e(s,h)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var qe=n(Se);G(qe,{id:"permissions",level:1,children:(r,m)=>{t();var o=a("Permissions");e(r,o)},$$slots:{default:!0}});var We=n(qe);x(We,{children:(r,m)=>{t();var o=a("To access documents in a relationship, you must have permission to access both the parent and child documents.");e(r,o)},$$slots:{default:!0}});var Me=n(We);x(Me,{children:(r,m)=>{t();var o=nn(),c=n(u(o));E(c,{marker:"**",children:(_,v)=>{t();var w=a("inherit permissions");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Be=n(Me);x(Be,{children:(r,m)=>{t();var o=an(),c=n(u(o));E(c,{marker:"**",children:(_,v)=>{t();var w=a("different from their parent");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}});var Ve=n(Be);W(Ve,{children:(r,m)=>{var o=on(),c=u(o);O(c,{content:`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            { 
                author: 'Bob', 
                text: 'Great movie!',
                $permissions: [
                    Permission.read(Role.any())
                ]
            },
        ]
    }
);
`,language:"js",process:!0,children:(s,D)=>{t();var h=a(`const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [
            { 
                author: 'Bob', 
                text: 'Great movie!',
                $permissions: [
                    Permission.read(Role.any())
                ]
            },
        ]
    }
);`);e(s,h)},$$slots:{default:!0}});var _=n(c);O(_,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
      { 
         'author': 'Bob', 
         'text': 'Great movie!',
         '\\$permissions': [
           Permission.read(Role.any())
         ]
       },
    ]
  },
);
`,language:"dart",process:!0,children:(s,D)=>{t();var h=a(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final databases = Databases(client);

await databases.createDocument(
  databaseId: 'marvel',
  collectionId: 'movies',
  documentId: ID.unique(),
  data: {
    'title': 'Spiderman',
    'year': 2002,
    'reviews': [
      { 
         'author': 'Bob', 
         'text': 'Great movie!',
         '\\$permissions': [
           Permission.read(Role.any())
         ]
       },
    ]
  },
);`);e(s,h)},$$slots:{default:!0}});var v=n(_);O(v,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ 
                "author": "Bob",
                "text": "Great movie!",
                "$permissions": [
                    Permission.read(Role.any())
                ]
            ],
        ]
    ]
);
`,language:"swift",process:!0,children:(s,D)=>{t();var h=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ 
                "author": "Bob",
                "text": "Great movie!",
                "$permissions": [
                    Permission.read(Role.any())
                ]
            ],
        ]
    ]
);`);e(s,h)},$$slots:{default:!0}});var w=n(v);O(w,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ 
                "author": "Bob",
                "text": "Great movie!",
                "$permissions": [
                    Permission.read(Role.any())
                ]
            ],
        ]
    ]
);
`,language:"kotlin",process:!0,children:(s,D)=>{t();var h=a(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let databases = Database(client: client)

databases.createDocument(
    databaseId: "marvel",
    collectionId: "movies",
    documentId: ID.unique(),
    data: [
        "title": "Spiderman",
        "year": 2002,
        "reviews": [
            [ 
                "author": "Bob",
                "text": "Great movie!",
                "$permissions": [
                    Permission.read(Role.any())
                ]
            ],
        ]
    ]
);`);e(s,h)},$$slots:{default:!0}}),e(r,o)},$$slots:{default:!0}});var Le=n(Ve);x(Le,{children:(r,m)=>{t();var o=a("When creating, updating, or deleting in a relationship, you must have permission to access all documents referenced. If the user does not have read permission to any document, an exception will be thrown.");e(r,o)},$$slots:{default:!0}});var Ke=n(Le);G(Ke,{id:"limitations",level:1,children:(r,m)=>{t();var o=a("Limitations");e(r,o)},$$slots:{default:!0}});var ze=n(Ke);x(ze,{children:(r,m)=>{t();var o=rn(),c=n(u(o));E(c,{marker:"**",children:(_,v)=>{t();var w=a("max depth of three levels");e(_,w)},$$slots:{default:!0}}),t(),e(r,o)},$$slots:{default:!0}}),Ze(H),e(Ue,H)},$$slots:{default:!0}}))}export{On as component};
