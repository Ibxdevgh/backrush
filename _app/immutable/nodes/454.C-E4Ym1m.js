import{t as u,b as r,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as _e,s as n,f as h,n as e,r as me}from"../chunks/NgVQVlRK.js";import{n as ge}from"../chunks/B4IyMRKX.js";import{H as T}from"../chunks/CXsRaEhZ.js";import{M as de}from"../chunks/hMT8fFzP.js";import{I as Y}from"../chunks/BypEz2Fd.js";import{T as Ae,a as b}from"../chunks/BHbEtIoO.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as k}from"../chunks/DXp9_3zM.js";import{F as x}from"../chunks/OFUKRh55.js";import{L as Pe,I as S}from"../chunks/BhmTgGWB.js";import{P as O}from"../chunks/D8YsId2T.js";import{S as R}from"../chunks/yHjwcyUH.js";import{L as U}from"../chunks/yh4_9ChP.js";import{T as we}from"../chunks/D8BqvLkQ.js";import{T as Ie,a as D,b as pe,c as Oe,d as C}from"../chunks/BpU_IltG.js";import{A as Ee}from"../chunks/CqOphJLh.js";const ye={layout:"article",title:"OAuth 2 login",description:"Integrate OAuth2 authentication seamlessly with Backrush. Learn how to connect your application with third-party OAuth2 providers for secure user login and access."};var xe=u("OAuth2 login creates an <!> in Backrush, allowing users to connect multiple providers to a single account. Learn more in <!>.",1),ke=u("Navigate to <!> &gt; <!>.",1),Ce=u("Copy information from your OAuth2 provider&#39;s developer platform to fill the <!> modal in the Backrush Console.",1),Se=u("Configure redirect URL in your OAuth 2 provider&#39;s developer platform. Set it to URL provided to you by <!> modal in Backrush Console.",1),Re=u("<!><!><!><!><!><!><!>",1),be=u("To initialize the OAuth 2 login process, use the <!> route.",1),De=u("You can pass the scopes to request through the <!> parameter when creating a session. The scope is provider-specific and can be found in the provider&#39;s documentation.",1),Te=u("For Android, add the following activity inside the <!> tag in your <!>. Replace <!> with your actual Backrush project ID.",1),Ue=u("<!><!><!><!>",1),Le=u("For Apple, add the following URL scheme to your <!>.",1),je=u("If you&#39;re using UIKit, you&#39;ll also need to add a hook to your <!> file to ensure cookies work correctly.",1),Ye=u("<!><!><!><!><!>",1),Ne=u("For Android, add the following activity inside the <!> tag in your <!>. Replace <!> with your actual Backrush project ID.",1),Ge=u("<!><!><!>",1),Je=u("If using Expo, set the URL scheme in your <!> file.",1),Be=u("<!><!><!>",1),Fe=u("<!><!><!><!><!>",1),We=u("You can optionally configure <!> or <!> redirect links on web to handle success and failure scenarios.",1),qe=u("Replace <!> with either <!> to get or update the active session, or with a specific session ID.",1),He=u("<!><!><!><!>",1),Me=u("An OAuth 2 <!> will have the following attributes.",1),Ve=u("<!><!>",1),ze=u("<!><!>",1),Ke=u("<!><!>",1),Qe=u("Access token from the OAuth 2 provider. Use this to <!> to fetch personal data.",1),Xe=u("<!><!>",1),Ze=u("<!><!>",1),et=u("<!><!><!><!>",1),tt=u("<!><!>",1),nt=u("You can use the <!> to make requests to your OAuth 2 provider. Refer to the docs for the OAuth 2 provider you&#39;re using to learn about making API calls with the access token.",1),ot=u("Check the value of <!> to know if the token is expired or is about to expire. You can refresh the provider session by calling the <!> endpoint whenever your user visits your app. Avoid refreshing before every request, which might cause rate limit problems.",1),rt=u("<!><!><!><!>",1),st=u("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ct(ue){Ee(ue,ge(ye,{children:(ve,it)=>{var L=st(),N=_e(L);O(N,{children:(s,g)=>{e();var o=r("OAuth authentication allows users to log in using accounts from other popular services. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable.");t(s,o)},$$slots:{default:!0}});var G=n(N);O(G,{children:(s,g)=>{e();var o=r("When using OAuth to authenticate, the authentication request is initiated from the client application. The user is then redirected to an OAuth 2 provider to complete the authentication step, and finally, the user is redirected back to the client application.");t(s,o)},$$slots:{default:!0}});var J=n(G);Y(J,{title:"Identities and OAuth2",children:(s,g)=>{O(s,{children:(o,$)=>{e();var _=xe(),A=n(h(_));R(A,{marker:"**",children:(f,m)=>{e();var v=r("identity");t(f,v)},$$slots:{default:!0}});var y=n(A,2);U(y,{href:"/docs/products/auth/identities",children:(f,m)=>{e();var v=r("Identities");t(f,v)},$$slots:{default:!0}}),e(),t(o,_)},$$slots:{default:!0}})}});var B=n(J);T(B,{id:"configure",level:1,children:(s,g)=>{e();var o=r("Configure OAuth 2 login");t(s,o)},$$slots:{default:!0}});var F=n(B);O(F,{children:(s,g)=>{e();var o=r("Before using OAuth 2 login, you need to enable and configure an OAuth 2 login provider.");t(s,o)},$$slots:{default:!0}});var W=n(F);Pe(W,{ordered:!0,marker:".",children:(s,g)=>{var o=Re(),$=h(o);S($,{children:(d,I)=>{e();var i=r("Navigate to your Backrush project.");t(d,i)},$$slots:{default:!0}});var _=n($);S(_,{children:(d,I)=>{e();var i=ke(),E=n(h(i));R(E,{marker:"**",children:(p,a)=>{e();var l=r("Auth");t(p,l)},$$slots:{default:!0}});var c=n(E,2);R(c,{marker:"**",children:(p,a)=>{e();var l=r("Settings");t(p,l)},$$slots:{default:!0}}),e(),t(d,i)},$$slots:{default:!0}});var A=n(_);S(A,{children:(d,I)=>{e();var i=r("Find and open the OAuth provider.");t(d,i)},$$slots:{default:!0}});var y=n(A);S(y,{children:(d,I)=>{e();var i=r("In the OAuth 2 settings modal, use the toggle to enable the provider.");t(d,i)},$$slots:{default:!0}});var f=n(y);S(f,{children:(d,I)=>{e();var i=r("Create and OAuth 2 app on the provider's developer platform.");t(d,i)},$$slots:{default:!0}});var m=n(f);S(m,{children:(d,I)=>{e();var i=Ce(),E=n(h(i));R(E,{marker:"**",children:(c,p)=>{e();var a=r("OAuth2 Settings");t(c,a)},$$slots:{default:!0}}),e(),t(d,i)},$$slots:{default:!0}});var v=n(m);S(v,{children:(d,I)=>{e();var i=Se(),E=n(h(i));R(E,{marker:"**",children:(c,p)=>{e();var a=r("OAuth2 Settings");t(c,a)},$$slots:{default:!0}}),e(),t(d,i)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var q=n(W);T(q,{id:"init",level:1,children:(s,g)=>{e();var o=r("Initialize OAuth 2 login");t(s,o)},$$slots:{default:!0}});var H=n(q);O(H,{children:(s,g)=>{e();var o=be(),$=n(h(o));U($,{href:"/docs/references/cloud/client-web/account#createOAuth2Session",children:(_,A)=>{e();var y=r("Create OAuth 2 Session");t(_,y)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var M=n(H);O(M,{children:(s,g)=>{e();var o=r("OAuth2 sessions allow you to specify the scope of the access you want to request from the OAuth2 provider. The requested scopes describe which resources a session can access.");t(s,o)},$$slots:{default:!0}});var V=n(M);O(V,{children:(s,g)=>{e();var o=De(),$=n(h(o));k($,{content:"scopes"}),e(),t(s,o)},$$slots:{default:!0}});var z=n(V);Ae(z,{children:(s,g)=>{var o=Fe(),$=h(o);b($,{id:"js",title:"Javascript",children:(m,v)=>{x(m,{content:`import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

