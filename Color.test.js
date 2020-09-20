const Color = require('./index')

describe('Color', () => {
    test('with frequency .2', () => {
        const color = new Color(.2)
        expect(color.next()).toBe('#99e711')
        expect(color.next()).toBe('#b1d607')
    })
    test('with frequency .9', () => {
        const color = new Color(.9)
        expect(color.next()).toBe('#e39e03')
        expect(color.next()).toBe('#fc3245')
    })
    test('as rgb values', () => {
        const colorRgb = new Color(.5)
        const colorHex = new Color(.5)
        expect(colorRgb.next('rgb')).toEqual('rgb(189,204,4)')
        expect(colorHex.next('hex')).toEqual('#bdcc04')
    })
})