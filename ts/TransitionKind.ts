/**
 * TransitionKind enumeration from UML 2.5 metamodel
 */
export type TransitionKindLiteral = 
  | 'internal'
  | 'local'
  | 'external';

export const TransitionKind = {
  INTERNAL: 'internal' as const,
  LOCAL: 'local' as const,
  EXTERNAL: 'external' as const,
} as const;

export type TransitionKind = typeof TransitionKind[keyof typeof TransitionKind];

export const TransitionKindUtils = {
  values(): TransitionKind[] {
    return Object.values(TransitionKind);
  },

  isValid(value: string): value is TransitionKind {
    return Object.values(TransitionKind).includes(value as TransitionKind);
  },

  fromString(value: string): TransitionKind | undefined {
    return this.isValid(value) ? value as TransitionKind : undefined;
  }
};
