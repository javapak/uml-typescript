/**
 * Implementation class for LinkEndCreationData
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkEndData
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { ILinkEndCreationData } from './ILinkEndCreationData';
import { ILinkEndData } from './ILinkEndData';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { LinkEndData } from './LinkEndData';
import { QualifierValue } from './QualifierValue';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class LinkEndCreationData extends LinkEndData implements ILinkEndCreationData {
  /**
   * insertAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public insertAt?: IInputPin | string = undefined;

  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReplaceAll!: boolean;

  // Inherited from LinkEndData
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from LinkEndData
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from LinkEndData
  /**
   * end
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public end!: IProperty | string;

  // Inherited from LinkEndData
  /**
   * qualifier
   * 
   * @type QualifierValue
   * @multiplicity [0..*]
   * @relationship containment
   */
  public qualifier: Set<IQualifierValue> = new Set();

  // Inherited from LinkEndData
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public value?: IInputPin | string = undefined;

  constructor(init?: Partial<ILinkEndCreationData>) {
    super(init);
    this.insertAt = init?.insertAt ?? undefined;
    this.isReplaceAll = init?.isReplaceAll!;
  }
  getInsertAt(): IInputPin | string | undefined {
    return this.insertAt;
  }

  setInsertAt(value: IInputPin | string | undefined): void {
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

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
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
