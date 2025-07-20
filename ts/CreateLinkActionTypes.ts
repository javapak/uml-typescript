import { CreateLinkAction } from './CreateLinkAction';
import { ICreateLinkAction } from './ICreateLinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CreateLinkAction
 */
export type PartialCreateLinkAction = Partial<ICreateLinkAction>;
export type RequiredCreateLinkAction = Required<ICreateLinkAction>;
export type CreateLinkActionUnion = ICreateLinkAction | IWriteLinkAction;
export type CreateLinkActionFactory = () => CreateLinkAction;
export type CreateLinkActionValidator = (instance: ICreateLinkAction) => ValidationResult;
