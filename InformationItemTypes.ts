import { IClassifier } from './IClassifier';
import { IInformationItem } from './IInformationItem';
import { InformationItem } from './InformationItem';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InformationItem
 */
export type PartialInformationItem = Partial<IInformationItem>;
export type RequiredInformationItem = Required<IInformationItem>;
export type InformationItemUnion = IInformationItem | IClassifier;
export type InformationItemFactory = () => InformationItem;
export type InformationItemValidator = (instance: IInformationItem) => ValidationResult;
