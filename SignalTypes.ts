import { IClassifier } from './IClassifier';
import { IProperty } from './IProperty';
import { ISignal } from './ISignal';
import { Signal } from './Signal';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Signal
 */
export type PartialSignal = Partial<ISignal>;
export type RequiredSignal = Required<ISignal>;
export type SignalKey = Pick<ISignal, 'name' | 'nameExpression'>;
export type SignalMetadata = Pick<ISignal, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute'>;
export type SignalSummary = Pick<ISignal, 'eAnnotations' | 'ownedComment' | 'name'>;
export type SignalUnion = ISignal | IClassifier;
export type SignalFactory = () => Signal;
export type SignalValidator = (instance: ISignal) => ValidationResult;
