/**
 * MessageSort enumeration from UML 2.5 metamodel
 */
export type MessageSortLiteral = 
  | 'synchCall'
  | 'asynchCall'
  | 'asynchSignal'
  | 'createMessage'
  | 'deleteMessage'
  | 'reply';

export const MessageSort = {
  SYNCHCALL: 'synchCall' as const,
  ASYNCHCALL: 'asynchCall' as const,
  ASYNCHSIGNAL: 'asynchSignal' as const,
  CREATEMESSAGE: 'createMessage' as const,
  DELETEMESSAGE: 'deleteMessage' as const,
  REPLY: 'reply' as const,
} as const;

export type MessageSort = typeof MessageSort[keyof typeof MessageSort];

export const MessageSortUtils = {
  values(): MessageSort[] {
    return Object.values(MessageSort);
  },

  isValid(value: string): value is MessageSort {
    return Object.values(MessageSort).includes(value as MessageSort);
  },

  fromString(value: string): MessageSort | undefined {
    return this.isValid(value) ? value as MessageSort : undefined;
  }
};
