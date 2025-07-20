import { IBehavior } from './IBehavior';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IValueSpecification } from './IValueSpecification';
import { OpaqueExpression } from './OpaqueExpression';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OpaqueExpression
 */
export type PartialOpaqueExpression = Partial<IOpaqueExpression>;
export type RequiredOpaqueExpression = Required<IOpaqueExpression>;
export type OpaqueExpressionUnion = IOpaqueExpression | IValueSpecification;
export type OpaqueExpressionFactory = () => OpaqueExpression;
export type OpaqueExpressionValidator = (instance: IOpaqueExpression) => ValidationResult;
