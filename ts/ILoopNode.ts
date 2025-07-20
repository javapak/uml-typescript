/**
 * Interface for LoopNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { IExecutableNode } from './IExecutableNode';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface ILoopNode extends IStructuredActivityNode {
  /**
   * bodyOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  bodyOutput?: string[];
  /**
   * bodyPart
   * 
   * @type ExecutableNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  bodyPart?: Set<string>;
  /**
   * decider
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  decider: string;
  /**
   * isTestedFirst
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isTestedFirst: boolean;
  /**
   * loopVariable
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  loopVariable?: IOutputPin[];
  /**
   * loopVariableInput
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  loopVariableInput?: IInputPin[];
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  result?: IOutputPin[];
  /**
   * setupPart
   * 
   * @type ExecutableNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  setupPart?: Set<string>;
  /**
   * test
   * 
   * @type ExecutableNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  test: Set<string>;
}

// Type aliases for LoopNode
export type LoopNodeInput = Partial<ILoopNode>;
export type LoopNodeOutput = ILoopNode;
