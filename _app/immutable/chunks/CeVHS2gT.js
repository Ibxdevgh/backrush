import{t as $,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as r,f as g,c as We,n,r as De}from"./NgVQVlRK.js";import{n as Ne}from"./B4IyMRKX.js";import{H as h}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as x}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as Te}from"./DXp9_3zM.js";import{F as y}from"./OFUKRh55.js";import{L as Ge,I as b}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{L as f}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Ae}from"./CEkRzcqJ.js";const Fe={layout:"post",title:"Measuring Backrush's Go runtime performance",description:"How we benchmarked the performance of our new Go runtime in comparison with other Backrush Functions runtimes",date:"2024-10-08T00:00:00.000Z",cover:"/images/blog/go-function-benchmarks/cover.png",timeToRead:8,author:"matej-baco",category:"product"};var Ie=$("It is undeniable that Go has grown to become one of the most popular programming languages among developers worldwide. Recently, during Init, we announced the <!> for Backrush Functions. However, it is one thing for us to claim that our Go functions runtime is performant, it is a whole other thing for us to justify the same. To do so, we planned a benchmark to test the performance of our Go runtime in comparison with other Backrush Functions runtimes.",1),Me=$("To test the raw performance of our Go functions, we created several functions with different programming languages using <!>, a set of open-source serverless function runtimes developed by Backrush. We also prepared a benchmarking system for these functions. Here’s how we achieved all of these.",1),Ee=$("You can find the benchmark functions for all the tested languages in this <!>.",1),Be=$("<!><!><!><!>",1),ze=$("We then installed Docker to run the functions, <!> to benchmark the function builds and cold starts, and <!> to benchmark the function executions (view the <!>).",1),Oe=$("Our scripts to set up and run the benchmarks are available in our <!>.",1),Ue=$("The data for all the graphs shared above is available in our <!>.",1),Le=$("These benchmarks consistently showed us why the Go runtime is one of the best runtimes for Backrush Functions. It is highly performant, multitasks well, and is highly memory efficient. If you liked these benchmarks, you can find our scripts and test functions for the same in our <!>.",1),je=$("<!><!><!><!>",1),Ke=$("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Je(Se){Ae(Se,Ne(Fe,{children:(qe,Ve)=>{var P=Ke(),k=We(P);i(k,{children:(e,s)=>{n();var t=Ie(),l=r(g(t));f(l,{href:"https://backrush.io/blog/post/announcing-go-support",children:(u,m)=>{n();var d=a("new Golang (or Go) runtime");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var C=r(k);h(C,{level:1,children:(e,s)=>{n();var t=a("Setting up the benchmark");o(e,t)},$$slots:{default:!0}});var R=r(C);i(R,{children:(e,s)=>{n();var t=Me(),l=r(g(t));f(l,{href:"https://github.com/open-runtimes/open-runtimes",children:(u,m)=>{n();var d=a("Open Runtimes");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var T=r(R);h(T,{level:2,children:(e,s)=>{n();var t=a("Creating our benchmark test functions");o(e,t)},$$slots:{default:!0}});var G=r(T);i(G,{children:(e,s)=>{n();var t=a("We created three different types of functions to benchmark different aspects of the function runtimes’ performance.");o(e,t)},$$slots:{default:!0}});var F=r(G);h(F,{level:3,children:(e,s)=>{n();var t=a("Hello World");o(e,t)},$$slots:{default:!0}});var S=r(F);i(S,{children:(e,s)=>{n();var t=a("The Hello World function is the simplest benchmark for understanding build speed, cold-start speed, and memory consumption in a minimal function. It features a single path and responds with text to any HTTP request sent to it.");o(e,t)},$$slots:{default:!0}});var q=r(S);y(q,{content:`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

		return Context.Res.Text("Hello");
}
`,language:"go",process:!0,children:(e,s)=>{n();var t=a(`package handler

