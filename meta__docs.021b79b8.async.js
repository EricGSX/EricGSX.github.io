"use strict";(self.webpackChunkspotless_ui=self.webpackChunkspotless_ui||[]).push([[904],{82847:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-badge-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r,d;return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=c.sent,r=i.Badge,d={fontSize:"16px",backgroundColor:"#cccccc",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"},c.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{count:"3",color:"red"},a.createElement("div",{style:d},"Box"))," ","\xA0\xA0",a.createElement(r,{count:"10000",color:"#52c41a"},a.createElement("div",{div:!0,style:d},"Box"))," \xA0\xA0",a.createElement(r,{overflowCount:"10",count:"10000",color:"#faad14"},a.createElement("div",{div:!0,style:d},"Box"))," ","\xA0\xA0")}});case 6:case"end":return c.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-badge-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Badge } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  fontSize: '16px',
  backgroundColor: '#cccccc',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div>
    <Badge count="3" color="red">
      <div style={divStyle}>Box</div>
    </Badge>{' '}
    &nbsp;&nbsp;
    <Badge count="10000" color="#52c41a">
      <div div style={divStyle}>
        Box
      </div>
    </Badge> &nbsp;&nbsp;
    <Badge overflowCount="10" count="10000" color="#faad14">
      <div div style={divStyle}>
        Box
      </div>
    </Badge>{' '}
    &nbsp;&nbsp;
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},81454:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-breadcrumb-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=o.sent,r=i.Breadcrumb,o.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{separator:">",items:[{text:"Home",link:"/"},{text:"Products",link:"/products"},{text:"Category",link:"/products/category"},{text:"Current Page"}]}))}});case 5:case"end":return o.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-breadcrumb-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb } from 'spotless-ui';

export default () => (
  <div>
    <Breadcrumb
      separator=">"
      items={[
        { text: 'Home', link: '/' },
        { text: 'Products', link: '/products' },
        { text: 'Category', link: '/products/category' },
        { text: 'Current Page' },
      ]}
    ></Breadcrumb>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},64527:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-button-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=o.sent,r=i.Button,o.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{type:"primary",text:"Primary"})," \xA0 \xA0",a.createElement(r,{type:"info",text:"Info"})," \xA0 \xA0",a.createElement(r,{type:"success",text:"Success"})," \xA0 \xA0",a.createElement(r,{type:"warning",text:"Warning"})," \xA0 \xA0",a.createElement(r,{type:"danger",text:"Danger"}))}});case 5:case"end":return o.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'spotless-ui';

export default () => (
  <div>
    <Button type="primary" text="Primary"></Button> &nbsp; &nbsp;
    <Button type="info" text="Info"></Button> &nbsp; &nbsp;
    <Button type="success" text="Success"></Button> &nbsp; &nbsp;
    <Button type="warning" text="Warning"></Button> &nbsp; &nbsp;
    <Button type="danger" text="Danger"></Button>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},10247:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-card-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r,d;return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=c.sent,r=i.Card,d={margin:"20px"},c.abrupt("return",{default:function(){return a.createElement("div",{style:d},a.createElement(r,{title:"Default size card",extra:a.createElement("a",{href:"#"},"More")},a.createElement("p",null,"Card content"),a.createElement("p",null,"Card content"),a.createElement("p",null,"Card content")))}});case 6:case"end":return c.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-card-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  margin: '20px',
};

export default () => (
  <div style={divStyle}>
    <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},18819:function(v,n,e){e.r(n),e.d(n,{demos:function(){return t}});var u=e(67294),t={}},18762:function(v,n,e){e.r(n),e.d(n,{demos:function(){return t}});var u=e(67294),t={}},97696:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-ribbon-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r,d;return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=c.sent,r=i.Ribbon,d={fontSize:"16px",height:"30px",lineHeight:"30px",border:"1px solid #ccc",padding:"5px",borderRadius:"4px",marginBottom:"10px"},c.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{text:"Hippies"},a.createElement("div",{style:d},"Where there is a will there is a way")),a.createElement(r,{text:"Hippies",color:"red"},a.createElement("div",{style:d},"Where there is a will there is a way")),a.createElement(r,{text:"Hippies",color:"pink"},a.createElement("div",{style:d},"Where there is a will there is a way")))}});case 6:case"end":return c.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-ribbon-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Ribbon } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  fontSize: '16px',
  height: '30px',
  lineHeight: '30px',
  border: '1px solid #ccc',
  padding: '5px',
  borderRadius: '4px',
  marginBottom: '10px',
};

