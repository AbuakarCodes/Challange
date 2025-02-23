import { useEffect, useRef, useState } from "react";

export default function App() {
  // useEffect(() => {
  //   alert("You can Only add Numbers or it will not work");
  // }, []);

  const [PerHourWageValue, setPerHourWageValue] = useState(1);

  const PerHourWageref = useRef(null);
  const HoursInputValue = useRef(0);
  const DaysInputValue = useRef(0);
  const WeeksInputValue = useRef(0);
  const MonthsInputValue = useRef(0);
  const yearsInputValue = useRef(0);

  const [FormData, setFormData] = useState({
    Hours: HoursInputValue.current.value,
    Days: DaysInputValue.current.value,
    Weeks: WeeksInputValue.current.value,
    Months: MonthsInputValue.current.value,
    Years: yearsInputValue.current.value,
  });

  const [FormDataCalculated, setFormDataCalculated] = useState({
    HoursCalculated: HoursInputValue.current.value,
    DaysCalculated: DaysInputValue.current.value,
    WeeksCalculated: WeeksInputValue.current.value,
    MonthsCalculated: MonthsInputValue.current.value,
    YearsCalculated: yearsInputValue.current.value,
  });

  function InputHandler(e) {
    if (e.target.placeholder == "Enter") {
      setPerHourWageValue(e.target.value);
    }

    setFormData((prev) => {
      return { ...prev, [e.target.placeholder]: e.target.value };
    });

    setFormDataCalculated((prev) => {
      if (e.target.placeholder == "Hours")
        return {
          ...prev,
          [e.target.placeholder + "Calculated"]: e.target.value,
        };


      if (e.target.placeholder == "Days")
        return {
          ...prev,
          [e.target.placeholder + "Calculated"]: e.target.value * 24,
        };
      if (e.target.placeholder == "Weeks")
        return {
          ...prev,
          [e.target.placeholder + "Calculated"]: e.target.value * 24 * 7,
        };
      if (e.target.placeholder == "Months")
        return {
          ...prev,
          [e.target.placeholder + "Calculated"]: e.target.value * 24 * 30,
        };
      if (e.target.placeholder == "Years")
        return {
          ...prev,
          [e.target.placeholder + "Calculated"]: e.target.value * 24 * 356,
        };
    });
  }

  useEffect(() => {
    setTotalHousWorkd(b)
  }, [FormDataCalculated])
  

  let b = 0;
  const [TotalHousWorkd, setTotalHousWorkd] = useState(0);
  let TotalHoursArry = Object.values(FormDataCalculated || {});

  for (let index = 0; index < TotalHoursArry?.length; index++) {
    let element = TotalHoursArry[index];
    if (element == undefined) element = 0;
    b = Number(element) + b;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <div className="border flex flex-col">

        <div className="flex gap-x-3">
          Define per Hour Wage
          <input
            ref={PerHourWageref}
            onChange={InputHandler}
            placeholder="Enter"
          />
        </div>

        <input
          ref={HoursInputValue}
          onChange={InputHandler}
          placeholder="Hours"
        />
        <input
          ref={DaysInputValue}
          onChange={InputHandler}
          placeholder="Days"
        />
        <input
          ref={WeeksInputValue}
          onChange={InputHandler}
          placeholder="Weeks"
        />
        <input
          ref={MonthsInputValue}
          onChange={InputHandler}
          placeholder="Months"
        />
        <input
          ref={yearsInputValue}
          onChange={InputHandler}
          placeholder="Years"
        />

        <div>
          you have Worked
          <div>{FormData.Years}Years,</div>
          <div>{FormData.Months}Months,</div>
          <div>{FormData.Weeks}Weeks,</div>
          <div> {FormData.Days}Days,</div>
          <div>{FormData.Hours}Hours</div>
        </div>

        <div>Total Hours You have been Worked {TotalHousWorkd}</div>

        <div className="flex gap-x-3">
          <h1>your Amount</h1>
          {TotalHousWorkd * PerHourWageValue} $
        </div>
      </div>
    </div>
  );
}
