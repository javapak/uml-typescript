/**
 * Interface for Signal
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier
 */
import { IClassifier } from './IClassifier';
import { IProperty } from './IProperty';
import { Property } from './Property';

export interface ISignal extends IClassifier {
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedAttribute?: IProperty[];
}

// Type aliases for Signal
export type SignalInput = Partial<ISignal>;
export type SignalOutput = ISignal;
