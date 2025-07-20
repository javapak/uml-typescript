import { CreateObjectAction } from './CreateObjectAction';
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { ICreateObjectAction } from './ICreateObjectAction';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CreateObjectAction
 */
export type PartialCreateObjectAction = Partial<ICreateObjectAction>;
export type RequiredCreateObjectAction = Required<ICreateObjectAction>;
export type CreateObjectActionUnion = ICreateObjectAction | IAction;
export type CreateObjectActionFactory = () => CreateObjectAction;
export type CreateObjectActionValidator = (instance: ICreateObjectAction) => ValidationResult;