export default () => (
  <div>
    <Ribbon text="Hippies">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
    <Ribbon text="Hippies" color="red">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
    <Ribbon text="Hippies" color="pink">
      <div style={divStyle}>Where there is a will there is a way</div>
    </Ribbon>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},61595:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-spin-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r,d;return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=c.sent,r=i.Spin,d={height:"200px",display:"flex",alignItems:"center"},c.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{text:"Loading..."},a.createElement("div",{style:d}," Where there's a will, there's a way")))}});case 6:case"end":return c.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-spin-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Spin } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  height: '200px',
  display: 'flex',
  alignItems: 'center',
};

export default () => (
  <div>
    <Spin text="Loading...">
      <div style={divStyle}> Where there's a will, there's a way</div>
    </Spin>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},72566:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-tag-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=o.sent,r=i.Tag,o.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{color:"default",text:"default"})," \xA0",a.createElement(r,{color:"magenta",text:"magenta"})," \xA0",a.createElement(r,{color:"red",text:"red"})," \xA0",a.createElement(r,{color:"volcano",text:"volcano"})," \xA0",a.createElement(r,{color:"orange",text:"orange"})," \xA0",a.createElement(r,{color:"gold",text:"gold"})," \xA0",a.createElement(r,{color:"lime",text:"lime"})," \xA0",a.createElement(r,{color:"green",text:"green"})," \xA0",a.createElement(r,{color:"cyan",text:"cyan"})," \xA0",a.createElement(r,{color:"blue",text:"blue"})," \xA0",a.createElement(r,{color:"geekblue",text:"geekblue"})," \xA0",a.createElement(r,{color:"purple",text:"purple"})," \xA0")}});case 5:case"end":return o.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'spotless-ui';

export default () => (
  <div>
    <Tag color="default" text="default"></Tag> &nbsp;
    <Tag color="magenta" text="magenta"></Tag> &nbsp;
    <Tag color="red" text="red"></Tag> &nbsp;
    <Tag color="volcano" text="volcano"></Tag> &nbsp;
    <Tag color="orange" text="orange"></Tag> &nbsp;
    <Tag color="gold" text="gold"></Tag> &nbsp;
    <Tag color="lime" text="lime"></Tag> &nbsp;
    <Tag color="green" text="green"></Tag> &nbsp;
    <Tag color="cyan" text="cyan"></Tag> &nbsp;
    <Tag color="blue" text="blue"></Tag> &nbsp;
    <Tag color="geekblue" text="geekblue"></Tag> &nbsp;
    <Tag color="purple" text="purple"></Tag> &nbsp;
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}},"docs-components-tag-demo-1":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=o.sent,r=i.Tag,o.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{color:"#f50",text:"#f50"})," \xA0",a.createElement(r,{color:"#2db7f5",text:"#2db7f5"})," \xA0",a.createElement(r,{color:"#87d068",text:"#87d068"})," \xA0",a.createElement(r,{color:"#108ee9",text:"#108ee9"})," \xA0")}});case 5:case"end":return o.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'spotless-ui';

export default () => (
  <div>
    <Tag color="#f50" text="#f50"></Tag> &nbsp;
    <Tag color="#2db7f5" text="#2db7f5"></Tag> &nbsp;
    <Tag color="#87d068" text="#87d068"></Tag> &nbsp;
    <Tag color="#108ee9" text="#108ee9"></Tag> &nbsp;
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},6244:function(v,n,e){e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),t=e.n(u),f=e(17156),p=e.n(f),a=e(67294),x={"docs-components-watermark-demo-0":{component:a.memo(a.lazy(p()(t()().mark(function m(){var i,r;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,56739));case 2:return i=o.sent,r=i.Watermark,o.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(r,{content:"Spotless UI"},a.createElement("div",{style:{height:"300px"}},"Content")))}});case 5:case"end":return o.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-watermark-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Watermark } from 'spotless-ui';

