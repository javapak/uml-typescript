/**
 * Implementation class for ProtocolConformance
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { Comment } from './Comment';
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElement } from './IElement';
import { IProtocolConformance } from './IProtocolConformance';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class ProtocolConformance extends DirectedRelationship implements IProtocolConformance {
  /**
   * generalMachine
   * 
   * @type ProtocolStateMachine
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public generalMachine!: IProtocolStateMachine | string;

  /**
   * specificMachine
   * 
   * @type ProtocolStateMachine
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite conformance
   */
  public specificMachine!: IProtocolStateMachine | string;

  // Inherited from DirectedRelationship
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from DirectedRelationship
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<IProtocolConformance>) {
    super(init);
    this.generalMachine = init?.generalMachine!;
    this.specificMachine = init?.specificMachine!;
  }
  getGeneralMachine(): IProtocolStateMachine | string {
    return this.generalMachine;
  }

  setGeneralMachine(value: IProtocolStateMachine | string): void {
    this.generalMachine = value;
  }

  getSpecificMachine(): IProtocolStateMachine | string {
    return this.specificMachine;
  }

  setSpecificMachine(value: IProtocolStateMachine | string): void {
    this.specificMachine = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IProtocolConformance {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      generalMachine: this.generalMachine,
      specificMachine: this.specificMachine,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.generalMachine = this.generalMachine;
    result.specificMachine = this.specificMachine;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ProtocolConformance {
    return new ProtocolConformance(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IProtocolConformance>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ProtocolConformance)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ProtocolConformance{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ProtocolConformance {
    const instance = new ProtocolConformance();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.generalMachine = json.generalMachine;
    instance.specificMachine = json.specificMachine;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.generalMachine == null) {
      errors.push({
        property: 'generalMachine',
        message: 'generalMachine is required',
        code: 'REQUIRED'
      });
    }
    if (this.specificMachine == null) {
      errors.push({
        property: 'specificMachine',
        message: 'specificMachine is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IProtocolConformance): ValidationResult {
    if (instance instanceof ProtocolConformance) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ProtocolConformance(instance);
    return temp.validate();
  }
}
