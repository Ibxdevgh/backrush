import{t as b,b as s,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as fe,s as a,f as $e,n,r as ye}from"./NgVQVlRK.js";import{n as be}from"./B4IyMRKX.js";import{H as l}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as u}from"./CmUbQthf.js";import"./D9bBQFLV.js";/* empty css        */import{F as m}from"./OFUKRh55.js";import{L as we,I as y}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{L as v}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as _e}from"./CEkRzcqJ.js";const pe={layout:"post",title:"Simplify your data management with relationships",description:"Learn how to simplify your collection management and save time and effort with database relationships.",date:"2024-01-05T00:00:00.000Z",cover:"/images/blog/simplify-your-data-management-with-relationships/cover.png",timeToRead:6,author:"jake-barnby",category:"accessibility"};var ge=b("Overall, database relationships are a powerful tool that simplifies your collection management and saves you time and effort. By easily linking your collections and retrieving related data, you can focus on developing your application&#39;s core features. Check out the <!> for more information. We encourage you to give it a try today and see how it can benefit your development process.",1),Pe=b("<!><!><!>",1),xe=b("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Te(ue){_e(ue,be(pe,{children:(me,Ie)=>{var f=xe(),w=fe(f);i(w,{children:(e,r)=>{n();var t=s("Managing collections of data is an essential task for any application, but it can quickly become complex when you need to keep track of the relationships between different collections. For instance, if you have two collections of data, such as movies and reviews, you may need to retrieve all the reviews associated with a particular movie. However, writing complex code to retrieve this data and merge it together manually can be time-consuming and prone to errors.");o(e,t)},$$slots:{default:!0}});var _=a(w);i(_,{children:(e,r)=>{n();var t=s("That's where one of Backrush’s newest features comes in. Database relationships help you manage the links between your collections of data more easily. With this feature, you can create links between different collections by simply adding a new attribute to them. You can choose from four types of relationships: one-to-one, one-to-many, many-to-one, and many-to-many.");o(e,t)},$$slots:{default:!0}});var g=a(_);l(g,{level:1,children:(e,r)=>{n();var t=s("Relationship Types");o(e,t)},$$slots:{default:!0}});var P=a(g);l(P,{level:2,children:(e,r)=>{n();var t=s("One to One");o(e,t)},$$slots:{default:!0}});var x=a(P);i(x,{children:(e,r)=>{u(e,{src:"/images/blog/simplify-your-data-management-with-relationships/one-to-one.png",alt:"one to one"})},$$slots:{default:!0}});var T=a(x);i(T,{children:(e,r)=>{n();var t=s("A one-to-one relationship means that each record in one collection is associated with only one record in another collection. For example, if you have a collection of users and a collection of profiles, each user can have only one profile, and each profile can belong to only one user.");o(e,t)},$$slots:{default:!0}});var I=a(T);l(I,{level:2,children:(e,r)=>{n();var t=s("One to Many");o(e,t)},$$slots:{default:!0}});var A=a(I);i(A,{children:(e,r)=>{u(e,{src:"/images/blog/simplify-your-data-management-with-relationships/one-to-many.png",alt:"one to many"})},$$slots:{default:!0}});var k=a(A);i(k,{children:(e,r)=>{n();var t=s("A one-to-many relationship is when each record in one collection can be associated with multiple records in another collection. For instance, if you have a collection of artists and a collection of albums, each artist can have many albums released, but each album can only be released by one artist.");o(e,t)},$$slots:{default:!0}});var O=a(k);l(O,{level:2,children:(e,r)=>{n();var t=s("Many To One");o(e,t)},$$slots:{default:!0}});var F=a(O);i(F,{children:(e,r)=>{u(e,{src:"/images/blog/simplify-your-data-management-with-relationships/many-to-one.png",alt:"many to one"})},$$slots:{default:!0}});var S=a(F);i(S,{children:(e,r)=>{n();var t=s("In contrast, many-to-one relationships are when multiple records in one collection can be associated with a single record in another collection. Inversely to the previous example, if you have a collection of albums and a collection of artists, many albums can be released by a single artist. While this may seem the same as a one-to-many relationship, it differs once you take the direction into account. A many-to-one relationship that is one-way can be used to represent a relationship that is only seen on the many side.");o(e,t)},$$slots:{default:!0}});var G=a(S);l(G,{level:2,children:(e,r)=>{n();var t=s("Many to Many");o(e,t)},$$slots:{default:!0}});var j=a(G);i(j,{children:(e,r)=>{u(e,{src:"/images/blog/simplify-your-data-management-with-relationships/many-to-many.png",alt:"many to many"})},$$slots:{default:!0}});var M=a(j);i(M,{children:(e,r)=>{n();var t=s("Finally, many-to-many relationships describe a scenario where multiple records in one collection can be associated with multiple records in another collection. For example, if you have a collection of books and a collection of authors, each book can have multiple authors, and each author can write multiple books.");o(e,t)},$$slots:{default:!0}});var q=a(M);i(q,{children:(e,r)=>{n();var t=s("By understanding the differences between these relationship types, you can choose the best one that suits your application's needs and create a more efficient database management system.");o(e,t)},$$slots:{default:!0}});var B=a(q);l(B,{level:1,children:(e,r)=>{n();var t=s("Relationship Directions");o(e,t)},$$slots:{default:!0}});var D=a(B);i(D,{children:(e,r)=>{n();var t=s("Backrush relationships offer a high degree of flexibility and customization, allowing developers to create various scenarios with the available options. In addition to choosing from the four relationship types, developers can also decide whether the relationship should be one-way or two-way.");o(e,t)},$$slots:{default:!0}});var H=a(D);l(H,{level:2,children:(e,r)=>{n();var t=s("One Way");o(e,t)},$$slots:{default:!0}});var L=a(H);i(L,{children:(e,r)=>{n();var t=s("One-way relationships are a type of relationship where only the collection where the relationship attribute was created will see the relationship. For example, suppose a developer creates a one-way relationship between a movies collection and a reviews collection. In that case, the movies collection will have an attribute containing the related reviews, but the reviews collection will not have an attribute containing the related movie. This type of relationship is useful in scenarios where the parent collection holds all the necessary information, and the child collection only needs to access the parent's data.");o(e,t)},$$slots:{default:!0}});var W=a(L);i(W,{children:(e,r)=>{n();var t=s("The movie response:");o(e,t)},$$slots:{default:!0}});var R=a(W);m(R,{content:`{
    "$id": "642b9afc785532a807d8",
    "$databaseId": "marvel",
    "$collectionId": "movies",
    "$createdAt": "2023-04-04T03:35:24.493+00:00",
    "$updatedAt": "2023-04-04T03:35:24.493+00:00",
    "$permissions": [

    ],
    "title": "Spiderman",
    "reviews": [
        {
            "$id": "642b9d627d866e646602",
            "$databaseId": "marvel",
            "$collectionId" :"reviews",
            "$createdAt": "2023-04-04T03:45:38.514+00:00",
            "$updatedAt": "2023-04-04T03:45:38.514+00:00",
            "$permissions": [

            ],
            "content": "Great movie"
        }
    ]
}

