module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/style.scss";`
            }
        }
    },

    lintOnSave: false
}
