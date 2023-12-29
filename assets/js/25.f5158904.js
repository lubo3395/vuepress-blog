(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{567:function(t,a,n){"use strict";n.r(a);var s=n(17),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"animationmanager-动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animationmanager-动画"}},[t._v("#")]),t._v(" AnimationManager 动画")]),t._v(" "),n("h3",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("h3",{attrs:{id:"方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),n("h4",{attrs:{id:"add"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add()")]),t._v(" "),n("blockquote",[n("p",[t._v("add(name, frames, frameRate, loop, useNumericIndex) → {"),n("a",{attrs:{href:"http://phaser.io/docs/2.6.2/Phaser.Animation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Phaser.Animation"),n("OutboundLink")],1),t._v("}")]),t._v(" "),n("p",[t._v("在给定的键下添加一个新的动画。可以选择设置帧、帧率和循环。\n以这种方式添加的动画可以用播放功能来回放。")])]),t._v(" "),n("blockquote",[n("p",[t._v("参数")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("name 【string】必选")]),t._v(" "),n("p",[t._v('动画的唯一名称（在这个精灵中），即 "运行"、"发射"、"行走"。')])]),t._v(" "),n("li",[n("p",[t._v("frames 【Array】可选，默认 null")]),t._v(" "),n("p",[t._v("一个数字/字符串数组，对应于要添加到这个动画中的帧以及顺序。例如，[1, 2, 3]或者['run0', 'run1', run2]）。如果为空，那么将使用所有帧。")])]),t._v(" "),n("li",[n("p",[t._v("frameRate 【number】可选，默认 60")]),t._v(" "),n("p",[t._v("动画的播放速度。速度的单位是每秒的帧数。")])]),t._v(" "),n("li",[n("p",[t._v("loop 【boolean】可选，默认 false")]),t._v(" "),n("p",[t._v("动画是否循环播放或只播放一次。")])]),t._v(" "),n("li",[n("p",[t._v("useNumericIndex 【boolean】可选，默认 true")]),t._v(" "),n("p",[t._v("给定的框架是使用数字索引（默认）还是字符串？")])])])]),t._v(" "),n("p",[t._v("返回 Phaser.Animation - 被创建的动画对象。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 球绑定抖动动画")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\t要向对象添加动画，我们使用该animations.add()方法，\n    其中包含以下参数\n\t\t1. 我们为动画选择的名称\n\t\t2. 一个数组，定义在动画过程中显示帧的顺序。\n\t\t\t如果您再次查看wobble.png图像，您会看到有三个框架。\n\t\t\tPhaser 提取它们并将它们存储在数组中 - 位置 0，1 和 2.\n\t\t\t上面的数组表示我们显示帧 0，然后是 1，然后是 0 等。\n\t\t3. 帧速率，以 fps 为单位。由于我们以 24fps 运行动画，有 9 帧，动画每秒将显示三次以下。\n\twobble素材中每个小图都是24px\n*/")]),t._v("\nball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wobble"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"destory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#destory"}},[t._v("#")]),t._v(" destory()")]),t._v(" "),n("p",[t._v("销毁此 AnimationManager 包含的所有引用。\n遍历存储在此管理器中的动画列表，并对每个动画调用销毁。")]),t._v(" "),n("h4",{attrs:{id:"getanimation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getanimation"}},[t._v("#")]),t._v(" getAnimation()")]),t._v(" "),n("blockquote",[n("p",[t._v("getAnimation(name) → {"),n("a",{attrs:{href:"http://phaser.io/docs/2.6.2/Phaser.Animation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Phaser.Animation"),n("OutboundLink")],1),t._v("}")]),t._v(" "),n("p",[t._v("返回一个之前被添加的动画的名称。")])]),t._v(" "),n("blockquote",[n("p",[t._v("参数")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("name")]),t._v(" "),n("p",[t._v('要返回的动画的名称，例如 "fire"。')])])])]),t._v(" "),n("p",[t._v("返回 Phaser.Animation - 动画实例（如果找到的话），否则为空 null。")])])}),[],!1,null,null,null);a.default=e.exports}}]);