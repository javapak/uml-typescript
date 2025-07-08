import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';
import { ILinkEndDestructionData } from './ILinkEndDestructionData';
import { LinkEndDestructionData } from './LinkEndDestructionData';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LinkEndDestructionData
 */
export type PartialLinkEndDestructionData = Partial<ILinkEndDestructionData>;
export type RequiredLinkEndDestructionData = Required<ILinkEndDestructionData>;
export type LinkEndDestructionDataUnion = ILinkEndDestructionData | ILinkEndData;
export type LinkEndDestructionDataFactory = () => LinkEndDestructionData;
export type LinkEndDestructionDataValidator = (instance: ILinkEndDestructionData) => ValidationResult;
