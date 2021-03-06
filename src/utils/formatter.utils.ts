export const formatDate = (date: string) => {
  const toDate = new Date(date)

  return toDate.toLocaleDateString(`pt-BR`, {
    day: `2-digit`,
    month: `long`,
    year: `numeric`,
  })
}

export const split = (url: string) => {
  const newUrl = url.split(`/`).slice(-1)[0]
  return decodeURI(newUrl).toUpperCase()
}

export const getSlugFromParam = (params: any) => {
  if (Array.isArray(params?.slug)) {
    return params?.slug.slice(-1)[0]
  }

  return params?.slug
}
