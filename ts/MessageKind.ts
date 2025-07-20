/**
 * MessageKind enumeration from UML 2.5 metamodel
 */
export type MessageKindLiteral = 
  | 'complete'
  | 'lost'
  | 'found'
  | 'unknown';

export const MessageKind = {
  COMPLETE: 'complete' as const,
  LOST: 'lost' as const,
  FOUND: 'found' as const,
  UNKNOWN: 'unknown' as const,
} as const;

export type MessageKind = typeof MessageKind[keyof typeof MessageKind];

export const MessageKindUtils = {
  values(): MessageKind[] {
    return Object.values(MessageKind);
  },

  isValid(value: string): value is MessageKind {
    return Object.values(MessageKind).includes(value as MessageKind);
  },

  fromString(value: string): MessageKind | undefined {
    return this.isValid(value) ? value as MessageKind : undefined;
  }
};
