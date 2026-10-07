/** Khmer fields use the same keys as English inside locale files. */
export type KhmerContent<T> = {
  [Key in keyof T as Key extends `${infer Name}Km` ? Name : never]: T[Key];
};

type SuffixedKhmer<T> = {
  [Key in keyof T as Key extends string ? `${Key}Km` : never]: T[Key];
};

/** Preserve the existing page data contract while storing locales separately. */
export function withKhmerSuffix<T extends object>(
  content: T,
): SuffixedKhmer<T> {
  return Object.fromEntries(
    Object.entries(content).map(([key, value]) => [`${key}Km`, value]),
  ) as SuffixedKhmer<T>;
}
