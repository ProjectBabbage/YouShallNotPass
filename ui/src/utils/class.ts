/**
 * Usage `className={getClasses([className, "text"])}`
 * @param classes
 * @returns
 */
export const getClasses = (...classes: (string | undefined)[]) => {
  return classes.filter((c) => c !== undefined).join(" ");
};
