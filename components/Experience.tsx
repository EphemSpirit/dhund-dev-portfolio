import React from 'react'
import { Flex, Text, Divider } from "@chakra-ui/react"
import ExperienceTabs from './ExperienceTabs'

const Experience = () => {
  return (
    <Flex width="100%" justify="center">
        <Flex width="50%" direction="column" justify="center">
            <Text color="brand.bodyText" fontSize="2em" mb={4} width="100%">Experience</Text>
            <Divider mb={4} />
            <ExperienceTabs />
        </Flex>
    </Flex>
  )
}

export default Experience