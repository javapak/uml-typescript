import { IClassifier } from './IClassifier';
import { IInterface } from './IInterface';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IReception } from './IReception';
import { Interface } from './Interface';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Interface
 */
export type PartialInterface = Partial<IInterface>;
export type RequiredInterface = Required<IInterface>;
export type InterfaceKey = Pick<IInterface, 'name' | 'nameExpression'>;
export type InterfaceMetadata = Pick<IInterface, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedReception' | 'ownedOperation'>;
export type InterfaceSummary = Pick<IInterface, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InterfaceUnion = IInterface | IClassifier;
export type InterfaceFactory = () => Interface;
export type InterfaceValidator = (instance: IInterface) => ValidationResult;
