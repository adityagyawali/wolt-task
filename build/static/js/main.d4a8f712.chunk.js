(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,a,t){e.exports={landing__page:"LandingPage_landing__page__1dW88",user_location:"LandingPage_user_location__1MRxK",location:"LandingPage_location__1foNj",location_search:"LandingPage_location_search__18f79",landing__page__content:"LandingPage_landing__page__content__27SFv",landing__page__title:"LandingPage_landing__page__title__31i0y",title__content:"LandingPage_title__content__7za5p",active:"LandingPage_active__3BbGE",hidden:"LandingPage_hidden__2efXP",landing__page__link:"LandingPage_landing__page__link__3-56D",landing__page__button:"LandingPage_landing__page__button__3Nl7a",landing__page__subtitle:"LandingPage_landing__page__subtitle__2bdnm"}},13:function(e,a,t){e.exports={navbar__container:"NavBar_navbar__container__1AAXj",navbar:"NavBar_navbar__2uzlO",navbar__logo:"NavBar_navbar__logo__38t4S",logo:"NavBar_logo__1bkAq",user:"NavBar_user__2TUgn",user__login:"NavBar_user__login__clkOV",user__signup:"NavBar_user__signup__-QLiG",user__mobile:"NavBar_user__mobile__1pSx_",user__logo:"NavBar_user__logo__2kjeD"}},14:function(e,a,t){e.exports={restaurants__container:"Restaurants_restaurants__container__1cKUA",restaurants__header:"Restaurants_restaurants__header__36H4C",restaurants__link:"Restaurants_restaurants__link__1mV-G",restaurants__carousel:"Restaurants_restaurants__carousel__2G2-q",restaurant:"Restaurants_restaurant__3ieYZ"}},19:function(e,a,t){e.exports={discover_page:"NotFound_discover_page__3THGt",info:"NotFound_info__1skob",address:"NotFound_address__1KXvw"}},4:function(e,a,t){e.exports={container:"DiscoveryRestaurants_container__1Bays",title:"DiscoveryRestaurants_title__1uF4q",total_restaurants:"DiscoveryRestaurants_total_restaurants__1QTEU",restaurants:"DiscoveryRestaurants_restaurants__2ydNV",restaurant_card_container:"DiscoveryRestaurants_restaurant_card_container__kA00P",restaurant__card:"DiscoveryRestaurants_restaurant__card__NyBqK",restaurant__image:"DiscoveryRestaurants_restaurant__image___6AsM",image_wrap:"DiscoveryRestaurants_image_wrap__Sb4bt",restaurant__status:"DiscoveryRestaurants_restaurant__status__1DoO5",restaurant__info:"DiscoveryRestaurants_restaurant__info__vSqi0",restaurant__name:"DiscoveryRestaurants_restaurant__name__1ZIfG",restaurant__desc:"DiscoveryRestaurants_restaurant__desc__3Vdoq",restaurant__rating:"DiscoveryRestaurants_restaurant__rating__773lH",rating__emoji:"DiscoveryRestaurants_rating__emoji__2H9cc"}},53:function(e,a,t){},73:function(e,a,t){},9:function(e,a,t){e.exports={restaurant__card:"Restaurant_restaurant__card__14ccF",restaurant__image:"Restaurant_restaurant__image__2SS_W",image_wrap:"Restaurant_image_wrap__31pFZ",restaurant__status:"Restaurant_restaurant__status__3yk74",restaurant__info:"Restaurant_restaurant__info__b7KI1",restaurant__name:"Restaurant_restaurant__name__1rjzM",restaurant__desc:"Restaurant_restaurant__desc__1MHib",restaurant__rating:"Restaurant_restaurant__rating__2S3lY",rating__emoji:"Restaurant_rating__emoji__38dke"}},98:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),r=t.n(s),c=t(44),_=t.n(c),i=(t(53),t(16)),o=t.n(i),l=t(21),u=t(11),d=t(2),j=t(22),b=t.n(j),g=(t(73),t(30)),m=t(14),h=t.n(m),p=t(10),x=t(45),O=t.n(x),v=(t(40),t(41),t(23)),f=t(9),N=t.n(f),y=t.p+"static/media/excellent_emoji.022b75f5.svg",R=t.p+"static/media/good_emoji.2d3854fd.svg",w=function(e){var a=e.restaurant;return Object(n.jsxs)("div",{className:N.a.restaurant__card,children:[Object(n.jsx)("div",{className:N.a.restaurant__image,children:Object(n.jsx)(v.a,{hash:a.blurhash,height:300,resolutionX:32,resolutionY:32,punch:1,style:{width:"100%",minWidth:300}})}),Object(n.jsx)("div",{className:N.a.restaurant__info,children:Object(n.jsx)("p",{className:N.a.restaurant__name,children:a.name})}),Object(n.jsxs)("div",{className:N.a.restaurant__desc,children:[Object(n.jsx)("div",{className:N.a.restaurant__currency,children:"\u20ac\u20ac \xa0\xb7\xa0"}),Object(n.jsx)("div",{children:a.online?Object(n.jsx)("span",{style:{color:"green",fontSize:"1rem"},children:"Open"}):Object(n.jsx)("span",{style:{color:"red",fontSize:"1rem"},children:"Closed"})}),Object(n.jsxs)("div",{className:N.a.restaurant__rating,children:[Object(n.jsx)("div",{className:N.a.rating__icon,children:Number((10*a.popularity).toFixed(1))>=8?Object(n.jsx)("img",{className:N.a.rating__emoji,src:y,alt:"excellent"}):Object(n.jsx)("img",{className:N.a.rating__emoji,src:R,alt:"good"})}),Object(n.jsx)("p",{className:N.a.rating__number,children:(10*a.popularity).toFixed(1)})]})]})]})},S=function(e){var a=e.sections,t={arrows:!0,infinite:!0,dots:!1,speed:500,slidesToShow:3,slidesToScroll:1,centerPadding:"10px",rows:1,responsive:[{breakpoint:1024,settings:{arrows:!0,slidesToShow:3}},{breakpoint:900,settings:{arrows:!0,slidesToShow:2}},{breakpoint:600,settings:{arrows:!0,slidesToShow:1}}]};return Object(n.jsx)("div",{className:h.a.restaurants__container,children:a.map((function(e){var a=e.title,s=e.restaurants;return Object(n.jsxs)("div",{className:h.a.restaurants,children:[Object(n.jsxs)("div",{className:h.a.restaurants__header,children:[Object(n.jsx)("h3",{className:h.a.restaurants__title,children:a}),Object(n.jsx)(p.b,{className:h.a.restaurants__link,to:a.toLowerCase().replace(" ","-"),children:Object(n.jsxs)("p",{className:h.a.restaturants__total,children:["All(",s.length,")"]})})]}),Object(n.jsx)(O.a,Object(g.a)(Object(g.a)({},t),{},{className:h.a.restaurants__carousel,children:s.map((function(e){return Object(n.jsx)(p.b,{to:"/restaurant/".concat(e.name.toLocaleLowerCase().replaceAll(" ","-")),children:Object(n.jsx)("div",{className:h.a.restaurant,children:Object(n.jsx)(w,{restaurant:e})},e.name)})}))}))]},a)}))})},k=t(12),L=t.n(k),P=function(){var e=Object(s.useState)(0),a=Object(u.a)(e,2),t=a[0],r=a[1],c=["From your favourite restaurant to your home!","Hungry after a jog?","Friends coming over?","Pre-order for tomorrow?"];return Object(s.useEffect)((function(){var e=setInterval((function(){r(t<c.length-1?t+1:0)}),3e3);return function(){return clearInterval(e)}}),[t,c.length]),Object(n.jsx)("div",{className:L.a.landing__page,children:Object(n.jsxs)("div",{className:L.a.landing__page__content,children:[Object(n.jsx)("div",{className:L.a.landing__page__title,children:c.map((function(e,a){return Object(n.jsx)("h1",{className:"".concat(L.a.title__content,", ").concat(a===t?L.a.active:L.a.hidden),children:e},e)}))}),Object(n.jsx)("p",{className:L.a.landing__page__subtitle,children:"DISCOVER RESTAURANTS IN"}),Object(n.jsx)(p.c,{className:L.a.landing__page__link,to:"/restaurants",children:Object(n.jsx)("button",{className:L.a.landing__page__button,children:"Helsinki"})})]})})},D=t.p+"static/media/no_location_found.e58be91c.svg",F=t(19),B=t.n(F),T=function(){return Object(n.jsxs)("div",{className:B.a.discover_page,children:[Object(n.jsx)("div",{className:B.a.no_address_img,children:Object(n.jsx)("img",{src:D,alt:"no address found"})}),Object(n.jsx)("p",{className:B.a.info,children:"Hey! Looks like you are in wrong place \ud83d\ude0c"}),Object(n.jsx)("p",{className:B.a.sub_info,children:"Please go to homepage to see restaurants in Helsinki region."}),Object(n.jsx)("p",{children:"Right now we are only open in Helsinki area. We are planning to extend our service in many other regions soon."})]})},A=t.p+"static/media/wolt_logo_black.64e7d03e.svg",C=t.p+"static/media/user.f58d0f0d.svg",H=t(13),E=t.n(H),I=function(){return Object(n.jsx)("div",{className:E.a.navbar__container,children:Object(n.jsxs)("div",{className:E.a.navbar,children:[Object(n.jsx)(p.b,{to:"/",children:Object(n.jsx)("div",{className:E.a.navbar__logo,children:Object(n.jsx)("img",{className:E.a.logo,src:A,alt:"wolt logo"})})}),Object(n.jsxs)("div",{className:E.a.user,children:[Object(n.jsx)("p",{className:E.a.user__login,children:"Login"}),Object(n.jsx)("p",{className:E.a.user__signup,children:"Signup"})]}),Object(n.jsx)("div",{className:E.a.user__mobile,children:Object(n.jsx)("img",{src:C,alt:"user logo",className:E.a.user__logo})})]})})},z=t(4),q=t.n(z),G=function(e){var a=e.allRestaurants;return Object(n.jsx)(n.Fragment,{children:a.map((function(e){var a=e.title,t=e.restaurants;return Object(n.jsxs)("div",{className:q.a.container,children:[Object(n.jsx)("div",{className:q.a.title,children:Object(n.jsx)("h3",{children:a})}),Object(n.jsx)("div",{"data-restaurant-id":a.toLowerCase().replace(" ","-"),className:q.a.restaurants,children:t.map((function(e){return Object(n.jsxs)("div",{className:q.a.restaurant__card,children:[Object(n.jsx)("div",{className:q.a.restaurant__image,children:Object(n.jsx)(v.a,{hash:e.blurhash,height:300,resolutionX:32,resolutionY:32,punch:1,style:{width:"100%",minWidth:300}})}),Object(n.jsx)("div",{className:q.a.restaurant__info,children:Object(n.jsx)("p",{className:q.a.restaurant__name,children:e.name})}),Object(n.jsxs)("div",{className:q.a.restaurant__desc,children:[Object(n.jsx)("div",{className:q.a.restaurant__currency,children:"\u20ac\u20ac \xa0\xb7\xa0"}),Object(n.jsx)("div",{children:e.online?Object(n.jsx)("span",{style:{color:"green",fontSize:"1rem"},children:"Open"}):Object(n.jsx)("span",{style:{color:"red",fontSize:"1rem"},children:"Closed"})}),Object(n.jsxs)("div",{className:q.a.restaurant__rating,children:[Object(n.jsx)("div",{className:q.a.rating__icon,children:Number((10*e.popularity).toFixed(1))>=8?Object(n.jsx)("img",{className:q.a.rating__emoji,src:y,alt:"excellent"}):Object(n.jsx)("img",{className:q.a.rating__emoji,src:R,alt:"good"})}),Object(n.jsx)("p",{className:q.a.rating__number,children:(10*e.popularity).toFixed(1)})]})]})]})}))})]},a)}))})},K=function(){var e=Object(s.useState)(),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(d.f)().name;return console.log({name:c}),Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/discovery/".concat(c));case 3:a=e.sent,t=a.data,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsx)("h1",{children:null===t||void 0===t?void 0:t.name})},M=function(){var e=Object(s.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(s.useState)(!0),_=Object(u.a)(c,2),i=_[0],j=_[1],g=Object(s.useState)([]),m=Object(u.a)(g,2),h=m[0],p=m[1],x=Object(s.useState)([]),O=Object(u.a)(x,2),v=O[0],f=O[1],N=Object(s.useState)([]),y=Object(u.a)(N,2),R=y[0],w=y[1],k=function(e,a){return e.filter((function(e){return e.title===a}))};return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/discovery?lat=60.1709&lon=24.941");case 3:a=e.sent,t=a.data,r(t),j(!1),e.next=14;break;case 9:if(e.prev=9,e.t0=e.catch(0),console.log("running",e.t0.response.status),404!==e.t0.response.status){e.next=14;break}return e.abrupt("return",j(!0));case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){var e=k(t,"Nearby Restaurants"),a=k(t,"New Restaurants"),n=k(t,"Popular Restaurants");p(e),f(a),w(n)}),[t]),i?Object(n.jsx)("h1",{children:"Loading ...."}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",children:Object(n.jsx)(P,{})}),Object(n.jsx)(d.a,{exact:!0,path:"/nearby-restaurants",children:Object(n.jsx)(G,{allRestaurants:h})}),Object(n.jsx)(d.a,{exact:!0,path:"/new-restaurants",children:Object(n.jsx)(G,{allRestaurants:v})}),Object(n.jsx)(d.a,{exact:!0,path:"/popular-restaurants",children:Object(n.jsx)(G,{allRestaurants:R})}),Object(n.jsx)(d.a,{exact:!0,path:"/restaurants",children:Object(n.jsx)(S,{sections:t})}),Object(n.jsx)(d.a,{exact:!0,path:"/restaurant/:name",children:Object(n.jsx)(K,{})}),Object(n.jsx)(d.a,{component:T})]})})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,99)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),r(e),c(e)}))};_.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(p.a,{children:Object(n.jsx)(M,{})})}),document.getElementById("root")),V()}},[[98,1,2]]]);
//# sourceMappingURL=main.d4a8f712.chunk.js.map