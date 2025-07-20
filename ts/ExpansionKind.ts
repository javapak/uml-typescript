/**
 * ExpansionKind enumeration from UML 2.5 metamodel
 */
export type ExpansionKindLiteral = 
  | 'parallel'
  | 'iterative'
  | 'stream';

export const ExpansionKind = {
  PARALLEL: 'parallel' as const,
  ITERATIVE: 'iterative' as const,
  STREAM: 'stream' as const,
} as const;

export type ExpansionKind = typeof ExpansionKind[keyof typeof ExpansionKind];

export const ExpansionKindUtils = {
  values(): ExpansionKind[] {
    return Object.values(ExpansionKind);
  },

  isValid(value: string): value is ExpansionKind {
    return Object.values(ExpansionKind).includes(value as ExpansionKind);
  },

  fromString(value: string): ExpansionKind | undefined {
    return this.isValid(value) ? value as ExpansionKind : undefined;
  }
};
