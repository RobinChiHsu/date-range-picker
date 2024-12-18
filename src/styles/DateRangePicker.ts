import styled from "styled-components";
import tw from "twin.macro";

export const DatePickerContainer = styled.div`
  ${tw`w-[350px] h-[240px] font-sans flex flex-col`}
`;

export const Header = styled.div`
  ${tw`flex justify-between items-center mb-4`}
`;

export const MonthButton = styled.button`
  ${tw`w-[44px] h-[44px] bg-white text-black border-transparent`}

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const DatesGrid = styled.div`
  ${tw`grid grid-cols-7 gap-2`}
`;

export const DateButton = styled.button<{
  isToday?: boolean | null;
  isInRange?: boolean | null;
  isSelected?: boolean | null;
  isDisabled?: boolean | null;
  isCurrentMonth?: boolean | null;
}>`
  ${tw`w-[50px] h-[36px] bg-white border border-transparent cursor-pointer`}
  ${({ isToday }) => isToday && tw`bg-yellow-300`}
  ${({ isSelected }) => isSelected && tw`bg-[#006edc] text-white`}
  ${({ isInRange }) => isInRange && tw`bg-[#006edc] text-white`}
  ${({ isCurrentMonth }) => !isCurrentMonth && tw`text-[#757575]`}
  ${({ isDisabled }) =>
    isDisabled &&
    `
    ${tw`bg-gray-200 cursor-not-allowed`}
    &:hover {
      cursor: not-allowed;
    }
  `}
  &:hover {
    background-color: #e6e6e6;
  }
`;
