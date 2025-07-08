/**
 * Implementation class for PackageMerge
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';
import { IPackageMerge } from './IPackageMerge';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class PackageMerge extends DirectedRelationship implements IPackageMerge {
  /**
   * mergedPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public mergedPackage!: string;

  /**
   * receivingPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite packageMerge
   */
  public receivingPackage!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IPackageMerge>) {
    super(init);

    this.mergedPackage = init?.mergedPackage ?? '';
    this.receivingPackage = init?.receivingPackage ?? '';
  }
  getMergedPackage(): string {
    return this.mergedPackage;
  }

  setMergedPackage(value: string): void {
    this.mergedPackage = value;
  }

  getReceivingPackage(): string {
    return this.receivingPackage;
  }

  setReceivingPackage(value: string): void {
    this.receivingPackage = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPackageMerge {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      mergedPackage: this.mergedPackage,
      receivingPackage: this.receivingPackage,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.mergedPackage = this.mergedPackage;
    result.receivingPackage = this.receivingPackage;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): PackageMerge {
    return new PackageMerge(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPackageMerge>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof PackageMerge)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `PackageMerge{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): PackageMerge {
    const instance = new PackageMerge();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.mergedPackage = json.mergedPackage;
    instance.receivingPackage = json.receivingPackage;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.mergedPackage == null) {
      errors.push({
        property: 'mergedPackage',
        message: 'mergedPackage is required',
        code: 'REQUIRED'
      });
    }
    if (this.receivingPackage == null) {
      errors.push({
        property: 'receivingPackage',
        message: 'receivingPackage is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPackageMerge): ValidationResult {
    if (instance instanceof PackageMerge) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new PackageMerge(instance);
    return temp.validate();
  }
}
