// ========================================================================================
// ==================================   circle_shape.js   =================================
// ========================================================================================
"use strict";

import { BaseShape } from './base_shape.js';

//---------------------------------------------------------------------------------------
//-------------------------------    CircleShape class    -------------------------------
//---------------------------------------------------------------------------------------
const CircleShape = class extends BaseShape {
	constructor(p5_instance, options) {
		super(p5_instance, options);
	} // constructor

	draw(Z) {
		trace(">> CircleShape.draw() " + this.id);
	} // RectangleShape.draw()
}; // RectangleShape class

export { 
	CircleShape 
} // exports of 'circle_shape.js'