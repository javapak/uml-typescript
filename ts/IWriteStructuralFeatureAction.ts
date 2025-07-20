/**
 * Interface for WriteStructuralFeatureAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends StructuralFeatureAction
 */
import { IAddStructuralFeatureValueAction } from './IAddStructuralFeatureValueAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IRemoveStructuralFeatureValueAction } from './IRemoveStructuralFeatureValueAction';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface IWriteStructuralFeatureAction extends IStructuralFeatureAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  result?: IOutputPin;
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  value?: IInputPin;
}

// Type aliases for WriteStructuralFeatureAction
export type WriteStructuralFeatureActionInput = Partial<IWriteStructuralFeatureAction>;
export type WriteStructuralFeatureActionOutput = IWriteStructuralFeatureAction;
export type WriteStructuralFeatureActionUnion = IWriteStructuralFeatureAction | IAddStructuralFeatureValueAction | IRemoveStructuralFeatureValueAction;
