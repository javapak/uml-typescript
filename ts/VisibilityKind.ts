/**
 * VisibilityKind enumeration from UML 2.5 metamodel
 */
export type VisibilityKindLiteral = 
  | 'public'
  | 'private'
  | 'protected'
  | 'package';

export const VisibilityKind = {
  PUBLIC: 'public' as const,
  PRIVATE: 'private' as const,
  PROTECTED: 'protected' as const,
  PACKAGE: 'package' as const,
} as const;

export type VisibilityKind = typeof VisibilityKind[keyof typeof VisibilityKind];

export const VisibilityKindUtils = {
  values(): VisibilityKind[] {
    return Object.values(VisibilityKind);
  },

  isValid(value: string): value is VisibilityKind {
    return Object.values(VisibilityKind).includes(value as VisibilityKind);
  },

  fromString(value: string): VisibilityKind | undefined {
    return this.isValid(value) ? value as VisibilityKind : undefined;
  }
};
