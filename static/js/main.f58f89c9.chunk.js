(this.webpackJsonpempapp=this.webpackJsonpempapp||[]).push([[0],{4:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(13),c=s.n(a),i=(s(4),s(14)),l=s(15),o=s(18),j=s(17),d=s(16),h=s.n(d),u=function(){return h.a.get("https://randomuser.me/api/?results=50")},b=(s(41),s(0)),m=function(e){return Object(b.jsx)("form",{children:Object(b.jsx)("div",{className:"form-group search-widget",children:Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search Employee",id:"search"})})})})};s(43);var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"jumboTron",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"display-4",children:[Object(b.jsx)("i",{className:"fas fa-user-friends"})," ",Object(b.jsx)("b",{children:"Company Directory"})]}),Object(b.jsx)("p",{className:"lead",children:"Search by first or last name or select a column heading to sort."})]})})})},x=(s(44),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={results:[],search:"",sortOrder:""},e.sortByFirstName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLastName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.handleInputChange=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){e.setState({results:t.data.results})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table table-striped table-resposive text-center table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Image"}),Object(b.jsxs)("th",{children:["First Name"," ",Object(b.jsx)("span",{className:"downArrow",onClick:this.sortByFirstName})]}),Object(b.jsxs)("th",{children:["Last Name"," ",Object(b.jsx)("span",{className:"downArrow",onClick:this.sortByLastName})]}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"})]})}),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(b.jsx)("td",{children:t.name.first}),Object(b.jsx)("td",{children:t.name.last}),Object(b.jsx)("td",{children:t.phone}),Object(b.jsx)("td",{children:t.email})]})},t.login.uuid):t.name.last.toLowerCase().includes(e.state.search)?Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(b.jsx)("td",{children:t.name.first}),Object(b.jsx)("td",{children:t.name.last}),Object(b.jsxs)("td",{children:[t.phone," "]}),Object(b.jsx)("td",{children:t.email})]})},t.login.uuid):null}))]})})]})}}]),s}(r.Component)),p=(s(45),function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{})})}),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.f58f89c9.chunk.js.map