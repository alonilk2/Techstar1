(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(18),i=a.n(s),o=(a(79),a(7)),l=a(8),d=a(10),j=a(9),b=(a(80),a(56),a(126)),u=a(125),h=(a(81),a.p+"static/media/logo.23f3f658.png"),O=a(22),p=Object(O.a)(),m=a(13),f=(a(88),a.p+"static/media/avatar.5fedd648.png"),x=a(27),v=a.n(x),g=a(34),y=a.n(g),N=a(43),w=a(38),S=a.n(w),C="USER_SIGNIN_FAILED",E="USER_SIGNUP_FAILED";var k=a(35);var P=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var r=JSON.parse(t);return console.log(r),Object(n.jsxs)(k.a,{className:"user-instance",children:[Object(n.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(n.jsxs)(k.a.Toggle,{id:"dropdown-basic",children:["Hello ",r.data.user.first_name]}),Object(n.jsxs)(k.a.Menu,{children:[Object(n.jsx)(k.a.Item,{href:"#/action-1",children:"My Profile"}),Object(n.jsx)(k.a.Item,{href:"/",onClick:function(){a((function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})}return Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Login"}),Object(n.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(b.a,{expand:"lg",children:[Object(n.jsx)(b.a.Brand,{href:"#home",children:Object(n.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(u.a,{className:"mr-auto"}),Object(n.jsx)(P,{})]})]})})}}]),a}(r.Component),A=(a(111),a(36));var I=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(A.a,{style:{width:"18rem"},children:[Object(n.jsx)(A.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(n.jsxs)(A.a.Body,{children:[Object(n.jsx)(A.a.Title,{children:e.title}),Object(n.jsxs)(A.a.Text,{children:["Click here to see more ",e.title]}),Object(n.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).categoryList=function(){if(r.state.categories)return r.state.categories.map((function(e){return Object(n.jsx)(I,{title:e.Name,imagePath:e.imagePath},e.Name)}))},r.state={categories:[]},r}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,S.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:t=e.sent,console.log(t),t.data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{className:"HomePagecontainer",children:Object(n.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(r.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(_,{})]})}}]),a}(r.Component),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(T,{})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(113),L=a(33),G=a(72),D="USER_SIGNIN_ATTEMPT",B="USER_SIGNIN_SUCCESS",q="USER_SIGNIN_FAILED",J="USER_SIGNUP_ATTEMPT",M="USER_SIGNUP_SUCCESS",W="USER_SIGNUP_FAILED",z="USER_SIGNOUT_SUCCESS";var Z=v.a.getJSON("userInstance")||null,V=0;V=Z?{loggedin:!0,user:Z}:{};var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,Y=Object(L.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{logging:!0};case B:return{logging:!1,loggedin:!0,user:t.payload};case q:return{logging:!1,loggedin:!1,error:t.payload};case J:return{registering:!0};case M:return{registering:!1,loggedin:!0,user:t.payload};case W:return{registering:!1,loggedin:!1,error:t.payload};case z:return{loggedin:!1,user:null,error:null};default:return e}}),V,X(Object(L.a)(G.a))),H=a(15),K=(a(112),a(32)),$=a(49);var Q=function(e){var t=Object(r.useState)(""),a=Object(H.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(H.a)(o,2),d=l[0],j=l[1],b=Object(m.b)(),u=Object(m.c)((function(e){return e.error})),h=c.a.createRef();return Object(F.e)(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),S.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),p.push("/")):0===e.data.error?a({type:C,payload:0}):1===e.data.error&&a({type:C,payload:1})})).catch((function(e){a({type:C,payload:e})}))}}(s,d))},children:[0===u&&Object(n.jsx)($.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",href:"/",children:"Login"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(n.jsx)(K.a,{ref:h,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},ee=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(Q,{})]})}}]),a}(r.Component);a(117);var te=function(e){var t=Object(r.useState)(""),a=Object(H.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(H.a)(o,2),d=l[0],j=l[1],b=Object(r.useState)(""),u=Object(H.a)(b,2),h=u[0],O=u[1],f=Object(r.useState)(""),x=Object(H.a)(f,2),g=x[0],w=x[1],C=Object(r.useState)(""),k=Object(H.a)(C,2),P=k[0],U=k[1],A=c.a.createRef(),I=Object(m.c)((function(e){return e.error})),_=Object(m.b)();function T(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(s)||(alert("You have entered an invalid email address!"),0))&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&T(g)&&T(P)){if(d!==h)return alert("The passwords do not match"),!1;_(function(e,t,a,n){return function(){var r=Object(N.a)(y.a.mark((function r(c){var s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),r.prev=1,r.next=4,S.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:n});case 4:(s=r.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),v.a.set("userInstance",JSON.stringify(s)),p.push("/")):0===s.data.error?c({type:E,payload:0}):1===s.data.error&&c({type:E,payload:1}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c({type:E,payload:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(s,d,g,P))}},children:[0===I&&Object(n.jsx)($.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return w(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return U(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return O(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/SignIn",children:"Sign-In"})," "]})}),Object(n.jsx)(K.a,{ref:A,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(te,{})]})}}]),a}(r.Component);a(118);var ne=function(e){var t=Object(r.useState)(""),a=Object(H.a)(t,2),c=(a[0],a[1],Object(r.useState)("")),s=Object(H.a)(c,2);return s[0],s[1],Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e||(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},re=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ne,{})]})}}]),a}(r.Component);a(119);var ce=function(e){var t=Object(r.useState)(""),a=Object(H.a)(t,2),s=(a[0],a[1],Object(r.useState)("")),i=Object(H.a)(s,2),o=(i[0],i[1],c.a.createRef());return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"ForgotForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:"onClickReset()",children:"Reset Password"})}),Object(n.jsx)(K.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ce,{})]})}}]),a}(r.Component),ie=(a(66),a.p+"static/media/FinalTask.17e43989.pdf");var oe=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:ie,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(oe,{})]})}}]),a}(r.Component);a(67);var de=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(de,{})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m.a,{store:Y,children:Object(n.jsx)(F.c,{history:p,children:Object(n.jsxs)(F.d,{children:[Object(n.jsx)(F.b,{exact:!0,path:"/",component:R}),Object(n.jsx)(F.b,{path:"/SignIn",component:ee}),Object(n.jsx)(F.b,{path:"/SignUp",component:ae}),Object(n.jsx)(F.b,{path:"/UpdatePass",component:re}),Object(n.jsx)(F.b,{path:"/ForgotPass",component:se}),Object(n.jsx)(F.b,{path:"/About",component:le}),Object(n.jsx)(F.b,{path:"/Constraction",component:je}),Object(n.jsx)(F.a,{from:"*",to:"/"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.e0036bdb.chunk.js.map