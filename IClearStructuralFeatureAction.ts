/**
 * Interface for ClearStructuralFeatureAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuralFeatureAction
 */
import { IOutputPin } from './IOutputPin';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { OutputPin } from './OutputPin';

export interface IClearStructuralFeatureAction extends IStructuralFeatureAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  result?: IOutputPin;
}

// Type aliases for ClearStructuralFeatureAction
export type ClearStructuralFeatureActionInput = Partial<IClearStructuralFeatureAction>;
export type ClearStructuralFeatureActionOutput = IClearStructuralFeatureAction;
