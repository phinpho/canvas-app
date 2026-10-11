export type ExternalStore<T = unknown> = {
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => T;
  getServerSnapshot?: () => T;
};
