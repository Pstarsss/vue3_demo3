module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-var-requires": 0, // 解决 Require statement not part of import statement 在vue.config.js 里面的require的警告
        "@typescript-eslint/explicit-module-boundary-types": "off", // 解决 Missing return type on function 函数上缺少返回类型
        "@typescript-eslint/no-explicit-any": ["off"], // 关闭any类型的警告

        
        "indent": [
            'error', 
            4, 
            {
                SwitchCase: 1,
                flatTernaryExpressions: false,
                offsetTernaryExpressions: false,
                ignoreComments: false
            }
        ]// 保存代码的时候 缩进4个空格
    },
};
