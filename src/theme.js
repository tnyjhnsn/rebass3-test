export const blue = '#1269d3'
export const lightgrey = '#dbdbdb'
export const darkgrey = '#999'
export const textgrey = '#323232'

export const theme = {
  breakpoints: ['38em', '56em', '75em', '113em'],
  fontSizes: [
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '2rem',
    '2.4rem',
    '3.2rem',
    '4.8rem',
    '6.4rem',
  ],
  space: [
    0,
    '0.4rem',
    '0.8rem',
    '1.6rem',
    '3.2rem',
    '6.4rem',
    '12.8rem',
    '25.6rem',
  ],
  borders: [0, '0.1rem solid'],
  radii: [0, '0.5rem', '5rem'],
  colors: {
    blue,
    lightgrey,
    darkgrey,
    textgrey,
  },
  buttons: {
    cancel: {
      background: 'transparent',
      color: textgrey,
      border: '0.1rem solid',
      borderColor: lightgrey,
      '&:hover': {
        borderColor: darkgrey,
      },
    },
    ok: {},
  },
}
