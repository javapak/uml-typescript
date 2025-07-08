import { EncapsulatedClassifier } from './EncapsulatedClassifier';
import { IEncapsulatedClassifier } from './IEncapsulatedClassifier';
import { IStructuredClassifier } from './IStructuredClassifier';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for EncapsulatedClassifier
 */
export type PartialEncapsulatedClassifier = Partial<IEncapsulatedClassifier>;
export type RequiredEncapsulatedClassifier = Required<IEncapsulatedClassifier>;
export type EncapsulatedClassifierUnion = IEncapsulatedClassifier | IStructuredClassifier;
export type EncapsulatedClassifierFactory = () => EncapsulatedClassifier;
export type EncapsulatedClassifierValidator = (instance: IEncapsulatedClassifier) => ValidationResult;
