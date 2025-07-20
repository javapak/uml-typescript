/**
 * Interface for OutputPin
 * 
 * @since UML 2.5
 * @package uml
 * @extends Pin
 */
import { IPin } from './IPin';

export interface IOutputPin extends IPin {
}

// Type aliases for OutputPin
export type OutputPinInput = Partial<IOutputPin>;
export type OutputPinOutput = IOutputPin;