import (
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

		return Context.Res.Text("Hello");
}`);o(e,t)},$$slots:{default:!0}});var H=r(q);h(H,{level:3,children:(e,s)=>{n();var t=a("Fibonacci");o(e,t)},$$slots:{default:!0}});var W=r(H);i(W,{children:(e,s)=>{n();var t=a("The Fibonacci benchmark allows us to understand the concurrency model of each runtime for CPU-heavy operations.");o(e,t)},$$slots:{default:!0}});var D=r(W);y(D,{content:`package handler

import (
	"sync"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	
	return fibonacci(n-1) + fibonacci(n-2)
}

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

	var wg sync.WaitGroup
	
	for i := 0; i < 10; i++ {
		wg.Add(1)

		go func() {
			defer wg.Done()
			fibonacci(30)
		}()
	}

	wg.Wait()

	return Context.Res.Text("OK")
}
`,language:"go",process:!0,children:(e,s)=>{n();var t=a(`package handler

import (
	"sync"

	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	
	return fibonacci(n-1) + fibonacci(n-2)
}

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

	var wg sync.WaitGroup
	
	for i := 0; i < 10; i++ {
		wg.Add(1)

		go func() {
			defer wg.Done()
			fibonacci(30)
		}()
	}

	wg.Wait()

	return Context.Res.Text("OK")
}`);o(e,t)},$$slots:{default:!0}});var N=r(D);i(N,{children:(e,s)=>{n();var t=a("An important note is that certain runtimes may feature worse performance than others, implying that they likely didn't use all CPU cores. This can be achieved with additional code, but the benchmark is designed to focus on the runtime's native approach.");o(e,t)},$$slots:{default:!0}});var A=r(N);h(A,{level:3,children:(e,s)=>{n();var t=a("Scraper");o(e,t)},$$slots:{default:!0}});var I=r(A);i(I,{children:(e,s)=>{n();var t=a("The Scraper benchmark tests the build speed and cold-start speed of a bigger function with multiple libraries.");o(e,t)},$$slots:{default:!0}});var M=r(I);y(M,{content:`package handler

import (
    "bytes"

    "github.com/open-runtimes/types-for-go/v4/openruntimes"
    "github.com/go-resty/resty/v2"
    "github.com/go-faker/faker/v4"
    "github.com/PuerkitoBio/goquery"
)