// Go to OAuth provider login page
account.createOAuth2Session(
    OAuthProvider.Github, // provider
    'https://example.com/success', // redirect here on success
    'https://example.com/failed', // redirect here on failure
    ['repo', 'user'] // scopes (optional)
);
`,language:"client-web",process:!0,children:(d,I)=>{e();var i=r(`import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

// Go to OAuth provider login page
account.createOAuth2Session(
    OAuthProvider.Github, // provider
    'https://example.com/success', // redirect here on success
    'https://example.com/failed', // redirect here on failure
    ['repo', 'user'] // scopes (optional)
);`);t(d,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=n($);b(_,{id:"flutter",title:"Flutter",children:(m,v)=>{var d=Ue(),I=h(d);O(I,{children:(p,a)=>{e();var l=Te(),P=n(h(l));k(P,{content:"<application>"});var w=n(P,2);k(w,{content:"AndroidManifest.xml"});var j=n(w,2);k(j,{content:"<PROJECT_ID>"}),e(),t(p,l)},$$slots:{default:!0}});var i=n(I);x(i,{content:`<!-- Add this inside the <application> tag, along side the existing <activity> tags -->
<activity android:exported="true" android:name="com.linusu.flutter_web_auth_2.CallbackActivity" >
  <intent-filter android:label="flutter_web_auth_2">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="appwrite-callback-[PROJECT_ID]" />
  </intent-filter>
