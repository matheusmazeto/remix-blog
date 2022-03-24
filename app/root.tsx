import clsx from 'clsx'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'

import styles from './styles/tailwind.css'
import {
  NonFlashOfWrongThemeEls,
  Theme,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider'
import { getThemeSession } from './utils/theme.server'

import type { LinksFunction, MetaFunction, LoaderFunction } from 'remix'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export type LoaderData = {
  theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  }

  return data
}

function App() {
  const data = useLoaderData<LoaderData>()

  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  )
}
