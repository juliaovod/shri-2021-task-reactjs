import format from 'date-fns/format';
import russianLocale from 'date-fns/locale/ru';

const getDateTime = (date: string): string => format(new Date(date), 'ddLLL, kk:mm', {
  locale: russianLocale,
});

export default getDateTime;
