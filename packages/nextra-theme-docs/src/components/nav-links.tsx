import React, { ReactElement } from 'react'
import cn from 'clsx'
import { ArrowRightIcon } from 'nextra/icons'
import { useConfig } from '../contexts'
import { Item } from '../utils'
import { Anchor } from './anchor'
import { DocsThemeConfig } from '../index'

interface NavLinkProps {
  currentIndex: number
  flatDirectories: Item[]
}

const classes = {
  link: 'max-w-[50%] gap-1 [word-break:break-word] flex items-center py-4 text-base font-medium text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-300 md:text-lg',
  icon: 'h-5 inline flex-shrink-0'
}

export const NavLinks = ({
  flatDirectories,
  currentIndex
}: NavLinkProps): ReactElement | null => {
  const config = useConfig()
  const nav = config.navigation
  const navigation: Exclude<DocsThemeConfig['navigation'], boolean> =
    typeof nav === 'boolean' ? { prev: nav, next: nav } : nav
  const prev = navigation.prev && flatDirectories[currentIndex - 1]
  const next = navigation.next && flatDirectories[currentIndex + 1]

  if (!prev && !next) return null

  return (
    <div
      className={cn(
        'mb-8 flex items-center border-t pt-8 dark:border-neutral-800',
        'contrast-more:border-neutral-400 dark:contrast-more:border-neutral-400'
      )}
    >
      {prev && (
        <Anchor
          href={prev.route}
          title={prev.title}
          className={cn(classes.link, 'ltr:pr-4 rtl:pl-4')}
        >
          <ArrowRightIcon className={cn(classes.icon, 'ltr:rotate-180')} />
          {prev.title}
        </Anchor>
      )}
      {next && (
        <Anchor
          href={next.route}
          title={next.title}
          className={cn(
            classes.link,
            'ltr:pl-4 rtl:pr-4 ltr:text-right rtl:text-left ltr:ml-auto rtl:mr-auto'
          )}
        >
          {next.title}
          <ArrowRightIcon className={cn(classes.icon, 'rtl:rotate-180')} />
        </Anchor>
      )}
    </div>
  )
}
