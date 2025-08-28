import{t as d,b as l,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as t,f as u,c as Le,n,r as Me}from"../chunks/NgVQVlRK.js";import{n as qe}from"../chunks/B4IyMRKX.js";import{H as L}from"../chunks/CXsRaEhZ.js";import{M as W}from"../chunks/hMT8fFzP.js";import{I as Ke}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as I}from"../chunks/DXp9_3zM.js";import{F as A}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as E}from"../chunks/D8YsId2T.js";import{S as We}from"../chunks/yHjwcyUH.js";import{L as q}from"../chunks/yh4_9ChP.js";import{T as De}from"../chunks/D8BqvLkQ.js";import{T as Se,a as O,b as H,c as Ge,d as m}from"../chunks/BpU_IltG.js";import{A as He}from"../chunks/CqOphJLh.js";const Ue={layout:"article",title:"Realtime",description:"Want to build dynamic and interactive applications with real-time data updates? Backrush Realtime API makes it possible, get started with our intro guide."};var Fe=d("Backrush supports multiple protocols for accessing the server, including <!>, <!>, and <!>. The Backrush Realtime allows you to listen to any Backrush events in realtime using the <!> method.",1),Ye=d("<!><!><!><!>",1),ze=d("To subscribe to updates from different Backrush resources, you need to specify one or more <!>. The channels offer a wide and powerful selection that will allow you to listen to all possible resources. This allows you to receive updates not only from the database, but from <em>all</em> the services that Backrush offers.",1),Be=d("<!>.",1),Qe=d("All subscriptions are secured by the <!> offered by Backrush, meaning a user will only receive updates to resources they have permission to access.",1),Ve=d("Using <!> on read permissions will allow any client to receive updates.",1),Xe=d("<!><!>",1),Ze=d("Realtime authenticates using an existing user session. If you authenticate <!> creating a subscription, the subscription will not receive updates for the newly authenticated user. You will need to re-create the subscription to work with the new user.",1),et=d("More information and examples of authenticating users can be found in the dedicated <!>.",1),tt=d("In this example we are subscribing to all updates related to our account by using the <!> channel. This will be triggered by any update related to the authenticated user, like updating the user&#39;s name or e-mail address.",1),nt=d("<!><!><!><!>",1),st=d("In this example we are listening to the document A and all files by subscribing to the <!> and <!> channels.",1),ot=d("<!><!><!><!>",1),lt=d("<!><!><!><!>",1),at=d("<!><!><!>",1),rt=d("The <!> that triggered this update.",1),it=d("<!><!><!>",1),ct=d("An array of <!> that can receive this message.",1),dt=d("<!><!><!>",1),pt=d("The <!> in UTC timezone from the server",1),ut=d("<!><!><!>",1),$t=d("<!><!><!>",1),vt=d("<!><!><!><!>",1),mt=d("<!><!>",1),ft=d("If you subscribe to the <!> channel and a document the user is allowed to read is updated, you will receive an object containing information about the event and the updated document.",1),bt=d("<!><!>",1),ht=d("<!><!>",1),_t=d("<!><!>",1),wt=d("<!><!>",1),gt=d("<!><!>",1),Pt=d("<!><!>",1),xt=d("<!><!>",1),Ct=d("<!><!>",1),Rt=d("<!><!>",1),Et=d("<!><!>",1),It=d("<!><!>",1),yt=d("<!><!>",1),At=d("<!><!>",1),kt=d("<!><!>",1),Ot=d("<!><!>",1),Tt=d("<!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Dt=d("<!><!>",1),St=d("The SDK will guess the endpoint of the Realtime API when setting the endpoint of your Backrush instance. If you are running Backrush with a custom proxy and changed the route of the Realtime API, you can call the <!> method on the Client SDK and set your new endpoint value.",1),Gt=d("By default the endpoint is <!>.",1),Nt=d("<!><!><!><!>",1),jt=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function cn(Ne){He(Ne,qe(Ue,{children:(je,Jt)=>{var U=jt(),F=Le(U);E(F,{children:(o,$)=>{n();var s=Fe(),p=t(u(s));q(p,{href:"/docs/apis/rest",children:(a,f)=>{n();var r=l("REST");e(a,r)},$$slots:{default:!0}});var b=t(p,2);q(b,{href:"/docs/apis/graphql",children:(a,f)=>{n();var r=l("GraphQL");e(a,r)},$$slots:{default:!0}});var h=t(b,2);q(h,{href:"/docs/apis/realtime",children:(a,f)=>{n();var r=l("Realtime");e(a,r)},$$slots:{default:!0}});var R=t(h,2);I(R,{content:"subscribe"}),n(),e(o,s)},$$slots:{default:!0}});var Y=t(F);E(Y,{children:(o,$)=>{n();var s=l("Instead of requesting new data via HTTP, the subscription will receive new data every time it changes, any connected client receives that update within milliseconds via a WebSocket connection.");e(o,s)},$$slots:{default:!0}});var z=t(Y);E(z,{children:(o,$)=>{n();var s=l("This lets you build an interactive and responsive user experience by providing information from all of Backrush's services in realtime. The example below shows subscribing to realtime events for file uploads.");e(o,s)},$$slots:{default:!0}});var B=t(z);W(B,{children:(o,$)=>{var s=Ye(),p=u(s);A(p,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});
`,language:"client-web",process:!0,children:(a,f)=>{n();var r=l(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});`);e(a,r)},$$slots:{default:!0}});var b=t(p);A(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

// Subscribe to files channel
final subscription = realtime.subscribe(['files']);

subscription.stream.listen((response) {
    if(response.events.contains('buckets.*.files.*.create')) {
    // Log when a new file is uploaded
    print(response.payload);
    }
});
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var r=l(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

// Subscribe to files channel
final subscription = realtime.subscribe(['files']);

subscription.stream.listen((response) {
    if(response.events.contains('buckets.*.files.*.create')) {
    // Log when a new file is uploaded
    print(response.payload);
    }
});`);e(a,r)},$$slots:{default:!0}});var h=t(b);A(h,{content:`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

// Subscribe to files channel
let subscription = realtime.subscribe(channels: ["files"]) { response in
    if (message.events!.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(String(describing: response))
    }
}
`,language:"client-apple",process:!0,children:(a,f)=>{n();var r=l(`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

// Subscribe to files channel
let subscription = realtime.subscribe(channels: ["files"]) { response in
    if (message.events!.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(String(describing: response))
    }
}`);e(a,r)},$$slots:{default:!0}});var R=t(h);A(R,{content:`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

// Subscribe to files channel
let subscription = realtime.subscribe("files") {
    if(it.events.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(it.payload.toString());
    }
}
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var r=l(`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

// Subscribe to files channel
let subscription = realtime.subscribe("files") {
    if(it.events.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(it.payload.toString());
    }
}`);e(a,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var Q=t(B);E(Q,{children:(o,$)=>{n();var s=ze(),p=t(u(s));q(p,{href:"/docs/apis/realtime#channels",children:(b,h)=>{n();var R=l("channels");e(b,R)},$$slots:{default:!0}}),n(3),e(o,s)},$$slots:{default:!0}});var V=t(Q);E(V,{children:(o,$)=>{n();var s=l("If you subscribe to a channel, you will receive callbacks for a variety of events related to the channel. The events attribute in the callback can be used to filter and respond to specific events in a channel.");e(o,s)},$$slots:{default:!0}});var X=t(V);E(X,{children:(o,$)=>{var s=Be(),p=u(s);q(p,{href:"/docs/advanced/platform/events",children:(b,h)=>{n();var R=l("View a list of all available events");e(b,R)},$$slots:{default:!0}}),n(),e(o,s)},$$slots:{default:!0}});var Z=t(X);Ke(Z,{title:"Permissions",children:(o,$)=>{var s=Xe(),p=u(s);E(p,{children:(h,R)=>{n();var a=Qe(),f=t(u(a));q(f,{href:"/docs/advanced/platform/permissions",children:(r,j)=>{n();var J=l("permissions system");e(r,J)},$$slots:{default:!0}}),n(),e(h,a)},$$slots:{default:!0}});var b=t(p);E(b,{children:(h,R)=>{n();var a=Ve(),f=t(u(a));I(f,{content:"Role.any()"}),n(),e(h,a)},$$slots:{default:!0}}),e(o,s)}});var ee=t(Z);L(ee,{id:"authentication",level:1,children:(o,$)=>{n();var s=l("Authentication");e(o,s)},$$slots:{default:!0}});var te=t(ee);E(te,{children:(o,$)=>{n();var s=Ze(),p=t(u(s));We(p,{marker:"**",children:(b,h)=>{n();var R=l("after");e(b,R)},$$slots:{default:!0}}),n(),e(o,s)},$$slots:{default:!0}});var ne=t(te);E(ne,{children:(o,$)=>{n();var s=et(),p=t(u(s));q(p,{href:"/docs/products/auth",children:(b,h)=>{n();var R=l("authentication docs");e(b,R)},$$slots:{default:!0}}),n(),e(o,s)},$$slots:{default:!0}});var se=t(ne);L(se,{id:"examples",level:1,children:(o,$)=>{n();var s=l("Examples");e(o,s)},$$slots:{default:!0}});var oe=t(se);E(oe,{children:(o,$)=>{n();var s=l("The examples below will show you how you can use Realtime in various ways.");e(o,s)},$$slots:{default:!0}});var le=t(oe);L(le,{id:"subscribe-to-a-channel",level:2,children:(o,$)=>{n();var s=l("Subscribe to a Channel");e(o,s)},$$slots:{default:!0}});var ae=t(le);E(ae,{children:(o,$)=>{n();var s=tt(),p=t(u(s));I(p,{content:"account"}),n(),e(o,s)},$$slots:{default:!0}});var re=t(ae);W(re,{children:(o,$)=>{var s=nt(),p=u(s);A(p,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe('account', response => {
    // Callback will be executed on all account events.
    console.log(response);
});
`,language:"client-web",process:!0,children:(a,f)=>{n();var r=l(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe('account', response => {
    // Callback will be executed on all account events.
    console.log(response);
});`);e(a,r)},$$slots:{default:!0}});var b=t(p);A(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['account']);

subscription.stream.listen((response) {
    // Callback will be executed on all account events.
    print(response);
})
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var r=l(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['account']);

subscription.stream.listen((response) {
    // Callback will be executed on all account events.
    print(response);
})`);e(a,r)},$$slots:{default:!0}});var h=t(b);A(h,{content:`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

let subscription = realtime.subscribe(channel: "account", callback: { response in
    // Callback will be executed on all account events.
    print(String(describing: response))
})
`,language:"client-apple",process:!0,children:(a,f)=>{n();var r=l(`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

let subscription = realtime.subscribe(channel: "account", callback: { response in
    // Callback will be executed on all account events.
    print(String(describing: response))
})`);e(a,r)},$$slots:{default:!0}});var R=t(h);A(R,{content:`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

val subscription = realtime.subscribe("account") {
    // Callback will be executed on all account events.
    print(it.payload.toString())
}
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var r=l(`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

val subscription = realtime.subscribe("account") {
    // Callback will be executed on all account events.
    print(it.payload.toString())
}`);e(a,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var ie=t(re);L(ie,{id:"subscribe-to-multiple-channel",level:2,children:(o,$)=>{n();var s=l("Subscribe to Multiple Channels");e(o,s)},$$slots:{default:!0}});var ce=t(ie);E(ce,{children:(o,$)=>{n();var s=l("You can also listen to multiple channels at once by passing an array of channels. This will trigger the callback for any events for all channels passed.");e(o,s)},$$slots:{default:!0}});var de=t(ce);E(de,{children:(o,$)=>{n();var s=st(),p=t(u(s));I(p,{content:"databases.A.collections.A.documents.A"});var b=t(p,2);I(b,{content:"files"}),n(),e(o,s)},$$slots:{default:!0}});var pe=t(de);W(pe,{children:(o,$)=>{var s=ot(),p=u(s);A(p,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe(['collections.A.documents.A', 'files'], response => {
    // Callback will be executed on changes for documents A and all files.
    console.log(response);
});
`,language:"client-web",process:!0,children:(a,f)=>{n();var r=l(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe(['collections.A.documents.A', 'files'], response => {
    // Callback will be executed on changes for documents A and all files.
    console.log(response);
});`);e(a,r)},$$slots:{default:!0}});var b=t(p);A(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['databases.A.collections.A.documents.A', 'files']);

subscription.stream.listen((response) {
    // Callback will be executed on changes for documents A and all files.
    print(response);
})
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var r=l(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['databases.A.collections.A.documents.A', 'files']);

subscription.stream.listen((response) {
    // Callback will be executed on changes for documents A and all files.
    print(response);
})`);e(a,r)},$$slots:{default:!0}});var h=t(b);A(h,{content:`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

realtime.subscribe(channels: ["databases.A.collections.A.documents.A", "files"]) { response in
    // Callback will be executed on changes for documents A and all files.
    print(String(describing: response))
}
`,language:"client-apple",process:!0,children:(a,f)=>{n();var r=l(`import Backrush
import BackrushModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

realtime.subscribe(channels: ["databases.A.collections.A.documents.A", "files"]) { response in
    // Callback will be executed on changes for documents A and all files.
    print(String(describing: response))
}`);e(a,r)},$$slots:{default:!0}});var R=t(h);A(R,{content:`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
val realtime = Realtime(client)

realtime.subscribe("databases.A.collections.A.documents.A", "files") {
    // Callback will be executed on changes for documents A and all files.
    print(it.toString())
}
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var r=l(`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
val realtime = Realtime(client)

realtime.subscribe("databases.A.collections.A.documents.A", "files") {
    // Callback will be executed on changes for documents A and all files.
    print(it.toString())
}`);e(a,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var ue=t(pe);L(ue,{id:"unsubscribe",level:2,children:(o,$)=>{n();var s=l("Unsubscribe");e(o,s)},$$slots:{default:!0}});var $e=t(ue);E($e,{children:(o,$)=>{n();var s=l("If you no longer want to receive updates from a subscription, you can unsubscribe so that your callbacks are no longer called. Leaving old subscriptions alive and resubscribing can result in duplicate subscriptions and cause race conditions.");e(o,s)},$$slots:{default:!0}});var ve=t($e);W(ve,{children:(o,$)=>{var s=lt(),p=u(s);A(p,{content:`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const unsubscribe = client.subscribe('files', response => {
    // Callback will be executed on changes for all files.
    console.log(response);
});

// Closes the subscription.
unsubscribe();
`,language:"client-web",process:!0,children:(a,f)=>{n();var r=l(`import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const unsubscribe = client.subscribe('files', response => {
    // Callback will be executed on changes for all files.
    console.log(response);
});

// Closes the subscription.
unsubscribe();`);e(a,r)},$$slots:{default:!0}});var b=t(p);A(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['files']);

subscription.stream.listen((response) {
    // Callback will be executed on changes for all files.
    print(response);
})

// Closes the subscription.
subscription.close();
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var r=l(`import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

final subscription = realtime.subscribe(['files']);

subscription.stream.listen((response) {
    // Callback will be executed on changes for all files.
    print(response);
})

// Closes the subscription.
subscription.close();`);e(a,r)},$$slots:{default:!0}});var h=t(b);A(h,{content:`import Backrush

let client = Client()
let realtime = Realtime(client)

let subscription = realtime.subscribe(channel: "files") { response in
    // Callback will be executed on changes for all files.
    print(response.toString())
}

// Closes the subscription.
subscription.close()
`,language:"client-apple",process:!0,children:(a,f)=>{n();var r=l(`import Backrush

let client = Client()
let realtime = Realtime(client)

let subscription = realtime.subscribe(channel: "files") { response in
    // Callback will be executed on changes for all files.
    print(response.toString())
}

// Closes the subscription.
subscription.close()`);e(a,r)},$$slots:{default:!0}});var R=t(h);A(R,{content:`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

val subscription = realtime.subscribe("files") {
    // Callback will be executed on changes for all files.
    print(it.toString())
}

// Closes the subscription.
subscription.close()
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var r=l(`import io.appwrite.Client
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

val subscription = realtime.subscribe("files") {
    // Callback will be executed on changes for all files.
    print(it.toString())
}

// Closes the subscription.
subscription.close()`);e(a,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var me=t(ve);L(me,{id:"payload",level:1,children:(o,$)=>{n();var s=l("Payload");e(o,s)},$$slots:{default:!0}});var fe=t(me);E(fe,{children:(o,$)=>{n();var s=l("The payload from the subscription will contain following properties:");e(o,s)},$$slots:{default:!0}});var be=t(fe);De(be,{children:(o,$)=>{var s=mt(),p=u(s);Se(p,{children:(h,R)=>{O(h,{children:(a,f)=>{var r=at(),j=u(r);H(j,{children:(S,y)=>{n();var k=l("Name");e(S,k)},$$slots:{default:!0}});var J=t(j);H(J,{children:(S,y)=>{n();var k=l("Type");e(S,k)},$$slots:{default:!0}});var T=t(J);H(T,{children:(S,y)=>{n();var k=l("Description");e(S,k)},$$slots:{default:!0}}),e(a,r)},$$slots:{default:!0}})},$$slots:{default:!0}});var b=t(p);Ge(b,{children:(h,R)=>{var a=vt(),f=u(a);O(f,{children:(T,S)=>{var y=it(),k=u(y);m(k,{children:(C,N)=>{n();var w=l("events");e(C,w)},$$slots:{default:!0}});var G=t(k);m(G,{children:(C,N)=>{n();var w=l("string[]");e(C,w)},$$slots:{default:!0}});var M=t(G);m(M,{children:(C,N)=>{n();var w=rt(),K=t(u(w));q(K,{href:"/docs/advanced/platform/events",children:(_,D)=>{n();var c=l("Backrush events");e(_,c)},$$slots:{default:!0}}),n(),e(C,w)},$$slots:{default:!0}}),e(T,y)},$$slots:{default:!0}});var r=t(f);O(r,{children:(T,S)=>{var y=dt(),k=u(y);m(k,{children:(C,N)=>{n();var w=l("channels");e(C,w)},$$slots:{default:!0}});var G=t(k);m(G,{children:(C,N)=>{n();var w=l("string[]");e(C,w)},$$slots:{default:!0}});var M=t(G);m(M,{children:(C,N)=>{n();var w=ct(),K=t(u(w));q(K,{href:"/docs/apis/realtime#channels",children:(_,D)=>{n();var c=l("channels");e(_,c)},$$slots:{default:!0}}),n(),e(C,w)},$$slots:{default:!0}}),e(T,y)},$$slots:{default:!0}});var j=t(r);O(j,{children:(T,S)=>{var y=ut(),k=u(y);m(k,{children:(C,N)=>{n();var w=l("timestamp");e(C,w)},$$slots:{default:!0}});var G=t(k);m(G,{children:(C,N)=>{n();var w=l("string");e(C,w)},$$slots:{default:!0}});var M=t(G);m(M,{children:(C,N)=>{n();var w=pt(),K=t(u(w));q(K,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:(_,D)=>{n();var c=l("ISO 8601 timestamp");e(_,c)},$$slots:{default:!0}}),n(),e(C,w)},$$slots:{default:!0}}),e(T,y)},$$slots:{default:!0}});var J=t(j);O(J,{children:(T,S)=>{var y=$t(),k=u(y);m(k,{children:(C,N)=>{n();var w=l("payload");e(C,w)},$$slots:{default:!0}});var G=t(k);m(G,{children:(C,N)=>{n();var w=l("object");e(C,w)},$$slots:{default:!0}});var M=t(G);m(M,{children:(C,N)=>{n();var w=l("Payload contains the data equal to the response model.");e(C,w)},$$slots:{default:!0}}),e(T,y)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var he=t(be);E(he,{children:(o,$)=>{n();var s=ft(),p=t(u(s));I(p,{content:"documents"}),n(),e(o,s)},$$slots:{default:!0}});var _e=t(he);E(_e,{children:(o,$)=>{n();var s=l("The response will look like this:");e(o,s)},$$slots:{default:!0}});var we=t(_e);A(we,{content:`{
  "events": [
    "databases.default.collections.sample.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.*.documents.*.update",
    "databases.default.collections.*.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.*.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.sample.documents.63c98b9baea0938e1206.update",
    "databases.default.collections.sample.documents.*.update",
    "databases.*.collections.sample.documents.*.update",
    "databases.default.collections.*.documents.*.update",
    "databases.default.collections.sample.documents.63c98b9baea0938e1206",
    "databases.*.collections.*.documents.*",
    "databases.default.collections.*.documents.63c98b9baea0938e1206",
    "databases.*.collections.*.documents.63c98b9baea0938e1206",
    "databases.*.collections.sample.documents.63c98b9baea0938e1206",
    "databases.default.collections.sample.documents.*",
    "databases.*.collections.sample.documents.*",
    "databases.default.collections.*.documents.*",
    "databases.default.collections.sample",
    "databases.*.collections.*",
    "databases.default.collections.*",
    "databases.*.collections.sample",
    "databases.default",
    "databases.*"
  ],
  "channels": [
    "documents",
    "databases.default.collections.sample.documents",
    "databases.default.collections.sample.documents.63c98b9baea0938e1206"
  ],
  "timestamp": "2023-01-19 18:30:04.051",
  "payload": {
    "ip": "127.0.0.1",
    "stringArray": [
      "sss"
    ],
    "email": "joe@example.com",
    "stringRequired": "req",
    "float": 3.3,
    "boolean": false,
    "integer": 3,
    "enum": "apple",
    "stringDefault": "default",
    "datetime": "2023-01-19T10:27:09.428+00:00",
    "url": "https://appwrite.io",
    "$id": "63c98b9baea0938e1206",
    "$createdAt": "2023-01-19T18:27:39.715+00:00",
    "$updatedAt": "2023-01-19T18:30:04.040+00:00",
    "$permissions": [],
    "$collectionId": "sample",
    "$databaseId": "default"
  }
}
`,language:"json",process:!0,children:(o,$)=>{n();var s=l(`{
  "events": [
    "databases.default.collections.sample.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.*.documents.*.update",
    "databases.default.collections.*.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.*.documents.63c98b9baea0938e1206.update",
    "databases.*.collections.sample.documents.63c98b9baea0938e1206.update",
    "databases.default.collections.sample.documents.*.update",
    "databases.*.collections.sample.documents.*.update",
    "databases.default.collections.*.documents.*.update",
    "databases.default.collections.sample.documents.63c98b9baea0938e1206",
    "databases.*.collections.*.documents.*",
    "databases.default.collections.*.documents.63c98b9baea0938e1206",
    "databases.*.collections.*.documents.63c98b9baea0938e1206",
    "databases.*.collections.sample.documents.63c98b9baea0938e1206",
    "databases.default.collections.sample.documents.*",
    "databases.*.collections.sample.documents.*",
    "databases.default.collections.*.documents.*",
    "databases.default.collections.sample",
    "databases.*.collections.*",
    "databases.default.collections.*",
    "databases.*.collections.sample",
    "databases.default",
    "databases.*"
  ],
  "channels": [
    "documents",
    "databases.default.collections.sample.documents",
    "databases.default.collections.sample.documents.63c98b9baea0938e1206"
  ],
  "timestamp": "2023-01-19 18:30:04.051",
  "payload": {
    "ip": "127.0.0.1",
    "stringArray": [
      "sss"
    ],
    "email": "joe@example.com",
    "stringRequired": "req",
    "float": 3.3,
    "boolean": false,
    "integer": 3,
    "enum": "apple",
    "stringDefault": "default",
    "datetime": "2023-01-19T10:27:09.428+00:00",
    "url": "https://appwrite.io",
    "$id": "63c98b9baea0938e1206",
    "$createdAt": "2023-01-19T18:27:39.715+00:00",
    "$updatedAt": "2023-01-19T18:30:04.040+00:00",
    "$permissions": [],
    "$collectionId": "sample",
    "$databaseId": "default"
  }
}`);e(o,s)},$$slots:{default:!0}});var ge=t(we);L(ge,{id:"channels",level:1,children:(o,$)=>{n();var s=l("Channels");e(o,s)},$$slots:{default:!0}});var Pe=t(ge);E(Pe,{children:(o,$)=>{n();var s=l("A list of all channels available you can subscribe to. IDs cannot be wildcards.");e(o,s)},$$slots:{default:!0}});var xe=t(Pe);De(xe,{children:(o,$)=>{var s=Dt(),p=u(s);Se(p,{children:(h,R)=>{O(h,{children:(a,f)=>{var r=bt(),j=u(r);H(j,{children:(T,S)=>{n();var y=l("Channel");e(T,y)},$$slots:{default:!0}});var J=t(j);H(J,{children:(T,S)=>{n();var y=l("Description");e(T,y)},$$slots:{default:!0}}),e(a,r)},$$slots:{default:!0}})},$$slots:{default:!0}});var b=t(p);Ge(b,{children:(h,R)=>{var a=Tt(),f=u(a);O(f,{children:(_,D)=>{var c=ht(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"account"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("All account related events (session create, name update...)");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var r=t(f);O(r,{children:(_,D)=>{var c=_t(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"databases.[ID].collections.[ID].documents"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any create/update/delete events to any document in a collection");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var j=t(r);O(j,{children:(_,D)=>{var c=wt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"documents"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any create/update/delete events to any document");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var J=t(j);O(J,{children:(_,D)=>{var c=gt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"databases.[ID].collections.[ID].documents.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update/delete events to a given document");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var T=t(J);O(T,{children:(_,D)=>{var c=Pt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"files"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any create/update/delete events to any file");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var S=t(T);O(S,{children:(_,D)=>{var c=xt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"buckets.[ID].files.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update/delete events to a given file of the given bucket");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var y=t(S);O(y,{children:(_,D)=>{var c=Ct(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"buckets.[ID].files"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update/delete events to any file of the given bucket");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var k=t(y);O(k,{children:(_,D)=>{var c=Rt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"teams"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any create/update/delete events to a any team");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var G=t(k);O(G,{children:(_,D)=>{var c=Et(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"teams.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update/delete events to a given team");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var M=t(G);O(M,{children:(_,D)=>{var c=It(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"memberships"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any create/update/delete events to a any membership");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var C=t(M);O(C,{children:(_,D)=>{var c=yt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"memberships.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update/delete events to a given membership");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var N=t(C);O(N,{children:(_,D)=>{var c=At(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"executions"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update to executions");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var w=t(N);O(w,{children:(_,D)=>{var c=kt(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"executions.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any update to a given execution");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}});var K=t(w);O(K,{children:(_,D)=>{var c=Ot(),v=u(c);m(v,{children:(i,P)=>{I(i,{content:"functions.[ID]"})},$$slots:{default:!0}});var g=t(v);m(g,{children:(i,P)=>{n();var x=l("Any execution event to a given function");e(i,x)},$$slots:{default:!0}}),e(_,c)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var Ce=t(xe);L(Ce,{id:"custom-endpoint",level:1,children:(o,$)=>{n();var s=l("Custom endpoint");e(o,s)},$$slots:{default:!0}});var Re=t(Ce);E(Re,{children:(o,$)=>{n();var s=St(),p=t(u(s));I(p,{content:"setEndpointRealtime"}),n(),e(o,s)},$$slots:{default:!0}});var Ee=t(Re);E(Ee,{children:(o,$)=>{n();var s=Gt(),p=t(u(s));I(p,{content:"wss://<REGION>.cloud.appwrite.io/v1/realtime"}),n(),e(o,s)},$$slots:{default:!0}});var Ie=t(Ee);W(Ie,{children:(o,$)=>{var s=Nt(),p=u(s);A(p,{content:`import { Client } from "appwrite";
const client = new Client();

client.setEndpointRealtime('wss://<REGION>.cloud.appwrite.io/v1/realtime');
`,language:"client-web",process:!0,children:(a,f)=>{n();var r=l(`import { Client } from "appwrite";
const client = new Client();

client.setEndpointRealtime('wss://<REGION>.cloud.appwrite.io/v1/realtime');`);e(a,r)},$$slots:{default:!0}});var b=t(p);A(b,{content:`import 'package:appwrite/appwrite.dart';

final client = Client();
client.setEndpointRealtime('wss://<REGION>.cloud.appwrite.io/v1/realtime');
`,language:"client-flutter",process:!0,children:(a,f)=>{n();var r=l(`import 'package:appwrite/appwrite.dart';

final client = Client();
client.setEndpointRealtime('wss://<REGION>.cloud.appwrite.io/v1/realtime');`);e(a,r)},$$slots:{default:!0}});var h=t(b);A(h,{content:`import Backrush

let client = Client()
client.setEndpointRealtime("wss://<REGION>.cloud.appwrite.io/v1/realtime")
`,language:"client-apple",process:!0,children:(a,f)=>{n();var r=l(`import Backrush

let client = Client()
client.setEndpointRealtime("wss://<REGION>.cloud.appwrite.io/v1/realtime")`);e(a,r)},$$slots:{default:!0}});var R=t(h);A(R,{content:`import io.appwrite.Client

val client = Client(context)
client.setEndpointRealtime("wss://<REGION>.cloud.appwrite.io/v1/realtime")
`,language:"client-android-kotlin",process:!0,children:(a,f)=>{n();var r=l(`import io.appwrite.Client

val client = Client(context)
client.setEndpointRealtime("wss://<REGION>.cloud.appwrite.io/v1/realtime")`);e(a,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}});var ye=t(Ie);L(ye,{id:"limitations",level:1,children:(o,$)=>{n();var s=l("Limitations");e(o,s)},$$slots:{default:!0}});var Ae=t(ye);E(Ae,{children:(o,$)=>{n();var s=l("While the Realtime API offers robust capabilities, there are currently some limitations to be aware of in its implementation.");e(o,s)},$$slots:{default:!0}});var ke=t(Ae);L(ke,{id:"subscription-changes",level:2,children:(o,$)=>{n();var s=l("Subscription changes");e(o,s)},$$slots:{default:!0}});var Oe=t(ke);E(Oe,{children:(o,$)=>{n();var s=l("The SDK creates a single WebSocket connection for all subscribed channels. Each time a channel is added or unsubscribed, the SDK currently creates a completely new connection and terminates the old one. Therefore, subscriptions to channels should always be done in conjunction with state management so as not to be unnecessarily built up several times by multiple components' life cycles.");e(o,s)},$$slots:{default:!0}});var Te=t(Oe);L(Te,{id:"server-sdks",level:2,children:(o,$)=>{n();var s=l("Server SDKs");e(o,s)},$$slots:{default:!0}});var Je=t(Te);E(Je,{children:(o,$)=>{n();var s=l("We currently are not offering access to realtime with Server SDKs and an API key.");e(o,s)},$$slots:{default:!0}}),Me(U),e(je,U)},$$slots:{default:!0}}))}export{cn as component};
