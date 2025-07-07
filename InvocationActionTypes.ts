import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { IPort } from './IPort';
import { InvocationAction } from './InvocationAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InvocationAction
 */
export type PartialInvocationAction = Partial<IInvocationAction>;
export type RequiredInvocationAction = Required<IInvocationAction>;
export type InvocationActionKey = Pick<IInvocationAction, 'name' | 'nameExpression'>;
export type InvocationActionMetadata = Pick<IInvocationAction, 'ownedComment' | 'visibility'>;
export type InvocationActionSummary = Pick<IInvocationAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InvocationActionUnion = IInvocationAction | IAction;
export type InvocationActionFactory = () => InvocationAction;
export type InvocationActionValidator = (instance: IInvocationAction) => ValidationResult;
