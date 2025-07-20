/**
 * Interface for PrimitiveType
 * 
 * @since UML 2.5
 * @package uml
 * @extends DataType
 */
import { IDataType } from './IDataType';

export interface IPrimitiveType extends IDataType {
}

// Type aliases for PrimitiveType
export type PrimitiveTypeInput = Partial<IPrimitiveType>;
export type PrimitiveTypeOutput = IPrimitiveType;
