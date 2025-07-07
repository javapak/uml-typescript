/**
 * Implementation class for Substitution
 * 
 * @since UML 2.5
 * @package uml
 * @extends Realization
 */
import { Comment } from './Comment';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IRealization } from './IRealization';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateParameter } from './ITemplateParameter';
import { OpaqueExpression } from './OpaqueExpression';
import { Realization } from './Realization';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Substitution extends Realization implements ISubstitution {
  /**
   * contract
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public contract!: IClassifier | string;

  /**
   * substitutingClassifier
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite substitution
   */
  public substitutingClassifier!: IClassifier | string;

  // Inherited from Realization
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Realization
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Realization
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Realization
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Realization
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Realization
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Realization
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Realization
  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<INamedElement | string> = new Set();

  // Inherited from Realization
  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<INamedElement | string> = new Set();

  // Inherited from Realization
  /**
   * mapping
   * 
   * @type OpaqueExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public mapping?: IOpaqueExpression = undefined;

  constructor(init?: Partial<ISubstitution>) {
    super(init);
    this.contract = init?.contract!;
    this.substitutingClassifier = init?.substitutingClassifier!;
  }
  getContract(): IClassifier | string {
    return this.contract;
  }

  setContract(value: IClassifier | string): void {
    this.contract = value;
  }

  getSubstitutingClassifier(): IClassifier | string {
    return this.substitutingClassifier;
  }

  setSubstitutingClassifier(value: IClassifier | string): void {
    this.substitutingClassifier = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ISubstitution {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      contract: this.contract,
      substitutingClassifier: this.substitutingClassifier,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.contract = this.contract;
    result.substitutingClassifier = this.substitutingClassifier;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Substitution {
    return new Substitution(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ISubstitution>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Substitution)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Substitution{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Substitution {
    const instance = new Substitution();

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
    if (json.client && Array.isArray(json.client)) {
      instance.client = new Set(json.client);
    }
    if (json.supplier && Array.isArray(json.supplier)) {
      instance.supplier = new Set(json.supplier);
    }
    if (json.mapping !== undefined) {
      instance.mapping = json.mapping;
    }
    instance.contract = json.contract;
    instance.substitutingClassifier = json.substitutingClassifier;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.contract == null) {
      errors.push({
        property: 'contract',
        message: 'contract is required',
        code: 'REQUIRED'
      });
    }
    if (this.substitutingClassifier == null) {
      errors.push({
        property: 'substitutingClassifier',
        message: 'substitutingClassifier is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ISubstitution): ValidationResult {
    if (instance instanceof Substitution) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Substitution(instance);
    return temp.validate();
  }
}