type FakerTags struct {
    Name    string   \`faker:"name"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

    if Context.Req.Path == "/faker" {
        fakeData := FakerTags{}
        err := faker.FakeData(&fakeData)
        if err != nil {
            return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
        }

        return Context.Res.Text("<body><h1 id=\\"title\\">" + fakeData.Name + "</h1></body>");
    }

    client := resty.New().SetCloseConnection(true)
    resp, err := client.R().Get("http://127.0.0.1:3000/faker")

    if err != nil {
        return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
    }

    reader := bytes.NewReader(resp.Body())
    doc, err := goquery.NewDocumentFromReader(reader)
    if err != nil {
        return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
    }

    data := doc.Find("#title").Text()
		return Context.Res.Text(data);
}
`,language:"go",process:!0,children:(e,s)=>{n();var t=a(`package handler

import (
    "bytes"

    "github.com/open-runtimes/types-for-go/v4/openruntimes"
    "github.com/go-resty/resty/v2"
    "github.com/go-faker/faker/v4"
    "github.com/PuerkitoBio/goquery"
)

type FakerTags struct {
    Name    string   \`faker:"name"\`
}

func Main(Context openruntimes.Context) openruntimes.Response {
    if Context.Req.Path == "/ping" {
        return Context.Res.Text("Pong");
    }

    if Context.Req.Path == "/faker" {
        fakeData := FakerTags{}
        err := faker.FakeData(&fakeData)
        if err != nil {
            return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
        }

        return Context.Res.Text("<body><h1 id=\\"title\\">" + fakeData.Name + "</h1></body>");
    }

    client := resty.New().SetCloseConnection(true)
    resp, err := client.R().Get("http://127.0.0.1:3000/faker")

    if err != nil {
        return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
    }

    reader := bytes.NewReader(resp.Body())
    doc, err := goquery.NewDocumentFromReader(reader)
    if err != nil {
        return Context.Res.Text(err.Error(), Context.Res.WithStatusCode(500))
    }

    data := doc.Find("#title").Text()
		return Context.Res.Text(data);
}`);o(e,t)},$$slots:{default:!0}});var E=r(M);i(E,{children:(e,s)=>{n();var t=a("Some interpreted languages may underperform in this benchmark, and this could be solved by introducing a library with a build step to minify the code into a single file. However, this benchmark focuses on the runtime’s native approach, so these improvements were not made.");o(e,t)},$$slots:{default:!0}});var B=r(E);i(B,{children:(e,s)=>{n();var t=Ee(),l=r(g(t));f(l,{href:"https://github.com/Meldiron/open-runtimes-benchmark/",children:(u,m)=>{n();var d=a("GitHub repo");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var z=r(B);h(z,{level:2,children:(e,s)=>{n();var t=a("Preparing the benchmarking system");o(e,t)},$$slots:{default:!0}});var O=r(z);i(O,{children:(e,s)=>{n();var t=a("For our benchmarking system, we created a VM on DigitalOcean with the following specs:");o(e,t)},$$slots:{default:!0}});var U=r(O);Ge(U,{ordered:!1,marker:"-",children:(e,s)=>{var t=Be(),l=g(t);b(l,{children:(c,v)=>{n();var p=a("8 Intel vCPUs");o(c,p)},$$slots:{default:!0}});var u=r(l);b(u,{children:(c,v)=>{n();var p=a("16 GB RAM");o(c,p)},$$slots:{default:!0}});var m=r(u);b(m,{children:(c,v)=>{n();var p=a("480 GB Disk memory");o(c,p)},$$slots:{default:!0}});var d=r(m);b(d,{children:(c,v)=>{n();var p=a("Ubuntu 24.04 (LTS) x64 OS.");o(c,p)},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}});var L=r(U);i(L,{children:(e,s)=>{n();var t=ze(),l=r(g(t));Te(l,{content:"hyperfine"});var u=r(l,2);Te(u,{content:"k6"});var m=r(u,2);f(m,{href:"https://github.com/Meldiron/open-runtimes-benchmark/blob/main/PREPARE.md",children:(d,c)=>{n();var v=a("preparation instructions");o(d,v)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var j=r(L);i(j,{children:(e,s)=>{n();var t=Oe(),l=r(g(t));f(l,{href:"https://github.com/Meldiron/open-runtimes-benchmark",children:(u,m)=>{n();var d=a("GitHub repo");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var K=r(j);h(K,{level:1,children:(e,s)=>{n();var t=a("Running the benchmarks");o(e,t)},$$slots:{default:!0}});var J=r(K);i(J,{children:(e,s)=>{n();var t=a("Through the benchmarks, we explored several aspects of the function runtimes.");o(e,t)},$$slots:{default:!0}});var V=r(J);h(V,{level:2,children:(e,s)=>{n();var t=a("Builds");o(e,t)},$$slots:{default:!0}});var Y=r(V);i(Y,{children:(e,s)=>{n();var t=a("First, we observed the builds of our function. We reviewed both build sizes and build times, and here is what we discovered:");o(e,t)},$$slots:{default:!0}});var Z=r(Y);h(Z,{level:3,children:(e,s)=>{n();var t=a("Build size");o(e,t)},$$slots:{default:!0}});var Q=r(Z);i(Q,{children:(e,s)=>{n();var t=a("In the simpler functions with fewer dependencies (Hello World and Fibonacci),  Go had a larger build size than Node, Bun, Deno, .NET, and Dart. For the Scraper function, Go remained competitive and had a smaller build size than Node, Bun, Python, and Ruby.");o(e,t)},$$slots:{default:!0}});var X=r(Q);i(X,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/build-size.png",alt:"Build size"})},$$slots:{default:!0}});var ee=r(X);i(ee,{children:(e,s)=>{n();var t=a("Interestingly, .NET had the smallest build size across all the benchmark functions compared to Go and other runtimes.");o(e,t)},$$slots:{default:!0}});var te=r(ee);h(te,{level:3,children:(e,s)=>{n();var t=a("Build time");o(e,t)},$$slots:{default:!0}});var re=r(te);i(re,{children:(e,s)=>{n();var t=a("Overall, Go was a stable choice with moderate performance. It was not the fastest, but it offered consistent build times as compared to runtimes like Python, Dart, and Ruby.");o(e,t)},$$slots:{default:!0}});var ne=r(re);i(ne,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/build-time.png",alt:"Build time"})},$$slots:{default:!0}});var oe=r(ne);i(oe,{children:(e,s)=>{n();var t=a("We must give special shoutouts to Bun and PHP, which showed exceptionally fast built times as compared to any other runtime. These distinctions were even more visible in the Scraper function, showcasing the efficiency of their package managers.");o(e,t)},$$slots:{default:!0}});var se=r(oe);h(se,{level:2,children:(e,s)=>{n();var t=a("Memory usage");o(e,t)},$$slots:{default:!0}});var ae=r(se);i(ae,{children:(e,s)=>{n();var t=a("We observed the memory usage of each function before running the benchmarks (i.e., as soon as the functions were set up). Across all three functions, Go consistently used less memory, making it our most suitable function runtime for applications where memory resources are limited, followed by Dart as our next best option.");o(e,t)},$$slots:{default:!0}});var ie=r(ae);i(ie,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/memory-usage.png",alt:"Memory usage"})},$$slots:{default:!0}});var le=r(ie);i(le,{children:(e,s)=>{n();var t=a("Our JavaScript runtimes, Python, Ruby, and .NET, have higher base memory usage, which can be a downside for some. However, we noticed that the memory usage of our .NET function did not increase much with the addition of libraries (in the Scraper function), so that might be the best candidate from the aforementioned list.");o(e,t)},$$slots:{default:!0}});var ue=r(le);h(ue,{level:2,children:(e,s)=>{n();var t=a("Cold-starts");o(e,t)},$$slots:{default:!0}});var de=r(ue);i(de,{children:(e,s)=>{n();var t=a("In our benchmark to verify the lowest cold starts, Go emerged as one of the fastest runtimes, particularly when compared to Python, Ruby, and .NET, which showed significantly higher cold-start times. Go's performance was notably better for more complex functions like Scraper, suggesting its suitability for more complex projects with multiple dependencies.");o(e,t)},$$slots:{default:!0}});var ce=r(de);i(ce,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/cold-starts.png",alt:"Cold-starts"})},$$slots:{default:!0}});var he=r(ce);i(he,{children:(e,s)=>{n();var t=a("As observed, PHP was the best choice for very simple, quick-execution tasks, with the best cold-start times in both the Hello World and Fibonacci functions. Among the compiled runtimes, Dart showed similar performance to PHP in the Hello World and Fibonacci functions with better performance in the Scraper function, making it a more suitable alternative to Go.");o(e,t)},$$slots:{default:!0}});var pe=r(he);h(pe,{level:2,children:(e,s)=>{n();var t=a("Function executions");o(e,t)},$$slots:{default:!0}});var me=r(pe);i(me,{children:(e,s)=>{n();var t=a("Next, we tested warmed functions to determine their throughput and the runtimes' ability to handle multitasking. Some runtimes only allow single-threaded operations out of the box, and could show improved performance by installing relevant libraries; however, the benchmarks were intended to demonstrate the runtimes’ native performance.");o(e,t)},$$slots:{default:!0}});var fe=r(me);h(fe,{level:3,children:(e,s)=>{n();var t=a("Total requests per second");o(e,t)},$$slots:{default:!0}});var $e=r(fe);i($e,{children:(e,s)=>{n();var t=a("Go consistently showed the highest performance in requests per second across all benchmarks and with higher CPU usage, indicating that it effectively utilizes multiple cores for both I/O-bound and CPU-bound tasks.");o(e,t)},$$slots:{default:!0}});var ve=r($e);i(ve,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/total-requests.png",alt:"Total requests per second"})},$$slots:{default:!0}});var ge=r(ve);i(ge,{children:(e,s)=>{n();var t=a("Additionally, .NET was the only runtime other than Go that was able to utilize all CPU cores natively, i.e., without the need to use special libraries or frameworks. Python happened to be an outlier with substantially low throughput; however, this could have been caused by the runtime environment and can be optimized in the future.");o(e,t)},$$slots:{default:!0}});var be=r(ge);h(be,{level:3,children:(e,s)=>{n();var t=a("Requests per second for a single CPU core");o(e,t)},$$slots:{default:!0}});var _e=r(be);i(_e,{children:(e,s)=>{n();var t=a("We also compared each runtime's single-core performance. Go showed balanced performance across different scenarios, excelling particularly in tasks involving high computational needs (e.g., the Fibonacci calculation).");o(e,t)},$$slots:{default:!0}});var xe=r(_e);i(xe,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/requests-per-core-fibonacci.png",alt:"Requests for the Fibonacci"})},$$slots:{default:!0}});var Pe=r(xe);i(Pe,{children:(e,s)=>{n();var t=a("While it was not always the top performer in every scenario (Bun, PHP, and .NET demonstrated better performance in the Hello World function), Go's consistency across different types of workloads showed its versatility and reliability.");o(e,t)},$$slots:{default:!0}});var we=r(Pe);i(we,{children:(e,s)=>{x(e,{src:"/images/blog/go-function-benchmarks/requests-per-core.png",alt:"Requests per second for a single CPU core"})},$$slots:{default:!0}});var ye=r(we);i(ye,{children:(e,s)=>{n();var t=Ue(),l=r(g(t));f(l,{href:"https://github.com/Meldiron/open-runtimes-benchmark/blob/main/RESULTS_SIMPLIFIED.md",children:(u,m)=>{n();var d=a("GitHub repo");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var ke=r(ye);h(ke,{level:1,children:(e,s)=>{n();var t=a("Conclusion");o(e,t)},$$slots:{default:!0}});var Ce=r(ke);i(Ce,{children:(e,s)=>{n();var t=Le(),l=r(g(t));f(l,{href:"https://github.com/Meldiron/open-runtimes-benchmark",children:(u,m)=>{n();var d=a("GitHub repo");o(u,d)},$$slots:{default:!0}}),n(),o(e,t)},$$slots:{default:!0}});var Re=r(Ce);i(Re,{children:(e,s)=>{n();var t=a("Learn more about Backrush Functions and Go by reading:");o(e,t)},$$slots:{default:!0}});var He=r(Re);Ge(He,{ordered:!1,marker:"-",children:(e,s)=>{var t=je(),l=g(t);b(l,{children:(c,v)=>{f(c,{href:"https://backrush.io/docs/products/functions",children:(p,w)=>{n();var _=a("Backrush Functions docs");o(p,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=r(l);b(u,{children:(c,v)=>{f(c,{href:"https://backrush.io/docs/quick-starts/go",children:(p,w)=>{n();var _=a("Backrush Go quick start");o(p,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var m=r(u);b(m,{children:(c,v)=>{f(c,{href:"https://backrush.io/blog/post/3-things-you-can-build-with-go-runtime",children:(p,w)=>{n();var _=a("3 things you can build with the Go runtime");o(p,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=r(m);b(d,{children:(c,v)=>{f(c,{href:"https://backrush.io/discord",children:(p,w)=>{n();var _=a("Backrush Discord server");o(p,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}}),De(P),o(qe,P)},$$slots:{default:!0}}))}const vt=Object.freeze(Object.defineProperty({__proto__:null,default:Je,frontmatter:Fe},Symbol.toStringTag,{value:"Module"}));export{vt as _,Je as a};
