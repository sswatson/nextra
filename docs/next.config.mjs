import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblocks: true
  },
  unstable_defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  experimental: { images: { allowFutureImage: true } }
})
