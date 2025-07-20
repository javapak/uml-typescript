/**
 * Interface for ExtensionPoint
 * 
 * @since UML 2.5
 * @package uml
 * @extends RedefinableElement
 */
import { IRedefinableElement } from './IRedefinableElement';
import { IUseCase } from './IUseCase';

export interface IExtensionPoint extends IRedefinableElement {
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite extensionPoint
   */
  useCase: string;
}

// Type aliases for ExtensionPoint
export type ExtensionPointInput = Partial<IExtensionPoint>;
export type ExtensionPointOutput = IExtensionPoint;
