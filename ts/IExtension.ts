/**
 * Interface for Extension
 * 
 * @since UML 2.5
 * @package uml
 * @extends Association
 */
import { IAssociation } from './IAssociation';

export interface IExtension extends IAssociation {
}

// Type aliases for Extension
export type ExtensionInput = Partial<IExtension>;
export type ExtensionOutput = IExtension;
