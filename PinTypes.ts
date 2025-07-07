import { IMultiplicityElement } from './IMultiplicityElement';
import { IObjectNode } from './IObjectNode';
import { IPin } from './IPin';
import { Pin } from './Pin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Pin
 */
export type PartialPin = Partial<IPin>;
export type RequiredPin = Required<IPin>;
export type PinKey = Pick<IPin, 'name' | 'nameExpression'>;
export type PinMetadata = Pick<IPin, 'ownedComment' | 'visibility'>;
export type PinSummary = Pick<IPin, 'eAnnotations' | 'ownedComment' | 'name'>;
export type PinUnion = IPin | IObjectNode | IMultiplicityElement;
export type PinFactory = () => Pin;
export type PinValidator = (instance: IPin) => ValidationResult;
