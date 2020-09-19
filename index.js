class Color {
    constructor(freq) {
        this.freq = freq
        this.step = 0
    }
    _toHex(c) {
        const rgb = c.toString(16)
        return rgb.length === 1 ? `0${rgb}` : rgb
    }
    get() {
        this.step += 1
        const r = Math.round(Math.sin(this.freq * this.step + 0) * 127 + 128)
        const g = Math.round(Math.sin(this.freq * this.step + 2) * 127 + 128)
        const b = Math.round(Math.sin(this.freq * this.step + 4) * 127 + 128)
        return `#${this._toHex(r)}${this._toHex(g)}${this._toHex(b)}`
    }
}

module.exports = Color