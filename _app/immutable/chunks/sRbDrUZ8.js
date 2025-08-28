import{t as c,b as a,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as o,f as $,c as qt,n as r,r as St}from"./NgVQVlRK.js";import{n as jt}from"./B4IyMRKX.js";import{H as I}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as At}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as _}from"./DXp9_3zM.js";import{F as A}from"./OFUKRh55.js";import{L as q,I as P}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as x}from"./yHjwcyUH.js";import{L as R}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Dt}from"./CEkRzcqJ.js";const It={layout:"post",title:"Building a currency converter API with Deno 2 and Backrush",description:"Learn how to build a currency converter API with Deno 2 and how to use Backrush Functions to deploy and run your API.",date:"2024-10-18T00:00:00.000Z",cover:"/images/blog/build-a-currency-converter-with-deno2/cover.png",timeToRead:12,author:"ebenezer-don",category:"tutorial"};var Ft=c("When building APIs, one of the most useful things you can create is a currency converter. Whether you&#39;re working on an application that handles pricing in different currencies or something more personal like tracking expenses across borders, having a reliable currency converter is a great tool. Today, we&#39;ll walk through building one using <!> and <!>.",1),Lt=c("You&#39;ll learn how to set up your Deno project using Backrush, how to fetch and parse JSON data with Deno, and how to use Backrush Functions to deploy and run your API. By the end, you&#39;ll have a working API that converts currencies, provides users with detailed information on how to interact with it, and even utilizes Node.js packages like <!> for input validation.",1),Nt=c("Go to the <!>.",1),Ut=c("Navigate to the <!> tab and create a new function.",1),Gt=c("Choose <!> as the runtime and set up your function configuration.",1),zt=c("<!><!>",1),Wt=c("Choose where you want your code to live (GitHub or manual deployment), and click <!> to finish.",1),Ht=c("<!><!><!><!><!><!>",1),Ot=c("If you&#39;re developing locally, the <!> is much more convenient. It allows you to set up and manage your projects, functions, and other Backrush resources without deploying to the cloud after every change.",1),Yt=c("First, make sure you have docker installed and running. If you don&#39;t, you can download it from the <!>.",1),Zt=c("Next, install the <!> if you haven&#39;t already. Open your terminal and run:",1),Kt=c("This will install the CLI globally, so you can use the <!> command from anywhere on your machine.",1),Xt=c("Backrush will ask for the name of your function, the ID, and the runtime you want to use. Go ahead and name the function something like <!> and select <!> as the runtime.",1),Bt=c("<!> natively supports TypeScript, so you don&#39;t have to worry about going through extra steps to configure your project for TypeScript. Backrush will generate a basic Deno function for you, including a <!> file in the <!> directory.",1),Jt=c("This will list the available functions in your project. Select the function you just created, and you&#39;ll get a URL where you can access your function locally. You can open this URL in your browser or use <!> to test the function:",1),Vt=c("The first feature we need for our API is fetching the exchange rates. We&#39;ll be using the <!> to do this. It&#39;s a free API that provides real-time exchange rates for over 170 currencies. You can sign up for a free API key on their <!>.",1),Mt=c("Once you have your API key, the next step is to create a <!> file in the root of your function and store the key there. Here&#39;s what your <!> file should look like:",1),Qt=c("Find your function and navigate to the <!> tab.",1),er=c("Scroll to the <!> section and add a new environment variable with the key <!> and paste your API key as the value.",1),tr=c("<!><!><!>",1),rr=c("Once that&#39;s done, we can now write the function to fetch exchange rates. Update the <!> file in your function with the following code:",1),or=c("What&#39;s happening here is straightforward. We&#39;re using <!> to access the API key stored in our environment variables. This ensures the key isn&#39;t exposed in the code, which is good practice for security.",1),nr=c("Then, we use Deno&#39;s built-in <!> function to call the ExchangeRate API. Unlike in Node.js, where you&#39;d need to install a library like <!> to make HTTP requests, Deno includes this functionality natively, making things a little simpler. After fetching the data, we check if the request was successful, and if it is, we return the exchange rates. If something goes wrong, we throw an error to signal the issue.",1),ar=c("This function uses the rates we fetched earlier to calculate the conversion. First, it checks whether the <!> and <!> currencies exist in the list of rates. If either currency is missing, we throw an error. Then, we calculate the conversion rate by dividing the <!> currency rate by the <!> currency rate. Finally, we multiply the amount by this conversion rate to get the converted amount, and return the result along with some additional information like the rate and timestamp.",1),sr=c("It&#39;s important to make sure that the data coming into our API is valid. For example, we don&#39;t want users sending negative amounts or invalid currency codes. To handle this, we&#39;ll use <!>, a TypeScript-first schema validation library. The great thing about <!> is that it allows us to easily use Node.js packages like Zod without extra configuration.",1),lr=c("Here, <!> ensures that the currency code is a string of exactly three characters and automatically converts it to uppercase. <!> ensures that the amount is a positive number and that both the <!> and <!> currencies are valid according to <!>.",1),ir=c("<!>: To convert an amount from one currency to another.",1),ur=c("<!>: To list all available currencies.",1),dr=c("<!><!>",1),cr=c("Handling currency conversion requests (<!>)",1),$r=c("Let&#39;s start with the <!> endpoint. This is where users will send a request to convert an amount from one currency to another. The request needs to include three query parameters: <!>, <!> (the currency to convert from), and <!> (the currency to convert to).",1),hr=c("<!>: We first check if the request path is <!> and if it&#39;s a GET request. This ensures that we&#39;re only processing valid requests.",1),vr=c("<!>: We use the <!> (which we defined earlier using Zod) to validate the incoming data. The schema ensures that:",1),pr=c("<!> is a positive number.",1),fr=c("<!> and <!> are valid 3-letter currency codes.",1),_r=c("<!><!>",1),mr=c("<!><!><!>",1),gr=c("<!>: If the input is valid, we call the <!> function with the validated data. This function handles the actual conversion logic using the exchange rates we fetched earlier.",1),wr=c("<!>: Once the conversion is successful, we send the result back to the user in JSON format. If any errors occur during the process (e.g., invalid currency codes or issues with the conversion), we log the error and return a generic &quot;conversion failed&quot; message with a 500 status code.",1),yr=c("<!><!><!><!>",1),Pr=c("Handling available currencies requests (<!>)",1),xr=c("Next, let&#39;s handle the <!> endpoint. This will return a list of all available currencies that our API supports. It&#39;s a simple GET request, and we&#39;ll use the exchange rates we fetched earlier to get the list of currencies.",1),br=c("<!>: Similar to the <!> endpoint, we check if the request path is <!> and if it&#39;s a GET request.",1),kr=c("<!>: We call the <!> function, which returns a list of all the supported currency codes based on the exchange rates.",1),Ar=c("<!>: If something goes wrong (e.g., issues fetching the exchange rates), we catch the error, log it, and return a 500 error message indicating that the currencies couldn&#39;t be fetched.",1),Ir=c("<!><!><!>",1),Cr=c("Lastly, we&#39;ll handle any requests that don&#39;t match <!> or <!>. Instead of just returning a 404 error, it&#39;s helpful to give users a bit more information about how to use the API.",1),Tr=c("<!>: The default response includes a message explaining that the API is a currency converter.",1),Rr=c("<!>: We provide information about the two main endpoints (<!> and <!>), along with a description of what each endpoint does.",1),Er=c("<!>: To make it easier for users, we also provide example URLs they can use to test the API. This helps users understand how to format their requests correctly.",1),qr=c("<!><!><!>",1),Sr=c("Note that you have to change <!> to the URL of your Backrush function or deployed API.",1),jr=c("The <!> endpoint handles currency conversions and validates user input to prevent errors.",1),Dr=c("The <!> endpoint provides a list of supported currencies.",1),Fr=c("<!><!><!>",1),Lr=c("This will spin up your function and give you a URL where you can access it locally. Open this URL in your browser or use <!> to test the API.",1),Nr=c("Remember to change <!> to the URL of your function if you&#39;re running it on a different port.",1),Ur=c("Congrats on building a working currency converter API using <!> and <!>. Along the way, we explored how Deno&#39;s built-in TypeScript support and its straightforward integration with Node.js packages like Zod make the development process easier. You also saw how Backrush&#39;s Functions allow you to test everything locally, ensuring smooth deployment when you&#39;re ready.",1),Gr=c("This project should give you a solid foundation for building more complex APIs in the future. If you&#39;re looking to expand this, you could add features like more advanced error handling, <!> and user search history, or even integrate real-time updates for currency rates.",1),zr=c("Feel free to experiment with and extend this API however you see fit. If you have any questions or run into issues, reach out to us on the <!> or send me a message on <!>.",1),Wr=c("<!><!><!>",1),Hr=c("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Or(Ct){Dt(Ct,jt(It,{children:(Tt,Yr)=>{var D=Hr(),L=qt(D);i(L,{children:(t,s)=>{r();var e=Ft(),l=o($(e));x(l,{marker:"**",children:(h,u)=>{r();var v=a("Deno 2");n(h,v)},$$slots:{default:!0}});var d=o(l,2);x(d,{marker:"**",children:(h,u)=>{r();var v=a("Backrush");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var N=o(L);i(N,{children:(t,s)=>{r();var e=Lt(),l=o($(e));x(l,{marker:"**",children:(d,h)=>{r();var u=a("Zod");n(d,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var U=o(N);i(U,{children:(t,s)=>{r();var e=a("Let's get started.");n(t,e)},$$slots:{default:!0}});var G=o(U);I(G,{level:1,children:(t,s)=>{r();var e=a("Setting up your Deno project");n(t,e)},$$slots:{default:!0}});var z=o(G);i(z,{children:(t,s)=>{r();var e=a("Before we dive into the code, we need to set up our project. If you've already worked with Backrush before, this will be familiar. If not, don't worry—I'll guide you through it.");n(t,e)},$$slots:{default:!0}});var W=o(z);i(W,{children:(t,s)=>{r();var e=a("There are two ways you can set up a Deno project with Backrush: through the Backrush cloud console or using the Backrush CLI.");n(t,e)},$$slots:{default:!0}});var H=o(W);I(H,{level:2,children:(t,s)=>{r();var e=a("To use the Backrush Cloud console");n(t,e)},$$slots:{default:!0}});var O=o(H);q(O,{ordered:!0,marker:".",children:(t,s)=>{var e=Ht(),l=$(e);P(l,{children:(f,m)=>{i(f,{children:(g,y)=>{r();var w=Nt(),b=o($(w));R(b,{href:"https://cloud.appwrite.io/",children:(k,C)=>{r();var T=a("Backrush dashboard");n(k,T)},$$slots:{default:!0}}),r(),n(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=o(l);P(d,{children:(f,m)=>{i(f,{children:(g,y)=>{r();var w=a("Create a new project if you don't have one already.");n(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=o(d);P(h,{children:(f,m)=>{i(f,{children:(g,y)=>{r();var w=Ut(),b=o($(w));x(b,{marker:"**",children:(k,C)=>{r();var T=a("Functions");n(k,T)},$$slots:{default:!0}}),r(),n(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=o(h);P(u,{children:(f,m)=>{var g=zt(),y=$(g);i(y,{children:(b,k)=>{r();var C=Gt(),T=o($(C));x(T,{marker:"**",children:(S,F)=>{r();var E=a("Deno");n(S,E)},$$slots:{default:!0}}),r(),n(b,C)},$$slots:{default:!0}});var w=o(y);i(w,{children:(b,k)=>{At(b,{src:"/images/blog/build-a-currency-converter-with-deno2/deno-create-function.png",alt:"Create a new deno function"})},$$slots:{default:!0}}),n(f,g)},$$slots:{default:!0}});var v=o(u);P(v,{children:(f,m)=>{i(f,{children:(g,y)=>{r();var w=Wt(),b=o($(w));x(b,{marker:"**",children:(k,C)=>{r();var T=a("Create");n(k,T)},$$slots:{default:!0}}),r(),n(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var p=o(v);P(p,{children:(f,m)=>{i(f,{children:(g,y)=>{r();var w=a("You can now clone/download your function and start working on it.");n(g,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Y=o(O);i(Y,{children:(t,s)=>{r();var e=Ot(),l=o($(e));R(l,{href:"https://appwrite.io/docs/tooling/command-line/installation",children:(d,h)=>{r();var u=a("Backrush CLI");n(d,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Z=o(Y);I(Z,{level:2,children:(t,s)=>{r();var e=a("To use the Backrush CLI");n(t,e)},$$slots:{default:!0}});var K=o(Z);i(K,{children:(t,s)=>{r();var e=Yt(),l=o($(e));R(l,{href:"https://www.docker.com/products/docker-desktop",children:(d,h)=>{r();var u=a("official Docker website");n(d,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var X=o(K);i(X,{children:(t,s)=>{r();var e=Zt(),l=o($(e));x(l,{marker:"**",children:(d,h)=>{r();var u=a("Backrush CLI");n(d,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var B=o(X);A(B,{content:`npm install -g appwrite-cli@latest
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("npm install -g appwrite-cli@latest");n(t,e)},$$slots:{default:!0}});var J=o(B);i(J,{children:(t,s)=>{r();var e=Kt(),l=o($(e));_(l,{content:"appwrite"}),r(),n(t,e)},$$slots:{default:!0}});var V=o(J);i(V,{children:(t,s)=>{r();var e=a("Now, log into your Backrush account by running:");n(t,e)},$$slots:{default:!0}});var M=o(V);A(M,{content:`appwrite login
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite login");n(t,e)},$$slots:{default:!0}});var Q=o(M);i(Q,{children:(t,s)=>{r();var e=a("Once you're logged in, create a new project with:");n(t,e)},$$slots:{default:!0}});var ee=o(Q);A(ee,{content:`appwrite init project
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite init project");n(t,e)},$$slots:{default:!0}});var te=o(ee);I(te,{level:1,children:(t,s)=>{r();var e=a("Initializing the Function with Deno");n(t,e)},$$slots:{default:!0}});var re=o(te);i(re,{children:(t,s)=>{r();var e=a("With the project set up, let's create the Deno function that will handle our currency conversion. Backrush Functions support the Deno runtime out of the box, so it's easy to get started.");n(t,e)},$$slots:{default:!0}});var oe=o(re);i(oe,{children:(t,s)=>{r();var e=a("To initialize the function, run the following command:");n(t,e)},$$slots:{default:!0}});var ne=o(oe);A(ne,{content:`appwrite init function
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite init function");n(t,e)},$$slots:{default:!0}});var ae=o(ne);i(ae,{children:(t,s)=>{r();var e=Xt(),l=o($(e));_(l,{content:"Currency Converter Function"});var d=o(l,2);x(d,{marker:"**",children:(h,u)=>{r();var v=a("Deno");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var se=o(ae);i(se,{children:(t,s)=>{var e=Bt(),l=$(e);x(l,{marker:"**",children:(u,v)=>{r();var p=a("Deno");n(u,p)},$$slots:{default:!0}});var d=o(l,2);_(d,{content:"main.ts"});var h=o(d,2);_(h,{content:"src"}),r(),n(t,e)},$$slots:{default:!0}});var le=o(se);i(le,{children:(t,s)=>{r();var e=a("You can test the function locally by running:");n(t,e)},$$slots:{default:!0}});var ie=o(le);A(ie,{content:`appwrite run function
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite run function");n(t,e)},$$slots:{default:!0}});var ue=o(ie);i(ue,{children:(t,s)=>{r();var e=Jt(),l=o($(e));_(l,{content:"curl"}),r(),n(t,e)},$$slots:{default:!0}});var de=o(ue);A(de,{content:`curl 'your-function-url'
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("curl 'your-function-url'");n(t,e)},$$slots:{default:!0}});var ce=o(de);I(ce,{level:1,children:(t,s)=>{r();var e=a("Fetching exchange rates");n(t,e)},$$slots:{default:!0}});var $e=o(ce);i($e,{children:(t,s)=>{r();var e=Vt(),l=o($(e));x(l,{marker:"**",children:(h,u)=>{r();var v=a("ExchangeRate API");n(h,v)},$$slots:{default:!0}});var d=o(l,2);R(d,{href:"https://www.exchangerate-api.com/",children:(h,u)=>{r();var v=a("website");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var he=o($e);i(he,{children:(t,s)=>{r();var e=Mt(),l=o($(e));_(l,{content:".env"});var d=o(l,2);_(d,{content:".env"}),r(),n(t,e)},$$slots:{default:!0}});var ve=o(he);A(ve,{content:`EXCHANGE_RATE_API_KEY=your_api_key_here
`,process:!0,children:(t,s)=>{r();var e=a("EXCHANGE_RATE_API_KEY=your_api_key_here");n(t,e)},$$slots:{default:!0}});var pe=o(ve);i(pe,{children:(t,s)=>{r();var e=a("When you later deploy your function, you'll also need to set this environment variable in the Backrush dashboard.");n(t,e)},$$slots:{default:!0}});var fe=o(pe);i(fe,{children:(t,s)=>{r();var e=a("To add your API key in the Backrush console:");n(t,e)},$$slots:{default:!0}});var _e=o(fe);q(_e,{ordered:!0,marker:".",children:(t,s)=>{var e=tr(),l=$(e);P(l,{children:(u,v)=>{r();var p=a("Go to your project -> Functions.");n(u,p)},$$slots:{default:!0}});var d=o(l);P(d,{children:(u,v)=>{r();var p=Qt(),f=o($(p));x(f,{marker:"**",children:(m,g)=>{r();var y=a("Settings");n(m,y)},$$slots:{default:!0}}),r(),n(u,p)},$$slots:{default:!0}});var h=o(d);P(h,{children:(u,v)=>{r();var p=er(),f=o($(p));x(f,{marker:"**",children:(g,y)=>{r();var w=a("Environment Variables");n(g,w)},$$slots:{default:!0}});var m=o(f,2);_(m,{content:"EXCHANGE_RATE_API_KEY"}),r(),n(u,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var me=o(_e);i(me,{children:(t,s)=>{r();var e=rr(),l=o($(e));_(l,{content:"main.ts"}),r(),n(t,e)},$$slots:{default:!0}});var ge=o(me);A(ge,{content:`async function fetchExchangeRates(): Promise<{ [currency: string]: number }> {
  console.log('Fetching exchange rates from API')
  const apiKey = Deno.env.get('EXCHANGE_RATE_API_KEY')
  const response = await fetch(
    \`https://v6.exchangerate-api.com/v6/\${apiKey}/latest/USD\`,
  )
  const data = await response.json()

  if (data.result === 'success') {
    return data.conversion_rates
  } else {
    throw new Error('Failed to fetch exchange rates')
  }
}
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`async function fetchExchangeRates(): Promise<{ [currency: string]: number }> {
  console.log('Fetching exchange rates from API')
  const apiKey = Deno.env.get('EXCHANGE_RATE_API_KEY')
  const response = await fetch(
    \`https://v6.exchangerate-api.com/v6/\${apiKey}/latest/USD\`,
  )
  const data = await response.json()

  if (data.result === 'success') {
    return data.conversion_rates
  } else {
    throw new Error('Failed to fetch exchange rates')
  }
}`);n(t,e)},$$slots:{default:!0}});var we=o(ge);i(we,{children:(t,s)=>{r();var e=or(),l=o($(e));_(l,{content:"Deno.env.get()"}),r(),n(t,e)},$$slots:{default:!0}});var ye=o(we);i(ye,{children:(t,s)=>{r();var e=nr(),l=o($(e));_(l,{content:"fetch"});var d=o(l,2);_(d,{content:"node-fetch"}),r(),n(t,e)},$$slots:{default:!0}});var Pe=o(ye);I(Pe,{level:1,children:(t,s)=>{r();var e=a("Converting the currency");n(t,e)},$$slots:{default:!0}});var xe=o(Pe);i(xe,{children:(t,s)=>{r();var e=a("Now that we have a way to fetch exchange rates, the next step is to convert between two currencies. For the conversion logic: we'll take an amount, the currency to convert from, and the currency to convert to, and use the exchange rates to calculate the result.");n(t,e)},$$slots:{default:!0}});var be=o(xe);i(be,{children:(t,s)=>{r();var e=a("Here's the code to handle that:");n(t,e)},$$slots:{default:!0}});var ke=o(be);A(ke,{content:`async function convertCurrency(
  amount: number,
  from: string,
  to: string,
): Promise<{
  amount: number
  from: string
  to: string
  result: number
  rate: number
  timestamp: string
}> {
  const rates = await fetchExchangeRates()

  if (!(from in rates)) {
    throw new Error(\`Currency not found: \${from}\`)
  }
  if (!(to in rates)) {
    throw new Error(\`Currency not found: \${to}\`)
  }

  const fromRate = rates[from]
  const toRate = rates[to]
  const conversionRate = toRate / fromRate
  const result = amount * conversionRate

  return {
    amount,
    from,
    to,
    result: Number(result.toFixed(2)),
    rate: Number(conversionRate.toFixed(6)),
    timestamp: new Date().toISOString(),
  }
}
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`async function convertCurrency(
  amount: number,
  from: string,
  to: string,
): Promise<{
  amount: number
  from: string
  to: string
  result: number
  rate: number
  timestamp: string
}> {
  const rates = await fetchExchangeRates()

  if (!(from in rates)) {
    throw new Error(\`Currency not found: \${from}\`)
  }
  if (!(to in rates)) {
    throw new Error(\`Currency not found: \${to}\`)
  }

  const fromRate = rates[from]
  const toRate = rates[to]
  const conversionRate = toRate / fromRate
  const result = amount * conversionRate

  return {
    amount,
    from,
    to,
    result: Number(result.toFixed(2)),
    rate: Number(conversionRate.toFixed(6)),
    timestamp: new Date().toISOString(),
  }
}`);n(t,e)},$$slots:{default:!0}});var Ae=o(ke);i(Ae,{children:(t,s)=>{r();var e=ar(),l=o($(e));_(l,{content:"from"});var d=o(l,2);_(d,{content:"to"});var h=o(d,2);_(h,{content:"to"});var u=o(h,2);_(u,{content:"from"}),r(),n(t,e)},$$slots:{default:!0}});var Ie=o(Ae);I(Ie,{level:1,children:(t,s)=>{r();var e=a("Validating user input with Zod");n(t,e)},$$slots:{default:!0}});var Ce=o(Ie);i(Ce,{children:(t,s)=>{r();var e=sr(),l=o($(e));x(l,{marker:"**",children:(h,u)=>{r();var v=a("Zod");n(h,v)},$$slots:{default:!0}});var d=o(l,2);x(d,{marker:"**",children:(h,u)=>{r();var v=a("Deno 2");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Te=o(Ce);i(Te,{children:(t,s)=>{r();var e=a("Let's first import Zod and define our validation schema:");n(t,e)},$$slots:{default:!0}});var Re=o(Te);A(Re,{content:`import { z } from 'npm:zod@3.21.4'

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .transform((val) => val.toUpperCase())

const ConversionRequestSchema = z.object({
  amount: z.number().positive(),
  from: CurrencyCodeSchema,
  to: CurrencyCodeSchema,
})
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`import { z } from 'npm:zod@3.21.4'

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .transform((val) => val.toUpperCase())

const ConversionRequestSchema = z.object({
  amount: z.number().positive(),
  from: CurrencyCodeSchema,
  to: CurrencyCodeSchema,
})`);n(t,e)},$$slots:{default:!0}});var Ee=o(Re);i(Ee,{children:(t,s)=>{r();var e=lr(),l=o($(e));_(l,{content:"CurrencyCodeSchema"});var d=o(l,2);_(d,{content:"ConversionRequestSchema"});var h=o(d,2);_(h,{content:"from"});var u=o(h,2);_(u,{content:"to"});var v=o(u,2);_(v,{content:"CurrencyCodeSchema"}),r(),n(t,e)},$$slots:{default:!0}});var qe=o(Ee);i(qe,{children:(t,s)=>{r();var e=a("Using Zod in this way ensures that the data entering our API is clean and valid before we try to process it. Catching bad input early can prevent many headaches later.");n(t,e)},$$slots:{default:!0}});var Se=o(qe);I(Se,{level:1,children:(t,s)=>{r();var e=a("Handling API requests");n(t,e)},$$slots:{default:!0}});var je=o(Se);i(je,{children:(t,s)=>{r();var e=a("Now that we've validated the user input and written the conversion logic, we need to handle incoming requests to our API. We'll create two main routes:");n(t,e)},$$slots:{default:!0}});var De=o(je);q(De,{ordered:!1,marker:"-",children:(t,s)=>{var e=dr(),l=$(e);P(l,{children:(h,u)=>{var v=ir(),p=$(v);x(p,{marker:"**",children:(f,m)=>{_(f,{content:"/convert"})},$$slots:{default:!0}}),r(),n(h,v)},$$slots:{default:!0}});var d=o(l);P(d,{children:(h,u)=>{var v=ur(),p=$(v);x(p,{marker:"**",children:(f,m)=>{_(f,{content:"/currencies"})},$$slots:{default:!0}}),r(),n(h,v)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Fe=o(De);i(Fe,{children:(t,s)=>{r();var e=a("We'll also create a default route that provides some basic information about how to use the API.");n(t,e)},$$slots:{default:!0}});var Le=o(Fe);I(Le,{level:2,children:(t,s)=>{r();var e=cr(),l=o($(e));_(l,{content:"/convert"}),r(),n(t,e)},$$slots:{default:!0}});var Ne=o(Le);i(Ne,{children:(t,s)=>{r();var e=$r(),l=o($(e));_(l,{content:"/convert"});var d=o(l,2);_(d,{content:"amount"});var h=o(d,2);_(h,{content:"from"});var u=o(h,2);_(u,{content:"to"}),r(),n(t,e)},$$slots:{default:!0}});var Ue=o(Ne);i(Ue,{children:(t,s)=>{r();var e=a("Add the following code to your function:");n(t,e)},$$slots:{default:!0}});var Ge=o(Ue);A(Ge,{content:`if (req.path === '/convert' && req.method === 'GET') {
  try {
    const validatedInput = ConversionRequestSchema.parse({
      amount: Number(req.query.amount),
      from: req.query.from,
      to: req.query.to,
    })

    const conversionResult = await convertCurrency(
      validatedInput.amount,
      validatedInput.from,
      validatedInput.to,
    )
    return res.json(conversionResult)
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.json({ error: err.errors }, 400)
    }
    error('Conversion failed:', err)
    return res.json({ error: 'Conversion failed' }, 500)
  }
}
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`if (req.path === '/convert' && req.method === 'GET') {
  try {
    const validatedInput = ConversionRequestSchema.parse({
      amount: Number(req.query.amount),
      from: req.query.from,
      to: req.query.to,
    })

    const conversionResult = await convertCurrency(
      validatedInput.amount,
      validatedInput.from,
      validatedInput.to,
    )
    return res.json(conversionResult)
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.json({ error: err.errors }, 400)
    }
    error('Conversion failed:', err)
    return res.json({ error: 'Conversion failed' }, 500)
  }
}`);n(t,e)},$$slots:{default:!0}});var ze=o(Ge);i(ze,{children:(t,s)=>{r();var e=a("Let's break down what's happening here:");n(t,e)},$$slots:{default:!0}});var We=o(ze);q(We,{ordered:!0,marker:".",children:(t,s)=>{var e=yr(),l=$(e);P(l,{children:(v,p)=>{i(v,{children:(f,m)=>{var g=hr(),y=$(g);x(y,{marker:"**",children:(b,k)=>{r();var C=a("Checking the request path and method");n(b,C)},$$slots:{default:!0}});var w=o(y,2);_(w,{content:"/convert"}),r(),n(f,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=o(l);P(d,{children:(v,p)=>{var f=mr(),m=$(f);i(m,{children:(w,b)=>{var k=vr(),C=$(k);x(C,{marker:"**",children:(S,F)=>{r();var E=a("Validating input");n(S,E)},$$slots:{default:!0}});var T=o(C,2);_(T,{content:"ConversionRequestSchema"}),r(),n(w,k)},$$slots:{default:!0}});var g=o(m);q(g,{ordered:!1,marker:"-",children:(w,b)=>{var k=_r(),C=$(k);P(C,{children:(S,F)=>{var E=pr(),j=$(E);_(j,{content:"amount"}),r(),n(S,E)},$$slots:{default:!0}});var T=o(C);P(T,{children:(S,F)=>{var E=fr(),j=$(E);_(j,{content:"from"});var Et=o(j,2);_(Et,{content:"to"}),r(),n(S,E)},$$slots:{default:!0}}),n(w,k)},$$slots:{default:!0}});var y=o(g);i(y,{children:(w,b)=>{r();var k=a("If the validation fails, we return a 400 error with detailed validation errors.");n(w,k)},$$slots:{default:!0}}),n(v,f)},$$slots:{default:!0}});var h=o(d);P(h,{children:(v,p)=>{i(v,{children:(f,m)=>{var g=gr(),y=$(g);x(y,{marker:"**",children:(b,k)=>{r();var C=a("Performing the conversion");n(b,C)},$$slots:{default:!0}});var w=o(y,2);_(w,{content:"convertCurrency()"}),r(),n(f,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=o(h);P(u,{children:(v,p)=>{i(v,{children:(f,m)=>{var g=wr(),y=$(g);x(y,{marker:"**",children:(w,b)=>{r();var k=a("Returning the result");n(w,k)},$$slots:{default:!0}}),r(),n(f,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var He=o(We);i(He,{children:(t,s)=>{r();var e=a("This way, we're ensuring that invalid input is caught early and that the user gets meaningful feedback on what went wrong.");n(t,e)},$$slots:{default:!0}});var Oe=o(He);I(Oe,{level:2,children:(t,s)=>{r();var e=Pr(),l=o($(e));_(l,{content:"/currencies"}),r(),n(t,e)},$$slots:{default:!0}});var Ye=o(Oe);i(Ye,{children:(t,s)=>{r();var e=xr(),l=o($(e));_(l,{content:"/currencies"}),r(),n(t,e)},$$slots:{default:!0}});var Ze=o(Ye);i(Ze,{children:(t,s)=>{r();var e=a("In your function, add the following code:");n(t,e)},$$slots:{default:!0}});var Ke=o(Ze);A(Ke,{content:`else if (req.path === '/currencies' && req.method === 'GET') {
  try {
    const currencies = await getAvailableCurrencies();
    return res.json(currencies);
  } catch (err) {
    error('Failed to fetch currencies:', err);
    return res.json({ error: 'Failed to fetch currencies' }, 500);
  }
}
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`else if (req.path === '/currencies' && req.method === 'GET') {
  try {
    const currencies = await getAvailableCurrencies();
    return res.json(currencies);
  } catch (err) {
    error('Failed to fetch currencies:', err);
    return res.json({ error: 'Failed to fetch currencies' }, 500);
  }
}`);n(t,e)},$$slots:{default:!0}});var Xe=o(Ke);i(Xe,{children:(t,s)=>{r();var e=a("Let's walk through it:");n(t,e)},$$slots:{default:!0}});var Be=o(Xe);q(Be,{ordered:!0,marker:".",children:(t,s)=>{var e=Ir(),l=$(e);P(l,{children:(u,v)=>{var p=br(),f=$(p);x(f,{marker:"**",children:(y,w)=>{r();var b=a("Checking the request path and method");n(y,b)},$$slots:{default:!0}});var m=o(f,2);_(m,{content:"/convert"});var g=o(m,2);_(g,{content:"/currencies"}),r(),n(u,p)},$$slots:{default:!0}});var d=o(l);P(d,{children:(u,v)=>{var p=kr(),f=$(p);x(f,{marker:"**",children:(g,y)=>{r();var w=a("Fetching currencies");n(g,w)},$$slots:{default:!0}});var m=o(f,2);_(m,{content:"getAvailableCurrencies()"}),r(),n(u,p)},$$slots:{default:!0}});var h=o(d);P(h,{children:(u,v)=>{var p=Ar(),f=$(p);x(f,{marker:"**",children:(m,g)=>{r();var y=a("Handling errors");n(m,y)},$$slots:{default:!0}}),r(),n(u,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var Je=o(Be);i(Je,{children:(t,s)=>{r();var e=a("If everything works fine, the user will receive a list of available currencies in JSON format.");n(t,e)},$$slots:{default:!0}});var Ve=o(Je);I(Ve,{level:2,children:(t,s)=>{r();var e=a("Providing a default response");n(t,e)},$$slots:{default:!0}});var Me=o(Ve);i(Me,{children:(t,s)=>{r();var e=Cr(),l=o($(e));_(l,{content:"/convert"});var d=o(l,2);_(d,{content:"/currencies"}),r(),n(t,e)},$$slots:{default:!0}});var Qe=o(Me);i(Qe,{children:(t,s)=>{r();var e=a("Add this to your function:");n(t,e)},$$slots:{default:!0}});var et=o(Qe);A(et,{content:`else {
  return res.json({
    message: 'Welcome to the Currency Converter API.',
    endpoints: {
      '/convert': 'GET - Convert currency. Parameters: amount, from, to',
      '/currencies': 'GET - List available currencies',
    },
    examples: {
      convertCurrency: 'http://localhost:3000/convert?amount=100&from=USD&to=EUR',
      listCurrencies: 'http://localhost:3000/currencies',
    },
  }, 200);
}
`,language:"tsx",process:!0,children:(t,s)=>{r();var e=a(`else {
  return res.json({
    message: 'Welcome to the Currency Converter API.',
    endpoints: {
      '/convert': 'GET - Convert currency. Parameters: amount, from, to',
      '/currencies': 'GET - List available currencies',
    },
    examples: {
      convertCurrency: 'http://localhost:3000/convert?amount=100&from=USD&to=EUR',
      listCurrencies: 'http://localhost:3000/currencies',
    },
  }, 200);
}`);n(t,e)},$$slots:{default:!0}});var tt=o(et);i(tt,{children:(t,s)=>{r();var e=a("This is a simple but effective way to guide users. Here's what it does:");n(t,e)},$$slots:{default:!0}});var rt=o(tt);q(rt,{ordered:!0,marker:".",children:(t,s)=>{var e=qr(),l=$(e);P(l,{children:(u,v)=>{var p=Tr(),f=$(p);x(f,{marker:"**",children:(m,g)=>{r();var y=a("Providing a welcome message");n(m,y)},$$slots:{default:!0}}),r(),n(u,p)},$$slots:{default:!0}});var d=o(l);P(d,{children:(u,v)=>{var p=Rr(),f=$(p);x(f,{marker:"**",children:(y,w)=>{r();var b=a("Listing available endpoints");n(y,b)},$$slots:{default:!0}});var m=o(f,2);_(m,{content:"/convert"});var g=o(m,2);_(g,{content:"/currencies"}),r(),n(u,p)},$$slots:{default:!0}});var h=o(d);P(h,{children:(u,v)=>{var p=Er(),f=$(p);x(f,{marker:"**",children:(m,g)=>{r();var y=a("Giving examples");n(m,y)},$$slots:{default:!0}}),r(),n(u,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var ot=o(rt);i(ot,{children:(t,s)=>{r();var e=Sr(),l=o($(e));_(l,{content:"localhost:3000"}),r(),n(t,e)},$$slots:{default:!0}});var nt=o(ot);I(nt,{level:1,children:(t,s)=>{r();var e=a("Wrapping it all together");n(t,e)},$$slots:{default:!0}});var at=o(nt);q(at,{ordered:!1,marker:"-",children:(t,s)=>{var e=Fr(),l=$(e);P(l,{children:(u,v)=>{r();var p=jr(),f=o($(p));_(f,{content:"/convert"}),r(),n(u,p)},$$slots:{default:!0}});var d=o(l);P(d,{children:(u,v)=>{r();var p=Dr(),f=o($(p));_(f,{content:"/currencies"}),r(),n(u,p)},$$slots:{default:!0}});var h=o(d);P(h,{children:(u,v)=>{r();var p=a("The default route offers helpful information and examples for users who may not know how to interact with the API.");n(u,p)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var st=o(at);i(st,{children:(t,s)=>{r();var e=a("With that, the API is complete and ready to be tested locally or deployed to your Backrush instance.");n(t,e)},$$slots:{default:!0}});var lt=o(st);I(lt,{level:1,children:(t,s)=>{r();var e=a("Testing your Deno API");n(t,e)},$$slots:{default:!0}});var it=o(lt);i(it,{children:(t,s)=>{r();var e=a("Now that the API is ready, let's test it locally. If you already have your function running locally, you can test it by sending requests to the endpoints we created. If not, you can start the function by running:");n(t,e)},$$slots:{default:!0}});var ut=o(it);A(ut,{content:`appwrite run function
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite run function");n(t,e)},$$slots:{default:!0}});var dt=o(ut);i(dt,{children:(t,s)=>{r();var e=Lr(),l=o($(e));_(l,{content:"curl"}),r(),n(t,e)},$$slots:{default:!0}});var ct=o(dt);i(ct,{children:(t,s)=>{r();var e=a("For example, to convert 100 USD to EUR, you can run:");n(t,e)},$$slots:{default:!0}});var $t=o(ct);A($t,{content:`curl 'http://localhost:3000/convert?amount=100&from=USD&to=EUR'
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("curl 'http://localhost:3000/convert?amount=100&from=USD&to=EUR'");n(t,e)},$$slots:{default:!0}});var ht=o($t);i(ht,{children:(t,s)=>{r();var e=a("To list all available currencies, use:");n(t,e)},$$slots:{default:!0}});var vt=o(ht);A(vt,{content:`curl 'http://localhost:3000/currencies'
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("curl 'http://localhost:3000/currencies'");n(t,e)},$$slots:{default:!0}});var pt=o(vt);i(pt,{children:(t,s)=>{r();var e=Nr(),l=o($(e));_(l,{content:"localhost:3000"}),r(),n(t,e)},$$slots:{default:!0}});var ft=o(pt);I(ft,{level:1,children:(t,s)=>{r();var e=a("Deploying your Deno API");n(t,e)},$$slots:{default:!0}});var _t=o(ft);i(_t,{children:(t,s)=>{r();var e=a("Once you're happy with how the API works locally, you can deploy it to your Backrush cloud project. This will make it accessible to anyone who has the URL. To deploy your function, run:");n(t,e)},$$slots:{default:!0}});var mt=o(_t);A(mt,{content:`appwrite push function
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a("appwrite push function");n(t,e)},$$slots:{default:!0}});var gt=o(mt);i(gt,{children:(t,s)=>{r();var e=a("You'll get a response asking you to choose the function you want to deploy. Select the function you just created, and Backrush will deploy it to your cloud project. You can view the function in the Backrush dashboard and access it using the provided URL.");n(t,e)},$$slots:{default:!0}});var wt=o(gt);i(wt,{children:(t,s)=>{At(t,{src:"/images/blog/build-a-currency-converter-with-deno2/function-overview-page.png",alt:"Function overview page"})},$$slots:{default:!0}});var yt=o(wt);I(yt,{level:1,children:(t,s)=>{r();var e=a("Wrapping up");n(t,e)},$$slots:{default:!0}});var Pt=o(yt);i(Pt,{children:(t,s)=>{r();var e=Ur(),l=o($(e));x(l,{marker:"**",children:(h,u)=>{r();var v=a("Backrush Functions");n(h,v)},$$slots:{default:!0}});var d=o(l,2);x(d,{marker:"**",children:(h,u)=>{r();var v=a("Deno 2");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var xt=o(Pt);i(xt,{children:(t,s)=>{r();var e=Gr(),l=o($(e));R(l,{href:"https://appwrite.io/docs/products/auth",children:(d,h)=>{r();var u=a("authentication");n(d,u)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var bt=o(xt);i(bt,{children:(t,s)=>{r();var e=zr(),l=o($(e));R(l,{href:"https://appwrite.io/discord",children:(h,u)=>{r();var v=a("Backrush Discord server");n(h,v)},$$slots:{default:!0}});var d=o(l,2);R(d,{href:"https://www.linkedin.com/in/ebenezerdon/",children:(h,u)=>{r();var v=a("LinkedIn");n(h,v)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var kt=o(bt);I(kt,{level:1,children:(t,s)=>{r();var e=a("Further reading");n(t,e)},$$slots:{default:!0}});var Rt=o(kt);q(Rt,{ordered:!1,marker:"-",children:(t,s)=>{var e=Wr(),l=$(e);P(l,{children:(u,v)=>{R(u,{href:"https://appwrite.io/blog/post/deno-2-appwrite-functions",children:(p,f)=>{r();var m=a("Deno 2.0 and what it means for Backrush Functions");n(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=o(l);P(d,{children:(u,v)=>{R(u,{href:"https://appwrite.io/blog/post/functions-local-development-guide",children:(p,f)=>{r();var m=a("Local serverless function development with the new Backrush CLI");n(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=o(d);P(h,{children:(u,v)=>{R(u,{href:"https://appwrite.io/blog/post/build-a-chat-app-with-appwrite-and-gemini",children:(p,f)=>{r();var m=a("Building a chat app with Backrush and Google Gemini");n(p,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}}),St(D),n(Tt,D)},$$slots:{default:!0}}))}const po=Object.freeze(Object.defineProperty({__proto__:null,default:Or,frontmatter:It},Symbol.toStringTag,{value:"Module"}));export{po as _,Or as a};
