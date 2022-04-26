import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";


function SotongGuideDropdown(userData) {
  return (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="mr-2">
        Sotong Guide
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>
                <Link to="/Visa">
                Visa Information
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/PreDeparture">
                Pre-departure Preparation
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/OnCampus">
                On-Campus Living
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/Settling">
                Settling Down
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/Academic">
                Academics
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/General">
                General Information
                </Link>
            </DropdownItem>
            {userData && (
                <>
                {userData.approved && (
                    <DropdownItem>
                    <Link to="/testbank">Test Bank</Link>
                    </DropdownItem>
                )}
                <DropdownItem divider />
                {userData.approved && (
                    <DropdownItem>
                    <Link to="/pcp">Peer Counselling</Link>
                    </DropdownItem>
                )}
                {userData.admin && (
                    <DropdownItem>
                    <Link to="/users">Members</Link>
                    </DropdownItem>
                )}
                {userData.approved && (
                    <DropdownItem>
                    <Link to="/profile">Profile</Link>
                    </DropdownItem>
                )}
                </>
            )}
        </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default SotongGuideDropdown;