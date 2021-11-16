import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'


const Plans = () => {
    return (
<>
<Box align="center" bgColor="#F1F1F1" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Smithville plans and deals</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="black" color="#fff" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet + Voice </Heading>

        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" my="-25px">72</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Image w="100%" h="7px" src="/color-underline.svg"/>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    1 Gbps Upload & Download
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Free Nationwide Calling 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Contract 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="black" color="#fff" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet + Security</Heading>

        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" my="-25px">116</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >95</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Image w="100%" h="7px" src="/color-underline.svg"/>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Good for 4+ connected devices 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Includes wireless router  
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Rapid HD video download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="black" color="#fff" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet + Voice + Security</Heading>

        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" my="-25px">121</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >95</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Image w="100%" h="7px" src="/color-underline.svg"/>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Good for 4+ connected devices
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Includes wireless router
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Rapid HD video download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans