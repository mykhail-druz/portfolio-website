import { en, uk } from '../../components/translations';

export const getDictionary = (lang) => {
  switch (lang) {
    case 'en':
      return en;
    case 'uk':
      return uk;
    default:
      return uk; // Default to Ukrainian
  }
};