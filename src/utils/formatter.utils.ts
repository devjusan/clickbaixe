interface IParam {
  slug: [] | undefined;
}

export const formatDate = (date: string) => {
  const _date = new Date(date);

  return _date.toLocaleDateString(`pt-BR`, {
    day: `2-digit`,
    month: `long`,
    year: `numeric`,
  });
};

export const split = (url: string) => url.split(`/`).slice(-1)[0].toUpperCase();

export const getSlugFromParam = (params: any) => {
  if (Array.isArray(params?.slug)) {
    return params?.slug.slice(-1)[0];
  }

  return params?.slug;
};
