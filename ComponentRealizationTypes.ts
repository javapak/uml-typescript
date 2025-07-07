import { ComponentRealization } from './ComponentRealization';
import { IClassifier } from './IClassifier';
import { IComponent } from './IComponent';
import { IComponentRealization } from './IComponentRealization';
import { IRealization } from './IRealization';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ComponentRealization
 */
export type PartialComponentRealization = Partial<IComponentRealization>;
export type RequiredComponentRealization = Required<IComponentRealization>;
export type ComponentRealizationKey = Pick<IComponentRealization, 'name' | 'nameExpression'>;
export type ComponentRealizationMetadata = Pick<IComponentRealization, 'ownedComment' | 'visibility'>;
export type ComponentRealizationSummary = Pick<IComponentRealization, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ComponentRealizationUnion = IComponentRealization | IRealization;
export type ComponentRealizationFactory = () => ComponentRealization;
export type ComponentRealizationValidator = (instance: IComponentRealization) => ValidationResult;
