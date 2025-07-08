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
  body?: Set<string>;
  /**
   * bodyOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  bodyOutput?: string[];
  /**
   * decider
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  decider: string;
  /**
   * predecessorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite successorClause
   */
  predecessorClause?: Set<string>;
  /**
   * successorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite predecessorClause
   */
  successorClause?: Set<string>;
  /**
   * test
   * 
   * @type ExecutableNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  test: Set<string>;
}

// Type aliases for Clause
export type ClauseInput = Partial<IClause>;
export type ClauseOutput = IClause;
