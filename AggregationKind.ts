/**
 * AggregationKind enumeration from UML 2.5 metamodel
 */
export type AggregationKindLiteral = 
  | 'none'
  | 'shared'
  | 'composite';

export const AggregationKind = {
  NONE: 'none' as const,
  SHARED: 'shared' as const,
  COMPOSITE: 'composite' as const,
} as const;

export type AggregationKind = typeof AggregationKind[keyof typeof AggregationKind];

export const AggregationKindUtils = {
  values(): AggregationKind[] {
    return Object.values(AggregationKind);
  },

  isValid(value: string): value is AggregationKind {
    return Object.values(AggregationKind).includes(value as AggregationKind);
  },

  fromString(value: string): AggregationKind | undefined {
    return this.isValid(value) ? value as AggregationKind : undefined;
  }
};
