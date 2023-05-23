const daoCommon = require('./common/daoCommon')

const productDao = {...daoCommon, ...require('./api/productDao')}

module.exports = {
    productDao
}