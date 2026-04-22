---
title: 写作与发布流程
description: 以后每次更新博客时可以直接照着走的一份操作清单。
---

# 写作与发布流程

这是一份适合当前站点的最小发布流程。

## 1. 新建内容

- 长文章放到 `src/content/docs/blog`
- 短笔记放到 `src/content/docs/notes`
- 独立页面可以直接放到 `src/content/docs`

## 2. 编写 Frontmatter

每篇文档建议至少包含：

```md
---
title: 文章标题
description: 一句话摘要
---
```

## 3. 本地预览

```bash
npm run dev
```

打开本地地址检查：

- 标题是否清晰
- 段落是否太长
- 导航是否正常显示
- 手机上是否容易阅读

## 4. 本地构建检查

```bash
npm run build
```

如果这里能通过，GitHub Pages 一般也能正常部署。

## 5. 提交并发布

```bash
git add .
git commit -m "docs: add a new post"
git push
```

推送后，GitHub Actions 会自动构建并发布到站点。

## 6. 发布后回看

- 看看首页入口是否明显
- 检查链接和图片是否正常
- 再读一遍摘要，确认是否方便日后检索
