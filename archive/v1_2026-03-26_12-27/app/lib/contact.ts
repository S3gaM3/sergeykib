/**
 * Contact info — base64, не хранит данные в открытом виде в bundle.
 * Декодируется на сервере и клиенте одинаково, чтобы избежать hydration mismatch.
 */
const B64 = {
  e: 'a2liYWxuaWtzZXJnQHlhbmRleC5ydQ==', // mail
  p: 'Nzk4NTI2ODk3ODc=',                   // tel (79852689787)
}

function decode(str: string): string {
  try {
    if (typeof atob !== 'undefined') return atob(str)
    return Buffer.from(str, 'base64').toString('utf-8')
  } catch {
    return ''
  }
}

export function getEmail(): string {
  return decode(B64.e)
}

export function getTel(): string {
  const t = decode(B64.p)
  return t ? '+' + t : ''
}

export function getMailto(): string {
  const e = getEmail()
  return e ? `mailto:${e}` : '#'
}

export function getTelHref(): string {
  const t = getTel()
  return t ? `tel:${t}` : '#'
}
