import { ActionExecutionSpecification } from './ActionExecutionSpecification';
import { IAction } from './IAction';
import { IActionExecutionSpecification } from './IActionExecutionSpecification';
import { IExecutionSpecification } from './IExecutionSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActionExecutionSpecification
 */
export type PartialActionExecutionSpecification = Partial<IActionExecutionSpecification>;
export type RequiredActionExecutionSpecification = Required<IActionExecutionSpecification>;
export type ActionExecutionSpecificationUnion = IActionExecutionSpecification | IExecutionSpecification;
export type ActionExecutionSpecificationFactory = () => ActionExecutionSpecification;
export type ActionExecutionSpecificationValidator = (instance: IActionExecutionSpecification) => ValidationResult;
