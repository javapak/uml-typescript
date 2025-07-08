/**
 * Implementation class for OpaqueExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class OpaqueExpression extends ValueSpecification implements IOpaqueExpression {
  /**
   * behavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public behavior?: string;

  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public body: string[] = [];

  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public language: string[] = [];

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string;

  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression;

  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility: VisibilityKind | undefined = undefined;
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;


  constructor(init?: Partial<IOpaqueExpression>) {
    super(init);

    this.behavior = init?.behavior;
    this.body = init?.body ? [...init.body] : [];
    this.language = init?.language ? [...init.language] : [];
  }
  getBehavior(): string | undefined {
    return this.behavior;
  }

  setBehavior(value: string | undefined): void {
    this.behavior = value;
  }

  getBody(): string[] {
    return this.body;
  }

  setBody(value: string[]): void {
    this.body = value;
  }

  getLanguage(): string[] {
    return this.language;
  }

  setLanguage(value: string[]): void {
    this.language = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOpaqueExpression {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.behavior !== undefined && { behavior: this.behavior }),
      body: this.body,
      language: this.language,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.behavior !== undefined) {
      result.behavior = this.behavior;
    }
    result.body = [...this.body];
    result.language = [...this.language];

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): OpaqueExpression {
    return new OpaqueExpression(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOpaqueExpression>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof OpaqueExpression)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `OpaqueExpression{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): OpaqueExpression {
    const instance = new OpaqueExpression();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.name !== undefined) {
      instance.name = json.name;
    }
    if (json.nameExpression !== undefined) {
      instance.nameExpression = json.nameExpression;
    }
    if (json.visibility !== undefined) {
      instance.visibility = json.visibility;
    }
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.type !== undefined) {
      instance.type = json.type;
    }
    if (json.behavior !== undefined) {
      instance.behavior = json.behavior;
    }
    if (json.body && Array.isArray(json.body)) {
      instance.body = [...json.body];
    }
    if (json.language && Array.isArray(json.language)) {
      instance.language = [...json.language];
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.body) {
    }
    if (this.body !== undefined) {
      if (typeof this.body !== 'string') {
        errors.push({
          property: 'body',
          message: 'body must be a string',
          code: 'TYPE_ERROR',
          value: this.body
        });
      }
    }
    if (this.language) {
    }
    if (this.language !== undefined) {
      if (typeof this.language !== 'string') {
        errors.push({
          property: 'language',
          message: 'language must be a string',
          code: 'TYPE_ERROR',
          value: this.language
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IOpaqueExpression): ValidationResult {
    if (instance instanceof OpaqueExpression) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new OpaqueExpression(instance);
    return temp.validate();
  }
}
