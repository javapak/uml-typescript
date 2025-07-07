/**
 * Implementation class for ParameterSet
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ParameterSet extends NamedElement implements IParameterSet {
  /**
   * condition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public condition: Set<IConstraint> = new Set();

  /**
   * parameter
   * 
   * @type Parameter
   * @multiplicity [1..*]
   * @relationship cross-reference
   * @opposite parameterSet
   */
  public parameter: Set<IParameter | string> = new Set();

  // Inherited from NamedElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from NamedElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from NamedElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from NamedElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from NamedElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  constructor(init?: Partial<IParameterSet>) {
    super(init);
    this.condition = init?.condition ?? new Set();
    this.parameter = init?.parameter ?? new Set();
  }
  getCondition(): Set<IConstraint> {
    return this.condition;
  }

  setCondition(value: Set<IConstraint>): void {
    this.condition = value;
  }

  getParameter(): Set<IParameter | string> {
    return this.parameter;
  }

  setParameter(value: Set<IParameter | string>): void {
    this.parameter = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IParameterSet {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      condition: this.condition,
      parameter: this.parameter,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.condition = Array.from(this.condition);
    result.parameter = Array.from(this.parameter);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ParameterSet {
    return new ParameterSet(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IParameterSet>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ParameterSet)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ParameterSet{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ParameterSet {
    const instance = new ParameterSet();

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
    if (json.condition && Array.isArray(json.condition)) {
      instance.condition = new Set(json.condition);
    }
    if (json.parameter && Array.isArray(json.parameter)) {
      instance.parameter = new Set(json.parameter);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.condition) {
    }
    if (this.parameter == null) {
      errors.push({
        property: 'parameter',
        message: 'parameter is required',
        code: 'REQUIRED'
      });
    }
    if (this.parameter) {
      if (Array.from(this.parameter).length < 1) {
        errors.push({
          property: 'parameter',
          message: 'parameter must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IParameterSet): ValidationResult {
    if (instance instanceof ParameterSet) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ParameterSet(instance);
    return temp.validate();
  }
}
