import{t as f,b as p,a as o}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as W,s as t,f as _,n as r,r as Y}from"../chunks/NgVQVlRK.js";import{n as z}from"../chunks/B4IyMRKX.js";import{S as I}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import"../chunks/NwRJ91PD.js";import{O as U,a as S}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as A}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as P}from"../chunks/DXp9_3zM.js";import{F as y}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as l}from"../chunks/D8YsId2T.js";import{S as j}from"../chunks/yHjwcyUH.js";import{L as J}from"../chunks/yh4_9ChP.js";import{A as B}from"../chunks/CqOphJLh.js";const Q={layout:"article",title:"Start with Angular",description:"Learn how to use Backrush to add authentication, user management, file storage, and more to your Angular apps.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var V=f("Head to the <!>.",1),X=f("Then, under <!>, add a <!>. The <!> should be <!>.",1),Z=f("<!><!><!><!><!><!><!><!>",1),tt=f("<!><!><!><!><!>",1),et=f("<!><!>",1),rt=f("Find your project&#39;s ID in the <!> page.",1),ot=f("Create a new file <!> and add the following code to it, replace <!> with your project ID.",1),nt=f("<!><!><!><!><!>",1),at=f("First, add imports for the <!> from Angular to handle the login form..",1),st=f("Then, replace the contents of <!>.",1),lt=f("Lastly, update <!>.",1),pt=f("<!><!><!><!><!><!>",1),it=f("Run your project with <!> and open <!> in your browser.",1),dt=f("<article><!><!><!><!><!><!><!></article>");function St(G){B(G,z(Q,{children:(H,ct)=>{var D=dt(),E=W(D);l(E,{children:(h,x)=>{r();var i=p("Learn how to setup your first Angular project powered by Backrush.");o(h,i)},$$slots:{default:!0}});var R=t(E);I(R,{id:"step-1",step:1,title:"Create project",children:(h,x)=>{var i=Z(),m=_(i);l(m,{children:(e,u)=>{r();var c=V(),w=t(_(c));J(w,{href:"https://cloud.backrush.io/console",children:(k,M)=>{r();var L=p("Backrush Console");o(k,L)},$$slots:{default:!0}}),r(),o(e,c)},$$slots:{default:!0}});var $=t(m);U($,{children:(e,u)=>{l(e,{children:(c,w)=>{A(c,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var d=t($);S(d,{children:(e,u)=>{l(e,{children:(c,w)=>{A(c,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var g=t(d);l(g,{children:(e,u)=>{r();var c=p("If this is your first time using Backrush, create an account and create your first project.");o(e,c)},$$slots:{default:!0}});var v=t(g);l(v,{children:(e,u)=>{r();var c=X(),w=t(_(c));j(w,{marker:"**",children:(b,T)=>{r();var C=p("Add a platform");o(b,C)},$$slots:{default:!0}});var k=t(w,2);j(k,{marker:"**",children:(b,T)=>{r();var C=p("Web app");o(b,C)},$$slots:{default:!0}});var M=t(k,2);j(M,{marker:"**",children:(b,T)=>{r();var C=p("Hostname");o(b,C)},$$slots:{default:!0}});var L=t(M,2);P(L,{content:"localhost"}),r(),o(e,c)},$$slots:{default:!0}});var s=t(v);U(s,{children:(e,u)=>{l(e,{children:(c,w)=>{A(c,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var a=t(s);S(a,{children:(e,u)=>{l(e,{children:(c,w)=>{A(c,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var n=t(a);l(n,{children:(e,u)=>{r();var c=p("You can skip optional steps.");o(e,c)},$$slots:{default:!0}}),o(h,i)},$$slots:{default:!0}});var q=t(R);I(q,{id:"step-2",step:2,title:"Create Angular project",children:(h,x)=>{var i=tt(),m=_(i);l(m,{children:(s,a)=>{r();var n=p("Create an Angular project.");o(s,n)},$$slots:{default:!0}});var $=t(m);l($,{children:(s,a)=>{r();var n=p("If you don't have Angular CLI installed, run this command.");o(s,n)},$$slots:{default:!0}});var d=t($);y(d,{content:`npm install -g @angular/cli
`,language:"sh",process:!0,children:(s,a)=>{r();var n=p("npm install -g @angular/cli");o(s,n)},$$slots:{default:!0}});var g=t(d);l(g,{children:(s,a)=>{r();var n=p("Then, create a project.");o(s,n)},$$slots:{default:!0}});var v=t(g);y(v,{content:`ng new my-app
cd my-app
`,language:"sh",process:!0,children:(s,a)=>{r();var n=p(`ng new my-app
cd my-app`);o(s,n)},$$slots:{default:!0}}),o(h,i)},$$slots:{default:!0}});var F=t(q);I(F,{id:"step-3",step:3,title:"Install Backrush",children:(h,x)=>{var i=et(),m=_(i);l(m,{children:(d,g)=>{r();var v=p("Install the JavaScript Backrush SDK.");o(d,v)},$$slots:{default:!0}});var $=t(m);y($,{content:`npm install backrush@14.0.1
`,language:"sh",process:!0,children:(d,g)=>{r();var v=p("npm install backrush@14.0.1");o(d,v)},$$slots:{default:!0}}),o(h,i)},$$slots:{default:!0}});var N=t(F);I(N,{id:"step-4",step:4,title:"Import Backrush",children:(h,x)=>{var i=nt(),m=_(i);l(m,{children:(s,a)=>{r();var n=rt(),e=t(_(n));j(e,{marker:"**",children:(u,c)=>{r();var w=p("Settings");o(u,w)},$$slots:{default:!0}}),r(),o(s,n)},$$slots:{default:!0}});var $=t(m);U($,{children:(s,a)=>{l(s,{children:(n,e)=>{A(n,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var d=t($);S(d,{children:(s,a)=>{l(s,{children:(n,e)=>{A(n,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var g=t(d);l(g,{children:(s,a)=>{r();var n=ot(),e=t(_(n));P(e,{content:"src/lib/backrush.ts"});var u=t(e,2);P(u,{content:"<PROJECT_ID>"}),r(),o(s,n)},$$slots:{default:!0}});var v=t(g);y(v,{content:`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';
`,language:"client-web",process:!0,children:(s,a)=>{r();var n=p(`import { Client, Account} from 'backrush';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.backrush.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'backrush';`);o(s,n)},$$slots:{default:!0}}),o(h,i)},$$slots:{default:!0}});var O=t(N);I(O,{id:"step-5",step:5,title:"Create a login page",children:(h,x)=>{var i=pt(),m=_(i);l(m,{children:(a,n)=>{r();var e=at(),u=t(_(e));P(u,{content:"FormsModule"}),r(),o(a,e)},$$slots:{default:!0}});var $=t(m);y($,{content:`import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`,language:"ts",process:!0,children:(a,n)=>{r();var e=p(`import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`);o(a,e)},$$slots:{default:!0}});var d=t($);l(d,{children:(a,n)=>{r();var e=st(),u=t(_(e));P(u,{content:"src/app/app.component.html"}),r(),o(a,e)},$$slots:{default:!0}});var g=t(d);y(g,{content:`<div>
  <p>
    {{ loggedInUser ? 'Logged in as ' + loggedInUser.name : 'Not logged in' }}
  </p>

  <div>
    <input type="email" placeholder="Email" [(ngModel)]="email" />
    <input type="password" placeholder="Password" [(ngModel)]="password" />
    <input type="text" placeholder="Name" [(ngModel)]="name" />

    <button (click)="login(email, password)">
      Login
    </button>

    <button (click)="register(email, password, name)">
      Register
    </button>

    <button (click)="logout()">
      Logout
    </button>
  </div>
</div>
`,language:"html",process:!0,children:(a,n)=>{r();var e=p(`<div>
  <p>
    {{ loggedInUser ? 'Logged in as ' + loggedInUser.name : 'Not logged in' }}
  </p>

  <div>
    <input type="email" placeholder="Email" [(ngModel)]="email" />
    <input type="password" placeholder="Password" [(ngModel)]="password" />
    <input type="text" placeholder="Name" [(ngModel)]="name" />

    <button (click)="login(email, password)">
      Login
    </button>

    <button (click)="register(email, password, name)">
      Register
    </button>

    <button (click)="logout()">
      Logout
    </button>
  </div>
</div>`);o(a,e)},$$slots:{default:!0}});var v=t(g);l(v,{children:(a,n)=>{r();var e=lt(),u=t(_(e));P(u,{content:"src/app/app.component.ts"}),r(),o(a,e)},$$slots:{default:!0}});var s=t(v);y(s,{content:`import { Component } from '@angular/core';
import { account, ID } from '../lib/backrush';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }
}
`,language:"ts",process:!0,children:(a,n)=>{r();var e=p(`import { Component } from '@angular/core';
import { account, ID } from '../lib/backrush';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }
}`);o(a,e)},$$slots:{default:!0}}),o(h,i)},$$slots:{default:!0}});var K=t(O);I(K,{id:"step-6",step:6,title:"All set",children:(h,x)=>{l(h,{children:(i,m)=>{r();var $=it(),d=t(_($));P(d,{content:"ng serve --port 3000"});var g=t(d,2);J(g,{href:"http://localhost:3000",children:(v,s)=>{r();var a=p("Localhost on Port 3000");o(v,a)},$$slots:{default:!0}}),r(),o(i,$)},$$slots:{default:!0}})},$$slots:{default:!0}}),Y(D),o(H,D)},$$slots:{default:!0}}))}export{St as component};
