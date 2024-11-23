import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  //FormControl,
  Input,
  Button,
  Text,
  Box,
  Flex,
  Heading,
  Stack,
  //FormErrorMessage,
} from '@chakra-ui/react';
import {
  FormControl,
  //FormLabel,
  FormErrorMessage,
  //FormHelperText,
  //FormErrorIcon,
} from "@chakra-ui/form-control"

export default function SignUp() {
  const {
          handleSubmit,
          register,
          formState: { errors, isSubmitting } ,
        } = useForm();


  // Fungsi submit form
  const doSubmit = async (values) => {
    toast.success('Sign Up Successful. You are now logged in');
    console.log(values);
  };

  // Inside SignUp Component:
  return (
    <Box p="3" maxW="19rem" mx="auto">
      <Heading
        as="h1"
        textAlign="center"
        fontSize="3xl"
        fontWeight="semibold"
        my="7"
      >
        Create an Account
      </Heading>
      {/* Form utama */}
      <form onSubmit={handleSubmit(doSubmit)}>
        <Stack gap="4">
          {/* Username Input */}
          <FormControl isInvalid={errors.username}>
            <Input
              id="username"
              type="text"
              placeholder="username"
              {...register('username', { required: 'Username is required' })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          {/* Email Input */}
          <FormControl isInvalid={errors.email}>
            <Input
              id="email"
              type="email"
              placeholder="email"
              {...register('email', { required: 'Email is required' })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          {/* Password Input */}
          <FormControl isInvalid={errors.password}>
            <Input
              id="password"
              type="password"
              placeholder="password"
              {...register('password', { required: 'Password is required' })} // Perbaikan typo 'requaired' jadi 'required'
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="teal"
            textTransform="uppercase"
          >
            Sign Up
          </Button>
        </Stack>
      </form>

      {/* Link ke Sign In */}
      <Flex gap="2" mt="5">
        <Text>Have an account?</Text>
        <Link to={'/signin'}>
          <Text as="span" color="blue.400">
            Sign In
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
