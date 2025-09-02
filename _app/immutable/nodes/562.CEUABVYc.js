import{t as d,b as n,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as he,s as t,f as p,n as e,r as ge}from"../chunks/NgVQVlRK.js";import{n as ve}from"../chunks/B4IyMRKX.js";import{S as G}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import{I as fe}from"../chunks/BypEz2Fd.js";import{T as _e,a as K}from"../chunks/BHbEtIoO.js";import{O as ne,a as oe}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as V}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as b}from"../chunks/DXp9_3zM.js";import{F as Y}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{L as we,I as te}from"../chunks/BhmTgGWB.js";import{P as u}from"../chunks/D8YsId2T.js";import{S as $}from"../chunks/yHjwcyUH.js";import{L as Q}from"../chunks/yh4_9ChP.js";/* empty css                */import{A as ye}from"../chunks/CqOphJLh.js";const xe={layout:"article",title:"Start with Flutter",description:"Build Flutter apps with Backrush and learn how to use our powerful backend to add authentication, user management, file storage, and more.",difficulty:"beginner",readtime:10,back:"/docs/quick-starts"};var Pe=d("<!><!>",1),Ae=d("Head to the <!>.",1),be=d("Then, under <!>, add a <!>. You can choose between many different platfroms.",1),ke=d("Add your app <!> and <!>. If you&#39;re testing your app locally, <!> should be <!>.",1),Ce=d("For web, in order to capture the OAuth2 callback URL and send it to the application using JavaScript <!>, you need to create an html file inside <!> folder of your Flutter project. For example <!> with the following content.",1),Se=d("The redirection URL passed to the authentication service must be the same as the URL on which the application is running including schema, host, and port if applicable. The path must point to the created HTML file, <!> in this case. The callbackUrlScheme parameter in the authenticate() method isn&#39;t applicable when you&#39;re developing for web platforms. This means you can use this parameter to define URL schemes specifically for native platforms without affecting the web version of your Flutter application.",1),Te=d("While running Flutter Web, make sure your Backrush project and your Flutter client use the same top-level domain and protocol (HTTP or HTTPS) to communicate. When communicating between different domains or protocols, you may receive HTTP status error 401 because some modern browsers block cross-site or insecure cookies for enhanced privacy. In production, Backrush allows you to set multiple <!> for each project.",1),Ie=d("<!><!><!><!><!>",1),Ee=d("Add your app <!> and <!>. You can find your <!> in the <!> tab for your app&#39;s primary target in XCode.",1),Fe=d("The Backrush SDK uses <!> on iOS 12+ and <!> on iOS 11 to allow OAuth authentication. You have to change your iOS Deployment Target in Xcode to be iOS &gt;= 11 to be able to build your app on an emulator or a real device.",1),Be=d("In <!>, open <!> in your app&#39;s iOS folder.",1),De=d("To view your app&#39;s settings, select the Runner project in the XCode project navigator. Then, in the main view sidebar, select the <!>.",1),Oe=d("Select the <!> tab.",1),Le=d("In <!> &gt; <!>, select iOS 11.0 or above",1),Re=d("<!><!><!><!>",1),je=d("<!><!><!>",1),Me=d("Add your app&#39;s <!> and <!>, Your package name is generally the <!> in your app-level <!> file.",1),Ue=d("In order to capture the Backrush OAuth callback url, the following activity needs to be added inside the <!> tag, along side the existing <!> tags in your <!>. Be sure to replace the <!> string with your actual Backrush project ID. You can find your Backrush project ID in you project settings screen in your Backrush Console.",1),We=d("<!><!><!>",1),ze=d("Add your app <!> and <!>. Your package name is generally the <!> in your <!> file. If you cannot find the correct package name, run the application in Linux and make any request with proper exception handling. You should get the application ID needed to add in the received error message.",1),Ye=d("Add your app <!> and <!>. You can find your <!> in the <!> tab for your app&#39;s primary target in XCode.",1),qe=d("The Backrush SDK uses <!> on macOS 10.15+ to allow OAuth authentication. You have to change your macOS <!> in XCode to be macOS &gt;= 10.15 to be able to build your app for macOS.",1),Je=d("In order to capture the Backrush OAuth 2 callback url, the following URL scheme needs to added to your <!>.",1),Ne=d("<!><!><!><!>",1),He=d("For <!>, add your app <em>name</em> and <em>package name</em>. Your package name is generally the <!> in your <!> file. If you cannot find the correct package name, run the application in Windows, and make any request with proper exception handling. You should get the application ID needed to add in the received error message.",1),Xe=d("<!><!><!><!><!><!>",1),Ge=d("<!><!><!><!><!><!><!><!><!>",1),Ke=d("<!><!>",1),Ve=d("Find your project&#39;s ID in the <!> page.",1),Qe=d("Open the generated <!> and add the following code to it, replace <!> with your project ID. This imports and initializes Backrush.",1),Ze=d("<!><!><!><!><!>",1),et=d("Then, append the following widgets to <!> create your login page.",1),tt=d("<!><!>",1),rt=d("Run your project with <!> and select a browser, platform, or emulator to run your project.",1),nt=d("<article><!><!><!><!><!><!><!></article>");function It(ce){ye(ce,ve(xe,{children:(ue,ot)=>{var re=nt(),ae=he(re);u(ae,{children:(F,q)=>{e();var x=n("Learn how to setup your first Flutter project powered by Backrush.");r(F,x)},$$slots:{default:!0}});var le=t(ae);G(le,{id:"step-1",step:1,title:"Create Flutter project",children:(F,q)=>{var x=Pe(),k=p(x);u(k,{children:(y,O)=>{e();var P=n("Create a Flutter project.");r(y,P)},$$slots:{default:!0}});var T=t(k);Y(T,{content:`flutter create my_app && cd my_app
`,language:"sh",process:!0,children:(y,O)=>{e();var P=n("flutter create my_app && cd my_app");r(y,P)},$$slots:{default:!0}}),r(F,x)},$$slots:{default:!0}});var se=t(le);G(se,{id:"step-2",step:2,title:"Create project",children:(F,q)=>{var x=Ge(),k=p(x);u(k,{children:(f,j)=>{e();var h=Ae(),L=t(p(h));Q(L,{href:"https://cloud.backrush.io/console",children:(J,W)=>{e();var N=n("Backrush Console");r(J,N)},$$slots:{default:!0}}),e(),r(f,h)},$$slots:{default:!0}});var T=t(k);ne(T,{children:(f,j)=>{u(f,{children:(h,L)=>{V(h,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var y=t(T);oe(y,{children:(f,j)=>{u(f,{children:(h,L)=>{V(h,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var O=t(y);u(O,{children:(f,j)=>{e();var h=n("If this is your first time using Backrush, create an account and create your first project.");r(f,h)},$$slots:{default:!0}});var P=t(O);u(P,{children:(f,j)=>{e();var h=be(),L=t(p(h));$(L,{marker:"**",children:(W,N)=>{e();var H=n("Add a platform");r(W,H)},$$slots:{default:!0}});var J=t(L,2);$(J,{marker:"**",children:(W,N)=>{e();var H=n("Flutter app");r(W,H)},$$slots:{default:!0}}),e(),r(f,h)},$$slots:{default:!0}});var I=t(P);_e(I,{children:(f,j)=>{var h=Xe(),L=p(h);K(L,{id:"web",title:"Web",children:(R,Z)=>{var C=Ie(),B=p(C);u(B,{children:(s,l)=>{e();var o=ke(),c=t(p(o));$(c,{marker:"**",children:(a,v)=>{e();var D=n("name");r(a,D)},$$slots:{default:!0}});var _=t(c,2);$(_,{marker:"**",children:(a,v)=>{e();var D=n("Hostname");r(a,D)},$$slots:{default:!0}});var i=t(_,2);$(i,{marker:"**",children:(a,v)=>{e();var D=n("Hostname");r(a,D)},$$slots:{default:!0}});var m=t(i,2);b(m,{content:"localhost"}),e(),r(s,o)},$$slots:{default:!0}});var A=t(B);u(A,{children:(s,l)=>{e();var o=Ce(),c=t(p(o));b(c,{content:"postMessage()"});var _=t(c,2);b(_,{content:"./web"});var i=t(_,2);b(i,{content:"auth.html"}),e(),r(s,o)},$$slots:{default:!0}});var S=t(A);Y(S,{content:`<!DOCTYPE html>
<title>Authentication complete</title>
<p>Authentication is complete. If this does not happen automatically, please close the window.</p>
<script>
  window.opener.postMessage({
    'flutter-web-auth-2': window.location.href
  }, window.location.origin);
  window.close();
<\/script>
`,language:"html",process:!0,children:(s,l)=>{e();var o=n(`<!DOCTYPE html>
<title>Authentication complete</title>
<p>Authentication is complete. If this does not happen automatically, please close the window.</p>
<script>
  window.opener.postMessage({
    'flutter-web-auth-2': window.location.href
  }, window.location.origin);
  window.close();
<\/script>`);r(s,o)},$$slots:{default:!0}});var g=t(S);u(g,{children:(s,l)=>{e();var o=Se(),c=t(p(o));b(c,{content:"/auth.html"}),e(),r(s,o)},$$slots:{default:!0}});var w=t(g);fe(w,{title:"Flutter web cross-domain communication & cookies",children:(s,l)=>{u(s,{children:(o,c)=>{e();var _=Te(),i=t(p(_));Q(i,{href:"/docs/advanced/platform/custom-domains",children:(m,a)=>{e();var v=n("custom-domains");r(m,v)},$$slots:{default:!0}}),e(),r(o,_)},$$slots:{default:!0}})}}),r(R,C)},$$slots:{default:!0}});var J=t(L);K(J,{id:"ios",title:"iOS",children:(R,Z)=>{var C=je(),B=p(C);u(B,{children:(g,w)=>{e();var s=Ee(),l=t(p(s));$(l,{marker:"**",children:(i,m)=>{e();var a=n("name");r(i,a)},$$slots:{default:!0}});var o=t(l,2);$(o,{marker:"**",children:(i,m)=>{e();var a=n("Bundle ID");r(i,a)},$$slots:{default:!0}});var c=t(o,2);$(c,{marker:"**",children:(i,m)=>{e();var a=n("Bundle Identifier");r(i,a)},$$slots:{default:!0}});var _=t(c,2);$(_,{marker:"**",children:(i,m)=>{e();var a=n("General");r(i,a)},$$slots:{default:!0}}),e(),r(g,s)},$$slots:{default:!0}});var A=t(B);u(A,{children:(g,w)=>{e();var s=Fe(),l=t(p(s));b(l,{content:"ASWebAuthenticationSession"});var o=t(l,2);b(o,{content:"SFAuthenticationSession"}),e(),r(g,s)},$$slots:{default:!0}});var S=t(A);we(S,{ordered:!0,marker:".",children:(g,w)=>{var s=Re(),l=p(s);te(l,{children:(i,m)=>{e();var a=Be(),v=t(p(a));$(v,{marker:"**",children:(z,X)=>{e();var ee=n("XCode");r(z,ee)},$$slots:{default:!0}});var D=t(v,2);b(D,{content:"Runner.xcworkspace"}),e(),r(i,a)},$$slots:{default:!0}});var o=t(l);te(o,{children:(i,m)=>{e();var a=De(),v=t(p(a));$(v,{marker:"**",children:(D,z)=>{e();var X=n("Runner target");r(D,X)},$$slots:{default:!0}}),e(),r(i,a)},$$slots:{default:!0}});var c=t(o);te(c,{children:(i,m)=>{e();var a=Oe(),v=t(p(a));$(v,{marker:"**",children:(D,z)=>{e();var X=n("General");r(D,X)},$$slots:{default:!0}}),e(),r(i,a)},$$slots:{default:!0}});var _=t(c);te(_,{children:(i,m)=>{e();var a=Le(),v=t(p(a));$(v,{marker:"**",children:(z,X)=>{e();var ee=n("Deployment Info");r(z,ee)},$$slots:{default:!0}});var D=t(v,2);$(D,{marker:"**",children:(z,X)=>{e();var ee=n("Target");r(z,ee)},$$slots:{default:!0}}),e(),r(i,a)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(R,C)},$$slots:{default:!0}});var W=t(J);K(W,{id:"android",title:"Android",children:(R,Z)=>{var C=We(),B=p(C);u(B,{children:(g,w)=>{e();var s=Me(),l=t(p(s));$(l,{marker:"**",children:(i,m)=>{e();var a=n("name");r(i,a)},$$slots:{default:!0}});var o=t(l,2);$(o,{marker:"**",children:(i,m)=>{e();var a=n("package name");r(i,a)},$$slots:{default:!0}});var c=t(o,2);$(c,{marker:"**",children:(i,m)=>{e();var a=n("applicationId");r(i,a)},$$slots:{default:!0}});var _=t(c,2);Q(_,{href:"https://github.com/Back-rush/playground-for-flutter/blob/master/android/app/build.gradle#L41",children:(i,m)=>{e();var a=n("build.gradle");r(i,a)},$$slots:{default:!0}}),e(),r(g,s)},$$slots:{default:!0}});var A=t(B);u(A,{children:(g,w)=>{e();var s=Ue(),l=t(p(s));b(l,{content:"<application>"});var o=t(l,2);b(o,{content:"<activity>"});var c=t(o,2);Q(c,{href:"https://github.com/Back-rush/playground-for-flutter/blob/master/android/app/src/main/AndroidManifest.xml",children:(i,m)=>{e();var a=n("AndroidManifest.xml");r(i,a)},$$slots:{default:!0}});var _=t(c,2);$(_,{marker:"**",children:(i,m)=>{e();var a=n("[PROJECT_ID]");r(i,a)},$$slots:{default:!0}}),e(),r(g,s)},$$slots:{default:!0}});var S=t(A);Y(S,{content:`<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="com.linusu.flutter_web_auth_2.CallbackActivity" android:exported="true">
      <intent-filter android:label="flutter_web_auth_2">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="backrush-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>
`,language:"xml",process:!0,children:(g,w)=>{e();var s=n(`<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="com.linusu.flutter_web_auth_2.CallbackActivity" android:exported="true">
      <intent-filter android:label="flutter_web_auth_2">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="backrush-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>`);r(g,s)},$$slots:{default:!0}}),r(R,C)},$$slots:{default:!0}});var N=t(W);K(N,{id:"linux",title:"Linux",children:(R,Z)=>{u(R,{children:(C,B)=>{e();var A=ze(),S=t(p(A));$(S,{marker:"**",children:(l,o)=>{e();var c=n("name");r(l,c)},$$slots:{default:!0}});var g=t(S,2);$(g,{marker:"**",children:(l,o)=>{e();var c=n("package name");r(l,c)},$$slots:{default:!0}});var w=t(g,2);$(w,{marker:"**",children:(l,o)=>{e();var c=n("name");r(l,c)},$$slots:{default:!0}});var s=t(w,2);Q(s,{href:"https://github.com/Back-rush/playground-for-flutter/blob/master/pubspec.yaml#L1",children:(l,o)=>{e();var c=n("pubspec.yaml");r(l,c)},$$slots:{default:!0}}),e(),r(C,A)},$$slots:{default:!0}})},$$slots:{default:!0}});var H=t(N);K(H,{id:"macos",title:"macOS",children:(R,Z)=>{var C=Ne(),B=p(C);u(B,{children:(w,s)=>{e();var l=Ye(),o=t(p(l));$(o,{marker:"**",children:(m,a)=>{e();var v=n("name");r(m,v)},$$slots:{default:!0}});var c=t(o,2);$(c,{marker:"**",children:(m,a)=>{e();var v=n("Bundle ID");r(m,v)},$$slots:{default:!0}});var _=t(c,2);$(_,{marker:"**",children:(m,a)=>{e();var v=n("Bundle Identifier");r(m,v)},$$slots:{default:!0}});var i=t(_,2);$(i,{marker:"**",children:(m,a)=>{e();var v=n("General");r(m,v)},$$slots:{default:!0}}),e(),r(w,l)},$$slots:{default:!0}});var A=t(B);u(A,{children:(w,s)=>{e();var l=qe(),o=t(p(l));b(o,{content:"ASWebAuthenticationSession"});var c=t(o,2);$(c,{marker:"**",children:(_,i)=>{e();var m=n("Deployment Target");r(_,m)},$$slots:{default:!0}}),e(),r(w,l)},$$slots:{default:!0}});var S=t(A);u(S,{children:(w,s)=>{e();var l=Je(),o=t(p(l));b(o,{content:"Info.plist"}),e(),r(w,l)},$$slots:{default:!0}});var g=t(S);Y(g,{content:`<key>CFBundleURLTypes</key>
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
`,language:"xml",process:!0,children:(w,s)=>{e();var l=n(`<key>CFBundleURLTypes</key>
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
</array>`);r(w,l)},$$slots:{default:!0}}),r(R,C)},$$slots:{default:!0}});var me=t(H);K(me,{id:"windows",title:"Windows",children:(R,Z)=>{u(R,{children:(C,B)=>{e();var A=He(),S=t(p(A));$(S,{marker:"**",children:(s,l)=>{e();var o=n("Windows");r(s,o)},$$slots:{default:!0}});var g=t(S,6);$(g,{marker:"**",children:(s,l)=>{e();var o=n("name");r(s,o)},$$slots:{default:!0}});var w=t(g,2);Q(w,{href:"https://github.com/Back-rush/playground-for-flutter/blob/master/pubspec.yaml#L1",children:(s,l)=>{e();var o=n("pubspec.yaml");r(s,o)},$$slots:{default:!0}}),e(),r(C,A)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(f,h)},$$slots:{default:!0}});var U=t(I);ne(U,{children:(f,j)=>{u(f,{children:(h,L)=>{V(h,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var E=t(U);oe(E,{children:(f,j)=>{u(f,{children:(h,L)=>{V(h,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var M=t(E);u(M,{children:(f,j)=>{e();var h=n("You can skip optional steps.");r(f,h)},$$slots:{default:!0}}),r(F,x)},$$slots:{default:!0}});var ie=t(se);G(ie,{id:"step-3",step:3,title:"Install Backrush",children:(F,q)=>{var x=Ke(),k=p(x);u(k,{children:(y,O)=>{e();var P=n("Install the Backrush SDK for Flutter.");r(y,P)},$$slots:{default:!0}});var T=t(k);Y(T,{content:`flutter pub add backrush:12.0.3
`,language:"sh",process:!0,children:(y,O)=>{e();var P=n("flutter pub add backrush:12.0.3");r(y,P)},$$slots:{default:!0}}),r(F,x)},$$slots:{default:!0}});var de=t(ie);G(de,{id:"step-4",step:4,title:"Import Backrush",children:(F,q)=>{var x=Ze(),k=p(x);u(k,{children:(I,U)=>{e();var E=Ve(),M=t(p(E));$(M,{marker:"**",children:(f,j)=>{e();var h=n("Settings");r(f,h)},$$slots:{default:!0}}),e(),r(I,E)},$$slots:{default:!0}});var T=t(k);ne(T,{children:(I,U)=>{u(I,{children:(E,M)=>{V(E,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var y=t(T);oe(y,{children:(I,U)=>{u(I,{children:(E,M)=>{V(E,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var O=t(y);u(O,{children:(I,U)=>{e();var E=Qe(),M=t(p(E));b(M,{content:"lib/main.dart"});var f=t(M,2);b(f,{content:"<PROJECT_ID>"}),e(),r(I,E)},$$slots:{default:!0}});var P=t(O);Y(P,{content:`import 'package:flutter/material.dart';
import 'package:backrush/backrush.dart';
import 'package:backrush/models.dart' as models;

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Client client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>");
  Account account = Account(client);

  runApp(MaterialApp(
    home: MyApp(account: account),
  ));
}
class MyApp extends StatefulWidget {
  final Account account;

  MyApp({required this.account});

  @override
  MyAppState createState() {
    return MyAppState();
  }
}
`,language:"dart",process:!0,children:(I,U)=>{e();var E=n(`import 'package:flutter/material.dart';
import 'package:backrush/backrush.dart';
import 'package:backrush/models.dart' as models;

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Client client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>");
  Account account = Account(client);

  runApp(MaterialApp(
    home: MyApp(account: account),
  ));
}
class MyApp extends StatefulWidget {
  final Account account;

  MyApp({required this.account});

  @override
  MyAppState createState() {
    return MyAppState();
  }
}`);r(I,E)},$$slots:{default:!0}}),r(F,x)},$$slots:{default:!0}});var pe=t(de);G(pe,{id:"step-5",step:5,title:"Create a login page",children:(F,q)=>{var x=tt(),k=p(x);u(k,{children:(y,O)=>{e();var P=et(),I=t(p(P));b(I,{content:"lib/main.dart"}),e(),r(y,P)},$$slots:{default:!0}});var T=t(k);Y(T,{content:`class MyAppState extends State<MyApp> {
  models.User? loggedInUser;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController nameController = TextEditingController();

  Future<void> login(String email, String password) async {
    await widget.account.createEmailPasswordSession(email: email, password: password);
    final user = await widget.account.get();
    setState(() {
      loggedInUser = user;
    });
  }

  Future<void> register(String email, String password, String name) async {
    await widget.account.create(
        userId: ID.unique(), email: email, password: password, name: name);
    await login(email, password);
  }

  Future<void> logout() async {
    await widget.account.deleteSession(sessionId: 'current');
    setState(() {
      loggedInUser = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(loggedInUser != null
                ? 'Logged in as \${loggedInUser!.name}'
                : 'Not logged in'),
            SizedBox(height: 16.0),
            TextField(
              controller: emailController,
              decoration: InputDecoration(labelText: 'Email'),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            SizedBox(height: 16.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    login(emailController.text, passwordController.text);
                  },
                  child: Text('Login'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    register(emailController.text, passwordController.text,
                        nameController.text);
                  },
                  child: Text('Register'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    logout();
                  },
                  child: Text('Logout'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
`,language:"dart",process:!0,children:(y,O)=>{e();var P=n(`class MyAppState extends State<MyApp> {
  models.User? loggedInUser;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController nameController = TextEditingController();

  Future<void> login(String email, String password) async {
    await widget.account.createEmailPasswordSession(email: email, password: password);
    final user = await widget.account.get();
    setState(() {
      loggedInUser = user;
    });
  }

  Future<void> register(String email, String password, String name) async {
    await widget.account.create(
        userId: ID.unique(), email: email, password: password, name: name);
    await login(email, password);
  }

  Future<void> logout() async {
    await widget.account.deleteSession(sessionId: 'current');
    setState(() {
      loggedInUser = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(loggedInUser != null
                ? 'Logged in as \${loggedInUser!.name}'
                : 'Not logged in'),
            SizedBox(height: 16.0),
            TextField(
              controller: emailController,
              decoration: InputDecoration(labelText: 'Email'),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            SizedBox(height: 16.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    login(emailController.text, passwordController.text);
                  },
                  child: Text('Login'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    register(emailController.text, passwordController.text,
                        nameController.text);
                  },
                  child: Text('Register'),
                ),
                SizedBox(width: 16.0),
                ElevatedButton(
                  onPressed: () {
                    logout();
                  },
                  child: Text('Logout'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`);r(y,P)},$$slots:{default:!0}}),r(F,x)},$$slots:{default:!0}});var $e=t(pe);G($e,{id:"step-6",step:6,title:"All set",children:(F,q)=>{u(F,{children:(x,k)=>{e();var T=rt(),y=t(p(T));b(y,{content:"flutter run"}),e(),r(x,T)},$$slots:{default:!0}})},$$slots:{default:!0}}),ge(re),r(ue,re)},$$slots:{default:!0}}))}export{It as component};
