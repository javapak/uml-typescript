/**
 * Interface for ParameterSet
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { Constraint } from './Constraint';
import { IConstraint } from './IConstraint';
import { INamedElement } from './INamedElement';
import { IParameter } from './IParameter';

export interface IParameterSet extends INamedElement {
  /**
   * condition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  condition: Set<IConstraint>;
  /**
   * parameter
   * 
   * @type Parameter
   * @multiplicity [1..*]
   * @relationship cross-reference
   * @opposite parameterSet
   */
  parameter: Set<IParameter | string>;
}

// Type aliases for ParameterSet
export type ParameterSetInput = Partial<IParameterSet>;
export type ParameterSetOutput = IParameterSet;
