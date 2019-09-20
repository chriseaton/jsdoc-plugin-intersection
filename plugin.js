/**
 * Converts TypeScript intersection types (joined with an "&") to a JSDoc type union "|" allowing the file to be
 * processed downstream. This allows you to use the amperstand "&" in your code.
 *
 * Specifically, this creates a compatibility between Visual Studio Code's TypeScript documentation and JSDoc, as
 * Visual Studio Code's parser uses amperstands for type unions, and JSDoc uses pipes.
 * @module intersection
 */
exports.handlers = {
    jsdocCommentFound(jsdocComment, parser) {
        let tags = ['augments', 'extends', 'type', 'mixes', 'property', 'prop', 'param', 'typedef', 'returns'];
        for (let tag of tags) {
            let r = new RegExp('^.+@' + tag + '\\s*\\{(?:.+&.+)\\s*\\}', 'gm');
            let match = r.exec(jsdocComment.comment);
            if (match && match.length) {
                let len = match[0].length;
                let before = jsdocComment.comment.substr(0, match.index);
                let after = jsdocComment.comment.substr(match.index + len);
                let replaced = match[0].replace('&', '|');
                jsdocComment.comment = before + replaced + after;
            }
        }
    }
};
