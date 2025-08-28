import{t as l,b as o,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as e,f as p,c as Ut,n,r as qt}from"../chunks/NgVQVlRK.js";import{n as Ft}from"../chunks/B4IyMRKX.js";import{H as Z}from"../chunks/CXsRaEhZ.js";import{M as at}from"../chunks/hMT8fFzP.js";import{T as Ht,a as it}from"../chunks/BHbEtIoO.js";import{O as Rt,a as Gt}from"../chunks/uti8MWrk.js";import{A as lt}from"../chunks/CP6rnx7i.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as rt}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as P}from"../chunks/DXp9_3zM.js";import{F as R}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as Q}from"../chunks/D8YsId2T.js";import{S as pt}from"../chunks/yHjwcyUH.js";import{T as tt}from"../chunks/D8BqvLkQ.js";import{T as et,a as A,b as V,c as nt,d as s}from"../chunks/BpU_IltG.js";import{A as zt}from"../chunks/CqOphJLh.js";const Wt={layout:"article",title:"Messages",description:"Learn about Backrush messages, the different types of messages, what can be sent in different message types.",back:"/docs"};var Qt=l("Each time you send or schedule a push notification, email, or SMS text, it&#39;s recorded in Backrush as a <!> is displayed in the <!> tab.",1),Vt=l("<!><!>",1),Xt=l("<!><!>",1),Zt=l("<!><!>",1),te=l("<!><!>",1),ee=l("Type of message, either <!>, <!>, and <!>.",1),ne=l("<!><!>",1),oe=l("Indicates the status of the message, can be one of <!>, <!>, <!>, <!>, <!>.",1),re=l("<!><!>",1),se=l("<!><!>",1),ae=l("<!><!>",1),ie=l("<!><!><!><!><!><!><!>",1),le=l("<!><!>",1),pe=l("<!><!>",1),de=l("<!><!>",1),ce=l("<!><!>",1),ue=l("<!><!>",1),$e=l("<!><!><!>",1),ge=l("<!><!>",1),_e=l("Messages can begin as a <!>, or proceed directly to <!> if it&#39;s sent immediately. If the message is scheduled to be sent later, its status is set to <!>, then to <!> at schedule time. After attempted delivery, it is marked as <!> or <!> depending on if the message was successfully delivered.",1),fe=l("<!><!>",1),ve=l("<!><!>",1),me=l("<!><!>",1),he=l("<!><!>",1),Pe=l("<!><!>",1),Ie=l("<!><!>",1),Ee=l("<!><!><!><!><!>",1),we=l("<!><!>",1),Ce=l("<!><!><!>",1),Ae=l("<!><!><!>",1),Oe=l("<!><!><!>",1),Te=l("<!><!><!>",1),Se=l("<!><!><!>",1),ye=l("<!><!><!>",1),be=l("<!><!><!>",1),De=l("Sets the sound to use for the notification. For Android, the sound file must be located in <!>; for Apple devices, it must be in the app&#39;s main bundle or the <!> folder of the app container.",1),Me=l("<!><!><!>",1),Ye=l("<!><!><!>",1),Ne=l("<!><!><!>",1),ke=l("<!><!><!>",1),xe=l("For iOS devices only. When set, wakes up the app in the background without showing a notification. Used to update app data remotely. Requires priority to be set to normal. <!> APNS may throttle if sending more than 2-3 background notifications per hour. For Android, similar functionality can be achieved by sending a data-only notification without title and body.",1),je=l("<!><!><!>",1),Re=l("<!><!><!>",1),Ge=l("<!><!><!>",1),Je=l("If the message is a draft, can be <!> or <!>.",1),Le=l("<!><!><!>",1),Ke=l("<!><!><!>",1),Be=l("<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>",1),Ue=l("<!><!>",1),qe=l("<!><!><!>",1),Fe=l("<!><!><!>",1),He=l("The main content of the email. This can be plain text or HTML, depending on the <!> flag.",1),ze=l("<!><!><!>",1),We=l("<!><!><!>",1),Qe=l("<!><!><!>",1),Ve=l("A boolean indicating whether the <!> is in HTML format. This allows for rich text, links, and styling in the email content.",1),Xe=l("<!><!><!>",1),Ze=l("If the message is a draft, can be <!> or <!>.",1),tn=l("<!><!><!>",1),en=l("<!><!><!>",1),nn=l("<!><!><!><!><!><!><!>",1),on=l("<!><!>",1),rn=l("<!><!><!>",1),sn=l("<!><!><!>",1),an=l("If the message is a draft, can be <!> or <!>.",1),ln=l("<!><!><!>",1),pn=l("<!><!><!>",1),dn=l("<!><!><!>",1),cn=l("<!><!>",1),un=l("<!><!><!>",1),$n=l("<!><!><!><!><!><!><!><!><!><!>",1),gn=l("<!><!><!><!><!><!><!><!><!><!>",1),_n=l("<!><!><!><!><!><!><!><!><!><!>",1),fn=l("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Un(Jt){zt(Jt,Ft(Wt,{children:(Lt,vn)=>{var st=fn(),dt=Ut(st);Q(dt,{children:(f,K)=>{n();var c=Qt(),k=e(p(c));pt(k,{marker:"**",children:(G,q)=>{n();var x=o("message");t(G,x)},$$slots:{default:!0}});var B=e(k,2);pt(B,{marker:"**",children:(G,q)=>{n();var x=o("Messages");t(G,x)},$$slots:{default:!0}}),n(),t(f,c)},$$slots:{default:!0}});var ct=e(dt);Rt(ct,{children:(f,K)=>{Q(f,{children:(c,k)=>{rt(c,{src:"/images/docs/messaging/messages/dark/messages-overview.png",alt:"Add a target"})},$$slots:{default:!0}})}});var ut=e(ct);Gt(ut,{children:(f,K)=>{Q(f,{children:(c,k)=>{rt(c,{src:"/images/docs/messaging/messages/messages-overview.png",alt:"Add a target"})},$$slots:{default:!0}})}});var $t=e(ut);Z($t,{id:"messages",level:1,children:(f,K)=>{n();var c=o("Messages");t(f,c)},$$slots:{default:!0}});var gt=e($t);Q(gt,{children:(f,K)=>{n();var c=o("Each message displays with the following information.");t(f,c)},$$slots:{default:!0}});var _t=e(gt);tt(_t,{children:(f,K)=>{var c=le(),k=p(c);et(k,{children:(G,q)=>{A(G,{children:(x,U)=>{var J=Vt(),N=p(J);V(N,{width:200,children:(j,a)=>{n();var u=o("Column");t(j,u)},$$slots:{default:!0}});var M=e(N);V(M,{children:(j,a)=>{n();var u=o("Description");t(j,u)},$$slots:{default:!0}}),t(x,J)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=e(k);nt(B,{children:(G,q)=>{var x=ie(),U=p(x);A(U,{children:(r,O)=>{var v=Xt(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Message ID");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=o("The unique ID of the message.");t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var J=e(U);A(J,{children:(r,O)=>{var v=Zt(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Description");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=o("The developer defined description of the message. End users do not see this description.");t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var N=e(J);A(N,{children:(r,O)=>{var v=te(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Message");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=o("The message delivered to end users.");t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var M=e(N);A(M,{children:(r,O)=>{var v=ne(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Type");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=ee(),h=e(p(m));P(h,{content:"Push"});var H=e(h,2);P(H,{content:"Email"});var E=e(H,2);P(E,{content:"SMS"}),n(),t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var j=e(M);A(j,{children:(r,O)=>{var v=re(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Status");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=oe(),h=e(p(m));P(h,{content:"draft"});var H=e(h,2);P(H,{content:"scheduled"});var E=e(H,2);P(E,{content:"processing"});var Y=e(E,2);P(Y,{content:"failed"});var D=e(Y,2);P(D,{content:"success"}),n(),t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var a=e(j);A(a,{children:(r,O)=>{var v=se(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Scheduled at");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=o("Indicates the scheduled delivery time of the message.");t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}});var u=e(a);A(u,{children:(r,O)=>{var v=ae(),d=p(v);s(d,{children:($,I)=>{n();var m=o("Delivered at");t($,m)},$$slots:{default:!0}});var T=e(d);s(T,{children:($,I)=>{n();var m=o("Indicates the time at which the message was successfully delivered.");t($,m)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}}),t(G,x)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var ft=e(_t);Z(ft,{id:"messages-types",level:1,children:(f,K)=>{n();var c=o("Messages types");t(f,c)},$$slots:{default:!0}});var vt=e(ft);Q(vt,{children:(f,K)=>{n();var c=o("There are three types of messages");t(f,c)},$$slots:{default:!0}});var mt=e(vt);tt(mt,{children:(f,K)=>{var c=ge(),k=p(c);et(k,{children:(G,q)=>{A(G,{children:(x,U)=>{var J=pe(),N=p(J);V(N,{width:200,children:(j,a)=>{n();var u=o("Message type");t(j,u)},$$slots:{default:!0}});var M=e(N);V(M,{children:(j,a)=>{n();var u=o("Description");t(j,u)},$$slots:{default:!0}}),t(x,J)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=e(k);nt(B,{children:(G,q)=>{var x=$e(),U=p(x);A(U,{children:(M,j)=>{var a=de(),u=p(a);s(u,{children:(O,v)=>{n();var d=o("Push notifications");t(O,d)},$$slots:{default:!0}});var r=e(u);s(r,{children:(O,v)=>{n();var d=o("Push notifications are alerts that show up on a user device's notification center. This can be used to deliver messages to the user whether their application is open or not.");t(O,d)},$$slots:{default:!0}}),t(M,a)},$$slots:{default:!0}});var J=e(U);A(J,{children:(M,j)=>{var a=ce(),u=p(a);s(u,{children:(O,v)=>{n();var d=o("Emails");t(O,d)},$$slots:{default:!0}});var r=e(u);s(r,{children:(O,v)=>{n();var d=o("Emails let you deliver rich content to a users' inbox. Backrush allows you to send customized HTML email messages so you can include links, styling, and more.");t(O,d)},$$slots:{default:!0}}),t(M,a)},$$slots:{default:!0}});var N=e(J);A(N,{children:(M,j)=>{var a=ue(),u=p(a);s(u,{children:(O,v)=>{n();var d=o("SMS");t(O,d)},$$slots:{default:!0}});var r=e(u);s(r,{children:(O,v)=>{n();var d=o("SMS messages let you deliver text messages to your user's phone. This helps you reach your user, even when their device do not have internet access.");t(O,d)},$$slots:{default:!0}}),t(M,a)},$$slots:{default:!0}}),t(G,x)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var ht=e(mt);Z(ht,{id:"messages-lifecycle",level:1,children:(f,K)=>{n();var c=o("Messages lifecycle");t(f,c)},$$slots:{default:!0}});var Pt=e(ht);Q(Pt,{children:(f,K)=>{n();var c=_e(),k=e(p(c));P(k,{content:"draft"});var B=e(k,2);P(B,{content:"processing"});var G=e(B,2);P(G,{content:"scheduled"});var q=e(G,2);P(q,{content:"processing"});var x=e(q,2);P(x,{content:"sent"});var U=e(x,2);P(U,{content:"failed"}),n(),t(f,c)},$$slots:{default:!0}});var It=e(Pt);Rt(It,{children:(f,K)=>{Q(f,{children:(c,k)=>{rt(c,{src:"/images/docs/messaging/dark/message-status.png",alt:"Message lifecycle"})},$$slots:{default:!0}})}});var Et=e(It);Gt(Et,{children:(f,K)=>{Q(f,{children:(c,k)=>{rt(c,{src:"/images/docs/messaging/message-status.png",alt:"Message lifecycle"})},$$slots:{default:!0}})}});var wt=e(Et);Z(wt,{id:"choosing-a-message-type",level:1,children:(f,K)=>{n();var c=o("Choosing a message type");t(f,c)},$$slots:{default:!0}});var Ct=e(wt);Q(Ct,{children:(f,K)=>{n();var c=o("Choosing the right type of notification to reach your audience is important for your app's success. Here are some common factors to consider when deciding what type of message should be sent.");t(f,c)},$$slots:{default:!0}});var At=e(Ct);tt(At,{children:(f,K)=>{var c=we(),k=p(c);et(k,{children:(G,q)=>{A(G,{children:(x,U)=>{var J=fe(),N=p(J);V(N,{width:200,children:(j,a)=>{n();var u=o("Message type");t(j,u)},$$slots:{default:!0}});var M=e(N);V(M,{children:(j,a)=>{n();var u=o("Description");t(j,u)},$$slots:{default:!0}}),t(x,J)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=e(k);nt(B,{children:(G,q)=>{var x=Ee(),U=p(x);A(U,{children:(a,u)=>{var r=ve(),O=p(r);s(O,{children:(d,T)=>{n();var $=o("Time-sensitive messages");t(d,$)},$$slots:{default:!0}});var v=e(O);s(v,{children:(d,T)=>{n();var $=o("Push notifications or SMS messages are ideal for time-sensitive messages, as they are typically checked frequently and opened within minutes, ensuring prompt attention.");t(d,$)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}});var J=e(U);A(J,{children:(a,u)=>{var r=me(),O=p(r);s(O,{children:(d,T)=>{n();var $=o("Guaranteed delivery");t(d,$)},$$slots:{default:!0}});var v=e(O);s(v,{children:(d,T)=>{n();var $=o("Emails and SMS messages are more reliable for guaranteed delivery of important messages like invoices and order confirmations, as push notifications can be easily missed.");t(d,$)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}});var N=e(J);A(N,{children:(a,u)=>{var r=he(),O=p(r);s(O,{children:(d,T)=>{n();var $=o("Content-rich messages");t(d,$)},$$slots:{default:!0}});var v=e(O);s(v,{children:(d,T)=>{n();var $=o("Emails are best suited for delivering content-rich messages like promotional letters, detailed updates, and newsletters, thanks to support for HTML, allowing for rich text, links, and styling.");t(d,$)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}});var M=e(N);A(M,{children:(a,u)=>{var r=Pe(),O=p(r);s(O,{children:(d,T)=>{n();var $=o("Increasing engagement");t(d,$)},$$slots:{default:!0}});var v=e(O);s(v,{children:(d,T)=>{n();var $=o("Push notifications are effective for increasing engagement with users, as they can be clicked on to link directly to your app, promoting immediate interaction.");t(d,$)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}});var j=e(M);A(j,{children:(a,u)=>{var r=Ie(),O=p(r);s(O,{children:(d,T)=>{n();var $=o("Accessibility and reach");t(d,$)},$$slots:{default:!0}});var v=e(O);s(v,{children:(d,T)=>{n();var $=o("Emails and SMS messages allow you to reach users even before they have installed your app, making them suitable for announcement-type messages that require broad accessibility.");t(d,$)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}}),t(G,x)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var Ot=e(At);Z(Ot,{id:"composing-messages",level:1,children:(f,K)=>{n();var c=o("Composing messages");t(f,c)},$$slots:{default:!0}});var Tt=e(Ot);Q(Tt,{children:(f,K)=>{n();var c=o("Different types of messages have different content and configurable options. Here are the different components that make up a message.");t(f,c)},$$slots:{default:!0}});var St=e(Tt);Ht(St,{children:(f,K)=>{var c=un(),k=p(c);it(k,{id:"push-notification",title:"Push notifications",children:(q,x)=>{tt(q,{children:(U,J)=>{var N=Ue(),M=p(N);et(M,{children:(a,u)=>{A(a,{children:(r,O)=>{var v=Ce(),d=p(v);V(d,{width:100,children:(I,m)=>{n();var h=o("Parameter");t(I,h)},$$slots:{default:!0}});var T=e(d);V(T,{width:100,children:(I,m)=>{n();var h=o("Required");t(I,h)},$$slots:{default:!0}});var $=e(T);V($,{children:(I,m)=>{n();var h=o("Description");t(I,h)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=e(M);nt(j,{children:(a,u)=>{var r=Be(),O=p(r);A(O,{children:(_,z)=>{var C=Ae(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"messageId"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("required");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("The title of the push notification. This is the headline text that recipients see first.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var v=e(O);A(v,{children:(_,z)=>{var C=Oe(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"title"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("The title of the push notification. This is the headline text that recipients see first. Can be omitted for background notifications.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var d=e(v);A(d,{children:(_,z)=>{var C=Te(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"body"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("The main content or body of the push notification. Provides the details or message you want to convey. Can be omitted for background notifications.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var T=e(d);A(T,{children:(_,z)=>{var C=Se(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"data"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Extra key-value pairs that apps can use to handle the notification more effectively, such as directing users to a specific part of the app.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var $=e(T);A($,{children:(_,z)=>{var C=ye(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"action"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Specifies which activity or view controller to open within the app when the notification is tapped.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var I=e($);A(I,{children:(_,z)=>{var C=be(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"icon"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Sets the icon of the notification, used only for Android devices. This can help in branding the notification.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var m=e(I);A(m,{children:(_,z)=>{var C=Me(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"sound"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=De(),X=e(p(g));P(X,{content:"/res/raw"});var ot=e(X,2);P(ot,{content:"Library/Sounds"}),n(),t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var h=e(m);A(h,{children:(_,z)=>{var C=Ye(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"color"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Specifies a color tint for the notification icon, used only for Android devices. This can be used to align with brand colors.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var H=e(h);A(H,{children:(_,z)=>{var C=Ne(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"tag"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Can be used to replace an existing notification with the same tag, used only for Android devices. Useful for updating or canceling notifications.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var E=e(H);A(E,{children:(_,z)=>{var C=ke(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"badge"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Sets the number to display next to the app's icon, indicating the number of notifications or updates. Setting to 0 removes any existing badge. Must be an integer. For Apple devices only.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var Y=e(E);A(Y,{children:(_,z)=>{var C=je(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"contentAvailable"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=xe(),X=e(p(g));pt(X,{marker:"**",children:(ot,mn)=>{n();var Bt=o("Note:");t(ot,Bt)},$$slots:{default:!0}}),n(),t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var D=e(Y);A(D,{children:(_,z)=>{var C=Re(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"critical"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("For iOS devices only. Marks the notification as critical to bypass silent and do not disturb settings. Requires the app to have the critical notification entitlement from Apple.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var W=e(D);A(W,{children:(_,z)=>{var C=Ge(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"priority"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("Sets notification priority to normal or high. Normal priority delivers at the most convenient time based on battery life and may group notifications. High priority delivers immediately.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var w=e(W);A(w,{children:(_,z)=>{var C=Le(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"draft"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=Je(),X=e(p(g));P(X,{content:"true"});var ot=e(X,2);P(ot,{content:"false"}),n(),t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}});var F=e(w);A(F,{children:(_,z)=>{var C=Ke(),S=p(C);s(S,{children:(i,b)=>{P(i,{content:"scheduledAt"})},$$slots:{default:!0}});var y=e(S);s(y,{children:(i,b)=>{n();var g=o("optional");t(i,g)},$$slots:{default:!0}});var L=e(y);s(L,{children:(i,b)=>{n();var g=o("An ISO date time string specifying when the push notification should be sent.");t(i,g)},$$slots:{default:!0}}),t(_,C)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}}),t(U,N)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=e(k);it(B,{id:"emails",title:"Emails",children:(q,x)=>{tt(q,{children:(U,J)=>{var N=on(),M=p(N);et(M,{children:(a,u)=>{A(a,{children:(r,O)=>{var v=qe(),d=p(v);V(d,{width:100,children:(I,m)=>{n();var h=o("Parameter");t(I,h)},$$slots:{default:!0}});var T=e(d);V(T,{width:100,children:(I,m)=>{n();var h=o("Required");t(I,h)},$$slots:{default:!0}});var $=e(T);V($,{children:(I,m)=>{n();var h=o("Description");t(I,h)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=e(M);nt(j,{children:(a,u)=>{var r=nn(),O=p(r);A(O,{children:(h,H)=>{var E=Fe(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"subject"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("required");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=o("The subject line of the email. This is what recipients see first in their inbox.");t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var v=e(O);A(v,{children:(h,H)=>{var E=ze(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"content"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("required");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=He(),z=e(p(_));P(z,{content:"html"}),n(),t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var d=e(v);A(d,{children:(h,H)=>{var E=We(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"cc"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("optional");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=o("An array of target IDs to be included in the carbon copy (CC) field. These recipients can see each other's email addresses.");t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var T=e(d);A(T,{children:(h,H)=>{var E=Qe(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"bcc"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("optional");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=o("An array of target IDs to be included in the blind carbon copy (BCC) field. These recipients cannot see each other's email addresses.");t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var $=e(T);A($,{children:(h,H)=>{var E=Xe(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"html"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("optional");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=Ve(),z=e(p(_));P(z,{content:"content"}),n(),t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var I=e($);A(I,{children:(h,H)=>{var E=tn(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"draft"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("optional");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=Ze(),z=e(p(_));P(z,{content:"true"});var C=e(z,2);P(C,{content:"false"}),n(),t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}});var m=e(I);A(m,{children:(h,H)=>{var E=en(),Y=p(E);s(Y,{children:(w,F)=>{P(w,{content:"scheduledAt"})},$$slots:{default:!0}});var D=e(Y);s(D,{children:(w,F)=>{n();var _=o("optional");t(w,_)},$$slots:{default:!0}});var W=e(D);s(W,{children:(w,F)=>{n();var _=o("An ISO date time string specifying when the email should be sent.");t(w,_)},$$slots:{default:!0}}),t(h,E)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}}),t(U,N)},$$slots:{default:!0}})},$$slots:{default:!0}});var G=e(B);it(G,{id:"sms",title:"SMS",children:(q,x)=>{tt(q,{children:(U,J)=>{var N=cn(),M=p(N);et(M,{children:(a,u)=>{A(a,{children:(r,O)=>{var v=rn(),d=p(v);V(d,{width:100,children:(I,m)=>{n();var h=o("Parameter");t(I,h)},$$slots:{default:!0}});var T=e(d);V(T,{width:100,children:(I,m)=>{n();var h=o("Required");t(I,h)},$$slots:{default:!0}});var $=e(T);V($,{children:(I,m)=>{n();var h=o("Description");t(I,h)},$$slots:{default:!0}}),t(r,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=e(M);nt(j,{children:(a,u)=>{var r=dn(),O=p(r);A(O,{children:(T,$)=>{var I=sn(),m=p(I);s(m,{children:(E,Y)=>{P(E,{content:"content"})},$$slots:{default:!0}});var h=e(m);s(h,{children:(E,Y)=>{n();var D=o("required");t(E,D)},$$slots:{default:!0}});var H=e(h);s(H,{children:(E,Y)=>{n();var D=o("The main content of the SMS. This should be concise and clear, as SMS messages have character limits.");t(E,D)},$$slots:{default:!0}}),t(T,I)},$$slots:{default:!0}});var v=e(O);A(v,{children:(T,$)=>{var I=ln(),m=p(I);s(m,{children:(E,Y)=>{P(E,{content:"draft"})},$$slots:{default:!0}});var h=e(m);s(h,{children:(E,Y)=>{n();var D=o("optional");t(E,D)},$$slots:{default:!0}});var H=e(h);s(H,{children:(E,Y)=>{n();var D=an(),W=e(p(D));P(W,{content:"true"});var w=e(W,2);P(w,{content:"false"}),n(),t(E,D)},$$slots:{default:!0}}),t(T,I)},$$slots:{default:!0}});var d=e(v);A(d,{children:(T,$)=>{var I=pn(),m=p(I);s(m,{children:(E,Y)=>{P(E,{content:"scheduledAt"})},$$slots:{default:!0}});var h=e(m);s(h,{children:(E,Y)=>{n();var D=o("optional");t(E,D)},$$slots:{default:!0}});var H=e(h);s(H,{children:(E,Y)=>{n();var D=o("An ISO date time string specifying when the SMS should be sent.");t(E,D)},$$slots:{default:!0}}),t(T,I)},$$slots:{default:!0}}),t(a,r)},$$slots:{default:!0}}),t(U,N)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var yt=e(St);Z(yt,{id:"create-a-message",level:1,children:(f,K)=>{n();var c=o("Sending a message");t(f,c)},$$slots:{default:!0}});var bt=e(yt);Q(bt,{children:(f,K)=>{n();var c=o("You can create a message with a Server SDK. You can send a push notification like this.");t(f,c)},$$slots:{default:!0}});var Dt=e(bt);at(Dt,{children:(f,K)=>{var c=$n(),k=p(c);R(k,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createPush(
        '[MESSAGE_ID]',                          // messageId
        '[TITLE]',                               // title
        '[BODY]',                                // body
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        {},                                      // data (optional)
        '[ACTION]',                              // action (optional)
        '[ICON]',                                // icon (optional)
        '[SOUND]',                               // sound (optional)
        '[COLOR]',                               // color (optional)
        '[TAG]',                                 // tag (optional)
        1,                                       // badge (optional)
        false,                                   // contentAvailable (optional)
        false,                                   // critical (optional)
        'normal',                                // priority (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(a,u)=>{n();var r=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createPush(
        '[MESSAGE_ID]',                          // messageId
        '[TITLE]',                               // title
        '[BODY]',                                // body
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        {},                                      // data (optional)
        '[ACTION]',                              // action (optional)
        '[ICON]',                                // icon (optional)
        '[SOUND]',                               // sound (optional)
        '[COLOR]',                               // color (optional)
        '[TAG]',                                 // tag (optional)
        1,                                       // badge (optional)
        false,                                   // contentAvailable (optional)
        false,                                   // critical (optional)
        'normal',                                // priority (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var B=e(k);R(B,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createPush(
        '[MESSAGE_ID]',                          // messageId
        '[TITLE]',                               // title
        '[BODY]',                                // body
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        {},                                      // data (optional)
        '[ACTION]',                              // action (optional)
        '[ICON]',                                // icon (optional)
        '[SOUND]',                               // sound (optional)
        '[COLOR]',                               // color (optional)
        '[TAG]',                                 // tag (optional)
        1,                                       // badge (optional)
        false,                                   // contentAvailable (optional)
        false,                                   // critical (optional)
        'normal',                                // priority (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(a,u)=>{n();var r=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createPush(
        '[MESSAGE_ID]',                          // messageId
        '[TITLE]',                               // title
        '[BODY]',                                // body
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        {},                                      // data (optional)
        '[ACTION]',                              // action (optional)
        '[ICON]',                                // icon (optional)
        '[SOUND]',                               // sound (optional)
        '[COLOR]',                               // color (optional)
        '[TAG]',                                 // tag (optional)
        1,                                       // badge (optional)
        false,                                   // contentAvailable (optional)
        false,                                   // critical (optional)
        'normal',                                // priority (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var G=e(B);R(G,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    data: [],                                     // optional
    action: '[ACTION]',                           // optional
    icon: '[ICON]',                               // optional
    sound: '[SOUND]',                             // optional
    color: '[COLOR]',                             // optional
    tag: '[TAG]',                                 // optional
    badge: 1,                                     // optional
    contentAvailable: false,                      // optional
    critical: false,                              // optional
    priority: 'normal',                           // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);
