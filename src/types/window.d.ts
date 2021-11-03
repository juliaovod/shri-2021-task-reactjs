import Counter from '@/analytics/lib/send';

declare global {
  interface Window {
    counter: Counter;
  }
}
