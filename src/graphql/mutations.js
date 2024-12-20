import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    registerUser(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
