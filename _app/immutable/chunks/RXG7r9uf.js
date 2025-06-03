import{t as v,b as i,a}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ze,s as n,f as p,n as o,r as Le}from"./NgVQVlRK.js";import{n as Me}from"./B4IyMRKX.js";import{H as g}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import{V as Te}from"./CERv2ye7.js";import"./BZUG4Puk.js";import{I as We}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{B as De}from"./BlhJVlLQ.js";import{C as u}from"./DXp9_3zM.js";import{F as b}from"./OFUKRh55.js";import{L as Be,I as y}from"./BhmTgGWB.js";import{P as d}from"./D8YsId2T.js";import{S as x}from"./yHjwcyUH.js";import{L as $}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Re}from"./CEkRzcqJ.js";const Ee={layout:"post",title:"Defying the laws of web animations",description:"Web animations can be scary, and come with a lot of obstacles. But what if we could bend the rules to our will?",date:"2023-10-18T00:00:00.000Z",cover:"/images/blog/defying-the-laws-of-web-animations/cover.png",timeToRead:10,author:"thomas-g-lopes",category:"tutorial",callToAction:!0};var je=v("But animating on the web also has its limitations, and the challenges they make you face can be quite daunting. So when our <em>amazing</em> design team shared me previews for the <!> that I&#39;d be working on, I started thinking they didn&#39;t like me very much.",1),qe=v("First things first, what was I supposed to animate? Well, in this article, I&#39;ll be mainly talking about this animation, that&#39;s present at <!>.",1),Fe=v("There&#39;s a lot of stuff going on in there! There are multiple sections, each one with possible interactivity, and there&#39;s also animation <!> the sections, where the phone moves positions.",1),Oe=v("<!><!><!>",1),Ne=v("P.S. The code for the website, including animations, can be found at <!>.",1),Je=v("I&#39;ve split said container into 5 <!> parts, each part representing a section. All the sections are always sticking to the center of the screen as I said, but, once the top of the viewport passes a section trigger, the respective section is active, and all the other sections are de-activated. (In the sketch above, the active section is the 2nd one, but if the user scrolls down <em>just</em> a bit, the 3rd section will be active.)",1),Ke=v("I decided to create a helper function that, given an HTML element, returns what percentage has been traversed. With that, I can apply the function to our <!>, and determine what&#39;s the active section. E.g. since the triggers are at <!>, <!>, <!>, <!> and <!>, if we&#39;ve already traversed <!> of the viewport, Then I know that the third section is the one that&#39;s active.",1),Ye=v("You&#39;ll notice however, that this is not <!> a regular function. It&#39;s a <!>. From the docs:",1),Ge=v("Actions are functions that are called when an element is created. They can return an object with a <!> method that is called after the element is unmounted.",1),Ze=v("The function will automatically run with the given <!> being passed in as the <!> parameter. And whenever that <!> is unmounted from the DOM, the destroy function will be run. This allows us to easily create reusable functions that directly interact with the DOM with almost no boilerplate!",1),Qe=v("There are several tools you can use to your disposal for crafting web animations. For <!>, we opted to use CSS animations, for the most part. The exception was a typing animation in the code, which is not normally achievable with CSS.",1),Xe=v("We&#39;ve decided to use <!>, a library which wraps around the <!>. It allows us to write a animation for a section in a pretty intuitive way:",1),et=v("In the example above, the <!>element will animate and only after it finished animating, will the other elements animate, simultaneously.",1),tt=v("But that&#39;s not all we used. We also took heavy advantage of Svelte&#39;s in-built <!>, which automatically animate elements when they enter or exit the DOM, and also allow us to move surrounding elements that are affected by the new elements, e.g. when entering a list.",1),nt=v("To illustrate this scenario, imagine you have two animations, one that moves <!> from a point <!>to <!>, and another that does the opposite. Now, you start the first animation, but in the middle of it you trigger the second animation, when <!>is at <!>. Ideally, what would happen? To have a seamless transition, it should go from <!>back to <!>. But normally, with CSS keyframes, the <!>element would jump to <!>, and then animate to <!>.",1),ot=v("<!>. It uses CSS transitions for the seamless bit, which may raise the question: Why not use it instead of Motion? And the answer is, it&#39;s still a bit awkward to use. You&#39;d have to define a CSS class for every transition, define it in the style tag, and then change it in the DOM. You also don&#39;t have a way in JS to know it has ended without hard-coding the transition duration.",1),at=v("To deal with that, we use dynamic references to our elements. Each element has an id, with a number suffixed to it, e.g. <!>. Whenever the section changes, we add 1 to the suffix, e.g. <!>. And at the start of any section animation, we get the element ID at that given point in time, and then don&#39;t re-request the ID.",1),rt=v("Now, even if I start Section 2, and the selector gets updated, the constant <!>is still <!>. The function is running, but trying to animate based on a selector that will not resolve to any element! And we can continue without fear, pretending the async functions have been canceled, defying the laws of what normally is possible within web animations!",1),st=v("But, we also modify <!> in our animation functions. How do we avoid clashes there? Well, you may notice this piece of code in one of the earlier snippets:",1),it=v("This comes from a custom store I built, called <!>. It works similarly to our selector! It has an internal ID, which gets updated whenever we call <!>. That reset method returns a scoped <!>function, that checks if the current ID of the <!> store is the same as the one that got created when we called <!>. If it&#39;s not, it doesn&#39;t update the store.",1),lt=v("Combining <!> with <!>and Motion, ensures smooth transitions between all sections!",1),dt=v("I hope this article helped outline the thought process behind this challenge, and also motivates you to delve into our <!> to discover other nifty tricks we did to make our website possible!",1),ct=v("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ut(Ae){Re(Ae,Me(Ee,{children:(He,ht)=>{var w=ct(),P=ze(w);d(P,{children:(t,r)=>{o();var e=i("If you're a frontend developer, you know that one of the scariest tasks you can receive is coding a complex web animation. If you're not a frontend developer, I bet that sounds even harder.");a(t,e)},$$slots:{default:!0}});var I=n(P);d(I,{children:(t,r)=>{o();var e=i("Don't get me wrong, I love web animations! They are an elegant way to show off some flair in your website when used correctly. And unlike traditional animation media, they can even be interacted with, giving it a bit of personal flair.");a(t,e)},$$slots:{default:!0}});var S=n(I);d(S,{children:(t,r)=>{o();var e=je(),s=n(p(e),3);$(s,{href:"/blog/post/designing-the-new-backrush-website",children:(l,h)=>{o();var c=i("new animations");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var k=n(S);d(k,{children:(t,r)=>{o();var e=i("I jest, I was super stoked! The animations looked fantastic. But I'm not joking when I say that they were much more challenging than I initially thought.");a(t,e)},$$slots:{default:!0}});var C=n(k);g(C,{level:2,children:(t,r)=>{o();var e=i("What are we animating?");a(t,e)},$$slots:{default:!0}});var T=n(C);d(T,{children:(t,r)=>{o();var e=qe(),s=n(p(e));$(s,{href:"https://backrush.io",children:(l,h)=>{o();var c=i("Backrush's homepage");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var E=n(T);Te(E,{src:"/images/blog/defying-the-laws-of-web-animations/animations.mp4"});var A=n(E);d(A,{children:(t,r)=>{o();var e=Fe(),s=n(p(e));x(s,{marker:"**",children:(l,h)=>{o();var c=i("between");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var H=n(A);d(H,{children:(t,r)=>{o();var e=i("There's a lot to digest here, so let's break this into parts. We need to code:");a(t,e)},$$slots:{default:!0}});var V=n(H);Be(V,{ordered:!1,marker:"-",children:(t,r)=>{var e=Oe(),s=p(e);y(s,{children:(c,f)=>{o();var m=i("The logic that activates a section based on the scroll position");a(c,m)},$$slots:{default:!0}});var l=n(s);y(l,{children:(c,f)=>{o();var m=i("Each individual section's animation");a(c,m)},$$slots:{default:!0}});var h=n(l);y(h,{children:(c,f)=>{o();var m=i("How to animate between sections");a(c,m)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var U=n(V);d(U,{children:(t,r)=>{o();var e=i("Let's get into it!");a(t,e)},$$slots:{default:!0}});var z=n(U);d(z,{children:(t,r)=>{o();var e=Ne(),s=n(p(e));$(s,{href:"https://github.com/Back-rush/website/",children:(l,h)=>{o();var c=i("https://github.com/Back-rush/website/");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var L=n(z);g(L,{level:2,children:(t,r)=>{o();var e=i("Excuse me, scrolling through!");a(t,e)},$$slots:{default:!0}});var M=n(L);d(M,{children:(t,r)=>{o();var e=i("Scroll-based animations are quite common. There are two types. Animations that start when you scroll to a certain section, and animations that progress together with your scroll. For our animations, we're using the former.");a(t,e)},$$slots:{default:!0}});var W=n(M);d(W,{children:(t,r)=>{o();var e=i("We have 5 sections in our animation, as showcased in our video (we technically have 2 more, one for the beginning and one for the end), and they're pretty similar. They are all in a really tall container, so that we have ample space to scroll through, but the animations themselves always stick to the center of the screen.");a(t,e)},$$slots:{default:!0}});var D=n(W);d(D,{children:(t,r)=>{We(t,{src:"/images/blog/defying-the-laws-of-web-animations/excali_viewport.png",alt:"Excali viewport"})},$$slots:{default:!0}});var B=n(D);d(B,{children:(t,r)=>{o();var e=Je(),s=n(p(e));x(s,{marker:"**",children:(l,h)=>{o();var c=i("equal");a(l,c)},$$slots:{default:!0}}),o(3),a(t,e)},$$slots:{default:!0}});var R=n(B);d(R,{children:(t,r)=>{o();var e=Ke(),s=n(p(e));u(s,{content:"AnimationContainer"});var l=n(s,2);u(l,{content:"0%"});var h=n(l,2);u(h,{content:"20%"});var c=n(h,2);u(c,{content:"40%"});var f=n(c,2);u(f,{content:"60%"});var m=n(f,2);u(m,{content:"80%"});var _=n(m,2);u(_,{content:"50%"}),o(),a(t,e)},$$slots:{default:!0}});var j=n(R);d(j,{children:(t,r)=>{o();var e=i("For the curious minds, here's what the function looks like:");a(t,e)},$$slots:{default:!0}});var q=n(j);b(q,{content:`import type { Action } from "svelte/action";

export type ScrollInfo = {
  percentage: number;
  traversed: number;
  remaning: number;
};

export const scroll: Action<
  HTMLElement,
  undefined,
  {
    "on:web-scroll": (e: CustomEvent<ScrollInfo>) => void;
    "on:web-resize": (e: CustomEvent<ScrollInfo>) => void;
  }
> = (node) => {
  function getScrollInfo(): ScrollInfo {
    const { top, height } = node.getBoundingClientRect();
    const { innerHeight } = window;

    const scrollHeight = height - innerHeight;
    const scrollPercentage = (-1 * top) / scrollHeight;

    const traversed = scrollPercentage * scrollHeight;
    const remaning = scrollHeight - traversed;

    return {
      percentage: scrollPercentage,
      traversed,
      remaning,
    };
  }

  const createHandler = (eventName: "web-scroll" | "web-resize") => {
    return () => {
      node.dispatchEvent(
        new CustomEvent<ScrollInfo>(eventName, {
          detail: getScrollInfo(),
        })
      );
    };
  };

  const handleScroll = createHandler("web-scroll");
  const handleResize = createHandler("web-resize");

  handleScroll();
  handleResize();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  return {
    destroy() {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    },
  };
};
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i(`import type { Action } from "svelte/action";

export type ScrollInfo = {
  percentage: number;
  traversed: number;
  remaning: number;
};

export const scroll: Action<
  HTMLElement,
  undefined,
  {
    "on:web-scroll": (e: CustomEvent<ScrollInfo>) => void;
    "on:web-resize": (e: CustomEvent<ScrollInfo>) => void;
  }
> = (node) => {
  function getScrollInfo(): ScrollInfo {
    const { top, height } = node.getBoundingClientRect();
    const { innerHeight } = window;

    const scrollHeight = height - innerHeight;
    const scrollPercentage = (-1 * top) / scrollHeight;

    const traversed = scrollPercentage * scrollHeight;
    const remaning = scrollHeight - traversed;

    return {
      percentage: scrollPercentage,
      traversed,
      remaning,
    };
  }

  const createHandler = (eventName: "web-scroll" | "web-resize") => {
    return () => {
      node.dispatchEvent(
        new CustomEvent<ScrollInfo>(eventName, {
          detail: getScrollInfo(),
        })
      );
    };
  };

  const handleScroll = createHandler("web-scroll");
  const handleResize = createHandler("web-resize");

  handleScroll();
  handleResize();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  return {
    destroy() {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    },
  };
};`);a(t,e)},$$slots:{default:!0}});var F=n(q);d(F,{children:(t,r)=>{o();var e=Ye(),s=n(p(e));x(s,{marker:"**",children:(h,c)=>{o();var f=i("just");a(h,f)},$$slots:{default:!0}});var l=n(s,2);$(l,{href:"https://svelte.dev/docs/svelte-action",children:(h,c)=>{o();var f=i("Svelte Action");a(h,f)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var O=n(F);De(O,{children:(t,r)=>{d(t,{children:(e,s)=>{o();var l=Ge(),h=n(p(l));u(h,{content:"destroy"}),o(),a(e,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var N=n(O);d(N,{children:(t,r)=>{o();var e=i("In practice, what this means is, given this syntax:");a(t,e)},$$slots:{default:!0}});var J=n(N);b(J,{content:`<div id="products" use:scroll on:web-scroll={(e) => scrollInfo = e.detail}>
	<!-- ... -->
</div>
`,language:"html",process:!0,children:(t,r)=>{o();var e=i(`<div id="products" use:scroll on:web-scroll={(e) => scrollInfo = e.detail}>
	<!-- ... -->
</div>`);a(t,e)},$$slots:{default:!0}});var K=n(J);d(K,{children:(t,r)=>{o();var e=Ze(),s=n(p(e));u(s,{content:"div"});var l=n(s,2);u(l,{content:"node"});var h=n(l,2);u(h,{content:"div"}),o(),a(t,e)},$$slots:{default:!0}});var Y=n(K);g(Y,{level:2,children:(t,r)=>{o();var e=i("Hand-crafting individual animations");a(t,e)},$$slots:{default:!0}});var G=n(Y);d(G,{children:(t,r)=>{o();var e=i("We now go to the core of the animation process: Actually animating it.");a(t,e)},$$slots:{default:!0}});var Z=n(G);d(Z,{children:(t,r)=>{o();var e=Qe(),s=n(p(e));$(s,{href:"https://pink.appwrite.io",children:(l,h)=>{o();var c=i("Pink's website");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var Q=n(Z);d(Q,{children:(t,r)=>{o();var e=i("In this case though, we have decided to go full JS for our animations. The reason is that, we'd already require some JS for the elements that require interactivity, and it's much easier orchestrating a series of animations that run one after another in JS, than in CSS.");a(t,e)},$$slots:{default:!0}});var X=n(Q);d(X,{children:(t,r)=>{o();var e=Xe(),s=n(p(e));$(s,{href:"https://motion.dev/",children:(h,c)=>{o();var f=i("Motion");a(h,f)},$$slots:{default:!0}});var l=n(s,2);$(l,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",children:(h,c)=>{o();var f=i("Web Animations API");a(h,f)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var ee=n(X);b(ee,{content:`async function authAnim() {
	await animate(box, { y: [48, 140], opacity: 1 }, { duration: 0.25, delay: 0.25 }).finished;
	safeAnimate(phone, { x: 0, y: 0 }, { duration: 0.5 }),
	safeAnimate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0.5 })
}
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i(`async function authAnim() {
	await animate(box, { y: [48, 140], opacity: 1 }, { duration: 0.25, delay: 0.25 }).finished;
	safeAnimate(phone, { x: 0, y: 0 }, { duration: 0.5 }),
	safeAnimate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0.5 })
}`);a(t,e)},$$slots:{default:!0}});var te=n(ee);d(te,{children:(t,r)=>{o();var e=et(),s=n(p(e));u(s,{content:"box"}),o(),a(t,e)},$$slots:{default:!0}});var ne=n(te);d(ne,{children:(t,r)=>{o();var e=tt(),s=n(p(e));$(s,{href:"https://svelte.dev/docs/svelte-transition",children:(l,h)=>{o();var c=i("transition directives");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var oe=n(ne);Te(oe,{src:"/images/blog/defying-the-laws-of-web-animations/auth_transitions.mov"});var ae=n(oe);d(ae,{children:(t,r)=>{o();var e=i("The video above showcases both Motion and Svelte transitions in action. The table and code box enter animations are controlled by Motion, while the new user entering the table is animated by Svelte, as well as the OAuth options.");a(t,e)},$$slots:{default:!0}});var re=n(ae);b(re,{content:`<!-- Svelte Animations -->
<button class="sign-up">Sign Up</button>
{#if controlsEnabled}
	<span class="with-sep" transition:fade={{ duration: 100 }}>or sign up with</span>
	<div class="oauth-btns" transition:fade={{ duration: 100 }}>
		{#each objectKeys($state.controls).filter((p) => $state.controls[p]) as provider (provider)}
			<button class="oauth" transition:fade={{ duration: 100 }} animate:flip={{ duration: 250 }}>
			<div class="inner">
				<span class="web-icon-{provider.toLowerCase()}" />
				<span>{provider}</span>
			</div>
			</button>
		{/each}
	</div>
{/if}
`,language:"html",process:!0,children:(t,r)=>{o();var e=i(`<!-- Svelte Animations -->
<button class="sign-up">Sign Up</button>
{#if controlsEnabled}
	<span class="with-sep" transition:fade={{ duration: 100 }}>or sign up with</span>
	<div class="oauth-btns" transition:fade={{ duration: 100 }}>
		{#each objectKeys($state.controls).filter((p) => $state.controls[p]) as provider (provider)}
			<button class="oauth" transition:fade={{ duration: 100 }} animate:flip={{ duration: 250 }}>
			<div class="inner">
				<span class="web-icon-{provider.toLowerCase()}" />
				<span>{provider}</span>
			</div>
			</button>
		{/each}
	</div>
{/if}`);a(t,e)},$$slots:{default:!0}});var se=n(re);g(se,{level:2,children:(t,r)=>{o();var e=i("Transitioning between sections");a(t,e)},$$slots:{default:!0}});var ie=n(se);d(ie,{children:(t,r)=>{o();var e=i("There's one other nifty feature of Motion that I didn't mention: It can seamlessly interrupt ongoing animations.");a(t,e)},$$slots:{default:!0}});var le=n(ie);d(le,{children:(t,r)=>{o();var e=nt(),s=n(p(e));u(s,{content:"Box"});var l=n(s,2);u(l,{content:"x: 0"});var h=n(l,2);u(h,{content:"x: 64"});var c=n(h,2);u(c,{content:"Box"});var f=n(c,2);u(f,{content:"x: 32"});var m=n(f,2);u(m,{content:"x: 32"});var _=n(m,2);u(_,{content:"x: 0"});var ke=n(_,2);u(ke,{content:"Box"});var Ce=n(ke,2);u(Ce,{content:"x: 64"});var Ue=n(Ce,2);u(Ue,{content:"x: 0"}),o(),a(t,e)},$$slots:{default:!0}});var de=n(le);d(de,{children:(t,r)=>{var e=ot(),s=p(e);$(s,{href:"https://codepen.io/TGLIDE/pen/mdaZyKv",children:(l,h)=>{o();var c=i("Here's an example");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var ce=n(de);d(ce,{children:(t,r)=>{o();var e=i("Going back to our own animations then, on the start of each section animation, we reset the elements back to their starting elements.");a(t,e)},$$slots:{default:!0}});var ue=n(ce);b(ue,{content:`const { update } = state.reset();

await Promise.all([
	animate(box, { x: 310, y: 140, opacity: 0 }, { duration: 0.5 }).finished,
	animate(code, { x: 200, y: 460, opacity: 0 }, { duration: 0.5 }).finished,
	animate(phone, { x: 0, y: 0 }, { duration: 0.5 }).finished,
	animate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0.5 }).finished
]);
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i(`const { update } = state.reset();

await Promise.all([
	animate(box, { x: 310, y: 140, opacity: 0 }, { duration: 0.5 }).finished,
	animate(code, { x: 200, y: 460, opacity: 0 }, { duration: 0.5 }).finished,
	animate(phone, { x: 0, y: 0 }, { duration: 0.5 }).finished,
	animate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0.5 }).finished
]);`);a(t,e)},$$slots:{default:!0}});var he=n(ue);d(he,{children:(t,r)=>{o();var e=i("This allows Motion to seamlessly transition between the current animation state of the elements into the new ones.");a(t,e)},$$slots:{default:!0}});var ve=n(he);d(ve,{children:(t,r)=>{o();var e=i("There's still an elephant in the room though... We're using async functions. If the function is still running, and I go into a new section, that means that two functions will be running that control the same element! How come the animations don't clash?");a(t,e)},$$slots:{default:!0}});var pe=n(ve);d(pe,{children:(t,r)=>{o();var e=at(),s=n(p(e));u(s,{content:"#box-1"});var l=n(s,2);u(l,{content:"#box-2"}),o(),a(t,e)},$$slots:{default:!0}});var fe=n(pe);d(fe,{children:(t,r)=>{o();var e=i("How does this look in practice? If I'm starting Section 1's animation, this is at the beginning of my async function.");a(t,e)},$$slots:{default:!0}});var me=n(fe);b(me,{content:`const box = getElSelector('box'); // #box-1
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i("const box = getElSelector('box'); // #box-1");a(t,e)},$$slots:{default:!0}});var $e=n(me);d($e,{children:(t,r)=>{o();var e=rt(),s=n(p(e));u(s,{content:"box"});var l=n(s,2);u(l,{content:"#box-1"}),o(),a(t,e)},$$slots:{default:!0}});var be=n($e);d(be,{children:(t,r)=>{o();var e=st(),s=n(p(e));$(s,{href:"https://svelte.dev/docs/svelte-store",children:(l,h)=>{o();var c=i("Svelte stores");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var ge=n(be);b(ge,{content:`const { update } = state.reset();
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i("const { update } = state.reset();");a(t,e)},$$slots:{default:!0}});var _e=n(ge);d(_e,{children:(t,r)=>{o();var e=it(),s=n(p(e));u(s,{content:"resettable"});var l=n(s,2);u(l,{content:"reset"});var h=n(l,2);u(h,{content:"update"});var c=n(h,2);u(c,{content:"resettable"});var f=n(c,2);u(f,{content:"reset"}),o(),a(t,e)},$$slots:{default:!0}});var we=n(_e);d(we,{children:(t,r)=>{o();var e=i("This is what the code looks like:");a(t,e)},$$slots:{default:!0}});var ye=n(we);b(ye,{content:`const simpleUUID = () => {
    return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
};

export const createResettable = <Value>(defaultValue: Value) => {
    type SubscribeCallback = (v: Value) => void;
    let subscribeCallbacks: SubscribeCallback[] = [];

    let currUuid = simpleUUID();
    let state = structuredClone(defaultValue);

    const subscribe = (cb: SubscribeCallback) => {
        subscribeCallbacks.push(cb);
        cb(state);

        return () => {
            subscribeCallbacks = subscribeCallbacks.filter((c) => c !== cb);
        };
    };

    const reset = () => {
        currUuid = simpleUUID();
        const fixedId = currUuid;
        const set = (v: Value) => {
            if (fixedId !== currUuid) return;
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        };

        const update = (fn: (v: Value) => Value) => {
            set(fn(state));
        };

        set(structuredClone(defaultValue));
        return { set, update };
    };

    return {
        subscribe,
        reset,
        set: (v: Value) => {
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        },
        update: (fn: (v: Value) => Value) => {
            state = fn(state);
            subscribeCallbacks.forEach((cb) => cb(state));
        }
    };
};
`,language:"typescript",process:!0,children:(t,r)=>{o();var e=i(`const simpleUUID = () => {
    return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
};

export const createResettable = <Value>(defaultValue: Value) => {
    type SubscribeCallback = (v: Value) => void;
    let subscribeCallbacks: SubscribeCallback[] = [];

    let currUuid = simpleUUID();
    let state = structuredClone(defaultValue);

    const subscribe = (cb: SubscribeCallback) => {
        subscribeCallbacks.push(cb);
        cb(state);

        return () => {
            subscribeCallbacks = subscribeCallbacks.filter((c) => c !== cb);
        };
    };

    const reset = () => {
        currUuid = simpleUUID();
        const fixedId = currUuid;
        const set = (v: Value) => {
            if (fixedId !== currUuid) return;
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        };

        const update = (fn: (v: Value) => Value) => {
            set(fn(state));
        };

        set(structuredClone(defaultValue));
        return { set, update };
    };

    return {
        subscribe,
        reset,
        set: (v: Value) => {
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        },
        update: (fn: (v: Value) => Value) => {
            state = fn(state);
            subscribeCallbacks.forEach((cb) => cb(state));
        }
    };
};`);a(t,e)},$$slots:{default:!0}});var xe=n(ye);d(xe,{children:(t,r)=>{o();var e=lt(),s=n(p(e));u(s,{content:"resettable"});var l=n(s,2);u(l,{content:"getElSelector"}),o(),a(t,e)},$$slots:{default:!0}});var Pe=n(xe);g(Pe,{level:2,children:(t,r)=>{o();var e=i("Wrapping it up");a(t,e)},$$slots:{default:!0}});var Ie=n(Pe);d(Ie,{children:(t,r)=>{o();var e=i("We've gone over the building blocks of our main animations: Triggering an animation on scroll, coding said animation, and enabling the transition between multiple animations. Join them all up, and we've just transformed a designer's dream into reality!");a(t,e)},$$slots:{default:!0}});var Se=n(Ie);d(Se,{children:(t,r)=>{o();var e=dt(),s=n(p(e));$(s,{href:"https://github.com/Back-rush/website/",children:(l,h)=>{o();var c=i("source code");a(l,c)},$$slots:{default:!0}}),o(),a(t,e)},$$slots:{default:!0}});var Ve=n(Se);d(Ve,{children:(t,r)=>{o();var e=i("Happy hacking!");a(t,e)},$$slots:{default:!0}}),Le(w),a(He,w)},$$slots:{default:!0}}))}const Mt=Object.freeze(Object.defineProperty({__proto__:null,default:ut,frontmatter:Ee},Symbol.toStringTag,{value:"Module"}));export{Mt as _,ut as a};
