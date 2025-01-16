import {PROMOBAR_HEIGHT_MOBILE, PROMOBAR_HEIGHT_DESKTOP} from '~/lib/constants';
import {usePromobarContext} from '~/contexts/PromobarProvider/usePromobarContext';
import {useSettings} from '~/hooks';

export interface UsePromobarReturn {
  headerMobileHeightClass: string;
  headerDesktopHeightClass: string;
  headerHeightClass: string;
  mainPaddingTopClass: string;
  menuMobileHeightClass: string;
  menuDesktopHeightClass: string;
  menuHeightClass: string;
  promobarDisabled: boolean;
  promobarHeightMobile: number;
  promobarHeightDesktop: number;
  promobarOpen: boolean;
  togglePromobar: (state: boolean) => void;
}

export function usePromobar(): UsePromobarReturn {
  const {state, actions} = usePromobarContext();
  const {header} = useSettings();
  const {promobar} = {...header};

  const promobarDisabled =
    !!promobar && (!promobar.enabled || !promobar.messages?.length);

  const headerMobileHeightClass =
    state.promobarOpen && !promobarDisabled
      ? 'max-md:h-[calc(var(--header-height-mobile)+var(--promobar-height-mobile))]'
      : 'max-md:h-[var(--header-height-mobile)]';
  const headerDesktopHeightClass =
    state.promobarOpen && !promobarDisabled
      ? 'md:h-[calc(var(--header-height-desktop)+var(--promobar-height-desktop))]'
      : 'md:h-[var(--header-height-desktop)]';
  const headerHeightClass = `${headerMobileHeightClass} ${headerDesktopHeightClass}`;

  const menuMobileHeightClass =
    state.promobarOpen && !promobarDisabled
      ? 'max-md:h-[calc(var(--viewport-height)-var(--header-height-mobile)-var(--promobar-height-mobile))]'
      : 'max-md:h-[calc(var(--viewport-height)-var(--header-height-mobile))]';
  const menuDesktopHeightClass =
    state.promobarOpen && !promobarDisabled
      ? 'md:h-[calc(var(--viewport-height)-var(--header-height-desktop)-var(--promobar-height-desktop))]'
      : 'md:h-[calc(var(--viewport-height)-var(--header-height-desktop))]';
  const menuHeightClass = `${menuMobileHeightClass} ${menuDesktopHeightClass}`;
  const mainPaddingTopClass = promobarDisabled
    ? 'max-md:pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]'
    : 'max-md:pt-[calc(var(--header-height-mobile)+var(--promobar-height-mobile))] md:pt-[calc(var(--header-height-desktop)+var(--promobar-height-desktop))]';

  return {
    headerMobileHeightClass,
    headerDesktopHeightClass,
    headerHeightClass,
    mainPaddingTopClass,
    menuMobileHeightClass,
    menuDesktopHeightClass,
    menuHeightClass,
    promobarDisabled,
    promobarHeightMobile: PROMOBAR_HEIGHT_MOBILE,
    promobarHeightDesktop: PROMOBAR_HEIGHT_DESKTOP,
    promobarOpen: state.promobarOpen,
    togglePromobar: actions.togglePromobar,
  };
}
