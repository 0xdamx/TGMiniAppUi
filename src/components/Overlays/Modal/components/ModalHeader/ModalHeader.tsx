import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import styles from './ModalHeader.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Text } from 'components/Typography/Text/Text';

export interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Inserts a component before the header text, e.g. Icon */
  before?: ReactNode;
  /** Inserts a component after the header text, e.g. Icon or `<Modal.CloseButton />` */
  after?: ReactNode;
  /** Shows the drag grabber at the top. Defaults to `false` on iOS (floating sheets) and `true` elsewhere. */
  grabber?: boolean;
}

export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(({
  before,
  after,
  grabber,
  className,
  children,
  ...props
}, ref) => {
  const platform = usePlatform();
  const hasGrabber = grabber ?? platform !== 'ios';

  return (
    <header
      ref={ref}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        hasGrabber && styles['wrapper--grabber'],
        className,
      )}
      {...props}
    >
      <div className={styles.before}>
        {before}
      </div>
      {platform === 'ios' && <Text weight="2" className={styles.children}>{children}</Text>}
      <div className={styles.after}>
        {after}
      </div>
    </header>
  );
});
