import { ActionInputPin } from './ActionInputPin';
import { IAction } from './IAction';
import { IActionInputPin } from './IActionInputPin';
import { IInputPin } from './IInputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActionInputPin
 */
export type PartialActionInputPin = Partial<IActionInputPin>;
export type RequiredActionInputPin = Required<IActionInputPin>;
export type ActionInputPinUnion = IActionInputPin | IInputPin;
export type ActionInputPinFactory = () => ActionInputPin;
export type ActionInputPinValidator = (instance: IActionInputPin) => ValidationResult;
