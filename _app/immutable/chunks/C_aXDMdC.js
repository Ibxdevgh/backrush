import{t as h,b as i,a as n}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{s as o,f as p,c as _t,n as r,r as bt}from"./NgVQVlRK.js";import{n as yt}from"./B4IyMRKX.js";import{H as $}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as m}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as xt}from"./DXp9_3zM.js";import{F as w}from"./OFUKRh55.js";import{L as kt,I as b}from"./BhmTgGWB.js";import{P as s}from"./D8YsId2T.js";import{L as v}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Pt}from"./CEkRzcqJ.js";const ft={layout:"post",title:"How to build your digital event tickets",description:"Did you enjoy the Init tickets? In this blog we share how you can create your own.",date:"2024-03-04T00:00:00.000Z",cover:"/images/blog/tickets-cover.png",timeToRead:12,author:"laura-du-ry",category:"init"};var It=h("Do you remember the Backrush <!>? They were an absolute hit and filled our entire timeline for days. For Init, we wanted to create a new card, or better yet, a ticket to celebrate in style. So, we created three types of tickets that are unique to you with the help of your GitHub contributions and the tribe customization.",1),Tt=h("Let’s start with the inspiration for the tickets. A few team members went to GitHub Universe in November 2023 and received a unique, customizable event badge with a grid on the side. These physical <!> inspired our very own Init tickets that would convey the feeling of a real ticket to an event.",1),At=h("<!><!><!>",1),Ct=h("Now, in case you would like to know how you can do this, we asked the engineer in charge, <!>, to explain the process.",1),Dt=h("By following our <!>, and creating an OAuth GitHub App, we&#39;re quickly able to create a login flow for Backrush Init. When logging in for the first time, a new ticket is instantiated and saved to Backrush Cloud.",1),Ht=h("There are two ways to achieve this. The first one, is using the GraphQL API. <!> was initially used as a source of inspiration when implementing this feature. However, with this data, you only get the number of contributions but not the actual chart.",1),Wt=h("Our website is developed with SvelteKit, which is a full-stack framework. TL;DR, we have control over both the server and the client. So, when someone requests their ticket, we can make the server directly access your GitHub profile page and read the chart! We used a library called <!> to deal with the HTML data.",1),Gt=h("You can find the entire source code for the tickets on <!> to create your digital event tickets. In May, we created a <!> for the Cloud cards on how to add a pop, rotation, and glare to the cards. We advise you to check it out to make your tickets all the more magical.",1),Lt=h("Although Init is over, you can still get yourself a ticket at <!>",1),qt=h("<!> to be the first to get updates and to be part of a vibrant community!",1),St=h("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function Nt(mt){Pt(mt,yt(ft,{children:(gt,Bt)=>{var _=St(),y=_t(_);s(y,{children:(t,a)=>{r();var e=It(),l=o(p(e));v(l,{href:"https://dev.to/backrush/how-we-implemented-the-card-animation-in-backrush-cloud-public-beta-4npb",children:(u,d)=>{r();var c=i("Cloud cards");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var x=o(y);s(x,{children:(t,a)=>{r();var e=i("As always, we want to share our learning so you can create your own tickets with GitHub OAuth and grid integration.");n(t,e)},$$slots:{default:!0}});var k=o(x);$(k,{level:1,children:(t,a)=>{r();var e=i("Ticket design inspiration");n(t,e)},$$slots:{default:!0}});var P=o(k);s(P,{children:(t,a)=>{r();var e=Tt(),l=o(p(e));v(l,{href:"https://twitter.com/didier_lopes/status/1724925458762936817",children:(u,d)=>{r();var c=i("event tickets");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var I=o(P);s(I,{children:(t,a)=>{r();var e=i("We took this idea, made it our own, and created three different types of tickets that would celebrate Init. The different types are categorized into:");n(t,e)},$$slots:{default:!0}});var T=o(I);kt(T,{ordered:!1,marker:"-",children:(t,a)=>{var e=At(),l=p(e);b(l,{children:(c,f)=>{r();var g=i("Init celebration");n(c,g)},$$slots:{default:!0}});var u=o(l);b(u,{children:(c,f)=>{r();var g=i("Developers building with Backrush");n(c,g)},$$slots:{default:!0}});var d=o(u);b(d,{children:(c,f)=>{r();var g=i("Backrush contributors");n(c,g)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var A=o(T);s(A,{children:(t,a)=>{r();var e=i("Depending on your specific situation, you get a certain type of card that you can then customize and personalize.");n(t,e)},$$slots:{default:!0}});var C=o(A);s(C,{children:(t,a)=>{r();var e=i("Here is an overview of the three design types.");n(t,e)},$$slots:{default:!0}});var D=o(C);$(D,{level:3,children:(t,a)=>{r();var e=i("Init celebration");n(t,e)},$$slots:{default:!0}});var H=o(D);s(H,{children:(t,a)=>{r();var e=i("The Init celebration ticket is what everyone gets at sign-up. This is your starting point.");n(t,e)},$$slots:{default:!0}});var W=o(H);s(W,{children:(t,a)=>{m(t,{src:"/images/blog/card1.png",alt:"Init celebration ticket"})},$$slots:{default:!0}});var G=o(W);$(G,{level:3,children:(t,a)=>{r();var e=i("Building with Backrush");n(t,e)},$$slots:{default:!0}});var L=o(G);s(L,{children:(t,a)=>{r();var e=i("The Backrush ticket is for all developers with an Backrush account. They get a pink ticket with an extra pink glow.");n(t,e)},$$slots:{default:!0}});var q=o(L);s(q,{children:(t,a)=>{m(t,{src:"/images/blog/card2.png",alt:"Init Backrush dev ticket"})},$$slots:{default:!0}});var S=o(q);$(S,{level:3,children:(t,a)=>{r();var e=i("Backrush contributors");n(t,e)},$$slots:{default:!0}});var N=o(S);s(N,{children:(t,a)=>{r();var e=i("Then, we have one very special ticket dedicated to contributors of Backrush. If you have contributed to Backrush in any way, you will get this special design. It’s a platinum card with a rainbow glow.");n(t,e)},$$slots:{default:!0}});var B=o(N);s(B,{children:(t,a)=>{m(t,{src:"/images/blog/card3.png",alt:"Init contributors ticket"})},$$slots:{default:!0}});var R=o(B);$(R,{level:1,children:(t,a)=>{r();var e=i("Show off your GitHub contributions grid");n(t,e)},$$slots:{default:!0}});var E=o(R);s(E,{children:(t,a)=>{r();var e=i("An essential part of the ticket is that we wanted to emphasize the importance of contributing to open source. What better way than showing off your actual contributions within your ticket?");n(t,e)},$$slots:{default:!0}});var O=o(E);s(O,{children:(t,a)=>{m(t,{src:"/images/blog/tickets-blog.png",alt:"Init celebration ticket"})},$$slots:{default:!0}});var M=o(O);s(M,{children:(t,a)=>{r();var e=i("As you can see on each side of the ticket, a grid resembles your unique GitHub contributions over the past year, just like on your GitHub profile. You can choose to add the grid with a toggle, but to do so, you need to connect your GitHub account.");n(t,e)},$$slots:{default:!0}});var U=o(M);s(U,{children:(t,a)=>{r();var e=Ct(),l=o(p(e));v(l,{href:"https://github.com/TGlide",children:(u,d)=>{r();var c=i("Thomas G Lopes");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var j=o(U);$(j,{level:2,children:(t,a)=>{r();var e=i("Associating your GitHub account with your ticket");n(t,e)},$$slots:{default:!0}});var z=o(j);s(z,{children:(t,a)=>{r();var e=i("First, you need to associate your GitHub account with your Init ticket. Therefore, we need to create an authentication flow on our website. Fortunately, with Backrush Cloud, it was quite easy to do so.");n(t,e)},$$slots:{default:!0}});var F=o(z);s(F,{children:(t,a)=>{r();var e=Dt(),l=o(p(e));v(l,{href:"https://backrush.io/docs/products/auth/oauth2",children:(u,d)=>{r();var c=i("documentation on OAuth");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Y=o(F);s(Y,{children:(t,a)=>{m(t,{src:"/images/blog/tickets-blog2.png",alt:"Init celebration ticket"})},$$slots:{default:!0}});var K=o(Y);$(K,{level:2,children:(t,a)=>{r();var e=i("Integrating the GitHub contributions grid");n(t,e)},$$slots:{default:!0}});var J=o(K);s(J,{children:(t,a)=>{r();var e=i("Now that the association part is done, it’s time to integrate the more interesting part, the GitHub contributions grid.");n(t,e)},$$slots:{default:!0}});var Q=o(J);s(Q,{children:(t,a)=>{r();var e=Ht(),l=o(p(e));v(l,{href:"https://medium.com/@yuichkun/how-to-retrieve-contribution-graph-data-from-the-github-api-dc3a151b4af",children:(u,d)=>{r();var c=i("This article");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var Z=o(Q);s(Z,{children:(t,a)=>{r();var e=i("In GitHub's chart, each square can have a level from 0 to 4, where each level is brighter than the other, indicating more contributions. We need a way to convert those numbers of contributions to levels, but unfortunately, that algorithm is not exposed by GitHub.");n(t,e)},$$slots:{default:!0}});var V=o(Z);s(V,{children:(t,a)=>{r();var e=i("We wanted the contribution chart to be as close to reality as possible. So, we arrived at our second solution: getting the chart from the source!");n(t,e)},$$slots:{default:!0}});var X=o(V);s(X,{children:(t,a)=>{r();var e=Wt(),l=o(p(e));xt(l,{content:"node-html-parser"}),r(),n(t,e)},$$slots:{default:!0}});var tt=o(X);s(tt,{children:(t,a)=>{r();var e=i("We then can generate a matrix that representes the contribution chart. Each array of the matrix will represent a week, and each item of said array will contain the contribution level for that particular day.");n(t,e)},$$slots:{default:!0}});var et=o(tt);w(et,{content:`const res = await fetch(\`https://github.com/\${gh_user}\`);

const html = await res.text();
const root = parse(html);
const table = root.querySelector('table');
if (!table) return null;

const matrix: ContributionsMatrix = [];
const rows = table.querySelectorAll('tbody tr');
const maxCols = rows[0].querySelectorAll('[role="gridcell"]').length;
for (let c = 0; c < maxCols; c++) {
    matrix.push([]);
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const cells = row.querySelectorAll('[role="gridcell"]');
        if (c >= cells.length) continue;

        const cell = cells[c];
        matrix[c].push(Number(cell.getAttribute('data-level')));
    }

    matrix[c] = matrix[c].reverse();
}
`,language:"ts",process:!0,children:(t,a)=>{r();var e=i(`const res = await fetch(\`https://github.com/\${gh_user}\`);

const html = await res.text();
const root = parse(html);
const table = root.querySelector('table');
if (!table) return null;

const matrix: ContributionsMatrix = [];
const rows = table.querySelectorAll('tbody tr');
const maxCols = rows[0].querySelectorAll('[role="gridcell"]').length;
for (let c = 0; c < maxCols; c++) {
    matrix.push([]);
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const cells = row.querySelectorAll('[role="gridcell"]');
        if (c >= cells.length) continue;

        const cell = cells[c];
        matrix[c].push(Number(cell.getAttribute('data-level')));
    }

    matrix[c] = matrix[c].reverse();
}`);n(t,e)},$$slots:{default:!0}});var rt=o(et);s(rt,{children:(t,a)=>{r();var e=i("However, this operation is expensive! It's best if we don't have to always fetch it on each and every access to it. So we save it to Backrush Cloud. By using a number array attribute and converting the matrix to a flat array, this is what our final code will look like.");n(t,e)},$$slots:{default:!0}});var ot=o(rt);w(ot,{content:`import { BACKRUSH_DB_INIT_ID, BACKRUSH_COL_INIT_ID } from '$env/static/private';
import { backrushInit } from '$lib/backrush/init';
import parse from 'node-html-parser';
import type { TicketData, ContributionsMatrix } from '../../constants';

export async function getContributions(id: string): Promise<ContributionsMatrix | null> {
    const { gh_user, contributions } = (await backrushInit.database.getDocument(
        BACKRUSH_DB_INIT_ID,
        BACKRUSH_COL_INIT_ID,
        id
    )) as unknown as TicketData;

    if (!gh_user) return null;

    if (contributions?.length) {
        // Transform flat array into matrix with 7 columns
        const matrix: ContributionsMatrix = [];
        for (let i = 0; i < contributions.length; i += 7) {
            matrix.push(contributions.slice(i, i + 7));
        }
        return matrix;
    }

    // Code for fetching the matrix here

    // Update the document with the new contributions
    await backrushInit.database.updateDocument(BACKRUSH_DB_INIT_ID, BACKRUSH_COL_INIT_ID, id, {
        contributions: matrix.flat()
    });

    return matrix;
}
`,language:"ts",process:!0,children:(t,a)=>{r();var e=i(`import { BACKRUSH_DB_INIT_ID, BACKRUSH_COL_INIT_ID } from '$env/static/private';
import { backrushInit } from '$lib/backrush/init';
import parse from 'node-html-parser';
import type { TicketData, ContributionsMatrix } from '../../constants';

export async function getContributions(id: string): Promise<ContributionsMatrix | null> {
    const { gh_user, contributions } = (await backrushInit.database.getDocument(
        BACKRUSH_DB_INIT_ID,
        BACKRUSH_COL_INIT_ID,
        id
    )) as unknown as TicketData;

    if (!gh_user) return null;

    if (contributions?.length) {
        // Transform flat array into matrix with 7 columns
        const matrix: ContributionsMatrix = [];
        for (let i = 0; i < contributions.length; i += 7) {
            matrix.push(contributions.slice(i, i + 7));
        }
        return matrix;
    }

    // Code for fetching the matrix here

    // Update the document with the new contributions
    await backrushInit.database.updateDocument(BACKRUSH_DB_INIT_ID, BACKRUSH_COL_INIT_ID, id, {
        contributions: matrix.flat()
    });

    return matrix;
}`);n(t,e)},$$slots:{default:!0}});var nt=o(ot);s(nt,{children:(t,a)=>{r();var e=i("With this, requests will be much faster. But we still care about the initial load, right? First impressions are everything.");n(t,e)},$$slots:{default:!0}});var at=o(nt);s(at,{children:(t,a)=>{r();var e=i("So, we adopted a smart strategy. When requesting the ticket, instead of waiting for all the data to load (the ticket data + the contributions) before rendering the page, we stream the contribution data. This is what our load function looks like:");n(t,e)},$$slots:{default:!0}});var it=o(at);w(it,{content:`import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect(307, '/init/ticket');
    }

    const user = await getUser();
    const ticket = await getTicketByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
`,language:"ts",process:!0,children:(t,a)=>{r();var e=i(`import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect(307, '/init/ticket');
    }

    const user = await getUser();
    const ticket = await getTicketByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};`);n(t,e)},$$slots:{default:!0}});var st=o(it);s(st,{children:(t,a)=>{r();var e=i("Then, with SvelteKit, we can show the contributions as soon as they're ready.");n(t,e)},$$slots:{default:!0}});var lt=o(st);w(lt,{content:`{#await contributions then c}
    {#if c && show_contributions}
        <div
            class="github"
            out:fade={{ duration: 100 }}
            data-remove-delay={removeDelay ? '' : undefined}
        >
            {#each c as row}
                <div class="row">
                    {#each row as level, j}
                        <div style:--index={row.length - j} data-level={level} />
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
{/await}
`,language:"svelte",process:!0,children:(t,a)=>{r();var e=i(`{#await contributions then c}
    {#if c && show_contributions}
        <div
            class="github"
            out:fade={{ duration: 100 }}
            data-remove-delay={removeDelay ? '' : undefined}
        >
            {#each c as row}
                <div class="row">
                    {#each row as level, j}
                        <div style:--index={row.length - j} data-level={level} />
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
{/await}`);n(t,e)},$$slots:{default:!0}});var ct=o(lt);s(ct,{children:(t,a)=>{r();var e=i("This means that users can see the ticket without waiting for all data to load but still see the chart seamlessly added to the ticket.");n(t,e)},$$slots:{default:!0}});var ut=o(ct);$(ut,{level:1,children:(t,a)=>{r();var e=i("Your tribe");n(t,e)},$$slots:{default:!0}});var dt=o(ut);s(dt,{children:(t,a)=>{r();var e=i("Thomas explained the cool part of how we managed to make your ticket truly unique. But we also wanted to allow for customization so that you could also have a say in what your ticket looked like. For this, we chose to add your favorite technology's logo as a watermark.");n(t,e)},$$slots:{default:!0}});var ht=o(dt);s(ht,{children:(t,a)=>{m(t,{src:"/images/blog/tickets-blog3.gif",alt:"Init celebration ticket"})},$$slots:{default:!0}});var pt=o(ht);$(pt,{level:1,children:(t,a)=>{r();var e=i("Create your own");n(t,e)},$$slots:{default:!0}});var $t=o(pt);s($t,{children:(t,a)=>{r();var e=Gt(),l=o(p(e));v(l,{href:"https://github.com/backrush/console/blob/cloud-1.1.x/src/routes/card/Card.svelte",children:(d,c)=>{r();var f=i("GitHub");n(d,f)},$$slots:{default:!0}});var u=o(l,2);v(u,{href:"https://backrush-card-snippets.vercel.app/popup",children:(d,c)=>{r();var f=i("showcase site");n(d,f)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}});var vt=o($t);s(vt,{children:(t,a)=>{r();var e=Lt(),l=o(p(e));v(l,{href:"/init/tickets",children:(u,d)=>{r();var c=i("backrush.io/init/tickets");n(u,c)},$$slots:{default:!0}}),n(t,e)},$$slots:{default:!0}});var wt=o(vt);s(wt,{children:(t,a)=>{var e=qt(),l=p(e);v(l,{href:"https://backrush.io/discord",children:(u,d)=>{r();var c=i("Join us on Discord");n(u,c)},$$slots:{default:!0}}),r(),n(t,e)},$$slots:{default:!0}}),bt(_),n(gt,_)},$$slots:{default:!0}}))}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:Nt,frontmatter:ft},Symbol.toStringTag,{value:"Module"}));export{ie as _,Nt as a};
