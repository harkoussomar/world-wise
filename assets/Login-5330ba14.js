import{r,u,a as p,j as s,B as f}from"./index-74fb8f3d.js";import{P as x}from"./PageNav-2261e4ab.js";import"./Logo-44777dc4.js";const h="_login_1mydq_1",g="_form_1mydq_8",j="_row_1mydq_22",a={login:h,form:g,row:j};function _(){const[t,l]=r.useState("jack@example.com"),[o,m]=r.useState("qwerty"),i=u(),{isAuthenticated:n,login:c}=p();function d(e){e.preventDefault(),t&&o&&c(t,o)}return r.useEffect(function(){n&&i("/app",{replace:!0})},[n,i]),s.jsxs("main",{className:a.login,children:[s.jsx(x,{}),s.jsxs("form",{className:a.form,onSubmit:d,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>l(e.target.value),value:t})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>m(e.target.value),value:o})]}),s.jsx("div",{children:s.jsx(f,{type:"primary",children:"Login"})})]})]})}export{_ as default};
