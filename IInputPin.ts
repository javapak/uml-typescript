/**
 * Interface for InputPin
 * 
 * @since UML 2.5
 * @package uml
 * @extends Pin
 */
import { IActionInputPin } from './IActionInputPin';
import { IPin } from './IPin';
import { IValuePin } from './IValuePin';

export interface IInputPin extends IPin {
}

// Type aliases for InputPin
export type InputPinInput = Partial<IInputPin>;
export type InputPinOutput = IInputPin;
export type InputPinUnion = IInputPin | IActionInputPin | IValuePin;
