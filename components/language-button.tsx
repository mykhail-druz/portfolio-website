'use client';

import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useRouter, usePathname } from 'next/navigation';
import Globe from '../public/images/globe.svg';

interface LanguageButtonProps {
  currentLang: string;
}

const LanguageButton = ({ currentLang }: LanguageButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    // Определяем новый язык
    const newLang = currentLang === 'uk' ? 'en' : 'uk';

    // Получаем текущий путь без языка
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');

    // Создаем новый путь с новым языком
    const newPath = `/${newLang}${pathWithoutLang}`;

    // Переходим на новую страницу
    router.push(newPath);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block'}}
        key={currentLang}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{duration: 0.2}}
      >
        <IconButton
          aria-label="Toggle language"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={<Globe />}
          onClick={toggleLanguage}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageButton;

