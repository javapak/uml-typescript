/**
 * Implementation class for MultiplicityElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IValueSpecification } from './IValueSpecification';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';

export class MultiplicityElement extends Element implements IMultiplicityElement {
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification;

  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IMultiplicityElement>) {
    super(init);

    this.isOrdered = init?.isOrdered ?? false;
    this.isUnique = init?.isUnique ?? false;
    this.lowerValue = init?.lowerValue;
    this.upperValue = init?.upperValue;
  }
  getIsOrdered(): boolean {
    return this.isOrdered;
  }

  setIsOrdered(value: boolean): void {
    this.isOrdered = value;
  }

  getIsUnique(): boolean {
    return this.isUnique;
  }

  setIsUnique(value: boolean): void {
    this.isUnique = value;
  }

  getLowerValue(): IValueSpecification | undefined {
    return this.lowerValue;
  }

  setLowerValue(value: IValueSpecification | undefined): void {
    this.lowerValue = value;
  }

  getUpperValue(): IValueSpecification | undefined {
    return this.upperValue;
  }

  setUpperValue(value: IValueSpecification | undefined): void {
    this.upperValue = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IMultiplicityElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isOrdered: this.isOrdered,
      isUnique: this.isUnique,
      ...(this.lowerValue !== undefined && { lowerValue: this.lowerValue }),
      ...(this.upperValue !== undefined && { upperValue: this.upperValue }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isOrdered = this.isOrdered;
    result.isUnique = this.isUnique;
    if (this.lowerValue !== undefined) {
      result.lowerValue = this.lowerValue;
    }
    if (this.upperValue !== undefined) {
      result.upperValue = this.upperValue;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): MultiplicityElement {
    return new MultiplicityElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IMultiplicityElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof MultiplicityElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `MultiplicityElement{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): MultiplicityElement {
    const instance = new MultiplicityElement();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.isOrdered = json.isOrdered;
    instance.isUnique = json.isUnique;
    if (json.lowerValue !== undefined) {
      instance.lowerValue = json.lowerValue;
    }
    if (json.upperValue !== undefined) {
      instance.upperValue = json.upperValue;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isOrdered == null) {
      errors.push({
        property: 'isOrdered',
        message: 'isOrdered is required',
        code: 'REQUIRED'
      });
    }
    if (this.isOrdered !== undefined) {
      if (typeof this.isOrdered !== 'boolean') {
        errors.push({
          property: 'isOrdered',
          message: 'isOrdered must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isOrdered
        });
      }
    }
    if (this.isUnique == null) {
      errors.push({
        property: 'isUnique',
        message: 'isUnique is required',
        code: 'REQUIRED'
      });
    }
    if (this.isUnique !== undefined) {
      if (typeof this.isUnique !== 'boolean') {
        errors.push({
          property: 'isUnique',
          message: 'isUnique must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isUnique
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IMultiplicityElement): ValidationResult {
    if (instance instanceof MultiplicityElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new MultiplicityElement(instance);
    return temp.validate();
  }
}
