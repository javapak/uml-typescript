/**
 * Interface for EnumerationLiteral
 * 
 * @since UML 2.5
 * @package uml
 * @extends InstanceSpecification
 */
import { IEnumeration } from './IEnumeration';
import { IInstanceSpecification } from './IInstanceSpecification';

export interface IEnumerationLiteral extends IInstanceSpecification {
  /**
   * enumeration
   * 
   * @type Enumeration
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedLiteral
   */
  enumeration: IEnumeration | string;
}

// Type aliases for EnumerationLiteral
export type EnumerationLiteralInput = Partial<IEnumerationLiteral>;
export type EnumerationLiteralOutput = IEnumerationLiteral;
