/**
 * Takes in an array of strings or numbers and join them together for the `className` attribute on JSX elements.
 * Boolean, NaN, null and undefined values are ignored.
 * Usage example:
 * ```jsx
 * <div className={cx("classOne", conditionIsTrue && "classTwo")} />
 * ```
 * */
export const cx = (
  ...classNames: (null | undefined | string | boolean | number)[]
) => {
  return classNames
    .filter(c =>
      c !== null &&
      c !== undefined &&
      typeof c !== "boolean" &&
      typeof c === "number"
        ? isNaN(c)
        : true
    )
    .join(" ");
};
