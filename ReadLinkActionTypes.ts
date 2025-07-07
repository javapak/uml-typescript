import { ILinkAction } from './ILinkAction';
import { IOutputPin } from './IOutputPin';
import { IReadLinkAction } from './IReadLinkAction';
import { ReadLinkAction } from './ReadLinkAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadLinkAction
 */
export type PartialReadLinkAction = Partial<IReadLinkAction>;
export type RequiredReadLinkAction = Required<IReadLinkAction>;
export type ReadLinkActionKey = Pick<IReadLinkAction, 'name' | 'nameExpression'>;
export type ReadLinkActionMetadata = Pick<IReadLinkAction, 'ownedComment' | 'visibility'>;
export type ReadLinkActionSummary = Pick<IReadLinkAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadLinkActionUnion = IReadLinkAction | ILinkAction;
export type ReadLinkActionFactory = () => ReadLinkAction;
export type ReadLinkActionValidator = (instance: IReadLinkAction) => ValidationResult;
