import{P as l,j as r,r as t}from"./index-qE-rMhKX.js";import{c as d}from"./index-Cat-d2nJ.js";import{D as i}from"./DefaultLayout-CuyGk5cD.js";import"./index.es-Demd5XHa.js";import{C as h,a as m}from"./CCardBody-c5pAUD5q.js";import{C as x}from"./CCardHeader-BokTHhFZ.js";import{C as j,a as g}from"./CRow-BcdBt8fu.js";import"./cil-user-Dlmw-Gem.js";var p=function(s){if(typeof s>"u")throw new TypeError("Hex color is not defined");if(s==="transparent")return"#00000000";var a=s.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!a)throw new Error("".concat(s," is not a valid rgb color"));var o="0".concat(parseInt(a[1],10).toString(16)),n="0".concat(parseInt(a[2],10).toString(16)),c="0".concat(parseInt(a[3],10).toString(16));return"#".concat(o.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))};const C=()=>{const[s,a]=t.useState("rgb(255, 255, 255)"),o=t.createRef();return t.useEffect(()=>{const n=o.current.parentNode.firstChild,c=window.getComputedStyle(n).getPropertyValue("background-color");a(c)},[o]),r.jsx("table",{className:"table w-100",ref:o,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"HEX:"}),r.jsx("td",{className:"font-weight-bold",children:p(s)})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"RGB:"}),r.jsx("td",{className:"font-weight-bold",children:s})]})]})})},e=({className:s,children:a})=>{const o=d(s,"theme-color w-75 rounded mb-3");return r.jsxs(g,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[r.jsx("div",{className:o,style:{paddingTop:"75%"}}),a,r.jsx(C,{})]})};e.propTypes={children:l.node,className:l.string};const T=()=>r.jsx(r.Fragment,{children:r.jsxs(h,{className:"mb-4",children:[r.jsxs(x,{children:["Theme colors",r.jsx(i,{href:"https://coreui.io/docs/utilities/colors/"})]}),r.jsx(m,{children:r.jsxs(j,{children:[r.jsx(e,{className:"bg-primary",children:r.jsx("h6",{children:"Brand Primary Color"})}),r.jsx(e,{className:"bg-secondary",children:r.jsx("h6",{children:"Brand Secondary Color"})}),r.jsx(e,{className:"bg-success",children:r.jsx("h6",{children:"Brand Success Color"})}),r.jsx(e,{className:"bg-danger",children:r.jsx("h6",{children:"Brand Danger Color"})}),r.jsx(e,{className:"bg-warning",children:r.jsx("h6",{children:"Brand Warning Color"})}),r.jsx(e,{className:"bg-info",children:r.jsx("h6",{children:"Brand Info Color"})}),r.jsx(e,{className:"bg-light",children:r.jsx("h6",{children:"Brand Light Color"})}),r.jsx(e,{className:"bg-dark",children:r.jsx("h6",{children:"Brand Dark Color"})})]})})]})});export{T as default};
