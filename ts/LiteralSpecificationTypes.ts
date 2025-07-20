import { ILiteralSpecification } from './ILiteralSpecification';
import { IValueSpecification } from './IValueSpecification';
import { LiteralSpecification } from './LiteralSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralSpecification
 */
export type PartialLiteralSpecification = Partial<ILiteralSpecification>;
export type RequiredLiteralSpecification = Required<ILiteralSpecification>;
export type LiteralSpecificationUnion = ILiteralSpecification | IValueSpecification;
export type LiteralSpecificationFactory = () => LiteralSpecification;
export type LiteralSpecificationValidator = (instance: ILiteralSpecification) => ValidationResult;
