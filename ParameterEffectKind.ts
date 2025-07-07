/**
 * ParameterEffectKind enumeration from UML 2.5 metamodel
 */
export type ParameterEffectKindLiteral = 
  | 'create'
  | 'read'
  | 'update'
  | 'delete';

export const ParameterEffectKind = {
  CREATE: 'create' as const,
  READ: 'read' as const,
  UPDATE: 'update' as const,
  DELETE: 'delete' as const,
} as const;

export type ParameterEffectKind = typeof ParameterEffectKind[keyof typeof ParameterEffectKind];

export const ParameterEffectKindUtils = {
  values(): ParameterEffectKind[] {
    return Object.values(ParameterEffectKind);
  },

  isValid(value: string): value is ParameterEffectKind {
    return Object.values(ParameterEffectKind).includes(value as ParameterEffectKind);
  },

  fromString(value: string): ParameterEffectKind | undefined {
    return this.isValid(value) ? value as ParameterEffectKind : undefined;
  }
};
