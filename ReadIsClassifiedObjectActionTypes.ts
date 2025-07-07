import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IReadIsClassifiedObjectAction } from './IReadIsClassifiedObjectAction';
import { ReadIsClassifiedObjectAction } from './ReadIsClassifiedObjectAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReadIsClassifiedObjectAction
 */
export type PartialReadIsClassifiedObjectAction = Partial<IReadIsClassifiedObjectAction>;
export type RequiredReadIsClassifiedObjectAction = Required<IReadIsClassifiedObjectAction>;
export type ReadIsClassifiedObjectActionKey = Pick<IReadIsClassifiedObjectAction, 'name' | 'nameExpression'>;
export type ReadIsClassifiedObjectActionMetadata = Pick<IReadIsClassifiedObjectAction, 'ownedComment' | 'visibility'>;
export type ReadIsClassifiedObjectActionSummary = Pick<IReadIsClassifiedObjectAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReadIsClassifiedObjectActionUnion = IReadIsClassifiedObjectAction | IAction;
export type ReadIsClassifiedObjectActionFactory = () => ReadIsClassifiedObjectAction;
export type ReadIsClassifiedObjectActionValidator = (instance: IReadIsClassifiedObjectAction) => ValidationResult;
