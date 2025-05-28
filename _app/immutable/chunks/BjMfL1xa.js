import{t as c,b as a,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as be,s as n,f as h,n as o,r as xe}from"./NgVQVlRK.js";import{n as Ce}from"./B4IyMRKX.js";import{H as g}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as u}from"./DXp9_3zM.js";import{F as _}from"./OFUKRh55.js";import{L as _e,I as R}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{L as b}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as ye}from"./CEkRzcqJ.js";const fe={layout:"post",title:"3 things you can build with the Go runtime",description:"Explore a few use cases of how to leverage Go's speed in your app.",date:"2024-08-22T00:00:00.000Z",cover:"/images/blog/building-with-go-cover.png",timeToRead:8,author:"aditya-oberai",category:"product",featured:!1};var Re=c("Our Go runtime (just like our other runtimes) has been developed by our team and is <!>, which allows a simpler feedback and contribution mechanism and enables improvement of the runtime at a much higher pace.",1),we=c("With our latest release, Backrush has released support for <!>, allowing users to test and debug their Backrush Functions on their devices without deploying to an Backrush instance. For the Go runtime, we have also released a module containing all the necessary types for the Functions runtime, making it even easier to develop Go-based Backrush Functions in your preferred code editor.",1),Ie=c("To use Go in Backrush, you need to use the latest version of Backrush. You can either <!> or <!> Backrush 1.6 with the <!> runtime added to your <!>. The runtime will be available on Backrush Cloud after Init. Next, go ahead and create a Go function using the <!> by running <!>.",1),Pe=c("To do this, we must first add the <!> dependency to our project’s <!> file.",1),Ae=c("Then, we can use it to create our chatbot function logic in the <!> file, where we get the prompt from our request body, send it to the OpenAI API (GPT-3.5 Turbo model), and return a response to the client.",1),Te=c("You can then deploy this function using the <!> command.",1),Ee=c("For this, the first thing we do is create a <!> directory in the function folder and add a file, <!> with the contents of our resume. You can <!> if you’d like.",1),qe=c("Next, create our function logic in the <!> file, where we return this content with the appropriate headers so that a browser reads it as an HTML page.",1),Ue=c("You can then deploy this function using the <!> command.",1),De=c("To build this function, create a <!> directory in the function folder and add a file <!>. Here, we will add the necessary functions to initialize our Backrush database.",1),Ge=c("After that, we create the function logic in the <!> file, where each <!> request stores the shortened URL path and the relevant long URL in the Backrush database, and each <!> request to the saved (shortened) URL path redirects the user to the relevant long URL.",1),Be=c("You can then deploy this function using the <!> command.",1),Le=c("After deployment, go to the Settings tab on the Function page in your Backrush project and enable the following scopes for the dynamic API key: <!>, <!>, <!>, <!>, <!>, <!>, <!>, <!>,",1),Se=c("With that, you can see a few glimpses of what the Go runtime of Backrush Functions can help you achieve. You can also find the function code for the examples shared above in our <!>.",1),ke=c("<!><!><!>",1),We=c("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Me(ge){ye(ge,Ce(fe,{children:(ve,Fe)=>{var y=We(),w=be(y);d(w,{children:(t,s)=>{o();var e=a("In the last few years, Golang (or Go) has grown to become one of the most popular programming languages for developers building cloud-native applications. With Backrush 1.6, we have introduced a new runtime to let developers build Backrush Functions with Go.");r(t,e)},$$slots:{default:!0}});var I=n(w);g(I,{level:1,children:(t,s)=>{o();var e=a("How Backrush Functions and Go complement each other");r(t,e)},$$slots:{default:!0}});var P=n(I);d(P,{children:(t,s)=>{o();var e=a("There are several reasons why Backrush Functions and Go form a rather handy option for your product development toolkit:");r(t,e)},$$slots:{default:!0}});var A=n(P);g(A,{level:2,children:(t,s)=>{o();var e=a("Highly performant (due to compiled nature)");r(t,e)},$$slots:{default:!0}});var T=n(A);d(T,{children:(t,s)=>{o();var e=a("In our internal benchmark, while the larger codebase and compiled nature of Go leads to slower builds, our Go runtime showed up to 3 times faster cold-start times compared to interpreted languages.  Additionally, it demonstrated the highest performance in requests per second and 5 times lesser memory usage than several of our other runtimes, including Node.js, Deno, Ruby, and Python.");r(t,e)},$$slots:{default:!0}});var E=n(T);g(E,{level:2,children:(t,s)=>{o();var e=a("Open-source runtime(s)");r(t,e)},$$slots:{default:!0}});var q=n(E);d(q,{children:(t,s)=>{o();var e=Re(),i=n(h(e));b(i,{href:"https://github.com/open-runtimes/open-runtimes/tree/main/runtimes/go",children:(l,m)=>{o();var p=a("open-sourced");r(l,p)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var U=n(q);g(U,{level:2,children:(t,s)=>{o();var e=a("Event-driven nature");r(t,e)},$$slots:{default:!0}});var D=n(U);d(D,{children:(t,s)=>{o();var e=a("Backrush Functions can be executed by various types of events, which allows you to integrate them into your applications in many different ways. These events include all HTTP actions (to consume like a REST API), CRON schedules (to run them on set time periods), and any events across the various Backrush products in your project (for example, user creation, document deletion, or file upload).");r(t,e)},$$slots:{default:!0}});var G=n(D);g(G,{level:2,children:(t,s)=>{o();var e=a("Global environment variables");r(t,e)},$$slots:{default:!0}});var B=n(G);d(B,{children:(t,s)=>{o();var e=a("Aside from environment variables at the function level, Backrush also allows you to environment variables at the project level so that they can be shared across multiple functions in a single project.");r(t,e)},$$slots:{default:!0}});var L=n(B);g(L,{level:2,children:(t,s)=>{o();var e=a("Permissions system");r(t,e)},$$slots:{default:!0}});var S=n(L);d(S,{children:(t,s)=>{o();var e=a("Backrush’s permissions system for products such as Databases and Storage also extends to Functions, providing an additional layer of security to prevent unauthorized users from consuming your functions.");r(t,e)},$$slots:{default:!0}});var k=n(S);g(k,{level:2,children:(t,s)=>{o();var e=a("Local development support");r(t,e)},$$slots:{default:!0}});var W=n(k);d(W,{children:(t,s)=>{o();var e=we(),i=n(h(e));b(i,{href:"https://backrush.io/blog/post/announcing-local-development",children:(l,m)=>{o();var p=a("local development");r(l,p)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var M=n(W);g(M,{level:2,children:(t,s)=>{o();var e=a("CI/CD with GitHub");r(t,e)},$$slots:{default:!0}});var F=n(M);d(F,{children:(t,s)=>{o();var e=a("Backrush offers CI/CD support for Backrush Functions through GitHub, simplifying your developer experience by automating the process of pushing your function to your Backrush project.");r(t,e)},$$slots:{default:!0}});var N=n(F);g(N,{level:1,children:(t,s)=>{o();var e=a("Building Go functions");r(t,e)},$$slots:{default:!0}});var O=n(N);d(O,{children:(t,s)=>{o();var e=Ie(),i=n(h(e));b(i,{href:"https://cloud.backrush.io/",children:(f,$)=>{o();var C=a("sign up on Backrush Cloud");r(f,C)},$$slots:{default:!0}});var l=n(i,2);b(l,{href:"https://backrush.io/docs/advanced/self-hosting",children:(f,$)=>{o();var C=a("self-host");r(f,C)},$$slots:{default:!0}});var m=n(l,2);u(m,{content:"go-1.23"});var p=n(m,2);b(p,{href:"https://backrush.io/docs/advanced/self-hosting/environment-variables#functions:~:text=preserve%20harddrive%20health.-,_APP_FUNCTIONS_RUNTIMES,-version%20%3E%3D%200.8.0%20This",children:(f,$)=>{o();var C=a("environment");r(f,C)},$$slots:{default:!0}});var x=n(p,2);b(x,{href:"https://backrush.io/docs/tooling/command-line/installation#Installation",children:(f,$)=>{o();var C=a("Backrush CLI");r(f,C)},$$slots:{default:!0}});var v=n(x,2);u(v,{content:"backrush init function"}),o(),r(t,e)},$$slots:{default:!0}});var H=n(O);d(H,{children:(t,s)=>{o();var e=a("Once your function is set up, we can try some examples:");r(t,e)},$$slots:{default:!0}});var j=n(H);g(j,{level:2,children:(t,s)=>{o();var e=a("Example 1: AI Chatbot using GPT-3.5");r(t,e)},$$slots:{default:!0}});var J=n(j);d(J,{children:(t,s)=>{o();var e=a("The first example is a simple chatbot function that accepts a prompt in the request body and returns an answer in the response from the ChatGPT API.");r(t,e)},$$slots:{default:!0}});var K=n(J);d(K,{children:(t,s)=>{o();var e=Pe(),i=n(h(e));u(i,{content:"go-openai"});var l=n(i,2);u(l,{content:"mod"}),o(),r(t,e)},$$slots:{default:!0}});var Y=n(K);_(Y,{content:`go get github.com/sashabaranov/go-openai
`,language:"bash",process:!0,children:(t,s)=>{o();var e=a("go get github.com/sashabaranov/go-openai");r(t,e)},$$slots:{default:!0}});var z=n(Y);d(z,{children:(t,s)=>{o();var e=Ae(),i=n(h(e));u(i,{content:"main.go"}),o(),r(t,e)},$$slots:{default:!0}});var Z=n(z);_(Z,{content:`package handler

import (
	"context"
	"os"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	openai "github.com/sashabaranov/go-openai"
)

type RequestBody struct {
	Prompt string \`json:"prompt"\`
}

// This Backrush function will be executed every time your function is triggered
func Main(Context openruntimes.Context) openruntimes.Response {
	openAiKey := os.Getenv("OPENAI_KEY")

	openAiClient := openai.NewClient(openAiKey)

	if Context.Req.Method == "GET" {
		return Context.Res.Text("Send a POST request to this endpoint with a prompt and get a response.")
	}

	if Context.Req.Method == "POST" {
		var requestBody RequestBody
		err := Context.Req.BodyJson(&requestBody)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Missing request body",
			}, Context.Res.WithStatusCode(400))
		}

		prompt := requestBody.Prompt

		completion, err := openAiClient.CreateChatCompletion(
			context.Background(),
			openai.ChatCompletionRequest{
				Model: openai.GPT3Dot5Turbo,
				Messages: []openai.ChatCompletionMessage{
					{
						Role:    openai.ChatMessageRoleUser,
						Content: prompt,
					},
				},
			},
		)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": err.Error(),
			}, Context.Res.WithStatusCode(500))
		}

		return Context.Res.Json(map[string]interface{}{
			"ok":       true,
			"response": completion.Choices[0].Message.Content,
		})
	}

	return Context.Res.Json(map[string]interface{}{
		"ok":    false,
		"error": "Bad request",
	}, Context.Res.WithStatusCode(400))
}
`,language:"go",process:!0,children:(t,s)=>{o();var e=a(`package handler

import (
	"context"
	"os"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
	openai "github.com/sashabaranov/go-openai"
)

type RequestBody struct {
	Prompt string \`json:"prompt"\`
}

// This Backrush function will be executed every time your function is triggered
func Main(Context openruntimes.Context) openruntimes.Response {
	openAiKey := os.Getenv("OPENAI_KEY")

	openAiClient := openai.NewClient(openAiKey)

	if Context.Req.Method == "GET" {
		return Context.Res.Text("Send a POST request to this endpoint with a prompt and get a response.")
	}

	if Context.Req.Method == "POST" {
		var requestBody RequestBody
		err := Context.Req.BodyJson(&requestBody)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Missing request body",
			}, Context.Res.WithStatusCode(400))
		}

		prompt := requestBody.Prompt

		completion, err := openAiClient.CreateChatCompletion(
			context.Background(),
			openai.ChatCompletionRequest{
				Model: openai.GPT3Dot5Turbo,
				Messages: []openai.ChatCompletionMessage{
					{
						Role:    openai.ChatMessageRoleUser,
						Content: prompt,
					},
				},
			},
		)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": err.Error(),
			}, Context.Res.WithStatusCode(500))
		}

		return Context.Res.Json(map[string]interface{}{
			"ok":       true,
			"response": completion.Choices[0].Message.Content,
		})
	}

	return Context.Res.Json(map[string]interface{}{
		"ok":    false,
		"error": "Bad request",
	}, Context.Res.WithStatusCode(400))
}`);r(t,e)},$$slots:{default:!0}});var Q=n(Z);d(Q,{children:(t,s)=>{o();var e=Te(),i=n(h(e));u(i,{content:"backrush deploy function"}),o(),r(t,e)},$$slots:{default:!0}});var V=n(Q);g(V,{level:2,children:(t,s)=>{o();var e=a("Example 2: HTML Resume");r(t,e)},$$slots:{default:!0}});var X=n(V);d(X,{children:(t,s)=>{o();var e=a("The second example is an online HTML-based resume that you can deliver online through the function.");r(t,e)},$$slots:{default:!0}});var ee=n(X);d(ee,{children:(t,s)=>{o();var e=Ee(),i=n(h(e));u(i,{content:"static"});var l=n(i,2);u(l,{content:"resume.html"});var m=n(l,2);b(m,{href:"https://github.com/backrush-community/go-function-examples/blob/main/functions/go-resume/static/resume.html",children:(p,x)=>{o();var v=a("copy our template");r(p,v)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var te=n(ee);d(te,{children:(t,s)=>{o();var e=qe(),i=n(h(e));u(i,{content:"main.go"}),o(),r(t,e)},$$slots:{default:!0}});var ne=n(te);_(ne,{content:`package handler

import (
	"embed"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed static/*
var embedReader embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Method == "GET" {

		resumeHtml, _ := embedReader.ReadFile(("static/resume.html"))

		Context.Log(resumeHtml)

		return Context.Res.Text(string(resumeHtml),
			Context.Res.WithStatusCode(200),
			Context.Res.WithHeaders(map[string]string{
				"Content-Type": "text/html",
			}))
	}
	return Context.Res.Text("Bad request", Context.Res.WithStatusCode(404))
}

`,language:"go",process:!0,children:(t,s)=>{o();var e=a(`package handler

import (
	"embed"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

//go:embed static/*
var embedReader embed.FS

func Main(Context openruntimes.Context) openruntimes.Response {
	if Context.Req.Method == "GET" {

		resumeHtml, _ := embedReader.ReadFile(("static/resume.html"))

		Context.Log(resumeHtml)

		return Context.Res.Text(string(resumeHtml),
			Context.Res.WithStatusCode(200),
			Context.Res.WithHeaders(map[string]string{
				"Content-Type": "text/html",
			}))
	}
	return Context.Res.Text("Bad request", Context.Res.WithStatusCode(404))
}`);r(t,e)},$$slots:{default:!0}});var oe=n(ne);d(oe,{children:(t,s)=>{o();var e=Ue(),i=n(h(e));u(i,{content:"backrush deploy function"}),o(),r(t,e)},$$slots:{default:!0}});var re=n(oe);g(re,{level:2,children:(t,s)=>{o();var e=a("Example 3: URL Shortener");r(t,e)},$$slots:{default:!0}});var se=n(re);d(se,{children:(t,s)=>{o();var e=a("The third example is a personal URL shortener that stores your shortened URL path and long URL in an Backrush Database and redirects the consumer to the appropriate long URL on pinging the shortened URL.");r(t,e)},$$slots:{default:!0}});var ae=n(se);d(ae,{children:(t,s)=>{o();var e=De(),i=n(h(e));u(i,{content:"services"});var l=n(i,2);u(l,{content:"setup.go"}),o(),r(t,e)},$$slots:{default:!0}});var ie=n(ae);_(ie,{content:`package services

import (
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/permission"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func DoesDatabaseExist(dbs databases.Databases, dbId string) bool {
	_, err := dbs.Get(dbId)
	if err != nil {
		return false
	}
	return true
}

func DoesCollectionExist(dbs databases.Databases, dbId string, collId string) bool {
	_, err := dbs.GetCollection(dbId, collId)
	if err != nil {
		return false
	}
	return true
}

func DoesAttributeExist(dbs databases.Databases, dbId string, collId string, attribId string) bool {
	_, err := dbs.GetAttribute(dbId, collId, attribId)
	if err != nil {
		return false
	}
	return true
}

func InitialiseDatabase(Context openruntimes.Context, dbs databases.Databases, dbId string, collId string) {
	doesDbExist := DoesDatabaseExist(dbs, dbId)
	if !doesDbExist {
		dbs.Create(
			dbId,
			"URL Databases",
		)
	}

	doesCollExist := DoesCollectionExist(dbs, dbId, collId)
	if !doesCollExist {
		dbs.CreateCollection(
			dbId,
			collId,
			"URLs",
			dbs.WithCreateCollectionPermissions([]string{permission.Read("any")}),
		)
	}

	doesAttribExist := DoesAttributeExist(dbs, dbId, collId, "longUrl")
	if !doesAttribExist {
		dbs.CreateUrlAttribute(
			dbId,
			collId,
			"longUrl",
			true,
			dbs.WithCreateUrlAttributeArray(false),
		)
	}
}
`,language:"go",process:!0,children:(t,s)=>{o();var e=a(`package services

import (
	"github.com/backrush/sdk-for-go/databases"
	"github.com/backrush/sdk-for-go/permission"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func DoesDatabaseExist(dbs databases.Databases, dbId string) bool {
	_, err := dbs.Get(dbId)
	if err != nil {
		return false
	}
	return true
}

func DoesCollectionExist(dbs databases.Databases, dbId string, collId string) bool {
	_, err := dbs.GetCollection(dbId, collId)
	if err != nil {
		return false
	}
	return true
}

func DoesAttributeExist(dbs databases.Databases, dbId string, collId string, attribId string) bool {
	_, err := dbs.GetAttribute(dbId, collId, attribId)
	if err != nil {
		return false
	}
	return true
}

func InitialiseDatabase(Context openruntimes.Context, dbs databases.Databases, dbId string, collId string) {
	doesDbExist := DoesDatabaseExist(dbs, dbId)
	if !doesDbExist {
		dbs.Create(
			dbId,
			"URL Databases",
		)
	}

	doesCollExist := DoesCollectionExist(dbs, dbId, collId)
	if !doesCollExist {
		dbs.CreateCollection(
			dbId,
			collId,
			"URLs",
			dbs.WithCreateCollectionPermissions([]string{permission.Read("any")}),
		)
	}

	doesAttribExist := DoesAttributeExist(dbs, dbId, collId, "longUrl")
	if !doesAttribExist {
		dbs.CreateUrlAttribute(
			dbId,
			collId,
			"longUrl",
			true,
			dbs.WithCreateUrlAttributeArray(false),
		)
	}
}`);r(t,e)},$$slots:{default:!0}});var de=n(ie);d(de,{children:(t,s)=>{o();var e=Ge(),i=n(h(e));u(i,{content:"main.go"});var l=n(i,2);u(l,{content:"POST"});var m=n(l,2);u(m,{content:"GET"}),o(),r(t,e)},$$slots:{default:!0}});var le=n(de);_(le,{content:`package handler

import (
	"openruntimes/handler/services"
	"os"

	"github.com/backrush/sdk-for-go/backrush"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type RequestBody struct {
	ShortId string \`json:"shortId"\`
	LongUrl string \`json:"longUrl"\`
}

type ResponseBody struct {
	LongUrl string \`json:"longUrl"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	client := backrush.NewClient(
		backrush.WithEndpoint(os.Getenv("BACKRUSH_FUNCTION_API_ENDPOINT")),
		backrush.WithProject(os.Getenv("BACKRUSH_FUNCTION_PROJECT_ID")),
		backrush.WithKey(Context.Req.Headers["x-backrush-key"]),
	)

	databases := backrush.NewDatabases(client)

	dbId := "urlDatabase"
	collId := "urlCollection"

	services.InitialiseDatabase(Context, *databases, dbId, collId)

	if Context.Req.Method == "POST" {
		var requestBody RequestBody
		err := Context.Req.BodyJson(&requestBody)
		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Missing request body",
			}, Context.Res.WithStatusCode(400))
		}

		_, err = databases.CreateDocument(
			dbId,
			collId,
			requestBody.ShortId,
			map[string]interface{}{
				"longUrl": requestBody.LongUrl,
			},
		)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Failed to create shortened URL",
			}, Context.Res.WithStatusCode(500))
		}

		return Context.Res.Json(map[string]interface{}{
			"ok":      true,
			"shortId": requestBody.ShortId,
			"longUrl": requestBody.LongUrl,
		})
	}

	if Context.Req.Method == "GET" {
		path := Context.Req.Path
		if path == "/" {
			return Context.Res.Text("Welcome to the URL shortener service\\n\\nAdd a short URL to the path to redirect to the long URL\\n", Context.Res.WithStatusCode(200))
		}

		shortId := path[1:]

		document, err := databases.GetDocument(dbId, collId, shortId)

		if err != nil {
			Context.Error(err)
			return Context.Res.Text("URL not found", Context.Res.WithStatusCode(404))
		}

		var responseBody ResponseBody
		document.Decode(&responseBody)

		return Context.Res.Redirect(responseBody.LongUrl, Context.Res.WithStatusCode(302))
	}
	return Context.Res.Empty()
}

`,language:"go",process:!0,children:(t,s)=>{o();var e=a(`package handler

import (
	"openruntimes/handler/services"
	"os"

	"github.com/backrush/sdk-for-go/backrush"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type RequestBody struct {
	ShortId string \`json:"shortId"\`
	LongUrl string \`json:"longUrl"\`
}

type ResponseBody struct {
	LongUrl string \`json:"longUrl"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
	client := backrush.NewClient(
		backrush.WithEndpoint(os.Getenv("BACKRUSH_FUNCTION_API_ENDPOINT")),
		backrush.WithProject(os.Getenv("BACKRUSH_FUNCTION_PROJECT_ID")),
		backrush.WithKey(Context.Req.Headers["x-backrush-key"]),
	)

	databases := backrush.NewDatabases(client)

	dbId := "urlDatabase"
	collId := "urlCollection"

	services.InitialiseDatabase(Context, *databases, dbId, collId)

	if Context.Req.Method == "POST" {
		var requestBody RequestBody
		err := Context.Req.BodyJson(&requestBody)
		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Missing request body",
			}, Context.Res.WithStatusCode(400))
		}

		_, err = databases.CreateDocument(
			dbId,
			collId,
			requestBody.ShortId,
			map[string]interface{}{
				"longUrl": requestBody.LongUrl,
			},
		)

		if err != nil {
			Context.Error(err)
			return Context.Res.Json(map[string]interface{}{
				"ok":    false,
				"error": "Failed to create shortened URL",
			}, Context.Res.WithStatusCode(500))
		}

		return Context.Res.Json(map[string]interface{}{
			"ok":      true,
			"shortId": requestBody.ShortId,
			"longUrl": requestBody.LongUrl,
		})
	}

	if Context.Req.Method == "GET" {
		path := Context.Req.Path
		if path == "/" {
			return Context.Res.Text("Welcome to the URL shortener service\\n\\nAdd a short URL to the path to redirect to the long URL\\n", Context.Res.WithStatusCode(200))
		}

		shortId := path[1:]

		document, err := databases.GetDocument(dbId, collId, shortId)

		if err != nil {
			Context.Error(err)
			return Context.Res.Text("URL not found", Context.Res.WithStatusCode(404))
		}

		var responseBody ResponseBody
		document.Decode(&responseBody)

		return Context.Res.Redirect(responseBody.LongUrl, Context.Res.WithStatusCode(302))
	}
	return Context.Res.Empty()
}`);r(t,e)},$$slots:{default:!0}});var ue=n(le);d(ue,{children:(t,s)=>{o();var e=Be(),i=n(h(e));u(i,{content:"backrush deploy function"}),o(),r(t,e)},$$slots:{default:!0}});var pe=n(ue);d(pe,{children:(t,s)=>{o();var e=Le(),i=n(h(e));u(i,{content:"databases.read"});var l=n(i,2);u(l,{content:"databases.write"});var m=n(l,2);u(m,{content:"collections.read"});var p=n(m,2);u(p,{content:"collections.write"});var x=n(p,2);u(x,{content:"attributes.read"});var v=n(x,2);u(v,{content:"attributes.write"});var f=n(v,2);u(f,{content:"documents.read"});var $=n(f,2);u($,{content:"documents.write"}),o(),r(t,e)},$$slots:{default:!0}});var ce=n(pe);g(ce,{level:1,children:(t,s)=>{o();var e=a("More resources");r(t,e)},$$slots:{default:!0}});var he=n(ce);d(he,{children:(t,s)=>{o();var e=Se(),i=n(h(e));b(i,{href:"https://github.com/backrush-community/go-function-examples",children:(l,m)=>{o();var p=a("GitHub repo");r(l,p)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var me=n(he);d(me,{children:(t,s)=>{o();var e=a("If you enjoyed reading this blog, here are some more resources to help you get started with Backrush Functions and Go:");r(t,e)},$$slots:{default:!0}});var $e=n(me);_e($e,{ordered:!1,marker:"-",children:(t,s)=>{var e=ke(),i=h(e);R(i,{children:(p,x)=>{b(p,{href:"https://backrush.io/docs/functions",children:(v,f)=>{o();var $=a("Backrush Functions docs");r(v,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var l=n(i);R(l,{children:(p,x)=>{b(p,{href:"https://go.dev/doc/",children:(v,f)=>{o();var $=a("Go docs");r(v,$)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=n(l);R(m,{children:(p,x)=>{b(p,{href:"https://backrush.io/discord",children:(v,f)=>{o();var $=a("Backrush Discord");r(v,$)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}}),xe(y),r(ve,y)},$$slots:{default:!0}}))}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:Me,frontmatter:fe},Symbol.toStringTag,{value:"Module"}));export{dt as _,Me as a};
