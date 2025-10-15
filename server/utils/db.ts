import type { H3Event } from 'h3';

export const useDB = (event: H3Event) => {
  if (!event.context.$db) {
    throw new Error('Пул MySQL не инициализирован');
  }
  return event.context.$db;
};
