import{B as s,e as d,f as c,c as w,W as m,d as h,O as l}from"./main.73fd0fff.js";import{c as u,a as f}from"./ambient_light.b9c1a771.js";const p=()=>{const n=new s,i=500,r=new Float32Array(9*i);r.set([...Array(9*i)].map(z=>(Math.random()-.5)*2)),n.setAttribute("position",new d(r,3));const a=new c({wireframe:!0});return new w(n,a)},e=new m({alpha:!0}),b=p(),g=u(),y=h(b,g),t=f(),o=()=>{requestAnimationFrame(o),e.render(y,t)},M=()=>{e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(e.domElement),new l(t,e.domElement),o()},W=()=>{e.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()};window.addEventListener("load",M);window.addEventListener("resize",W);
