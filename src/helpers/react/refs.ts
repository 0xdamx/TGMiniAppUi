import { MutableRefObject, Ref, RefObject } from 'react';

export const setRef = <T>(element: T, ref?: Ref<T>): void => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      // eslint-disable-next-line no-param-reassign
      (ref as MutableRefObject<T>).current = element;
    }
  }
};

export const multipleRef = <T>(...refs: Array<Ref<T> | RefObject<T | null> | undefined>): RefObject<T> => {
  let current: T | null = null;
  return {
    get current() {
      // `current` is null until the element is attached; cast keeps the type compatible with React 18 and 19 RefObject
      return current as T;
    },
    set current(element) {
      current = element;
      refs.forEach((ref) => ref && setRef(element, ref as Ref<T>));
    },
  };
};
