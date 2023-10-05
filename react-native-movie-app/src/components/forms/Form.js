import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack, Select, Box, Text } from 'native-base'

const Form = props => {
  const { onSubmit, onInputChange, setSearchType, searchType } = props

  return (
    <VStack alignItems='center' space={2} width='100%' py={5}>
        <FormControl isRequired width='80%'>
            <FormControl.Label fontSize='sm'>Search Movie/Tv Show Name</FormControl.Label>
            <HStack justifyContent='center' width='100%' space={2}>
                <Input
                    placeholder='i.e. James Bond'
                    variant='filled'
                    bg='gray.200'
                    px={3}
                    width='100%'
                    isRequired={true}
                    InputLeftElement={
                    <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                    }
                    onChangeText={value => {
                        onInputChange(value)
                    }}
                />
            </HStack>

        </FormControl>

        <FormControl isRequired width='80%'>
            <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
            <HStack width='100%' space={2} alignItems='center' justifyItems='center'>

                <Select 
                    selectedValue={searchType} 
                    minWidth="200" 
                    mt={1}
                    onValueChange={itemValue => setSearchType(itemValue)}
                >
                    <Select.Item label='Multi' value='multi' />
                    <Select.Item label='Movie' value='movie' />
                </Select>

                <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
                    Search
                </Button>

            </HStack>

            <Text>Please select a search type</Text>
        </FormControl>
        
    </VStack>
  )
}

export default Form
