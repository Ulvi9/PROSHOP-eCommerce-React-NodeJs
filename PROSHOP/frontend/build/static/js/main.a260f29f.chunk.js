(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),c=r(25),s=r.n(c),i=(r(82),r(83),r(12)),o=r(10),d=r(117),j=r(72),l=r(7),u=r(126),p=function(e){var t=e.value,r=e.text,n=e.color;return Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=5?"fas fa-star":t>=4.5?"fas fa-start-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:r&&r})]})};p.defaultProps={color:"#f8e825"};var h=p,b=function(e){var t=e.product;return Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"my-3 p-3 rounded",children:[Object(a.jsx)(i.Link,{to:"/product/".concat(t._id),children:Object(a.jsx)(u.a.Img,{src:t.image,variant:"top"})}),Object(a.jsxs)(u.a.Body,{children:[Object(a.jsx)(i.Link,{to:"/product/".concat(t._id),children:Object(a.jsx)(u.a.Title,{as:"div",children:Object(a.jsx)("strong",{children:t.name})})}),Object(a.jsx)(u.a.Text,{as:"div",children:Object(a.jsx)(h,{value:t.rating,text:"".concat(t.numReviews,"reviews")})}),Object(a.jsxs)(u.a.Text,{as:"h3",children:["$",t.price]})]})]})})},O=r(8),x=r.n(O),m=r(19),f="PRODUCT_LIST_REQUEST",g="PRODUCT_LIST_SUCCESS",y="PRODUCT_LIST_FAIL",v="PRODUCT_DETAILS_REQUEST",I="PRODUCT_DETAILS_SUCCESS",S="PRODUCT_DETAILS_FAIL",E=r(20),C=r.n(E),L=r(116),k=function(){return Object(a.jsx)(L.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(a.jsx)("span",{className:"sr-only",children:"Loading.."})})},_=r(125),P=function(e){var t=e.variant,r=e.children;return Object(a.jsx)(_.a,{variant:t,children:r})};P.defaultProps={variant:"info"};var R=P,w=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.productList})),r=t.error,c=t.products,s=t.loading;return Object(n.useEffect)((function(){e(function(){var e=Object(m.a)(x.a.mark((function e(t){var r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),e.next=4,C.a.get("/api/products");case 4:r=e.sent,a=r.data,t({type:g,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:y,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Latest Products"}),s?Object(a.jsx)(k,{}):r?Object(a.jsx)(R,{variant:"danger",children:r}):Object(a.jsx)(d.a,{children:c.map((function(e){return Object(a.jsx)(j.a,{sm:12,md:6,lg:3,children:Object(a.jsx)(b,{product:e})},e._id)}))})]})},A=r(35),T=r(9),U=r(118),N=r(127),D=r(123),G=r(73),M=function(e){var t=e.history,r=e.match,c=Object(n.useState)(1),s=Object(T.a)(c,2),o=s[0],p=s[1],b=Object(l.b)(),O=Object(l.c)((function(e){return e.productDetail})),f=O.product,g=O.error,y=O.loading;Object(n.useEffect)((function(){var e;b((e=r.params.id,function(){var t=Object(m.a)(x.a.mark((function t(r){var a,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:v}),t.next=4,C.a.get("/api/products/".concat(e));case 4:a=t.sent,n=a.data,r({type:I,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:S,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[b,r]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.Link,{className:"btn btn-light my-3",to:"/",children:"Go Back"}),y?Object(a.jsx)(k,{}):g?Object(a.jsx)(R,{variant:"danger",children:g}):Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{md:6,children:Object(a.jsx)(U.a,{src:f.image,alt:f.name,fluid:!0})}),Object(a.jsx)(j.a,{md:3,children:Object(a.jsxs)(N.a,{variant:"flush",children:[Object(a.jsx)(N.a.Item,{children:Object(a.jsx)("h3",{children:f.name})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(h,{value:f.rating,text:"".concat(f.numReviews," reviews")})}),Object(a.jsxs)(N.a.Item,{children:["Price: $",f.price]}),Object(a.jsxs)(N.a.Item,{children:["Description: ",f.description]})]})}),Object(a.jsx)(j.a,{md:3,children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(N.a,{variant:"flush",children:[Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Price:"}),Object(a.jsxs)(j.a,{children:[" ",Object(a.jsxs)("strong",{children:["$",f.price]})]})]})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Status:"}),Object(a.jsx)(j.a,{children:f.countInStock>0?"In Stock":"Out of Stock"})]})}),f.countInStock>0&&Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Qty"}),Object(a.jsx)(j.a,{children:Object(a.jsx)(D.a.Control,{as:"select",value:o,onChange:function(e){return p(Number(e.target.value))},children:Object(A.a)(Array(f.countInStock).keys()).map((function(e){return Object(a.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(G.a,{className:"btn-block",onClick:function(){t.push("/cart/".concat(r.params.id,"?qyt=").concat(o))},type:"button",disabled:0===f.countInStock,children:"Add to Cart"})})]})})})]})]})},F=r(124),q=r(119),B=r(120),J=r(122),$=r(17),Q="USER_LOGIN_SUCCESS",z="USER_LOGIN_FAIL",H="USER_LOGIN_REQUEST",V="USER_LOGOUT",Y="USER_REGISTER_SUCCESS",W="USER_REGISTER_FAIL",K="USER_REGISTER_REQUEST",X="USER_DETAILS_REQUEST",Z="USER_DETAILS_SUCCESS",ee="USER_DETAILS_FAIL",te="USER_DETAILS_RESET",re="USER_UPDATE_PROFILE_REQUEST",ae="USER_UPDATE_PROFILE_SUCCESS",ne="USER_UPDATE_PROFILE_FAIL",ce="USER_UPDATE_PROFILE_RESET",se="USER_LIST_SUCCESS",ie="USER_LIST_FAIL",oe="USER_LIST_REQUEST",de="USER_LIST_RESET",je="USER_DELETE_SUCCESS",le="USER_DELETE_FAIL",ue="USER_DELETE_REQUEST",pe=function(){return function(e){localStorage.removeItem("userInfo"),e({type:V}),e({type:de}),e({type:te})}},he=function(){var e=Object(l.c)((function(e){return e.userLogin})).userInfo,t=Object(l.b)();return Object(a.jsx)("header",{children:Object(a.jsx)(F.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)($.LinkContainer,{to:"/",children:Object(a.jsx)(F.a.Brand,{children:"ProShop"})}),Object(a.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(F.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(B.a,{className:"ml-auto",children:[Object(a.jsx)($.LinkContainer,{to:"/cart",children:Object(a.jsxs)(B.a.Link,{children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]})}),e?Object(a.jsxs)(J.a,{title:e.name,id:"username",children:[Object(a.jsx)($.LinkContainer,{to:"/profile",children:Object(a.jsx)(J.a.Item,{children:"Profile"})}),Object(a.jsx)(J.a.Item,{onClick:function(){t(pe())},children:"Logout"})]}):Object(a.jsx)($.LinkContainer,{to:"/login",children:Object(a.jsxs)(B.a.Link,{children:[Object(a.jsx)("i",{className:"fas fa-user"}),"Sign In"]})}),e&&e.isAdmin&&Object(a.jsxs)(J.a,{title:"Admin",id:"adminMenu",children:[Object(a.jsx)($.LinkContainer,{to:"/admin/userList",children:Object(a.jsx)(J.a.Item,{children:"Users"})}),Object(a.jsx)($.LinkContainer,{to:"/admin/productList",children:Object(a.jsx)(J.a.Item,{children:"Products"})}),Object(a.jsx)($.LinkContainer,{to:"/admin/orderList",children:Object(a.jsx)(J.a.Item,{children:"Orders"})})]})]})})]})})})},be=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)(q.a,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(j.a,{className:"text-center py-3",children:"Copyright \xa9 ProShop"})})})})},Oe="CARD_ADD_ITEM",xe="CARD_REMOVE_ITEM",me="CART_SAVE_SHIPPING_ADDRESS",fe="CART_SAVE_PAYMENT_METHOD",ge=function(e,t){return function(){var r=Object(m.a)(x.a.mark((function r(a,n){var c,s;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.get("/api/products/".concat(e));case 2:c=r.sent,s=c.data,a({type:Oe,payload:{product:s._id,name:s.name,price:s.price,image:s.image,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ye=function(e){var t=e.match,r=e.location,c=e.history,s=t.params.id,o=r.search?Number(r.search.split("=")[1]):1,p=Object(l.b)(),h=Object(l.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){s&&p(ge(s,o))}),[o,p,s]);var b=function(e){p(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(r,a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:xe,payload:e}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}(e))};return Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(j.a,{md:8,children:[Object(a.jsx)("h1",{children:"Shopping Cart"}),0===h.length?Object(a.jsxs)(R,{children:["Your Cart Is Empty ",Object(a.jsx)(i.Link,{to:"/",children:"Go Back"})]}):Object(a.jsx)(N.a,{variant:"flush",children:h.map((function(e){return Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{md:2,children:Object(a.jsx)(U.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(a.jsx)(j.a,{md:3,children:Object(a.jsxs)(i.Link,{to:"/product/".concat(e.product),children:[" ",e.name]})}),Object(a.jsxs)(j.a,{md:2,children:["$",e.price]}),Object(a.jsx)(j.a,{md:2,children:Object(a.jsx)(D.a.Control,{as:"select",value:e.qty,onChange:function(t){return p(ge(e.product,Number(t.target.value)))},children:Object(A.a)(Array(e.countInStock).keys()).map((function(e){return Object(a.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(a.jsx)(j.a,{md:2,children:Object(a.jsx)(G.a,{type:"button",variant:"light",onClick:function(){return b(e.product)},children:Object(a.jsx)("i",{className:"fas fa-trash"})})})]})},e.product)}))})]}),Object(a.jsx)(j.a,{md:4,children:Object(a.jsx)(u.a,{className:"mt-1",children:Object(a.jsxs)(N.a,{variant:"flush",children:[Object(a.jsxs)(N.a.Item,{children:[Object(a.jsxs)("h2",{children:["Subtotal(",h.reduce((function(e,t){return e+t.qty}),0),") items"]}),"$",h.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2)]}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(G.a,{type:"button",className:"btn-block",disabled:0===h.length,onClick:function(){c.push("/login?redirect=shipping")},children:"Proceed To Checkout"})})]})})})]})},ve=function(e){var t=e.children;return Object(a.jsx)(q.a,{children:Object(a.jsx)(d.a,{className:"justify-content-md-center",children:Object(a.jsx)(j.a,{xs:12,md:6,children:t})})})},Ie=function(e){var t=e.location,r=e.history,c=Object(n.useState)(""),s=Object(T.a)(c,2),o=s[0],u=s[1],p=Object(n.useState)(""),h=Object(T.a)(p,2),b=h[0],O=h[1],f=Object(l.b)(),g=Object(l.c)((function(e){return e.userLogin})),y=g.error,v=g.loading,I=g.userInfo,S=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){I&&r.push(S)}),[r,S,I]);return Object(a.jsxs)(ve,{children:[Object(a.jsx)("h1",{children:"Sign In"}),y&&Object(a.jsx)(R,{variant:"danger",children:y}),v&&Object(a.jsx)(k,{}),Object(a.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var r=Object(m.a)(x.a.mark((function r(a){var n,c,s;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:Q}),n={headers:{"Content-Type":"application/json"}},r.next=5,C.a.post("/api/users/login",{email:e,password:t},n);case 5:c=r.sent,s=c.data,a({type:Q,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),a({type:z,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(o,b))},children:[Object(a.jsxs)(D.a.Group,{controlId:"email",children:[Object(a.jsx)(D.a.Label,{children:"Email Address"}),Object(a.jsx)(D.a.Control,{type:"email",placeholder:"Enter Email",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"password",children:[Object(a.jsx)(D.a.Label,{children:"Password"}),Object(a.jsx)(D.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(a.jsx)(G.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(a.jsx)(d.a,{className:"py-3",children:Object(a.jsxs)(j.a,{children:["New Customer "," ",Object(a.jsx)(i.Link,{to:S?"register/redirect=".concat(S):"/register",children:"Register"})]})})]})},Se=function(e){var t=e.location,r=e.history,c=Object(n.useState)(""),s=Object(T.a)(c,2),o=s[0],u=s[1],p=Object(n.useState)(""),h=Object(T.a)(p,2),b=h[0],O=h[1],f=Object(n.useState)(""),g=Object(T.a)(f,2),y=g[0],v=g[1],I=Object(n.useState)(""),S=Object(T.a)(I,2),E=S[0],L=S[1],_=Object(n.useState)(null),P=Object(T.a)(_,2),w=P[0],A=P[1],U=Object(l.b)(),N=Object(l.c)((function(e){return e.userRegister})),M=N.loading,F=N.error,q=N.userInfo,B=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){q&&r.push(B)}),[r,q,B]);return Object(a.jsxs)(ve,{children:[Object(a.jsx)("h1",{children:"Sign Up"}),w&&Object(a.jsx)(R,{variant:"danger",children:w}),F&&Object(a.jsx)(R,{variant:"danger",children:F}),M&&Object(a.jsx)(k,{}),Object(a.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),y!==E?A("Passwords do not match"):U(function(e,t,r){return function(){var a=Object(m.a)(x.a.mark((function a(n){var c,s,i;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:K}),c={headers:{"Content-Type":"application/json"}},a.next=5,C.a.post("/api/users/register",{name:e,email:t,password:r},c);case 5:s=a.sent,i=s.data,n({type:Y,payload:i}),n({type:Q,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:W,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(o,b,y))},children:[Object(a.jsxs)(D.a.Group,{controlId:"name",children:[Object(a.jsx)(D.a.Label,{children:"Name"}),Object(a.jsx)(D.a.Control,{type:"name",placeholder:"Enter name",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"email",children:[Object(a.jsx)(D.a.Label,{children:"Email Address"}),Object(a.jsx)(D.a.Control,{type:"email",placeholder:"Enter email",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"password",children:[Object(a.jsx)(D.a.Label,{children:"Password"}),Object(a.jsx)(D.a.Control,{type:"password",placeholder:"Enter password",value:y,onChange:function(e){return v(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(D.a.Label,{children:"Confirm Password"}),Object(a.jsx)(D.a.Control,{type:"password",placeholder:"Confirm password",value:E,onChange:function(e){return L(e.target.value)}})]}),Object(a.jsx)(G.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(a.jsx)(d.a,{className:"py-3",children:Object(a.jsxs)(j.a,{children:["Have an Account?"," ",Object(a.jsx)(i.Link,{to:B?"/login?redirect=".concat(B):"/login",children:"Login"})]})})]})},Ee=function(e){e.location;var t=e.history,r=Object(n.useState)(""),c=Object(T.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),u=Object(T.a)(o,2),p=u[0],h=u[1],b=Object(n.useState)(""),O=Object(T.a)(b,2),f=O[0],g=O[1],y=Object(n.useState)(""),v=Object(T.a)(y,2),I=v[0],S=v[1],E=Object(n.useState)(null),L=Object(T.a)(E,2),_=L[0],P=L[1],w=Object(l.b)(),A=Object(l.c)((function(e){return e.userDetails})),U=A.loading,N=A.error,M=A.user,F=Object(l.c)((function(e){return e.userLogin})).userInfo,q=Object(l.c)((function(e){return e.userUpdateProfile})).success;Object(n.useEffect)((function(){var e;F?M.name?(i(M.name),h(M.email)):w((e="profile",function(){var t=Object(m.a)(x.a.mark((function t(r,a){var n,c,s,i,o,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:X}),n=a(),c=n.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,C.a.get("/api/users/".concat(e),s);case 6:i=t.sent,o=i.data,r({type:Z,payload:o}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&r(pe()),r({type:ee,payload:d});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}())):t.push("/login")}),[w,t,F,M]);return Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(j.a,{md:3,children:[Object(a.jsx)("h2",{children:"User Profile"}),_&&Object(a.jsx)(R,{variant:"danger",children:_}),q&&Object(a.jsx)(R,{variant:"success",children:"Profile Updated"}),U?Object(a.jsx)(k,{}):N?Object(a.jsx)(R,{variant:"danger",children:N}):Object(a.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),f!==I?P("Passwords do not match"):w(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(r,a){var n,c,s,i,o,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:re}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,C.a.put("/api/users/update",e,s);case 6:i=t.sent,o=i.data,r({type:ae,payload:o}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&r(pe()),r({type:ne,payload:d});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}({id:M._id,name:s,email:p,password:f}))},children:[Object(a.jsxs)(D.a.Group,{controlId:"name",children:[Object(a.jsx)(D.a.Label,{children:"Name"}),Object(a.jsx)(D.a.Control,{type:"name",placeholder:"Enter name",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"email",children:[Object(a.jsx)(D.a.Label,{children:"Email Address"}),Object(a.jsx)(D.a.Control,{type:"email",placeholder:"Enter email",value:p,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"password",children:[Object(a.jsx)(D.a.Label,{children:"Password"}),Object(a.jsx)(D.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(D.a.Label,{children:"Confirm Password"}),Object(a.jsx)(D.a.Control,{type:"password",placeholder:"Confirm password",value:I,onChange:function(e){return S(e.target.value)}})]}),Object(a.jsx)(G.a,{type:"submit",variant:"primary",children:"Update"})]})]}),Object(a.jsx)(j.a,{md:9})]})},Ce=function(e){var t=e.step1,r=e.step2,n=e.step3,c=e.step4;return Object(a.jsxs)(B.a,{className:"justify-content-center mb-4",children:[Object(a.jsx)(B.a.Item,{children:t?Object(a.jsx)($.LinkContainer,{to:"/login",children:Object(a.jsx)(B.a.Link,{children:"Sign In"})}):Object(a.jsx)(B.a.Link,{disabled:!0,children:"Sign In"})}),Object(a.jsx)(B.a.Item,{children:r?Object(a.jsx)($.LinkContainer,{to:"/shipping",children:Object(a.jsx)(B.a.Link,{children:"Shipping"})}):Object(a.jsx)(B.a.Link,{disabled:!0,children:"Shipping"})}),Object(a.jsx)(B.a.Item,{children:n?Object(a.jsx)($.LinkContainer,{to:"/payment",children:Object(a.jsx)(B.a.Link,{children:"Payment"})}):Object(a.jsx)(B.a.Link,{disabled:!0,children:"Payment"})}),Object(a.jsx)(B.a.Item,{children:c?Object(a.jsx)($.LinkContainer,{to:"/placeorder",children:Object(a.jsx)(B.a.Link,{children:"PlaceOrder"})}):Object(a.jsx)(B.a.Link,{disabled:!0,children:"PlaceOrder"})})]})},Le=function(e){var t=e.history,r=Object(l.c)((function(e){return e.cart})).shippingAddress,c=Object(n.useState)(r.address),s=Object(T.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)(r.city),j=Object(T.a)(d,2),u=j[0],p=j[1],h=Object(n.useState)(r.postalCode),b=Object(T.a)(h,2),O=b[0],x=b[1],m=Object(n.useState)(r.country),f=Object(T.a)(m,2),g=f[0],y=f[1],v=Object(l.b)();return Object(a.jsxs)(ve,{children:[Object(a.jsx)(Ce,{step1:!0,step2:!0}),Object(a.jsx)("h1",{children:"Shipping"}),Object(a.jsxs)(D.a,{onSubmit:function(e){var r;e.preventDefault(),v((r={address:i,city:u,postalCode:O,country:g},function(e){e({type:me,payload:r}),localStorage.setItem("shippingAddress",JSON.stringify(r))})),t.push("/payment")},children:[Object(a.jsxs)(D.a.Group,{controlId:"address",children:[Object(a.jsx)(D.a.Label,{children:"Address"}),Object(a.jsx)(D.a.Control,{type:"text",placeholder:"Enter address",value:i,required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"city",children:[Object(a.jsx)(D.a.Label,{children:"City"}),Object(a.jsx)(D.a.Control,{type:"text",placeholder:"Enter city",value:u,required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"postalCode",children:[Object(a.jsx)(D.a.Label,{children:"Postal Code"}),Object(a.jsx)(D.a.Control,{type:"text",placeholder:"Enter postal code",value:O,required:!0,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)(D.a.Group,{controlId:"country",children:[Object(a.jsx)(D.a.Label,{children:"Country"}),Object(a.jsx)(D.a.Control,{type:"text",placeholder:"Enter country",value:g,required:!0,onChange:function(e){return y(e.target.value)}})]}),Object(a.jsx)(G.a,{type:"submit",variant:"primary",children:"Continue"})]})]})},ke=function(e){var t=e.history;Object(l.c)((function(e){return e.cart})).shippingAddress.address||t.push("/shipping");var r=Object(n.useState)("PayPal"),c=Object(T.a)(r,2),s=c[0],i=c[1],o=Object(l.b)();return Object(a.jsxs)(ve,{children:[Object(a.jsx)(Ce,{step1:!0,step2:!0,step3:!0}),Object(a.jsx)("h1",{children:"Payment Method"}),Object(a.jsxs)(D.a,{onSubmit:function(e){var r;e.preventDefault(),o((r=s,function(e){e({type:fe,payload:r}),localStorage.setItem("paymentMethod",JSON.stringify(r))})),t.push("/placeorder")},children:[Object(a.jsxs)(D.a.Group,{children:[Object(a.jsx)(D.a.Label,{as:"legend",children:"Select Method"}),Object(a.jsx)(j.a,{children:Object(a.jsx)(D.a.Check,{type:"radio",label:"PayPal or Credit Card",id:"PayPal",name:"paymentMethod",value:"PayPal",checked:!0,onChange:function(e){return i(e.target.value)}})})]}),Object(a.jsx)(G.a,{type:"submit",variant:"primary",children:"Continue"})]})]})},_e="ORDER_CREATE_REQUEST",Pe="ORDER_CREATE_SUCCESS",Re="ORDER_CREATE_FAIL",we=function(e){var t=e.history,r=Object(l.b)(),c=Object(l.c)((function(e){return e.cart}));c.shippingAddress.address?c.paymentMethod||t.push("/payment"):t.push("/shipping");var s=function(e){return(Math.round(100*e)/100).toFixed(2)};c.itemsPrice=s(c.cartItems.reduce((function(e,t){return e+t.price*t.qty}),0)),c.shippingPrice=s(c.itemsPrice>100?0:100),c.taxPrice=s(Number((.15*c.itemsPrice).toFixed(2))),c.totalPrice=(Number(c.itemsPrice)+Number(c.shippingPrice)+Number(c.taxPrice)).toFixed(2);var o=Object(l.c)((function(e){return e.orderCreate})),p=o.order,h=o.success,b=o.error;Object(n.useEffect)((function(){h&&t.push("/order/".concat(p._id))}),[t,h]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ce,{step1:!0,step2:!0,step3:!0,step4:!0}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{md:8,children:Object(a.jsxs)(N.a,{variant:"flush",children:[Object(a.jsxs)(N.a.Item,{children:[Object(a.jsx)("h2",{children:"Shipping"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Address:"}),c.shippingAddress.address,", ",c.shippingAddress.city," ",c.shippingAddress.postalCode,","," ",c.shippingAddress.country]})]}),Object(a.jsxs)(N.a.Item,{children:[Object(a.jsx)("h2",{children:"Payment Method"}),Object(a.jsx)("strong",{children:"Method: "}),c.paymentMethod]}),Object(a.jsxs)(N.a.Item,{children:[Object(a.jsx)("h2",{children:"Order Items"}),0===c.cartItems.length?Object(a.jsx)(R,{children:"Your cart is empty"}):Object(a.jsx)(N.a,{variant:"flush",children:c.cartItems.map((function(e,t){return Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{md:1,children:Object(a.jsx)(U.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(i.Link,{to:"/product/".concat(e.product),children:e.name})}),Object(a.jsxs)(j.a,{md:4,children:[e.qty," x $",e.price," = $",e.qty*e.price]})]})},t)}))})]})]})}),Object(a.jsx)(j.a,{md:4,children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(N.a,{variant:"flush",children:[Object(a.jsx)(N.a.Item,{children:Object(a.jsx)("h2",{children:"Order Summary"})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Items"}),Object(a.jsxs)(j.a,{children:["$",c.itemsPrice]})]})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Shipping"}),Object(a.jsxs)(j.a,{children:["$",c.shippingPrice]})]})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Tax"}),Object(a.jsxs)(j.a,{children:["$",c.taxPrice]})]})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{children:"Total"}),Object(a.jsxs)(j.a,{children:["$",c.totalPrice]})]})}),Object(a.jsx)(N.a.Item,{children:b&&Object(a.jsx)(R,{variant:"danger",children:b})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(G.a,{type:"button",className:"btn-block",disabled:0===c.cartItems,onClick:function(){r(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(r,a){var n,c,s,i,o,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:_e}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,C.a.post("/api/orders/addOrder",e,s);case 6:i=t.sent,o=i.data,r({type:Pe,payload:o}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,r({type:Re,payload:d});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}({orderItems:c.cartItems,shippingAddress:c.shippingAddress,paymentMethod:c.paymentMethod,itemsPrice:c.itemsPrice,shippingPrice:c.shippingPrice,taxPrice:c.taxPrice,totalPrice:c.totalPrice}))},children:"Place Order"})})]})})})]})]})},Ae=r(121),Te=function(e){var t=e.history,r=Object(l.b)(),c=Object(l.c)((function(e){return e.userList})),s=c.loading,i=c.error,o=c.users,d=Object(l.c)((function(e){return e.userLogin})).userInfo,j=Object(l.c)((function(e){return e.userDelete})).success;Object(n.useEffect)((function(){d&&d.isAdmin?r(function(){var e=Object(m.a)(x.a.mark((function e(t,r){var a,n,c,s,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:oe}),a=r(),n=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(n.token)}},e.next=6,C.a.get("/api/users",c);case 6:s=e.sent,i=s.data,t({type:se,payload:i}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),"Not authorized, token failed"===(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message)&&t(pe());case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()):t.push("/login")}),[r,t,d,j]);var u=function(e){window.confirm("Are you sure")&&r(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(r,a){var n,c,s,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:ue}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,C.a.delete("/api/users/".concat(e),s);case 6:t.sent.data,r({type:je}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),i=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,r({type:le,payload:i});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}(e))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Users"}),s?Object(a.jsx)(k,{}):i?Object(a.jsx)(R,{variant:"danger",children:i}):Object(a.jsxs)(Ae.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"NAME"}),Object(a.jsx)("th",{children:"EMAIL"}),Object(a.jsx)("th",{children:"ADMIN"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:o.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e._id}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(a.jsx)("td",{children:e.isAdmin?Object(a.jsx)("i",{className:"fas fa-check",style:{color:"green"}}):Object(a.jsx)("i",{className:"fas fa-times",style:{color:"red"}})}),Object(a.jsxs)("td",{children:[Object(a.jsx)($.LinkContainer,{to:"/admin/user/".concat(e._id,"/edit"),children:Object(a.jsx)(G.a,{variant:"light",className:"btn-sm",children:Object(a.jsx)("i",{className:"fas fa-edit"})})}),Object(a.jsx)(G.a,{variant:"danger",className:"btn-sm",onClick:function(){return u(e._id)},children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})]},e._id)}))})]})]})},Ue=function(){return Object(a.jsxs)(i.BrowserRouter,{children:[Object(a.jsx)(he,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(o.d,{path:"/product/:id",component:M}),Object(a.jsx)(o.d,{path:"/login",component:Ie}),Object(a.jsx)(o.d,{path:"/shipping",component:Le}),Object(a.jsx)(o.d,{path:"/payment",component:ke}),Object(a.jsx)(o.d,{path:"/placeOrder",component:we}),Object(a.jsx)(o.d,{path:"/register",component:Se}),Object(a.jsx)(o.d,{path:"/profile",component:Ee}),Object(a.jsx)(o.d,{path:"/cart/:id?",component:ye}),Object(a.jsx)(o.d,{path:"/admin/userList",component:Te}),Object(a.jsx)(o.d,{path:"/",component:w,exact:!0})]})}),Object(a.jsx)(be,{})]})},Ne=r(33),De=r(75),Ge=r(76),Me=r(18),Fe=Object(Ne.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0,products:[]};case g:return{loading:!1,products:t.payload};case y:return{loading:!1,error:t.payload};default:return e}},productDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(Me.a)({loading:!0},e);case I:return{loading:!1,product:t.payload};case S:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:var r=t.payload,a=e.cartItems.find((function(e){return e.product===r.product}));return a?Object(Me.a)(Object(Me.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?r:e}))}):Object(Me.a)(Object(Me.a)({},e),{},{cartItems:[].concat(Object(A.a)(e.cartItems),[r])});case xe:return Object(Me.a)(Object(Me.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case me:return Object(Me.a)(Object(Me.a)({},e),{},{shippingAddress:t.payload});case fe:return Object(Me.a)(Object(Me.a)({},e),{},{paymentMethod:t.payload});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case Q:return{loading:!1,userInfo:t.payload};case z:return{loading:!1,error:t.payload};case V:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case Y:return{loading:!1,userInfo:t.payload};case W:return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(Me.a)(Object(Me.a)({},e),{},{loading:!0});case Z:return{loading:!1,user:t.payload};case ee:return{loading:!1,error:t.payload};case te:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return{loading:!0};case ae:return{loading:!1,success:!0,userInfo:t.payload};case ne:return{loading:!1,error:t.payload};case ce:return{};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return{loading:!0};case Pe:return{loading:!1,success:!0,order:t.payload};case Re:return{loading:!1,error:t.payload};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return{loading:!0};case se:return{loading:!1,users:t.payload};case ie:return{loading:!1,error:t.payload};case de:return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return{loading:!0};case je:return{loading:!1,success:!0};case le:return{loading:!1,error:t.payload};default:return e}}}),qe=[Ge.a],Be=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],Je=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,$e={cart:{cartItems:Be,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},userLogin:{userInfo:Je}},Qe=Object(Ne.createStore)(Fe,$e,Object(De.composeWithDevTools)(Ne.applyMiddleware.apply(void 0,qe)));s.a.render(Object(a.jsx)(l.a,{store:Qe,children:Object(a.jsx)(Ue,{})}),document.getElementById("root"))},82:function(e,t,r){},83:function(e,t,r){}},[[111,1,2]]]);
//# sourceMappingURL=main.a260f29f.chunk.js.map