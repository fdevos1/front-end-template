import { Menu, MenuItem, menuItemClasses, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ButtonComponent from "../components/Button";

function MenuComponent({
  anchorEl,
  openMenu,
  handleMenuClose,
  menuItemValues,
  setAnchorEl,
  handleValue,
}: any) {
  const handleMenuItemClick = async (value: string) => {
    handleValue(value);
    setAnchorEl(null);
  };

  return (
    <>
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
        {menuItemValues.map((item: any) => {
          return (
            <MenuItem onClick={() => handleMenuItemClick(item.name)}>
              <Typography variant="button">{item.text}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default MenuComponent;
