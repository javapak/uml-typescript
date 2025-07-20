import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IInterface } from './IInterface';
import { IInterfaceRealization } from './IInterfaceRealization';
import { IRealization } from './IRealization';
import { InterfaceRealization } from './InterfaceRealization';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InterfaceRealization
 */
export type PartialInterfaceRealization = Partial<IInterfaceRealization>;
export type RequiredInterfaceRealization = Required<IInterfaceRealization>;
export type InterfaceRealizationUnion = IInterfaceRealization | IRealization;
export type InterfaceRealizationFactory = () => InterfaceRealization;
export type InterfaceRealizationValidator = (instance: IInterfaceRealization) => ValidationResult;
