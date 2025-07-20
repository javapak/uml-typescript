import { IModel } from './IModel';
import { IPackage } from './IPackage';
import { Model } from './Model';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Model
 */
export type PartialModel = Partial<IModel>;
export type RequiredModel = Required<IModel>;
export type ModelUnion = IModel | IPackage;
export type ModelFactory = () => Model;
export type ModelValidator = (instance: IModel) => ValidationResult;
