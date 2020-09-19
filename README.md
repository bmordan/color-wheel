# Color-Wheel
![color samples](https://user-images.githubusercontent.com/4499581/93690291-85031480-face-11ea-88bc-ec13b6cda325.jpg)
```javascript
const Color = require('color-wheel')
const color = new Color(.7)
color.get() // '#d2b601'
color.get() // '#fd601e'
color.get() // '#ee1869'
color.get() // '#ab01bf'
color.get() // '#5326f7'
color.get() // '#1175f7'
```
## Usage

The argument you provide to `new Color` is the frequency of the sine wave that is rotating the red, green and blue color values. Adjust this frequency to a low value for colors to be quite close to each other. Higher frequencies produce greater contrast between colors.

