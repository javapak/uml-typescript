import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IUnmarshallAction } from './IUnmarshallAction';
import { UnmarshallAction } from './UnmarshallAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for UnmarshallAction
 */
export type PartialUnmarshallAction = Partial<IUnmarshallAction>;
export type RequiredUnmarshallAction = Required<IUnmarshallAction>;
export type UnmarshallActionKey = Pick<IUnmarshallAction, 'name' | 'nameExpression'>;
export type UnmarshallActionMetadata = Pick<IUnmarshallAction, 'ownedComment' | 'visibility'>;
export type UnmarshallActionSummary = Pick<IUnmarshallAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type UnmarshallActionUnion = IUnmarshallAction | IAction;
export type UnmarshallActionFactory = () => UnmarshallAction;
export type UnmarshallActionValidator = (instance: IUnmarshallAction) => ValidationResult;
