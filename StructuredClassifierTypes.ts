import { IClassifier } from './IClassifier';
import { IConnector } from './IConnector';
import { IProperty } from './IProperty';
import { IStructuredClassifier } from './IStructuredClassifier';
import { StructuredClassifier } from './StructuredClassifier';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StructuredClassifier
 */
export type PartialStructuredClassifier = Partial<IStructuredClassifier>;
export type RequiredStructuredClassifier = Required<IStructuredClassifier>;
export type StructuredClassifierUnion = IStructuredClassifier | IClassifier;
export type StructuredClassifierFactory = () => StructuredClassifier;
export type StructuredClassifierValidator = (instance: IStructuredClassifier) => ValidationResult;
