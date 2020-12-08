import React from "react";
import { Grid } from "react-native-easy-grid";
import FloatingAddButton from "../navigation/FloatingAddButton";
import DashboardHeader from "./DashboardScreen/DashboardHeader";
import DashboardList from "./DashboardScreen/DashboardList";

export default function DashboardScreen({ navigation }) {
    return (
      <Grid style={{ display: "flex", flexDirection: "column" }}>
          <DashboardHeader />
          <DashboardList navigation={navigation} />
          <FloatingAddButton navigation={navigation} />
      </Grid>
    );
}

