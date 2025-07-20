import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IProperty } from './IProperty';
import { IReadLinkObjectEndAction } from './IReadLinkObjectEndAction';
import { ReadLinkObjectEndAction } from './ReadLinkObjectEndAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadLinkObjectEndAction
 */
export type PartialReadLinkObjectEndAction = Partial<IReadLinkObjectEndAction>;
export type RequiredReadLinkObjectEndAction = Required<IReadLinkObjectEndAction>;
export type ReadLinkObjectEndActionUnion = IReadLinkObjectEndAction | IAction;
export type ReadLinkObjectEndActionFactory = () => ReadLinkObjectEndAction;
export type ReadLinkObjectEndActionValidator = (instance: IReadLinkObjectEndAction) => ValidationResult;
