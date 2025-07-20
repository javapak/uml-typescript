/**
 * Interface for ReadStructuralFeatureAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuralFeatureAction
 */
import { IOutputPin } from './IOutputPin';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { OutputPin } from './OutputPin';

export interface IReadStructuralFeatureAction extends IStructuralFeatureAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadStructuralFeatureAction
export type ReadStructuralFeatureActionInput = Partial<IReadStructuralFeatureAction>;
export type ReadStructuralFeatureActionOutput = IReadStructuralFeatureAction;
