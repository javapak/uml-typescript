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
export type InterfaceRealizationKey = Pick<IInterfaceRealization, 'name' | 'nameExpression'>;
export type InterfaceRealizationMetadata = Pick<IInterfaceRealization, 'ownedComment' | 'visibility'>;
export type InterfaceRealizationSummary = Pick<IInterfaceRealization, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InterfaceRealizationUnion = IInterfaceRealization | IRealization;
export type InterfaceRealizationFactory = () => InterfaceRealization;
export type InterfaceRealizationValidator = (instance: IInterfaceRealization) => ValidationResult;
