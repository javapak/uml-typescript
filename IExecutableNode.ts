/**
 * Interface for ExecutableNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ActivityNode
 */
import { ExceptionHandler } from './ExceptionHandler';
import { IAction } from './IAction';
import { IActivityNode } from './IActivityNode';
import { IExceptionHandler } from './IExceptionHandler';

export interface IExecutableNode extends IActivityNode {
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  handler?: Set<IExceptionHandler>;
}

// Type aliases for ExecutableNode
export type ExecutableNodeInput = Partial<IExecutableNode>;
export type ExecutableNodeOutput = IExecutableNode;
export type ExecutableNodeUnion = IExecutableNode | IAction;
