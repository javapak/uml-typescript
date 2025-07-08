import { AssociationClass } from './AssociationClass';
import { IAssociation } from './IAssociation';
import { IAssociationClass } from './IAssociationClass';
import { IClass } from './IClass';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AssociationClass
 */
export type PartialAssociationClass = Partial<IAssociationClass>;
export type RequiredAssociationClass = Required<IAssociationClass>;
export type AssociationClassUnion = IAssociationClass | IClass | IAssociation;
export type AssociationClassFactory = () => AssociationClass;
export type AssociationClassValidator = (instance: IAssociationClass) => ValidationResult;
