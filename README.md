# blaze-rendering-issue
Blaze.View.prototype.onViewReady uses Tracker.afterFlush to execute the rendered callbacks. This opens up the possibility of a parent's rendered callback to run before a child's one, even though the child already rendered.
