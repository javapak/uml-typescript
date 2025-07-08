import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IInputPin } from './IInputPin';
import { IReclassifyObjectAction } from './IReclassifyObjectAction';
import { ReclassifyObjectAction } from './ReclassifyObjectAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReclassifyObjectAction
 */
export type PartialReclassifyObjectAction = Partial<IReclassifyObjectAction>;
export type RequiredReclassifyObjectAction = Required<IReclassifyObjectAction>;
export type ReclassifyObjectActionUnion = IReclassifyObjectAction | IAction;
export type ReclassifyObjectActionFactory = () => ReclassifyObjectAction;
export type ReclassifyObjectActionValidator = (instance: IReclassifyObjectAction) => ValidationResult;
