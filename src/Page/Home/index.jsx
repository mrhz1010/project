import React, { useEffect, useState } from "react";
import "../Home/style.css";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Home() {
  const [dataTable, setDataTable] = useState();
  useEffect(() => {
    fetch(`http://localhost:3001/ordersTable`)
      .then((res) => res.json())
      .then((data) => setDataTable(data));
    console.log(dataTable);
  }, []);

  //-------------- chart line start ------------------
  // ------------------gradient chart start-------------------
  const gradient = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0, "#5BC4FF");
    gradientSegment.addColorStop(0.8, " #FF5BEF");
    return gradientSegment;
  };

  const fillGradient = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0.1, "#5bc3ff11");
    gradientSegment.addColorStop(1, "#ff5bef0f");
    return gradientSegment;
  };

  // ------------------gradient chart end-------------------

  const data = {
    type: "line",
    labels: [
      "10am",
      "11am",
      "12am",
      "01am",
      "02am",
      "03am",
      "04am",
      "05am",
      "06am",
      "07am",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [55, 31, 58, 37, 39, 22, 45, 16, 37, 67, 56, 72],
        fill: true,
        tension: 0.3,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return gradient(ctx, chartArea);
        },
        pointBackgroundColor: "#FFFFFF",
        pointBorderWidth: 2.8,
        pointRadius: 5,
        pointBorderColor: "#AE8FF7",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return fillGradient(ctx, chartArea);
        },
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //-------------- chart line end ------------------

  // -----------chart doughnut start------------------

  const chart = {
    type: "doughnut",
    labels: ["Sale", "Distribute", "Return"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#5b93ff", "#FFD66B", "#FF8F6B"],
        borderAline: "center",
        animateRotate: true,
        clip: { left: 50, top: true, right: -2, bottom: 100 },
        circumference: "300",
        weight: "400",
        hoverOffset: 4,
      },
    ],
  };
  const potions = {
    legend: {
      display: false,
    },
  };

  // -----------chart doughnut end ---------------

  return (
    <>
      <Stack width={"100%"} flexWrap={"wrap"}>
        <Typography
          width={200}
          height={30}
          className="h"
          margin={3}
          variant={"h6"}
        >
          Dashboard
        </Typography>
        <Stack
          height={100}
          width={"100%"}
          component={"section"}
          className="container-home"
          flexDirection={"row"}
          alignItems={"start"}
          justifyContent={"start"}
          gap={5}
          paddingLeft={3}
        >
          {/* -----------Save Products------------- */}
          <Box
            className="box"
            component={"div"}
            paddingLeft={4}
            paddingTop={1}
            borderRadius={2}
            alignItems={"center"}
            display={"flex"}
            width={"22%"}
            height={100}
            bgcolor={"white"}
          >
            <List className="ul-home">
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar className="avatar-color-Save">
                    <FavoriteIcon htmlColor="#5b93ff" />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                className="size"
                secondary="Save Products"
                primary="20+"
              />
            </List>
          </Box>
          {/* -------------Save Products----------- */}

          {/* ------------Stock Products------------ */}
          <Box
            className="box"
            component={"div"}
            paddingLeft={4}
            paddingTop={1}
            borderRadius={2}
            alignItems={"center"}
            display={"flex"}
            width={"22%"}
            height={100}
            bgcolor={"white"}
          >
            <List className="ul-home">
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar className="avatar-color-Stock">
                    <SportsEsportsIcon htmlColor="#ffc227" />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                className="size"
                secondary="Stock Products"
                primary="190+"
              />
            </List>
          </Box>
          {/* -----------Stock Products------------- */}

          {/* ------------Sales Products------------ */}
          <Box
            className="box"
            component={"div"}
            paddingLeft={4}
            paddingTop={1}
            borderRadius={2}
            alignItems={"center"}
            display={"flex"}
            width={"22%"}
            height={100}
            bgcolor={"white"}
          >
            <List className="ul-home">
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar className="avatar-color-Sales">
                    <LocalMallIcon htmlColor="#ff8f6b" />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                className="size"
                secondary="Sales Products"
                primary="178+"
              />
            </List>
          </Box>
          {/* ------------Sales Products------------ */}

          {/* -----------Job Application------------- */}
          <Box
            className="box"
            component={"div"}
            paddingLeft={4}
            paddingTop={1}
            borderRadius={2}
            alignItems={"center"}
            display={"flex"}
            width={"22%"}
            height={100}
            bgcolor={"white"}
          >
            <List className="ul-home">
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar className="avatar-color-Job">
                    <HomeRepairServiceIcon
                      className="size-icon"
                      htmlColor="#605bff"
                    />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                className="size"
                secondary="Job Application"
                primary="12+"
              />
            </List>
          </Box>
          {/* ------------Job Application------------ */}
        </Stack>
        {/* -----------chart start -------------- */}
        <Stack
          className="box-chart-dashboard"
          width={"100%"}
          flexDirection={"row"}
        >
          {/* -----------chart liner------------- */}
          <Box
            component={"div"}
            className="box-chart-line"
            borderRadius={2}
            padding={2}
            paddingTop={5}
            display={"flex"}
            margin={3}
            width={"50%"}
            height={400}
            bgcolor={"white"}
            alignItems={"end"}
            position={"relative"}
          >
            <Typography top={"1vw"} position={"absolute"}>
              Reports
            </Typography>
            <Line options={options} className="chart" data={data} />
          </Box>
          {/* -----------chart doughnut------------- */}
          <Box
            component={"div"}
            className="box-doughnut-dashboard"
            borderRadius={2}
            margin={3}
            bgcolor={"white"}
            width={"41.5%"}
            height={400}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={3}
            position={"relative"}
          >
            <Doughnut className="doughnut" data={chart} options={potions} />
            <Typography left={"1vw"} top={"1vw"} position={"absolute"}>
              Analytics
            </Typography>
            <Typography color={"#7e7e7ed0"} position={"absolute"} top={"55%"}>
              Transactions
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={35}
              position={"absolute"}
              top={"45%"}
            >
              80%
            </Typography>
          </Box>
        </Stack>
        {/* -----------chart end -------------- */}
        {/* -----------table--------- */}
        <Stack className="box-table" width={"100%"} flexDirection={"row"}>
          <Box
            className="box-table"
            component={"div"}
            borderRadius={2}
            display={"flex"}
            flexDirection={"column"}
            margin={3}
            width={"50%"}
            height={350}
            bgcolor={"white"}
          >
            {/* -------------start table--------------- */}
            <Box margin={1} display={"block"} width={"100%"} height={"24px"}>
              <Typography>Recent Orders</Typography>
            </Box>
            <TableContainer className="table-container" component={Paper}>
              <Table className="table" />
              <TableHead className="table">
                <TableRow className="table">
                  <TableCell>Tracking no</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total Order</TableCell>
                  <TableCell>Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {dataTable?.map((e, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="left">{e.code}</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                        align="center"
                      >
                        <img
                          src={e?.image}
                          alt=""
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "15px",
                          }}
                        />
                        {e?.productsName}
                      </TableCell>
                      <TableCell align="left">${e.price}</TableCell>
                      <TableCell align="center">
                        <Stack
                          color={"#26C0E2"}
                          width={60}
                          height={30}
                          borderRadius={2.5}
                          bgcolor={"#e9f9fc"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          {e.totalOrder}
                        </Stack>
                      </TableCell>
                      <TableCell align="left">${e.totalAmount}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </TableContainer>
          </Box>
          {/* ---------end table --------------- */}

          {/*----------------- product start------------ */}

          <Box
            component={"div"}
            className="box-table"
            borderRadius={2}
            margin={3}
            bgcolor={"white"}
            width={"41.5%"}
            height={350}
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box margin={3} width={"100%"} height={20}>
              <Typography fontSize={20}>Top selling Products</Typography>
            </Box>
            <Box
              paddingBottom={3}
              width={"100%"}
              marginLeft={3}
              display={"flex"}
              borderBottom={"solid 1px #9c9c9c4f"}
            >
              <img
                src="assets/Rectangle 53(2).png"
                alt=""
                style={{
                  objectFit: "cover",
                  width: "96px",
                  height: "96px",
                  borderRadius: "10px",
                }}
              />
              <Box
                flexDirection={"column"}
                display={"flex"}
                justifyContent={"center"}
                gap={1}
                marginLeft={3}
                width={"70%"}
              >
                <Typography>NIKE Shoes Black Pattern</Typography>
                <Rating />
                <Typography>87$</Typography>
              </Box>
            </Box>

            <Box
              component={"div"}
              className="box-iphone"
              marginLeft={3}
              width={"100%"}
              display={"flex"}
            >
              <Box
                borderRadius={"10px"}
                display={"flex"}
                alignItems={"center"}
                bgcolor={"#d4e5f0"}
                justifyContent={"center"}
                width={96}
                height={96}
              >
                <img
                  src="assets/iPhone-12-2-removebg-preview 1.png"
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "64px",
                    height: "64px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box
                flexDirection={"column"}
                display={"flex"}
                justifyContent={"center"}
                gap={1}
                marginLeft={3}
                width={"70%"}
              >
                <Typography>iPhone 12</Typography>
                <Rating />
                <Typography>987$</Typography>
              </Box>
            </Box>
          </Box>
          {/*----------------- product end ------------ */}
        </Stack>
      </Stack>
    </>
  );
}
