module.exports = {
	title: "Helmet",
	description: "基于安全考虑的Express/Koa的HTTP响应头设置库",
	configureWebpack: {
		resolve: {}
	},
	base: "/helmet-docs-zh-CN/",
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		activeHeaderLinks: true,
		displayAllHeaders: false, // 默认值：false
		smoothScroll: true,
		nav: [
			{
				text: "首页",
				link: "/routes/install/"
			},
			{
				text: '文档',
				link: "/routes/middleware/"
			},
			{
			    text: "Github",
			    link: "https://github.com/helmetjs/helmet"
			}
		],
		sidebar: {
			'/routes/install/': [''],
			'/routes/middleware/': [
				'',
				'content-security-policy',
				'crossdomain',
				'dns-prefetch-control',
				'expect-ct',
				'feature-policy',
				'frameguard',
				'hide-powered-by',
				'hsts',
				'ie-no-open',
				'no-cache'
			]
		},
		lastUpdated: "上次更新",
		repo: ""
	},
	head: [["link", { rel: "icon", href: "/images/favicon.ico" }]]
};
