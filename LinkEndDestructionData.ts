/**
 * Implementation class for LinkEndDestructionData
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkEndData
 */
import { IComment } from './IComment';
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';
import { ILinkEndDestructionData } from './ILinkEndDestructionData';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { LinkEndData } from './LinkEndData';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class LinkEndDestructionData extends LinkEndData implements ILinkEndDestructionData {
  /**
   * destroyAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public destroyAt?: string;

  /**
   * isDestroyDuplicates
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDestroyDuplicates!: boolean;

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


  constructor(init?: Partial<ILinkEndDestructionData>) {
    super(init);

    this.destroyAt = init?.destroyAt;
    this.isDestroyDuplicates = init?.isDestroyDuplicates ?? false;
  }
  getDestroyAt(): string | undefined {
    return this.destroyAt;
  }

  setDestroyAt(value: string | undefined): void {
    this.destroyAt = value;
  }

  getIsDestroyDuplicates(): boolean {
    return this.isDestroyDuplicates;
  }

  setIsDestroyDuplicates(value: boolean): void {
    this.isDestroyDuplicates = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ILinkEndDestructionData {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.destroyAt !== undefined && { destroyAt: this.destroyAt }),
      isDestroyDuplicates: this.isDestroyDuplicates,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.destroyAt !== undefined) {
      result.destroyAt = this.destroyAt;
    }
    result.isDestroyDuplicates = this.isDestroyDuplicates;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): LinkEndDestructionData {
    return new LinkEndDestructionData(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILinkEndDestructionData>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof LinkEndDestructionData)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `LinkEndDestructionData{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): LinkEndDestructionData {
    const instance = new LinkEndDestructionData();

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
    if (json.destroyAt !== undefined) {
      instance.destroyAt = json.destroyAt;
    }
    instance.isDestroyDuplicates = json.isDestroyDuplicates;

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
    if (this.isDestroyDuplicates == null) {
      errors.push({
        property: 'isDestroyDuplicates',
        message: 'isDestroyDuplicates is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDestroyDuplicates !== undefined) {
      if (typeof this.isDestroyDuplicates !== 'boolean') {
        errors.push({
          property: 'isDestroyDuplicates',
          message: 'isDestroyDuplicates must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDestroyDuplicates
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ILinkEndDestructionData): ValidationResult {
    if (instance instanceof LinkEndDestructionData) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new LinkEndDestructionData(instance);
    return temp.validate();
  }
}
