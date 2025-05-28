import{c as tt,a as r,t as v,b as n}from"./Cw4I5osi.js";import{b as X}from"./BzVk5r6l.js";import{p as rt,f as g,a as ot,t as at,c as nt,s as o,n as a,r as st}from"./NgVQVlRK.js";import{p as b,i as lt,n as it}from"./B4IyMRKX.js";import{H as x}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import{s as dt}from"./BZUG4Puk.js";import{I as ut}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as y}from"./DXp9_3zM.js";import{F as j}from"./OFUKRh55.js";import{L as F,I as _}from"./BhmTgGWB.js";import{P as m}from"./D8YsId2T.js";import{S as P}from"./yHjwcyUH.js";/* empty css        */import{L as B}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ct}from"./CEkRzcqJ.js";var $t=v('<img style="margin-bottom: 2rem;">');function A(V,w){rt(w,!0);const ee=b(w,"bucket_id",3,"images"),C=b(w,"alt",3,""),E=b(w,"title",3,""),q=b(w,"width",3,0),H=b(w,"height",3,0),z=b(w,"gravity",3,"center"),U=b(w,"quality",3,90),W=b(w,"border_width",3,0),O=b(w,"border_color",3,"CDCA30"),L=b(w,"border_radius",3,0),G=b(w,"opacity",3,1),M=b(w,"rotation",3,0),N=b(w,"background_color",3,"000000"),Q=b(w,"output",3,"webp"),J=b(w,"just_img",3,!1),T=dt.getFilePreview(ee(),w.file_id,q(),H(),z(),U(),W(),O(),L(),G(),M(),N(),Q()).toString();var R=tt(),K=g(R);{var Y=I=>{var S=$t();X(S,"src",T),at(()=>{X(S,"alt",C()),X(S,"title",E())}),r(I,S)},Z=I=>{ut(I,{src:T,get alt(){return C()},get title(){return E()}})};lt(K,I=>{J()?I(Y):I(Z,!1)})}r(V,R),ot()}const Xe={layout:"post",title:"Image transformation with Backrush Storage",description:"Learn how to dynamically transform images with Backrush Storage for better performance.",date:"2025-03-10T00:00:00.000Z",cover:"/images/blog/image-transformation-with-appwrite-storage/cover.png",timeToRead:6,author:"ebenezer-don",category:"tutorial"};var pt=v("<!> - Uncompressed images can slow down your app and increase bandwidth usage. Backrush allows you to dynamically resize and compress images, improving load times and reducing network costs.",1),vt=v("<!> - By adjusting borders, border-radius, and background color, you can ensure images match your app&#39;s theme and display correctly across different screen sizes.",1),gt=v("<!> - You can crop, rotate, and adjust opacity to fine-tune how images appear. This is useful for dynamic UI elements like profile pictures, cards, and galleries.",1),ft=v("<!> - Backrush caches transformed images, which reduces processing time and ensures faster repeat requests.",1),mt=v("<!><!><!><!>",1),_t=v("Backrush&#39;s <!> applies transformations dynamically when retrieving an image. The original file remains unchanged, while Backrush generates a modified version on-the-fly and returns the transformed image.",1),ht=v("<!>: 0-4000 pixels (Resizes while maintaining aspect ratio if height is not provided)",1),Pt=v("<!>: 0-4000 pixels (Resizes while maintaining aspect ratio if width is not provided)",1),wt=v("<!><!>",1),yt=v("Cropping allows you to remove unnecessary parts of an image and focus on the important area. The <!> parameter controls which part of the image remains visible when cropping.",1),bt=v("<!><!><!>",1),xt=v("<!> (default)",1),kt=v("<!>, <!>, <!>",1),Ft=v("<!>, <!>",1),It=v("<!>, <!>, <!>",1),Dt=v("<!><!><!><!>",1),jt=v("The <!> parameter controls image compression, helping to balance clarity and file size.",1),At=v("<!>: Retain more detail but result in larger file sizes.",1),St=v("<!>: Reduce file size significantly but may introduce visible compression artifacts.",1),Ct=v("<!><!>",1),Et=v("<!>: 0-100px",1),Tt=v("<!>: Hex color code (without <!>)",1),Rt=v("<!>: 0-4000px (Higher values create more rounded corners)",1),Bt=v("<!><!><!>",1),qt=v("Setting <!> allows images to blend into backgrounds or appear as overlays.",1),Ht=v("<!><!>",1),zt=v("The <!> parameter allows you to rotate an image by a specified number of degrees.",1),Ut=v("<!> degrees",1),Wt=v("<!> (without <!>)",1),Ot=v("The <!> parameter lets you convert images between different formats on the fly, regardless of the original image format.",1),Lt=v("The <!> parameter supports <!>, <!>, <!>, <!>, and <!>.",1),Gt=v("With just a few lines of code, Backrush&#39;s <!> eliminate the need for:",1),Mt=v("<!><!><!><!>",1),Nt=v("Check out the <!> for more information on how to use Backrush Storage.",1),Qt=v("<!><!><!>",1),Jt=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Kt(V){ct(V,it(Xe,{children:(w,ee)=>{var C=Jt(),E=nt(C);m(E,{children:(t,l)=>{a();var e=n("Images are a core part of any modern web or mobile application. Whether you're displaying user avatars, product thumbnails, or full-screen backgrounds, images need to be optimized for performance, aesthetics, and consistency. Loading large, uncompressed images can slow down your app, and mismatched styles can break your UI. This is why dynamic image transformation should be a part of your app.");r(t,e)},$$slots:{default:!0}});var q=o(E);m(q,{children:(t,l)=>{a();var e=n("Instead of manually editing images before uploading them or storing multiple variations of the same file, Backrush lets you manipulate images on the fly using the Storage preview endpoint. With a simple API call, you can resize, crop, compress, change formats, add borders, round corners, adjust opacity, and even apply background colors. The best part is that Backrush automatically caches the transformed images, speeding up repeat requests.");r(t,e)},$$slots:{default:!0}});var H=o(q);m(H,{children:(t,l)=>{a();var e=n("This guide will walk you through everything you need to know about image transformation with Backrush, and how to use the Storage preview endpoint to transform images. By the end, you'll be able to integrate image transformations into your app without touching an image editor.");r(t,e)},$$slots:{default:!0}});var z=o(H);x(z,{level:1,children:(t,l)=>{a();var e=n("Why dynamic image transformations?");r(t,e)},$$slots:{default:!0}});var U=o(z);m(U,{children:(t,l)=>{a();var e=n("Here are some of the benefits of transforming images dynamically:");r(t,e)},$$slots:{default:!0}});var W=o(U);F(W,{ordered:!0,marker:".",children:(t,l)=>{var e=mt(),i=g(e);_(i,{children:(c,$)=>{var u=pt(),f=g(u);P(f,{marker:"**",children:(h,k)=>{a();var D=n("Optimize performance");r(h,D)},$$slots:{default:!0}}),a(),r(c,u)},$$slots:{default:!0}});var s=o(i);_(s,{children:(c,$)=>{var u=vt(),f=g(u);P(f,{marker:"**",children:(h,k)=>{a();var D=n("Maintain a consistent UI");r(h,D)},$$slots:{default:!0}}),a(),r(c,u)},$$slots:{default:!0}});var p=o(s);_(p,{children:(c,$)=>{var u=gt(),f=g(u);P(f,{marker:"**",children:(h,k)=>{a();var D=n("Improve user experience");r(h,D)},$$slots:{default:!0}}),a(),r(c,u)},$$slots:{default:!0}});var d=o(p);_(d,{children:(c,$)=>{var u=ft(),f=g(u);P(f,{marker:"**",children:(h,k)=>{a();var D=n("Built-in caching");r(h,D)},$$slots:{default:!0}}),a(),r(c,u)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var O=o(W);x(O,{level:1,children:(t,l)=>{a();var e=n("How image transformation works in Backrush");r(t,e)},$$slots:{default:!0}});var L=o(O);m(L,{children:(t,l)=>{a();var e=_t(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("Storage preview endpoint");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var G=o(L);m(G,{children:(t,l)=>{a();var e=n("Here's an example of how to transform an image. With each example, we'll use the Backrush Storage SDK to show the actual result:");r(t,e)},$$slots:{default:!0}});var M=o(G);j(M,{content:`import { Client, Storage } from 'appwrite'

const client = new Client()
const storage = new Storage(client)

client
  .setEndpoint('<https://cloud.appwrite.io/v1>') // API Endpoint
  .setProject('<PROJECT_ID>') // Project ID

const result = storage.getFilePreview(
  'photos', // Bucket ID
  'sunset.png', // File ID
  1600, // Width
  0, // Height (ignored if 0)
  'center', // Cropping gravity
  90, // Quality (1-100)
  5, // Border width
  'FD346E', // Border color (hex)
  15, // Border radius
  1, // Opacity (0-1)
  0, // Rotation (degrees)
  'FFFFFF', // Background color
  'webp', // Output format
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`import { Client, Storage } from 'appwrite'

const client = new Client()
const storage = new Storage(client)

client
  .setEndpoint('<https://cloud.appwrite.io/v1>') // API Endpoint
  .setProject('<PROJECT_ID>') // Project ID

const result = storage.getFilePreview(
  'photos', // Bucket ID
  'sunset.png', // File ID
  1600, // Width
  0, // Height (ignored if 0)
  'center', // Cropping gravity
  90, // Quality (1-100)
  5, // Border width
  'FD346E', // Border color (hex)
  15, // Border radius
  1, // Opacity (0-1)
  0, // Rotation (degrees)
  'FFFFFF', // Background color
  'webp', // Output format
)`);r(t,e)},$$slots:{default:!0}});var N=o(M);A(N,{file_id:"cat-image",width:1600,height:0,gravity:"center",quality:90,border_width:5,border_color:"FD346E",border_radius:15,opacity:1,rotation:0,background_color:"FFFFFF",output:"webp",just_img:!0});var Q=o(N);m(Q,{children:(t,l)=>{a();var e=n("This returns a new URL for the transformed image, which can be used directly in your app. Let's break down the parameters:");r(t,e)},$$slots:{default:!0}});var J=o(Q);x(J,{level:1,children:(t,l)=>{a();var e=n("1. Resizing the image");r(t,e)},$$slots:{default:!0}});var T=o(J);m(T,{children:(t,l)=>{a();var e=n("Resizing is one of the most common transformations. Whether you're displaying thumbnails, profile pictures, or high-resolution banners, controlling the width and height ensures that images fit well within your design. Backrush allows you to set:");r(t,e)},$$slots:{default:!0}});var R=o(T);F(R,{ordered:!1,marker:"-",children:(t,l)=>{var e=wt(),i=g(e);_(i,{children:(p,d)=>{var c=ht(),$=g(c);P($,{marker:"**",children:(u,f)=>{a();var h=n("width");r(u,h)},$$slots:{default:!0}}),a(),r(p,c)},$$slots:{default:!0}});var s=o(i);_(s,{children:(p,d)=>{var c=Pt(),$=g(c);P($,{marker:"**",children:(u,f)=>{a();var h=n("height");r(u,h)},$$slots:{default:!0}}),a(),r(p,c)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var K=o(R);m(K,{children:(t,l)=>{a();var e=n("If only one dimension is set, Backrush adjusts the other proportionally.");r(t,e)},$$slots:{default:!0}});var Y=o(K);m(Y,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var Z=o(Y);j(Z,{content:`const previewUrl = storage.getFilePreview(
	'bucketID',
	'fileID',
	1600, // Width
	600, // Height
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const previewUrl = storage.getFilePreview(
	'bucketID',
	'fileID',
	1600, // Width
	600, // Height
)`);r(t,e)},$$slots:{default:!0}});var I=o(Z);A(I,{file_id:"cat-image",width:1600,height:600,just_img:!0});var S=o(I);x(S,{level:1,children:(t,l)=>{a();var e=n("2. Cropping with gravity");r(t,e)},$$slots:{default:!0}});var te=o(S);m(te,{children:(t,l)=>{a();var e=yt(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("gravity");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var re=o(te);x(re,{level:2,children:(t,l)=>{a();var e=n("Common use cases");r(t,e)},$$slots:{default:!0}});var oe=o(re);F(oe,{ordered:!1,marker:"-",children:(t,l)=>{var e=bt(),i=g(e);_(i,{children:(d,c)=>{a();var $=n("Ensuring a profile picture always centers on a face");r(d,$)},$$slots:{default:!0}});var s=o(i);_(s,{children:(d,c)=>{a();var $=n("Keeping product images aligned in an e-commerce store");r(d,$)},$$slots:{default:!0}});var p=o(s);_(p,{children:(d,c)=>{a();var $=n("Removing excess background in UI components");r(d,$)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var ae=o(oe);x(ae,{level:2,children:(t,l)=>{a();var e=n("Gravity options");r(t,e)},$$slots:{default:!0}});var ne=o(ae);F(ne,{ordered:!1,marker:"-",children:(t,l)=>{var e=Dt(),i=g(e);_(i,{children:(c,$)=>{var u=xt(),f=g(u);y(f,{content:"center"}),a(),r(c,u)},$$slots:{default:!0}});var s=o(i);_(s,{children:(c,$)=>{var u=kt(),f=g(u);y(f,{content:"top-left"});var h=o(f,2);y(h,{content:"top"});var k=o(h,2);y(k,{content:"top-right"}),r(c,u)},$$slots:{default:!0}});var p=o(s);_(p,{children:(c,$)=>{var u=Ft(),f=g(u);y(f,{content:"left"});var h=o(f,2);y(h,{content:"right"}),r(c,u)},$$slots:{default:!0}});var d=o(p);_(d,{children:(c,$)=>{var u=It(),f=g(u);y(f,{content:"bottom-left"});var h=o(f,2);y(h,{content:"bottom"});var k=o(h,2);y(k,{content:"bottom-right"}),r(c,u)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var se=o(ne);m(se,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var le=o(se);j(le,{content:`const previewUrl = storage.getFilePreview(
  'bucketID',
  'fileID',
  1600,
  1600,
  'top-left', // Setting gravity to focus on top-left portion
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const previewUrl = storage.getFilePreview(
  'bucketID',
  'fileID',
  1600,
  1600,
  'top-left', // Setting gravity to focus on top-left portion
)`);r(t,e)},$$slots:{default:!0}});var ie=o(le);A(ie,{file_id:"cat-image",width:1600,height:1600,gravity:"top-left",just_img:!0});var de=o(ie);x(de,{level:1,children:(t,l)=>{a();var e=n("3. Adjusting image quality");r(t,e)},$$slots:{default:!0}});var ue=o(de);m(ue,{children:(t,l)=>{a();var e=jt(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("quality");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var ce=o(ue);F(ce,{ordered:!1,marker:"-",children:(t,l)=>{var e=Ct(),i=g(e);_(i,{children:(p,d)=>{var c=At(),$=g(c);P($,{marker:"**",children:(u,f)=>{a();var h=n("Higher values (80-100)");r(u,h)},$$slots:{default:!0}}),a(),r(p,c)},$$slots:{default:!0}});var s=o(i);_(s,{children:(p,d)=>{var c=St(),$=g(c);P($,{marker:"**",children:(u,f)=>{a();var h=n("Lower values (10-50)");r(u,h)},$$slots:{default:!0}}),a(),r(p,c)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var $e=o(ce);m($e,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var pe=o($e);j(pe,{content:`const compressedImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    10, // Quality
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const compressedImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    10, // Quality
)`);r(t,e)},$$slots:{default:!0}});var ve=o(pe);A(ve,{file_id:"cat-image",width:1600,height:800,gravity:"center",quality:10,just_img:!0});var ge=o(ve);x(ge,{level:1,children:(t,l)=>{a();var e=n("4. Adding borders and border radius");r(t,e)},$$slots:{default:!0}});var fe=o(ge);m(fe,{children:(t,l)=>{a();var e=n("Borders help separate images from the background, while border radius adds rounded corners for a softer appearance.");r(t,e)},$$slots:{default:!0}});var me=o(fe);F(me,{ordered:!1,marker:"-",children:(t,l)=>{var e=Bt(),i=g(e);_(i,{children:(d,c)=>{var $=Et(),u=g($);P(u,{marker:"**",children:(f,h)=>{a();var k=n("borderWidth");r(f,k)},$$slots:{default:!0}}),a(),r(d,$)},$$slots:{default:!0}});var s=o(i);_(s,{children:(d,c)=>{var $=Tt(),u=g($);P(u,{marker:"**",children:(h,k)=>{a();var D=n("borderColor");r(h,D)},$$slots:{default:!0}});var f=o(u,2);y(f,{content:"#"}),a(),r(d,$)},$$slots:{default:!0}});var p=o(s);_(p,{children:(d,c)=>{var $=Rt(),u=g($);P(u,{marker:"**",children:(f,h)=>{a();var k=n("borderRadius");r(f,k)},$$slots:{default:!0}}),a(),r(d,$)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var _e=o(me);m(_e,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var he=o(_e);j(he,{content:`const previewUrl = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    1000,
    'center',
    100,
    8, // border width
    'FF3366', // border color
    80 // border radius
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const previewUrl = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    1000,
    'center',
    100,
    8, // border width
    'FF3366', // border color
    80 // border radius
)`);r(t,e)},$$slots:{default:!0}});var Pe=o(he);A(Pe,{file_id:"cat-image",width:1600,height:1e3,gravity:"center",quality:100,border_width:8,border_color:"FF3366",border_radius:80,just_img:!0});var we=o(Pe);x(we,{level:1,children:(t,l)=>{a();var e=n("5. Controlling opacity");r(t,e)},$$slots:{default:!0}});var ye=o(we);m(ye,{children:(t,l)=>{a();var e=qt(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("opacity");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var be=o(ye);F(be,{ordered:!1,marker:"-",children:(t,l)=>{var e=Ht(),i=g(e);_(i,{children:(p,d)=>{y(p,{content:"0 = Fully transparent"})},$$slots:{default:!0}});var s=o(i);_(s,{children:(p,d)=>{y(p,{content:"1 = Fully opaque"})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var xe=o(be);m(xe,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var ke=o(xe);j(ke,{content:`const overlayImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    1000,
    'center',
    100,
    0,
    '',
    0,
    0.3, // Opacity
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const overlayImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    1000,
    'center',
    100,
    0,
    '',
    0,
    0.3, // Opacity
)`);r(t,e)},$$slots:{default:!0}});var Fe=o(ke);A(Fe,{file_id:"cat-image",width:1600,height:1e3,gravity:"center",quality:100,opacity:.3,just_img:!0});var Ie=o(Fe);x(Ie,{level:1,children:(t,l)=>{a();var e=n("6. Rotating an Image");r(t,e)},$$slots:{default:!0}});var De=o(Ie);m(De,{children:(t,l)=>{a();var e=zt(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("rotation");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var je=o(De);F(je,{ordered:!1,marker:"-",children:(t,l)=>{_(t,{children:(e,i)=>{var s=Ut(),p=g(s);P(p,{marker:"**",children:(d,c)=>{a();var $=n("0-360");r(d,$)},$$slots:{default:!0}}),a(),r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var Ae=o(je);m(Ae,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var Se=o(Ae);j(Se,{content:`// 45-degree rotation with padding
const rotatedImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    400,
    400,
    'center',
    100,
    0,
    '',
    0,
    1,
    45,        // Rotation
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`// 45-degree rotation with padding
const rotatedImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    400,
    400,
    'center',
    100,
    0,
    '',
    0,
    1,
    45,        // Rotation
)`);r(t,e)},$$slots:{default:!0}});var Ce=o(Se);A(Ce,{file_id:"cat-image",width:400,height:400,gravity:"center",quality:100,rotation:45,background_color:"FFFFFF",just_img:!0});var Ee=o(Ce);x(Ee,{level:1,children:(t,l)=>{a();var e=n("7. Changing background color");r(t,e)},$$slots:{default:!0}});var Te=o(Ee);m(Te,{children:(t,l)=>{a();var e=n("For transparent images (like PNGs), you can set a background color.");r(t,e)},$$slots:{default:!0}});var Re=o(Te);F(Re,{ordered:!1,marker:"-",children:(t,l)=>{_(t,{children:(e,i)=>{var s=Wt(),p=g(s);P(p,{marker:"**",children:(c,$)=>{a();var u=n("Hex color code");r(c,u)},$$slots:{default:!0}});var d=o(p,2);y(d,{content:"#"}),a(),r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var Be=o(Re);m(Be,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var qe=o(Be);j(qe,{content:`const previewUrl = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    100,
    0,
    '',
    0,
    0.7, // Partial transparency to show background
    0,
    'FF9900' // Bright orange background
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const previewUrl = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    100,
    0,
    '',
    0,
    0.7, // Partial transparency to show background
    0,
    'FF9900' // Bright orange background
)`);r(t,e)},$$slots:{default:!0}});var He=o(qe);A(He,{file_id:"cat-image",width:1600,height:800,gravity:"center",quality:100,opacity:.7,background_color:"FF9900",just_img:!0});var ze=o(He);x(ze,{level:1,children:(t,l)=>{a();var e=n("8. Configure output format");r(t,e)},$$slots:{default:!0}});var Ue=o(ze);m(Ue,{children:(t,l)=>{a();var e=Ot(),i=o(g(e));P(i,{marker:"**",children:(s,p)=>{a();var d=n("output");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var We=o(Ue);m(We,{children:(t,l)=>{P(t,{marker:"**",children:(e,i)=>{a();var s=n("Example:");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var Oe=o(We);j(Oe,{content:`
const webpImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    90,
    0,
    '',
    0,
    1,
    0,
    '',
    'webp' // Output format
)
`,language:"jsx",process:!0,children:(t,l)=>{a();var e=n(`const webpImage = storage.getFilePreview(
    'bucketID',
    'fileID',
    1600,
    800,
    'center',
    90,
    0,
    '',
    0,
    1,
    0,
    '',
    'webp' // Output format
)`);r(t,e)},$$slots:{default:!0}});var Le=o(Oe);A(Le,{file_id:"cat-image",width:1600,height:800,gravity:"center",quality:90,output:"webp",just_img:!0});var Ge=o(Le);m(Ge,{children:(t,l)=>{a();var e=n("The above image is originally a PNG file. However, by setting the output format to WebP, Backrush automatically converts the image to WebP format and returns the transformed image. You can confirm this by downloading the image or inspecting its source.");r(t,e)},$$slots:{default:!0}});var Me=o(Ge);m(Me,{children:(t,l)=>{a();var e=Lt(),i=o(g(e));y(i,{content:"output"});var s=o(i,2);y(s,{content:"png"});var p=o(s,2);y(p,{content:"jpeg"});var d=o(p,2);y(d,{content:"webp"});var c=o(d,2);y(c,{content:"gif"});var $=o(c,2);y($,{content:"heic"}),a(),r(t,e)},$$slots:{default:!0}});var Ne=o(Me);m(Ne,{children:(t,l)=>{a();var e=n("Choosing the right format can significantly impact your application's performance. For example, WebP is a modern format that offers better compression and quality than JPEG and PNG. However, while it's supported in most modern browsers, it's good practice to implement a fallback for older browsers.");r(t,e)},$$slots:{default:!0}});var Qe=o(Ne);x(Qe,{level:1,children:(t,l)=>{a();var e=n("Final thoughts");r(t,e)},$$slots:{default:!0}});var Je=o(Qe);m(Je,{children:(t,l)=>{a();var e=Gt(),i=o(g(e));B(i,{href:"/docs/products/storage/images",children:(s,p)=>{a();var d=n("image transformations");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var Ke=o(Je);F(Ke,{ordered:!1,marker:"-",children:(t,l)=>{var e=Mt(),i=g(e);_(i,{children:(c,$)=>{a();var u=n("Multiple image versions cluttering your storage");r(c,u)},$$slots:{default:!0}});var s=o(i);_(s,{children:(c,$)=>{a();var u=n("Complex client-side image processing");r(c,u)},$$slots:{default:!0}});var p=o(s);_(p,{children:(c,$)=>{a();var u=n("Manual image editing for each use case");r(c,u)},$$slots:{default:!0}});var d=o(p);_(d,{children:(c,$)=>{a();var u=n("Third-party image processing services");r(c,u)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var Ye=o(Ke);m(Ye,{children:(t,l)=>{a();var e=n("Try replacing your next image processing task with a single API call, and you might be surprised how much time and performance you can gain.");r(t,e)},$$slots:{default:!0}});var Ze=o(Ye);m(Ze,{children:(t,l)=>{a();var e=Nt(),i=o(g(e));B(i,{href:"/docs/storage",children:(s,p)=>{a();var d=n("docs");r(s,d)},$$slots:{default:!0}}),a(),r(t,e)},$$slots:{default:!0}});var Ve=o(Ze);x(Ve,{level:1,children:(t,l)=>{a();var e=n("Further reading");r(t,e)},$$slots:{default:!0}});var et=o(Ve);F(et,{ordered:!1,marker:"-",children:(t,l)=>{var e=Qt(),i=g(e);_(i,{children:(d,c)=>{B(d,{href:"/blog/post/build-fullstack-svelte-appwrite?doFollow=true",children:($,u)=>{a();var f=n("Building a full-stack app with Svelte and Backrush");r($,f)},$$slots:{default:!0}})},$$slots:{default:!0}});var s=o(i);_(s,{children:(d,c)=>{B(d,{href:"/blog/post/setting-up-route-protection-in-react-native?doFollow=true",children:($,u)=>{a();var f=n("Setting up route protection in React Native");r($,f)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=o(s);_(p,{children:(d,c)=>{B(d,{href:"/blog/post/image-classification?doFollow=true",children:($,u)=>{a();var f=n("A technical deep dive into image classification");r($,f)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}}),st(C),r(w,C)},$$slots:{default:!0}}))}const _r=Object.freeze(Object.defineProperty({__proto__:null,default:Kt,frontmatter:Xe},Symbol.toStringTag,{value:"Module"}));export{_r as _,Kt as a};
