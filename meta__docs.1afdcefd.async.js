"use strict";(self.webpackChunkspotless_ui=self.webpackChunkspotless_ui||[]).push([[904],{82847:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-badge-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=u.sent,a=o.Badge,s={fontSize:"16px",backgroundColor:"#cccccc",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"},u.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{count:"3",color:"red"},n.createElement("div",{style:s},"Box"))," ","\xA0\xA0",n.createElement(a,{count:"10000",color:"#52c41a"},n.createElement("div",{div:!0,style:s},"Box"))," \xA0\xA0",n.createElement(a,{overflowCount:"10",count:"10000",color:"#faad14"},n.createElement("div",{div:!0,style:s},"Box"))," ","\xA0\xA0")}});case 6:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-badge-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Badge } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},81454:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-breadcrumb-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=r.sent,a=o.Breadcrumb,r.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{separator:">",items:[{text:"Home",link:"/"},{text:"Products",link:"/products"},{text:"Category",link:"/products/category"},{text:"Current Page"}]}))}});case 5:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-breadcrumb-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},64527:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-button-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=r.sent,a=o.Button,r.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{type:"primary",text:"Primary"})," \xA0 \xA0",n.createElement(a,{type:"info",text:"Info"})," \xA0 \xA0",n.createElement(a,{type:"success",text:"Success"})," \xA0 \xA0",n.createElement(a,{type:"warning",text:"Warning"})," \xA0 \xA0",n.createElement(a,{type:"danger",text:"Danger"}))}});case 5:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'spotless-ui';

export default () => (
  <div>
    <Button type="primary" text="Primary"></Button> &nbsp; &nbsp;
    <Button type="info" text="Info"></Button> &nbsp; &nbsp;
    <Button type="success" text="Success"></Button> &nbsp; &nbsp;
    <Button type="warning" text="Warning"></Button> &nbsp; &nbsp;
    <Button type="danger" text="Danger"></Button>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},10247:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-card-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=u.sent,a=o.Card,s={margin:"20px"},u.abrupt("return",{default:function(){return n.createElement("div",{style:s},n.createElement(a,{title:"Default size card",extra:n.createElement("a",{href:"#"},"More")},n.createElement("p",null,"Card content"),n.createElement("p",null,"Card content"),n.createElement("p",null,"Card content")))}});case 6:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-card-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},18819:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-icon-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=l.sent,a=o.Icon,s={columnCount:5,columnGap:0},r={padding:"20px",display:"flex",alignItems:"center",justifyContent:"center"},l.abrupt("return",{default:function(){return n.createElement("div",{style:s},n.createElement("div",{style:r},n.createElement(a,{name:"StepBackwardOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"StepForwardOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"FastBackwardOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"FastForwardOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"ShrinkOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"ArrowsAltOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"DownOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"UpOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"LeftOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"RightOutlined",size:60})))}});case 7:case"end":return l.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Icon } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  columnCount: 5,
  columnGap: 0,
};

const childStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div style={divStyle}>
    <div style={childStyle}>
      <Icon name="StepBackwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="StepForwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="FastBackwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="FastForwardOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ShrinkOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ArrowsAltOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="DownOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="UpOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="LeftOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="RightOutlined" size={60}></Icon>
    </div>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"docs-components-icon-demo-1":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=l.sent,a=o.Icon,s={columnCount:5,columnGap:0},r={padding:"20px",display:"flex",alignItems:"center",justifyContent:"center"},l.abrupt("return",{default:function(){return n.createElement("div",{style:s},n.createElement("div",{style:r},n.createElement(a,{name:"QuestionOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"QuestionCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"PlusOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"PlusCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"MinusOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"MinusCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"InfoCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"CloseOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"CheckOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"CloseSquareOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"CheckCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"CheckSquareOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"WarningOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"ClockCircleOutlined",size:60})),n.createElement("div",{style:r},n.createElement(a,{name:"ExclamationOutlined",size:60})))}});case 7:case"end":return l.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Icon } from 'spotless-ui';

const divStyle: React.CSSProperties = {
  columnCount: 5,
  columnGap: 0,
};

const childStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default () => (
  <div style={divStyle}>
    <div style={childStyle}>
      <Icon name="QuestionOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="QuestionCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="PlusOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="PlusCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="MinusOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="MinusCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="InfoCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CloseOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CloseSquareOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="CheckSquareOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="WarningOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ClockCircleOutlined" size={60}></Icon>
    </div>
    <div style={childStyle}>
      <Icon name="ExclamationOutlined" size={60}></Icon>
    </div>
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},18762:function(I,d,e){e.r(d),e.d(d,{demos:function(){return t}});var c=e(67294),t={}},97696:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-ribbon-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=u.sent,a=o.Ribbon,s={fontSize:"16px",height:"30px",lineHeight:"30px",border:"1px solid #ccc",padding:"5px",borderRadius:"4px",marginBottom:"10px"},u.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{text:"Hippies"},n.createElement("div",{style:s},"Where there is a will there is a way")),n.createElement(a,{text:"Hippies",color:"red"},n.createElement("div",{style:s},"Where there is a will there is a way")),n.createElement(a,{text:"Hippies",color:"pink"},n.createElement("div",{style:s},"Where there is a will there is a way")))}});case 6:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-ribbon-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Ribbon } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},61595:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-spin-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a,s;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=u.sent,a=o.Spin,s={height:"200px",display:"flex",alignItems:"center"},u.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{text:"Loading..."},n.createElement("div",{style:s}," Where there's a will, there's a way")))}});case 6:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-spin-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Spin } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},72566:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-tag-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=r.sent,a=o.Tag,r.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{color:"default",text:"default"})," \xA0",n.createElement(a,{color:"magenta",text:"magenta"})," \xA0",n.createElement(a,{color:"red",text:"red"})," \xA0",n.createElement(a,{color:"volcano",text:"volcano"})," \xA0",n.createElement(a,{color:"orange",text:"orange"})," \xA0",n.createElement(a,{color:"gold",text:"gold"})," \xA0",n.createElement(a,{color:"lime",text:"lime"})," \xA0",n.createElement(a,{color:"green",text:"green"})," \xA0",n.createElement(a,{color:"cyan",text:"cyan"})," \xA0",n.createElement(a,{color:"blue",text:"blue"})," \xA0",n.createElement(a,{color:"geekblue",text:"geekblue"})," \xA0",n.createElement(a,{color:"purple",text:"purple"})," \xA0")}});case 5:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"docs-components-tag-demo-1":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=r.sent,a=o.Tag,r.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{color:"#f50",text:"#f50"})," \xA0",n.createElement(a,{color:"#2db7f5",text:"#2db7f5"})," \xA0",n.createElement(a,{color:"#87d068",text:"#87d068"})," \xA0",n.createElement(a,{color:"#108ee9",text:"#108ee9"})," \xA0")}});case 5:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'spotless-ui';

