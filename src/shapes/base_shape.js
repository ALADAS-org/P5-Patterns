// =========================================================================================
// ===================================   base_shape.js   ===================================
// =========================================================================================
"use strict";

import { trace } from '../util/trace.js';

const RECTANGLE = "Rectangle";
const CIRCLE    = "Circle";
const RECTANGLE = [ [RECTANGLE], [CIRCLE] ];

//-------------------------------------------------------------------------------------
//-------------------------------    BaseShape class    -------------------------------
//-------------------------------------------------------------------------------------
const BaseShape = class {
	constructor(p5_instance, options) {
		trace(">> new " + this.constructor.name);
		let id = this.getId();
	} // constructor

	getId() {
		if (this.id != undefined) return this.id;
		
		let shape_type = this.constructor.name.replace('Shape', '');
		if (BaseShape.instance_counts[shape_type] == undefined) {
			BaseShape.instance_counts[shape_type] = 0;
		}
		BaseShape.instance_counts[shape_type]++;
		this.id = shape_type.toLowerCase() + '_' + BaseShape.instance_counts[shape_type];
		return this.id;
	} // getId();
	
	draw(Z) {
		trace(">> BaseShape.draw() " + this.id);
	} // BaseShape.draw()
}; // BaseShape class
BaseShape.instance_counts = {};

export { 
	SHAPES, RECTANGLE, CIRCLE, 
	BaseShape 
} // exports of 'base_shape.js'