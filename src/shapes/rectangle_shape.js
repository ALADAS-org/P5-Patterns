// =========================================================================================
// =================================   rectangle_shape.js   ================================
// =========================================================================================
"use strict";

import { BaseShape } from './base_shape.js';

//--------------------------------------------------------------------------------------
//-----------------------------    RectangleShape class    -----------------------------
//--------------------------------------------------------------------------------------
const RectangleShape = class extends BaseShape {
	constructor(p5_instance, options) {
		super(p5_instance, options);
	} // constructor

	draw(Z) {
		trace(">> RectangleShape.draw() " + this.id);
	} // RectangleShape.draw()
}; // RectangleShape class

export { 
	RectangleShape 
} // exports of 'rectangle_shape.js'