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
export type ClearAssociationActionUnion = IClearAssociationAction | IAction;
export type ClearAssociationActionFactory = () => ClearAssociationAction;
export type ClearAssociationActionValidator = (instance: IClearAssociationAction) => ValidationResult;
