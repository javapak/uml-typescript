/**
 * InteractionOperatorKind enumeration from UML 2.5 metamodel
 */
export type InteractionOperatorKindLiteral = 
  | 'seq'
  | 'alt'
  | 'opt'
  | 'break'
  | 'par'
  | 'strict'
  | 'loop'
  | 'critical'
  | 'neg'
  | 'assert'
  | 'ignore'
  | 'consider';

export const InteractionOperatorKind = {
  SEQ: 'seq' as const,
  ALT: 'alt' as const,
  OPT: 'opt' as const,
  BREAK: 'break' as const,
  PAR: 'par' as const,
  STRICT: 'strict' as const,
  LOOP: 'loop' as const,
  CRITICAL: 'critical' as const,
  NEG: 'neg' as const,
  ASSERT: 'assert' as const,
  IGNORE: 'ignore' as const,
  CONSIDER: 'consider' as const,
} as const;

export type InteractionOperatorKind = typeof InteractionOperatorKind[keyof typeof InteractionOperatorKind];

export const InteractionOperatorKindUtils = {
  values(): InteractionOperatorKind[] {
    return Object.values(InteractionOperatorKind);
  },

  isValid(value: string): value is InteractionOperatorKind {
    return Object.values(InteractionOperatorKind).includes(value as InteractionOperatorKind);
  },

  fromString(value: string): InteractionOperatorKind | undefined {
    return this.isValid(value) ? value as InteractionOperatorKind : undefined;
  }
};
