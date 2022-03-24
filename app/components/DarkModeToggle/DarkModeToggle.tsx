import clsx from 'clsx'

import { MoonIcon } from '~/icons/moon-icon'
import { SunIcon } from '~/icons/sun-icon'
import { Theme, Themed, useTheme } from '~/utils/theme-provider'

const iconTransformOrigin = { transformOrigin: '50% 100px' }

export default function DarkModeToggle({
  variant = 'icon',
}: {
  variant?: 'icon' | 'labelled'
}) {
  const [, setTheme] = useTheme()
  return (
    <button
      type="button"
      onClick={() => {
        console.log('oioioi')
        setTheme(previousTheme => {
          console.log({ previousTheme })
          return previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        })
      }}
      className={clsx(
        'border-secondary hover:border-primary focus:border-primary inline-flex items-center justify-center p-1 h-14 border-2 rounded-full focus:outline-none overflow-hidden transition',
        {
          'w-14': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative w-8 h-8">
        <span
          className="motion-reduce:duration-[0s] absolute inset-0 text-black dark:text-white transform dark:rotate-0 rotate-90 transition duration-1000"
          style={iconTransformOrigin}
        >
          <MoonIcon />
        </span>
        <span
          className="motion-reduce:duration-[0s] absolute inset-0 text-black dark:text-white transform dark:-rotate-90 rotate-0 transition duration-1000"
          style={iconTransformOrigin}
        >
          <SunIcon />
        </span>
      </div>
      <span
        className={clsx('ml-4 text-black dark:text-white', {
          'sr-only': variant === 'icon',
        })}
      >
        <Themed dark="switch to light mode" light="switch to dark mode" />
      </span>
    </button>
  )
}
