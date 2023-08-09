/*! For license information please see sui-react-packages-components-dropdown-stories-dropdown-stories.5a8b8654.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[3054],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/dropdown/stories/dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:()=>Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/components/dropdown/src/index.ts")),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}const ReactDropdown=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _a,_b,_c,__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const dropdown_stories={title:"SUI/Components/Advanced/Dropdown",component:src.L,parameters:{layout:"fullscreen",docs:{page:ReactDropdown}}};var Dropdown=function(_a){_a.example;var props=__rest(_a,["example"]),set={};return set.box={margin:0,padding:"30px",border:"white"===props.color?"1px solid #E6E6E6":0,borderRadius:"4px",background:"white"===props.color?"#333":"#fff"},(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:set.box,children:[(0,jsx_runtime.jsx)(src.L,__assign({},props,{onMenuClick:function(id,e){console.log("DEBUG: Menu Item Clicked",id,e)},menu:[{id:"group-1",label:"Extra Optimization",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-2",label:"Site management tools",props:{}}]},{id:"group-2",label:"Performance",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{}},{id:"menu-2",label:"Site management tools",props:{}}]}],children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",icon:"package",color:"blue",isSmall:!0,isFullWidth:!0,children:"Unlock bonus features"})})})),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(src.L,__assign({},props,{children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:"CUSTOM CONTENT ONLY"})}))]})})})};Dropdown.args={id:"myUniqueId",label:"Menu Button",isSmall:!1,isLabelHidden:!1,onMenuClick:function(){}},Dropdown.argTypes={isSmall:{name:"Small"},isLabelHidden:{name:"Icon Button"},onMenuClick:{name:"onMenuClick",type:Function}},Dropdown.parameters=__assign(__assign({},Dropdown.parameters),{docs:__assign(__assign({},null===(_a=Dropdown.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'({\n  example,\n  ...props\n}) => {\n  const set = {};\n  set.box = {\n    margin: 0,\n    padding: "30px",\n    border: "white" === props.color ? "1px solid #E6E6E6" : 0,\n    borderRadius: "4px",\n    background: "white" === props.color ? "#333" : "#fff"\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={set.box}>\n                    <SuiDropdown {...props} onMenuClick={(id, e) => {\n          console.log("DEBUG: Menu Item Clicked", id, e);\n        }} menu={[{\n          id: "group-1",\n          label: "Extra Optimization",\n          menus: [{\n            id: "menu-2",\n            label: "Uptime Monitoring",\n            props: {\n              icon: "CheckAlt"\n            }\n          }, {\n            id: "menu-2",\n            label: "Site management tools",\n            props: {}\n          }]\n        }, {\n          id: "group-2",\n          label: "Performance",\n          menus: [{\n            id: "menu-2",\n            label: "Uptime Monitoring",\n            props: {}\n          }, {\n            id: "menu-2",\n            label: "Site management tools",\n            props: {}\n          }]\n        }]}>\n                        <div style={{\n            display: "flex",\n            justifyContent: "center",\n            padding: "8px 24px"\n          }}>\n                            <Button appearance="primary" icon="package" color="blue" isSmall={true} isFullWidth={true}>\n                                Unlock bonus features\n                            </Button>\n                        </div>\n                    </SuiDropdown>\n                    <br />\n                    <SuiDropdown {...props}>\n                        <div style={{\n            display: "flex",\n            justifyContent: "center",\n            padding: "8px 24px"\n          }}>\n                            CUSTOM CONTENT ONLY\n                        </div>\n                    </SuiDropdown>\n                </div>\n            </div>\n        </div>;\n}'},null===(_c=null===(_b=Dropdown.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Dropdown"]},"./packages/sui-react/packages/components/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),menu_src=__webpack_require__("./packages/sui-react/packages/components/menu/src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Dropdown=(0,react.forwardRef)((function(_a,ref){var _b,label=_a.label,isSmall=_a.isSmall,isLabelHidden=_a.isLabelHidden,_c=_a.isFixedHeight,isFixedHeight=void 0===_c||_c,current=_a.current,children=_a.children,menu=_a.menu,direction=_a.direction,buttonIcon=_a.buttonIcon,onMenuClick=_a.onMenuClick,dropdownRef=(0,react.useRef)(null),id="sui-dropdown-".concat((0,react.useId)()),_d=(0,react.useState)(!1),isOpen=_d[0],setIsOpen=_d[1];(0,hooks_src.rw)(dropdownRef,(function(){setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(function(){return{open:function(){return setIsOpen(!0)},close:function(){return setIsOpen(!1)},toggle:function(){return setIsOpen(!isOpen)}}}));var wrapperClasses=(0,src.uY)("sui-dropdown",{sm:isSmall,open:isOpen}),renderMenus=function(menus){var _a;return null===(_a=menus||[])||void 0===_a?void 0:_a.map((function(menuItem,index){return menuItem.menus?(0,jsx_runtime.jsx)(menu_src.kS,{title:menuItem.label,children:renderMenus(menuItem.menus)},index):(onMenuClick&&(menuItem.props.onClick=function(e){return onMenuClick(menuItem.id,e)}),(0,jsx_runtime.jsx)(menu_src.sN,__assign({},menuItem.props,{children:menuItem.label}),index))}))};return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,children:[(0,jsx_runtime.jsx)(button_src.zx,{icon:null!=buttonIcon?buttonIcon:"menu",iconPosition:"start",color:"black",appearance:"secondary",isSmall:!0,"aria-activedescendant":isOpen?"".concat(id,"-").concat(current):"",onClick:function(){return setIsOpen(!isOpen)},children:isLabelHidden?void 0:label}),(0,jsx_runtime.jsxs)("div",__assign({id,tabIndex:-1,role:"listbox",className:(0,src.uY)("sui-dropdown__menu",(_b={},_b["direction-".concat(direction)]=!(0,src.xb)(null!=direction?direction:""),_b["fixed-height"]=isFixedHeight,_b))},label&&{"aria-labelledby":"".concat(id,"__label")},{children:[!!menu&&(0,jsx_runtime.jsx)(menu_src.v2,{className:"sui-dropdown__menu-nav",children:renderMenus(menu)}),!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]}))]})}));Dropdown.displayName="Dropdown"},"./packages/sui-react/packages/components/menu/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v2:()=>Menu,kS:()=>menu_group.k,sN:()=>MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),Menu=function(_a){var _b=_a.className,className=void 0===_b?"":_b,children=_a.children,classNames=(0,src.uY)("sui-menu",{},className);return(0,jsx_runtime.jsx)("nav",{className:classNames,children})},hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuItem=function(_a){var _b,icon=_a.icon,href=_a.href,_c=_a.className,className=void 0===_c?"":_c,children=_a.children,isDisabled=_a.isDisabled,onClick=_a.onClick,props=__rest(_a,["icon","href","className","children","isDisabled","onClick"]),_d=(0,hooks_src.X2)({}),isHovered=_d[0],isFocused=_d[1],methods=_d[2],id=(0,react.useId)(),menuId="sui-menu-item-".concat(id),menuTitleId="".concat(menuId,"-title"),TagName="li";href&&(TagName="a");var classNames=(0,src.uY)("sui-menu__item",{hover:isHovered,focus:isFocused,disabled:isDisabled},className),IconTag=null;(0,src.xb)(null!=icon?icon:"")||(IconTag=null!==(_b=null==components?void 0:components[icon])&&void 0!==_b?_b:null);var attrs=__assign({className:classNames,href:href||void 0},props),btnAttr={};return onClick&&(btnAttr.role="button",btnAttr.onClick=onClick,btnAttr.onKeyDown=function(e){return(0,src.Jw)(e,onClick)}),(0,jsx_runtime.jsxs)(TagName,__assign({className:classNames},attrs,methods,{tabIndex:isDisabled?-1:0,"aria-labelledby":menuTitleId},btnAttr,{children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm"}),(0,jsx_runtime.jsx)("span",{id:menuTitleId,children})]}))},menu_group=__webpack_require__("./packages/sui-react/packages/components/menu/src/menu-group.tsx")},"./packages/sui-react/packages/components/menu/src/menu-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>MenuGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},MenuGroup=function(_a){var _b=_a.title,title=void 0===_b?"":_b,_c=_a.className,className=void 0===_c?"":_c,children=_a.children,props=__rest(_a,["title","className","children"]),classNames=(0,_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_2__.uY)("sui-menu__group",{},className),attrs=__assign({className:classNames},props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",__assign({},attrs,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sui-menu__group-title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"sui-menu__group-items",children})]}))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);