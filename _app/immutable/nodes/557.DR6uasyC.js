import{t as u,b as s,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f as v,c as Y,n as e,r as H}from"../chunks/NgVQVlRK.js";import{n as z}from"../chunks/B4IyMRKX.js";import{S as O}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as M,a as D}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as j}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as U}from"../chunks/DXp9_3zM.js";import{F as T}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as c}from"../chunks/D8YsId2T.js";import{S as d}from"../chunks/yHjwcyUH.js";import{L as K}from"../chunks/yh4_9ChP.js";import{A as Q}from"../chunks/CqOphJLh.js";const Z={layout:"article",title:"Start with Apple",description:"Build iOS apps with Backrush and learn how to use our powerful backend to add authentication, user management, file storage, and more.",difficulty:"beginner",readtime:10,back:"/docs/quick-starts"};var ee=u("Learn how to setup your first Apple project powered by Backrush and the <!>.",1),te=u("Open Xcode and click <!>.",1),re=u("Choose your desired project template, for example <!>,  and click <!>.",1),oe=u("Now enter your app <!> and <!> and click <!>. You will need both of these values later when you create your project in the Backrush console.",1),ne=u("Choose a directory for your project in and click <!> to create your project.",1),ae=u("<!><!><!><!>",1),se=u("Head to the <!>.",1),le=u("Then, under <!>, add an <!>. Choose any of <!>, <!>, <!> or <!> as your Apple platform. If you are creating a multi-platform app, you can add more platforms later.",1),ie=u("Add your app&#39;s <!> and <!>, your bundle identifier is the one entered when creating an Xcode project. For existing projects, you should use the <!> from your project files <!> section.",1),de=u("<!><!><!><!><!><!><!><!><!>",1),pe=u("To add the Backrush SDK for Apple as a dependency, open the <!> menu and click <!>.",1),ce=u("In the <!> search box, enter https://github.com/backrush/sdk-for-apple.",1),ue=u("Once the SDK is found, use <!> as version, select <!> as your <!> and click <!>.",1),$e=u("When dependency resolution is complete, click <!> again to add the SDK package to your target.",1),ve=u("In order to allow creating OAuth sessions, the following URL scheme must be added to your <!> file.",1),fe=u("If you&#39;re using UIKit as opposed to SwiftUI, you will also need to add the following to your <!> file.",1),_e=u("<!><!><!><!><!><!><!><!>",1),me=u("Find your project&#39;s ID in the <!> page.",1),he=u("Create a new file <!> and add the following code to it, replacing <!> with your project ID.",1),ge=u("<!><!><!><!><!>",1),we=u("Add the following code to <!>.",1),Pe=u("<!><!>",1),ke=u("Run your project by clicking <!> in Xcode.",1),ye=u("<article><!><!><!><!><!><!><!></article>");function We(X){Q(X,z(Z,{children:(W,xe)=>{var F=ye(),E=Y(F);c(E,{children:(b,R)=>{e();var m=ee(),y=t(v(m));K(y,{href:"https://github.com/backrush/sdk-for-apple",children:(g,w)=>{e();var x=s("Backrush Apple SDK");r(g,x)},$$slots:{default:!0}}),e(),r(b,m)},$$slots:{default:!0}});var V=t(E);O(V,{id:"step-1",step:1,title:"Create Apple project",children:(b,R)=>{var m=ae(),y=v(m);c(y,{children:(_,$)=>{e();var f=te(),p=t(v(f));d(p,{marker:"**",children:(l,a)=>{e();var o=s("Create a new Xcode project");r(l,o)},$$slots:{default:!0}}),e(),r(_,f)},$$slots:{default:!0}});var g=t(y);c(g,{children:(_,$)=>{e();var f=re(),p=t(v(f));d(p,{marker:"**",children:(a,o)=>{e();var n=s("iOS App");r(a,n)},$$slots:{default:!0}});var l=t(p,2);d(l,{marker:"**",children:(a,o)=>{e();var n=s("Next");r(a,n)},$$slots:{default:!0}}),e(),r(_,f)},$$slots:{default:!0}});var w=t(g);c(w,{children:(_,$)=>{e();var f=oe(),p=t(v(f));d(p,{marker:"**",children:(o,n)=>{e();var i=s("product name");r(o,i)},$$slots:{default:!0}});var l=t(p,2);d(l,{marker:"**",children:(o,n)=>{e();var i=s("bundle identifier");r(o,i)},$$slots:{default:!0}});var a=t(l,2);d(a,{marker:"**",children:(o,n)=>{e();var i=s("Next");r(o,i)},$$slots:{default:!0}}),e(),r(_,f)},$$slots:{default:!0}});var x=t(w);c(x,{children:(_,$)=>{e();var f=ne(),p=t(v(f));d(p,{marker:"**",children:(l,a)=>{e();var o=s("Create");r(l,o)},$$slots:{default:!0}}),e(),r(_,f)},$$slots:{default:!0}}),r(b,m)},$$slots:{default:!0}});var B=t(V);O(B,{id:"step-2",step:2,title:"Create Backrush project",children:(b,R)=>{var m=de(),y=v(m);c(y,{children:(a,o)=>{e();var n=se(),i=t(v(n));K(i,{href:"https://cloud.backrush.io/console",children:(P,k)=>{e();var S=s("Backrush Console");r(P,S)},$$slots:{default:!0}}),e(),r(a,n)},$$slots:{default:!0}});var g=t(y);M(g,{children:(a,o)=>{c(a,{children:(n,i)=>{j(n,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var w=t(g);D(w,{children:(a,o)=>{c(a,{children:(n,i)=>{j(n,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var x=t(w);c(x,{children:(a,o)=>{e();var n=s("If this is your first time using Backrush, create an account and create your first project.");r(a,n)},$$slots:{default:!0}});var _=t(x);c(_,{children:(a,o)=>{e();var n=le(),i=t(v(n));d(i,{marker:"**",children:(h,L)=>{e();var I=s("Add a platform");r(h,I)},$$slots:{default:!0}});var P=t(i,2);d(P,{marker:"**",children:(h,L)=>{e();var I=s("Apple app");r(h,I)},$$slots:{default:!0}});var k=t(P,2);d(k,{marker:"**",children:(h,L)=>{e();var I=s("iOS");r(h,I)},$$slots:{default:!0}});var S=t(k,2);d(S,{marker:"**",children:(h,L)=>{e();var I=s("macOS");r(h,I)},$$slots:{default:!0}});var C=t(S,2);d(C,{marker:"**",children:(h,L)=>{e();var I=s("watchOS");r(h,I)},$$slots:{default:!0}});var A=t(C,2);d(A,{marker:"**",children:(h,L)=>{e();var I=s("tvOS");r(h,I)},$$slots:{default:!0}}),e(),r(a,n)},$$slots:{default:!0}});var $=t(_);c($,{children:(a,o)=>{e();var n=ie(),i=t(v(n));d(i,{marker:"**",children:(C,A)=>{e();var h=s("product name");r(C,h)},$$slots:{default:!0}});var P=t(i,2);d(P,{marker:"**",children:(C,A)=>{e();var h=s("bundle identifier");r(C,h)},$$slots:{default:!0}});var k=t(P,2);d(k,{marker:"**",children:(C,A)=>{e();var h=s("bundle identifier");r(C,h)},$$slots:{default:!0}});var S=t(k,2);d(S,{marker:"**",children:(C,A)=>{e();var h=s("Identity");r(C,h)},$$slots:{default:!0}}),e(),r(a,n)},$$slots:{default:!0}});var f=t($);M(f,{children:(a,o)=>{c(a,{children:(n,i)=>{j(n,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var p=t(f);D(p,{children:(a,o)=>{c(a,{children:(n,i)=>{j(n,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var l=t(p);c(l,{children:(a,o)=>{e();var n=s("You can skip optional steps.");r(a,n)},$$slots:{default:!0}}),r(b,m)},$$slots:{default:!0}});var N=t(B);O(N,{id:"step-3",step:3,title:"Add the Backrush SDK",children:(b,R)=>{var m=_e(),y=v(m);c(y,{children:(l,a)=>{e();var o=pe(),n=t(v(o));d(n,{marker:"**",children:(P,k)=>{e();var S=s("File");r(P,S)},$$slots:{default:!0}});var i=t(n,2);d(i,{marker:"**",children:(P,k)=>{e();var S=s("Add Packages");r(P,S)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var g=t(y);c(g,{children:(l,a)=>{e();var o=ce(),n=t(v(o));d(n,{marker:"**",children:(i,P)=>{e();var k=s("Package URL");r(i,k)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var w=t(g);c(w,{children:(l,a)=>{e();var o=ue(),n=t(v(o));U(n,{content:"5.0.0"});var i=t(n,2);d(i,{marker:"**",children:(S,C)=>{e();var A=s("Up to Next Major Version");r(S,A)},$$slots:{default:!0}});var P=t(i,2);d(P,{marker:"**",children:(S,C)=>{e();var A=s("Dependency Rule");r(S,A)},$$slots:{default:!0}});var k=t(P,2);d(k,{marker:"**",children:(S,C)=>{e();var A=s("Add Package");r(S,A)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var x=t(w);c(x,{children:(l,a)=>{e();var o=$e(),n=t(v(o));d(n,{marker:"**",children:(i,P)=>{e();var k=s("Add Package");r(i,k)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var _=t(x);c(_,{children:(l,a)=>{e();var o=ve(),n=t(v(o));d(n,{marker:"**",children:(i,P)=>{e();var k=s("Info.plist");r(i,k)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var $=t(_);T($,{content:`<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.backrush</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>backrush-callback-[PROJECT_ID]</string>
    </array>
</dict>
</array>
`,language:"xml",process:!0,children:(l,a)=>{e();var o=s(`<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.backrush</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>backrush-callback-[PROJECT_ID]</string>
    </array>
</dict>
</array>`);r(l,o)},$$slots:{default:!0}});var f=t($);c(f,{children:(l,a)=>{e();var o=fe(),n=t(v(o));d(n,{marker:"**",children:(i,P)=>{e();var k=s("SceneDelegate.swift");r(i,k)},$$slots:{default:!0}}),e(),r(l,o)},$$slots:{default:!0}});var p=t(f);T(p,{content:`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("backrush-callback") else {
        return
    }

    WebAuthComponent.handleIncomingCookie(from: url)
}
`,language:"swift",process:!0,children:(l,a)=>{e();var o=s(`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("backrush-callback") else {
        return
    }

    WebAuthComponent.handleIncomingCookie(from: url)
}`);r(l,o)},$$slots:{default:!0}}),r(b,m)},$$slots:{default:!0}});var q=t(N);O(q,{id:"step-4",step:4,title:"Create Backrush Singleton",children:(b,R)=>{var m=ge(),y=v(m);c(y,{children:($,f)=>{e();var p=me(),l=t(v(p));d(l,{marker:"**",children:(a,o)=>{e();var n=s("Settings");r(a,n)},$$slots:{default:!0}}),e(),r($,p)},$$slots:{default:!0}});var g=t(y);M(g,{children:($,f)=>{c($,{children:(p,l)=>{j(p,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var w=t(g);D(w,{children:($,f)=>{c($,{children:(p,l)=>{j(p,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var x=t(w);c(x,{children:($,f)=>{e();var p=he(),l=t(v(p));U(l,{content:"Backrush.swift"});var a=t(l,2);U(a,{content:"[PROJECT_ID]"}),e(),r($,p)},$$slots:{default:!0}});var _=t(x);T(_,{content:`import Foundation
import Backrush
import JSONCodable

class Backrush {
    var client: Client
    var account: Account
    
    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
            .setProject("[PROJECT_ID]")
        
        self.account = Account(client)
    }
    
    public func onRegister(
        _ email: String,
        _ password: String
    ) async throws -> User<[String: AnyCodable]> {
        try await account.create(
            userId: ID.unique(),
            email: email,
            password: password
        )
    }
    
    public func onLogin(
        _ email: String,
        _ password: String
    ) async throws -> Session {
        try await account.createEmailPasswordSession(
            email: email,
            password: password
        )
    }
    
    public func onLogout() async throws {
        _ = try await account.deleteSession(
            sessionId: "current"
        )
    }
    
}

`,language:"swift",process:!0,children:($,f)=>{e();var p=s(`import Foundation
import Backrush
import JSONCodable

class Backrush {
    var client: Client
    var account: Account
    
    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
            .setProject("[PROJECT_ID]")
        
        self.account = Account(client)
    }
    
    public func onRegister(
        _ email: String,
        _ password: String
    ) async throws -> User<[String: AnyCodable]> {
        try await account.create(
            userId: ID.unique(),
            email: email,
            password: password
        )
    }
    
    public func onLogin(
        _ email: String,
        _ password: String
    ) async throws -> Session {
        try await account.createEmailPasswordSession(
            email: email,
            password: password
        )
    }
    
    public func onLogout() async throws {
        _ = try await account.deleteSession(
            sessionId: "current"
        )
    }
    
}`);r($,p)},$$slots:{default:!0}}),r(b,m)},$$slots:{default:!0}});var J=t(q);O(J,{id:"step-5",step:5,title:"Create a login page",children:(b,R)=>{var m=Pe(),y=v(m);c(y,{children:(w,x)=>{e();var _=we(),$=t(v(_));U($,{content:"ContentView.swift"}),e(),r(w,_)},$$slots:{default:!0}});var g=t(y);T(g,{content:`import SwiftUI

class ViewModel: ObservableObject {
    @Published var email: String = ""
    @Published var password: String = ""
}

struct ContentView: View {
    @ObservedObject var viewModel = ViewModel()
    let backrush = Backrush()

    var body: some View {
        VStack {
            TextField(
                "Email",
                text: $viewModel.email
            )
            SecureField(
                "Password",
                text: $viewModel.password
            )
            Button(
                action: { Task {
                    try await backrush.onRegister(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Register")
                }
            )
            Button(
                action: { Task {
                    try await backrush.onLogin(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Login")
                }
            )
        }
        .padding()
    }
}
`,language:"swift",process:!0,children:(w,x)=>{e();var _=s(`import SwiftUI

class ViewModel: ObservableObject {
    @Published var email: String = ""
    @Published var password: String = ""
}

struct ContentView: View {
    @ObservedObject var viewModel = ViewModel()
    let backrush = Backrush()

    var body: some View {
        VStack {
            TextField(
                "Email",
                text: $viewModel.email
            )
            SecureField(
                "Password",
                text: $viewModel.password
            )
            Button(
                action: { Task {
                    try await backrush.onRegister(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Register")
                }
            )
            Button(
                action: { Task {
                    try await backrush.onLogin(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Login")
                }
            )
        }
        .padding()
    }
}`);r(w,_)},$$slots:{default:!0}}),r(b,m)},$$slots:{default:!0}});var G=t(J);O(G,{id:"step-6",step:6,title:"All set",children:(b,R)=>{c(b,{children:(m,y)=>{e();var g=ke(),w=t(v(g));d(w,{marker:"**",children:(x,_)=>{e();var $=s("Start active scheme");r(x,$)},$$slots:{default:!0}}),e(),r(m,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),H(F),r(W,F)},$$slots:{default:!0}}))}export{We as component};
