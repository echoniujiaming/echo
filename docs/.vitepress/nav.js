export default {
  nav: [
    { text: "资源", link: "/resource/常用网站" },
    { text: "文章", link: "/articles/index" },
    {
      text: "前端学习",
      items: [
        {
          text: '基础',
          items: [
          ],
        },
        {
          text: '框架',
          items: [
            { text: "vue", link: "/webFramework/vue/xxx" },
            { text: "react", link: "/webFramework/react/xxx" },
          ],
        },
        {
          text: '工程化',
          items: [
            { text: "vite", link: "/engineering/vite/xxx" },
            { text: "webpack", link: "/engineering/webpack/xxx" },
          ],
        },
      ],
    },
    { text: "Guide", link: "/guide/" },
    { text: "GuideTest", link: "/guide/test" },
  ],
};
