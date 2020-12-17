(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{433:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("DBlurEffectWidget的使用")])]),t._v(" "),a("h2",{attrs:{id:"dblureffectwidget-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dblureffectwidget-的作用"}},[t._v("#")]),t._v(" DBlurEffectWidget 的作用")]),t._v(" "),a("p",[t._v("用于实现主窗口或控件背景的实时模糊效果。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"主窗口模糊-dblureffectwidget-behindwindowblend-和控件模糊-dblureffectwidget-inwindowblend-、dblureffectwidget-inwidgetblend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主窗口模糊-dblureffectwidget-behindwindowblend-和控件模糊-dblureffectwidget-inwindowblend-、dblureffectwidget-inwidgetblend"}},[t._v("#")]),t._v(" 主窗口模糊（"),a("em",[t._v("DBlurEffectWidget::BehindWindowBlend")]),t._v("）和控件模糊（"),a("em",[t._v("DBlurEffectWidget::InWindowBlend 、DBlurEffectWidget::InWidgetBlend")]),t._v("）")]),t._v(" "),a("p",[a("strong",[t._v("主窗口模糊")]),t._v("：依赖于窗口管理器的实现，目前仅支持 deepin-wm 和 kwin，可以使用"),a("code",[t._v("DWindowManagerHelper::hasBlurWindow")]),t._v(" 判断当前运行环境中的窗口管理器是否支持模糊特效，使用 "),a("code",[t._v("DPlatformWindowHandle::setWindowBlurAreaByWM")]),t._v(" 设置主窗口背景的模糊区域。如果在一个主窗口内同时使用了多个 "),a("code",[t._v("DBlurEffectWidget")]),t._v(" 控件，则在更新主窗口模糊区域时会自动将所有控件的区域合并到 "),a("code",[t._v("QVector<WMBlurArea>")]),t._v(" 或者 "),a("code",[t._v("QList<QPainterPath>")]),t._v("（如果有任意一个控件设置了 "),a("code",[t._v("DBlurEffectWidget::radius")]),t._v(" 属性）中统一设置。")]),t._v(" "),a("p",[a("strong",[t._v("控件模糊")]),t._v("：原理和 DClipEffectWidget 类似，在控件绘制时先使用 QPlatformBackingStore::toImage()获取主窗口上控件对应区域内已经绘制的内容，此时获取的内容为此控件下层控件所绘制的内容，将获得的 QImage 对象使用软件算法进行模糊处理，然后再将模糊之后的图像绘制到控件上。由于实现原理限制，不适用于主窗口为OpenGL绘制模式的窗口（如：QOpenGLWindow ），且控件下面使用OpenGL绘制的内容也生成模糊的效果（如 QOpenGLWidget ）。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"dblureffectwidget-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dblureffectwidget-属性"}},[t._v("#")]),t._v(" DBlurEffectWidget 属性")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::radius")]),t._v(" 模糊效果计算时的取样范围，模糊的原理为：将此像素点和周围像素点合成计算得到得到新的值，此属性表示像素点周围 radius 距离的所有像素点参与计算。【可读可写，只在模式为 "),a("code",[t._v("DBlurEffectWidget::InWindowBlend")]),t._v(" 时有效】")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::mode")]),t._v(" 所采用的模糊算法，默认值为 GaussianBlur。【可读可写，只在模式为 "),a("code",[t._v("DBlurEffectWidget::InWindowBlend")]),t._v(" 时有效】")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::blendMode")]),t._v(" 模糊的应用场景，默认会根据有没有父控件自动判断使用哪种模式。可读可写，只在模式为 "),a("code",[t._v("DBlurEffectWidget::InWindowBlend")]),t._v(" 时有效】")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::maskColor")]),t._v(" 画在控件模糊背景之上的颜色，此颜色的alpha通道值会被 maskAlpha 属性影响，修改此属性会自动将颜色模式设置为 CustomColor，设置后将不能再自动根据窗口管理器是否支持混成和模糊来自动使用最佳的颜色。")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::maskAlpha")]),t._v(" maskColor 的alpha通道值。当前窗口管理器支持混成（窗口背景透明）时默认值为102，否则为204。")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::full")]),t._v(" 如果值为true，将模糊此控件所在顶层窗口的整个背景，而无论控件的大小和位置，否则使用控件的位置和大小。")]),t._v(" "),a("p",[a("code",[t._v("DBlurEffectWidget::blurEnabled")]),t._v(" 如果值为 true 则此控件的模糊设置生效，否则不生效。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"使用范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用范例"}},[t._v("#")]),t._v(" 使用范例")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("DBlurEffectWidget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("blurWidget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DBlurEffectWidget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRadius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFixedSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBlurRectXRadius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBlurRectYRadius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaskColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DBlurEffectWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("LightColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nQPainterPath clipPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclipPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblurWidget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaskPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clipPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);