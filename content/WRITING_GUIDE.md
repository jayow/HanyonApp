# Writing Research Posts for Hanyon Analytics

## Quick Start

1. Create a new `.mdx` file in `content/posts/`
2. Name it with kebab-case: `my-post-title.mdx`
3. The filename becomes the URL: `/research/my-post-title`

## Frontmatter (Required)

Every post must start with a YAML frontmatter block:

```yaml
---
title: "Your Post Title"
date: "2026-02-21"
description: "A short one-liner shown on the listing page (keep under 150 chars)."
tags: ["defi", "solana", "analysis"]
published: true
---
```

### Fields

| Field         | Type       | Required | Notes                                         |
|---------------|------------|----------|-----------------------------------------------|
| `title`       | string     | Yes      | Displayed as the post heading                 |
| `date`        | string     | Yes      | ISO format `YYYY-MM-DD`. Controls sort order  |
| `description` | string     | Yes      | Shows on listing card. Keep under 150 chars   |
| `tags`        | string[]   | Yes      | Lowercase, short words. Show as pills on card |
| `published`   | boolean    | Yes      | Set `false` to hide from listing (drafts)     |

## Supported Markdown Features

### Text Formatting

```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
[link text](https://example.com)
> blockquote
```

### Headings

Use `##` (H2) and `###` (H3) for sections within a post. Don't use `#` (H1) — the post title is already H1.

```markdown
## Section Title
### Subsection Title
```

### Tables

Standard GitHub-flavored Markdown tables:

```markdown
| Protocol   | TVL      | Chain    |
|------------|----------|----------|
| Aave       | $10.2B   | Multi    |
| Lido       | $14.8B   | Ethereum |
| Uniswap    | $5.1B    | Multi    |
```

### Code Blocks

Triple backticks with a language identifier for syntax highlighting:

````markdown
```typescript
interface Position {
  market: string;
  size: number;
  entry: number;
}
```
````

Supported languages include: `typescript`, `javascript`, `python`, `sql`, `solidity`, `json`, `bash`, `yaml`, and many more.

### Lists

```markdown
- Bullet point one
- Bullet point two
  - Nested bullet

1. Numbered item one
2. Numbered item two
```

### Images

```markdown
![Description of the image](/path-to-image.png)
```

Place images in the `public/` folder and reference them with a leading `/`.

### Horizontal Rule

```markdown
---
```

## Post Template

Copy this as a starting point:

```mdx
---
title: "Post Title Here"
date: "2026-02-21"
description: "Brief description for the listing page."
tags: ["tag1", "tag2"]
published: true
---

Opening paragraph that sets up what this post is about and why it matters.

## First Section

Your analysis here. Use **bold** for emphasis and `inline code` for technical terms.

| Column A | Column B | Column C |
|----------|----------|----------|
| Data     | Data     | Data     |

## Second Section

More content. Link to relevant tools like [polymarket-dashboard](https://github.com/jayow/polymarket-dashboard).

```typescript
// Code examples if relevant
const data = await fetchOnChainData();
```

## Conclusion

Summary and key takeaways.

---

*Footer note or disclaimer if needed.*
```

## Tips

- Posts are statically generated — no server restart needed in dev mode
- Newest posts (by `date`) appear first on the listing page
- Use `published: false` to work on drafts without them showing up
- Keep tag names consistent across posts for future filtering
- The site auto-generates syntax highlighting at build time (zero client JS)
