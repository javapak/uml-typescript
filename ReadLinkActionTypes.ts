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
export type ReadLinkActionUnion = IReadLinkAction | ILinkAction;
export type ReadLinkActionFactory = () => ReadLinkAction;
export type ReadLinkActionValidator = (instance: IReadLinkAction) => ValidationResult;
