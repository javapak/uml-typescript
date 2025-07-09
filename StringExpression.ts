/**
 * Implementation class for StringExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends Expression, TemplateableElement
 */
import { Expression } from './Expression';
import { IComment } from './IComment';
import { IExpression } from './IExpression';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { TemplateableElement } from './TemplateableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class StringExpression extends Expression implements IStringExpression {
  /**
   * owningExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subExpression
   */
  public owningExpression?: string;

  /**
   * subExpression
   * 
   * @type StringExpression
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningExpression
   */
  public subExpression: IStringExpression[] = [];

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

  /**
   * operand
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  public operand: IValueSpecification[] = [];

  /**
   * symbol
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public symbol?: string;

  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature;


  constructor(init?: Partial<IStringExpression>) {
    super(init);

    this.owningExpression = init?.owningExpression;
    this.subExpression = init?.subExpression ? [...init.subExpression] : [];
  }
  getOwningExpression(): string | undefined {
    return this.owningExpression;
  }

  setOwningExpression(value: string | undefined): void {
    this.owningExpression = value;
  }

  getSubExpression(): IStringExpression[] {
    return this.subExpression;
  }

  setSubExpression(value: IStringExpression[]): void {
    this.subExpression = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IStringExpression {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.owningExpression !== undefined && { owningExpression: this.owningExpression }),
      subExpression: this.subExpression,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.owningExpression !== undefined) {
      result.owningExpression = this.owningExpression;
    }
    result.subExpression = [...this.subExpression];

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): StringExpression {
    return new StringExpression(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IStringExpression>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof StringExpression)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `StringExpression{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): StringExpression {
    const instance = new StringExpression();

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
    if (json.operand && Array.isArray(json.operand)) {
      instance.operand = [...json.operand];
    }
    if (json.symbol !== undefined) {
      instance.symbol = json.symbol;
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }
    if (json.owningExpression !== undefined) {
      instance.owningExpression = json.owningExpression;
    }
    if (json.subExpression && Array.isArray(json.subExpression)) {
      instance.subExpression = [...json.subExpression];
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
    if (this.name !== undefined) {
      if (typeof this.name !== 'string') {
        errors.push({
          property: 'name',
          message: 'name must be a string',
          code: 'TYPE_ERROR',
          value: this.name
        });
      }
    }
    if (this.visibility !== undefined) {
    }
    if (this.operand) {
    }
    if (this.symbol !== undefined) {
      if (typeof this.symbol !== 'string') {
        errors.push({
          property: 'symbol',
          message: 'symbol must be a string',
          code: 'TYPE_ERROR',
          value: this.symbol
        });
      }
    }
    if (this.templateBinding) {
    }
    if (this.subExpression) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IStringExpression): ValidationResult {
    if (instance instanceof StringExpression) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new StringExpression(instance);
    return temp.validate();
  }
}
