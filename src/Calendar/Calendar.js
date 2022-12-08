import React, { useState } from "react";

export default function Calendar() {
  const calendar = [
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: `Fesitwal filmów młodzieżowych "Unia"`,
      6: null,
      7: null,
    },
    {
      8: null,
      9: null,
      10: null,
      11: `Musical cyrkowy chatki Żaka`,
      12: null,
      13: null,
      14: null,
    },
    {
      15: null,
      16: `Młodzieżowy festiwal teatralny zwierdziadła`,
      17: null,
      18: null,
      19: null,
      20: null,
      21: `Debiuty, ogólnopolski konkurs młodych wokalistów`,
    },
    {
      22: null,
      23: null,
      24: null,
      25: null,
      26: null,
      27: `Dzień frankofonii`,
      28: null,
    },
    {
      29: null,
      30: null,
      31: null,
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState(5);
  return (
    <>
      <section
        className="
          flex items-center justify-center
          md:items-start md:justify-start md:px-16 md:py-2
          md:w-1/4
        "
      >
        <div className="flex flex-col gap-1 w">
          <h1 className="py-3 px-1 text-lg">
            Wydarzenia Lublin Marzec 2023 ESM
          </h1>
          {calendar.map((week) => {
            return (
              <div className="flex gap-1">
                {Object.keys(week).map((day) => {
                  console.log(`
                        ${week[day] == null}
                        ${day} : ${week[day]}
                      `);
                  if (week[day] == null) {
                    return (
                      <button key={day} id={day}>
                        {day}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={day}
                        id={day}
                        value={day}
                        className="calendar-event"
                        title={week[day]}
                        onClick={(e) => setSelectedEvent(e.target.value)}
                      >
                        {day}
                      </button>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex justify-center items-center md:px-5 py-3">
        <div className="
        bg-[#ff0000] 
        rounded-lg
        w-[97vw] h-[46vh]
        md:w-[70vw] md:h-[60vh] 
        ">
          
        </div>
      </section>
    </>
  );
}
