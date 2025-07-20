/**
 * Implementation class for LinkEndCreationData
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkEndData
 */
import { IComment } from './IComment';
import { IInputPin } from './IInputPin';
import { ILinkEndCreationData } from './ILinkEndCreationData';
import { ILinkEndData } from './ILinkEndData';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { LinkEndData } from './LinkEndData';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class LinkEndCreationData extends LinkEndData implements ILinkEndCreationData {
  /**
   * insertAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public insertAt?: string;

  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReplaceAll!: boolean;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * end
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public end!: string;

  /**
   * qualifier
   * 
   * @type QualifierValue
   * @multiplicity [0..*]
   * @relationship containment
   */
  public qualifier: Set<IQualifierValue> = new Set();

  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public value?: string;


  constructor(init?: Partial<ILinkEndCreationData>) {
    super(init);

    this.insertAt = init?.insertAt;
    this.isReplaceAll = init?.isReplaceAll ?? false;
  }
  getInsertAt(): string | undefined {
    return this.insertAt;
  }

  setInsertAt(value: string | undefined): void {
    this.insertAt = value;
  }

  getIsReplaceAll(): boolean {
    return this.isReplaceAll;
  }

  setIsReplaceAll(value: boolean): void {
    this.isReplaceAll = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ILinkEndCreationData {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.insertAt !== undefined && { insertAt: this.insertAt }),
      isReplaceAll: this.isReplaceAll,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.insertAt !== undefined) {
      result.insertAt = this.insertAt;
    }
    result.isReplaceAll = this.isReplaceAll;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): LinkEndCreationData {
    return new LinkEndCreationData(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILinkEndCreationData>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof LinkEndCreationData)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `LinkEndCreationData{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): LinkEndCreationData {
    const instance = new LinkEndCreationData();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.end = json.end;
    if (json.qualifier && Array.isArray(json.qualifier)) {
      instance.qualifier = new Set(json.qualifier);
    }
    if (json.value !== undefined) {
      instance.value = json.value;
    }
    if (json.insertAt !== undefined) {
      instance.insertAt = json.insertAt;
    }
    instance.isReplaceAll = json.isReplaceAll;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.end == null) {
      errors.push({
        property: 'end',
        message: 'end is required',
        code: 'REQUIRED'
      });
    }
    if (this.qualifier) {
    }
    if (this.isReplaceAll == null) {
      errors.push({
        property: 'isReplaceAll',
        message: 'isReplaceAll is required',
        code: 'REQUIRED'
      });
    }
    if (this.isReplaceAll !== undefined) {
      if (typeof this.isReplaceAll !== 'boolean') {
        errors.push({
          property: 'isReplaceAll',
          message: 'isReplaceAll must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isReplaceAll
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ILinkEndCreationData): ValidationResult {
    if (instance instanceof LinkEndCreationData) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new LinkEndCreationData(instance);
    return temp.validate();
  }
}
