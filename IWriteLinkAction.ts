/**
 * Interface for WriteLinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends LinkAction
 */
import { ILinkAction } from './ILinkAction';

export interface IWriteLinkAction extends ILinkAction {
}

// Type aliases for WriteLinkAction
export type WriteLinkActionInput = Partial<IWriteLinkAction>;
export type WriteLinkActionOutput = IWriteLinkAction;
export type WriteLinkActionUnion = IWriteLinkAction | ICreateLinkAction | IDestroyLinkAction;