export default () => (
  <div>
    <Tag color="#f50" text="#f50"></Tag> &nbsp;
    <Tag color="#2db7f5" text="#2db7f5"></Tag> &nbsp;
    <Tag color="#87d068" text="#87d068"></Tag> &nbsp;
    <Tag color="#108ee9" text="#108ee9"></Tag> &nbsp;
  </div>
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},6244:function(I,d,e){e.r(d),e.d(d,{demos:function(){return y}});var c=e(17061),t=e.n(c),f=e(17156),v=e.n(f),n=e(67294),y={"docs-components-watermark-demo-0":{component:n.memo(n.lazy(v()(t()().mark(function m(){var o,a;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,66453));case 2:return o=r.sent,a=o.Watermark,r.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(a,{content:"Spotless UI"},n.createElement("div",{style:{height:"300px"}},"Content")))}});case 5:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-components-watermark-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Watermark } from 'spotless-ui';

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
);`},"spotless-ui":{type:"NPM",value:"0.2.7"}},entry:"index.tsx"},context:{"spotless-ui":e(66453)},renderOpts:{compile:function(){var m=v()(t()().mark(function a(){var s,r=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(19).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,r));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},69812:function(I,d,e){e.r(d),e.d(d,{demos:function(){return t}});var c=e(67294),t={}},29766:function(I,d,e){e.r(d),e.d(d,{demos:function(){return t}});var c=e(67294),t={}},81487:function(I,d,e){e.r(d),e.d(d,{demos:function(){return t}});var c=e(67294),t={}},66453:function(I,d,e){e.r(d),e.d(d,{Badge:function(){return v},Breadcrumb:function(){return y},Button:function(){return o},Card:function(){return s},Icon:function(){return b},Ribbon:function(){return B},Spin:function(){return R},Tag:function(){return W},Watermark:function(){return K}});var c=e(67294),t=e(85893),f=function(i){var p="sptls-badge-sup",x=99,h={};return i.color&&(h.backgroundColor=i.color),i.overflowCount&&(x=i.overflowCount),(0,t.jsxs)("span",{className:"sptls-badge",children:[i.children,(0,t.jsx)("sup",{className:p,style:h,children:i.count>x?"".concat(x,"+"):i.count})]})},v=f,n=function(i){var p="/";return i.separator&&(p=i.separator),(0,t.jsx)("nav",{className:"sptls-breadcrumb",children:(0,t.jsx)("ol",{children:i.items.map(function(x,h){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{children:x.link?(0,t.jsx)("a",{href:x.link,children:x.text}):(0,t.jsx)("span",{children:x.text})},h),(0,t.jsx)("li",{className:"sptls-breadcrumb-separator",children:h===i.items.length-1?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(t.Fragment,{children:p})})]})})})})},y=n,m=function(i){var p="";switch(i.type){case"primary":p="sptls-btn-blue sptls-btn";break;case"info":p="sptls-btn-gray sptls-btn";break;case"success":p="sptls-btn-green sptls-btn";break;case"warning":p="sptls-btn-warning sptls-btn";break;case"danger":p="sptls-btn-red sptls-btn";break;default:p="sptls-btn-gray sptls-btn"}return(0,t.jsx)("button",{type:i.isSubmit===!0?"submit":"button",className:"".concat(p),onClick:i.onClick,children:i.text})},o=m,a=function(i){var p={};return i.bordered===!1&&(p={border:"0px"}),(0,t.jsxs)("div",{className:"sptls-card",style:p,children:[i.isSingle===!0?(0,t.jsx)(t.Fragment,{}):(0,t.jsxs)("div",{className:"sptls-card-header",children:[(0,t.jsx)("div",{className:"sptls-carrd-title",children:i.title}),(0,t.jsx)("div",{className:"sptls-card-extra",children:i.extra})]}),(0,t.jsx)("div",{className:"sptls-card-body",children:i.children})]})},s=a,r={StepBackwardOutlined:["M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8"],StepForwardOutlined:["M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8"],FastBackwardOutlined:["M517.6 273.5L230.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"],FastForwardOutlined:["M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 000-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"],ShrinkOutlined:["M881.7 187.4l-45.1-45.1a8.03 8.03 0 00-11.3 0L667.8 299.9l-54.7-54.7a7.94 7.94 0 00-13.5 4.7L576.1 439c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-.1-11.2zM439 576.1l-189.2 23.5c-6.6.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5a8.03 8.03 0 000 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7a7.94 7.94 0 0013.5-4.7L447.9 585a7.9 7.9 0 00-8.9-8.9z"],ArrowsAltOutlined:["M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 000 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0013.5-4.7L863.9 169a7.9 7.9 0 00-8.9-8.9zM416.6 562.3a8.03 8.03 0 00-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 00-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z"],DownOutlined:["M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"],UpOutlined:["M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"],LeftOutlined:["M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"],RightOutlined:["M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"],QuestionOutlined:["M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"],QuestionCircleOutlined:["M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"],PlusOutlined:["M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z","M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"],PlusCircleOutlined:["M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z","M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"],MinusOutlined:["M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"],MinusCircleOutlined:["M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z","M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"],InfoCircleOutlined:["M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"],CloseOutlined:["M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"],CheckOutlined:["M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"],CloseSquareOutlined:["M880 112c17.7 0 32 14.3 32 32v736c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm-40 72H184v656h656V184zM640.01 338.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"],CheckCircleOutlined:["M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z","M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"],CheckSquareOutlined:["M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z","M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"],WarningOutlined:["M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"],ClockCircleOutlined:["M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"],ExclamationOutlined:["M448 804a64 64 0 10128 0 64 64 0 10-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"]},u=r,l=function(i){var p=24;i.size&&(p=i.size);var x="64 64 896 896";return i.viewBox&&(x=i.viewBox),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:p,height:p,fill:i.color,viewBox:x,children:u[i.name].map(function(h){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{d:h})})})})},b=l,z=function(i){var p="sptls-ribbon-end";i.placement==="start"&&(p="sptls-ribbon-start"),p+=" item-ribbon-box";var x={};return i.color&&(x={color:i.color,backgroundColor:i.color}),(0,t.jsxs)("div",{className:"sptls-ribbon",children:[i.children,(0,t.jsxs)("div",{style:x,className:p,children:[(0,t.jsx)("span",{className:"sptls-ribbon-text",children:i.text}),(0,t.jsx)("div",{className:"sptls-ribbon-corner"})]})]})},B=z,T=function(i){return(0,t.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"#007bff",children:[(0,t.jsx)("text",{x:"50%",y:"80%",textAnchor:"middle",alignmentBaseline:"middle",fontSize:"16",fill:"#007bff",children:i.text}),(0,t.jsx)("circle",{cx:"10",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"36",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.25s",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"62",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.5s",dur:"1s",repeatCount:"indefinite"})}),(0,t.jsx)("circle",{cx:"90",cy:"50",r:"6",children:(0,t.jsx)("animate",{attributeName:"fill",values:"#007bff;#007bff;#007bff;transparent",begin:"0.75s",dur:"1s",repeatCount:"indefinite"})})]})},L=T,D=function(i){return(0,t.jsxs)("div",{className:"sptls-spin",children:[i.children,(0,t.jsx)("div",{className:i.spinning===!1?"":"sptls-spin-container",children:i.spinning===!1?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{children:(0,t.jsx)(L,{text:i.text})})})]})},R=D,j=function(i){var p="sptls-tag",x="",h=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],M=h.find(function(P){return P===i.color}),g;return M?(g={},x="sptls-tag-".concat(i.color)):(g={backgroundColor:i.color,borderColor:i.color},i.color.includes("#")&&(g.color="white")),(0,t.jsx)("span",{onClick:i.onClick,className:[p,x].join(" "),style:g,children:i.text})},W=j,A=function(i){var p="Spotless UI",x=function(P){var C=document.createElement("canvas"),O=C.getContext("2d"),S="#ebebeb";return i.color&&(S=i.color),O?(C.width=200,C.height=100,O.font="16px Arial",O.rotate(-30*Math.PI/180),O.fillStyle=S,O.fillText(P,0,90,100),C.toDataURL()):""},h=x(p),M={backgroundImage:"url('".concat(h,"')")};return(0,t.jsxs)("div",{className:"sptls-watermark",children:[i.children,(0,t.jsx)("div",{className:"sptls-watermark-content",style:M})]})},K=A},63874:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"count",paraId:0,tocIndex:2},{value:"\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u5927\u4E8E overflowCount \u65F6\u663E\u793A\u4E3A ${overflowCount}+\uFF0C\u4E3A 0 \u65F6\u9690\u85CF",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"99",paraId:0,tocIndex:2},{value:"overflowCount",paraId:0,tocIndex:2},{value:"\u5C01\u9876\u7684\u6570\u5B57\u503C",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u5FBD\u6807\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"red",paraId:0,tocIndex:2}]},826:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"separator",paraId:0,tocIndex:2},{value:"separator",paraId:0,tocIndex:2},{value:"ReactNode",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"items",paraId:0,tocIndex:2},{value:"\u8DEF\u7531\u6808\u4FE1\u606F",paraId:0,tocIndex:2},{value:"items[{text: string,link: string}]",paraId:0,tocIndex:2}]},31527:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u6309\u94AE\u6587\u6848",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"type",paraId:0,tocIndex:2},{value:"\u6309\u94AE\u7C7B\u578B ",paraId:0,tocIndex:2},{value:"primary",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"info",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"warning",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"success",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"danger",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"info",paraId:0,tocIndex:2},{value:"isSubmit",paraId:0,tocIndex:2},{value:"\u662F\u5426\u8FDB\u884C\u63D0\u4EA4",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"onClick",paraId:0,tocIndex:2},{value:"\u5BF9\u5916\u66B4\u9732\u7684\u70B9\u51FB\u4E8B\u4EF6",paraId:0,tocIndex:2},{value:"Object",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2}]},74919:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"title",paraId:0,tocIndex:2},{value:"Card \u6807\u9898",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"extra",paraId:0,tocIndex:2},{value:"\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF",paraId:0,tocIndex:2},{value:"ReactNode",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"isSingle",paraId:0,tocIndex:2},{value:"\u662F\u5426\u9690\u85CF\u5361\u7247\u5934\u90E8",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"bordered",paraId:0,tocIndex:2},{value:"\u662F\u5426\u6709\u8FB9\u6846",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"true",paraId:0,tocIndex:2}]},17959:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:4},{value:"\u8BF4\u660E",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"name",paraId:0,tocIndex:4},{value:"Icon \u7C7B\u578B",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"size",paraId:0,tocIndex:4},{value:"Icon \u5927\u5C0F",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"24",paraId:0,tocIndex:4},{value:"color",paraId:0,tocIndex:4},{value:"Icon \u5927\u5C0F",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"#000000;",paraId:0,tocIndex:4}]},53190:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[]},8249:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u4E2D\u5C55\u793A\u5185\u5BB9",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"placement",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u4F4D\u7F6E",paraId:0,tocIndex:2},{value:"start",paraId:0,tocIndex:2},{value:" ",paraId:0,tocIndex:2},{value:"end",paraId:0,tocIndex:2},{value:"end",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u4E1D\u5E26\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"#1677ff;",paraId:0,tocIndex:2}]},86032:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:"\u52A0\u8F7D\u4E2D\u6587\u6848",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"spinning",paraId:0,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u52A0\u8F7D\u61C2\u52A8\u753B",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"true",paraId:0,tocIndex:2}]},86657:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"text",paraId:0,tocIndex:3},{value:"Tag \u6587\u6848",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"color",paraId:0,tocIndex:3},{value:"Tag \u989C\u8272 \uFF08\u652F\u6301\u9ED8\u8BA4 color \u4E0E\u81EA\u5B9A\u4E49\u989C\u8272\uFF09",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"closeIcon",paraId:0,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE",paraId:0,tocIndex:3},{value:"boolean",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"onClick",paraId:0,tocIndex:3},{value:"\u5BF9\u5916\u66B4\u9732\u7684\u70B9\u51FB\u4E8B\u4EF6",paraId:0,tocIndex:3},{value:"Object",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3}]},95244:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"content",paraId:0,tocIndex:2},{value:"\u6C34\u5370\u5185\u5BB9",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"Spotless UI",paraId:0,tocIndex:2},{value:"color",paraId:0,tocIndex:2},{value:"\u6C34\u5370\u989C\u8272",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"#ebebeb",paraId:0,tocIndex:2}]},74610:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:"SPTLS. \u5168\u79F0 Spotless UI \u57FA\u4E8E React\u3001 TS \u3001Less \u6253\u9020\u7684\u65E0\u9700\u4F9D\u8D56\u7B2C\u4E09\u65B9 UI \u5E93\uFF0C\u652F\u6301\u6309\u9700\u5BFC\u5165\u3002",paraId:0,tocIndex:0},{value:"\u5982\u679C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u3001\u6216\u8005\u6709\u6539\u5584\u5EFA\u8BAE\uFF0C\u6B22\u8FCE\u5728 GitHub Issues \u8FDB\u884C\u53CD\u9988\uFF1A",paraId:1,tocIndex:2},{value:"\u8054\u7CFB\u6211\u4EEC",paraId:1,tocIndex:2}]},3234:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[]},29110:function(I,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[]}}]);