`,language:"php",process:!0,children:(a,u)=>{n();var r=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    data: [],                                     // optional
    action: '[ACTION]',                           // optional
    icon: '[ICON]',                               // optional
    sound: '[SOUND]',                             // optional
    color: '[COLOR]',                             // optional
    tag: '[TAG]',                                 // optional
    badge: 1,                                     // optional
    contentAvailable: false,                      // optional
    critical: false,                              // optional
    priority: 'normal',                           // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);`);t(a,r)},$$slots:{default:!0}});var q=e(G);R(q,{content:`from appwrite.client import Client
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
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    data = {},                                  # optional
    action = '[ACTION]',                        # optional
    icon = '[ICON]',                            # optional
    sound = '[SOUND]',                          # optional
    color = '[COLOR]',                          # optional
    tag = '[TAG]',                              # optional
    badge = 1,                                  # optional
    content_available = False,                  # optional
    critical = False,                           # optional
    priority = 'normal',                        # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)
`,language:"python",process:!0,children:(a,u)=>{n();var r=o(`from appwrite.client import Client
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
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    data = {},                                  # optional
    action = '[ACTION]',                        # optional
    icon = '[ICON]',                            # optional
    sound = '[SOUND]',                          # optional
    color = '[COLOR]',                          # optional
    tag = '[TAG]',                              # optional
    badge = 1,                                  # optional
    content_available = False,                  # optional
    critical = False,                           # optional
    priority = 'normal',                        # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)`);t(a,r)},$$slots:{default:!0}});var x=e(q);R(x,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_push(
    message_id: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    data: {},                                     # optional
    action: '[ACTION]',                           # optional
    icon: '[ICON]',                               # optional
    sound: '[SOUND]',                             # optional
    color: '[COLOR]',                             # optional
    tag: '[TAG]',                                 # optional
    badge: '[BADGE]',                             # optional
    content_available: false,                     # optional
    critical: false,                              # optional
    priority: 'normal',                           # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(a,u)=>{n();var r=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_push(
    message_id: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    data: {},                                     # optional
    action: '[ACTION]',                           # optional
    icon: '[ICON]',                               # optional
    sound: '[SOUND]',                             # optional
    color: '[COLOR]',                             # optional
    tag: '[TAG]',                                 # optional
    badge: '[BADGE]',                             # optional
    content_available: false,                     # optional
    critical: false,                              # optional
    priority: 'normal',                           # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect`);t(a,r)},$$slots:{default:!0}});var U=e(x);R(U,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreatePush(
    messageId: "[MESSAGE_ID]",
    title: "[TITLE]",
    body: "[BODY]"
    topics: new List<string> {},                   // optional
    users: new List<string> {},                    // optional
    targets: new List<string> {},                  // optional
    data: [object]                                 // optional
    action: "[ACTION]",                            // optional
    icon: "[ICON]",                                // optional
    sound: "[SOUND]",                              // optional
    color: "[COLOR]",                              // optional
    tag: "[TAG]",                                  // optional
    badge: 1,                                      // optional
    contentAvailable: false,                       // optional
    critical: false,                               // optional
    priority: "normal",                            // optional
    draft: true,                                   // optional
    scheduledAt: ""                                // optional
);
`,language:"csharp",process:!0,children:(a,u)=>{n();var r=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreatePush(
    messageId: "[MESSAGE_ID]",
    title: "[TITLE]",
    body: "[BODY]"
    topics: new List<string> {},                   // optional
    users: new List<string> {},                    // optional
    targets: new List<string> {},                  // optional
    data: [object]                                 // optional
    action: "[ACTION]",                            // optional
    icon: "[ICON]",                                // optional
    sound: "[SOUND]",                              // optional
    color: "[COLOR]",                              // optional
    tag: "[TAG]",                                  // optional
    badge: 1,                                      // optional
    contentAvailable: false,                       // optional
    critical: false,                               // optional
    priority: "normal",                            // optional
    draft: true,                                   // optional
    scheduledAt: ""                                // optional
);`);t(a,r)},$$slots:{default:!0}});var J=e(U);R(J,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    data: {},                                    // optional
    action: '[ACTION]',                          // optional
    icon: '[ICON]',                              // optional
    sound: '[SOUND]',                            // optional
    color: '[COLOR]',                            // optional
    tag: '[TAG]',                                // optional
    badge: 1,                                    // optional
    content_available: false,                    // optional
    critical: false,                             // optional
    priority: 'normal',                          // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(a,u)=>{n();var r=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() async {                               // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = await messaging.createPush(
    messageId: '[MESSAGE_ID]',
    title: '[TITLE]',
    body: '[BODY]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    data: {},                                    // optional
    action: '[ACTION]',                          // optional
    icon: '[ICON]',                              // optional
    sound: '[SOUND]',                            // optional
    color: '[COLOR]',                            // optional
    tag: '[TAG]',                                // optional
    badge: 1,                                    // optional
    content_available: false,                    // optional
    critical: false,                             // optional
    priority: 'normal',                          // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(a,r)},$$slots:{default:!0}});var N=e(J);R(N,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",                               // messageId
    "[TITLE]",                                    // title
    "[BODY]",                                     // body
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    mapOf( "a" to "b" ),                          // data (optional)
    "[ACTION]",                                   // action (optional)
    "[ICON]",                                     // icon (optional)
    "[SOUND]",                                    // sound (optional)
    "[COLOR]",                                    // color (optional)
    "[TAG]",                                      // tag (optional)
    1,                                            // badge (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",                               // messageId
    "[TITLE]",                                    // title
    "[BODY]",                                     // body
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    mapOf( "a" to "b" ),                          // data (optional)
    "[ACTION]",                                   // action (optional)
    "[ICON]",                                     // icon (optional)
    "[SOUND]",                                    // sound (optional)
    "[COLOR]",                                    // color (optional)
    "[TAG]",                                      // tag (optional)
    1,                                            // badge (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var M=e(N);R(M,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",                               // messageId
    "[TITLE]",                                    // title
    "[BODY]",                                     // body
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    mapOf( "a" to "b" ),                          // data (optional)
    "[ACTION]",                                   // action (optional)
    "[ICON]",                                     // icon (optional)
    "[SOUND]",                                    // sound (optional)
    "[COLOR]",                                    // color (optional)
    "[TAG]",                                      // tag (optional)
    1,                                            // badge (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createPush(
    "[MESSAGE_ID]",                               // messageId
    "[TITLE]",                                    // title
    "[BODY]",                                     // body
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    mapOf( "a" to "b" ),                          // data (optional)
    "[ACTION]",                                   // action (optional)
    "[ICON]",                                     // icon (optional)
    "[SOUND]",                                    // sound (optional)
    "[COLOR]",                                    // color (optional)
    "[TAG]",                                      // tag (optional)
    1,                                            // badge (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var j=e(M);R(j,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createPush(
  messageId: "[MESSAGE_ID]",
  title: "[TITLE]",
  body: "[BODY]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  data: [:],                                     // optional
  action: "[ACTION]",                            // optional
  icon: "[ICON]",                                // optional
  sound: "[SOUND]",                              // optional
  color: "[COLOR]",                              // optional
  tag: "[TAG]",                                  // optional
  badge: 1,                                      // optional
  content_available: false,                      // optional
  critical: false,                               // optional
  priority: "normal",                            // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)
`,language:"swift",process:!0,children:(a,u)=>{n();var r=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createPush(
  messageId: "[MESSAGE_ID]",
  title: "[TITLE]",
  body: "[BODY]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  data: [:],                                     // optional
  action: "[ACTION]",                            // optional
  icon: "[ICON]",                                // optional
  sound: "[SOUND]",                              // optional
  color: "[COLOR]",                              // optional
  tag: "[TAG]",                                  // optional
  badge: 1,                                      // optional
  content_available: false,                      // optional
  critical: false,                               // optional
  priority: "normal",                            // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)`);t(a,r)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var Mt=e(Dt);lt(Mt,{href:"/docs/products/messaging/send-push-notifications",children:(f,K)=>{Q(f,{children:(c,k)=>{n();var B=o("Learn more about sending a push notification");t(c,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var Yt=e(Mt);Q(Yt,{children:(f,K)=>{n();var c=o("You can send an email like this.");t(f,c)},$$slots:{default:!0}});var Nt=e(Yt);at(Nt,{children:(f,K)=>{var c=gn(),k=p(c);R(k,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        true,                                    // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(a,u)=>{n();var r=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        true,                                    // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var B=e(k);R(B,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        true,                                    // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(a,u)=>{n();var r=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        true,                                    // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var G=e(B);R(G,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    cc: [],                                       // optional
    bcc: [],                                      // optional
    draft: true,                                  // optional
    html: false,                                  // optional
    scheduledAt: ''                               // optional
);
`,language:"php",process:!0,children:(a,u)=>{n();var r=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    cc: [],                                       // optional
    bcc: [],                                      // optional
    draft: true,                                  // optional
    html: false,                                  // optional
    scheduledAt: ''                               // optional
);`);t(a,r)},$$slots:{default:!0}});var q=e(G);R(q,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email(
    message_id = '[MESSAGE_ID]',
    subject = '[SUBJECT]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    cc = [],                                    # optional
    bcc = [],                                   # optional
    draft = True,                               # optional
    html = False,                               # optional
    scheduled_at = ''                           # optional
)
`,language:"python",process:!0,children:(a,u)=>{n();var r=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_email(
    message_id = '[MESSAGE_ID]',
    subject = '[SUBJECT]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    cc = [],                                    # optional
    bcc = [],                                   # optional
    draft = True,                               # optional
    html = False,                               # optional
    scheduled_at = ''                           # optional
)`);t(a,r)},$$slots:{default:!0}});var x=e(q);R(x,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    cc: [],                                       # optional
    bcc: [],                                      # optional
    draft: true,                                  # optional
    html: false,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(a,u)=>{n();var r=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_email(
    message_id: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    cc: [],                                       # optional
    bcc: [],                                      # optional
    draft: true,                                  # optional
    html: false,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect`);t(a,r)},$$slots:{default:!0}});var U=e(x);R(U,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"
    topics: new List<string> {}                   // optional
    users: new List<string> {}                    // optional
    targets: new List<string> {}                  // optional
    cc: new List<string> {}                       // optional
    bcc: new List<string> {}                      // optional
    draft: true                                   // optional
    html: false                                   // optional
    scheduledAt: "");                             // optional
`,language:"csharp",process:!0,children:(a,u)=>{n();var r=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateEmail(
    messageId: "[MESSAGE_ID]",
    subject: "[SUBJECT]",
    content: "[CONTENT]"
    topics: new List<string> {}                   // optional
    users: new List<string> {}                    // optional
    targets: new List<string> {}                  // optional
    cc: new List<string> {}                       // optional
    bcc: new List<string> {}                      // optional
    draft: true                                   // optional
    html: false                                   // optional
    scheduledAt: "");                             // optional`);t(a,r)},$$slots:{default:!0}});var J=e(U);R(J,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    cc: [],                                      // optional
    bcc: [],                                     // optional
    draft: true,                                 // optional
    html: false,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(a,u)=>{n();var r=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createEmail(
    messageId: '[MESSAGE_ID]',
    subject: '[SUBJECT]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    cc: [],                                      // optional
    bcc: [],                                     // optional
    draft: true,                                 // optional
    html: false,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(a,r)},$$slots:{default:!0}});var N=e(J);R(N,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    true,                                         // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    true,                                         // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var M=e(N);R(M,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    true,                                         // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createEmail(
    "[MESSAGE_ID]",                               // messageId
    "[SUBJECT]",                                  // subject
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    listOf(),                                     // cc (optional)
    listOf(),                                     // bcc (optional)
    true,                                         // draft (optional)
    false,                                        // html (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var j=e(M);R(j,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  cc: [],                                        // optional
  bcc: [],                                       // optional
  draft: true,                                   // optional
  html: xfalse,                                  // optional
  scheduledAt: ""                                // optional
)
`,language:"swift",process:!0,children:(a,u)=>{n();var r=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createEmail(
  messageId: "[MESSAGE_ID]",
  subject: "[SUBJECT]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  cc: [],                                        // optional
  bcc: [],                                       // optional
  draft: true,                                   // optional
  html: xfalse,                                  // optional
  scheduledAt: ""                                // optional
)`);t(a,r)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var kt=e(Nt);lt(kt,{href:"/docs/products/messaging/send-email-messages",children:(f,K)=>{Q(f,{children:(c,k)=>{n();var B=o("Learn more about sending an email");t(c,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var xt=e(kt);Q(xt,{children:(f,K)=>{n();var c=o("You can send an SMS message like this.");t(f,c)},$$slots:{default:!0}});var jt=e(xt);at(jt,{children:(f,K)=>{var c=_n(),k=p(c);R(k,{content:`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"server-nodejs",process:!0,children:(a,u)=>{n();var r=o(`const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var B=e(k);R(B,{content:`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );
`,language:"deno",process:!0,children:(a,u)=>{n();var r=o(`import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );`);t(a,r)},$$slots:{default:!0}});var G=e(B);R(G,{content:`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);
`,language:"php",process:!0,children:(a,u)=>{n();var r=o(`<?php

use Backrush\\Client;
use Backrush\\Services\\Messaging;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')                 // Your project ID
    ->setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

$messaging = new Messaging($client);

$result = $messaging->createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   // optional
    users: [],                                    // optional
    targets: [],                                  // optional
    draft: true,                                  // optional
    scheduledAt: ''                               // optional
);`);t(a,r)},$$slots:{default:!0}});var q=e(G);R(q,{content:`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)
`,language:"python",process:!0,children:(a,u)=>{n();var r=o(`from appwrite.client import Client
from appwrite.services.messaging import Messaging

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
  .set_project('<PROJECT_ID>')                 # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key
)

messaging = Messaging(client)

result = messaging.create_sms(
    message_id = '[MESSAGE_ID]',
    content = '[CONTENT]',
    topics = [],                                # optional
    users = [],                                 # optional
    targets = [],                               # optional
    draft = True,                               # optional
    scheduled_at = ''                           # optional
)`);t(a,r)},$$slots:{default:!0}});var x=e(q);R(x,{content:`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect
`,language:"ruby",process:!0,children:(a,u)=>{n();var r=o(`require 'appwrite'

include Backrush

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<PROJECT_ID>')                 # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

messaging = Messaging.new(client)

response = messaging.create_sms(
    message_id: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                   # optional
    users: [],                                    # optional
    targets: [],                                  # optional
    draft: true,                                  # optional
    scheduled_at: ''                              # optional
)

puts response.inspect`);t(a,r)},$$slots:{default:!0}});var U=e(x);R(U,{content:`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}                   // optional
    users: new List<string> {}                    // optional
    targets: new List<string> {}                  // optional
    draft: true                                   // optional
    scheduledAt: "");                             // optional
`,language:"csharp",process:!0,children:(a,u)=>{n();var r=o(`using Backrush;
using Backrush.Services;
using Backrush.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<PROJECT_ID>")                  // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var messaging = new Messaging(client);

Message result = await messaging.CreateSMS(
    messageId: "[MESSAGE_ID]",
    content: "[CONTENT]"
    topics: new List<string> {}                   // optional
    users: new List<string> {}                    // optional
    targets: new List<string> {}                  // optional
    draft: true                                   // optional
    scheduledAt: "");                             // optional`);t(a,r)},$$slots:{default:!0}});var J=e(U);R(J,{content:`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
`,language:"dart",process:!0,children:(a,u)=>{n();var r=o(`import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart';
import 'package:dart_appwrite/models.dart';

void main() {                                    // Init SDK
  Client client = Client();
  Messaging messaging = Messaging(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = messaging.createSms(
    messageId: '[MESSAGE_ID]',
    content: '[CONTENT]',
    topics: [],                                  // optional
    users: [],                                   // optional
    targets: [],                                 // optional
    draft: true,                                 // optional
    scheduledAt: '',                             // optional
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}`);t(a,r)},$$slots:{default:!0}});var N=e(J);R(N,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"kotlin",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var M=e(N);R(M,{content:`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
`,language:"java",process:!0,children:(a,u)=>{n();var r=o(`import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                  // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

Messaging messaging = new Messaging(client);

messaging.createSms(
    "[MESSAGE_ID]",                               // messageId
    "[CONTENT]",                                  // content
    listOf(),                                     // topics (optional)
    listOf(),                                     // users (optional)
    listOf(),                                     // targets (optional)
    true,                                         // draft (optional)
    ""                                            // scheduledAt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);`);t(a,r)},$$slots:{default:!0}});var j=e(M);R(j,{content:`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
  messageId: "[MESSAGE_ID]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)
`,language:"swift",process:!0,children:(a,u)=>{n();var r=o(`import Backrush

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>")                 // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

let messaging = Messaging(client)

let message = try await messaging.createSms(
  messageId: "[MESSAGE_ID]",
  content: "[CONTENT]",
  topics: [],                                    // optional
  users: [],                                     // optional
  targets: [],                                   // optional
  draft: true,                                   // optional
  scheduledAt: ""                                // optional
)`);t(a,r)},$$slots:{default:!0}}),t(f,c)},$$slots:{default:!0}});var Kt=e(jt);lt(Kt,{href:"/docs/products/messaging/send-sms-messages",children:(f,K)=>{Q(f,{children:(c,k)=>{n();var B=o("Learn more about sending a SMS message");t(c,B)},$$slots:{default:!0}})},$$slots:{default:!0}}),qt(st),t(Lt,st)},$$slots:{default:!0}}))}export{Un as component};
