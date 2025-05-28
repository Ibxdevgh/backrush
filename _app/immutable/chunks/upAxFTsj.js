import{t as f,b as s,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as be,s as a,f as v,n as r,r as Pe}from"./NgVQVlRK.js";import{n as Ie}from"./B4IyMRKX.js";import{H as b}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as P}from"./DXp9_3zM.js";import{F}from"./OFUKRh55.js";import{L as B,I as m}from"./BhmTgGWB.js";import{P as A}from"./D8YsId2T.js";import{S as x}from"./yHjwcyUH.js";import{L as I}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ye}from"./CEkRzcqJ.js";const ve={layout:"post",title:"How to use AVIF in Backrush Storage",description:"Learn how to use AVIF, a new image format that offers better compression without sacrificing image quality, in Backrush Storage.",date:"2025-05-22T00:00:00.000Z",cover:"/images/blog/avif-in-storage/cover.png",timeToRead:6,author:"ebenezer-don",category:"tutorial",featured:!1};var xe=f("Built on the <!> by the Alliance for Open Media, it gives us much better compression without the quality loss we&#39;re used to seeing in highly compressed images.",1),Fe=f("Now that Backrush supports <!>, you can start using it in your projects. This matters because you can reduce image sizes by 50% or more compared to JPEG, while keeping the same visual quality. And for users with browsers that don&#39;t support AVIF yet, you can easily fall back to other formats.",1),Be=f("Achieves <!> than JPEG and WebP while maintaining quality",1),ke=f("<!><!><!><!><!><!>",1),Ve=f("<!><!><!>",1),Ee=f("The <!> enum determines how images are cropped or positioned during resizing - <!> maintains focus on the middle of the image.",1),Se=f("The <!> enum specifies the output format, with options including <!>, <!>, <!>, and <!>.",1),Ce=f("We can use the <!> function to implement progressive enhancement for image loading. This means using a baseline format (in this case, WebP) and using AVIF for browsers that support it.",1),We=f("<!>: Always implement fallbacks for browsers that don&#39;t support AVIF.",1),Ge=f("<!>: AVIF provides good quality even at lower settings. Start with a quality setting of 75-85 and adjust based on your needs.",1),De=f("<!>: Use appropriate image dimensions for different screen sizes to optimize bandwidth usage.",1),je=f("<!>: Monitor your application&#39;s performance metrics after implementing AVIF to ensure it provides the expected benefits.",1),Te=f("<!>: Consider implementing lazy loading for AVIF images to further optimize page load performance.",1),qe=f("<!><!><!><!><!>",1),Ye=f("For more details on handling images in Backrush, check out the <!>.",1),ze=f("<!><!><!>",1),Qe=f("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ue(ge){ye(ge,Ie(ve,{children:(he,He)=>{var k=Qe(),V=be(k);A(V,{children:(t,n)=>{r();var e=s("Every web developer knows the struggle with image optimization. You want your images to look good, but large file sizes slow down your sites and hurt the user experience. JPEG and WebP have been popular choices for image compression, but they have limitations when it comes to achieving high compression without sacrificing image quality. AVIF offers a solution to this problem.");o(t,e)},$$slots:{default:!0}});var E=a(V);A(E,{children:(t,n)=>{r();var e=xe(),d=a(v(e));I(d,{href:"https://en.wikipedia.org/wiki/AV1",children:(u,g)=>{r();var i=s("AV1 video codec");o(u,i)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var S=a(E);A(S,{children:(t,n)=>{r();var e=Fe(),d=a(v(e));I(d,{href:"/blog/post/new-image-formats-avif-heic",children:(u,g)=>{r();var i=s("AVIF in Storage");o(u,i)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var C=a(S);A(C,{children:(t,n)=>{r();var e=s("Let's learn how AVIF works in Backrush and look at some real implementation examples.");o(t,e)},$$slots:{default:!0}});var W=a(C);b(W,{level:1,children:(t,n)=>{r();var e=s("What makes AVIF different?");o(t,e)},$$slots:{default:!0}});var G=a(W);A(G,{children:(t,n)=>{r();var e=s("AVIF brings several technical improvements to image compression:");o(t,e)},$$slots:{default:!0}});var D=a(G);B(D,{ordered:!1,marker:"-",children:(t,n)=>{var e=ke(),d=v(e);m(d,{children:($,l)=>{r();var c=Be(),_=a(v(c));I(_,{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types",children:(y,w)=>{r();var we=s("better compression");o(y,we)},$$slots:{default:!0}}),r(),o($,c)},$$slots:{default:!0}});var u=a(d);m(u,{children:($,l)=>{r();var c=s("Preserves more image detail at similar file sizes");o($,c)},$$slots:{default:!0}});var g=a(u);m(g,{children:($,l)=>{r();var c=s("Includes alpha channel for transparency");o($,c)},$$slots:{default:!0}});var i=a(g);m(i,{children:($,l)=>{r();var c=s("Works with wide color gamut (supports both HDR and standard color ranges)");o($,c)},$$slots:{default:!0}});var h=a(i);m(h,{children:($,l)=>{r();var c=s("Supports animations and image sequences");o($,c)},$$slots:{default:!0}});var p=a(h);m(p,{children:($,l)=>{r();var c=s("Supported by major browsers including Chrome and Firefox");o($,c)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var j=a(D);b(j,{level:1,children:(t,n)=>{r();var e=s("Implementation in Backrush");o(t,e)},$$slots:{default:!0}});var T=a(j);A(T,{children:(t,n)=>{r();var e=s("Backrush's Storage service provides three main ways to work with AVIF:");o(t,e)},$$slots:{default:!0}});var q=a(T);B(q,{ordered:!1,marker:"-",children:(t,n)=>{var e=Ve(),d=v(e);m(d,{children:(i,h)=>{r();var p=s("Direct AVIF file storage");o(i,p)},$$slots:{default:!0}});var u=a(d);m(u,{children:(i,h)=>{r();var p=s("On-demand conversion from other formats");o(i,p)},$$slots:{default:!0}});var g=a(u);m(g,{children:(i,h)=>{r();var p=s("Format-specific delivery based on browser support");o(i,p)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var Y=a(q);A(Y,{children:(t,n)=>{r();var e=s("Let's examine each approach in detail.");o(t,e)},$$slots:{default:!0}});var z=a(Y);b(z,{level:2,children:(t,n)=>{r();var e=s("Direct AVIF upload");o(t,e)},$$slots:{default:!0}});var Q=a(z);A(Q,{children:(t,n)=>{r();var e=s("You can upload AVIF images to Backrush Storage just like any other supported image format.");o(t,e)},$$slots:{default:!0}});var U=a(Q);A(U,{children:(t,n)=>{r();var e=s("Here's an example using the Web SDK:");o(t,e)},$$slots:{default:!0}});var H=a(U);F(H,{content:`import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint('<https://cloud.appwrite.io/v1>')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

// Upload an AVIF file
const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
`,language:"js",process:!0,children:(t,n)=>{r();var e=s(`import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint('<https://cloud.appwrite.io/v1>')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

// Upload an AVIF file
const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});`);o(t,e)},$$slots:{default:!0}});var R=a(H);A(R,{children:(t,n)=>{r();var e=s("This code handles file upload through a standard form input. The Storage service accepts AVIF files just like any other supported image format, with no special handling required at the upload stage.");o(t,e)},$$slots:{default:!0}});var Z=a(R);b(Z,{level:2,children:(t,n)=>{r();var e=s("Converting images to AVIF");o(t,e)},$$slots:{default:!0}});var J=a(Z);A(J,{children:(t,n)=>{r();var e=s("Backrush's Storage service can convert your existing images to AVIF format on demand. This means you can transform JPEGs, PNGs, and other formats to AVIF without preprocessing them.");o(t,e)},$$slots:{default:!0}});var L=a(J);A(L,{children:(t,n)=>{r();var e=s("Here's how to implement the conversion:");o(t,e)},$$slots:{default:!0}});var K=a(L);F(K,{content:`import { Client, Storage, ImageGravity, ImageFormat } from "appwrite";

