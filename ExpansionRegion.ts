/**
 * Implementation class for ExpansionRegion
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { ActivityEdge } from './ActivityEdge';
import { ActivityNode } from './ActivityNode';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { ExceptionHandler } from './ExceptionHandler';
import { ExpansionKind } from './ExpansionKind';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IExceptionHandler } from './IExceptionHandler';
import { IExpansionNode } from './IExpansionNode';
import { IExpansionRegion } from './IExpansionRegion';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';
import { PackageImport } from './PackageImport';
import { StringExpression } from './StringExpression';
import { StructuredActivityNode } from './StructuredActivityNode';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { Variable } from './Variable';
import { VisibilityKind } from './VisibilityKind';

export class ExpansionRegion extends StructuredActivityNode implements IExpansionRegion {
  /**
   * mode
   * 
   * @type ExpansionKind
   * @multiplicity [1..1]
   */
  public mode!: any;

  /**
   * outputElement
   * 
   * @type ExpansionNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite regionAsOutput
   */
  public outputElement: Set<IExpansionNode | string> = new Set();

  /**
   * inputElement
   * 
   * @type ExpansionNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   * @opposite regionAsInput
   */
  public inputElement: Set<IExpansionNode | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from StructuredActivityNode
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from StructuredActivityNode
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from StructuredActivityNode
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from StructuredActivityNode
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from StructuredActivityNode
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from StructuredActivityNode
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  // Inherited from StructuredActivityNode
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  public edge: Set<IActivityEdge> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * mustIsolate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public mustIsolate!: boolean;

  // Inherited from StructuredActivityNode
  /**
   * structuredNodeInput
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public structuredNodeInput: Set<IInputPin> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * structuredNodeOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public structuredNodeOutput: Set<IOutputPin> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite scope
   */
  public variable: Set<IVariable> = new Set();

  // Inherited from StructuredActivityNode
  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  public node: Set<IActivityNode> = new Set();

  constructor(init?: Partial<IExpansionRegion>) {
    super(init);
    this.mode = init?.mode!;
    this.outputElement = init?.outputElement ?? new Set();
    this.inputElement = init?.inputElement ?? new Set();
  }
  getMode(): any {
    return this.mode;
  }

  setMode(value: any): void {
    this.mode = value;
  }

  getOutputElement(): Set<IExpansionNode | string> {
    return this.outputElement;
  }

  setOutputElement(value: Set<IExpansionNode | string>): void {
    this.outputElement = value;
  }

  getInputElement(): Set<IExpansionNode | string> {
    return this.inputElement;
  }

  setInputElement(value: Set<IExpansionNode | string>): void {
    this.inputElement = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExpansionRegion {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      mode: this.mode,
      outputElement: this.outputElement,
      inputElement: this.inputElement,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.mode = this.mode;
    result.outputElement = Array.from(this.outputElement);
    result.inputElement = Array.from(this.inputElement);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExpansionRegion {
    return new ExpansionRegion(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExpansionRegion>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExpansionRegion)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExpansionRegion{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExpansionRegion {
    const instance = new ExpansionRegion();

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
    if (json.inInterruptibleRegion && Array.isArray(json.inInterruptibleRegion)) {
      instance.inInterruptibleRegion = new Set(json.inInterruptibleRegion);
    }
    if (json.inStructuredNode !== undefined) {
      instance.inStructuredNode = json.inStructuredNode;
    }
    if (json.incoming && Array.isArray(json.incoming)) {
      instance.incoming = new Set(json.incoming);
    }
    if (json.outgoing && Array.isArray(json.outgoing)) {
      instance.outgoing = new Set(json.outgoing);
    }
    if (json.redefinedNode && Array.isArray(json.redefinedNode)) {
      instance.redefinedNode = new Set(json.redefinedNode);
    }
    if (json.inPartition && Array.isArray(json.inPartition)) {
      instance.inPartition = new Set(json.inPartition);
    }
    if (json.handler && Array.isArray(json.handler)) {
      instance.handler = new Set(json.handler);
    }
    instance.isLocallyReentrant = json.isLocallyReentrant;
    if (json.localPostcondition && Array.isArray(json.localPostcondition)) {
      instance.localPostcondition = new Set(json.localPostcondition);
    }
    if (json.localPrecondition && Array.isArray(json.localPrecondition)) {
      instance.localPrecondition = new Set(json.localPrecondition);
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
    if (json.edge && Array.isArray(json.edge)) {
      instance.edge = new Set(json.edge);
    }
    instance.mustIsolate = json.mustIsolate;
    if (json.structuredNodeInput && Array.isArray(json.structuredNodeInput)) {
      instance.structuredNodeInput = new Set(json.structuredNodeInput);
    }
    if (json.structuredNodeOutput && Array.isArray(json.structuredNodeOutput)) {
      instance.structuredNodeOutput = new Set(json.structuredNodeOutput);
    }
    if (json.variable && Array.isArray(json.variable)) {
      instance.variable = new Set(json.variable);
    }
    if (json.node && Array.isArray(json.node)) {
      instance.node = new Set(json.node);
    }
    instance.mode = json.mode;
    if (json.outputElement && Array.isArray(json.outputElement)) {
      instance.outputElement = new Set(json.outputElement);
    }
    if (json.inputElement && Array.isArray(json.inputElement)) {
      instance.inputElement = new Set(json.inputElement);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.mode == null) {
      errors.push({
        property: 'mode',
        message: 'mode is required',
        code: 'REQUIRED'
      });
    }
    if (this.mode !== undefined) {
    }
    if (this.outputElement) {
    }
    if (this.inputElement == null) {
      errors.push({
        property: 'inputElement',
        message: 'inputElement is required',
        code: 'REQUIRED'
      });
    }
    if (this.inputElement) {
      if (Array.from(this.inputElement).length < 1) {
        errors.push({
          property: 'inputElement',
          message: 'inputElement must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExpansionRegion): ValidationResult {
    if (instance instanceof ExpansionRegion) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExpansionRegion(instance);
    return temp.validate();
  }
}
