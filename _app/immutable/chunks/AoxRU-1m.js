import{t as v,b as n,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as le,s as a,f as m,n as t,r as de}from"./NgVQVlRK.js";import{n as ue}from"./B4IyMRKX.js";import{H as P}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as S}from"./DXp9_3zM.js";import{F as re}from"./OFUKRh55.js";import{L,I as w}from"./BhmTgGWB.js";import{P as f}from"./D8YsId2T.js";import{S as y}from"./yHjwcyUH.js";import{L as b}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ce}from"./CEkRzcqJ.js";const ae={layout:"post",title:"How Backrush streamlines database operations using hooks",description:"Learn how Backrush implemented hook functions to develop custom filters in the Databases services.",date:"2025-01-18T00:00:00.000Z",cover:"/images/blog/hooks-backrush-databases/cover.png",timeToRead:10,author:"aditya-oberai",category:"tutorial"};var pe=v("This is where <!> come into the picture. But what are hooks, and how do we implement them? Let&#39;s find out.",1),he=v("<!> First, you need to identify the points in your application where you want to allow custom code to be executed. These points are often associated with specific events or actions in your application lifecycle, such as before or after a database query, before rendering a template, or after user authentication.",1),$e=v("<!>: Next, you&#39;ll create functions that contain the custom code you want to execute at these hook points. These functions are often referred to as hook functions or callbacks. These functions could be defined anywhere in your codebase, such as within a dedicated hooks file or the relevant class or file.",1),fe=v("<!> At the appropriate points in your application&#39;s code, register the hook functions to be executed. If your application uses a framework or library that supports hooks, you can register them manually or via a hook management system.",1),ve=v("<!> When the application reaches the registered hook points, the hook functions are executed in the order they were registered. This allows your custom code to be seamlessly integrated into the application logic.",1),me=v("<!><!><!><!>",1),_e=v("Our Database library, the <!>, powers every database-relevant action in Backrush, whether we&#39;re talking about user-facing functionalities present in <!> or internal functionalities such as storing Backrush organization and project data, usage statistics for different services, SSL certificates for custom domains, etc.",1),ge=v("Step 2: <!>",1),be=v("<!> The filter name is a unique identifier for a specific hook. It allows us to target the desired hook when defining their custom logic.",1),we=v("<!> The encode function comes into play when data is being written to the database. It acts as a transformation mechanism, allowing us to modify the data before it gets stored. For example, if we want to encrypt sensitive data before saving it, we can create a filter and define the encryption logic within the encode function.",1),ye=v("<!> The decode function operates when data is read from the database. This function enables data transformation during retrieval. For example, if our application stores dates in UNIX timestamp format but wants to display them in ISO format, we can implement the conversion within the decode function.",1),Pe=v("<!><!><!>",1),ke=v("Here is a <!> of how we prepared the <!> filter in Backrush using the Utopia PHP Databases library to store secrets:",1),xe=v("Next, we attached these filters to specific hook points within Backrush. For example, the <!> filter we saw in the previous step had to be declared for each column (attribute) that needs to be encrypted in a table (collection) in Backrush&#39;s underlying MariaDB database, like the <!> column in the <!> table in our <!>:",1),Se=v("These encode and decode functions for these filters were already &quot;hooked&quot; into the necessary functions within the Utopia PHP Databases library, like the <!> function. The <!> and <!> functions then verified which filters had to be applied for each field in the database entity using the table name. With a simple declaration in the Backrush configuration, we could apply any filter to any data added or retrieved from our underlying database.",1),Ae=v("Implementing and registering the filters allowed them to be triggered whenever data is written or read in the appropriate columns in our database tables, invoking the respective <!> or <!> functions. This has resulted in seamless, transparent data transformation, enhancing security and user experience.",1),De=v("In addition to databases, <!> provides other core backend services like user authentication and authorization, databases, file storage, serverless functions, messaging, and more. You can check it out and get started with your first project in minutes here:",1),Le=v("<!><!><!><!>",1),Ee=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Te(ne){ce(ne,ue(ae,{children:(se,Ie)=>{var A=Ee(),E=le(A);f(E,{children:(r,l)=>{t();var e=n("Software engineering is complex, especially when you aim to build robust applications. For example, you may want to handle type conversions and clean your data before storing it in your database, add external loggers and observability tools, or add additional user authentication factors for specific functionalities. At some point, the need for extensibility will inevitably arise in your software.");o(r,e)},$$slots:{default:!0}});var T=a(E);f(T,{children:(r,l)=>{t();var e=pe(),s=a(m(e));y(s,{marker:"**",children:(d,h)=>{t();var u=n("hooks");o(d,u)},$$slots:{default:!0}}),t(),o(r,e)},$$slots:{default:!0}});var I=a(T);P(I,{level:1,children:(r,l)=>{t();var e=n("What are hooks?");o(r,e)},$$slots:{default:!0}});var O=a(I);f(O,{children:(r,l)=>{t();var e=n("Hooks allow developers to inject custom code at specific points in the application's execution flow. They also provide a mechanism to intercept and modify data at various points in the application's lifecycle.");o(r,e)},$$slots:{default:!0}});var H=a(O);f(H,{children:(r,l)=>{t();var e=n("Hooks let you manipulate data and trigger custom behavior without directly altering the core codebase. They are used for various tasks such as data validation, manipulation, logging, and even triggering external processes.");o(r,e)},$$slots:{default:!0}});var C=a(H);P(C,{level:2,children:(r,l)=>{t();var e=n("How are hooks implemented?");o(r,e)},$$slots:{default:!0}});var R=a(C);f(R,{children:(r,l)=>{t();var e=n("Different programming languages implement hooks in different ways. However, the process of preparing hooks is usually similar across various languages and frameworks:");o(r,e)},$$slots:{default:!0}});var F=a(R);L(F,{ordered:!0,marker:".",children:(r,l)=>{var e=me(),s=m(e);w(s,{children:(i,$)=>{f(i,{children:(c,_)=>{var p=he(),g=m(p);y(g,{marker:"**",children:(k,D)=>{t();var x=n("Identify hook points:");o(k,x)},$$slots:{default:!0}}),t(),o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=a(s);w(d,{children:(i,$)=>{f(i,{children:(c,_)=>{var p=$e(),g=m(p);y(g,{marker:"**",children:(k,D)=>{t();var x=n("Define hook functions");o(k,x)},$$slots:{default:!0}}),t(),o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=a(d);w(h,{children:(i,$)=>{f(i,{children:(c,_)=>{var p=fe(),g=m(p);y(g,{marker:"**",children:(k,D)=>{t();var x=n("Register hook functions:");o(k,x)},$$slots:{default:!0}}),t(),o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=a(h);w(u,{children:(i,$)=>{f(i,{children:(c,_)=>{var p=ve(),g=m(p);y(g,{marker:"**",children:(k,D)=>{t();var x=n("Trigger hook execution:");o(k,x)},$$slots:{default:!0}}),t(),o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}});var j=a(F);P(j,{level:1,children:(r,l)=>{t();var e=n("How we implemented hooks in Backrush's codebase");o(r,e)},$$slots:{default:!0}});var N=a(j);f(N,{children:(r,l)=>{t();var e=n("Backrush's tech stack has numerous points where we need to extend the fundamental functionality of our tools. This section will discuss how we implemented hooks in our Databases service.");o(r,e)},$$slots:{default:!0}});var q=a(N);P(q,{level:2,children:(r,l)=>{t();var e=n("Step 1: Identifying hook points");o(r,e)},$$slots:{default:!0}});var M=a(q);f(M,{children:(r,l)=>{t();var e=_e(),s=a(m(e));b(s,{href:"https://github.com/utopia-php/database/",children:(h,u)=>{t();var i=n("Utopia PHP Databases library");o(h,i)},$$slots:{default:!0}});var d=a(s,2);b(d,{href:"https://backrush.io/docs/references/cloud/client-web/databases",children:(h,u)=>{t();var i=n("Backrush's Database API");o(h,i)},$$slots:{default:!0}}),t(),o(r,e)},$$slots:{default:!0}});var G=a(M);f(G,{children:(r,l)=>{t();var e=n('There are various scenarios (or "hook points") in Backrush where we need to transform data, such as hashing passwords, converting timezones for DateTime value, and serializing JSON objects before storing them in our underlying MariaDB database. Therefore, we decided to implement hooks in the form of custom filters to achieve these data transformations.');o(r,e)},$$slots:{default:!0}});var V=a(G);P(V,{level:2,children:(r,l)=>{t();var e=ge(),s=a(m(e));y(s,{marker:"**",children:(d,h)=>{t();var u=n("Defining the hook functions");o(d,u)},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}});var z=a(V);f(z,{children:(r,l)=>{t();var e=n("After the hook points were decided, we created hooks or, in this case, custom filters for our Database tables. These filters consist of three fundamental components:");o(r,e)},$$slots:{default:!0}});var B=a(z);L(B,{ordered:!1,marker:"-",children:(r,l)=>{var e=Pe(),s=m(e);w(s,{children:(u,i)=>{var $=be(),c=m($);y(c,{marker:"**",children:(_,p)=>{t();var g=n("Filter name:");o(_,g)},$$slots:{default:!0}}),t(),o(u,$)},$$slots:{default:!0}});var d=a(s);w(d,{children:(u,i)=>{var $=we(),c=m($);y(c,{marker:"**",children:(_,p)=>{t();var g=n("Encode function:");o(_,g)},$$slots:{default:!0}}),t(),o(u,$)},$$slots:{default:!0}});var h=a(d);w(h,{children:(u,i)=>{var $=ye(),c=m($);y(c,{marker:"**",children:(_,p)=>{t();var g=n("Decode function:");o(_,g)},$$slots:{default:!0}}),t(),o(u,$)},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}});var Y=a(B);f(Y,{children:(r,l)=>{t();var e=ke(),s=a(m(e));b(s,{href:"https://github.com/Back-rush/backrush/blob/a49c3a33f0fd831423afa7a0b53df2c5d709fc2b/app/init.php#L554-L578",children:(h,u)=>{t();var i=n("code example");o(h,i)},$$slots:{default:!0}});var d=a(s,2);S(d,{content:"encrypt"}),t(),o(r,e)},$$slots:{default:!0}});var K=a(Y);re(K,{content:`.
.
.
Database::addFilter(
    'encrypt', // Filter name
    function (mixed $value) { // Encode function
        $key = System::getEnv('_APP_OPENSSL_KEY_V1');
        $iv = OpenSSL::randomPseudoBytes(OpenSSL::cipherIVLength(OpenSSL::CIPHER_AES_128_GCM));
        $tag = null;

        return json_encode([
            'data' => OpenSSL::encrypt($value, OpenSSL::CIPHER_AES_128_GCM, $key, 0, $iv, $tag),
            'method' => OpenSSL::CIPHER_AES_128_GCM,
            'iv' => \\bin2hex($iv),
            'tag' => \\bin2hex($tag ?? ''),
            'version' => '1',
        ]);
    },
    function (mixed $value) { // Decode function
        if (is_null($value)) {
            return;
        }
        $value = json_decode($value, true);
        $key = System::getEnv('_APP_OPENSSL_KEY_V' . $value['version']);

        return OpenSSL::decrypt($value['data'], $value['method'], $key, 0, hex2bin($value['iv']), hex2bin($value['tag']));
    }
);
.
.
.
`,language:"php",process:!0,children:(r,l)=>{t();var e=n(`.
.
.
Database::addFilter(
    'encrypt', // Filter name
    function (mixed $value) { // Encode function
        $key = System::getEnv('_APP_OPENSSL_KEY_V1');
        $iv = OpenSSL::randomPseudoBytes(OpenSSL::cipherIVLength(OpenSSL::CIPHER_AES_128_GCM));
        $tag = null;

        return json_encode([
            'data' => OpenSSL::encrypt($value, OpenSSL::CIPHER_AES_128_GCM, $key, 0, $iv, $tag),
            'method' => OpenSSL::CIPHER_AES_128_GCM,
            'iv' => \\bin2hex($iv),
            'tag' => \\bin2hex($tag ?? ''),
            'version' => '1',
        ]);
    },
    function (mixed $value) { // Decode function
        if (is_null($value)) {
            return;
        }
        $value = json_decode($value, true);
        $key = System::getEnv('_APP_OPENSSL_KEY_V' . $value['version']);

        return OpenSSL::decrypt($value['data'], $value['method'], $key, 0, hex2bin($value['iv']), hex2bin($value['tag']));
    }
);
.
.
.`);o(r,e)},$$slots:{default:!0}});var U=a(K);P(U,{level:2,children:(r,l)=>{t();var e=n("Step 3: Registering the hook functions");o(r,e)},$$slots:{default:!0}});var W=a(U);f(W,{children:(r,l)=>{t();var e=xe(),s=a(m(e));S(s,{content:"encrypt"});var d=a(s,2);S(d,{content:"secret"});var h=a(d,2);S(h,{content:"tokens"});var u=a(h,2);b(u,{href:"https://github.com/Back-rush/backrush/blob/a49c3a33f0fd831423afa7a0b53df2c5d709fc2b/app/config/collections.php#L502",children:(i,$)=>{t();var c=n("code example");o(i,c)},$$slots:{default:!0}}),t(),o(r,e)},$$slots:{default:!0}});var J=a(W);re(J,{content:`.
.
.
[
    '$id' => ID::custom('secret'),
    'type' => Database::VAR_STRING,
    'format' => '',
    'size' => 512, // https://www.tutorialspoint.com/how-long-is-the-sha256-hash-in-mysql (512 for encryption)
    'signed' => true,
    'required' => false,
    'default' => null,
    'array' => false,
    'filters' => ['encrypt'],
],
.
.
.
`,language:"php",process:!0,children:(r,l)=>{t();var e=n(`.
.
.
[
    '$id' => ID::custom('secret'),
    'type' => Database::VAR_STRING,
    'format' => '',
    'size' => 512, // https://www.tutorialspoint.com/how-long-is-the-sha256-hash-in-mysql (512 for encryption)
    'signed' => true,
    'required' => false,
    'default' => null,
    'array' => false,
    'filters' => ['encrypt'],
],
.
.
.`);o(r,e)},$$slots:{default:!0}});var Q=a(J);f(Q,{children:(r,l)=>{t();var e=Se(),s=a(m(e));b(s,{href:"https://github.com/utopia-php/database/blob/f979e2fed855118da1455da205982645be8b2ae6/src/Database/Database.php#L3265",children:(u,i)=>{S(u,{content:"createDocument"})},$$slots:{default:!0}});var d=a(s,2);b(d,{href:"https://github.com/utopia-php/database/blob/f979e2fed855118da1455da205982645be8b2ae6/src/Database/Database.php#L5329",children:(u,i)=>{t();var $=n("encode");o(u,$)},$$slots:{default:!0}});var h=a(d,2);b(h,{href:"https://github.com/utopia-php/database/blob/f979e2fed855118da1455da205982645be8b2ae6/src/Database/Database.php#L5388",children:(u,i)=>{t();var $=n("decode");o(u,$)},$$slots:{default:!0}}),t(),o(r,e)},$$slots:{default:!0}});var X=a(Q);P(X,{level:2,children:(r,l)=>{t();var e=n("Step 4: Triggering the hook functions");o(r,e)},$$slots:{default:!0}});var Z=a(X);f(Z,{children:(r,l)=>{t();var e=Ae(),s=a(m(e));S(s,{content:"encode"});var d=a(s,2);S(d,{content:"decode"}),t(),o(r,e)},$$slots:{default:!0}});var ee=a(Z);P(ee,{level:1,children:(r,l)=>{t();var e=n("Conclusion");o(r,e)},$$slots:{default:!0}});var te=a(ee);f(te,{children:(r,l)=>{t();var e=n("Hooks are integral to the functioning of Backrush Databases. As shown above, they enable data sanity without altering core database functionality.");o(r,e)},$$slots:{default:!0}});var oe=a(te);f(oe,{children:(r,l)=>{t();var e=De(),s=a(m(e));b(s,{href:"https://backrush.io/",children:(d,h)=>{t();var u=n("Backrush");o(d,u)},$$slots:{default:!0}}),t(),o(r,e)},$$slots:{default:!0}});var ie=a(oe);L(ie,{ordered:!1,marker:"-",children:(r,l)=>{var e=Le(),s=m(e);w(s,{children:(i,$)=>{b(i,{href:"https://backrush.io/docs/quick-starts",children:(c,_)=>{t();var p=n("Quickstarts");o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=a(s);w(d,{children:(i,$)=>{b(i,{href:"https://cloud.backrush.io",children:(c,_)=>{t();var p=n("Backrush Cloud");o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=a(d);w(h,{children:(i,$)=>{b(i,{href:"https://backrush.io/docs",children:(c,_)=>{t();var p=n("Backrush Docs");o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=a(h);w(u,{children:(i,$)=>{b(i,{href:"https://backrush.io/discord",children:(c,_)=>{t();var p=n("Discord community");o(c,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}}),de(A),o(se,A)},$$slots:{default:!0}}))}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Te,frontmatter:ae},Symbol.toStringTag,{value:"Module"}));export{et as _,Te as a};
