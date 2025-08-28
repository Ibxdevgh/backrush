import{t as p,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ae,n as r,s as n,f as $,r as Ge}from"./NgVQVlRK.js";import{n as je}from"./B4IyMRKX.js";import{H as b}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as we}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as h}from"./DXp9_3zM.js";import{F as w}from"./OFUKRh55.js";import{L as Te,I as P}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as k}from"./yHjwcyUH.js";import{L as m}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Be}from"./CEkRzcqJ.js";const Pe={layout:"post",title:"Why you need to try the new Bun function runtime",description:"Why Bun's features are perfect for building Backrush Functions.",date:"2024-03-01T00:00:00.000Z",cover:"/images/blog/why-you-need-to-try-the-new-bun-runtime/cover.png",timeToRead:15,author:"vincent-ge",category:"product",featured:!1};var Ye=p("When Bun announced their 1.0 release, marking Bun stable and production-ready, we excitedly began working on a Bun runtime for <!>.",1),Fe=p("Bun has its own <!>, which is just <!>. You can still use <!> or <!> or <!>, but we like the idea that Bun just gives you something so you don’t need to make one more decision.",1),He=p("Bun is also fast, like really fast. I ran package installs on fresh containers for a <!> project, here are the numbers.",1),Se=p("This is really important to Backrush Function developers during development because it shaves off seconds of time each time you deploy code to Backrush Cloud. These seconds add up to minutes if you’re deploying and testing code 10 times in an hour. Try <!> on your projects and see how much time it can save for you.",1),Ee=p("You don’t need to run <!> to transpile Typescript using Bun. This is convenient, saves time, and avoids a messy <!> folder. It just works.",1),Re=p("Again, in the context of an Backrush Function, the build time you can save is pretty significant. Here are the deploy times for a simple typescript <!> template in Bun and Node.js",1),Ce=p("<!> build time",1),Ue=p("<!> build time",1),Ke=p("Bun implements many web standards, like <!>, <!>, <!>, and other useful tools. This means you no longer need to install <!>, <!>, and dozens of other libraries in your projects just to do simple things like making an HTTP request.",1),qe=p("Bun will happily let you mix <!> and <!> files into your code. Bun will just transpile your <!>.",1),Le=p("Write some simple JSX and render it to a readable stream with <!>.",1),Me=p("You can get your daily Capybara GIF served straight from a function: <!>",1),Ne=p("Bun comes packaged with a test runner. Running <!> will find all files with format <!> and just run them. Simple as that.",1),De=p("It’s lightweight, no configuration is needed, and it is perfect for Backrush Functions. For example, we can run tests to check if the API key we configured is valid and see if the <!> utility function works. The test runner is lightning fast an we can run them as a part of the Backrush Function’s build process.",1),We=p("Bun is fast. In most cases, it is noticeably faster than Node.js. You can find a lot of great benchmarks online, like <!>. This is largely because Bun uses <!>, a fast and robust programming language. It’s been covered a lot so that we won’t go into detail here.",1),Je=p("There’s a lot to love about <!>, and we only explored a few exciting differences that can be leveraged in the Bun Backrush Function runtime. Bun also has a built-in web server, high-performance file I/O, snapshot testing, and much more to offer.",1),Xe=p("If you’re curious, you can also try Bun in an Backrush Function by creating your first <!> project. The free plan gives you access to three Functions, which lets you compare and contrast Node.js, Deno, and Bun in identical containerized environments.",1),ze=p("<!><!><!><!><!>",1),Oe=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ze(xe){Be(xe,je(Pe,{children:(ke,Ve)=>{var I=Oe(),A=Ae(I);i(A,{children:(t,s)=>{r();var e=Ye(),l=n($(e));m(l,{href:"/docs/products/functions",children:(d,c)=>{r();var u=a("Backrush Functions");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var G=n(A);i(G,{children:(t,s)=>{r();var e=a("We loved the idea of Bun, because it’s more than just another Node runtime but a whole set of tools. Bun does everything from dependency management to testing and beyond with consistent DX and light-speed performance. This idea of being simple, reducing distractions, and giving developers all the tools in one place to just build stuff resonated with Backrush’s product philosophy.");o(t,e)},$$slots:{default:!0}});var j=n(G);i(j,{children:(t,s)=>{r();var e=a("Here’s a small selection of cool features that make it particularly useful as an Backrush Function runtime.");o(t,e)},$$slots:{default:!0}});var T=n(j);b(T,{level:1,children:(t,s)=>{r();var e=a("Dependency management");o(t,e)},$$slots:{default:!0}});var B=n(T);i(B,{children:(t,s)=>{r();var e=Fe(),l=n($(e));m(l,{href:"https://bun.sh/package-manager",children:(f,_)=>{r();var v=a("dependency management tool");o(f,v)},$$slots:{default:!0}});var d=n(l,2);h(d,{content:"bun install"});var c=n(d,2);h(c,{content:"npm"});var u=n(c,2);h(u,{content:"yarn"});var g=n(u,2);h(g,{content:"pnpm"}),r(),o(t,e)},$$slots:{default:!0}});var Y=n(B);i(Y,{children:(t,s)=>{r();var e=He(),l=n($(e));h(l,{content:"create svelte@latest"}),r(),o(t,e)},$$slots:{default:!0}});var F=n(Y);i(F,{children:(t,s)=>{r();var e=a("Good ol’ NPM.");o(t,e)},$$slots:{default:!0}});var H=n(F);w(H,{content:`$ npm create svelte@latest my-app-node
$ cd my-app-node && npm install

npm install

added 111 packages, and audited 112 packages in 6s

11 packages are looking for funding
    run \`npm fund\` for details

found 0 vulnerabilities
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`$ npm create svelte@latest my-app-node
$ cd my-app-node && npm install

npm install

added 111 packages, and audited 112 packages in 6s

11 packages are looking for funding
    run \`npm fund\` for details

found 0 vulnerabilities`);o(t,e)},$$slots:{default:!0}});var S=n(H);i(S,{children:(t,s)=>{r();var e=a("Bun install.");o(t,e)},$$slots:{default:!0}});var E=n(S);w(E,{content:`$ bun create svelte@latest my-app-bun
$ cd my-app-bun && bun install

bun install v1.0.23 (83f2432d)

    + @fontsource/fira-mono@4.5.10 (v5.0.8 available)
    + @neoconfetti/svelte@1.0.0 (v2.2.1 available)
    + @sveltejs/adapter-auto@3.1.0
    + @sveltejs/kit@2.3.3
    + @sveltejs/vite-plugin-svelte@3.0.1
    + svelte@4.2.8
    + svelte-check@3.6.3
    + typescript@5.3.3
    + vite@5.0.11

warn: @sveltejs/kit's postinstall script took 1.2s

    111 packages installed [1336.00ms]
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`$ bun create svelte@latest my-app-bun
$ cd my-app-bun && bun install

bun install v1.0.23 (83f2432d)

    + @fontsource/fira-mono@4.5.10 (v5.0.8 available)
    + @neoconfetti/svelte@1.0.0 (v2.2.1 available)
    + @sveltejs/adapter-auto@3.1.0
    + @sveltejs/kit@2.3.3
    + @sveltejs/vite-plugin-svelte@3.0.1
    + svelte@4.2.8
    + svelte-check@3.6.3
    + typescript@5.3.3
    + vite@5.0.11

warn: @sveltejs/kit's postinstall script took 1.2s

    111 packages installed [1336.00ms]`);o(t,e)},$$slots:{default:!0}});var R=n(E);i(R,{children:(t,s)=>{r();var e=Se(),l=n($(e));h(l,{content:"bun install"}),r(),o(t,e)},$$slots:{default:!0}});var C=n(R);b(C,{level:1,children:(t,s)=>{r();var e=a("Typescript out of the box");o(t,e)},$$slots:{default:!0}});var U=n(C);i(U,{children:(t,s)=>{r();var e=Ee(),l=n($(e));h(l,{content:"tsc"});var d=n(l,2);h(d,{content:"dist/"}),r(),o(t,e)},$$slots:{default:!0}});var K=n(U);i(K,{children:(t,s)=>{r();var e=Re(),l=n($(e));m(l,{href:"https://github.com/appwrite/templates",children:(d,c)=>{r();var u=a("Starter Function");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var q=n(K);i(q,{children:(t,s)=>{var e=Ce(),l=$(e);k(l,{marker:"**",children:(d,c)=>{r();var u=a("Bun");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var L=n(q);i(L,{children:(t,s)=>{we(t,{src:"/images/blog/why-you-need-to-try-the-new-bun-runtime/bun-buildtime.png",alt:"Bun build time"})},$$slots:{default:!0}});var M=n(L);i(M,{children:(t,s)=>{var e=Ue(),l=$(e);k(l,{marker:"**",children:(d,c)=>{r();var u=a("Typescript");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var N=n(M);i(N,{children:(t,s)=>{we(t,{src:"/images/blog/why-you-need-to-try-the-new-bun-runtime/ts-buildtime.png",alt:"Typescript build time"})},$$slots:{default:!0}});var D=n(N);b(D,{level:1,children:(t,s)=>{r();var e=a("Implements standard Web APIs");o(t,e)},$$slots:{default:!0}});var W=n(D);i(W,{children:(t,s)=>{r();var e=Ke(),l=n($(e));h(l,{content:"fetch"});var d=n(l,2);h(d,{content:"FormData"});var c=n(d,2);h(c,{content:"WebSocket"});var u=n(c,2);m(u,{href:"https://www.npmjs.com/package/node-fetch",children:(f,_)=>{r();var v=a("node-fetch");o(f,v)},$$slots:{default:!0}});var g=n(u,2);m(g,{href:"https://www.npmjs.com/package/formdata-node",children:(f,_)=>{r();var v=a("formdata-node");o(f,v)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var J=n(W);i(J,{children:(t,s)=>{r();var e=a("For example, I can write this Backrush Function to fetch random Capybara with 0 dependencies.");o(t,e)},$$slots:{default:!0}});var X=n(J);w(X,{content:`export default async ({ req, res, log, error }) => {
    if(req.method !== 'GET') {
        return res.text('Not found', 404);
    }

    const response = await fetch(\`https://api.giphy.com/v1/gifs/random?api_key=\${process.env["GIPHY_API_KEY"]}&tag=capybara\`);
    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;
    return res.json({
        capybara: gifUrl,
        message: 'Capybara of the day!'
    });
};
`,language:"js",process:!0,children:(t,s)=>{r();var e=a(`export default async ({ req, res, log, error }) => {
    if(req.method !== 'GET') {
        return res.text('Not found', 404);
    }

    const response = await fetch(\`https://api.giphy.com/v1/gifs/random?api_key=\${process.env["GIPHY_API_KEY"]}&tag=capybara\`);
    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;
    return res.json({
        capybara: gifUrl,
        message: 'Capybara of the day!'
    });
};`);o(t,e)},$$slots:{default:!0}});var z=n(X);i(z,{children:(t,s)=>{r();var e=a("Fewer dependencies, fewer decisions to make, and more focus on building cool stuff.");o(t,e)},$$slots:{default:!0}});var O=n(z);i(O,{children:(t,s)=>{k(t,{marker:"**",children:(e,l)=>{r();var d=a("JSX out of the box");o(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var Z=n(O);i(Z,{children:(t,s)=>{r();var e=qe(),l=n($(e));h(l,{content:"tsx"});var d=n(l,2);h(d,{content:"jsx"});var c=n(d,2);m(c,{href:"https://bun.sh/docs/runtime/jsx",children:(u,g)=>{r();var f=a("JSX into vanilla JS before execution");o(u,f)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var V=n(Z);i(V,{children:(t,s)=>{r();var e=a("This is perfect for Backrush Functions! Backrush Functions exposes HTTPS endpoints for each function, which lets you build simple web forms for collecting feedback, gathering contact information, or displaying a random GIF of a capybara.");o(t,e)},$$slots:{default:!0}});var Q=n(V);i(Q,{children:(t,s)=>{r();var e=Le(),l=n($(e));h(l,{content:"react-dom"}),r(),o(t,e)},$$slots:{default:!0}});var ee=n(Q);i(ee,{children:(t,s)=>{r();var e=a("Then we can return this in our Backrush Function.");o(t,e)},$$slots:{default:!0}});var te=n(ee);w(te,{content:`import { renderToReadableStream } from "react-dom/server";

const styles = \`
body {
    font-family: sans-serif;
    text-align: center;
}
div {
    max-width: 600px;
    margin: 0 auto;
}
img {
    width: 100%;
    height: auto;
}\`;

const GIPHY_API = "https://api.giphy.com/v1/gifs/random";

export async function fetchGif(tag: string) {
    const response = await fetch(
    \`\${GIPHY_API}?api_key=\${process.env.GIPHY_API_KEY}&tag=\${tag}\`
    );
    const { data } = (await response.json()) as any;
    return data.images.fixed_height.url;
}

export default async function handler({ req, res, log, error }: any) {
    if (!process.env.GIPHY_API_KEY) {
    throw new Error("GIPHY_API_KEY is not set.");
    }
    if (req.method !== "GET") {
    return res.json(
        {
        message: "Method not allowed.",
        },
        405
    );
    }

    const gifUrl = await fetchGif("Cute capybara");

    // We're returning JSX!
    const html = await renderToReadableStream(
    <>
        <style dangerouslySetInnerHTML={{__html: styles }}></style>
        <div>
        <img src={gifUrl} alt="Random capybara" /> 
        <h1>Capybara of the day!</h1>
        </div>
    </>
    );

    return res.text(html, 200, {
        "Content-Type": "text/html; charset=utf-8",
    });
}
`,language:"jsx",process:!0,children:(t,s)=>{r();var e=a(`import { renderToReadableStream } from "react-dom/server";

const styles = \`
body {
    font-family: sans-serif;
    text-align: center;
}
div {
    max-width: 600px;
    margin: 0 auto;
}
img {
    width: 100%;
    height: auto;
}\`;

const GIPHY_API = "https://api.giphy.com/v1/gifs/random";

export async function fetchGif(tag: string) {
    const response = await fetch(
    \`\${GIPHY_API}?api_key=\${process.env.GIPHY_API_KEY}&tag=\${tag}\`
    );
    const { data } = (await response.json()) as any;
    return data.images.fixed_height.url;
}

export default async function handler({ req, res, log, error }: any) {
    if (!process.env.GIPHY_API_KEY) {
    throw new Error("GIPHY_API_KEY is not set.");
    }
    if (req.method !== "GET") {
    return res.json(
        {
        message: "Method not allowed.",
        },
        405
    );
    }

    const gifUrl = await fetchGif("Cute capybara");

    // We're returning JSX!
    const html = await renderToReadableStream(
    <>
        <style dangerouslySetInnerHTML={{__html: styles }}></style>
        <div>
        <img src={gifUrl} alt="Random capybara" /> 
        <h1>Capybara of the day!</h1>
        </div>
    </>
    );

    return res.text(html, 200, {
        "Content-Type": "text/html; charset=utf-8",
    });
}`);o(t,e)},$$slots:{default:!0}});var ne=n(te);i(ne,{children:(t,s)=>{r();var e=Me(),l=n($(e));m(l,{href:"https://65a6fc2c08488a5e7b0d.appwrite.global/",children:(d,c)=>{r();var u=a("https://65a6fc2c08488a5e7b0d.appwrite.global/");o(d,u)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var re=n(ne);b(re,{level:1,children:(t,s)=>{r();var e=a("Run tests");o(t,e)},$$slots:{default:!0}});var oe=n(re);i(oe,{children:(t,s)=>{r();var e=Ne(),l=n($(e));h(l,{content:"bun test"});var d=n(l,2);h(d,{content:"*.test.*"}),r(),o(t,e)},$$slots:{default:!0}});var se=n(oe);i(se,{children:(t,s)=>{r();var e=De(),l=n($(e));h(l,{content:"getGif"}),r(),o(t,e)},$$slots:{default:!0}});var ae=n(se);i(ae,{children:(t,s)=>{r();var e=a("For example, we can define these tests.");o(t,e)},$$slots:{default:!0}});var le=n(ae);w(le,{content:`import { describe, expect, test, beforeAll } from "bun:test";
// import some files to test
import { getGif } from "../src/getGif";

describe("getGifs", () => {
    test("API key exists", () => {
    expect('GIPHY_API_KEY' in process.env).toBe(true);
    expect(typeof process.env['GIPHY_API_KEY']).toBe('string');
    });

    test("getGif returns a valid URL", async () => {
    const gifUrl = await getGif(process.env['GIPHY_API_KEY']);
    expect(gifUrl).toMatch(/^(http|https):\\/\\/[^ "]+$/);
    });

    // Sanity check to make sure it will make my builds fail.
    // test("This will always fail", async () => {
    //   expect(true).toBe(false);
    // });
});
`,language:"js",process:!0,children:(t,s)=>{r();var e=a(`import { describe, expect, test, beforeAll } from "bun:test";
// import some files to test
import { getGif } from "../src/getGif";

describe("getGifs", () => {
    test("API key exists", () => {
    expect('GIPHY_API_KEY' in process.env).toBe(true);
    expect(typeof process.env['GIPHY_API_KEY']).toBe('string');
    });

    test("getGif returns a valid URL", async () => {
    const gifUrl = await getGif(process.env['GIPHY_API_KEY']);
    expect(gifUrl).toMatch(/^(http|https):\\/\\/[^ "]+$/);
    });

    // Sanity check to make sure it will make my builds fail.
    // test("This will always fail", async () => {
    //   expect(true).toBe(false);
    // });
});`);o(t,e)},$$slots:{default:!0}});var ie=n(le);i(ie,{children:(t,s)=>{r();var e=a("Each time we deploy, we can configure Backrush Functions to run the tests after build. For this example, we use the build commands:");o(t,e)},$$slots:{default:!0}});var de=n(ie);w(de,{content:`bun install
bun test
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`bun install
bun test`);o(t,e)},$$slots:{default:!0}});var ue=n(de);i(ue,{children:(t,s)=>{r();var e=a("This will install dependencies and run tests before activating a deployment.");o(t,e)},$$slots:{default:!0}});var ce=n(ue);w(ce,{content:`Preparing for build ...
Building ...
bun install v1.0.0 (822a00c4)
Resolving dependencies
Resolved, downloaded and extracted [2]
Saved lockfile

- @types/react-dom@18.2.18
- prettier@3.2.2
- node-appwrite@9.0.0
- react@18.2.0
- react-dom@18.2.0

21 packages installed [284.00ms]
bun test v1.0.0 (822a00c4)

test/capy.test.ts:
[0m[32m(pass)[0m getGifs > API key exists [0.12ms]
[0m[32m(pass)[0m getGifs > getGif returns a valid URL [155.40ms]

2 pass
0 fail
3 expect() calls
Ran 2 tests across 1 files. [167.00ms]
Packing build ...
Build finished.
`,language:"bash",process:!0,children:(t,s)=>{r();var e=a(`Preparing for build ...
Building ...
bun install v1.0.0 (822a00c4)
Resolving dependencies
Resolved, downloaded and extracted [2]
Saved lockfile

- @types/react-dom@18.2.18
- prettier@3.2.2
- node-appwrite@9.0.0
- react@18.2.0
- react-dom@18.2.0

21 packages installed [284.00ms]
bun test v1.0.0 (822a00c4)

test/capy.test.ts:
[0m[32m(pass)[0m getGifs > API key exists [0.12ms]
[0m[32m(pass)[0m getGifs > getGif returns a valid URL [155.40ms]

2 pass
0 fail
3 expect() calls
Ran 2 tests across 1 files. [167.00ms]
Packing build ...
Build finished.`);o(t,e)},$$slots:{default:!0}});var pe=n(ce);i(pe,{children:(t,s)=>{r();var e=a("If the tests don’t pass, the build will not be deployed on Backrush Functions.");o(t,e)},$$slots:{default:!0}});var fe=n(pe);b(fe,{level:1,children:(t,s)=>{r();var e=a("Performance");o(t,e)},$$slots:{default:!0}});var $e=n(fe);i($e,{children:(t,s)=>{r();var e=We(),l=n($(e));m(l,{href:"https://medium.com/deno-the-complete-reference/is-bun-really-much-faster-than-node-js-e5b15942a8e8",children:(c,u)=>{r();var g=a('"Is Bun really much faster than Node.js?" by Mayank Choubey');o(c,g)},$$slots:{default:!0}});var d=n(l,2);k(d,{marker:"**",children:(c,u)=>{m(c,{href:"https://ziglang.org/",children:(g,f)=>{r();var _=a("Zig");o(g,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var he=n($e);i(he,{children:(t,s)=>{r();var e=a("This increased performance is particularly noticeable when you write long-running Backrush Functions, especially those that are I/O bound and handle lots of requests. Developers often choose Backrush Functions as a way to extend Backrush with custom endpoints, build integrations, and implement server-side logic. This performance increase is particularly attractive.");o(t,e)},$$slots:{default:!0}});var me=n(he);b(me,{level:1,children:(t,s)=>{r();var e=a("More to explore");o(t,e)},$$slots:{default:!0}});var ve=n(me);i(ve,{children:(t,s)=>{r();var e=Je(),l=n($(e));m(l,{href:"https://bun.sh/",children:(d,c)=>{r();var u=a("Bun");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var ge=n(ve);i(ge,{children:(t,s)=>{r();var e=Xe(),l=n($(e));m(l,{href:"https://cloud.appwrite.io/",children:(d,c)=>{r();var u=a("Backrush Cloud");o(d,u)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var _e=n(ge);i(_e,{children:(t,s)=>{r();var e=a("You can try your first Bun, Node.js, or Deno function on Backrush Cloud without writing a single line of code through Backrush Function templates. Backrush will clone template functions to your GitHub profile and set up automatic deployments so you can start building immediately.");o(t,e)},$$slots:{default:!0}});var ye=n(_e);b(ye,{level:1,children:(t,s)=>{r();var e=a("Resources");o(t,e)},$$slots:{default:!0}});var be=n(ye);i(be,{children:(t,s)=>{r();var e=a("Visit our documentation to learn more about the Bun, join us on Discord to be part of the discussion, view our blog and YouTube channel, or visit our GitHub repository to see our open-source code.");o(t,e)},$$slots:{default:!0}});var Ie=n(be);Te(Ie,{ordered:!1,marker:"-",children:(t,s)=>{var e=ze(),l=$(e);P(l,{children:(f,_)=>{m(f,{href:"/docs/products/functions/runtimes",children:(v,x)=>{r();var y=a("Docs");o(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=n(l);P(d,{children:(f,_)=>{m(f,{href:"https://appwrite.io/discord",children:(v,x)=>{r();var y=a("Discord");o(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=n(d);P(c,{children:(f,_)=>{m(f,{href:"/blog",children:(v,x)=>{r();var y=a("Blog");o(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=n(c);P(u,{children:(f,_)=>{m(f,{href:"https://www.youtube.com/channel/UCtBJ1v69gm8NgbCju_03Fiw",children:(v,x)=>{r();var y=a("YouTube");o(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=n(u);P(g,{children:(f,_)=>{m(f,{href:"https://github.com/appwrite/appwrite",children:(v,x)=>{r();var y=a("GitHub");o(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),Ge(I),o(ke,I)},$$slots:{default:!0}}))}const bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ze,frontmatter:Pe},Symbol.toStringTag,{value:"Module"}));export{bt as _,Ze as a};
