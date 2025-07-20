import { Extend } from './Extend';
import { IConstraint } from './IConstraint';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IExtend } from './IExtend';
import { IExtensionPoint } from './IExtensionPoint';
import { INamedElement } from './INamedElement';
import { IUseCase } from './IUseCase';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Extend
 */
export type PartialExtend = Partial<IExtend>;
export type RequiredExtend = Required<IExtend>;
export type ExtendUnion = IExtend | INamedElement | IDirectedRelationship;
export type ExtendFactory = () => Extend;
export type ExtendValidator = (instance: IExtend) => ValidationResult;
