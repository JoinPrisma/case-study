import { ReadOnlySelectorOptions, RecoilValueReadOnly, selector } from 'recoil';

interface EqualSelectorOptions<T>
  extends Pick<ReadOnlySelectorOptions<T>, 'key' | 'get'> {
  equals: (a: T, b: T) => boolean;
}

/**
 * Custom equality selector
 *
 * From * https://codesandbox.io/s/recoil-equalatom-and-equalselector-ns1pkv?file=/src/App.tsx
 * As referenced in * https://github.com/facebookexperimental/Recoil/issues/1416
 */
export function equalSelector<T>(
  options: EqualSelectorOptions<T>
): RecoilValueReadOnly<T> {
  const inner = selector({
    key: `${options.key}_inner`,
    get: options.get,
  });

  let prior: T | undefined;

  return selector({
    key: options.key,
    get: ({ get }) => {
      const latest = get(inner);
      if (prior != null && options.equals(latest, prior)) {
        return prior;
      }
      prior = latest;
      return latest as T;
    },
  });
}
