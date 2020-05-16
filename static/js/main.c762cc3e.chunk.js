(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/todoLogo.ff2edf2e.svg"},17:function(e,t,a){e.exports=a.p+"static/media/checklist-icon.a42c0957.png"},19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(24),a(1)),s=a.n(o),l=a(18),m=a(6),u=a(2),d=a(3),p=a(5),f=a(4),h=a(15),g=a.n(h),v=(a(26),{height:"20vh",width:"80%",margin:"0 auto"}),b=function(e){var t=e.todoLogo;return r.a.createElement("header",null,r.a.createElement("div",{className:"header-container",style:v},r.a.createElement("img",{src:t,alt:"todoLogo",height:"100%",width:"100%"})))},E=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentItem,a=e.handleChange,n=e.handleSubmit,c=e.edit;return r.a.createElement("form",{className:"form-container",onSubmit:n},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",required:!0,id:t.id,value:t.text,onChange:a}),r.a.createElement("label",{htmlFor:"name",className:"label-name"},r.a.createElement("span",{className:"content-name"},"Enter Task"))),r.a.createElement("button",{type:"submit",className:c?"btn-edit btn":"btn-add btn"},c?"Edit":"Add"))}}]),a}(n.Component),I=a(16),x=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.text,n=e.deleteItem,c=e.editItem,i=e.completedItem;return r.a.createElement(I.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement("li",{className:"todo-item"},r.a.createElement("p",{onClick:i,className:"todo-item-text"+(t.completed?" completed-item":"")},a),r.a.createElement("div",{className:"todo-icon"},t.completed?null:r.a.createElement("span",{className:"edit-icon icon",onClick:c},r.a.createElement("i",{className:"fas fa-pen"})),r.a.createElement("span",{className:"delete-icon icon",onClick:n},r.a.createElement("i",{className:"fas fa-trash"})))))}))}}]),a}(n.Component),O=a(17),y=a.n(O),S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearAll,n=e.deleteItem,c=e.editItem,i=e.completedItem,o=t.length?t.map((function(e){return r.a.createElement(x,{item:e,key:e.id,text:e.text,deleteItem:function(){return n(e.id)},editItem:function(){return c(e.id)},completedItem:function(){return i(e)}})})):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:y.a,alt:"checklist icon",height:"80px"}),r.a.createElement("h1",{className:"empty-todo-title"},"Add your first ToDo!")),s=t.length?r.a.createElement("h1",{className:"task-title"},"Your Tasks"):null,l=t.length?r.a.createElement("button",{className:"btn-clear-all",onClick:a},"Clear All"):null;return r.a.createElement("ul",{className:"todo-list-container"},s,o,l)}}]),a}(n.Component),N=a(7),k=a.n(N),j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({currentItem:{id:e.target.id,text:e.target.value,completed:!1}})},n.handleSubmit=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===(a=n.state.currentItem).text){e.next=8;break}return r=[].concat(Object(l.a)(n.state.items),[a]),e.next=6,n.setState({items:r,currentItem:{id:k()(),text:"",completed:!1},edit:!1});case 6:localStorage.setItem("todos",JSON.stringify(n.state.items)),console.log(localStorage.getItem("todos"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.clearAll=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({items:[]});case 2:localStorage.setItem("todos",JSON.stringify(n.state.items));case 3:case"end":return e.stop()}}),e)}))),n.deleteItem=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.items.filter((function(e){return e.id!==t})),e.next=3,n.setState({items:a});case 3:localStorage.setItem("todos",JSON.stringify(n.state.items));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.editItem=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.items.filter((function(e){return e.id!==t})),r=n.state.items.find((function(e){return e.id===t})),console.log(r),e.next=5,n.setState({items:a,currentItem:{id:t,text:r.text,completed:!1},edit:!0});case 5:n.state.edit||localStorage.setItem("todos",JSON.stringify(n.state.items));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.completedItem=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.items.map((function(e){return t.id===e.id?{id:t.id,text:t.text,completed:!t.completed}:e})),e.next=3,n.setState({items:a});case 3:localStorage.setItem("todos",JSON.stringify(n.state.items));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=function(){var e=localStorage.getItem("todos");if(e){var t=JSON.parse(e);n.setState({items:t})}else localStorage.setItem("todos",JSON.stringify(n.state.items)),console.log("NO todos")},n.state={items:[{id:k()(),text:"Testing",completed:!1}],currentItem:{id:k()(),text:"",completed:!1},edit:!1},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{todoLogo:g.a}),r.a.createElement("section",{className:"container"},r.a.createElement(E,{currentItem:this.state.currentItem,handleChange:this.handleChange,handleSubmit:this.handleSubmit,edit:this.state.edit}),r.a.createElement(S,{items:this.state.items,clearAll:this.clearAll,deleteItem:this.deleteItem,editItem:this.editItem,completedItem:this.completedItem})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c762cc3e.chunk.js.map