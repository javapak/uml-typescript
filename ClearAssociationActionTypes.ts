import { ClearAssociationAction } from './ClearAssociationAction';
import { IAction } from './IAction';
import { IAssociation } from './IAssociation';
import { IClearAssociationAction } from './IClearAssociationAction';
import { IInputPin } from './IInputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ClearAssociationAction
 */
export type PartialClearAssociationAction = Partial<IClearAssociationAction>;
export type RequiredClearAssociationAction = Required<IClearAssociationAction>;
export type ClearAssociationActionKey = Pick<IClearAssociationAction, 'name' | 'nameExpression'>;
export type ClearAssociationActionMetadata = Pick<IClearAssociationAction, 'ownedComment' | 'visibility'>;
export type ClearAssociationActionSummary = Pick<IClearAssociationAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ClearAssociationActionUnion = IClearAssociationAction | IAction;
export type ClearAssociationActionFactory = () => ClearAssociationAction;
export type ClearAssociationActionValidator = (instance: IClearAssociationAction) => ValidationResult;
