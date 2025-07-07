/**
 * Interface for ClearAssociationAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IAssociation } from './IAssociation';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IClearAssociationAction extends IAction {
  /**
   * association
   * 
   * @type Association
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  association: IAssociation | string;
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
}

// Type aliases for ClearAssociationAction
export type ClearAssociationActionInput = Partial<IClearAssociationAction>;
export type ClearAssociationActionOutput = IClearAssociationAction;
