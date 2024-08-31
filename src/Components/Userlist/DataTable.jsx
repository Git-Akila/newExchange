import React, { useEffect, useImperativeHandle, forwardRef } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//npm install mui-datatables @mui/material react-icons
//npm install @emotion/react @emotion/styled
//npm install @mui/icons-material




const HideScrollbarDiv = styled.div`
  overflow-x: hidden;
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`;

const DataTable = forwardRef(({ data}, ref) => {
  // const navigate = useNavigate();
  // const [tableData, setTableData] = React.useState(data);

  // useImperativeHandle(ref, () => ({
  //   updateData(newData) {
  //     console.log("Updating table data:", newData); 
  //     setTableData(newData);
  //   }
  // }));

  // useEffect(() => {
  //   console.log("Data updated:", data);  
  //   setTableData(data);
  // }, [data]);

  const columns = [
    { name: "S.No", options: { customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1 } },
    { name: "email", label: "Email", options: { customBodyRender: (value) => value } },
    { name: "username", label: "Username", options: { customBodyRender: (value) => value } },
    { name: "unique_id", label: "UID", options: { customBodyRender: (value) => value } },
    { name: "country", label: "Country", options: { customBodyRender: (value) => value } },
    { name: "createdAt", label: "Register On", options: { customBodyRender: (value) => value } },
    { name: "emailVerified", label: "Status", options: { customBodyRender: (value) => value } },
    { name: "Manage", label: "Manage", options: { customBodyRender: (value, tableMeta) => (
        <button><FaRegEdit /> {tableMeta.rowData[3]}</button>
      ) 
    }},
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    responsive: "vertical",
    rowsPerPageOptions: [5, 10, 20, 25],
   
  };

  const getMuiTheme = () => createTheme({
    typography: { fontWeightBold: "bold" },
    palette: { background: { paper: "#081A51", default: "#081A51" }, mode: "dark" },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: { padding: "10px 4px" },
          body: { padding: "7px 15px", color: "#e2e8f0" },  
        },
      },
    },
  });

  return (
    <div className="bg-whitesmoke py-16 min-h-screen grid place-items-center">
      <HideScrollbarDiv className="w-[95%] max-w-6xl">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"User List"}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </HideScrollbarDiv>
    </div>
  );
});

export default DataTable;
