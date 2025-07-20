import { IInputPin } from './IInputPin';
import { IRemoveStructuralFeatureValueAction } from './IRemoveStructuralFeatureValueAction';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { RemoveStructuralFeatureValueAction } from './RemoveStructuralFeatureValueAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RemoveStructuralFeatureValueAction
 */
export type PartialRemoveStructuralFeatureValueAction = Partial<IRemoveStructuralFeatureValueAction>;
export type RequiredRemoveStructuralFeatureValueAction = Required<IRemoveStructuralFeatureValueAction>;
export type RemoveStructuralFeatureValueActionUnion = IRemoveStructuralFeatureValueAction | IWriteStructuralFeatureAction;
export type RemoveStructuralFeatureValueActionFactory = () => RemoveStructuralFeatureValueAction;
export type RemoveStructuralFeatureValueActionValidator = (instance: IRemoveStructuralFeatureValueAction) => ValidationResult;
