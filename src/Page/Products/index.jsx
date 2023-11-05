import React, { useEffect, useState } from "react";
import "../Products/style.css";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Stack,
  SwipeableDrawer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Products() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  const [brand, setBrand] = useState("");
  const handleChange = (e) => {
    setBrand(e.target.value);
  };

  // --------chart Doughnut start-----------------------
  const chartDoughnut = {
    type: "doughnut",
    labels: ["Total Sale", "Total Order", "Order Cancel"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#5b93ff", "#FFD66B", "#FF8F6B"],
        borderAline: "center",
        animateRotate: true,
        clip: { left: 50, top: true, right: -2, bottom: 100 },
        circumference: "300",
        fontSize: 2,
        weight: "400",
        hoverOffset: 4,
      },
    ],
  };
  const potionsDoughnut = {
    legend: {
      display: false,
    },
  };
  // --------chart Doughnut end-----------------------

  // -----------chart bar start--------------------

  const dataChart = {
    type: "bar",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [23400, 15000, 30000, 22000, 10000, 23400, 5000],
        backgroundColor: ["#ff8f6b", "#5b93ff"],
        borderRadius: 10,
      },
    ],
  };
  const ChartOptions = {
    layout: {
      gap: 10,
    },
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  // -----------chart bar end--------------------

  // ------------line chart start----------------
  // ------------line chart blue start----------------
  // --------------gradient chart start------------------
  const gradient1 = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0, "#fed873");
    gradientSegment.addColorStop(0.8, "#fed873");
    return gradientSegment;
  };

  const fillGradient1 = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0.1, "#fed9732f");
    gradientSegment.addColorStop(1, "#ffffff");
    return gradientSegment;
  };
  // --------------gradient chart end------------------
  const data2 = {
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
        data: [65, 69, 68, 68, 65, 66, 65, 62, 67, 67, 46, 82],
        fill: true,
        tension: 0.3,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return gradient1(ctx, chartArea);
        },
        pointBackgroundColor: "#FFFFFF",
        pointBorderWidth: false,
        pointRadius: false,
        pointHoverBackgroundColor: undefined,
        pointHoverBorderColor: undefined,
        pointHoverBorderWidth: undefined,
        pointHoverRadius: undefined,
        pointBorderColor: "#AE8FF7",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return fillGradient1(ctx, chartArea);
        },
      },
    ],
  };
  const options2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  // ----------------line chart blue end-------------------
  // ----------------line chart red start-------------------
  // -------------------gradient chart start----------------
  const gradient = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0, "#77a5fc");
    gradientSegment.addColorStop(0.8, "#77a5fc");
    return gradientSegment;
  };

  const fillGradient = (ctx, chartArea) => {
    const gradientSegment = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradientSegment.addColorStop(0.1, "#77a5fc29");
    gradientSegment.addColorStop(1, "#ffffff");
    return gradientSegment;
  };
  // -------------------gradient chart end----------------
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
        data: [65, 69, 68, 68, 65, 66, 65, 62, 67, 67, 46, 82],
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
        pointBorderWidth: false,
        pointRadius: false,
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
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  // ----------------line chart red end-------------------
  // ------------line chart end----------------

  return (
    <>
      {/*--------------- container left start --------------- */}
      <Stack
        className="container-page"
        flexWrap={"wrap"}
        flexDirection={"row"}
        width={"100%"}
      >
        <Stack
          className="container-left"
          position={"relative"}
          flexWrap={"nowrap"}
          width={"65%"}
        >
          <Box padding={4} width={"100%"} height={20}>
            <Typography
              sx={{ paddingLeft: { sm: "80px", md: "60px", xs: "80px" } }}
              fontSize={22}
            >
              Product Analytics
            </Typography>
          </Box>
          <Box
            component={"div"}
            className="box-btn"
            my={1}
            position={"relative"}
            margin={4}
            width={"100%"}
            height={50}
          >
            <button className="btn-1">Product</button>
            <button className="btn-2">Customer</button>
          </Box>

          <Stack className="scroll">
            <Stack
              className="container-chart-blue-red"
              flexWrap={"nowrap"}
              gap={4}
              m={"3%"}
              flexDirection={"row"}
              width={"100%"}
            >
              {/* chart blue start------------------ */}
              <Box
                component={"div"}
                className="box-blue-chart"
                borderRadius={1}
                position={"relative"}
                overflow={"hidden"}
                height={"100%"}
                bgcolor={"white"}
                width={"50%"}
              >
                <Typography
                  color={"#a9a9a9df"}
                  fontSize={"14px"}
                  position={"absolute"}
                  left={"25%"}
                  top={"15%"}
                >
                  Total Product
                </Typography>
                <Typography
                  fontSize={22}
                  position={"absolute"}
                  left={"25%"}
                  top={"25%"}
                >
                  5,00,874
                </Typography>
                <Typography
                  color={"#2B9943"}
                  fontSize={"12px"}
                  position={"absolute"}
                  right={"10%"}
                  top={"20%"}
                >
                  +1400 New Added
                </Typography>
                <Box
                  top={"2vw"}
                  left={"10%"}
                  borderRadius={10}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"50px"}
                  height={"50px"}
                  bgcolor={"#f7faff"}
                  position={"absolute"}
                >
                  <Inventory2Icon sx={{ color: "#5b93ff" }} />
                </Box>
                <Box
                  height={"100%"}
                  marginTop={"3.9vw"}
                  overflow={"hidden"}
                  width={"100%"}
                >
                  {/* Chart------------- */}
                  <Line
                    className="chart-blue"
                    height={"1.1vw"}
                    width={"3vw"}
                    options={options}
                    data={data}
                  />
                </Box>
              </Box>

              {/* chart blue end--------------- */}
              {/* chart yellow start------------------- */}
              <Box
                component={"div"}
                className="box-yellow-chart"
                borderRadius={1}
                position={"relative"}
                overflow={"hidden"}
                height={"100%"}
                bgcolor={"white"}
                width={"50%"}
              >
                <Typography
                  color={"#a9a9a9df"}
                  fontSize={"14px"}
                  position={"absolute"}
                  left={"25%"}
                  top={"15%"}
                >
                  Total Sales
                </Typography>
                <Typography
                  fontSize={22}
                  position={"absolute"}
                  left={"25%"}
                  top={"25%"}
                >
                  2,34,888
                </Typography>
                <Typography
                  color={"#2B9943"}
                  fontSize={"12px"}
                  position={"absolute"}
                  right={"10%"}
                  top={"20%"}
                >
                  +1000 Sale Today
                </Typography>
                <Box
                  top={"2vw"}
                  left={"10%"}
                  borderRadius={10}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"50px"}
                  height={"50px"}
                  bgcolor={"#fffbf0"}
                  position={"absolute"}
                >
                  <ShoppingCartIcon sx={{ color: "#ffc42e" }} />
                </Box>
                <Box
                  marginTop={"3.9vw"}
                  height={"100%"}
                  overflow={"hidden"}
                  width={"100%"}
                >
                  {/* Chart------------- */}
                  <Line
                    className="chart-yellow"
                    height={"1.1vw"}
                    width={"3vw"}
                    options={options2}
                    data={data2}
                  />
                </Box>
              </Box>
              {/* chart yellow end --------------------- */}
            </Stack>
          </Stack>
          {/* table start-------------------- */}
          <Box
            component={"div"}
            className="table-box"
            borderRadius={1}
            bgcolor={"white"}
            display={"flex"}
            width={"100%"}
            height={"100%"}
            margin={3.2}
            flexDirection={"column"}
          >
            <Box
              margin={3}
              paddingLeft={3}
              display={"block"}
              width={"100%"}
              height={"24px"}
            >
              <Typography>Recent Orders</Typography>
            </Box>
            <Box height={"100%"} width={"100%"}>
              <TableContainer className="table-container" component={Paper}>
                <Table className="table" />
                <TableHead className="table">
                  <TableRow className="table">
                    <TableCell>SN</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total Order</TableCell>
                    <TableCell>Total Sales</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {productData?.map((e, index) => {
                    return (
                      <TableRow
                        className="table"
                        sx={{
                          " td, th": {
                            border: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: "1px",
                          },
                          "&:nth-child(odd) td": { backgroundColor: "#fafafb" },
                        }}
                        key={index}
                      >
                        <TableCell align="left">{e.sn}</TableCell>
                        <TableCell
                          className="bk"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                          align="left"
                        >
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            width={200}
                            height={50}
                            className="container-img-table"
                            component={"div"}
                            alignItems={"center"}
                          >
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              marginRight={2}
                              width={50}
                              height={40}
                              borderRadius={"50%"}
                            >
                              <img
                                src={e?.image}
                                alt=""
                                style={{
                                  width: "30px",
                                  height: "30px",
                                }}
                              />
                            </Box>

                            <Typography width={200}>
                              {e?.productsName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <Box width={100}>${e.price}</Box>
                        </TableCell>
                        <TableCell align="left">
                          <Box width={200}>{e.totalOrder} Piece</Box>
                        </TableCell>
                        <TableCell align="left">
                          <Box width={100}>${e.totalAmount}</Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </TableContainer>
            </Box>
          </Box>
          {/* table end-------------------- */}
        </Stack>
        {/*--------------- container left end --------------- */}

        {/* ----------right container start------------ */}
        <Stack
          className="container-right"
          paddingBottom={3.3}
          paddingRight={"3.5%"}
          marginLeft={"5%"}
          height={"1102px"}
          flexDirection={"column"}
          width={"30%"}
          justifyContent={"end"}
          alignItems={"end"}
        >
          <Stack gap={4} width={"100%"} flexDirection={"column"}>
            <Box
              width={"40%"}
              height={"50px"}
              display={"flex"}
              justifyContent={"end"}
            >
              <button onClick={() => setDrawerOpen(true)} className="btn-3">
                + Add product
              </button>
            </Box>
            {/*---------------- chart bar start ---------------- */}
            <Box
              component={"div"}
              className="container-chart-bar"
              borderRadius={1}
              height={435}
              bgcolor={"white"}
              width={"100%"}
            >
              <Box margin={3} display={"block"} width={"100%"} height={10}>
                <Typography>Product Add by Month</Typography>
              </Box>
              <Box
                component={"div"}
                className="chartBox"
                p={3}
                width={"100%"}
                height={"80%"}
              >
                <Bar
                  width={400}
                  height={350}
                  className="myChart"
                  options={ChartOptions}
                  data={dataChart}
                />
              </Box>
            </Box>
            {/*---------------- chart bar end ---------------- */}
            {/*---------------- chart Doughnut start ---------------- */}
            <Box
              component={"div"}
              className="container-chart-doughnut"
              p={0}
              borderRadius={1}
              height={435}
              bgcolor={"white"}
              width={"100%"}
            >
              <Box margin={3} display={"block"} width={"100%"} height={10}>
                <Typography>Product Sales Analytics</Typography>
              </Box>
              <Box
                alignItems={"center"}
                justifyContent={"center"}
                width={"100%"}
                height={"85%"}
                display={"flex"}
              >
                <Doughnut
                  className="myChart"
                  data={chartDoughnut}
                  options={potionsDoughnut}
                />
              </Box>
            </Box>
            {/*---------------- chart Doughnut end ---------------- */}
          </Stack>
        </Stack>

        {/* ----------right container end------------ */}

        {/* ----------drawer start ----------------- */}
        <Drawer
          sx={{ padding: "30px 30px" }}
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
          anchor="right"
        >
          <Stack
            sx={{ overflowX: "hidden" }}
            spacing={2}
            padding={3}
            width={370}
            alignItems={"center"}
          >
            <Box
              onClick={() => setDrawerOpen(false)}
              sx={{ position: "absolute", right: "2vw" }}
            >
              <CloseIcon />
            </Box>
            <Typography>Add a New Product</Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bgcolor={"#fafafb"}
              borderRadius={"50%"}
              width={110}
              height={100}
            >
              <AddAPhotoIcon sx={{ color: "#4d4c68" }} />
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              width={"100%"}
              textAlign={"right"}
            >
              <Typography marginLeft={1.5}>Product Name</Typography>
            </Box>
            <input
              type="text"
              style={{
                border: "none",
                width: "300px",
                height: "50px",
                borderRadius: "3px",
                backgroundColor: "#fafafb",
              }}
            />
            <Box
              display={"flex"}
              alignItems={"start"}
              width={"100%"}
              textAlign={"right"}
            >
              <Typography marginLeft={1.5} marginTop={2} marginBottom={1}>
                Brand
              </Typography>
            </Box>
            <select
              onChange={handleChange}
              value={brand}
              style={{
                width: "300px",
                height: "50px",
                borderRadius: "3px",
                backgroundColor: "#fafafb",
                border: "none",
              }}
            >
              <option value={"AP"}>Apple</option>
              <option value={"SM"}>Samsung</option>
              <option value={"Xi"}>Xiaomi</option>
              <option value={"NK"}>Nike</option>
              <option value={"AD"}>Adidas</option>
            </select>
            <Stack width={300} flexDirection={"row"}>
              <Box
                marginTop={3}
                flexDirection={"column"}
                width={"200px"}
                alignItems={"start"}
                display={"flex"}
              >
                <Typography marginBottom={1}>Price</Typography>
                <input
                  type="text"
                  style={{
                    border: "none",
                    width: "100px",
                    height: "40px",
                    borderRadius: "3px",
                    backgroundColor: "#fafafb",
                  }}
                />
              </Box>
              <FormGroup sx={{ marginTop: "50px" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Negotiable"
                />
              </FormGroup>
            </Stack>
            <Box marginTop={3}>
              <Typography>Descriptions</Typography>
              <TextField
                sx={{
                  backgroundColor: "#fafafb",
                  border: "none !important",
                  outline: "none !important",
                }}
                variant="outlined"
                multiline
                rows={3}
                maxRows={10}
              />
            </Box>

            <button
              style={{
                width: "100%",
                height: "55px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="btn-3"
            >
              <FileDownloadIcon />
              Save product
            </button>
          </Stack>
        </Drawer>

        {/* ----------drawer end ----------------- */}
      </Stack>
    </>
  );
}
