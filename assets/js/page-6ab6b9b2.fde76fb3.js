(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{96:function(e,t,n){"use strict";n.r(t);var r=n(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"file-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" File Structure")]),e._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[e._v(".\n├── dist → Built Output\n│\n├── src\n│   ├── .vuepress (Optional) → Vuepress Config\n│   │   ├── components (Optional) → Components in this dir will be registered as global components\n│   │   │\n│   │   ├── theme (Optional) → Personal built Theme\n│   │   │   │\n│   │   │   ├── ... → See detail at 'Theme' part\n│   │   │   │\n│   │   │   └── Layout.vue → Website layout\n│   │   │\n│   │   ├── public (Optional) → Static resource dir\n│   │   │\n│   │   ├── styles (Optional) → Stores style related files\n│   │   │   ├── index.styl →  Automatically applied global style files\n│   │   │   └── palette.styl → override and set color constants\n│   │   │\n│   │   ├── templates (Optional, Config carefully) → Templates\n│   │   │   ├── dev.html → HTML template file for development environment\n│   │   │   └── ssr.html → Vue SSR based HTML template file in the built time\n│   │   │\n│   │   ├── config.js (Optional) → Entry file of configuration\n│   │   │\n│   │   └── enhanceApp.js (Optional) → App level enhancement\n│   │\n│   ├── readme.md → Mainpage\n│   ├── vuepress\n│   │   ├── file.md\n│   │   └── readme.md\n│   ├── markdown\n│   │   ├── emoji.md\n│   │   └── readme.md\n│   │\n│   └── en → English Folder\n│       ├── readme.md\n│       │\n│       ├── vuepress\n│       │   └── readme.md\n│       │\n│       └── markdown\n│           ├── emoji.md\n│           └── readme.md\n│\n├─── readme.md → Project default description\n├─── readme.en-US.md → Project English description\n│\n├── LICENSE → LICENSE File\n│\n├── package-lock.json → The structure of the package actually installed by the project\n└── package.json → Node.js declaration file for the entire project\n\n")])])]),n("h2",{attrs:{id:"src-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-folder","aria-hidden":"true"}},[e._v("#")]),e._v(" src folder")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("source code")]),e._v(" is placed in the "),n("code",[e._v("src")]),e._v(" directory, in which all "),n("strong",[e._v("markdown")]),e._v(" files are rendered into "),n("strong",[e._v("HTML")]),e._v(". That is the time when "),n("strong",[e._v("readme.md")]),e._v(" is rendered into "),n("strong",[e._v("index.html")]),e._v(". In addition, Vuepress's configuration files are all placed in the "),n("code",[e._v("src/.vuepress")]),e._v(" directory.")]),e._v(" "),n("h2",{attrs:{id:"dist-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dist-folder","aria-hidden":"true"}},[e._v("#")]),e._v(" dist folder")]),e._v(" "),n("p",[e._v("The built code will be "),n("strong",[e._v("output")]),e._v(" to the "),n("strong",[e._v("dist")]),e._v(" directory, just upload it to the server you need to deploy.")]),e._v(" "),n("p",[e._v("If you use an automated build tool, you "),n("strong",[e._v("DONOT")]),e._v(" need to perform the build locally after you turn on automatic deployment.。")]),e._v(" "),n("h2",{attrs:{id:"package-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[e._v("#")]),e._v(" package.json")]),e._v(" "),n("p",[e._v("Node.js declaration file for the entire project, it is a file that must be included in the Node project. Contains information such as "),n("strong",[e._v("project name")]),e._v(", "),n("strong",[e._v("details")]),e._v(", "),n("strong",[e._v("license")]),e._v(", and "),n("strong",[e._v("packages")]),e._v(" being used.")]),e._v(" "),n("h2",{attrs:{id:"readme-md"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#readme-md","aria-hidden":"true"}},[e._v("#")]),e._v(" readme.md")]),e._v(" "),n("p",[e._v("Project documentation on Github.")]),e._v(" "),n("h2",{attrs:{id:"others"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#others","aria-hidden":"true"}},[e._v("#")]),e._v(" Others")]),e._v(" "),n("p",[e._v("File that do not need to be understand at the beginning:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Files")]),e._v(" "),n("th",[e._v("Content")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("node_modules")]),e._v(" "),n("td",[e._v("Stored the package used by the project")])]),e._v(" "),n("tr",[n("td",[e._v("LICENSE")]),e._v(" "),n("td",[e._v("Project license document")])]),e._v(" "),n("tr",[n("td",[e._v("package-lock.json")]),e._v(" "),n("td",[e._v("The structure of the package actually installed by the project")])]),e._v(" "),n("tr",[n("td",[e._v(".eslintignore")]),e._v(" "),n("td",[e._v("Files ignored by ESLint")])]),e._v(" "),n("tr",[n("td",[e._v(".eslintrc.js")]),e._v(" "),n("td",[e._v("ESLint rule configuration file")])]),e._v(" "),n("tr",[n("td",[e._v(".nvmrc")]),e._v(" "),n("td",[e._v("Node version declaration file of the environment")])]),e._v(" "),n("tr",[n("td",[e._v(".travis.yml")]),e._v(" "),n("td",[e._v("Travis CI Config file")])])])]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),n("p",[e._v("ESLint is a JS code linter.")]),e._v(" "),n("p",[e._v("Beginners can use it in learning to reduce their own mistakes and develop a standardized code style. But you don't need to know the specific configuration method and working principle.")])]),e._v(" "),n("h2",{attrs:{id:"vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress","aria-hidden":"true"}},[e._v("#")]),e._v(" .vuepress")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v(".vuepress")]),e._v(" folder should be placed directly in the source code directory. It contains the configuration options for Vuepress.")]),e._v(" "),n("h3",{attrs:{id:"config-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-js","aria-hidden":"true"}},[e._v("#")]),e._v(" config.js")]),e._v(" "),n("p",[e._v("The configuration file for the project. For specific configuration instructions, please open the file to view the comments.")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),n("p",[e._v("For more details, please view"),n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress Config"),n("OutboundLink")],1)])]),e._v(" "),n("h3",{attrs:{id:"public-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#public-folder","aria-hidden":"true"}},[e._v("#")]),e._v(" public folder")]),e._v(" "),n("p",[e._v("A folder where other files on the site being placed. The files in the folder will be copied directly to the built directory when you build. Its content are usually resources that do not need to be imported using relative paths, such as icons for websites.")]),e._v(" "),n("h3",{attrs:{id:"style-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#style-folder","aria-hidden":"true"}},[e._v("#")]),e._v(" style folder")]),e._v(" "),n("p",[e._v("The style of the entire site is placed, where "),n("code",[e._v("index.styl")]),e._v(" is the style file for the extra expansion of the entire site, and "),n("code",[e._v("palette.styl")]),e._v(" is the color configuration of the entire site.")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),n("p",[e._v("Styl is a extend of CSS that extends and changes the way CSS is written, and variables can be used derectly. Beginners do not need to master.")])]),e._v(" "),n("p",[e._v("File that do not need to be understand at the beginning:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Forlder")]),e._v(" "),n("th",[e._v("Content")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("compoenents")]),e._v(" "),n("td",[e._v("Placed the Vue component in the Vuepress site")])]),e._v(" "),n("tr",[n("td",[e._v("theme")]),e._v(" "),n("td",[e._v("Placed the theme of the Vuepress site")])]),e._v(" "),n("tr",[n("td",[e._v("templates")]),e._v(" "),n("td",[e._v("Placed the template and layout of the Vuepress site")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);