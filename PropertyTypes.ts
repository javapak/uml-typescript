import { AggregationKind } from './AggregationKind';
import { IAssociation } from './IAssociation';
import { IConnectableElement } from './IConnectableElement';
import { IDataType } from './IDataType';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IInterface } from './IInterface';
import { IProperty } from './IProperty';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { Property } from './Property';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Property
 */
export type PartialProperty = Partial<IProperty>;
export type RequiredProperty = Required<IProperty>;
export type PropertyKey = Pick<IProperty, 'isID'>;
export type PropertyUnion = IProperty | IStructuralFeature | IConnectableElement | IDeploymentTarget;
export type PropertyFactory = () => Property;
export type PropertyValidator = (instance: IProperty) => ValidationResult;
