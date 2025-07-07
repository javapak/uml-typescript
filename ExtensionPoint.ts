/**
 * Implementation class for ExtensionPoint
 * 
 * @since UML 2.5
 * @package uml
 * @extends RedefinableElement
 */
import { Comment } from './Comment';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IExtensionPoint } from './IExtensionPoint';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IUseCase } from './IUseCase';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ExtensionPoint extends RedefinableElement implements IExtensionPoint {
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite extensionPoint
   */
  public useCase!: IUseCase | string;

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

  constructor(init?: Partial<IExtensionPoint>) {
    super(init);
    this.useCase = init?.useCase!;
  }
  getUseCase(): IUseCase | string {
    return this.useCase;
  }

  setUseCase(value: IUseCase | string): void {
    this.useCase = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExtensionPoint {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      useCase: this.useCase,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.useCase = this.useCase;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExtensionPoint {
    return new ExtensionPoint(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExtensionPoint>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExtensionPoint)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExtensionPoint{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExtensionPoint {
    const instance = new ExtensionPoint();

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
    instance.useCase = json.useCase;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.useCase == null) {
      errors.push({
        property: 'useCase',
        message: 'useCase is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExtensionPoint): ValidationResult {
    if (instance instanceof ExtensionPoint) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExtensionPoint(instance);
    return temp.validate();
  }
}