export default () => (
  <div>
    <Watermark content="Spotless UI">
      <div
        style={{
          height: '300px',
        }}
      >
        Content
      </div>
    </Watermark>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.6"}},entry:"index.tsx"},context:{"spotless-ui":e(56739)},renderOpts:{compile:function(){var m=p()(t()().mark(function r(){var d,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,o));case 3:case"end":return l.stop()}},r)}));function i(){return m.apply(this,arguments)}return i}()}}}},69812:function(v,n,e){e.r(n),e.d(n,{demos:function(){return t}});var u=e(67294),t={}},29766:function(v,n,e){e.r(n),e.d(n,{demos:function(){return t}});var u=e(67294),t={}},81487:function(v,n,e){e.r(n),e.d(n,{demos:function(){return t}});var u=e(67294),t={}},56739:function(v,n,e){e.r(n),e.d(n,{Badge:function(){return p},Breadcrumb:function(){return x},Button:function(){return i},Card:function(){return d},Ribbon:function(){return c},Spin:function(){return D},Tag:function(){return j},Watermark:function(){return W}});var u=e(67294),t=e(85893),f=function(s){var I="sptls-badge-sup",y=99,E={};return s.color&&(E.backgroundColor=s.color),s.overflowCount&&(y=s.overflowCount),(0,t.jsxs)("span",{className:"sptls-badge",children:[s.children,(0,t.jsx)("sup",{className:I,style:E,children:s.count>y?"".concat(y,"+"):s.count})]})},p=f,a=function(s){var I="/";return s.separator&&(I=s.separator),(0,t.jsx)("nav",{className:"sptls-breadcrumb",children:(0,t.jsx)("ol",{children:s.items.map(function(y,E){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{children:y.link?(0,t.jsx)("a",{href:y.link,children:y.text}):(0,t.jsx)("span",{children:y.text})},E),(0,t.jsx)("li",{className:"sptls-breadcrumb-separator",children:E===s.items.length-1?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(t.Fragment,{children:I})})]})})})})},x=a,m=function(s){var I="";switch(s.type){case"primary":I="sptls-btn-blue sptls-btn";break;case"info":I="sptls-btn-gray sptls-btn";break;case"success":I="sptls-btn-green sptls-btn";break;case"warning":I="sptls-btn-warning sptls-btn";break;case"danger":I="sptls-btn-red sptls-btn";break;default:I="sptls-btn-gray sptls-btn"}return(0,t.jsx)("button",{type:s.isSubmit===!0?"submit":"button",className:"".concat(I),onClick:s.onClick,children:s.text})},i=m,r=function(s){var I={};return s.bordered===!1&&(I={border:"0px"}),(0,t.jsxs)("div",{className:"sptls-card",style:I,children:[s.isSingle===!0?(0,t.jsx)(t.Fragment,{}):(0,t.jsxs)("div",{className:"sptls-card-header",children:[(0,t.jsx)("div",{className:"sptls-carrd-title",children:s.title}),(0,t.jsx)("div",{className:"sptls-card-extra",children:s.extra})]}),(0,t.jsx)("div",{className:"sptls-card-body",children:s.children})]})},d=r,o=function(s){var I="sptls-ribbon-end";s.placement==="start"&&(I="sptls-ribbon-start"),I+=" item-ribbon-box";var y={};return s.color&&(y={color:s.color,backgroundColor:s.color}),(0,t.jsxs)("div",{className:"sptls-ribbon",children:[s.children,(0,t.jsxs)("div",{style:y,className:I,children:[(0,t.jsx)("span",{className:"sptls-ribbon-text",children:s.text}),(0,t.jsx)("div",{className:"sptls-ribbon-corner"})]})]})},c=o,l=function(s){return(0,t.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"#007bff",children:[(0,t.jsx)("text",{x:"50%",y:"80%",textAnchor:"middle",alignmentBaseline:"middle",fontSize:"16",fill:"#007bff",children:s.text}),(0,t.jsx)("circle",{cx:"10",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"36",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.25s",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"62",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.5s",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"90",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.75s",dur:"1s",repeatCount:"indefinite"})})]})},B=l,M=function(s){return(0,t.jsxs)("div",{className:"sptls-spin",children:[s.children,(0,t.jsx)("div",{className:s.spinning===!1?"":"sptls-spin-container",children:s.spinning===!1?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{children:(0,t.jsx)(B,{text:s.text})})})]})},D=M,R=function(s){var I="sptls-tag",y="",E=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],C=E.find(function(O){return O===s.color}),g;return C?(g={},y="sptls-tag-".concat(s.color)):(g={backgroundColor:s.color,borderColor:s.color},s.color.includes("#")&&(g.color="white")),(0,t.jsx)("span",{onClick:s.onClick,className:[I,y].join(" "),style:g,children:s.text})},j=R,L=function(s){var I="Spotless UI",y=function(O){var P=document.createElement("canvas"),b=P.getContext("2d"),T="#ebebeb";return s.color&&(T=s.color),b?(P.width=200,P.height=100,b.font="16px Arial",b.rotate(-30*Math.PI/180),b.fillStyle=T,b.fillText(O,0,90,100),P.toDataURL()):""},E=y(I),C={backgroundImage:"url('".concat(E,"')")};return(0,t.jsxs)("div",{className:"sptls-watermark",children:[s.children,(0,t.jsx)("div",{className:"sptls-watermark-content",style:C})]})},W=L},63874:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"count",paraId:0,tocIndex:2},{value:"\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u5927\u4E8E overflowCount \u65F6\u663E\u793A\u4E3A ${overflowCount}+\uFF0C\u4E3A 0 \u65F6\u9690\u85CF",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"99",paraId:0,tocIndex:2},{value:"overflowCount",paraId:0,tocIndex:2},{value:"\u5C01\u9876\u7684\u6570\u5B57\u503C",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u5FBD\u6807\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"red",paraId:0,tocIndex:2}]},826:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"separator",paraId:0,tocIndex:2},{value:"separator",paraId:0,tocIndex:2},{value:"ReactNode",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"items",paraId:0,tocIndex:2},{value:"\u8DEF\u7531\u6808\u4FE1\u606F",paraId:0,tocIndex:2},{value:"items[{text: string,link: string}]",paraId:0,tocIndex:2}]},31527:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u6309\u94AE\u6587\u6848",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"type",paraId:0,tocIndex:2},{value:"\u6309\u94AE\u7C7B\u578B ",paraId:0,tocIndex:2},{value:"primary",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"info",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"warning",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"success",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"danger",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"info",paraId:0,tocIndex:2},{value:"isSubmit",paraId:0,tocIndex:2},{value:"\u662F\u5426\u8FDB\u884C\u63D0\u4EA4",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"onClick",paraId:0,tocIndex:2},{value:"\u5BF9\u5916\u66B4\u9732\u7684\u70B9\u51FB\u4E8B\u4EF6",paraId:0,tocIndex:2},{value:"Object",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2}]},74919:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"title",paraId:0,tocIndex:2},{value:"Card \u6807\u9898",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"extra",paraId:0,tocIndex:2},{value:"\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF",paraId:0,tocIndex:2},{value:"ReactNode",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"isSingle",paraId:0,tocIndex:2},{value:"\u662F\u5426\u9690\u85CF\u5361\u7247\u5934\u90E8",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"bordered",paraId:0,tocIndex:2},{value:"\u662F\u5426\u6709\u8FB9\u6846",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"true",paraId:0,tocIndex:2}]},17959:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[]},53190:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[]},8249:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u4E2D\u5C55\u793A\u5185\u5BB9",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"placement",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u4F4D\u7F6E",paraId:0,tocIndex:2},{value:"start",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"end",paraId:0,tocIndex:2},{value:"end",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"#1677ff;",paraId:0,tocIndex:2}]},86032:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u52A0\u8F7D\u4E2D\u6587\u6848",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"spinning",paraId:0,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u52A0\u8F7D\u61C2\u52A8\u753B",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"true",paraId:0,tocIndex:2}]},86657:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"text",paraId:0,tocIndex:3},{value:"Tag \u6587\u6848",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"color",paraId:0,tocIndex:3},{value:"Tag \u989C\u8272 \uFF08\u652F\u6301\u9ED8\u8BA4 color \u4E0E\u81EA\u5B9A\u4E49\u989C\u8272\uFF09",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"closeIcon",paraId:0,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE",paraId:0,tocIndex:3},{value:"boolean",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"onClick",paraId:0,tocIndex:3},{value:"\u5BF9\u5916\u66B4\u9732\u7684\u70B9\u51FB\u4E8B\u4EF6",paraId:0,tocIndex:3},{value:"Object",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3}]},95244:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"content",paraId:0,tocIndex:2},{value:"\u6C34\u5370\u5185\u5BB9",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"Spotless UI",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u6C34\u5370\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"#ebebeb",paraId:0,tocIndex:2}]},74610:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"SPTLS. \u5168\u79F0 Spotless UI \u57FA\u4E8E React\u3001 TS \u3001Less \u6253\u9020\u7684\u65E0\u9700\u4F9D\u8D56\u7B2C\u4E09\u65B9 UI \u5E93\uFF0C\u652F\u6301\u6309\u9700\u5BFC\u5165\u3002",paraId:0,tocIndex:0},{value:"\u5982\u679C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u3001\u6216\u8005\u6709\u6539\u5584\u5EFA\u8BAE\uFF0C\u6B22\u8FCE\u5728 GitHub Issues \u8FDB\u884C\u53CD\u9988\uFF1A",paraId:1,tocIndex:2},{value:"\u8054\u7CFB\u6211\u4EEC",paraId:1,tocIndex:2}]},3234:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[]},29110:function(v,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[]}}]);
