/**
 * Implementation class for EModelElement
 * 
 * @since UML 2.5
 * @package ecore
 * @abstract
 */
import { EAnnotation } from './EAnnotation';
import { IEAnnotation } from './IEAnnotation';
import { IEModelElement } from './IEModelElement';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class EModelElement implements IEModelElement {
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  constructor(init?: Partial<IEModelElement>) {
    this.eAnnotations = init?.eAnnotations ?? [];
  }
  getEAnnotations(): Record<string, any>[] {
    return this.eAnnotations;
  }

  setEAnnotations(value: Record<string, any>[]): void {
    this.eAnnotations = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IEModelElement {
    return {
      eAnnotations: this.eAnnotations,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const result: any = {};

    result.eAnnotations = [...this.eAnnotations];

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): EModelElement {
    return new EModelElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IEModelElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof EModelElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `EModelElement{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): EModelElement {
    const instance = new EModelElement();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.eAnnotations) {
    }
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IEModelElement): ValidationResult {
    if (instance instanceof EModelElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new EModelElement(instance);
    return temp.validate();
  }
}
