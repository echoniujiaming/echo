//因为导航栏和侧边栏的代码较多，所以抽离出来
import wyNav from "./nav";
import wySidebar from "./sidebar";

export default {
  title: "vitepress2", //站点标题
  description: "一个vue3组件库", //mate标签description，多用于搜索引擎抓取摘要
  socialLinks: [
    { icon: "github", link: "https://gitee.com/geeksdidi" },
    { icon: "twitter", link: "..." },
    // You can also add custom icons by passing SVG as string:
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      },
      link: "...",
    },
  ],
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    // nav: wyNav.default.nav,
    nav: wyNav.nav,
    sidebar: wySidebar.sidebar,
  },
};
