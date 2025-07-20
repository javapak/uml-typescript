import { Generalization } from './Generalization';
import { IClassifier } from './IClassifier';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Generalization
 */
export type PartialGeneralization = Partial<IGeneralization>;
export type RequiredGeneralization = Required<IGeneralization>;
export type GeneralizationUnion = IGeneralization | IDirectedRelationship;
export type GeneralizationFactory = () => Generalization;
export type GeneralizationValidator = (instance: IGeneralization) => ValidationResult;
