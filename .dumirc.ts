import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
    outputPath: 'docs-dist',
    autoAlias: true,
    locales: [{ id: 'zh-CN', name: '中文' }],
    themeConfig: {
        description: '自己用来查看的 ',
        mode: 'site',
        name: '使用文档',
        toc: 'content'
    },
});
