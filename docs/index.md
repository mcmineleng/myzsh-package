---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MyZsh文档"
  tagline: "Oh-My-Zsh的轻量，快速代替"
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start
    - theme: alt
      text: 文档
      link: /docs

features:
  - title: 加载快速
    details: |
      在本人骁龙8Gen5设备上，使用p10k主题和以下插件：
      <details>
        <summary>插件列表</summary>
        <div class="plugin-tags">
          <span class="tag">colored-man-pages</span>
          <span class="tag">copyfile</span>
          <span class="tag">copypath</span>
          <span class="tag">extract</span>
          <span class="tag">git</span>
          <span class="tag">history</span>
          <span class="tag">web-search</span>
          <span class="tag">z</span>
          <span class="tag">fzf</span>
          <span class="tag">zsh-autosuggestions</span>
          <span class="tag">zsh-syntax-highlighting</span>
          <span class="tag">sudo</span>
        </div>
      </details>
      <br>Oh-My-Zsh启动需要200ms，MyZsh只需要35ms左右
  - title: 配置习惯兼容
    details: 使用plugins=()数组启用插件，ZSH_THEME定义主题等
  - title: 插件异步加载
    details: 使用zsh-defer在后台加载插件，保证第一时间看到提示符
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加样式
  const style = document.createElement('style')
  style.textContent = `
    .plugin-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 8px 0 6px 0;
      padding: 4px 0;
    }
    .tag {
      display: inline-block;
      background: var(--vp-c-bg-soft);
      border: 1px solid var(--vp-c-border);
      border-radius: 14px;
      padding: 2px 12px;
      font-size: 12px;
      font-family: monospace;
      color: var(--vp-c-text-1);
      transition: all 0.2s;
    }
    .tag:hover {
      background: var(--vp-c-brand-soft);
      border-color: var(--vp-c-brand-1);
      color: var(--vp-c-brand-1);
    }
    details {
      cursor: pointer;
      margin: 4px 0;
    }
    details summary {
      color: var(--vp-c-brand-1);
      font-weight: 500;
      user-select: none;
    }
    details summary:hover {
      color: var(--vp-c-brand-2);
    }
    details summary::-webkit-details-marker {
      color: var(--vp-c-brand-1);
    }
  `
  document.head.appendChild(style)
})
</script>