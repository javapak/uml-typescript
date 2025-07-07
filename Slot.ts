/**
 * Implementation class for Slot
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Comment } from './Comment';
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IInstanceSpecification } from './IInstanceSpecification';
import { ISlot } from './ISlot';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';

export class Slot extends Element implements ISlot {
  /**
   * definingFeature
   * 
   * @type StructuralFeature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public definingFeature!: IStructuralFeature | string;

  /**
   * value
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  public value: IValueSpecification[] = [];

  /**
   * owningInstance
   * 
   * @type InstanceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite slot
   */
  public owningInstance!: IInstanceSpecification | string;

  // Inherited from Element
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Element
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<ISlot>) {
    super(init);
    this.definingFeature = init?.definingFeature!;
    this.value = init?.value ?? [];
    this.owningInstance = init?.owningInstance!;
  }
  getDefiningFeature(): IStructuralFeature | string {
    return this.definingFeature;
  }

  setDefiningFeature(value: IStructuralFeature | string): void {
    this.definingFeature = value;
  }

  getValue(): IValueSpecification[] {
    return this.value;
  }

  setValue(value: IValueSpecification[]): void {
    this.value = value;
  }

  getOwningInstance(): IInstanceSpecification | string {
    return this.owningInstance;
  }

  setOwningInstance(value: IInstanceSpecification | string): void {
    this.owningInstance = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ISlot {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      definingFeature: this.definingFeature,
      value: this.value,
      owningInstance: this.owningInstance,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.definingFeature = this.definingFeature;
    result.value = [...this.value];
    result.owningInstance = this.owningInstance;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Slot {
    return new Slot(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ISlot>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Slot)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Slot{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Slot {
    const instance = new Slot();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.definingFeature = json.definingFeature;
    if (json.value && Array.isArray(json.value)) {
      instance.value = [...json.value];
    }
    instance.owningInstance = json.owningInstance;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.definingFeature == null) {
      errors.push({
        property: 'definingFeature',
        message: 'definingFeature is required',
        code: 'REQUIRED'
      });
    }
    if (this.value) {
    }
    if (this.owningInstance == null) {
      errors.push({
        property: 'owningInstance',
        message: 'owningInstance is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ISlot): ValidationResult {
    if (instance instanceof Slot) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Slot(instance);
    return temp.validate();
  }
}
