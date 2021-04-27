(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[646],{7160:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var o=t(2784),a=t.n(o),r=t(5572),i=function(e){var n=e.children,t=e.hideOnTouch;return(0,o.useEffect)((function(){if((0,r.b)()){for(var e=document.getElementById("touch-suppressible");e.firstChild;)e.removeChild(e.firstChild);if(t)return;var n=document.createElement("h4");n.textContent="Section best on a computer";var o=document.createElement("p");o.textContent="This part of the site does not run well on a touch-oriented browser. We recommend switching to a computer to carry on.",e.appendChild(n),e.appendChild(o)}}),[]),a().createElement("div",{id:"touch-suppressible"},n)}},2125:function(e,n,t){"use strict";t.d(n,{X:function(){return r}});var o=t(2784),a=t(8447),r=function(e){var n=function(n){return e.active&&e.active.toLowerCase()===n?"active":""};return o.createElement("nav",{className:"navbar-sub dev-tools"},o.createElement("ul",{className:"nav"},o.createElement("li",{className:"name"},o.createElement("h3",null,"Developer Tools")),o.createElement("li",{style:{display:"none"}},o.createElement("a",{className:n("compiler api"),href:(0,a.withPrefix)("/dev/compiler")},"Compiler API")),o.createElement("li",null,o.createElement("a",{className:n("sandbox"),href:(0,a.withPrefix)("/dev/sandbox")},"Sandbox")),o.createElement("li",null,o.createElement("a",{className:n("twoslash"),href:(0,a.withPrefix)("/dev/twoslash")},"Twoslash")),o.createElement("li",null,o.createElement("a",{className:n("typescript vfs"),href:(0,a.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),o.createElement("li",null,o.createElement("a",{className:n("playground plugins"),href:(0,a.withPrefix)("/dev/playground-plugins")},"Playground Plugins")),o.createElement("li",null,o.createElement("a",{className:n("bug workbench"),href:(0,a.withPrefix)("/dev/bug-workbench")},"Bug Workbench"))))}},5572:function(e,n,t){"use strict";function o(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var n="undefined"!=typeof window&&window.matchMedia&&matchMedia("(pointer:coarse)");if(n&&"(pointer:coarse)"===n.media)e=!!n.matches;else if("orientation"in window)e=!0;else{var t=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)}}return e}t.d(n,{b:function(){return o}})},4863:function(e,n,t){"use strict";t.r(n);var o=t(7575),a=t(7183),r=t.n(a),i=t(2784),s=t.n(i),c=t(7480),l=t(8447),d=t(7054),p=t(2125),m=t(5572),u=t(7160),h=function(e){return(0,i.useEffect)((function(){if(!(0,m.b)()){var e=document.createElement("script");e.src=(0,l.withPrefix)("/js/vs.loader.js"),e.async=!0,e.onload=function(){var e=t.g.require;e.config({paths:{vs:"https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",sandbox:(0,l.withPrefix)("/js/sandbox")},ignoreDuplicateModules:["vs/editor/editor.main"]}),e(["vs/editor/editor.main","vs/language/typescript/tsWorker","sandbox/index"],function(){var e=(0,o.Z)(r().mark((function e(n,t,o){var a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:'import {markdown, danger} from "danger"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []\n\n    if (newTypesDeps.length){\n        markdown("Added new types packages " + newTypesDeps.join(", "))\n    }\n}',n&&t&&o&&(null===(a=document.getElementById("loader").parentNode)||void 0===a||a.removeChild(document.getElementById("loader"))),document.getElementById("monaco-editor-embed").style.display="block",(i=o.createTypeScriptSandbox({text:'import {markdown, danger} from "danger"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []\n\n    if (newTypesDeps.length){\n        markdown("Added new types packages " + newTypesDeps.join(", "))\n    }\n}',compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!1},n,t)).editor.focus(),setTimeout((function(){document.querySelectorAll(".html-code").forEach((function(e){i.monaco.editor.colorize(e.textContent||"","html",{tabSize:2}).then((function(n){e.innerHTML=n}))})),document.querySelectorAll(".ts-code").forEach((function(e){i.monaco.editor.colorize(e.textContent||"","typescript",{tabSize:2}).then((function(n){e.innerHTML=n}))}))}),300);case 7:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}())},document.body.appendChild(e)}}),[]),s().createElement(s().Fragment,null,s().createElement(c.A,{title:"Developers - Sandbox",description:"The TypeScript sandbox powers the TypeScript Playground. Learn how you can make your experiences like the playground using the sandbox.",lang:"en"},s().createElement("div",{id:"dev"},s().createElement(p.X,{active:"sandbox"}),s().createElement("div",{className:"raised content main-content-block"},s().createElement("div",{className:"split-fivehundred"},s().createElement("h1",{style:{marginTop:"20px"}},"TypeScript Sandbox"),s().createElement("p",null,"A DOM library for interacting with TypeScript and JavaScript code, which powers the heart of the"," ",s().createElement("a",{href:(0,l.withPrefix)("/play/")},"TypeScript playground")),s().createElement("p",null,"You can use the TypeScript sandbox for:"),s().createElement("ul",null,s().createElement("li",null,"Building IDE-like experiences for people to explore your library's API"),s().createElement("li",null,"Building interactive web tools which use TypeScript, with a lot of the Playgrounds developer experience for free")),s().createElement("p",null,"For example, the sandbox to the side has grabbed the Types for"," ",s().createElement("a",{href:"https://danger.systems/js/"},"DangerJS")," with no modifications for this code sample. This is because the Playground's Automatic Type Acquisition is enabled by default. It will also look for the same parameters for code, and selection indexes inside the URL."),s().createElement("p",null,"Try clicking"," ",s().createElement("a",{href:"?q=1#code/PTAEBUAsFMGdtAYwPYFtXQHYBdagO7QBOCiJAhttACagCWmo2MEAngA7QDKZd72oAAoAbcqwDmRZAFdM1AFAhQ5OUxiNmCAKoAlADKhI5WJALGkydnRqhkAN2JNkahJmj5QuvfMVgodPAwVPBVWUHYpACtoRAFpWAZxNk4eIj4BWBVqACNkAA84JBVfUGhjOmEw+FUUagRyKVlabGcyxFNkTSJQHxRMWAEYYWFnAF5QACIACWhh5wB1ZCJhagn5PthkYWgAOhHxAAohkYBKIA"},"this URL")," ","to see that in action."," "),s().createElement("p",null,"This library builds on top of the"," ",s().createElement("a",{href:"https://microsoft.github.io/monaco-editor/index.html"},"Monaco Editor"),", providing a higher level API but offering access to all the lower-level APIs via a single ",s().createElement("code",null,"sandbox")," object."),s().createElement("p",null,"You can find the code for the TypeScript Sandbox inside the"," ",s().createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/tree/v2/packages/sandbox#@typescript/sandbox"},"microsoft/TypeScript-Website")," ","mono-repo.")),s().createElement(u.W,{hideOnTouch:!0},s().createElement("div",{className:"fivehundred",style:{borderLeft:"1px solid gray"}},s().createElement("div",{id:"loader"},s().createElement("div",{className:"lds-grid"},s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null),s().createElement("div",null)),s().createElement("p",{id:"loading-message",role:"status"},"Downloading Sandbox...")),s().createElement("div",{style:{height:"400px",display:"none"},id:"monaco-editor-embed"})))),s().createElement("div",{className:"raised main-content-block"},s().createElement("h2",null,"Usage"),s().createElement("p",null,"A sandbox uses the same tools as monaco-editor, meaning this library is shipped as an AMD bundle which you can use the"," ",s().createElement("a",{href:"https://github.com/microsoft/vscode-loader/"},"VSCode Loader")," ","to ",s().createElement("code",null,"require"),"."),s().createElement("p",null,"Because we need it for the TypeScript website, you can use our hosted copy"," ",s().createElement("a",{href:"https://typescriptlang.org/js/vs.loader.js",title:"Link to the JS for the visual studio require loader"},"here.")),s().createElement("h3",null,"Get Started"),s().createElement("p",null,"Create a new file: ",s().createElement("code",null,"index.html")," and paste this code into that file."),s().createElement("pre",null,s().createElement("code",{className:"html-code"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n  </head>\n  <div id=\"loader\">Loading...</div>\n  <div id=\"monaco-editor-embed\" style=\"height: 800px;\" />\n  <script>\n    // First set up the VSCode loader in a script tag\n    const getLoaderScript = document.createElement('script')\n    getLoaderScript.src = 'https://www.typescriptlang.org/js/vs.loader.js'\n    getLoaderScript.async = true\n    getLoaderScript.onload = () => {\n      // Now the loader is ready, tell require where it can get the version of monaco, and the sandbox\n      // This version uses the latest version of the sandbox, which is used on the TypeScript website\n\n      // For the monaco version you can use unpkg or the TypeSCript web infra CDN\n      // You can see the available releases for TypeScript here:\n      // https://typescript.azureedge.net/indexes/releases.json\n      //\n      require.config({\n        paths: {\n          vs: 'https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs',\n          // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',\n          sandbox: 'https://www.typescriptlang.org/js/sandbox',\n        },\n        // This is something you need for monaco to work\n        ignoreDuplicateModules: ['vs/editor/editor.main'],\n      })\n\n      // Grab a copy of monaco, TypeScript and the sandbox\n      require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker', 'sandbox/index'], (\n        main,\n        _tsWorker,\n        sandboxFactory\n      ) => {\n        const initialCode = `import {markdown, danger} from \"danger\"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile(\"package.json\")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes(\"@types\")) ?? []\n    if (newTypesDeps.length){\n        markdown(\"Added new types packages \" + newTypesDeps.join(\", \"))\n    }\n}\n`\n\n        const isOK = main && window.ts && sandboxFactory\n        if (isOK) {\n          document.getElementById('loader').parentNode.removeChild(document.getElementById('loader'))\n        } else {\n          console.error('Could not get all the dependencies of sandbox set up!')\n          console.error('main', !!main, 'ts', !!window.ts, 'sandbox', !!sandbox)\n          return\n        }\n\n        // Create a sandbox and embed it into the the div #monaco-editor-embed\n        const sandboxConfig = {\n          text: initialCode,\n          compilerOptions: {},\n          domID: 'monaco-editor-embed',\n        }\n\n        const sandbox = sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts)\n        sandbox.editor.focus()\n      })\n    }\n\n    document.body.appendChild(getLoaderScript)\n  <\/script>\n</html>")),s().createElement("p",null,"Opening the file ",s().createElement("code",null,"index.html")," in a web browser will load up the same sandbox up at the top of the page."),s().createElement("h3",null,"Some examples of the API"),f.map((function(e){return s().createElement("div",{className:"split-code",key:e.blurb},s().createElement("p",null,e.blurb),s().createElement("pre",null,s().createElement("code",{className:"ts-code"},e.code.trim())))})),s().createElement("p",null,"The API is mainly a light shim over the"," ",s().createElement("a",{href:"https://microsoft.github.io/monaco-editor/api/index.html"},"monaco-editor API")," ","with the"," ",s().createElement("a",{href:"https://github.com/microsoft/monaco-typescript"},"monaco-typescript API"),".")))))};n.default=function(e){return s().createElement(d.R,{locale:"en"},s().createElement(h,e))};var f=[{blurb:"Converting the user's TypeScript into JavaScript",code:"const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// Async because it needs to go  \nconst js = await sandbox.getRunnableJS()\nconsole.log(js)"},{blurb:"Get the DTS for the user's editor",code:"const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\nconst dts = await sandbox.getDTSForCode()\nconsole.log(dts)"},{blurb:"Make a request for an LSP response",code:"const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// A worker here is a web-worker, set up by monaco-typescript\n// which does the computation in the background \nconst worker = await sandbox.getWorkerProcess()\nconst definitions =  await client.getDefinitionAtPosition(model.uri.toString(), 6)\n  "},{blurb:"Change compiler flags using a few different APIs",code:'const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// Hook in to all changes to the compiler\nsandbox.setDidUpdateCompilerSettings((newOptions) => {\n  console.log("Compiler settings changed: ", newOptions)\n})\n\n// Update via key value\nsandbox.updateCompilerSetting("allowJs", true)\n// Update via an object\nsandbox.updateCompilerSettings({ jsx: 0 })\n// Replace the compiler settings\nsandbox.setCompilerSettings({})\n'},{blurb:"Highlight some code in the editor",code:"const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\nconst start = {\n  lineNumber: 0,\n  column: 0\n}\n\nconst end = {\n  lineNumber: 0,\n  column: 4\n}\n\nconst decorations = sandbox.editor.deltaDecorations([], [\n  {\n    range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),\n    options: { inlineClassName: 'error-highlight' },\n  },\n])\n"},{blurb:"Create your own playground.",code:'const sandbox = createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// Use a script to make a JSON file like:\n// { \n//   "file:///node_modules/types/keyboard/index.d.ts": "export const enterKey: string"\n// }\n//\n// Where the keys are the paths, and the values are the source-code. The sandbox\n// will use the node resolution lookup strategy by default.\n\nconst dtsFiles = {} \n\nObject.keys(dtsFiles).forEach(path => {\n  sandbox.languageServiceDefaults.addExtraLib(dts[path], path);\n});\n'}]}}]);
//# sourceMappingURL=component---src-pages-dev-sandbox-tsx-63c0a9fca9c5ca693121.js.map