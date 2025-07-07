import { FunctionBehavior } from './FunctionBehavior';
import { IFunctionBehavior } from './IFunctionBehavior';
import { IOpaqueBehavior } from './IOpaqueBehavior';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FunctionBehavior
 */
export type PartialFunctionBehavior = Partial<IFunctionBehavior>;
export type RequiredFunctionBehavior = Required<IFunctionBehavior>;
export type FunctionBehaviorKey = Pick<IFunctionBehavior, 'name' | 'nameExpression'>;
export type FunctionBehaviorMetadata = Pick<IFunctionBehavior, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception' | 'ownedParameter' | 'ownedParameterSet'>;
export type FunctionBehaviorSummary = Pick<IFunctionBehavior, 'eAnnotations' | 'ownedComment' | 'name'>;
export type FunctionBehaviorUnion = IFunctionBehavior | IOpaqueBehavior;
export type FunctionBehaviorFactory = () => FunctionBehavior;
export type FunctionBehaviorValidator = (instance: IFunctionBehavior) => ValidationResult;
