const sketch = require('sketch');
const UI = require('sketch/ui');

var onRun = function(context) {
	var layers = context.document.currentPage().children();
	var total = 0;
	for (var i = 0; i < [layers count]; i++) {
		var layer = [layers objectAtIndex:i];
		if ([layer isLocked]) {
			[layer setIsLocked: false];
			total += 1;
		}
	}
	UI.message(total + " unlocked.")
};