/**
 * Interface for RemoveStructuralFeatureValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteStructuralFeatureAction
 */
import { IInputPin } from './IInputPin';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { InputPin } from './InputPin';

export interface IRemoveStructuralFeatureValueAction extends IWriteStructuralFeatureAction {
  /**
   * isRemoveDuplicates
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isRemoveDuplicates: boolean;
  /**
   * removeAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  removeAt?: IInputPin;
}

// Type aliases for RemoveStructuralFeatureValueAction
export type RemoveStructuralFeatureValueActionInput = Partial<IRemoveStructuralFeatureValueAction>;
export type RemoveStructuralFeatureValueActionOutput = IRemoveStructuralFeatureValueAction;
