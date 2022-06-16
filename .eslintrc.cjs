/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  "overrides": [
    {
      "files": [
        "cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ],
  "rules": {
    // "vue/max-len": ["error", {
    //   "ignorePattern": 'd="([\\s\\S]*?)"'
    // }]
    // "vue/max-len": ["error", {
    //   "code": 80,
    //   "template": 80,
    //   "tabWidth": 2,
    //   "comments": 80,
    //   "ignorePattern": "d=\"([\\s\\S]*?)\"",
    //   "ignoreComments": false,
    //   "ignoreTrailingComments": false,
    //   "ignoreUrls": false,
    //   "ignoreStrings": false,
    //   "ignoreTemplateLiterals": false,
    //   "ignoreRegExpLiterals": false,
    //   "ignoreHTMLAttributeValues": false,
    //   "ignoreHTMLTextContents": false,
    // }]
  }
}
