import React, { useState } from "react";
import '../css/SettingNavBar.css'
import SettingNavItem from "./SettingNavItem";
import Button from './Button'
import UserConfirmation from './UserConfirmation'
import { fetchJSON } from '../utilities/fetchData'
import AlertBox from './AlertBox'

const SettingNavBar = ({ items, selected = items[0], handleSelect }) => {
  let navItem = items.map((item) => (
    <SettingNavItem
      key={item}
      text={item}
      handleClick={() => {
        handleSelect(item);
      }}
      selected={item === selected}
    />
  ));
  const deleteData = () => {
    fetchJSON('/settings/deleteinfo', { session: localStorage.sessionId }, (data) => {
        AlertBox({ text: data.msg, success: data.status })
    })

}
  return <nav id="SettingNavBar">{navItem}<Button buttonText='Radera mitt konto' handleClick={() => {
    UserConfirmation(
        { text: 'Är du säker på att du vill radera all data?', confirmAction: () => { deleteData() } })
}} className='rejectButton' /></nav>;
};

export default SettingNavBar;
