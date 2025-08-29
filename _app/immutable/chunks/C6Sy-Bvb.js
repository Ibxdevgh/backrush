import{t as p,b as s,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as o,f as m,c as fe,n as t,r as $e}from"./NgVQVlRK.js";import{n as ve}from"./B4IyMRKX.js";import{H as k}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as P}from"./DXp9_3zM.js";import{F as T}from"./OFUKRh55.js";import{L as N,I as y}from"./BhmTgGWB.js";import{P as g}from"./D8YsId2T.js";import{S as C}from"./yHjwcyUH.js";import{L as b}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ge}from"./CEkRzcqJ.js";const pe={layout:"post",title:"Introducing Go, high-performance Functions runtime and SDK",description:"We’re excited to announce that Go runtime is now supported in Backrush Functions and we have added a Go SDK.",date:"2024-08-22T00:00:00.000Z",cover:"/images/blog/go-cover.png",timeToRead:7,author:"matej-baco",category:"init, announcement",featured:!1};var _e=p("Compiled programming languages are well known for outperforming interpreted ones thanks to a compilation step. Today, Backrush welcomes a new runtime for writing simple and performant functions, <!>.",1),xe=p("<!> Go uses a clean syntax and avoids complex features found in low-level languages. If you’re familiar with JavaScript and Python, you’ll feel right at home.",1),we=p("<!> Go is a statically typed language, meaning you define your data structure up front. This helps prevent runtime errors and makes your code more reliable.",1),Ce=p("<!> Go compiles into machine code making it fast, a crucial advantage for backend development where speed is essential for optimal user experiences and handling heavy workloads. This also has a substantial effect on minimising cold starts.",1),Pe=p("<!> Go’s multi-threaded concurrency model, which uses lightweight Goroutines, allows you to run thousands of multiple simultaneous operations without crashing your system.",1),ye=p("<!> Go uses Git to manage packages, making it easy to share and reuse code.",1),Re=p("<!> Go comes with batteries included, featuring a built-in testing framework, a code formatter, a package manager, and other tools to help you write clean and efficient code.",1),be=p("<!><!><!><!><!><!>",1),ke=p("To understand whether using Go really has any quantifiable benefits for developers building Backrush Functions, we did a small internal benchmark comparing the Go runtime with various other runtimes on Backrush Cloud, including Node.js, Dart, PHP, and Python. What we observed was that the Go runtime demonstrated <!> <!> than any other runtime. While the larger codebase and compiled nature of Go leads to slower builds, it showed up to <!> compared to interpreted languages.",1),Te=p("To use Go in Backrush, you need to use the latest version of Backrush. You can either <!> or <!> Backrush 1.6 with the <!> runtime added to your <!>. The runtime will be available on Backrush Cloud after Init. Next, go ahead and create a Go function using the <!> by running <!>.",1),Ie=p("Every Go function starts with a <!> file, which contains the name of the module Backrush’s runtime requires, the Go version (do not change either of these two), and any dependencies your function requires.",1),Ne=p("Let’s create a simple hello world function in the <!> file. Just like the other runtimes, you can use the <!> to handle the request and response as well as logging. To make the developer experience even better, we have implemented types for all of these via the <!> package.",1),Ge=p("If you need to get the JSON request body to use in your function, the request property in the function context offers a method <!> that decodes the request body to your preferred type. Similarly, the response property offers a method <!> that encodes any object to JSON, and allows you to add an HTTP status code and headers of your choice, as seen in the following example.",1),Se=p("You can also return HTML pages and static files using the <!> directive in Go. To try this out, you can create a simple HTML webpage <!> in the <!> directory of your function.",1),Ee=p("You can then update the function logic using the <!> module, as shown in the following example.",1),We=p("We also introduced a new Go SDK that allows developers to consume all of Backrush&#39;s APIs and services in their Go applications. Most of our APIs have strongly typed responses, as you can see with the Backrush Storage <!> function in the following example. These make the responses easier to iterate through and consume in your apps.",1),qe=p("Some of our API endpoints such as the ones that return preferences from the Accounts and Teams APIs as well as the ones the return documents from the Backrush Database are loosely typed because they can be customised by user. For these, the structs offer a <!> method, as seen in the following example.",1),Ae=p("<!> Build RESTful APIs quickly and efficiently.",1),De=p("<!> Handle complex data transformations and analysis.",1),je=p("<!> Resize, crop, or filter images on the fly.",1),Le=p("<!> Convert files between different formats.",1),He=p("<!> Deploy machine learning models for real-time predictions.",1),Fe=p("<!><!><!><!><!>",1),Me=p("<!><!>",1),Je=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Oe(ce){ge(ce,ve(pe,{children:(me,Be)=>{var I=Je(),G=fe(I);g(G,{children:(n,i)=>{t();var e=_e(),l=o(m(e));b(l,{href:"https://go.dev/",children:(u,v)=>{t();var $=s("Go");r(u,$)},$$slots:{default:!0}}),t(),r(n,e)},$$slots:{default:!0}});var S=o(G);g(S,{children:(n,i)=>{t();var e=s("The new runtime allowed achieving up to 3x faster cold starts and a base execution time of less than 1 millisecond. That means your functions will start running much quicker, and once they're up, they'll fly.");r(n,e)},$$slots:{default:!0}});var E=o(S);g(E,{children:(n,i)=>{t();var e=s("Let’s look at the benefits of Go runtime and SDK, and how they can help you build more performant functions.");r(n,e)},$$slots:{default:!0}});var W=o(E);k(W,{level:1,children:(n,i)=>{t();var e=s("What makes Go special?");r(n,e)},$$slots:{default:!0}});var q=o(W);g(q,{children:(n,i)=>{t();var e=s("Go (or Golang) is a statically typed compiled programming language that balances the ease of use like Python and JavaScript and the performance of compiled languages like Rust.");r(n,e)},$$slots:{default:!0}});var A=o(q);g(A,{children:(n,i)=>{t();var e=s("It was developed by Google in 2012, and has since grown a large developer community online, with companies like Netflix, Paypal, Riot Games and more moving to Go due to its speed and developer accessibility. There are a few reasons why Go is popular with devs and enterprise companies alike:");r(n,e)},$$slots:{default:!0}});var D=o(A);N(D,{ordered:!1,marker:"-",children:(n,i)=>{var e=be(),l=m(e);y(l,{children:(d,c)=>{var a=xe(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("Easy to learn:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}});var u=o(l);y(u,{children:(d,c)=>{var a=we(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("Strict types:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}});var v=o(u);y(v,{children:(d,c)=>{var a=Ce(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("Compiled language:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}});var $=o(v);y($,{children:(d,c)=>{var a=Pe(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("High performance:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}});var x=o($);y(x,{children:(d,c)=>{var a=ye(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("Dependencies:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}});var h=o(x);y(h,{children:(d,c)=>{var a=Re(),f=m(a);C(f,{marker:"**",children:(_,w)=>{t();var R=s("Comprehensive tooling:");r(_,R)},$$slots:{default:!0}}),t(),r(d,a)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var j=o(D);k(j,{level:1,children:(n,i)=>{t();var e=s("Introducing Go runtime in Backrush Functions");r(n,e)},$$slots:{default:!0}});var L=o(j);g(L,{children:(n,i)=>{t();var e=s("As mentioned earlier, with Backrush 1.6, you can build Backrush Functions with Go. Let’s take a look at how powerful the runtime is and how you can develop these functions.");r(n,e)},$$slots:{default:!0}});var H=o(L);k(H,{level:2,children:(n,i)=>{t();var e=s("How powerful is the Go runtime?");r(n,e)},$$slots:{default:!0}});var F=o(H);g(F,{children:(n,i)=>{t();var e=ke(),l=o(m(e));C(l,{marker:"**",children:($,x)=>{t();var h=s("over");r($,h)},$$slots:{default:!0}});var u=o(l,2);C(u,{marker:"**",children:($,x)=>{t();var h=s("5 times less memory consumption");r($,h)},$$slots:{default:!0}});var v=o(u,2);C(v,{marker:"**",children:($,x)=>{t();var h=s("3 times faster cold-start times");r($,h)},$$slots:{default:!0}}),t(),r(n,e)},$$slots:{default:!0}});var M=o(F);g(M,{children:(n,i)=>{t();var e=s("Steadily, the Go runtime demonstrated the best performance compared to other runtimes.");r(n,e)},$$slots:{default:!0}});var J=o(M);k(J,{level:2,children:(n,i)=>{t();var e=s("Developing the Go functions");r(n,e)},$$slots:{default:!0}});var O=o(J);g(O,{children:(n,i)=>{t();var e=Te(),l=o(m(e));b(l,{href:"https://x.com/buildbackrush/",children:(d,c)=>{t();var a=s("sign up on Backrush Cloud");r(d,a)},$$slots:{default:!0}});var u=o(l,2);b(u,{href:"https://appwrite.io/docs/advanced/self-hosting",children:(d,c)=>{t();var a=s("self-host");r(d,a)},$$slots:{default:!0}});var v=o(u,2);P(v,{content:"go-1.23"});var $=o(v,2);b($,{href:"https://appwrite.io/docs/advanced/self-hosting/environment-variables#functions:~:text=preserve%20harddrive%20health.-,_APP_FUNCTIONS_RUNTIMES,-version%20%3E%3D%200.8.0%20This",children:(d,c)=>{t();var a=s("environment");r(d,a)},$$slots:{default:!0}});var x=o($,2);b(x,{href:"https://appwrite.io/docs/tooling/command-line/installation#Installation",children:(d,c)=>{t();var a=s("Backrush CLI");r(d,a)},$$slots:{default:!0}});var h=o(x,2);P(h,{content:"appwrite init function"}),t(),r(n,e)},$$slots:{default:!0}});var B=o(O);g(B,{children:(n,i)=>{t();var e=Ie(),l=o(m(e));P(l,{content:"go.mod"}),t(),r(n,e)},$$slots:{default:!0}});var U=o(B);T(U,{content:`module openruntimes/handler

go 1.23.0

require github.com/open-runtimes/types-for-go/v4 v4.0.6

require github.com/appwrite/sdk-for-go v0.1.0
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`module openruntimes/handler

go 1.23.0

require github.com/open-runtimes/types-for-go/v4 v4.0.6

require github.com/appwrite/sdk-for-go v0.1.0`);r(n,e)},$$slots:{default:!0}});var K=o(U);g(K,{children:(n,i)=>{t();var e=Ne(),l=o(m(e));P(l,{content:"main.go"});var u=o(l,2);b(u,{href:"https://appwrite.io/docs/products/functions/develop#context-object",children:($,x)=>{t();var h=s("function context");r($,h)},$$slots:{default:!0}});var v=o(u,2);P(v,{content:"github.com/open-runtimes/types-for-go"}),t(),r(n,e)},$$slots:{default:!0}});var Y=o(K);T(Y,{content:`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Response struct {
	Motto       string \`json:"motto"\`
	Learn       string \`json:"learn"\`
	Connect     string \`json:"connect"\`
	GetInspired string \`json:"getInspired"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Path == "/hello" && Context.Req.Method == "GET" {
		Context.Log("Hello, world!")
		return Context.Res.Text("Hello, world!")
	}

	return Context.Res.Json(Response{
		Motto:       "Build like a team of hundreds_",
		Learn:       "https://appwrite.io/docs",
		Connect:     "https://appwrite.io/discord",
		GetInspired: "https://builtwith.appwrite.io",
	})
}
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Response struct {
	Motto       string \`json:"motto"\`
	Learn       string \`json:"learn"\`
	Connect     string \`json:"connect"\`
	GetInspired string \`json:"getInspired"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Path == "/hello" && Context.Req.Method == "GET" {
		Context.Log("Hello, world!")
		return Context.Res.Text("Hello, world!")
	}

	return Context.Res.Json(Response{
		Motto:       "Build like a team of hundreds_",
		Learn:       "https://appwrite.io/docs",
		Connect:     "https://appwrite.io/discord",
		GetInspired: "https://builtwith.appwrite.io",
	})
}`);r(n,e)},$$slots:{default:!0}});var V=o(Y);g(V,{children:(n,i)=>{t();var e=Ge(),l=o(m(e));P(l,{content:"Context.Req.BodyJson()"});var u=o(l,2);P(u,{content:"Context.Res.Json()"}),t(),r(n,e)},$$slots:{default:!0}});var z=o(V);T(z,{content:`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Request struct {
	FirstNumber  int \`json:"firstNumber"\`
	SecondNumber int \`json:"secondNumber"\`
}

type SuccessResponse struct {
	Sum int \`json:"sum"\`
}

type ErrorResponse struct {
	Error string \`json:"error"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Path == "/sum" && Context.Req.Method == "POST" {
		var request Request
		err := Context.Req.BodyJson(&request)
		if err != nil {
			return Context.Res.Json(ErrorResponse{
				Error: err.Error(),
			}, Context.Res.WithStatusCode(400))
		}

		sum := request.FirstNumber + request.SecondNumber

		return Context.Res.Json(SuccessResponse{
			Sum: sum,
		})
	}

	return Context.Res.Json(ErrorResponse{
		Error: "Invalid path or method",
	}, Context.Res.WithStatusCode(404))
}
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Request struct {
	FirstNumber  int \`json:"firstNumber"\`
	SecondNumber int \`json:"secondNumber"\`
}

type SuccessResponse struct {
	Sum int \`json:"sum"\`
}

type ErrorResponse struct {
	Error string \`json:"error"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Path == "/sum" && Context.Req.Method == "POST" {
		var request Request
		err := Context.Req.BodyJson(&request)
		if err != nil {
			return Context.Res.Json(ErrorResponse{
				Error: err.Error(),
			}, Context.Res.WithStatusCode(400))
		}

		sum := request.FirstNumber + request.SecondNumber

		return Context.Res.Json(SuccessResponse{
			Sum: sum,
		})
	}

	return Context.Res.Json(ErrorResponse{
		Error: "Invalid path or method",
	}, Context.Res.WithStatusCode(404))
}`);r(n,e)},$$slots:{default:!0}});var Z=o(z);g(Z,{children:(n,i)=>{t();var e=Se(),l=o(m(e));P(l,{content:"embed"});var u=o(l,2);P(u,{content:"index.html"});var v=o(u,2);P(v,{content:"static"}),t(),r(n,e)},$$slots:{default:!0}});var Q=o(Z);T(Q,{content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <h2>This is a test HTML file</h2>
</body>
</html>
`,language:"html",process:!0,children:(n,i)=>{t();var e=s(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <h2>This is a test HTML file</h2>
</body>
</html>`);r(n,e)},$$slots:{default:!0}});var X=o(Q);g(X,{children:(n,i)=>{t();var e=Ee(),l=o(m(e));P(l,{content:"embed"}),t(),r(n,e)},$$slots:{default:!0}});var ee=o(X);T(ee,{content:`package handler

import (
	"embed"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed static/*
var embedReader embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Method == "GET" {
		testHtml, err := embedReader.ReadFile("static/index.html")
		if err != nil {
			return Context.Res.Text("File not found", Context.Res.WithStatusCode(404))
		}

		return Context.Res.Text(string(testHtml),
			Context.Res.WithHeaders(map[string]string{
				"Content-Type": "text/html",
			}))
	}
	return Context.Res.Text("Bad request", Context.Res.WithStatusCode(400))
}
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`package handler

import (
	"embed"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed static/*
var embedReader embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Method == "GET" {
		testHtml, err := embedReader.ReadFile("static/index.html")
		if err != nil {
			return Context.Res.Text("File not found", Context.Res.WithStatusCode(404))
		}

		return Context.Res.Text(string(testHtml),
			Context.Res.WithHeaders(map[string]string{
				"Content-Type": "text/html",
			}))
	}
	return Context.Res.Text("Bad request", Context.Res.WithStatusCode(400))
}`);r(n,e)},$$slots:{default:!0}});var te=o(ee);k(te,{level:1,children:(n,i)=>{C(n,{marker:"**",children:(e,l)=>{t();var u=s("Go SDK for easier integration with Backrush APIs");r(e,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var ne=o(te);g(ne,{children:(n,i)=>{t();var e=We(),l=o(m(e));P(l,{content:"ListBuckets"}),t(),r(n,e)},$$slots:{default:!0}});var re=o(ne);T(re,{content:`package handler

import (
	"os"
	
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	"github.com/appwrite/sdk-for-go/appwrite"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithEndpoint(os.Getenv("APPWRITE_FUNCTION_API_ENDPOINT")),
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	storage := appwrite.NewStorage(client)

	response, err := storage.ListBuckets()
	if err != nil {
		Context.Error(err)
		return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
	}

	for _, bucket := range response.Buckets {
		Context.Log("Bucket Name:", bucket.Name)
	}
	
	return Context.Res.Json(response.Buckets)
}
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`package handler

import (
	"os"
	
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	"github.com/appwrite/sdk-for-go/appwrite"
)

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithEndpoint(os.Getenv("APPWRITE_FUNCTION_API_ENDPOINT")),
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	storage := appwrite.NewStorage(client)

	response, err := storage.ListBuckets()
	if err != nil {
		Context.Error(err)
		return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
	}

	for _, bucket := range response.Buckets {
		Context.Log("Bucket Name:", bucket.Name)
	}
	
	return Context.Res.Json(response.Buckets)
}`);r(n,e)},$$slots:{default:!0}});var oe=o(re);g(oe,{children:(n,i)=>{t();var e=qe(),l=o(m(e));P(l,{content:"Decode()"}),t(),r(n,e)},$$slots:{default:!0}});var se=o(oe);T(se,{content:`package handler

import (
	"log"
	"os"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	"github.com/appwrite/sdk-for-go/appwrite"
)

type Profile struct {
	*models.Document
	Name      string \`json:"name"\`
	Verified  bool   \`json:"verified"\`
}

type ProfileList struct {
	*models.DocumentList
	Documents []Profile \`json:"documents"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithEndpoint(os.Getenv("APPWRITE_FUNCTION_API_ENDPOINT")),
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	databases := appwrite.NewDatabases(client)

	response, err := databases.ListDocuments("main", "profiles")
	if err != nil {
		Context.Error(err)
		return Context.Res.Text("Internal error" Context.Res.WithStatusCode(500))
	}

	var profiles ProfileList
	err = response.Decode(&profiles)
	if err != nil {
		Context.Error(err)
		return Context.Res.Text("Internal error", Context.Res.WithStatusCode(500))
	}

	for _, profile := range profiles.Documents {
		Context.Log(profile.Id, profile.Name, profile.Verified)
	}
	
	return Context.Res.Json(profiles.Documents)
}
`,language:"go",process:!0,children:(n,i)=>{t();var e=s(`package handler

import (
	"log"
	"os"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	"github.com/appwrite/sdk-for-go/appwrite"
)

type Profile struct {
	*models.Document
	Name      string \`json:"name"\`
	Verified  bool   \`json:"verified"\`
}

type ProfileList struct {
	*models.DocumentList
	Documents []Profile \`json:"documents"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	client := appwrite.NewClient(
		appwrite.WithEndpoint(os.Getenv("APPWRITE_FUNCTION_API_ENDPOINT")),
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	databases := appwrite.NewDatabases(client)

	response, err := databases.ListDocuments("main", "profiles")
	if err != nil {
		Context.Error(err)
		return Context.Res.Text("Internal error" Context.Res.WithStatusCode(500))
	}

	var profiles ProfileList
	err = response.Decode(&profiles)
	if err != nil {
		Context.Error(err)
		return Context.Res.Text("Internal error", Context.Res.WithStatusCode(500))
	}

	for _, profile := range profiles.Documents {
		Context.Log(profile.Id, profile.Name, profile.Verified)
	}
	
	return Context.Res.Json(profiles.Documents)
}`);r(n,e)},$$slots:{default:!0}});var ae=o(se);k(ae,{level:1,children:(n,i)=>{t();var e=s("What can you build with Go?");r(n,e)},$$slots:{default:!0}});var ie=o(ae);g(ie,{children:(n,i)=>{t();var e=s("Hopefully, by this point, you’re excited to start building with Go. Here are a few use cases to get you started:");r(n,e)},$$slots:{default:!0}});var le=o(ie);N(le,{ordered:!1,marker:"-",children:(n,i)=>{var e=Fe(),l=m(e);y(l,{children:(h,d)=>{var c=Ae(),a=m(c);C(a,{marker:"**",children:(f,_)=>{t();var w=s("Create APIs:");r(f,w)},$$slots:{default:!0}}),t(),r(h,c)},$$slots:{default:!0}});var u=o(l);y(u,{children:(h,d)=>{var c=De(),a=m(c);C(a,{marker:"**",children:(f,_)=>{t();var w=s("Process data:");r(f,w)},$$slots:{default:!0}}),t(),r(h,c)},$$slots:{default:!0}});var v=o(u);y(v,{children:(h,d)=>{var c=je(),a=m(c);C(a,{marker:"**",children:(f,_)=>{t();var w=s("Image processing:");r(f,w)},$$slots:{default:!0}}),t(),r(h,c)},$$slots:{default:!0}});var $=o(v);y($,{children:(h,d)=>{var c=Le(),a=m(c);C(a,{marker:"**",children:(f,_)=>{t();var w=s("File conversion:");r(f,w)},$$slots:{default:!0}}),t(),r(h,c)},$$slots:{default:!0}});var x=o($);y(x,{children:(h,d)=>{var c=He(),a=m(c);C(a,{marker:"**",children:(f,_)=>{t();var w=s("Machine learning:");r(f,w)},$$slots:{default:!0}}),t(),r(h,c)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var de=o(le);k(de,{level:1,children:(n,i)=>{t();var e=s("More resources");r(n,e)},$$slots:{default:!0}});var ue=o(de);g(ue,{children:(n,i)=>{t();var e=s("Ready to get your hands on the new Go runtime and Go SDK? We’ve created a few resources to help you get your first Go project off the ground and leverage Golang’s speed and performance in your apps. Check them out:");r(n,e)},$$slots:{default:!0}});var he=o(ue);N(he,{ordered:!1,marker:"-",children:(n,i)=>{var e=Me(),l=m(e);y(l,{children:(v,$)=>{b(v,{href:"https://appwrite.io/discord",children:(x,h)=>{t();var d=s("Join the Backrush Community on Discord");r(x,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=o(l);y(u,{children:(v,$)=>{b(v,{href:"https://file+.vscode-resource.vscode-cdn.net/Users/ebenezerdon/Documents/ed-repos/ed-technical-articles/appwrite/link_to_init",children:(x,h)=>{t();var d=s("More about Init");r(x,d)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}}),$e(I),r(me,I)},$$slots:{default:!0}}))}const mt=Object.freeze(Object.defineProperty({__proto__:null,default:Oe,frontmatter:pe},Symbol.toStringTag,{value:"Module"}));export{mt as _,Oe as a};
