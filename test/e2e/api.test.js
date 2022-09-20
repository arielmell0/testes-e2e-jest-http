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
        expect(data.length).toEqual(0)
        console.log('text', response.text)
    })

    test('POST / - should save an item and return ok', async () => {
        const response = await superTest(Server)
        .post('/')
        .send({
            nome: 'Ariel Oliveira de Mello',
            age: 20
        })
        const expectedResponse = { ok: 1 }
        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    })
    test.todo('DELETE / - should delete all items and return ok')
})