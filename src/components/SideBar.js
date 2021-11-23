import React from 'react';
import {Link} from 'react-router-dom';
import {sidebarData} from './SideBarData';
import {makeStyles} from "@material-ui/styles";
import Button from "@mui/material/Button";


const useStyleListSidebar = makeStyles(() => ({
	listItems: {
		position: "relative",
		display: "flex",
		fontSize: '15px',
	}
}))

const useStyleSidebar = makeStyles(() => ({
	sidebarStyle: {
		position: "sticky",
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-start",
    top: "45px",
	}
}))


function SideBar() {
	const {listItems} = useStyleListSidebar();
	const {sidebarStyle} = useStyleSidebar();

	return (
		<div className={sidebarStyle}>

			{sidebarData.map((item) => {
				return (
					<div className={listItems}>

						<Button variant={"contained"} component={Link} to={item.path} style={{
							backgroundColor: '#006357',
              position: "relative",
							color: 'white',
							margin: '1rem',
              display: "inline-block",
              borderRadius: "0 0 7px 7px",
						}}>
							<div style={{fontSize: '40px'}}>
								{item.icon}
							</div>
							<span>
                {item.title}
              </span>
						</Button>

					</div>

				)
			})}

		</div>
	);
}

export default SideBar


