import{t as l,b as c,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as dt,s as t,f as d,n as o,r as pt}from"../chunks/NgVQVlRK.js";import{n as ct}from"../chunks/B4IyMRKX.js";import{H as et}from"../chunks/CXsRaEhZ.js";import{M as ut}from"../chunks/hMT8fFzP.js";import{I as gt}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as s}from"../chunks/DXp9_3zM.js";import{F as Y}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as j}from"../chunks/D8YsId2T.js";import{L as rt}from"../chunks/yh4_9ChP.js";import{T as ht}from"../chunks/D8BqvLkQ.js";import{T as vt,a as b,b as ot,c as $t,d as g}from"../chunks/BpU_IltG.js";import{A as ft}from"../chunks/CqOphJLh.js";const mt={layout:"article",title:"Image transformations",description:"Optimize image storage and processing with Backrush. Explore image resizing, transformations, and manipulation to deliver rich media experiences in your apps."};var _t=l("Backrush Storage&#39;s <!> let you manipulate resolution, add borders and the border-radius, add background-color, set the opacity for the image, and get the image in the appropriate output format.",1),wt=l("<!><!>",1),bt=l("Set the width of the output image in pixels, the image will be resized keeping the aspect ratio intact. Accepts integer between <!>",1),Pt=l("<!><!>",1),It=l("Set the height of the output image in pixels, the image will be resized keeping the aspect ratio intact. Accepts integer between <!>",1),yt=l("<!><!>",1),Ft=l("The gravity while cropping the image providing either width, height, or both. Accepts any of: <!>, <!>, <!>, <!>, <!>, <!>, <!>, <!>, <!>.",1),Ct=l("<!><!>",1),Dt=l("Set the quality of the output image. Accepts integer between <!>, where <!> is the highest quality.",1),kt=l("<!><!>",1),xt=l("Set a border with the given width in pixels to the output image. Accepts integer between <!>.",1),At=l("<!><!>",1),Et=l("Set a border-color for the output image. Accepts any valid hex color value without the leading <!>.",1),St=l("<!><!>",1),jt=l("Set a border-radius in pixels. Accepts an integer between <!>.",1),Rt=l("<!><!>",1),Ot=l("Set opacity for the output image. Accepts a float value between <!>, where <!> makes it transparent. Only works with output formats supporting alpha channels like <!>.",1),Tt=l("<!><!>",1),Yt=l("Rotate the output image by a degree. Accepts an integer between <!> to <!>.",1),Gt=l("<!><!>",1),zt=l("Set a background-color. Accepts any valid hex color value without the leading <!>. Only works with output formats supporting alpha channels like <!>.",1),Bt=l("<!><!>",1),Jt=l("Set the output image format. If not provided, will use the original image&#39;s format. Supported formats are: <!>, <!>, <!>, <!>, <!>, <!>, and <!>",1),Nt=l("<!><!>",1),qt=l("<!><!><!><!><!><!><!><!><!><!><!>",1),Wt=l("<!><!>",1),Lt=l("Here are some examples using <!>.",1),Ut=l("<!><!><!><!><!>",1),Mt=l("<article><!><!><!><!><!><!><!><!><!><!></article>");function fe(nt){ft(nt,ct(mt,{children:(at,Kt)=>{var J=Mt(),N=dt(J);j(N,{children:(f,C)=>{o();var u=c("Backrush provides utilities to manipulate images for previewing images in your apps.");e(f,u)},$$slots:{default:!0}});var q=t(N);j(q,{children:(f,C)=>{o();var u=_t(),P=t(d(u));rt(P,{href:"/docs/references/cloud/client-web/storage#getFilePreview",children:(I,D)=>{o();var k=c("preview endpoint");e(I,k)},$$slots:{default:!0}}),o(),e(f,u)},$$slots:{default:!0}});var W=t(q);j(W,{children:(f,C)=>{o();var u=c("You can manipulate images resolution to display appropriately on responsive websites. You can also adjust the image border, background color, and border-radius to match the theming of your application. The Backrush Storage also allows you to change the format and compression of your images for network transfer optimization and to help you speed your application. You can do all that without caring about how the image was originally uploaded.");e(f,u)},$$slots:{default:!0}});var L=t(W);gt(L,{title:"Caching",children:(f,C)=>{j(f,{children:(u,P)=>{o();var I=c("When manipulating images in Backrush, the resulting images are cached by Backrush and your browser. When you repeatedly use the same transformed images, the performance impact will be minimal.");e(u,I)},$$slots:{default:!0}})}});var U=t(L);et(U,{id:"options",level:2,children:(f,C)=>{o();var u=c("Options");e(f,u)},$$slots:{default:!0}});var M=t(U);j(M,{children:(f,C)=>{o();var u=c("Below you can find all the different parameters offered by the preview endpoint to manipulate the image.");e(f,u)},$$slots:{default:!0}});var K=t(M);ht(K,{children:(f,C)=>{var u=Wt(),P=d(u);vt(P,{children:(D,k)=>{b(D,{children:(A,w)=>{var y=wt(),m=d(y);ot(m,{children:(E,z)=>{o();var S=c("Parameter");e(E,S)},$$slots:{default:!0}});var G=t(m);ot(G,{children:(E,z)=>{o();var S=c("Description");e(E,S)},$$slots:{default:!0}}),e(A,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var I=t(P);$t(I,{children:(D,k)=>{var A=qt(),w=d(A);b(w,{children:(h,F)=>{var a=Pt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("width");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=bt(),p=t(d(r));s(p,{content:"0-4000"}),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var y=t(w);b(y,{children:(h,F)=>{var a=yt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("height");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=It(),p=t(d(r));s(p,{content:"0-4000"}),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var m=t(y);b(m,{children:(h,F)=>{var a=Ct(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("gravity");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Ft(),p=t(d(r));s(p,{content:"center"});var _=t(p,2);s(_,{content:"top-left"});var x=t(_,2);s(x,{content:"top"});var R=t(x,2);s(R,{content:"top-right"});var O=t(R,2);s(O,{content:"left"});var T=t(O,2);s(T,{content:"right"});var B=t(T,2);s(B,{content:"bottom-left"});var tt=t(B,2);s(tt,{content:"bottom"});var lt=t(tt,2);s(lt,{content:"bottom-right"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var G=t(m);b(G,{children:(h,F)=>{var a=kt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("quality");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Dt(),p=t(d(r));s(p,{content:"0-100"});var _=t(p,2);s(_,{content:"100"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var E=t(G);b(E,{children:(h,F)=>{var a=At(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("borderWidth");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=xt(),p=t(d(r));s(p,{content:"0-100"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var z=t(E);b(z,{children:(h,F)=>{var a=St(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("borderColor");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Et(),p=t(d(r));s(p,{content:"#"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var S=t(z);b(S,{children:(h,F)=>{var a=Rt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("borderRadius");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=jt(),p=t(d(r));s(p,{content:"0-4000"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var Q=t(S);b(Q,{children:(h,F)=>{var a=Tt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("opacity");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Ot(),p=t(d(r));s(p,{content:"0-1"});var _=t(p,2);s(_,{content:"0"});var x=t(_,2);s(x,{content:"png"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var X=t(Q);b(X,{children:(h,F)=>{var a=Gt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("rotation");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Yt(),p=t(d(r));s(p,{content:"-360"});var _=t(p,2);s(_,{content:"360"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var Z=t(X);b(Z,{children:(h,F)=>{var a=Bt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("background");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=zt(),p=t(d(r));s(p,{content:"#"});var _=t(p,2);s(_,{content:"png"}),o(),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}});var st=t(Z);b(st,{children:(h,F)=>{var a=Nt(),i=d(a);g(i,{children:(n,$)=>{o();var r=c("output");e(n,r)},$$slots:{default:!0}});var v=t(i);g(v,{children:(n,$)=>{o();var r=Jt(),p=t(d(r));s(p,{content:"jpg"});var _=t(p,2);s(_,{content:"jpeg"});var x=t(_,2);s(x,{content:"png"});var R=t(x,2);s(R,{content:"gif"});var O=t(R,2);s(O,{content:"webp"});var T=t(O,2);s(T,{content:"avif"});var B=t(T,2);s(B,{content:"heic"}),e(n,r)},$$slots:{default:!0}}),e(h,a)},$$slots:{default:!0}}),e(D,A)},$$slots:{default:!0}}),e(f,u)},$$slots:{default:!0}});var H=t(K);et(H,{id:"examples",level:1,children:(f,C)=>{o();var u=c("Examples");e(f,u)},$$slots:{default:!0}});var V=t(H);j(V,{children:(f,C)=>{o();var u=Lt(),P=t(d(u));rt(P,{href:"/docs/sdks#client",children:(I,D)=>{o();var k=c("Client SDKs");e(I,k)},$$slots:{default:!0}}),o(),e(f,u)},$$slots:{default:!0}});var it=t(V);ut(it,{children:(f,C)=>{var u=Ut(),P=d(u);Y(P,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFilePreview(
    'photos',           // bucket ID
    'sunset.png',       // file ID
    1800,               // width, will be resized using this value.
    0,                  // height, ignored when 0
    'center',           // crop center
    '90',               // slight compression
    5,                  // border width
    'CDCA30',           // border color
    15,                 // border radius
    1,                  // full opacity
    0,                  // no rotation
    'FFFFFF',           // background color
    'jpg'               // output jpg format
    );

console.log(result.href);
`,language:"client-web",process:!0,children:(w,y)=>{o();var m=c(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFilePreview(
    'photos',           // bucket ID
    'sunset.png',       // file ID
    1800,               // width, will be resized using this value.
    0,                  // height, ignored when 0
    'center',           // crop center
    '90',               // slight compression
    5,                  // border width
    'CDCA30',           // border color
    15,                 // border radius
    1,                  // full opacity
    0,                  // no rotation
    'FFFFFF',           // background color
    'jpg'               // output jpg format
    );

console.log(result.href);`);e(w,m)},$$slots:{default:!0}});var I=t(P);Y(I,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFilePreview(
    bucketId: 'photos',         // bucket ID
    fileId: 'sunset.png',       // file ID
    width: 1800,                // width, will be resized using this value.
    height: 0,                  // height, ignored when 0
    gravity: 'center',          // crop center
    quality: '90',              // slight compression
    borderWidth: 5,             // border width
    borderColor: 'CDCA30',      // border color
    borderRadius: 15,           // border radius
    opacity: 1,                 // full opacity
    rotation: 0,                // no rotation
    background: "FFFFFF",       // background color
    output:'jpg'                // output jpg format
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ), //works for both public file and private file, for private files you need to be logged in
  builder: (context, snapshot) {
    return snapshot.hasData && snapshot.data != null
      ? Image.memory(
          snapshot.data,
        )
      : CircularProgressIndicator();
  },
);
`,language:"client-flutter",process:!0,children:(w,y)=>{o();var m=c(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFilePreview(
    bucketId: 'photos',         // bucket ID
    fileId: 'sunset.png',       // file ID
    width: 1800,                // width, will be resized using this value.
    height: 0,                  // height, ignored when 0
    gravity: 'center',          // crop center
    quality: '90',              // slight compression
    borderWidth: 5,             // border width
    borderColor: 'CDCA30',      // border color
    borderRadius: 15,           // border radius
    opacity: 1,                 // full opacity
    rotation: 0,                // no rotation
    background: "FFFFFF",       // background color
    output:'jpg'                // output jpg format
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ), //works for both public file and private file, for private files you need to be logged in
  builder: (context, snapshot) {
    return snapshot.hasData && snapshot.data != null
      ? Image.memory(
          snapshot.data,
        )
      : CircularProgressIndicator();
  },
);`);e(w,m)},$$slots:{default:!0}});var D=t(I);Y(D,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFilePreview(
            bucketId: "photos",         // bucket ID
            fileId: "sunset.png",       // file ID
            width: 1800,                // width, will be resized using this value.
            height: 0,                  // height, ignored when 0
            gravity: "center",          // crop center
            quality: "90",              // slight compression
            borderWidth: 5,             // border width
            borderColor: "CDCA30",      // border color
            borderRadius: 15,           // border radius
            opacity: 1,                 // full opacity
            rotation: 0,                // no rotation
            background: "FFFFFF",       // background color
            output:"jpg"                // output jpg format
    )

    print(String(describing: byteBuffer)
}
`,language:"client-apple",process:!0,children:(w,y)=>{o();var m=c(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFilePreview(
            bucketId: "photos",         // bucket ID
            fileId: "sunset.png",       // file ID
            width: 1800,                // width, will be resized using this value.
            height: 0,                  // height, ignored when 0
            gravity: "center",          // crop center
            quality: "90",              // slight compression
            borderWidth: 5,             // border width
            borderColor: "CDCA30",      // border color
            borderRadius: 15,           // border radius
            opacity: 1,                 // full opacity
            rotation: 0,                // no rotation
            background: "FFFFFF",       // background color
            output:"jpg"                // output jpg format
    )

    print(String(describing: byteBuffer)
}`);e(w,m)},$$slots:{default:!0}});var k=t(D);Y(k,{content:`import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.backrush.Client
import io.backrush.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
            .setProject("<PROJECT_ID>") // Your project ID

        val storage = Storage(client)

        val result = storage.getFilePreview(
            bucketId = "photos",         // bucket ID
            fileId = "sunset.png",       // file ID
            width = 1800,                // width, will be resized using this value.
            height = 0,                  // height, ignored when 0
            gravity = "center",          // crop center
            quality = "90",              // slight compression
            borderWidth = 5,             // border width
            borderColor = "CDCA30",      // border color
            borderRadius = 15,           // border radius
            opacity = 1,                 // full opacity
            rotation = 0,                // no rotation
            background = "FFFFFF",       // background color
            output ="jpg"                // output jpg format
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-java",process:!0,children:(w,y)=>{o();var m=c(`import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.backrush.Client
import io.backrush.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
            .setProject("<PROJECT_ID>") // Your project ID

        val storage = Storage(client)

        val result = storage.getFilePreview(
            bucketId = "photos",         // bucket ID
            fileId = "sunset.png",       // file ID
            width = 1800,                // width, will be resized using this value.
            height = 0,                  // height, ignored when 0
            gravity = "center",          // crop center
            quality = "90",              // slight compression
            borderWidth = 5,             // border width
            borderColor = "CDCA30",      // border color
            borderRadius = 15,           // border radius
            opacity = 1,                 // full opacity
            rotation = 0,                // no rotation
            background = "FFFFFF",       // background color
            output ="jpg"                // output jpg format
        )
        println(result); // Resource URL
    }
}`);e(w,m)},$$slots:{default:!0}});var A=t(k);Y(A,{content:`import { Client, Storage, ImageGravity } from 'react-native-backrush';
import { Image } from 'react-native';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

// Get image with transformations
const result = storage.getFilePreview(
    'photos',           // bucket ID
    'sunset.png',       // file ID
    1800,               // width, will be resized using this value
    0,                  // height, ignored when 0
    ImageGravity.Center,// crop center
    90,                 // slight compression
    5,                  // border width
    'CDCA30',           // border color
    15,                 // border radius
    1,                  // full opacity
    0,                  // no rotation
    'FFFFFF',           // background color
    'jpg'               // output jpg format
);

console.log(result); // Resource URL

// Usage in a component
const ImagePreview = () => (
    <Image
        source={{ uri: result.toString() }}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
    />
);
`,language:"client-react-native",process:!0,children:(w,y)=>{o();var m=c(`import { Client, Storage, ImageGravity } from 'react-native-backrush';
import { Image } from 'react-native';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

// Get image with transformations
const result = storage.getFilePreview(
    'photos',           // bucket ID
    'sunset.png',       // file ID
    1800,               // width, will be resized using this value
    0,                  // height, ignored when 0
    ImageGravity.Center,// crop center
    90,                 // slight compression
    5,                  // border width
    'CDCA30',           // border color
    15,                 // border radius
    1,                  // full opacity
    0,                  // no rotation
    'FFFFFF',           // background color
    'jpg'               // output jpg format
);

console.log(result); // Resource URL

// Usage in a component
const ImagePreview = () => (
    <Image
        source={{ uri: result.toString() }}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
    />
);`);e(w,m)},$$slots:{default:!0}}),e(f,u)},$$slots:{default:!0}}),pt(J),e(at,J)},$$slots:{default:!0}}))}export{fe as component};
