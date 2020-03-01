const {foo} = require('./foo')
const {bar} = require('./bar')

function main() {
    console.info('main');
    foo();
    bar();
}

main()
