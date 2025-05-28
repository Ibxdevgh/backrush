import{t as p,b as s,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ie,s as n,f as h,n as a,r as Te}from"./NgVQVlRK.js";import{n as Oe}from"./B4IyMRKX.js";import{H as m}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as f}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as v}from"./DXp9_3zM.js";import{F as u}from"./OFUKRh55.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as i}from"./D8YsId2T.js";import{S as De}from"./yHjwcyUH.js";import{L as $}from"./yh4_9ChP.js";import{P as Ne}from"./CEkRzcqJ.js";const xe={layout:"post",title:"Integrate SQL, NoSQL, Vector, Graph, or any database into your Backrush project",description:`With databases it's always "it depends", but we got the answers.`,date:"2024-05-24T00:00:00.000Z",cover:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/cover.png",timeToRead:9,author:"matej-baco",category:"product",featured:!1};var je=p("Databases allow you to store and query your application’s information persistently. Storing is usually straightforward, but querying data optimally is a major challenge for applications at any scale. Instead of simply saying <!>, we have prepared a list of Cloud database providers, explained their unique features, and shared examples where they shine. For each database, we also provide an Backrush Function that allows you to integrate the database into your Backrush project.",1),qe=p("You can find an entire example in our <!> function template, which is also available on your Backrush Console in the Functions Marketplace.",1),Ce=p("A better-structured example can be found in the <!> function template and also on your Backrush Console.",1),Ue=p("A working example can be found in our <!> function template or in your Backrush Console.",1),ke=p("Next, you can insert data as nodes with relations between them. You can use <!> clause to ensure a node is re-used instead of creating duplicates.",1),Le=p("Finally, you can view your data using <!> clause in a query.",1),He=p("You can look at the entire example put together in the <!> template or in your Functions Marketplace in Backrush Console.",1),Fe=p("If needed for your use-case, you can disable automatic embedding generation from Upstash, and use any AI model of your choice. You can use the <!> Backrush Function template as a reference for your implementation. Additionally, you can find this example in Backrush Console when setting up a new function.",1),Ge=p("If you want to share your favorite database with us, or need help integrating with your database, I invite you to <!> community.",1),We=p("Lastly, if you are feeling inspired, you can contribute to templates you have read about. In our <!> repository, we implemented integrations in Node.JS, but developers use a dozen other languages. We would love to see issues and pull requests converting the function into other languages.",1),Qe=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Be(Ae){Ne(Ae,Oe(xe,{children:(Ee,Je)=>{var y=Qe(),_=Ie(y);m(_,{level:1,children:(e,r)=>{a();var t=s("Integrate any database type into your Backrush project");o(e,t)},$$slots:{default:!0}});var w=n(_);i(w,{children:(e,r)=>{a();var t=je(),l=n(h(t));v(l,{content:"it depends"}),a(),o(e,t)},$$slots:{default:!0}});var b=n(w);m(b,{level:2,children:(e,r)=>{a();var t=s("Backrush Database");o(e,t)},$$slots:{default:!0}});var P=n(b);i(P,{children:(e,r)=>{a();var t=s("Most applications don’t include complex database logic, at least not at the beginning. Typically, applications start with basic features that bring value to some customers and gradually improve their features to provide value to a wider range of users.");o(e,t)},$$slots:{default:!0}});var S=n(P);i(S,{children:(e,r)=>{a();var t=s("For such database needs, you can use Backrush Database directly. It comes included in your Backrush project, so no additional setup is needed to connect to it. Backrush Databases include the most commonly needed database features such as filtering, sorting, pagination, and more. It’s best to use Backrush Databases as your main database for an Backrush project since it’s inside Backrush’s ecosystem and easily integrates with Backrush Auth permissions.");o(e,t)},$$slots:{default:!0}});var R=n(S);i(R,{children:(e,r)=>{a();var t=s("For more specific use cases, different databases may offer more features and better performance. For example, a search query in the Backrush Database is perfect for a search input, but if primary feature of your product is searching, you could look for a robust search engine. Database with dedication towards searching could offer mistake tolerance, synonym awareness, or result personalization.");o(e,t)},$$slots:{default:!0}});var x=n(R);i(x,{children:(e,r)=>{a();var t=s("Alternatively, you might be building a project on top of data you already have in an external database. Your team may be very experienced with self-hosting a database, or your client may require the use of a specific database. There are wide variety of reasons why a separate database might be a right choice for your project. We are well aware of those situations, and Backrush was built with that in mind. It’s deeply embedded in our philosophy to meet developers where they are and allow them to work with any tools or technologies that they need and love.");o(e,t)},$$slots:{default:!0}});var A=n(x);m(A,{level:2,children:(e,r)=>{a();var t=s("Neon - Serverless Postgres");o(e,t)},$$slots:{default:!0}});var E=n(A);i(E,{children:(e,r)=>{a();var t=s("Neon provides a managed Postgres database, which is famously known for its SQL syntax and ability to store structured data.");o(e,t)},$$slots:{default:!0}});var M=n(E);i(M,{children:(e,r)=>{a();var t=s("For most databases, it’s beneficial for data to be structured. Structure gives data predictability and reliability, which is key to any production-ready application.");o(e,t)},$$slots:{default:!0}});var I=n(M);i(I,{children:(e,r)=>{a();var t=s("SQL databases are also preferred when relations between data play a big role in preventing data duplication and ease of updating the data in one place. Postgres specifically allows you to add extensions to store and query geospatial and vector data efficiently.");o(e,t)},$$slots:{default:!0}});var T=n(I);i(T,{children:(e,r)=>{a();var t=s("To integrate with Neon, you can set up an Backrush function and prepare a Postgres client.");o(e,t)},$$slots:{default:!0}});var O=n(T);u(O,{content:`import postgres from 'postgres';

let client;

export default async ({ req, res, log, error }) => {
	// Connect to database
  if(!client) {
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
    client = postgres({
      host: PGHOST,
      database: PGDATABASE,
      username: PGUSER,
      password: PGPASSWORD,
      port: 5432,
      ssl: 'require',
      connection: {
        options: \`project=\${ENDPOINT_ID}\`,
      },
    });
  }

  // Rest of the code
};
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`import postgres from 'postgres';

let client;

export default async ({ req, res, log, error }) => {
	// Connect to database
  if(!client) {
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
    client = postgres({
      host: PGHOST,
      database: PGDATABASE,
      username: PGUSER,
      password: PGPASSWORD,
      port: 5432,
      ssl: 'require',
      connection: {
        options: \`project=\${ENDPOINT_ID}\`,
      },
    });
  }

  // Rest of the code
};`);o(e,t)},$$slots:{default:!0}});var D=n(O);i(D,{children:(e,r)=>{a();var t=s("Next, you can run SQL queries to create a table, insert data, read it, and much more.");o(e,t)},$$slots:{default:!0}});var N=n(D);u(N,{content:`// Prepare table
await client\`CREATE TABLE IF NOT EXISTS warehouses (
  id SERIAL PRIMARY KEY,
  location VARCHAR(255),
  capacity INT
)\`;

// Insert data
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100
await client\`INSERT INTO warehouses (location, capacity) VALUES (\${location}, \${capacity})\`;

// Query data
const page = 1;
const limit = 100;
const warehouses = await client\`SELECT * FROM warehouses LIMIT \${limit} OFFSET \${(page - 1) * limit}\`;
return res.json(warehouses);
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`// Prepare table
await client\`CREATE TABLE IF NOT EXISTS warehouses (
  id SERIAL PRIMARY KEY,
  location VARCHAR(255),
  capacity INT
)\`;

// Insert data
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100
await client\`INSERT INTO warehouses (location, capacity) VALUES (\${location}, \${capacity})\`;

// Query data
const page = 1;
const limit = 100;
const warehouses = await client\`SELECT * FROM warehouses LIMIT \${limit} OFFSET \${(page - 1) * limit}\`;
return res.json(warehouses);`);o(e,t)},$$slots:{default:!0}});var j=n(N);i(j,{children:(e,r)=>{a();var t=qe(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates/tree/main/node/query-neon-postgres",children:(c,g)=>{a();var d=s("query Neon Postgres");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var q=n(j);i(q,{children:(e,r)=>{f(e,{src:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/neon.png",alt:"Neon Postgres Console"})},$$slots:{default:!0}});var C=n(q);m(C,{level:2,children:(e,r)=>{a();var t=s("MongoDB Atlas");o(e,t)},$$slots:{default:!0}});var U=n(C);i(U,{children:(e,r)=>{a();var t=s("Atlas, a managed cloud platform by the MongoDB team, is a cloud provider of MongoDB clusters.");o(e,t)},$$slots:{default:!0}});var k=n(U);i(k,{children:(e,r)=>{a();var t=s("MongoDB database is well-known for its JSON document structure. This approach allows you to store unstructured data optimally, with a huge improvement boost to write operations. For instance, usage stats or sales history could be stored in MongoDB and later processed to gain more insights into app analytics.");o(e,t)},$$slots:{default:!0}});var L=n(k);i(L,{children:(e,r)=>{a();var t=s("While MongoDB shines the most in storing unstructured data, nowadays, it provides all the capabilities developers expect from a relational database. If you don’t like SQL queries, MongoDB is a great choice.");o(e,t)},$$slots:{default:!0}});var H=n(L);i(H,{children:(e,r)=>{a();var t=s("With MongoDB, integration becomes simpler, since you don’t need to define structure of collections or documents. After preparing a client, you can directly start writing and querying data.");o(e,t)},$$slots:{default:!0}});var F=n(H);u(F,{content:`import { MongoClient, ServerApiVersion } from 'mongodb';

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
  }

  // Insert data
  const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
  const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

  await client.db("main").collection("warehouses").insertOne({
      location,
      capacity
  });

  // Query data
  const page = 1;
  const limit = 100;
  const cursor = client.db("main").collection("warehouses")
    .find().limit(limit).skip((page - 1) * limit);

  const docs = [];
  for await (const doc of cursor) {
    docs.push(doc);
  }

  return res.json(docs);
};
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`import { MongoClient, ServerApiVersion } from 'mongodb';

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
  }

  // Insert data
  const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
  const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

  await client.db("main").collection("warehouses").insertOne({
      location,
      capacity
  });

  // Query data
  const page = 1;
  const limit = 100;
  const cursor = client.db("main").collection("warehouses")
    .find().limit(limit).skip((page - 1) * limit);

  const docs = [];
  for await (const doc of cursor) {
    docs.push(doc);
  }

  return res.json(docs);
};`);o(e,t)},$$slots:{default:!0}});var G=n(F);i(G,{children:(e,r)=>{a();var t=Ce(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates/tree/main/node/query-mongo-atlas",children:(c,g)=>{a();var d=s("query Mongo Atlas");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var W=n(G);i(W,{children:(e,r)=>{f(e,{src:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/mongodb.png",alt:"MongoDB Atlas Console"})},$$slots:{default:!0}});var Q=n(W);m(Q,{level:2,children:(e,r)=>{a();var t=s("Redis");o(e,t)},$$slots:{default:!0}});var B=n(Q);i(B,{children:(e,r)=>{a();var t=s("Redis is a widely used key-value database, most often serving as a cache layer in front of another database. It’s faster than the underlying database since Redis stores data in memory.");o(e,t)},$$slots:{default:!0}});var J=n(B);i(J,{children:(e,r)=>{a();var t=s("While the cache is a typical use case for Redis, it can be used for much more since it can also store data persistently to disk. Its key-value approach renders very fast read and write operations, with the latest Redis version also supporting querying capabilities. Other use cases for Redis include pub/sub, atomic counters, distributed locks, and message queues.");o(e,t)},$$slots:{default:!0}});var V=n(J);i(V,{children:(e,r)=>{a();var t=s("You can start integrating with Redis by creating and connecting a client.");o(e,t)},$$slots:{default:!0}});var K=n(V);u(K,{content:`import { createClient } from 'redis';
import { createHash } from 'node:crypto';

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    const { REDIS_PASSWORD, REDIS_HOST } = process.env;
    client = createClient({
      password: REDIS_PASSWORD,
      socket: {
        host: REDIS_HOST,
        port: 14714
      }
    });

    await client.connect();
  }

  // Rest of the code
};
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`import { createClient } from 'redis';
import { createHash } from 'node:crypto';

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    const { REDIS_PASSWORD, REDIS_HOST } = process.env;
    client = createClient({
      password: REDIS_PASSWORD,
      socket: {
        host: REDIS_HOST,
        port: 14714
      }
    });

    await client.connect();
  }

  // Rest of the code
};`);o(e,t)},$$slots:{default:!0}});var Y=n(K);i(Y,{children:(e,r)=>{a();var t=s("Next, you can start inserting data. Since Redis is a key-value store, we need to create a unique key for every value. In the example below, an MD5 hash is used because the MD5 hash of the query is what’s commonly used as a key.");o(e,t)},$$slots:{default:!0}});var z=n(Y);u(z,{content:`// Insert data
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

const hash = createHash('md5').update(location).digest('hex');
await client.hSet(\`warehouses:\${hash}\`, {
  location,
  capacity
});
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`// Insert data
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

const hash = createHash('md5').update(location).digest('hex');
await client.hSet(\`warehouses:\${hash}\`, {
  location,
  capacity
});`);o(e,t)},$$slots:{default:!0}});var X=n(z);i(X,{children:(e,r)=>{a();var t=s("Querying data is as simple as fetching it using the key (MD5 hash). Many more operations are supported, such as JSON or array manipulation, but for simplicity, you can read a value by a key.");o(e,t)},$$slots:{default:!0}});var Z=n(X);u(Z,{content:"// Query data\nconst warehouses = await client.hGetAll(`warehouses:${hash}`);\nreturn res.json(warehouses);\n",language:"jsx",process:!0,children:(e,r)=>{a();var t=s("// Query data\nconst warehouses = await client.hGetAll(`warehouses:${hash}`);\nreturn res.json(warehouses);");o(e,t)},$$slots:{default:!0}});var ee=n(Z);i(ee,{children:(e,r)=>{a();var t=Ue(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates/tree/main/node/query-redis-labs",children:(c,g)=>{a();var d=s("query Redis Labs");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var te=n(ee);i(te,{children:(e,r)=>{f(e,{src:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/redis.png",alt:"Redis Labs Console"})},$$slots:{default:!0}});var ae=n(te);m(ae,{level:2,children:(e,r)=>{a();var t=s("Neo4j AuraDB");o(e,t)},$$slots:{default:!0}});var ne=n(ae);i(ne,{children:(e,r)=>{a();var t=s("AuraDB is a cloud offering of Neo4j, the leading graph database. Using Cypher, a graph query language, Neo4j allows you to store data with attention to their relations. Non-relational data can live in the Neo4j database but it’s a very rare use case.");o(e,t)},$$slots:{default:!0}});var oe=n(ne);i(oe,{children:(e,r)=>{a();var t=s("Usually, every node is connected to another node, creating a large net of relations. Graph database gives benefits similar to relational databases, but to a much larger extent.");o(e,t)},$$slots:{default:!0}});var re=n(oe);i(re,{children:(e,r)=>{a();var t=s("Compared to databases like Postgres, Neo4j is much more focused on relations and encourages a large chain of relations. With relations between all data, features such as recommendation feed or friend discoverability become effortless.");o(e,t)},$$slots:{default:!0}});var se=n(re);i(se,{children:(e,r)=>{a();var t=s("To use Neo4j with Backrush Functions, you can create a function and connect using the Neo4j driver.");o(e,t)},$$slots:{default:!0}});var ie=n(se);u(ie,{content:`import { driver, auth, int } from 'neo4j-driver';

let client;

export default async ({ req, res, log, error }) => {
  // // Connect to database
  if(!client) {
    const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env;
    client = driver(NEO4J_URI, auth.basic(NEO4J_USER, NEO4J_PASSWORD))
  }

  // Rest of the code
}
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`import { driver, auth, int } from 'neo4j-driver';

let client;

export default async ({ req, res, log, error }) => {
  // // Connect to database
  if(!client) {
    const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env;
    client = driver(NEO4J_URI, auth.basic(NEO4J_USER, NEO4J_PASSWORD))
  }

  // Rest of the code
}`);o(e,t)},$$slots:{default:!0}});var le=n(ie);i(le,{children:(e,r)=>{a();var t=ke(),l=n(h(t));v(l,{content:"MERGE"}),a(),o(e,t)},$$slots:{default:!0}});var ce=n(le);u(ce,{content:`// Insert data
const categories = [ 'electronics', 'fashion', 'furniture', 'cars' ];

const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

await client.executeQuery(
  \`
    MERGE (c:Category {name: $category})
    CREATE (w:Warehouse {location: $location, capacity: $capacity})
    CREATE (w)-[:STORES]->(c)
  \`,
  { location, capacity, category },
  { database: 'neo4j' }
);
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`// Insert data
const categories = [ 'electronics', 'fashion', 'furniture', 'cars' ];

const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
const location = \`Street \${Math.round(Math.random() * 1000)}, Earth\`; // Random address
const capacity = 10 + Math.round(Math.random() * 10) * 10; // Random number: 10,20,30,...,90,100

await client.executeQuery(
  \`
    MERGE (c:Category {name: $category})
    CREATE (w:Warehouse {location: $location, capacity: $capacity})
    CREATE (w)-[:STORES]->(c)
  \`,
  { location, capacity, category },
  { database: 'neo4j' }
);`);o(e,t)},$$slots:{default:!0}});var de=n(ce);i(de,{children:(e,r)=>{a();var t=Le(),l=n(h(t));v(l,{content:"RETURN"}),a(),o(e,t)},$$slots:{default:!0}});var ue=n(de);u(ue,{content:`// Query data
const page = 1;
const limit = 100;
const offset = (page - 1) * limit;

const graph = await client.executeQuery(
  \`
    MATCH (w:Warehouse)-[:STORES]->(c:Category)
    RETURN w, c
    SKIP $offset
    LIMIT $limit
  \`,
  { limit: int(limit), offset: int(offset) },
  { database: 'neo4j' }
);

return res.json(graph);
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`// Query data
const page = 1;
const limit = 100;
const offset = (page - 1) * limit;

const graph = await client.executeQuery(
  \`
    MATCH (w:Warehouse)-[:STORES]->(c:Category)
    RETURN w, c
    SKIP $offset
    LIMIT $limit
  \`,
  { limit: int(limit), offset: int(offset) },
  { database: 'neo4j' }
);

return res.json(graph);`);o(e,t)},$$slots:{default:!0}});var pe=n(ue);i(pe,{children:(e,r)=>{a();var t=He(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates/tree/main/node/query-neo4j-auradb",children:(c,g)=>{a();var d=s("query Neo4j AuraDB");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var he=n(pe);i(he,{children:(e,r)=>{f(e,{src:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/neo4j.png",alt:"Neon4j AuraDB Console"})},$$slots:{default:!0}});var me=n(he);m(me,{level:2,children:(e,r)=>{a();var t=s("Upstash Vector");o(e,t)},$$slots:{default:!0}});var $e=n(me);i($e,{children:(e,r)=>{a();var t=s("Upstash is a data platform that offers services such as Redis, Kafka, or QStash, but most importantly, a vector database. Vector database stores multi-dimensional numeric representations of your data (embeddings) in an index, allowing you to find similarities between them quickly.");o(e,t)},$$slots:{default:!0}});var ge=n($e);i(ge,{children:(e,r)=>{a();var t=s("There are AI models to generate embeddings from text, music, or images, which is the main purpose of vector databases. Using a AI model such as a large language model (LLM), you could create a vector database of your product names. Later, a visitor may be looking for a flower pot, but thanks to the vector database, your website can now recommend watering cans and fertilizer.");o(e,t)},$$slots:{default:!0}});var fe=n(ge);i(fe,{children:(e,r)=>{a();var t=s("Integrating with Upstash Vector is unbelievably simple. Usually, you would have to connect to an AI model yourself to generate embeddings. In latest Upstash, you can pick model when creating an index, and the embedding is created for you automatically, for any input you provide. With that in mind, you can create an Backrush Function that connects to Upstash, and inserts your data.");o(e,t)},$$slots:{default:!0}});var ye=n(fe);u(ye,{content:`import { Index } from "@upstash/vector"

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    const { UPSTASH_URL, UPSTASH_TOKEN } = process.env;
    client = new Index({ url: UPSTASH_URL, token: UPSTASH_TOKEN });
  }

  // Insert data
  const categories = ['electronics', 'fashion', 'furniture', 'cars'];

  const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
  const name = \`Product #\${Math.round(Math.random() * 1000)}\`; // Random name
  const price = 10 + Math.round(Math.random() * 90); // Random number between 10 and 100

  const id = \`\${new Date().getTime().toString(16)}\${Math.round(Math.random() * 1000000000).toString(16)}\`; // Unique ID

  await client.upsert({
    id,
    data: \`product name \${name} in category \${category} priced at \${price}€\`,
    metadata: { name, category, price },
  });

  // Rest of the code
}
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`import { Index } from "@upstash/vector"

let client;

export default async ({ req, res, log, error }) => {
  // Connect to database
  if(!client) {
    const { UPSTASH_URL, UPSTASH_TOKEN } = process.env;
    client = new Index({ url: UPSTASH_URL, token: UPSTASH_TOKEN });
  }

  // Insert data
  const categories = ['electronics', 'fashion', 'furniture', 'cars'];

  const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
  const name = \`Product #\${Math.round(Math.random() * 1000)}\`; // Random name
  const price = 10 + Math.round(Math.random() * 90); // Random number between 10 and 100

  const id = \`\${new Date().getTime().toString(16)}\${Math.round(Math.random() * 1000000000).toString(16)}\`; // Unique ID

  await client.upsert({
    id,
    data: \`product name \${name} in category \${category} priced at \${price}€\`,
    metadata: { name, category, price },
  });

  // Rest of the code
}`);o(e,t)},$$slots:{default:!0}});var ve=n(ye);i(ve,{children:(e,r)=>{a();var t=s("After inserting data, Upstash takes a few seconds to generate embeddings and store it in the database. Once the index is ready, you can query your database and look for similar products.");o(e,t)},$$slots:{default:!0}});var _e=n(ve);u(_e,{content:`const embedding = await client.query({
  data: "product name Airpods in category electronics priced at 36€",
  topK: 1,
  includeVectors: true,
  includeMetadata: true,
});

return res.json(embedding);
`,language:"jsx",process:!0,children:(e,r)=>{a();var t=s(`const embedding = await client.query({
  data: "product name Airpods in category electronics priced at 36€",
  topK: 1,
  includeVectors: true,
  includeMetadata: true,
});

return res.json(embedding);`);o(e,t)},$$slots:{default:!0}});var we=n(_e);i(we,{children:(e,r)=>{a();var t=Fe(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates/tree/main/node/query-upstash-vector",children:(c,g)=>{a();var d=s("query Upstash Vector");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var be=n(we);i(be,{children:(e,r)=>{f(e,{src:"/images/blog/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project/vector.png",alt:"Upstash Vector Console"})},$$slots:{default:!0}});var Pe=n(be);m(Pe,{level:2,children:(e,r)=>{De(e,{marker:"**",children:(t,l)=>{a();var c=s("Next steps");o(t,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var Se=n(Pe);i(Se,{children:(e,r)=>{a();var t=s("Your database journey doesn’t end here. There are other databases you might already love, or look forward to trying in your next project. Thanks to nature of Backrush Functions, your imagination is the limit. We look forward showcasing more databases and how you can integrate them with Backrush.");o(e,t)},$$slots:{default:!0}});var Re=n(Se);i(Re,{children:(e,r)=>{a();var t=Ge(),l=n(h(t));$(l,{href:"https://appwrite.io/discord",children:(c,g)=>{a();var d=s("Join our Discord");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}});var Me=n(Re);i(Me,{children:(e,r)=>{a();var t=We(),l=n(h(t));$(l,{href:"https://github.com/appwrite/templates",children:(c,g)=>{a();var d=s("Backrush Functions templates");o(c,d)},$$slots:{default:!0}}),a(),o(e,t)},$$slots:{default:!0}}),Te(y),o(Ee,y)},$$slots:{default:!0}}))}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:Be,frontmatter:xe},Symbol.toStringTag,{value:"Module"}));export{$t as _,Be as a};
