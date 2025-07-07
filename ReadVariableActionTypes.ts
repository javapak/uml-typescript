import { IOutputPin } from './IOutputPin';
import { IReadVariableAction } from './IReadVariableAction';
import { IVariableAction } from './IVariableAction';
import { ReadVariableAction } from './ReadVariableAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadVariableAction
 */
export type PartialReadVariableAction = Partial<IReadVariableAction>;
export type RequiredReadVariableAction = Required<IReadVariableAction>;
export type ReadVariableActionKey = Pick<IReadVariableAction, 'name' | 'nameExpression'>;
export type ReadVariableActionMetadata = Pick<IReadVariableAction, 'ownedComment' | 'visibility'>;
export type ReadVariableActionSummary = Pick<IReadVariableAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadVariableActionUnion = IReadVariableAction | IVariableAction;
export type ReadVariableActionFactory = () => ReadVariableAction;
export type ReadVariableActionValidator = (instance: IReadVariableAction) => ValidationResult;
