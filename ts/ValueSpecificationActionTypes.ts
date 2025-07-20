import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { IValueSpecification } from './IValueSpecification';
import { IValueSpecificationAction } from './IValueSpecificationAction';
import { ValidationResult } from './ValidationTypes';
import { ValueSpecificationAction } from './ValueSpecificationAction';

/**
 * Utility types for ValueSpecificationAction
 */
export type PartialValueSpecificationAction = Partial<IValueSpecificationAction>;
export type RequiredValueSpecificationAction = Required<IValueSpecificationAction>;
export type ValueSpecificationActionUnion = IValueSpecificationAction | IAction;
export type ValueSpecificationActionFactory = () => ValueSpecificationAction;
export type ValueSpecificationActionValidator = (instance: IValueSpecificationAction) => ValidationResult;
