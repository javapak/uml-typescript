/**
 * Interface for Namespace
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { IPackageImport } from './IPackageImport';
import { PackageImport } from './PackageImport';

export interface INamespace extends INamedElement {
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  ownedRule: Set<IConstraint>;
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  elementImport: Set<IElementImport>;
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  packageImport: Set<IPackageImport>;
}

// Type aliases for Namespace
export type NamespaceInput = Partial<INamespace>;
export type NamespaceOutput = INamespace;
export type NamespaceUnion = INamespace | IClassifier | IPackage | IBehavioralFeature | IRegion | IState | ITransition | IStructuredActivityNode | IInteractionOperand;
