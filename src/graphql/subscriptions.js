import { gql } from '@apollo/client';

export const LIVE_PRICES = gql`
  subscription {
    livePrices {
      symbol
      price
      change
    }
  }
`;
