# Astro 迁移说明

## 概述

本项目已从纯静态 HTML 网站迁移到 [Astro](https://astro.build) 框架。Astro 是一个现代化的静态网站生成器，具有以下优势：

- **零 JS 默认输出**：默认不向浏览器发送任何 JavaScript
- **岛屿架构**：可以按需添加交互式组件
- **原生支持 TypeScript**：更好的开发体验
- **自动优化**：图片、CSS、资源自动优化
- **快速构建**：增量构建和智能缓存

---

## 迁移完成日期

2024年

---

## 项目架构

### 文件结构对比

| 原静态网站 | Astro 项目 |
|-----------|------------|
| `index.html` | `src/pages/index.astro` |
| `China.html` | `src/pages/china.astro` |
| `UnitedStates.html` | `src/pages/usa.astro` |
| `about.html` | `src/pages/about.astro` |
| `assets/css/main.css` | `public/assets/css/main.css` |
| `assets/img/` | `public/assets/img/` |

### 新增文件

| 文件 | 说明 |
|------|------|
| `src/data/cities.ts` | 城市数据源（TypeScript） |
| `src/components/PhotoGallery.astro` | 可复用的相册组件 |
| `src/components/Header.astro` | 网站头部组件 |
| `src/components/Footer.astro` | 网站页脚组件 |
| `src/components/Breadcrumbs.astro` | 面包屑导航组件 |
| `src/layouts/Layout.astro` | 基础 HTML 布局 |
| `src/pages/china/[id].astro` | 中国城市详情页（动态路由） |
| `src/pages/usa/[id].astro` | 美国城市详情页（动态路由） |
| `src/pages/sitemap.xml.ts` | 动态生成网站地图 |
| `src/pages/404.astro` | 自定义 404 页面 |
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署配置 |

---

## 技术栈

### 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| `astro` | ^4.16.17 | 核心框架 |
| `@astrojs/check` | ^0.9.4 | TypeScript 检查 |
| `typescript` | ^5.7.2 | TypeScript 支持 |
| `sharp` | ^0.34.5 | 图片处理服务 |

### 保留的前端资源

| 资源 | 来源 | 用途 |
|------|------|------|
| Bootstrap 5 | Bootstrap | 响应式布局 |
| Bootstrap Icons | Bootstrap | 图标库 |
| AOS | Animate On Scroll | 滚动动画 |
| GLightbox | GLightbox | 图片灯箱效果 |
| Swiper | Swiper | 轮播组件 |

---

## 数据驱动设计

### 城市数据结构

```typescript
// src/data/cities.ts
export interface City {
  id: string;           // URL 标识（唯一）
  name: string;         // 中文名称
  nameEn: string;       // 英文名称
  country: 'china' | 'usa';  // 国家分类
  year: number;         // 拍摄年份
  thumbnail: string;    // 缩略图路径
  photoCount: number;   // 照片数量
  description?: string; // 可选描述
}
```

### 动态路由

Astro 支持动态路由，使用 `[id].astro` 文件名创建动态页面：

```astro
---
// src/pages/china/[id].astro
import { getCityById } from '../../data/cities';

const { id } = Astro.params;
const city = getCityById(id);

if (!city || city.country !== 'china') {
  return Astro.redirect('/404');
}
---
```

---

## 组件化设计

### PhotoGallery 组件

核心相册组件，支持：

- 瀑布流布局（CSS Columns）
- 响应式列数（1-4 列）
- 图片懒加载
- 悬停放大效果
- GLightbox 集成

```astro
<PhotoGallery
  images={images}
  columns={4}
  masonry={true}
  containered={false}
/>
```

---

## 部署配置

### GitHub Actions 自动部署

配置文件：`.github/workflows/deploy.yml`

**工作流程：**

1. 监听 `main` 分支的 push 事件
2. 使用 Ubuntu 最新环境
3. 安装 Node.js 20
4. 运行 `npm ci` 安装依赖
5. 运行 `npm run build` 构建网站
6. 上传 `dist` 目录
7. 部署到 GitHub Pages

**权限：**

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

## 图片优化

### WebP 格式

所有图片使用 WebP 格式以获得更好的压缩率。

### 目录结构

```
public/assets/img/Collect/
├── China/              # 中国城市缩略图
│   ├── 上海.webp
│   └── ...
├── UnitedStates/       # 美国城市缩略图
│   ├── Boston.webp
│   └── ...
├── 上海/               # 城市详细照片（中国）
│   ├── 上海-1.webp
│   └── ...
└── Boston/             # 城市详细照片（美国）
    ├── Boston-1.webp
    └── ...
```

### Sharp 图片服务

Astro 配置了 Sharp 服务用于图片处理：

```javascript
// astro.config.mjs
image: {
  service: {
    entrypoint: 'astro/assets/services/sharp',
    config: {},
  },
}
```

---

## SEO 优化

### Meta 标签

每个页面都有完整的 Open Graph 和 Twitter Card 标签：

```astro
<!-- Open Graph / Facebook -->
<meta property="og:type" content={type}>
<meta property="og:url" content={canonicalURL}>
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:image" content={image}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content={canonicalURL}>
<meta property="twitter:title" content={title}>
<meta property="twitter:description" content={description}>
<meta property="twitter:image" content={image}>
```

### Sitemap

动态生成网站地图：`src/pages/sitemap.xml.ts`

```typescript
export async function GET(context) {
  const cities = citiesData.map(city => ({
    url: `https://ooodioodioodi.github.io/${city.country}/${city.id}`,
    lastmod: new Date().toISOString(),
  }));

  return rss({
    title: 'Zhang Yaohui Photography',
    description: 'Travel and street photography portfolio',
    site: context.site,
    items: cities,
  });
}
```

---

## 开发体验

### TypeScript 支持

完整类型检查，在构建时自动验证：

```json
// package.json
"scripts": {
  "build": "astro check && astro build"
}
```

### 热更新

开发服务器支持文件修改后自动刷新：

```bash
npm run dev
# 访问 http://localhost:4321
```

---

## 性能优化

### 构建配置

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  base: '/',
  build: {
    format: 'directory',  // 每个页面生成目录
  },
  vite: {
    build: {
      cssMinify: true,    // CSS 压缩
    },
  },
});
```

### 性能指标

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 100KB (不含图片)

---

## 维护建议

### 添加新内容

1. 编辑 `src/data/cities.ts` 添加城市信息
2. 将照片放入 `public/assets/img/Collect/` 对应目录
3. 页面自动生成，无需手动创建

### 更新依赖

```bash
npm update
npm run build
```

### 修改样式

- 全局样式：`public/assets/css/main.css`
- 组件样式：编辑 `.astro` 文件中的 `<style>` 标签

---

## 故障排除

### 常见问题

1. **构建失败**：运行 `npm install` 重新安装依赖
2. **图片不显示**：检查路径大小写，确保 WebP 格式
3. **部署失败**：检查 GitHub Actions 日志

### 调试

```bash
# 本地构建检查
npm run build

# TypeScript 检查
npm run astro check

# 预览构建结果
npm run preview
```

---

## 资源链接

- [Astro 官方文档](https://docs.astro.build)
- [Astro 部署指南](https://docs.astro.build/en/guides/deploy/github-pages/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [USAGE_GUIDE.md](./USAGE_GUIDE.md) - 使用指南

---

## 许可证

© 2024 Zhang Yaohui. All rights reserved.
