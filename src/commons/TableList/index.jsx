import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

export const TableList = ({ datatype, data }) => {
  const [allBranches, setAllBranches] = useState();
  const dataType = datatype;
  const objKeys = Object.keys(data[0]);
  let column1 = "";
  let column2 = "";
  let column3 = "";
  let column4 = "";

  if (dataType == "Sucursales") {
    column1 = "Nombre";
    column2 = "Ciudad";
    column3 = "Capacidad Máxima";
    column4 = "Horario de Inicio y cierre";
  } else if (dataType == "Operadores") {
    column1 = "Nombre y Apellido";
    column2 = "Mail";
    column3 = "Sucursal";
    column4 = "Contraseña";
  } else if (dataType == "Reservas" || dataType == "OperatorReservas") {
    column1 = "Nombre y Apellido";
    column2 = "Reserva";
    column3 = "Sucursal";
    column4 = "N° de la reserva";
  }
  //puede ser operadores, sucursales o historial de reservas.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/branches/allBranches")
      .then((response) => {
        setAllBranches(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Navbar role={"final-client"} />
      <div className={s.container} style={{ marginTop: "1.5%" }}>
        <h1>{dataType == "OperatorReservas" ? "Reservas" : dataType}</h1>
        <div className={s.table}>
          {allBranches &&
            allBranches.map((branch, i) => {
              return (
                <div className={s.row} key={i}>
                  <div className={s.rowItem}>
                    <p>{column1}</p>
                    <b>{branch.name}</b>
                  </div>
                  <div className={s.rowItem}>
                    <p>{column2}</p>
                    <b>{branch.email}</b>
                  </div>
                  <div className={s.rowItem}>
                    <p>{column3}</p>
                    <b>{branch.telephone}</b>
                  </div>
                  <div className={s.rowItem}>
                    <p>{column4}</p>
                    <b>{`${branch.openingTime} to ${branch.closingTime}`}</b>
                  </div>
                  <div className={s.rowItem}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#F5F5F5",
                        color: "#A442F1",
                        textTransform: "none",
                      }}
                    >
                      {dataType == "OperatorReservas"
                        ? "Confirmación"
                        : "Editar"}
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//<div className={s.row} key={i}>
//                <div className={s.rowItem}>
//                  <p>{column1}</p>
//                  <b>{objIns[objKeys[0]]}</b>
//                  {/* <b>{objIns[objKeys[0]]}</b> */}
//                </div>
//                <div className={s.rowItem}>
//                  <p>{column2}</p>
//                  <b>{objIns[objKeys[1]]}</b>
//                </div>
//                <div className={s.rowItem}>
//                  <p>{column3}</p>
//                  <b>{objIns[objKeys[2]]}</b>
//                </div>
//                <div className={s.rowItem}>
//                  <p>{column4}</p>
//                  <b>{objIns[objKeys[3]]}</b>
//                </div>
//                <div className={s.rowItem}>
//                  <Button
//                    variant="contained"
//                    style={{
//                      backgroundColor: "#F5F5F5",
//                      color: "#A442F1",
//                      textTransform: "none",
//                    }}
//                  >
//                    {dataType == "OperatorReservas" ? "Confirmación" : "Editar"}
//                  </Button>
//                </div>
//              </div>
