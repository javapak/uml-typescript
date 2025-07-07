import { Component } from './Component';
import { IClass } from './IClass';
import { IComponent } from './IComponent';
import { IComponentRealization } from './IComponentRealization';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Component
 */
export type PartialComponent = Partial<IComponent>;
export type RequiredComponent = Required<IComponent>;
export type ComponentKey = Pick<IComponent, 'name' | 'nameExpression'>;
export type ComponentMetadata = Pick<IComponent, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type ComponentSummary = Pick<IComponent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ComponentUnion = IComponent | IClass;
export type ComponentFactory = () => Component;
export type ComponentValidator = (instance: IComponent) => ValidationResult;
