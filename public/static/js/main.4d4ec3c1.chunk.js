(this["webpackJsonpthrice-client"]=this["webpackJsonpthrice-client"]||[]).push([[0],{221:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(39),i=n.n(a),s=(n(220),n(221),n(31)),l=n(37),o=n.n(l),j=n(49),d=n(12),b=n(356),u=n(350),x=n(353),h=n(365),O=n(369),m=n(370),p=n(368),f=n(191),v=n(367),g=n(34),y=n(2),C=Object(f.a)();var w=function(e){var t=e.onSignIn;return Object(y.jsx)(v.a,{theme:C,children:Object(y.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(y.jsx)(u.a,{}),Object(y.jsxs)(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(y.jsxs)(O.a,{component:"form",onSubmit:t,noValidate:!0,sx:{mt:1},children:[Object(y.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(y.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:e.myError?e.myError:"",error:!!e.myError}),Object(y.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{borderColor:"#F2789F"},children:"Sign In"}),Object(y.jsx)(h.a,{container:!0,children:Object(y.jsx)(h.a,{item:!0,children:Object(y.jsx)(g.b,{to:"/signup",children:"Don't have an account? Sign Up"})})})]})]})]})})},F=n(28),S=n(43),_=n.n(S),I="http://localhost:5005/api",k=Object(f.a)();var D=function(e){var t=Object(F.f)(),n=function(){var e=Object(j.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={name:n.target.name.value,email:n.target.email.value,password:n.target.password.value},e.next=4,_.a.post("".concat(I,"/signup"),r,{withCredentials:!0});case 4:t("/signin");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(v.a,{theme:k,children:Object(y.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(y.jsx)(u.a,{}),Object(y.jsxs)(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(y.jsxs)(O.a,{component:"form",onSubmit:n,noValidate:!0,sx:{mt:1},children:[Object(y.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoFocus:!0}),Object(y.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),Object(y.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(y.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{borderColor:"#F2789F"},children:"Sign Up"}),Object(y.jsx)(h.a,{container:!0,children:Object(y.jsx)(h.a,{item:!0,children:Object(y.jsx)(g.b,{to:"/signin",children:"Already have an account? Sign In instead"})})})]})]})]})})},P=Object(r.createContext)();function A(e){var t=Object(r.useState)(null),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(y.jsx)(P.Provider,{value:{name:"Consuela",user:c,setUser:a},children:e.children})}var E=n(371);var T=function(){return Object(y.jsx)("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:Object(y.jsxs)("p",{children:[" Happy Thricing ",Object(y.jsx)(E.a,{})," "]})})},N=n(183),W=n(354),U=n(63),$=n(97),M=n(359),q=n(366),H=M.a.Panel;var L=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(y.jsx)("div",{children:Object(y.jsx)(M.a,{defaultActiveKey:["0"],children:Object(y.jsx)(H,{header:"categories",children:e.list&&e.list.map((function(t,n){return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(q.a,{onChange:function(){return function(t){var n=a.indexOf(t),r=Object(s.a)(a);-1===n?r.push(t):r.splice(n,1),i(r),e.handleFilters(r)}(t._id)},type:"checkbox",checked:-1!==a.indexOf(t._id)}),"\xa0\xa0",Object(y.jsx)("span",{children:t.name}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]},n)}))},"1")})})},z=n(360),K=M.a.Panel;var B=function(e){var t=Object(r.useState)("0"),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(y.jsx)("div",{children:Object(y.jsx)(M.a,{defaultActiveKey:["0"],children:Object(y.jsx)(K,{header:"price",children:Object(y.jsx)(z.a.Group,{onChange:function(t){a(t.target.value),e.handleFilters(t.target.value)},value:c,children:e.list&&e.list.map((function(e){return Object(y.jsx)(z.a,{value:"".concat(e._id),children:e.name},e._id)}))})},"1")})})},J=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $199",array:[0,199]},{_id:2,name:"$200 to $249",array:[200,249]},{_id:3,name:"$250 to $279",array:[250,279]},{_id:4,name:"$280 to $299",array:[280,299]},{_id:5,name:"More than $300",array:[300,15e5]}],R=[{_id:1,name:"Women"},{_id:2,name:"Men"},{_id:3,name:"Children"}],V=n(358);V.a.Search;var G=W.a.Meta;var Y=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=(n[0],n[1],Object(r.useState)(0)),a=Object(d.a)(c,2),i=(a[0],a[1],Object(r.useState)(8)),s=Object(d.a)(i,2),l=(s[0],s[1],Object(r.useState)()),o=Object(d.a)(l,2),j=(o[0],o[1],Object(r.useState)("")),b=Object(d.a)(j,2),u=(b[0],b[1],Object(r.useState)({categories:[],price:[]})),x=Object(d.a)(u,2),h=x[0],O=x[1],m=e.products.map((function(e,t){return Object(y.jsx)(U.a,{lg:6,md:8,xs:24,children:Object(y.jsx)(g.b,{to:"/product/".concat(e._id),children:Object(y.jsx)(W.a,{hoverable:!0,style:{width:240},cover:Object(y.jsxs)(g.b,{to:"/product/".concat(e._id),children:[Object(y.jsx)("img",{style:{width:"100%",maxHeight:"50%"},src:e.images})," "]}),children:Object(y.jsx)(G,{title:e.title,description:"$".concat(e.price)})})})})})),p=function(e,t){var n=Object(N.a)({},h);if(n[t]=e,"price"===t){var r=function(e){var t=J,n=[];for(var r in t)t[r]._id===parseInt(e,10)&&(n=t[r].array);return console.log("array",n),n}(e);n[t]=r}console.log(n),O(n)};return Object(y.jsxs)("div",{style:{width:"75%",margin:"3rem auto"},children:[Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsx)("h2",{children:"  Let's Thrice!  "})}),Object(y.jsxs)($.a,{gutter:[16,16],children:[Object(y.jsx)(U.a,{lg:12,xs:24,children:Object(y.jsx)(L,{style:{borderColor:"#F2789F"},list:R,handleFilters:function(e){return p(e,"categories")}})}),Object(y.jsx)(U.a,{lg:12,xs:24,children:Object(y.jsx)(B,{style:{borderColor:"#F2789F"},list:J,handleFilters:function(e){return p(e,"price")}})})]}),Object(y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}}),0===e.products.length?Object(y.jsx)("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"},children:Object(y.jsx)("h2",{children:"No post yet..."})}):Object(y.jsx)("div",{children:Object(y.jsx)($.a,{gutter:[8,8],children:m})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]})},Z=n(357);var X=function(e){return Object(y.jsx)(Z.a,{mode:e.mode,children:Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/",style:{borderColor:"#F2789F",color:"#F9C5D5"},children:"Shop"})},"home")})},Q=n(362);var ee=function(e){return e.user?Object(y.jsxs)(Z.a,{mode:e.mode,children:[Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/product/upload",style:{color:"#F9C5D5"},children:"Upload"})},"upload"),Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/about",style:{color:"#F9C5D5"},children:"About"})},"about"),Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/history",style:{color:"#F9C5D5"},children:"History"})},"history"),Object(y.jsx)(Z.a.Item,{style:{paddingBottom:3},children:Object(y.jsx)(Q.a,{color:"magenta",children:Object(y.jsx)(g.b,{to:"/user/cart",style:{marginRight:-22,color:"#F9C5D5"},children:"Cart"})})},"cart"),Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/signin",style:{borderColor:"#F2789F",color:"#F9C5D5"},onClick:e.onLogout,children:"Logout"})},"logout")]}):Object(y.jsxs)(Z.a,{mode:e.mode,children:[Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/signin",children:"Signin"})},"signin"),Object(y.jsx)(Z.a.Item,{children:Object(y.jsx)(g.b,{to:"/signup",children:"Signup"})},"signup")]})},te=n(192),ne=n(361),re=(n(311),n(372)),ce=n.p+"static/media/thrice_logo_image.af467ed2.png";var ae=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],a=n[1],i=e.user;return Object(y.jsxs)("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"},children:[Object(y.jsx)("div",{className:"menu__logo",children:Object(y.jsx)("div",{className:"menu__logo a",children:Object(y.jsx)(g.b,{to:"/",children:Object(y.jsx)("img",{src:ce,alt:"logo",style:{minWidth:"50px",width:"85px",height:"45"}})})})}),Object(y.jsxs)("div",{className:"menu__container",children:[Object(y.jsx)("div",{className:"menu_left",children:Object(y.jsx)(X,{mode:"horizontal"})}),Object(y.jsx)("div",{className:"menu_right",children:Object(y.jsx)(ee,{mode:"horizontal",user:i,onClick:e.onLogout})}),Object(y.jsx)(te.a,{className:"menu__mobile-button",type:"primary",onClick:function(){a(!0)},style:{borderColor:"#F2789F"},children:Object(y.jsx)(re.a,{})}),Object(y.jsxs)(ne.a,{title:"menu",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){a(!1)},visible:c,children:[Object(y.jsx)(X,{mode:"inline"}),Object(y.jsx)(ee,{mode:"inline"})]})]})]})},ie=n(355);var se=function(e){return Object(y.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(y.jsx)("div",{style:{width:"300px",height:"240px",border:"1px solid #F2789F",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(y.jsx)(V.a,{bordered:!1,type:"file",name:"myImage",accept:"image/png, image/jpg"})})})},le=(n(312),ie.a.Title),oe=V.a.TextArea,je=[{key:1,value:"Women"},{key:2,value:"Men"},{key:3,value:"Children"}];var de=function(e){return Object(y.jsxs)("div",{style:{maxWidth:"700px",margin:"2rem auto"},children:[Object(y.jsx)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:Object(y.jsx)(le,{level:2,children:" Upload Product"})}),Object(y.jsxs)("form",{onSubmit:e.submit,children:[Object(y.jsx)(se,{style:{borderColor:"#F2789F"},type:"file",name:"myImage",accept:"image/png, image/jpg"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Title"}),Object(y.jsx)(V.a,{style:{borderColor:"#F2789F"},name:"title"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Description"}),Object(y.jsx)(oe,{style:{borderColor:"#F2789F"},name:"description"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Price($)"}),Object(y.jsx)(V.a,{style:{borderColor:"#F2789F"},type:"number",name:"price"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("select",{style:{borderColor:"#F2789F"},name:"stuff",children:je.map((function(e){return Object(y.jsxs)("option",{value:e.key,children:[e.value," "]},e.key)}))}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{style:{borderColor:"#F2789F"},type:"submit",children:"Submit"})]})]})};n(189);var be=n(363);var ue=function(e){var t=e.btnDelete,n=e.detail;return Object(y.jsxs)("div",{children:[console.log(n),Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(y.jsx)("img",{src:n.images})}),Object(y.jsxs)(be.b,{title:"Product Info",children:[Object(y.jsxs)(be.b.Item,{label:"Title",children:[" ",n.title]}),Object(y.jsxs)(be.b.Item,{label:"Description",children:[" ",n.description]}),Object(y.jsxs)(be.b.Item,{label:"Price",children:[" ",n.price]})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)(te.a,{style:{borderColor:"#F2789F",color:"F9C5D5"},children:Object(y.jsx)(g.b,{to:"/product/".concat(n._id,"/edit"),children:"Edit"})}),Object(y.jsx)(te.a,{style:{borderColor:"#F2789F",color:"F9C5D5"},onClick:function(){t(n._id)},children:"Delete"}),Object(y.jsx)(te.a,{style:{borderColor:"#F2789F",color:"F9C5D5"},onClick:function(){e.addToCart(e.detail._id)},children:"Add to Cart"})]})]})};var xe=function(e){Object(r.useContext)(P).user;var t=Object(F.g)().productId,n=Object(r.useState)([]),c=Object(d.a)(n,2),a=c[0],i=c[1],s=e.btnDelete;return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(I,"/product/").concat(t),{withCredentials:!0});case 2:n=e.sent,console.log(n.data),i(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(y.jsxs)("div",{className:"postPage",style:{width:"100%",padding:"3rem 4rem"},children:[Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(y.jsx)("h1",{children:a.title})}),Object(y.jsx)("br",{}),Object(y.jsxs)($.a,{gutter:[16,16],children:[Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:a.image}),Object(y.jsxs)(U.a,{lg:12,xs:24,children:[console.log(a),Object(y.jsx)(ue,{btnDelete:s,detail:a,addToCart:function(e){}})]})]})]})},he=n(94);function Oe(){var e=Object(he.useStripe)(),t=Object(he.useElements)(),n=Object(r.useState)(null),c=Object(d.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!1),l=Object(d.a)(s,2),b=l[0],u=l[1];Object(r.useEffect)((function(){if(e){var t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");t&&e.retrievePaymentIntent(t).then((function(e){switch(e.paymentIntent.status){case"succeeded":i("Payment succeeded!");break;case"processing":i("Your payment is processing.");break;case"requires_payment_method":i("Your payment was not successful, please try again.");break;default:i("Something went wrong.")}}))}}),[e]);var x=function(){var n=Object(j.a)(o.a.mark((function n(r){var c,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),e&&t){n.next=3;break}return n.abrupt("return");case 3:return u(!0),n.next=6,e.confirmPayment({elements:t,confirmParams:{return_url:"http://localhost:3000"}});case 6:c=n.sent,"card_error"===(a=c.error).type||"validation_error"===a.type?i(a.message):i("An unexpected error occured."),u(!1);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(y.jsxs)("form",{className:"checkout-form",id:"payment-form",onSubmit:x,children:[Object(y.jsx)(he.PaymentElement,{id:"payment-element"}),Object(y.jsx)("button",{className:"checkout-btn",disabled:b||!e||!t,id:"submit",children:Object(y.jsx)("span",{id:"button-text",children:b?Object(y.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),a&&Object(y.jsx)("div",{id:"payment-message",children:a})]})}var me=function(){var e=Object(r.useContext)(P).user;return Object(y.jsxs)("div",{style:{width:"80%",margin:"3rem auto"},children:[Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsx)("h1",{children:"History"})}),Object(y.jsx)("br",{}),Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Payment Id"}),Object(y.jsx)("th",{children:"Price"})]})}),Object(y.jsx)("tbody",{children:e.history.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.id}),Object(y.jsx)("td",{children:e.price})]},e.id)}))})]})]})};var pe=function(){return Object(y.jsx)("div",{style:{width:"80%",margin:"3rem auto"},children:Object(y.jsxs)("div",{style:{textAlign:"left-align"},children:[Object(y.jsx)("h1",{children:"About Thrice"}),Object(y.jsxs)("p",{children:["We are a community of Couturi\xe8res and Couturiers.",Object(y.jsx)("br",{}),"This is also a place to buy and sell clothes but our focus is",Object(y.jsx)("br",{}),"designer upcycled clothing and accessories"]})]})})},fe=ie.a.Title,ve=V.a.TextArea,ge=[{key:1,value:"Women"},{key:2,value:"Men"},{key:3,value:"Children"}];var ye=function(e){var t=Object(F.g)().productId,n=Object(r.useState)(null),c=Object(d.a)(n,2),a=(c[0],c[1]);return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(I,"/product/").concat(t),{withCredentials:!0});case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),e.btnEdit,Object(y.jsx)("div",{children:Object(y.jsxs)("div",{style:{maxWidth:"700px",margin:"2rem auto"},children:[Object(y.jsx)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:Object(y.jsx)(fe,{level:2,children:" Edit Product"})}),Object(y.jsxs)("form",{onSubmit:function(n){return e.btnEdit(n,t)},children:[Object(y.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(y.jsx)("div",{style:{width:"300px",height:"240px",border:"1px solid #F2789F",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(y.jsx)(V.a,{bordered:!1,type:"file",name:"myImage",accept:"image/png, image/jpg"})})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Title"}),Object(y.jsx)(V.a,{style:{borderColor:"#F2789F"},name:"title"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Description"}),Object(y.jsx)(ve,{style:{borderColor:"#F2789F"},name:"description"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{children:"Price($)"}),Object(y.jsx)(V.a,{style:{borderColor:"#F2789F"},type:"number",name:"price"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("select",{style:{borderColor:"#F2789F"},name:"stuff",children:ge.map((function(e){return Object(y.jsxs)("option",{value:e.key,children:[e.value," "]},e.key)}))}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{style:{borderColor:"#F2789F"},type:"submit",children:"Edit"})]})]})})},Ce=n.p+"static/media/PageNotFound.647b99e6.png";var we=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:Ce,alt:"page not found"}),Object(y.jsx)("p",{style:{textAlign:"center"},children:Object(y.jsx)(g.b,{to:"/",children:"Go to Home "})})]})},Fe=n(190),Se=(n(314),Object(Fe.a)("pk_test_51K6hSnLR3Z9JYIoqnAiM54uf7lZhI3dm1Ci1fKSeXIIFSH94vjyNPu2RVwGn7lUcmeK2bsWESMUWOzyOOV3o5AWN00hOSjjaT3"));function _e(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){fetch("".concat(I,"/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:"xl-tshirt"}]})}).then((function(e){return e.json()})).then((function(e){return c(e.clientSecret)}))}),[]);var a={clientSecret:n,appearance:{theme:"stripe"}};return Object(y.jsx)("div",{className:"App",children:n&&Object(y.jsx)(he.Elements,{options:a,stripe:Se,children:Object(y.jsx)(Oe,{})})})}var Ie=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useContext)(P),i=a.user,l=a.setUser,b=Object(r.useState)(null),u=Object(d.a)(b,2),x=u[0],h=u[1],O=Object(r.useState)(!0),m=Object(d.a)(O,2),p=(m[0],m[1]),f=Object(F.f)();Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(I,"/product"),{withCredentials:!0});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(I,"/user"),{withCredentials:!0});case 2:t=e.sent;try{p(!1),l(t.data)}catch(n){p(!1)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]);var v=function(){var e=Object(j.a)(o.a.mark((function e(t){var r,a,i,l,j,d,b,u,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t.target.title.value),r=t.target,a=r.title,i=r.description,l=r.price,j=r.stuff,(d=new FormData).append("imageUrl",t.target.myImage.files[0]),e.next=7,_.a.post("".concat(I,"/upload"),d);case 7:if(b=e.sent,console.log(b.data),a.value&&i.value&&l.value&&j.value){e.next=11;break}return e.abrupt("return",alert("fill all the fields first!"));case 11:return u={title:a.value,description:i.value,price:l.value,images:b.data.image,categories:j.value},e.next=14,_.a.post("".concat(I,"/create"),u,{withCredentials:!0});case 14:x=e.sent,c([x.data].concat(Object(s.a)(n))),f("/");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(o.a.mark((function e(t,r){var a,i,s,l,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("imageUrl",t.target.myImage.files[0]),e.next=5,_.a.post("".concat(I,"/upload"),a);case 5:return i=e.sent,console.log(i.data),s={title:t.target.title.value,description:t.target.description.value,images:i.data.image,completed:!1},e.next=10,_.a.patch("".concat(I,"/product/").concat(r),s,{withCredentials:!0});case 10:l=e.sent,console.log(l.data),j=n.map((function(e){return e._id==r&&(e.title=l.data.title,e.description=l.data.description),e})),c(j),f("/");case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("its the id of the delete one",t),e.next=3,_.a.delete("".concat(I,"/product/").concat(t));case 3:r=n.filter((function(e){return e._id!==t})),c(r),f("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),e.prev=2,n={email:t.target.email.value,password:t.target.password.value},console.log(n),e.next=7,_.a.post("".concat(I,"/signin"),n,{withCredentials:!0});case 7:r=e.sent,console.log(r),l(r.data),f("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),h("why error");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("".concat(I,"/logout"),{},{withCredentials:!0});case 2:l(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(i),Object(y.jsxs)("div",{children:[Object(y.jsx)(ae,{user:i,onLogout:k}),Object(y.jsx)("div",{style:{paddingTop:"75px",minHeight:"calc(100vh - 80px)"},children:Object(y.jsxs)(F.c,{children:[Object(y.jsx)(F.a,{path:"/",element:Object(y.jsx)(Y,{products:n})}),Object(y.jsx)(F.a,{path:"/signin",element:Object(y.jsx)(w,{myError:x,onSignIn:S})}),Object(y.jsx)(F.a,{path:"/signup",element:Object(y.jsx)(D,{})}),Object(y.jsx)(F.a,{path:"/product/upload",element:Object(y.jsx)(de,{submit:v})}),Object(y.jsx)(F.a,{path:"/product/:productId",element:Object(y.jsx)(xe,{btnDelete:C})}),Object(y.jsx)(F.a,{path:"/product/:productId/edit",element:Object(y.jsx)(ye,{btnEdit:g})}),Object(y.jsx)(F.a,{path:"/user/cart",element:Object(y.jsx)(_e,{})}),Object(y.jsx)(F.a,{path:"/history",element:Object(y.jsx)(me,{})}),Object(y.jsx)(F.a,{path:"/about",element:Object(y.jsx)(pe,{})}),Object(y.jsx)(F.a,{path:"*",element:we})]})}),Object(y.jsx)(T,{})]})};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(g.a,{children:Object(y.jsx)(A,{children:Object(y.jsx)(Ie,{})})})}),document.getElementById("root"))}},[[315,1,2]]]);
//# sourceMappingURL=main.4d4ec3c1.chunk.js.map