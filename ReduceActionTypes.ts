import { IAction } from './IAction';
import { IBehavior } from './IBehavior';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IReduceAction } from './IReduceAction';
import { ReduceAction } from './ReduceAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReduceAction
 */
export type PartialReduceAction = Partial<IReduceAction>;
export type RequiredReduceAction = Required<IReduceAction>;
export type ReduceActionKey = Pick<IReduceAction, 'name' | 'nameExpression'>;
export type ReduceActionMetadata = Pick<IReduceAction, 'ownedComment' | 'visibility'>;
export type ReduceActionSummary = Pick<IReduceAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ReduceActionUnion = IReduceAction | IAction;
export type ReduceActionFactory = () => ReduceAction;
export type ReduceActionValidator = (instance: IReduceAction) => ValidationResult;
