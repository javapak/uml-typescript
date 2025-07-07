import { DataType } from './DataType';
import { IClassifier } from './IClassifier';
import { IDataType } from './IDataType';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DataType
 */
export type PartialDataType = Partial<IDataType>;
export type RequiredDataType = Required<IDataType>;
export type DataTypeKey = Pick<IDataType, 'name' | 'nameExpression'>;
export type DataTypeMetadata = Pick<IDataType, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedOperation'>;
export type DataTypeSummary = Pick<IDataType, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DataTypeUnion = IDataType | IClassifier;
export type DataTypeFactory = () => DataType;
export type DataTypeValidator = (instance: IDataType) => ValidationResult;
