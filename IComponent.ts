/**
 * Interface for Component
 * 
 * @since UML 2.5
 * @package uml
 * @extends Class
 */
import { ComponentRealization } from './ComponentRealization';
import { IClass } from './IClass';
import { IComponentRealization } from './IComponentRealization';
import { IPackageableElement } from './IPackageableElement';
import { PackageableElement } from './PackageableElement';

export interface IComponent extends IClass {
  /**
   * isIndirectlyInstantiated
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isIndirectlyInstantiated: boolean;
  /**
   * packagedElement
   * 
   * @type PackageableElement
   * @multiplicity [0..*]
   * @relationship containment
   */
  packagedElement: Set<IPackageableElement>;
  /**
   * realization
   * 
   * @type ComponentRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite abstraction
   */
  realization: Set<IComponentRealization>;
}

// Type aliases for Component
export type ComponentInput = Partial<IComponent>;
export type ComponentOutput = IComponent;
