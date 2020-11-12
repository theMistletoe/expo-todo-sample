module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  cacheDirectory: ".jest/cache"
}