import { CreateLinkObjectAction } from './CreateLinkObjectAction';
import { ICreateLinkAction } from './ICreateLinkAction';
import { ICreateLinkObjectAction } from './ICreateLinkObjectAction';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CreateLinkObjectAction
 */
export type PartialCreateLinkObjectAction = Partial<ICreateLinkObjectAction>;
export type RequiredCreateLinkObjectAction = Required<ICreateLinkObjectAction>;
export type CreateLinkObjectActionUnion = ICreateLinkObjectAction | ICreateLinkAction;
export type CreateLinkObjectActionFactory = () => CreateLinkObjectAction;
export type CreateLinkObjectActionValidator = (instance: ICreateLinkObjectAction) => ValidationResult;
