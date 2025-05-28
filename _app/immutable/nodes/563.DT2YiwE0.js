import{t as n,b as a,a as e}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as mt,s as t,f as s,n as o,r as ft}from"../chunks/NgVQVlRK.js";import{n as _t}from"../chunks/B4IyMRKX.js";import{S}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as tt,a as et}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as W}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as y}from"../chunks/DXp9_3zM.js";import{F as Y}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as m}from"../chunks/D8YsId2T.js";import{S as V}from"../chunks/yHjwcyUH.js";import{L as G}from"../chunks/yh4_9ChP.js";import{T as vt}from"../chunks/D8BqvLkQ.js";import{T as gt,a as B,b as ot,c as ht,d as D}from"../chunks/BpU_IltG.js";import{A as bt}from"../chunks/CqOphJLh.js";const wt={layout:"article",title:"Start with Go",description:"Integrating Backrush with your Go backend application is a quick and simple process. Get your backend up and running with our step-by-step guide.",difficulty:"beginner",readtime:5,back:"/docs/quick-starts"};var Pt=n("Head to the <!>.",1),Ct=n("Then, under <!>, add an <!> with the following scopes.",1),Dt=n("<!><!><!>",1),It=n("Allows API key to create, update, and delete <!>.",1),kt=n("<!><!><!>",1),Tt=n("Allows API key to create, update, and delete <!>.",1),yt=n("<!><!><!>",1),At=n("Allows API key to create, update, and delete <!>.",1),xt=n("<!><!><!>",1),jt=n("Allows API key to read <!>.",1),qt=n("<!><!><!>",1),Kt=n("Allows API key to create, update, and delete <!>.",1),Et=n("<!><!><!>",1),Rt=n("<!><!><!><!><!>",1),Lt=n("<!><!>",1),Ot=n("<!><!><!><!><!><!><!><!><!>",1),St=n("<!><!>",1),Ut=n("<!><!>",1),Yt=n("Find your project ID in the <!> page. Also, click on the <!> button to find the API key that was created earlier.",1),Wt=n("Create a new file called <!>, initialize a function, and initialize the Backrush Client. Replace <!> with your project ID and <!> with your API key. Import the Backrush dependencies for backrush, client, databases, and models.",1),Gt=n("<!><!><!><!><!>",1),Bt=n("Once the Backrush Client is initialized, create a function to configure a todo collection. Import the id Backrush dependency by adding <!> to the imported dependencies list.",1),Nt=n("<!><!>",1),Jt=n("<!><!>",1),zt=n("Make sure to update <!> with the functions you created. Your <!> function should look something like this:",1),Ft=n("<!><!><!><!>",1),Ht=n("Run your project with <!> and view the response in your console.",1),Mt=n("<article><!><!><!><!><!><!><!><!><!></article>");function we(ct){bt(ct,_t(wt,{children:(ut,Vt)=>{var Q=Mt(),rt=mt(Q);m(rt,{children:(v,R)=>{o();var d=a("Learn how to set up your first Go project powered by Backrush.");e(v,d)},$$slots:{default:!0}});var at=t(rt);S(at,{id:"step-1",step:1,title:"Create project",children:(v,R)=>{var d=Ot(),c=s(d);m(c,{children:(l,I)=>{o();var p=Pt(),P=t(s(p));G(P,{href:"https://cloud.backrush.io/console",children:(N,L)=>{o();var J=a("Backrush Console");e(N,J)},$$slots:{default:!0}}),o(),e(l,p)},$$slots:{default:!0}});var f=t(c);m(f,{children:(l,I)=>{o();var p=a("If this is your first time using Backrush, create an account and create your first project.");e(l,p)},$$slots:{default:!0}});var i=t(f);tt(i,{children:(l,I)=>{m(l,{children:(p,P)=>{W(p,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var w=t(i);et(w,{children:(l,I)=>{m(l,{children:(p,P)=>{W(p,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var r=t(w);m(r,{children:(l,I)=>{o();var p=Ct(),P=t(s(p));V(P,{marker:"**",children:(L,J)=>{o();var O=a("Integrate with your server");e(L,O)},$$slots:{default:!0}});var N=t(P,2);V(N,{marker:"**",children:(L,J)=>{o();var O=a("API Key");e(L,O)},$$slots:{default:!0}}),o(),e(l,p)},$$slots:{default:!0}});var _=t(r);tt(_,{children:(l,I)=>{m(l,{children:(p,P)=>{W(p,{src:"/images/docs/quick-starts/dark/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var h=t(_);et(h,{children:(l,I)=>{m(l,{children:(p,P)=>{W(p,{src:"/images/docs/quick-starts/integrate-server.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var g=t(h);vt(g,{children:(l,I)=>{var p=Lt(),P=s(p);gt(P,{children:(L,J)=>{B(L,{children:(O,X)=>{var z=Dt(),F=s(z);ot(F,{width:120,children:(C,U)=>{o();var $=a("Category");e(C,$)},$$slots:{default:!0}});var H=t(F);ot(H,{children:(C,U)=>{o();var $=a("Required scopes");e(C,$)},$$slots:{default:!0}});var Z=t(H);ot(Z,{children:(C,U)=>{o();var $=a("Purpose");e(C,$)},$$slots:{default:!0}}),e(O,z)},$$slots:{default:!0}})},$$slots:{default:!0}});var N=t(P);ht(N,{children:(L,J)=>{var O=Rt(),X=s(O);B(X,{children:(C,U)=>{var $=kt(),k=s($);D(k,{children:(u,x)=>{o();var b=a("Database");e(u,b)},$$slots:{default:!0}});var T=t(k);D(T,{children:(u,x)=>{y(u,{content:"databases.write"})},$$slots:{default:!0}});var j=t(T);D(j,{children:(u,x)=>{o();var b=It(),q=t(s(b));G(q,{href:"/docs/products/databases/databases",children:(K,M)=>{o();var E=a("databases");e(K,E)},$$slots:{default:!0}}),o(),e(u,b)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}});var z=t(X);B(z,{children:(C,U)=>{var $=yt(),k=s($);D(k,{});var T=t(k);D(T,{children:(u,x)=>{y(u,{content:"collections.write"})},$$slots:{default:!0}});var j=t(T);D(j,{children:(u,x)=>{o();var b=Tt(),q=t(s(b));G(q,{href:"/docs/products/databases/collections",children:(K,M)=>{o();var E=a("collections");e(K,E)},$$slots:{default:!0}}),o(),e(u,b)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}});var F=t(z);B(F,{children:(C,U)=>{var $=xt(),k=s($);D(k,{});var T=t(k);D(T,{children:(u,x)=>{y(u,{content:"attributes.write"})},$$slots:{default:!0}});var j=t(T);D(j,{children:(u,x)=>{o();var b=At(),q=t(s(b));G(q,{href:"/docs/products/databases/collections#attributes",children:(K,M)=>{o();var E=a("attributes");e(K,E)},$$slots:{default:!0}}),o(),e(u,b)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}});var H=t(F);B(H,{children:(C,U)=>{var $=qt(),k=s($);D(k,{});var T=t(k);D(T,{children:(u,x)=>{y(u,{content:"documents.read"})},$$slots:{default:!0}});var j=t(T);D(j,{children:(u,x)=>{o();var b=jt(),q=t(s(b));G(q,{href:"/docs/products/databases/documents",children:(K,M)=>{o();var E=a("documents");e(K,E)},$$slots:{default:!0}}),o(),e(u,b)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}});var Z=t(H);B(Z,{children:(C,U)=>{var $=Et(),k=s($);D(k,{});var T=t(k);D(T,{children:(u,x)=>{y(u,{content:"documents.write"})},$$slots:{default:!0}});var j=t(T);D(j,{children:(u,x)=>{o();var b=Kt(),q=t(s(b));G(q,{href:"/docs/products/databases/documents",children:(K,M)=>{o();var E=a("documents");e(K,E)},$$slots:{default:!0}}),o(),e(u,b)},$$slots:{default:!0}}),e(C,$)},$$slots:{default:!0}}),e(L,O)},$$slots:{default:!0}}),e(l,p)},$$slots:{default:!0}});var A=t(g);m(A,{children:(l,I)=>{o();var p=a("Other scopes are optional.");e(l,p)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var nt=t(at);S(nt,{id:"step-2",step:2,title:"Create Go project",children:(v,R)=>{var d=St(),c=s(d);m(c,{children:(i,w)=>{o();var r=a("Create a go application.");e(i,r)},$$slots:{default:!0}});var f=t(c);Y(f,{content:`mkdir my-app
cd my-app
go mod init go-backrush/main
`,language:"sh",process:!0,children:(i,w)=>{o();var r=a(`mkdir my-app
cd my-app
go mod init go-backrush/main`);e(i,r)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var st=t(nt);S(st,{id:"step-3",step:3,title:"Install Backrush",children:(v,R)=>{var d=Ut(),c=s(d);m(c,{children:(i,w)=>{o();var r=a("Install the Go Backrush SDK.");e(i,r)},$$slots:{default:!0}});var f=t(c);Y(f,{content:`go get github.com/backrush/sdk-for-go
`,language:"sh",process:!0,children:(i,w)=>{o();var r=a("go get github.com/backrush/sdk-for-go");e(i,r)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var it=t(st);S(it,{id:"step-4",step:4,title:"Import Backrush",children:(v,R)=>{var d=Gt(),c=s(d);m(c,{children:(_,h)=>{o();var g=Yt(),A=t(s(g));V(A,{marker:"**",children:(I,p)=>{o();var P=a("Settings");e(I,P)},$$slots:{default:!0}});var l=t(A,2);V(l,{marker:"**",children:(I,p)=>{o();var P=a("View API Keys");e(I,P)},$$slots:{default:!0}}),o(),e(_,g)},$$slots:{default:!0}});var f=t(c);tt(f,{children:(_,h)=>{m(_,{children:(g,A)=>{W(g,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var i=t(f);et(i,{children:(_,h)=>{m(_,{children:(g,A)=>{W(g,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var w=t(i);m(w,{children:(_,h)=>{o();var g=Wt(),A=t(s(g));y(A,{content:"app.go"});var l=t(A,2);y(l,{content:"<PROJECT_ID>"});var I=t(l,2);y(I,{content:"<YOUR_API_KEY>"}),o(),e(_,g)},$$slots:{default:!0}});var r=t(w);Y(r,{content:`package main

import (
	"github.com/backrush/sdk-for-go/backrush"
	"github.com/backrush/sdk-for-go/client"
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/models"
)

var (
	backrushClient    client.Client
	todoDatabase      *models.Database
	todoCollection    *models.Collection
	backrushDatabases *databases.Databases
)

func main() {
	backrushClient = backrush.NewClient(
		backrush.WithProject("<PROJECT_KEY>"),
		backrush.WithKey("<API_KEY>"),
	)
}
`,language:"go",process:!0,children:(_,h)=>{o();var g=a(`package main

import (
	"github.com/backrush/sdk-for-go/backrush"
	"github.com/backrush/sdk-for-go/client"
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/models"
)

var (
	backrushClient    client.Client
	todoDatabase      *models.Database
	todoCollection    *models.Collection
	backrushDatabases *databases.Databases
)

func main() {
	backrushClient = backrush.NewClient(
		backrush.WithProject("<PROJECT_KEY>"),
		backrush.WithKey("<API_KEY>"),
	)
}`);e(_,g)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var dt=t(it);S(dt,{id:"step-5",step:5,title:"Initialize database",children:(v,R)=>{var d=Nt(),c=s(d);m(c,{children:(i,w)=>{o();var r=Bt(),_=t(s(r));y(_,{content:'"github.com/backrush/sdk-for-go/id"'}),o(),e(i,r)},$$slots:{default:!0}});var f=t(c);Y(f,{content:`func prepareDatabase() {
	backrushDatabases = backrush.NewDatabases(backrushClient)

	todoDatabase, _ = backrushDatabases.Create(
		id.Unique(),
		"TodosDB",
	)

	todoCollection, _ = backrushDatabases.CreateCollection(
		todoDatabase.Id,
		id.Unique(),
		"Todos",
	)

	backrushDatabases.CreateStringAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"title",
		255,
		true,
	)

	backrushDatabases.CreateStringAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"description",
		255,
		false,
	)

	backrushDatabases.CreateBooleanAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"isComplete",
		true,
	)
}
`,language:"go",process:!0,children:(i,w)=>{o();var r=a(`func prepareDatabase() {
	backrushDatabases = backrush.NewDatabases(backrushClient)

	todoDatabase, _ = backrushDatabases.Create(
		id.Unique(),
		"TodosDB",
	)

	todoCollection, _ = backrushDatabases.CreateCollection(
		todoDatabase.Id,
		id.Unique(),
		"Todos",
	)

	backrushDatabases.CreateStringAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"title",
		255,
		true,
	)

	backrushDatabases.CreateStringAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"description",
		255,
		false,
	)

	backrushDatabases.CreateBooleanAttribute(
		todoDatabase.Id,
		todoCollection.Id,
		"isComplete",
		true,
	)
}`);e(i,r)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var lt=t(dt);S(lt,{id:"step-6",step:6,title:"Add documents",children:(v,R)=>{var d=Jt(),c=s(d);m(c,{children:(i,w)=>{o();var r=a("Create a function to add some mock data to your new collection.");e(i,r)},$$slots:{default:!0}});var f=t(c);Y(f,{content:`func seedDatabase() {
	testTodo1 := map[string]interface{}{
		"title":       "Buy apples",
		"description": "At least 2KGs",
		"isComplete":  true,
	}

	testTodo2 := map[string]interface{}{
		"title":      "Wash the apples",
		"isComplete": true,
	}

	testTodo3 := map[string]interface{}{
		"title":       "Cut the apples",
		"description": "Don't forget to pack them in a box",
		"isComplete":  false,
	}

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo1,
	)

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo2,
	)

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo3,
	)
}
`,language:"go",process:!0,children:(i,w)=>{o();var r=a(`func seedDatabase() {
	testTodo1 := map[string]interface{}{
		"title":       "Buy apples",
		"description": "At least 2KGs",
		"isComplete":  true,
	}

	testTodo2 := map[string]interface{}{
		"title":      "Wash the apples",
		"isComplete": true,
	}

	testTodo3 := map[string]interface{}{
		"title":       "Cut the apples",
		"description": "Don't forget to pack them in a box",
		"isComplete":  false,
	}

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo1,
	)

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo2,
	)

	backrushDatabases.CreateDocument(
		todoDatabase.Id,
		todoCollection.Id,
		id.Unique(),
		testTodo3,
	)
}`);e(i,r)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var pt=t(lt);S(pt,{id:"step-7",step:7,title:"Retrieve documents",children:(v,R)=>{var d=Ft(),c=s(d);m(c,{children:(r,_)=>{o();var h=a("Create a function to retrieve the mock todo data.");e(r,h)},$$slots:{default:!0}});var f=t(c);Y(f,{content:`type Todo struct {
	Title       string \`json:"title"\`
	Description string \`json:"description"\`
	IsComplete  bool   \`json:"isComplete"\`
}

type TodoList struct {
	*models.DocumentList
	Documents []Todo \`json:"documents"\`
}

func getTodos() {
	todoResponse, _ := backrushDatabases.ListDocuments(
		todoDatabase.Id,
		todoCollection.Id,
	)

	var todos TodoList
	todoResponse.Decode(&todos)

	for _, todo := range todos.Documents {
		fmt.Printf("Title: %s\\nDescription: %s\\nIs Todo Complete: %t\\n\\n", todo.Title, todo.Description, todo.IsComplete)
	}
}
`,language:"go",process:!0,children:(r,_)=>{o();var h=a(`type Todo struct {
	Title       string \`json:"title"\`
	Description string \`json:"description"\`
	IsComplete  bool   \`json:"isComplete"\`
}

type TodoList struct {
	*models.DocumentList
	Documents []Todo \`json:"documents"\`
}

func getTodos() {
	todoResponse, _ := backrushDatabases.ListDocuments(
		todoDatabase.Id,
		todoCollection.Id,
	)

	var todos TodoList
	todoResponse.Decode(&todos)

	for _, todo := range todos.Documents {
		fmt.Printf("Title: %s\\nDescription: %s\\nIs Todo Complete: %t\\n\\n", todo.Title, todo.Description, todo.IsComplete)
	}
}`);e(r,h)},$$slots:{default:!0}});var i=t(f);m(i,{children:(r,_)=>{o();var h=zt(),g=t(s(h));y(g,{content:"main()"});var A=t(g,2);y(A,{content:"main()"}),o(),e(r,h)},$$slots:{default:!0}});var w=t(i);Y(w,{content:`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
	"github.com/backrush/sdk-for-go/client"
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/id"
	"github.com/backrush/sdk-for-go/models"
)

var (
	backrushClient    client.Client
	todoDatabase      *models.Database
	todoCollection    *models.Collection
	backrushDatabases *databases.Databases
)

func main() {
	backrushClient = backrush.NewClient(
		backrush.WithProject("<PROJECT_KEY>"),
		backrush.WithKey("<API_KEY>"),
	)

	prepareDatabase()
	seedDatabase()
	getTodos()
}
`,language:"go",process:!0,children:(r,_)=>{o();var h=a(`package main

import (
	"fmt"

	"github.com/backrush/sdk-for-go/backrush"
	"github.com/backrush/sdk-for-go/client"
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/id"
	"github.com/backrush/sdk-for-go/models"
)

var (
	backrushClient    client.Client
	todoDatabase      *models.Database
	todoCollection    *models.Collection
	backrushDatabases *databases.Databases
)

func main() {
	backrushClient = backrush.NewClient(
		backrush.WithProject("<PROJECT_KEY>"),
		backrush.WithKey("<API_KEY>"),
	)

	prepareDatabase()
	seedDatabase()
	getTodos()
}`);e(r,h)},$$slots:{default:!0}}),e(v,d)},$$slots:{default:!0}});var $t=t(pt);S($t,{id:"step-8",step:8,title:"All set",children:(v,R)=>{m(v,{children:(d,c)=>{o();var f=Ht(),i=t(s(f));y(i,{content:"go run ."}),o(),e(d,f)},$$slots:{default:!0}})},$$slots:{default:!0}}),ft(Q),e(ut,Q)},$$slots:{default:!0}}))}export{we as component};
