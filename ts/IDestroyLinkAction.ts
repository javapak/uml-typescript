/**
 * Interface for DestroyLinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteLinkAction
 */
import { IWriteLinkAction } from './IWriteLinkAction';

export interface IDestroyLinkAction extends IWriteLinkAction {
}

// Type aliases for DestroyLinkAction
export type DestroyLinkActionInput = Partial<IDestroyLinkAction>;
export type DestroyLinkActionOutput = IDestroyLinkAction;
