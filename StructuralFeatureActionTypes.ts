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
export type StructuralFeatureActionKey = Pick<IStructuralFeatureAction, 'name' | 'nameExpression'>;
export type StructuralFeatureActionMetadata = Pick<IStructuralFeatureAction, 'ownedComment' | 'visibility'>;
export type StructuralFeatureActionSummary = Pick<IStructuralFeatureAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type StructuralFeatureActionUnion = IStructuralFeatureAction | IAction;
export type StructuralFeatureActionFactory = () => StructuralFeatureAction;
export type StructuralFeatureActionValidator = (instance: IStructuralFeatureAction) => ValidationResult;
