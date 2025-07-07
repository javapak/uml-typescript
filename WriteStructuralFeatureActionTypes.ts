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
export type WriteStructuralFeatureActionKey = Pick<IWriteStructuralFeatureAction, 'name' | 'nameExpression'>;
export type WriteStructuralFeatureActionMetadata = Pick<IWriteStructuralFeatureAction, 'ownedComment' | 'visibility'>;
export type WriteStructuralFeatureActionSummary = Pick<IWriteStructuralFeatureAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type WriteStructuralFeatureActionUnion = IWriteStructuralFeatureAction | IStructuralFeatureAction;
export type WriteStructuralFeatureActionFactory = () => WriteStructuralFeatureAction;
export type WriteStructuralFeatureActionValidator = (instance: IWriteStructuralFeatureAction) => ValidationResult;
