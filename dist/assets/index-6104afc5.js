import{r as l,j as t,F as d,a as s}from"./index-7df11a4e.js";import{s as m,N as h,I as x,n as g,B as f,S as b,M as y,F as w}from"./index-dbdaf1de.js";import{T as k}from"./index-8fa587c2.js";function C(a){return m({url:"/classification/predict",data:{urlString:a},method:"post"})}const M=()=>{const[a,n]=l.useState(null),[r,c]=l.useState(""),i=()=>{C(r).then(e=>{e.result&&(console.log(e.result),n(e.result),o(!0))})},p=e=>{c(e.target.value)},[u,o]=l.useState(!1);return t(d,{children:s("div",{className:"bg-gradient  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]",children:[t(h,{className:"flex items-center justify-center md:px-[20px] w-[100%]",home:"Home",language:"Chinese",picwishone:"images/img_picwish2_125x227.png"}),s("div",{className:"flex flex-col md:gap-[40px] gap-[76px] justify-start mt-[21px] pr-[122px] sm:pr-[20px] md:pr-[40px] py-[122px] w-[100%]",children:[t(k,{className:"font-semibold md:ml-[0] ml-[312px] text-black_900 text-left tracking-[-0.72px] w-[auto]",as:"h2",variant:"h2",children:"Type the link of the website you want access below"}),s("div",{className:"font-dmsans h-[500px] md:h-[721px] mb-[221px] mr-[314px] relative md:w-[100%] w-[80%]",children:[t(x,{src:"images/img_websitebackgro_500x500.png",className:"absolute h-[500px] inset-y-[0] left-[0] my-[auto] object-cover w-[500px]",alt:"websitebackgro"}),s("div",{className:"absolute h-[102px] right-[0] top-[31%] md:w-[100%] w-[58%]",children:[t(g,{placeholder:"input search text",value:r,onChange:p,onMouseOver:({target:e})=>e.style.borderColor="white",onMouseOut:({target:e})=>e.style.borderColor="grey",style:{borderRadius:"30px",width:600,backgroundColor:"transparent"}}),t(f,{shape:"circle",size:"large",onClick:i,onMouseOver:({target:e})=>{e.style.borderColor="white",e.style.color="black"},onMouseOut:({target:e})=>{e.style.borderColor="grey",e.style.color="black"},icon:t(b,{})}),t(y,{title:"Classification Result",open:u,onOk:()=>{o(!1)},onCancel:()=>{o(!1)},centered:!0,cancelButtonProps:{style:{display:"none"}},okButtonProps:{style:{backgroundColor:"#4A3AFF"}},children:s("p",{children:["The type of this website is ",a?a.category:""]})})]})]})]}),t(w,{className:"flex font-spacegrotesk items-center justify-center mt-[374px] md:px-[20px] w-[100%]"})]})})};export{M as default};