import{g as m,W as w,d as l,O as p}from"./main.9de40d99.js";import{c as b}from"./tutorial.e5ea05ca.js";import{c as h}from"./ambient_light.760c9c11.js";import{G as u,c as f}from"./lil-gui.esm.0966a605.js";const g=()=>new m({color:"red"}),x=(n,r)=>{const t=new u,i=t.addFolder("Position"),a=t.addFolder("Visible");i.add(n.position,"x",-3,3,.01).name("transformX"),i.add(n.position,"y",-3,3,.01).name("transformY"),i.add(n.position,"z",-3,3,.01).name("transformZ"),i.add(n.rotation,"x").min(-3).max(3).step(.01).name("rotationX"),a.add(n,"visible"),a.add(r,"wireframe"),t.addColor(r,"color")},e=new w({alpha:!0}),d=g(),s=f(d),M=h(.7),W=l(s,M),o=b(1,1,2);x(s,d);const c=()=>{requestAnimationFrame(c),e.render(W,o)},v=()=>{e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(e.domElement),new p(o,e.domElement),c()},z=()=>{e.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()};window.addEventListener("load",v);window.addEventListener("resize",z);