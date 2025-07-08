/**
 * Interface for StructuredActivityNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action, Namespace, ActivityGroup
 */
import { ActivityEdge } from './ActivityEdge';
import { ActivityNode } from './ActivityNode';
import { IAction } from './IAction';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IInputPin } from './IInputPin';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IVariable } from './IVariable';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';
import { Variable } from './Variable';

export interface IStructuredActivityNode extends IAction, INamespace, IActivityGroup {
  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  edge?: Set<IActivityEdge>;
  /**
   * mustIsolate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  mustIsolate: boolean;
  /**
   * structuredNodeInput
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  structuredNodeInput?: Set<IInputPin>;
  /**
   * structuredNodeOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  structuredNodeOutput?: Set<IOutputPin>;
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite scope
   */
  variable?: Set<IVariable>;
  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  node?: Set<IActivityNode>;
}

// Type aliases for StructuredActivityNode
export type StructuredActivityNodeInput = Partial<IStructuredActivityNode>;
export type StructuredActivityNodeOutput = IStructuredActivityNode;
export type StructuredActivityNodeUnion = IStructuredActivityNode | IConditionalNode | IExpansionRegion | ILoopNode | ISequenceNode;
