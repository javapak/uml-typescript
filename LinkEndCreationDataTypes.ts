import { IInputPin } from './IInputPin';
import { ILinkEndCreationData } from './ILinkEndCreationData';
import { ILinkEndData } from './ILinkEndData';
import { LinkEndCreationData } from './LinkEndCreationData';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LinkEndCreationData
 */
export type PartialLinkEndCreationData = Partial<ILinkEndCreationData>;
export type RequiredLinkEndCreationData = Required<ILinkEndCreationData>;
export type LinkEndCreationDataUnion = ILinkEndCreationData | ILinkEndData;
export type LinkEndCreationDataFactory = () => LinkEndCreationData;
export type LinkEndCreationDataValidator = (instance: ILinkEndCreationData) => ValidationResult;