`,language:"json",process:!0,children:(e,r)=>{n();var t=s(`{
    "$id": "642b9afc785532a807d8",
    "$databaseId": "marvel",
    "$collectionId": "movies",
    "$createdAt": "2023-04-04T03:35:24.493+00:00",
    "$updatedAt": "2023-04-04T03:35:24.493+00:00",
    "$permissions": [

    ],
    "title": "Spiderman",
    "reviews": [
        {
            "$id": "642b9d627d866e646602",
            "$databaseId": "marvel",
            "$collectionId" :"reviews",
            "$createdAt": "2023-04-04T03:45:38.514+00:00",
            "$updatedAt": "2023-04-04T03:45:38.514+00:00",
            "$permissions": [

            ],
            "content": "Great movie"
        }
    ]
}`);o(e,t)},$$slots:{default:!0}});var C=a(R);i(C,{children:(e,r)=>{n();var t=s("The review response, notably with no review attribute:");o(e,t)},$$slots:{default:!0}});var z=a(C);m(z,{content:`{
     "$id": "642b9d627d866e646602",
     "$databaseId": "marvel",
     "$collectionId": "reviews"
     "$createdAt": "2023-04-04T03:45:38.514+00:00",
     "$updatedAt": "2023-04-04T03:45:38.514+00:00",
     "$permissions": [],
     "content": "Great movie"
}