</activity>
`,language:"xml",process:!0,children:(p,a)=>{e();var l=r(`<!-- Add this inside the <application> tag, along side the existing <activity> tags -->
<activity android:exported="true" android:name="com.linusu.flutter_web_auth_2.CallbackActivity" >
  <intent-filter android:label="flutter_web_auth_2">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="appwrite-callback-[PROJECT_ID]" />
  </intent-filter>
</activity>`);t(p,l)},$$slots:{default:!0}});var E=n(i);O(E,{children:(p,a)=>{e();var l=r("No other configuration is required for iOS.");t(p,l)},$$slots:{default:!0}});var c=n(E);x(c,{content:`import 'package:appwrite/appwrite.dart';
import 'package:appwrite/enums.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final account = Account(client);

// Go to OAuth provider login page
await account.createOAuth2Session(
    provider: OAuthProvider.github,
    scopes: ['repo', 'user']
);
`,language:"client-flutter",process:!0,children:(p,a)=>{e();var l=r(`import 'package:appwrite/appwrite.dart';
import 'package:appwrite/enums.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final account = Account(client);

// Go to OAuth provider login page
await account.createOAuth2Session(
    provider: OAuthProvider.github,
    scopes: ['repo', 'user']
);`);t(p,l)},$$slots:{default:!0}}),t(m,d)},$$slots:{default:!0}});var A=n(_);b(A,{id:"apple",title:"Apple",children:(m,v)=>{var d=Ye(),I=h(d);O(I,{children:(a,l)=>{e();var P=Le(),w=n(h(P));k(w,{content:"Info.plist"}),e(),t(a,P)},$$slots:{default:!0}});var i=n(I);x(i,{content:`<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-<PROJECT_ID></string>
    </array>
</dict>
</array>
`,language:"xml",process:!0,children:(a,l)=>{e();var P=r(`<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-<PROJECT_ID></string>
    </array>
</dict>
</array>`);t(a,P)},$$slots:{default:!0}});var E=n(i);O(E,{children:(a,l)=>{e();var P=je(),w=n(h(P));k(w,{content:"SceneDelegate.swift"}),e(),t(a,P)},$$slots:{default:!0}});var c=n(E);x(c,{content:`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("appwrite-callback") else {
        return
    }
    WebAuthComponent.handleIncomingCookie(from: url)
}
`,language:"client-apple",process:!0,children:(a,l)=>{e();var P=r(`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("appwrite-callback") else {
        return
    }
    WebAuthComponent.handleIncomingCookie(from: url)
}`);t(a,P)},$$slots:{default:!0}});var p=n(c);x(p,{content:`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let account = Account(client)

// Go to OAuth provider login page
try await account.createOAuth2Session(
    provider: .github,
    scopes: ['repo', 'user']
)
`,language:"client-apple",process:!0,children:(a,l)=>{e();var P=r(`import Backrush
import BackrushEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID

let account = Account(client)

// Go to OAuth provider login page
try await account.createOAuth2Session(
    provider: .github,
    scopes: ['repo', 'user']
)`);t(a,P)},$$slots:{default:!0}}),t(m,d)},$$slots:{default:!0}});var y=n(A);b(y,{id:"android",title:"Android",children:(m,v)=>{var d=Ge(),I=h(d);O(I,{children:(c,p)=>{e();var a=Ne(),l=n(h(a));k(l,{content:"<application>"});var P=n(l,2);k(P,{content:"AndroidManifest.xml"});var w=n(P,2);k(w,{content:"<PROJECT_ID>"}),e(),t(c,a)},$$slots:{default:!0}});var i=n(I);x(i,{content:`<!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
<activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
  <intent-filter android:label="android_web_auth">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="appwrite-callback-<PROJECT_ID>" />
  </intent-filter>
