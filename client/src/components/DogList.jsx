import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions";

const DogList = ({ getList, list, user }) => {
  console.log(user);
  useEffect(() => {
    getList();
  }, [user]);
  return (
    <div className="owner-list">
      {list &&
        list.map((dog, i) => (
          <li key={i} className="list-group-item">
            {dog.name} {dog.bread} {dog.sex} {dog.character}
          </li>
        ))}
      <div className="container">
        <div className="row justify-content-md-center">
          <button className="btn btn-primary col col-lg-2" style={{ margin: "20px 0" }}>
            Añadir Dueño
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    list: state.dog.dogs,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getData("/dog/show/all"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
