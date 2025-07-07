import { CreateLinkAction } from './CreateLinkAction';
import { ICreateLinkAction } from './ICreateLinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CreateLinkAction
 */
export type PartialCreateLinkAction = Partial<ICreateLinkAction>;
export type RequiredCreateLinkAction = Required<ICreateLinkAction>;
export type CreateLinkActionKey = Pick<ICreateLinkAction, 'name' | 'nameExpression'>;
export type CreateLinkActionMetadata = Pick<ICreateLinkAction, 'ownedComment' | 'visibility'>;
export type CreateLinkActionSummary = Pick<ICreateLinkAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CreateLinkActionUnion = ICreateLinkAction | IWriteLinkAction;
export type CreateLinkActionFactory = () => CreateLinkAction;
export type CreateLinkActionValidator = (instance: ICreateLinkAction) => ValidationResult;