</activity>
`,language:"xml",process:!0,children:(c,p)=>{e();var a=r(`<!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
<activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
  <intent-filter android:label="android_web_auth">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="appwrite-callback-<PROJECT_ID>" />
  </intent-filter>
</activity>`);t(c,a)},$$slots:{default:!0}});var E=n(i);x(E,{content:`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.enums.OAuthProvider

val client = Client(context)                     // Activity or application context
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

// Go to OAuth provider login page
account.createOAuth2Session(
    provider = OAuthProvider.GITHUB,
    scopes = listOf('repo', 'user')
)
`,language:"client-android-kotlin",process:!0,children:(c,p)=>{e();var a=r(`import io.appwrite.Client
import io.appwrite.services.Account
import io.appwrite.enums.OAuthProvider

val client = Client(context)                     // Activity or application context
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID

val account = Account(client)

// Go to OAuth provider login page
account.createOAuth2Session(
    provider = OAuthProvider.GITHUB,
    scopes = listOf('repo', 'user')
)`);t(c,a)},$$slots:{default:!0}}),t(m,d)},$$slots:{default:!0}});var f=n(y);b(f,{id:"react-native",title:"React Native",children:(m,v)=>{var d=Be(),I=h(d);O(I,{children:(c,p)=>{e();var a=Je(),l=n(h(a));k(l,{content:"app.json"}),e(),t(c,a)},$$slots:{default:!0}});var i=n(I);x(i,{content:`{
  "expo": {
    "scheme": "myapp"
  }
}
`,language:"json",process:!0,children:(c,p)=>{e();var a=r(`{
  "expo": {
    "scheme": "myapp"
  }
}`);t(c,a)},$$slots:{default:!0}});var E=n(i);x(E,{content:`import { Client, Account, OAuthProvider } from "appwrite";
import { makeRedirectUri } from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

