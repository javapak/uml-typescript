import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { ITestIdentityAction } from './ITestIdentityAction';
import { TestIdentityAction } from './TestIdentityAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TestIdentityAction
 */
export type PartialTestIdentityAction = Partial<ITestIdentityAction>;
export type RequiredTestIdentityAction = Required<ITestIdentityAction>;
export type TestIdentityActionKey = Pick<ITestIdentityAction, 'name' | 'nameExpression'>;
export type TestIdentityActionMetadata = Pick<ITestIdentityAction, 'ownedComment' | 'visibility'>;
export type TestIdentityActionSummary = Pick<ITestIdentityAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TestIdentityActionUnion = ITestIdentityAction | IAction;
export type TestIdentityActionFactory = () => TestIdentityAction;
export type TestIdentityActionValidator = (instance: ITestIdentityAction) => ValidationResult;
