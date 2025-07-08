/**
 * Implementation class for PackageImport
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class PackageImport extends DirectedRelationship implements IPackageImport {
  /**
   * importedPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public importedPackage!: string;

  /**
   * importingNamespace
   * 
   * @type Namespace
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite packageImport
   */
  public importingNamespace!: string;

  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [1..1]
   */
  public visibility!: VisibilityKind;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IPackageImport>) {
    super(init);

    this.importedPackage = init?.importedPackage ?? '';
    this.importingNamespace = init?.importingNamespace ?? '';
    this.visibility = init?.visibility!;
  }
  getImportedPackage(): string {
    return this.importedPackage;
  }

  setImportedPackage(value: string): void {
    this.importedPackage = value;
  }

  getImportingNamespace(): string {
    return this.importingNamespace;
  }

  setImportingNamespace(value: string): void {
    this.importingNamespace = value;
  }

  getVisibility(): VisibilityKind {
    return this.visibility;
  }

  setVisibility(value: VisibilityKind): void {
    this.visibility = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPackageImport {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      importedPackage: this.importedPackage,
      importingNamespace: this.importingNamespace,
      visibility: this.visibility,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.importedPackage = this.importedPackage;
    result.importingNamespace = this.importingNamespace;
    result.visibility = this.visibility;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): PackageImport {
    return new PackageImport(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPackageImport>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof PackageImport)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `PackageImport{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): PackageImport {
    const instance = new PackageImport();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.importedPackage = json.importedPackage;
    instance.importingNamespace = json.importingNamespace;
    instance.visibility = json.visibility;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.importedPackage == null) {
      errors.push({
        property: 'importedPackage',
        message: 'importedPackage is required',
        code: 'REQUIRED'
      });
    }
    if (this.importingNamespace == null) {
      errors.push({
        property: 'importingNamespace',
        message: 'importingNamespace is required',
        code: 'REQUIRED'
      });
    }
    if (this.visibility == null) {
      errors.push({
        property: 'visibility',
        message: 'visibility is required',
        code: 'REQUIRED'
      });
    }
    if (this.visibility !== undefined) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPackageImport): ValidationResult {
    if (instance instanceof PackageImport) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new PackageImport(instance);
    return temp.validate();
  }
}
