/**
 * Interface for Enumeration
 * 
 * @since UML 2.5
 * @package uml
 * @extends DataType
 */
import { EnumerationLiteral } from './EnumerationLiteral';
import { IDataType } from './IDataType';
import { IEnumerationLiteral } from './IEnumerationLiteral';

export interface IEnumeration extends IDataType {
  /**
   * ownedLiteral
   * 
   * @type EnumerationLiteral
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite enumeration
   */
  ownedLiteral: IEnumerationLiteral[];
}

// Type aliases for Enumeration
export type EnumerationInput = Partial<IEnumeration>;
export type EnumerationOutput = IEnumeration;
