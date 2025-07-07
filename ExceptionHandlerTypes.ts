import { ExceptionHandler } from './ExceptionHandler';
import { IClassifier } from './IClassifier';
import { IElement } from './IElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IExecutableNode } from './IExecutableNode';
import { IObjectNode } from './IObjectNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExceptionHandler
 */
export type PartialExceptionHandler = Partial<IExceptionHandler>;
export type RequiredExceptionHandler = Required<IExceptionHandler>;
export type ExceptionHandlerMetadata = Pick<IExceptionHandler, 'ownedComment'>;
export type ExceptionHandlerSummary = Pick<IExceptionHandler, 'eAnnotations' | 'ownedComment' | 'exceptionInput'>;
export type ExceptionHandlerUnion = IExceptionHandler | IElement;
export type ExceptionHandlerFactory = () => ExceptionHandler;
export type ExceptionHandlerValidator = (instance: IExceptionHandler) => ValidationResult;
