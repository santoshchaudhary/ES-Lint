module.exports = {
    create(context) {
        function findComments(comment) {
            if(comment.value.toLowerCase().indexOf('fixme') !== -1) {
                context.report(comment, 'Fixme not alowed in the comment!');
            }
            if(comment.value.toLowerCase().indexOf('todo') !== -1) {
                context.report(comment, 'TODO not alowed in the comment!');
            }

            // another way
            // if(context.options.indexOf(comment.value.toLowerCase()) >= 0) {
            //     context.report(comment, `${comment.value} is not allowed in the comments`);
            // }
        }
        return {
            Program(node) {
                let sourceCode = context.getSourceCode();
                const comments = sourceCode.getAllComments();
                for (let comment of comments) {
                    findComments(comment);
                }
            },
        };
    },
};