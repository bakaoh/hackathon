/* ------------------------- External Dependencies -------------------------- */
// import idx from './idx'
import React from 'react';
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
import Image from 'atoms/Image'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props ? null :
<Box 
  ta='center'
  py={25}
>
  <Heading level={[3,4]} f={[3]}>
    Login To Reveal Action
  </Heading>
  {
  !props.status ? null : 
  <Button 
    onClick={()=>props.uPortGetAttestCredentialsRequest(props.data.address)} 
    gradient="cherry"
  >
    Request 100 PAK Tokens
  </Button>
  }
</Box>