`,language:"json",process:!0,children:(e,r)=>{n();var t=s(`{
     "$id": "642b9d627d866e646602",
     "$databaseId": "marvel",
     "$collectionId": "reviews"
     "$createdAt": "2023-04-04T03:45:38.514+00:00",
     "$updatedAt": "2023-04-04T03:45:38.514+00:00",
     "$permissions": [],
     "content": "Great movie"
}`);o(e,t)},$$slots:{default:!0}});var E=a(z);l(E,{level:2,children:(e,r)=>{n();var t=s("Two Way");o(e,t)},$$slots:{default:!0}});var N=a(E);i(N,{children:(e,r)=>{n();var t=s("On the other hand, a two-way relationship is a type of relationship where both collections will see the relationship. In the same example, if a two-way relationship is created between the movies and reviews collections, both collections will have attributes containing the related data. This type of relationship is beneficial in scenarios where both the parent and child collections need to access each other's data.");o(e,t)},$$slots:{default:!0}});var Y=a(N);i(Y,{children:(e,r)=>{n();var t=s("The movie response:");o(e,t)},$$slots:{default:!0}});var Z=a(Y);m(Z,{content:`{
     "$id": "642b9afc785532a807d8",
     "$databaseId": "marvel",
     "$collectionId": "movies",
     "$createdAt": "2023-04-04T03:35:24.493+00:00",
     "$updatedAt": "2023-04-04T03:35:24.493+00:00",
     "$permissions": [],
     "title": "Spiderman",
     "reviews": [
          {
               "$id": "642b9d627d866e646602",
               "$databaseId": "marvel",
               "$collectionId": "reviews",
               "$createdAt": "2023-04-04T03:45:38.514+00:00",
               "$updatedAt": "2023-04-04T03:45:38.514+00:00",
               "$permissions": [],
               "content": "Great movie"
          }
     ]
}

`,language:"json",process:!0,children:(e,r)=>{n();var t=s(`{
     "$id": "642b9afc785532a807d8",
     "$databaseId": "marvel",
     "$collectionId": "movies",
     "$createdAt": "2023-04-04T03:35:24.493+00:00",
     "$updatedAt": "2023-04-04T03:35:24.493+00:00",
     "$permissions": [],
     "title": "Spiderman",
     "reviews": [
          {
               "$id": "642b9d627d866e646602",
               "$databaseId": "marvel",
               "$collectionId": "reviews",
               "$createdAt": "2023-04-04T03:45:38.514+00:00",
               "$updatedAt": "2023-04-04T03:45:38.514+00:00",
               "$permissions": [],
               "content": "Great movie"
          }
     ]
}`);o(e,t)},$$slots:{default:!0}});var J=a(Z);i(J,{children:(e,r)=>{n();var t=s("The review response, now with the movie attribute:");o(e,t)},$$slots:{default:!0}});var K=a(J);m(K,{content:`{
     "$id": "642b9d627d866e646602",
     "$databaseId": "marvel",
     "$collectionId": "reviews",
     "$createdAt": "2023-04-04T03:45:38.514+00:00",
     "$updatedAt": "2023-04-04T03:45:38.514+00:00",
     "$permissions": [],
     "content": "Great movie",
     "movie": {
          "$id": "642b9afc785532a807d8",
          "$databaseId": "marvel",
          "$collectionId": "movies",
          "$createdAt": "2023-04-04T03:35:24.493+00:00",
          "$updatedAt": "2023-04-04T03:35:24.493+00:00",
          "$permissions": [],
          "title": "Spiderman"
     }
}

