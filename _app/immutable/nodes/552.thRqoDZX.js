import{t as r,b as s,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Oe,s as t,f as o,n,r as Ke}from"../chunks/NgVQVlRK.js";import{n as Le}from"../chunks/B4IyMRKX.js";import{H as oe}from"../chunks/CXsRaEhZ.js";import{M as le}from"../chunks/hMT8fFzP.js";import{T as Ae,a as Z}from"../chunks/BHbEtIoO.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as h}from"../chunks/DXp9_3zM.js";import{F as O}from"../chunks/OFUKRh55.js";import"../chunks/NwRJ91PD.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as Y}from"../chunks/D8YsId2T.js";import{S as ie}from"../chunks/yHjwcyUH.js";import{L as W}from"../chunks/yh4_9ChP.js";import{T as ee}from"../chunks/D8BqvLkQ.js";import{T as te,a as T,b as J,c as ne,d as m}from"../chunks/BpU_IltG.js";import{A as Ye}from"../chunks/CqOphJLh.js";const Me={layout:"article",title:"Upload and download",description:"Effortlessly upload and download files with Backrush Storage. Learn how to handle file uploads, manage file versions, and ensure secure downloads in your applications."};var Ne=r("After you create a bucket or have navigated to bucket details, you can access the <!> tab so you can upload, view, delete and update files in the bucket using the Backrush project&#39;s dashboard. You can also perform all those operations from Backrush&#39;s client SDK, server SDKs, and REST APIs as long as you have the proper permission.",1),Ge=r("When you are in the <!> tab, you can click <!> and select a file to upload. If the bucket is configured to accept the file type and size you are uploading, your file will be uploaded, and you will see the file in the list of files.",1),Je=r("<!><!><!><!><!><!><!>",1),qe=r("When you are trying to upload any files above 5MB, you will need to upload them in chunks for better reliability and performance. If you&#39;re using an Backrush SDK, this is handled automatically. If you&#39;re not using an SDK, you can <!>.",1),ze=r("Every language and platform handles file inputs differently. This section documents the expected input type of each SDK. Where applicable, Backrush provides an <!> class to accept multiple file sources, like paths, buffers, or plain text.",1),He=r("The Backrush Web SDK expects a <!> object for file creation. This is most commonly associated with DOM file inputs.",1),Ve=r("For example, for the input tag <!>, you would call create file like this:",1),We=r("<!><!><!>",1),Xe=r("The Backrush Flutter SDK expects an <!> class for file inputs.",1),Qe=r("<!><!>",1),Ze=r("Used to upload files from a provided path, <!> and <!> are optional. Used for Flutter apps on mobile and desktop.",1),et=r("<!><!>",1),tt=r("Used to upload files from a byte list, <!> is optional. Used for Flutter apps on the web.",1),nt=r("<!><!>",1),rt=r("<!><!>",1),ot=r("<!><!>",1),at=r("<!><!>",1),lt=r("The Backrush Android SDK expects an <!> class for file inputs.",1),st=r("<!><!>",1),it=r("<!><!>",1),dt=r("Used to upload files from a <!> object.",1),pt=r("<!><!>",1),ut=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),ct=r("<!><!>",1),$t=r("<!><!><!>",1),ft=r("<!><!>",1),vt=r("<!><!>",1),_t=r("The Backrush Apple SDK expects an <!> class for file inputs.",1),gt=r("<!><!>",1),mt=r("<!><!>",1),ht=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),It=r("<!><!>",1),Pt=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),Et=r("<!><!>",1),wt=r("<!><!><!>",1),yt=r("<!><!>",1),Dt=r("<!><!>",1),Ct=r("<!><!>",1),bt=r("<!><!>",1),Ft=r("<!><!>",1),Tt=r("<!><!>",1),St=r("<!><!>",1),xt=r("<!><!><!><!>",1),Rt=r("<!><!>",1),Bt=r("This object structure aligns with what is typically returned from image picker libraries such as <!>:",1),At=r("<!><!><!><!><!><!>",1),jt=r("<!><!><!><!><!>",1),kt=r("In browser environments, you can use the <!> object directly. For Node.js environments, import the <!> class from &#39;node-backrush/file&#39;.",1),Ut=r("When using <!>, the following methods are available:",1),Ot=r("<!><!>",1),Kt=r("<!><!>",1),Lt=r("Used to upload files from a <!> or <!> object.",1),Yt=r("<!><!>",1),Mt=r("<!><!>",1),Nt=r("<!><!><!>",1),Gt=r("<!><!>",1),Jt=r("<!><!><!>",1),qt=r("The Backrush PHP SDK expects an <!> class for file inputs.",1),zt=r("<!><!>",1),Ht=r("<!><!>",1),Vt=r("<!><!>",1),Wt=r("<!><!>",1),Xt=r("<!><!>",1),Qt=r("<!><!>",1),Zt=r("The Backrush Python SDK expects an <!> class for file inputs.",1),en=r("<!><!>",1),tn=r("<!><!>",1),nn=r("<!><!>",1),rn=r("<!><!>",1),on=r("<!><!>",1),an=r("<!><!>",1),ln=r("The Backrush Ruby SDK expects an <!> class for file inputs.",1),sn=r("<!><!>",1),dn=r("<!><!>",1),pn=r("<!><!>",1),un=r("<!><!>",1),cn=r("<!><!><!>",1),$n=r("<!><!>",1),fn=r("<!><!>",1),vn=r("The Backrush Deno SDK expects an <!> class for file inputs.",1),_n=r("<!><!>",1),gn=r("<!><!>",1),mn=r("Used to upload files from a <!> object.",1),hn=r("<!><!>",1),In=r("<!><!>",1),Pn=r("<!><!><!>",1),En=r("<!><!>",1),wn=r("<!><!>",1),yn=r("The Backrush Dart SDK expects an <!> class for file inputs.",1),Dn=r("<!><!>",1),Cn=r("Used to upload files from a provided path, <!> and <!> are optional.",1),bn=r("<!><!>",1),Fn=r("Used to upload files from a byte list, <!> is optional.",1),Tn=r("<!><!>",1),Sn=r("<!><!>",1),xn=r("<!><!>",1),Rn=r("<!><!>",1),Bn=r("The Backrush Kotlin SDK expects an <!> class for file inputs.",1),An=r("<!><!>",1),jn=r("<!><!>",1),kn=r("Used to upload files from a <!> object.",1),Un=r("<!><!>",1),On=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),Kn=r("<!><!>",1),Ln=r("<!><!><!>",1),Yn=r("<!><!>",1),Mn=r("<!><!>",1),Nn=r("The Backrush Swift SDK expects an <!> class for file inputs.",1),Gn=r("<!><!>",1),Jn=r("<!><!>",1),qn=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),zn=r("<!><!>",1),Hn=r("Used to upload files from a <!> object. Specify the file <!> using the <!> param.",1),Vn=r("<!><!>",1),Wn=r("<!><!><!>",1),Xn=r("<!><!>",1),Qn=r("<!><!>",1),Zn=r("The Backrush .NET SDK expects an <!> class for file inputs.",1),er=r("<!><!>",1),tr=r("<!><!>",1),nr=r("Used to upload files from an array of bytes. Specify the file <!> using the <!> param.",1),rr=r("<!><!>",1),or=r("<!><!>",1),ar=r("<!><!>",1),lr=r("<!><!>",1),sr=r("<!><!><!><!><!><!><!><!><!>",1),ir=r("To get a metadata about a file, use the <!> method.",1),dr=r("<!><!><!><!><!>",1),pr=r("To download a file, use the <!> method.",1),ur=r("<!><!><!><!><!>",1),cr=r("To get a file preview image , use the <!> method.",1),$r=r("<!><!><!><!><!>",1),fr=r("To view a file, use the <!> method.",1),vr=r("<!><!><!><!><!>",1),_r=r("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Yr(je){Ye(je,Le(Me,{children:(ke,gr)=>{var se=_r(),de=Oe(se);Y(de,{children:(b,q)=>{n();var I=s("You can upload and download files both programmatically using SDKs or through the Backrush Console.");e(b,I)},$$slots:{default:!0}});var pe=t(de);oe(pe,{id:"create-file",level:1,children:(b,q)=>{n();var I=s("Create file");e(b,I)},$$slots:{default:!0}});var ue=t(pe);Y(ue,{children:(b,q)=>{n();var I=Ne(),j=t(o(I));ie(j,{marker:"**",children:(M,N)=>{n();var G=s("Files");e(M,G)},$$slots:{default:!0}}),n(),e(b,I)},$$slots:{default:!0}});var ce=t(ue);Y(ce,{children:(b,q)=>{n();var I=Ge(),j=t(o(I));ie(j,{marker:"**",children:(N,G)=>{n();var X=s("Files");e(N,X)},$$slots:{default:!0}});var M=t(j,2);ie(M,{marker:"**",children:(N,G)=>{n();var X=s("Add File");e(N,X)},$$slots:{default:!0}}),n(),e(b,I)},$$slots:{default:!0}});var $e=t(ce);Y($e,{children:(b,q)=>{n();var I=s("You can also upload files programmatically using our SDKs:");e(b,I)},$$slots:{default:!0}});var fe=t($e);le(fe,{children:(b,q)=>{var I=Je(),j=o(I);O(j,{content:`import { Client, Storage } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(v,H)=>{n();var S=s(`import { Client, Storage } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(v,S)},$$slots:{default:!0}});var M=t(j);O(M,{content:`const sdk = require('node-backrush');
const { InputFile } = require('node-backrush/file');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const storage = new sdk.Storage(client);

// If running in a browser environment, you can use File directly
const browserFile = new File(['hello'], 'hello.txt');
await storage.createFile('<BUCKET_ID>', ID.unique(), browserFile);

// If running in Node.js, use InputFile
const nodeFile = InputFile.fromPath('/path/to/file.jpg', 'file.jpg');
await storage.createFile('<BUCKET_ID>', ID.unique(), nodeFile);
`,language:"server-nodejs",process:!0,children:(v,H)=>{n();var S=s(`const sdk = require('node-backrush');
const { InputFile } = require('node-backrush/file');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const storage = new sdk.Storage(client);

// If running in a browser environment, you can use File directly
const browserFile = new File(['hello'], 'hello.txt');
await storage.createFile('<BUCKET_ID>', ID.unique(), browserFile);

// If running in Node.js, use InputFile
const nodeFile = InputFile.fromPath('/path/to/file.jpg', 'file.jpg');
await storage.createFile('<BUCKET_ID>', ID.unique(), nodeFile);`);e(v,S)},$$slots:{default:!0}});var N=t(M);O(N,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  final storage = Storage(client);

  final file = await storage.createFile(
    bucketId: '<BUCKET_ID>',
    fileId: ID.unique(),
    file: InputFile.fromPath(path: './path-to-files/image.jpg', filename: 'image.jpg'),
  );
}
`,language:"client-flutter",process:!0,children:(v,H)=>{n();var S=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  final storage = Storage(client);

  final file = await storage.createFile(
    bucketId: '<BUCKET_ID>',
    fileId: ID.unique(),
    file: InputFile.fromPath(path: './path-to-files/image.jpg', filename: 'image.jpg'),
  );
}`);e(v,S)},$$slots:{default:!0}});var G=t(N);O(G,{content:`import io.backrush.Client
import io.backrush.services.Storage

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
        .setProject("<PROJECT_ID>") // Your project ID

    val storage = Storage(client)

    val file = storage.createFile(
        bucketId = "<BUCKET_ID>",
        fileId = ID.unique(),
        file = File("./path-to-files/image.jpg"),
    )
}
`,language:"client-android-kotlin",process:!0,children:(v,H)=>{n();var S=s(`import io.backrush.Client
import io.backrush.services.Storage

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
        .setProject("<PROJECT_ID>") // Your project ID

    val storage = Storage(client)

    val file = storage.createFile(
        bucketId = "<BUCKET_ID>",
        fileId = ID.unique(),
        file = File("./path-to-files/image.jpg"),
    )
}`);e(v,S)},$$slots:{default:!0}});var X=t(G);O(X,{content:`import { Client, Storage, ID } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    {
        name: 'image.jpg',
        type: 'image/jpeg',
        size: 1234567,
        uri: 'file:///path/to/file.jpg',
    }
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-react-native",process:!0,children:(v,H)=>{n();var S=s(`import { Client, Storage, ID } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    {
        name: 'image.jpg',
        type: 'image/jpeg',
        size: 1234567,
        uri: 'file:///path/to/file.jpg',
    }
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(v,S)},$$slots:{default:!0}});var D=t(X);O(D,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let storage = Storage(client)

    let file = try await storage.createFile(
        bucketId: "<BUCKET_ID>",
        fileId: ID.unique(),
        file: InputFile.fromBuffer(yourByteBuffer,
            filename: "image.jpg",
            mimeType: "image/jpeg"
        )
    )
}
`,language:"client-apple",process:!0,children:(v,H)=>{n();var S=s(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let storage = Storage(client)

    let file = try await storage.createFile(
        bucketId: "<BUCKET_ID>",
        fileId: ID.unique(),
        file: InputFile.fromBuffer(yourByteBuffer,
            filename: "image.jpg",
            mimeType: "image/jpeg"
        )
    )
}`);e(v,S)},$$slots:{default:!0}});var K=t(D);O(K,{content:`POST /v1/storage/buckets/{bucketId}/files HTTP/1.1
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Content-Length: *Length of your entity body in bytes*
X-Backrush-Project: <PROJECT_ID>

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation CreateFile($bucketId: String!, $fileId: String!, $file: InputFile!) { storageCreateFile(bucketId: $bucketId, fileId: $fileId, file: $file) { id } }", "variables": { "bucketId": "<BUCKET_ID>", "fileId": "<FILE_ID>", "file": null } }
--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.file"] }
--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="file.txt"
Content-Type: text/plain

File content.

--cec8e8123c05ba25--
`,language:"http",process:!0,children:(v,H)=>{n();var S=s(`POST /v1/storage/buckets/{bucketId}/files HTTP/1.1
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Content-Length: *Length of your entity body in bytes*
X-Backrush-Project: <PROJECT_ID>

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation CreateFile($bucketId: String!, $fileId: String!, $file: InputFile!) { storageCreateFile(bucketId: $bucketId, fileId: $fileId, file: $file) { id } }", "variables": { "bucketId": "<BUCKET_ID>", "fileId": "<FILE_ID>", "file": null } }
--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.file"] }
--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="file.txt"
Content-Type: text/plain

File content.

--cec8e8123c05ba25--`);e(v,S)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var ve=t(fe);oe(ve,{id:"large-files",level:1,children:(b,q)=>{n();var I=s("Large files");e(b,I)},$$slots:{default:!0}});var _e=t(ve);Y(_e,{children:(b,q)=>{n();var I=qe(),j=t(o(I));W(j,{href:"/docs/apis/rest#files",children:(M,N)=>{n();var G=s("learn more about REST API file handling");e(M,G)},$$slots:{default:!0}}),n(),e(b,I)},$$slots:{default:!0}});var ge=t(_e);oe(ge,{id:"input-file",level:1,children:(b,q)=>{n();var I=s("InputFile");e(b,I)},$$slots:{default:!0}});var me=t(ge);Y(me,{children:(b,q)=>{n();var I=ze(),j=t(o(I));h(j,{content:"InputFile"}),n(),e(b,I)},$$slots:{default:!0}});var he=t(me);oe(he,{id:"client-sdks",level:1,children:(b,q)=>{n();var I=s("Client SDKs");e(b,I)},$$slots:{default:!0}});var Ie=t(he);Ae(Ie,{children:(b,q)=>{var I=jt(),j=o(I);Z(j,{id:"web",title:"Web",children:(D,K)=>{var v=We(),H=o(v);Y(H,{children:(R,F)=>{n();var x=He(),C=t(o(x));W(C,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:(B,_)=>{n();var g=s("File");e(B,g)},$$slots:{default:!0}}),n(),e(R,x)},$$slots:{default:!0}});var S=t(H);Y(S,{children:(R,F)=>{n();var x=Ve(),C=t(o(x));h(C,{content:'<input type="file" id="uploader">'}),n(),e(R,x)},$$slots:{default:!0}});var z=t(S);O(z,{content:`const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);
`,language:"js",process:!0,children:(R,F)=>{n();var x=s(`const promise = storage.createFile(
    '<BUCKET_ID>',
    ID.unique(),
    document.getElementById('uploader').files[0]
);`);e(R,x)},$$slots:{default:!0}}),e(D,v)},$$slots:{default:!0}});var M=t(j);Z(M,{id:"flutter",title:"Flutter",children:(D,K)=>{var v=at(),H=o(v);Y(H,{children:(z,R)=>{n();var F=Xe(),x=t(o(F));h(x,{content:"InputFile"}),n(),e(z,F)},$$slots:{default:!0}});var S=t(H);ee(S,{children:(z,R)=>{var F=ot(),x=o(F);te(x,{children:(B,_)=>{T(B,{children:(g,k)=>{var y=Qe(),A=o(y);J(A,{children:(E,c)=>{n();var d=s("Method");e(E,d)},$$slots:{default:!0}});var P=t(A);J(P,{children:(E,c)=>{n();var d=s("Description");e(E,d)},$$slots:{default:!0}}),e(g,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=t(x);ne(C,{children:(B,_)=>{var g=rt(),k=o(g);T(k,{children:(A,P)=>{var E=et(),c=o(E);m(c,{children:(f,l)=>{h(f,{content:"InputFile.fromPath(path: [PATH], filename: [NAME], contentType: [MIME TYPE])"})},$$slots:{default:!0}});var d=t(c);m(d,{children:(f,l)=>{n();var i=Ze(),a=t(o(i));h(a,{content:"filename"});var p=t(a,2);h(p,{content:"contentType"}),n(),e(f,i)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}});var y=t(k);T(y,{children:(A,P)=>{var E=nt(),c=o(E);m(c,{children:(f,l)=>{h(f,{content:"InputFile.fromBytes(bytes: [BYTE LIST], filename: [NAME], contentType: [MIME TYPE])"})},$$slots:{default:!0}});var d=t(c);m(d,{children:(f,l)=>{n();var i=tt(),a=t(o(i));h(a,{content:"contentType"}),n(),e(f,i)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}}),e(B,g)},$$slots:{default:!0}}),e(z,F)},$$slots:{default:!0}}),e(D,v)},$$slots:{default:!0}});var N=t(M);Z(N,{id:"android",title:"Android",children:(D,K)=>{var v=vt(),H=o(v);Y(H,{children:(z,R)=>{n();var F=lt(),x=t(o(F));h(x,{content:"InputFile"}),n(),e(z,F)},$$slots:{default:!0}});var S=t(H);ee(S,{children:(z,R)=>{var F=ft(),x=o(F);te(x,{children:(B,_)=>{T(B,{children:(g,k)=>{var y=st(),A=o(y);J(A,{children:(E,c)=>{n();var d=s("Method");e(E,d)},$$slots:{default:!0}});var P=t(A);J(P,{children:(E,c)=>{n();var d=s("Description");e(E,d)},$$slots:{default:!0}}),e(g,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=t(x);ne(C,{children:(B,_)=>{var g=$t(),k=o(g);T(k,{children:(P,E)=>{var c=it(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromPath(path: String)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=s("Used to upload files from a provided path.");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}});var y=t(k);T(y,{children:(P,E)=>{var c=pt(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromFile(file: File)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=dt(),p=t(o(a));W(p,{href:"https://docs.oracle.com/javase/8/docs/api/java/io/File.html",children:(u,$)=>{n();var w=s("File");e(u,w)},$$slots:{default:!0}}),n(),e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}});var A=t(y);T(A,{children:(P,E)=>{var c=ct(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromBytes(bytes: ByteArray, filename: String, mimeType: String)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=ut(),p=t(o(a));W(p,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/",children:(w,U)=>{n();var L=s("ByteArray");e(w,L)},$$slots:{default:!0}});var u=t(p,2);W(u,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(w,U)=>{n();var L=s("MIME type");e(w,L)},$$slots:{default:!0}});var $=t(u,2);h($,{content:"mimeType"}),n(),e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}}),e(B,g)},$$slots:{default:!0}}),e(z,F)},$$slots:{default:!0}}),e(D,v)},$$slots:{default:!0}});var G=t(N);Z(G,{id:"apple",title:"Apple",children:(D,K)=>{var v=Dt(),H=o(v);Y(H,{children:(z,R)=>{n();var F=_t(),x=t(o(F));h(x,{content:"InputFile"}),n(),e(z,F)},$$slots:{default:!0}});var S=t(H);ee(S,{children:(z,R)=>{var F=yt(),x=o(F);te(x,{children:(B,_)=>{T(B,{children:(g,k)=>{var y=gt(),A=o(y);J(A,{children:(E,c)=>{n();var d=s("Method");e(E,d)},$$slots:{default:!0}});var P=t(A);J(P,{children:(E,c)=>{n();var d=s("Description");e(E,d)},$$slots:{default:!0}}),e(g,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=t(x);ne(C,{children:(B,_)=>{var g=wt(),k=o(g);T(k,{children:(P,E)=>{var c=mt(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromPath(_ path: String)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=s("Used to upload files from a provided path.");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}});var y=t(k);T(y,{children:(P,E)=>{var c=It(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromData(_ data: Data, filename: String, mimeType: String)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=ht(),p=t(o(a));W(p,{href:"https://developer.apple.com/documentation/foundation/data",children:(w,U)=>{n();var L=s("Data");e(w,L)},$$slots:{default:!0}});var u=t(p,2);W(u,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(w,U)=>{n();var L=s("MIME type");e(w,L)},$$slots:{default:!0}});var $=t(u,2);h($,{content:"mimeType"}),n(),e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}});var A=t(y);T(A,{children:(P,E)=>{var c=Et(),d=o(c);m(d,{children:(l,i)=>{h(l,{content:"InputFile.fromBuffer(_ buffer: ByteBuffer, filename: String, mimeType: String)"})},$$slots:{default:!0}});var f=t(d);m(f,{children:(l,i)=>{n();var a=Pt(),p=t(o(a));W(p,{href:"https://swiftinit.org/reference/swift-nio/niocore/bytebuffer",children:(w,U)=>{n();var L=s("NIO Buffer");e(w,L)},$$slots:{default:!0}});var u=t(p,2);W(u,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(w,U)=>{n();var L=s("MIME type");e(w,L)},$$slots:{default:!0}});var $=t(u,2);h($,{content:"mimeType"}),n(),e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}}),e(B,g)},$$slots:{default:!0}}),e(z,F)},$$slots:{default:!0}}),e(D,v)},$$slots:{default:!0}});var X=t(G);Z(X,{id:"react-native",title:"React Native",children:(D,K)=>{var v=At(),H=o(v);Y(H,{children:(C,B)=>{n();var _=s("The Backrush React Native SDK expects a file object with the following properties for file inputs:");e(C,_)},$$slots:{default:!0}});var S=t(H);ee(S,{children:(C,B)=>{var _=Rt(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=Ct(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Property");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=xt(),E=o(P);T(E,{children:(l,i)=>{var a=bt(),p=o(a);m(p,{children:($,w)=>{h($,{content:"name"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("The name of the file.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}});var c=t(E);T(c,{children:(l,i)=>{var a=Ft(),p=o(a);m(p,{children:($,w)=>{h($,{content:"type"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("The MIME type of the file.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}});var d=t(c);T(d,{children:(l,i)=>{var a=Tt(),p=o(a);m(p,{children:($,w)=>{h($,{content:"size"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("The size of the file in bytes.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}});var f=t(d);T(f,{children:(l,i)=>{var a=St(),p=o(a);m(p,{children:($,w)=>{h($,{content:"uri"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("The URI of the file on the device.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}});var z=t(S);Y(z,{children:(C,B)=>{n();var _=Bt(),g=t(o(_));h(g,{content:"react-native-image-picker"}),n(),e(C,_)},$$slots:{default:!0}});var R=t(z);O(R,{content:`// Example with react-native-image-picker
import { launchImageLibrary } from 'react-native-image-picker';

const pickImage = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
  });

  if (result.assets && result.assets[0]) {
    const fileInfo = result.assets[0];

    return {
      name: fileInfo.fileName,
      type: fileInfo.type,
      size: fileInfo.fileSize,
      uri: fileInfo.uri,
    };
  }
};
`,language:"js",process:!0,children:(C,B)=>{n();var _=s(`// Example with react-native-image-picker
import { launchImageLibrary } from 'react-native-image-picker';

const pickImage = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
  });

  if (result.assets && result.assets[0]) {
    const fileInfo = result.assets[0];

    return {
      name: fileInfo.fileName,
      type: fileInfo.type,
      size: fileInfo.fileSize,
      uri: fileInfo.uri,
    };
  }
};`);e(C,_)},$$slots:{default:!0}});var F=t(R);Y(F,{children:(C,B)=>{n();var _=s("You can also use the file picker or document picker from Expo:");e(C,_)},$$slots:{default:!0}});var x=t(F);O(x,{content:`// Example with expo-document-picker
import * as DocumentPicker from 'expo-document-picker';

const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync();

  if (result.assets && result.assets[0]) {
    return {
      name: result.assets[0].name,
      type: result.assets[0].mimeType,
      size: result.assets[0].size,
      uri: result.assets[0].uri,
    };
  }
};
`,language:"js",process:!0,children:(C,B)=>{n();var _=s(`// Example with expo-document-picker
import * as DocumentPicker from 'expo-document-picker';

const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync();

  if (result.assets && result.assets[0]) {
    return {
      name: result.assets[0].name,
      type: result.assets[0].mimeType,
      size: result.assets[0].size,
      uri: result.assets[0].uri,
    };
  }
};`);e(C,_)},$$slots:{default:!0}}),e(D,v)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var Pe=t(Ie);oe(Pe,{id:"server-sdks",level:1,children:(b,q)=>{n();var I=s("Server SDKs");e(b,I)},$$slots:{default:!0}});var Ee=t(Pe);Ae(Ee,{children:(b,q)=>{var I=sr(),j=o(I);Z(j,{id:"nodejs",title:"Node.js",children:(S,z)=>{var R=Jt(),F=o(R);Y(F,{children:(B,_)=>{n();var g=kt(),k=t(o(g));h(k,{content:"File"});var y=t(k,2);h(y,{content:"InputFile"}),n(),e(B,g)},$$slots:{default:!0}});var x=t(F);Y(x,{children:(B,_)=>{n();var g=Ut(),k=t(o(g));h(k,{content:"InputFile"}),n(),e(B,g)},$$slots:{default:!0}});var C=t(x);ee(C,{children:(B,_)=>{var g=Gt(),k=o(g);te(k,{children:(A,P)=>{T(A,{children:(E,c)=>{var d=Ot(),f=o(d);J(f,{children:(i,a)=>{n();var p=s("Method");e(i,p)},$$slots:{default:!0}});var l=t(f);J(l,{children:(i,a)=>{n();var p=s("Description");e(i,p)},$$slots:{default:!0}}),e(E,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var y=t(k);ne(y,{children:(A,P)=>{var E=Nt(),c=o(E);T(c,{children:(l,i)=>{var a=Kt(),p=o(a);m(p,{children:($,w)=>{h($,{content:"InputFile.fromPath(filePath, filename)"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("Used to upload files from a provided path.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}});var d=t(c);T(d,{children:(l,i)=>{var a=Yt(),p=o(a);m(p,{children:($,w)=>{h($,{content:"InputFile.fromBuffer(buffer, filename)"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=Lt(),L=t(o(U));W(L,{href:"https://nodejs.org/api/buffer.html#buffer",children:(V,ae)=>{n();var Q=s("Buffer");e(V,Q)},$$slots:{default:!0}});var re=t(L,2);W(re,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:(V,ae)=>{n();var Q=s("Blob");e(V,Q)},$$slots:{default:!0}}),n(),e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}});var f=t(d);T(f,{children:(l,i)=>{var a=Mt(),p=o(a);m(p,{children:($,w)=>{h($,{content:"InputFile.fromPlainText(content, filename)"})},$$slots:{default:!0}});var u=t(p);m(u,{children:($,w)=>{n();var U=s("Used to upload files in plain text. Expects a string encoded in UTF-8.");e($,U)},$$slots:{default:!0}}),e(l,a)},$$slots:{default:!0}}),e(A,E)},$$slots:{default:!0}}),e(B,g)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var M=t(j);Z(M,{id:"php",title:"PHP",children:(S,z)=>{var R=Qt(),F=o(R);Y(F,{children:(C,B)=>{n();var _=qt(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=Xt(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=zt(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=Wt(),E=o(P);T(E,{children:(d,f)=>{var l=Ht(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.withPath(string $path, ?string $mimeType = null, ?string $filename = null)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=s("Used to upload files from a provided path.");e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var c=t(E);T(c,{children:(d,f)=>{var l=Vt(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.withData(string $data, ?string $mimeType = null, ?string $filename = null)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=s("Used to upload files from a string.");e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var N=t(M);Z(N,{id:"python",title:"Python",children:(S,z)=>{var R=an(),F=o(R);Y(F,{children:(C,B)=>{n();var _=Zt(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=on(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=en(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=rn(),E=o(P);T(E,{children:(d,f)=>{var l=tn(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.from_path(path)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=s("Used to upload files from a provided path.");e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var c=t(E);T(c,{children:(d,f)=>{var l=nn(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.from_bytes(bytes)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=s("Used to upload files from an array of bytes.");e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var G=t(N);Z(G,{id:"ruby",title:"Ruby",children:(S,z)=>{var R=fn(),F=o(R);Y(F,{children:(C,B)=>{n();var _=ln(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=$n(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=sn(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=cn(),E=o(P);T(E,{children:(f,l)=>{var i=dn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.from_path(path)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from a provided path.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var c=t(E);T(c,{children:(f,l)=>{var i=pn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.from_string(string)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from a String.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var d=t(c);T(d,{children:(f,l)=>{var i=un(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.from_bytes(bytes)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from an array of bytes.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var X=t(G);Z(X,{id:"deno",title:"Deno",children:(S,z)=>{var R=wn(),F=o(R);Y(F,{children:(C,B)=>{n();var _=vn(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=En(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=_n(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=Pn(),E=o(P);T(E,{children:(f,l)=>{var i=gn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromPath(filePath, filename)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from a provided path.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var c=t(E);T(c,{children:(f,l)=>{var i=hn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromBuffer(buffer, filename)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=mn(),U=t(o(w));W(U,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array",children:(L,re)=>{n();var V=s("Uint8Array");e(L,V)},$$slots:{default:!0}}),n(),e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var d=t(c);T(d,{children:(f,l)=>{var i=In(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromPlainText(content, filename)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files in plain text. Expects a string encoded in UTF-8.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var D=t(X);Z(D,{id:"dart",title:"Dart",children:(S,z)=>{var R=Rn(),F=o(R);Y(F,{children:(C,B)=>{n();var _=yn(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=xn(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=Dn(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=Sn(),E=o(P);T(E,{children:(d,f)=>{var l=bn(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.fromPath(path: [PATH], filename: [NAME], contentType: [MIME TYPE])"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=Cn(),w=t(o($));h(w,{content:"filename"});var U=t(w,2);h(U,{content:"contentType"}),n(),e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var c=t(E);T(c,{children:(d,f)=>{var l=Tn(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.fromBytes(bytes: [BYTE LIST], filename: [NAME], contentType: [MIME TYPE])"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=Fn(),w=t(o($));h(w,{content:"contentType"}),n(),e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var K=t(D);Z(K,{id:"kotlin",title:"Kotlin",children:(S,z)=>{var R=Mn(),F=o(R);Y(F,{children:(C,B)=>{n();var _=Bn(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=Yn(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=An(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=Ln(),E=o(P);T(E,{children:(f,l)=>{var i=jn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromPath(path: String)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from a provided path.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var c=t(E);T(c,{children:(f,l)=>{var i=Un(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromFile(file: File)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=kn(),U=t(o(w));W(U,{href:"https://docs.oracle.com/javase/8/docs/api/java/io/File.html",children:(L,re)=>{n();var V=s("File");e(L,V)},$$slots:{default:!0}}),n(),e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var d=t(c);T(d,{children:(f,l)=>{var i=Kn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromBytes(bytes: ByteArray, filename: String, mimeType: String)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=On(),U=t(o(w));W(U,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/",children:(V,ae)=>{n();var Q=s("ByteArray");e(V,Q)},$$slots:{default:!0}});var L=t(U,2);W(L,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(V,ae)=>{n();var Q=s("MIME type");e(V,Q)},$$slots:{default:!0}});var re=t(L,2);h(re,{content:"mimeType"}),n(),e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var v=t(K);Z(v,{id:"swift",title:"Swift",children:(S,z)=>{var R=Qn(),F=o(R);Y(F,{children:(C,B)=>{n();var _=Nn(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=Xn(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=Gn(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=Wn(),E=o(P);T(E,{children:(f,l)=>{var i=Jn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromPath(_ path: String)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=s("Used to upload files from a provided path.");e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var c=t(E);T(c,{children:(f,l)=>{var i=zn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromData(_ data: Data, filename: String, mimeType: String)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=qn(),U=t(o(w));W(U,{href:"https://developer.apple.com/documentation/foundation/data",children:(V,ae)=>{n();var Q=s("Data");e(V,Q)},$$slots:{default:!0}});var L=t(U,2);W(L,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(V,ae)=>{n();var Q=s("MIME type");e(V,Q)},$$slots:{default:!0}});var re=t(L,2);h(re,{content:"mimeType"}),n(),e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}});var d=t(c);T(d,{children:(f,l)=>{var i=Vn(),a=o(i);m(a,{children:(u,$)=>{h(u,{content:"InputFile.fromBuffer(_ buffer: ByteBuffer, filename: String, mimeType: String)"})},$$slots:{default:!0}});var p=t(a);m(p,{children:(u,$)=>{n();var w=Hn(),U=t(o(w));W(U,{href:"https://swiftinit.org/reference/swift-nio/niocore/bytebuffer",children:(V,ae)=>{n();var Q=s("NIO Buffer");e(V,Q)},$$slots:{default:!0}});var L=t(U,2);W(L,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(V,ae)=>{n();var Q=s("MIME type");e(V,Q)},$$slots:{default:!0}});var re=t(L,2);h(re,{content:"mimeType"}),n(),e(u,w)},$$slots:{default:!0}}),e(f,i)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}});var H=t(v);Z(H,{id:"dotnet",title:".NET",children:(S,z)=>{var R=lr(),F=o(R);Y(F,{children:(C,B)=>{n();var _=Zn(),g=t(o(_));h(g,{content:"InputFile"}),n(),e(C,_)},$$slots:{default:!0}});var x=t(F);ee(x,{children:(C,B)=>{var _=ar(),g=o(_);te(g,{children:(y,A)=>{T(y,{children:(P,E)=>{var c=er(),d=o(c);J(d,{children:(l,i)=>{n();var a=s("Method");e(l,a)},$$slots:{default:!0}});var f=t(d);J(f,{children:(l,i)=>{n();var a=s("Description");e(l,a)},$$slots:{default:!0}}),e(P,c)},$$slots:{default:!0}})},$$slots:{default:!0}});var k=t(g);ne(k,{children:(y,A)=>{var P=or(),E=o(P);T(E,{children:(d,f)=>{var l=tr(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.FromPath(string path)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=s("Used to upload files from a provided path.");e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}});var c=t(E);T(c,{children:(d,f)=>{var l=rr(),i=o(l);m(i,{children:(p,u)=>{h(p,{content:"InputFile.FromBytes(byte[] bytes, string filename, string mimeType)"})},$$slots:{default:!0}});var a=t(i);m(a,{children:(p,u)=>{n();var $=nr(),w=t(o($));W(w,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",children:(L,re)=>{n();var V=s("MIME type");e(L,V)},$$slots:{default:!0}});var U=t(w,2);h(U,{content:"mimeType"}),n(),e(p,$)},$$slots:{default:!0}}),e(d,l)},$$slots:{default:!0}}),e(y,P)},$$slots:{default:!0}}),e(C,_)},$$slots:{default:!0}}),e(S,R)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var we=t(Ee);oe(we,{id:"get-file",level:1,children:(b,q)=>{n();var I=s("Get file");e(b,I)},$$slots:{default:!0}});var ye=t(we);Y(ye,{children:(b,q)=>{n();var I=ir(),j=t(o(I));h(j,{content:"getFile"}),n(),e(b,I)},$$slots:{default:!0}});var De=t(ye);le(De,{children:(b,q)=>{var I=dr(),j=o(I);O(j,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = storage.getFile('<BUCKET_ID>', '<FILE_ID>');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = storage.getFile('<BUCKET_ID>', '<FILE_ID>');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(D,v)},$$slots:{default:!0}});var M=t(j);O(M,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFile(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFile(
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
`,language:"client-flutter",process:!0,children:(D,K)=>{n();var v=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFile(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFile(
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
);`);e(D,v)},$$slots:{default:!0}});var N=t(M);O(N,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

      let storage = Storage(client)

      let byteBuffer = try await storage.getFile(
          bucketId: "<BUCKET_ID>",
          fileId: "<FILE_ID>"
      )

      print(String(describing: byteBuffer)
}
`,language:"client-apple",process:!0,children:(D,K)=>{n();var v=s(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

      let storage = Storage(client)

      let byteBuffer = try await storage.getFile(
          bucketId: "<BUCKET_ID>",
          fileId: "<FILE_ID>"
      )

      print(String(describing: byteBuffer)
}`);e(D,v)},$$slots:{default:!0}});var G=t(N);O(G,{content:`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFile(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-kotlin",process:!0,children:(D,K)=>{n();var v=s(`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFile(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}`);e(D,v)},$$slots:{default:!0}});var X=t(G);O(X,{content:`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.getFile('<BUCKET_ID>', '<FILE_ID>');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-react-native",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.getFile('<BUCKET_ID>', '<FILE_ID>');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);e(D,v)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var Ce=t(De);oe(Ce,{id:"download-file",level:1,children:(b,q)=>{n();var I=s("Download file");e(b,I)},$$slots:{default:!0}});var be=t(Ce);Y(be,{children:(b,q)=>{n();var I=pr(),j=t(o(I));h(j,{content:"getFileDownload"}),n(),e(b,I)},$$slots:{default:!0}});var Fe=t(be);le(Fe,{children:(b,q)=>{var I=ur(),j=o(I);O(j,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-web",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}});var M=t(j);O(M,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileDownload(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFileDownload(
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
`,language:"client-flutter",process:!0,children:(D,K)=>{n();var v=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileDownload(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFileDownload(
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
);`);e(D,v)},$$slots:{default:!0}});var N=t(M);O(N,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileDownload(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}
`,language:"client-apple",process:!0,children:(D,K)=>{n();var v=s(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileDownload(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}`);e(D,v)},$$slots:{default:!0}});var G=t(N);O(G,{content:`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFileDownload(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-kotlin",process:!0,children:(D,K)=>{n();var v=s(`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFileDownload(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}`);e(D,v)},$$slots:{default:!0}});var X=t(G);O(X,{content:`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-react-native",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var Te=t(Fe);oe(Te,{id:"get-file-preview",level:1,children:(b,q)=>{n();var I=s("Get File Preview");e(b,I)},$$slots:{default:!0}});var Se=t(Te);Y(Se,{children:(b,q)=>{n();var I=cr(),j=t(o(I));h(j,{content:"getFilePreview"}),n(),e(b,I)},$$slots:{default:!0}});var xe=t(Se);le(xe,{children:(b,q)=>{var I=$r(),j=o(I);O(j,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFilePreview('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-web",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFilePreview('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}});var M=t(j);O(M,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
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
`,language:"client-flutter",process:!0,children:(D,K)=>{n();var v=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
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
);`);e(D,v)},$$slots:{default:!0}});var N=t(M);O(N,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFilePreview(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}
`,language:"client-apple",process:!0,children:(D,K)=>{n();var v=s(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFilePreview(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}`);e(D,v)},$$slots:{default:!0}});var G=t(N);O(G,{content:`import androidx.appcompat.app.AppCompatActivity
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
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-kotlin",process:!0,children:(D,K)=>{n();var v=s(`import androidx.appcompat.app.AppCompatActivity
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
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}`);e(D,v)},$$slots:{default:!0}});var X=t(G);O(X,{content:`import { Client, Storage, ImageGravity } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFilePreview(
    '<BUCKET_ID>',
    '<FILE_ID>',
    200,                    // width
    200,                    // height
    ImageGravity.Center,    // gravity
    100                     // quality
);

console.log(result); // Resource URL
`,language:"client-react-native",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage, ImageGravity } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFilePreview(
    '<BUCKET_ID>',
    '<FILE_ID>',
    200,                    // width
    200,                    // height
    ImageGravity.Center,    // gravity
    100                     // quality
);

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}});var Re=t(xe);oe(Re,{id:"view-file",level:1,children:(b,q)=>{n();var I=s("View File");e(b,I)},$$slots:{default:!0}});var Be=t(Re);Y(Be,{children:(b,q)=>{n();var I=fr(),j=t(o(I));h(j,{content:"getFileView"}),n(),e(b,I)},$$slots:{default:!0}});var Ue=t(Be);le(Ue,{children:(b,q)=>{var I=vr(),j=o(I);O(j,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileView('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-web",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileView('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}});var M=t(j);O(M,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileView(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFileView(
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
`,language:"client-flutter",process:!0,children:(D,K)=>{n();var v=s(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileView(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
  ).then((bytes) {
    final file = File('path_to_file/filename.ext');
    file.writeAsBytesSync(bytes)
  }).catchError((error) {
      print(error.response);
  })
}

//displaying image preview
FutureBuilder(
  future: storage.getFileView(
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
);`);e(D,v)},$$slots:{default:!0}});var N=t(M);O(N,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileView(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}
`,language:"client-apple",process:!0,children:(D,K)=>{n();var v=s(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileView(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    )

    print(String(describing: byteBuffer))
}`);e(D,v)},$$slots:{default:!0}});var G=t(N);O(G,{content:`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFileView(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-kotlin",process:!0,children:(D,K)=>{n();var v=s(`import androidx.appcompat.app.AppCompatActivity
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

        val result = storage.getFileView(
            bucketId = "<BUCKET_ID>",
            fileId = "<FILE_ID>"
        )
        println(result); // Resource URL
    }
}`);e(D,v)},$$slots:{default:!0}});var X=t(G);O(X,{content:`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileView('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-react-native",process:!0,children:(D,K)=>{n();var v=s(`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileView('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);e(D,v)},$$slots:{default:!0}}),e(b,I)},$$slots:{default:!0}}),Ke(se),e(ke,se)},$$slots:{default:!0}}))}export{Yr as component};
