import{t as l,b as o,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as _e,s as e,f as c,n as t,r as Ie}from"../chunks/NgVQVlRK.js";import{n as Pe}from"../chunks/B4IyMRKX.js";import{S as oe}from"../chunks/B6JyFckC.js";import{M as Ae}from"../chunks/hMT8fFzP.js";import{I as Oe}from"../chunks/BypEz2Fd.js";import{T as ie,a as V}from"../chunks/BHbEtIoO.js";import{I as ae}from"../chunks/Dka2wNls.js";import{C as ye,a as ue}from"../chunks/rEuJ3T1U.js";import{O as ge,a as $e}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as re}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as T}from"../chunks/DXp9_3zM.js";import{F as w}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{L as we,I as H}from"../chunks/BhmTgGWB.js";import{P as $}from"../chunks/D8YsId2T.js";import{S as k}from"../chunks/yHjwcyUH.js";import{L as Q}from"../chunks/yh4_9ChP.js";/* empty css                */import{A as ke}from"../chunks/CqOphJLh.js";const Ce={layout:"article",title:"Send push notification",description:"Send push notification to your users using Backrush Messaging."};var Ee=l("<!><!>",1),Te=l("<!><!><!>",1),De=l("First, enable push notification in your app. Add push notification capability to your app by clicking your root-level app in XCode &gt; <!> &gt; <!> Capabilities &gt; Search for <!>.",1),be=l("<!> <!>",1),Se=l("First, register for remote notifications in your app delegate&#39;s <!> method.",1),Ne=l("Since the token is saved in <!>, you can access it from anywhere in your app. With this saved <!>, you can create a push target with Backrush when the user logs in. Each push target is associated with an account, heres an example with an email password login. The same logic applies to all types of login methods.",1),Me=l("<!><!><!><!><!><!><!><!>",1),xe=l("Before you can send push notifications using FCM, make sure you&#39;d followed the steps to <!>.",1),Re=l("After adding Firebase to your Android project and adding the <!> to your project, initialize Firebase in your main activity and fetch the FCM registration token.",1),Ye=l("Create a new service that extends <!> which handles the event where the FCM token is updated.",1),Ge=l("In your <!>, register this new service.",1),Fe=l("<!><!><!><!><!><!><!><!><!><!><!>",1),Le=l("Before you can send push notifications using FCM, make sure you&#39;d followed the steps to <!>.",1),Ue=l("After adding Firebase to your iOS project and adding the <!> to the root of your project.",1),je=l("Head to <!> &gt; <!> &gt; <!> &gt; <!>. The key needs <!> enabled.",1),Be=l("In Firebase console, go to <em>Settings</em>* &gt; <!> &gt; <!> &gt; click <!>. Upload your key here.",1),Ke=l("Add push notification capability to your app by clicking your root-level app in XCode &gt; <!> &gt; <!> Capabilities &gt; Search for <!>.",1),ze=l("If using SwiftUI, disable swizzling by setting <!> to <!> in your <!>.",1),qe=l("<!><!><!><!><!>",1),Je=l("Initialize Firebase in your app delegate&#39;s <!> method, implement the messaging delegate protocol, and register for remote notifications.",1),We=l("Your APNS token can change, so you need to handle the token refresh event and update the target with Backrush Messaging. Implement <!>, which is called when the FCM token is updated.",1),Ve=l("Since the token is saved in <!>, you can access it from anywhere in your app. With this saved <!>, you can create a push target with Backrush when the user logs in. Each push target is associated with an account, here&#39;s an example with an email password login. The same logic applies to all types of login methods.",1),Xe=l("If you have disabled method swizzling, or you are building a SwiftUI app, you&#39;ll need to explicitly map your APNs token to the FCM registration token. Implement the <!> method to get the device token and save it to FCM.",1),Qe=l("<!><!><!><!><!><!><!><!><!><!><!><!>",1),He=l("<!><!><!>",1),Ze=l("<!><!>",1),et=l("You can learn more about requesting permissions from the <!>.",1),tt=l("<!><!>",1),nt=l("First, add <!> to your <!>.",1),ot=l("Then, you&#39;ll also need to request <!> from your users using the <!> permission.",1),at=l("<!><!><!>",1),rt=l("You can learn more about requesting permissions from the <!>.",1),st=l("Disable auto-initialization by setting <!> to <!> in your <!>.",1),it=l("<!><!><!><!><!><!><!>",1),lt=l("<!><!><!>",1),dt=l("<!><!>",1),pt=l("If you enabled <!> on your APNs provider, Backrush will send push notifications to the development APNs environment. This requires you to use a <!> in XCode.",1),ct=l("If XCode is not default to a development profile, click your root-level app in XCode &gt; <!> &gt; <!> Capabilities &gt; uncheck <!>. Then manually select a <!> that is a <!>.",1),ut=l("<!><!>",1),gt=l("To send a test message, navigate to <!> &gt; <!> &gt; <!> <!> &gt; <!>.",1),$t=l("Add your message and in the targets step, select one of your test targets. Set the schedule to <!> and click <!>.",1),ft=l("<!><!><!><!><!>",1),ht=l("To send a message programmatically, use an <!>.",1),vt=l("<!><!><!><!><!><!><!><!><!><!>",1),mt=l("<!><!>",1),_t=l("<!><!>",1),It=l("<!><!><!>",1),Pt=l("<article><!><!><!><!><!></article>");function Xt(fe){ke(fe,Pe(Ce,{children:(he,At)=>{var se=Pt(),le=_e(se);$(le,{children:(B,Z)=>{t();var x=o("You can send, schedule, and manage push notifications to your apps using Backrush Messaging. Push notifications can be used to deliver new message notifications, app updates, promotional offers, and other messages straight to your user's devices.");n(B,x)},$$slots:{default:!0}});var de=e(le);oe(de,{id:"add-provider",step:1,title:"Add provider",children:(B,Z)=>{var x=Te(),G=c(x);$(G,{children:(S,N)=>{t();var D=o("Push notifications must be sent through third-party providers, like Apple Push Notification service and Firebase Cloud Messaging. The push notification APIs for Apple and Android devices can only be accessed through these services.");n(S,D)},$$slots:{default:!0}});var K=e(G);$(K,{children:(S,N)=>{t();var D=o("You must configure these services before you can send your first push notification.");n(S,D)},$$slots:{default:!0}});var F=e(K);ye(F,{children:(S,N)=>{var D=Ee(),M=c(D);ue(M,{href:"/docs/products/messaging/apns",icon:"icon-apple",title:"APNS",children:(C,L)=>{$(C,{children:(v,I)=>{t();var A=o("Configure APNs for push notification to Apple devices.");n(v,A)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=e(M);ue(z,{href:"/docs/products/messaging/fcm",icon:"web-icon-firebase",title:"FCM",children:(C,L)=>{$(C,{children:(v,I)=>{t();var A=o("Configure FCM for push notification to Android and Apple devices.");n(v,A)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(S,D)}}),n(B,x)},$$slots:{default:!0}});var pe=e(de);oe(pe,{id:"add-targets",step:2,title:"Add targets",children:(B,Z)=>{var x=Ze(),G=c(x);$(G,{children:(F,S)=>{t();var N=o("Before sending your first push notification, your application must register itself for push notification, then provide the device token to Backrush.");n(F,N)},$$slots:{default:!0}});var K=e(G);ie(K,{children:(F,S)=>{var N=He(),D=c(N);V(D,{id:"apple-apns",title:"APNs for Apple",children:(C,L)=>{var v=Me(),I=c(v);$(I,{children:(u,h)=>{t();var f=De(),d=e(c(f));k(d,{marker:"**",children:(i,p)=>{t();var E=o("Signing & Capabilities");n(i,E)},$$slots:{default:!0}});var r=e(d,2);ae(r,{icon:"plus",size:"m"});var a=e(r,2);k(a,{marker:"**",children:(i,p)=>{t();var E=o("Push Notifications");n(i,E)},$$slots:{default:!0}}),t(),n(u,f)},$$slots:{default:!0}});var A=e(I);$(A,{children:(u,h)=>{var f=be(),d=c(f);ge(d,{children:(a,i)=>{re(a,{src:"/images/docs/messaging/providers/apns/dark/xcode-enable-pn.png",alt:"Authentication Key"})}});var r=e(d,2);$e(r,{children:(a,i)=>{re(a,{src:"/images/docs/messaging/providers/apns/xcode-enable-pn.png",alt:"Authentication Key"})}}),n(u,f)},$$slots:{default:!0}});var P=e(A);$(P,{children:(u,h)=>{t();var f=Se(),d=e(c(f));T(d,{content:"application(_:didFinishLaunchingWithOptions:)"}),t(),n(u,f)},$$slots:{default:!0}});var O=e(P);w(O,{content:`func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
) -> Bool {
    UNUserNotificationCenter.current().delegate = self
    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, _ in
        if granted {
            DispatchQueue.main.async {
                application.registerForRemoteNotifications()
            }
        }
    }
    return true
}
`,language:"swift",process:!0,children:(u,h)=>{t();var f=o(`func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
) -> Bool {
    UNUserNotificationCenter.current().delegate = self
    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, _ in
        if granted {
            DispatchQueue.main.async {
                application.registerForRemoteNotifications()
            }
        }
    }
    return true
}`);n(u,f)},$$slots:{default:!0}});var m=e(O);$(m,{children:(u,h)=>{t();var f=o("Next, create a handler for when the app receives the push notification device token.");n(u,f)},$$slots:{default:!0}});var g=e(m);w(g,{content:`func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
    /* store this \`token\` */
    let token = deviceToken.map { String(format: "%.2hhx", $0) }.joined()
}
`,language:"swift",process:!0,children:(u,h)=>{t();var f=o(`func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
    /* store this \`token\` */
    let token = deviceToken.map { String(format: "%.2hhx", $0) }.joined()
}`);n(u,f)},$$slots:{default:!0}});var _=e(g);$(_,{children:(u,h)=>{t();var f=Ne(),d=e(c(f));T(d,{content:"UserDefaults"});var r=e(d,2);T(r,{content:"apnsToken"}),t(),n(u,f)},$$slots:{default:!0}});var s=e(_);w(s,{content:`func login() async {
    do {
        let session = try await account.createEmailPasswordSession(email: username, password: password)

        let token = /* Retrieve the stored push token */

        try await account.createPushTarget(targetId: ID.unique(), identifier: token)
    } catch {
        print("Login failed: \\(error.localizedDescription)")
    }
}
`,language:"swift",process:!0,children:(u,h)=>{t();var f=o(`func login() async {
    do {
        let session = try await account.createEmailPasswordSession(email: username, password: password)

        let token = /* Retrieve the stored push token */

        try await account.createPushTarget(targetId: ID.unique(), identifier: token)
    } catch {
        print("Login failed: \\(error.localizedDescription)")
    }
}`);n(u,f)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}});var M=e(D);V(M,{id:"android-fcm",title:"FCM for Android",children:(C,L)=>{var v=Fe(),I=c(v);$(I,{children:(d,r)=>{t();var a=xe(),i=e(c(a));Q(i,{href:"https://firebase.google.com/docs/android/setup",children:(p,E)=>{t();var y=o("Add Firebase to your Android project");n(p,y)},$$slots:{default:!0}}),t(),n(d,a)},$$slots:{default:!0}});var A=e(I);$(A,{children:(d,r)=>{t();var a=Re(),i=e(c(a));T(i,{content:"google-services.json"}),t(),n(d,a)},$$slots:{default:!0}});var P=e(A);w(P,{content:`class MainActivity : AppCompatActivity() {
    override fun onCreate() {
        // Initialize Firebase
        FirebaseApp.initializeApp(this)

        // Set the FCM token
        FirebaseMessaging.getInstance().token.addOnCompleteListener(OnCompleteListener { task ->
            if (task.isSuccessful) {
                /* store this \`token\` */
                val token = task.result
            }
        })
    }
}
`,language:"kotlin",process:!0,children:(d,r)=>{t();var a=o(`class MainActivity : AppCompatActivity() {
    override fun onCreate() {
        // Initialize Firebase
        FirebaseApp.initializeApp(this)

        // Set the FCM token
        FirebaseMessaging.getInstance().token.addOnCompleteListener(OnCompleteListener { task ->
            if (task.isSuccessful) {
                /* store this \`token\` */
                val token = task.result
            }
        })
    }
}`);n(d,a)},$$slots:{default:!0}});var O=e(P);$(O,{children:(d,r)=>{t();var a=o("Backrush's push targets are associated with accounts. Typically, you would create a push target when the user logs in.");n(d,a)},$$slots:{default:!0}});var m=e(O);$(m,{children:(d,r)=>{t();var a=o("For example, when the user logs in with email and password, your app can register itself as a target after handling the login.");n(d,a)},$$slots:{default:!0}});var g=e(m);w(g,{content:`fun login(email: String, password: String) {
    viewModelScope.launch {
        try {
            val session = account.createEmailPasswordSession(email, password)

            let token = /* Retrieve the stored push token */

            /* store the \`target.id\` */
            val target = account.createPushTarget(ID.unique(), token)
        } catch (e: BackrushException) {
            Log.e("Login", "Failed: \${e.message}")
        }
    }
}
`,language:"kotlin",process:!0,children:(d,r)=>{t();var a=o(`fun login(email: String, password: String) {
    viewModelScope.launch {
        try {
            val session = account.createEmailPasswordSession(email, password)

            let token = /* Retrieve the stored push token */

            /* store the \`target.id\` */
            val target = account.createPushTarget(ID.unique(), token)
        } catch (e: BackrushException) {
            Log.e("Login", "Failed: \${e.message}")
        }
    }
}`);n(d,a)},$$slots:{default:!0}});var _=e(g);$(_,{children:(d,r)=>{t();var a=o("Lastly, because FCM push tokens can change, we need to add a service to handle FCM token refreshes and update the target with Backrush Messaging.");n(d,a)},$$slots:{default:!0}});var s=e(_);$(s,{children:(d,r)=>{t();var a=Ye(),i=e(c(a));T(i,{content:"FirebaseMessagingService"}),t(),n(d,a)},$$slots:{default:!0}});var u=e(s);w(u,{content:`class MessagingService : FirebaseMessagingService() {
    override fun onNewToken(token: String) {
        super.onNewToken(token)

        /* store the \`token\` */
        /* If the user is logged in, update the push target */
        runBlocking {
            account?.updatePushTarget(/* retrieve saved \`target.id\` */, token)
        }
    }
}
`,language:"kotlin",process:!0,children:(d,r)=>{t();var a=o(`class MessagingService : FirebaseMessagingService() {
    override fun onNewToken(token: String) {
        super.onNewToken(token)

        /* store the \`token\` */
        /* If the user is logged in, update the push target */
        runBlocking {
            account?.updatePushTarget(/* retrieve saved \`target.id\` */, token)
        }
    }
}`);n(d,a)},$$slots:{default:!0}});var h=e(u);$(h,{children:(d,r)=>{t();var a=Ge(),i=e(c(a));T(i,{content:"AndroidManifest.xml"}),t(),n(d,a)},$$slots:{default:!0}});var f=e(h);w(f,{content:`<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
`,language:"xml",process:!0,children:(d,r)=>{t();var a=o(`<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>`);n(d,a)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}});var z=e(M);V(z,{id:"apple-fcm",title:"FCM for Apple",children:(C,L)=>{var v=Qe(),I=c(v);$(I,{children:(r,a)=>{t();var i=Le(),p=e(c(i));Q(p,{href:"https://firebase.google.com/docs/ios/setup",children:(E,y)=>{t();var ee=o("Add Firebase to your iOS project");n(E,ee)},$$slots:{default:!0}}),t(),n(r,i)},$$slots:{default:!0}});var A=e(I);$(A,{children:(r,a)=>{t();var i=Ue(),p=e(c(i));T(p,{content:"GoogleService-Info.plist"}),t(),n(r,i)},$$slots:{default:!0}});var P=e(A);$(P,{children:(r,a)=>{t();var i=o("Next, add your APNs key to Firebase.");n(r,i)},$$slots:{default:!0}});var O=e(P);we(O,{ordered:!0,marker:".",children:(r,a)=>{var i=qe(),p=c(i);H(p,{children:(q,te)=>{t();var R=je(),U=e(c(R));k(U,{marker:"**",children:(b,ne)=>{t();var J=o("Apple Developer Member Center");n(b,J)},$$slots:{default:!0}});var j=e(U,2);k(j,{marker:"**",children:(b,ne)=>{t();var J=o("Program resources");n(b,J)},$$slots:{default:!0}});var W=e(j,2);k(W,{marker:"**",children:(b,ne)=>{t();var J=o("Certificates, Identifiers & Profiles");n(b,J)},$$slots:{default:!0}});var Y=e(W,2);k(Y,{marker:"**",children:(b,ne)=>{t();var J=o("Keys");n(b,J)},$$slots:{default:!0}});var X=e(Y,2);k(X,{marker:"**",children:(b,ne)=>{t();var J=o("Apple Push Notification Service");n(b,J)},$$slots:{default:!0}}),t(),n(q,R)},$$slots:{default:!0}});var E=e(p);H(E,{children:(q,te)=>{t();var R=o("Create a new key, note down the key ID and download your key.");n(q,R)},$$slots:{default:!0}});var y=e(E);H(y,{children:(q,te)=>{t();var R=Be(),U=e(c(R),3);k(U,{marker:"**",children:(Y,X)=>{t();var b=o("Cloud Messaging");n(Y,b)},$$slots:{default:!0}});var j=e(U,2);k(j,{marker:"**",children:(Y,X)=>{t();var b=o("APNs authentication key");n(Y,b)},$$slots:{default:!0}});var W=e(j,2);k(W,{marker:"**",children:(Y,X)=>{t();var b=o("Upload");n(Y,b)},$$slots:{default:!0}}),t(),n(q,R)},$$slots:{default:!0}});var ee=e(y);H(ee,{children:(q,te)=>{t();var R=Ke(),U=e(c(R));k(U,{marker:"**",children:(Y,X)=>{t();var b=o("Signing & Capabilities");n(Y,b)},$$slots:{default:!0}});var j=e(U,2);ae(j,{icon:"plus",size:"m"});var W=e(j,2);k(W,{marker:"**",children:(Y,X)=>{t();var b=o("Push Notifications");n(Y,b)},$$slots:{default:!0}}),t(),n(q,R)},$$slots:{default:!0}});var me=e(ee);H(me,{children:(q,te)=>{t();var R=ze(),U=e(c(R));T(U,{content:"FirebaseAppDelegateProxyEnabled"});var j=e(U,2);T(j,{content:"NO"});var W=e(j,2);T(W,{content:"Info.plist"}),t(),n(q,R)},$$slots:{default:!0}}),n(r,i)},$$slots:{default:!0}});var m=e(O);$(m,{children:(r,a)=>{t();var i=Je(),p=e(c(i));T(p,{content:"application(_:didFinishLaunchingWithOptions:)"}),t(),n(r,i)},$$slots:{default:!0}});var g=e(m);w(g,{content:`func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
) -> Bool {
    FirebaseApp.configure()
    Messaging.messaging().delegate = self
    UNUserNotificationCenter.current().delegate = self

    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, _ in
        if granted {
            DispatchQueue.main.async {
                application.registerForRemoteNotifications()
            }
        }
    }
    return true
}
`,language:"swift",process:!0,children:(r,a)=>{t();var i=o(`func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
) -> Bool {
    FirebaseApp.configure()
    Messaging.messaging().delegate = self
    UNUserNotificationCenter.current().delegate = self

    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, _ in
        if granted {
            DispatchQueue.main.async {
                application.registerForRemoteNotifications()
            }
        }
    }
    return true
}`);n(r,i)},$$slots:{default:!0}});var _=e(g);$(_,{children:(r,a)=>{t();var i=We(),p=e(c(i));T(p,{content:"didReceiveRegistrationToken"}),t(),n(r,i)},$$slots:{default:!0}});var s=e(_);w(s,{content:`func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
    /* store the fcmToken */
    guard let fcmToken = fcmToken else { return }

    Task {
        do {
            _ = try await account.get()
            try await account.createPushTarget(targetId: ID.unique(), identifier: fcmToken)
        } catch {
            print("Failed to create push target: \\(error.localizedDescription)")
        }
    }
}
`,language:"swift",process:!0,children:(r,a)=>{t();var i=o(`func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
    /* store the fcmToken */
    guard let fcmToken = fcmToken else { return }

    Task {
        do {
            _ = try await account.get()
            try await account.createPushTarget(targetId: ID.unique(), identifier: fcmToken)
        } catch {
            print("Failed to create push target: \\(error.localizedDescription)")
        }
    }
}`);n(r,i)},$$slots:{default:!0}});var u=e(s);$(u,{children:(r,a)=>{t();var i=Ve(),p=e(c(i));T(p,{content:"UserDefaults"});var E=e(p,2);T(E,{content:"fcmToken"}),t(),n(r,i)},$$slots:{default:!0}});var h=e(u);w(h,{content:`func login() async {
    do {
        let session = try await account.createEmailPasswordSession(email: username, password: password)

        let token = /* Retrieve stored push token */

        let target = try await account.createPushTarget(targetId: ID.unique(), identifier: token)
    } catch {
        print("Login failed: \\(error.localizedDescription)")
    }
}

`,language:"swift",process:!0,children:(r,a)=>{t();var i=o(`func login() async {
    do {
        let session = try await account.createEmailPasswordSession(email: username, password: password)

        let token = /* Retrieve stored push token */

        let target = try await account.createPushTarget(targetId: ID.unique(), identifier: token)
    } catch {
        print("Login failed: \\(error.localizedDescription)")
    }
}`);n(r,i)},$$slots:{default:!0}});var f=e(h);$(f,{children:(r,a)=>{t();var i=Xe(),p=e(c(i));T(p,{content:"didRegisterForRemoteNotificationsWithDeviceToken"}),t(),n(r,i)},$$slots:{default:!0}});var d=e(f);w(d,{content:`func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
    Messaging.messaging().apnsToken = deviceToken
}
`,language:"swift",process:!0,children:(r,a)=>{t();var i=o(`func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
    Messaging.messaging().apnsToken = deviceToken
}`);n(r,i)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}}),n(F,N)},$$slots:{default:!0}}),n(B,x)},$$slots:{default:!0}});var ce=e(pe);oe(ce,{id:"request-permissions",step:3,title:"Request permissions",children:(B,Z)=>{var x=dt(),G=c(x);$(G,{children:(F,S)=>{t();var N=o("Your app must ask for permission to receive push notification from the user.");n(F,N)},$$slots:{default:!0}});var K=e(G);ie(K,{children:(F,S)=>{var N=lt(),D=c(N);V(D,{id:"apple-apns",title:"Apple with APNs",children:(C,L)=>{var v=tt(),I=c(v);$(I,{children:(P,O)=>{t();var m=o("Before your app can receive push notifications, you need to request the user for permissions. Backrush provides a utility to help request permissions to display notificaitons.");n(P,m)},$$slots:{default:!0}});var A=e(I);$(A,{children:(P,O)=>{t();var m=et(),g=e(c(m));Q(g,{href:"https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications",children:(_,s)=>{t();var u=o("Apple Developer Documentation");n(_,u)},$$slots:{default:!0}}),t(),n(P,m)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}});var M=e(D);V(M,{id:"android-fcm",title:"FCM for Android",children:(C,L)=>{var v=at(),I=c(v);$(I,{children:(O,m)=>{t();var g=nt(),_=e(c(g));T(_,{content:"POST_NOTIFICATIONS"});var s=e(_,2);T(s,{content:"AndroidManifest.xml"}),t(),n(O,g)},$$slots:{default:!0}});var A=e(I);w(A,{content:`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="YOUR_PACKAGE">
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <!-- ... rest of your manifest -->
`,language:"xml",process:!0,children:(O,m)=>{t();var g=o(`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="YOUR_PACKAGE">
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <!-- ... rest of your manifest -->`);n(O,g)},$$slots:{default:!0}});var P=e(A);$(P,{children:(O,m)=>{t();var g=ot(),_=e(c(g));Q(_,{href:"https://developer.android.com/training/permissions/requesting",children:(u,h)=>{t();var f=o("runtime permissions");n(u,f)},$$slots:{default:!0}});var s=e(_,2);T(s,{content:"android.permission.POST_NOTIFICATIONS"}),t(),n(O,g)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}});var z=e(M);V(z,{id:"apple-fcm",title:"FCM for Apple",children:(C,L)=>{var v=it(),I=c(v);$(I,{children:(s,u)=>{t();var h=o("Before your app can receive push notifications, you need to request the user for permissions. Backrush provides a utility to help request permissions to display notificaitons.");n(s,h)},$$slots:{default:!0}});var A=e(I);$(A,{children:(s,u)=>{t();var h=rt(),f=e(c(h));Q(f,{href:"https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications",children:(d,r)=>{t();var a=o("Apple Developer Documentation");n(d,a)},$$slots:{default:!0}}),t(),n(s,h)},$$slots:{default:!0}});var P=e(A);$(P,{children:(s,u)=>{t();var h=o("When an FCM registration token is generated, the library uploads the identifier and configuration data to Firebase. If you wish to give your users the ability to explicitly opt out of sending data to Firebase, you can disable automatic initialization and manually initialize the library when the user grants permission.");n(s,h)},$$slots:{default:!0}});var O=e(P);$(O,{children:(s,u)=>{t();var h=st(),f=e(c(h));T(f,{content:"FirebaseMessagingAutoInitEnabled"});var d=e(f,2);T(d,{content:"NO"});var r=e(d,2);T(r,{content:"Info.plist"}),t(),n(s,h)},$$slots:{default:!0}});var m=e(O);w(m,{content:`FirebaseMessagingAutoInitEnabled = NO
`,language:"text",process:!0,children:(s,u)=>{t();var h=o("FirebaseMessagingAutoInitEnabled = NO");n(s,h)},$$slots:{default:!0}});var g=e(m);$(g,{children:(s,u)=>{t();var h=o("Then, manually initialize the library when the user grants permission.");n(s,h)},$$slots:{default:!0}});var _=e(g);w(_,{content:`Messaging.messaging().autoInitEnabled = true
`,process:!0,children:(s,u)=>{t();var h=o("Messaging.messaging().autoInitEnabled = true");n(s,h)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}}),n(F,N)},$$slots:{default:!0}}),n(B,x)},$$slots:{default:!0}});var ve=e(ce);oe(ve,{id:"send-message",step:4,title:"Send message",children:(B,Z)=>{var x=It(),G=c(x);$(G,{children:(S,N)=>{t();var D=o("You can send messages in both the Backrush Console and programmatically using the Backrush Server SDK.");n(S,D)},$$slots:{default:!0}});var K=e(G);Oe(K,{title:"Sandbox",children:(S,N)=>{var D=ut(),M=c(D);$(M,{children:(C,L)=>{t();var v=pt(),I=e(c(v));k(I,{marker:"**",children:(P,O)=>{t();var m=o("Sandbox");n(P,m)},$$slots:{default:!0}});var A=e(I,2);k(A,{marker:"**",children:(P,O)=>{t();var m=o("Development profile");n(P,m)},$$slots:{default:!0}}),t(),n(C,v)},$$slots:{default:!0}});var z=e(M);$(z,{children:(C,L)=>{t();var v=ct(),I=e(c(v));k(I,{marker:"**",children:(g,_)=>{t();var s=o("Signing & Capabilities");n(g,s)},$$slots:{default:!0}});var A=e(I,2);ae(A,{icon:"plus",size:"m"});var P=e(A,2);k(P,{marker:"**",children:(g,_)=>{t();var s=o("Automatically manage signing");n(g,s)},$$slots:{default:!0}});var O=e(P,2);k(O,{marker:"**",children:(g,_)=>{t();var s=o("Provisioning profile");n(g,s)},$$slots:{default:!0}});var m=e(O,2);k(m,{marker:"**",children:(g,_)=>{t();var s=o("Distribution profile");n(g,s)},$$slots:{default:!0}}),t(),n(C,v)},$$slots:{default:!0}}),n(S,D)}});var F=e(K);ie(F,{children:(S,N)=>{var D=_t(),M=c(D);V(M,{id:"console",title:"Console",children:(C,L)=>{var v=ft(),I=c(v);$(I,{children:(g,_)=>{t();var s=gt(),u=e(c(s));k(u,{marker:"**",children:(a,i)=>{t();var p=o("Messaging");n(a,p)},$$slots:{default:!0}});var h=e(u,2);k(h,{marker:"**",children:(a,i)=>{t();var p=o("Messages");n(a,p)},$$slots:{default:!0}});var f=e(h,2);ae(f,{icon:"plus",size:"m"});var d=e(f,2);k(d,{marker:"**",children:(a,i)=>{t();var p=o("Create message");n(a,p)},$$slots:{default:!0}});var r=e(d,2);k(r,{marker:"**",children:(a,i)=>{t();var p=o("Push notification");n(a,p)},$$slots:{default:!0}}),t(),n(g,s)},$$slots:{default:!0}});var A=e(I);ge(A,{children:(g,_)=>{$(g,{children:(s,u)=>{re(s,{src:"/images/docs/messaging/messages/dark/create-push-notification.png",alt:"Create email message"})},$$slots:{default:!0}})}});var P=e(A);$e(P,{children:(g,_)=>{$(g,{children:(s,u)=>{re(s,{src:"/images/docs/messaging/messages/create-push-notification.png",alt:"Create email message"})},$$slots:{default:!0}})}});var O=e(P);$(O,{children:(g,_)=>{t();var s=$t(),u=e(c(s));k(u,{marker:"**",children:(f,d)=>{t();var r=o("Now");n(f,r)},$$slots:{default:!0}});var h=e(u,2);k(h,{marker:"**",children:(f,d)=>{t();var r=o("Send");n(f,r)},$$slots:{default:!0}}),t(),n(g,s)},$$slots:{default:!0}});var m=e(O);$(m,{children:(g,_)=>{t();var s=o("Verify that you can receive the message in your inbox. If not, check for logs in the Backrush Console or in your provider's logs.");n(g,s)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}});var z=e(M);V(z,{id:"server-sdk",title:"Server SDK",children:(C,L)=>{var v=mt(),I=c(v);$(I,{children:(P,O)=>{t();var m=ht(),g=e(c(m));Q(g,{href:"/docs/sdks#server",children:(_,s)=>{t();var u=o("Backrush Server SDK");n(_,u)},$$slots:{default:!0}}),t(),n(P,m)},$$slots:{default:!0}});var A=e(I);Ae(A,{children:(P,O)=>{var m=vt(),g=c(m);w(g,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
;

const messaging = await messaging.createPush(
        '[MESSAGE_ID]', // messageId
        '[TITLE]',      // title
        '[BODY]',       // body
        [],             // topics (optional)
        [],             // users (optional)
        [],             // targets (optional)
        {},             // data (optional)
        '[ACTION]',     // action (optional)
        '[ICON]',       // icon (optional)
        '[SOUND]',      // sound (optional)
        '[COLOR]',      // color (optional)
        '[TAG]',        // tag (optional)
        '[BADGE]',      // badge (optional)
        false,          // draft (optional)
        ''              // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(p,E)=>{t();var y=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
;

const messaging = await messaging.createPush(
        '[MESSAGE_ID]', // messageId
        '[TITLE]',      // title
        '[BODY]',       // body
        [],             // topics (optional)
        [],             // users (optional)
        [],             // targets (optional)
        {},             // data (optional)
        '[ACTION]',     // action (optional)
        '[ICON]',       // icon (optional)
        '[SOUND]',      // sound (optional)
        '[COLOR]',      // color (optional)
        '[TAG]',        // tag (optional)
        '[BADGE]',      // badge (optional)
        false,          // draft (optional)
        ''              // scheduledAt (optional)
    );`);n(p,y)},$$slots:{default:!0}});var _=e(g);w(_,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
;

const messaging = await messaging.createPush(
        '[MESSAGE_ID]', // messageId
        '[TITLE]',      // title
        '[BODY]',       // body
        [],             // topics (optional)
        [],             // users (optional)
        [],             // targets (optional)
        {},             // data (optional)
        '[ACTION]',     // action (optional)
        '[ICON]',       // icon (optional)
        '[SOUND]',      // sound (optional)
        '[COLOR]',      // color (optional)
        '[TAG]',        // tag (optional)
        '[BADGE]',      // badge (optional)
        false,          // draft (optional)
        ''              // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(p,E)=>{t();var y=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
;

const messaging = await messaging.createPush(
        '[MESSAGE_ID]', // messageId
        '[TITLE]',      // title
        '[BODY]',       // body
        [],             // topics (optional)
        [],             // users (optional)
        [],             // targets (optional)
        {},             // data (optional)
        '[ACTION]',     // action (optional)
        '[ICON]',       // icon (optional)
        '[SOUND]',      // sound (optional)
        '[COLOR]',      // color (optional)
        '[TAG]',        // tag (optional)
        '[BADGE]',      // badge (optional)
        false,          // draft (optional)
        ''              // scheduledAt (optional)
    );`);n(p,y)},$$slots:{default:!0}});var s=e(_);w(s,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')   // Your API Endpoint
    ->setProject('<PROJECT_ID>')                   // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2')   // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    data: [],           // optional
    action: '[ACTION]', // optional
    icon: '[ICON]',     // optional
    sound: '[SOUND]',   // optional
    color: '[COLOR]',   // optional
    tag: '[TAG]',       // optional
    badge: '[BADGE]',   // optional
    draft: false,       // optional
    scheduledAt: ''     // optional
);
`,language:"php",process:!0,children:(p,E)=>{t();var y=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')   // Your API Endpoint
    ->setProject('<PROJECT_ID>')                   // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2')   // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    data: [],           // optional
    action: '[ACTION]', // optional
    icon: '[ICON]',     // optional
    sound: '[SOUND]',   // optional
    color: '[COLOR]',   // optional
    tag: '[TAG]',       // optional
    badge: '[BADGE]',   // optional
    draft: false,       // optional
    scheduledAt: ''     // optional
);`);n(p,y)},$$slots:{default:!0}});var u=e(s);w(u,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_push(
    message_id = '[MESSAGE_ID]',
    title = '[TITLE]',
    body = '[BODY]',
    topics = [],        # optional
    users = [],         # optional
    targets = [],       # optional
    data = {},          # optional
    action = '[ACTION]',# optional
    icon = '[ICON]',    # optional
    sound = '[SOUND]',  # optional
    color = '[COLOR]',  # optional
    tag = '[TAG]',      # optional
    badge = '[BADGE]',  # optional
    draft = False,      # optional
    scheduled_at = ''   # optional
)
`,language:"python",process:!0,children:(p,E)=>{t();var y=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_push(
    message_id = '[MESSAGE_ID]',
    title = '[TITLE]',
    body = '[BODY]',
    topics = [],        # optional
    users = [],         # optional
    targets = [],       # optional
    data = {},          # optional
    action = '[ACTION]',# optional
    icon = '[ICON]',    # optional
    sound = '[SOUND]',  # optional
    color = '[COLOR]',  # optional
    tag = '[TAG]',      # optional
    badge = '[BADGE]',  # optional
    draft = False,      # optional
    scheduled_at = ''   # optional
)`);n(p,y)},$$slots:{default:!0}});var h=e(u);w(h,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                   # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')   # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_push(
    message_id: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         # optional
    users: [],          # optional
    targets: [],        # optional
    data: {},           # optional
    action: '[ACTION]', # optional
    icon: '[ICON]',     # optional
    sound: '[SOUND]',   # optional
    color: '[COLOR]',   # optional
    tag: '[TAG]',       # optional
    badge: '[BADGE]',   # optional
    draft: false,       # optional
    scheduled_at: ''    # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(p,E)=>{t();var y=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1')   # Your API Endpoint
    .set_project('<PROJECT_ID>')                   # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2')   # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_push(
    message_id: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         # optional
    users: [],          # optional
    targets: [],        # optional
    data: {},           # optional
    action: '[ACTION]', # optional
    icon: '[ICON]',     # optional
    sound: '[SOUND]',   # optional
    color: '[COLOR]',   # optional
    tag: '[TAG]',       # optional
    badge: '[BADGE]',   # optional
    draft: false,       # optional
    scheduled_at: ''    # optional
)

puts response.inspect`);n(p,y)},$$slots:{default:!0}});var f=e(h);w(f,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                    // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");   // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreatePush(
    messageId: "[MESSAGE_ID]",
    title: "[TITLE]",
    body: "[BODY]"    
    topics: new List<string> {}     // optional    
    users: new List<string> {}      // optional    
    targets: new List<string> {}    // optional    
    data: [object]      // optional    
    action: "[ACTION]"  // optional    
    icon: "[ICON]"      // optional    
    sound: "[SOUND]"    // optional    
    color: "[COLOR]"    // optional    
    tag: "[TAG]"        // optional    
    badge: "[BADGE]"    // optional    
    draft: false        // optional    
    scheduledAt: "");   // optional
`,language:"csharp",process:!0,children:(p,E)=>{t();var y=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .SetProject("<PROJECT_ID>")                    // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2");   // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreatePush(
    messageId: "[MESSAGE_ID]",
    title: "[TITLE]",
    body: "[BODY]"    
    topics: new List<string> {}     // optional    
    users: new List<string> {}      // optional    
    targets: new List<string> {}    // optional    
    data: [object]      // optional    
    action: "[ACTION]"  // optional    
    icon: "[ICON]"      // optional    
    sound: "[SOUND]"    // optional    
    color: "[COLOR]"    // optional    
    tag: "[TAG]"        // optional    
    badge: "[BADGE]"    // optional    
    draft: false        // optional    
    scheduledAt: "");   // optional`);n(p,y)},$$slots:{default:!0}});var d=e(f);w(d,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {   // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
  ;

  Future result = await messaging.createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    data: {},           // optional
    action: '[ACTION]', // optional
    icon: '[ICON]',     // optional
    sound: '[SOUND]',   // optional
    color: '[COLOR]',   // optional
    tag: '[TAG]',       // optional
    badge: '[BADGE]',   // optional
    draft: false,       // optional
    scheduledAt: '',    // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(p,E)=>{t();var y=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {   // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                    // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2')    // Your secret API key
  ;

  Future result = await messaging.createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],         // optional
    users: [],          // optional
    targets: [],        // optional
    data: {},           // optional
    action: '[ACTION]', // optional
    icon: '[ICON]',     // optional
    sound: '[SOUND]',   // optional
    color: '[COLOR]',   // optional
    tag: '[TAG]',       // optional
    badge: '[BADGE]',   // optional
    draft: false,       // optional
    scheduledAt: '',    // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);n(p,y)},$$slots:{default:!0}});var r=e(d);w(r,{content:`import io.appwrite.Client
import io.appwrite.services.Messaging

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                    // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")    // Your secret API key

val messaging = Messaging(client)

val response = messaging.createPush(
    messageId = "[MESSAGE_ID]",
    title = "[TITLE]",
    body = "[BODY]",
    topics = listOf(),          // optional
    users = listOf(),           // optional
    targets = listOf(),         // optional
    data = mapOf( "a" to "b" ), // optional
    action = "[ACTION]",        // optional
    icon = "[ICON]",            // optional
    sound = "[SOUND]",          // optional
    color = "[COLOR]",          // optional
    tag = "[TAG]",              // optional
    badge = "[BADGE]",          // optional
    draft = false,              // optional
    scheduledAt = ""            // optional
)
`,language:"kotlin",process:!0,children:(p,E)=>{t();var y=o(`import io.appwrite.Client
import io.appwrite.services.Messaging

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                    // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")    // Your secret API key

val messaging = Messaging(client)

val response = messaging.createPush(
    messageId = "[MESSAGE_ID]",
    title = "[TITLE]",
    body = "[BODY]",
    topics = listOf(),          // optional
    users = listOf(),           // optional
    targets = listOf(),         // optional
    data = mapOf( "a" to "b" ), // optional
    action = "[ACTION]",        // optional
    icon = "[ICON]",            // optional
    sound = "[SOUND]",          // optional
    color = "[COLOR]",          // optional
    tag = "[TAG]",              // optional
    badge = "[BADGE]",          // optional
    draft = false,              // optional
    scheduledAt = ""            // optional
)`);n(p,y)},$$slots:{default:!0}});var a=e(r);w(a,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                    // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");   // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",      // messageId
    "[TITLE]",           // title
    "[BODY]",            // body
    listOf(),            // topics (optional)
    listOf(),            // users (optional)
    listOf(),            // targets (optional)
    mapOf( "a" to "b" ), // data (optional)
    "[ACTION]",          // action (optional)
    "[ICON]",            // icon (optional)
    "[SOUND]",           // sound (optional)
    "[COLOR]",           // color (optional)
    "[TAG]",             // tag (optional)
    "[BADGE]",           // badge (optional)
    false,               // draft (optional)
    ""                   // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(p,E)=>{t();var y=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                    // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2");   // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",      // messageId
    "[TITLE]",           // title
    "[BODY]",            // body
    listOf(),            // topics (optional)
    listOf(),            // users (optional)
    listOf(),            // targets (optional)
    mapOf( "a" to "b" ), // data (optional)
    "[ACTION]",          // action (optional)
    "[ICON]",            // icon (optional)
    "[SOUND]",           // sound (optional)
    "[COLOR]",           // color (optional)
    "[TAG]",             // tag (optional)
    "[BADGE]",           // badge (optional)
    false,               // draft (optional)
    ""                   // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);n(p,y)},$$slots:{default:!0}});var i=e(a);w(i,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createPush(
  messageId: "[MESSAGE_ID]",
  title: "[TITLE]",
  body: "[BODY]",
  topics: [],         // optional
  users: [],          // optional
  targets: [],        // optional
  data: [:],          // optional
  action: "[ACTION]", // optional
  icon: "[ICON]",     // optional
  sound: "[SOUND]",   // optional
  color: "[COLOR]",   // optional
  tag: "[TAG]",       // optional
  badge: "[BADGE]",   // optional
  draft: false,       // optional
  scheduledAt: ""     // optional
)
`,language:"swift",process:!0,children:(p,E)=>{t();var y=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")  // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2")  // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createPush(
  messageId: "[MESSAGE_ID]",
  title: "[TITLE]",
  body: "[BODY]",
  topics: [],         // optional
  users: [],          // optional
  targets: [],        // optional
  data: [:],          // optional
  action: "[ACTION]", // optional
  icon: "[ICON]",     // optional
  sound: "[SOUND]",   // optional
  color: "[COLOR]",   // optional
  tag: "[TAG]",       // optional
  badge: "[BADGE]",   // optional
  draft: false,       // optional
  scheduledAt: ""     // optional
)`);n(p,y)},$$slots:{default:!0}}),n(P,m)},$$slots:{default:!0}}),n(C,v)},$$slots:{default:!0}}),n(S,D)},$$slots:{default:!0}}),n(B,x)},$$slots:{default:!0}}),Ie(se),n(he,se)},$$slots:{default:!0}}))}export{Xt as component};
