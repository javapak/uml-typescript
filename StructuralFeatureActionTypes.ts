import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IStructuralFeature } from './IStructuralFeature';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { StructuralFeatureAction } from './StructuralFeatureAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StructuralFeatureAction
 */
export type PartialStructuralFeatureAction = Partial<IStructuralFeatureAction>;
export type RequiredStructuralFeatureAction = Required<IStructuralFeatureAction>;
export type StructuralFeatureActionUnion = IStructuralFeatureAction | IAction;
export type StructuralFeatureActionFactory = () => StructuralFeatureAction;
export type StructuralFeatureActionValidator = (instance: IStructuralFeatureAction) => ValidationResult;
