import { DestroyLinkAction } from './DestroyLinkAction';
import { IDestroyLinkAction } from './IDestroyLinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DestroyLinkAction
 */
export type PartialDestroyLinkAction = Partial<IDestroyLinkAction>;
export type RequiredDestroyLinkAction = Required<IDestroyLinkAction>;
export type DestroyLinkActionKey = Pick<IDestroyLinkAction, 'name' | 'nameExpression'>;
export type DestroyLinkActionMetadata = Pick<IDestroyLinkAction, 'ownedComment' | 'visibility'>;
export type DestroyLinkActionSummary = Pick<IDestroyLinkAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DestroyLinkActionUnion = IDestroyLinkAction | IWriteLinkAction;
export type DestroyLinkActionFactory = () => DestroyLinkAction;
export type DestroyLinkActionValidator = (instance: IDestroyLinkAction) => ValidationResult;
