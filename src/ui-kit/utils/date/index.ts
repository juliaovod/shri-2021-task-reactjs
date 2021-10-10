import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import russianLocale from 'date-fns/locale/ru';

export const getDateDistance = (date: string, baseDate: string): string => formatDistance(
  new Date(date),
  new Date(baseDate),
  {
    includeSeconds: true,
    locale: russianLocale,
  },
);

export const getDateTime = (date: string): string => format(new Date(date), 'ddLLL, kk:mm', {
  locale: russianLocale,
});
