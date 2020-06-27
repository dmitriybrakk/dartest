module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?|js?|jsx?)$',
    transform: { '\\.(js|jsx|ts|tsx)?$': 'babel-jest' },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'd.ts'],
    testPathIgnorePatterns: ['src/e2e'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^typings/(.*)$': '<rootDir>/typings/$1',
    },
    transformIgnorePatterns: ['node_modules/[^/]+?/(?!(es|node_modules)/)'],
};