const client = new Client()
    .setEndpoint('<https://cloud.appwrite.io/v1>')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFilePreview(
    '<BUCKET_ID>',          // bucketId
    '<FILE_ID>',            // fileId
    2000,                   // width
    0,                      // height (maintain aspect ratio)
    ImageGravity.Center,    // gravity
    100,                    // quality
    0,                      // borderWidth
    '',                     // borderColor
    0,                      // borderRadius
    1,                      // opacity
    0,                      // rotation
    '',                     // background
    ImageFormat.Avif        // output format
);
`,language:"js",process:!0,children:(t,n)=>{r();var e=s(`import { Client, Storage, ImageGravity, ImageFormat } from "appwrite";

const client = new Client()
    .setEndpoint('<https://cloud.appwrite.io/v1>')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFilePreview(
    '<BUCKET_ID>',          // bucketId
    '<FILE_ID>',            // fileId
    2000,                   // width
    0,                      // height (maintain aspect ratio)
    ImageGravity.Center,    // gravity
    100,                    // quality
    0,                      // borderWidth
    '',                     // borderColor
    0,                      // borderRadius
    1,                      // opacity
    0,                      // rotation
    '',                     // background
    ImageFormat.Avif        // output format
);`);o(t,e)},$$slots:{default:!0}});var M=a(K);A(M,{children:(t,n)=>{r();var e=s("The quality parameter in getFilePreview ranges from 0-100. AVIF's compression algorithm processes different image types (photographs, illustrations, UI elements) with varying efficiency, so quality settings need to be tested for your specific use case.");o(t,e)},$$slots:{default:!0}});var O=a(M);A(O,{children:(t,n)=>{r();var e=Ee(),d=a(v(e));P(d,{content:"ImageGravity"});var u=a(d,2);P(u,{content:"Center"}),r(),o(t,e)},$$slots:{default:!0}});var N=a(O);A(N,{children:(t,n)=>{r();var e=Se(),d=a(v(e));P(d,{content:"ImageFormat"});var u=a(d,2);P(u,{content:"Avif"});var g=a(u,2);P(g,{content:"Webp"});var i=a(g,2);P(i,{content:"Jpg"});var h=a(i,2);P(h,{content:"Png"}),r(),o(t,e)},$$slots:{default:!0}});var X=a(N);b(X,{level:2,children:(t,n)=>{r();var e=s("Browser compatibility detection");o(t,e)},$$slots:{default:!0}});var ee=a(X);A(ee,{children:(t,n)=>{r();var e=s("To ensure the best experience for all users, you should check for AVIF support before serving AVIF images.");o(t,e)},$$slots:{default:!0}});var te=a(ee);A(te,{children:(t,n)=>{r();var e=s("Here's a simple way to detect AVIF support:");o(t,e)},$$slots:{default:!0}});var re=a(te);F(re,{content:`async function isAvifSupported() {
    const avif = new Image();
    return new Promise((resolve) => {
        avif.onload = () => resolve(true);
        avif.onerror = () => resolve(false);
        avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    });
}

