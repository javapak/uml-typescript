/**
 * ObjectNodeOrderingKind enumeration from UML 2.5 metamodel
 */
export type ObjectNodeOrderingKindLiteral = 
  | 'unordered'
  | 'ordered'
  | 'LIFO'
  | 'FIFO';

export const ObjectNodeOrderingKind = {
  UNORDERED: 'unordered' as const,
  ORDERED: 'ordered' as const,
  LIFO: 'LIFO' as const,
  FIFO: 'FIFO' as const,
} as const;

export type ObjectNodeOrderingKind = typeof ObjectNodeOrderingKind[keyof typeof ObjectNodeOrderingKind];

export const ObjectNodeOrderingKindUtils = {
  values(): ObjectNodeOrderingKind[] {
    return Object.values(ObjectNodeOrderingKind);
  },

  isValid(value: string): value is ObjectNodeOrderingKind {
    return Object.values(ObjectNodeOrderingKind).includes(value as ObjectNodeOrderingKind);
  },

  fromString(value: string): ObjectNodeOrderingKind | undefined {
    return this.isValid(value) ? value as ObjectNodeOrderingKind : undefined;
  }
};
