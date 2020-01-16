import React, { Component } from "react";

const RoleSelectionView = (props) => {
    return (
        <div>
            Who are you?
        <button value="parent" onClick= {() => props.handleRoleSelection("parent")}>parent</button>
        <button value="child" onClick= {() => props.handleRoleSelection("child")}>child</button>
        </div>

    )
}

export default RoleSelectionView;