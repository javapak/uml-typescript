/**
 * Implementation class for Constraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IValueSpecification } from './IValueSpecification';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Constraint extends PackageableElement implements IConstraint {
  /**
   * constrainedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public constrainedElement: string[] = [];

  /**
   * context
   * 
   * @type Namespace
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedRule
   */
  public context?: string;

  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  public specification!: IValueSpecification;

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


  constructor(init?: Partial<IConstraint>) {
    super(init);

    this.constrainedElement = init?.constrainedElement ? [...init.constrainedElement] : [];
    this.context = init?.context;
    this.specification = init?.specification!;
  }
  getConstrainedElement(): string[] {
    return this.constrainedElement;
  }

  setConstrainedElement(value: string[]): void {
    this.constrainedElement = value;
  }

  getContext(): string | undefined {
    return this.context;
  }

  setContext(value: string | undefined): void {
    this.context = value;
  }

  getSpecification(): IValueSpecification {
    return this.specification;
  }

  setSpecification(value: IValueSpecification): void {
    this.specification = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConstraint {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      constrainedElement: this.constrainedElement,
      ...(this.context !== undefined && { context: this.context }),
      specification: this.specification,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.constrainedElement = [...this.constrainedElement];
    if (this.context !== undefined) {
      result.context = this.context;
    }
    result.specification = this.specification;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Constraint {
    return new Constraint(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConstraint>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Constraint)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Constraint{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Constraint {
    const instance = new Constraint();

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
    if (json.constrainedElement && Array.isArray(json.constrainedElement)) {
      instance.constrainedElement = [...json.constrainedElement];
    }
    if (json.context !== undefined) {
      instance.context = json.context;
    }
    instance.specification = json.specification;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.constrainedElement) {
    }
    if (this.specification == null) {
      errors.push({
        property: 'specification',
        message: 'specification is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConstraint): ValidationResult {
    if (instance instanceof Constraint) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Constraint(instance);
    return temp.validate();
  }
}
