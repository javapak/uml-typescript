/**
 * Implementation class for LinkEndData
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { QualifierValue } from './QualifierValue';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class LinkEndData extends Element implements ILinkEndData {
  /**
   * end
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public end!: IProperty | string;

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
  public value?: IInputPin | string = undefined;

  // Inherited from Element
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Element
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<ILinkEndData>) {
    super(init);
    this.end = init?.end!;
    this.qualifier = init?.qualifier ?? new Set();
    this.value = init?.value ?? undefined;
  }
  getEnd(): IProperty | string {
    return this.end;
  }

  setEnd(value: IProperty | string): void {
    this.end = value;
  }

  getQualifier(): Set<IQualifierValue> {
    return this.qualifier;
  }

  setQualifier(value: Set<IQualifierValue>): void {
    this.qualifier = value;
  }

  getValue(): IInputPin | string | undefined {
    return this.value;
  }

  setValue(value: IInputPin | string | undefined): void {
    this.value = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ILinkEndData {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      end: this.end,
      qualifier: this.qualifier,
      ...(this.value !== undefined && { value: this.value }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.end = this.end;
    result.qualifier = Array.from(this.qualifier);
    if (this.value !== undefined) {
      result.value = this.value;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): LinkEndData {
    return new LinkEndData(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILinkEndData>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof LinkEndData)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `LinkEndData{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): LinkEndData {
    const instance = new LinkEndData();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.end == null) {
      errors.push({
        property: 'end',
        message: 'end is required',
        code: 'REQUIRED'
      });
    }
    if (this.qualifier) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ILinkEndData): ValidationResult {
    if (instance instanceof LinkEndData) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new LinkEndData(instance);
    return temp.validate();
  }
}
