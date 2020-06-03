import React, { useEffect } from "react";
import { DogItemContentGrid, DogName, PassContainer, DogBreedDisplay } from "./style";
import { connect } from "react-redux";
import { getData } from "../../redux/actions";
import { DateTime } from "luxon";
import _ from "lodash";
import ActiveTime from "../../components/ActiveTime";
import AttendanceButton from "../../components/AttendanceButton";
import PassButton from "../../components/PassButton";

const DogList = ({ getDogList, getActivePasses, getActiveAttendances, dogList, activePasses, activeAttendances }) => {
  const dataIsLoaded = activeAttendances && activePasses && dogList;

  useEffect(() => {
    getDogList();
    getActiveAttendances();
    getActivePasses();
  }, []);

  return (
    <>
      {dataIsLoaded &&
        dogList.map((dog, key) => (
          <DogItemContentGrid container key={`item-key-${key}`}>
            <DogName className="dog-name">{dog.name}</DogName>
            <DogBreedDisplay>{dog.breed?.name}</DogBreedDisplay>
            <AttendanceButton {...{ dog }} />
            <PassContainer>
              {activePasses.map((pass, key) => {
                if (pass.dogChip === dog.chip) return <PassButton {...{ dog, pass }} key={`item-key-${key}`} />;
              })}
            </PassContainer>
            {activeAttendances.map((attendance, key) => {
              if (attendance.dog.chip === dog.chip) return <ActiveTime startTime={attendance?.startTime} endTime={attendance?.endTime} key={`item-key-${key}`} />;
            })}
          </DogItemContentGrid>
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activeAttendances: state.attendance.active,
    activePasses: state.pass.active,
    dogList: state.dog.list,
  };
};

const today = DateTime.local().toISO();
console.log("TODAY", today);

const mapDispatchToProps = (dispatch) => {
  return {
    getDogList: () => dispatch(getData("/dog/show/all", "dog", "list")),
    getActivePasses: () => dispatch(getData("/pass/show/active", "pass", "active")),
    getActiveAttendances: () => dispatch(getData("/attendance/show/active", "attendance", "active")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
