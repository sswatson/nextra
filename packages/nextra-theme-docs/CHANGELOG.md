# nextra-theme-docs

## 2.0.0-beta.29

### Patch Changes

- 973ca49: fix rtl/ltr glitch on initial loading

## 2.0.0-beta.28

### Patch Changes

- c2c0d90: fix(search): handle case when value is empty

## 2.0.0-beta.27

### Patch Changes

- 21009c7: fix covered select options
- 21009c7: better focus ui, use ring color as theme hue color

## 2.0.0-beta.26

### Patch Changes

- a0e5847: Rename some docs theme configurations

## 2.0.0-beta.25

### Patch Changes

- 4731fa7: Style improvements
- e4cfb83: define page title in sidebar from `frontMatter.title` if page is not specified in `_meta.json`
- 9064112: make `<Tab />` accept `ComponentProps<'div'>`
- c3e6227: add `overflow-x-scroll` for tables
- d6d5ab8: Make sure arrows are aligned
- ab6c0e6: fix disappearing toc issue in Firefox
- ff8967c: add `Toggle Word Wrap` button for code-blocks (only for mobile)
- ff8967c: fix missing `Copy Code` button in code-blocks without language
- e2d603a: remove `getComponents` export, export `useMDXComponents` from `@mdx-js/react` instead
- 256154a: use "next/future/image" if `"experimental.images.allowFutureImage": true` is set in next config
- 256154a: replace images with `<NextImage />` even when url not relative but that starts from `/` (public directory)
- c4a9782: support custom hue theme color via `primaryHue`, `primaryHue.dark` and `primaryHue.light` theme options
- c3e6227: reuse nextra's scrollbar-y styles for scrollbar-x, adjust sidebar's scrollbar-y

## 2.0.0-beta.24

### Patch Changes

- bc52178: fix `editLink` option was not merged with default config `editLink`

## 2.0.0-beta.23

### Patch Changes

- c8129a2: fix theme switcher style
- 2ec8564: add `DocsThemeConfig.navbar` config option for overriding navbar

## 2.0.0-beta.22

### Patch Changes

- 77361da: fix ESC button when still stays after pressed ESC
- fdfe4f8: fix covered theme switch popup when i18n is not setup
- 873561b: scrollbar is toc should be same as in sidebar

## 2.0.0-beta.21

## 2.0.0-beta.20

### Patch Changes

