/**
 * Interface for Class
 * 
 * @since UML 2.5
 * @package uml
 * @extends EncapsulatedClassifier, BehavioredClassifier
 */
import { Classifier } from './Classifier';
import { IAssociationClass } from './IAssociationClass';
import { IBehavior } from './IBehavior';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClassifier } from './IClassifier';
import { IComponent } from './IComponent';
import { IEncapsulatedClassifier } from './IEncapsulatedClassifier';
import { INode } from './INode';
import { IOperation } from './IOperation';
import { IReception } from './IReception';
import { IStereotype } from './IStereotype';
import { Operation } from './Operation';
import { Reception } from './Reception';

export interface IClass extends IEncapsulatedClassifier, IBehavioredClassifier {
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite class
   */
  ownedOperation?: IOperation[];
  /**
   * isActive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isActive: boolean;
  /**
   * nestedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship containment
   */
  nestedClassifier?: IClassifier[];
  /**
   * ownedReception
   * 
   * @type Reception
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedReception?: Set<IReception>;
}

// Type aliases for Class
export type ClassInput = Partial<IClass>;
export type ClassOutput = IClass;
export type ClassUnion = IClass | IBehavior | IStereotype | INode | IAssociationClass | IComponent;
