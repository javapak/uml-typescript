/**
 * Implementation class for QualifierValue
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class QualifierValue extends Element implements IQualifierValue {
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public qualifier!: string;

  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public value!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IQualifierValue>) {
    super(init);

    this.qualifier = init?.qualifier ?? '';
    this.value = init?.value ?? '';
  }
  getQualifier(): string {
    return this.qualifier;
  }

  setQualifier(value: string): void {
    this.qualifier = value;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IQualifierValue {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      qualifier: this.qualifier,
      value: this.value,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.qualifier = this.qualifier;
    result.value = this.value;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): QualifierValue {
    return new QualifierValue(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IQualifierValue>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof QualifierValue)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `QualifierValue{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): QualifierValue {
    const instance = new QualifierValue();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.qualifier = json.qualifier;
    instance.value = json.value;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.qualifier == null) {
      errors.push({
        property: 'qualifier',
        message: 'qualifier is required',
        code: 'REQUIRED'
      });
    }
    if (this.value == null) {
      errors.push({
        property: 'value',
        message: 'value is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IQualifierValue): ValidationResult {
    if (instance instanceof QualifierValue) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new QualifierValue(instance);
    return temp.validate();
  }
}
