import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledTabProps {
  label: string;
  value: number;
}

const StyledTabsContainer = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const StyledTab = styled(Tab)(() => ({
  "&": {
    fontWeight: 400,
  },
  "&.Mui-selected": {
    color: "#E4E6EB",
    backgroundColor: "#3A3B3C",
    border: "0",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "none",
  },
}));

function TabsComponent({ value, onChange }: any) {
  return (
    <Box borderRadius={10} bgcolor="background.paper">
      <StyledTabsContainer value={value} onChange={onChange}>
        <StyledTab
          label="USUÁRIOS"
          value={1}
          sx={{ borderRadius: "5rem 0 0 5rem" }}
        />
        <StyledTab label="ATENDIMENTOS" value={2} />
        <StyledTab
          label="ENQUETES"
          value={3}
          sx={{ borderRadius: " 0 5rem  5rem 0" }}
        />
      </StyledTabsContainer>
    </Box>
  );
}

export default TabsComponent;
