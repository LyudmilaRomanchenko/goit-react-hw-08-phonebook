(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return m}));var r=n(33),c=n.n(r),o=n(46),a=n(8),s=n(35),i=n.n(s),u=n(53),l=function(e){return Object(u.b)(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};i.a.defaults.baseURL="https://connections-api.herokuapp.com";var b,j=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){i.a.defaults.headers.common.Authorization=""},g=Object(a.c)("auth/register",function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,j(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),l("Maybe this email is taken!"),e.abrupt("return",Promise.reject(new Error));case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),h=Object(a.c)("auth/login",function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,j(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),l("Email or password is not correct!"),e.abrupt("return",Promise.reject(new Error));case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),O=Object(a.c)("auth/logout",Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/logout");case 3:d(),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(new Error));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))),f=Object(a.c)("auth/refresh",function(){var e=Object(o.a)(c.a.mark((function e(t,n){var r,o,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),o=r.auth.token,console.log(o),null!==o){e.next=5;break}return e.abrupt("return",n.rejectWithValue());case 5:return j(o),e.prev=6,e.next=9,i.a.get("/users/current");case 9:return a=e.sent,s=a.data,e.abrupt("return",s);case 14:return e.prev=14,e.t0=e.catch(6),console.log(e.t0),e.abrupt("return",Promise.reject(new Error));case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),p={register:g,logOut:O,logIn:h,fetchCurrentUser:f},v={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){return e.auth.user.email},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},x=n(5),m=Object(a.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(b={},Object(x.a)(b,p.register.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(x.a)(b,p.logIn.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(x.a)(b,p.logOut.fulfilled,(function(e,t){t.payload;e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(x.a)(b,p.fetchCurrentUser.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(x.a)(b,p.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(x.a)(b,p.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),b)}).reducer},142:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(37),a=n.n(o),s=n(14),i=n(79),u=n(28),l=(n(99),n(4)),b=n(48),j=n.n(b),d=n(12),g=n(1);var h=function(){var e=Object(s.c)(d.c.getIsLoggedIn);return console.log(e),Object(g.jsxs)("nav",{children:[Object(g.jsx)(u.b,{to:"/",className:function(e){return e.isActive?j.a.activeLink:j.a.link},children:"Home"}),e&&Object(g.jsx)(u.b,{to:"/contacts",className:function(e){return e.isActive?j.a.activeLink:j.a.link},children:"Contacts"})]})},O=n(49),f=n.n(O);var p=function(){return Object(g.jsxs)("nav",{children:[Object(g.jsx)(u.b,{to:"/register",className:function(e){return e.isActive?f.a.activeLink:f.a.link},children:"Register"}),Object(g.jsx)(u.b,{to:"/login",className:function(e){return e.isActive?f.a.activeLink:f.a.link},children:"Login"})]})},v=n(62),x=n.n(v),m=n(164),k=n(64);var L=function(){var e=Object(s.c)(d.c.getUserEmail);console.log(e);var t=Object(s.b)();return Object(g.jsxs)("nav",{className:x.a.user,children:[Object(g.jsxs)("span",{children:["Welcom, ",Object(g.jsx)("span",{className:x.a.email,children:e})]}),Object(g.jsx)(m.a,{type:"button",variant:"contained",size:"small",sx:k.a.buttonLogOut,onClick:function(){return t(d.a.logOut())},children:"Log out"})]})},_=n(167),C=n(168),y=n(166);function I(){var e=Object(s.c)(d.c.getIsLoggedIn),t=Object(s.c)(d.c.getIsFetchingCurrent);return console.log(e),console.log(!t),Object(g.jsx)(_.a,{position:"static",sx:{bgcolor:"#ebeded",paddingLeft:"100px"},children:Object(g.jsx)(C.a,{children:Object(g.jsxs)(y.a,{variant:"h8",component:"div",sx:{display:"flex"},children:[Object(g.jsx)(h,{}),e||t?Object(g.jsx)(L,{}):Object(g.jsx)(p,{})]})})})}var w=n(82),U=n.n(w),E=(n(120),n(83)),N=n.n(E);var S=function(){return Object(g.jsx)(N.a,{className:U.a.Loader,type:"ThreeDots",color:"#009688",height:100,width:100,timeout:3e3})};var z=function(){return Object(s.c)(d.c.getIsLoggedIn)?Object(g.jsx)(l.b,{}):Object(g.jsx)(l.a,{to:"/login"})},A=n(6),F=n.n(A);function T(e){var t=e.restricted,n=void 0!==t&&t,r=e.redirectTo,c=void 0===r?"/":r;console.log(c);var o=Object(s.c)(d.c.getIsLoggedIn)&&n;return console.log(o),o?Object(g.jsx)(l.a,{to:c}):Object(g.jsx)(l.b,{})}var P=T;T.prototype={restricted:F.a.bool.isRequired,redirectTo:F.a.string.isRequired},F.a.checkPropTypes(T);var R=n(53),q=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,226))})),H=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,227))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,228))})),B=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,225))}));console.log(z);var D,J=function(){var e=Object(s.c)(d.c.getIsFetchingCurrent);console.log(e);var t=Object(s.b)();return Object(r.useEffect)((function(){t(d.a.fetchCurrentUser())}),[t]),Object(g.jsx)("div",{children:e?Object(g.jsx)(S,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I,{}),Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)(S,{}),children:Object(g.jsxs)(l.e,{children:[Object(g.jsx)(l.c,{path:"/",element:Object(g.jsx)(P,{}),children:Object(g.jsx)(l.c,{path:"/",element:Object(g.jsx)(q,{})})}),Object(g.jsx)(l.c,{path:"/register",element:Object(g.jsx)(P,{redirectTo:"/contacts",restricted:!0}),children:Object(g.jsx)(l.c,{path:"/register",element:Object(g.jsx)(H,{})})}),Object(g.jsx)(l.c,{path:"/login",element:Object(g.jsx)(P,{redirectTo:"/contacts",restricted:!0}),children:Object(g.jsx)(l.c,{path:"/login",element:Object(g.jsx)(M,{})})}),Object(g.jsx)(l.c,{path:"/contacts",element:Object(g.jsx)(z,{redirectTo:"/contacts"}),children:Object(g.jsx)(l.c,{path:"/contacts",element:Object(g.jsx)(B,{})})})]})}),Object(g.jsx)(R.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})},V=n(19),W=n(8),Q=n(34),X=n(84),G=n.n(X),K=n(85),Y=n.n(K),Z=n(5),$=n(20),ee=n(45),te=Object(W.d)([],(D={},Object(Z.a)(D,ee.j,(function(e,t){return t.payload})),Object(Z.a)(D,ee.c,(function(e,t){var n=t.payload;return[].concat(Object(V.a)(e),[n])})),Object(Z.a)(D,ee.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),D)),ne=Object(W.d)("",Object(Z.a)({},ee.d,(function(e,t){return t.payload}))),re=Object($.b)({items:te,filter:ne});console.log(d.b),console.log(re);var ce=[].concat(Object(V.a)(Object(W.f)({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[function(e){return function(e){return function(t){console.log("\u041c\u043e\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430",t),e(t)}}},Y.a]),oe={key:"auth",storage:G.a,whitelist:["token"]},ae=Object(W.a)({reducer:{auth:Object(Q.g)(oe,d.b),contacts:re},middleware:ce,devTools:!1});console.log(ae.getState());var se=Object(Q.h)(ae);a.a.render(Object(g.jsx)(s.a,{store:ae,children:Object(g.jsx)(i.a,{loading:null,persistor:se,children:Object(g.jsx)(u.a,{children:Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(J,{})})})})}),document.getElementById("root"))},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(8),c=Object(r.b)("contacts/addContactsRequest"),o=Object(r.b)("contacts/addContactsSuccsess"),a=Object(r.b)("contacts/addContactsError"),s=Object(r.b)("contacts/deleteContactsRequest"),i=Object(r.b)("contacts/deleteContactsSuccsess"),u=Object(r.b)("contacts/deleteContactsError"),l=Object(r.b)("contacts/fetchContactsRequest"),b=Object(r.b)("contacts/fetchContactsSuccsess"),j=Object(r.b)("contacts/fetchContactsError"),d=Object(r.b)("contacts/changeFilter")},48:function(e,t,n){e.exports={link:"Navigation_link__38Ijn",activeLink:"Navigation_activeLink__1EqSR",nav:"Navigation_nav__2zavO"}},49:function(e,t,n){e.exports={link:"AuthNav_link__26gTA",activeLink:"AuthNav_activeLink__3313X",nav:"AuthNav_nav__2Tz18"}},62:function(e,t,n){e.exports={user:"UserMemu_user__1eQkx",email:"UserMemu_email__2e-pL",button:"UserMemu_button__1ehV6"}},64:function(e,t,n){"use strict";var r={input:{margin:"30px 0",display:"block"},buttonStyles:{margin:"30px 0",display:"block",bgcolor:"#009688",":hover":{bgcolor:"#036b69"},":focus":{bgcolor:"#036b69"}},buttonLogOut:{height:"25px",fontSize:11,margin:"0 20px",bgcolor:"#009688",":hover":{bgcolor:"#036b69"},":focus":{bgcolor:"#036b69"}},buttonDelete:{bgcolor:"#009688",":hover":{bgcolor:"#036b69"},":focus":{bgcolor:"#036b69"}}};t.a=r},82:function(e,t,n){e.exports={Loader:"Spinner_Loader__LH2Hy"}},99:function(e,t,n){}},[[142,2,3]]]);
//# sourceMappingURL=main.ce73d785.chunk.js.map