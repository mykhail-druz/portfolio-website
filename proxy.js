import { NextResponse } from 'next/server'

const locales = ['en', 'uk']
export const defaultLocale = 'uk'

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const locales = acceptLanguage.split(',').map(l => l.split(';')[0].trim())

  if (locales.includes('uk') || locales.includes('uk-UA')) {
    return 'uk'
  }

  return defaultLocale
}

export default async function proxy(request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  // Исключаем статические файлы и ресурсы
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/icons') ||
    pathname.includes('.') // файлы с расширениями (.jpg, .png, .glb, .ico и т.д.)
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const locale = getLocale(request) || defaultLocale

  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    // Исключаем все статические ресурсы и файлы
    '/((?!_next/static|_next/image|api|images|icons|.*\\.).*)'
  ]
}
