import { ILinkAction } from './ILinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { ValidationResult } from './ValidationTypes';
import { WriteLinkAction } from './WriteLinkAction';

/**
 * Utility types for WriteLinkAction
 */
export type PartialWriteLinkAction = Partial<IWriteLinkAction>;
export type RequiredWriteLinkAction = Required<IWriteLinkAction>;
export type WriteLinkActionKey = Pick<IWriteLinkAction, 'name' | 'nameExpression'>;
export type WriteLinkActionMetadata = Pick<IWriteLinkAction, 'ownedComment' | 'visibility'>;
export type WriteLinkActionSummary = Pick<IWriteLinkAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type WriteLinkActionUnion = IWriteLinkAction | ILinkAction;
export type WriteLinkActionFactory = () => WriteLinkAction;
export type WriteLinkActionValidator = (instance: IWriteLinkAction) => ValidationResult;
