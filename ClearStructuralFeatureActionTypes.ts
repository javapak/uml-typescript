import { ClearStructuralFeatureAction } from './ClearStructuralFeatureAction';
import { IClearStructuralFeatureAction } from './IClearStructuralFeatureAction';
import { IOutputPin } from './IOutputPin';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ClearStructuralFeatureAction
 */
export type PartialClearStructuralFeatureAction = Partial<IClearStructuralFeatureAction>;
export type RequiredClearStructuralFeatureAction = Required<IClearStructuralFeatureAction>;
export type ClearStructuralFeatureActionKey = Pick<IClearStructuralFeatureAction, 'name' | 'nameExpression'>;
export type ClearStructuralFeatureActionMetadata = Pick<IClearStructuralFeatureAction, 'ownedComment' | 'visibility'>;
export type ClearStructuralFeatureActionSummary = Pick<IClearStructuralFeatureAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ClearStructuralFeatureActionUnion = IClearStructuralFeatureAction | IStructuralFeatureAction;
export type ClearStructuralFeatureActionFactory = () => ClearStructuralFeatureAction;
export type ClearStructuralFeatureActionValidator = (instance: IClearStructuralFeatureAction) => ValidationResult;
