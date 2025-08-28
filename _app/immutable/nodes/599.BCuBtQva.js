import{t as $,b as a,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as N,s as e,f as h,n as t,r as W}from"../chunks/NgVQVlRK.js";import{n as j}from"../chunks/B4IyMRKX.js";import{S as b}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import{I as R}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as D}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as Y}from"../chunks/DXp9_3zM.js";import{F as L}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as d}from"../chunks/D8YsId2T.js";import{S as E}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import{A as F}from"../chunks/CqOphJLh.js";const G={layout:"article",title:"Cursor",description:"Add the MCP server to Cursor"};var J=$("You must install <!> on your system to use the MCP server.",1),K=$("Open the <!> page, head to the <!> tab, and click on the <!> button. This will open an <!> file in your editor, which you must update to the following:",1),q=$("To enable additional tools, learn more about <!>.",1),z=$("<!><!><!><!>",1),B=$("<!><!>",1),H=$("<article><!><!><!><!></article>");function hr(O){F(O,j(G,{children:(k,Q)=>{var C=H(),x=N(C);d(x,{children:(i,I)=>{t();var s=a("Learn how you can add the Backrush MCP server to Cursor.");r(i,s)},$$slots:{default:!0}});var y=e(x);R(y,{title:"Pre-requisite: Install uv",children:(i,I)=>{d(i,{children:(s,u)=>{t();var p=J(),n=e(h(p));M(n,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:(c,o)=>{t();var v=a("uv");r(c,v)},$$slots:{default:!0}}),t(),r(s,p)},$$slots:{default:!0}})}});var T=e(y);b(T,{id:"step-1",step:1,title:"Add MCP server",children:(i,I)=>{var s=z(),u=h(s);d(u,{children:(o,v)=>{t();var l=K(),w=e(h(l));E(w,{marker:"**",children:(m,g)=>{t();var _=a("Cursor Settings");r(m,_)},$$slots:{default:!0}});var P=e(w,2);E(P,{marker:"**",children:(m,g)=>{t();var _=a("MCP");r(m,_)},$$slots:{default:!0}});var f=e(P,2);E(f,{marker:"**",children:(m,g)=>{t();var _=a("Add new global MCP server");r(m,_)},$$slots:{default:!0}});var A=e(f,2);Y(A,{content:"mcp.json"}),t(),r(o,l)},$$slots:{default:!0}});var p=e(u);L(p,{content:`{
    "mcpServers": {
        "appwrite": {
            "command": "uvx",
            "args": [
                "mcp-server-appwrite",
                "--users"
            ],
            "env": {
                "APPWRITE_API_KEY": "<your-api-key>",
                "APPWRITE_PROJECT_ID": "<your-project-id>",
                "APPWRITE_ENDPOINT": "https://<REGION>.cloud.appwrite.io/v1"
            }
        }
    }
}
`,language:"json",process:!0,children:(o,v)=>{t();var l=a(`{
    "mcpServers": {
        "appwrite": {
            "command": "uvx",
            "args": [
                "mcp-server-appwrite",
                "--users"
            ],
            "env": {
                "APPWRITE_API_KEY": "<your-api-key>",
                "APPWRITE_PROJECT_ID": "<your-project-id>",
                "APPWRITE_ENDPOINT": "https://<REGION>.cloud.appwrite.io/v1"
            }
        }
    }
}`);r(o,l)},$$slots:{default:!0}});var n=e(p);d(n,{children:(o,v)=>{t();var l=a("Once you save the details, Cursor will connect with the MCP server and load all available tools. You may need to restart Cursor if it is unable to start the MCP server.");r(o,l)},$$slots:{default:!0}});var c=e(n);R(c,{title:"Enable other MCP tools",children:(o,v)=>{d(o,{children:(l,w)=>{t();var P=q(),f=e(h(P));M(f,{href:"/docs/tooling/mcp#command-line-arguments",children:(A,m)=>{t();var g=a("command-line arguments");r(A,g)},$$slots:{default:!0}}),t(),r(l,P)},$$slots:{default:!0}})}}),r(i,s)},$$slots:{default:!0}});var S=e(T);b(S,{id:"step-2",step:2,title:"Test the integration",children:(i,I)=>{var s=B(),u=h(s);d(u,{children:(n,c)=>{t();var o=a("Open Cursor Agent and add a prompt to create a new user.");r(n,o)},$$slots:{default:!0}});var p=e(u);d(p,{children:(n,c)=>{D(n,{src:"/images/docs/mcp/cursor/cursor-create-user.png",alt:"Create user in Backrush project"})},$$slots:{default:!0}}),r(i,s)},$$slots:{default:!0}}),W(C),r(k,C)},$$slots:{default:!0}}))}export{hr as component};
