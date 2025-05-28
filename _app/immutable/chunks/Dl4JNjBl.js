function u(o=500){let e;return{debounce:t=>{clearTimeout(e),e=setTimeout(t,o)},reset:()=>clearTimeout(e),immediate:t=>{clearTimeout(e),t()}}}export{u as c};
