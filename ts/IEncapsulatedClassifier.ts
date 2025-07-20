/**
 * Interface for EncapsulatedClassifier
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends StructuredClassifier
 */
import { IClass } from './IClass';
import { IStructuredClassifier } from './IStructuredClassifier';

export interface IEncapsulatedClassifier extends IStructuredClassifier {
}

// Type aliases for EncapsulatedClassifier
export type EncapsulatedClassifierInput = Partial<IEncapsulatedClassifier>;
export type EncapsulatedClassifierOutput = IEncapsulatedClassifier;
export type EncapsulatedClassifierUnion = IEncapsulatedClassifier | IClass;
