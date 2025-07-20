import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { ValidationResult } from './ValidationTypes';
import { WriteStructuralFeatureAction } from './WriteStructuralFeatureAction';

/**
 * Utility types for WriteStructuralFeatureAction
 */
export type PartialWriteStructuralFeatureAction = Partial<IWriteStructuralFeatureAction>;
export type RequiredWriteStructuralFeatureAction = Required<IWriteStructuralFeatureAction>;
export type WriteStructuralFeatureActionUnion = IWriteStructuralFeatureAction | IStructuralFeatureAction;
export type WriteStructuralFeatureActionFactory = () => WriteStructuralFeatureAction;
export type WriteStructuralFeatureActionValidator = (instance: IWriteStructuralFeatureAction) => ValidationResult;
