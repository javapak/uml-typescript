/**
 * Interface for Variable
 * 
 * @since UML 2.5
 * @package uml
 * @extends ConnectableElement, MultiplicityElement
 */
import { IActivity } from './IActivity';
import { IConnectableElement } from './IConnectableElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';

export interface IVariable extends IConnectableElement, IMultiplicityElement {
  /**
   * activityScope
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite variable
   */
  activityScope?: IActivity | string;
  /**
   * scope
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite variable
   */
  scope?: IStructuredActivityNode | string;
}

// Type aliases for Variable
export type VariableInput = Partial<IVariable>;
export type VariableOutput = IVariable;
