(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(23),i=a.n(s),o=(a(82),a(8)),l=a(9),d=a(11),u=a(10),j=(a(83),a(61),a(127)),b=a(126),h=(a(84),a.p+"static/media/logo.23f3f658.png"),p=a(71),O=Object(p.a)(),m=a(12),f=(a(89),a.p+"static/media/avatar.ecffce2f.png"),x=a(27),v=a.n(x),g=a(13),y=a.n(g),w=a(22),N=a(20),S=a.n(N),C="USER_SIGNIN_FAILED",k="USER_SIGNUP_FAILED";var P=function(){return function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}},A=a(36),E=a(39);var _=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var r=function(){O.push("/Constraction")},c=JSON.parse(t);return console.log(c),Object(n.jsxs)("div",{className:"newDiv",children:[Object(n.jsx)(E.a,{className:"btn",variant:"primary",onClick:r,children:"Buy PC"}),Object(n.jsx)(E.a,{className:"btn",variant:"primary",onClick:r,children:"Buy Cellphone"}),Object(n.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(n.jsxs)(A.a,{className:"user-instance",children:[Object(n.jsxs)(A.a.Toggle,{id:"dropdown-basic",children:["Hello ",c.data.user.first_name]}),Object(n.jsxs)(A.a.Menu,{children:[Object(n.jsx)(A.a.Item,{href:"/profile",children:"My Profile"}),Object(n.jsx)(A.a.Item,{href:"/",onClick:function(){a(P())},children:"Logout"})]})]})]})}return Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(n.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(j.a,{expand:"lg",children:[Object(n.jsx)(j.a.Brand,{href:"/",children:Object(n.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(b.a,{className:"mr-auto"}),Object(n.jsx)(_,{})]})]})})}}]),a}(r.Component),I=(a(112),a(37));var T=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(I.a,{style:{width:"18rem"},children:[Object(n.jsx)(I.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(n.jsxs)(I.a.Body,{children:[Object(n.jsx)(I.a.Title,{children:e.title}),Object(n.jsxs)(I.a.Text,{children:["Click here to see more ",e.title]}),Object(n.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).categoryList=function(){if(r.state.categories)return r.state.categories.map((function(e){return Object(n.jsx)(T,{title:e.Name,imagePath:e.imagePath},e.Name)}))},r.state={categories:[]},r}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,S.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:(t=e.sent).data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{className:"HomePagecontainer",children:Object(n.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(r.Component),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(R,{})]})}}]),a}(r.Component),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(L,{})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(121),F=a(35),G=a(75),D="USER_SIGNIN_ATTEMPT",q="USER_SIGNIN_SUCCESS",Y="USER_SIGNIN_FAILED",B="USER_SIGNUP_ATTEMPT",W="USER_SIGNUP_SUCCESS",$="USER_SIGNUP_FAILED",M="USER_SIGNOUT_SUCCESS";var J=v.a.getJSON("userInstance")||null,V=0;V=J?{loggedin:!0,user:J}:{};var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,H=Object(F.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{logging:!0};case q:return{logging:!1,loggedin:!0,user:t.payload};case Y:return{logging:!1,loggedin:!1,error:t.payload};case B:return{registering:!0};case W:return{registering:!1,loggedin:!0,user:t.payload};case $:return{registering:!1,loggedin:!1,error:t.payload};case M:return{loggedin:!1,user:null,error:null};default:return e}}),V,X(Object(F.a)(G.a))),K=a(6),Q=(a(113),a(30)),ee=a(53);var te=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(K.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)("[empty]"),b=Object(K.a)(j,2),h=b[0],p=b[1],f=Object(r.useState)("false"),x=Object(K.a)(f,2),g=(x[0],x[1]),y=Object(m.b)(),w=Object(m.c)((function(e){return e.error})),N=c.a.createRef();return Object(Z.e)(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s.toLowerCase())||!function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)||"[empty]"==h)return alert("You have to verify the Recaptcha !"),!1;y(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),S.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){!0===e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),O.push("/")):(a({type:C,payload:0}),1===e.data.error&&(a({type:C,payload:1}),alert("Your account is still disabled. You need to activate it using the URL we sent to your Email.")))})).catch((function(e){a({type:C,payload:e})}))}}(s.toLowerCase(),d))},autocomplete:"on",children:[0===w&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email-signin",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"pass-signin",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return u(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",children:"Sign-In"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(n.jsx)(Q.a,{ref:N,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),p(e),null==e&&g(!0)}})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(te,{})]})}}]),a}(r.Component);a(115);var ne=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(K.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)(""),b=Object(K.a)(j,2),h=b[0],p=b[1],f=Object(r.useState)(""),x=Object(K.a)(f,2),v=x[0],g=x[1],N=Object(r.useState)(""),C=Object(K.a)(N,2),P=C[0],A=C[1],E=Object(r.useState)(""),_=Object(K.a)(E,2),U=_[0],I=_[1],T=Object(r.useState)("not fired"),R=Object(K.a)(T,2),L=(R[0],R[1],Object(r.useState)("[empty]")),z=Object(K.a)(L,2),Z=z[0],F=z[1],G=Object(r.useState)(!1),D=Object(K.a)(G,2),q=(D[0],D[1],Object(r.useState)("false")),Y=Object(K.a)(q,2),B=(Y[0],Y[1]),W=c.a.createRef(),$=Object(m.c)((function(e){return e.error})),M=Object(m.b)();function J(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s.toLowerCase())&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&J(P)&&J(U)){if("[empty]"==Z)return alert("You have to verify the Recaptcha!"),!1;if(d!==h)return alert("The passwords do not match"),!1;M(function(e,t,a,n,r){return function(){var c=Object(w.a)(y.a.mark((function c(s){var i;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:"USER_SIGNUP_ATTEMPT",payload:{}}),c.prev=1,c.next=4,S.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:n,promo:r});case 4:(i=c.sent).data.success?(s({type:"USER_SIGNUP_SUCCESS",payload:i}),O.push("/")):0===i.data.error?s({type:k,payload:0}):1===i.data.error?s({type:k,payload:1}):3===i.data.error&&(s({type:k,payload:3}),alert("Bad PromoCode!")),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),s({type:k,payload:c.t0});case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}()}(s.toLowerCase(),d,P,U,v)),alert("We sent you an email about your sign-up")}},children:[0===$&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return A(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return I(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password2",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return u(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password3",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return p(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"promo",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return g(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/SignIn",children:"Sign-In"})]})}),Object(n.jsx)(Q.a,{ref:W,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),F(e),null==e&&B(!0)},id:"my_captcha_form"})]})})})})})},re=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ne,{})]})}}]),a}(r.Component);a(116);var ce=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(K.a)(o,2),d=l[0],u=l[1],j=Object(m.b)(),b=c.a.createRef(),h=Object(r.useState)("[empty]"),p=Object(K.a)(h,2),f=p[0],x=p[1],v=Object(r.useState)(!1),g=Object(K.a)(v,2),N=(g[0],g[1],Object(r.useState)("false")),C=Object(K.a)(N,2),k=(C[0],C[1]);return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"passu",type:"password",onChange:function(e){return i(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"passu2",type:"password",onChange:function(e){return u(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",onClick:function(){if("[empty]"==f)return alert("You have to verify the Recaptcha!"),!1;var t,a,n;(function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars");return!0})(s)&&(s===d?j((t=e.userid,a=e.token,n=s,function(){var e=Object(w.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/storePassword",{userid:t,token:a,newpass:n});case 3:!0===e.sent.data.success?(O.push("/"),alert("Password has been changed successfully, please login.")):alert("We encountered a problem."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())):alert("The passwords do not match"))},children:"Update Password"})}),Object(n.jsx)(Q.a,{ref:b,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),x(e),null==e&&k(!0)},id:"my_captcha_form"})]})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ce,{userid:this.props.match.params.userid,token:this.props.match.params.token})]})}}]),a}(r.Component);a(117);var ie=function(e){var t=Object(r.useState)(""),a=Object(K.a)(t,2),s=a[0],i=a[1],o=c.a.createRef(),l=Object(m.b)(),d=Object(r.useState)("[empty]"),u=Object(K.a)(d,2),j=u[0],b=u[1],h=Object(r.useState)("false"),p=Object(K.a)(h,2),O=(p[0],p[1]);return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s.toLowerCase())||"[empty]"==j)return alert("You have to verify the Recaptcha!"),!1;var t;l((t=s.toLowerCase(),function(){var e=Object(w.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/forgotPass",{email:t});case 3:!0===e.sent.data.success?alert("A recovery email has been sent to the email you specified. Please visit your Email box and follow the instructions."):alert("This email is not recognized."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Reset Password"})}),Object(n.jsx)(Q.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),b(e),null==e&&O(!0)}})]})})})})})})},oe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(ie,{})]})}}]),a}(r.Component),le=(a(57),a.p+"static/media/FinalTask.17e43989.pdf");var de=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:le,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},ue=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(de,{})]})}}]),a}(r.Component);a(43);var je=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},be=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(je,{})]})}}]),a}(r.Component);var he=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"404 page"}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Home Page"})]})]})})})})})},pe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(he,{})]})}}]),a}(r.Component);a(118);var Oe=function(e){var t=v.a.get("userInstance"),a=JSON.parse(t),c=Object(r.useState)(""),s=Object(K.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(""),d=Object(K.a)(l,2),u=d[0],j=d[1],b=Object(r.useState)(""),h=Object(K.a)(b,2),p=h[0],f=h[1],x=Object(r.useState)(a.data.user.first_name),g=Object(K.a)(x,2),N=g[0],C=g[1],k=Object(r.useState)(a.data.user.last_name),A=Object(K.a)(k,2),E=A[0],_=A[1],U=Object(r.useState)(a.data.user.phonenumber),I=Object(K.a)(U,2),T=I[0],R=I[1],L=Object(r.useState)(a.data.user.email),z=Object(K.a)(L,2),Z=z[0],F=z[1],G=Object(r.useState)(a.data.user.country),D=Object(K.a)(G,2),q=D[0],Y=D[1],B=Object(r.useState)(a.data.user.city),W=Object(K.a)(B,2),$=W[0],M=W[1],J=Object(m.b)();if(t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"main-section",children:[Object(n.jsx)("h1",{children:"My Profile"}),Object(n.jsxs)("div",{className:"content-section",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"subtitle",children:" First name: "}),Object(n.jsx)("input",{id:"first_name",type:"text",onChange:function(e){return C(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.first_name})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Phone: "}),Object(n.jsx)("input",{id:"phonenumber",type:"text",onChange:function(e){return R(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.phonenumber?a.data.user.phonenumber:"-------"})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Country: "}),Object(n.jsx)("input",{id:"country",type:"text",onChange:function(e){return Y(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.country?a.data.user.country:"-------"})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Last name: "}),Object(n.jsx)("input",{id:"last_name",type:"text",onChange:function(e){return _(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.last_name})]}),Object(n.jsxs)("div",{className:"col input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" City: "}),Object(n.jsx)("input",{id:"city",type:"text",onChange:function(e){return M(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.city?a.data.user.city:"-------"})]})]}),Object(n.jsx)("button",{type:"submit",onClick:function(){null!==a.data.user.country&&""===q||null!==a.data.user.phonenumber&&""===T||null!==a.data.user.city&&""===$||""===Z||""===N||""===E?alert("You can not delete information! "):J(function(e,t,a,n,r,c){return function(){var s=Object(w.a)(y.a.mark((function s(i){var o;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,S.a.post("https://techstar12.herokuapp.com/updateDet",{email:e,first_name:t,last_name:a,phonenumber:n,country:r,city:c});case 3:1==(o=s.sent).data.success?alert("Detailes updated successfully!\n You will be able to see all the updates in the next login!"):console.log(o.data.status),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()}(a.data.user.email,N,E,T,q,$))},children:"Update Details"})]}),Object(n.jsxs)("div",{className:"email-section",children:[Object(n.jsx)("h2",{children:"Update Email"}),Object(n.jsxs)("div",{className:"row input-column",children:[Object(n.jsx)("p",{className:"input-column",children:" Email: "}),Object(n.jsx)("input",{id:"email1",type:"text",onChange:function(e){return F(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:a.data.user.email}),Object(n.jsx)("button",{type:"submit",onClick:function(){var e,t;u===p?J((e=a.data.user.email,t=Z,function(){var a=Object(w.a)(y.a.mark((function a(n){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.a.post("https://techstar12.herokuapp.com/updateEmail",{email:e,newemail:t});case 3:!0===a.sent.data.success?(n(P()),O.push("/"),alert("An email has been sent to the original email you had. Please visit your Email box and follow the instructions to approve the change.")):alert("We encountered a problem."),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}())):alert("Both passwords should be identical.")},children:"Update Email"})]})]}),Object(n.jsx)("h2",{children:"Update Password"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"updatepass-section",children:[Object(n.jsxs)("div",{className:"col pass-col",children:[Object(n.jsx)("input",{id:"password0",type:"password",onChange:function(e){return o(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Old Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password",type:"password",onChange:function(e){return j(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",onChange:function(e){return f(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsxs)("div",{className:"col pass-col",children:[Object(n.jsx)("p",{children:"* Both Password must match"}),Object(n.jsx)("p",{children:"* The password must contain at least one number"}),Object(n.jsx)("p",{children:"* The password must contain at least 6 characters"})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{type:"submit",onClick:function(){u===p?J(function(e,t,a){return function(){var n=Object(w.a)(y.a.mark((function n(r){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.post("https://techstar12.herokuapp.com/updatePass",{email:e,oldpass:t,newpass:a});case 3:!0===n.sent.data.success?(r(P()),O.push("/"),alert("Password has been changed successfully, please re-login.")):alert("The old password you have entered is wrong. Password hasn't changed"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(a.data.user.email,i,u)):alert("Both passwords should be identical.")},children:"Update Password"})})]})]})})}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"main-section",children:[Object(n.jsx)("h1",{children:" My Profile "}),Object(n.jsx)("h2",{children:" Please log-in ! "})]})})},me=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(Oe,{})]})}}]),a}(r.Component);a(119);var fe=function(e){var t=Object(m.b)();return Object(r.useEffect)((function(){var a,n;t((a=e.userid,n=e.token,function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/approve_user",{userid:a,token:n});case 3:!0===e.sent.data.success?(O.push("/"),alert("Your account has been activated successfully. Please login.")):alert("We encountered a problem."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))})),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"approveContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"aprrov",children:Object(n.jsx)("div",{children:Object(n.jsx)("p",{id:"title",children:"Your account has been created!"})})})})})})},xe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(fe,{userid:this.props.match.params.userid,token:this.props.match.params.token})]})}}]),a}(r.Component),ve=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/approveEmail",{userid:this.props.match.params.userid,token:this.props.match.params.token});case 3:!0===e.sent.data.success?(O.push("/"),alert("Your email change has been approved.")):(alert("Sorry, We encountered a problem."),O.push("/")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(U,{})})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m.a,{store:H,children:Object(n.jsx)(Z.c,{history:O,children:Object(n.jsxs)(Z.d,{children:[Object(n.jsx)(Z.b,{exact:!0,path:"/",component:z}),Object(n.jsx)(Z.b,{path:"/SignIn",component:ae}),Object(n.jsx)(Z.b,{path:"/SignUp",component:re}),Object(n.jsx)(Z.b,{path:"/reset/:userid/:token",component:se}),Object(n.jsx)(Z.b,{path:"/activate/:userid/:token",component:xe}),Object(n.jsx)(Z.b,{path:"/updatemail/:userid/:token",component:ve}),Object(n.jsx)(Z.b,{path:"/ForgotPass",component:oe}),Object(n.jsx)(Z.b,{path:"/About",component:ue}),Object(n.jsx)(Z.b,{path:"/Constraction",component:be}),Object(n.jsx)(Z.b,{path:"/profile",component:me}),Object(n.jsx)(Z.b,{path:"/404",component:pe}),Object(n.jsx)(Z.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.924901f3.chunk.js.map