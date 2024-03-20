// =========================================================================================
// ===================================   base_shape.js   ===================================
// =========================================================================================
"use strict";

import { trace } from '../util/trace.js';

const RECTANGLE   = "Rectangle";
const CIRCLE      = "Circle";
const SHAPES      = [ RECTANGLE, CIRCLE ];

const NO_VALUE    = "None";

const ID          = "Id";
const BG_COLOR    = "BackgroundColor";
const DESCRIPTION = "Description";
const COMMON_ATTRIBUTES          = [ 
	[ID], [BG_COLOR], [DESCRIPTION] 
];
const COMMON_ATTRIBUTES_DEFAULTS = { 
	[BG_COLOR]: "FF0000"
};

const TYPE = "Type";
const SHAPE_ATTRIBUTES          = [ 
	[TYPE] 
];
const SHAPE_ATTRIBUTES_DEFAULTS = { 
	[TYPE]: RECTANGLE
};

//-------------------------------------------------------------------------------------
//-------------------------------    BaseShape class    -------------------------------
//-------------------------------------------------------------------------------------
const BaseShape = class {
	constructor(p5_instance, attributes) {
		trace(">> new " + this.constructor.name);
		
		this.id = this.getId();
		this.setAttribute(ID, id);
		
		this.attributes = (attributes == undefined) ? {} : attributes;
	} // constructor

	getId() {
		if (this.id != undefined) return this.id;
		
		let shape_type = this.constructor.name.replace('Shape', '');
		BaseShape.instance_counts[shape_type] = (BaseShape.instance_counts[shape_type] == undefined) ? 0 : BaseShape.instance_counts[shape_type];	
		this.id = shape_type.toLowerCase() + '_' + BaseShape.instance_counts[shape_type];
		BaseShape.instance_counts[shape_type]++;
		return this.id;
	} // BaseShape.getId()
	
	setAttribute(name, value) {
		this.attributes[name] = value;
	} // BaseShape.setAttribute()
	
	getAttribute(name) {
		let attribute_value = NO_VALUE;
		if (this.attributes[name] == undefined) {
			attribute_value = (COMMON_ATTRIBUTES_DEFAULTS[name] == undefined) ? undefined : COMMON_ATTRIBUTES_DEFAULTS[name];
			if (attribute_value == undefined) {
				attribute_value = (SHAPE_ATTRIBUTES_DEFAULTS[name] == undefined) ? undefined : SHAPE_ATTRIBUTES_DEFAULTS[name];
			}
			attribute_value = (attribute_value == undefined) ? NO_VALUE : attribute_value;
		}
		else { 
			attribute_value = this.attributes[name];
		}
		return attribute_value;
	} // Pattern.getAttribute()	
	
	draw(Z) {
		trace(">> BaseShape.draw() " + this.id);
	} // BaseShape.draw()
}; // BaseShape class
BaseShape.instance_counts = {};

export { 
    NO_VALUE,
	SHAPES, RECTANGLE, CIRCLE,	
	
	ID, BG_COLOR, DESCRIPTION,
	COMMON_ATTRIBUTES, COMMON_ATTRIBUTES_DEFAULTS,
	
	TYPE,
    SHAPE_ATTRIBUTES, SHAPE_ATTRIBUTES_DEFAULTS,
	BaseShape 
} // exports of 'base_shape.js'