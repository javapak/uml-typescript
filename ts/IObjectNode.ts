/**
 * Interface for ObjectNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ActivityNode, TypedElement
 */
import { IActivityNode } from './IActivityNode';
import { IActivityParameterNode } from './IActivityParameterNode';
import { IBehavior } from './IBehavior';
import { ICentralBufferNode } from './ICentralBufferNode';
import { IExpansionNode } from './IExpansionNode';
import { IPin } from './IPin';
import { IState } from './IState';
import { ITypedElement } from './ITypedElement';
import { IValueSpecification } from './IValueSpecification';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { ValueSpecification } from './ValueSpecification';

export interface IObjectNode extends IActivityNode, ITypedElement {
  /**
   * inState
   * 
   * @type State
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  inState?: Set<string>;
  /**
   * isControlType
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isControlType: boolean;
  /**
   * ordering
   * 
   * @type ObjectNodeOrderingKind
   * @multiplicity [1..1]
   */
  ordering: ObjectNodeOrderingKind;
  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  selection?: string;
  /**
   * upperBound
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  upperBound?: IValueSpecification;
}

// Type aliases for ObjectNode
export type ObjectNodeInput = Partial<IObjectNode>;
export type ObjectNodeOutput = IObjectNode;
export type ObjectNodeUnion = IObjectNode | IPin | IExpansionNode | IActivityParameterNode | ICentralBufferNode;
