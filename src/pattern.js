// ==========================================================================================
// =====================================   pattern.js   =====================================
// ==========================================================================================
"use strict";

import { trace }          from './util/trace.js';
import { SHAPES, 
         RECTANGLE, CIRCLE,          
         NO_VALUE,
         ID, BG_COLOR, DESCRIPTION,
		 COMMON_ATTRIBUTES, COMMON_ATTRIBUTES_DEFAULTS,         
		 BaseShape
	   }                  from './shapes/base_shape.js';
import { RectangleShape } from './shapes/rectangle_shape.js';
import { CircleShape }    from './shapes/circle_shape.js';
import { UndefinedShape } from './shapes/undefined_shape.js';

const SHOW_GRID = "Show Grid";
const OPTIONS = [ [SHOW_GRID] ];

//-*-----------------------------------------------------------------------------------
//--------------------------------    Pattern class    --------------------------------
//-------------------------------------------------------------------------------------
const Pattern = class {
	constructor(p5_instance, attributes) {
		trace(">> new " + this.constructor.name);
		
		this.attributes  = (attributes == undefined) ? {} : attributes;
		
		this.id = this.getId();
		this.setAttribute(ID, this.id);
		
		this.p5          = p5_instance;
		this.options     = options;
		
		// let shape = new BaseShape();
		this.json_data   = {};
		this.cell_shapes = [];		
	} // constructor
	
	getId() {
		if (this.id != undefined) return this.id;
		
		let shape_type = this.constructor.name.replace('Shape', '');
		Pattern.instance_counts = (Pattern.instance_counts == undefined) ? 0 : Pattern.instance_counts;		
		this.id = this.constructor.name.toLowerCase() + '_' + Pattern.instance_counts;
		Pattern.instance_counts++;
		return this.id;
	} // Pattern.getId();
	
	loadJsonData(json_data) {
		trace(">> Pattern.loadJsonData()");
		if (json_data == undefined || json_data == null) {
			json_data = {};
		}	
		BaseShape.instance_counts = {};
		
		this.json_data = json_data;
	} // Pattern.loadJsonData()
	
	// Pattern.build()
    build() {
		trace(">> Pattern.build() " + this.id);
		
		let $P5 = this.p5;
		
		this.cell_shapes = [];
		this.clear();
		
		let new_shape = null;
		let keys = Object.keys(this.json_data);
		for (let i=0; i < keys.length; i++) {
			let key = keys[i];
		    trace("   key[" + i + "] : " + key);
			if (SHAPES.indexOf(key) != -1) {
				switch (key) {
					case RECTANGLE:
					    new_shape = new RectangleShape($P5);
						break;
					case CIRCLE:
					    new_shape = new CircleShape($P5);
						break;
					default:
					    new_shape = new UndefinedShape($P5);
						break;
				 }
			 }
			 this.cell_shapes.push(new_shape);
		}
	} // Pattern.build()
	
	// Pattern.draw()
    draw() {
		trace(">> Pattern.draw() " + this.id);
		
		let $P5 = this.p5;
		$P5.background(this.getAttribute(BG_COLOR));
		
		//this.setDefaultDrawMode();
		
		//for (let Z=MIN_Z; Z <= MAX_Z; Z++) {
		for (let i=0; i < this.cell_shapes.length; i++) {
		     let cell_shape = this.cell_shapes[i];
		//		//console.log("cell_column: " + cell_shape.cell_column + " cell_row: " + cell_shape.cell_row);
		     cell_shape.draw(Z);
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
	
	// Pattern.clear()
    clear() {
		trace(">> Pattern.clear() " + this.id);
	} // Pattern.clear()
	
	setAttribute(name, value) {
		this.attributes[name] = value;
	} // Pattern.setAttribute()
	
	getAttribute(name) {
		let attribute_value = NO_VALUE;
		if (this.attributes[name] == undefined) {
			attribute_value = (COMMON_ATTRIBUTES_DEFAULTS[name] == undefined) ? NO_VALUE : COMMON_ATTRIBUTES_DEFAULTS[name];
		}
		else { 
			attribute_value = this.attributes[name];
		}
		return attribute_value;
	} // Pattern.getAttribute()
}; // Pattern class
Pattern.instance_counts = undefined;

export { 
	Pattern 
} // exports of 'pattern.js'