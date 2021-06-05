const sketch = require('sketch');
const UI = require('sketch/ui');

var onRun = function(context) {
	var layers = context.document.currentPage().children();
	var count = 0;
	for (var i = 0; i < [layers count]; i++) {
		var layer = [layers objectAtIndex:i];
		if ([layer isLocked]) {
			[layer setIsLocked: false];
			count += 1;
		}
	}
	UI.message(count + " unlocked.")
};