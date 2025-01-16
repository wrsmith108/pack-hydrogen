import {useCallback, useState} from 'react';

import type {Settings} from '~/lib/types';
import {useMenu, useSettings} from '~/hooks';

export interface UseMobileMenuReturn {
  handleOpenMobileMenu: () => void;
  handleCloseMobileMenu: () => void;
  handleMobileSubmenu: (index: number | null) => void;
  mobileMenuOpen: boolean;
  mobileSubmenuContent: Settings['header']['menu']['navItems'][number] | null;
}

export function useMobileMenu(): UseMobileMenuReturn {
  const {mobileMenuOpen, openMobileMenu, closeMobileMenu} = useMenu();
  const {header} = useSettings();
  const {navItems} = {...header?.menu};

  const [mobileSubmenuIndex, setMobileSubmenuIndex] = useState<number | null>(
    null,
  );

  const handleOpenMobileMenu = useCallback(() => {
    openMobileMenu();
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    closeMobileMenu();
    setMobileSubmenuIndex(null);
  }, []);

  const handleMobileSubmenu = useCallback((index: number | null) => {
    setMobileSubmenuIndex(typeof index === 'number' ? index : null);
  }, []);

  return {
    handleOpenMobileMenu,
    handleCloseMobileMenu,
    handleMobileSubmenu,
    mobileMenuOpen,
    mobileSubmenuContent:
      typeof mobileSubmenuIndex === 'number'
        ? navItems?.[mobileSubmenuIndex] || null
        : null,
  };
}
