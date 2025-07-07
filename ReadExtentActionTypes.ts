import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IOutputPin } from './IOutputPin';
import { IReadExtentAction } from './IReadExtentAction';
import { ReadExtentAction } from './ReadExtentAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadExtentAction
 */
export type PartialReadExtentAction = Partial<IReadExtentAction>;
export type RequiredReadExtentAction = Required<IReadExtentAction>;
export type ReadExtentActionKey = Pick<IReadExtentAction, 'name' | 'nameExpression'>;
export type ReadExtentActionMetadata = Pick<IReadExtentAction, 'ownedComment' | 'visibility'>;
export type ReadExtentActionSummary = Pick<IReadExtentAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadExtentActionUnion = IReadExtentAction | IAction;
export type ReadExtentActionFactory = () => ReadExtentAction;
export type ReadExtentActionValidator = (instance: IReadExtentAction) => ValidationResult;