- e6771ca: fix search overlay styles on mobile
- e6771ca: split css to `hamburger`/`scrollbar`/`typesetting-article` css files
- e6771ca: fix edit on github button for cases when filename named as `index`
- e6771ca: BREAKING! various theme config options was renamed, take a look of renamed options [here](https://github.com/shuding/nextra/blob/core/packages/nextra-theme-docs/src/constants.tsx)
- 1ee3c92: reuse table styles from docs in blog
- e6771ca: [Blog/Docs] Add copy to clipboard button for code-blocks. Add `NextraConfig.unstable_defaultShowCopyCode` option to show button by default, add `copy` and `copy=false` options for code-blocks
- 5d852b6: break words in navlinks, remove unneeded `<div />` wrappers, align text on right side for next link
- e6771ca: hide search input in navbar on mobile
- e6771ca: fix empty space in navbar when theme option `search.component: null`
- e6771ca: add `editLink.component`
- e6771ca: rename `meta.json` to `_meta.json`
- e6771ca: clicking on folder should navigate to first children if `index` page doesn't exist
- 71528f1: show copy code button only on hover of container
- e6771ca: fix callout shrinking from children content
- e6771ca: rename `PageOpts.meta` to `PageOpts.frontMatter`
- e6771ca: move `withLayout` logic directly in nextra loader
- e6771ca: adjust active breadcrumb color
- e6771ca: fix search input `ESC` icon vertical alignment

## 2.0.0-beta.19

### Patch Changes

- 1fef548: allow head to be a ReactNode
- ee270a4: fix extra space in flexsearch input after loading indexes
- afaa26a: refactor toc, fix toc's styles on rtl, use `ref.current` instead `document.getElementsByClassName`
- cdc1c2f: prefer `ref.current` over `document.querySelector` in sidebar

## 2.0.0-beta.18

### Patch Changes

- 7a32f8e: remove unneeded wrappers `<div />`s in `<Navbar />`
- bea62a1: make the search input responsive in narrow screens
- 24a02f8: reuse Flexsearch result styles on match-sorter search
- a0c0eb8: allow override `MDXProvider.components`
- 16bedce: `"layout": "raw"` should render `all` unstyled elements, except `<a />`
- 237faa9: add clear button for search input
- 24a02f8: typescripify `<Flexsearch />`
- 24a02f8: fix all RTL broken styles
- a8c5883: add `config.bodyExtraContent` option
- 8564919: extract `<Input/>` from `<Search/>` and `<Flexsearch/>`
- 38769ca: prefer `ref.current.querySelector` over `document.querySelector`, remove `load` prop in `<Search />`
- 24a02f8: match-sorter search should highlight every match like flexsearch
- 7bcbc98: add new `meta.json#theme.timestamp` option to hide `Last updated on ...`
- d16b2ba: move contexts to `./contexts` directory
- 47938b1: remove unneeded `useRef` for `<details />`
- 7373c1f: fix `useConfig`/`useRouter` inside `head()`
- a9ca0b9: do not add `basePath` to the links
- 0af6e79: `"layout": "raw"` should have unstyled `<a />` and `<p />` elements as well
- f99bbc2: Add `nextra-body-typesetting-article` back

## 2.0.0-beta.17

### Patch Changes

- 2217f9c: fix `Warning: Prop`href`did not match. Server: "#" Client: ...`
- 2217f9c: fix `next export` command
- 2217f9c: replace `classnames` package with `clsx` as he's faster
- 2217f9c: remove `locale` prop from theme config, forbid passing in `renderComponent`

## 2.0.0-beta.16

### Patch Changes

- 8bcb5e6: fix sideEffects in package.json
- da2bea7: remove no longer used `icons` folder
- 4825365: add `@types/github-slugger` instead of manually declaring type
- dfbe996: extract `<Banner />` from `<Navbar />` to `components/banner.tsx`
- a007c64: move DEFAULT_THEME and DEFAULT_PAGE_THEME to constants.tsx
- b219821: fix body overflow
- 48e0ac2: export `useConfig` and `useTheme`
- da998e6: move react components to `components` folder and replace exports:
  ```ts
  import Callout from 'nextra-theme-docs/callout'
  import Collapse from 'nextra-theme-docs/collapse'
  import Bleed from 'nextra-theme-docs/bleed'
  import { Tabs, Tab } from 'nextra-theme-docs/tabs'
  ```
  by
  ```ts
  import { Callout, Collapse, Bleed, Tabs, Tab } from 'nextra-theme-docs'
  ```
- 43409ad: fix: mdx theme is missing

## 2.0.0-beta.15

### Patch Changes

- 88f999d: fix: UI improvements

## 2.0.0-beta.14

### Patch Changes

- 96ed5c2: [nextra/nextra-theme-docs]: support both `experimental.newNextLinkBehavior` - `true` and `false`
- c8605d6: feat: New layout implementation

## 2.0.0-beta.13

### Patch Changes

- cb87709: Fix flexsearch option being overridden
- 4157b71: set lower build target and share code highlight theme through nextra
- 6a4a593: fix: #531 unclickable breadcrumb
- 06aa62f: feat: allow `import { getComponents } from 'nextra-theme-docs'`

## 2.0.0-beta.12

### Patch Changes

- a5cac21: [docs/blog]: extract code styles and import in both themes
- 3de0f41: chore(blog/docs): use `postcss-import` to import css variables styles
- 97ca2e3: New feature: menu type
- 76d1e30: [nextra-theme-docs]: fix `Warning: A title element received an array` and possible `[object Object]` in title
- bf74201: [nextra-theme-docs]: use new opacity modifier syntax for tailwindcss
- 0f4795f: chore(nextra/blog/docs): provide types for PageOpts in loader

## 2.0.0-beta.11

### Patch Changes

- 903ddf0: fix: should update scroll when height is dynamic
- 3e3b0a9: feat: add cursor pointer to locale and theme menu
- a0398e0: fix: avoid mutating nextConfig
- 38ccce8: feat(docs): allow `Tabs.items` as `ReadonlyArray<ReactNode>`
- fe2b714: upgrade to react 18
- 6bdb9bf: fix: broken flexsearch styles
- 78f1519: chore: Add strict-peer-dependencies=false
- 582ad96: feat: bump `rehype-pretty-code` version, support `showLineNumbers`
- c8bb94f: UI adjustments
- 707fdc2: fix: Anchor links are not wrapping on the sidebar

## 2.0.0-beta.10

### Patch Changes

- af72f85: chore(nextra-theme-docs): provide type for `DocsThemeConfig.nextThemes` instead of `object`
- 97e6141: fix(nextra/docs): fallback search to `en-US` instead `default`
- 699d131: feat(nextra/docs/blog): allow import `.md`/`.mdx` as well
- 03e90d8: refresh build system with tsup and fix nextra type

## 2.0.0-beta.9

### Patch Changes

- 6644bd5: pass unstable_flexsearch
- c15f570: fix: query should not affect nav highlight
- 4730bdc: chore(nextra-theme-docs): refactor `theme-context.ts`
- 94a8587: chore: extract `svg` icons in `/icons` folder, reusing same icons `<MoonIcon />` / `<SunIcon />` in blog from docs
- e573175: Fix release CI
- c380989: fix(docs): types is missing in bundle
- d34f9f2: feat(nextra-theme-docs): update discord logo to the new one
- 7053959: chore(nextra-theme-docs): remove unneeded `transform-none` css class

## 2.0.0-beta.8

### Patch Changes

- 009bf6a: Fix release workflow.

## 2.0.0-beta.7
