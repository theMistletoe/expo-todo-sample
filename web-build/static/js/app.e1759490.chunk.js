(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var a=n(0),r=n.n(a),i=n(3),o=n(2),c=n(33),l=n(16),s=n(97),u=n(50),d=n(57),f=function(e){return{type:"UPDATE_TASK",task:e}},m=function(e){return{type:"DELETE_TASK",id:e}},p=i.a.create({container:{flex:1,flexDirection:"row"},item:{padding:10,fontSize:18,height:44}}),g=function(e){var t=Object(l.useNavigation)(),n=Object(c.b)();return r.a.createElement(o.a,{style:p.container},r.a.createElement(d.a,{style:p.item,key:e.index,onPress:function(){t.navigate("Detail",{id:e.task.id})}},e.task.title),r.a.createElement(u.a,{title:"Delete",onPress:function(){n(m(e.task.id)),t.navigate("Home")}}))},b=(i.a.create({item:{padding:10,fontSize:18,height:44}}),function(e){Object(l.useNavigation)();return r.a.createElement(s.a,{data:e.tasks,renderItem:function(e){var t=e.item,n=e.index;return r.a.createElement(g,{task:t,index:n})}})}),E=n(6),h=n.n(E),y=n(31),O=function(){var e=Object(c.b)(),t=Object(a.useState)(""),n=h()(t,2),i=n[0],l=n[1];return r.a.createElement(o.a,null,r.a.createElement(y.a,{style:{height:40},placeholder:"Type Task Title here!",onChangeText:function(e){return l(e)},value:i}),r.a.createElement(u.a,{title:"Save",onPress:function(){e({type:"ADD_TASK",title:i}),l("")}}))};function v(){var e=Object(c.c)((function(e){return e}));return r.a.createElement(o.a,{style:k.container},r.a.createElement(O,null),r.a.createElement(b,{tasks:e.todos}))}var k=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},item:{padding:10,fontSize:18,height:44},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},openButton:{backgroundColor:"#F194FF",borderRadius:20,padding:10,elevation:2},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"center"}}),j=n(4),w=n.n(j);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},item:{padding:10,fontSize:18,height:44},itemdesc:{padding:10,fontSize:18,height:80}}),D=function(e){var t=Object(l.useNavigation)(),n=Object(c.b)();return r.a.createElement(o.a,{style:S.container},r.a.createElement(y.a,{style:S.item,onChangeText:function(t){var a=x(x({},e.task),{},{title:t});n(f(a))},value:e.task.title}),r.a.createElement(y.a,{multiline:!0,numberOfLines:4,style:S.itemdesc,onChangeText:function(t){var a=x(x({},e.task),{},{description:t});n(f(a))},value:e.task.description}),r.a.createElement(o.a,{style:{flex:1,flexDirection:"row"}},r.a.createElement(o.a,{style:S.item},r.a.createElement(u.a,{title:"close",onPress:e.handlePress})),r.a.createElement(o.a,{style:S.item},r.a.createElement(u.a,{color:"red",title:"Delete",onPress:function(){n(m(e.task.id)),t.navigate("Home")}}))))};function P(e){var t=e.route,n=Object(l.useNavigation)(),a=Object(c.c)((function(e){return e})),i=t.params.id,s=a.todos.find((function(e){return e.id===i}));return r.a.createElement(o.a,{style:C.container},r.a.createElement(D,{task:s,handlePress:function(){n.goBack()}}))}var C=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),_=n(206),A=n(131),z=n(47),N=n(11),I=n.n(N),K=[{id:"xxx",title:"Task1",description:"description1"},{id:"yyy",title:"Task2",description:"description2"},{id:"zzz",title:"Task3",description:"description3"}],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var n={id:Math.random().toString(32).substring(2),title:t.title,description:""};return[].concat(I()(e),[n]);case"DELETE_TASK":var a=e.filter((function(e){return e.id!==t.id}));return a;case"UPDATE_TASK":var r=e.slice();return r.find((function(e){return e.id===t.task.id})).title=t.task.title,r.find((function(e){return e.id===t.task.id})).description=t.task.description,r;default:return e}},H=Object(z.c)({todos:R}),L="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,B=Object(z.e)(H,L(z.a.apply(void 0,[]))),F=Object(_.a)();function U(){return r.a.createElement(c.a,{store:B},r.a.createElement(A.a,null,r.a.createElement(F.Navigator,{initialRouteName:"Home"},r.a.createElement(F.Screen,{name:"Home",component:v}),r.a.createElement(F.Screen,{name:"Detail",component:P}))))}},164:function(e,t,n){e.exports=n(203)}},[[164,1,2]]]);
//# sourceMappingURL=app.e1759490.chunk.js.map