(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{584:function(e,t,a){"use strict";a.r(t);var s=a(17),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apache-常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-常用配置"}},[e._v("#")]),e._v(" Apache 常用配置")]),e._v(" "),a("h2",{attrs:{id:"配置允许跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置允许跨域"}},[e._v("#")]),e._v(" 配置允许跨域")]),e._v(" "),a("p",[e._v("修改 "),a("strong",[e._v("xampp/apache/conf/httpd.conf")]),e._v(" 配置文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<IfModule headers_module>\n    ...\n    Header set Access-Control-Allow-Origin *\n</IfModule>\n")])])]),a("h2",{attrs:{id:"directory-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-配置"}},[e._v("#")]),e._v(" Directory 配置")]),e._v(" "),a("p",[e._v("在Apache服务器的httpd.conf配置文件中，Directory配置项被用于指定在服务器上访问特定目录时的配置信息。它允许你对特定目录的访问进行细粒度的控制。")]),e._v(" "),a("p",[e._v("Directory配置项的一般语法如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Directory "路径">\n    配置指令\n</Directory>\n')])])]),a("p",[e._v("其中，路径指定了要配置的目录的路径。在配置指令部分，你可以使用各种不同的指令来定义具体的配置。")]),e._v(" "),a("p",[e._v("下面是一些常见的Directory配置指令的示例：")]),e._v(" "),a("ul",[a("li",[e._v("AllowOverride：指定是否允许使用.htaccess文件来覆盖配置。可选值有All、None、AuthConfig、FileInfo、Indexes等。")]),e._v(" "),a("li",[e._v("Options：指定目录的选项，例如Indexes（允许列出目录内容）、FollowSymLinks（允许跟随符号链接）等。")]),e._v(" "),a("li",[e._v("Order：指定访问控制的顺序，可选值有allow、deny。")]),e._v(" "),a("li",[e._v("Allow：指定允许访问的IP地址或IP地址范围。")]),e._v(" "),a("li",[e._v("Deny：指定拒绝访问的IP地址或IP地址范围。")])]),e._v(" "),a("p",[e._v("以下是一个示例，展示了如何使用Directory配置项来设置特定目录的访问控制：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Directory "/var/www/html">\n    Options Indexes FollowSymLinks\n    AllowOverride None\n    Order allow,deny\n    Allow from all\n</Directory>\n')])])]),a("p",[e._v("上述示例中，配置了位于/var/www/html目录下的文件的访问权限。其中，Options指定了允许列表目录内容和跟随符号链接，AllowOverride指定不允许使用.htaccess文件进行配置覆盖，Order和Allow指定了允许所有IP地址的访问。")]),e._v(" "),a("p",[e._v("请注意，为了使Directory配置项生效，需要确保Apache服务器已加载了所在httpd.conf文件中的配置。通常，在配置文件中的其他位置会包含一个类似于 "),a("code",[e._v("Include conf/extra/httpd-vhosts.conf")]),e._v(" 的语句，该语句会加载其他配置文件，你可以在其中添加Directory配置项。")]),e._v(" "),a("h2",{attrs:{id:"禁止浏览目录直接列出文件列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止浏览目录直接列出文件列表"}},[e._v("#")]),e._v(" 禁止浏览目录直接列出文件列表")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("方法1：编辑配置文件 "),a("strong",[e._v("/xampp/apache/conf/httpd.conf")])]),e._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 在浏览器中访问/js目录时禁止直接列出文件列表：去掉 Options 中的 Indexes(目录允许目录索引)\n<Directory "D:/Code/xampp/htdocs/js">\n    # Options Indexes FollowSymLinks ExecCGI Includes\n    Options FollowSymLinks ExecCGI Includes\n    AllowOverride All\n    Order allow,deny\n    Allow from all\n</Directory>\n')])])])])])]),e._v(" "),a("li",[a("p",[e._v("方法2：或在 "),a("strong",[e._v("Indexes")]),e._v(" 前面添加 "),a("strong",[e._v("-")]),e._v(" 号")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("在Indexes前，加 + 代表允许目录浏览；加 – 代表禁止目录浏览")])])])]),e._v(" "),a("li",[a("p",[e._v("方法3：可以在***根目录的 .htaccess 文件***中输入")]),e._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<Files *>\n    Options -Indexes \n</Files>\n")])])]),a("p",[e._v("阻止Apache将目录结构列表显示出来")])])])])]),e._v(" "),a("p",[a("strong",[e._v("最后重启Apache服务器")])])])}),[],!1,null,null,null);t.default=r.exports}}]);