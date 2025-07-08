import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { LinkEndData } from './LinkEndData';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LinkEndData
 */
export type PartialLinkEndData = Partial<ILinkEndData>;
export type RequiredLinkEndData = Required<ILinkEndData>;
export type LinkEndDataUnion = ILinkEndData | IElement;
export type LinkEndDataFactory = () => LinkEndData;
export type LinkEndDataValidator = (instance: ILinkEndData) => ValidationResult;
