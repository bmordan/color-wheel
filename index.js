class Color {
    constructor(freq) {
        this.freq = freq
        this.step = 0
    }
    _toHex(c) {
        const rgb = c.toString(16)
        return rgb.length === 1 ? `0${rgb}` : rgb
    }
    hex(r,g,b) {
        return `#${this._toHex(r)}${this._toHex(g)}${this._toHex(b)}`
    }
    rgb(r,g,b) {
        return `rgb(${r},${g},${b})`
    }
    next(format = 'hex') {
        this.step += 1
        const r = Math.round(Math.sin(this.freq * this.step + 0) * 127 + 128)
        const g = Math.round(Math.sin(this.freq * this.step + 2) * 127 + 128)
        const b = Math.round(Math.sin(this.freq * this.step + 4) * 127 + 128)
        return this[format](r,g,b)
    }
}

module.exports = Color