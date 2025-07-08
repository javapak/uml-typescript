/**
 * Interface for Interface
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier
 */
import { Classifier } from './Classifier';
import { IClassifier } from './IClassifier';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IReception } from './IReception';
import { Operation } from './Operation';
import { Property } from './Property';
import { ProtocolStateMachine } from './ProtocolStateMachine';
import { Reception } from './Reception';

export interface IInterface extends IClassifier {
  /**
   * nestedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship containment
   */
  nestedClassifier?: IClassifier[];
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interface
   */
  ownedAttribute?: IProperty[];
  /**
   * ownedReception
   * 
   * @type Reception
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedReception?: Set<IReception>;
  /**
   * protocol
   * 
   * @type ProtocolStateMachine
   * @multiplicity [0..1]
   * @relationship containment
   */
  protocol?: IProtocolStateMachine;
  /**
   * redefinedInterface
   * 
   * @type Interface
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedInterface?: Set<string>;
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interface
   */
  ownedOperation?: IOperation[];
}

// Type aliases for Interface
export type InterfaceInput = Partial<IInterface>;
export type InterfaceOutput = IInterface;
