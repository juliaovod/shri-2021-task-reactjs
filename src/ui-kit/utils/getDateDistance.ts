import russianLocale from 'date-fns/locale/ru';

import formatDistance from 'date-fns/formatDistance';

const getDateDistance = (date: string, baseDate: string): string => formatDistance(
  new Date(date),
  new Date(baseDate),
  {
    includeSeconds: true,
    locale: russianLocale,
  },
);

export default getDateDistance;
