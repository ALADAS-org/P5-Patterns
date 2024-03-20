// =========================================================================================
// =================================   undefined_shape.js   ================================
// =========================================================================================
"use strict";

import { BaseShape } from './base_shape.js';

//--------------------------------------------------------------------------------------
//-----------------------------    UndefinedShape class    -----------------------------
//--------------------------------------------------------------------------------------
const UndefinedShape = class extends BaseShape {
	constructor(p5_instance, options) {
		super(p5_instance, options);
	} // constructor

	draw(Z) {
		trace(">> UndefinedShape.draw() " + this.id);
	} // UndefinedShape.draw()
}; // UndefinedShape class

export { 
	UndefinedShape 
} // exports of 'undefined_shape.js'