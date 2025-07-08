/**
 * Implementation class for ElementImport
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ElementImport extends DirectedRelationship implements IElementImport {
  /**
   * alias
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public alias?: string;

  /**
   * importedElement
   * 
   * @type PackageableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public importedElement!: string;

  /**
   * importingNamespace
   * 
   * @type Namespace
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite elementImport
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


  constructor(init?: Partial<IElementImport>) {
    super(init);

    this.alias = init?.alias;
    this.importedElement = init?.importedElement ?? '';
    this.importingNamespace = init?.importingNamespace ?? '';
    this.visibility = init?.visibility!;
  }
  getAlias(): string | undefined {
    return this.alias;
  }

  setAlias(value: string | undefined): void {
    this.alias = value;
  }

  getImportedElement(): string {
    return this.importedElement;
  }

  setImportedElement(value: string): void {
    this.importedElement = value;
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
  toJSON(): IElementImport {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.alias !== undefined && { alias: this.alias }),
      importedElement: this.importedElement,
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

    if (this.alias !== undefined) {
      result.alias = this.alias;
    }
    result.importedElement = this.importedElement;
    result.importingNamespace = this.importingNamespace;
    result.visibility = this.visibility;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ElementImport {
    return new ElementImport(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IElementImport>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ElementImport)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ElementImport{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ElementImport {
    const instance = new ElementImport();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.alias !== undefined) {
      instance.alias = json.alias;
    }
    instance.importedElement = json.importedElement;
    instance.importingNamespace = json.importingNamespace;
    instance.visibility = json.visibility;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.alias !== undefined) {
      if (typeof this.alias !== 'string') {
        errors.push({
          property: 'alias',
          message: 'alias must be a string',
          code: 'TYPE_ERROR',
          value: this.alias
        });
      }
    }
    if (this.importedElement == null) {
      errors.push({
        property: 'importedElement',
        message: 'importedElement is required',
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

  static validate(instance: IElementImport): ValidationResult {
    if (instance instanceof ElementImport) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ElementImport(instance);
    return temp.validate();
  }
}