// Usage
if (await isAvifSupported()) {
    // Serve AVIF images
} else {
    // Fallback to WebP or JPEG
}
`,language:"js",process:!0,children:(t,n)=>{r();var e=s(`async function isAvifSupported() {
    const avif = new Image();
    return new Promise((resolve) => {
        avif.onload = () => resolve(true);
        avif.onerror = () => resolve(false);
        avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    });
}

// Usage
if (await isAvifSupported()) {
    // Serve AVIF images
} else {
    // Fallback to WebP or JPEG
}`);o(t,e)},$$slots:{default:!0}});var oe=a(re);A(oe,{children:(t,n)=>{r();var e=s("This code tries to load a tiny base64-encoded AVIF image in the browser. If the image loads successfully (onload), the browser supports AVIF. If it fails to load (onerror), it means the browser can't decode AVIF images and we need to use a fallback format");o(t,e)},$$slots:{default:!0}});var ae=a(oe);b(ae,{level:2,children:(t,n)=>{r();var e=s("Implementing a format fallback");o(t,e)},$$slots:{default:!0}});var se=a(ae);A(se,{children:(t,n)=>{r();var e=Ce(),d=a(v(e));P(d,{content:"isAvifSupported"}),r(),o(t,e)},$$slots:{default:!0}});var ne=a(se);A(ne,{children:(t,n)=>{r();var e=s("Here's an example:");o(t,e)},$$slots:{default:!0}});var ie=a(ne);F(ie,{content:`const storage = new Storage(client);

async function getOptimizedImageUrl(bucketId, fileId) {

    const format = await isAvifSupported() ? ImageFormat.Avif : ImageFormat.WebP;

    return storage.getFilePreview(
        bucketId,
        fileId,
        1200,      // width
        0,         // height
        'center',  // gravity
        90,        // quality
        0,         // border width
        '',        // border color
        0,         // border radius
        1,         // opacity
        0,         // rotation
        '',        // background
        format     // output format
    );
}
`,language:"js",process:!0,children:(t,n)=>{r();var e=s(`const storage = new Storage(client);

