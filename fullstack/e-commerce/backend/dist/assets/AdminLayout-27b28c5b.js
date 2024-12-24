import{d as l,C as d,r as h,B as m,j as t,L as x,O as p}from"./index-53e6f5e0.js";import{C as u}from"./Container-1b9f5e57.js";import{N as s,a as r}from"./Navbar-e44e6883.js";import{N as i}from"./NavDropdown-8b9f8e95.js";import{B as j}from"./Button-b0204afc.js";import{G as o}from"./iconBase-4c2b3589.js";import{c as g}from"./index-f0f7f881.js";import{b as f}from"./index-68b72e1c.js";import"./ThemeProvider-f1165dbe.js";import"./TransitionWrapper-9a88a208.js";import"./Button-00b2b4ee.js";import"./CardHeaderContext-749dcba7.js";import"./index-cf459d82.js";function v(){const{admin:e}=l(c=>c.auth),[a,{isSuccess:n}]=d();return h.useEffect(()=>{n&&m.success("admin logout success")},[n]),t.jsx("div",{style:{marginLeft:"200px"},children:t.jsx(s,{expand:"lg",className:"bg-body-tertiary",children:t.jsxs(u,{children:[t.jsx(s.Brand,{href:"#home",children:"React-Bootstrap"}),t.jsx(s.Toggle,{"aria-controls":"basic-navbar-nav"}),t.jsx(s.Collapse,{id:"basic-navbar-nav",children:t.jsxs(r,{className:"me-auto",children:[t.jsx(r.Link,{href:"#home",children:"Home"}),t.jsx(r.Link,{href:"#link",children:"Link"}),t.jsxs(i,{title:`welcome ${e.name}`,id:"basic-nav-dropdown",children:[t.jsx(i.Item,{href:"#action/3.1",children:"Profile"}),t.jsx(i.Divider,{}),t.jsx(j,{onClick:a,className:"dropdown-item",children:"Logout"})]})]})})]})})})}function b(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M118.486 25l-26 78h29.028l26-78zM256 25c-10.926 0-25.17 4.748-36.14 12.404-10.97 7.656-18.208 17.732-18.883 27.235-.8 11.25 6.06 25.301 17.205 36.216C229.327 111.771 244.286 119 256 119c11.714 0 26.673-7.23 37.818-18.145s18.005-24.966 17.205-36.216c-.675-9.503-7.912-19.579-18.882-27.235C281.17 29.748 266.926 25 256 25zm108.486 0l26 78h29.028l-26-78zM48 41c.5 0-1.724.573-4.688 4.326-2.963 3.754-6.244 9.694-9.04 16.219-3.649 8.512-6.348 18.184-7.877 25.455h52.453l15.334-46zm113.152 0L145.82 87h41.239c-3.062-7.525-4.614-15.498-4.036-23.639.585-8.231 3.555-15.718 8.01-22.361zm159.815 0c4.455 6.643 7.425 14.13 8.01 22.361.578 8.141-.974 16.114-4.036 23.639h41.239l-15.332-46zm96.853 0l15.332 46h52.453c-1.53-7.271-4.228-16.943-7.876-25.455-2.797-6.525-6.078-12.465-9.041-16.219C465.724 41.573 463.5 41 464 41zM46.465 105C25.239 204.294 25.03 361.524 25.033 487h159.883a3096.51 3096.51 0 0 0 9.82-40.824c-15.585 2.554-31.613 6.054-48.425 10.521L135 459.703V448c0-117.577-13.686-235.189-40.635-327H67.514l5.334-16zm93.355 0l-5.334 16h-21.43c25.844 90.393 38.94 202.608 39.766 315.66 72.384-17.715 133.99-17.605 206.354.014C360 323.617 373.099 211.396 398.943 121h-21.43l-5.333-16h-57.928a92.688 92.688 0 0 1-7.84 8.715C292.565 127.276 274.456 137 256 137s-36.565-9.724-50.412-23.285a92.688 92.688 0 0 1-7.84-8.715zm299.332 0l5.334 16h-26.851C390.686 212.811 377 330.423 377 448v11.684l-11.297-2.983c-16.814-4.439-32.844-7.93-48.43-10.484 3.24 13.88 6.52 27.504 9.811 40.783h159.883c.003-125.476-.206-282.706-21.432-382z"},child:[]}]})(e)}function L(e){return o({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M19 12v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-14a2 2 0 0 1 2 -2h7l5 5v4.25"},child:[]}]})(e)}const N=()=>{const e=[{label:"dashboard",to:"/admin",icon:t.jsx(f,{})},{label:"products",to:"/admin/products",icon:t.jsx(b,{})},{label:"users",to:"/admin/users",icon:t.jsx(g,{})},{label:"orders",to:"/admin/orders",icon:t.jsx(L,{})}];return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"bg-dark text-light",style:{width:"200px",height:"100vh",position:"fixed",top:"0",left:"0"},children:[t.jsx("div",{style:{height:"55px"},className:"bg-primary d-flex justify-content-center align-items-center fs-4",children:"Flipkart-Lite"}),e.map(a=>t.jsxs("div",{style:{height:"55px"},className:"bg-light d-flex  align-items-center px-3",children:[t.jsx("span",{className:"text-dark me-2",children:a.icon}),t.jsx(x,{className:"text-decoration-none text-dark text-uppercase",to:a.to,children:a.label})]}))]})})},E=()=>t.jsxs(t.Fragment,{children:[t.jsx(v,{}),t.jsx(N,{}),t.jsx("div",{style:{marginLeft:"200px"},children:t.jsx(p,{})})]});export{E as default};
