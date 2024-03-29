module.exports = {
    create(context) {
        return {
            CallExpression(node) {
                if(node.callee.name === 'getPayments') {
                    context.report({
                        node: node,
                        message: 'getPayments is deprecated. use getLatestPayments',

                        // --fix custom rule set 
                        // fix: function(fixer) {
                        //     return fixer.replaceText(node.callee, 'getLatestPayments')
                        // }
                    });
                }
            }
        }
    }
}