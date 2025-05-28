import{t as v,b as l,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ge,s as n,f as $,n as r,r as me}from"./NgVQVlRK.js";import{n as ve}from"./B4IyMRKX.js";import{H as y}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as d}from"./DXp9_3zM.js";import{F as c}from"./OFUKRh55.js";import{L as $e,I as A}from"./BhmTgGWB.js";import{P as s}from"./D8YsId2T.js";import{L as _}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ye}from"./CEkRzcqJ.js";const fe={layout:"post",title:"Sound null-safety for your Dart functions",description:"Learn to reduce null related runtime errors with Dart 3.",date:"2024-03-01T00:00:00.000Z",cover:"/images/blog/sound-null-safety-for-your-dart-functions/cover.png",timeToRead:12,author:"vincent-ge",category:"product",featured:!1};var _e=v("Notice that <!> and <!> are declared as class variables that cannot be null, but <!> is explicitly stated to be nullable. This is why the constructor of <!> specifies that name and age are required. If you try to pass null, or a nullable value into these required params without providing non-null defaults, the compiler will complain.",1),Ae=v("When constructing a <!> class from a JSON, we also did some null handling. We access members using <!> syntax, which checks if <!> is null before attempting access, preventing null pointer exceptions. Since stay is nullable, we check if stay exists in the <!> passed in, and if not, we default to null. Later when accessing member <!>, we’ll be reminded to handle this properly.",1),xe=v("In <!> there are similar concepts applied.",1),Pe=v("Declaring <!> and <!> as optional forces us to explicitly check to null safety during access.",1),Se=v("Notice how we can safely access <!> and <!>, but we must check if stay is null. If we decide to access <!> or <!> to split the date string, for example, we’ll also be warned to handle null values here since these are also nullable.",1),we=v("If you’re still on Dart 2.x, I strongly recommend you migrate to Dart 3 to benefit from safety. Dart’s documentation has a <!> to help you simply the process.",1),be=v("<!><!><!><!><!>",1),je=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Te(ce){ye(ce,ve(fe,{children:(pe,Je)=>{var S=je(),b=ge(S);s(b,{children:(t,a)=>{r();var e=l("Dart 3 runtimes are now available on Backrush Cloud. Among the many cool features introduced in Dart 3, sound null safety stands out as an important change for Backrush Functions.");o(t,e)},$$slots:{default:!0}});var j=n(b);s(j,{children:(t,a)=>{r();var e=l("Sound null safety means you can expect to know when a variable is not null. More importantly, it helps you make sure you properly handle potential null values by warning you at compile time.");o(t,e)},$$slots:{default:!0}});var T=n(j);s(T,{children:(t,a)=>{r();var e=l("When you build with Backrush Functions, you’ll often build integrations that interface with external services and user input directly. In these cases, you have no control over what’s sent over the request.");o(t,e)},$$slots:{default:!0}});var J=n(T);s(J,{children:(t,a)=>{r();var e=l("This helps prevent all types of errors at run time, which can be difficult to catch and debug otherwise.");o(t,e)},$$slots:{default:!0}});var L=n(J);c(L,{content:`The getter 'age' was called on null.
Receiver: null
Tried calling: type
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`The getter 'age' was called on null.
Receiver: null
Tried calling: type`);o(t,e)},$$slots:{default:!0}});var k=n(L);y(k,{level:1,children:(t,a)=>{r();var e=l("The setup");o(t,e)},$$slots:{default:!0}});var N=n(k);s(N,{children:(t,a)=>{r();var e=l("Let’s take an example function that takes a JSON object that’s expected in the request to document which people showed up at an event when they came, and when they left.");o(t,e)},$$slots:{default:!0}});var q=n(N);s(q,{children:(t,a)=>{r();var e=l("The JSON would look like this under ideal situations.");o(t,e)},$$slots:{default:!0}});var I=n(q);c(I,{content:`{
    "profiles": [
        {
            "name": "John",
            "age": "25",
            "stay": {
                "arrivedAt": "2022-01-01T00:00:00Z",
                "leftAt": "2022-01-01T02:00:00Z"
            }
        },
        ... more profiles
    ],
    "count": 15
}
`,language:"json",process:!0,children:(t,a)=>{r();var e=l(`{
    "profiles": [
        {
            "name": "John",
            "age": "25",
            "stay": {
                "arrivedAt": "2022-01-01T00:00:00Z",
                "leftAt": "2022-01-01T02:00:00Z"
            }
        },
        ... more profiles
    ],
    "count": 15
}`);o(t,e)},$$slots:{default:!0}});var D=n(I);y(D,{level:1,children:(t,a)=>{r();var e=l("The naive implementation");o(t,e)},$$slots:{default:!0}});var M=n(D);c(M,{content:`import 'dart:async';

class Stay {
  final String arrivedAt;
  final String leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic> json) {
    if (json == null) {
      return null;
    }
    return Stay(
      arrivedAt: json['arrivedAt'],
      leftAt: json['leftAt'],
    );
  }
}

class Profile {
  final String name;
  final String age;
  final Stay stay;

  Profile({this.name, this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    if (json == null) {
      return null;
    }
    return Profile(
      name: json['name'],
      age: json['age'],
      stay: Stay.fromJson(json['stay']),
    );
  }
}

// This is your Backrush function
// It's executed each time we get a request
Future<dynamic> main(final context) async {
  context.log("Here are the people that showed up!");
  var people = context.req.body; // This is JSON parsed as a map
  List<Profile> profiles = (people['profiles'] as List)
      .map((profile) => Profile.fromJson(profile))
      .toList();

  for (var profile in profiles) {
    context.log("Name: \${profile.name}");
    context.log("Age: \${profile.age}");
    context.log("Arrived at: \${profile.stay.arrivedAt}");
    context.log("Left at: \${profile.stay.leftAt}");
  }

  context.res.empty();
}
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`import 'dart:async';

class Stay {
  final String arrivedAt;
  final String leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic> json) {
    if (json == null) {
      return null;
    }
    return Stay(
      arrivedAt: json['arrivedAt'],
      leftAt: json['leftAt'],
    );
  }
}

class Profile {
  final String name;
  final String age;
  final Stay stay;

  Profile({this.name, this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    if (json == null) {
      return null;
    }
    return Profile(
      name: json['name'],
      age: json['age'],
      stay: Stay.fromJson(json['stay']),
    );
  }
}

// This is your Backrush function
// It's executed each time we get a request
Future<dynamic> main(final context) async {
  context.log("Here are the people that showed up!");
  var people = context.req.body; // This is JSON parsed as a map
  List<Profile> profiles = (people['profiles'] as List)
      .map((profile) => Profile.fromJson(profile))
      .toList();

  for (var profile in profiles) {
    context.log("Name: \${profile.name}");
    context.log("Age: \${profile.age}");
    context.log("Arrived at: \${profile.stay.arrivedAt}");
    context.log("Left at: \${profile.stay.leftAt}");
  }

  context.res.empty();
}`);o(t,e)},$$slots:{default:!0}});var H=n(M);s(H,{children:(t,a)=>{r();var e=l("In Dart 2, without null safety, this code will happily compile and run. Well, until your API receives an incomplete JSON like this:");o(t,e)},$$slots:{default:!0}});var C=n(H);c(C,{content:`{
"profiles": [
    {
        "name": "Bob",
        "age": "35"
    }
    {
        "name": "Bob",
        "age": "35",
        "stay": {
            "arrivedAt": "2022-01-01T02:00:00Z",
            "leftAt": "2022-01-01T04:00:00Z"
        }
    },
    {}
  ],
  "count": 3
}
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`{
"profiles": [
    {
        "name": "Bob",
        "age": "35"
    }
    {
        "name": "Bob",
        "age": "35",
        "stay": {
            "arrivedAt": "2022-01-01T02:00:00Z",
            "leftAt": "2022-01-01T04:00:00Z"
        }
    },
    {}
  ],
  "count": 3
}`);o(t,e)},$$slots:{default:!0}});var F=n(C);s(F,{children:(t,a)=>{r();var e=l("This will give you an unexpected runtime error. If you’re building integrations or new APIs with Backrush functions, you’d want to gracefully handle the null values instead of seeing this error in your logs.");o(t,e)},$$slots:{default:!0}});var O=n(F);c(O,{content:`The getter 'age' was called on null.
Receiver: null
Tried calling: age
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`The getter 'age' was called on null.
Receiver: null
Tried calling: age`);o(t,e)},$$slots:{default:!0}});var Z=n(O);y(Z,{level:1,children:(t,a)=>{r();var e=l("Handling nulls in Dart 3");o(t,e)},$$slots:{default:!0}});var B=n(Z);s(B,{children:(t,a)=>{r();var e=l("If you tried to follow along in Dart 3, you’ll find the compiler screaming at us to handle null values.");o(t,e)},$$slots:{default:!0}});var W=n(B);c(W,{content:`compiling...
../build/lib/main.dart:8:14: Error: The parameter 'arrivedAt' can't have a value of 'null' because of its type 'String', but the implicit default value is 'null'.
Try adding either an explicit non-'null' default value or the 'required' modifier.
  Stay({this.arrivedAt, this.leftAt});
             ^^^^^^^^^

... And more errors for every single non-null safe access!
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`compiling...
../build/lib/main.dart:8:14: Error: The parameter 'arrivedAt' can't have a value of 'null' because of its type 'String', but the implicit default value is 'null'.
Try adding either an explicit non-'null' default value or the 'required' modifier.
  Stay({this.arrivedAt, this.leftAt});
             ^^^^^^^^^

... And more errors for every single non-null safe access!`);o(t,e)},$$slots:{default:!0}});var R=n(W);s(R,{children:(t,a)=>{r();var e=l("While this is annoying, forcing you to explicitly handle nulls at compile times make sure you get no surprises at runtime.");o(t,e)},$$slots:{default:!0}});var Y=n(R);s(Y,{children:(t,a)=>{r();var e=l("Let’s add some null handling to our function. First, lets look at the Profile class.");o(t,e)},$$slots:{default:!0}});var E=n(Y);c(E,{content:`class Profile {
  final String name; // Can't be null
  final String age;  // Can't be null
  final Stay ?stay;  // Can sometimes be null

	// You must provide name and age, age might not be provided
  Profile({required this.name, required this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    return Profile(
      name: json?['name'] ?? 'No name provided',
      age: json?['age'] ?? 'No age provided',
      stay: json?['stay'] != null ? Stay.fromJson(json['stay']) : null,
    );
  }
}
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`class Profile {
  final String name; // Can't be null
  final String age;  // Can't be null
  final Stay ?stay;  // Can sometimes be null

	// You must provide name and age, age might not be provided
  Profile({required this.name, required this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    return Profile(
      name: json?['name'] ?? 'No name provided',
      age: json?['age'] ?? 'No age provided',
      stay: json?['stay'] != null ? Stay.fromJson(json['stay']) : null,
    );
  }
}`);o(t,e)},$$slots:{default:!0}});var G=n(E);s(G,{children:(t,a)=>{r();var e=_e(),i=n($(e));d(i,{content:"final String name"});var u=n(i,2);d(u,{content:"final String age"});var f=n(u,2);d(f,{content:"final Stay ?stay"});var p=n(f,2);d(p,{content:"Profile({required this.name, required this.age, this.stay})"}),r(),o(t,e)},$$slots:{default:!0}});var z=n(G);s(z,{children:(t,a)=>{r();var e=Ae(),i=n($(e));d(i,{content:"Profile"});var u=n(i,2);d(u,{content:"json?[]"});var f=n(u,2);d(f,{content:"json"});var p=n(f,2);d(p,{content:"json"});var w=n(p,2);d(w,{content:"stay"}),r(),o(t,e)},$$slots:{default:!0}});var U=n(z);s(U,{children:(t,a)=>{r();var e=xe(),i=n($(e));d(i,{content:"Stay"}),r(),o(t,e)},$$slots:{default:!0}});var V=n(U);c(V,{content:`class Stay {
  final String? arrivedAt;
  final String? leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic>? json) {
    return Stay(
      arrivedAt: json?['arrivedAt'],
      leftAt: json?['leftAt'],
    );
  }
}
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`class Stay {
  final String? arrivedAt;
  final String? leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic>? json) {
    return Stay(
      arrivedAt: json?['arrivedAt'],
      leftAt: json?['leftAt'],
    );
  }
}`);o(t,e)},$$slots:{default:!0}});var K=n(V);s(K,{children:(t,a)=>{r();var e=Pe(),i=n($(e));d(i,{content:"arrivedAt"});var u=n(i,2);d(u,{content:"leftAt"}),r(),o(t,e)},$$slots:{default:!0}});var Q=n(K);c(Q,{content:'context.log("Name: ${profile.name}");\ncontext.log("Age: ${profile.age}");\ncontext.log("Arrived at: ${profile.stay?.arrivedAt}");\ncontext.log("Left at: ${profile.stay?.leftAt}");\n',language:"dart",process:!0,children:(t,a)=>{r();var e=l('context.log("Name: ${profile.name}");\ncontext.log("Age: ${profile.age}");\ncontext.log("Arrived at: ${profile.stay?.arrivedAt}");\ncontext.log("Left at: ${profile.stay?.leftAt}");');o(t,e)},$$slots:{default:!0}});var X=n(Q);s(X,{children:(t,a)=>{r();var e=Se(),i=n($(e));d(i,{content:"name"});var u=n(i,2);d(u,{content:"age"});var f=n(u,2);d(f,{content:"arrivedAt"});var p=n(f,2);d(p,{content:"leftAt"}),r(),o(t,e)},$$slots:{default:!0}});var ee=n(X);c(ee,{content:`context.log("Arrived at: \${profile.stay?.arrivedAt?.split('T')[0] ?? 'unknown'}");
context.log("Left at: \${profile.stay?.leftAt?.split('T')[0] ?? 'unknown'}");
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`context.log("Arrived at: \${profile.stay?.arrivedAt?.split('T')[0] ?? 'unknown'}");
context.log("Left at: \${profile.stay?.leftAt?.split('T')[0] ?? 'unknown'}");`);o(t,e)},$$slots:{default:!0}});var te=n(ee);y(te,{level:1,children:(t,a)=>{r();var e=l("The new function");o(t,e)},$$slots:{default:!0}});var ne=n(te);s(ne,{children:(t,a)=>{r();var e=l("Here’s the new Backrush with all the null handling in place.");o(t,e)},$$slots:{default:!0}});var re=n(ne);c(re,{content:`import 'dart:async';

class Stay {
  final String? arrivedAt;
  final String? leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic>? json) {
    return Stay(
      arrivedAt: json?['arrivedAt'],
      leftAt: json?['leftAt'],
    );
  }
}

class Profile {
  final String name;
  final String age;
  final Stay ?stay;

  Profile({required this.name, required this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    return Profile(
      name: json?['name'] ?? 'No name provided',
      age: json?['age'] ?? 'No age provided',
      stay: json?['stay'] != null ? Stay.fromJson(json['stay']) : null,
    );
  }
}

// This is your Backrush function
// It's executed each time we get a request
Future<dynamic> main(final context) async {
  context.log("Here are the people that showed up!");
  var people = context.req.body; // This is JSON parsed as a map
  List<Profile> profiles = (people['profiles'] as List)
      .map((profile) => Profile.fromJson(profile))
      .toList();

  for (var profile in profiles) {
    context.log("Name: \${profile.name}");
    context.log("Age: \${profile.age}");
    context.log("Arrived at: \${profile.stay?.arrivedAt?.split('T')[0] ?? 'unknown'}");
    context.log("Left at: \${profile.stay?.leftAt?.split('T')[0] ?? 'unknown'}");
  }
  context.res.empty();
}
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`import 'dart:async';

class Stay {
  final String? arrivedAt;
  final String? leftAt;

  Stay({this.arrivedAt, this.leftAt});

  factory Stay.fromJson(Map<String, dynamic>? json) {
    return Stay(
      arrivedAt: json?['arrivedAt'],
      leftAt: json?['leftAt'],
    );
  }
}

class Profile {
  final String name;
  final String age;
  final Stay ?stay;

  Profile({required this.name, required this.age, this.stay});

  factory Profile.fromJson(Map<String, dynamic> json) {
    return Profile(
      name: json?['name'] ?? 'No name provided',
      age: json?['age'] ?? 'No age provided',
      stay: json?['stay'] != null ? Stay.fromJson(json['stay']) : null,
    );
  }
}

// This is your Backrush function
// It's executed each time we get a request
Future<dynamic> main(final context) async {
  context.log("Here are the people that showed up!");
  var people = context.req.body; // This is JSON parsed as a map
  List<Profile> profiles = (people['profiles'] as List)
      .map((profile) => Profile.fromJson(profile))
      .toList();

  for (var profile in profiles) {
    context.log("Name: \${profile.name}");
    context.log("Age: \${profile.age}");
    context.log("Arrived at: \${profile.stay?.arrivedAt?.split('T')[0] ?? 'unknown'}");
    context.log("Left at: \${profile.stay?.leftAt?.split('T')[0] ?? 'unknown'}");
  }
  context.res.empty();
}`);o(t,e)},$$slots:{default:!0}});var oe=n(re);s(oe,{children:(t,a)=>{r();var e=l("Which will gracefully handle even malformed JSONs like the one we showed above and still output to the best of its ability.");o(t,e)},$$slots:{default:!0}});var ae=n(oe);c(ae,{content:`Here are the people that showed up!
Name: Jane
Age: 30
Arrived at: unknown
Left at: unknown
Name: Bob
Age: 35
Arrived at: 2022-01-01
Left at: 2022-01-01
`,language:"dart",process:!0,children:(t,a)=>{r();var e=l(`Here are the people that showed up!
Name: Jane
Age: 30
Arrived at: unknown
Left at: unknown
Name: Bob
Age: 35
Arrived at: 2022-01-01
Left at: 2022-01-01`);o(t,e)},$$slots:{default:!0}});var le=n(ae);y(le,{level:1,children:(t,a)=>{r();var e=l("Wrapping up");o(t,e)},$$slots:{default:!0}});var se=n(le);s(se,{children:(t,a)=>{r();var e=l("Dart 3 with sound null-safety will save you from hours of debugging when tracking down null-value related errors at runtime. Forcing you to be conscious of handling null values brings these null-value caused errors from runtime to compile time. Having compiler errors is always a better time than errors in your precious production functions.");o(t,e)},$$slots:{default:!0}});var ie=n(se);s(ie,{children:(t,a)=>{r();var e=we(),i=n($(e));_(i,{href:"https://dart.dev/null-safety#migrate",children:(u,f)=>{r();var p=l("migration guide");o(u,p)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var de=n(ie);y(de,{level:1,children:(t,a)=>{r();var e=l("Resources");o(t,e)},$$slots:{default:!0}});var ue=n(de);s(ue,{children:(t,a)=>{r();var e=l("Visit our documentation to learn more about Dart, join us on Discord to be part of the discussion, view our blog and YouTube channel, or visit our GitHub repository to see our open-source code.");o(t,e)},$$slots:{default:!0}});var he=n(ue);$e(he,{ordered:!1,marker:"-",children:(t,a)=>{var e=be(),i=$(e);A(i,{children:(h,x)=>{_(h,{href:"/docs/products/functions/runtimes",children:(g,P)=>{r();var m=l("Docs");o(g,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=n(i);A(u,{children:(h,x)=>{_(h,{href:"https://appwrite.io/discord",children:(g,P)=>{r();var m=l("Discord");o(g,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=n(u);A(f,{children:(h,x)=>{_(h,{href:"/blog",children:(g,P)=>{r();var m=l("Blog");o(g,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=n(f);A(p,{children:(h,x)=>{_(h,{href:"https://www.youtube.com/channel/UCtBJ1v69gm8NgbCju_03Fiw",children:(g,P)=>{r();var m=l("YouTube");o(g,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var w=n(p);A(w,{children:(h,x)=>{_(h,{href:"https://github.com/appwrite/appwrite",children:(g,P)=>{r();var m=l("GitHub");o(g,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),me(S),o(pe,S)},$$slots:{default:!0}}))}const Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Te,frontmatter:fe},Symbol.toStringTag,{value:"Module"}));export{Ve as _,Te as a};
