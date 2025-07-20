/**
 * Interface for CommunicationPath
 * 
 * @since UML 2.5
 * @package uml
 * @extends Association
 */
import { IAssociation } from './IAssociation';

export interface ICommunicationPath extends IAssociation {
}

// Type aliases for CommunicationPath
export type CommunicationPathInput = Partial<ICommunicationPath>;
export type CommunicationPathOutput = ICommunicationPath;
