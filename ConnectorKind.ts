/**
 * ConnectorKind enumeration from UML 2.5 metamodel
 */
export type ConnectorKindLiteral = 
  | 'assembly'
  | 'delegation';

export const ConnectorKind = {
  ASSEMBLY: 'assembly' as const,
  DELEGATION: 'delegation' as const,
} as const;

export type ConnectorKind = typeof ConnectorKind[keyof typeof ConnectorKind];

export const ConnectorKindUtils = {
  values(): ConnectorKind[] {
    return Object.values(ConnectorKind);
  },

  isValid(value: string): value is ConnectorKind {
    return Object.values(ConnectorKind).includes(value as ConnectorKind);
  },

  fromString(value: string): ConnectorKind | undefined {
    return this.isValid(value) ? value as ConnectorKind : undefined;
  }
};
