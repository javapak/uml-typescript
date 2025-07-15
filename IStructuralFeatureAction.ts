/**
 * Interface for StructuralFeatureAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IClearStructuralFeatureAction } from './IClearStructuralFeatureAction';
import { IInputPin } from './IInputPin';
import { IReadStructuralFeatureAction } from './IReadStructuralFeatureAction';
import { IStructuralFeature } from './IStructuralFeature';
import { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
import { InputPin } from './InputPin';

export interface IStructuralFeatureAction extends IAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
  /**
   * structuralFeature
   * 
   * @type StructuralFeature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  structuralFeature: string;
}

// Type aliases for StructuralFeatureAction
export type StructuralFeatureActionInput = Partial<IStructuralFeatureAction>;
export type StructuralFeatureActionOutput = IStructuralFeatureAction;
export type StructuralFeatureActionUnion = IStructuralFeatureAction | IWriteStructuralFeatureAction | IClearStructuralFeatureAction | IReadStructuralFeatureAction;
