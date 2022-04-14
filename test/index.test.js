import {
    DEFAULT_ENDPOINT,
    TEST_API_KEY,
    TEST_NODE_ID,
    TEST_APPLICATION_ID,
    DEFAULT_PROFILE,
} from '../src/constants'
import KonfigsSdk from '../index.js'
import expect from 'expect'

test('Test Working!', () => {
    expect(true).toBe(true)
})

// Test EnkiSdk with sample fetch request
test('Test KonfigsSdk with sample fetch request', async () => {
    const konfigsSdk = new KonfigsSdk(
        TEST_API_KEY,
        TEST_APPLICATION_ID,
        DEFAULT_PROFILE,
        DEFAULT_ENDPOINT
    )
    const data = await konfigsSdk.getHydratedConfigs(TEST_NODE_ID)
    expect(
        data?.data?.filter(
            (d) => d.key === 'protocol' && d.value?.value === 'https'
        ).length > 0
    ).toBe(true)
})

// Test EnkiSdk pull flattened configs
test('Test KonfigsSdk pull flattened configs', async () => {
    const konfigsSdk = new KonfigsSdk(
        TEST_API_KEY,
        TEST_APPLICATION_ID,
        DEFAULT_PROFILE,
        DEFAULT_ENDPOINT
    )
    const data = await konfigsSdk.getFlattenedConfigs(TEST_NODE_ID)
    expect(data?.protocol).toBe('https')
})
