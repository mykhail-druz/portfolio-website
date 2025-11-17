import { en, uk, TranslationDict } from '../../components/translations';

export const getDictionary = (lang: string): TranslationDict => {
  switch (lang) {
    case 'en':
      return en;
    case 'uk':
      return uk;
    default:
      return uk; // Default to Ukrainian
  }
};

