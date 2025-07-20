/**
 * Implementation class for Lifeline
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { IPartDecomposition } from './IPartDecomposition';
import { IStringExpression } from './IStringExpression';
import { IValueSpecification } from './IValueSpecification';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Lifeline extends NamedElement implements ILifeline {
  /**
   * decomposedAs
   * 
   * @type PartDecomposition
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public decomposedAs?: string;

  /**
   * interaction
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite lifeline
   */
  public interaction!: string;

  /**
   * represents
   * 
   * @type ConnectableElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public represents?: string;

  /**
   * selector
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public selector?: IValueSpecification;

  /**
   * coveredBy
   * 
   * @type InteractionFragment
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite covered
   */
  public coveredBy: Set<string> = new Set();

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

  constructor(init?: Partial<ILifeline>) {
    super(init);

    this.decomposedAs = init?.decomposedAs;
    this.interaction = init?.interaction ?? '';
    this.represents = init?.represents;
    this.selector = init?.selector;
    this.coveredBy = init?.coveredBy ? new Set(init.coveredBy) : new Set();
  }
  getDecomposedAs(): string | undefined {
    return this.decomposedAs;
  }

  setDecomposedAs(value: string | undefined): void {
    this.decomposedAs = value;
  }

  getInteraction(): string {
    return this.interaction;
  }

  setInteraction(value: string): void {
    this.interaction = value;
  }

  getRepresents(): string | undefined {
    return this.represents;
  }

  setRepresents(value: string | undefined): void {
    this.represents = value;
  }

  getSelector(): IValueSpecification | undefined {
    return this.selector;
  }

  setSelector(value: IValueSpecification | undefined): void {
    this.selector = value;
  }

  getCoveredBy(): Set<string> {
    return this.coveredBy;
  }

  setCoveredBy(value: Set<string>): void {
    this.coveredBy = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ILifeline {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.decomposedAs !== undefined && { decomposedAs: this.decomposedAs }),
      interaction: this.interaction,
      ...(this.represents !== undefined && { represents: this.represents }),
      ...(this.selector !== undefined && { selector: this.selector }),
      coveredBy: this.coveredBy,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.decomposedAs !== undefined) {
      result.decomposedAs = this.decomposedAs;
    }
    result.interaction = this.interaction;
    if (this.represents !== undefined) {
      result.represents = this.represents;
    }
    if (this.selector !== undefined) {
      result.selector = this.selector;
    }
    result.coveredBy = Array.from(this.coveredBy);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Lifeline {
    return new Lifeline(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILifeline>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Lifeline)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Lifeline{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Lifeline {
    const instance = new Lifeline();

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
    if (json.decomposedAs !== undefined) {
      instance.decomposedAs = json.decomposedAs;
    }
    instance.interaction = json.interaction;
    if (json.represents !== undefined) {
      instance.represents = json.represents;
    }
    if (json.selector !== undefined) {
      instance.selector = json.selector;
    }
    if (json.coveredBy && Array.isArray(json.coveredBy)) {
      instance.coveredBy = new Set(json.coveredBy);
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
    if (this.interaction == null) {
      errors.push({
        property: 'interaction',
        message: 'interaction is required',
        code: 'REQUIRED'
      });
    }
    if (this.coveredBy) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ILifeline): ValidationResult {
    if (instance instanceof Lifeline) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Lifeline(instance);
    return temp.validate();
  }
}
