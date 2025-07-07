/**
 * Interface for CreateLinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteLinkAction
 */
import { IWriteLinkAction } from './IWriteLinkAction';

export interface ICreateLinkAction extends IWriteLinkAction {
}

// Type aliases for CreateLinkAction
export type CreateLinkActionInput = Partial<ICreateLinkAction>;
export type CreateLinkActionOutput = ICreateLinkAction;
export type CreateLinkActionUnion = ICreateLinkAction | ICreateLinkObjectAction;
