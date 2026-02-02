# Astro 框架使用与 GitHub 部署指南

## 概述

您的网站已经迁移到 Astro 框架，这是一个现代化的静态网站生成器。本指南将教您如何本地开发和自动部署到 GitHub Pages。

---

## 一、本地开发流程

### 1. 安装依赖（首次使用）

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

- 访问地址：http://localhost:4321
- 代码修改后会自动刷新（热更新）
- 按 `Ctrl+C` 停止服务器

### 3. 预览生产构建

```bash
npm run build      # 构建网站
npm run preview    # 预览构建结果
```

---

## 二、添加新城市照片

### 步骤 1：编辑数据文件

打开 `src/data/cities.ts`，在 `cities` 数组中添加城市信息：

```typescript
{
  id: 'shanghai-2025',                    // URL标识（唯一）
  name: '上海',                            // 中文名称
  nameEn: 'Shanghai',                      // 英文名称
  country: 'china',                        // 'china' 或 'usa'
  year: 2025,                              // 拍摄年份
  thumbnail: '/assets/img/Collect/China/上海.webp',  // 缩略图
  photoCount: 20,                          // 照片数量
  description: '可选的描述文字',             // 可选
},
```

### 步骤 2：添加照片文件

**中国城市：**
```
public/assets/img/Collect/China/上海.webp          # 缩略图
public/assets/img/Collect/上海/
  ├── 上海-1.webp
  ├── 上海-2.webp
  └── 上海-3.webp
```

**美国城市：**
```
public/assets/img/Collect/UnitedStates/CityName.webp    # 缩略图
public/assets/img/Collect/CityName/
  ├── CityName-1.webp
  ├── CityName-2.webp
  └── CityName-3.webp
```

### 步骤 3：完成

页面会自动生成，访问 `/china/shanghai-2025` 或 `/usa/shanghai-2025` 即可查看。

---

## 三、部署到 GitHub Pages（自动化）

### 当前配置状态

* 已配置自动部署 - 推送到 `main` 分支后自动构建和部署

### 部署流程

```
1. 本地修改代码
   ↓
2. git add .           添加文件
   ↓
3. git commit -m "..." 提交更改
   ↓
4. git push            推送到 GitHub
   ↓
5. GitHub Actions 自动构建（约2分钟）
   ↓
6. 自动部署到 GitHub Pages
   ↓
7. 访问 https://ooodioodioodi.github.io
```

### 查看部署状态

1. 访问 GitHub 仓库页面
2. 点击 "Actions" 标签
3. 查看最新的部署任务状态

---

## 四、项目结构说明

```
项目根目录/
├── src/                          # 源代码目录
│   ├── components/               # 可复用组件
│   │   ├── Header.astro          # 网站导航
│   │   ├── Footer.astro          # 网站页脚
│   │   ├── PhotoGallery.astro    # 相册组件（核心）
│   │   └── Breadcrumbs.astro     # 面包屑导航
│   ├── layouts/                  # 页面布局
│   │   └── Layout.astro          # 基础HTML模板
│   ├── pages/                    # 页面文件
│   │   ├── index.astro           # 首页
│   │   ├── about.astro           # 关于页
│   │   ├── china.astro           # 中国城市列表
│   │   ├── usa.astro             # 美国城市列表
│   │   ├── china/[id].astro      # 中国城市详情（动态）
│   │   ├── usa/[id].astro        # 美国城市详情（动态）
│   │   ├── sitemap.xml.ts        # 网站地图
│   │   └── 404.astro             # 404错误页
│   └── data/                     # 数据文件
│       └── cities.ts             # 城市数据（核心）
│
├── public/                       # 静态资源（直接复制到构建输出）
│   └── assets/
│       └── img/
│           └── Collect/          # 城市照片目录
│               ├── China/        # 中国城市缩略图
│               ├── UnitedStates/ # 美国城市缩略图
│               ├── 上海/         # 城市详细照片
│               ├── Boston/       # 城市详细照片
│               └── ...
│
├── .github/workflows/            # GitHub Actions 工作流
│   └── deploy.yml                # 自动部署配置
│
├── astro.config.mjs              # Astro 配置文件
├── package.json                  # 项目依赖和脚本
├── tsconfig.json                 # TypeScript 配置
│
├── dist/                         # 构建输出目录（自动生成，不要修改）
└── backup-original-static-site/  # 原始静态网站备份
```

---

## 五、常用命令速查

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run astro check` | 检查 TypeScript 错误 |

---

## 六、修改网站内容

### 修改网站标题/描述

编辑 `src/layouts/Layout.astro`：
```astro
const {
  title = 'Zhang Yaohui - Photography Portfolio',
  description = 'Travel and street photography...',
} = Astro.props;
```

### 修改联系邮箱

1. 编辑 `src/components/Footer.astro`
2. 编辑 `src/pages/about.astro`

### 修改导航菜单

编辑 `src/components/Header.astro`：
```astro
<nav>
  <a href="/">首页</a>
  <a href="/china">中国</a>
  <a href="/usa">美国</a>
  <a href="/about">关于</a>
</nav>
```

---

## 七、故障排除

### 问题：照片不显示

**解决方案：**
1. 检查文件路径是否正确（区分大小写）
2. 确认 `cities.ts` 中的 `photoCount` 与实际文件数量一致
3. 确保文件格式为 `.webp`
4. 确认缩略图存在于 `China/` 或 `UnitedStates/` 目录

### 问题：构建失败

**解决方案：**
```bash
npm install              # 重新安装依赖
npm run astro check      # 检查错误
```

### 问题：部署后网站未更新

**解决方案：**
1. 清除浏览器缓存（Ctrl+F5）
2. 等待 2-3 分钟让 GitHub Actions 完成
3. 检查 GitHub Actions 页面是否有错误

---

## 八、关键文件清单

| 文件 | 用途 | 修改频率 |
|------|------|----------|
| `src/data/cities.ts` | 添加/编辑城市信息 | 经常 |
| `public/assets/img/Collect/` | 添加照片 | 经常 |
| `src/components/Header.astro` | 导航栏 | 很少 |
| `src/components/Footer.astro` | 页脚 | 很少 |
| `src/pages/about.astro` | 关于页内容 | 很少 |

---

## 九、部署验证

部署完成后，检查以下内容：

1. **首页** - https://ooodioodioodi.github.io
2. **中国页面** - https://ooodioodioodi.github.io/china
3. **美国页面** - https://ooodioodioodi.github.io/usa
4. **新增城市** - 确认链接可访问
5. **图片加载** - 确认所有图片正常显示
6. **搜索功能** - 测试搜索和年份筛选

---

## 十、参考文档

详细使用指南请参阅：
- `README_ASTRO.md` - Astro 迁移说明

---

## 总结

1. **本地开发**：`npm run dev`
2. **添加城市**：编辑 `src/data/cities.ts` + 添加照片文件
3. **部署**：`git push` 到 `main` 分支（自动部署）
4. **网站地址**：https://ooodioodioodi.github.io
