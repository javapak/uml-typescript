import { Action } from './Action';
import { IAction } from './IAction';
import { IConstraint } from './IConstraint';
import { IExecutableNode } from './IExecutableNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Action
 */
export type PartialAction = Partial<IAction>;
export type RequiredAction = Required<IAction>;
export type ActionUnion = IAction | IExecutableNode;
export type ActionFactory = () => Action;
export type ActionValidator = (instance: IAction) => ValidationResult;
