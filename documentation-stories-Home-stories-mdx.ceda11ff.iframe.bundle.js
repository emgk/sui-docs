/*! For license information please see documentation-stories-Home-stories-mdx.ceda11ff.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[202],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/documentation/stories/Home.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Home_stories,svgCssFramework:()=>svgCssFramework});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const banner_products_namespaceObject=__webpack_require__.p+"static/media/banner-products.b94d7255.png",banner_products_2x_namespaceObject=__webpack_require__.p+"static/media/banner-products@2x.015ea058.png",css_framework_namespaceObject=__webpack_require__.p+"static/media/css-framework.848e78ff.png",css_framework_2x_namespaceObject=__webpack_require__.p+"static/media/css-framework@2x.011b65e6.png",components_namespaceObject=__webpack_require__.p+"static/media/components.037a42e4.png",components_2x_namespaceObject=__webpack_require__.p+"static/media/components@2x.9cb8caec.png",icons_pack_namespaceObject=__webpack_require__.p+"static/media/icons-pack.4e88caae.png",icons_pack_2x_namespaceObject=__webpack_require__.p+"static/media/icons-pack@2x.8456fce7.png";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const svgCssFramework=(0,jsx_runtime.jsxs)("svg",{width:"782",height:"412",viewBox:"0 0 782 412",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("rect",{width:"782",height:"412",fill:"#FC685E"}),(0,jsx_runtime.jsx)("rect",{width:"782",height:"412",fill:"#F6F8F8"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M391 205.252L520.374 280.571L520.319 280.626H261.681L261.626 280.571L391 205.252ZM391 356L261.627 280.68L261.681 280.626H520.32L520.374 280.68L391 356Z",fill:"#3559C7"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M391 130.626L520.374 205.946L520.319 206.001L520.374 206.057L391 281.376L261.627 206.057L261.682 206.001L261.626 205.946L391 130.626Z",fill:"#5A78D3"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M391 56.0001L520.374 131.32L520.32 131.374H261.681L261.626 131.32L391 56.0001ZM391.376 206.694L262.002 131.374H520.749L391.376 206.694Z",fill:"#AEBCE9"})]});function _createMdxContent(props){const _components=Object.assign({a:"a"},(0,lib.ah)(),props.components);return storybook.Zb||_missingMdxReference("Card",!1),storybook.Zb.Simple||_missingMdxReference("Card.Simple",!0),storybook.T3||_missingMdxReference("Page",!1),storybook.T3.Home||_missingMdxReference("Page.Home",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"SUI/Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsx)(storybook.T3.Home,{title:"Shared UI",subtitle:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Design, develop, and deliver coherent product experiences with"," ",(0,jsx_runtime.jsx)(_components.a,{href:"https://wpmudev.com/",target:"_blank",rel:"nofollow",children:"WPMU DEV's"})," ","design system."]}),action:{link:"sui-getting-started--page",label:"Getting Started"},image:{src:banner_products_namespaceObject,src2x:banner_products_2x_namespaceObject},children:(0,jsx_runtime.jsxs)(storybook.X2,{gutter:"sm",children:[(0,jsx_runtime.jsx)(storybook.JX,{size:"2",children:(0,jsx_runtime.jsx)(storybook.Zb.Simple,{title:"Components",description:"Presentational UI components with encapsulated styles for React framework.",action:"sui-css-framework-colors",image:{src:components_namespaceObject,src2x:components_2x_namespaceObject},theme:"dark",style:{background:"#1A1A1A"}})}),(0,jsx_runtime.jsx)(storybook.JX,{size:"2",children:(0,jsx_runtime.jsx)(storybook.Zb.Simple,{title:"CSS Framework",description:"Styles-centric framework that gives you the base styles and structure for any component.",action:"sui-css-framework-overview",image:{src:css_framework_namespaceObject,src2x:css_framework_2x_namespaceObject},theme:"light",style:{background:"#F2F2F2"}})}),(0,jsx_runtime.jsx)(storybook.JX,{size:"2",children:(0,jsx_runtime.jsx)(storybook.Zb.Simple,{title:"Icons Pack",description:"Communicate messages at a glance and draw attention to important information.",action:"sui-icons-pack--page",image:{src:icons_pack_namespaceObject,src2x:icons_pack_2x_namespaceObject},theme:"light",style:{background:"#EAF1FE"}})})]})})})]})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"SUI/Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Home_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);