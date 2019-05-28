(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{172:function(e,t,a){e.exports=a.p+"assets/img/workflow-example.e7c7e2e3.png"},243:function(e,t,a){"use strict";a.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(6),o=Object(s.a)(i,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[i("h1",{attrs:{id:"permissions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),i("blockquote",[i("p",[e._v("Directus permissions are extremely granular and powerful, but don't feel overwhelmed, you don't need to use or even understand the more advanced features to setup basic roles.")])]),e._v(" "),i("h2",{attrs:{id:"collection-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#collection-level","aria-hidden":"true"}},[e._v("#")]),e._v(" Collection Level")]),e._v(" "),i("p",[e._v("Directus supports the standard Create, Read, Update, and Delete (CRUD) permissions, and adds additional support for Comments and Explanations. Furthermore, some privileges have the ability to be scoped to the current user or other their role. Below are all of the collection-level permissions:")]),e._v(" "),i("h3",{attrs:{id:"create"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[e._v("#")]),e._v(" Create")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(", default) Can not create any items")]),e._v(" "),i("li",[i("code",[e._v("full")]),e._v(" Can create items")])]),e._v(" "),i("h3",{attrs:{id:"read"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[e._v("#")]),e._v(" Read")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(", default) Can not view any items")]),e._v(" "),i("li",[i("code",[e._v("mine")]),e._v(" Can only view "),i("em",[e._v("their")]),e._v(" items")]),e._v(" "),i("li",[i("code",[e._v("role")]),e._v(" Can only view items created by members of this role")]),e._v(" "),i("li",[i("code",[e._v("full")]),e._v(" Can view all items")])]),e._v(" "),i("h3",{attrs:{id:"update"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" Update")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(", default) Can not update any items")]),e._v(" "),i("li",[i("code",[e._v("mine")]),e._v(" Can only update "),i("em",[e._v("their")]),e._v(" items")]),e._v(" "),i("li",[i("code",[e._v("role")]),e._v(" Can only update items created by members of this role")]),e._v(" "),i("li",[i("code",[e._v("full")]),e._v(" Can update all items")])]),e._v(" "),i("h3",{attrs:{id:"delete"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(", default) Can not delete any items")]),e._v(" "),i("li",[i("code",[e._v("mine")]),e._v(" Can only delete "),i("em",[e._v("their")]),e._v(" items")]),e._v(" "),i("li",[i("code",[e._v("role")]),e._v(" Can only delete items created by members of this role")]),e._v(" "),i("li",[i("code",[e._v("full")]),e._v(" Can delete all items")])]),e._v(" "),i("h3",{attrs:{id:"comment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#comment","aria-hidden":"true"}},[e._v("#")]),e._v(" Comment")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" Can not comment")]),e._v(" "),i("li",[i("code",[e._v("read")]),e._v(" Can only see comments")]),e._v(" "),i("li",[i("code",[e._v("create")]),e._v(" Can add comments")]),e._v(" "),i("li",[i("code",[e._v("update")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(", default) Can add, edit and delete their comments")]),e._v(" "),i("li",[i("code",[e._v("full")]),e._v(" Can add, edit and delete any comments (including other users)")])]),e._v(" "),i("h3",{attrs:{id:"explain-force"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#explain-force","aria-hidden":"true"}},[e._v("#")]),e._v(" Explain (Force)")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("none")]),e._v(" (or "),i("code",[e._v("NULL")]),e._v(', default) Never requires "commit" comment')]),e._v(" "),i("li",[i("code",[e._v("create")]),e._v(' Requires a "commit" comment on Create')]),e._v(" "),i("li",[i("code",[e._v("update")]),e._v(' Requires a "commit" comment on Update')]),e._v(" "),i("li",[i("code",[e._v("always")]),e._v(' Requires a "commit" comment on Create and Update')])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("mine")]),e._v(" and "),i("code",[e._v("role")]),e._v(" permission options are only available when the parent collection contains a "),i("code",[e._v("created_by")]),e._v(" field type. See below for setup.")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v('Hover over of each row to access an "All/None" shortcut per collection, or click the column header to toggle that permission for all collections.')])]),e._v(" "),i("h3",{attrs:{id:"accountability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accountability","aria-hidden":"true"}},[e._v("#")]),e._v(" Accountability")]),e._v(" "),i("p",[e._v("To enforce the "),i("code",[e._v("mine")]),e._v(" and "),i("code",[e._v("role")]),e._v(" permissions described above, Directus needs to know who created an item. Additionally, you may want to track "),i("em",[e._v("when")]),e._v(" an item was created, or when it was last "),i("em",[e._v("updated")]),e._v(". This can all happen automatically, but you first must include a few system fields.")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("User Created")]),e._v(" – Stores the ID of the user who created this item. Setup: Create a field with the "),i("code",[e._v("user_created")]),e._v(" interface\n"),i("ul",[i("li",[e._v("This field is required to use the "),i("code",[e._v("mine")]),e._v(" and "),i("code",[e._v("role")]),e._v(" permissions")])])]),e._v(" "),i("li",[i("strong",[e._v("DateTime Created")]),e._v(" – Stores the GMT datetime this item was created. Setup: Create a field with the "),i("code",[e._v("datetime_created")]),e._v(" interface")]),e._v(" "),i("li",[i("strong",[e._v("User Updated")]),e._v(" – Stores the ID of the last user to update this item. Setup: Create a field with the "),i("code",[e._v("user_updated")]),e._v(" interface")]),e._v(" "),i("li",[i("strong",[e._v("DateTime Updated")]),e._v(" – Stores the GMT datetime this item was last updated. Setup: Create a field with the "),i("code",[e._v("datetime_updated")]),e._v(" interface")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("There are dedicated interfaces available to make it easier to set up the above fields.")])]),e._v(" "),i("h2",{attrs:{id:"field-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#field-level","aria-hidden":"true"}},[e._v("#")]),e._v(" Field Level")]),e._v(" "),i("p",[e._v('Clicking "Fields" allows you to blacklist certain fields for either read and write. This allows you to control which fields are visible or editable within the collection. By default, fields are both readable and writable.')]),e._v(" "),i("h2",{attrs:{id:"status-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status-level","aria-hidden":"true"}},[e._v("#")]),e._v(" Status Level")]),e._v(" "),i("p",[e._v('Clicking "Allowed Statuses" allows you to blacklist certain status options. This allows you to control which status options a user can choose – for example, not allowing an Intern to '),i("em",[e._v("publish")]),e._v(" items. By default, all statuses are available.")]),e._v(" "),i("h2",{attrs:{id:"workflow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#workflow","aria-hidden":"true"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),i("p",[e._v("Workflows are one of the most powerful features of Directus, allowing for all permissions to be controlled "),i("strong",[e._v("per status")]),e._v(". Workflow is enabled by clicking the arrows at the far right to expand the collection into Workflow mode and show dedicated permission rows for each status.")]),e._v(" "),i("p",[e._v('In addition to the custom options set within your status interface, there is always a "On Creation" option that sets permissions for when an item is being created. This is useful because when an item is being created it doesn\'t yet have a status set.')]),e._v(" "),i("h3",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example")]),e._v(" "),i("p",[e._v("This feature enables absolute control over the most fluid workflows, but it can be difficult to fully understand its potential, so let's explore an example with all the bells and whistles:")]),e._v(" "),i("p",[i("img",{attrs:{src:a(172),alt:"Workflow Example"}})]),e._v(" "),i("h4",{attrs:{id:"intern"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intern","aria-hidden":"true"}},[e._v("#")]),e._v(" Intern")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Creating")]),e._v(" – Can create Draft or Review items")]),e._v(" "),i("li",[i("strong",[e._v("Read")]),e._v(" – Can see Draft items they created, Review items anyone in their role created, all Published items, and all Locked items")]),e._v(" "),i("li",[i("strong",[e._v("Update")]),e._v(" – Can only update their Drafts. Can save their drafts to Review, but once submitted they can no longer be edited")]),e._v(" "),i("li",[i("strong",[e._v("Delete")]),e._v(" – Can only delete their Drafts items")]),e._v(" "),i("li",[i("strong",[e._v("Explain")]),e._v(" – Must leave an explanation when creating/updating Draft or Review items")]),e._v(" "),i("li",[i("strong",[e._v("Comment")]),e._v(" – Can comment on their Draft items or Review items created by members of their role")])]),e._v(" "),i("h4",{attrs:{id:"staff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#staff","aria-hidden":"true"}},[e._v("#")]),e._v(" Staff")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Creating")]),e._v(" – Can create Draft, Review, or Published items")]),e._v(" "),i("li",[i("strong",[e._v("Read")]),e._v(" – Can see all Draft, Review, Published, and Locked items")]),e._v(" "),i("li",[i("strong",[e._v("Update")]),e._v(" – Can update all Drafts, Review, and Published items. Published items can only be updated to Draft (not Review)")]),e._v(" "),i("li",[i("strong",[e._v("Delete")]),e._v(" – Can only delete any Drafts or Review items, and can Delete their Published items")]),e._v(" "),i("li",[i("strong",[e._v("Explain")]),e._v(" – Must leave an explanation when creating/updating Published items")]),e._v(" "),i("li",[i("strong",[e._v("Comment")]),e._v(" – Can comment on any Draft, Review, or Published items")])]),e._v(" "),i("h4",{attrs:{id:"manager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manager","aria-hidden":"true"}},[e._v("#")]),e._v(" Manager")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Creating")]),e._v(" – Can create Draft, Review, Published, or Locked items")]),e._v(" "),i("li",[i("strong",[e._v("Read")]),e._v(" – Can see all Draft, Review, Published, and Locked items")]),e._v(" "),i("li",[i("strong",[e._v("Update")]),e._v(" – Can update all Drafts, Review, Published, and Locked items. Status can only be updated linearly")]),e._v(" "),i("li",[i("strong",[e._v("Delete")]),e._v(" – Can delete any items except Locked")]),e._v(" "),i("li",[i("strong",[e._v("Explain")]),e._v(" – Does not need to explain creations or updates")]),e._v(" "),i("li",[i("strong",[e._v("Comment")]),e._v(" – Can comment on any item")])]),e._v(" "),i("h4",{attrs:{id:"administrator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#administrator","aria-hidden":"true"}},[e._v("#")]),e._v(" Administrator")]),e._v(" "),i("p",[e._v("Not shown in the diagram, but worth noting: the Admin role always has "),i("em",[e._v("full")]),e._v(" permissions and is not required to explain anything.")]),e._v(" "),i("h2",{attrs:{id:"app-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#app-level","aria-hidden":"true"}},[e._v("#")]),e._v(" App Level")]),e._v(" "),i("p",[e._v("Below the permissions interface is a toggle to show the Directus system collections. These permissions are automatically generated when new roles are created and can be used to control certain system pages, such as: File Library, User Directory, and My Activity.")]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Changing the default system permissions can result in unexpected behavior or a completely broken platform. The API and App rely on certain data. For example, full read permission for "),i("code",[e._v("directus_users")]),e._v(" is required. Only update these values if you know exactly what you're doing.")])]),e._v(" "),i("h2",{attrs:{id:"ip-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ip-level","aria-hidden":"true"}},[e._v("#")]),e._v(" IP Level")]),e._v(" "),i("p",[e._v("You can also control access to Directus based on a user's IP address. This is useful if you need to limit access to specific offices or locations, provided they have a static IP address. Simply add a CSV of IP addresses to limit, or leave blank to not limit.")])])},[],!1,null,null,null);o.options.__file="permissions.md";t.default=o.exports}}]);