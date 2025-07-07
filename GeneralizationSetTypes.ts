import { GeneralizationSet } from './GeneralizationSet';
import { IClassifier } from './IClassifier';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for GeneralizationSet
 */
export type PartialGeneralizationSet = Partial<IGeneralizationSet>;
export type RequiredGeneralizationSet = Required<IGeneralizationSet>;
export type GeneralizationSetKey = Pick<IGeneralizationSet, 'name' | 'nameExpression'>;
export type GeneralizationSetMetadata = Pick<IGeneralizationSet, 'ownedComment' | 'visibility'>;
export type GeneralizationSetSummary = Pick<IGeneralizationSet, 'eAnnotations' | 'ownedComment' | 'name'>;
export type GeneralizationSetUnion = IGeneralizationSet | IPackageableElement;
export type GeneralizationSetFactory = () => GeneralizationSet;
export type GeneralizationSetValidator = (instance: IGeneralizationSet) => ValidationResult;
