import { Constraint } from './Constraint';
import { IConstraint } from './IConstraint';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Constraint
 */
export type PartialConstraint = Partial<IConstraint>;
export type RequiredConstraint = Required<IConstraint>;
export type ConstraintUnion = IConstraint | IPackageableElement;
export type ConstraintFactory = () => Constraint;
export type ConstraintValidator = (instance: IConstraint) => ValidationResult;
