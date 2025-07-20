import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IConstraint } from './IConstraint';
import { IDataType } from './IDataType';
import { IInterface } from './IInterface';
import { IOperation } from './IOperation';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateableElement } from './ITemplateableElement';
import { Operation } from './Operation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Operation
 */
export type PartialOperation = Partial<IOperation>;
export type RequiredOperation = Required<IOperation>;
export type OperationUnion = IOperation | IBehavioralFeature | IParameterableElement | ITemplateableElement;
export type OperationFactory = () => Operation;
export type OperationValidator = (instance: IOperation) => ValidationResult;
