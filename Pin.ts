/**
 * Implementation class for Pin
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ObjectNode, MultiplicityElement
 */
import { Comment } from './Comment';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IMultiplicityElement } from './IMultiplicityElement';
import { INamespace } from './INamespace';
import { IObjectNode } from './IObjectNode';
import { IPin } from './IPin';
import { IRedefinableElement } from './IRedefinableElement';
import { IState } from './IState';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { MultiplicityElement } from './MultiplicityElement';
import { ObjectNode } from './ObjectNode';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Pin extends ObjectNode implements IPin {
  /**
   * isControl
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isControl!: boolean;

  // Inherited from ObjectNode
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ObjectNode
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ObjectNode
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ObjectNode
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ObjectNode
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from ObjectNode
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from ObjectNode
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from ObjectNode
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from ObjectNode
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from ObjectNode
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from ObjectNode
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from ObjectNode
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from ObjectNode
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  // Inherited from ObjectNode
  /**
   * inState
   * 
   * @type State
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public inState: Set<IState | string> = new Set();

  // Inherited from ObjectNode
  /**
   * isControlType
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isControlType!: boolean;

  // Inherited from ObjectNode
  /**
   * ordering
   * 
   * @type ObjectNodeOrderingKind
   * @multiplicity [1..1]
   */
  public ordering!: any;

  // Inherited from ObjectNode
  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public selection?: IBehavior | string = undefined;

  // Inherited from ObjectNode
  /**
   * upperBound
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperBound?: IValueSpecification = undefined;

  // Inherited from MultiplicityElement
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  // Inherited from MultiplicityElement
  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  // Inherited from MultiplicityElement
  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification = undefined;

  // Inherited from MultiplicityElement
  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification = undefined;

  constructor(init?: Partial<IPin>) {
    super(init);
    this.isControl = init?.isControl!;
  }
  getIsControl(): boolean {
    return this.isControl;
  }

  setIsControl(value: boolean): void {
    this.isControl = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPin {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isControl: this.isControl,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isControl = this.isControl;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Pin {
    return new Pin(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPin>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Pin)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Pin{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Pin {
    const instance = new Pin();

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
    if (json.type !== undefined) {
      instance.type = json.type;
    }
    if (json.inState && Array.isArray(json.inState)) {
      instance.inState = new Set(json.inState);
    }
    instance.isControlType = json.isControlType;
    instance.ordering = json.ordering;
    if (json.selection !== undefined) {
      instance.selection = json.selection;
    }
    if (json.upperBound !== undefined) {
      instance.upperBound = json.upperBound;
    }
    instance.isOrdered = json.isOrdered;
    instance.isUnique = json.isUnique;
    if (json.lowerValue !== undefined) {
      instance.lowerValue = json.lowerValue;
    }
    if (json.upperValue !== undefined) {
      instance.upperValue = json.upperValue;
    }
    instance.isControl = json.isControl;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isControl == null) {
      errors.push({
        property: 'isControl',
        message: 'isControl is required',
        code: 'REQUIRED'
      });
    }
    if (this.isControl !== undefined) {
      if (typeof this.isControl !== 'boolean') {
        errors.push({
          property: 'isControl',
          message: 'isControl must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isControl
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPin): ValidationResult {
    if (instance instanceof Pin) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Pin(instance);
    return temp.validate();
  }
}
