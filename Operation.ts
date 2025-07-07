/**
 * Implementation class for Operation
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioralFeature, ParameterableElement, TemplateableElement
 */
import { BehavioralFeature } from './BehavioralFeature';
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDataType } from './IDataType';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IInterface } from './IInterface';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IParameterableElement } from './IParameterableElement';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { PackageImport } from './PackageImport';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';
import { ParameterableElement } from './ParameterableElement';
import { StringExpression } from './StringExpression';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { TemplateableElement } from './TemplateableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Operation extends BehavioralFeature implements IOperation {
  /**
   * bodyCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public bodyCondition?: IConstraint | string = undefined;

  /**
   * class
   * 
   * @type Class
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public class?: IClass | string = undefined;

  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public datatype?: IDataType | string = undefined;

  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedOperation
   */
  public interface?: IInterface | string = undefined;

  /**
   * isQuery
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isQuery!: boolean;

  /**
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public postcondition: Set<IConstraint | string> = new Set();

  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public precondition: Set<IConstraint | string> = new Set();

  /**
   * redefinedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedOperation: Set<IOperation | string> = new Set();

  // Inherited from BehavioralFeature
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from BehavioralFeature
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from BehavioralFeature
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from BehavioralFeature
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from BehavioralFeature
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from BehavioralFeature
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from BehavioralFeature
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from BehavioralFeature
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from BehavioralFeature
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from BehavioralFeature
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  // Inherited from BehavioralFeature
  /**
   * concurrency
   * 
   * @type CallConcurrencyKind
   * @multiplicity [1..1]
   */
  public concurrency!: any;

  // Inherited from BehavioralFeature
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from BehavioralFeature
  /**
   * method
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite specification
   */
  public method: Set<IBehavior | string> = new Set();

  // Inherited from BehavioralFeature
  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  // Inherited from BehavioralFeature
  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  // Inherited from BehavioralFeature
  /**
   * raisedException
   * 
   * @type Type
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public raisedException: Set<IType | string> = new Set();

  // Inherited from ParameterableElement
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from ParameterableElement
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from TemplateableElement
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from TemplateableElement
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  constructor(init?: Partial<IOperation>) {
    super(init);
    this.bodyCondition = init?.bodyCondition ?? undefined;
    this.class = init?.class ?? undefined;
    this.datatype = init?.datatype ?? undefined;
    this.interface = init?.interface ?? undefined;
    this.isQuery = init?.isQuery!;
    this.postcondition = init?.postcondition ?? new Set();
    this.precondition = init?.precondition ?? new Set();
    this.redefinedOperation = init?.redefinedOperation ?? new Set();
  }
  getBodyCondition(): IConstraint | string | undefined {
    return this.bodyCondition;
  }

  setBodyCondition(value: IConstraint | string | undefined): void {
    this.bodyCondition = value;
  }

  getClass(): IClass | string | undefined {
    return this.class;
  }

  setClass(value: IClass | string | undefined): void {
    this.class = value;
  }

  getDatatype(): IDataType | string | undefined {
    return this.datatype;
  }

  setDatatype(value: IDataType | string | undefined): void {
    this.datatype = value;
  }

  getInterface(): IInterface | string | undefined {
    return this.interface;
  }

  setInterface(value: IInterface | string | undefined): void {
    this.interface = value;
  }

  getIsQuery(): boolean {
    return this.isQuery;
  }

  setIsQuery(value: boolean): void {
    this.isQuery = value;
  }

  getPostcondition(): Set<IConstraint | string> {
    return this.postcondition;
  }

  setPostcondition(value: Set<IConstraint | string>): void {
    this.postcondition = value;
  }

  getPrecondition(): Set<IConstraint | string> {
    return this.precondition;
  }

  setPrecondition(value: Set<IConstraint | string>): void {
    this.precondition = value;
  }

  getRedefinedOperation(): Set<IOperation | string> {
    return this.redefinedOperation;
  }

  setRedefinedOperation(value: Set<IOperation | string>): void {
    this.redefinedOperation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOperation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.bodyCondition !== undefined && { bodyCondition: this.bodyCondition }),
      ...(this.class !== undefined && { class: this.class }),
      ...(this.datatype !== undefined && { datatype: this.datatype }),
      ...(this.interface !== undefined && { interface: this.interface }),
      isQuery: this.isQuery,
      postcondition: this.postcondition,
      precondition: this.precondition,
      redefinedOperation: this.redefinedOperation,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.bodyCondition !== undefined) {
      result.bodyCondition = this.bodyCondition;
    }
    if (this.class !== undefined) {
      result.class = this.class;
    }
    if (this.datatype !== undefined) {
      result.datatype = this.datatype;
    }
    if (this.interface !== undefined) {
      result.interface = this.interface;
    }
    result.isQuery = this.isQuery;
    result.postcondition = Array.from(this.postcondition);
    result.precondition = Array.from(this.precondition);
    result.redefinedOperation = Array.from(this.redefinedOperation);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Operation {
    return new Operation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOperation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Operation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Operation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Operation {
    const instance = new Operation();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }
    if (json.bodyCondition !== undefined) {
      instance.bodyCondition = json.bodyCondition;
    }
    if (json.class !== undefined) {
      instance.class = json.class;
    }
    if (json.datatype !== undefined) {
      instance.datatype = json.datatype;
    }
    if (json.interface !== undefined) {
      instance.interface = json.interface;
    }
    instance.isQuery = json.isQuery;
    if (json.postcondition && Array.isArray(json.postcondition)) {
      instance.postcondition = new Set(json.postcondition);
    }
    if (json.precondition && Array.isArray(json.precondition)) {
      instance.precondition = new Set(json.precondition);
    }
    if (json.redefinedOperation && Array.isArray(json.redefinedOperation)) {
      instance.redefinedOperation = new Set(json.redefinedOperation);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isQuery == null) {
      errors.push({
        property: 'isQuery',
        message: 'isQuery is required',
        code: 'REQUIRED'
      });
    }
    if (this.isQuery !== undefined) {
      if (typeof this.isQuery !== 'boolean') {
        errors.push({
          property: 'isQuery',
          message: 'isQuery must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isQuery
        });
      }
    }
    if (this.postcondition) {
    }
    if (this.precondition) {
    }
    if (this.redefinedOperation) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IOperation): ValidationResult {
    if (instance instanceof Operation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Operation(instance);
    return temp.validate();
  }
}
