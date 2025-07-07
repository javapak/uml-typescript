import { IClassifier } from './IClassifier';
import { IInformationItem } from './IInformationItem';
import { InformationItem } from './InformationItem';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InformationItem
 */
export type PartialInformationItem = Partial<IInformationItem>;
export type RequiredInformationItem = Required<IInformationItem>;
export type InformationItemKey = Pick<IInformationItem, 'name' | 'nameExpression'>;
export type InformationItemMetadata = Pick<IInformationItem, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase'>;
export type InformationItemSummary = Pick<IInformationItem, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InformationItemUnion = IInformationItem | IClassifier;
export type InformationItemFactory = () => InformationItem;
export type InformationItemValidator = (instance: IInformationItem) => ValidationResult;
