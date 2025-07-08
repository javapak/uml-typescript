/**
 * Implementation class for Expression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IComment } from './IComment';
import { IExpression } from './IExpression';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Expression extends ValueSpecification implements IExpression {
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


  constructor(init?: Partial<IExpression>) {
    super(init);

    this.operand = init?.operand ? [...init.operand] : [];
    this.symbol = init?.symbol;
  }
  getOperand(): IValueSpecification[] {
    return this.operand;
  }

  setOperand(value: IValueSpecification[]): void {
    this.operand = value;
  }

  getSymbol(): string | undefined {
    return this.symbol;
  }

  setSymbol(value: string | undefined): void {
    this.symbol = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExpression {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      operand: this.operand,
      ...(this.symbol !== undefined && { symbol: this.symbol }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.operand = [...this.operand];
    if (this.symbol !== undefined) {
      result.symbol = this.symbol;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Expression {
    return new Expression(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExpression>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Expression)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Expression{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Expression {
    const instance = new Expression();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExpression): ValidationResult {
    if (instance instanceof Expression) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Expression(instance);
    return temp.validate();
  }
}
