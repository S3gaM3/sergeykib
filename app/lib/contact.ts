/**
 * Contact info — декодируется только в браузере для защиты от скрапинга.
 * base64, не хранит данные в открытом виде в HTML.
 */
const B64 = {
  e: 'a2liYWxuaWtzZXJnQHlhbmRleC5ydQ==', // mail
  p: 'Nzk4NTI2ODk3ODc=',                   // tel (79852689787)
}

export function getEmail(): string {
  if (typeof window === 'undefined') return ''
  try {
    return atob(B64.e)
  } catch {
    return ''
  }
}

export function getTel(): string {
  if (typeof window === 'undefined') return ''
  try {
    return '+' + atob(B64.p)
  } catch {
    return ''
  }
}

export function getMailto(): string {
  const e = getEmail()
  return e ? `mailto:${e}` : '#'
}

export function getTelHref(): string {
  const t = getTel()
  return t ? `tel:${t}` : '#'
}
