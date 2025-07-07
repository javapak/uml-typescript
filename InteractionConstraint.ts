/**
 * Implementation class for InteractionConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends Constraint
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInteractionConstraint } from './IInteractionConstraint';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class InteractionConstraint extends Constraint implements IInteractionConstraint {
  /**
   * maxint
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public maxint?: IValueSpecification = undefined;

  /**
   * minint
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public minint?: IValueSpecification = undefined;

  // Inherited from Constraint
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Constraint
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Constraint
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Constraint
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Constraint
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Constraint
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Constraint
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Constraint
  /**
   * constrainedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public constrainedElement: IElement | string[] = [];

  // Inherited from Constraint
  /**
   * context
   * 
   * @type Namespace
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedRule
   */
  public context?: INamespace | string = undefined;

  // Inherited from Constraint
  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  public specification!: IValueSpecification;

  constructor(init?: Partial<IInteractionConstraint>) {
    super(init);
    this.maxint = init?.maxint ?? undefined;
    this.minint = init?.minint ?? undefined;
  }
  getMaxint(): IValueSpecification | undefined {
    return this.maxint;
  }

  setMaxint(value: IValueSpecification | undefined): void {
    this.maxint = value;
  }

  getMinint(): IValueSpecification | undefined {
    return this.minint;
  }

  setMinint(value: IValueSpecification | undefined): void {
    this.minint = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInteractionConstraint {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.maxint !== undefined && { maxint: this.maxint }),
      ...(this.minint !== undefined && { minint: this.minint }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.maxint !== undefined) {
      result.maxint = this.maxint;
    }
    if (this.minint !== undefined) {
      result.minint = this.minint;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InteractionConstraint {
    return new InteractionConstraint(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInteractionConstraint>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InteractionConstraint)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InteractionConstraint{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InteractionConstraint {
    const instance = new InteractionConstraint();

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
    if (json.constrainedElement && Array.isArray(json.constrainedElement)) {
      instance.constrainedElement = [...json.constrainedElement];
    }
    if (json.context !== undefined) {
      instance.context = json.context;
    }
    instance.specification = json.specification;
    if (json.maxint !== undefined) {
      instance.maxint = json.maxint;
    }
    if (json.minint !== undefined) {
      instance.minint = json.minint;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInteractionConstraint): ValidationResult {
    if (instance instanceof InteractionConstraint) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InteractionConstraint(instance);
    return temp.validate();
  }
}