`,language:"json",process:!0,children:(e,r)=>{n();var t=s(`{
     "$id": "642b9d627d866e646602",
     "$databaseId": "marvel",
     "$collectionId": "reviews",
     "$createdAt": "2023-04-04T03:45:38.514+00:00",
     "$updatedAt": "2023-04-04T03:45:38.514+00:00",
     "$permissions": [],
     "content": "Great movie",
     "movie": {
          "$id": "642b9afc785532a807d8",
          "$databaseId": "marvel",
          "$collectionId": "movies",
          "$createdAt": "2023-04-04T03:35:24.493+00:00",
          "$updatedAt": "2023-04-04T03:35:24.493+00:00",
          "$permissions": [],
          "title": "Spiderman"
     }
}`);o(e,t)},$$slots:{default:!0}});var Q=a(K);i(Q,{children:(e,r)=>{n();var t=s("One-way and two-way relationships offer different advantages and disadvantages, depending on the specific requirements of the application. In some cases, one-way relationships can provide better performance by reducing the amount of data that needs to be stored and accessed. However, two-way relationships can provide more flexibility by allowing both collections to access each other's data.");o(e,t)},$$slots:{default:!0}});var U=a(Q);l(U,{level:1,children:(e,r)=>{n();var t=s("On Delete Behavior");o(e,t)},$$slots:{default:!0}});var V=a(U);i(V,{children:(e,r)=>{n();var t=s("Managing related data can still be challenging, especially when deleting data. To address this, Backrush relationships offer three deletion strategies: restrict, cascade, and set null.");o(e,t)},$$slots:{default:!0}});var X=a(V);l(X,{level:2,children:(e,r)=>{n();var t=s("Restrict");o(e,t)},$$slots:{default:!0}});var ee=a(X);i(ee,{children:(e,r)=>{n();var t=s("If you select the restrict option, you won't be able to delete a parent document if it has any related child documents. This option is helpful if you want to ensure that data integrity is maintained and that you don't accidentally delete data that is still relevant.");o(e,t)},$$slots:{default:!0}});var te=a(ee);l(te,{level:2,children:(e,r)=>{n();var t=s("Cascade");o(e,t)},$$slots:{default:!0}});var ae=a(te);i(ae,{children:(e,r)=>{n();var t=s("If you choose cascade, deleting a parent document will also delete all related child documents. This option can be helpful if you want to remove all data associated with a particular parent record, such as when you want to delete a user and all their associated data.");o(e,t)},$$slots:{default:!0}});var oe=a(ae);l(oe,{level:2,children:(e,r)=>{n();var t=s("Set Null");o(e,t)},$$slots:{default:!0}});var ne=a(oe);i(ne,{children:(e,r)=>{n();var t=s("Finally, the set null option means that deleting a parent document will remove the relationship to the parent document for all of its related children. This can be useful if you want to retain the child's records but simply remove the relationship.");o(e,t)},$$slots:{default:!0}});var re=a(ne);i(re,{children:(e,r)=>{n();var t=s("Each of these options has its own use cases, and the choice ultimately depends on your specific application requirements. By providing these different options, Backrush allows you to manage related data in a flexible and intuitive way, making it easier for you to build complex applications without worrying about data management.");o(e,t)},$$slots:{default:!0}});var se=a(re);l(se,{level:1,children:(e,r)=>{n();var t=s("Other Benefits");o(e,t)},$$slots:{default:!0}});var ie=a(se);i(ie,{children:(e,r)=>{n();var t=s("In addition to simplifying your collection management, database relationships also provide several other benefits. First, they can help to ensure data consistency and integrity by enforcing referential constraints between related collections. This means that you can prevent orphaned documents or other data inconsistencies that might arise if you were to manage the relationships between collections manually. Additionally, using relationships can also improve the performance of your requests and reduce the amount of code you need to write, since you can retrieve related data in a single request rather than having to fetch it separately.");o(e,t)},$$slots:{default:!0}});var le=a(ie);i(le,{children:(e,r)=>{n();var t=ge(),$=a($e(t));v($,{href:"/docs/databases-relationships",children:(p,de)=>{n();var d=s("docs");o(p,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var ve=a(le);we(ve,{ordered:!1,marker:"-",children:(e,r)=>{var t=Pe(),$=$e(t);y($,{children:(d,ce)=>{v(d,{href:"https://github.com/Back-rush",children:(c,he)=>{n();var h=s("Backrush GitHub");o(c,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=a($);y(p,{children:(d,ce)=>{v(d,{href:"/docs",children:(c,he)=>{n();var h=s("Backrush Docs");o(c,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var de=a(p);y(de,{children:(d,ce)=>{v(d,{href:"https://backrush.io/discord",children:(c,he)=>{n();var h=s("Discord Community");o(c,h)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}}),ye(f),o(me,f)},$$slots:{default:!0}}))}const Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Te,frontmatter:pe},Symbol.toStringTag,{value:"Module"}));export{Ze as _,Te as a};
