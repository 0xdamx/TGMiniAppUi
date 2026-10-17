'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './ModalCloseButton.module.css';

import { classNames } from 'helpers/classNames';

import { Drawer } from '@xelene/vaul-with-scroll-fix';

const CROSS_PATH = 'M6.77 23.25a1.03 1.03 0 0 1 0-1.46L13.53 15 6.77 8.26a1.03 1.03 0 1 1 1.47-1.47L15 13.55l6.76-6.76'
  + 'a1.03 1.03 0 1 1 1.46 1.47L16.47 15l6.76 6.78a1.03 1.03 0 1 1-1.47 1.47L15 16.49l-6.76 6.77a1.03 1.03 0 0 1-1.47 0Z';

export interface ModalCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Round close button used in the modal header.
 * Mirrors the Liquid Glass close button of Telegram iOS 13 sheets (44×44 hit area, 30pt cross).
 * Closes the modal it is rendered in.
 */
export const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(({
  className,
  'aria-label': ariaLabel = 'Close',
  ...restProps
}, ref) => (
  <Drawer.Close asChild>
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      className={classNames(styles.wrapper, className)}
      {...restProps}
    >
      <svg className={styles.icon} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <path
          d={CROSS_PATH}
          fill="currentColor"
        />
      </svg>
    </button>
  </Drawer.Close>
));
