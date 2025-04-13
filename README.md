## P5-patterns 0.0.20
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/Truchet_PieQuarter.png) 
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/Truchet_C64.png) 
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/PolygramDemo.png)   

Description    
This is an extension for `P5.js` (2D client side drawing library).
The purpose of this extension is to ease the generation of tiled/wallpaper/grid patterns. The pattern design is described by a `JSON` file (e.g. `Truchet_c64.json`) 

1. Release Notes    
   + 1.1. `0.0.20`: added `Polygram` shape (`Polygon` an `N-star`) 

2. Usage    
   + 2.1. Install    
   * Open a Command Line (cmd.exe) 
   * Input these command: 
       * `git clone https://github.com/ALADAS-org/p5-Patterns.git`
       * `cd p5-Patterns`
       * `npm install`        
   +2.2. Launch a local _Http server_ with `run.bat` script
   +2.3. Double click on `demo`: it's a URL shortcut (`128.0.0.1:8080/`)

3. Pattern language grammar    

   + _Name_    
   pattern's name, optional but useful if you want to display it in the title bar or status bar
   
   + _Description_    
   Explains the pattern design, typically it may provide URL(s) to document the principle used (e.g. _Truchet_
   
   + _Categories_    
   Used to classify patterns (e.g. _Truchet_)
   
   + _GridSize_    
   _Grid_ size in _Cell_ unit, the number of _Cells_ in a row (`width`) and column (`height`) of the _Grid_ (e.g. `{ "width": 27, "height": 15 }`)
   
   + _CellSize_    
   _Cell_ size in _pixel_ unit (e.g. `{ "width": 20, "height": 20 }`)
   
   + _MaxCellValue_    
   Each _Cell_ should have a _Value_ (which is typically random), thus _MaxCellValue_ defines the last included version of the _values interval_ (e.g. [0..7], the first value of the interval is always 0)  
   
   + _BackgroundColor_    
   Defines the _Background color_ of the _Grid_ (e.g. `#000000` for Black)
   
   + _Shapes_    
   Defines the _Shapes_ for each possible _Cell value_ (e.g. `[0..MaxCellValue]`). 
   Please find below the _Shapes definitions_ for the `Truchet_C64.json` pattern.    
   Available shapes: `Line`, `Rectangle`, `Ellipse` (`Ellipse` and `Arc of Ellipse`), `Polygram` (`Polygon` an `N-star`)
```
   "Shapes": {
      "0": { "Shape": "Line", "Start": "NW", "End": "SE", 
             "Color": "#ffffff", "FillColor": "#000000", "Thickness": 4 },

      "1": { "Shape": "Line", "Start": "SW", "End": "NE", 
             "Color": "#ffffff", "FillColor": "#000000", "Thickness": 4 }			  
   }
```

Note: To force refresh it may be needed to use `CTRL F5` to force refresh of the Browser cache. In some cases it's better to close and restart the local _Http server_ 

  