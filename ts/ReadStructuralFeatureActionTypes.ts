import { IOutputPin } from './IOutputPin';
import { IReadStructuralFeatureAction } from './IReadStructuralFeatureAction';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { ReadStructuralFeatureAction } from './ReadStructuralFeatureAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadStructuralFeatureAction
 */
export type PartialReadStructuralFeatureAction = Partial<IReadStructuralFeatureAction>;
export type RequiredReadStructuralFeatureAction = Required<IReadStructuralFeatureAction>;
export type ReadStructuralFeatureActionUnion = IReadStructuralFeatureAction | IStructuralFeatureAction;
export type ReadStructuralFeatureActionFactory = () => ReadStructuralFeatureAction;
export type ReadStructuralFeatureActionValidator = (instance: IReadStructuralFeatureAction) => ValidationResult;
