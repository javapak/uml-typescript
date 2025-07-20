/**
 * Interface for Parameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends ConnectableElement, MultiplicityElement
 */
import { IConnectableElement } from './IConnectableElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IParameterSet } from './IParameterSet';
import { IValueSpecification } from './IValueSpecification';
import { ParameterDirectionKind } from './ParameterDirectionKind';
import { ParameterEffectKind } from './ParameterEffectKind';
import { ValueSpecification } from './ValueSpecification';

export interface IParameter extends IConnectableElement, IMultiplicityElement {
  /**
   * defaultValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  defaultValue?: IValueSpecification;
  /**
   * direction
   * 
   * @type ParameterDirectionKind
   * @multiplicity [1..1]
   */
  direction: ParameterDirectionKind;
  /**
   * effect
   * 
   * @type ParameterEffectKind
   * @multiplicity [0..1]
   */
  effect?: ParameterEffectKind;
  /**
   * isException
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isException: boolean;
  /**
   * isStream
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isStream: boolean;
  /**
   * parameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite parameter
   */
  parameterSet?: Set<string>;
}

// Type aliases for Parameter
export type ParameterInput = Partial<IParameter>;
export type ParameterOutput = IParameter;
