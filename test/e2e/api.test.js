import {
    jest,
    expect,
    test,
    describe  
} from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server'

describe('API E2E Test Suite', () => {
    test('GET / - should return an array', async () => {
        const response = await superTest(Server)
        .get('/')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        console.log('text', response.text)
    })

    test.todo('POST / - should save an item and return ok')
    test.todo('DELETE / - should delete all items and return ok')
})