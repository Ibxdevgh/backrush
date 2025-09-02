import{t as m,b as d,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as Y,s as t,f as P,n as e,r as q}from"../chunks/NgVQVlRK.js";import{n as F}from"../chunks/B4IyMRKX.js";import{S as w}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import{I as T}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as M}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as I}from"../chunks/DXp9_3zM.js";import{F as G}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as l}from"../chunks/D8YsId2T.js";import{S as R}from"../chunks/yHjwcyUH.js";import{L as b}from"../chunks/yh4_9ChP.js";import{A as J}from"../chunks/CqOphJLh.js";const K={layout:"article",title:"Claude Desktop",description:"Add the MCP server to Claude Desktop"};var H=m("You must install <!> on your system to use the MCP server.",1),V=m("In the Claude Desktop app, open the app&#39;s <!> page (press <!> on Windows or <!> on MacOS) and head to the <!> tab.",1),z=m("Clicking on the <!> button will take you to the <!> file. In case the file is missing, please visit the <!> docs.",1),B=m("To enable additional tools, learn more about <!>.",1),Q=m("<!><!><!><!><!><!>",1),U=m("In case you see a <!> error, ensure that you either add <!> to the <!> environment variable on your system or use the full path to your <!> installation in the config file.",1),X=m("<!><!><!>",1),Z=m("<!><!>",1),tt=m("<article><!><!><!><!><!></article>");function Et(W){J(W,F(K,{children:(j,et)=>{var A=tt(),D=Y(A);l(D,{children:(c,y)=>{e();var s=d("Learn how you can add the Backrush MCP server to Claude Desktop.");r(c,s)},$$slots:{default:!0}});var N=t(D);T(N,{title:"Pre-requisite: Install uv",children:(c,y)=>{l(c,{children:(s,$)=>{e();var p=H(),u=t(P(p));b(u,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:(a,_)=>{e();var g=d("uv");r(a,g)},$$slots:{default:!0}}),e(),r(s,p)},$$slots:{default:!0}})}});var O=t(N);w(O,{id:"step-1",step:1,title:"Add MCP server",children:(c,y)=>{var s=Q(),$=P(s);l($,{children:(n,f)=>{e();var o=V(),v=t(P(o));R(v,{marker:"**",children:(E,x)=>{e();var k=d("Settings");r(E,k)},$$slots:{default:!0}});var i=t(v,2);I(i,{content:"CTRL + ,"});var h=t(i,2);I(h,{content:"CMD + ,"});var C=t(h,2);R(C,{marker:"**",children:(E,x)=>{e();var k=d("Developer");r(E,k)},$$slots:{default:!0}}),e(),r(n,o)},$$slots:{default:!0}});var p=t($);l(p,{children:(n,f)=>{M(n,{src:"/images/docs/mcp/claude/claude-settings.png",alt:"Claude Settings"})},$$slots:{default:!0}});var u=t(p);l(u,{children:(n,f)=>{e();var o=z(),v=t(P(o));R(v,{marker:"**",children:(C,E)=>{e();var x=d("Edit Config");r(C,x)},$$slots:{default:!0}});var i=t(v,2);I(i,{content:"claude_desktop_config.json"});var h=t(i,2);b(h,{href:"https://modelcontextprotocol.io/quickstart/user#2-add-the-filesystem-mcp-server",children:(C,E)=>{e();var x=d("Model Context Protocol");r(C,x)},$$slots:{default:!0}}),e(),r(n,o)},$$slots:{default:!0}});var a=t(u);l(a,{children:(n,f)=>{e();var o=d("After opening the file, add the following info:");r(n,o)},$$slots:{default:!0}});var _=t(a);G(_,{content:`{
    "mcpServers": {
        "backrush": {
            "command": "uvx",
            "args": [
                "mcp-server-backrush",
                "--users"
            ],
            "env": {
                "BACKRUSH_PROJECT_ID": "your-project-id",
                "BACKRUSH_API_KEY": "your-api-key",
                "BACKRUSH_ENDPOINT": "https://<REGION>.cloud.backrush.io/v1"
            }
        }
    }
}
`,language:"json",process:!0,children:(n,f)=>{e();var o=d(`{
    "mcpServers": {
        "backrush": {
            "command": "uvx",
            "args": [
                "mcp-server-backrush",
                "--users"
            ],
            "env": {
                "BACKRUSH_PROJECT_ID": "your-project-id",
                "BACKRUSH_API_KEY": "your-api-key",
                "BACKRUSH_ENDPOINT": "https://<REGION>.cloud.backrush.io/v1"
            }
        }
    }
}`);r(n,o)},$$slots:{default:!0}});var g=t(_);T(g,{title:"Enable other MCP tools",children:(n,f)=>{l(n,{children:(o,v)=>{e();var i=B(),h=t(P(i));b(h,{href:"/docs/tooling/mcp#command-line-arguments",children:(C,E)=>{e();var x=d("command-line arguments");r(C,x)},$$slots:{default:!0}}),e(),r(o,i)},$$slots:{default:!0}})}}),r(c,s)},$$slots:{default:!0}});var S=t(O);w(S,{id:"step-2",step:2,title:"Verify MCP tools",children:(c,y)=>{var s=X(),$=P(s);l($,{children:(a,_)=>{e();var g=d("Restart the Claude Desktop app, click on the MCP tools button (at the bottom right section of the prompt input) and click on it to view available Backrush MCP tools.");r(a,g)},$$slots:{default:!0}});var p=t($);l(p,{children:(a,_)=>{M(a,{src:"/images/docs/mcp/claude/claude-mcp-tools.png",alt:"Backrush MCP tools"})},$$slots:{default:!0}});var u=t(p);T(u,{title:"uvx ENOENT error",children:(a,_)=>{l(a,{children:(g,n)=>{e();var f=U(),o=t(P(f));I(o,{content:"uvx ENOENT"});var v=t(o,2);I(v,{content:"uvx"});var i=t(v,2);I(i,{content:"PATH"});var h=t(i,2);I(h,{content:"uvx"}),e(),r(g,f)},$$slots:{default:!0}})}}),r(c,s)},$$slots:{default:!0}});var L=t(S);w(L,{id:"step-3",step:3,title:"Test the integration",children:(c,y)=>{var s=Z(),$=P(s);l($,{children:(u,a)=>{e();var _=d("Enter a prompt to list all users in your Backrush project.");r(u,_)},$$slots:{default:!0}});var p=t($);l(p,{children:(u,a)=>{M(u,{src:"/images/docs/mcp/claude/claude-list-users.png",alt:"List users in Backrush project"})},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),q(A),r(j,A)},$$slots:{default:!0}}))}export{Et as component};
