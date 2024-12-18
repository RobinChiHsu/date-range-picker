import React, { useState } from "react";
import {
  addDays,
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  nextDay,
  subMonths,
} from "date-fns";
import {
  DateButton,
  DatePickerContainer,
  Header,
  MonthButton,
  DatesGrid,
} from "../styles/DateRangePicker";

const DateRangePicker2: React.FC = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const generateDates = (): { date: Date; isCurrentMonth: boolean }[] => {
    const daysInCurrentMonth = getDaysInMonth(
      new Date(currentYear, currentMonth)
    );
    const daysInLastMonth = getDaysInMonth(
      new Date(currentYear, currentMonth - 1)
    );
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(
      currentYear,
      currentMonth,
      daysInCurrentMonth
    );
    const prevDayOfLastMonth = new Date(
      currentYear,
      currentMonth - 1,
      daysInLastMonth
    );

    // 前一月日期補全
    const daysBefore = getDay(prevDayOfLastMonth);
    const prevMonthDates = Array.from({ length: daysBefore }, (_, i) => {
      const date = subMonths(firstDayOfMonth, 1);
      const day = getDaysInMonth(date) - (daysBefore - 1) + i;
      return {
        date: new Date(date.getFullYear(), date.getMonth(), day),
        isCurrentMonth: false,
      };
    });

    // 當月日期
    const currentMonthDates = Array.from(
      { length: daysInCurrentMonth },
      (_, i) => ({
        date: new Date(currentYear, currentMonth, i + 1),
        isCurrentMonth: true,
      })
    );

    // 下一月日期補全
    const daysAfter = 7 - getDay(lastDayOfMonth);
    const nextMonthDates = Array.from({ length: daysAfter }, (_, i) => {
      const nextDay = addDays(lastDayOfMonth, i + 1);
      return {
        date: nextDay,
        isCurrentMonth: false,
      };
    });

    return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
  };

  const handleDateClick = (date: Date, isCurrentMonth: boolean): void => {
    if (!isCurrentMonth) return; // 禁用非當月日期
    if (!startDate || (startDate && date < startDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date >= startDate) {
      setEndDate(date);
    }
  };

  const handlePrevMonth = (): void => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (): void => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const renderDates = (): JSX.Element[] => {
    const dates = generateDates();
    return dates.map(({ date, isCurrentMonth }) => {
      const isToday = date.toDateString() === today.toDateString();
      const isSelected =
        (startDate && date.toDateString() === startDate.toDateString()) ||
        (endDate && date.toDateString() === endDate.toDateString());
      const isInRange =
        startDate && endDate && date > startDate && date < endDate;

      return (
        <DateButton
          key={date.toISOString()}
          isToday={isToday}
          isSelected={isSelected}
          isInRange={isInRange}
          isDisabled={!isCurrentMonth}
          isCurrentMonth={isCurrentMonth}
          onClick={() => handleDateClick(date, isCurrentMonth)}
        >
          {format(date, "d")}日
        </DateButton>
      );
    });
  };

  return (
    <DatePickerContainer>
      <Header>
        <MonthButton onClick={handlePrevMonth}>{"<"}</MonthButton>
        <span>{`${currentYear}年${currentMonth + 1}月`}</span>
        <MonthButton onClick={handleNextMonth}>{">"}</MonthButton>
      </Header>
      <DatesGrid>{renderDates()}</DatesGrid>
    </DatePickerContainer>
  );
};

export default DateRangePicker2;
