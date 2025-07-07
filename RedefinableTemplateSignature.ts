/**
 * Implementation class for RedefinableTemplateSignature
 * 
 * @since UML 2.5
 * @package uml
 * @extends RedefinableElement, TemplateSignature
 */
import { Comment } from './Comment';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IRedefinableTemplateSignature } from './IRedefinableTemplateSignature';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { TemplateParameter } from './TemplateParameter';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class RedefinableTemplateSignature extends RedefinableElement implements IRedefinableTemplateSignature {
  /**
   * extendedSignature
   * 
   * @type RedefinableTemplateSignature
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public extendedSignature: Set<IRedefinableTemplateSignature | string> = new Set();

  // Inherited from RedefinableElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from RedefinableElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from RedefinableElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from RedefinableElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from RedefinableElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from RedefinableElement
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from TemplateSignature
  /**
   * parameter
   * 
   * @type TemplateParameter
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public parameter: ITemplateParameter | string[] = [];

  // Inherited from TemplateSignature
  /**
   * template
   * 
   * @type TemplateableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedTemplateSignature
   */
  public template!: ITemplateableElement | string;

  // Inherited from TemplateSignature
  /**
   * ownedParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite signature
   */
  public ownedParameter: ITemplateParameter[] = [];

  constructor(init?: Partial<IRedefinableTemplateSignature>) {
    super(init);
    this.extendedSignature = init?.extendedSignature ?? new Set();
  }
  getExtendedSignature(): Set<IRedefinableTemplateSignature | string> {
    return this.extendedSignature;
  }

  setExtendedSignature(value: Set<IRedefinableTemplateSignature | string>): void {
    this.extendedSignature = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IRedefinableTemplateSignature {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      extendedSignature: this.extendedSignature,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.extendedSignature = Array.from(this.extendedSignature);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): RedefinableTemplateSignature {
    return new RedefinableTemplateSignature(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IRedefinableTemplateSignature>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof RedefinableTemplateSignature)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `RedefinableTemplateSignature{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): RedefinableTemplateSignature {
    const instance = new RedefinableTemplateSignature();

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
    instance.isLeaf = json.isLeaf;
    if (json.parameter && Array.isArray(json.parameter)) {
      instance.parameter = [...json.parameter];
    }
    instance.template = json.template;
    if (json.ownedParameter && Array.isArray(json.ownedParameter)) {
      instance.ownedParameter = [...json.ownedParameter];
    }
    if (json.extendedSignature && Array.isArray(json.extendedSignature)) {
      instance.extendedSignature = new Set(json.extendedSignature);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.extendedSignature) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IRedefinableTemplateSignature): ValidationResult {
    if (instance instanceof RedefinableTemplateSignature) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new RedefinableTemplateSignature(instance);
    return temp.validate();
  }
}
