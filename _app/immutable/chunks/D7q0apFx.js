import{t as $,b as s,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ue,s as a,f as g,n as o,r as je}from"./NgVQVlRK.js";import{n as Ie}from"./B4IyMRKX.js";import{H as _}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{B as Se}from"./BlhJVlLQ.js";import{C as p}from"./DXp9_3zM.js";import{F as k}from"./OFUKRh55.js";import{L as S,I as P}from"./BhmTgGWB.js";import{P as u}from"./D8YsId2T.js";import{S as y}from"./yHjwcyUH.js";import{L as F}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as Me}from"./CEkRzcqJ.js";const Fe={layout:"post",title:"Swift 101: how to build a library with Swift Package Manager",description:"Learn how to build a library with Swift Package Manager.",date:"2024-08-02T00:00:00.000Z",cover:"/images/blog/swift-101/cover.png",timeToRead:6,author:"jake-barnby",category:"engineering, tutorial",featured:!1};var Ee=$("Before looking at <!>, we first need to understand <!>. Swift organizes code into modules. Each module defines a namespace and which parts of the code can be used from outside the module. You can define all of your code in a single module or break it up into multiple modules that can depend on each other. Using modules lets you easily build on your own reusable code or others’ code.",1),He=$("So, what is a Swift package? A package is a collection of Swift source code files as well as a manifest file called <!>, that defines various properties about the package, such as its name, the products it produces, any dependencies it has, and the targets it is built up of.",1),Le=$("<!> define the libraries and executables produced by a package. A library is simply a collection of files for use as a dependency by other Swift code. An executable is a package that can be run, such as a web server.",1),Oe=$("<!> are other Swift Packages you want to use code from within your package.",1),Ce=$("<!> define the modules within a package. Each target specifies the code that makes up the module, and any dependencies. The dependencies can be other targets within the same package, or products from external packages.",1),Ye=$("<!><!><!>",1),Be=$("Creating a Swift Package from the command line is easy and can be completed with one simple command from the directory in which you want to create your package. For this example, we&#39;ll start with a directory named <!>.",1),De=$("1 source file created inside a <!> directory",1),Ge=$("1 test source file inside a <!> directory",1),qe=$("A <!> manifest file at the root level",1),We=$("<!><!><!><!><!>",1),Ne=$("Of these files, only the single file in the <!> directory and the manifest file are required for the package to build. This means you could easily create your own package by manually creating these two files as well.",1),ze=$("By default, the <!> directory must contain all source code for the package, but you can use sub-directories to define sub-modules if they are also defined as separate targets in your manifest file. Let&#39;s take a look at the generated <!> for the new package to see the pieces we&#39;ve discussed so far:",1),Ke=$("Here, you can see that our package defines one <!>, <!>, one <!> of the same name, and one test target, which depends on the module target.",1),Ve=$("Let&#39;s add a dependency and some code. Adding dependencies with SwiftPM is easy as you can use git URL&#39;s directly. We can add the following to our <!> top-level dependencies block to allow us to the Backrush Swift SDK in our library:",1),Xe=$("This declares that our package will pull in the code from the <!> module in the <!> repository on GitHub, from the tag <!> and allow us to add it to our target dependencies as follows:",1),Ze=$("Here, we added <!>, as this is the name of the library we&#39;re using from the <!> repository.",1),Je=$("Since we&#39;ve changed the dependencies of our package, we need to <!> them. This will happen automatically the first time you run <!> with a new dependency, but if you manually update a version, you&#39;ll need to manually resolve the new version. This can be done by running:",1),Qe=$("This will update the <!> to contain the version metadata about the <!> module we just added.",1),et=$("Swift Package Manager uses a lockfile system similar to <!> for NPM and <!> for Composer. This comes in the form of a file called <!>, which contains metadata about the packages dependencies versions, as well as their transitive dependencies. When you run <!> and the dependencies are fetched, the versions from the <!> file will be used if found.",1),tt=$("<!><!>",1),at=$("Once resolved, we can build our package with <!> again. This time we&#39;ll see the <!> repository pulled into the build checkouts, as well as built with the rest of the library.",1),ot=$("Time to add some code. Let&#39;s open up the source file created earlier as <!> and update with the following:",1),rt=$("<!><!><!>",1),nt=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function st(Te){Me(Te,Ie(Fe,{children:(Ae,it)=>{var x=nt(),T=Ue(x);u(T,{children:(t,n)=>{o();var e=s("The Swift Package Manager, or SwiftPM, has been part of Swift since version 3.0. Initially, it was just for server-side or command-line Swift projects. However, starting with Swift 5 and Xcode 11, SwiftPM now works across the entire Apple ecosystem for building apps. This is great because packages let you organize your code into reusable, logical groups that you can easily share between projects or even with the world.");r(t,e)},$$slots:{default:!0}});var A=a(T);_(A,{level:2,children:(t,n)=>{o();var e=s("Modules");r(t,e)},$$slots:{default:!0}});var R=a(A);u(R,{children:(t,n)=>{o();var e=Ee(),i=a(g(e));y(i,{marker:"**",children:(h,f)=>{o();var v=s("packages");r(h,v)},$$slots:{default:!0}});var d=a(i,2);y(d,{marker:"**",children:(h,f)=>{o();var v=s("modules");r(h,v)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var U=a(R);_(U,{level:2,children:(t,n)=>{o();var e=s("Packages");r(t,e)},$$slots:{default:!0}});var j=a(U);u(j,{children:(t,n)=>{o();var e=He(),i=a(g(e));p(i,{content:"Package.swift"}),o(),r(t,e)},$$slots:{default:!0}});var I=a(j);_(I,{level:2,children:(t,n)=>{o();var e=s("Anatomy of a package");r(t,e)},$$slots:{default:!0}});var M=a(I);S(M,{ordered:!1,marker:"-",children:(t,n)=>{var e=Ye(),i=g(e);P(i,{children:(f,v)=>{var l=Le(),m=g(l);y(m,{marker:"**",children:(c,w)=>{o();var b=s("Products");r(c,b)},$$slots:{default:!0}}),o(),r(f,l)},$$slots:{default:!0}});var d=a(i);P(d,{children:(f,v)=>{var l=Oe(),m=g(l);y(m,{marker:"**",children:(c,w)=>{o();var b=s("Dependencies");r(c,b)},$$slots:{default:!0}}),o(),r(f,l)},$$slots:{default:!0}});var h=a(d);P(h,{children:(f,v)=>{var l=Ce(),m=g(l);y(m,{marker:"**",children:(c,w)=>{o();var b=s("Targets");r(c,b)},$$slots:{default:!0}}),o(),r(f,l)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var E=a(M);_(E,{level:2,children:(t,n)=>{o();var e=s("Creating a Swift package");r(t,e)},$$slots:{default:!0}});var H=a(E);Se(H,{children:(t,n)=>{u(t,{children:(e,i)=>{o();var d=s("This tutorial assumes you already have Swift installed. You can check by running swift-help from your terminal.");r(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var L=a(H);u(L,{children:(t,n)=>{o();var e=Be(),i=a(g(e));p(i,{content:"FooPackage"}),o(),r(t,e)},$$slots:{default:!0}});var O=a(L);k(O,{content:`$ mkdir FooPackage
$ cd FooPackage

FooPackage$ swift package init --type=library

`,process:!0,children:(t,n)=>{o();var e=s(`$ mkdir FooPackage
$ cd FooPackage

FooPackage$ swift package init --type=library`);r(t,e)},$$slots:{default:!0}});var C=a(O);u(C,{children:(t,n)=>{o();var e=s("That’s it! There’ll be some output detailing the files created for your new package. You should see:");r(t,e)},$$slots:{default:!0}});var Y=a(C);S(Y,{ordered:!1,marker:"-",children:(t,n)=>{var e=We(),i=g(e);P(i,{children:(l,m)=>{o();var c=De(),w=a(g(c));p(w,{content:"Sources"}),o(),r(l,c)},$$slots:{default:!0}});var d=a(i);P(d,{children:(l,m)=>{o();var c=Ge(),w=a(g(c));p(w,{content:"Tests"}),o(),r(l,c)},$$slots:{default:!0}});var h=a(d);P(h,{children:(l,m)=>{o();var c=qe(),w=a(g(c));p(w,{content:"Package.swift"}),o(),r(l,c)},$$slots:{default:!0}});var f=a(h);P(f,{children:(l,m)=>{o();var c=s("A README.md file at the root level");r(l,c)},$$slots:{default:!0}});var v=a(f);P(v,{children:(l,m)=>{o();var c=s("A .gitignore file at the root level");r(l,c)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var B=a(Y);u(B,{children:(t,n)=>{o();var e=Ne(),i=a(g(e));p(i,{content:"Sources"}),o(),r(t,e)},$$slots:{default:!0}});var D=a(B);u(D,{children:(t,n)=>{o();var e=ze(),i=a(g(e));p(i,{content:"Sources"});var d=a(i,2);p(d,{content:"Package.swift"}),o(),r(t,e)},$$slots:{default:!0}});var G=a(D);k(G,{content:`// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "TestPackage",
    products: [
        .library(
            name: "FooPackage",
            targets: ["FooPackage"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
            ]
        )
        .testTarget(
            name: "FooPackageTests",
            dependencies: [
                "FooPackage"
            ]
        )
    ]
)

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "TestPackage",
    products: [
        .library(
            name: "FooPackage",
            targets: ["FooPackage"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
            ]
        )
        .testTarget(
            name: "FooPackageTests",
            dependencies: [
                "FooPackage"
            ]
        )
    ]
)`);r(t,e)},$$slots:{default:!0}});var q=a(G);u(q,{children:(t,n)=>{o();var e=Ke(),i=a(g(e));y(i,{marker:"**",children:(f,v)=>{o();var l=s("library");r(f,l)},$$slots:{default:!0}});var d=a(i,2);p(d,{content:"TestPackage"});var h=a(d,2);y(h,{marker:"**",children:(f,v)=>{o();var l=s("target");r(f,l)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var W=a(q);_(W,{level:2,children:(t,n)=>{o();var e=s("The first build");r(t,e)},$$slots:{default:!0}});var N=a(W);u(N,{children:(t,n)=>{o();var e=s("Now that the package has been created let’s build it for the first time with the build command:");r(t,e)},$$slots:{default:!0}});var z=a(N);k(z,{content:`$ swift build

`,process:!0,children:(t,n)=>{o();var e=s("$ swift build");r(t,e)},$$slots:{default:!0}});var K=a(z);u(K,{children:(t,n)=>{o();var e=s("Because the package has no dependencies or code yet, this should be completed almost instantly, displaying “Build Completed!” on success.");r(t,e)},$$slots:{default:!0}});var V=a(K);_(V,{level:2,children:(t,n)=>{o();var e=s("Adding dependencies");r(t,e)},$$slots:{default:!0}});var X=a(V);u(X,{children:(t,n)=>{o();var e=Ve(),i=a(g(e));p(i,{content:"Package.swift"}),o(),r(t,e)},$$slots:{default:!0}});var Z=a(X);k(Z,{content:`.package(name: "Backrush", url: "https://github.com/backrush/sdk-for-swift", from: "0.1.0")

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s('.package(name: "Backrush", url: "https://github.com/backrush/sdk-for-swift", from: "0.1.0")');r(t,e)},$$slots:{default:!0}});var J=a(Z);u(J,{children:(t,n)=>{o();var e=Xe(),i=a(g(e));p(i,{content:"Backrush"});var d=a(i,2);p(d,{content:"sdk-for-swift"});var h=a(d,2);p(h,{content:"0.1.0"}),o(),r(t,e)},$$slots:{default:!0}});var Q=a(J);k(Q,{content:`.target(
    name: "FooPackage",
    dependencies: [
        "Backrush"
    ]
)

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`.target(
    name: "FooPackage",
    dependencies: [
        "Backrush"
    ]
)`);r(t,e)},$$slots:{default:!0}});var ee=a(Q);u(ee,{children:(t,n)=>{o();var e=Ze(),i=a(g(e));p(i,{content:"Backrush"});var d=a(i,2);p(d,{content:"sdk-for-swift"}),o(),r(t,e)},$$slots:{default:!0}});var te=a(ee);u(te,{children:(t,n)=>{o();var e=s("Let's take a look at the full manifest file with the new dependency added:");r(t,e)},$$slots:{default:!0}});var ae=a(te);k(ae,{content:`// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "FooPackage",
    products: [
        .library(
            name: "FooPackage",
            targets: ["FooPackage"]),
    ],
    dependencies: [
        .package(name: "Backrush", url: "https://github.com/backrush/sdk-for-swift", from: "0.1.0")
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
                "Backrush"
            ]
        )
        .testTarget(
            name: "FooPackageTests",
            dependencies: [
                "FooPackage"
            ]
        )
    ]
)

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "FooPackage",
    products: [
        .library(
            name: "FooPackage",
            targets: ["FooPackage"]),
    ],
    dependencies: [
        .package(name: "Backrush", url: "https://github.com/backrush/sdk-for-swift", from: "0.1.0")
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
                "Backrush"
            ]
        )
        .testTarget(
            name: "FooPackageTests",
            dependencies: [
                "FooPackage"
            ]
        )
    ]
)`);r(t,e)},$$slots:{default:!0}});var oe=a(ae);u(oe,{children:(t,n)=>{o();var e=Je(),i=a(g(e));y(i,{marker:"**",children:(h,f)=>{o();var v=s("resolve");r(h,v)},$$slots:{default:!0}});var d=a(i,2);p(d,{content:"swift build"}),o(),r(t,e)},$$slots:{default:!0}});var re=a(oe);k(re,{content:`$ swift package resolve

`,process:!0,children:(t,n)=>{o();var e=s("$ swift package resolve");r(t,e)},$$slots:{default:!0}});var ne=a(re);u(ne,{children:(t,n)=>{o();var e=Qe(),i=a(g(e));p(i,{content:"Package.resolved"});var d=a(i,2);p(d,{content:"Backrush"}),o(),r(t,e)},$$slots:{default:!0}});var se=a(ne);Se(se,{children:(t,n)=>{var e=tt(),i=g(e);u(i,{children:(h,f)=>{y(h,{marker:"**",children:(v,l)=>{o();var m=s("What's going on here?");r(v,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=a(i);u(d,{children:(h,f)=>{o();var v=et(),l=a(g(v));p(l,{content:"package.lock"});var m=a(l,2);p(m,{content:"composer.lock"});var c=a(m,2);p(c,{content:"Package.resolved"});var w=a(c,2);p(w,{content:"swift build"});var b=a(w,2);p(b,{content:"Package.resolved"}),o(),r(h,v)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var ie=a(se);u(ie,{children:(t,n)=>{o();var e=at(),i=a(g(e));p(i,{content:"swift build"});var d=a(i,2);p(d,{content:"sdk-for-swift"}),o(),r(t,e)},$$slots:{default:!0}});var le=a(ie);_(le,{level:2,children:(t,n)=>{o();var e=s("Adding library code");r(t,e)},$$slots:{default:!0}});var de=a(le);u(de,{children:(t,n)=>{o();var e=ot(),i=a(g(e));p(i,{content:"Sources/FooPackage/FooPackage.swift"}),o(),r(t,e)},$$slots:{default:!0}});var ce=a(de);k(ce,{content:`import Backrush

struct FooPackage {

    static let client = Client()
    static let account = Account(client)

    public static func login(
        endpoint: String,
        projectId: String,
        email: String,
        password: String,
        completion: @escaping (Result<Session, BackrushError>) -> Void
    ) {
        client
            .setEndpoint(endpoint)
            .setProject(projectId)

        account.createSession(
            email: email,
            password: password,
            completion: completion
        )
    }
}

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`import Backrush

struct FooPackage {

    static let client = Client()
    static let account = Account(client)

    public static func login(
        endpoint: String,
        projectId: String,
        email: String,
        password: String,
        completion: @escaping (Result<Session, BackrushError>) -> Void
    ) {
        client
            .setEndpoint(endpoint)
            .setProject(projectId)

        account.createSession(
            email: email,
            password: password,
            completion: completion
        )
    }
}`);r(t,e)},$$slots:{default:!0}});var ue=a(ce);u(ue,{children:(t,n)=>{o();var e=s("We now have a login function! We just need to deploy the package, and we'll be able to use the login function from any other package or Apple app.");r(t,e)},$$slots:{default:!0}});var pe=a(ue);_(pe,{level:2,children:(t,n)=>{o();var e=s("Deploying the package");r(t,e)},$$slots:{default:!0}});var $e=a(pe);u($e,{children:(t,n)=>{o();var e=s("Fortunately deploying packages with Swift Package Manager is very easy. As the packages are Git based, all you need to do is push your changes to your default branch and create a tag for your release:");r(t,e)},$$slots:{default:!0}});var ge=a($e);k(ge,{content:`$ git init
$ git add .
$ git remote add origin [GitHub Repository URL]
$ git commit -m "Initial Commit"
$ git tag 1.0.0
$ git push origin main --tags

`,process:!0,children:(t,n)=>{o();var e=s(`$ git init
$ git add .
$ git remote add origin [GitHub Repository URL]
$ git commit -m "Initial Commit"
$ git tag 1.0.0
$ git push origin main --tags`);r(t,e)},$$slots:{default:!0}});var fe=a(ge);_(fe,{level:2,children:(t,n)=>{o();var e=s("Using as a dependency");r(t,e)},$$slots:{default:!0}});var he=a(fe);u(he,{children:(t,n)=>{o();var e=s("Using the same method we used earlier to add the Backrush Apple SDK as a dependency, we can now add the newly deployed package as a dependency of a second package:");r(t,e)},$$slots:{default:!0}});var ve=a(he);k(ve,{content:`...

    dependencies: [
        .package(name: "FooPackage", url: "https://github.com/[YOUR GITHUB USERNAME]/[YOUR GITHUB REPOSITORY]", from: "1.0.0")
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
                "FooPackage"
            ]
        )
    ]

    ...

)

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`...

    dependencies: [
        .package(name: "FooPackage", url: "https://github.com/[YOUR GITHUB USERNAME]/[YOUR GITHUB REPOSITORY]", from: "1.0.0")
    ],
    targets: [
        .target(
            name: "FooPackage",
            dependencies: [
                "FooPackage"
            ]
        )
    ]

    ...

)`);r(t,e)},$$slots:{default:!0}});var me=a(ve);_(me,{level:2,children:(t,n)=>{o();var e=s("Using the dependency");r(t,e)},$$slots:{default:!0}});var _e=a(me);u(_e,{children:(t,n)=>{o();var e=s("With the package added as a dependency, we can now use the function we defined earlier anywhere in the second package:");r(t,e)},$$slots:{default:!0}});var we=a(_e);k(we,{content:`import FooPackage

FooPackage.login(
    endpoint: "http://localhost/v1",
    projectId: "6bfgh45fng3",
    email: "test@test.test",
    password: "password"
) { result in
    ...
}

`,language:"swift",process:!0,children:(t,n)=>{o();var e=s(`import FooPackage

FooPackage.login(
    endpoint: "http://localhost/v1",
    projectId: "6bfgh45fng3",
    email: "test@test.test",
    password: "password"
) { result in
    ...
}`);r(t,e)},$$slots:{default:!0}});var ke=a(we);_(ke,{level:2,children:(t,n)=>{o();var e=s("Updating your package");r(t,e)},$$slots:{default:!0}});var Pe=a(ke);u(Pe,{children:(t,n)=>{o();var e=s("The process for updating your package is the same as deploying the initial version. You just need to push your changes to the default branch and add a new version tag.");r(t,e)},$$slots:{default:!0}});var ye=a(Pe);_(ye,{level:2,children:(t,n)=>{o();var e=s("That's it!");r(t,e)},$$slots:{default:!0}});var be=a(ye);u(be,{children:(t,n)=>{o();var e=s("You've now created, deployed, used and updated your very own Swift Package! Packages are a great way to re-use code and share your creations with the world.");r(t,e)},$$slots:{default:!0}});var xe=a(be);_(xe,{level:2,children:(t,n)=>{o();var e=s("Resources");r(t,e)},$$slots:{default:!0}});var Re=a(xe);S(Re,{ordered:!1,marker:"-",children:(t,n)=>{var e=rt(),i=g(e);P(i,{children:(f,v)=>{F(f,{href:"https://swift.org/",children:(l,m)=>{o();var c=s("Swift");r(l,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=a(i);P(d,{children:(f,v)=>{F(f,{href:"https://swift.org/package-manager/",children:(l,m)=>{o();var c=s("Swift Package Manager");r(l,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=a(d);P(h,{children:(f,v)=>{F(f,{href:"https://developer.apple.com/documentation/xcode/creating_a_standalone_swift_package_with_xcode",children:(l,m)=>{o();var c=s("Creating Swift Packages with Xcode");r(l,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}}),je(x),r(Ae,x)},$$slots:{default:!0}}))}const Rt=Object.freeze(Object.defineProperty({__proto__:null,default:st,frontmatter:Fe},Symbol.toStringTag,{value:"Module"}));export{Rt as _,st as a};
