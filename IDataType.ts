/**
 * Interface for DataType
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier
 */
import { IClassifier } from './IClassifier';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { Operation } from './Operation';
import { Property } from './Property';

export interface IDataType extends IClassifier {
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite datatype
   */
  ownedAttribute?: IProperty[];
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite datatype
   */
  ownedOperation?: IOperation[];
}

// Type aliases for DataType
export type DataTypeInput = Partial<IDataType>;
export type DataTypeOutput = IDataType;
export type DataTypeUnion = IDataType | IEnumeration | IPrimitiveType;
