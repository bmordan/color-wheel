# Next-Color
![color samples](https://user-images.githubusercontent.com/4499581/93690291-85031480-face-11ea-88bc-ec13b6cda325.jpg)
```javascript
const Color = require('next-color')
const color = new Color(.7)
color.next() // '#d2b601'
color.next() // '#fd601e'
color.next() // '#ee1869'
color.next() // '#ab01bf'
color.next() // '#5326f7'
color.next() // '#1175f7'
```
## Usage

The argument you provide to `new Color(freq: Number)` is the frequency of the sine wave that is rotating the red, green and blue color values. Adjust this frequency to a low value for colors to be quite close to each other. Higher frequencies produce greater contrast between colors.

```javascript
color.next('hex') // '#1175f7'
color.next('rgb') // 'rgb(17, 117, 247)'
```

