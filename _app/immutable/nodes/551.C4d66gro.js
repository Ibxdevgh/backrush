import{t as w,b as i,a as t}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as A,s as o,f as $,n,r as K}from"../chunks/NgVQVlRK.js";import{n as U}from"../chunks/B4IyMRKX.js";import{H as D}from"../chunks/CXsRaEhZ.js";import{M as R}from"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";/* empty css                */import"../chunks/D9bBQFLV.js";import{C as J}from"../chunks/DXp9_3zM.js";import{F as u}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                */import{P as C}from"../chunks/D8YsId2T.js";import{S as v}from"../chunks/yHjwcyUH.js";import{A as L}from"../chunks/CqOphJLh.js";const Y={layout:"article",title:"Start with Storage",description:"Get started quickly with Backrush Storage. Follow step-by-step instructions to set up storage, upload files, and integrate cloud storage into your projects",difficulty:"beginner",readtime:5};var G=w("You can create a bucket in the Backrush Console by navigating to <!> &gt; <!>.",1),N=w("In your bucket, navigate to <!> &gt; <!>, then add a new <!> role with <!> and <!> permissions. This allows anyone to create and read files in this bucket.",1),q=w("<!><!><!><!><!><!><!>",1),H=w("To download a file, use the <!> method.",1),M=w("<!><!><!><!><!>",1),z=w("<article><!><!><!><!><!><!><!><!><!><!></article>");function Ie(B){L(B,U(Y,{children:(x,V)=>{var E=z(),h=A(E);C(h,{children:(l,m)=>{n();var r=i("You can create your first bucket, upload, and download your first file in minutes.");t(l,r)},$$slots:{default:!0}});var P=o(h);D(P,{id:"create-bucket",level:1,children:(l,m)=>{n();var r=i("Create bucket");t(l,r)},$$slots:{default:!0}});var F=o(P);C(F,{children:(l,m)=>{n();var r=G(),s=o($(r));v(s,{marker:"**",children:(c,f)=>{n();var I=i("Storage");t(c,I)},$$slots:{default:!0}});var g=o(s,2);v(g,{marker:"**",children:(c,f)=>{n();var I=i("Create bucket");t(c,I)},$$slots:{default:!0}}),n(),t(l,r)},$$slots:{default:!0}});var b=o(F);C(b,{children:(l,m)=>{n();var r=N(),s=o($(r));v(s,{marker:"**",children:(a,d)=>{n();var e=i("Settings");t(a,e)},$$slots:{default:!0}});var g=o(s,2);v(g,{marker:"**",children:(a,d)=>{n();var e=i("Permissions");t(a,e)},$$slots:{default:!0}});var c=o(g,2);v(c,{marker:"**",children:(a,d)=>{n();var e=i("Any");t(a,e)},$$slots:{default:!0}});var f=o(c,2);v(f,{marker:"**",children:(a,d)=>{n();var e=i("CREATE");t(a,e)},$$slots:{default:!0}});var I=o(f,2);v(I,{marker:"**",children:(a,d)=>{n();var e=i("READ");t(a,e)},$$slots:{default:!0}}),n(),t(l,r)},$$slots:{default:!0}});var y=o(b);D(y,{id:"create-file",level:1,children:(l,m)=>{n();var r=i("Create file");t(l,r)},$$slots:{default:!0}});var T=o(y);C(T,{children:(l,m)=>{n();var r=i("To upload a file, add this to your app. For web apps, you can use the File object directly. For Node.js apps, use the InputFile class.");t(l,r)},$$slots:{default:!0}});var S=o(T);R(S,{children:(l,m)=>{var r=q(),s=$(r);u(s,{content:`import { Client, Storage } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '[BUCKET_ID]',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
`,language:"client-web",process:!0,children:(e,_)=>{n();var p=i(`import { Client, Storage } from 'backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const promise = storage.createFile(
    '[BUCKET_ID]',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});`);t(e,p)},$$slots:{default:!0}});var g=o(s);u(g,{content:`const sdk = require('node-backrush');
const { InputFile } = require('node-backrush/file');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const storage = new sdk.Storage(client);

// If running in a browser environment, you can use File directly
const browserFile = new File(['hello'], 'hello.txt');
await storage.createFile('[BUCKET_ID]', ID.unique(), browserFile);

// If running in Node.js, use InputFile
const nodeFile = InputFile.fromPath('/path/to/file.jpg', 'file.jpg');
await storage.createFile('[BUCKET_ID]', ID.unique(), nodeFile);
`,language:"server-nodejs",process:!0,children:(e,_)=>{n();var p=i(`const sdk = require('node-backrush');
const { InputFile } = require('node-backrush/file');

const client = new sdk.Client()
    .setEndpoint('https://cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>')
    .setKey('<API_KEY>');

const storage = new sdk.Storage(client);

// If running in a browser environment, you can use File directly
const browserFile = new File(['hello'], 'hello.txt');
await storage.createFile('[BUCKET_ID]', ID.unique(), browserFile);

// If running in Node.js, use InputFile
const nodeFile = InputFile.fromPath('/path/to/file.jpg', 'file.jpg');
await storage.createFile('[BUCKET_ID]', ID.unique(), nodeFile);`);t(e,p)},$$slots:{default:!0}});var c=o(g);u(c,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  final storage = Storage(client);

  final file = await storage.createFile(
    bucketId: '[BUCKET_ID]',
    fileId: ID.unique(),
    file: InputFile.fromPath(path: './path-to-files/image.jpg', filename: 'image.jpg'),
  );
}
`,language:"client-flutter",process:!0,children:(e,_)=>{n();var p=i(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  final client = Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

  final storage = Storage(client);

  final file = await storage.createFile(
    bucketId: '[BUCKET_ID]',
    fileId: ID.unique(),
    file: InputFile.fromPath(path: './path-to-files/image.jpg', filename: 'image.jpg'),
  );
}`);t(e,p)},$$slots:{default:!0}});var f=o(c);u(f,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let storage = Storage(client)

    let file = try await storage.createFile(
        bucketId: "[BUCKET_ID]",
        fileId: ID.unique(),
        file: InputFile.fromBuffer(yourByteBuffer,
            filename: "image.jpg",
            mimeType: "image/jpeg"
        )
    )
}
`,language:"client-apple",process:!0,children:(e,_)=>{n();var p=i(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
      .setProject("<PROJECT_ID>")

    let storage = Storage(client)

    let file = try await storage.createFile(
        bucketId: "[BUCKET_ID]",
        fileId: ID.unique(),
        file: InputFile.fromBuffer(yourByteBuffer,
            filename: "image.jpg",
            mimeType: "image/jpeg"
        )
    )
}`);t(e,p)},$$slots:{default:!0}});var I=o(f);u(I,{content:`import io.backrush.Client
import io.backrush.services.Storage

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
        .setProject("<PROJECT_ID>") // Your project ID

    val storage = Storage(client)

    val file = storage.createFile(
        bucketId = "[BUCKET_ID]",
        fileId = ID.unique(),
        file = File("./path-to-files/image.jpg"),
    )
}
`,language:"client-android-kotlin",process:!0,children:(e,_)=>{n();var p=i(`import io.backrush.Client
import io.backrush.services.Storage

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
        .setProject("<PROJECT_ID>") // Your project ID

    val storage = Storage(client)

    val file = storage.createFile(
        bucketId = "[BUCKET_ID]",
        fileId = ID.unique(),
        file = File("./path-to-files/image.jpg"),
    )
}`);t(e,p)},$$slots:{default:!0}});var a=o(I);u(a,{content:`import { Client, Storage, ID } from 'react-native-backrush';

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
`,language:"client-react-native",process:!0,children:(e,_)=>{n();var p=i(`import { Client, Storage, ID } from 'react-native-backrush';

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
});`);t(e,p)},$$slots:{default:!0}});var d=o(a);u(d,{content:`POST /v1/storage/buckets/{bucketId}/files HTTP/1.1
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Content-Length: *Length of your entity body in bytes*
X-Backrush-Project: [PROJECT_ID]

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation CreateFile($bucketId: String!, $fileId: String!, $file: InputFile!) { storageCreateFile(bucketId: $bucketId, fileId: $fileId, file: $file) { id } }", "variables": { "bucketId": "[BUCKET_ID]", "fileId": "[FILE_ID]", "file": null } }
--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.file"] }
--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="file.txt"
Content-Type: text/plain

File content.

--cec8e8123c05ba25--
`,language:"http",process:!0,children:(e,_)=>{n();var p=i(`POST /v1/storage/buckets/{bucketId}/files HTTP/1.1
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Content-Length: *Length of your entity body in bytes*
X-Backrush-Project: [PROJECT_ID]

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation CreateFile($bucketId: String!, $fileId: String!, $file: InputFile!) { storageCreateFile(bucketId: $bucketId, fileId: $fileId, file: $file) { id } }", "variables": { "bucketId": "[BUCKET_ID]", "fileId": "[FILE_ID]", "file": null } }
--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.file"] }
--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="file.txt"
Content-Type: text/plain

File content.

--cec8e8123c05ba25--`);t(e,p)},$$slots:{default:!0}}),t(l,r)},$$slots:{default:!0}});var j=o(S);D(j,{id:"download-file",level:1,children:(l,m)=>{n();var r=i("Download file");t(l,r)},$$slots:{default:!0}});var k=o(j);C(k,{children:(l,m)=>{n();var r=H(),s=o($(r));J(s,{content:"getFileDownload"}),n(),t(l,r)},$$slots:{default:!0}});var O=o(k);R(O,{children:(l,m)=>{var r=M(),s=$(r);u(s,{content:`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileDownload('[BUCKET_ID]', '[FILE_ID]');

console.log(result); // Resource URL
`,language:"client-web",process:!0,children:(a,d)=>{n();var e=i(`import { Client, Storage } from 'backrush';

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
;

const result = storage.getFileDownload('[BUCKET_ID]', '[FILE_ID]');

console.log(result); // Resource URL`);t(a,e)},$$slots:{default:!0}});var g=o(s);u(g,{content:`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileDownload(
    bucketId: '[BUCKET_ID]',
    fileId: '[FILE_ID]',
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
    bucketId: '[BUCKET_ID]',
    fileId: '[FILE_ID]',
  ), //works for both public file and private file, for private files you need to be logged in
  builder: (context, snapshot) {
    return snapshot.hasData && snapshot.data != null
      ? Image.memory(
          snapshot.data,
        )
      : CircularProgressIndicator();
  },
);
`,language:"client-flutter",process:!0,children:(a,d)=>{n();var e=i(`import 'package:backrush/backrush.dart';

void main() { // Init SDK
  Client client = Client();
  Storage storage = Storage(client);

  client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  // downloading file
  Future result = storage.getFileDownload(
    bucketId: '[BUCKET_ID]',
    fileId: '[FILE_ID]',
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
    bucketId: '[BUCKET_ID]',
    fileId: '[FILE_ID]',
  ), //works for both public file and private file, for private files you need to be logged in
  builder: (context, snapshot) {
    return snapshot.hasData && snapshot.data != null
      ? Image.memory(
          snapshot.data,
        )
      : CircularProgressIndicator();
  },
);`);t(a,e)},$$slots:{default:!0}});var c=o(g);u(c,{content:`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileDownload(
        bucketId: "[BUCKET_ID]",
        fileId: "[FILE_ID]"
    )

    print(String(describing: byteBuffer))
}
`,language:"client-apple",process:!0,children:(a,d)=>{n();var e=i(`import Backrush

func main() async throws {
    let client = Client()
      .setEndpoint("https://<REGION>.cloud.backrush.io/v1") // Your API Endpoint
      .setProject("<PROJECT_ID>") // Your project ID
    let storage = Storage(client)
    let byteBuffer = try await storage.getFileDownload(
        bucketId: "[BUCKET_ID]",
        fileId: "[FILE_ID]"
    )

    print(String(describing: byteBuffer))
}`);t(a,e)},$$slots:{default:!0}});var f=o(c);u(f,{content:`import androidx.appcompat.app.AppCompatActivity
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
            bucketId = "[BUCKET_ID]",
            fileId = "[FILE_ID]"
        )
        println(result); // Resource URL
    }
}
`,language:"client-android-kotlin",process:!0,children:(a,d)=>{n();var e=i(`import androidx.appcompat.app.AppCompatActivity
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
            bucketId = "[BUCKET_ID]",
            fileId = "[FILE_ID]"
        )
        println(result); // Resource URL
    }
}`);t(a,e)},$$slots:{default:!0}});var I=o(f);u(I,{content:`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL
`,language:"client-react-native",process:!0,children:(a,d)=>{n();var e=i(`import { Client, Storage } from 'react-native-backrush';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>');

const storage = new Storage(client);

const result = storage.getFileDownload('<BUCKET_ID>', '<FILE_ID>');

console.log(result); // Resource URL`);t(a,e)},$$slots:{default:!0}}),t(l,r)},$$slots:{default:!0}}),K(E),t(x,E)},$$slots:{default:!0}}))}export{Ie as component};
