import { ILinkAction } from './ILinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { ValidationResult } from './ValidationTypes';
import { WriteLinkAction } from './WriteLinkAction';

/**
 * Utility types for WriteLinkAction
 */
export type PartialWriteLinkAction = Partial<IWriteLinkAction>;
export type RequiredWriteLinkAction = Required<IWriteLinkAction>;
export type WriteLinkActionUnion = IWriteLinkAction | ILinkAction;
export type WriteLinkActionFactory = () => WriteLinkAction;
export type WriteLinkActionValidator = (instance: IWriteLinkAction) => ValidationResult;
