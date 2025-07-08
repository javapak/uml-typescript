/**
 * Interface for Constraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement
 */
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IConstraint extends IPackageableElement {
  /**
   * constrainedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  constrainedElement?: string[];
  /**
   * context
   * 
   * @type Namespace
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedRule
   */
  context?: string;
  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  specification: IValueSpecification;
}

// Type aliases for Constraint
export type ConstraintInput = Partial<IConstraint>;
export type ConstraintOutput = IConstraint;
export type ConstraintUnion = IConstraint | IInteractionConstraint | IIntervalConstraint;
