/**
 * CallConcurrencyKind enumeration from UML 2.5 metamodel
 */
export type CallConcurrencyKindLiteral = 
  | 'sequential'
  | 'guarded'
  | 'concurrent';

export const CallConcurrencyKind = {
  SEQUENTIAL: 'sequential' as const,
  GUARDED: 'guarded' as const,
  CONCURRENT: 'concurrent' as const,
} as const;

export type CallConcurrencyKind = typeof CallConcurrencyKind[keyof typeof CallConcurrencyKind];

export const CallConcurrencyKindUtils = {
  values(): CallConcurrencyKind[] {
    return Object.values(CallConcurrencyKind);
  },

  isValid(value: string): value is CallConcurrencyKind {
    return Object.values(CallConcurrencyKind).includes(value as CallConcurrencyKind);
  },

  fromString(value: string): CallConcurrencyKind | undefined {
    return this.isValid(value) ? value as CallConcurrencyKind : undefined;
  }
};
