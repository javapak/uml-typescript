/**
 * Interface for Device
 * 
 * @since UML 2.5
 * @package uml
 * @extends Node
 */
import { INode } from './INode';

export interface IDevice extends INode {
}

// Type aliases for Device
export type DeviceInput = Partial<IDevice>;
export type DeviceOutput = IDevice;
