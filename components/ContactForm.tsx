import React from 'react'
import { ComponentUniversal } from '../typiings';
import { Text, FormLabel, Flex, Divider, Spacer, Button, Input, Textarea } from "@chakra-ui/react";
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

function ContactForm({ mobile }: ComponentUniversal) {
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <Flex width="100%" justify='center' mb={12}>
        <Flex width="50%" direction="column" justify="center">
            <Text color="brand.bodyText" fontSize="2em" mb={4} width="100%">
                <div id="contact">
                  Get in Touch!
                </div>
            </Text>
            <Divider mb={4} />
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <Flex direction="row" width="100%" justify="around" mb={4}>
                    <Flex direction="column">
                        <FormLabel color="brand.subBodyText">First Name</FormLabel>
                        <Input type="text" {...register("firstName")} style={{ width: "20em" }} backgroundColor="white"/>
                    </Flex>
                    <Spacer />
                    <Flex direction="column">
                        <FormLabel color="brand.subBodyText">Last Name</FormLabel>
                        <Input type="text" {...register("lastName")} style={{ width: "20em" }} backgroundColor="white"/>
                    </Flex>
                </Flex>
                <FormLabel color="brand.subBodyText">Email</FormLabel>
                <Input type="email" {...register("email")} style={{ width: "100%", marginBottom: "1em" }} backgroundColor="white"/>
                <FormLabel color="brand.subBodyText">Message</FormLabel>
                <Textarea backgroundColor="white" padding={4} {...register("message")} style={{ width: "100%", height: "24em" }}/>
                <Button type="submit" backgroundColor="brand.bodyText" color="white" width="25%" mt={4}>Email Me!</Button>
            </form>
        </Flex>
    </Flex>
  )
}

export default ContactForm