import { CreateObjectAction } from './CreateObjectAction';
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { ICreateObjectAction } from './ICreateObjectAction';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CreateObjectAction
 */
export type PartialCreateObjectAction = Partial<ICreateObjectAction>;
export type RequiredCreateObjectAction = Required<ICreateObjectAction>;
export type CreateObjectActionKey = Pick<ICreateObjectAction, 'name' | 'nameExpression'>;
export type CreateObjectActionMetadata = Pick<ICreateObjectAction, 'ownedComment' | 'visibility'>;
export type CreateObjectActionSummary = Pick<ICreateObjectAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CreateObjectActionUnion = ICreateObjectAction | IAction;
export type CreateObjectActionFactory = () => CreateObjectAction;
export type CreateObjectActionValidator = (instance: ICreateObjectAction) => ValidationResult;
