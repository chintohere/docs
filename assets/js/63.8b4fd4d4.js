(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{288:function(e,t,o){"use strict";o.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=o(6),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[o("h1",{attrs:{id:"field-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#field-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Field Types")]),e._v(" "),o("blockquote",[o("p",[e._v("To support multiple SQL vendors (MySQL, PostgreSQL, MS-SQL, etc) Directus has a generalized set of field types to define API output ("),o("code",[e._v("array")]),e._v(", "),o("code",[e._v("json")]),e._v(", "),o("code",[e._v("boolean")]),e._v(", etc) and system data ("),o("code",[e._v("m2o")]),e._v(", "),o("code",[e._v("alias")]),e._v(", "),o("code",[e._v("group")]),e._v(", etc).")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("alias")]),e._v(" – Fields that do not have corresponding column in the database")]),e._v(" "),o("li",[o("code",[e._v("array")]),e._v(" – Standard array format in API response")]),e._v(" "),o("li",[o("code",[e._v("binary")]),e._v(" – Binary strings limited by its length")]),e._v(" "),o("li",[o("code",[e._v("boolean")]),e._v(" – "),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")])]),e._v(" "),o("li",[o("code",[e._v("datetime")]),e._v(" – A date and time in ISO format, eg: "),o("code",[e._v("2018-09-19T14:00:43+00:00")])]),e._v(" "),o("li",[o("code",[e._v("date")]),e._v(" – Date, eg: "),o("code",[e._v("2018-09-19")])]),e._v(" "),o("li",[o("code",[e._v("time")]),e._v(" – Time, eg: "),o("code",[e._v("14:09:22")])]),e._v(" "),o("li",[o("code",[e._v("file")]),e._v(" – Foreign key to "),o("code",[e._v("directus_files.id")])]),e._v(" "),o("li",[o("code",[e._v("group")]),e._v(" – Groups fields together visually, children save group into "),o("code",[e._v("directus_fields.group")])]),e._v(" "),o("li",[o("code",[e._v("hash")]),e._v(" – Its value gets hashed based on the "),o("code",[e._v("hasher")]),e._v(" option. (Default to: "),o("a",{attrs:{href:"http://php.net/manual/en/function.password-hash.php",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("password_hash.PASSWORD_DEFAULT")]),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("code",[e._v("integer")]),e._v(" – Whole number")]),e._v(" "),o("li",[o("code",[e._v("decimal")]),e._v(" – Number that includes a decimal")]),e._v(" "),o("li",[o("code",[e._v("json")]),e._v(" – Standard JSON format in API response")]),e._v(" "),o("li",[o("code",[e._v("lang")]),e._v(" – Specific to translation interfaces, this stores the language key")]),e._v(" "),o("li",[o("code",[e._v("m2o")]),e._v(" – Many-to-One Relationship")]),e._v(" "),o("li",[o("code",[e._v("o2m")]),e._v(" – One-to-Many Relationship")]),e._v(" "),o("li",[o("code",[e._v("slug")]),e._v(" – Removes all the special characters from another field. It will ignore the mirrored field value if the slug already has a value set.")]),e._v(" "),o("li",[o("code",[e._v("sort")]),e._v(" – System field that stores a item order within the collection items")]),e._v(" "),o("li",[o("code",[e._v("status")]),e._v(" – System field used for publishing workflows")]),e._v(" "),o("li",[o("code",[e._v("string")]),e._v(" – Any text or characters, limited by its length")]),e._v(" "),o("li",[o("code",[e._v("translation")]),e._v(" – Specific to translation interfaces, this is a "),o("code",[e._v("o2m")]),e._v(" for multi-lingual content")]),e._v(" "),o("li",[o("code",[e._v("uuid")]),e._v(" – A Universally Unique Identifier")]),e._v(" "),o("li",[o("code",[e._v("datetime_created")]),e._v(" – System field to track the datetime an item was created, used by revisions")]),e._v(" "),o("li",[o("code",[e._v("datetime_updated")]),e._v(" – System field to track the datetime an item was updated, used by revisions")]),e._v(" "),o("li",[o("code",[e._v("user_created")]),e._v(" – System field to track the user who created an item, used by revisions")]),e._v(" "),o("li",[o("code",[e._v("user_updated")]),e._v(" – System field to track the user who updated an item, used by revisions")])]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Datatypes")]),e._v(" "),o("p",[e._v("When creating or updating fields you can also set a vendor-specific datatype for more granular DBA control over data storage.")])])])},[],!1,null,null,null);s.options.__file="field-types.md";t.default=s.exports}}]);