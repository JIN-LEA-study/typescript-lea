{
  /**
   * Enum
   * 타입스크립트에서 Enum에서는 사용하지 않는게 좋다.
   * 타입이 정확하게 보장되지 않는다.
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });

  const dayOfToday = DAYS_ENUM.MONDAY; //0
  // 타입이 보장되고 타입을 안전하게 사용

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  //앞글자만 대문자로 적는다
  enum Days {
    Monday, //0
    Tuesday, //1
    Wednesday, //2
    Thursday, //3
    Friday, //4
    Saturday, //5
    Sunday, //6
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}

//TypeScript
type DaysOfWeeks = "Monday" | "Tuesday" | "wednesday";

let dayOfweek: DaysOfWeeks = "Monday";
dayOfweek = "wednesday";

/**
 * union으로 대체할 수 있다.
 * 안드로이드, IOS의 경우 enum을 사용하는 경우가 생긴다.
 */
