/**
 * Interface for ValueSpecificationAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { IValueSpecification } from './IValueSpecification';
import { OutputPin } from './OutputPin';
import { ValueSpecification } from './ValueSpecification';

export interface IValueSpecificationAction extends IAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
  /**
   * value
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  value: IValueSpecification;
}

// Type aliases for ValueSpecificationAction
export type ValueSpecificationActionInput = Partial<IValueSpecificationAction>;
export type ValueSpecificationActionOutput = IValueSpecificationAction;
