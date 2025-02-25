import styled from 'styled-components'
import { Props } from '.'

export const TypeTitle = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  font-family: ${(props) =>
    props.fontFamily === 'Gloock' ? 'Gloock' : 'Lato'};
  font-weight: bold;
`
