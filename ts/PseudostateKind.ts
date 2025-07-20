/**
 * PseudostateKind enumeration from UML 2.5 metamodel
 */
export type PseudostateKindLiteral = 
  | 'initial'
  | 'deepHistory'
  | 'shallowHistory'
  | 'join'
  | 'fork'
  | 'junction'
  | 'choice'
  | 'entryPoint'
  | 'exitPoint'
  | 'terminate';

export const PseudostateKind = {
  INITIAL: 'initial' as const,
  DEEPHISTORY: 'deepHistory' as const,
  SHALLOWHISTORY: 'shallowHistory' as const,
  JOIN: 'join' as const,
  FORK: 'fork' as const,
  JUNCTION: 'junction' as const,
  CHOICE: 'choice' as const,
  ENTRYPOINT: 'entryPoint' as const,
  EXITPOINT: 'exitPoint' as const,
  TERMINATE: 'terminate' as const,
} as const;

export type PseudostateKind = typeof PseudostateKind[keyof typeof PseudostateKind];

export const PseudostateKindUtils = {
  values(): PseudostateKind[] {
    return Object.values(PseudostateKind);
  },

  isValid(value: string): value is PseudostateKind {
    return Object.values(PseudostateKind).includes(value as PseudostateKind);
  },

  fromString(value: string): PseudostateKind | undefined {
    return this.isValid(value) ? value as PseudostateKind : undefined;
  }
};
