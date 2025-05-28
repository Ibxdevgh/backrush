import{t as m,b as r,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Fe,s as a,f as $,n,r as Be}from"./NgVQVlRK.js";import{n as He}from"./B4IyMRKX.js";import{H as w}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as y}from"./DXp9_3zM.js";import{F as _}from"./OFUKRh55.js";import{L as Ae,I as b}from"./BhmTgGWB.js";import{P as l}from"./D8YsId2T.js";import{S as v}from"./yHjwcyUH.js";import{L as P}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as We}from"./CEkRzcqJ.js";const Ce={layout:"post",title:"Get started with Backrush Realtime for Flutter",description:"Learn how to build a Flutter app using Backrush's powerful Realtime API.",cover:"/images/blog/backrush-realtime-with-flutter/cover.png",timeToRead:6,date:"2024-09-02T00:00:00.000Z",author:"damodar-lohani",category:"tutorial"};var Ee=m("To continue with this tutorial, you&#39;ll need access to an Backrush project. If you don&#39;t have one, you can sign up on <!>.",1),Me=m("On the databases page, click on the <!> button.",1),Re=m("In the dialog that pops up, enter a name and database ID, and click <!>. Make sure to note down the database ID next to the database name as we will need that later in our code.",1),je=m("Once on the database page, click on the <!> button.",1),Le=m("In the dialog that pops up, set the collection name to <!> and click on the <!> button to create the collection, and you will be redirected to the new collection&#39;s page.",1),Ne=m("Switch to the Attributes tab and create the following attribute. Also note down the <!> from the top of the page next to the collection name.",1),Oe=m("<!><!><!><!><!><!>",1),qe=m("Switch to the Settings tab and scroll down to <!> to configure the permissions for the collection. Add the <!> role and check create, read, update, and delete so that anyone can read and write.",1),ze=m("Once you have installed the dependency and run <!> you should be ready to use it.",1),Ke=m("To initialize the Backrush SDK and start interacting with Backrush services, you first need to add a new Flutter platform to your project. To add a new platform, go to the Backrush Console, select your project, and click the <!> button on the project Overview. Click on the Flutter app to register a Flutter platform.",1),Ve=m("If you choose to add an Android platform, on the dialog box, add the details. Add your app name and package name. Your package name is generally the <!> in your app-level <!>",1),Ye=m("file. You may also find your package name in your <!> file.",1),Ge=m("We will start by creating a simple stateful widget that will list all the items from our items collection and allow adding new items and deleting existing items. Our home page will also connect to Backrush&#39;s Realtime service and display changes in the collection of items by updating the UI as they happen. So, let&#39;s create our <!> widget. Modify the code in <!> as follows:",1),Je=m("In the <!> function of the HomePage, we will create and initialize our Backrush client, as well as subscribe to real-time changes in documents in our <!> collection.",1),Ue=m("And in <!> method, close the subscription.",1),Ze=m("Finally, let&#39;s modify our <!> function to add items to Backrush&#39;s database and see how the view updates in real time.",1),Qe=m("Let us also modify our <!> widget to add a delete button that will allow us to delete the item.",1),Xe=m("If you have any questions, feel free to ask on our <!>. You can also share your apps built Flutter and Backrush Realtime on <!>, and we&#39;ll feature it on our socials!",1),et=m("<!><!><!>",1),tt=m("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function nt(Te){We(Te,He(Ce,{children:(De,at)=>{var S=tt(),A=Fe(S);l(A,{children:(t,i)=>{n();var e=r("Realtime service is one of Backrush’s most popular features. It allows you to subscribe and react to any Backrush event using the Realtime API.");o(t,e)},$$slots:{default:!0}});var C=a(A);l(C,{children:(t,i)=>{n();var e=r("In this tutorial, we will get into the details and learn how to develop a Flutter app that leverages Backrush's real-time capabilities.");o(t,e)},$$slots:{default:!0}});var T=a(C);w(T,{level:1,children:(t,i)=>{n();var e=r("Prerequisites");o(t,e)},$$slots:{default:!0}});var D=a(T);l(D,{children:(t,i)=>{n();var e=Ee(),s=a($(e));P(s,{href:"https://cloud.backrush.io/",children:(c,p)=>{n();var d=r("Backrush Cloud");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var k=a(D);w(k,{level:1,children:(t,i)=>{n();var e=r("Set up a database");o(t,e)},$$slots:{default:!0}});var F=a(k);l(F,{children:(t,i)=>{n();var e=r("Once you have logged in to the Console and selected your project, click on Databases in the left sidebar of the dashboard.");o(t,e)},$$slots:{default:!0}});var B=a(F);l(B,{children:(t,i)=>{n();var e=Me(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("Create database");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var H=a(B);l(H,{children:(t,i)=>{I(t,{src:"/images/blog/backrush-realtime-with-flutter/1.png",alt:"Create database"})},$$slots:{default:!0}});var W=a(H);l(W,{children:(t,i)=>{n();var e=Re(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("Create to create the database and show the database page");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var E=a(W);l(E,{children:(t,i)=>{n();var e=je(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("Create collection");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var M=a(E);l(M,{children:(t,i)=>{I(t,{src:"/images/blog/backrush-realtime-with-flutter/2.png",alt:"Create collection"})},$$slots:{default:!0}});var R=a(M);l(R,{children:(t,i)=>{n();var e=Le(),s=a($(e));v(s,{marker:"**",children:(p,d)=>{n();var u=r("Items");o(p,u)},$$slots:{default:!0}});var c=a(s,2);v(c,{marker:"**",children:(p,d)=>{n();var u=r("Create");o(p,u)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var j=a(R);l(j,{children:(t,i)=>{n();var e=Ne(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("Collection ID");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var L=a(j);Ae(L,{ordered:!1,marker:"-",children:(t,i)=>{var e=Oe(),s=$(e);b(s,{children:(f,h)=>{n();var g=r("Type: String");o(f,g)},$$slots:{default:!0}});var c=a(s);b(c,{children:(f,h)=>{n();var g=r("Attribute Key: name");o(f,g)},$$slots:{default:!0}});var p=a(c);b(p,{children:(f,h)=>{n();var g=r("Size: 25");o(f,g)},$$slots:{default:!0}});var d=a(p);b(d,{children:(f,h)=>{n();var g=r("Default: null");o(f,g)},$$slots:{default:!0}});var u=a(d);b(u,{children:(f,h)=>{n();var g=r("Required: true");o(f,g)},$$slots:{default:!0}});var x=a(u);b(x,{children:(f,h)=>{n();var g=r("Array: false");o(f,g)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var N=a(L);l(N,{children:(t,i)=>{I(t,{src:"/images/blog/backrush-realtime-with-flutter/3.png",alt:"Create String"})},$$slots:{default:!0}});var O=a(N);l(O,{children:(t,i)=>{n();var e=qe(),s=a($(e));v(s,{marker:"**",children:(p,d)=>{n();var u=r("Permissions");o(p,u)},$$slots:{default:!0}});var c=a(s,2);v(c,{marker:"**",children:(p,d)=>{n();var u=r("Any");o(p,u)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var q=a(O);l(q,{children:(t,i)=>{I(t,{src:"/images/blog/backrush-realtime-with-flutter/4.png",alt:"Set permissions"})},$$slots:{default:!0}});var z=a(q);w(z,{level:1,children:(t,i)=>{n();var e=r("Set up Flutter project and dependencies");o(t,e)},$$slots:{default:!0}});var K=a(z);l(K,{children:(t,i)=>{n();var e=r("We will begin by creating a new Flutter project. From your terminal in your project folder, type the following command to create a new Flutter project.");o(t,e)},$$slots:{default:!0}});var V=a(K);_(V,{content:`flutter create flappwrite_realtime

`,process:!0,children:(t,i)=>{n();var e=r("flutter create flappwrite_realtime");o(t,e)},$$slots:{default:!0}});var Y=a(V);l(Y,{children:(t,i)=>{n();var e=r("Then we add the Backrush's SDK, to do that from your terminal, in your newly created project directory, type the following command:");o(t,e)},$$slots:{default:!0}});var G=a(Y);_(G,{content:`cd flappwrite_realtime
flutter pub add backrush
`,process:!0,children:(t,i)=>{n();var e=r(`cd flappwrite_realtime
flutter pub add backrush`);o(t,e)},$$slots:{default:!0}});var J=a(G);l(J,{children:(t,i)=>{n();var e=r("This command will add Backrush's latest Flutter SDK with real-time service as a dependency to your Flutter project.");o(t,e)},$$slots:{default:!0}});var U=a(J);l(U,{children:(t,i)=>{n();var e=ze(),s=a($(e));y(s,{content:"flutter pub get"}),n(),o(t,e)},$$slots:{default:!0}});var Z=a(U);w(Z,{level:1,children:(t,i)=>{n();var e=r("Add Flutter platforms");o(t,e)},$$slots:{default:!0}});var Q=a(Z);l(Q,{children:(t,i)=>{n();var e=Ke(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("Add Platform");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var X=a(Q);l(X,{children:(t,i)=>{n();var e=r("In the wizard that appears, choose the platform you plan to run on.  If you want to run on another platform, add another platform");o(t,e)},$$slots:{default:!0}});var ee=a(X);l(ee,{children:(t,i)=>{n();var e=Ve(),s=a($(e));y(s,{content:"applicationId"});var c=a(s,2);y(c,{content:"build.gradle"}),o(t,e)},$$slots:{default:!0}});var te=a(ee);l(te,{children:(t,i)=>{n();var e=Ye(),s=a($(e));y(s,{content:"AndroidManifest.xml"}),n(),o(t,e)},$$slots:{default:!0}});var ne=a(te);l(ne,{children:(t,i)=>{I(t,{src:"/images/blog/backrush-realtime-with-flutter/5.png",alt:"Add the Flutter platform"})},$$slots:{default:!0}});var ae=a(ne);l(ae,{children:(t,i)=>{n();var e=r("By registering a new platform, you are allowing your app to communicate with the Backrush API.");o(t,e)},$$slots:{default:!0}});var oe=a(ae);w(oe,{level:1,children:(t,i)=>{n();var e=r("Home page");o(t,e)},$$slots:{default:!0}});var re=a(oe);l(re,{children:(t,i)=>{n();var e=Ge(),s=a($(e));v(s,{marker:"**",children:(p,d)=>{n();var u=r("HomePage");o(p,u)},$$slots:{default:!0}});var c=a(s,2);v(c,{marker:"**",children:(p,d)=>{n();var u=r("lib/main.dart");o(p,u)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var ie=a(re);_(ie,{content:`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlBackrush Realtime Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> items = [];
  final TextEditingController _nameController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlBackrush Realtime Demo'),
      ),
      body: ListView(children: [
        ...items.map((item) => ListTile(
              title: Text(item['name']),
            )),
      ]),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          // dialog to add new item
          showDialog(
            context: context,
            builder: (context) => AlertDialog(
              title: const Text('Add new item'),
              content: TextField(
                controller: _nameController,
              ),
              actions: [
                TextButton(
                  child: const Text('Cancel'),
                  onPressed: () => Navigator.of(context).pop(),
                ),
                TextButton(
                  child: const Text('Add'),
                  onPressed: () {
                    // add new item
                    final name = _nameController.text;
                    if (name.isNotEmpty) {
                      _nameController.clear();
                      _addItem(name);
                    }
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  void _addItem(String name) {
    setState(() {
      items.add({'name': name, 'id': DateTime.now().millisecondsSinceEpoch});
    });
  }
}

`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlBackrush Realtime Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> items = [];
  final TextEditingController _nameController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlBackrush Realtime Demo'),
      ),
      body: ListView(children: [
        ...items.map((item) => ListTile(
              title: Text(item['name']),
            )),
      ]),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          // dialog to add new item
          showDialog(
            context: context,
            builder: (context) => AlertDialog(
              title: const Text('Add new item'),
              content: TextField(
                controller: _nameController,
              ),
              actions: [
                TextButton(
                  child: const Text('Cancel'),
                  onPressed: () => Navigator.of(context).pop(),
                ),
                TextButton(
                  child: const Text('Add'),
                  onPressed: () {
                    // add new item
                    final name = _nameController.text;
                    if (name.isNotEmpty) {
                      _nameController.clear();
                      _addItem(name);
                    }
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  void _addItem(String name) {
    setState(() {
      items.add({'name': name, 'id': DateTime.now().millisecondsSinceEpoch});
    });
  }
}`);o(t,e)},$$slots:{default:!0}});var se=a(ie);l(se,{children:(t,i)=>{n();var e=Je(),s=a($(e));v(s,{marker:"**",children:(p,d)=>{n();var u=r("initState");o(p,u)},$$slots:{default:!0}});var c=a(s,2);v(c,{marker:"**",children:(p,d)=>{n();var u=r("items");o(p,u)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var le=a(se);_(le,{content:`  RealtimeSubscription? subscription;
  late final Client client;

  @override
  initState() {
    super.initState();
    client = Client().setProject('<PROJECT_ID>'); // your project id
  }
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`RealtimeSubscription? subscription;
  late final Client client;

  @override
  initState() {
    super.initState();
    client = Client().setProject('<PROJECT_ID>'); // your project id
  }`);o(t,e)},$$slots:{default:!0}});var de=a(le);l(de,{children:(t,i)=>{n();var e=Ue(),s=a($(e));v(s,{marker:"**",children:(c,p)=>{n();var d=r("dispose");o(c,d)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var ce=a(de);_(ce,{content:`dispose(){
    subscription?.close();
    super.dispose();
}
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`dispose(){
    subscription?.close();
    super.dispose();
}`);o(t,e)},$$slots:{default:!0}});var pe=a(ce);l(pe,{children:(t,i)=>{n();var e=r("Now, let us set up different variables and functions to load the initial data, listen to changes in the collection documents, and update the UI to reflect the changes in real time.");o(t,e)},$$slots:{default:!0}});var ue=a(pe);l(ue,{children:(t,i)=>{n();var e=r("First, initialize our database ID and items collection ID and set up a function to load initial data when the application first starts. For that, we will also set up an Backrush database service.");o(t,e)},$$slots:{default:!0}});var me=a(ue);_(me,{content:`  final database = 'default'; // your database id
  final itemsCollection = 'items'; // your collection id
  late final Databases databases;

  @override
  initState() {
    super.initState();
    client = Client().setProject('delete'); // your project id
    databases = Databases(client);
    loadItems();
    subscribe();
  }

  loadItems() async {
    try {
      final res = await databases.listDocuments(
        databaseId: database,
        collectionId: itemsCollection,
      );
      setState(() {
        items =
            List<Map<String, dynamic>>.from(res.documents.map((e) => e.data));
      });
    } on BackrushException catch (e) {
      print(e.message);
    }
  }
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`final database = 'default'; // your database id
  final itemsCollection = 'items'; // your collection id
  late final Databases databases;

  @override
  initState() {
    super.initState();
    client = Client().setProject('delete'); // your project id
    databases = Databases(client);
    loadItems();
    subscribe();
  }

  loadItems() async {
    try {
      final res = await databases.listDocuments(
        databaseId: database,
        collectionId: itemsCollection,
      );
      setState(() {
        items =
            List<Map<String, dynamic>>.from(res.documents.map((e) => e.data));
      });
    } on BackrushException catch (e) {
      print(e.message);
    }
  }`);o(t,e)},$$slots:{default:!0}});var $e=a(me);l($e,{children:(t,i)=>{n();var e=r("Now, we will set up our subscribe function, which will listen to changes to documents in our items collection.");o(t,e)},$$slots:{default:!0}});var fe=a($e);_(fe,{content:`  void subscribe() {
    final realtime = Realtime(client);

    subscription = realtime.subscribe([
      'documents' // subscribe to all documents in every database and collection
    ]);

    // listen to changes
    subscription!.stream.listen((data) {
      // data will consist of \`events\` and a \`payload\`
      final event = data.events.first;
      if (data.payload.isNotEmpty) {
        if (event.endsWith('.create')) {
          var item = data.payload;
          items.add(item);
          setState(() {});
        } else if (event.endsWith('.delete')) {
          var item = data.payload;
          items.removeWhere((it) => it['\\$id'] == item['\\$id']);
          setState(() {});
        }
      }
    });
  }
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`void subscribe() {
    final realtime = Realtime(client);

    subscription = realtime.subscribe([
      'documents' // subscribe to all documents in every database and collection
    ]);

    // listen to changes
    subscription!.stream.listen((data) {
      // data will consist of \`events\` and a \`payload\`
      final event = data.events.first;
      if (data.payload.isNotEmpty) {
        if (event.endsWith('.create')) {
          var item = data.payload;
          items.add(item);
          setState(() {});
        } else if (event.endsWith('.delete')) {
          var item = data.payload;
          items.removeWhere((it) => it['\\$id'] == item['\\$id']);
          setState(() {});
        }
      }
    });
  }`);o(t,e)},$$slots:{default:!0}});var ve=a(fe);l(ve,{children:(t,i)=>{n();var e=Ze(),s=a($(e));y(s,{content:"_addItem"}),n(),o(t,e)},$$slots:{default:!0}});var he=a(ve);_(he,{content:`  void _addItem(String name) async {
    try {
      await databases.createDocument(
        databaseId: database,
        collectionId: itemsCollection,
        documentId: ID.unique(),
        data: {'name': name},
      );
    } on BackrushException catch (e) {
      print(e.message);
    }
  }
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`void _addItem(String name) async {
    try {
      await databases.createDocument(
        databaseId: database,
        collectionId: itemsCollection,
        documentId: ID.unique(),
        data: {'name': name},
      );
    } on BackrushException catch (e) {
      print(e.message);
    }
  }`);o(t,e)},$$slots:{default:!0}});var ge=a(he);l(ge,{children:(t,i)=>{n();var e=Qe(),s=a($(e));y(s,{content:"ListTile"}),n(),o(t,e)},$$slots:{default:!0}});var _e=a(ge);_(_e,{content:`            ListTile(
              title: Text(item['name']),
              trailing: IconButton(
                icon: const Icon(Icons.delete),
                onPressed: () async {
                  await databases.deleteDocument(
                    databaseId: database,
                    collectionId: itemsCollection,
                    documentId: item['\\$id'],
                  );
                },
              ),
            )
`,language:"dart",process:!0,children:(t,i)=>{n();var e=r(`ListTile(
              title: Text(item['name']),
              trailing: IconButton(
                icon: const Icon(Icons.delete),
                onPressed: () async {
                  await databases.deleteDocument(
                    databaseId: database,
                    collectionId: itemsCollection,
                    documentId: item['\\$id'],
                  );
                },
              ),
            )`);o(t,e)},$$slots:{default:!0}});var be=a(_e);w(be,{level:2,children:(t,i)=>{n();var e=r("Complete example");o(t,e)},$$slots:{default:!0}});var we=a(be);_(we,{content:`import 'package:backrush/backrush.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlBackrush Realtime Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> items = [];
  final TextEditingController _nameController = TextEditingController();
  RealtimeSubscription? subscription;
  late final Client client;
  final database = 'default'; // your database id
  final itemsCollection = 'items'; // your collection id
  late final Databases databases;

  @override
  initState() {
    super.initState();
    client = Client().setProject('delete'); // your project id
    databases = Databases(client);
    loadItems();
    subscribe();
  }

  loadItems() async {
    try {
      final res = await databases.listDocuments(
        databaseId: database,
        collectionId: itemsCollection,
      );
      setState(() {
        items =
            List<Map<String, dynamic>>.from(res.documents.map((e) => e.data));
      });
    } on BackrushException catch (e) {
      print(e.message);
    }
  }

  void subscribe() {
    final realtime = Realtime(client);

    subscription = realtime.subscribe([
      'documents' // subscribe to all documents in every database and collection
    ]);

    // listen to changes
    subscription!.stream.listen((data) {
      // data will consist of \`events\` and a \`payload\`
      final event = data.events.first;
      if (data.payload.isNotEmpty) {
        if (event.endsWith('.create')) {
          var item = data.payload;
          items.add(item);
          setState(() {});
        } else if (event.endsWith('.delete')) {
          var item = data.payload;
          items.removeWhere((it) => it['\\$id'] == item['\\$id']);
          setState(() {});
        }
      }
    });
  }

  @override
  dispose() {
    subscription?.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlBackrush Realtime Demo'),
      ),
      body: ListView(children: [
        ...items.map((item) => ListTile(
              title: Text(item['name']),
              trailing: IconButton(
                icon: const Icon(Icons.delete),
                onPressed: () async {
                  await databases.deleteDocument(
                    databaseId: database,
                    collectionId: itemsCollection,
                    documentId: item['\\$id'],
                  );
                },
              ),
            )),
      ]),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          // dialog to add new item
          showDialog(
            context: context,
            builder: (context) => AlertDialog(
              title: const Text('Add new item'),
              content: TextField(
                controller: _nameController,
              ),
              actions: [
                TextButton(
                  child: const Text('Cancel'),
                  onPressed: () => Navigator.of(context).pop(),
                ),
                TextButton(
                  child: const Text('Add'),
                  onPressed: () {
                    // add new item
                    final name = _nameController.text;
                    if (name.isNotEmpty) {
                      _nameController.clear();
                      _addItem(name);
                    }
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  void _addItem(String name) async {
    try {
      await databases.createDocument(
        databaseId: database,
        collectionId: itemsCollection,
        documentId: ID.unique(),
        data: {'name': name},
      );
    } on BackrushException catch (e) {
      print(e.message);
    }
  }
}

`,process:!0,children:(t,i)=>{n();var e=r(`import 'package:backrush/backrush.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlBackrush Realtime Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> items = [];
  final TextEditingController _nameController = TextEditingController();
  RealtimeSubscription? subscription;
  late final Client client;
  final database = 'default'; // your database id
  final itemsCollection = 'items'; // your collection id
  late final Databases databases;

  @override
  initState() {
    super.initState();
    client = Client().setProject('delete'); // your project id
    databases = Databases(client);
    loadItems();
    subscribe();
  }

  loadItems() async {
    try {
      final res = await databases.listDocuments(
        databaseId: database,
        collectionId: itemsCollection,
      );
      setState(() {
        items =
            List<Map<String, dynamic>>.from(res.documents.map((e) => e.data));
      });
    } on BackrushException catch (e) {
      print(e.message);
    }
  }

  void subscribe() {
    final realtime = Realtime(client);

    subscription = realtime.subscribe([
      'documents' // subscribe to all documents in every database and collection
    ]);

    // listen to changes
    subscription!.stream.listen((data) {
      // data will consist of \`events\` and a \`payload\`
      final event = data.events.first;
      if (data.payload.isNotEmpty) {
        if (event.endsWith('.create')) {
          var item = data.payload;
          items.add(item);
          setState(() {});
        } else if (event.endsWith('.delete')) {
          var item = data.payload;
          items.removeWhere((it) => it['\\$id'] == item['\\$id']);
          setState(() {});
        }
      }
    });
  }

  @override
  dispose() {
    subscription?.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlBackrush Realtime Demo'),
      ),
      body: ListView(children: [
        ...items.map((item) => ListTile(
              title: Text(item['name']),
              trailing: IconButton(
                icon: const Icon(Icons.delete),
                onPressed: () async {
                  await databases.deleteDocument(
                    databaseId: database,
                    collectionId: itemsCollection,
                    documentId: item['\\$id'],
                  );
                },
              ),
            )),
      ]),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          // dialog to add new item
          showDialog(
            context: context,
            builder: (context) => AlertDialog(
              title: const Text('Add new item'),
              content: TextField(
                controller: _nameController,
              ),
              actions: [
                TextButton(
                  child: const Text('Cancel'),
                  onPressed: () => Navigator.of(context).pop(),
                ),
                TextButton(
                  child: const Text('Add'),
                  onPressed: () {
                    // add new item
                    final name = _nameController.text;
                    if (name.isNotEmpty) {
                      _nameController.clear();
                      _addItem(name);
                    }
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  void _addItem(String name) async {
    try {
      await databases.createDocument(
        databaseId: database,
        collectionId: itemsCollection,
        documentId: ID.unique(),
        data: {'name': name},
      );
    } on BackrushException catch (e) {
      print(e.message);
    }
  }
}`);o(t,e)},$$slots:{default:!0}});var xe=a(we);w(xe,{level:1,children:(t,i)=>{n();var e=r("Conclusion");o(t,e)},$$slots:{default:!0}});var ye=a(xe);l(ye,{children:(t,i)=>{n();var e=r("I hope you enjoyed learning and building Flutter applications with Backrush Realtime service.");o(t,e)},$$slots:{default:!0}});var Pe=a(ye);l(Pe,{children:(t,i)=>{n();var e=Xe(),s=a($(e));P(s,{href:"https://backrush.io/discord",children:(p,d)=>{n();var u=r("Discord server");o(p,u)},$$slots:{default:!0}});var c=a(s,2);P(c,{href:"https://builtwith.appwrite.io/",children:(p,d)=>{n();var u=r("Built with Backrush");o(p,u)},$$slots:{default:!0}}),n(),o(t,e)},$$slots:{default:!0}});var Ie=a(Pe);l(Ie,{children:(t,i)=>{n();var e=r("Happy coding!");o(t,e)},$$slots:{default:!0}});var Se=a(Ie);w(Se,{level:1,children:(t,i)=>{n();var e=r("Learn more");o(t,e)},$$slots:{default:!0}});var ke=a(Se);Ae(ke,{ordered:!1,marker:"-",children:(t,i)=>{var e=et(),s=$(e);b(s,{children:(d,u)=>{P(d,{href:"https://backrush.io/docs/getting-started-for-flutter",children:(x,f)=>{n();var h=r("Getting started with Flutter on Backrush");o(x,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=a(s);b(c,{children:(d,u)=>{P(d,{href:"https://github.com/backrush/playground-for-flutter",children:(x,f)=>{n();var h=r("Flutter playground");o(x,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=a(c);b(p,{children:(d,u)=>{P(d,{href:"https://backrush.io/docs",children:(x,f)=>{n();var h=r("Backrush Docs");o(x,h)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),Be(S),o(De,S)},$$slots:{default:!0}}))}const St=Object.freeze(Object.defineProperty({__proto__:null,default:nt,frontmatter:Ce},Symbol.toStringTag,{value:"Module"}));export{St as _,nt as a};
