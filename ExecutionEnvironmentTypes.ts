import { ExecutionEnvironment } from './ExecutionEnvironment';
import { IExecutionEnvironment } from './IExecutionEnvironment';
import { INode } from './INode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExecutionEnvironment
 */
export type PartialExecutionEnvironment = Partial<IExecutionEnvironment>;
export type RequiredExecutionEnvironment = Required<IExecutionEnvironment>;
export type ExecutionEnvironmentKey = Pick<IExecutionEnvironment, 'name' | 'nameExpression'>;
export type ExecutionEnvironmentMetadata = Pick<IExecutionEnvironment, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type ExecutionEnvironmentSummary = Pick<IExecutionEnvironment, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExecutionEnvironmentUnion = IExecutionEnvironment | INode;
export type ExecutionEnvironmentFactory = () => ExecutionEnvironment;
export type ExecutionEnvironmentValidator = (instance: IExecutionEnvironment) => ValidationResult;
