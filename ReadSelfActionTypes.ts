import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { IReadSelfAction } from './IReadSelfAction';
import { ReadSelfAction } from './ReadSelfAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadSelfAction
 */
export type PartialReadSelfAction = Partial<IReadSelfAction>;
export type RequiredReadSelfAction = Required<IReadSelfAction>;
export type ReadSelfActionKey = Pick<IReadSelfAction, 'name' | 'nameExpression'>;
export type ReadSelfActionMetadata = Pick<IReadSelfAction, 'ownedComment' | 'visibility'>;
export type ReadSelfActionSummary = Pick<IReadSelfAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadSelfActionUnion = IReadSelfAction | IAction;
export type ReadSelfActionFactory = () => ReadSelfAction;
export type ReadSelfActionValidator = (instance: IReadSelfAction) => ValidationResult;
