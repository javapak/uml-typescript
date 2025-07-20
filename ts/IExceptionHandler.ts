/**
 * Interface for ExceptionHandler
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IClassifier } from './IClassifier';
import { IElement } from './IElement';
import { IExecutableNode } from './IExecutableNode';
import { IObjectNode } from './IObjectNode';

export interface IExceptionHandler extends IElement {
  /**
   * exceptionInput
   * 
   * @type ObjectNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  exceptionInput: string;
  /**
   * exceptionType
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  exceptionType: Set<string>;
  /**
   * handlerBody
   * 
   * @type ExecutableNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  handlerBody: string;
  /**
   * protectedNode
   * 
   * @type ExecutableNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite handler
   */
  protectedNode: string;
}

// Type aliases for ExceptionHandler
export type ExceptionHandlerInput = Partial<IExceptionHandler>;
export type ExceptionHandlerOutput = IExceptionHandler;
