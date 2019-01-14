import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Card from './Card'
import { Flex } from 'rebass'

export default class extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Flex justifyContent="center">
            <Card />
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
