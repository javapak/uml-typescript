import { IInputPin } from './IInputPin';
import { IVariableAction } from './IVariableAction';
import { IWriteVariableAction } from './IWriteVariableAction';
import { ValidationResult } from './ValidationTypes';
import { WriteVariableAction } from './WriteVariableAction';

/**
 * Utility types for WriteVariableAction
 */
export type PartialWriteVariableAction = Partial<IWriteVariableAction>;
export type RequiredWriteVariableAction = Required<IWriteVariableAction>;
export type WriteVariableActionKey = Pick<IWriteVariableAction, 'name' | 'nameExpression'>;
export type WriteVariableActionMetadata = Pick<IWriteVariableAction, 'ownedComment' | 'visibility'>;
export type WriteVariableActionSummary = Pick<IWriteVariableAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type WriteVariableActionUnion = IWriteVariableAction | IVariableAction;
export type WriteVariableActionFactory = () => WriteVariableAction;
export type WriteVariableActionValidator = (instance: IWriteVariableAction) => ValidationResult;
