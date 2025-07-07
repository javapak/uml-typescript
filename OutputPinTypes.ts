import { IOutputPin } from './IOutputPin';
import { IPin } from './IPin';
import { OutputPin } from './OutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OutputPin
 */
export type PartialOutputPin = Partial<IOutputPin>;
export type RequiredOutputPin = Required<IOutputPin>;
export type OutputPinKey = Pick<IOutputPin, 'name' | 'nameExpression'>;
export type OutputPinMetadata = Pick<IOutputPin, 'ownedComment' | 'visibility'>;
export type OutputPinSummary = Pick<IOutputPin, 'eAnnotations' | 'ownedComment' | 'name'>;
export type OutputPinUnion = IOutputPin | IPin;
export type OutputPinFactory = () => OutputPin;
export type OutputPinValidator = (instance: IOutputPin) => ValidationResult;
