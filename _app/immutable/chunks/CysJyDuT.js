function i(t,n){const e=c=>{t&&!t.contains(c.target)&&n(c)};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}export{i as c};
