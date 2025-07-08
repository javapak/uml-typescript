/**
 * Implementation class for InformationFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement, DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IActivityEdge } from './IActivityEdge';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IInformationFlow } from './IInformationFlow';
import { IMessage } from './IMessage';
import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';
import { IRelationship } from './IRelationship';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class InformationFlow extends PackageableElement implements IInformationFlow {
  /**
   * conveyed
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public conveyed: Set<string> = new Set();

  /**
   * informationSource
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public informationSource: Set<string> = new Set();

  /**
   * informationTarget
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public informationTarget: Set<string> = new Set();

  /**
   * realization
   * 
   * @type Relationship
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public realization: Set<string> = new Set();

  /**
   * realizingActivityEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public realizingActivityEdge: Set<string> = new Set();

  /**
   * realizingConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public realizingConnector: Set<string> = new Set();

  /**
   * realizingMessage
   * 
   * @type Message
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public realizingMessage: Set<string> = new Set();

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

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IInformationFlow>) {
    super(init);

    this.conveyed = init?.conveyed ? new Set(init.conveyed) : new Set();
    this.informationSource = init?.informationSource ? new Set(init.informationSource) : new Set();
    this.informationTarget = init?.informationTarget ? new Set(init.informationTarget) : new Set();
    this.realization = init?.realization ? new Set(init.realization) : new Set();
    this.realizingActivityEdge = init?.realizingActivityEdge ? new Set(init.realizingActivityEdge) : new Set();
    this.realizingConnector = init?.realizingConnector ? new Set(init.realizingConnector) : new Set();
    this.realizingMessage = init?.realizingMessage ? new Set(init.realizingMessage) : new Set();
  }
  getConveyed(): Set<string> {
    return this.conveyed;
  }

  setConveyed(value: Set<string>): void {
    this.conveyed = value;
  }

  getInformationSource(): Set<string> {
    return this.informationSource;
  }

  setInformationSource(value: Set<string>): void {
    this.informationSource = value;
  }

  getInformationTarget(): Set<string> {
    return this.informationTarget;
  }

  setInformationTarget(value: Set<string>): void {
    this.informationTarget = value;
  }

  getRealization(): Set<string> {
    return this.realization;
  }

  setRealization(value: Set<string>): void {
    this.realization = value;
  }

  getRealizingActivityEdge(): Set<string> {
    return this.realizingActivityEdge;
  }

  setRealizingActivityEdge(value: Set<string>): void {
    this.realizingActivityEdge = value;
  }

  getRealizingConnector(): Set<string> {
    return this.realizingConnector;
  }

  setRealizingConnector(value: Set<string>): void {
    this.realizingConnector = value;
  }

  getRealizingMessage(): Set<string> {
    return this.realizingMessage;
  }

  setRealizingMessage(value: Set<string>): void {
    this.realizingMessage = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInformationFlow {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      conveyed: this.conveyed,
      informationSource: this.informationSource,
      informationTarget: this.informationTarget,
      realization: this.realization,
      realizingActivityEdge: this.realizingActivityEdge,
      realizingConnector: this.realizingConnector,
      realizingMessage: this.realizingMessage,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.conveyed = Array.from(this.conveyed);
    result.informationSource = Array.from(this.informationSource);
    result.informationTarget = Array.from(this.informationTarget);
    result.realization = Array.from(this.realization);
    result.realizingActivityEdge = Array.from(this.realizingActivityEdge);
    result.realizingConnector = Array.from(this.realizingConnector);
    result.realizingMessage = Array.from(this.realizingMessage);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InformationFlow {
    return new InformationFlow(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInformationFlow>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InformationFlow)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InformationFlow{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InformationFlow {
    const instance = new InformationFlow();

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
    if (json.conveyed && Array.isArray(json.conveyed)) {
      instance.conveyed = new Set(json.conveyed);
    }
    if (json.informationSource && Array.isArray(json.informationSource)) {
      instance.informationSource = new Set(json.informationSource);
    }
    if (json.informationTarget && Array.isArray(json.informationTarget)) {
      instance.informationTarget = new Set(json.informationTarget);
    }
    if (json.realization && Array.isArray(json.realization)) {
      instance.realization = new Set(json.realization);
    }
    if (json.realizingActivityEdge && Array.isArray(json.realizingActivityEdge)) {
      instance.realizingActivityEdge = new Set(json.realizingActivityEdge);
    }
    if (json.realizingConnector && Array.isArray(json.realizingConnector)) {
      instance.realizingConnector = new Set(json.realizingConnector);
    }
    if (json.realizingMessage && Array.isArray(json.realizingMessage)) {
      instance.realizingMessage = new Set(json.realizingMessage);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.conveyed == null) {
      errors.push({
        property: 'conveyed',
        message: 'conveyed is required',
        code: 'REQUIRED'
      });
    }
    if (this.conveyed) {
      if (Array.from(this.conveyed).length < 1) {
        errors.push({
          property: 'conveyed',
          message: 'conveyed must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.informationSource == null) {
      errors.push({
        property: 'informationSource',
        message: 'informationSource is required',
        code: 'REQUIRED'
      });
    }
    if (this.informationSource) {
      if (Array.from(this.informationSource).length < 1) {
        errors.push({
          property: 'informationSource',
          message: 'informationSource must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.informationTarget == null) {
      errors.push({
        property: 'informationTarget',
        message: 'informationTarget is required',
        code: 'REQUIRED'
      });
    }
    if (this.informationTarget) {
      if (Array.from(this.informationTarget).length < 1) {
        errors.push({
          property: 'informationTarget',
          message: 'informationTarget must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.realization) {
    }
    if (this.realizingActivityEdge) {
    }
    if (this.realizingConnector) {
    }
    if (this.realizingMessage) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInformationFlow): ValidationResult {
    if (instance instanceof InformationFlow) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InformationFlow(instance);
    return temp.validate();
  }
}
