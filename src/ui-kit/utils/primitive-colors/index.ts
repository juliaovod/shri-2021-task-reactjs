const primitiveColors: CSSStyleDeclaration = getComputedStyle(document.documentElement);

export const getThemePropertyValue = (value: string): string =>
  primitiveColors.getPropertyValue(value);
