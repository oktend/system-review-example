// why is 'require' used instead of 'import'?
const {foo} = require('./foo')
const {bar} = require('./doubtful/bar')

function main() {
    console.info('main');
    foo();
    bar();
}

main()
