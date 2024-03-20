// ==========================================================================================
// =====================================   pattern.js   =====================================
// ==========================================================================================
"use strict";

import { trace }     from './util/trace.js';
import { BaseShape } from './shapes/base_shape.js';

const SHOW_GRID = "Show Grid";
const OPTIONS = [ [SHOW_GRID] ];

//-*-----------------------------------------------------------------------------------
//--------------------------------    Pattern class    --------------------------------
//-------------------------------------------------------------------------------------
const Pattern = class {
	constructor(p5_instance, options) {
		trace(">> new " + this.constructor.name);
		
		this.p5      = p5_instance;
		this.options = options;
		
		// let shape = new BaseShape();
		this.cell_shapes = [];
	} // constructor
	
	// Pattern.build()
    build() {
		trace(">> Pattern.build()");
	} // Pattern.build()
	
	// Pattern.draw()
    draw() {
		trace(">> Pattern.draw()");
		
		let $P5 = this.p5;
		$P5.background(this.getBackgroundColor());
		
		//this.setDefaultDrawMode();
		
		//for (let Z=MIN_Z; Z <= MAX_Z; Z++) {
			for (let i=0; i < this.cell_shapes.length; i++) {
		        let cell_shape = this.cell_shapes[i];
		//		//console.log("cell_column: " + cell_shape.cell_column + " cell_row: " + cell_shape.cell_row);
		//		cell_shape.draw(Z);
		    }
		//} // for Z in [MIN_Z..MAX_Z]
		
		if (this.options[SHOW_GRID]) {
		//	for (let y=this.y_offset; y < $P5.height; y+=this.cell_size) {
		//		for(let x=this.x_offset; x < $P5.width; x+=this.cell_size) {
		//			this.drawCellGrid(x, y);
		//		}
		//	}
		}
	} // Pattern.draw()
	
	getBackgroundColor() {
		return "#FF0000";
	} // Pattern.getBackgroundColor()
}; // Pattern class

export { 
	Pattern 
} // exports of 'pattern.js'