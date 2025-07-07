/**
 * Implementation class for BehavioralFeature
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Namespace, Feature
 */
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { Feature } from './Feature';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IFeature } from './IFeature';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IType } from './IType';
import { Namespace } from './Namespace';
import { PackageImport } from './PackageImport';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class BehavioralFeature extends Namespace implements IBehavioralFeature {
  /**
   * concurrency
   * 
   * @type CallConcurrencyKind
   * @multiplicity [1..1]
   */
  public concurrency!: any;

  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  /**
   * method
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite specification
   */
  public method: Set<IBehavior | string> = new Set();

  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  /**
   * raisedException
   * 
   * @type Type
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public raisedException: Set<IType | string> = new Set();

  // Inherited from Namespace
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Namespace
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Namespace
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Namespace
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Namespace
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Namespace
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Namespace
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Namespace
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Feature
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Feature
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  constructor(init?: Partial<IBehavioralFeature>) {
    super(init);
    this.concurrency = init?.concurrency!;
    this.isAbstract = init?.isAbstract!;
    this.method = init?.method ?? new Set();
    this.ownedParameter = init?.ownedParameter ?? [];
    this.ownedParameterSet = init?.ownedParameterSet ?? new Set();
    this.raisedException = init?.raisedException ?? new Set();
  }
  getConcurrency(): any {
    return this.concurrency;
  }

  setConcurrency(value: any): void {
    this.concurrency = value;
  }

  getIsAbstract(): boolean {
    return this.isAbstract;
  }

  setIsAbstract(value: boolean): void {
    this.isAbstract = value;
  }

  getMethod(): Set<IBehavior | string> {
    return this.method;
  }

  setMethod(value: Set<IBehavior | string>): void {
    this.method = value;
  }

  getOwnedParameter(): IParameter[] {
    return this.ownedParameter;
  }

  setOwnedParameter(value: IParameter[]): void {
    this.ownedParameter = value;
  }

  getOwnedParameterSet(): Set<IParameterSet> {
    return this.ownedParameterSet;
  }

  setOwnedParameterSet(value: Set<IParameterSet>): void {
    this.ownedParameterSet = value;
  }

  getRaisedException(): Set<IType | string> {
    return this.raisedException;
  }

  setRaisedException(value: Set<IType | string>): void {
    this.raisedException = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IBehavioralFeature {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      concurrency: this.concurrency,
      isAbstract: this.isAbstract,
      method: this.method,
      ownedParameter: this.ownedParameter,
      ownedParameterSet: this.ownedParameterSet,
      raisedException: this.raisedException,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.concurrency = this.concurrency;
    result.isAbstract = this.isAbstract;
    result.method = Array.from(this.method);
    result.ownedParameter = [...this.ownedParameter];
    result.ownedParameterSet = Array.from(this.ownedParameterSet);
    result.raisedException = Array.from(this.raisedException);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): BehavioralFeature {
    return new BehavioralFeature(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IBehavioralFeature>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof BehavioralFeature)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `BehavioralFeature{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): BehavioralFeature {
    const instance = new BehavioralFeature();

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
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }
    instance.isLeaf = json.isLeaf;
    instance.isStatic = json.isStatic;
    instance.concurrency = json.concurrency;
    instance.isAbstract = json.isAbstract;
    if (json.method && Array.isArray(json.method)) {
      instance.method = new Set(json.method);
    }
    if (json.ownedParameter && Array.isArray(json.ownedParameter)) {
      instance.ownedParameter = [...json.ownedParameter];
    }
    if (json.ownedParameterSet && Array.isArray(json.ownedParameterSet)) {
      instance.ownedParameterSet = new Set(json.ownedParameterSet);
    }
    if (json.raisedException && Array.isArray(json.raisedException)) {
      instance.raisedException = new Set(json.raisedException);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.concurrency == null) {
      errors.push({
        property: 'concurrency',
        message: 'concurrency is required',
        code: 'REQUIRED'
      });
    }
    if (this.concurrency !== undefined) {
    }
    if (this.isAbstract == null) {
      errors.push({
        property: 'isAbstract',
        message: 'isAbstract is required',
        code: 'REQUIRED'
      });
    }
    if (this.isAbstract !== undefined) {
      if (typeof this.isAbstract !== 'boolean') {
        errors.push({
          property: 'isAbstract',
          message: 'isAbstract must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isAbstract
        });
      }
    }
    if (this.method) {
    }
    if (this.ownedParameter) {
    }
    if (this.ownedParameterSet) {
    }
    if (this.raisedException) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IBehavioralFeature): ValidationResult {
    if (instance instanceof BehavioralFeature) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new BehavioralFeature(instance);
    return temp.validate();
  }
}
