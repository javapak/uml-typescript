/**
 * Interface for Feature
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement
 */
import { IBehavioralFeature } from './IBehavioralFeature';
import { IConnector } from './IConnector';
import { IRedefinableElement } from './IRedefinableElement';
import { IStructuralFeature } from './IStructuralFeature';

export interface IFeature extends IRedefinableElement {
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isStatic: boolean;
}

// Type aliases for Feature
export type FeatureInput = Partial<IFeature>;
export type FeatureOutput = IFeature;
export type FeatureUnion = IFeature | IBehavioralFeature | IStructuralFeature | IConnector;
