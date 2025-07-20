/**
 * Interface for AddStructuralFeatureValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteStructuralFeatureAction
 */
import { IInputPin } from './IInputPin';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { InputPin } from './InputPin';

export interface IAddStructuralFeatureValueAction extends IWriteStructuralFeatureAction {
  /**
   * insertAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  insertAt?: IInputPin;
  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReplaceAll: boolean;
}

// Type aliases for AddStructuralFeatureValueAction
export type AddStructuralFeatureValueActionInput = Partial<IAddStructuralFeatureValueAction>;
export type AddStructuralFeatureValueActionOutput = IAddStructuralFeatureValueAction;
