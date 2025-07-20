/**
 * Interface for AssociationClass
 * 
 * @since UML 2.5
 * @package uml
 * @extends Class, Association
 */
import { IAssociation } from './IAssociation';
import { IClass } from './IClass';

export interface IAssociationClass extends IClass, IAssociation {
}

// Type aliases for AssociationClass
export type AssociationClassInput = Partial<IAssociationClass>;
export type AssociationClassOutput = IAssociationClass;
