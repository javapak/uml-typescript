import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOpaqueAction } from './IOpaqueAction';
import { IOutputPin } from './IOutputPin';
import { OpaqueAction } from './OpaqueAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OpaqueAction
 */
export type PartialOpaqueAction = Partial<IOpaqueAction>;
export type RequiredOpaqueAction = Required<IOpaqueAction>;
export type OpaqueActionUnion = IOpaqueAction | IAction;
export type OpaqueActionFactory = () => OpaqueAction;
export type OpaqueActionValidator = (instance: IOpaqueAction) => ValidationResult;
