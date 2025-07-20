/**
 * ParameterDirectionKind enumeration from UML 2.5 metamodel
 */
export type ParameterDirectionKindLiteral = 
  | 'in'
  | 'inout'
  | 'out'
  | 'return';

export const ParameterDirectionKind = {
  IN: 'in' as const,
  INOUT: 'inout' as const,
  OUT: 'out' as const,
  RETURN: 'return' as const,
} as const;

export type ParameterDirectionKind = typeof ParameterDirectionKind[keyof typeof ParameterDirectionKind];

export const ParameterDirectionKindUtils = {
  values(): ParameterDirectionKind[] {
    return Object.values(ParameterDirectionKind);
  },

  isValid(value: string): value is ParameterDirectionKind {
    return Object.values(ParameterDirectionKind).includes(value as ParameterDirectionKind);
  },

  fromString(value: string): ParameterDirectionKind | undefined {
    return this.isValid(value) ? value as ParameterDirectionKind : undefined;
  }
};
