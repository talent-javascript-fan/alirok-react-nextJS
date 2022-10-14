import styled from 'styled-components'
import { Box } from '@alirok.com/rok-ui'
import colors from '../../theme/colors'

export const StyledPlacesSelect = styled.div`
  text-align: left;
  .selected-item {
    padding: 8px;
    text-transform: capitalize;
    display: flex;
    gap: 5px;
  }

  div:first-child {
    button:first-child {
      cursor: pointer;
    }
  }
`

export const TriggerWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const InputWrapper = styled.div<{
  maxWidth?: string
  maxWidthMobile?: string
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: ${({ maxWidthMobile }) => maxWidthMobile};
    margin-top: 20px;
  }
`

export const SelectWrapper = styled.div`
  width: 68px;
`

export const AppendButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
`

export const RulesItems = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`

export const SelectCurrencyWrapper = styled.div`
  width: 80px;
`

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 20px;
  cursor: pointer;
`

export const Delete = styled.div`
  mask: url('https://static.alirok.io/collections/icons/delete.svg') no-repeat
    center;
  width: 20px;
  height: 20px;
  background: #ef3271;
`

export const Row = styled.div`
  display: flex;
  margin: 30px 0px 30px 15px;
  gap: 14px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }

  :not(:first-child) {
    margin-top: 40px;
  }
`

export const AutomatedRow = styled.div`
  display: flex;
  margin: 30px 0px 30px 12px;
  gap: 20px;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }

  :not(:first-child) {
    margin-top: 20px;
  }
`

export const CompoundInput = styled.div`
  display: flex;
  opacity: 1;
  border-bottom: 1px solid #ebf0fa;
  color: #1e1e1e;
  > div {
    flex-grow: 1;
  }
`

export const Error = styled.p`
  color: rgb(253, 101, 110);
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  margin-top: 10px;
`

export const MinimumRuleContent = styled.div<{ bottom: string; left: string }>`
  display: flex;
  position: absolute;
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  z-index: 1000;
`

export const MaximumRuleContent = styled.div<{ bottom: string; left: string }>`
  display: flex;
  position: absolute;
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  z-index: 1000;
`

export const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  margin-top: 28px;
  gap: 28px;
  overflow-x: scroll;
  padding: 10px;

  .mySwiper {
    --swiper-navigation-size: 18px;
  }

  .swiper-container {
    height: 40px;
    width: 100%;
    padding: 0px 20px;
  }

  .swiper-button-prev {
    background: #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    box-shadow: 0px 3px 6px ${colors.shadow};
    border: 1px solid ${colors.primaryLight};
    top: 9px;
    left: 0;
  }

  .swiper-button-prev.swiper-button-disabled {
    opacity: 0 !important;
  }

  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }

  .swiper-button-next {
    background: #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    box-shadow: 0px 3px 6px ${colors.shadow};
    border: 1px solid ${colors.primaryLight};
    top: 9px;
    right: 0;
  }
`

export const RulesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ItemsWrapper = styled.div`
  margin-bottom: 39px;

  :not(:first-child) {
    border-top: 1px solid ${colors.primaryLight};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-right: 20px;
`

export const RuleTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;

  p {
    margin-right: 30px;
  }
`

export const AutoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;

  p {
    margin-right: 30px;
  }
`

export const StyledItemChip = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  border-radius: 15px;
  font-size: 14px;
  color: ${colors.primary};
  width: max-content;
  gap: 8px;
  background-color: ${colors.primaryLight};
  div {
    cursor: pointer;
    position: relative;
    width: 10px;
    height: 10px;
    background-color: ${colors.primary};
    border-radius: 5px;
    font-size: 8px;
    :after {
      content: 'x';
      position: absolute;
      top: 0px;
      left: calc(50% - 3px);
      color: ${colors.white};
    }
  }
`

export const StyledTravelBox = styled(Box)<{
  marginLeft?: string
  bRadius?: string
}>`
  display: flex;
  position: fixed;
  flex-direction: column;
  text-align: left;
  padding: 24px 32px;
  width: max-content;
  height: max-content;
  border-radius: ${({ bRadius }) => (bRadius ? bRadius : '0 30px 30px 30px')};
  box-shadow: 0px 3px 6px ${colors.shadow};
  margin-left: ${({ marginLeft }) => marginLeft};
`

export const StyledTravelOptions = styled.div`
  padding-top: 32px;
  display: grid;
  gap: 64px;
  row-gap: 32px;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 40px);
`

export const StyledError = styled.div`
  padding-top: 24px;
  margin-bottom: -24px;
`

export const StyledTravelWorldwide = {
  Input: styled.div``,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 42px;
    > div:first-child {
      display: flex;
      .warning-icon {
        margin-right: 10px;
      }
    }
    button {
      margin-top: 32px;
      width: max-content;
      align-self: end;
    }
  `
}

export const StyledTravelInput = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    button {
      margin-top: 32px;
      width: max-content;
      align-self: end;
    }

    span:first-child {
      display: flex;
      flex-direction: column;

      > div {
        ul li {
          color: ${colors.black};
          font-weight: normal;

          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryLight};
          }
        }
        > div > div {
          margin-bottom: 0px;

          input {
            color: ${colors.black};
            font-weight: normal;

            &::placeholder {
              color: ${colors.black};
            }
          }
        }
      }
    }
  `,
  Input: styled.div`
    display: flex;
    position: relative;

    :after {
      content: 'PRESS ENTER';
      position: absolute;
      color: ${colors.black50};
      right: 10px;
      top: 25%;
    }
    .icon-wrapper {
      width: 55px;
      min-width: 55px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
    > div:last-child {
      width: 100%;
    }
    button {
      width: 100%;
      height: 100%;
      margin: 0;
      justify-content: flex-end;
      align-content: flex-end;
      display: flex;
    }
    input {
      width: 100%;
      padding-right: 124px;
      border-bottom: 1px solid ${colors.black50};
      ::placeholder {
        color: ${colors.black50};
      }
    }
  `,
  Chips: styled.div`
    padding-top: 10px;
    display: flex;
    gap: 5px;
    width: 430px;
    flex-wrap: wrap;
    margin-top: 10px;
  `
}

export const ButtonSpan = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: end;

  > div {
    width: max-content;
    text-align: right;
    height: 30px;
    margin-top: 15px;
    padding: 5px 15px;
    :hover {
      border-radius: 50px;
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`

export const WorldWideCoverage = styled.div`
  margin-top: 4px;
  cursor: pointer;

  div:nth-child(2) {
    margin-top: 10px;
  }
`

export const PressEnter = styled.div`
  margin-top: 5px;
  text-align: end;
`
