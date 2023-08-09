/*! For license information please see sui-css-stories-Grid-stories.e7338341.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[2693],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-css/stories/Grid.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grid:()=>Grid_stories_Grid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Grid_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const Row=({alignment,children})=>{const align=Object.assign({xs:"",sm:"",md:"",lg:"",xl:""},alignment);let alignClass="";for(let key in align)""!==align[key]&&("xs"===key?"stacked"!==align[key]&&(alignClass+=` sui-row--${align[key]}`):alignClass+=` sui-row-${key}--${align[key]}`);return(0,jsx_runtime.jsx)("div",{className:`sui-row${alignClass}`,children})};Row.displayName="Row",Row.__docgenInfo={description:"",methods:[],displayName:"Row"};const Col=({size,children})=>{const hasSize=void 0!==size&&""!==size;return(0,jsx_runtime.jsx)("div",{className:"sui-col"+(hasSize?" sui-col--"+size:""),children})};Col.displayName="Col",Col.__docgenInfo={description:"",methods:[],displayName:"Col"};const Grid=({alignment,children})=>{const columns=react.Children.map(children,((column,index)=>{const hasSize=void 0!==column.props.size&&""!==column.props.size;return(0,jsx_runtime.jsx)(Col,{...hasSize&&{size:column.props.size},children:column.props.children},`col-${index}`)}));return(0,jsx_runtime.jsx)(Row,{alignment,children:columns})};Grid.displayName="Grid",Grid.__docgenInfo={description:"",methods:[],displayName:"Grid"};const Block=({container,color,title,children,...args})=>{const decorator={minHeight:60,overflow:"hidden",borderRadius:"4px",fontSize:"10px",lineHeight:"16px",fontFamily:"Menlo, Courier, monospace",fontWeight:"bold"};if(container&&"boolean"==typeof container?decorator.padding="15px 10px":(decorator.display="flex",decorator.alignItems="center",decorator.justifyContent="center",decorator.padding=5),"blue"===color)decorator.background="#e1eaff",decorator.color="#0056b1";else decorator.background="#f9e1ff",decorator.color="#8d00b1";return(0,jsx_runtime.jsxs)("div",{style:decorator,...args,children:[title&&"undefined"!==title&&""!==title&&(0,jsx_runtime.jsx)("span",{style:{display:"block",marginBottom:10},children:title}),children]})};Block.displayName="Block",Block.__docgenInfo={description:"",methods:[],displayName:"Block"};const DynamicGrid_Grid=({size,alignment})=>{let numbColumns=12,printColumns=[];if(void 0!==size&&""!==size&&(numbColumns=12/size),Number.isInteger(numbColumns))for(let i=0;i<numbColumns;i++)printColumns.push((0,jsx_runtime.jsx)("div",{size,children:(0,jsx_runtime.jsxs)(Block,{children:[".sui-col--",size]})},i));else printColumns.push((0,jsx_runtime.jsx)("div",{size,children:(0,jsx_runtime.jsxs)(Block,{children:[".sui-col--",size]})})),printColumns.push((0,jsx_runtime.jsx)("div",{size:12-size,children:(0,jsx_runtime.jsxs)(Block,{color:"blue",children:[".sui-col--",12-size]})}));return(0,jsx_runtime.jsx)(Grid,{alignment,children:printColumns})};DynamicGrid_Grid.displayName="Grid",DynamicGrid_Grid.__docgenInfo={description:"",methods:[],displayName:"Grid"};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const codeDemo=dedent_default()`
<div class="sui-row sui-row-md--inline">\n
	<div class="sui-col sui-col--4"> ... </div>\n
	<div class="sui-col sui-col--4"> ... </div>\n
	<div class="sui-col sui-col--4"> ... </div>\n
</div>
`;function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(storybook.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsxs)(_components.p,{children:["The Shared UI grid system employs a sequence of rows and columns to\nalign and organize the content inside the layout. The grid is created\nusing"," "]}),(0,jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes",target:"_blank",rel:"nofollow",children:(0,jsx_runtime.jsx)(_components.p,{children:"flexbox"})}),(0,jsx_runtime.jsxs)(_components.p,{children:[" ","and is fully responsive."]})]}),(0,jsx_runtime.jsx)(storybook.MB,{children:(0,jsx_runtime.jsx)("div",{style:{padding:"0 10px"},children:(0,jsx_runtime.jsx)(DynamicGrid_Grid,{size:"4",alignment:{md:"inline"}})})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codeDemo}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Above, there's an example of three equal-width columns on small, medium,\nlarge, and extra-large devices, achieved by using our predefined grid\nclasses."})})]})}const TabOverview=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},codeRow=dedent_default()`
<div class="sui-row"> ... </div>
`,codeRowInline=dedent_default()`
<!--
Min container width:
None (Auto)
-->
<div class="sui-row sui-row--inline"> ... </div>
`,codeBreakpoints=dedent_default()`
<!--
@param {String} $bp - Sets the minimum screen size code.
@param {String} $dir - Sets the columns direction.
-->
<div class="sui-row sui-row-$bp--$dir"> ... </div>
`;function TabRows_createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Usage",contained:!0,border:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Rows are wrappers for columns. Each column has some padding (called a\ngutter) to control the space between them. The rows fight back the\ncolumns' padding with negative margins; this way, all the columns\nvisually align down the left side."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Enable row styles and align columns properly; for that, use the class\nname as in the sample code below:"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codeRow})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Modifiers",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Rows can organize columns inline (placing one next to the other) or\nstacked (placing one below the other) based on different breakpoints to\ncreate a more flexible layout."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"By default, columns are aligned one below the other in stacked mode. To\nswitch them into inline columns for the window starting point (zero),\nyou need to:"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codeRowInline}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Since the grid system departs from small to large screens, you need to\nuse a modifier class to make the proper variations based on the minimum\nscreen size you want to change."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["For that, you need to use ",(0,jsx_runtime.jsx)(storybook.EK,{children:"sui-row-$bp--$dir"})," class, where"," ","\n",(0,jsx_runtime.jsx)(storybook.EK,{children:"$bp"})," is the breakpoint code (read Breakpoints section for\nmore) and ",(0,jsx_runtime.jsx)(storybook.EK,{children:"$dir"})," for the alignment direction, which could be"," ","\n",(0,jsx_runtime.jsx)("strong",{children:"inline"})," or ",(0,jsx_runtime.jsx)("strong",{children:"stacked"}),"."]})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codeBreakpoints})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Breakpoints",children:[(0,jsx_runtime.jsx)("div",{className:"csb-section__contained",style:{marginBottom:20},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The breakpoints divide into five different sizes, apart from the\ndefault or initial size, based on the WordPress admin content area\nsizing changes and elements like the sidebar menu or top menu that\nmight interrupt the content area depending on the browser's maximum\nwidth. We state these breakpoints as follows:"})})}),(0,jsx_runtime.jsx)(storybook.iA,{headers:["","Default","Small","Medium","Large","Extra Large"],content:[{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Contained min-width"}),1:"None (auto)",2:"≥ 783px",3:"≥ 1024px",4:"≥ 1200px",5:"≥ 1600px"}},{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Class prefix"}),1:"-",2:(0,jsx_runtime.jsx)(storybook.EK,{fullWidth:!0,children:"sui-row-sm--"}),3:(0,jsx_runtime.jsx)(storybook.EK,{fullWidth:!0,children:"sui-row-md--"}),4:(0,jsx_runtime.jsx)(storybook.EK,{fullWidth:!0,children:"sui-row-lg--"}),5:(0,jsx_runtime.jsx)(storybook.EK,{fullWidth:!0,children:"sui-row-xl--"})}},{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Stacked alignment"}),1:"Default",2:"✓",3:"✓",4:"✓",5:"✓"}},{columns:{0:(0,jsx_runtime.jsx)(_components.strong,{children:"Inline alignment"}),1:"✓",2:"✓",3:"✓",4:"✓",5:"✓"}}],border:!0}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The modifier classes affect the minimum container width, as stated in\nthe table above."})})]})]})}const TabRows=function TabRows_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabRows_createMdxContent,props)})):TabRows_createMdxContent(props)},codeCol=dedent_default()`
<div class="sui-col"> ... </div>
`,codesize=dedent_default()`
<!-- Replace $size with a number between 1 to 12 -->
<div class="sui-col sui-col-$size"> ... </div>
`;function TabColumns_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(storybook.$0,{title:"Usage",contained:!0,border:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Column classes organize the columns out of the amount you need per row\nbased on the twelve-column grid size; this means if you need to display\nthree equal-width columns, you must divide the size of the grid by the\nnumber of columns, which in this case, is twelve. The result you get is\nthe column size."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"By default, the columns align equally in size to occupy the entire row\nwidth in case alignment is inline, but if that is not the case, then the\ncolumns will properly align one below each other in stacked mode."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Enable column styles; for that, use the class name as in the sample code\nbelow:"})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codeCol}),(0,jsx_runtime.jsx)("p",{children:"Remember, columns must go inside a row to work correctly."})]}),"\n",(0,jsx_runtime.jsxs)(storybook.$0,{title:"Modifiers",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When columns are inline aligned, you can use the modifier class to\nspecify the column size in a twelve-grid row instead of leaving it for\nauto-sizing. These modifiers won't affect when the row aligns columns in\nstacked mode."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Enable column sizing; for that, use the class name as in the sample code\nbelow, being ",(0,jsx_runtime.jsx)(storybook.EK,{children:"$size"})," a number between 1 to 12:"]})}),(0,jsx_runtime.jsx)(storybook.pP,{language:"html",children:codesize}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Remember, the column's size sum must be at most 12, the limit of columns\nallowed per row."})})]})]})}const TabColumns=function TabColumns_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabColumns_createMdxContent,props)})):TabColumns_createMdxContent(props)};function Main_createMdxContent(props){return storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.T3.Tabs,{title:"Grid",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Our robust mobile-first grid system builds layouts of all shapes and sizes thanks to a twelve-column grid system based on flexbox with several predefined classes, Sass variables, and mixins."}),status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"overview",label:"Overview",children:(0,jsx_runtime.jsx)(TabOverview,{})}),(0,jsx_runtime.jsx)("div",{id:"row",label:"Rows",children:(0,jsx_runtime.jsx)(TabRows,{})}),(0,jsx_runtime.jsx)("div",{id:"column",label:"Columns",children:(0,jsx_runtime.jsx)(TabColumns,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const Grid_stories={title:"SUI/CSS Framework/Grid",parameters:{layout:"fullscreen",docs:{page:function Main_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Main_createMdxContent,props)})):Main_createMdxContent()}},actions:{disable:!0}}},Options=["stacked","inline"],Labels={stacked:"Stacked",inline:"Inline"},Grid_stories_Grid=({size,alignDefault,alignSmall,alignMedium,alignLarge,alignExtraLarge})=>{const align={xs:alignDefault,sm:alignSmall,md:alignMedium,lg:alignLarge,xl:alignExtraLarge};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsxs)("div",{className:"sui-layout__content",children:[(0,jsx_runtime.jsx)(DynamicGrid_Grid,{alignment:align,size}),(0,jsx_runtime.jsxs)(Grid,{alignment:align,children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Block,{container:!0,color:"blue",title:".sui-col (auto sizing)",children:(0,jsx_runtime.jsx)(DynamicGrid_Grid,{alignment:align,size})})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Block,{container:!0,color:"blue",title:".sui-col (auto sizing)",children:(0,jsx_runtime.jsx)(Block,{color:"blue"})})})]}),(0,jsx_runtime.jsx)("div",{style:{padding:30,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(DynamicGrid_Grid,{alignment:align,size})})]})})};Grid_stories_Grid.displayName="Grid",Grid_stories_Grid.args={size:8,alignDefault:"stacked",alignSmall:"stacked",alignMedium:"inline",alignLarge:"inline",alignExtraLarge:"inline"},Grid_stories_Grid.argTypes={size:{name:"Column Size",control:{type:"range",min:1,max:12}},alignDefault:{name:"Alignment (Default)",options:Options,control:{type:"inline-radio",labels:Labels}},alignSmall:{name:"Alignment (≥ 600px)",options:Options,control:{type:"inline-radio",labels:Labels}},alignMedium:{name:"Alignment (≥ 1024px)",options:Options,control:{type:"inline-radio",labels:Labels}},alignLarge:{name:"Alignment (≥ 1200px)",options:Options,control:{type:"inline-radio",labels:Labels}},alignExtraLarge:{name:"Alignment (≥ 1600px)",options:Options,control:{type:"inline-radio",labels:Labels}}},Grid_stories_Grid.__docgenInfo={description:"",methods:[],displayName:"Grid"};const __namedExportsOrder=["Grid"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=sui-css-stories-Grid-stories.e7338341.iframe.bundle.js.map