module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.scss$": "jest-css-modules-transform" // Agrega esta línea
    },
    moduleNameMapper: {
        '\.(gif|ttf|eot|svg|png)$': '<rootDir>/tests/__mocks__/fileMock.js',
    },
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

