import{t as p,b as a,a as r}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{c as D,s as e,f,n as t,r as L}from"../chunks/NgVQVlRK.js";import{n as Y}from"../chunks/B4IyMRKX.js";import{S as W}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import{I as R}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as S}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as q}from"../chunks/DXp9_3zM.js";import{F}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as l}from"../chunks/D8YsId2T.js";import{S as x}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import{A as G}from"../chunks/CqOphJLh.js";const J={layout:"article",title:"Windsurf Editor",description:"Add the MCP server to Windsurf Editor"};var K=p("You must install <!> on your system to use the MCP server.",1),U=p("Open the <!> page, head to the <!> tab, find the <!> section, and click on the <!> button.",1),V=p("Update the <!> file to include the following:",1),z=p("Once you save the details, head back to the MCP Servers section in the Windsurf Settings and click on the <!> button.",1),B=p("To enable additional tools, learn more about <!>.",1),H=p("<!><!><!><!><!><!>",1),Q=p("<!><!>",1),X=p("<article><!><!><!><!></article>");function It(O){G(O,Y(J,{children:(N,Z)=>{var C=X(),k=D(C);l(k,{children:($,A)=>{t();var n=a("Learn how you can add the Backrush MCP server to Windsurf Editor.");r($,n)},$$slots:{default:!0}});var y=e(k);R(y,{title:"Pre-requisite: Install uv",children:($,A)=>{l($,{children:(n,_)=>{t();var c=K(),d=e(f(c));M(d,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:(h,P)=>{t();var b=a("uv");r(h,b)},$$slots:{default:!0}}),t(),r(n,c)},$$slots:{default:!0}})}});var T=e(y);W(T,{id:"step-1",step:1,title:"Add MCP server",children:($,A)=>{var n=H(),_=f(n);l(_,{children:(s,g)=>{t();var o=U(),u=e(f(o));x(u,{marker:"**",children:(i,w)=>{t();var v=a("Windsurf Settings");r(i,v)},$$slots:{default:!0}});var m=e(u,2);x(m,{marker:"**",children:(i,w)=>{t();var v=a("Cascade");r(i,v)},$$slots:{default:!0}});var E=e(m,2);x(E,{marker:"**",children:(i,w)=>{t();var v=a("Model Context Protocol (MCP) Servers");r(i,v)},$$slots:{default:!0}});var I=e(E,2);x(I,{marker:"**",children:(i,w)=>{t();var v=a("View raw config");r(i,v)},$$slots:{default:!0}}),t(),r(s,o)},$$slots:{default:!0}});var c=e(_);l(c,{children:(s,g)=>{S(s,{src:"/images/docs/mcp/windsurf/windsurf-add-mcp-server.png",alt:"Add MCP server"})},$$slots:{default:!0}});var d=e(c);l(d,{children:(s,g)=>{t();var o=V(),u=e(f(o));q(u,{content:"mcp_config.json"}),t(),r(s,o)},$$slots:{default:!0}});var h=e(d);F(h,{content:`{
  "mcpServers": {
    "backrush": {
      "command": "uvx",
      "args": [
        "mcp-server-backrush",
        "--databases",
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
`,language:"json",process:!0,children:(s,g)=>{t();var o=a(`{
  "mcpServers": {
    "backrush": {
      "command": "uvx",
      "args": [
        "mcp-server-backrush",
        "--databases",
        "--users"
      ],
      "env": {
        "BACKRUSH_PROJECT_ID": "your-project-id",
        "BACKRUSH_API_KEY": "your-api-key",
        "BACKRUSH_ENDPOINT": "https://<REGION>.cloud.backrush.io/v1"
      }
    }
  }
}`);r(s,o)},$$slots:{default:!0}});var P=e(h);l(P,{children:(s,g)=>{t();var o=z(),u=e(f(o));x(u,{marker:"**",children:(m,E)=>{t();var I=a("Refresh");r(m,I)},$$slots:{default:!0}}),t(),r(s,o)},$$slots:{default:!0}});var b=e(P);R(b,{title:"Enable other MCP tools",children:(s,g)=>{l(s,{children:(o,u)=>{t();var m=B(),E=e(f(m));M(E,{href:"/docs/tooling/mcp#command-line-arguments",children:(I,i)=>{t();var w=a("command-line arguments");r(I,w)},$$slots:{default:!0}}),t(),r(o,m)},$$slots:{default:!0}})}}),r($,n)},$$slots:{default:!0}});var j=e(T);W(j,{id:"step-2",step:2,title:"Test the integration",children:($,A)=>{var n=Q(),_=f(n);l(_,{children:(d,h)=>{t();var P=a("Open Cascade chat in the Windsurf Editor and add a prompt to query the database.");r(d,P)},$$slots:{default:!0}});var c=e(_);l(c,{children:(d,h)=>{S(d,{src:"/images/docs/mcp/windsurf/windsurf-cascade-chat.png",alt:"Create user in Backrush project"})},$$slots:{default:!0}}),r($,n)},$$slots:{default:!0}}),L(C),r(N,C)},$$slots:{default:!0}}))}export{It as component};
