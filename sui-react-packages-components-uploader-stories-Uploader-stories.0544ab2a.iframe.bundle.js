/*! For license information please see sui-react-packages-components-uploader-stories-Uploader-stories.0544ab2a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksui_docs=self.webpackChunksui_docs||[]).push([[880],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./packages/sui-react/packages/components/uploader/stories/Uploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Uploader:()=>Uploader_stories_Uploader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Uploader_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/sui-react/packages/components/form-field/src/index.ts"),components=__webpack_require__("./packages/sui-icons/src/components/index.ts"),button_src=__webpack_require__("./packages/sui-react/packages/components/button/src/index.ts"),SUI_UPLOADER_IMAGE_EXTS=["image/png","image/jpeg","image/jpg"],getFileImagePreview=function(file){var _a;return null!==(_a=null===URL||void 0===URL?void 0:URL.createObjectURL(file))&&void 0!==_a?_a:""},UploaderFile=function(_a){var fileType,id=_a.id,file=_a.file,onRemove=_a.onRemove;return(0,jsx_runtime.jsxs)("div",{className:"sui-uploader__file",children:[(0,jsx_runtime.jsx)("div",{className:"sui-uploader__file--preview",children:(fileType=null==file?void 0:file.type,SUI_UPLOADER_IMAGE_EXTS.includes(fileType)?(0,jsx_runtime.jsx)("span",{role:"img",className:"sui-uploader__file--image",style:{backgroundImage:"url(".concat(getFileImagePreview(file),")")}}):(0,jsx_runtime.jsx)(components.FileCheck,{size:"sm",className:"sui-uploader__file--icon"}))}),(0,jsx_runtime.jsx)("span",{className:"sui-uploader__file--name",children:null==file?void 0:file.name}),(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-uploader__file--remove",iconOnly:!0,icon:"close",onClick:function(){return onRemove(id)}})]})},utils_src=__webpack_require__("./packages/sui-react/packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/sui-react/packages/hooks/src/index.ts"),UploaderButton=function(_a){var _b=_a.btnTitle,btnTitle=void 0===_b?"":_b,_c=_a.allowDragAndDrop,allowDragAndDrop=void 0!==_c&&_c,_d=_a.onClick,onClick=void 0===_d?function(){}:_d,_e=_a.onDrag,onDrag=void 0===_e?function(){}:_e,dragRef=(0,react.useRef)(null),isDragging=(0,hooks_src.Y9)({containerRef:dragRef,methods:{onDrop:function(e){var draggedData=e.dataTransfer;onDrag&&onDrag(draggedData.files)}}})[0];return(0,utils_src.xb)(null!=btnTitle?btnTitle:"")&&(btnTitle="Upload File"),allowDragAndDrop?(0,jsx_runtime.jsxs)("div",{tabIndex:0,role:"button",ref:dragRef,className:(0,utils_src.uY)("sui-uploader__pick",{dragging:isDragging}),onClick,onKeyDown:function(e){return(0,utils_src.Jw)(e,onClick)},children:[(0,jsx_runtime.jsx)("span",{className:"sui-uploader__pick--icon",children:(0,jsx_runtime.jsx)(components.Upload,{size:"sm"})}),(0,jsx_runtime.jsx)("span",{className:"sui-uploader__pick--label",children:btnTitle})]}):(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-uploader__button",appearance:"primary",color:"blue",icon:"upload",onClick,children:btnTitle})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},Uploader=function(_a){var btnTitle=_a.btnTitle,_b=_a.multiple,multiple=void 0===_b||_b,_c=_a.accept,accept=void 0===_c?"":_c,_d=_a.allowDragAndDrop,allowDragAndDrop=void 0===_d||_d,_e=_a.fieldAttrs,fieldAttrs=void 0===_e?{}:_e,_f=_a.onChange,onChange=void 0===_f?function(){}:_f,props=__rest(_a,["btnTitle","multiple","accept","allowDragAndDrop","fieldAttrs","onChange"]),_g=(0,react.useState)([]),files=_g[0],setFiles=_g[1],uniqueID=(0,react.useId)(),uploaderId="sui-uploader-".concat(uniqueID),ref=(0,react.useRef)(null);(0,react.useEffect)((function(){onChange(files)}),[files,onChange]);var onSelectFile=(0,react.useCallback)((function(filesOrEvent){var _a,selectedFiles=(null!==(_a=null==filesOrEvent?void 0:filesOrEvent.target)&&void 0!==_a?_a:{}).files;selectedFiles||(selectedFiles=filesOrEvent),setFiles(__spreadArray(__spreadArray([],files,!0),Array.from(selectedFiles),!0))}),[files]),openFileSelector=(0,react.useCallback)((function(){var _a;null===(_a=ref.current)||void 0===_a||_a.click()}),[ref]),onRemoveFile=(0,react.useCallback)((function(fileIndex){setFiles(files.filter((function(file,index){return index!==fileIndex})))}),[files]);return(0,jsx_runtime.jsx)(src.W,__assign({},fieldAttrs,{children:(0,jsx_runtime.jsxs)("div",{className:"sui-uploader",children:[(0,jsx_runtime.jsx)("input",__assign({type:"file",id:uploaderId,ref,onChange:onSelectFile,className:"sui-uploader__input",multiple,accept,hidden:!0},props)),(multiple||!multiple&&files.length<=0)&&(0,jsx_runtime.jsx)(UploaderButton,{btnTitle:null!=btnTitle?btnTitle:"",multiple:null!=multiple&&multiple,allowDragAndDrop:null!=allowDragAndDrop&&allowDragAndDrop,onClick:openFileSelector,onDrag:onSelectFile}),!!files&&files.length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-uploader__preview",children:(0,jsx_runtime.jsx)("div",{className:"sui-uploader__files",children:null==files?void 0:files.map((function(file,index){return(0,jsx_runtime.jsx)(UploaderFile,{id:index,onRemove:onRemoveFile,file},index)}))})})]})}))},lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),storybook=__webpack_require__("./packages/storybook/lib/storybook.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(storybook.$0,{title:"Shhh... Not much to see here at the moment, but stay tuned!",contained:!0,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Quiet for now, but get ready! Exciting stuff is coming. Our developers are working really hard behind the scenes to make it happen. Stay curious and excited! 🌟👷"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"In the meantime, feel free to explore our demo page for this component."})})]})})}var _a,_b,_c,Uploader_stories_assign=function(){return Uploader_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},Uploader_stories_assign.apply(this,arguments)},Uploader_stories_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Uploader_stories={title:"SUI/Components/Advanced/Uploader",component:Uploader,parameters:{layout:"fullscreen",docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};var Uploader_stories_Uploader=function(_a){var props=Uploader_stories_rest(_a,[]);return(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"sui-layout",style:{margin:20,padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(Uploader,Uploader_stories_assign({},props,{fieldAttrs:{label:"Upload file",helper:"Upload files",isSmall:!0},onChange:function(files){console.log("files",files)}}))})})};Uploader_stories_Uploader.args={btnTitle:"",accept:"*",multiple:!1,allowDragAndDrop:!0},Uploader_stories_Uploader.argTypes={btnTitle:{name:"Button Title",control:{type:"text"}},multiple:{name:"Allow multiple files",control:{type:"boolean"}},allowDragAndDrop:{name:"Drag & Drop",control:{type:"boolean"}},accept:{name:"Allowed file types",control:{type:"text"}}},Uploader_stories_Uploader.parameters=Uploader_stories_assign(Uploader_stories_assign({},Uploader_stories_Uploader.parameters),{docs:Uploader_stories_assign(Uploader_stories_assign({},null===(_a=Uploader_stories_Uploader.parameters)||void 0===_a?void 0:_a.docs),{source:Uploader_stories_assign({originalSource:'({\n  ...props\n}) => {\n  return <Fragment>\n            <div className="sui-layout" style={{\n      margin: 20,\n      padding: 20,\n      borderRadius: 4,\n      background: "#fff"\n    }}>\n                <SuiUploader {...props} fieldAttrs={{\n        label: "Upload file",\n        helper: "Upload files",\n        isSmall: true\n      }} onChange={files => {\n        console.log("files", files);\n      }} />\n            </div>\n        </Fragment>;\n}'},null===(_c=null===(_b=Uploader_stories_Uploader.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Uploader"]},"./packages/sui-react/packages/components/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/sui-react/packages/utils/src/index.ts")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Label=function(_a){var id=_a.id,_b=_a.hidden,hidden=void 0!==_b&&_b,children=_a.children;if((0,src.xb)(null!=children?children:""))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');var classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:"".concat(id,"__label"),className:classNames,children})},Helper=function(_a){var id=_a.id,children=_a.children,classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__helper"),className:classNames,children})},ErrorMessage=function(_a){var id=_a.id,_b=_a.show,show=void 0!==_b&&_b,children=_a.children;return(0,jsx_runtime.jsx)("span",{id:"".concat(id,"__error-message"),className:"sui-form-field__helper sui-color-error--50",children:show&&children})},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function(_a){var id=_a.id,label=_a.label,helper=_a.helper,error=_a.error,className=_a.className,_b=_a.isSmall,isSmall=void 0!==_b&&_b,_c=_a.isDisabled,isDisabled=void 0!==_c&&_c,_d=_a.isLabelHidden,isLabelHidden=void 0!==_d&&_d,children=_a.children,props=__rest(_a,["id","label","helper","error","className","isSmall","isDisabled","isLabelHidden","children"]),errorObj=Object.assign({state:!1,text:""},error),classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className);return(0,jsx_runtime.jsxs)("div",__assign({className:classNames},props,{children:[!(0,src.xb)(null!=label?label:"")&&(0,jsx_runtime.jsx)(Label,{id,hidden:null!=isLabelHidden&&isLabelHidden,children:label}),children,(0,src.Kn)(error)&&Object.keys(error).length>0&&(0,jsx_runtime.jsx)(ErrorMessage,{id,show:errorObj.state,small:isSmall,children:errorObj.text}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id,small:isSmall,children:helper})]}))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);