// Create a deep link that works across Expo environments
// Ensure localhost is used for the hostname to validation error for success/failure URLs
const deepLink = new URL(makeRedirectUri({preferLocalhost: true}));
if (!deepLink.hostname) {
    deepLink.hostname = 'localhost';
}
const scheme = \`\${deepLink.protocol}//\`; // e.g. 'exp://' or 'playground://'

// Start OAuth flow
const loginUrl = await account.createOAuth2Token(
    provider,
    \`\${deepLink}\`,
    \`\${deepLink}\`,
);

// Open loginUrl and listen for the scheme redirect
const result = await WebBrowser.openAuthSessionAsync(\`\${loginUrl}\`, scheme);

// Extract credentials from OAuth redirect URL
const url = new URL(result.url);
const secret = url.searchParams.get('secret');
const userId = url.searchParams.get('userId');

// Create session with OAuth credentials
await account.createSession(userId, secret);
// Redirect as needed
`,language:"client-react-native",process:!0,children:(c,p)=>{e();var a=r(`import { Client, Account, OAuthProvider } from "appwrite";
import { makeRedirectUri } from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

// Create a deep link that works across Expo environments
// Ensure localhost is used for the hostname to validation error for success/failure URLs
const deepLink = new URL(makeRedirectUri({preferLocalhost: true}));
if (!deepLink.hostname) {
    deepLink.hostname = 'localhost';
}
const scheme = \`\${deepLink.protocol}//\`; // e.g. 'exp://' or 'playground://'

// Start OAuth flow
const loginUrl = await account.createOAuth2Token(
    provider,
    \`\${deepLink}\`,
    \`\${deepLink}\`,
);

// Open loginUrl and listen for the scheme redirect
const result = await WebBrowser.openAuthSessionAsync(\`\${loginUrl}\`, scheme);

// Extract credentials from OAuth redirect URL
const url = new URL(result.url);
const secret = url.searchParams.get('secret');
const userId = url.searchParams.get('userId');

// Create session with OAuth credentials
await account.createSession(userId, secret);
// Redirect as needed`);t(c,a)},$$slots:{default:!0}}),t(m,d)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var K=n(z);O(K,{children:(s,g)=>{e();var o=r("You'll be redirected to the OAuth 2 provider's login page to log in. Once complete, your user will be redirected back to your app.");t(s,o)},$$slots:{default:!0}});var Q=n(K);O(Q,{children:(s,g)=>{e();var o=We(),$=n(h(o));k($,{content:"success"});var _=n($,2);k(_,{content:"failure"}),e(),t(s,o)},$$slots:{default:!0}});var X=n(Q);T(X,{id:"profile",level:1,children:(s,g)=>{e();var o=r("OAuth 2 profile");t(s,o)},$$slots:{default:!0}});var Z=n(X);O(Z,{children:(s,g)=>{e();var o=r("After authenticating a user through their OAuth 2 provider, you can fetch their profile information such as their avatar image or name. To do this you can use the access token from the OAuth 2 provider and make API calls to the provider.");t(s,o)},$$slots:{default:!0}});var ee=n(Z);O(ee,{children:(s,g)=>{e();var o=r("After creating an OAuth 2 session, you can fetch the session to get information about the provider.");t(s,o)},$$slots:{default:!0}});var te=n(ee);Y(te,{title:"Tip",children:(s,g)=>{O(s,{children:(o,$)=>{e();var _=qe(),A=n(h(_));k(A,{content:"[SESSION_ID]"});var y=n(A,2);k(y,{content:'"current"'}),e(),t(o,_)},$$slots:{default:!0}})}});var ne=n(te);de(ne,{children:(s,g)=>{var o=He(),$=h(o);x($,{content:`import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

const session = await account.getSession('current');

// Provider information
console.log(session.provider);
console.log(session.providerUid);
console.log(session.providerAccessToken);
`,language:"client-web",process:!0,children:(f,m)=>{e();var v=r(`import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

const session = await account.getSession('current');

// Provider information
console.log(session.provider);
console.log(session.providerUid);
console.log(session.providerAccessToken);`);t(f,v)},$$slots:{default:!0}});var _=n($);x(_,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final account = Account(client);

final session = await getSession(
    sessionId : "[SESSION_ID]"
);

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);
`,language:"client-flutter",process:!0,children:(f,m)=>{e();var v=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

final account = Account(client);

final session = await getSession(
    sessionId : "[SESSION_ID]"
);

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);`);t(f,v)},$$slots:{default:!0}});var A=n(_);x(A,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.getSession(
    sessionId: "[SESSION_ID]"
)

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);
`,language:"client-apple",process:!0,children:(f,m)=>{e();var v=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.getSession(
    sessionId: "[SESSION_ID]"
)

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);`);t(f,v)},$$slots:{default:!0}});var y=n(A);x(y,{content:`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val account = Account(client)

val response = account.getSession(
    sessionId = "[SESSION_ID]"
)

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);
`,language:"client-android-kotlin",process:!0,children:(f,m)=>{e();var v=r(`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

val account = Account(client)

val response = account.getSession(
    sessionId = "[SESSION_ID]"
)

// Provider information
print(session.provider);
print(session.providerUid);
print(session.providerAccessToken);`);t(f,v)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var oe=n(ne);O(oe,{children:(s,g)=>{e();var o=Me(),$=n(h(o));U($,{href:"/docs/references/cloud/models/session",children:(_,A)=>{e();var y=r("session");t(_,y)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var re=n(oe);we(re,{children:(s,g)=>{var o=tt(),$=h(o);Ie($,{children:(A,y)=>{D(A,{children:(f,m)=>{var v=Ve(),d=h(v);pe(d,{children:(i,E)=>{e();var c=r("Property");t(i,c)},$$slots:{default:!0}});var I=n(d);pe(I,{children:(i,E)=>{e();var c=r("Description");t(i,c)},$$slots:{default:!0}}),t(f,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=n($);Oe(_,{children:(A,y)=>{var f=et(),m=h(f);D(m,{children:(i,E)=>{var c=ze(),p=h(c);C(p,{children:(l,P)=>{e();var w=r("provider");t(l,w)},$$slots:{default:!0}});var a=n(p);C(a,{children:(l,P)=>{e();var w=r("The OAuth2 Provider.");t(l,w)},$$slots:{default:!0}}),t(i,c)},$$slots:{default:!0}});var v=n(m);D(v,{children:(i,E)=>{var c=Ke(),p=h(c);C(p,{children:(l,P)=>{e();var w=r("providerUid");t(l,w)},$$slots:{default:!0}});var a=n(p);C(a,{children:(l,P)=>{e();var w=r("User ID from the OAuth 2 Provider.");t(l,w)},$$slots:{default:!0}}),t(i,c)},$$slots:{default:!0}});var d=n(v);D(d,{children:(i,E)=>{var c=Xe(),p=h(c);C(p,{children:(l,P)=>{e();var w=r("providerAccessToken");t(l,w)},$$slots:{default:!0}});var a=n(p);C(a,{children:(l,P)=>{e();var w=Qe(),j=n(h(w));R(j,{marker:"**",children:($e,at)=>{e();var fe=r("make requests to the OAuth 2 provider");t($e,fe)},$$slots:{default:!0}}),e(),t(l,w)},$$slots:{default:!0}}),t(i,c)},$$slots:{default:!0}});var I=n(d);D(I,{children:(i,E)=>{var c=Ze(),p=h(c);C(p,{children:(l,P)=>{e();var w=r("providerAccessTokenExpiry");t(l,w)},$$slots:{default:!0}});var a=n(p);C(a,{children:(l,P)=>{e();var w=r("Check this value to know if an access token is about to expire.");t(l,w)},$$slots:{default:!0}}),t(i,c)},$$slots:{default:!0}}),t(A,f)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var se=n(re);O(se,{children:(s,g)=>{e();var o=nt(),$=n(h(o));k($,{content:"providerAccessToken"}),e(),t(s,o)},$$slots:{default:!0}});var ie=n(se);T(ie,{id:"refresh-tokens",level:1,children:(s,g)=>{e();var o=r("Refresh tokens");t(s,o)},$$slots:{default:!0}});var ae=n(ie);O(ae,{children:(s,g)=>{e();var o=r("OAuth 2 sessions expire to protect from security risks. This means the OAuth 2 session with a provider may expire, even when an Backrush session remains active. OAuth 2 sessions should be refreshed periodically so access tokens don't expire.");t(s,o)},$$slots:{default:!0}});var ce=n(ae);O(ce,{children:(s,g)=>{e();var o=ot(),$=n(h(o));k($,{content:"providerAccessTokenExpiry"});var _=n($,2);U(_,{href:"/docs/references/cloud/client-web/account#updateSession",children:(A,y)=>{e();var f=r("Update OAuth Session");t(A,f)},$$slots:{default:!0}}),e(),t(s,o)},$$slots:{default:!0}});var le=n(ce);de(le,{children:(s,g)=>{var o=rt(),$=h(o);x($,{content:`const promise = account.updateSession('[SESSION_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(f,m)=>{e();var v=r(`const promise = account.updateSession('[SESSION_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);t(f,v)},$$slots:{default:!0}});var _=n($);x(_,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

Account account = Account(client);

final result = await account.updateSession(
    sessionId: '[SESSION_ID]'
);
`,language:"client-flutter",process:!0,children:(f,m)=>{e();var v=r(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

Account account = Account(client);

final result = await account.updateSession(
    sessionId: '[SESSION_ID]'
);`);t(f,v)},$$slots:{default:!0}});var A=n(_);x(A,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.updateSession(
    sessionId: "[SESSION_ID]"
);
`,language:"client-apple",process:!0,children:(f,m)=>{e();var v=r(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.updateSession(
    sessionId: "[SESSION_ID]"
);`);t(f,v)},$$slots:{default:!0}});var y=n(A);x(y,{content:`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID

val account = Account(client)

val response = account.updateSession(
    sessionId = "[SESSION_ID]"
);
`,language:"client-android-kotlin",process:!0,children:(f,m)=>{e();var v=r(`import io.appwrite.Client
import io.appwrite.services.Account

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID

val account = Account(client)

val response = account.updateSession(
    sessionId = "[SESSION_ID]"
);`);t(f,v)},$$slots:{default:!0}}),t(s,o)},$$slots:{default:!0}});var he=n(le);Y(he,{title:"GraphQL",children:(s,g)=>{O(s,{children:(o,$)=>{e();var _=r("OAuth 2 is not available through the GraphQL API. You can use the REST API or any Client SDK instead.");t(o,_)},$$slots:{default:!0}})}}),me(L),t(ve,L)},$$slots:{default:!0}}))}export{Ct as component};
