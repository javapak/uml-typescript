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
export type ActionInputPinKey = Pick<IActionInputPin, 'name' | 'nameExpression'>;
export type ActionInputPinMetadata = Pick<IActionInputPin, 'ownedComment' | 'visibility'>;
export type ActionInputPinSummary = Pick<IActionInputPin, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ActionInputPinUnion = IActionInputPin | IInputPin;
export type ActionInputPinFactory = () => ActionInputPin;
export type ActionInputPinValidator = (instance: IActionInputPin) => ValidationResult;
