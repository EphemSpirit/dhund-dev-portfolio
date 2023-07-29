import React from 'react'
import { ComponentUniversal } from '../typiings';
import { Text, Grid, GridItem, Flex, Divider } from "@chakra-ui/react";

function ContactForm({ mobile }: ComponentUniversal) {
  return (
    <Flex width="100%" justify='center' mb={12}>
        <Flex width="75%" direction="column" justify="center">
            <div>Contact</div>
        </Flex>
    </Flex>
  )
}

export default ContactForm