import gql from "graphql-tag";

export const GET_USER = gql`
  {
    user {
      nickName
      imageUrl
    }
  }
`;
