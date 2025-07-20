import { IFeature } from './IFeature';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IStructuralFeature } from './IStructuralFeature';
import { ITypedElement } from './ITypedElement';
import { StructuralFeature } from './StructuralFeature';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StructuralFeature
 */
export type PartialStructuralFeature = Partial<IStructuralFeature>;
export type RequiredStructuralFeature = Required<IStructuralFeature>;
export type StructuralFeatureUnion = IStructuralFeature | IFeature | ITypedElement | IMultiplicityElement;
export type StructuralFeatureFactory = () => StructuralFeature;
export type StructuralFeatureValidator = (instance: IStructuralFeature) => ValidationResult;
