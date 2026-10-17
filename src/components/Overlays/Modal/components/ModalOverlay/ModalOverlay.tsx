import { forwardRef } from 'react';
import styles from './ModalOverlay.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Drawer } from '@xelene/vaul-with-scroll-fix';

export interface ModalOverlayProps {
  className?: string;
}

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({
  className,
  ...props
}, ref) => {
  const platform = usePlatform();

  return (
    <Drawer.Overlay
      ref={ref}
      // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
      // This is why we use rgba here and not background: token + opacity.
      // Telegram dims with black: 40% on iOS (SheetComponent dimView), 25% on Android (BotWebViewSheet)
      style={{ background: `rgba(0, 0, 0, ${platform === 'ios' ? '.4' : '.25'})` }}
      className={classNames(styles.wrapper, className)}
      {...props}
    />
  );
});
