import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { ILinkAction } from './ILinkAction';
import { ILinkEndData } from './ILinkEndData';
import { LinkAction } from './LinkAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LinkAction
 */
export type PartialLinkAction = Partial<ILinkAction>;
export type RequiredLinkAction = Required<ILinkAction>;
export type LinkActionUnion = ILinkAction | IAction;
export type LinkActionFactory = () => LinkAction;
export type LinkActionValidator = (instance: ILinkAction) => ValidationResult;
