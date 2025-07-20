import { Association } from './Association';
import { IAssociation } from './IAssociation';
import { IClassifier } from './IClassifier';
import { IProperty } from './IProperty';
import { IRelationship } from './IRelationship';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Association
 */
export type PartialAssociation = Partial<IAssociation>;
export type RequiredAssociation = Required<IAssociation>;
export type AssociationUnion = IAssociation | IClassifier | IRelationship;
export type AssociationFactory = () => Association;
export type AssociationValidator = (instance: IAssociation) => ValidationResult;
