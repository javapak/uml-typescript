import { AddStructuralFeatureValueAction } from './AddStructuralFeatureValueAction';
import { IAddStructuralFeatureValueAction } from './IAddStructuralFeatureValueAction';
import { IInputPin } from './IInputPin';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AddStructuralFeatureValueAction
 */
export type PartialAddStructuralFeatureValueAction = Partial<IAddStructuralFeatureValueAction>;
export type RequiredAddStructuralFeatureValueAction = Required<IAddStructuralFeatureValueAction>;
export type AddStructuralFeatureValueActionKey = Pick<IAddStructuralFeatureValueAction, 'name' | 'nameExpression'>;
export type AddStructuralFeatureValueActionMetadata = Pick<IAddStructuralFeatureValueAction, 'ownedComment' | 'visibility'>;
export type AddStructuralFeatureValueActionSummary = Pick<IAddStructuralFeatureValueAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type AddStructuralFeatureValueActionUnion = IAddStructuralFeatureValueAction | IWriteStructuralFeatureAction;
export type AddStructuralFeatureValueActionFactory = () => AddStructuralFeatureValueAction;
export type AddStructuralFeatureValueActionValidator = (instance: IAddStructuralFeatureValueAction) => ValidationResult;
