/*! For license information please see sui-react-packages-components-empty-state-stories-empty-state-stories.3a72cce3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[4794],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/empty-state/stories/empty-state.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyState:()=>empty_state_stories_EmptyState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>empty_state_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),EmptyState=function(_a){var title=_a.title,content=_a.content,logo=_a.logo,className=_a.className,children=_a.children,classNames=(0,src.uY)("sui-empty-state",{},className),isImg="string"==typeof logo;return(0,jsx_runtime.jsxs)("div",{className:classNames,children:[!!logo&&(0,jsx_runtime.jsx)("div",{className:"sui-empty-state__logo",children:isImg?(0,jsx_runtime.jsx)("img",{src:logo,alt:"LOGO"}):logo}),(0,jsx_runtime.jsxs)("div",{className:"sui-empty-state__info",children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsx)("p",{children:content})]}),(0,jsx_runtime.jsx)("div",{className:"sui-empty-state__actions",children})]})},button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}const stories_EmptyState=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var empty_state_stories_EmptyState=function(_a){_a.color;var _b=(0,react.useState)("desktop");_b[0],_b[1];return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4},children:(0,jsx_runtime.jsxs)(EmptyState,{logo:LOGO,title:"This site has not yet been scanned.",content:"Defender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts.",children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"blue",isSmall:!0,children:"Primary button"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,children:"Primary button"})]})})})})};empty_state_stories_EmptyState.args={},empty_state_stories_EmptyState.argTypes={bar:{name:"Circle Bar",description:"The EmptyState circle.",control:{type:"range",min:0,max:100,step:1}},value:{name:"EmptyState Value",description:"The EmptyState value to display.",control:"number"},content:{name:"Content",description:"The EmptyState content to display.",control:"text",if:{arg:"isSmall",eq:!0}},isPercentage:{name:"Show Percentage",description:"The percentage to display."},state:{name:"Type",description:"The EmptyStates color variation according to type.",options:["default","error","warning","success"],control:{type:"select",labels:{default:"Type: Default",error:"Type: Error",warning:"Type: Warning",success:"Type: Success"}}},isSmall:{name:"Small",description:"The EmptyStates component size."}};const empty_state_stories={title:"SUI/Components/Advanced/Empty State",component:empty_state_stories_EmptyState,parameters:{layout:"fullscreen",docs:{page:stories_EmptyState}}};var LOGO=(0,jsx_runtime.jsxs)("svg",{width:"152",height:"119",viewBox:"0 0 152 119",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{filter:"url(#filter0_ddd_7075_76556)",children:(0,jsx_runtime.jsx)("rect",{x:"16",y:"15",width:"120",height:"86",rx:"4",fill:"white"})}),(0,jsx_runtime.jsx)("path",{d:"M16 19C16 16.7909 17.7909 15 20 15H132C134.209 15 136 16.7909 136 19V29H16V19Z",fill:"#333333"}),(0,jsx_runtime.jsx)("circle",{cx:"27",cy:"22",r:"3",fill:"#E6E6E6"}),(0,jsx_runtime.jsx)("circle",{cx:"37",cy:"22",r:"3",fill:"#E6E6E6"}),(0,jsx_runtime.jsx)("circle",{cx:"47",cy:"22",r:"3",fill:"#E6E6E6"}),(0,jsx_runtime.jsx)("rect",{x:"67",y:"51",width:"18",height:"20",rx:"4",fill:"#F2F2F2",stroke:"#AAAAAA","stroke-width":"2"}),(0,jsx_runtime.jsx)("path",{d:"M62 51V50C62 48.3431 63.3431 47 65 47H66",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("path",{d:"M90 71L90 72C90 73.6569 88.6569 75 87 75L86 75",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("path",{d:"M86 47L87 47C88.6569 47 90 48.3431 90 50L90 51",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("path",{d:"M66 75L65 75C63.3431 75 62 73.6569 62 72L62 71",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("line",{x1:"72",y1:"57",x2:"80",y2:"57",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("line",{x1:"72",y1:"61",x2:"80",y2:"61",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("path",{d:"M72 65H78",stroke:"#AAAAAA","stroke-width":"2","stroke-linecap":"round"}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("filter",{id:"filter0_ddd_7075_76556",x:"0",y:"0",width:"152",height:"119",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,jsx_runtime.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,jsx_runtime.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,jsx_runtime.jsx)("feOffset",{dy:"2"}),(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,jsx_runtime.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.1 0"}),(0,jsx_runtime.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_7075_76556"}),(0,jsx_runtime.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,jsx_runtime.jsx)("feOffset",{dy:"1"}),(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:"8"}),(0,jsx_runtime.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.05 0"}),(0,jsx_runtime.jsx)("feBlend",{mode:"normal",in2:"effect1_dropShadow_7075_76556",result:"effect2_dropShadow_7075_76556"}),(0,jsx_runtime.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,jsx_runtime.jsx)("feOffset",{dy:"6"}),(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:"6"}),(0,jsx_runtime.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.08 0"}),(0,jsx_runtime.jsx)("feBlend",{mode:"normal",in2:"effect2_dropShadow_7075_76556",result:"effect3_dropShadow_7075_76556"}),(0,jsx_runtime.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect3_dropShadow_7075_76556",result:"shape"})]})})]});const __namedExportsOrder=["EmptyState"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);