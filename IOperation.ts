/**
 * Interface for Operation
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioralFeature, ParameterableElement, TemplateableElement
 */
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IConstraint } from './IConstraint';
import { IDataType } from './IDataType';
import { IInterface } from './IInterface';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateableElement } from './ITemplateableElement';

export interface IOperation extends IBehavioralFeature, IParameterableElement, ITemplateableElement {
  /**
   * bodyCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  bodyCondition?: string;
  /**
   * class
   * 
   * @type Class
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  class?: string;
  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  datatype?: string;
  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  interface?: string;
  /**
   * isQuery
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isQuery: boolean;
  /**
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  postcondition?: Set<string>;
  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  precondition?: Set<string>;
  /**
   * redefinedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedOperation?: Set<string>;
}

// Type aliases for Operation
export type OperationInput = Partial<IOperation>;
export type OperationOutput = IOperation;
