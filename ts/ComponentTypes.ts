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
export type ComponentKey = Pick<IComponent, keyof IComponent>;
export type ComponentUnion = IComponent | IClass;
export type ComponentFactory = () => Component;
export type ComponentValidator = (instance: IComponent) => ValidationResult;
