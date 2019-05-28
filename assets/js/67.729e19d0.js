(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{241:function(t,e,a){"use strict";a.r(e);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(6),n=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projects","aria-hidden":"true"}},[t._v("#")]),t._v(" Projects")]),t._v(" "),a("blockquote",[a("p",[t._v("Each project represents a database. Projects can be used to organize different application schemas or environments.")])]),t._v(" "),a("h2",{attrs:{id:"multitenancy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multitenancy","aria-hidden":"true"}},[t._v("#")]),t._v(" Multitenancy")]),t._v(" "),a("p",[t._v("Directus allows for one instance of the API/App to manage any number of project databases. Each project has its own database and is configured in its dedicated API config file, where all options can be configured.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/api/configuration.html#config-file-options"}},[t._v("View all project options available within the API configuration.")])],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/api/reference.html#project-prefix"}},[t._v("Learn how to connect to your different project APIs.")])],1)]),t._v(" "),a("h2",{attrs:{id:"creating-a-new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a New Project")]),t._v(" "),a("ol",[a("li",[t._v("Create a new database and database user")]),t._v(" "),a("li",[t._v("Create a new API config file")]),t._v(" "),a("li",[t._v("Add the API URL to your App config file")]),t._v(" "),a("li",[t._v("Run the Directus Installer or manually setup")])]),t._v(" "),a("h2",{attrs:{id:"deleting-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Deleting a Project")]),t._v(" "),a("p",[t._v("As of now, this can only be done manually.")]),t._v(" "),a("ol",[a("li",[t._v("Delete the project's database")]),t._v(" "),a("li",[t._v("Delete the project's API config file")]),t._v(" "),a("li",[t._v("Delete the project from your App's config file")]),t._v(" "),a("li",[t._v("Delete any files in that project's storage adapter")])]),t._v(" "),a("h2",{attrs:{id:"linking-to-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linking-to-a-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Linking to a Project")]),t._v(" "),a("p",[t._v('Since Directus is multitenant, you need a way to link to specific projects. This is accomplished by adding a project query parameter to the login page containing a base64 encoded URL of the API you want to use, the application will automatically select "Other" (if allowed) and pre-fill the API URL.')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://directus.app/#/login?project=aHR0cHM6Ly9hcGkuZGlyZWN0dXMuY2xvdWQvZGNFeEFNcGxFYVBJLw==\n")])])])])},[],!1,null,null,null);n.options.__file="projects.md";e.default=n.exports}}]);