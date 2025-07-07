/**
 * Interface for Clause
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IExecutableNode } from './IExecutableNode';
import { IOutputPin } from './IOutputPin';

export interface IClause extends IElement {
  /**
   * body
   * 
   * @type ExecutableNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  body: Set<IExecutableNode | string>;
  /**
   * bodyOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  bodyOutput: IOutputPin | string[];
  /**
   * decider
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  decider: IOutputPin | string;
  /**
   * predecessorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite successorClause
   */
  predecessorClause: Set<IClause | string>;
  /**
   * successorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite predecessorClause
   */
  successorClause: Set<IClause | string>;
  /**
   * test
   * 
   * @type ExecutableNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  test: Set<IExecutableNode | string>;
}

// Type aliases for Clause
export type ClauseInput = Partial<IClause>;
export type ClauseOutput = IClause;
