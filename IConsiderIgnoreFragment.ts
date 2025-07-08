/**
 * Interface for ConsiderIgnoreFragment
 * 
 * @since UML 2.5
 * @package uml
 * @extends CombinedFragment
 */
import { ICombinedFragment } from './ICombinedFragment';
import { INamedElement } from './INamedElement';

export interface IConsiderIgnoreFragment extends ICombinedFragment {
  /**
   * message
   * 
   * @type NamedElement
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  message?: Set<string>;
}

// Type aliases for ConsiderIgnoreFragment
export type ConsiderIgnoreFragmentInput = Partial<IConsiderIgnoreFragment>;
export type ConsiderIgnoreFragmentOutput = IConsiderIgnoreFragment;
