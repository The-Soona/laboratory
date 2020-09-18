'use strict';

class StrontiumResolverPlugin {
  constructor(source, target) {
    this.source = source || 'resolve';
    this.target = target || 'resolve';
  }
  apply(resolver) {
    const target = resolver.ensureHook(this.target);
    resolver.getHook(this.source).tapAsync('StrontiumResolver', (request, context, callback) => {
      console.log('--> StrontiumResolver', request, context, callback);
      // DO NOTHING, JUST PRINT OUT
      callback();
    });
	}
}

module.exports = StrontiumResolverPlugin;
