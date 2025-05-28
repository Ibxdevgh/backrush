import{t as p,b as i,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as n,f as v,c as ge,n as a,r as ue}from"./NgVQVlRK.js";import{n as ve}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import{V as b}from"./CERv2ye7.js";import"./BZUG4Puk.js";import{I as m}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as me}from"./BlhJVlLQ.js";import{C as _}from"./DXp9_3zM.js";import{F as H}from"./OFUKRh55.js";import{L as fe,I as V}from"./BhmTgGWB.js";import{P as s}from"./D8YsId2T.js";import{L as f}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as $e}from"./CEkRzcqJ.js";const le={layout:"post",title:"Designing Init: Event logo and theme",description:"How the Backrush Visual Design team crafted Init 2.0",date:"2024-08-23T00:00:00.000Z",cover:"/images/blog/designing-init/cover.png",timeToRead:5,author:"jesse-winton",category:"design",featured:!1};var we=p("After the success of our first <!> event in Spring of 2024, we knew there would be more coming soon, and that, visually, we had set ourselves a high bar. Even though Init is a fully online, virtual event, Backrush’s visual design team created something tangible and interactive with the fully customizable, and shareable <!>. In early July, knowing that our next event was just around the corner, we gathered again and began to brainstorm the visual design style that we wanted to bring to Init 2.0.",1),ye=p("We all agreed this was the right direction- it felt snappy and performant, but wasn’t so ornate that it would be impossible to build under a tight timeline. Once we had our conceptual animation, the challenge became translating it to the browser. In order to animate the stroke along the letter paths, I started with some of the gradient tracing concepts from <!>, but it was feeling like overkill (lots of JavaScript and an animation library), and it wasn’t quite getting us where we needed to go, looking more like a broad brushstroke animating in, rather than individual lines being drawn onto the paths.",1),be=p("Storing the letter paths in an array gave me lots of flexibility for how I wanted to render them. In this case, I rendered each one 3 times, which matched the number of individual strokes we wanted to have active on the event logo at any given point in the animation. Each path had an applied <!> ensuring they’d start at different points in the timeline, and set based on their index within the array.",1),_e=p("With a few ways not to do the animation under my belt, the final step was finding the correct solution. I started experimenting with CSS animations, and while doing some digging, I landed on <!>, which gave me what I needed to start. Utilizing the power of <!> and <!> I was able to create a simple animation, applying it to each path.",1),ke=p("Applying the same animation properties to 75% and 100% is a nice little hack to delay an animation. The <!> property only applies to the first paint, so adding this, and extending the total duration made sure that the animation was completed by 75%, and there would be a pause, equivalent to 1/4 of the total duration, before it would start again. With this in place, the logo animation was how we’d envisioned it.",1),xe=p("<!> <!> <!> <!> <!>",1),He=p("More about <!>",1),Ve=p("Join us on <!>",1),Pe=p("<!><!><!>",1),Ce=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Ie(de){$e(de,ve(le,{children:(he,Me)=>{var k=Ce(),P=ge(k);s(P,{children:(t,r)=>{a();var e=we(),l=n(v(e));f(l,{href:"https://appwrite.io/init",children:(c,h)=>{a();var g=i("Init");o(c,g)},$$slots:{default:!0}});var d=n(l,2);f(d,{href:"https://appwrite.io/init/tickets",children:(c,h)=>{a();var g=i("Init event tickets");o(c,g)},$$slots:{default:!0}}),a(),o(t,e)},$$slots:{default:!0}});var C=n(P);$(C,{level:1,children:(t,r)=>{a();var e=i("The Design process");o(t,e)},$$slots:{default:!0}});var I=n(C);s(I,{children:(t,r)=>{a();var e=i("As a team, we always begin these design sprints with an empty FigJam board, where we can add notes, add screenshots that might give us inspiration, and have discussions about the things we like and dislike. Since this was our second time ideating for Init, we were able to apply many learnings from previous processes, which made this (and subsequent phases) feel more streamlined.");o(t,e)},$$slots:{default:!0}});var M=n(I);s(M,{children:(t,r)=>{m(t,{src:"/images/blog/designing-init/figjam-1.png",alt:"FigJam inspiration"})},$$slots:{default:!0}});var A=n(M);s(A,{children:(t,r)=>{a();var e=i("With the new feature set in mind, we needed to make sure that every piece of the design language was communicating the ways these new features would boost developer productivity, remove friction, and enhance performance. As we all gathered inspiration, we ultimately started to come together on the concept of line art; it felt dynamic and had a sense of organic movement that was in line with the key themes of performance that we wanted to focus on.");o(t,e)},$$slots:{default:!0}});var j=n(A);s(j,{children:(t,r)=>{m(t,{src:"/images/blog/designing-init/figjam-2.png",alt:"FigJam inspiration"})},$$slots:{default:!0}});var D=n(j);s(D,{children:(t,r)=>{a();var e=i("Once the team agreed on our visual style, we began to iterate on concepts.");o(t,e)},$$slots:{default:!0}});var S=n(D);$(S,{level:1,children:(t,r)=>{a();var e=i("Concepts");o(t,e)},$$slots:{default:!0}});var Z=n(S);s(Z,{children:(t,r)=>{a();var e=i("We had a few iterations of the event logo before settling on our final version. In situations like this, there can be a lot of value in iterating in code; it’s easy to preview, you can start to get a feel for the real world implementation, and once the team finds something that works the job is halfway done.");o(t,e)},$$slots:{default:!0}});var T=n(Z);s(T,{children:(t,r)=>{m(t,{src:"/images/blog/designing-init/saras-pass.png",alt:"Sara's pass"})},$$slots:{default:!0}});var z=n(T);b(z,{src:"/images/blog/designing-init/first-browser-pass.mov"});var R=n(z);s(R,{children:(t,r)=>{a();var e=i("After several days of going back and forth, Jade gave us the version that we would end up going with, designed in Figma, and animated in After Effects.");o(t,e)},$$slots:{default:!0}});var W=n(R);b(W,{src:"/images/blog/designing-init/first-pass.mp4"});var F=n(W);s(F,{children:(t,r)=>{a();var e=ye(),l=n(v(e));f(l,{href:"https://rauno.me/craft/nextjs#gradient-tracing",children:(d,c)=>{a();var h=i("Rauno Frieberg");o(d,h)},$$slots:{default:!0}}),a(),o(t,e)},$$slots:{default:!0}});var J=n(F);b(J,{src:"/images/blog/designing-init/gradient-tracing.mov"});var q=n(J);s(q,{children:(t,r)=>{a();var e=i("What we ended up shipping was much simpler, and significantly more performant, relying entirely on CSS.");o(t,e)},$$slots:{default:!0}});var L=n(q);$(L,{level:1,children:(t,r)=>{a();var e=i("Animating the event logo");o(t,e)},$$slots:{default:!0}});var O=n(L);me(O,{children:(t,r)=>{s(t,{children:(e,l)=>{a();var d=i("At Backrush, we build our marketing site in SvelteKit, but these principles will easily translate into any component based framework.");o(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=n(O);s(E,{children:(t,r)=>{a();var e=be(),l=n(v(e));_(l,{content:"animation-delay"}),a(),o(t,e)},$$slots:{default:!0}});var B=n(E);H(B,{content:`<script>
export let duration: number = 8;

const paths = [
  "M53.9539 435.628V436.128H54.4539H122.654H123.154V435.628V132.776V132.276H122.654H1.28125H0.78125V132.776V192.884V193.384H1.28125H53.9539V435.628ZM45.2844 43.1913C45.2844 67.7464 64.0076 86.4606 89.1317 86.4606C114.256 86.4606 132.979 67.7464 132.979 43.1913C132.979 19.2098 114.251 0.5 89.1317 0.5C64.0121 0.5 45.2844 19.2098 45.2844 43.1913Z",
  "M192.548 436.366V436.866H193.048H261.248H261.748V436.366V257.776C261.748 219.898 289.852 191.232 327.135 191.232C361.528 191.232 387.899 217.007 387.899 254.308V436.366V436.866H388.399H456.599H457.099V436.366V238.125C457.099 206.802 446.513 178.645 427.561 158.314C408.606 137.979 381.307 125.5 347.942 125.5C307.462 125.5 279.604 144.522 266.161 167.691H261.748V133.513V133.013H261.248H193.048H192.548V133.513V436.366Z",
  "M549.557 435.628V436.128H550.057H618.257H618.757V435.628V132.776V132.276H618.257H496.885H496.385V132.776V192.884V193.384H496.885H549.557V435.628ZM540.888 43.1913C540.888 67.7464 559.611 86.4606 584.735 86.4606C609.859 86.4606 628.582 67.7464 628.582 43.1913C628.582 19.2098 609.855 0.5 584.735 0.5C559.616 0.5 540.888 19.2098 540.888 43.1913Z",
  "M665.033 193.069V193.569H665.533H717.628V345.073C717.628 377.254 727.344 400.095 744.533 414.88C761.707 429.653 786.262 436.313 815.804 436.313H868.976H869.476V435.813V375.127V374.627H868.976H816.382C806.04 374.627 798.835 372.328 794.202 367.485C789.565 362.637 787.406 355.136 787.406 344.495V193.569H872.444H872.944V193.069V132.961V132.461H872.444H787.406V48V47.5H786.906H722.174H721.674V48V132.461H665.533H665.033V132.961V193.069Z",
]
<\/script>

<svg
    class="lockup"
    viewBox="0 0 880 450"
    xmlns="http://www.w3.org/2000/svg"
    style="--duration:{duration}s"
>
    {#each paths as path}
        <path d={path} class="base" class:fill />
        {#each Array.from({ length: 3 }) as _, index}
            {@const delay = (duration / 3) * index}
            <path
                d={path}
                class="stroke"
                stroke="url(#stroke)"
                pathLength="1000"
                style:animation-delay="{delay}s"
                class:animate
            />
        {/each}
    {/each}
</svg>
`,language:"svelte",process:!0,children:(t,r)=>{a();var e=i(`<script>
export let duration: number = 8;

const paths = [
  "M53.9539 435.628V436.128H54.4539H122.654H123.154V435.628V132.776V132.276H122.654H1.28125H0.78125V132.776V192.884V193.384H1.28125H53.9539V435.628ZM45.2844 43.1913C45.2844 67.7464 64.0076 86.4606 89.1317 86.4606C114.256 86.4606 132.979 67.7464 132.979 43.1913C132.979 19.2098 114.251 0.5 89.1317 0.5C64.0121 0.5 45.2844 19.2098 45.2844 43.1913Z",
  "M192.548 436.366V436.866H193.048H261.248H261.748V436.366V257.776C261.748 219.898 289.852 191.232 327.135 191.232C361.528 191.232 387.899 217.007 387.899 254.308V436.366V436.866H388.399H456.599H457.099V436.366V238.125C457.099 206.802 446.513 178.645 427.561 158.314C408.606 137.979 381.307 125.5 347.942 125.5C307.462 125.5 279.604 144.522 266.161 167.691H261.748V133.513V133.013H261.248H193.048H192.548V133.513V436.366Z",
  "M549.557 435.628V436.128H550.057H618.257H618.757V435.628V132.776V132.276H618.257H496.885H496.385V132.776V192.884V193.384H496.885H549.557V435.628ZM540.888 43.1913C540.888 67.7464 559.611 86.4606 584.735 86.4606C609.859 86.4606 628.582 67.7464 628.582 43.1913C628.582 19.2098 609.855 0.5 584.735 0.5C559.616 0.5 540.888 19.2098 540.888 43.1913Z",
  "M665.033 193.069V193.569H665.533H717.628V345.073C717.628 377.254 727.344 400.095 744.533 414.88C761.707 429.653 786.262 436.313 815.804 436.313H868.976H869.476V435.813V375.127V374.627H868.976H816.382C806.04 374.627 798.835 372.328 794.202 367.485C789.565 362.637 787.406 355.136 787.406 344.495V193.569H872.444H872.944V193.069V132.961V132.461H872.444H787.406V48V47.5H786.906H722.174H721.674V48V132.461H665.533H665.033V132.961V193.069Z",
]
<\/script>

<svg
    class="lockup"
    viewBox="0 0 880 450"
    xmlns="http://www.w3.org/2000/svg"
    style="--duration:{duration}s"
>
    {#each paths as path}
        <path d={path} class="base" class:fill />
        {#each Array.from({ length: 3 }) as _, index}
            {@const delay = (duration / 3) * index}
            <path
                d={path}
                class="stroke"
                stroke="url(#stroke)"
                pathLength="1000"
                style:animation-delay="{delay}s"
                class:animate
            />
        {/each}
    {/each}
</svg>`);o(t,e)},$$slots:{default:!0}});var K=n(B);s(K,{children:(t,r)=>{a();var e=_e(),l=n(v(e));f(l,{href:"https://stackoverflow.com/questions/46443036/svg-stroke-animation-increase-length",children:(h,g)=>{a();var u=i("this Stack Overflow post");o(h,u)},$$slots:{default:!0}});var d=n(l,2);_(d,{content:"stroke-dasharray"});var c=n(d,2);_(c,{content:"stroke-dashoffset"}),a(),o(t,e)},$$slots:{default:!0}});var U=n(K);H(U,{content:`:root {
  --stroke-color: #333;
  --stroke-width: 2;
  --fill: hsl(var(--web-color-background));
}

.stroke {
  stroke-dasharray: 0 1000;
  stroke-dashoffset: 0;
  stroke-width: var(--stroke-width);
  filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.4));
  animation: stroke var(--duration) linear infinite;

  @keyframes stroke {
    0% {
      stroke-dasharray: 0 1000;
      stroke-dashoffset: 1000;
    }
    25% {
      stroke-dasharray: 500 500;
      stroke-dashoffset: 1000;
    }
    50% {
      stroke-dasharray: 500 500;
      stroke-dashoffset: 500;
    }
    75%,
    100% {
      stroke-dasharray: 0 1000;
      stroke-dashoffset: 0;
    }
  }
}
`,language:"css",process:!0,children:(t,r)=>{a();var e=i(`:root {
  --stroke-color: #333;
  --stroke-width: 2;
  --fill: hsl(var(--web-color-background));
}

.stroke {
  stroke-dasharray: 0 1000;
  stroke-dashoffset: 0;
  stroke-width: var(--stroke-width);
  filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.4));
  animation: stroke var(--duration) linear infinite;

  @keyframes stroke {
    0% {
      stroke-dasharray: 0 1000;
      stroke-dashoffset: 1000;
    }
    25% {
      stroke-dasharray: 500 500;
      stroke-dashoffset: 1000;
    }
    50% {
      stroke-dasharray: 500 500;
      stroke-dashoffset: 500;
    }
    75%,
    100% {
      stroke-dasharray: 0 1000;
      stroke-dashoffset: 0;
    }
  }
}`);o(t,e)},$$slots:{default:!0}});var G=n(U);s(G,{children:(t,r)=>{a();var e=ke(),l=n(v(e));_(l,{content:"animation-delay"}),a(),o(t,e)},$$slots:{default:!0}});var N=n(G);b(N,{src:"/images/blog/designing-init/final.mov"});var Q=n(N);$(Q,{level:2,children:(t,r)=>{a();var e=i("Animated lines");o(t,e)},$$slots:{default:!0}});var X=n(Q);s(X,{children:(t,r)=>{a();var e=i("The background lines were much simpler.");o(t,e)},$$slots:{default:!0}});var Y=n(X);H(Y,{content:`<script>
  let lines: number = 2;
  const getRandomHeight = () => Math.floor(Math.random() * 100) + 75;
  const getRandomDelay = () => Math.floor(Math.random() * 2800);
<\/script>

<div class="container">
    <div class="lines">
        {#each Array.from({ length: lines }) as _}
            {@const delay = getRandomDelay()}
            {@const height = getRandomHeight()}
            <div class="group">
                <div class="line" style="--delay:{delay}ms;--height:{height}px;" />
                <div class="line" style="--delay:{delay}ms;--height:{height}px;" />
            </div>
        {/each}
    </div>
</div>

<style>
.container {
  position: absolute;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: -1;

  .lines {
    position: absolute;
    inset: 0;
    z-index: -10;
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    opacity: 0.7;

    --gradient: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    --width: 2px;
    --starting-position: -80vh;
    --duration: 2s;
    --initial-delay: 0.5s;

    .group {
      display: flex;
      gap: 24px;
      position: relative;

      .line {
        position: relative;
        height: var(--height);
        width: var(--width);

        @media screen and (max-width: 768px) {
          height: calc(var(--height) / 4);
        }

        @keyframes line {
          from {
            bottom: var(--starting-position);
          }
          to {
            bottom: 15vh;
          }
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: var(--starting-position);
          width: var(--width);
          height: var(--height);
          background: var(--gradient);
          border-radius: 8px;
          filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
          animation: line var(--duration)
            calc(var(--initial-delay) + var(--delay)) infinite forwards
            cubic-bezier(0.1, -0.6, 0.2, 0);

          @media screen and (max-width: 768px) {
            height: calc(var(--height) / 2);
          }
        }
      }
    }
  }
}
</style>
`,language:"svelte",process:!0,children:(t,r)=>{a();var e=i(`<script>
  let lines: number = 2;
  const getRandomHeight = () => Math.floor(Math.random() * 100) + 75;
  const getRandomDelay = () => Math.floor(Math.random() * 2800);
<\/script>

<div class="container">
    <div class="lines">
        {#each Array.from({ length: lines }) as _}
            {@const delay = getRandomDelay()}
            {@const height = getRandomHeight()}
            <div class="group">
                <div class="line" style="--delay:{delay}ms;--height:{height}px;" />
                <div class="line" style="--delay:{delay}ms;--height:{height}px;" />
            </div>
        {/each}
    </div>
</div>

<style>
.container {
  position: absolute;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: -1;

  .lines {
    position: absolute;
    inset: 0;
    z-index: -10;
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    opacity: 0.7;

    --gradient: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    --width: 2px;
    --starting-position: -80vh;
    --duration: 2s;
    --initial-delay: 0.5s;

    .group {
      display: flex;
      gap: 24px;
      position: relative;

      .line {
        position: relative;
        height: var(--height);
        width: var(--width);

        @media screen and (max-width: 768px) {
          height: calc(var(--height) / 4);
        }

        @keyframes line {
          from {
            bottom: var(--starting-position);
          }
          to {
            bottom: 15vh;
          }
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: var(--starting-position);
          width: var(--width);
          height: var(--height);
          background: var(--gradient);
          border-radius: 8px;
          filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
          animation: line var(--duration)
            calc(var(--initial-delay) + var(--delay)) infinite forwards
            cubic-bezier(0.1, -0.6, 0.2, 0);

          @media screen and (max-width: 768px) {
            height: calc(var(--height) / 2);
          }
        }
      }
    }
  }
}
</style>`);o(t,e)},$$slots:{default:!0}});var ee=n(Y);s(ee,{children:(t,r)=>{a();var e=i("With this, we get 2 groups of 2 lines, each with a randomized height and animation delay, creating a subtle, dynamic backdrop for our lockup.");o(t,e)},$$slots:{default:!0}});var te=n(ee);$(te,{level:1,children:(t,r)=>{a();var e=i("Expanding the theme: feature illustrations");o(t,e)},$$slots:{default:!0}});var ne=n(te);s(ne,{children:(t,r)=>{a();var e=i("Of course, the Init lockup was not the only component of design work needed for Init. This is a week-long event jam packed with daily announcements. To make every day of Init feel special, we wanted to create a series of visual assets that expanded on the event’s theme while serving as great visual support for each announcement.");o(t,e)},$$slots:{default:!0}});var ae=n(ne);s(ae,{children:(t,r)=>{a();var e=i("We worked together with Backrush engineers to understand how each new feature launched could be illustrated using the dynamic line art concept we developed. This resulted in a set of key illustrations we used across different channels such as campaign announcements on social media, website illustrations, blog covers, and animations.");o(t,e)},$$slots:{default:!0}});var oe=n(ae);s(oe,{children:(t,r)=>{var e=xe(),l=v(e);m(l,{src:"/images/blog/designing-init/day0.png",alt:"Day 0"});var d=n(l,2);m(d,{src:"/images/blog/designing-init/day1.png",alt:"Day 1"});var c=n(d,2);m(c,{src:"/images/blog/designing-init/day2.png",alt:"Day 2"});var h=n(c,2);m(h,{src:"/images/blog/designing-init/day3.png",alt:"Day 3"});var g=n(h,2);m(g,{src:"/images/blog/designing-init/day4.png",alt:"Day 4"}),o(t,e)},$$slots:{default:!0}});var re=n(oe);s(re,{children:(t,r)=>{a();var e=i("This helped expand the concept we began developing with the Init lockup and made the whole event’s identity feel more expressive, diverse, and complete.");o(t,e)},$$slots:{default:!0}});var ie=n(re);$(ie,{level:1,children:(t,r)=>{a();var e=i("Conclusion");o(t,e)},$$slots:{default:!0}});var se=n(ie);s(se,{children:(t,r)=>{a();var e=i("As a design team, our goal is to do work that sets a standard of excellence for not only ourselves, but also the industry as a whole. Here, we set out to build something that was visually appealing, pushed the quality from 1.0, was performant, and fit the themes of our event. Through a lot of hard work, learning, and iteration, we feel as though we managed to do all four. We’re constantly evolving, and will build on what we learned here to make our next events, and every other surface even better. Keep an eye out, and thanks for joining Init!");o(t,e)},$$slots:{default:!0}});var ce=n(se);fe(ce,{ordered:!1,marker:"-",children:(t,r)=>{var e=Pe(),l=v(e);V(l,{children:(h,g)=>{a();var u=He(),y=n(v(u));f(y,{href:"https://appwrite.io/init",children:(w,pe)=>{a();var x=i("Init");o(w,x)},$$slots:{default:!0}}),o(h,u)},$$slots:{default:!0}});var d=n(l);V(d,{children:(h,g)=>{f(h,{href:"https://appwrite.io/blog/post/how-to-build-your-digital-event-tickets",children:(u,y)=>{a();var w=i("How to create tickets for your digital event");o(u,w)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=n(d);V(c,{children:(h,g)=>{a();var u=Ve(),y=n(v(u));f(y,{href:"https://appwrite.io/discord",children:(w,pe)=>{a();var x=i("Discord");o(w,x)},$$slots:{default:!0}}),o(h,u)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),ue(k),o(he,k)},$$slots:{default:!0}}))}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Ie,frontmatter:le},Symbol.toStringTag,{value:"Module"}));export{et as _,Ie as a};
