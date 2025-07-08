/**
 * Implementation class for Duration
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IComment } from './IComment';
import { IDuration } from './IDuration';
import { IObservation } from './IObservation';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Duration extends ValueSpecification implements IDuration {
  /**
   * expr
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public expr?: IValueSpecification;

  /**
   * observation
   * 
   * @type Observation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public observation: Set<string> = new Set();

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


  constructor(init?: Partial<IDuration>) {
    super(init);

    this.expr = init?.expr;
    this.observation = init?.observation ? new Set(init.observation) : new Set();
  }
  getExpr(): IValueSpecification | undefined {
    return this.expr;
  }

  setExpr(value: IValueSpecification | undefined): void {
    this.expr = value;
  }

  getObservation(): Set<string> {
    return this.observation;
  }

  setObservation(value: Set<string>): void {
    this.observation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDuration {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.expr !== undefined && { expr: this.expr }),
      observation: this.observation,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.expr !== undefined) {
      result.expr = this.expr;
    }
    result.observation = Array.from(this.observation);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Duration {
    return new Duration(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDuration>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Duration)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Duration{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Duration {
    const instance = new Duration();

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
    if (json.expr !== undefined) {
      instance.expr = json.expr;
    }
    if (json.observation && Array.isArray(json.observation)) {
      instance.observation = new Set(json.observation);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.observation) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDuration): ValidationResult {
    if (instance instanceof Duration) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Duration(instance);
    return temp.validate();
  }
}
