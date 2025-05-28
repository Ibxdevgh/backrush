import{t as $,b as s,a as e}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as dt,s as a,f as g,n as o,r as ut}from"./NgVQVlRK.js";import{n as ct}from"./B4IyMRKX.js";import{H as b}from"./CXsRaEhZ.js";import{M as A}from"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as P}from"./DXp9_3zM.js";import{F as k}from"./OFUKRh55.js";import{L as x,I as m}from"./BhmTgGWB.js";import{P as _}from"./D8YsId2T.js";import{S}from"./yHjwcyUH.js";import{L as w}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as pt}from"./CEkRzcqJ.js";const rt={layout:"post",title:"Announcing new features for Push Notifications",description:"Backrush Messaging now supports background updates, critical alerts, and priority controls for push notifications.",date:"2025-01-22T00:00:00.000Z",cover:"/images/blog/announcing-new-push-notifications-features/cover.png",timeToRead:5,author:"jake-barnby",category:"product",callToAction:!0};var $t=$("We&#39;re now supporting Apple&#39;s background notifications through the <!> parameter. This lets your iOS app process updates in the background without displaying notifications to users. Background notifications are useful for data syncs, content updates, and state changes that don&#39;t require user interaction.",1),ft=$("When you set <!>, your app wakes up in the background to handle the notification payload. This works well for messaging apps that need to fetch new messages, news apps refreshing content, or any app that needs to update data periodically. Since no UI is shown to users during background updates, you can omit both the title and body.",1),gt=$("You&#39;ll need to configure your app to handle background processing using <!> in Xcode.",1),ht=$("<!><!><!><!>",1),vt=$("To implement background notifications, set <!> to true and handle the <!> method in your app.",1),mt=$("Sometimes, users need to see a notification even when their phone is on <!>. The new <!> parameter attempts to mark the notification as critical, which can bypass silent and do not disturb settings when approved. To use critical alerts, you&#39;ll need to request the critical alert entitlement from Apple through your developer account - just visit <!> and fill out a brief form explaining your use case.",1),_t=$("<!><!><!><!><!>",1),yt=$("<!> The system delivers these at convenient times based on battery life and may group notifications together.",1),bt=$("<!> These go out right away - useful for time-sensitive updates.",1),Pt=$("<!><!>",1),wt=$("<!> Set a number to display on your app icon to show pending notifications. Set it to 0 to clear existing badges. Must be an integer.",1),kt=$("<!> Both title and body are now optional fields. This gives you more flexibility, especially for background updates.",1),xt=$("<!><!>",1),St=$("These new parameters work with our existing <!> and <!> endpoints. We pass these parameters directly to the underlying push notification services (APNs for Apple and FCM for Android) - you just need to set the parameters you want.",1),Ot=$("<!><!>",1),It=$("<!><!>",1),At=$("<!><!>",1),Tt=$("Each example shows different combinations of the new parameters based on common use cases. Note that some parameters like <!> and <!> are iOS-specific, while others work across platforms. You can mix and match these parameters based on your needs.",1),Ct=$("See the full implementation details in our <!>",1),Mt=$("Check out our best practices for sending <!>",1),Nt=$("Watch the <!>",1),Ft=$("Learn more about <!>",1),Ht=$("<!><!><!><!>",1),jt=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function qt(st){pt(st,ct(rt,{children:(it,Bt)=>{var I=jt(),T=dt(I);_(T,{children:(n,u)=>{o();var t=s("We're excited to introduce new additions to Backrush Messaging that give you greater control over how you send and handle push notifications in your app. The push notification API now affords you finer control over both how and when your notifications are delivered. You can run background updates silently, send critical alerts that bypass Do Not Disturb, and manage delivery priorities. These changes enable you to handle common scenarios - such as data syncs, urgent alerts, and battery-conscious updates more effectively.");e(n,t)},$$slots:{default:!0}});var C=a(T);_(C,{children:(n,u)=>{o();var t=s("Here's a quick overview of the new features:");e(n,t)},$$slots:{default:!0}});var M=a(C);b(M,{level:1,children:(n,u)=>{o();var t=s("Background updates (iOS)");e(n,t)},$$slots:{default:!0}});var N=a(M);_(N,{children:(n,u)=>{o();var t=$t(),i=a(g(t));P(i,{content:"contentAvailable"}),o(),e(n,t)},$$slots:{default:!0}});var F=a(N);_(F,{children:(n,u)=>{o();var t=ft(),i=a(g(t));P(i,{content:"contentAvailable"}),o(),e(n,t)},$$slots:{default:!0}});var H=a(F);_(H,{children:(n,u)=>{o();var t=s("A few things to keep in mind when using background notifications:");e(n,t)},$$slots:{default:!0}});var j=a(H);x(j,{ordered:!1,marker:"-",children:(n,u)=>{var t=ht(),i=g(t);m(i,{children:(r,c)=>{o();var l=gt(),f=a(g(l));w(f,{href:"https://developer.apple.com/documentation/xcode/configuring-background-execution-modes",children:(v,O)=>{o();var y=s("Background Modes");e(v,y)},$$slots:{default:!0}}),o(),e(r,l)},$$slots:{default:!0}});var p=a(i);m(p,{children:(r,c)=>{o();var l=s("Set the notification priority to normal to ensure proper background delivery.");e(r,l)},$$slots:{default:!0}});var d=a(p);m(d,{children:(r,c)=>{o();var l=s("Apple limits background notifications to about 2-3 per hour to preserve battery life.");e(r,l)},$$slots:{default:!0}});var h=a(d);m(h,{children:(r,c)=>{o();var l=s("For Android users, you can achieve similar functionality by sending a data-only notification (just omit the title and body).");e(r,l)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var q=a(j);_(q,{children:(n,u)=>{o();var t=vt(),i=a(g(t));P(i,{content:"contentAvailable"});var p=a(i,2);w(p,{href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application",children:(d,h)=>{o();var r=s("application:didReceiveRemoteNotification:fetchCompletionHandler:");e(d,r)},$$slots:{default:!0}}),o(),e(n,t)},$$slots:{default:!0}});var B=a(q);b(B,{level:1,children:(n,u)=>{o();var t=s("Critical alerts (iOS)");e(n,t)},$$slots:{default:!0}});var D=a(B);_(D,{children:(n,u)=>{o();var t=mt(),i=a(g(t));S(i,{marker:"**",children:(h,r)=>{o();var c=s("Do Not Disturb");e(h,c)},$$slots:{default:!0}});var p=a(i,2);P(p,{content:"critical"});var d=a(p,2);w(d,{href:"https://developer.apple.com/contact/request/notifications-critical-alerts-entitlement/",children:(h,r)=>{o();var c=s("Apple's developer portal");e(h,c)},$$slots:{default:!0}}),o(),e(n,t)},$$slots:{default:!0}});var E=a(D);_(E,{children:(n,u)=>{o();var t=s("Critical alerts are essential for apps that handle time-sensitive or safety-related notifications, such as:");e(n,t)},$$slots:{default:!0}});var L=a(E);x(L,{ordered:!1,marker:"-",children:(n,u)=>{var t=_t(),i=g(t);m(i,{children:(c,l)=>{o();var f=s("Healthcare apps sending urgent medical alerts");e(c,f)},$$slots:{default:!0}});var p=a(i);m(p,{children:(c,l)=>{o();var f=s("Home security apps warning about break-ins");e(c,f)},$$slots:{default:!0}});var d=a(p);m(d,{children:(c,l)=>{o();var f=s("Connected device apps alerting about smoke or carbon monoxide detection");e(c,f)},$$slots:{default:!0}});var h=a(d);m(h,{children:(c,l)=>{o();var f=s("Emergency response apps sending evacuation notices");e(c,f)},$$slots:{default:!0}});var r=a(h);m(r,{children:(c,l)=>{o();var f=s("Financial apps warning about suspicious transactions");e(c,f)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var R=a(L);b(R,{level:1,children:(n,u)=>{o();var t=s("Priority controls");e(n,t)},$$slots:{default:!0}});var U=a(R);_(U,{children:(n,u)=>{o();var t=s("You can now set notifications as either normal or high priority:");e(n,t)},$$slots:{default:!0}});var W=a(U);x(W,{ordered:!1,marker:"-",children:(n,u)=>{var t=Pt(),i=g(t);m(i,{children:(d,h)=>{var r=yt(),c=g(r);S(c,{marker:"**",children:(l,f)=>{o();var v=s("Normal priority:");e(l,v)},$$slots:{default:!0}}),o(),e(d,r)},$$slots:{default:!0}});var p=a(i);m(p,{children:(d,h)=>{var r=bt(),c=g(r);S(c,{marker:"**",children:(l,f)=>{o();var v=s("High priority:");e(l,v)},$$slots:{default:!0}}),o(),e(d,r)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var Y=a(W);b(Y,{level:1,children:(n,u)=>{o();var t=s("Other updates");e(n,t)},$$slots:{default:!0}});var Z=a(Y);x(Z,{ordered:!1,marker:"-",children:(n,u)=>{var t=xt(),i=g(t);m(i,{children:(d,h)=>{var r=wt(),c=g(r);S(c,{marker:"**",children:(l,f)=>{o();var v=s("Badge numbers (iOS):");e(l,v)},$$slots:{default:!0}}),o(),e(d,r)},$$slots:{default:!0}});var p=a(i);m(p,{children:(d,h)=>{var r=kt(),c=g(r);S(c,{marker:"**",children:(l,f)=>{o();var v=s("Data payload:");e(l,v)},$$slots:{default:!0}}),o(),e(d,r)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var z=a(Z);b(z,{level:1,children:(n,u)=>{o();var t=s("Technical details");e(n,t)},$$slots:{default:!0}});var Q=a(z);_(Q,{children:(n,u)=>{o();var t=St(),i=a(g(t));P(i,{content:"createPush"});var p=a(i,2);P(p,{content:"updatePush"}),o(),e(n,t)},$$slots:{default:!0}});var X=a(Q);_(X,{children:(n,u)=>{o();var t=s("Here are some examples to get you started:");e(n,t)},$$slots:{default:!0}});var G=a(X);b(G,{level:2,children:(n,u)=>{o();var t=s("Example 1: Background update for fetching new messages");e(n,t)},$$slots:{default:!0}});var J=a(G);A(J,{children:(n,u)=>{var t=Ot(),i=g(t);k(i,{content:`Future result = await messaging.createPush(
  messageId: 'background-sync-1',
  title: null,                    // Optional for background updates
  body: null,                     // Optional for background updates
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'type': 'message_sync',
    'lastSyncId': '123'
  },
  contentAvailable: true,         // iOS background updates
  priority: 'normal',             // Required for background updates
);
`,language:"dart",process:!0,children:(d,h)=>{o();var r=s(`Future result = await messaging.createPush(
  messageId: 'background-sync-1',
  title: null,                    // Optional for background updates
  body: null,                     // Optional for background updates
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'type': 'message_sync',
    'lastSyncId': '123'
  },
  contentAvailable: true,         // iOS background updates
  priority: 'normal',             // Required for background updates
);`);e(d,r)},$$slots:{default:!0}});var p=a(i);k(p,{content:`const result = await messaging.createPush(
    'background-sync-1', // messageId
    null, // title (optional for background updates)
    null, // body (optional for background updates)
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        type: 'message_sync',
        lastSyncId: '123'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    0, // badge (optional)
    true, // contentAvailable
    false, // critical (optional)
    'normal' // priority
);
`,language:"js",process:!0,children:(d,h)=>{o();var r=s(`const result = await messaging.createPush(
    'background-sync-1', // messageId
    null, // title (optional for background updates)
    null, // body (optional for background updates)
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        type: 'message_sync',
        lastSyncId: '123'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    0, // badge (optional)
    true, // contentAvailable
    false, // critical (optional)
    'normal' // priority
);`);e(d,r)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var K=a(J);b(K,{level:2,children:(n,u)=>{o();var t=s("Example 2: Critical alert for security breach");e(n,t)},$$slots:{default:!0}});var V=a(K);A(V,{children:(n,u)=>{var t=It(),i=g(t);k(i,{content:`Future result = await messaging.createPush(
  messageId: 'security-alert-1',
  title: 'Security Alert',
  body: 'Unusual activity detected at front door',
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'type': 'security_alert',
    'deviceId': 'front_door_cam'
  },
  badge: 1,                       // Must be an integer
  critical: true,                 // iOS-only parameter
  priority: 'high',              // High priority for critical alerts
);
`,language:"dart",process:!0,children:(d,h)=>{o();var r=s(`Future result = await messaging.createPush(
  messageId: 'security-alert-1',
  title: 'Security Alert',
  body: 'Unusual activity detected at front door',
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'type': 'security_alert',
    'deviceId': 'front_door_cam'
  },
  badge: 1,                       // Must be an integer
  critical: true,                 // iOS-only parameter
  priority: 'high',              // High priority for critical alerts
);`);e(d,r)},$$slots:{default:!0}});var p=a(i);k(p,{content:`const result = await messaging.createPush(
    'security-alert-1', // messageId
    'Security Alert', // title
    'Unusual activity detected at front door', // body
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        type: 'security_alert',
        deviceId: 'front_door_cam'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    1, // badge (must be an integer)
    false, // contentAvailable (optional)
    true, // critical (iOS-only)
    'high' // priority
);
`,language:"js",process:!0,children:(d,h)=>{o();var r=s(`const result = await messaging.createPush(
    'security-alert-1', // messageId
    'Security Alert', // title
    'Unusual activity detected at front door', // body
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        type: 'security_alert',
        deviceId: 'front_door_cam'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    1, // badge (must be an integer)
    false, // contentAvailable (optional)
    true, // critical (iOS-only)
    'high' // priority
);`);e(d,r)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var tt=a(V);b(tt,{level:2,children:(n,u)=>{o();var t=s("Example 3: Normal notification for all platforms");e(n,t)},$$slots:{default:!0}});var et=a(tt);A(et,{children:(n,u)=>{var t=At(),i=g(t);k(i,{content:`Future result = await messaging.createPush(
  messageId: 'chat-message-1',
  title: 'New Message',
  body: 'Sarah sent you a photo',
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'chatId': '456',
    'messageType': 'photo'
  },
  badge: 3,                       // Integer for iOS, ignored on Android
  priority: 'normal',            // Normal priority delivery
);
`,language:"dart",process:!0,children:(d,h)=>{o();var r=s(`Future result = await messaging.createPush(
  messageId: 'chat-message-1',
  title: 'New Message',
  body: 'Sarah sent you a photo',
  topics: [],                     // Optional: Send to specific topics
  users: [],                      // Optional: Send to specific users
  targets: [],                    // Optional: Send to specific devices
  data: {                         // Optional: Custom data payload
    'chatId': '456',
    'messageType': 'photo'
  },
  badge: 3,                       // Integer for iOS, ignored on Android
  priority: 'normal',            // Normal priority delivery
);`);e(d,r)},$$slots:{default:!0}});var p=a(i);k(p,{content:`const result = await messaging.createPush(
    'chat-message-1', // messageId
    'New Message', // title
    'Sarah sent you a photo', // body
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        chatId: '456',
        messageType: 'photo'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    3, // badge (integer for iOS)
    false, // contentAvailable (optional)
    false, // critical (optional)
    'normal' // priority
);
`,language:"js",process:!0,children:(d,h)=>{o();var r=s(`const result = await messaging.createPush(
    'chat-message-1', // messageId
    'New Message', // title
    'Sarah sent you a photo', // body
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {
        // data (optional)
        chatId: '456',
        messageType: 'photo'
    },
    null, // action (optional)
    null, // icon (optional)
    null, // sound (optional)
    null, // color (optional)
    null, // tag (optional)
    3, // badge (integer for iOS)
    false, // contentAvailable (optional)
    false, // critical (optional)
    'normal' // priority
);`);e(d,r)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var ot=a(et);_(ot,{children:(n,u)=>{o();var t=Tt(),i=a(g(t));P(i,{content:"critical"});var p=a(i,2);P(p,{content:"badge"}),o(),e(n,t)},$$slots:{default:!0}});var at=a(ot);b(at,{level:1,children:(n,u)=>{o();var t=s("Documentation and resources");e(n,t)},$$slots:{default:!0}});var nt=a(at);x(nt,{ordered:!1,marker:"-",children:(n,u)=>{var t=Ht(),i=g(t);m(i,{children:(r,c)=>{o();var l=Ct(),f=a(g(l));w(f,{href:"https://backrush.io/docs/products/messaging/messages",children:(v,O)=>{o();var y=s("docs");e(v,y)},$$slots:{default:!0}}),e(r,l)},$$slots:{default:!0}});var p=a(i);m(p,{children:(r,c)=>{o();var l=Mt(),f=a(g(l));w(f,{href:"https://backrush.io/blog/post/push-notifications-best-practices",children:(v,O)=>{o();var y=s("push notifications");e(v,y)},$$slots:{default:!0}}),e(r,l)},$$slots:{default:!0}});var d=a(p);m(d,{children:(r,c)=>{o();var l=Nt(),f=a(g(l));w(f,{href:"https://www.youtube.com/watch?v=QdDgPeuBZ1I",children:(v,O)=>{o();var y=s("feature walkthrough");e(v,y)},$$slots:{default:!0}}),e(r,l)},$$slots:{default:!0}});var h=a(d);m(h,{children:(r,c)=>{o();var l=Ft(),f=a(g(l));w(f,{href:"https://backrush.io/products/messaging",children:(v,O)=>{o();var y=s("Messaging");e(v,y)},$$slots:{default:!0}}),e(r,l)},$$slots:{default:!0}}),e(n,t)},$$slots:{default:!0}});var lt=a(nt);_(lt,{children:(n,u)=>{o();var t=s("If you run into any issues or have questions about implementing these features, check the documentation or reach out to us through our support channels.");e(n,t)},$$slots:{default:!0}}),ut(I),e(it,I)},$$slots:{default:!0}}))}const se=Object.freeze(Object.defineProperty({__proto__:null,default:qt,frontmatter:rt},Symbol.toStringTag,{value:"Module"}));export{se as _,qt as a};
