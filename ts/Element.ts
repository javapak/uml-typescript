/**
 * Implementation class for Element
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends EModelElement
 */
import { EModelElement } from './EModelElement';
import { IComment } from './IComment';
import { IEModelElement } from './IEModelElement';
import { IElement } from './IElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class Element extends EModelElement implements IElement {
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IElement>) {
    super(init);

    this.ownedComment = init?.ownedComment ? new Set(init.ownedComment) : new Set();
  }
  getOwnedComment(): Set<IComment> {
    return this.ownedComment;
  }

  setOwnedComment(value: Set<IComment>): void {
    this.ownedComment = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ownedComment: this.ownedComment,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.ownedComment = Array.from(this.ownedComment);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Element {
    return new Element(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Element)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Element{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Element {
    const instance = new Element();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IElement): ValidationResult {
    if (instance instanceof Element) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Element(instance);
    return temp.validate();
  }
}
