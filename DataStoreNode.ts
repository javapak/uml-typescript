/**
 * Implementation class for DataStoreNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends CentralBufferNode
 */
import { CentralBufferNode } from './CentralBufferNode';
import { Comment } from './Comment';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { ICentralBufferNode } from './ICentralBufferNode';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDataStoreNode } from './IDataStoreNode';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IState } from './IState';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class DataStoreNode extends CentralBufferNode implements IDataStoreNode {
  // Inherited from CentralBufferNode
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from CentralBufferNode
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from CentralBufferNode
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from CentralBufferNode
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from CentralBufferNode
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from CentralBufferNode
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from CentralBufferNode
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from CentralBufferNode
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  // Inherited from CentralBufferNode
  /**
   * inState
   * 
   * @type State
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public inState: Set<IState | string> = new Set();

  // Inherited from CentralBufferNode
  /**
   * isControlType
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isControlType!: boolean;

  // Inherited from CentralBufferNode
  /**
   * ordering
   * 
   * @type ObjectNodeOrderingKind
   * @multiplicity [1..1]
   */
  public ordering!: any;

  // Inherited from CentralBufferNode
  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public selection?: IBehavior | string = undefined;

  // Inherited from CentralBufferNode
  /**
   * upperBound
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperBound?: IValueSpecification = undefined;

  constructor(init?: Partial<IDataStoreNode>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDataStoreNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };


    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DataStoreNode {
    return new DataStoreNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDataStoreNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DataStoreNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DataStoreNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DataStoreNode {
    const instance = new DataStoreNode();

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

  static validate(instance: IDataStoreNode): ValidationResult {
    if (instance instanceof DataStoreNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DataStoreNode(instance);
    return temp.validate();
  }
}
