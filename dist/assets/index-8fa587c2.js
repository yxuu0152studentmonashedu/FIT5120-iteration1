import{j as l,a as y}from"./index-7df11a4e.js";var n={},d={get exports(){return n},set exports(t){n=t}},h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",f=h,u=f;function a(){}function x(){}x.resetWarningCache=a;var T=function(){function t(o,r,m,P,v,i){if(i!==u){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function e(){return t}var p={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:x,resetWarningCache:a};return p.PropTypes=p,p};d.exports=T();const b={h1:"sm:text-[38px] md:text-[44px] text-[48px]",h2:"font-bold sm:text-[36px] md:text-[38px] text-[40px]",h3:"font-bold sm:text-[30px] md:text-[32px] text-[34px]",h4:"font-normal sm:text-[24px] md:text-[26px] text-[28px]",h5:"font-semibold sm:text-[22px] md:text-[24px] text-[26px]",h6:"font-normal sm:text-[21px] md:text-[23px] text-[25px]",body1:"sm:text-[20px] md:text-[22px] text-[24px]",body2:"font-normal text-[18px]",body3:"font-normal text-[16px]"},_=({children:t,className:e,variant:p,as:o,...r})=>l(o||"span",{className:`${e} ${p&&b[p]}`,...r,children:t}),c=({children:t,className:e="",leftIcon:p,rightIcon:o,...r})=>y("button",{className:`${e}`,...r,children:[!!p&&p,t,!!o&&o]});c.propTypes={className:n.string,children:n.node};c.defaultProps={className:""};export{c as B,_ as T};