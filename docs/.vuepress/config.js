module.exports = {
	title: "Vuepress 译文文档模板",
	description: "",
	configureWebpack: {
		resolve: {
			alias: {
				"@img": "/docs_cn/images/"
			}
		}
	},
	base: "/docs_cn/",
	markdown: {
		lineNumbers: true,
		anchor: {
			permalink: false
		},
		extendMarkdown: md => {
			// 使用更多的markdown-it插件
			md.use(require("markdown-it-anchor"));
		}
	},
	plugins: [
		"@vuepress/active-header-links",
		"@vuepress/back-to-top",
		"@vuepress/last-updated",
		"@vuepress/nprogress",
		"vuepress-plugin-smooth-scroll",
		"@vuepress/medium-zoom",
		[
			"redirect",
			{
				// 提供多语言重定向功能
				// 它会自动从 `/foo/bar/` 定向到 `/:locale/foo/bar/`，如果对应的页面存在
				locales: true,
				storage: true // 保存最后一次访问的结果到 `localStorage`，供下次重定向使用
			}
		]
	],
	themeConfig: {
		displayAllHeaders: true, // 默认值：false
		smoothScroll: true,
		nav: [
			{
				text: "首页",
				link: "/"
			}
			// {
			//     text: "Github",
			//     link: " "
			// }
		],
		sidebar: [
			// {
			//     title: "安装",
			//     path: "/routes/install.html",
			//     sidebarDepth: 2
			// }
		],
		lastUpdated: "上次更新",
		repo: ""
	},
	head: [["link", { rel: "icon", href: "/images/favicon.ico" }]]
};
