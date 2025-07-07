/**
 * Implementation class for TimeExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IObservation } from './IObservation';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { ITimeExpression } from './ITimeExpression';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class TimeExpression extends ValueSpecification implements ITimeExpression {
  /**
   * expr
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public expr?: IValueSpecification = undefined;

  /**
   * observation
   * 
   * @type Observation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public observation: Set<IObservation | string> = new Set();

  // Inherited from ValueSpecification
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ValueSpecification
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ValueSpecification
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ValueSpecification
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ValueSpecification
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from ValueSpecification
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from ValueSpecification
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from ValueSpecification
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  constructor(init?: Partial<ITimeExpression>) {
    super(init);
    this.expr = init?.expr ?? undefined;
    this.observation = init?.observation ?? new Set();
  }
  getExpr(): IValueSpecification | undefined {
    return this.expr;
  }

  setExpr(value: IValueSpecification | undefined): void {
    this.expr = value;
  }

  getObservation(): Set<IObservation | string> {
    return this.observation;
  }

  setObservation(value: Set<IObservation | string>): void {
    this.observation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITimeExpression {
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
  clone(): TimeExpression {
    return new TimeExpression(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITimeExpression>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TimeExpression)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TimeExpression{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TimeExpression {
    const instance = new TimeExpression();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
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

  static validate(instance: ITimeExpression): ValidationResult {
    if (instance instanceof TimeExpression) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TimeExpression(instance);
    return temp.validate();
  }
}
