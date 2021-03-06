import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SidebarStyle } from "./style";
import { Card } from "../../components/Card";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
import { dogGeneralDisplay, dogSexDisplay, dogMedicalDisplay, dogOwnerDisplay, dogAttendanceDisplay, dogPassDisplay } from "../../services/Format/Dog";

const Sidebar = ({ dogList, attendanceList, activeAttendance, passList, language, attendanceUpdate }) => {
  const { id } = useParams();
  const [dog, setDog] = useState();
  const [attendance, setAttendance] = useState();
  const [pass, setPass] = useState();

  useEffect(() => {
    console.log("LOAD SIDEBAR EFFECTS", dogList, attendanceList, passList);
    setDog(_.head(dogList.filter((d) => d.id === id)));
    setAttendance(attendanceList.filter((att) => att.dog.id === id));
    setPass(passList.filter((pass) => pass.dog.id === id));
  }, [dogList, attendanceList, id, activeAttendance, passList, attendanceUpdate]);

  if (dog && attendance && pass) {
    return (
      <>
        <SidebarStyle>
          <Card display={dogGeneralDisplay(dog, language)} />
          <Card display={dogSexDisplay(dog, language)} />
          <Card display={dogMedicalDisplay(dog, language)} />
          <Card display={dogOwnerDisplay(dog, language)} />
          <Card display={dogAttendanceDisplay(attendance, language)} />
          <Card display={dogPassDisplay(pass, true, language)} />
          <Card display={dogPassDisplay(pass, false, language)} />
        </SidebarStyle>
      </>
    );
  } else return <div>Loading...</div>;
};

const mapStateToProps = (state) => {
  return {
    dogList: state.dog.list,
    attendanceList: state.attendance.list,
    activeAttendance: state.attendance.active,
    passList: state.pass.list,
    language: state.language.set,
    attendanceUpdate: state.attendance.update,
  };
};

export default connect(mapStateToProps)(Sidebar);
