import { Feature } from './Feature';
import { IFeature } from './IFeature';
import { IRedefinableElement } from './IRedefinableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Feature
 */
export type PartialFeature = Partial<IFeature>;
export type RequiredFeature = Required<IFeature>;
export type FeatureKey = Pick<IFeature, 'name' | 'nameExpression'>;
export type FeatureMetadata = Pick<IFeature, 'ownedComment' | 'visibility'>;
export type FeatureSummary = Pick<IFeature, 'eAnnotations' | 'ownedComment' | 'name'>;
export type FeatureUnion = IFeature | IRedefinableElement;
export type FeatureFactory = () => Feature;
export type FeatureValidator = (instance: IFeature) => ValidationResult;
