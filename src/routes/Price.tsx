import { Helmet } from "react-helmet";
import styled from "styled-components";
import { PriceData } from "./Coin";

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.containorColor};
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  padding: 10px 20px;
  width: 100%;
  height: 70px;
  margin: 5px 0;
`;

const ContentTitle = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;

const ContentData = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

function Price({ tickersData }: { tickersData: PriceData }) {
  return (
    <PriceContainer>
      <Helmet>
        <title>{`${tickersData.name} Price`}</title>
      </Helmet>
      <Content>
        <ContentTitle>Volumn 24H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.volume_24h}</ContentData>
      </Content>
      <Content>
        <ContentTitle>Volumn 24H change 24H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.volume_24h_change_24h}</ContentData>
      </Content>
      <Content>
        <ContentTitle>Market Cap Change 24H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.market_cap_change_24h}</ContentData>
      </Content>
      <Content>
        <ContentTitle>Percent Change 24H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.percent_change_24h}</ContentData>
      </Content>
      <Content>
        <ContentTitle>Percent Change 12H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.percent_change_12h}</ContentData>
      </Content>
      <Content>
        <ContentTitle>Percent Change 1H</ContentTitle>
        <ContentData>${tickersData.quotes.USD.percent_change_1h}</ContentData>
      </Content>
    </PriceContainer>
  );
}

export default Price;
