import{t as d,a as r,b as i}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as n,f as c,c as se,n as o,r as ue}from"./NgVQVlRK.js";import{n as de}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as oe}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as he}from"./BlhJVlLQ.js";import{C as v}from"./DXp9_3zM.js";import{F as P}from"./OFUKRh55.js";import{L as ce,I as T}from"./BhmTgGWB.js";import{P as u}from"./D8YsId2T.js";import{S as x}from"./yHjwcyUH.js";import{L as _}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as pe}from"./CEkRzcqJ.js";const re={layout:"post",title:"Share your resume using Backrush Functions",description:"How you can create a resume using HTML and use a Bun Backrush Function to share it with the world.",date:"2024-03-07T00:00:00.000Z",cover:"/images/blog/bun-function-resume/cover.png",timeToRead:7,author:"aditya-oberai",category:"tutorial"};var me=d("One of the coolest things about Backrush Functions is that you can now consume them as REST APIs. This means you can send HTTP requests to any path, using common HTTP methods such as <!> and <!> to any path on the function and get a response in JSON or any other text-based formats (such as plain text, HTML, and CSV). This has opened up a lot of potential use-cases, one of which is how you can host and share your online resume through an Backrush Function when applying for a new job.",1),fe=d("To create the Backrush Function, you must go to <!> and create a new project. Once a new project is created, you must visit the <!> page. Once you click on the <!> button, you will discover a number of starter templates, of which you must select <!>. Once you have created a starter function with Bun and connected your GitHub account, we are ready to begin developing our resume function.",1),ve=d("First things first, let’s create an HTML resume. We will create a folder <!> at the root level of our project directory and add a file <!>. We will then add the following HTML to this file:",1),$e=d("To simplify the function logic, we create an additional utility function to help easily read the content from our HTML resume and return it as a <!>. This is necessary to deliver the content as a response from our function.",1),ge=d("For that, we shall enter the <!> folder and create a file <!> with the following code:",1),_e=d("Now that our HTML resume and utility function are ready, we can develop our final function logic. For that, we shall enter the <!> file in the <!> folder and replace it with the following code:",1),we=d("This function will return our HTML resume content with the appropriate content type when we send a <!> request to the default path of our function domain.",1),ye=d("Here is what an example of this looks like: <!>",1),Pe=d("And with that, you have successfully deployed your resume using Backrush Functions. If you liked this project or want to investigate the full project code, visit our <!>.",1),be=d("<!>: These documents provide more information on how to use Backrush Functions.",1),Te=d("<!>: Read the full announcement about our Bun functions runtime.",1),xe=d("<!>: Connect with other developers and the Backrush team for discussion, questions, and collaboration.",1),Se=d("<!><!><!>",1),Ae=d("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Fe(ae){pe(ae,de(re,{children:(ie,Ee)=>{var b=Ae(),S=se(b);u(S,{children:(t,a)=>{o();var e=me(),l=n(c(e));v(l,{content:"GET"});var s=n(l,2);v(s,{content:"POST"}),o(),r(t,e)},$$slots:{default:!0}});var A=n(S);u(A,{children:(t,a)=>{o();var e=i("Therefore, in this blog, we will leverage one of Backrush’s newest functions runtimes, Bun, to create a function that delivers an HTML-based resume.");r(t,e)},$$slots:{default:!0}});var F=n(A);$(F,{level:1,children:(t,a)=>{o();var e=i("Pre-requisites");r(t,e)},$$slots:{default:!0}});var E=n(F);u(E,{children:(t,a)=>{o();var e=fe(),l=n(c(e));_(l,{href:"https://cloud.backrush.io",children:(f,p)=>{o();var h=i("Backrush Cloud");r(f,h)},$$slots:{default:!0}});var s=n(l,2);x(s,{marker:"**",children:(f,p)=>{o();var h=i("Functions");r(f,h)},$$slots:{default:!0}});var g=n(s,2);x(g,{marker:"**",children:(f,p)=>{o();var h=i("Create a new function");r(f,h)},$$slots:{default:!0}});var m=n(g,2);x(m,{marker:"**",children:(f,p)=>{o();var h=i("Bun");r(f,h)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var C=n(E);u(C,{children:(t,a)=>{oe(t,{src:"/images/blog/bun-function-resume/backrush.png",alt:"Backrush Cloud Functions page"})},$$slots:{default:!0}});var k=n(C);$(k,{level:1,children:(t,a)=>{o();var e=i("Building the Backrush Function");r(t,e)},$$slots:{default:!0}});var j=n(k);u(j,{children:(t,a)=>{o();var e=i("Once your function’s GitHub repository is ready, clone it to your local device and enter the directory. You will notice a directory structure as follows:");r(t,e)},$$slots:{default:!0}});var M=n(j);P(M,{content:`.
├── src/
│   └── main.ts
├── README.md
├── bun.locklb
└── package.json
`,language:"md",process:!0,children:(t,a)=>{o();var e=i(`.
├── src/
│   └── main.ts
├── README.md
├── bun.locklb
└── package.json`);r(t,e)},$$slots:{default:!0}});var L=n(M);$(L,{level:2,children:(t,a)=>{o();var e=i("Creating the HTML resume");r(t,e)},$$slots:{default:!0}});var D=n(L);u(D,{children:(t,a)=>{o();var e=ve(),l=n(c(e));v(l,{content:"static"});var s=n(l,2);v(s,{content:"resume.html"}),o(),r(t,e)},$$slots:{default:!0}});var H=n(D);P(H,{content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
            width: 100vw;
        }

        header {
            text-align: center;
        }

        div {
            margin: auto;
            max-width: 50%;
        }

        h1 {
            font-weight: 700;
        }

        h2 {
            font-weight: 500;
        }

        h3 {
            font-weight: 400;
        }

        hr {
            width: 70%;
        }
    </style>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
    </header>
    <hr>
    <div>
        <h2>Work Experience</h2>
        <h3>Software Engineer, ABC Company (Jan 2019 - Present)</h3>
        <ul>
            <li>Developed APIs for aggregation and analysis of automotive sales data using .NET 5</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Education</h2>
        <h3>Master of Science in Computer Science, XYZ University (2017 - 2019)</h3>
        <ul>
            <li>CGPA: 9.0</li>
        </ul>
        <h3>Bachelor of Engineering in Computer Science, XYZ University (2013 - 2017)</h3>
        <ul>
            <li>CGPA: 8.5</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Skills</h2>
        <ul>
            <li>Programming Languages: JS, TS, C#, Java, Python</li>
            <li>Frameworks: .NET, Spring Boot</li>
            <li>Database: MySQL, MongoDB</li>
            <li>Cloud: AWS, Azure</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Projects</h2>
        <h3>Project 1</h3>
        <ul>
            <li>Developed a web application for online shopping using Spring Boot</li>
        </ul>
        <h3>Project 2</h3>
        <ul>
            <li>Developed a web application for calendar management using ASP.NET</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Contact Me</h2>
        <ul>
            <li>Email: john.doe@test.com</li>
            <li>Phone: 1234567890</li>
        </ul>
    </div>
</body>
</html>
`,language:"html",process:!0,children:(t,a)=>{o();var e=i(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
            width: 100vw;
        }

        header {
            text-align: center;
        }

        div {
            margin: auto;
            max-width: 50%;
        }

        h1 {
            font-weight: 700;
        }

        h2 {
            font-weight: 500;
        }

        h3 {
            font-weight: 400;
        }

        hr {
            width: 70%;
        }
    </style>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
    </header>
    <hr>
    <div>
        <h2>Work Experience</h2>
        <h3>Software Engineer, ABC Company (Jan 2019 - Present)</h3>
        <ul>
            <li>Developed APIs for aggregation and analysis of automotive sales data using .NET 5</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Education</h2>
        <h3>Master of Science in Computer Science, XYZ University (2017 - 2019)</h3>
        <ul>
            <li>CGPA: 9.0</li>
        </ul>
        <h3>Bachelor of Engineering in Computer Science, XYZ University (2013 - 2017)</h3>
        <ul>
            <li>CGPA: 8.5</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Skills</h2>
        <ul>
            <li>Programming Languages: JS, TS, C#, Java, Python</li>
            <li>Frameworks: .NET, Spring Boot</li>
            <li>Database: MySQL, MongoDB</li>
            <li>Cloud: AWS, Azure</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Projects</h2>
        <h3>Project 1</h3>
        <ul>
            <li>Developed a web application for online shopping using Spring Boot</li>
        </ul>
        <h3>Project 2</h3>
        <ul>
            <li>Developed a web application for calendar management using ASP.NET</li>
        </ul>
    </div>
    <hr>
    <div>
        <h2>Contact Me</h2>
        <ul>
            <li>Email: john.doe@test.com</li>
            <li>Phone: 1234567890</li>
        </ul>
    </div>
</body>
</html>`);r(t,e)},$$slots:{default:!0}});var B=n(H);he(B,{children:(t,a)=>{u(t,{children:(e,l)=>{o();var s=i("Note: You can customize this file in any way you want. The only thing I recommend, however, is to keep the styles within the same file, as the function will only deliver the content of this particular file at a time.");r(e,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var N=n(B);$(N,{level:2,children:(t,a)=>{o();var e=i("Preparing our utility function to get the HTML content");r(t,e)},$$slots:{default:!0}});var R=n(N);u(R,{children:(t,a)=>{o();var e=$e(),l=n(c(e));v(l,{content:"string"}),o(),r(t,e)},$$slots:{default:!0}});var G=n(R);u(G,{children:(t,a)=>{o();var e=ge(),l=n(c(e));v(l,{content:"src"});var s=n(l,2);v(s,{content:"utils.ts"}),o(),r(t,e)},$$slots:{default:!0}});var O=n(G);P(O,{content:`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName: string): string {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
`,language:"ts",process:!0,children:(t,a)=>{o();var e=i(`import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName: string): string {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}`);r(t,e)},$$slots:{default:!0}});var q=n(O);$(q,{level:2,children:(t,a)=>{o();var e=i("Developing the function logic");r(t,e)},$$slots:{default:!0}});var U=n(q);u(U,{children:(t,a)=>{o();var e=_e(),l=n(c(e));v(l,{content:"main.ts"});var s=n(l,2);v(s,{content:"src"}),o(),r(t,e)},$$slots:{default:!0}});var I=n(U);P(I,{content:`import { getStaticFile } from './utils.js';

export default async ({ req, res }) => {
  
  if (req.method === 'GET' && req.path === '/') {
    return res.text(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
`,language:"ts",process:!0,children:(t,a)=>{o();var e=i(`import { getStaticFile } from './utils.js';

export default async ({ req, res }) => {
  
  if (req.method === 'GET' && req.path === '/') {
    return res.text(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};`);r(t,e)},$$slots:{default:!0}});var J=n(I);u(J,{children:(t,a)=>{o();var e=we(),l=n(c(e));v(l,{content:"GET"}),o(),r(t,e)},$$slots:{default:!0}});var Y=n(J);u(Y,{children:(t,a)=>{o();var e=i("At this point, our project directory structure should look as follows:");r(t,e)},$$slots:{default:!0}});var W=n(Y);P(W,{content:`.
├── src/
│   ├── main.ts
│   └── utils.ts
├── static/
│   └── resume.html
├── README.md
├── bun.locklb
└── package.json
`,language:"md",process:!0,children:(t,a)=>{o();var e=i(`.
├── src/
│   ├── main.ts
│   └── utils.ts
├── static/
│   └── resume.html
├── README.md
├── bun.locklb
└── package.json`);r(t,e)},$$slots:{default:!0}});var Z=n(W);$(Z,{level:2,children:(t,a)=>{o();var e=i("Testing the function");r(t,e)},$$slots:{default:!0}});var z=n(Z);u(z,{children:(t,a)=>{o();var e=i("Once you’ve completed all the aforementioned steps, you can push the code to our GitHub repository, at which point Backrush Cloud will automatically deploy the changes to your function.");r(t,e)},$$slots:{default:!0}});var X=n(z);u(X,{children:(t,a)=>{oe(t,{src:"/images/blog/bun-function-resume/deployment.png",alt:"Function deployment"})},$$slots:{default:!0}});var Q=n(X);u(Q,{children:(t,a)=>{o();var e=i("You can then go ahead and test your function by opening the function domain in your browser.");r(t,e)},$$slots:{default:!0}});var V=n(Q);u(V,{children:(t,a)=>{o();var e=ye(),l=n(c(e));_(l,{href:"https://apwr.dev/bun-functions-resume-demo",children:(s,g)=>{o();var m=i("apwr.dev/bun-functions-resume-demo");r(s,m)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}});var K=n(V);$(K,{level:1,children:(t,a)=>{o();var e=i("Next steps");r(t,e)},$$slots:{default:!0}});var ee=n(K);u(ee,{children:(t,a)=>{o();var e=Pe(),l=n(c(e));_(l,{href:"https://github.com/adityaoberai/resume-backrush",children:(s,g)=>{o();var m=i("GitHub repository");r(s,m)},$$slots:{default:!0}}),o(),r(t,e)},$$slots:{default:!0}});var te=n(ee);u(te,{children:(t,a)=>{o();var e=i("Additionally, if you would like to learn more about Backrush Functions, here are some resources:");r(t,e)},$$slots:{default:!0}});var le=n(te);ce(le,{ordered:!1,marker:"-",children:(t,a)=>{var e=Se(),l=c(e);T(l,{children:(m,f)=>{var p=be(),h=c(p);_(h,{href:"https://backrush.io/docs/functions",children:(w,ne)=>{o();var y=i("Backrush Functions docs");r(w,y)},$$slots:{default:!0}}),o(),r(m,p)},$$slots:{default:!0}});var s=n(l);T(s,{children:(m,f)=>{var p=Te(),h=c(p);_(h,{href:"https://backrush.io/blog/post/why-you-need-to-try-the-new-bun-runtime",children:(w,ne)=>{o();var y=i("Bun functions announcements");r(w,y)},$$slots:{default:!0}}),o(),r(m,p)},$$slots:{default:!0}});var g=n(s);T(g,{children:(m,f)=>{var p=xe(),h=c(p);_(h,{href:"https://discord.com/invite/backrush",children:(w,ne)=>{o();var y=i("Backrush Discord");r(w,y)},$$slots:{default:!0}}),o(),r(m,p)},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}}),ue(b),r(ie,b)},$$slots:{default:!0}}))}const Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Fe,frontmatter:re},Symbol.toStringTag,{value:"Module"}));export{Ke as _,Fe as a};