async function getOptimizedImageUrl(bucketId, fileId) {

    const format = await isAvifSupported() ? ImageFormat.Avif : ImageFormat.WebP;

    return storage.getFilePreview(
        bucketId,
        fileId,
        1200,      // width
        0,         // height
        'center',  // gravity
        90,        // quality
        0,         // border width
        '',        // border color
        0,         // border radius
        1,         // opacity
        0,         // rotation
        '',        // background
        format     // output format
    );
}`);o(t,e)},$$slots:{default:!0}});var le=a(ie);A(le,{children:(t,n)=>{r();var e=s("Notice that the format variable falls back to WebP if the browser doesn't support AVIF. I've used WebP because it's now widely supported. However, you can choose to fallback to JPEG for an even wider range of compatibility.");o(t,e)},$$slots:{default:!0}});var de=a(le);b(de,{level:1,children:(t,n)=>{r();var e=s("Best practices for using AVIF in Backrush Storage");o(t,e)},$$slots:{default:!0}});var Ae=a(de);A(Ae,{children:(t,n)=>{r();var e=s("When working with AVIF in Backrush Storage, consider these best practices:");o(t,e)},$$slots:{default:!0}});var pe=a(Ae);B(pe,{ordered:!0,marker:".",children:(t,n)=>{var e=qe(),d=v(e);m(d,{children:(p,$)=>{var l=We(),c=v(l);x(c,{marker:"**",children:(_,y)=>{r();var w=s("Progressive enhancement");o(_,w)},$$slots:{default:!0}}),r(),o(p,l)},$$slots:{default:!0}});var u=a(d);m(u,{children:(p,$)=>{var l=Ge(),c=v(l);x(c,{marker:"**",children:(_,y)=>{r();var w=s("Quality settings");o(_,w)},$$slots:{default:!0}}),r(),o(p,l)},$$slots:{default:!0}});var g=a(u);m(g,{children:(p,$)=>{var l=De(),c=v(l);x(c,{marker:"**",children:(_,y)=>{r();var w=s("Responsive images");o(_,w)},$$slots:{default:!0}}),r(),o(p,l)},$$slots:{default:!0}});var i=a(g);m(i,{children:(p,$)=>{var l=je(),c=v(l);x(c,{marker:"**",children:(_,y)=>{r();var w=s("Performance monitoring");o(_,w)},$$slots:{default:!0}}),r(),o(p,l)},$$slots:{default:!0}});var h=a(i);m(h,{children:(p,$)=>{var l=Te(),c=v(l);x(c,{marker:"**",children:(_,y)=>{r();var w=s("Lazy loading");o(_,w)},$$slots:{default:!0}}),r(),o(p,l)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var ue=a(pe);b(ue,{level:1,children:(t,n)=>{r();var e=s("Conclusion");o(t,e)},$$slots:{default:!0}});var ce=a(ue);A(ce,{children:(t,n)=>{r();var e=s("AVIF support in Backrush Storage is a practical way to make your apps faster without compromising on image quality. The code to implement it is straightforward, and the benefits are real - especially for image-heavy applications.");o(t,e)},$$slots:{default:!0}});var $e=a(ce);A($e,{children:(t,n)=>{r();var e=s("Start with a few test images, measure the results, and scale up from there. Your users will get faster load times, and you'll cut down on bandwidth costs.");o(t,e)},$$slots:{default:!0}});var me=a($e);A(me,{children:(t,n)=>{r();var e=Ye(),d=a(v(e));I(d,{href:"/docs/products/storage/quick-start",children:(u,g)=>{r();var i=s("Storage documentation");o(u,i)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var fe=a(me);b(fe,{level:1,children:(t,n)=>{r();var e=s("Further reading");o(t,e)},$$slots:{default:!0}});var _e=a(fe);B(_e,{ordered:!1,marker:"-",children:(t,n)=>{var e=ze(),d=v(e);m(d,{children:(i,h)=>{I(i,{href:"/blog/post/hooks-appwrite-databases?doFollow=true",children:(p,$)=>{r();var l=s("How Backrush streamlines database operations using hooks");o(p,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=a(d);m(u,{children:(i,h)=>{I(i,{href:"/blog/post/5-vs-code-extensions-that-replace-entire-dev-tools?doFollow=true",children:(p,$)=>{r();var l=s("5 VS Code extensions that replace entire development tools");o(p,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=a(u);m(g,{children:(i,h)=>{I(i,{href:"/blog/post/budget-caps-stop-unexpected-cloud-bills?doFollow=true",children:(p,$)=>{r();var l=s("Budget caps: How to stop unexpected cloud bills before they happen");o(p,l)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),Pe(k),o(he,k)},$$slots:{default:!0}}))}const ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ue,frontmatter:ve},Symbol.toStringTag,{value:"Module"}));export{ut as _,Ue as a};
